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
    ed: {},
    micro: {},
    cc: {},
    ago: {},
};

export function podcastFor(subject, topicId) {
    const p = (PODCASTS[subject] || {})[topicId];
    return p ? { ...p, src: `audio/${subject}/${topicId}.mp3` } : null;
}

export function hasPodcasts(subject) {
    return subject in PODCASTS;
}

export default PODCASTS;
