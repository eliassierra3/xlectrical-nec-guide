import { db, initSchema } from './db.js'
import { sections } from './data/sections.js'
import { tables } from './data/tables.js'
import type { Block, Section, RefTable } from './data/types.js'

// ---------------------------------------------------------------------------
// Build the searchable text blob for a record (English + Spanish combined),
// so a query in either language finds the right content.
// ---------------------------------------------------------------------------

function blockText(block: Block): string {
  switch (block.type) {
    case 'heading':
    case 'paragraph':
      return `${block.text.en} ${block.text.es}`
    case 'list':
      return block.items.map((i) => `${i.en} ${i.es}`).join(' ')
    case 'callout':
      return `${block.text.en} ${block.text.es}`
    case 'steps':
      return [
        block.title ? `${block.title.en} ${block.title.es}` : '',
        ...block.steps.map((s) => `${s.en} ${s.es}`),
      ].join(' ')
    case 'comparison':
      return [
        block.title ? `${block.title.en} ${block.title.es}` : '',
        ...block.columns.map((c) => `${c.en} ${c.es}`),
        ...block.rows.flatMap((r) => [`${r.label.en} ${r.label.es}`, ...r.cells.map((c) => `${c.en} ${c.es}`)]),
      ].join(' ')
    case 'table':
      return block.caption ? `${block.caption.en} ${block.caption.es}` : ''
  }
}

function sectionSearchText(s: Section): string {
  return [
    s.title.en,
    s.title.es,
    s.subtitle.en,
    s.subtitle.es,
    s.necRef,
    s.category,
    s.keywords.join(' '),
    ...s.blocks.map(blockText),
  ].join(' ')
}

function tableSearchText(t: RefTable): string {
  const rowText = t.rows
    .map((r) =>
      Object.values(r)
        .map((v) => (v && typeof v === 'object' ? `${v.en} ${v.es}` : String(v)))
        .join(' '),
    )
    .join(' ')
  const colText = t.columns.map((c) => `${c.label.en} ${c.label.es}`).join(' ')
  const noteText = (t.notes ?? []).map(blockText).join(' ')
  return [
    t.title.en,
    t.title.es,
    t.description.en,
    t.description.es,
    t.necRef,
    t.category,
    t.keywords.join(' '),
    colText,
    rowText,
    noteText,
  ].join(' ')
}

export function seed(): void {
  initSchema()

  const clear = db.transaction(() => {
    db.exec('DELETE FROM sections; DELETE FROM ref_tables; DELETE FROM search_index;')
  })
  clear()

  const insertSection = db.prepare(`
    INSERT INTO sections (slug, ord, number, category, nec_ref, title_en, title_es, subtitle_en, subtitle_es, data)
    VALUES (@slug, @ord, @number, @category, @nec_ref, @title_en, @title_es, @subtitle_en, @subtitle_es, @data)
  `)
  const insertTable = db.prepare(`
    INSERT INTO ref_tables (slug, nec_ref, category, title_en, title_es, description_en, description_es, data)
    VALUES (@slug, @nec_ref, @category, @title_en, @title_es, @description_en, @description_es, @data)
  `)
  const insertSearch = db.prepare(`
    INSERT INTO search_index (kind, slug, title_en, title_es, nec_ref, category, body)
    VALUES (@kind, @slug, @title_en, @title_es, @nec_ref, @category, @body)
  `)

  const run = db.transaction(() => {
    for (const s of sections) {
      insertSection.run({
        slug: s.slug,
        ord: s.order,
        number: s.number,
        category: s.category,
        nec_ref: s.necRef,
        title_en: s.title.en,
        title_es: s.title.es,
        subtitle_en: s.subtitle.en,
        subtitle_es: s.subtitle.es,
        data: JSON.stringify(s),
      })
      insertSearch.run({
        kind: 'section',
        slug: s.slug,
        title_en: s.title.en,
        title_es: s.title.es,
        nec_ref: s.necRef,
        category: s.category,
        body: sectionSearchText(s).toLowerCase(),
      })
    }

    for (const t of tables) {
      insertTable.run({
        slug: t.slug,
        nec_ref: t.necRef,
        category: t.category,
        title_en: t.title.en,
        title_es: t.title.es,
        description_en: t.description.en,
        description_es: t.description.es,
        data: JSON.stringify(t),
      })
      insertSearch.run({
        kind: 'table',
        slug: t.slug,
        title_en: t.title.en,
        title_es: t.title.es,
        nec_ref: t.necRef,
        category: t.category,
        body: tableSearchText(t).toLowerCase(),
      })
    }
  })
  run()

  const sCount = (db.prepare('SELECT COUNT(*) AS n FROM sections').get() as { n: number }).n
  const tCount = (db.prepare('SELECT COUNT(*) AS n FROM ref_tables').get() as { n: number }).n
  console.log(`[seed] Seeded ${sCount} sections and ${tCount} reference tables.`)
}

// Allow running directly: `tsx src/seed.ts`
if (import.meta.url === `file://${process.argv[1]}`) {
  seed()
}
