// Filtro por tema, subtema o grupo para tarjetas y preguntas.
// Valores: "t3" (tema), "s:t3.2" (subtema) o el nombre del grupo (material del 1er semestre).
export const itemKey = (item) => item.t || item.g || "";

export function matchesFilter(item, value) {
    if (!value) return true;
    if (value.startsWith("s:")) return item.s === value.slice(2);
    return itemKey(item) === value;
}

export function deckOptions(data, items) {
    const options = [];
    const keys = [...new Set(items.map(itemKey))].filter(Boolean);
    keys.forEach((k) => {
        const topic = data.topics.find((t) => t.id === k);
        const count = items.filter((it) => itemKey(it) === k).length;
        options.push({ value: k, label: `${topic ? topic.title : k} (${count})` });
        if (!topic || !topic.subtopics) return;
        topic.subtopics.forEach((st) => {
            const n = items.filter((it) => it.s === st.id).length;
            if (n) options.push({ value: `s:${st.id}`, label: `   ↳ ${st.title} (${n})` });
        });
    });
    return options;
}

function DeckFilter({ id, data, items, value, onChange }) {
    return (
        <select id={id} className="deckfilter" value={value} onChange={(e) => onChange(e.target.value)} aria-label="Filtrar por tema o subtema">
            <option value="">Todos los temas ({items.length})</option>
            {deckOptions(data, items).map((o) => (
                <option key={o.value} value={o.value}>
                    {o.label}
                </option>
            ))}
        </select>
    );
}

export default DeckFilter;
