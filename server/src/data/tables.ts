import type { RefTable } from './types.js'

// ---------------------------------------------------------------------------
// Reference tables. Numeric values are factual data (not copyrightable).
// Prose (titles, descriptions, notes) is bilingual EN/ES.
// Always verify against the latest adopted NEC edition in your jurisdiction.
// ---------------------------------------------------------------------------

export const tables: RefTable[] = [
  {
    slug: 'nec-310-12',
    applies: ['residential'],
    necRef: 'NEC 310.12',
    category: 'Conductor Sizing',
    title: {
      en: 'Table 310.12 — Single-Phase Dwelling Services & Feeders',
      es: 'Tabla 310.12 — Acometidas y alimentadores monofásicos de viviendas',
    },
    description: {
      en: 'Minimum conductor size for single-phase dwelling-unit services and feeders, by ampere rating. Applies only when no adjustment or correction factors are required — otherwise use Table 310.16.',
      es: 'Calibre mínimo del conductor para acometidas y alimentadores monofásicos de viviendas, según el amperaje. Aplica solo cuando no se requieren factores de ajuste o corrección — de lo contrario use la Tabla 310.16.',
    },
    columns: [
      { key: 'rating', label: { en: 'Rating (A)', es: 'Amperaje (A)' }, align: 'center' },
      { key: 'cu', label: { en: 'Copper (AWG/kcmil)', es: 'Cobre (AWG/kcmil)' }, align: 'center' },
      { key: 'al', label: { en: 'Aluminum / Cu-Clad Al', es: 'Aluminio / Al rec. cobre' }, align: 'center' },
    ],
    rows: [
      { rating: 100, cu: '4', al: '2' },
      { rating: 110, cu: '3', al: '1' },
      { rating: 125, cu: '2', al: '1/0' },
      { rating: 150, cu: '1', al: '2/0' },
      { rating: 175, cu: '1/0', al: '3/0' },
      { rating: 200, cu: '2/0', al: '4/0' },
      { rating: 225, cu: '3/0', al: '250' },
      { rating: 250, cu: '4/0', al: '300' },
      { rating: 300, cu: '250', al: '350' },
      { rating: 350, cu: '350', al: '500' },
      { rating: 400, cu: '400', al: '600' },
    ],
    highlightRows: [0, 5],
    notes: [
      {
        type: 'callout',
        kind: 'tip',
        text: {
          en: 'Most common residential services are 100A and 200A (highlighted). Upgrading 100A → 200A: copper goes #4 → 2/0, aluminum #2 → 4/0.',
          es: 'Las acometidas residenciales más comunes son 100A y 200A (resaltadas). Al pasar de 100A a 200A: el cobre va de #4 a 2/0, el aluminio de #2 a 4/0.',
        },
      },
      {
        type: 'callout',
        kind: 'warning',
        text: {
          en: 'This table applies ONLY when no adjustment or correction factors are required. If derating is needed, use NEC Table 310.16 instead.',
          es: 'Esta tabla aplica SOLO cuando no se requieren factores de ajuste o corrección. Si se necesita reducir capacidad (derating), use la Tabla 310.16 del NEC.',
        },
      },
    ],
    keywords: ['310.12', 'service', 'feeder', 'dwelling', 'conductor sizing', 'copper', 'aluminum', 'acometida', 'alimentador'],
  },
  {
    slug: 'nec-250-66',
    applies: ['residential', 'commercial'],
    necRef: 'NEC 250.66',
    category: 'Grounding',
    title: {
      en: 'Table 250.66 — Grounding Electrode Conductor (GEC)',
      es: 'Tabla 250.66 — Conductor del electrodo de puesta a tierra (GEC)',
    },
    description: {
      en: 'Minimum size of the grounding electrode conductor based on the size of the largest ungrounded (hot) service-entrance conductor. Left = what is installed; Right = minimum GEC required.',
      es: 'Calibre mínimo del conductor del electrodo de tierra según el conductor de acometida no puesto a tierra (vivo) más grande. Izquierda = lo instalado; Derecha = GEC mínimo requerido.',
    },
    columns: [
      { key: 'cuCond', label: { en: 'Largest Ungrounded — Cu', es: 'Conductor más grande — Cu' }, align: 'center' },
      { key: 'alCond', label: { en: 'Largest Ungrounded — Al', es: 'Conductor más grande — Al' }, align: 'center' },
      { key: 'gecCu', label: { en: 'GEC — Copper', es: 'GEC — Cobre' }, align: 'center' },
      { key: 'gecAl', label: { en: 'GEC — Al', es: 'GEC — Al' }, align: 'center' },
    ],
    rows: [
      { cuCond: { en: '2 or smaller', es: '2 o menor' }, alCond: { en: '1/0 or smaller', es: '1/0 o menor' }, gecCu: '8', gecAl: '6' },
      { cuCond: { en: '1 or 1/0', es: '1 o 1/0' }, alCond: { en: '2/0 or 3/0', es: '2/0 o 3/0' }, gecCu: '6', gecAl: '4' },
      { cuCond: { en: '2/0 or 3/0', es: '2/0 o 3/0' }, alCond: { en: '4/0 or 250', es: '4/0 o 250' }, gecCu: '4', gecAl: '2' },
      { cuCond: { en: 'Over 3/0 – 350', es: 'Más de 3/0 – 350' }, alCond: { en: 'Over 250 – 500', es: 'Más de 250 – 500' }, gecCu: '2', gecAl: '1/0' },
      { cuCond: { en: 'Over 350 – 600', es: 'Más de 350 – 600' }, alCond: { en: 'Over 500 – 900', es: 'Más de 500 – 900' }, gecCu: '1/0', gecAl: '3/0' },
      { cuCond: { en: 'Over 600 – 1100', es: 'Más de 600 – 1100' }, alCond: { en: 'Over 900 – 1750', es: 'Más de 900 – 1750' }, gecCu: '2/0', gecAl: '4/0' },
      { cuCond: { en: 'Over 1100', es: 'Más de 1100' }, alCond: { en: 'Over 1750', es: 'Más de 1750' }, gecCu: '3/0', gecAl: '250' },
    ],
    notes: [
      {
        type: 'callout',
        kind: 'note',
        text: {
          en: 'Common examples: 100A Cu (#4) → #8 Cu GEC · 200A Cu (2/0) → #4 Cu GEC · 200A Al (4/0) → #4 Cu GEC · 400A Cu (400 kcmil) → 1/0 Cu GEC.',
          es: 'Ejemplos comunes: 100A Cu (#4) → GEC #8 Cu · 200A Cu (2/0) → GEC #4 Cu · 200A Al (4/0) → GEC #4 Cu · 400A Cu (400 kcmil) → GEC 1/0 Cu.',
        },
      },
    ],
    keywords: ['250.66', 'grounding', 'gec', 'electrode', 'tierra', 'puesta a tierra', 'grounding electrode conductor'],
  },
  {
    slug: 'nec-110-26',
    applies: ['residential', 'commercial'],
    necRef: 'NEC Table 110.26(A)(1)',
    category: 'Safety',
    title: {
      en: 'Table 110.26(A)(1) — Working Space Depth',
      es: 'Tabla 110.26(A)(1) — Profundidad del espacio de trabajo',
    },
    description: {
      en: 'Minimum clear distance in front of electrical equipment, by nominal voltage to ground and condition. 120/240 V and 208Y/120 V fall in the 0–150 V row; 480Y/277 V falls in the 151–600 V row.',
      es: 'Distancia libre mínima al frente del equipo eléctrico, según voltaje nominal a tierra y condición. 120/240 V y 208Y/120 V van en la fila 0–150 V; 480Y/277 V va en la fila 151–600 V.',
    },
    columns: [
      { key: 'v', label: { en: 'Voltage to ground', es: 'Voltaje a tierra' }, align: 'center' },
      { key: 'c1', label: { en: 'Condition 1', es: 'Condición 1' }, align: 'center' },
      { key: 'c2', label: { en: 'Condition 2', es: 'Condición 2' }, align: 'center' },
      { key: 'c3', label: { en: 'Condition 3', es: 'Condición 3' }, align: 'center' },
    ],
    rows: [
      { v: { en: '0–150 V', es: '0–150 V' }, c1: '3 ft', c2: '3 ft', c3: '3 ft' },
      { v: { en: '151–600 V', es: '151–600 V' }, c1: '3 ft', c2: '3½ ft', c3: '4 ft' },
      { v: { en: '601–1000 V', es: '601–1000 V' }, c1: '3 ft', c2: '4 ft', c3: '5 ft' },
    ],
    notes: [
      {
        type: 'callout',
        kind: 'note',
        text: {
          en: 'Conditions describe what is across from the live parts: (1) nothing grounded or live opposite (or guarded); (2) a grounded surface opposite — concrete, brick, or tile walls count as grounded; (3) live parts on both sides. A panel on a normal wall is usually Condition 1 or 2.',
          es: 'Las condiciones describen qué hay enfrente de las partes vivas: (1) nada puesto a tierra ni vivo enfrente (o protegido); (2) una superficie puesta a tierra enfrente — paredes de concreto, ladrillo o teja cuentan como tierra; (3) partes vivas en ambos lados. Un panel en una pared normal suele ser Condición 1 o 2.',
        },
      },
    ],
    keywords: ['110.26', 'working space', 'clearance', 'depth', 'espacio de trabajo', 'despeje', 'panel', 'condition', 'condición'],
  },
  {
    slug: 'nec-310-16',
    applies: ['residential', 'commercial'],
    necRef: 'NEC 310.16',
    category: 'Ampacity',
    title: {
      en: 'Table 310.16 — Conductor Ampacity (30°C ambient, ≤3 CCC)',
      es: 'Tabla 310.16 — Ampacidad de conductores (ambiente 30°C, ≤3 conductores)',
    },
    description: {
      en: 'Allowable ampacities of insulated conductors rated up to 2000V, in raceway/cable/earth, based on 30°C (86°F) ambient and not more than three current-carrying conductors. Use the temperature column matching the conductor insulation AND the lowest-rated termination.',
      es: 'Ampacidades permitidas de conductores aislados hasta 2000V, en canalización/cable/tierra, con ambiente de 30°C (86°F) y no más de tres conductores portadores. Use la columna de temperatura del aislamiento Y de la terminación de menor rango.',
    },
    columns: [
      { key: 'size', label: { en: 'Size (AWG/kcmil)', es: 'Calibre' }, align: 'center' },
      { key: 'cu60', label: { en: 'Cu 60°C', es: 'Cu 60°C' }, align: 'center' },
      { key: 'cu75', label: { en: 'Cu 75°C', es: 'Cu 75°C' }, align: 'center' },
      { key: 'cu90', label: { en: 'Cu 90°C', es: 'Cu 90°C' }, align: 'center' },
      { key: 'al60', label: { en: 'Al 60°C', es: 'Al 60°C' }, align: 'center' },
      { key: 'al75', label: { en: 'Al 75°C', es: 'Al 75°C' }, align: 'center' },
      { key: 'al90', label: { en: 'Al 90°C', es: 'Al 90°C' }, align: 'center' },
    ],
    rows: [
      { size: '14', cu60: 15, cu75: 20, cu90: 25, al60: '—', al75: '—', al90: '—' },
      { size: '12', cu60: 20, cu75: 25, cu90: 30, al60: 15, al75: 20, al90: 25 },
      { size: '10', cu60: 30, cu75: 35, cu90: 40, al60: 25, al75: 30, al90: 35 },
      { size: '8', cu60: 40, cu75: 50, cu90: 55, al60: 35, al75: 40, al90: 45 },
      { size: '6', cu60: 55, cu75: 65, cu90: 75, al60: 40, al75: 50, al90: 55 },
      { size: '4', cu60: 70, cu75: 85, cu90: 95, al60: 55, al75: 65, al90: 75 },
      { size: '3', cu60: 85, cu75: 100, cu90: 115, al60: 65, al75: 75, al90: 85 },
      { size: '2', cu60: 95, cu75: 115, cu90: 130, al60: 75, al75: 90, al90: 100 },
      { size: '1', cu60: 110, cu75: 130, cu90: 145, al60: 85, al75: 100, al90: 115 },
      { size: '1/0', cu60: 125, cu75: 150, cu90: 170, al60: 100, al75: 120, al90: 135 },
      { size: '2/0', cu60: 145, cu75: 175, cu90: 195, al60: 115, al75: 135, al90: 150 },
      { size: '3/0', cu60: 165, cu75: 200, cu90: 225, al60: 130, al75: 155, al90: 175 },
      { size: '4/0', cu60: 195, cu75: 230, cu90: 260, al60: 150, al75: 180, al90: 205 },
      { size: '250', cu60: 215, cu75: 255, cu90: 290, al60: 170, al75: 205, al90: 230 },
      { size: '300', cu60: 240, cu75: 285, cu90: 320, al60: 195, al75: 230, al90: 260 },
      { size: '350', cu60: 260, cu75: 310, cu90: 350, al60: 210, al75: 250, al90: 280 },
      { size: '400', cu60: 280, cu75: 335, cu90: 380, al60: 225, al75: 270, al90: 305 },
      { size: '500', cu60: 320, cu75: 380, cu90: 430, al60: 260, al75: 310, al90: 350 },
      { size: '600', cu60: 350, cu75: 420, cu90: 475, al60: 285, al75: 340, al90: 385 },
      { size: '750', cu60: 400, cu75: 475, cu90: 535, al60: 320, al75: 385, al90: 435 },
      { size: '1000', cu60: 455, cu75: 545, cu90: 615, al60: 375, al75: 445, al90: 500 },
    ],
    highlightRows: [],
    notes: [
      {
        type: 'callout',
        kind: 'important',
        text: {
          en: 'Terminations: most equipment ≤100A is rated 60°C or 75°C; equipment >100A is typically 75°C. Even with 90°C wire, size to the termination column (usually 75°C). The 90°C column is used only for applying correction/adjustment factors.',
          es: 'Terminaciones: la mayoría del equipo ≤100A es 60°C o 75°C; el equipo >100A suele ser 75°C. Aun con cable de 90°C, dimensione con la columna de la terminación (usualmente 75°C). La columna de 90°C solo se usa para aplicar factores de corrección/ajuste.',
        },
      },
    ],
    keywords: ['310.16', 'ampacity', 'ampacidad', '60c', '75c', '90c', 'copper', 'aluminum', 'conductor', 'derating'],
  },
  {
    slug: 'nec-310-15-temp-correction',
    applies: ['residential', 'commercial'],
    necRef: 'NEC 310.15(B)(1)',
    category: 'Ampacity',
    title: {
      en: 'Table 310.15(B)(1) — Ambient Temperature Correction (base 30°C)',
      es: 'Tabla 310.15(B)(1) — Corrección por temperatura ambiente (base 30°C)',
    },
    description: {
      en: 'Multiply the Table 310.16 ampacity by these factors when the ambient temperature is other than 30°C (86°F). Choose the column matching the conductor temperature rating.',
      es: 'Multiplique la ampacidad de la Tabla 310.16 por estos factores cuando la temperatura ambiente sea distinta de 30°C (86°F). Elija la columna del rango de temperatura del conductor.',
    },
    columns: [
      { key: 'ambient', label: { en: 'Ambient °C', es: 'Ambiente °C' }, align: 'center' },
      { key: 'c60', label: { en: '60°C', es: '60°C' }, align: 'center' },
      { key: 'c75', label: { en: '75°C', es: '75°C' }, align: 'center' },
      { key: 'c90', label: { en: '90°C', es: '90°C' }, align: 'center' },
    ],
    rows: [
      { ambient: { en: '10 or less', es: '10 o menos' }, c60: 1.29, c75: 1.2, c90: 1.15 },
      { ambient: '11–15', c60: 1.22, c75: 1.15, c90: 1.12 },
      { ambient: '16–20', c60: 1.15, c75: 1.11, c90: 1.08 },
      { ambient: '21–25', c60: 1.08, c75: 1.05, c90: 1.04 },
      { ambient: '26–30', c60: 1.0, c75: 1.0, c90: 1.0 },
      { ambient: '31–35', c60: 0.91, c75: 0.94, c90: 0.96 },
      { ambient: '36–40', c60: 0.82, c75: 0.88, c90: 0.91 },
      { ambient: '41–45', c60: 0.71, c75: 0.82, c90: 0.87 },
      { ambient: '46–50', c60: 0.58, c75: 0.75, c90: 0.82 },
      { ambient: '51–55', c60: 0.41, c75: 0.67, c90: 0.76 },
      { ambient: '56–60', c60: '—', c75: 0.58, c90: 0.71 },
      { ambient: '61–65', c60: '—', c75: 0.47, c90: 0.65 },
      { ambient: '66–70', c60: '—', c75: 0.33, c90: 0.58 },
      { ambient: '71–75', c60: '—', c75: '—', c90: 0.5 },
      { ambient: '76–80', c60: '—', c75: '—', c90: 0.41 },
    ],
    highlightRows: [4],
    keywords: ['310.15', 'temperature correction', 'ambient', 'derating', 'corrección', 'temperatura'],
  },
  {
    slug: 'nec-310-15-adjustment',
    applies: ['residential', 'commercial'],
    necRef: 'NEC 310.15(C)(1)',
    category: 'Ampacity',
    title: {
      en: 'Table 310.15(C)(1) — Adjustment for >3 Current-Carrying Conductors',
      es: 'Tabla 310.15(C)(1) — Ajuste por más de 3 conductores portadores',
    },
    description: {
      en: 'When more than three current-carrying conductors share a raceway or cable, multiply the ampacity by these adjustment factors.',
      es: 'Cuando más de tres conductores portadores de corriente comparten una canalización o cable, multiplique la ampacidad por estos factores de ajuste.',
    },
    columns: [
      { key: 'count', label: { en: 'Conductors', es: 'Conductores' }, align: 'center' },
      { key: 'factor', label: { en: 'Adjustment', es: 'Ajuste' }, align: 'center' },
    ],
    rows: [
      { count: '4–6', factor: '80%' },
      { count: '7–9', factor: '70%' },
      { count: '10–20', factor: '50%' },
      { count: '21–30', factor: '45%' },
      { count: '31–40', factor: '40%' },
      { count: { en: '41 and above', es: '41 y más' }, factor: '35%' },
    ],
    keywords: ['310.15', 'adjustment', 'bundling', 'ccc', 'ajuste', 'agrupamiento', 'derating'],
  },
  {
    slug: 'nec-250-122',
    applies: ['residential', 'commercial'],
    necRef: 'NEC 250.122',
    category: 'Grounding',
    title: {
      en: 'Table 250.122 — Equipment Grounding Conductor (EGC)',
      es: 'Tabla 250.122 — Conductor de puesta a tierra de equipos (EGC)',
    },
    description: {
      en: 'Minimum size of equipment grounding conductors, sized by the rating of the overcurrent device (breaker/fuse) ahead of the circuit. Upsize proportionally if ungrounded conductors are increased for voltage drop.',
      es: 'Calibre mínimo del conductor de tierra de equipos, dimensionado por el amperaje del dispositivo de sobrecorriente (breaker/fusible) del circuito. Auméntelo proporcionalmente si los conductores se agrandan por caída de voltaje.',
    },
    columns: [
      { key: 'ocpd', label: { en: 'OCPD Rating (A)', es: 'Amperaje OCPD (A)' }, align: 'center' },
      { key: 'cu', label: { en: 'Copper (AWG/kcmil)', es: 'Cobre (AWG/kcmil)' }, align: 'center' },
      { key: 'al', label: { en: 'Al / Cu-Clad Al', es: 'Al / Al rec. cobre' }, align: 'center' },
    ],
    rows: [
      { ocpd: 15, cu: '14', al: '12' },
      { ocpd: 20, cu: '12', al: '10' },
      { ocpd: 60, cu: '10', al: '8' },
      { ocpd: 100, cu: '8', al: '6' },
      { ocpd: 200, cu: '6', al: '4' },
      { ocpd: 300, cu: '4', al: '2' },
      { ocpd: 400, cu: '3', al: '1' },
      { ocpd: 500, cu: '2', al: '1/0' },
      { ocpd: 600, cu: '1', al: '2/0' },
      { ocpd: 800, cu: '1/0', al: '3/0' },
      { ocpd: 1000, cu: '2/0', al: '4/0' },
      { ocpd: 1200, cu: '3/0', al: '250' },
      { ocpd: 1600, cu: '4/0', al: '350' },
      { ocpd: 2000, cu: '250', al: '400' },
    ],
    notes: [
      {
        type: 'callout',
        kind: 'note',
        text: {
          en: 'The EGC (250.122) is sized by the breaker; the GEC (250.66) is sized by the service conductor. Do not confuse the two.',
          es: 'El EGC (250.122) se dimensiona por el breaker; el GEC (250.66) por el conductor de acometida. No los confunda.',
        },
      },
    ],
    keywords: ['250.122', 'egc', 'equipment grounding', 'ground wire', 'breaker', 'tierra de equipos'],
  },
  {
    slug: 'ev-charger-sizing',
    applies: ['residential', 'commercial'],
    necRef: 'NEC 625.41 / 625.42',
    category: 'EV Charging',
    title: {
      en: 'EV Charger — Conductor & Breaker Sizing',
      es: 'Cargador de VE — Dimensionamiento de conductor y breaker',
    },
    description: {
      en: 'Minimum conductor, breaker and conduit for an EV charger by its continuous amperage. EV charging is a continuous load (NEC 625.41): the circuit must be rated at 125% of the charger current (the 80% rule).',
      es: 'Conductor, breaker y conduit mínimos para un cargador de VE según su amperaje continuo. La carga de VE es continua (NEC 625.41): el circuito debe ser al 125% de la corriente del cargador (regla del 80%).',
    },
    columns: [
      { key: 'amps', label: { en: 'Charger (A)', es: 'Cargador (A)' }, align: 'center' },
      { key: 'breaker', label: { en: 'Breaker (2-pole)', es: 'Breaker (2 polos)' }, align: 'center' },
      { key: 'cu', label: { en: 'Copper', es: 'Cobre' }, align: 'center' },
      { key: 'al', label: { en: 'Aluminum', es: 'Aluminio' }, align: 'center' },
      { key: 'conduit', label: { en: 'Min Conduit', es: 'Conduit mín.' }, align: 'center' },
      { key: 'range', label: { en: '~Range/hr', es: '~Alcance/h' }, align: 'center' },
    ],
    rows: [
      { amps: 16, breaker: '20A', cu: '#12', al: '#10', conduit: '1/2"', range: '~12 mi' },
      { amps: 24, breaker: '30A', cu: '#10', al: '#8', conduit: '1/2"', range: '~18 mi' },
      { amps: 32, breaker: '40A', cu: '#8', al: '#6', conduit: '3/4"', range: '~25 mi' },
      { amps: 40, breaker: '50A', cu: '#6', al: '#4', conduit: '3/4"', range: '~30 mi' },
      { amps: 48, breaker: '60A', cu: '#6*', al: '#4', conduit: '1"', range: '~37 mi' },
      { amps: 50, breaker: '60A', cu: '#6', al: '#4', conduit: '1"', range: '~37 mi' },
      { amps: 60, breaker: '80A', cu: '#4', al: '#2', conduit: '1"', range: '~44 mi' },
      { amps: 80, breaker: '100A', cu: '#3', al: '#1', conduit: '1-1/4"', range: '~58 mi' },
    ],
    highlightRows: [2, 3, 4],
    notes: [
      {
        type: 'callout',
        kind: 'note',
        text: {
          en: '* For a 48A charger, #6 Cu (THHN/THWN-2, 75°C column) is rated 65A — adequate for a 60A breaker. Always verify ampacity with Table 310.16.',
          es: '* Para un cargador de 48A, el #6 Cu (THHN/THWN-2, columna 75°C) tiene 65A — adecuado para un breaker de 60A. Siempre verifique la ampacidad con la Tabla 310.16.',
        },
      },
      {
        type: 'callout',
        kind: 'tip',
        text: {
          en: 'A 48A charger on a 60A breaker with #6 Cu is the most common full-speed Level 2 setup. For runs over 100 ft, upsize one conductor size for voltage drop.',
          es: 'Un cargador de 48A en breaker de 60A con #6 Cu es el montaje Nivel 2 a máxima velocidad más común. Para tramos de más de 100 ft, suba un calibre por caída de voltaje.',
        },
      },
    ],
    keywords: ['ev', 'ev charger', '625', 'evse', 'level 2', 'continuous load', 'cargador', 'vehículo eléctrico', 'nema 14-50'],
  },
  {
    slug: 'quick-ref-services',
    applies: ['residential'],
    necRef: 'Xlectrical Quick Reference',
    category: 'Quick Reference',
    title: {
      en: 'Common Residential Service Configurations',
      es: 'Configuraciones comunes de acometida residencial',
    },
    description: {
      en: 'The service sizes you will encounter most often in the field, with typical conductor, GEC and panel space counts.',
      es: 'Los tamaños de acometida que más encontrará en campo, con conductor típico, GEC y número de espacios de panel.',
    },
    columns: [
      { key: 'service', label: { en: 'Service', es: 'Acometida' }, align: 'center' },
      { key: 'cu', label: { en: 'Copper', es: 'Cobre' }, align: 'center' },
      { key: 'al', label: { en: 'Aluminum', es: 'Aluminio' }, align: 'center' },
      { key: 'gec', label: { en: 'GEC (Cu)', es: 'GEC (Cu)' }, align: 'center' },
      { key: 'panel', label: { en: 'Typical Panel', es: 'Panel típico' }, align: 'center' },
    ],
    rows: [
      { service: '100A', cu: '#4', al: '#2', gec: '#8', panel: { en: '20–24 spaces', es: '20–24 espacios' } },
      { service: '125A', cu: '#2', al: '1/0', gec: '#8', panel: { en: '24–30 spaces', es: '24–30 espacios' } },
      { service: '150A', cu: '#1', al: '2/0', gec: '#6', panel: { en: '30–40 spaces', es: '30–40 espacios' } },
      { service: '200A', cu: '2/0', al: '4/0', gec: '#4', panel: { en: '40–42 spaces', es: '40–42 espacios' } },
      { service: '225A', cu: '3/0', al: '250 kcmil', gec: '#4', panel: { en: '42+ spaces', es: '42+ espacios' } },
      { service: '400A', cu: '400 kcmil', al: '600 kcmil', gec: '1/0', panel: { en: 'Dual panel / CT', es: 'Panel doble / CT' } },
    ],
    highlightRows: [0, 3],
    notes: [
      {
        type: 'callout',
        kind: 'tip',
        text: {
          en: '100A and 200A services (highlighted) represent over 90% of residential installations you will encounter.',
          es: 'Las acometidas de 100A y 200A (resaltadas) representan más del 90% de las instalaciones residenciales que encontrará.',
        },
      },
    ],
    keywords: ['panel', 'service', 'residential', 'quick reference', 'spaces', 'acometida', 'residencial'],
  },
  {
    slug: 'awg-reference',
    applies: ['residential', 'commercial'],
    necRef: 'Xlectrical Quick Reference',
    category: 'Quick Reference',
    title: {
      en: 'AWG Wire Gauge Reference',
      es: 'Referencia de calibres AWG',
    },
    description: {
      en: 'Smaller AWG number = larger wire. Approximate diameter and common uses for building wire.',
      es: 'Número AWG más pequeño = cable más grande. Diámetro aproximado y usos comunes del cable de construcción.',
    },
    columns: [
      { key: 'awg', label: { en: 'AWG / Size', es: 'AWG / Calibre' }, align: 'center' },
      { key: 'dia', label: { en: 'Diameter (approx.)', es: 'Diámetro (aprox.)' }, align: 'center' },
      { key: 'use', label: { en: 'Common Use', es: 'Uso común' }, align: 'left' },
    ],
    rows: [
      { awg: '#14', dia: '0.064 in', use: { en: '15A branch circuits (lighting)', es: 'Circuitos derivados de 15A (iluminación)' } },
      { awg: '#12', dia: '0.081 in', use: { en: '20A branch circuits (receptacles)', es: 'Circuitos derivados de 20A (tomacorrientes)' } },
      { awg: '#10', dia: '0.102 in', use: { en: '30A circuits (dryers, A/C)', es: 'Circuitos de 30A (secadoras, A/C)' } },
      { awg: '#8', dia: '0.128 in', use: { en: '40–50A circuits, GEC for 100A service', es: 'Circuitos de 40–50A, GEC para servicio de 100A' } },
      { awg: '#6', dia: '0.162 in', use: { en: '60A sub-feeders, GEC for 150A', es: 'Subalimentadores de 60A, GEC para 150A' } },
      { awg: '#4', dia: '0.204 in', use: { en: '100A copper service entrance', es: 'Acometida de cobre de 100A' } },
      { awg: '#2', dia: '0.258 in', use: { en: '100A aluminum service, 125A copper', es: 'Servicio de aluminio de 100A, 125A cobre' } },
      { awg: '#1', dia: '0.289 in', use: { en: '150A copper service', es: 'Servicio de cobre de 150A' } },
      { awg: '1/0', dia: '0.325 in', use: { en: '150A–175A service', es: 'Servicio de 150A–175A' } },
      { awg: '2/0', dia: '0.365 in', use: { en: '200A copper service', es: 'Servicio de cobre de 200A' } },
      { awg: '3/0', dia: '0.410 in', use: { en: '225A copper service', es: 'Servicio de cobre de 225A' } },
      { awg: '4/0', dia: '0.460 in', use: { en: '200A aluminum / 250A copper service', es: 'Servicio de aluminio de 200A / cobre de 250A' } },
    ],
    keywords: ['awg', 'wire gauge', 'diameter', 'calibre', 'cable', 'gauge reference'],
  },
  {
    slug: 'nec-300-5-cover',
    applies: ['residential', 'commercial'],
    necRef: 'NEC 300.5(A)',
    category: 'Underground',
    title: {
      en: 'Table 300.5(A) — Minimum Cover for Underground (inches)',
      es: 'Tabla 300.5(A) — Recubrimiento mínimo para enterrado (pulgadas)',
    },
    description: {
      en: 'Minimum burial depth (cover) in inches by wiring method and location. Cover = distance from the top of the raceway or cable to finished grade.',
      es: 'Profundidad mínima de enterrado (recubrimiento) en pulgadas según método y ubicación. El recubrimiento = distancia desde la parte superior del conduit o cable hasta el nivel final del terreno.',
    },
    columns: [
      { key: 'loc', label: { en: 'Location', es: 'Ubicación' }, align: 'left' },
      { key: 'db', label: { en: 'Direct Burial', es: 'Enterrado directo' }, align: 'center' },
      { key: 'rmc', label: { en: 'RMC / IMC', es: 'RMC / IMC' }, align: 'center' },
      { key: 'pvc', label: { en: 'PVC / Nonmetallic', es: 'PVC / no metálico' }, align: 'center' },
      { key: 'res', label: { en: 'Dwelling 120V ≤20A GFCI', es: 'Vivienda 120V ≤20A GFCI' }, align: 'center' },
    ],
    rows: [
      { loc: { en: 'All locations not specified below', es: 'Todas las ubicaciones no especificadas' }, db: '24', rmc: '6', pvc: '18', res: '12' },
      { loc: { en: 'In trench below 2 in of concrete', es: 'En zanja bajo 2 in de concreto' }, db: '18', rmc: '6', pvc: '12', res: '6' },
      { loc: { en: 'Under a building (in raceway)', es: 'Bajo un edificio (en conduit)' }, db: '0', rmc: '0', pvc: '0', res: '0' },
      { loc: { en: 'Under ≥4 in concrete slab, no vehicles', es: 'Bajo losa de concreto ≥4 in, sin vehículos' }, db: '18', rmc: '4', pvc: '4', res: '6' },
      { loc: { en: 'Streets, roads, alleys, public parking/driveways', es: 'Calles, vías, callejones, estacionamientos/entradas públicas' }, db: '24', rmc: '24', pvc: '24', res: '24' },
      { loc: { en: '1- & 2-family dwelling driveway / outdoor parking', es: 'Entrada/estacionamiento de vivienda uni/bifamiliar' }, db: '18', rmc: '18', pvc: '18', res: '12' },
    ],
    notes: [
      {
        type: 'callout',
        kind: 'note',
        text: {
          en: 'Values are minimum inches of cover. See the full NEC Table 300.5(A) for airport runways, low-voltage landscape lighting, and other special conditions.',
          es: 'Los valores son pulgadas mínimas de recubrimiento. Vea la Tabla 300.5(A) completa del NEC para pistas de aeropuerto, iluminación de bajo voltaje y otras condiciones especiales.',
        },
      },
    ],
    keywords: ['300.5', 'burial', 'cover', 'underground', 'depth', 'enterrado', 'profundidad', 'zanja'],
  },
  {
    slug: 'dwelling-load-constants',
    applies: ['residential'],
    necRef: 'NEC 220',
    category: 'Load Calc',
    title: {
      en: 'Dwelling Load Calculation — Standard Method (Art. 220)',
      es: 'Cálculo de carga de vivienda — Método estándar (Art. 220)',
    },
    description: {
      en: 'Key constants for a standard dwelling service/feeder load calculation (Article 220, Part III).',
      es: 'Constantes clave para el cálculo estándar de carga de acometida/alimentador de vivienda (Artículo 220, Parte III).',
    },
    columns: [
      { key: 'item', label: { en: 'Item', es: 'Concepto' }, align: 'left' },
      { key: 'value', label: { en: 'Value', es: 'Valor' }, align: 'center' },
    ],
    rows: [
      { item: { en: 'General lighting & general-use receptacles', es: 'Iluminación general y tomacorrientes de uso general' }, value: '3 VA / ft²' },
      { item: { en: 'Small-appliance branch circuits (2 minimum)', es: 'Circuitos de aparatos pequeños (2 mínimo)' }, value: { en: '1500 VA each', es: '1500 VA c/u' } },
      { item: { en: 'Laundry branch circuit', es: 'Circuito de lavandería' }, value: '1500 VA' },
      { item: { en: 'Lighting/appliance demand — first 3000 VA', es: 'Demanda iluminación/aparatos — primeros 3000 VA' }, value: '100%' },
      { item: { en: 'Next 3001 – 120,000 VA', es: 'Siguientes 3001 – 120,000 VA' }, value: '35%' },
      { item: { en: 'Remainder over 120,000 VA', es: 'Resto sobre 120,000 VA' }, value: '25%' },
      { item: { en: '4+ fastened-in-place appliances (not range/dryer/HVAC)', es: '4+ aparatos fijos (no estufa/secadora/HVAC)' }, value: '75% (220.53)' },
      { item: { en: 'Electric clothes dryer', es: 'Secadora eléctrica' }, value: { en: '5000 VA or nameplate (220.54)', es: '5000 VA o placa (220.54)' } },
      { item: { en: 'Electric range', es: 'Estufa eléctrica' }, value: { en: 'Table 220.55', es: 'Tabla 220.55' } },
    ],
    notes: [
      {
        type: 'callout',
        kind: 'note',
        text: {
          en: 'Optional method (220.82) for a dwelling with ≥100A service: first 10 kVA at 100%, remainder of general load at 40%, plus the largest HVAC load at 100%.',
          es: 'Método opcional (220.82) para vivienda con servicio ≥100A: primeros 10 kVA al 100%, el resto de la carga general al 40%, más la mayor carga de HVAC al 100%.',
        },
      },
    ],
    keywords: ['220', 'load calculation', 'dwelling', 'demand', 'cálculo de carga', 'vivienda', 'va'],
  },
  {
    slug: 'water-heater-circuit',
    applies: ['residential', 'commercial'],
    necRef: 'NEC 422.13',
    category: 'Appliance Circuits',
    title: {
      en: 'Electric Water Heater — Circuit Sizing (240V)',
      es: 'Calentador eléctrico — Circuito (240V)',
    },
    description: {
      en: 'A storage water heater of 120 gal or less is a continuous load (422.13): size the conductor and breaker at 125% of the nameplate. Copper, on its own dedicated circuit.',
      es: 'Un calentador de acumulación de 120 gal o menos es carga continua (422.13): dimensiona conductor y breaker al 125% de la placa. Cobre, en su propio circuito dedicado.',
    },
    columns: [
      { key: 'w', label: { en: 'Heater', es: 'Calentador' }, align: 'center' },
      { key: 'amps', label: { en: 'Amps', es: 'Amperios' }, align: 'center' },
      { key: 'x125', label: { en: '× 125%', es: '× 125%' }, align: 'center' },
      { key: 'breaker', label: { en: 'Breaker (2-pole)', es: 'Breaker (2 polos)' }, align: 'center' },
      { key: 'wire', label: { en: 'Copper wire', es: 'Cable de cobre' }, align: 'center' },
    ],
    rows: [
      { w: '3800 W', amps: '15.8 A', x125: '19.8 A', breaker: '20 A', wire: '#12' },
      { w: '4500 W', amps: '18.8 A', x125: '23.4 A', breaker: '30 A', wire: '#10' },
      { w: '5500 W', amps: '22.9 A', x125: '28.7 A', breaker: '30 A', wire: '#10' },
    ],
    highlightRows: [1],
    notes: [
      {
        type: 'callout',
        kind: 'tip',
        text: {
          en: 'The 4500 W / 240 V tank is by far the most common — a 30 A 2-pole breaker with #10 Cu (10-2 w/ ground).',
          es: 'El tanque de 4500 W / 240 V es por mucho el más común — breaker de 30 A de 2 polos con #10 Cu (10-2 con tierra).',
        },
      },
      {
        type: 'callout',
        kind: 'note',
        text: {
          en: 'Tankless (instantaneous) electric heaters are much larger — often 18–27 kW needing two or three 40–50 A circuits. Size by nameplate × 125% and check panel capacity.',
          es: 'Los calentadores sin tanque (instantáneos) son mucho mayores — a menudo 18–27 kW que requieren dos o tres circuitos de 40–50 A. Dimensiona por placa × 125% y revisa la capacidad del panel.',
        },
      },
    ],
    keywords: ['water heater', 'calentador', '422', '4500w', 'continuous', 'dedicated', 'tankless', 'boiler'],
  },
  {
    slug: 'tankless-water-heater',
    applies: ['residential', 'commercial'],
    necRef: 'NEC 422.13',
    category: 'Appliance Circuits',
    title: {
      en: 'Tankless Electric Water Heater — Load & Circuits',
      es: 'Calentador eléctrico sin tanque — Carga y circuitos',
    },
    description: {
      en: 'Whole-house tankless heaters pull heavy current. Total amps = kW ÷ 240 V, a continuous load (×125%). Follow the manufacturer nameplate for the exact number and size of circuits.',
      es: 'Los calentadores sin tanque de casa completa consumen mucha corriente. Amperios = kW ÷ 240 V, carga continua (×125%). Sigue la placa del fabricante para el número y tamaño exacto de circuitos.',
    },
    columns: [
      { key: 'kw', label: { en: 'Unit', es: 'Unidad' }, align: 'center' },
      { key: 'amps', label: { en: 'Amps @240V', es: 'Amperios @240V' }, align: 'center' },
      { key: 'x125', label: { en: '× 125%', es: '× 125%' }, align: 'center' },
      { key: 'circuits', label: { en: 'Typical circuits', es: 'Circuitos típicos' }, align: 'left' },
    ],
    rows: [
      { kw: '11 kW', amps: '46 A', x125: '57 A', circuits: { en: 'often 1 × 60 A', es: 'a menudo 1 × 60 A' } },
      { kw: '15 kW', amps: '63 A', x125: '78 A', circuits: { en: 'usually 2 circuits', es: 'normalmente 2 circuitos' } },
      { kw: '18 kW', amps: '75 A', x125: '94 A', circuits: { en: '2–3 circuits', es: '2–3 circuitos' } },
      { kw: '24 kW', amps: '100 A', x125: '125 A', circuits: { en: '2–3 circuits · may need 200 A service', es: '2–3 circuitos · puede requerir servicio de 200 A' } },
      { kw: '27 kW', amps: '113 A', x125: '141 A', circuits: { en: '3 circuits · service upgrade likely', es: '3 circuitos · probable upgrade de servicio' } },
    ],
    notes: [
      {
        type: 'callout',
        kind: 'note',
        text: {
          en: 'The "typical circuits" column is a guide only — the manufacturer nameplate and installation manual specify the exact breakers and wire.',
          es: 'La columna de "circuitos típicos" es solo una guía — la placa y el manual del fabricante especifican los breakers y el cable exactos.',
        },
      },
    ],
    keywords: ['tankless', 'sin tanque', 'instantaneous', 'water heater', 'calentador', 'kw', '422', 'service upgrade'],
  }
]
