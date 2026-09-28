import { useState } from "react";
import Html from "../Html/Html.jsx";
import QuestionOptions from "../QuestionOptions/QuestionOptions.jsx";
import { useProgress } from "../../context/ProgressContext.jsx";
import { LETTERS, formatAmount } from "../../lib/format.js";

// Resuelve una clave de error a su pregunta. Claves: "<materia>|q|<i>" o "<materia>|e|<examen>|<i>".
function resolveError(key, data) {
    const parts = key.split("|");
    if (parts[1] === "q") {
        const q = data.questions[Number(parts[2])];
        if (!q) return null;
        return { q, title: "Pregunta conceptual", solution: q.exp, correct: `Correcta: ${LETTERS[q.ans]}` };
    }
    const exam = data.exams.find((e) => e.id === parts[2]);
    const q = exam && exam.questions[Number(parts[3])];
    if (!q) return null;
    return {
        q,
        title: `${exam.title} · pregunta ${Number(parts[3]) + 1}`,
        solution: q.sol,
        correct: q.type === "num" ? `Respuesta: ${formatAmount(q.ans)}` : `Correcta: ${LETTERS[q.ans]}`,
    };
}

function ErrorItem({ errorKey, item, onClear }) {
    const [show, setShow] = useState(false);
    return (
        <div className="q">
            <div className="qh">
                <span>{item.title}</span>
            </div>
            <Html className="qtext tscroll" html={item.q.q} />
            {item.q.opts && <QuestionOptions options={item.q.opts} disabled />}
            <div className="row" style={{ marginTop: 10 }}>
                <button className="btn small" onClick={() => setShow(!show)}>
                    {show ? "Ocultar solución" : "Ver solución"}
                </button>
                <button className="btn small" onClick={() => onClear(errorKey)}>
                    Ya la entendí
                </button>
            </div>
            {show && (
                <div className="sol tscroll">
                    <h4>{item.correct}</h4>
                    <Html html={item.solution} />
                </div>
            )}
        </div>
    );
}

function ErrorList({ subject, data }) {
    const { state, clearError } = useProgress();
    const keys = Object.keys(state.errors)
        .filter((k) => k.startsWith(`${subject}|`))
        .sort((a, b) => state.errors[b].at - state.errors[a].at);
    const items = keys.map((k) => [k, resolveError(k, data)]).filter(([, item]) => item);

    if (!items.length) {
        return <div className="empty">Sin errores guardados. Cuando fallás una pregunta o una pregunta de parcial, aparece acá con su solución.</div>;
    }

    return (
        <div>
            <p className="lede">
                {items.length} preguntas falladas. Intentá resolverla de nuevo antes de abrir la solución; cuando la tengas clara, sacala de la lista.
            </p>
            {items.map(([k, item]) => (
                <ErrorItem key={k} errorKey={k} item={item} onClear={clearError} />
            ))}
        </div>
    );
}

export default ErrorList;
