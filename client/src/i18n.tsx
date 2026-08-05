import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'

export type Lang = 'en' | 'es'

interface LangState {
  lang: Lang
  setLang: (l: Lang) => void
  toggle: () => void
}

const LangContext = createContext<LangState | null>(null)

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(() => {
    const stored = typeof localStorage !== 'undefined' ? localStorage.getItem('xlectrical.lang') : null
    return stored === 'es' ? 'es' : 'en'
  })

  useEffect(() => {
    try {
      localStorage.setItem('xlectrical.lang', lang)
    } catch {
      /* ignore */
    }
    document.documentElement.lang = lang
  }, [lang])

  const toggle = () => setLang((l) => (l === 'en' ? 'es' : 'en'))

  return <LangContext.Provider value={{ lang, setLang, toggle }}>{children}</LangContext.Provider>
}

export function useLang(): LangState {
  const ctx = useContext(LangContext)
  if (!ctx) throw new Error('useLang must be used within a LangProvider')
  return ctx
}

// UI chrome strings (navigation, labels). Content itself is translated per-citation.
export const UI = {
  en: {
    tagline: 'NEC Field Reference',
    forFieldUse: 'For internal training use only',
    searchPlaceholder: 'Search tables, sections, articles…',
    navHome: 'Home',
    navGuide: 'Guide',
    navTables: 'Tables',
    guideSections: 'Guide Sections',
    referenceTables: 'Reference Tables',
    quickSearch: 'Quick search',
    howToUse: 'How to use',
    notes: 'Notes',
    filterRows: 'Filter rows…',
    loading: 'Loading…',
    error: 'Something went wrong.',
    noResults: 'No results found.',
    resultsFor: 'Results for',
    searchResults: 'Search results',
    openSection: 'Open section',
    openTable: 'Open table',
    backHome: 'Back to home',
    allTables: 'All reference tables',
    translateThis: 'Translate to Spanish',
    section: 'Section',
    table: 'Table',
    viewGuide: 'Browse the 9-section field guide',
    viewTables: 'Ampacity, grounding, conduit fill & more',
    heroLead:
      'The Xlectrical field guide, now interactive. Browse sections, look up tables, and translate any citation to Spanish with one tap.',
    disclaimer:
      'Field reference tool only. Always verify against the latest NEC (NFPA 70) edition adopted in your jurisdiction. Local amendments may apply. Does not replace proper training or licensed supervision.',
    rights: '© Xlectrical — Confidential & Proprietary',
    categories: {
      checklist: 'Checklist',
      table: 'Table',
      requirements: 'Requirements',
      reference: 'Reference',
    } as Record<string, string>,
  },
  es: {
    tagline: 'Referencia de campo NEC',
    forFieldUse: 'Solo para uso de capacitación interna',
    searchPlaceholder: 'Buscar tablas, secciones, artículos…',
    navHome: 'Inicio',
    navGuide: 'Guía',
    navTables: 'Tablas',
    guideSections: 'Secciones de la guía',
    referenceTables: 'Tablas de referencia',
    quickSearch: 'Búsqueda rápida',
    howToUse: 'Cómo usar',
    notes: 'Notas',
    filterRows: 'Filtrar filas…',
    loading: 'Cargando…',
    error: 'Algo salió mal.',
    noResults: 'No se encontraron resultados.',
    resultsFor: 'Resultados para',
    searchResults: 'Resultados de búsqueda',
    openSection: 'Abrir sección',
    openTable: 'Abrir tabla',
    backHome: 'Volver al inicio',
    allTables: 'Todas las tablas de referencia',
    translateThis: 'Traducir al inglés',
    section: 'Sección',
    table: 'Tabla',
    viewGuide: 'Explora la guía de campo de 9 secciones',
    viewTables: 'Ampacidad, tierra, llenado de conduit y más',
    heroLead:
      'La guía de campo de Xlectrical, ahora interactiva. Explora secciones, consulta tablas y traduce cualquier cita al español con un toque.',
    disclaimer:
      'Solo herramienta de referencia de campo. Verifica siempre con la última edición del NEC (NFPA 70) adoptada en tu jurisdicción. Pueden aplicar enmiendas locales. No reemplaza la capacitación ni la supervisión con licencia.',
    rights: '© Xlectrical — Confidencial y Propietario',
    categories: {
      checklist: 'Lista de control',
      table: 'Tabla',
      requirements: 'Requisitos',
      reference: 'Referencia',
    } as Record<string, string>,
  },
} as const

export function useUI() {
  const { lang } = useLang()
  return UI[lang]
}
