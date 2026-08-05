// Shared content types for the Xlectrical NEC Field Reference.
// All user-facing prose is bilingual: English is the primary language,
// Spanish is available on demand (per-block "Translate" toggle in the UI).

export interface Bilingual {
  en: string
  es: string
}

export type CalloutKind = 'tip' | 'note' | 'warning' | 'important'

export type Block =
  | { type: 'heading'; text: Bilingual }
  | { type: 'paragraph'; text: Bilingual }
  | { type: 'list'; ordered?: boolean; items: Bilingual[] }
  | { type: 'callout'; kind: CalloutKind; text: Bilingual }
  | { type: 'steps'; title?: Bilingual; steps: Bilingual[] }
  | {
      type: 'comparison'
      title?: Bilingual
      columns: Bilingual[]
      rows: { label: Bilingual; cells: Bilingual[] }[]
    }
  | { type: 'table'; tableSlug: string; caption?: Bilingual }
  | { type: 'diagram'; diagram: string; caption?: Bilingual }

export type SectionCategory = 'checklist' | 'table' | 'requirements' | 'reference'

export type Audience = 'residential' | 'commercial'

export interface Section {
  slug: string
  order: number
  number: string
  category: SectionCategory
  necRef: string
  title: Bilingual
  subtitle: Bilingual
  /** Which service types this applies to. Both = ['residential','commercial']. */
  applies: Audience[]
  keywords: string[]
  blocks: Block[]
}

export interface TableColumn {
  key: string
  label: Bilingual
  align?: 'left' | 'center' | 'right'
}

export interface RefTable {
  slug: string
  necRef: string
  category: string
  applies: Audience[]
  title: Bilingual
  description: Bilingual
  columns: TableColumn[]
  /** Cell values: a plain string/number (codes, digits) or a Bilingual object for translatable text. */
  rows: Record<string, string | number | Bilingual>[]
  /** Zero-based row indexes to highlight as the most common field configurations (shown in green). */
  highlightRows?: number[]
  notes?: Block[]
  keywords: string[]
}
