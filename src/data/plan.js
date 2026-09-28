// Datos de cada parcial y plan día a día (fechas 2026, hora de Montevideo). h = horas sugeridas.
export const EXAMS_INFO = {
    calc: {
        name: "Cálculo 1B",
        short: "Cálculo",
        date: "2026-10-05",
        time: "",
        what: "1ª revisión",
        facts: [
            ["Fecha", "Lunes 05/10"],
            ["Puntaje", "40 pts · mínimo 8"],
            ["Formato", "10 múltiple opción, 4 opciones · 2 h · sin materiales"],
            ["Temas", "Funciones e inversa · derivada de la inversa · Taylor y límites · series geométricas"],
            ["Para exonerar", "50 pts entre los dos parciales (el 2º vale 60, mínimo 22)"],
        ],
        strategy:
            "Las últimas siete revisiones (2023 a 2026) repiten los mismos 10 moldes de pregunta. Si dominás cada molde, el parcial es predecible. Confirmá en la letra cuánto resta una respuesta mal antes de adivinar.",
    },
    ed: {
        name: "Economía Descriptiva",
        short: "Ec. Descriptiva",
        date: "2026-10-10",
        time: "",
        what: "1ª prueba",
        facts: [
            ["Fecha", "Sábado 10/10"],
            ["Puntaje", "45 pts · mínimo 18 (40%)"],
            ["Formato", "32 múltiple opción, 4 opciones · +1,5 bien / −0,5 mal · 2 h · calculadora"],
            ["Temas", "Sistema de Cuentas Nacionales: COU, cuentas corrientes por sector, cuentas de acumulación"],
            ["Para exonerar", "50 pts en total, con al menos 18 en cada prueba"],
        ],
        strategy:
            "Adivinar entre 4 opciones tiene valor esperado 0. Si descartaste una opción, conviene responder: el valor esperado pasa a ser positivo. Completá el COU entero antes de mirar las opciones.",
    },
    micro: {
        name: "Introducción a la Microeconomía",
        short: "Micro",
        date: "2026-10-14",
        time: "13:00",
        what: "1ª revisión",
        facts: [
            ["Fecha", "Miércoles 14/10 · 13:00"],
            ["Puntaje", "40 pts · mínimo 16"],
            ["Formato", "10 múltiple opción, 3 opciones · +4 bien / −1 mal · 2 h"],
            ["Temas", "Libro CORE, capítulos 1 a 5"],
            ["Además", "Apuntes completos del 1er semestre, con el 2º parcial (capítulos 6 a 8)"],
        ],
        strategy: "Con 3 opciones y −1 por error, adivinar al azar vale +0,67 en promedio. Respondé todas las preguntas, aunque dudes.",
    },
    cc: {
        name: "Conceptos Contables",
        short: "Contables",
        date: "2026-10-16",
        time: "08:00",
        what: "1ª revisión",
        facts: [
            ["Fecha", "Viernes 16/10 · 08:00 · presencial, varias tandas"],
            ["Puntaje", "30 pts · se aprueba con 12"],
            ["Formato", "5 de respuesta numérica + 5 múltiple opción (3 opciones, −0,5 mal) · 1 hora"],
            ["Temas", "Unidades 1 a 6, hasta ciclo contable elemental (IVA, medios de pago, sueldos)"],
            ["Además", "Apuntes completos del 1er semestre, con el 2º parcial (unidades 7 y 8)"],
            ["Llevá", "Cédula o pasaporte vigente, calculadora común, lápiz y goma"],
        ],
        strategy:
            "En las numéricas escribí siempre un número: el error no resta. En las múltiple opción, adivinar sin descartar nada vale 0. Si el número escrito no coincide con el círculo marcado, la pregunta vale cero.",
    },
    ago: {
        name: "Administración y Gestión de las Organizaciones II",
        short: "AYGO II",
        date: "2026-10-17",
        time: "",
        what: "1ª revisión",
        facts: [
            ["Fecha", "Sábado 17/10"],
            ["Puntaje", "35 pts · mínimo 14"],
            ["Formato", "Caso práctico (23 pts) + 4 de 5 preguntas teóricas (12 pts) · 2 h a 2 h 30"],
            ["Temas", "Módulo I: UT1 a UT5"],
            [
                "Ojo",
                "Además necesitás 12 pts entre trabajo de campo, controles de lectura y compromiso. Te perdiste el 1er control (4 pts): no faltes al 2º (14/11) ni al 3º (05/12).",
            ],
        ],
        strategy:
            "En el caso, cada respuesta tiene tres pasos: definís el concepto del autor, lo encontrás en el caso citando el párrafo y justificás. En la parte teórica contestá solo 4 de las 5.",
    },
};

