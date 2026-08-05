import Database from 'better-sqlite3'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'
import { mkdirSync } from 'node:fs'

const __dirname = dirname(fileURLToPath(import.meta.url))
const dataDir = join(__dirname, '..', 'data')
mkdirSync(dataDir, { recursive: true })

export const dbPath = join(dataDir, 'xlectrical.db')

export const db = new Database(dbPath)
db.pragma('journal_mode = WAL')

export function initSchema(): void {
  db.exec(`
    CREATE TABLE IF NOT EXISTS sections (
      slug        TEXT PRIMARY KEY,
      ord         INTEGER NOT NULL,
      number      TEXT NOT NULL,
      category    TEXT NOT NULL,
      nec_ref     TEXT NOT NULL,
      title_en    TEXT NOT NULL,
      title_es    TEXT NOT NULL,
      subtitle_en TEXT NOT NULL,
      subtitle_es TEXT NOT NULL,
      data        TEXT NOT NULL
    );

    CREATE TABLE IF NOT EXISTS ref_tables (
      slug           TEXT PRIMARY KEY,
      nec_ref        TEXT NOT NULL,
      category       TEXT NOT NULL,
      title_en       TEXT NOT NULL,
      title_es       TEXT NOT NULL,
      description_en TEXT NOT NULL,
      description_es TEXT NOT NULL,
      data           TEXT NOT NULL
    );

    CREATE TABLE IF NOT EXISTS search_index (
      kind     TEXT NOT NULL,          -- 'section' | 'table'
      slug     TEXT NOT NULL,
      title_en TEXT NOT NULL,
      title_es TEXT NOT NULL,
      nec_ref  TEXT NOT NULL,
      category TEXT NOT NULL,
      body     TEXT NOT NULL,          -- concatenated searchable text (EN + ES)
      PRIMARY KEY (kind, slug)
    );
  `)
}

export function isSeeded(): boolean {
  const row = db.prepare('SELECT COUNT(*) AS n FROM sections').get() as { n: number }
  return row.n > 0
}
