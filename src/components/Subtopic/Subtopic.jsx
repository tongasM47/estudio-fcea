import { useState } from "react";
import Html from "../Html/Html.jsx";
import { useProgress } from "../../context/ProgressContext.jsx";
import "./Subtopic.css";

// Un subtema: explicación simple, lo que hay que saber, ideas clave y mini ejercicio.
function Subtopic({ subject, subtopic, counts, onCards, onQuiz }) {
    const { state, toggleTopic } = useProgress();
    const [open, setOpen] = useState(false);
    const [showSolution, setShowSolution] = useState(false);
    const key = `${subject}|${subtopic.id}`;
    const seen = !!state.topics[key];

    return (
        <details className="subtopic" open={open} onToggle={(e) => setOpen(e.currentTarget.open)}>
            <summary>
                <span className="st-num mono">{subtopic.id.split(".")[1]}</span>
                <span className="st-title">{subtopic.title}</span>
                {seen && <span className="pill ok">entendido</span>}
            </summary>
            {open && (
                <div className="st-body">
                    {subtopic.src && (
                        <p className="src-ref">
                            <span>Fuente de la cátedra:</span> <Html as="span" html={subtopic.src} />
                        </p>
                    )}
                    <div className="sec">
                        <h4>Explicado simple</h4>
                        <Html className="read eli5" html={subtopic.eli5} />
                    </div>
                    <div className="sec">
                        <h4>Lo que tenés que saber</h4>
                        <Html className="read tscroll" html={subtopic.explain} />
                    </div>
                    {subtopic.keys && subtopic.keys.length > 0 && (
                        <div className="sec">
                            <h4>Ideas clave</h4>
                            <ul className="st-keys read">
                                {subtopic.keys.map((k, i) => (
                                    <Html as="li" key={i} html={k} />
                                ))}
                            </ul>
                        </div>
                    )}
                    {subtopic.example && (
                        <div className="sec">
                            <h4>Mini ejercicio</h4>
                            <div className="example">
                                <Html className="read tscroll" html={subtopic.example.q} />
                                <button className="btn small" style={{ marginTop: 8 }} onClick={() => setShowSolution(!showSolution)}>
                                    {showSolution ? "Ocultar solución" : "Ver solución"}
                                </button>
                                {showSolution && (
                                    <div className="sol tscroll">
                                        <Html html={subtopic.example.sol} />
                                    </div>
                                )}
                            </div>
                        </div>
                    )}
                    <div className="row" style={{ marginTop: 12 }}>
                        <button className={`btn small ${seen ? "" : "primary"}`} onClick={() => toggleTopic(key)}>
                            {seen ? "Marcar como pendiente" : "Ya lo entendí"}
                        </button>
                        {counts.cards > 0 && (
                            <button className="btn small" onClick={() => onCards(`s:${subtopic.id}`)}>
                                {counts.cards} flashcards
                            </button>
                        )}
                        {counts.questions > 0 && (
                            <button className="btn small" onClick={() => onQuiz(`s:${subtopic.id}`)}>
                                {counts.questions} preguntas
                            </button>
                        )}
                    </div>
                </div>
            )}
        </details>
    );
}

export default Subtopic;
