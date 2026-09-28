// Podcasts por unidad (resúmenes de audio generados con NotebookLM a partir de fuentes-podcast/).
// Para sumar uno: copiá el mp3 a public/audio/<materia>/<tema>.mp3 y agregá la entrada acá.
// min = duración aproximada en minutos.
const PODCASTS = {
    calc: {
        t3: { title: "Claves para dominar la función inversa", min: 26 },
        t4: { title: "Claves para la derivada de la inversa", min: 17 },
        t6: { title: "El método del Juez para Taylor", min: 26 },
        t8: { title: "Claves de series geométricas", min: 24 },
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
