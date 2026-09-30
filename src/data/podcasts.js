// Podcasts por unidad (resúmenes de audio generados con NotebookLM a partir de fuentes-podcast/).
// Para sumar uno: copiá el mp3 a public/audio/<materia>/<tema>.mp3 y agregá la entrada acá.
// min = duración aproximada en minutos.
const PODCASTS = {
    calc: {
        t1: { title: "Funciones elementales y derivadas", min: 18 },
        t2: { title: "Inyectividad y sobreyectividad en funciones a trozos", min: 24 },
        t3: { title: "Claves para dominar la función inversa", min: 23 },
        t4: { title: "Claves para la derivada de la inversa", min: 26 },
        t5: { title: "Polinomio de Taylor", min: 24 },
        t6: { title: "Límites con Taylor para la revisión", min: 16 },
        t7: { title: "Taylor al revés", min: 17 },
        t8: { title: "Claves de series geométricas", min: 22 },
    },
    ed: {
        t1: { title: "Claves del Sistema de Cuentas Nacionales", min: 25 },
        t2: { title: "Claves del Cuadro de Oferta y Utilización", min: 25 },
        t3: { title: "Claves del PIB para el examen", min: 20 },
        t4: { title: "Claves de producción y generación del ingreso", min: 22 },
        t5: { title: "Claves de asignación y distribución del ingreso", min: 22 },
        t6: { title: "Claves del ahorro nacional bruto", min: 24 },
        t7: { title: "Claves de las cuentas de acumulación", min: 21 },
    },
    micro: {
        t1: { title: "El palo de hockey del capitalismo", min: 17 },
        t2: { title: "La trampa malthusiana y los rendimientos decrecientes", min: 28 },
        t3: { title: "Isocostos y costo de oportunidad", min: 24 },
        t4: { title: "El equilibrio entre tiempo libre y salario", min: 25 },
        t5: { title: "Claves del efecto ingreso y sustitución", min: 15 },
        t6: { title: "Claves de la teoría de juegos", min: 29 },
        t7: { title: "Preferencias sociales y el dilema del free rider", min: 24 },
        t8: { title: "Por qué un reparto injusto puede ser eficiente", min: 18 },
    },
    cc: {
        t1: { title: "Igualdad patrimonial y asiento de apertura", min: 19 },
        t2: { title: "Hechos económicos y variaciones patrimoniales", min: 18 },
        t3: { title: "Las cuentas y las reglas de registración", min: 24 },
        t4: { title: "Repaso de comprobantes y registros contables", min: 19 },
        t5: { title: "Claves del porcentaje de utilidad", min: 13 },
        t6: { title: "Claves para liquidar el IVA sin errores", min: 17 },
        t7: { title: "Contabilización de cheques y tarjetas", min: 27 },
        t8: { title: "Sueldos: liquidación y aportes", min: 27 },
    },
    ago: {
        t1: { title: "El gerente y sus habilidades", min: 16 },
        t3: { title: "Límites de la función gerencial", min: 24 },
        t4: { title: "Claves de Mintzberg: flujos y configuraciones", min: 16 },
        t5: { title: "Visión, misión y estrategias corporativas", min: 27 },
        t6: { title: "FODA, cadena de valor y 5 fuerzas", min: 23 },
        t7: { title: "Estrategias competitivas", min: 17 },
        t8: { title: "Claves para la implantación de la estrategia", min: 29 },
        t9: { title: "Racionalidad limitada y toma de decisiones", min: 16 },
    },
};

export function podcastFor(subject, topicId) {
    const p = (PODCASTS[subject] || {})[topicId];
    return p ? { ...p, src: `audio/${subject}/${topicId}.mp3` } : null;
}

export function hasPodcasts(subject) {
    return subject in PODCASTS;
}

export default PODCASTS;
