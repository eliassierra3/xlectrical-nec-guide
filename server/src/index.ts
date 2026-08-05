import express from 'express'
import cors from 'cors'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'
import { existsSync } from 'node:fs'
import { db, initSchema, isSeeded } from './db.js'
import { seed } from './seed.js'

const __dirname = dirname(fileURLToPath(import.meta.url))
const PORT = Number(process.env.PORT) || 3001

// Ensure the database schema exists and is populated before serving.
initSchema()
if (!isSeeded()) {
  console.log('[db] Empty database — seeding…')
  seed()
}

const app = express()
app.use(cors())
app.use(express.json())

// ---- Types for DB rows -----------------------------------------------------
interface SectionRow {
  slug: string
  ord: number
  number: string
  category: string
  nec_ref: string
  title_en: string
  title_es: string
  subtitle_en: string
  subtitle_es: string
  data: string
}
interface TableRow {
  slug: string
  nec_ref: string
  category: string
  title_en: string
  title_es: string
  description_en: string
  description_es: string
  data: string
}
interface SearchRow {
  kind: string
  slug: string
  title_en: string
  title_es: string
  nec_ref: string
  category: string
  body: string
}

const bilingual = (en: string, es: string) => ({ en, es })

// ---- Routes ----------------------------------------------------------------

app.get('/api/health', (_req, res) => {
  res.json({ ok: true, service: 'xlectrical-nec-api' })
})

// Section list (metadata only), ordered
app.get('/api/sections', (_req, res) => {
  const rows = db
    .prepare('SELECT slug, ord, number, category, nec_ref, title_en, title_es, subtitle_en, subtitle_es FROM sections ORDER BY ord')
    .all() as Omit<SectionRow, 'data'>[]
  res.json(
    rows.map((r) => ({
      slug: r.slug,
      order: r.ord,
      number: r.number,
      category: r.category,
      necRef: r.nec_ref,
      title: bilingual(r.title_en, r.title_es),
      subtitle: bilingual(r.subtitle_en, r.subtitle_es),
    })),
  )
})

// Full section by slug
app.get('/api/sections/:slug', (req, res) => {
  const row = db.prepare('SELECT data FROM sections WHERE slug = ?').get(req.params.slug) as
    | { data: string }
    | undefined
  if (!row) return res.status(404).json({ error: 'Section not found' })
  res.json(JSON.parse(row.data))
})

// Table list (metadata only)
app.get('/api/tables', (_req, res) => {
  const rows = db
    .prepare('SELECT slug, nec_ref, category, title_en, title_es, description_en, description_es FROM ref_tables ORDER BY category, slug')
    .all() as Omit<TableRow, 'data'>[]
  res.json(
    rows.map((r) => ({
      slug: r.slug,
      necRef: r.nec_ref,
      category: r.category,
      title: bilingual(r.title_en, r.title_es),
      description: bilingual(r.description_en, r.description_es),
    })),
  )
})

// Full table by slug
app.get('/api/tables/:slug', (req, res) => {
  const row = db.prepare('SELECT data FROM ref_tables WHERE slug = ?').get(req.params.slug) as
    | { data: string }
    | undefined
  if (!row) return res.status(404).json({ error: 'Table not found' })
  res.json(JSON.parse(row.data))
})

// Search across sections and tables (EN + ES)
app.get('/api/search', (req, res) => {
  const q = String(req.query.q ?? '').trim().toLowerCase()
  if (!q) return res.json({ query: '', results: [] })

  const terms = q.split(/\s+/).filter(Boolean).slice(0, 8)
  const where = terms.map(() => 'body LIKE ?').join(' AND ')
  const params = terms.map((t) => `%${t}%`)
  const rows = db.prepare(`SELECT * FROM search_index WHERE ${where}`).all(...params) as SearchRow[]

  const scored = rows.map((r) => {
    const title = `${r.title_en} ${r.title_es}`.toLowerCase()
    const ref = r.nec_ref.toLowerCase()
    let score = 0
    if (title.includes(q) || ref.includes(q)) score += 100
    for (const t of terms) {
      if (ref.includes(t)) score += 12
      if (title.includes(t)) score += 8
      else score += 1
    }
    return {
      kind: r.kind,
      slug: r.slug,
      title: bilingual(r.title_en, r.title_es),
      necRef: r.nec_ref,
      category: r.category,
      score,
    }
  })

  scored.sort((a, b) => b.score - a.score)
  res.json({ query: q, results: scored.slice(0, 30) })
})

// ---- Optional: serve the built client (production) -------------------------
const clientDist = join(__dirname, '..', '..', 'client', 'dist')
if (existsSync(clientDist)) {
  app.use(express.static(clientDist))
  app.get(/^\/(?!api\/).*/, (_req, res) => {
    res.sendFile(join(clientDist, 'index.html'))
  })
}

app.listen(PORT, () => {
  console.log(`\n  ⚡ Xlectrical NEC API running on http://localhost:${PORT}`)
  console.log(`     Endpoints: /api/sections  /api/tables  /api/search?q=\n`)
})
