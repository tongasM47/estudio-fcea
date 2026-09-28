// Filtro por tema/unidad para tarjetas y preguntas.
// Cada ítem se agrupa por su tema (t) o, en el material anterior, por su grupo (g).
export const itemKey = (item) => item.t || item.g || "";

export function deckOptions(data, items) {
    const keys = [...new Set(items.map(itemKey))].filter(Boolean);
    return keys.map((k) => {
        const topic = data.topics.find((t) => t.id === k);
        return { value: k, label: topic ? topic.title : k };
    });
}

function DeckFilter({ id, data, items, value, onChange }) {
    return (
        <select id={id} value={value} onChange={(e) => onChange(e.target.value)} aria-label="Filtrar por tema">
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
