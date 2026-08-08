import type { Section } from './types.js'

// The nine sections of the Xlectrical NEC Field Reference Guide.
// English is primary; every prose block carries a Spanish translation
// so the UI can translate any citation on demand.

export const sections: Section[] = [
  {
    slug: 'working-space',
    applies: ['residential', 'commercial'],
    order: 2,
    number: '2',
    category: 'requirements',
    necRef: 'NEC 110.26',
    title: {
      en: 'Working Space at Panels',
      es: 'Espacio de trabajo en paneles',
    },
    subtitle: {
      en: 'The clear space you must keep in front of electrical equipment.',
      es: 'El espacio libre que debes dejar frente a los equipos eléctricos.',
    },
    keywords: ['110.26', 'working space', 'clearance', 'panel', 'panelboard', '30 inches', '3 feet', 'dedicated space', 'espacio de trabajo', 'despeje', 'acceso'],
    blocks: [
      {
        type: 'paragraph',
        text: {
          en: 'Before you open any panel, NEC 110.26 requires clear working space around it — for your safety: room to stand, work, and get out fast. Three dimensions matter: depth (in front), width, and height.',
          es: 'Antes de abrir cualquier panel, la NEC 110.26 exige espacio de trabajo libre a su alrededor — por tu seguridad: espacio para pararte, trabajar y salir rápido. Importan tres dimensiones: profundidad (al frente), ancho y altura.',
        },
      },
      {
        type: 'diagram',
        diagram: 'working-space',
        caption: {
          en: 'Working space: at least 3 ft deep, 30 in wide, and 6½ ft high in front of the equipment — kept clear (no storage).',
          es: 'Espacio de trabajo: mínimo 3 ft de profundidad, 30 in de ancho y 6½ ft de alto frente al equipo — siempre libre (sin almacenar nada).',
        },
      },
      { type: 'heading', text: { en: 'The three dimensions', es: 'Las tres dimensiones' } },
      {
        type: 'list',
        items: [
          { en: 'Depth (in front): 3 ft minimum for 120/240 V and 208Y/120 V. More for higher voltage — see the table (110.26(A)(1)).', es: 'Profundidad (al frente): 3 ft mínimo para 120/240 V y 208Y/120 V. Más para voltajes altos — ver la tabla (110.26(A)(1)).' },
          { en: 'Width: 30 in, or the width of the equipment — whichever is greater. It doesn’t have to be centered; the panel can sit anywhere within the 30 in, and doors/covers must open a full 90° (110.26(A)(2)).', es: 'Ancho: 30 in, o el ancho del equipo — lo que sea mayor. No tiene que estar centrado; el panel puede quedar en cualquier punto dentro de las 30 in, y las puertas/tapas deben abrir 90° completos (110.26(A)(2)).' },
          { en: 'Height: clear from the floor up to 6½ ft (78 in), or the top of the equipment if it is taller (110.26(A)(3)).', es: 'Altura: libre desde el piso hasta 6½ ft (78 in), o el tope del equipo si es más alto (110.26(A)(3)).' },
        ],
      },
      { type: 'heading', text: { en: 'Depth by voltage & condition — Table 110.26(A)(1)', es: 'Profundidad por voltaje y condición — Tabla 110.26(A)(1)' } },
      { type: 'table', tableSlug: 'nec-110-26' },
      { type: 'heading', text: { en: 'Also required', es: 'También obligatorio' } },
      {
        type: 'list',
        items: [
          { en: 'No storage. The working space cannot be used to store anything — keep it clear at all times.', es: 'Sin almacenaje. El espacio de trabajo no se puede usar para guardar nada — mantenlo libre siempre.' },
          { en: 'Dedicated space above: the footprint of the panel, from its top up 6 ft (or to the ceiling, whichever is lower), is reserved for electrical — no foreign piping, ducts, or equipment (110.26(E)). Sprinklers are allowed.', es: 'Espacio dedicado arriba: la huella del panel, desde su tope hacia arriba 6 ft (o hasta el techo, lo que sea menor), es solo para eléctrico — sin tuberías, ductos ni equipos ajenos (110.26(E)). Se permiten rociadores.' },
          { en: 'Lighting is required at the working space, plus at least one entrance/exit; large gear (1200 A+) needs an exit at each end (110.26(C), (D)).', es: 'Se requiere iluminación en el espacio de trabajo y al menos una entrada/salida; los equipos grandes (1200 A+) requieren una salida en cada extremo (110.26(C), (D)).' },
          { en: 'Panels are NOT allowed in clothes closets or over the steps of a stairway, and not in dwelling bathrooms (240.24).', es: 'Los paneles NO se permiten en clósets de ropa ni sobre los escalones de una escalera, ni en baños de viviendas (240.24).' },
        ],
      },
      {
        type: 'callout',
        kind: 'warning',
        text: {
          en: 'The most common violation: things stored in front of the panel, or a panel blocked by a door or shelving. If you cannot stand in a clear 3 ft × 30 in space and open the cover a full 90°, it is not code-compliant — and it is a real hazard during a fault.',
          es: 'La violación más común: cosas guardadas frente al panel, o un panel bloqueado por una puerta o estantes. Si no puedes pararte en un espacio libre de 3 ft × 30 in y abrir la tapa 90° completos, no cumple el código — y es un peligro real durante una falla.',
        },
      },
      {
        type: 'callout',
        kind: 'tip',
        text: {
          en: 'Field memory: 3 – 30 – 78. 3 ft deep, 30 in wide, 78 in (6½ ft) high — and keep it clear.',
          es: 'Regla de campo: 3 – 30 – 78. 3 ft de fondo, 30 in de ancho, 78 in (6½ ft) de alto — y mantenlo libre.',
        },
      },
    ],
  },
  {
    slug: 'service-survey',
    applies: ['residential', 'commercial'],
    order: 1,
    number: '1',
    category: 'checklist',
    necRef: 'Field Survey',
    title: {
      en: 'Service Survey Checklist — What to Record on Site',
      es: 'Lista de inspección de acometida — Qué registrar en sitio',
    },
    subtitle: {
      en: 'Data that determines conductor sizing, grounding, and protection needs.',
      es: 'Datos que determinan el calibre del conductor, la puesta a tierra y las protecciones.',
    },
    keywords: ['survey', 'checklist', 'service', 'panel', 'inspection', 'inspección', 'acometida'],
    blocks: [
      {
        type: 'paragraph',
        text: {
          en: 'When performing an electrical service survey, collect ALL of the following information before quoting or starting work. This data drives every downstream decision — conductor sizing, grounding, and protection.',
          es: 'Al realizar una inspección de la acometida eléctrica, recopile TODA la siguiente información antes de cotizar o comenzar el trabajo. Estos datos determinan cada decisión posterior: calibre del conductor, puesta a tierra y protecciones.',
        },
      },
      {
        type: 'diagram',
        diagram: 'service-survey',
        caption: {
          en: 'Start at the meter and panel — record all five items before quoting.',
          es: 'Empieza en el medidor y el panel — registra los cinco datos antes de cotizar.',
        },
      },
      {
        type: 'comparison',
        title: { en: 'What to record', es: 'Qué registrar' },
        columns: [
          { en: 'Data to record', es: 'Dato a registrar' },
          { en: 'Where to find it', es: 'Dónde encontrarlo' },
        ],
        rows: [
          {
            label: { en: 'Service Type', es: 'Tipo de servicio' },
            cells: [
              { en: 'Single-phase or three-phase', es: 'Monofásico o trifásico' },
              { en: 'Meter base / utility records', es: 'Base del medidor / registros de la eléctrica' },
            ],
          },
          {
            label: { en: 'Voltage', es: 'Voltaje' },
            cells: [
              { en: '120/240V, 120/208V, 277/480V', es: '120/240V, 120/208V, 277/480V' },
              { en: 'Meter base label / utility', es: 'Etiqueta del medidor / eléctrica' },
            ],
          },
          {
            label: { en: 'Service Rating', es: 'Amperaje de servicio' },
            cells: [
              { en: 'Amperage (100A, 200A, 400A…)', es: 'Amperaje (100A, 200A, 400A…)' },
              { en: 'Main breaker / panel label', es: 'Breaker principal / etiqueta del panel' },
            ],
          },
          {
            label: { en: 'Conductor Type & Size', es: 'Tipo y calibre del conductor' },
            cells: [
              { en: 'Copper or Aluminum, AWG or kcmil', es: 'Cobre o aluminio, AWG o kcmil' },
              { en: 'Wire markings / measure', es: 'Marcas del cable / medición' },
            ],
          },
          {
            label: { en: 'Grounding System & GEC', es: 'Sistema de tierra y GEC' },
            cells: [
              { en: 'Rod, plate, water pipe, Ufer + GEC size', es: 'Varilla, placa, tubería de agua, Ufer + calibre GEC' },
              { en: 'Inspect at panel & exterior', es: 'Inspeccione en el panel y exterior' },
            ],
          },
          {
            label: { en: 'Existing GFCI / AFCI', es: 'GFCI / AFCI existentes' },
            cells: [
              { en: 'Locations already protected', es: 'Ubicaciones ya protegidas' },
              { en: 'Check outlets & breakers', es: 'Revise tomacorrientes y breakers' },
            ],
          },
        ],
      },
      {
        type: 'callout',
        kind: 'tip',
        text: {
          en: 'Always take photos of the panel label, meter base, and existing wiring before starting work.',
          es: 'Siempre tome fotos de la etiqueta del panel, la base del medidor y el cableado existente antes de comenzar.',
        },
      },
      {
        type: 'callout',
        kind: 'note',
        text: {
          en: 'For commercial services, also record: demand load calculations, transformer data, and disconnect switch info.',
          es: 'Para servicios comerciales, registre además: cálculos de carga de demanda, datos del transformador e información del interruptor de desconexión.',
        },
      },
    ],
  },
  {
    slug: 'dwelling-service-sizing',
    applies: ['residential'],
    order: 4,
    number: '4',
    category: 'table',
    necRef: 'NEC 310.12',
    title: {
      en: 'Table 310.12 — Conductor Sizing for Dwelling Services & Feeders',
      es: 'Tabla 310.12 — Calibre de conductores para acometidas y alimentadores de vivienda',
    },
    subtitle: {
      en: 'Minimum conductor size for single-phase dwelling services and feeders.',
      es: 'Calibre mínimo de conductor para acometidas y alimentadores monofásicos de vivienda.',
    },
    keywords: ['310.12', 'service', 'feeder', 'dwelling', 'sizing', 'acometida', 'alimentador'],
    blocks: [
      {
        type: 'paragraph',
        text: {
          en: 'Use this table to determine the minimum conductor size for single-phase dwelling-unit services and feeders based on the service or feeder ampere rating. It reflects the reduced sizing permitted for dwellings by NEC 310.12.',
          es: 'Use esta tabla para determinar el calibre mínimo del conductor para acometidas y alimentadores monofásicos de vivienda según su amperaje. Refleja el calibre reducido que la NEC 310.12 permite para viviendas.',
        },
      },
      {
        type: 'diagram',
        diagram: 'service-sizing',
        caption: {
          en: 'The two services you meet most: 100A (#4 Cu) and 200A (2/0 Cu).',
          es: 'Las dos acometidas más comunes: 100A (#4 Cu) y 200A (2/0 Cu).',
        },
      },
      { type: 'table', tableSlug: 'nec-310-12' },
      {
        type: 'steps',
        title: { en: 'How to use this table in the field', es: 'Cómo usar esta tabla en campo' },
        steps: [
          { en: 'Identify the service or feeder ampere rating from the main breaker or panel label.', es: 'Identifique el amperaje de la acometida o alimentador en el breaker principal o la etiqueta del panel.' },
          { en: 'Determine the conductor material — copper or aluminum (check wire markings).', es: 'Determine el material del conductor: cobre o aluminio (revise las marcas del cable).' },
          { en: 'Cross-reference the ampere rating with the correct conductor column.', es: 'Cruce el amperaje con la columna correcta del conductor.' },
          { en: 'The value shown is the MINIMUM conductor size allowed.', es: 'El valor mostrado es el calibre MÍNIMO permitido.' },
          { en: 'If the existing conductor is smaller than required, flag it for upgrade.', es: 'Si el conductor existente es menor al requerido, márquelo para reemplazo.' },
        ],
      },
    ],
  },
  {
    slug: 'gfci-protection',
    applies: ['residential', 'commercial'],
    order: 8,
    number: '8',
    category: 'requirements',
    necRef: 'NEC 210.8',
    title: {
      en: 'Section 210.8 — GFCI Protection Requirements',
      es: 'Sección 210.8 — Requisitos de protección GFCI',
    },
    subtitle: {
      en: 'Ground-fault protection for personnel, by location.',
      es: 'Protección contra falla a tierra para personas, por ubicación.',
    },
    keywords: ['210.8', 'gfci', 'ground fault', 'shock', 'falla a tierra', 'protección'],
    blocks: [
      {
        type: 'paragraph',
        text: {
          en: 'Ground-Fault Circuit-Interrupter (GFCI) protection for personnel shall be provided as required in NEC 210.8(A) through (F), and installed in a readily accessible location. GFCI protects against shock by tripping on 4–6 mA of ground-fault current.',
          es: 'La protección por interruptor de circuito por falla a tierra (GFCI) para personas debe proveerse según la NEC 210.8(A) a (F), e instalarse en un lugar de fácil acceso. El GFCI protege contra descargas disparándose con 4–6 mA de corriente de falla a tierra.',
        },
      },
      {
        type: 'diagram',
        diagram: 'gfci-afci-map',
        caption: {
          en: 'Rule of thumb: GFCI guards wet areas (shock), AFCI guards living & sleeping areas (fire). Kitchens need both.',
          es: 'Regla práctica: GFCI protege áreas húmedas (descarga), AFCI protege áreas de estar y dormir (incendio). Las cocinas necesitan ambos.',
        },
      },
      {
        type: 'heading',
        text: { en: '210.8(A) — Dwelling Units', es: '210.8(A) — Viviendas' },
      },
      {
        type: 'paragraph',
        text: {
          en: 'All 125V through 250V receptacles in these dwelling-unit locations require GFCI protection:',
          es: 'Todos los tomacorrientes de 125V a 250V en estas ubicaciones de vivienda requieren protección GFCI:',
        },
      },
      {
        type: 'list',
        items: [
          { en: 'Bathrooms', es: 'Baños' },
          { en: 'Kitchens (countertop receptacles and within 6 ft of a sink)', es: 'Cocinas (tomas de mesada y a menos de 6 ft de un fregadero)' },
          { en: 'Garages and accessory buildings at/below grade', es: 'Garajes y edificaciones accesorias a nivel o bajo nivel' },
          { en: 'Outdoors (all outdoor receptacles)', es: 'Exteriores (todos los tomacorrientes exteriores)' },
          { en: 'Basements (finished and unfinished)', es: 'Sótanos (terminados y sin terminar)' },
          { en: 'Crawl spaces at/below grade', es: 'Espacios reducidos a nivel o bajo nivel' },
          { en: 'Within 6 ft of the outside edge of a sink, tub, or shower', es: 'A menos de 6 ft del borde exterior de fregadero, tina o ducha' },
          { en: 'Laundry areas & indoor damp/wet locations', es: 'Áreas de lavado y lugares húmedos/mojados interiores' },
        ],
      },
      {
        type: 'heading',
        text: { en: '210.8(B) — Commercial / Non-Dwelling', es: '210.8(B) — Comercial / No vivienda' },
      },
      {
        type: 'list',
        items: [
          { en: 'Bathrooms & commercial kitchens', es: 'Baños y cocinas comerciales' },
          { en: 'Rooftops & outdoors', es: 'Azoteas y exteriores' },
          { en: 'Within 6 ft of a sink; indoor wet locations', es: 'A menos de 6 ft de un fregadero; lugares mojados interiores' },
          { en: 'Locker rooms with associated showers', es: 'Vestidores con duchas asociadas' },
          { en: 'Garages, service bays, and similar areas', es: 'Garajes, bahías de servicio y áreas similares' },
          { en: 'Crawl spaces at/below grade; basements', es: 'Espacios reducidos a/bajo nivel; sótanos' },
        ],
      },
      {
        type: 'comparison',
        title: { en: 'GFCI required by location', es: 'GFCI requerido por ubicación' },
        columns: [
          { en: 'Residential', es: 'Residencial' },
          { en: 'Commercial', es: 'Comercial' },
        ],
        rows: [
          { label: { en: 'Bathrooms', es: 'Baños' }, cells: [{ en: 'Yes', es: 'Sí' }, { en: 'Yes', es: 'Sí' }] },
          { label: { en: 'Kitchens', es: 'Cocinas' }, cells: [{ en: 'Yes', es: 'Sí' }, { en: 'Yes', es: 'Sí' }] },
          { label: { en: 'Outdoors', es: 'Exteriores' }, cells: [{ en: 'Yes', es: 'Sí' }, { en: 'Yes', es: 'Sí' }] },
          { label: { en: 'Garages', es: 'Garajes' }, cells: [{ en: 'Yes', es: 'Sí' }, { en: 'Yes', es: 'Sí' }] },
          { label: { en: 'Within 6 ft of sink', es: 'A 6 ft del fregadero' }, cells: [{ en: 'Yes', es: 'Sí' }, { en: 'Yes', es: 'Sí' }] },
          { label: { en: 'Laundry areas', es: 'Áreas de lavado' }, cells: [{ en: 'Yes', es: 'Sí' }, { en: 'N/A', es: 'N/A' }] },
          { label: { en: 'Rooftops', es: 'Azoteas' }, cells: [{ en: 'N/A', es: 'N/A' }, { en: 'Yes', es: 'Sí' }] },
          { label: { en: 'Locker rooms', es: 'Vestidores' }, cells: [{ en: 'N/A', es: 'N/A' }, { en: 'Yes', es: 'Sí' }] },
        ],
      },
      {
        type: 'callout',
        kind: 'note',
        text: {
          en: 'GFCI protection can be provided by a GFCI receptacle, a GFCI breaker, or a deadfront GFCI device — all are acceptable.',
          es: 'La protección GFCI puede darse con un tomacorriente GFCI, un breaker GFCI o un dispositivo GFCI de frente muerto — todos son aceptables.',
        },
      },
      {
        type: 'callout',
        kind: 'tip',
        text: {
          en: 'When surveying, check EVERY receptacle near water sources. If GFCI is missing, document it and flag for upgrade.',
          es: 'Al inspeccionar, revise CADA tomacorriente cerca de fuentes de agua. Si falta GFCI, documéntelo y márquelo para actualización.',
        },
      },
    ],
  },
  {
    slug: 'afci-protection',
    applies: ['residential', 'commercial'],
    order: 9,
    number: '9',
    category: 'requirements',
    necRef: 'NEC 210.12',
    title: {
      en: 'Section 210.12 — Arc-Fault (AFCI) Protection',
      es: 'Sección 210.12 — Protección contra arco eléctrico (AFCI)',
    },
    subtitle: {
      en: 'Fire protection for living- and sleeping-area branch circuits.',
      es: 'Protección contra incendios para circuitos de áreas de estar y dormir.',
    },
    keywords: ['210.12', 'afci', 'arc fault', 'fire', 'arco', 'incendio'],
    blocks: [
      {
        type: 'paragraph',
        text: {
          en: 'Arc-Fault Circuit-Interrupter (AFCI) protection reduces the risk of electrical fires caused by arcing faults. NEC 210.12 requires it not only in dwelling units, but also in dormitory units and in hotel/motel guest rooms and suites — so it reaches commercial buildings with sleeping areas. It applies to all 120V, single-phase, 15- and 20-ampere branch circuits supplying outlets or devices in these areas:',
          es: 'La protección por interruptor de circuito por falla de arco (AFCI) reduce el riesgo de incendios por arqueo. La NEC 210.12 la exige no solo en viviendas, sino también en dormitorios (dormitory units) y en habitaciones y suites de hoteles/moteles — por eso alcanza edificios comerciales con áreas de dormir. Aplica a todos los circuitos derivados de 120V, monofásicos, de 15 y 20 A que alimentan salidas o dispositivos en estas áreas:',
        },
      },
      {
        type: 'diagram',
        diagram: 'afci-arc',
        caption: {
          en: 'AFCI senses the tiny arcing that starts electrical fires and trips.',
          es: 'El AFCI detecta el arqueo diminuto que inicia incendios y dispara.',
        },
      },
      {
        type: 'callout',
        kind: 'note',
        text: {
          en: 'Occupancy scope: AFCI covers dwelling units, dormitory units, and hotel/motel guest rooms & suites. It is NOT required in general commercial spaces such as offices, retail, or warehouses.',
          es: 'Alcance por ocupación: el AFCI cubre viviendas, dormitorios y habitaciones/suites de hoteles y moteles. NO se requiere en espacios comerciales generales como oficinas, comercios o bodegas.',
        },
      },
      {
        type: 'list',
        items: [
          { en: 'Kitchens, dining rooms, living rooms, parlors, libraries, dens', es: 'Cocinas, comedores, salas, salones, bibliotecas, estudios' },
          { en: 'Bedrooms, family rooms, sunrooms, recreation rooms', es: 'Dormitorios, salas familiares, solarios, salas de recreación' },
          { en: 'Closets, hallways, laundry areas', es: 'Clósets, pasillos, áreas de lavado' },
          { en: 'Similar rooms or areas', es: 'Habitaciones o áreas similares' },
        ],
      },
      {
        type: 'steps',
        title: { en: 'Acceptable AFCI methods', es: 'Métodos AFCI aceptables' },
        steps: [
          { en: 'Combination-type AFCI breaker protecting the entire branch circuit — the most common method.', es: 'Breaker AFCI tipo combinación que protege todo el circuito derivado — el método más común.' },
          { en: 'Branch/feeder AFCI breaker at the panel + a listed outlet branch-circuit AFCI at the first outlet.', es: 'Breaker AFCI de circuito/alimentador en el panel + un AFCI de salida listado en la primera caja.' },
          { en: 'Supplemental arc protection breaker at the panel + listed outlet AFCI at the first outlet.', es: 'Breaker de protección de arco suplementaria en el panel + AFCI de salida listado en la primera caja.' },
        ],
      },
      {
        type: 'callout',
        kind: 'warning',
        text: {
          en: 'AFCI is required for 120V, 15A and 20A circuits ONLY. It is NOT required for 240V-only circuits (dryer, range) or circuits above 20A.',
          es: 'El AFCI se requiere SOLO para circuitos de 120V, 15A y 20A. NO se requiere para circuitos solo de 240V (secadora, estufa) ni para circuitos mayores a 20A.',
        },
      },
      {
        type: 'callout',
        kind: 'tip',
        text: {
          en: 'In the field, the easiest way to verify AFCI is to check whether the breaker has a TEST button and is labeled "AFCI" or "Combination AFCI".',
          es: 'En campo, la forma más fácil de verificar AFCI es revisar si el breaker tiene un botón TEST y dice "AFCI" o "Combination AFCI".',
        },
      },
      {
        type: 'comparison',
        title: { en: 'GFCI vs. AFCI — quick comparison', es: 'GFCI vs. AFCI — comparación rápida' },
        columns: [
          { en: 'GFCI', es: 'GFCI' },
          { en: 'AFCI', es: 'AFCI' },
        ],
        rows: [
          {
            label: { en: 'Protects against', es: 'Protege contra' },
            cells: [{ en: 'Ground faults (shock)', es: 'Fallas a tierra (descarga)' }, { en: 'Arc faults (fire)', es: 'Fallas de arco (incendio)' }],
          },
          {
            label: { en: 'Trip threshold', es: 'Umbral de disparo' },
            cells: [{ en: '4–6 mA ground-fault current', es: '4–6 mA de corriente de falla a tierra' }, { en: 'Detects arcing patterns', es: 'Detecta patrones de arqueo' }],
          },
          {
            label: { en: 'Required in', es: 'Requerido en' },
            cells: [{ en: 'Wet / damp locations', es: 'Lugares mojados / húmedos' }, { en: 'Living / habitable areas', es: 'Áreas habitables' }],
          },
          {
            label: { en: 'Applies to', es: 'Aplica a' },
            cells: [{ en: '125–250V receptacles', es: 'Tomacorrientes 125–250V' }, { en: '120V, 15A & 20A circuits', es: 'Circuitos 120V, 15A y 20A' }],
          },
        ],
      },
    ],
  },
  {
    slug: 'smoke-co-alarms',
    applies: ['residential', 'commercial'],
    order: 16,
    number: '16',
    category: 'requirements',
    necRef: 'NFPA 72 Ch. 29',
    title: {
      en: 'NFPA 72 Chapter 29 — Smoke & CO Alarm Requirements',
      es: 'NFPA 72 Capítulo 29 — Requisitos de alarmas de humo y CO',
    },
    subtitle: {
      en: 'Placement, interconnection, and mounting of household alarms.',
      es: 'Ubicación, interconexión y montaje de alarmas domésticas.',
    },
    keywords: ['nfpa 72', 'smoke', 'co', 'alarm', 'detector', 'humo', 'monóxido', 'alarma'],
    blocks: [
      {
        type: 'paragraph',
        text: {
          en: 'NFPA 72 Chapter 29 governs single- and multiple-station smoke AND carbon monoxide (CO) alarms. It covers dwelling units and the sleeping rooms of hotels, motels and dormitories — so it applies to residential and commercial lodging alike. Since 2019, CO requirements formerly in NFPA 720 are integrated into NFPA 72.',
          es: 'El Capítulo 29 de NFPA 72 rige las alarmas de humo Y de monóxido de carbono (CO) de estación única y múltiple. Cubre viviendas y las habitaciones de hoteles, moteles y dormitorios — por eso aplica tanto a hospedaje residencial como comercial. Desde 2019, los requisitos de CO que estaban en NFPA 720 se integraron a NFPA 72.',
        },
      },
      {
        type: 'diagram',
        diagram: 'smoke-co-placement',
        caption: {
          en: 'A smoke alarm in every bedroom and on every level; CO near sleeping areas and fuel appliances.',
          es: 'Una alarma de humo en cada dormitorio y nivel; CO cerca de dormitorios y aparatos de combustible.',
        },
      },
      {
        type: 'heading',
        text: { en: 'Where smoke alarms are required (29.5)', es: 'Dónde se requieren alarmas de humo (29.5)' },
      },
      {
        type: 'list',
        items: [
          { en: 'Inside every bedroom (sleeping room)', es: 'Dentro de cada dormitorio' },
          { en: 'Outside each separate sleeping area, near the bedrooms', es: 'Fuera de cada área de dormir separada, cerca de los dormitorios' },
          { en: 'On each level of the dwelling, including basements', es: 'En cada nivel de la vivienda, incluyendo sótanos' },
        ],
      },
      {
        type: 'callout',
        kind: 'tip',
        text: {
          en: 'In new construction, smoke alarms must be AC-powered (hardwired) with battery backup and interconnected, so activation of any one alarm sounds ALL alarms.',
          es: 'En obra nueva, las alarmas de humo deben ser alimentadas por CA (cableadas) con respaldo de batería e interconectadas, de modo que el disparo de una haga sonar TODAS.',
        },
      },
      {
        type: 'callout',
        kind: 'warning',
        text: {
          en: 'A common violation is tying all detectors to a single two-wire loop so removing one breaks power to the rest. Always wire in PARALLEL, and replace alarms older than 10 years from the manufacture date.',
          es: 'Una violación común es conectar todos los detectores en un solo lazo de dos hilos, de modo que quitar uno corta la energía al resto. Siempre cablee en PARALELO, y reemplace las alarmas con más de 10 años desde su fabricación.',
        },
      },
      {
        type: 'heading',
        text: { en: 'CO alarms — where required (29.7)', es: 'Alarmas de CO — dónde se requieren (29.7)' },
      },
      {
        type: 'list',
        items: [
          { en: 'When fuel-burning appliances are present (gas furnace, water heater, stove, fireplace)', es: 'Cuando hay aparatos que queman combustible (caldera de gas, calentador, estufa, chimenea)' },
          { en: 'When an attached garage communicates with the dwelling', es: 'Cuando un garaje adjunto se comunica con la vivienda' },
          { en: 'Outside sleeping areas, within 21 ft of any bedroom door (path of travel)', es: 'Fuera de las áreas de dormir, a menos de 21 ft de cualquier puerta de dormitorio (ruta de recorrido)' },
          { en: 'On every habitable level; interconnected when 2+ are installed', es: 'En cada nivel habitable; interconectadas cuando hay 2 o más' },
        ],
      },
      {
        type: 'callout',
        kind: 'note',
        text: {
          en: 'Signal patterns differ: T3 = Fire (3 beeps, pause, repeat). T4 = CO (4 beeps, pause, repeat). Teach customers the difference — it saves lives. Combination smoke/CO alarms are permitted if listed for both (UL 217 + UL 2034).',
          es: 'Los patrones de señal difieren: T3 = Incendio (3 pitidos, pausa, repetir). T4 = CO (4 pitidos, pausa, repetir). Enseñe a los clientes la diferencia — salva vidas. Se permiten alarmas combinadas humo/CO si están listadas para ambas (UL 217 + UL 2034).',
        },
      },
      {
        type: 'comparison',
        title: { en: 'Mounting & clearances (29.11.3)', es: 'Montaje y distancias (29.11.3)' },
        columns: [
          { en: 'Rule', es: 'Regla' },
        ],
        rows: [
          { label: { en: 'Ceiling mount', es: 'Montaje en techo' }, cells: [{ en: 'Preferred. At least 4 in from any wall.', es: 'Preferido. Al menos 4 in de cualquier pared.' }] },
          { label: { en: 'Wall mount', es: 'Montaje en pared' }, cells: [{ en: 'Top of unit 4–12 in below the ceiling.', es: 'Parte superior 4–12 in por debajo del techo.' }] },
          { label: { en: 'Cooking appliances', es: 'Aparatos de cocina' }, cells: [{ en: '10 ft min; 10–20 ft needs silencing or photoelectric type.', es: '10 ft mín; 10–20 ft requiere silenciador o tipo fotoeléctrico.' }] },
          { label: { en: 'Bathroom door / HVAC supply / fan blades', es: 'Puerta de baño / suministro HVAC / aspas de ventilador' }, cells: [{ en: '36 in minimum clearance.', es: '36 in de distancia mínima.' }] },
          { label: { en: 'Unfinished attics / garages', es: 'Áticos / garajes sin terminar' }, cells: [{ en: 'Do NOT install (temps outside 40–100°F).', es: 'NO instalar (temperaturas fuera de 40–100°F).' }] },
        ],
      },
      {
        type: 'steps',
        title: { en: 'Field survey checklist — smoke & CO', es: 'Lista de inspección en campo — humo y CO' },
        steps: [
          { en: 'Verify a smoke alarm inside every bedroom, outside each sleeping area, and on every level.', es: 'Verifique una alarma de humo dentro de cada dormitorio, fuera de cada área de dormir y en cada nivel.' },
          { en: 'Press TEST on one alarm — all interconnected alarms should sound.', es: 'Presione TEST en una alarma — todas las interconectadas deben sonar.' },
          { en: 'Confirm AC power with battery backup (hardwired).', es: 'Confirme alimentación CA con respaldo de batería (cableada).' },
          { en: 'Check the manufacture date — replace if older than 10 years.', es: 'Revise la fecha de fabricación — reemplace si tiene más de 10 años.' },
          { en: 'Verify clearances: 10 ft from cooking, 36 in from HVAC supply / bath door / fan.', es: 'Verifique distancias: 10 ft de cocina, 36 in de suministro HVAC / puerta de baño / ventilador.' },
          { en: 'Identify fuel-burning appliances & attached garages; verify CO alarms and T4 signal.', es: 'Identifique aparatos de combustible y garajes adjuntos; verifique alarmas de CO y señal T4.' },
        ],
      },
    ],
  },
  {
    slug: 'quick-reference',
    applies: ['residential'],
    order: 6,
    number: '6',
    category: 'reference',
    necRef: 'Quick Reference',
    title: {
      en: 'Quick Reference — Common Panel Sizes & Wire Sizing',
      es: 'Referencia rápida — Tamaños de panel y calibres comunes',
    },
    subtitle: {
      en: 'The configurations you meet most often, at a glance.',
      es: 'Las configuraciones que más encontrará, de un vistazo.',
    },
    keywords: ['quick reference', 'panel', 'awg', 'wire', 'service', 'referencia', 'calibre'],
    blocks: [
      {
        type: 'paragraph',
        text: {
          en: '100A and 200A services represent over 90% of the residential installations you will encounter. Keep these two tables handy for fast field decisions.',
          es: 'Las acometidas de 100A y 200A representan más del 90% de las instalaciones residenciales que encontrará. Tenga estas dos tablas a la mano para decisiones rápidas en campo.',
        },
      },
      { type: 'table', tableSlug: 'quick-ref-services' },
      { type: 'table', tableSlug: 'awg-reference' },
      {
        type: 'diagram',
        diagram: 'awg-scale',
        caption: {
          en: 'Conductor cross-sections drawn to actual relative diameter — smaller AWG number = bigger wire.',
          es: 'Secciones de conductor dibujadas a diámetro relativo real — número AWG más pequeño = cable más grande.',
        },
      },
    ],
  },
  {
    slug: 'ev-charger',
    applies: ['residential', 'commercial'],
    order: 14,
    number: '14',
    category: 'table',
    necRef: 'NEC Article 625',
    title: {
      en: 'EV Charger — Conductor Sizing Reference',
      es: 'Cargador de VE — Referencia de dimensionamiento de conductor',
    },
    subtitle: {
      en: 'Size the circuit at 125% of the charger current (continuous load).',
      es: 'Dimensione el circuito al 125% de la corriente del cargador (carga continua).',
    },
    keywords: ['ev', 'charger', '625', 'evse', 'level 2', 'cargador', 'vehículo eléctrico'],
    blocks: [
      {
        type: 'paragraph',
        text: {
          en: 'All EV charger loads are continuous per NEC 625.41, so the circuit must be rated at 125% of the charger’s maximum current (the 80% rule). Use this table to pick the breaker, conductor, and conduit by charger amperage.',
          es: 'Toda carga de cargador de VE es continua según la NEC 625.41, así que el circuito debe ser al 125% de la corriente máxima del cargador (regla del 80%). Use esta tabla para elegir breaker, conductor y conduit según el amperaje del cargador.',
        },
      },
      {
        type: 'diagram',
        diagram: 'ev-circuit',
        caption: {
          en: 'Its own dedicated circuit with a disconnect; conductor and breaker at 125%.',
          es: 'Su propio circuito dedicado con desconexión; conductor y breaker al 125%.',
        },
      },
      { type: 'table', tableSlug: 'ev-charger-sizing' },
      {
        type: 'steps',
        title: { en: 'Important field notes', es: 'Notas importantes de campo' },
        steps: [
          { en: 'Continuous load: breaker rated at 125% of charger current. Example: 40A × 1.25 = 50A breaker minimum.', es: 'Carga continua: breaker al 125% de la corriente del cargador. Ejemplo: 40A × 1.25 = 50A mínimo.' },
          { en: 'NEMA 14-50 outlet (240V/50A): use #6 Cu, 50A 2-pole breaker; the charger limits itself to 40A.', es: 'Tomacorriente NEMA 14-50 (240V/50A): use #6 Cu, breaker 2 polos de 50A; el cargador se limita a 40A.' },
          { en: 'Every EV charger needs its own dedicated circuit — do not share with other loads.', es: 'Cada cargador de VE necesita su propio circuito dedicado — no lo comparta con otras cargas.' },
          { en: 'A disconnect must be within sight, or a lockable panel breaker can serve as the disconnect (625.43).', es: 'Debe haber un medio de desconexión a la vista, o un breaker de panel con candado puede servir como desconexión (625.43).' },
          { en: 'For runs over 100 ft, calculate voltage drop (3% max at 240V recommended) and upsize if needed.', es: 'Para tramos de más de 100 ft, calcule la caída de voltaje (3% máx a 240V recomendado) y suba de calibre si es necesario.' },
        ],
      },
      {
        type: 'callout',
        kind: 'warning',
        text: {
          en: 'Before any EV charger install verify: (1) the panel has capacity for the new circuit, (2) spaces are available for a 2-pole breaker, (3) the run distance from panel to charger. A 100A panel may need an upgrade to 200A.',
          es: 'Antes de instalar un cargador de VE verifique: (1) que el panel tenga capacidad para el nuevo circuito, (2) que haya espacios para un breaker de 2 polos, (3) la distancia del tramo del panel al cargador. Un panel de 100A puede requerir actualización a 200A.',
        },
      },
    ],
  },
  {
    slug: 'dwelling-receptacles-circuits',
    applies: ['residential'],
    order: 10,
    number: '10',
    category: 'requirements',
    necRef: 'NEC 210.52',
    title: {
      en: 'Dwelling Receptacles & Required Branch Circuits',
      es: 'Receptáculos y circuitos derivados requeridos en vivienda',
    },
    subtitle: {
      en: 'Where receptacles, circuits and lighting outlets are required.',
      es: 'Dónde se requieren receptáculos, circuitos y salidas de iluminación.',
    },
    keywords: ['210.52', '210.11', '210.70', '406.12', 'receptacle', 'receptáculo', 'branch circuit', 'tamper resistant'],
    blocks: [
      {
        type: 'paragraph',
        text: {
          en: 'Article 210 sets where receptacles, branch circuits, and lighting outlets are required in dwellings. Getting these right on a survey avoids failed inspections and callbacks.',
          es: 'El Artículo 210 define dónde se requieren receptáculos, circuitos derivados y salidas de iluminación en viviendas. Acertar esto en la inspección evita reprobar y regresar a corregir.',
        },
      },
      {
        type: 'diagram',
        diagram: 'receptacle-spacing',
        caption: {
          en: 'Space receptacles so no wall point is over 6 ft away (12 ft max apart).',
          es: 'Coloca receptáculos para que ningún punto de pared quede a más de 6 ft (12 ft máx).',
        },
      },
      { type: 'heading', text: { en: '210.52 — Receptacle Placement', es: '210.52 — Ubicación de receptáculos' } },
      {
        type: 'list',
        items: [
          { en: 'General rooms: no point along the floor line of a wall is more than 6 ft from a receptacle (so 12 ft max spacing).', es: 'Habitaciones: ningún punto de la pared está a más de 6 ft de un receptáculo (máximo 12 ft de separación).' },
          { en: 'Any wall 2 ft or wider needs a receptacle.', es: 'Toda pared de 2 ft o más de ancho requiere un receptáculo.' },
          { en: 'Kitchen countertops: a receptacle within 24 in of any point along the counter; islands/peninsulas per 210.52(C).', es: 'Mesadas de cocina: un receptáculo a menos de 24 in de cualquier punto; islas/penínsulas según 210.52(C).' },
          { en: 'Bathroom: at least one receptacle within 36 in of the outside edge of each basin.', es: 'Baño: al menos un receptáculo a menos de 36 in del borde exterior de cada lavabo.' },
          { en: 'Outdoors: one receptacle at the front and one at the back, accessible, not over 6.5 ft above grade.', es: 'Exterior: un receptáculo al frente y otro atrás, accesibles, no más de 6.5 ft sobre el nivel del suelo.' },
          { en: 'At least one in the laundry area, in each hallway 10 ft or longer, and in each vehicle bay of a garage.', es: 'Al menos uno en el área de lavado, en cada pasillo de 10 ft o más, y en cada bahía de garaje.' },
        ],
      },
      { type: 'heading', text: { en: '210.11(C) — Required Branch Circuits', es: '210.11(C) — Circuitos derivados requeridos' } },
      {
        type: 'list',
        items: [
          { en: 'Two or more 20A small-appliance circuits for kitchen, dining and pantry receptacles.', es: 'Dos o más circuitos de 20A para receptáculos de cocina, comedor y despensa (aparatos pequeños).' },
          { en: 'At least one 20A laundry branch circuit.', es: 'Al menos un circuito derivado de 20A para lavandería.' },
          { en: 'At least one 20A bathroom branch circuit (serves bathroom receptacles).', es: 'Al menos un circuito derivado de 20A para baños (alimenta los receptáculos del baño).' },
        ],
      },
      {
        type: 'paragraph',
        text: {
          en: '210.70 — a wall-switch-controlled lighting outlet is required in every habitable room, bathroom, hallway, stairway, attached garage, and at outdoor entrances. 406.12 — tamper-resistant (TR) receptacles are required for most 125V, 15A and 20A receptacles in dwellings.',
          es: '210.70 — se requiere una salida de iluminación controlada por interruptor de pared en cada habitación habitable, baño, pasillo, escalera, garaje adjunto y en las entradas exteriores. 406.12 — se requieren receptáculos a prueba de manipulación (TR) para la mayoría de receptáculos de 125V, 15A y 20A en viviendas.',
        },
      },
      {
        type: 'callout',
        kind: 'tip',
        text: {
          en: 'On a remodel, count receptacles per wall before quoting. Adding circuits for kitchens, laundry, and bathrooms is one of the most common code-upgrade line items.',
          es: 'En una remodelación, cuente los receptáculos por pared antes de cotizar. Agregar circuitos de cocina, lavandería y baño es de las partidas de actualización más comunes.',
        },
      },
    ],
  },
  {
    slug: 'dwelling-load-calc',
    applies: ['residential'],
    order: 11,
    number: '11',
    category: 'table',
    necRef: 'NEC 220',
    title: {
      en: 'Dwelling Load Calculation — Sizing the Service',
      es: 'Cálculo de carga de vivienda — Dimensionar la acometida',
    },
    subtitle: {
      en: 'Standard and optional methods to size a dwelling service or feeder.',
      es: 'Métodos estándar y opcional para dimensionar la acometida o alimentador.',
    },
    keywords: ['220', 'load calculation', 'service size', 'demand', 'cálculo de carga', 'vivienda', 'upgrade'],
    blocks: [
      {
        type: 'paragraph',
        text: {
          en: 'Article 220 tells you how big a service or feeder a dwelling needs. It is the number that justifies a 100A → 200A upgrade and picks the conductor from Table 310.12.',
          es: 'El Artículo 220 indica qué tamaño de acometida o alimentador necesita una vivienda. Es el número que justifica un upgrade de 100A → 200A y elige el conductor con la Tabla 310.12.',
        },
      },
      {
        type: 'diagram',
        diagram: 'load-calc-flow',
        caption: {
          en: 'Add the loads, apply demand factors, add appliances, divide by 240V.',
          es: 'Suma las cargas, aplica factores de demanda, agrega aparatos, divide entre 240V.',
        },
      },
      {
        type: 'steps',
        title: { en: 'Standard method (Art. 220, Part III)', es: 'Método estándar (Art. 220, Parte III)' },
        steps: [
          { en: 'General lighting: dwelling area (ft²) × 3 VA.', es: 'Iluminación general: área de la vivienda (ft²) × 3 VA.' },
          { en: 'Add 2 × 1500 VA small-appliance circuits + 1500 VA laundry.', es: 'Sume 2 × 1500 VA de circuitos de aparatos pequeños + 1500 VA de lavandería.' },
          { en: 'Apply the demand factor: first 3000 VA at 100%, the rest up to 120,000 VA at 35%.', es: 'Aplique el factor de demanda: primeros 3000 VA al 100%, el resto hasta 120,000 VA al 35%.' },
          { en: 'Add fixed appliances (75% for 4+), dryer (5000 VA min), range (Table 220.55), and 100% of the largest HVAC.', es: 'Sume aparatos fijos (75% si son 4+), secadora (5000 VA mín), estufa (Tabla 220.55) y 100% del mayor HVAC.' },
          { en: 'Divide the total VA by 240 to get amps; pick the next standard service size (100/125/150/200A).', es: 'Divida el total VA entre 240 para obtener amperios; elija el siguiente tamaño estándar (100/125/150/200A).' },
        ],
      },
      { type: 'table', tableSlug: 'dwelling-load-constants' },
      {
        type: 'callout',
        kind: 'tip',
        text: {
          en: 'The optional method (220.82) is usually smaller and faster for a typical all-electric home — it often keeps a well-equipped house on a 200A service.',
          es: 'El método opcional (220.82) suele dar un resultado menor y más rápido para una casa totalmente eléctrica típica — muchas veces mantiene una casa bien equipada en 200A.',
        },
      },
    ],
  },
  {
    slug: 'pools-spas',
    applies: ['residential', 'commercial'],
    order: 15,
    number: '15',
    category: 'requirements',
    necRef: 'NEC 680',
    title: {
      en: 'Pools, Spas & Hot Tubs — Bonding & GFCI',
      es: 'Piscinas, spas y jacuzzis — Unión y GFCI',
    },
    subtitle: {
      en: 'Equipotential bonding and ground-fault protection around water.',
      es: 'Unión equipotencial y protección contra falla a tierra cerca del agua.',
    },
    keywords: ['680', 'pool', 'spa', 'hot tub', 'bonding', 'gfci', 'piscina', 'jacuzzi', 'unión'],
    blocks: [
      {
        type: 'paragraph',
        text: {
          en: 'Article 680 is about keeping people safe around water: an equipotential bond that keeps everything at the same voltage, plus GFCI on nearly everything. It applies to permanent and storable pools, spas, hot tubs and fountains.',
          es: 'El Artículo 680 se trata de proteger a las personas cerca del agua: una unión equipotencial que mantiene todo al mismo voltaje, más GFCI en casi todo. Aplica a piscinas permanentes y portátiles, spas, jacuzzis y fuentes.',
        },
      },
      {
        type: 'diagram',
        diagram: 'pool-bonding',
        caption: {
          en: 'A #8 solid copper grid ties everything to the same potential; GFCI everywhere.',
          es: 'Una malla de cobre sólido #8 lo une todo al mismo potencial; GFCI en todo.',
        },
      },
      { type: 'heading', text: { en: 'Equipotential bonding (680.26)', es: 'Unión equipotencial (680.26)' } },
      {
        type: 'list',
        items: [
          { en: 'Use a solid #8 AWG copper bonding conductor to tie the parts together.', es: 'Use un conductor de unión de cobre sólido #8 AWG para unir las partes.' },
          { en: 'Bond the pool shell/rebar, perimeter surface (out to 3 ft), ladders, rails, diving structures, and pump motors.', es: 'Una la estructura/varillas de la piscina, la superficie perimetral (hasta 3 ft), escaleras, barandas, estructuras de clavado y motores de bomba.' },
          { en: 'Bond all metal within 5 ft of the inside wall that is not separated by a permanent barrier.', es: 'Una todo el metal a menos de 5 ft de la pared interior que no esté separado por una barrera permanente.' },
        ],
      },
      { type: 'heading', text: { en: 'GFCI protection', es: 'Protección GFCI' } },
      {
        type: 'list',
        items: [
          { en: 'Pool pump motors, and receptacles that serve the pool.', es: 'Motores de bomba de piscina y receptáculos que la alimentan.' },
          { en: 'All 15A/20A, 125V receptacles within 20 ft of the pool.', es: 'Todos los receptáculos de 15A/20A, 125V a menos de 20 ft de la piscina.' },
          { en: 'Underwater luminaires operating over 15V, and most pool/spa equipment.', es: 'Luminarias sumergidas que operan sobre 15V, y la mayoría del equipo de piscina/spa.' },
        ],
      },
      { type: 'heading', text: { en: 'Receptacles, lighting & clearances', es: 'Receptáculos, iluminación y distancias' } },
      {
        type: 'list',
        items: [
          { en: 'At least one 125V, 15/20A GFCI receptacle located 6–20 ft from the pool (never closer than 6 ft).', es: 'Al menos un receptáculo GFCI de 125V, 15/20A entre 6 y 20 ft de la piscina (nunca a menos de 6 ft).' },
          { en: 'Underwater luminaires over 15V must be GFCI-protected; a low-voltage (≤15V) fixture avoids it.', es: 'Las luminarias sumergidas sobre 15V deben tener GFCI; una luminaria de bajo voltaje (≤15V) lo evita.' },
          { en: 'Keep overhead conductors and other wiring the required distance from the water (Table 680.9(A)).', es: 'Mantén los conductores aéreos y demás cableado a la distancia requerida del agua (Tabla 680.9(A)).' },
          { en: 'Panels and disconnects: not within 5 ft of the pool unless separated by a permanent barrier.', es: 'Paneles y desconexiones: no a menos de 5 ft de la piscina salvo barrera permanente.' },
        ],
      },
      { type: 'heading', text: { en: 'Spas & hot tubs (680 Part IV)', es: 'Spas y jacuzzis (680 Parte IV)' } },
      {
        type: 'list',
        items: [
          { en: 'Indoor or outdoor, the spa/hot tub outlet must be GFCI-protected.', es: 'Interior o exterior, la salida del spa/jacuzzi debe tener GFCI.' },
          { en: 'Provide a disconnecting means within sight and at least 5 ft from the spa.', es: 'Provee un medio de desconexión a la vista y al menos a 5 ft del spa.' },
          { en: 'Bond the shell, metal bands, pumps, heaters and nearby metal — same as a pool.', es: 'Une la estructura, bandas metálicas, bombas, calentadores y metal cercano — igual que una piscina.' },
          { en: 'Commercial / public spas require an emergency shutoff or control readily accessible.', es: 'Los spas comerciales / públicos requieren un paro de emergencia o control de fácil acceso.' },
        ],
      },
      {
        type: 'callout',
        kind: 'tip',
        text: {
          en: 'Don’t forget the water bond (680.26(C)): the pool water itself must be bonded through a listed fitting or a minimum 9 in² of conductive surface in contact with the water.',
          es: 'No olvides la unión del agua (680.26(C)): el agua misma debe unirse mediante un accesorio listado o al menos 9 in² de superficie conductiva en contacto con el agua.',
        },
      },
      {
        type: 'callout',
        kind: 'warning',
        text: {
          en: 'At least one 125V receptacle must be located 6 ft to 20 ft from the inside pool wall — never closer than 6 ft. A spa/hot tub needs GFCI and an emergency shutoff / disconnect within sight but at least 5 ft away.',
          es: 'Debe haber al menos un receptáculo de 125V entre 6 ft y 20 ft de la pared interior de la piscina — nunca a menos de 6 ft. Un spa/jacuzzi requiere GFCI y un paro de emergencia / desconexión a la vista pero al menos a 5 ft.',
        },
      },
    ],
  },
  {
    slug: 'underground-burial',
    applies: ['residential', 'commercial'],
    order: 13,
    number: '13',
    category: 'table',
    necRef: 'NEC 300.5',
    title: {
      en: 'Underground — Burial Depth',
      es: 'Enterrado — Profundidad de recubrimiento',
    },
    subtitle: {
      en: 'Minimum cover for underground runs, by wiring method.',
      es: 'Recubrimiento mínimo para tramos enterrados, por método.',
    },
    keywords: ['300.5', 'burial', 'cover', 'emt', 'underground', 'enterrado', 'profundidad', 'conduit'],
    blocks: [
      {
        type: 'paragraph',
        text: {
          en: 'Underground runs must be buried deep enough to protect them (Table 300.5(A)). Cover is measured from the top of the raceway or cable to finished grade — the depth depends on the wiring method. For how many conductors fit, use the Conduit Fill Calculator.',
          es: 'Los tramos enterrados deben quedar lo bastante profundos para protegerse (Tabla 300.5(A)). El recubrimiento se mide desde la parte superior del conduit o cable hasta el nivel final — la profundidad depende del método. Para cuántos conductores caben, usa la Calculadora de llenado de conduit.',
        },
      },
      {
        type: 'diagram',
        diagram: 'burial-depth',
        caption: {
          en: 'Cover is measured from the top of the raceway to finished grade — depth depends on the wiring method.',
          es: 'El recubrimiento se mide desde el tope del conduit al nivel final — la profundidad depende del método.',
        },
      },
      { type: 'table', tableSlug: 'nec-300-5-cover' },
      {
        type: 'callout',
        kind: 'warning',
        text: {
          en: 'Call 811 to locate existing utilities before digging. Direct-buried conductors emerging from grade must be protected by raceway from the required cover depth up to at least 8 ft above grade.',
          es: 'Llame al 811 para localizar servicios existentes antes de excavar. Los conductores enterrados que emergen del suelo deben protegerse con conduit desde la profundidad requerida hasta al menos 8 ft sobre el nivel.',
        },
      },
    ],
  },
  {
    slug: 'commercial-conductor-sizing',
    applies: ['commercial'],
    order: 5,
    number: '5',
    category: 'reference',
    necRef: 'NEC 310.16 / 110.14(C)',
    title: {
      en: 'Commercial Conductor Sizing — Using Table 310.16',
      es: 'Dimensionamiento de conductor comercial — Con la Tabla 310.16',
    },
    subtitle: {
      en: 'The standard method for non-dwelling services, feeders and branch circuits.',
      es: 'El método estándar para acometidas, alimentadores y circuitos que no son de vivienda.',
    },
    keywords: ['commercial', 'conductor sizing', '310.16', '110.14', '240.6', 'continuous', '125%', 'comercial', 'calibre', 'trifásico', '480v', 'ampacity', 'three-phase'],
    blocks: [
      {
        type: 'paragraph',
        text: {
          en: 'Table 310.12 is a dwelling-only shortcut (it allows 83% sizing). For commercial work you size conductors the standard way — from the Table 310.16 ampacities — applying the continuous-load and termination rules below.',
          es: 'La Tabla 310.12 es un atajo solo para viviendas (permite dimensionar al 83%). Para trabajo comercial se dimensiona de la forma estándar — con las ampacidades de la Tabla 310.16 — aplicando las reglas de carga continua y de terminación de abajo.',
        },
      },
      {
        type: 'diagram',
        diagram: 'sizing-flow',
        caption: {
          en: 'For commercial, size from ampacity (310.16) — never the dwelling shortcut.',
          es: 'En comercial, dimensiona por ampacidad (310.16) — nunca el atajo de vivienda.',
        },
      },
      {
        type: 'steps',
        title: { en: 'The method, step by step', es: 'El método, paso a paso' },
        steps: [
          { en: 'Find the design current. For continuous loads (3 hrs or more), size at 125%: conductor and OCPD ≥ 125% × continuous + 100% × non-continuous. Three-phase: I = VA ÷ (1.732 × line-to-line volts).', es: 'Halla la corriente de diseño. Para cargas continuas (3 h o más), dimensiona al 125%: conductor y OCPD ≥ 125% × continua + 100% × no continua. Trifásico: I = VA ÷ (1.732 × voltaje entre líneas).' },
          { en: 'Pick the overcurrent device (breaker/fuse) from the standard sizes in NEC 240.6.', es: 'Elige el dispositivo de sobrecorriente (breaker/fusible) de los tamaños estándar de la NEC 240.6.' },
          { en: 'Size the conductor from Table 310.16 using the 75°C column — the rating of the equipment terminations (110.14(C)). Most commercial lugs are 75°C.', es: 'Dimensiona el conductor con la Tabla 310.16 usando la columna de 75°C — el rango de las terminaciones del equipo (110.14(C)). La mayoría de los lugs comerciales son de 75°C.' },
          { en: 'If ambient ≠ 30°C or there are more than 3 current-carrying conductors, apply the correction (310.15(B)(1)) and adjustment (310.15(C)(1)) factors to the conductor’s 90°C ampacity; the derated value must still carry the load.', es: 'Si el ambiente ≠ 30°C o hay más de 3 conductores portadores, aplica los factores de corrección (310.15(B)(1)) y de ajuste (310.15(C)(1)) a la ampacidad de 90°C del conductor; el valor reducido debe seguir soportando la carga.' },
          { en: 'Verify voltage drop (3% branch / 5% total recommended) and 240.4 (OCPD not above conductor ampacity). Then size the EGC (250.122) and check conduit fill.', es: 'Verifica la caída de voltaje (3% ramal / 5% total recomendado) y el 240.4 (OCPD no mayor a la ampacidad del conductor). Luego dimensiona el EGC (250.122) y revisa el llenado de conduit.' },
        ],
      },
      {
        type: 'callout',
        kind: 'important',
        text: {
          en: 'Termination temperature (110.14(C)): even with 90°C wire (THHN/THWN-2), size to the terminal rating — usually 75°C. The 90°C column is used ONLY to apply correction and adjustment factors, never as the final ampacity by itself.',
          es: 'Temperatura de terminación (110.14(C)): aun con cable de 90°C (THHN/THWN-2), dimensiona por el rango del borne — normalmente 75°C. La columna de 90°C se usa SOLO para aplicar los factores de corrección y ajuste, nunca como la ampacidad final por sí sola.',
        },
      },
      { type: 'table', tableSlug: 'nec-310-16' },
      {
        type: 'steps',
        title: { en: 'Example — 50 kVA, 480V three-phase, continuous, copper', es: 'Ejemplo — 50 kVA, 480V trifásico, continua, cobre' },
        steps: [
          { en: 'Line current: 50,000 ÷ (1.732 × 480) = 60 A.', es: 'Corriente de línea: 50,000 ÷ (1.732 × 480) = 60 A.' },
          { en: 'Continuous → 125% × 60 = 75 A design current.', es: 'Continua → 125% × 60 = 75 A de corriente de diseño.' },
          { en: 'Table 310.16, 75°C column: #4 Cu = 85 A ≥ 75 A. (#6 Cu = 65 A is too small.)', es: 'Tabla 310.16, columna 75°C: #4 Cu = 85 A ≥ 75 A. (#6 Cu = 65 A es insuficiente.)' },
          { en: 'OCPD: next standard size ≥ 75 A = 80 A breaker (240.6); #4 Cu (85 A) is protected by 80 A.', es: 'OCPD: siguiente tamaño estándar ≥ 75 A = breaker de 80 A (240.6); el #4 Cu (85 A) queda protegido por 80 A.' },
          { en: 'Result: #4 AWG copper on an 80 A breaker (no derating at 30°C with 3 conductors).', es: 'Resultado: #4 AWG cobre en un breaker de 80 A (sin reducción a 30°C con 3 conductores).' },
        ],
      },
      {
        type: 'callout',
        kind: 'note',
        text: {
          en: 'Compare with a dwelling: a 100 A dwelling service via Table 310.12 is only #4 Cu, while a 100 A continuous commercial load works out to #1 Cu. Same current, different rules — always use 310.16 for commercial.',
          es: 'Compara con una vivienda: una acometida residencial de 100 A por la Tabla 310.12 es apenas #4 Cu, mientras que una carga comercial continua de 100 A resulta en #1 Cu. Misma corriente, reglas distintas — usa siempre 310.16 en comercial.',
        },
      },
    ],
  },
  {
    slug: 'wiring-methods',
    applies: ['residential', 'commercial'],
    order: 3,
    number: '3',
    category: 'reference',
    necRef: 'NEC 310 / 334 / 330',
    title: {
      en: 'Wiring Methods — THHN, Romex, MC & UF',
      es: 'Métodos de alambrado — THHN, Romex, MC y UF',
    },
    subtitle: {
      en: 'The methods we install — and where each one belongs.',
      es: 'Los métodos que instalamos — y dónde va cada uno.',
    },
    keywords: ['thhn', 'romex', 'nm-b', 'nm cable', 'mc cable', 'wiring method', 'cable', 'alambrado', '334', '330'],
    blocks: [
      {
        type: 'paragraph',
        text: {
          en: 'Xlectrical installs a handful of wiring methods: THHN conductors pulled in conduit, Romex (Type NM-B), MC (metal-clad), and UF for direct burial. Pick by location, the protection needed, and whether conduit is being run.',
          es: 'Xlectrical instala unos cuantos métodos: conductores THHN jalados en conduit, Romex (Tipo NM-B), MC (blindado metálico) y UF para enterrado directo. Elige según la ubicación, la protección necesaria y si se corre conduit.',
        },
      },
      {
        type: 'diagram',
        diagram: 'wiring-methods',
        caption: {
          en: 'Rule of thumb: conduit → THHN · house walls → Romex · commercial/whips → MC · direct burial → UF.',
          es: 'Regla práctica: conduit → THHN · paredes de casa → Romex · comercial/whips → MC · enterrado directo → UF.',
        },
      },
      {
        type: 'comparison',
        title: { en: 'Quick comparison', es: 'Comparación rápida' },
        columns: [
          { en: 'THHN (in conduit)', es: 'THHN (en conduit)' },
          { en: 'Romex (NM-B)', es: 'Romex (NM-B)' },
          { en: 'MC cable', es: 'Cable MC' },
          { en: 'UF cable', es: 'Cable UF' },
        ],
        rows: [
          {
            label: { en: 'Best for', es: 'Ideal para' },
            cells: [
              { en: 'Services, feeders, conduit runs, commercial', es: 'Acometidas, alimentadores, tramos en conduit, comercial' },
              { en: 'Dwelling branch circuits', es: 'Circuitos derivados de vivienda' },
              { en: 'Commercial circuits, fixture whips', es: 'Circuitos comerciales, whips a luminarias' },
              { en: 'Direct burial, outdoors, outbuildings', es: 'Enterrado directo, exterior, edificaciones' },
            ],
          },
          {
            label: { en: 'Locations', es: 'Ubicaciones' },
            cells: [
              { en: 'Dry & wet (THWN-2), in/outdoors', es: 'Seco y mojado (THWN-2), int/ext' },
              { en: 'Dry, indoor, concealed', es: 'Seco, interior, oculto' },
              { en: 'Dry (wet only if listed)', es: 'Seco (mojado solo si está listado)' },
              { en: 'Wet, underground, sunlight', es: 'Mojado, enterrado, al sol' },
            ],
          },
          {
            label: { en: 'Not allowed', es: 'No permitido' },
            cells: [
              { en: 'Loose — must be in a raceway', es: 'Suelto — debe ir en canalización' },
              { en: 'Wet, buried, damage, fire-rated commercial', es: 'Mojado, enterrado, daño, comercial contra fuego' },
              { en: 'Hazardous locations unless listed', es: 'Lugares peligrosos salvo que esté listado' },
              { en: 'Service-entrance; in concrete', es: 'Acometida; en concreto' },
            ],
          },
          {
            label: { en: 'Protection', es: 'Protección' },
            cells: [
              { en: 'The raceway (conduit)', es: 'La canalización (conduit)' },
              { en: 'Plastic sheath only', es: 'Solo la chaqueta plástica' },
              { en: 'Interlocked metal armor', es: 'Armadura metálica entrelazada' },
              { en: 'Molded solid sheath', es: 'Chaqueta sólida moldeada' },
            ],
          },
          {
            label: { en: 'Ampacity / temp', es: 'Ampacidad / temp' },
            cells: [
              { en: '90°C dry / 75°C wet', es: '90°C seco / 75°C mojado' },
              { en: '60°C column (334.80)', es: 'Columna 60°C (334.80)' },
              { en: '90°C conductors', es: 'Conductores 90°C' },
              { en: '60°C column (340.80)', es: 'Columna 60°C (340.80)' },
            ],
          },
        ],
      },
      { type: 'heading', text: { en: 'THHN / THWN-2 — in conduit', es: 'THHN / THWN-2 — en conduit' } },
      {
        type: 'list',
        items: [
          { en: 'Any time you run conduit (EMT, PVC, RMC/IMC) — pull THHN/THWN-2 conductors.', es: 'Siempre que corras conduit (EMT, PVC, RMC/IMC) — jala conductores THHN/THWN-2.' },
          { en: 'Service and feeder conductors — #2 AWG and larger (e.g., 2/0 for a 200A service).', es: 'Conductores de acometida y alimentador — #2 AWG y mayores (p.ej. 2/0 para 200A).' },
          { en: 'Commercial work and any exposed run that needs raceway protection.', es: 'Trabajo comercial y cualquier tramo expuesto que necesite protección de canalización.' },
          { en: 'Wet or underground runs: use THWN-2 (rated for wet locations).', es: 'Tramos mojados o enterrados: usa THWN-2 (para lugares mojados).' },
          { en: 'When conductors may be added or replaced later — the raceway is reusable.', es: 'Cuando se puedan agregar o cambiar conductores después — la canalización es reutilizable.' },
        ],
      },
      { type: 'heading', text: { en: 'Romex (Type NM-B, Article 334)', es: 'Romex (Tipo NM-B, Artículo 334)' } },
      {
        type: 'list',
        items: [
          { en: 'Residential branch circuits concealed in dry walls, ceilings and floors.', es: 'Circuitos derivados de vivienda ocultos en paredes, techos y pisos secos.' },
          { en: 'The fastest, lowest-cost method for house wiring (receptacles, lighting).', es: 'El método más rápido y económico para cablear casas (tomas, iluminación).' },
          { en: 'Size by the 60°C column — a 12-2 NM is good for 20A, 14-2 for 15A.', es: 'Dimensiona por la columna de 60°C — un 12-2 NM sirve para 20A, 14-2 para 15A.' },
          { en: 'NOT in wet/damp areas, NOT buried or in concrete, NOT exposed to damage.', es: 'NO en áreas mojadas/húmedas, NO enterrado ni en concreto, NO expuesto a daño.' },
          { en: 'NOT in fire-rated (Type I/II) commercial construction, and not as service-entrance.', es: 'NO en construcción comercial contra fuego (Tipo I/II), ni como conductor de acometida.' },
        ],
      },
      { type: 'heading', text: { en: 'MC cable (Article 330)', es: 'Cable MC (Artículo 330)' } },
      {
        type: 'list',
        items: [
          { en: 'Commercial branch circuits and feeders where Romex is not allowed.', es: 'Circuitos derivados y alimentadores comerciales donde no se permite Romex.' },
          { en: 'Flexible whips to light fixtures, HVAC units and equipment connections.', es: 'Whips flexibles a luminarias, equipos HVAC y conexiones de equipo.' },
          { en: 'Exposed runs that need armor protection but not full conduit.', es: 'Tramos expuestos que necesitan armadura pero no conduit completo.' },
          { en: 'Wet locations ONLY if the MC is specifically listed for wet and its conductors are wet-rated.', es: 'Lugares mojados SOLO si el MC está listado para mojado y sus conductores son para mojado.' },
        ],
      },
      { type: 'heading', text: { en: '2-wire vs 3-wire cable (12-2 vs 12-3)', es: 'Cable de 2 vs 3 conductores (12-2 vs 12-3)' } },
      {
        type: 'paragraph',
        text: {
          en: 'The number after the dash is how many insulated conductors the cable carries — the bare ground is not counted. This works the same for Romex and MC.',
          es: 'El número después del guion es cuántos conductores aislados lleva el cable — la tierra desnuda no se cuenta. Es igual para Romex y para MC.',
        },
      },
      {
        type: 'list',
        items: [
          { en: '12-2: one hot (black) + neutral (white) + ground — the everyday 120V circuit (receptacles, lighting home runs).', es: '12-2: un vivo (negro) + neutro (blanco) + tierra — el circuito de 120V de siempre (tomas, iluminación).' },
          { en: '12-3: two hots (black + red) + neutral (white) + ground — for 3-way switches (red/black are the travelers), multi-wire branch circuits (two circuits sharing a neutral), split receptacles, and 120/240V loads that need a neutral.', es: '12-3: dos vivos (negro + rojo) + neutro (blanco) + tierra — para interruptores de 3 vías (rojo/negro son los viajeros), circuitos multi-hilo (dos circuitos que comparten un neutro), tomas divididas y cargas de 120/240V que necesitan neutro.' },
          { en: 'Same idea for 14-2/14-3 (15A) and 10-2/10-3 (30A) — the first number is the wire gauge.', es: 'Misma idea para 14-2/14-3 (15A) y 10-2/10-3 (30A) — el primer número es el calibre.' },
        ],
      },
      { type: 'heading', text: { en: 'UF cable (Article 340)', es: 'Cable UF (Artículo 340)' } },
      {
        type: 'paragraph',
        text: {
          en: 'UF (Underground Feeder) is the go-to for direct burial — it goes in the ground with no conduit. It looks like Romex but the conductors are molded into a solid, moisture- and sunlight-resistant sheath (you can’t easily strip them apart).',
          es: 'El UF (Underground Feeder) es el indicado para enterrado directo — va en la tierra sin conduit. Se parece al Romex pero los conductores van moldeados en una chaqueta sólida, resistente a humedad y sol (no se separan fácil).',
        },
      },
      {
        type: 'list',
        items: [
          { en: 'Feeds detached garages, sheds, well pumps, outdoor lighting and other outbuildings.', es: 'Alimenta garajes separados, cobertizos, bombas de pozo, iluminación exterior y otras edificaciones.' },
          { en: 'Wet locations and direct burial — bury it to the Table 300.5 depth and protect it where it emerges from grade.', es: 'Lugares mojados y enterrado directo — entiérralo a la profundidad de la Tabla 300.5 y protégelo donde sale del suelo.' },
          { en: 'Sized on the 60°C column, like NM. GFCI-protect where required.', es: 'Se dimensiona por la columna de 60°C, como el NM. Con GFCI donde se requiera.' },
          { en: 'NOT as service-entrance conductors, and NOT embedded in concrete.', es: 'NO como conductores de acometida, y NO embebido en concreto.' },
        ],
      },
      {
        type: 'callout',
        kind: 'warning',
        text: {
          en: 'Romex is dry & residential only — never in wet/damp, buried, embedded in concrete, exposed to physical damage, or in fire-rated commercial construction. That is where MC or conduit + THHN takes over.',
          es: 'Romex es solo seco y residencial — nunca en mojado/húmedo, enterrado, embebido en concreto, expuesto a daño físico, ni en construcción comercial contra fuego. Ahí entra el MC o el conduit + THHN.',
        },
      },
      {
        type: 'callout',
        kind: 'tip',
        text: {
          en: 'Quick call in the field: running pipe → THHN. Inside dry dwelling walls → Romex. Commercial, exposed, or a fixture whip → MC.',
          es: 'Decisión rápida en campo: vas a correr tubo → THHN. Dentro de paredes secas de vivienda → Romex. Comercial, expuesto o un whip a luminaria → MC.',
        },
      },
    ],
  },
  {
    slug: 'grounding-bonding',
    applies: ['residential', 'commercial'],
    order: 7,
    number: '7',
    category: 'requirements',
    necRef: 'NEC Article 250',
    title: {
      en: 'Grounding & Bonding — GEC vs EGC',
      es: 'Puesta a tierra y unión — GEC vs EGC',
    },
    subtitle: {
      en: 'The two grounding conductors, and the one place they connect.',
      es: 'Los dos conductores de tierra, y el único punto donde se conectan.',
    },
    keywords: ['250', 'grounding', 'bonding', 'gec', 'egc', '250.66', '250.122', 'main bonding jumper', 'subpanel', 'tierra', 'unión', 'neutro'],
    blocks: [
      {
        type: 'paragraph',
        text: {
          en: 'Article 250 has two grounding conductors people mix up: the GEC that ties the system to earth, and the EGC that bonds equipment back to the source. They look similar but do different jobs and are sized differently.',
          es: 'El Artículo 250 tiene dos conductores de tierra que la gente confunde: el GEC que une el sistema a la tierra física, y el EGC que une el equipo de vuelta a la fuente. Parecen iguales pero hacen trabajos distintos y se dimensionan diferente.',
        },
      },
      {
        type: 'diagram',
        diagram: 'service-grounding',
        caption: {
          en: 'GEC runs from the panel to the ground electrode; EGC follows each circuit out to the equipment.',
          es: 'El GEC va del panel al electrodo de tierra; el EGC sigue cada circuito hasta el equipo.',
        },
      },
      {
        type: 'comparison',
        title: { en: 'GEC vs EGC', es: 'GEC vs EGC' },
        columns: [
          { en: 'GEC (250.66)', es: 'GEC (250.66)' },
          { en: 'EGC (250.122)', es: 'EGC (250.122)' },
        ],
        rows: [
          {
            label: { en: 'Full name', es: 'Nombre completo' },
            cells: [
              { en: 'Grounding Electrode Conductor', es: 'Conductor del electrodo de tierra' },
              { en: 'Equipment Grounding Conductor', es: 'Conductor de tierra de equipos' },
            ],
          },
          {
            label: { en: 'Its job', es: 'Su función' },
            cells: [
              { en: 'Connect the system to earth (rod, Ufer, pipe)', es: 'Conectar el sistema a la tierra física (varilla, Ufer, tubería)' },
              { en: 'Bond metal equipment back to the source so a fault trips the breaker', es: 'Unir el equipo metálico a la fuente para que una falla dispare el breaker' },
            ],
          },
          {
            label: { en: 'Sized by', es: 'Se dimensiona por' },
            cells: [
              { en: 'The largest service / feeder conductor', es: 'El conductor de acometida / alimentador más grande' },
              { en: 'The breaker / fuse (OCPD) rating', es: 'El amperaje del breaker / fusible (OCPD)' },
            ],
          },
          {
            label: { en: 'Runs from → to', es: 'Va de → a' },
            cells: [
              { en: 'Panel neutral bar → grounding electrode', es: 'Barra de neutro → electrodo de tierra' },
              { en: 'With each circuit: panel → equipment', es: 'Con cada circuito: panel → equipo' },
            ],
          },
          {
            label: { en: 'Example', es: 'Ejemplo' },
            cells: [
              { en: '200A Cu service (2/0) → #4 Cu GEC', es: 'Acometida 200A Cu (2/0) → GEC #4 Cu' },
              { en: '20A breaker → #12 Cu EGC', es: 'Breaker 20A → EGC #12 Cu' },
            ],
          },
        ],
      },
      { type: 'heading', text: { en: 'The grounding electrode system (250.50–250.53)', es: 'El sistema de electrodos de tierra (250.50–250.53)' } },
      {
        type: 'list',
        items: [
          { en: 'Use every electrode present, bonded together: metal underground water pipe, concrete-encased (Ufer), ground rods, plates.', es: 'Use todos los electrodos presentes, unidos entre sí: tubería metálica de agua, embebido en concreto (Ufer), varillas, placas.' },
          { en: 'Concrete-encased (Ufer): at least 20 ft of #4 bare copper or 1/2" rebar in the footing — the best electrode.', es: 'Ufer (en concreto): al menos 20 ft de cobre desnudo #4 o varilla de 1/2" en la zapata — el mejor electrodo.' },
          { en: 'Ground rods: 8 ft driven, 5/8" min. Because a single rod rarely tests 25 ohms or less, standard practice is TWO rods bonded together, spaced at least 6 ft apart (250.53(A)(2) & (A)(3)).', es: 'Varillas: 8 ft clavadas, 5/8" mín. Como una sola varilla rara vez mide 25 ohms o menos, la práctica estándar son DOS varillas unidas, separadas al menos 6 ft (250.53(A)(2) y (A)(3)).' },
          { en: 'Metal underground water pipe (10 ft+ in earth) counts as an electrode — but bond it within 5 ft of where it enters the building, and always back it up with a rod or Ufer (250.52(A)(1), 250.53(D)(2), 250.68(C)).', es: 'La tubería metálica enterrada (10 ft+ en tierra) cuenta como electrodo — pero únela a menos de 5 ft de donde entra al edificio, y respáldala siempre con varilla o Ufer (250.52(A)(1), 250.53(D)(2), 250.68(C)).' },
        ],
      },
      {
        type: 'diagram',
        diagram: 'grounding-electrodes',
        caption: {
          en: 'Two 8 ft rods at least 6 ft apart, bonded together with the GEC, plus the metal water pipe bonded within 5 ft of where it enters the building.',
          es: 'Dos varillas de 8 ft separadas al menos 6 ft, unidas con el GEC, más la tubería metálica de agua unida a menos de 5 ft de donde entra al edificio.',
        },
      },
      { type: 'heading', text: { en: 'GEC — connects the system to earth (250.66)', es: 'GEC — conecta el sistema a la tierra (250.66)' } },
      {
        type: 'paragraph',
        text: {
          en: 'Sized from Table 250.66 by the largest ungrounded service conductor. Caps by connection: to a rod it need not exceed #6 Cu; to concrete-encased, #4 Cu.',
          es: 'Se dimensiona con la Tabla 250.66 por el conductor de acometida más grande. Con límites por conexión: a una varilla no necesita ser mayor a #6 Cu; a concreto (Ufer), #4 Cu.',
        },
      },
      { type: 'table', tableSlug: 'nec-250-66' },
      {
        type: 'steps',
        title: { en: 'Sizing the GEC in the field', es: 'Dimensionar el GEC en campo' },
        steps: [
          { en: 'Find the LARGEST ungrounded (hot) service-entrance conductor.', es: 'Identifica el conductor de acometida (vivo) MÁS GRANDE.' },
          { en: 'Copper or aluminum? Use the correct left column of Table 250.66.', es: '¿Cobre o aluminio? Usa la columna izquierda correcta de la Tabla 250.66.' },
          { en: 'Read across to the minimum GEC size (copper or aluminum).', es: 'Lee hacia la derecha el calibre mínimo del GEC (cobre o aluminio).' },
          { en: 'Remember the caps: to a ground rod, #6 Cu is the most you ever need.', es: 'Recuerda los límites: a una varilla, #6 Cu es lo máximo que necesitas.' },
        ],
      },
      { type: 'heading', text: { en: 'EGC — bonds equipment (250.122)', es: 'EGC — une el equipo (250.122)' } },
      {
        type: 'paragraph',
        text: {
          en: 'Sized from Table 250.122 by the breaker ahead of the circuit. It rides with the circuit conductors and gives fault current a low-impedance path back to the source.',
          es: 'Se dimensiona con la Tabla 250.122 por el breaker del circuito. Va junto con los conductores del circuito y da a la corriente de falla un camino de baja impedancia de vuelta a la fuente.',
        },
      },
      { type: 'table', tableSlug: 'nec-250-122' },
      { type: 'heading', text: { en: 'Main bonding jumper — one connection only', es: 'Puente de unión principal — una sola conexión' } },
      {
        type: 'paragraph',
        text: {
          en: 'The neutral (grounded conductor) and the ground (EGC/enclosure) are bonded together at exactly ONE point: the service, through the main bonding jumper. Everywhere downstream they stay separate.',
          es: 'El neutro (conductor puesto a tierra) y la tierra (EGC/gabinete) se unen en EXACTAMENTE UN punto: la acometida, mediante el puente de unión principal. Aguas abajo se mantienen separados.',
        },
      },
      {
        type: 'diagram',
        diagram: 'subpanel-bonding',
        caption: {
          en: 'In every subpanel: neutral floats on its own isolated bar, the EGC lands on a separate ground bar, and the bonding screw comes out.',
          es: 'En cada subpanel: el neutro flota en su barra aislada, el EGC va a una barra de tierra aparte, y el tornillo de unión se quita.',
        },
      },
      {
        type: 'callout',
        kind: 'warning',
        text: {
          en: 'The #1 field mistake: bonding neutral to ground in a subpanel. It puts current on the ground path and equipment. Bond only at the service; isolate the neutral and use a separate ground bar in every subpanel.',
          es: 'El error #1 en campo: unir neutro y tierra en un subpanel. Pone corriente en la tierra y en el equipo. Une solo en la acometida; aísla el neutro y usa barra de tierra aparte en cada subpanel.',
        },
      },
      {
        type: 'callout',
        kind: 'tip',
        text: {
          en: 'Remember it this way: GEC = to the earth (sized by the service). EGC = to the equipment (sized by the breaker). Neutral carries current; the EGC only carries it during a fault.',
          es: 'Recuérdalo así: GEC = a la tierra física (por la acometida). EGC = al equipo (por el breaker). El neutro lleva corriente; el EGC solo la lleva durante una falla.',
        },
      },
    ],
  },
  {
    slug: 'water-heater',
    applies: ['residential', 'commercial'],
    order: 12,
    number: '12',
    category: 'table',
    necRef: 'NEC Article 422',
    title: {
      en: 'Water Heater — Circuit & Disconnect',
      es: 'Calentador de agua — Circuito y desconexión',
    },
    subtitle: {
      en: 'Size it as a continuous load, on its own dedicated circuit.',
      es: 'Dimensiónalo como carga continua, en su propio circuito dedicado.',
    },
    keywords: ['water heater', 'calentador', '422', '422.13', '4500w', 'continuous', 'disconnect', 'tankless', 'dedicated'],
    blocks: [
      {
        type: 'paragraph',
        text: {
          en: 'A storage-type electric water heater (120 gal or less) is a continuous load per NEC 422.13, so the branch circuit and breaker are sized at 125% of the nameplate. The typical residential tank is 4500 W at 240 V.',
          es: 'Un calentador eléctrico de acumulación (120 gal o menos) es carga continua según la NEC 422.13, así que el circuito y el breaker se dimensionan al 125% de la placa. El tanque residencial típico es de 4500 W a 240 V.',
        },
      },
      {
        type: 'diagram',
        diagram: 'water-heater-circuit',
        caption: {
          en: 'Its own 240V circuit with a disconnect within sight — or a lockable breaker (422.31(B)).',
          es: 'Su propio circuito de 240V con una desconexión a la vista — o un breaker con candado (422.31(B)).',
        },
      },
      { type: 'table', tableSlug: 'water-heater-circuit' },
      {
        type: 'steps',
        title: { en: 'How to size it', es: 'Cómo dimensionarlo' },
        steps: [
          { en: 'Read the nameplate watts and divide by 240 V — a 4500 W tank draws 18.75 A.', es: 'Lee los watts de la placa y divide entre 240 V — un tanque de 4500 W consume 18.75 A.' },
          { en: 'Continuous load → multiply by 1.25: 18.75 × 1.25 = 23.4 A.', es: 'Carga continua → multiplica por 1.25: 18.75 × 1.25 = 23.4 A.' },
          { en: 'Pick the breaker: a 30 A 2-pole (240.6), with #10 Cu conductor (10-2 NM or THHN).', es: 'Elige el breaker: 30 A de 2 polos (240.6), con conductor #10 Cu (10-2 NM o THHN).' },
          { en: 'Give it a disconnecting means within sight, or use a lockable breaker (422.31(B)).', es: 'Dale un medio de desconexión a la vista, o usa un breaker con candado (422.31(B)).' },
        ],
      },
      { type: 'heading', text: { en: 'Tankless (instantaneous) heaters', es: 'Calentadores sin tanque (instantáneos)' } },
      {
        type: 'paragraph',
        text: {
          en: 'Tankless electric heaters heat on demand and pull a lot of current. A whole-house unit is typically 18–27 kW — 75–113 A of load before the 125% factor — so most need two or three dedicated circuits, and often a service upgrade.',
          es: 'Los calentadores sin tanque calientan bajo demanda y consumen mucha corriente. Una unidad de casa completa suele ser 18–27 kW — 75–113 A de carga antes del factor de 125% — así que la mayoría requiere dos o tres circuitos dedicados, y a menudo un upgrade de servicio.',
        },
      },
      { type: 'table', tableSlug: 'tankless-water-heater' },
      {
        type: 'callout',
        kind: 'warning',
        text: {
          en: 'Before quoting a tankless unit, add up the load and check the service. A 27 kW unit is ~113 A on its own — it can exceed a 100 A service and force a panel or service upgrade. Always follow the installation manual.',
          es: 'Antes de cotizar una unidad sin tanque, suma la carga y revisa el servicio. Una unidad de 27 kW es ~113 A por sí sola — puede exceder un servicio de 100 A y obligar a un upgrade de panel o servicio. Sigue siempre el manual de instalación.',
        },
      },
    ],
  }
]