// Materias del 1er semestre 2026 (ya rendidas; quedan como material completo de P1 y P2)
EXAMS_INFO.calc1a = {
    name: "Cálculo I/A",
    short: "Cálculo I/A",
    date: "2026-07-07",
    time: "18:00",
    what: "1er semestre · material completo",
    facts: [
        ["Código", "114A"],
        ["1er parcial", "Funciones: lineales, cuadráticas, otras funciones, exponencial y logarítmica (unidades 1 a 4)"],
        ["2º parcial", "Límites, continuidad, derivadas y optimización (unidades 5 a 9)"],
    ],
    strategy: "",
};
EXAMS_INFO.aygo1 = {
    name: "Administración y Gestión de las Organizaciones I",
    short: "AYGO I",
    date: "2026-07-11",
    time: "08:00",
    what: "1er semestre · material completo",
    facts: [
        ["Código", "A10"],
        ["1er parcial", "Módulos I y II: organizaciones, administradores y proceso administrativo"],
        ["2º parcial", "Módulos III y IV: gerencias funcionales, creación y crecimiento de empresas"],
    ],
    strategy: "",
};

export const PLAN = [
    {
        d: "2026-09-27",
        note: "Arranque. Hoy es medio día: prioridad Cálculo.",
        tasks: [
            { s: "calc", k: "topic", r: "t1", h: 1, l: "Repaso exprés de funciones y derivadas" },
            { s: "calc", k: "topic", r: "t2", h: 1.5, l: "Inyectiva, sobreyectiva, biyectiva" },
            { s: "calc", k: "topic", r: "t3", h: 1.5, l: "Función inversa" },
            { s: "ed", k: "topic", r: "t1", h: 0.5, l: "Qué es la ED y el SCN (solo leer)" },
            { s: "calc", k: "analysis", h: 0.5, l: "Leé el análisis de parciales de Cálculo" },
        ],
    },
    {
        d: "2026-09-28",
        tasks: [
            { s: "calc", k: "topic", r: "t4", h: 2, l: "Derivada de la inversa y regla de la cadena" },
            { s: "calc", k: "cards", h: 0.5, l: "Flashcards de Cálculo (las que venzan)" },
            { s: "ed", k: "topic", r: "t2", h: 3, l: "El COU paso a paso" },
            { s: "ed", k: "quiz", h: 0.5, l: "Preguntas del COU" },
            { s: "ed", k: "analysis", h: 0.5, l: "Leé el análisis de parciales de ED" },
        ],
    },
    {
        d: "2026-09-29",
        tasks: [
            { s: "calc", k: "topic", r: "t5", h: 2, l: "Polinomio de Taylor: tabla de desarrollos de memoria" },
            { s: "calc", k: "topic", r: "t6", h: 2, l: "Límites con Taylor" },
            { s: "calc", k: "gen", h: 0.5, l: "Generador: 5 límites" },
            { s: "ed", k: "topic", r: "t3", h: 1.5, l: "Las tres ópticas del PIB" },
        ],
    },
    {
        d: "2026-09-30",
        tasks: [
            { s: "calc", k: "topic", r: "t7", h: 1.5, l: "Taylor al revés: extremos y operaciones" },
            { s: "calc", k: "topic", r: "t8", h: 1.5, l: "Series geométricas" },
            { s: "ed", k: "topic", r: "t4", h: 1.5, l: "Cuentas de producción y generación del ingreso" },
            { s: "ed", k: "topic", r: "t5", h: 2, l: "Asignación y distribución del ingreso" },
        ],
    },
    {
        d: "2026-10-01",
        tasks: [
            { s: "calc", k: "exam", r: "rev-2026-05", h: 2, l: "Simulá la 1ª revisión mayo 2026 con reloj" },
            { s: "calc", k: "errors", h: 1, l: "Corregí y repasá tus errores" },
            { s: "ed", k: "topic", r: "t6", h: 2, l: "Utilización del ingreso y ahorro" },
            { s: "ed", k: "cards", h: 0.5, l: "Flashcards de ED" },
        ],
    },
    {
        d: "2026-10-02",
        tasks: [
            { s: "calc", k: "exam", r: "rev-2025-10", h: 2, l: "Simulá la 1ª revisión octubre 2025" },
            { s: "calc", k: "gen", h: 1, l: "Generador: series y derivada de la inversa" },
            { s: "ed", k: "topic", r: "t7", h: 3, l: "Cuentas de capital y financiera" },
        ],
    },
    {
        d: "2026-10-03",
        tasks: [
            { s: "calc", k: "exam", r: "rev-2025-05", h: 2, l: "Simulá la 1ª revisión mayo 2025" },
            { s: "calc", k: "exam", r: "rev-2023-10", h: 2, l: "Simulá la 1ª revisión octubre 2023" },
            { s: "ed", k: "quiz", h: 1.5, l: "Preguntas conceptuales de ED (todas)" },
            { s: "ed", k: "cards", h: 0.5, l: "Flashcards de ED" },
        ],
    },
    {
        d: "2026-10-04",
        note: "Víspera de Cálculo: nada nuevo, solo simulacros y errores.",
        tasks: [
            { s: "calc", k: "exam", r: "modelo-1", h: 2, l: "Parcial modelo 1 de Cálculo, con reloj" },
            { s: "calc", k: "exam", r: "modelo-2", h: 1.5, l: "Parcial modelo 2 de Cálculo, con reloj" },
            { s: "calc", k: "errors", h: 1, l: "Última pasada de errores y flashcards" },
            { s: "ed", k: "exam", r: "sim-1", h: 1.5, l: "ED: Módulo 1 del Simulacro 1 (COU)" },
        ],
    },
    {
        d: "2026-10-05",
        exam: "calc",
        note: "Parcial de Cálculo. Dormí bien, repasá solo la tabla de Taylor antes de entrar.",
        tasks: [
            { s: "calc", k: "cards", h: 0.5, l: "Mañana: 15 min de desarrollos de Taylor" },
            { s: "ed", k: "exam", r: "sim-1", h: 2.5, l: "Tarde: terminá y corregí el Simulacro 1 de ED" },
        ],
    },
    {
        d: "2026-10-06",
        note: "Arranca el receso: días completos de estudio.",
        tasks: [
            { s: "ed", k: "errors", h: 2, l: "ED: errores y temas débiles" },
            { s: "ed", k: "exam", r: "sim-2", h: 2.5, l: "Simulacro 2 de ED" },
            { s: "micro", k: "topic", r: "t1", h: 1, l: "U1: crecimiento y capitalismo" },
            { s: "micro", k: "topic", r: "t2", h: 1, l: "U1-U2: función de producción y Malthus" },
            { s: "micro", k: "analysis", h: 0.5, l: "Leé el análisis de parciales de Micro" },
        ],
    },
    {
        d: "2026-10-07",
        tasks: [
            { s: "ed", k: "cards", h: 1, l: "Flashcards de ED" },
            { s: "micro", k: "topic", r: "t3", h: 1.5, l: "U2: costos, renta e isocostos" },
            { s: "micro", k: "topic", r: "t4", h: 2, l: "U3: TMS, frontera factible y óptimo" },
            { s: "ago", k: "topic", r: "t1", h: 1, l: "AYGO: Luthans y Hellriegel" },
            { s: "ago", k: "analysis", h: 0.5, l: "Leé el análisis de parciales de AYGO II" },
        ],
    },
    {
        d: "2026-10-08",
        tasks: [
            { s: "ed", k: "exam", r: "modelo-1", h: 2, l: "ED: Parcial modelo 1 con reloj" },
            { s: "micro", k: "topic", r: "t5", h: 1.5, l: "U3: efecto ingreso y sustitución" },
            { s: "micro", k: "topic", r: "t6", h: 2, l: "U4: teoría de juegos" },
            { s: "ago", k: "topic", r: "t2", h: 1, l: "AYGO: Goleman y Kotter" },
        ],
    },
    {
        d: "2026-10-09",
        note: "Víspera de ED.",
        tasks: [
            { s: "ed", k: "exam", r: "modelo-2", h: 2.5, l: "ED: Parcial modelo 2 y repaso de errores" },
            { s: "micro", k: "topic", r: "t7", h: 1, l: "U4: preferencias sociales y ultimátum" },
            { s: "micro", k: "topic", r: "t8", h: 1.5, l: "U5: Pareto, Ángela y Bruno" },
            { s: "ago", k: "topic", r: "t3", h: 1, l: "AYGO: entorno, cultura y género" },
        ],
    },
    {
        d: "2026-10-10",
        exam: "ed",
        note: "Parcial de Economía Descriptiva.",
        tasks: [
            { s: "micro", k: "cards", h: 1, l: "Tarde: flashcards de Micro" },
            { s: "micro", k: "quiz", h: 1, l: "Tarde: preguntas de Micro" },
        ],
    },
    {
        d: "2026-10-11",
        tasks: [
            { s: "micro", k: "exam", r: "rev-2026-05", h: 2, l: "Simulá la 1ª revisión mayo 2026" },
            { s: "micro", k: "exam", r: "modelo-1", h: 1.5, l: "Parcial modelo 1 de Micro" },
            { s: "cc", k: "topic", r: "t1", h: 1, l: "CC: patrimonio, recursos y fuentes" },
            { s: "cc", k: "topic", r: "t2", h: 1, l: "CC: variaciones patrimoniales" },
            { s: "ago", k: "topic", r: "t4", h: 1, l: "AYGO: Mintzberg" },
            { s: "cc", k: "analysis", h: 0.5, l: "Leé el análisis de parciales de CC" },
        ],
    },
    {
        d: "2026-10-12",
        tasks: [
            { s: "micro", k: "exam", r: "modelo-2", h: 1.5, l: "Parcial modelo 2 de Micro" },
            { s: "micro", k: "errors", h: 1, l: "Micro: errores" },
            { s: "cc", k: "topic", r: "t3", h: 1.5, l: "CC: cuentas y partida doble" },
            { s: "cc", k: "topic", r: "t4", h: 1, l: "CC: comprobantes" },
            { s: "ago", k: "topic", r: "t5", h: 1.5, l: "AYGO: visión, misión y estrategias corporativas" },
        ],
    },
    {
        d: "2026-10-13",
        note: "Víspera de Micro.",
        tasks: [
            { s: "micro", k: "cards", h: 1, l: "Micro: flashcards" },
            { s: "micro", k: "quiz", h: 1, l: "Micro: preguntas falladas" },
            { s: "cc", k: "topic", r: "t5", h: 1.5, l: "CC: compras, ventas y % de utilidad" },
            { s: "cc", k: "topic", r: "t6", h: 1, l: "CC: IVA" },
            { s: "ago", k: "topic", r: "t6", h: 1.5, l: "AYGO: FODA y 5 fuerzas" },
        ],
    },
    {
        d: "2026-10-14",
        exam: "micro",
        note: "Parcial de Micro a las 13:00.",
        tasks: [
            { s: "micro", k: "errors", h: 1, l: "Mañana: repaso rápido de tus errores de Micro" },
            { s: "cc", k: "topic", r: "t7", h: 1.5, l: "Noche: cheques, documentos y tarjetas" },
            { s: "ago", k: "topic", r: "t7", h: 1, l: "Noche: estrategias competitivas" },
        ],
    },
    {
        d: "2026-10-15",
        note: "Víspera de Contables. Mañana es a las 8.",
        tasks: [
            { s: "cc", k: "topic", r: "t8", h: 1.5, l: "CC: sueldos y saldo del BPS" },
            { s: "cc", k: "exam", r: "rev-2026-05-t1v1", h: 1, l: "Simulá la 1ª revisión mayo 2026 (1 hora)" },
            { s: "cc", k: "exam", r: "prac-oficial-rev1", h: 2, l: "Práctico oficial de 17 ejercicios" },
            { s: "cc", k: "exam", r: "modelo-1", h: 1, l: "Parcial modelo 1 de CC (1 hora)" },
            { s: "ago", k: "topic", r: "t8", h: 1, l: "AYGO: implantación (8 componentes)" },
            { s: "cc", k: "exam", r: "modelo-2", h: 1, l: "Parcial modelo 2 de CC (1 hora)" },
        ],
    },
    {
        d: "2026-10-16",
        exam: "cc",
        note: "Parcial de Contables a las 8. La tarde es toda de AYGO.",
        tasks: [
            { s: "ago", k: "topic", r: "t9", h: 1.5, l: "AYGO: toma de decisiones" },
            { s: "ago", k: "exam", r: "rev-2024", h: 1.5, l: "Resolvé el caso Tres Cruces por escrito" },
            { s: "ago", k: "exam", r: "modelo-1", h: 1.5, l: "Resolvé el Parcial modelo 1 por escrito" },
            { s: "ago", k: "cards", h: 1, l: "Flashcards de autores y marcos" },
        ],
    },
    {
        d: "2026-10-17",
        exam: "ago",
        note: "Parcial de AYGO II. Después, descanso.",
        tasks: [{ s: "ago", k: "cards", h: 0.5, l: "Mañana: 30 min de flashcards" }],
    },
];
