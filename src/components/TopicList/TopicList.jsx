import { useEffect, useState } from "react";
import Html from "../Html/Html.jsx";
import Note from "../Note/Note.jsx";
import { useProgress } from "../../context/ProgressContext.jsx";
import "./TopicList.css";

function Topic({ subject, topic, index, open, onCards, onQuiz }) {
    const { state, toggleTopic } = useProgress();
    const [showSolution, setShowSolution] = useState(false);
    const [isOpen, setIsOpen] = useState(open);
    const seen = !!state.topics[`${subject}|${topic.id}`];

    return (
        <details className="topic" id={`topic-${topic.id}`} open={isOpen} onToggle={(e) => setIsOpen(e.currentTarget.open)}>
            <summary>
                <span className="num">{String(index + 1).padStart(2, "0")}</span>
                <span className="tt">{topic.title}</span>
                <span className="row">
                    {seen && <span className="pill ok">estudiado</span>}
                    <span className={`pill ${topic.weight}`}>peso {topic.weight}</span>
                </span>
            </summary>
            {isOpen && (
                <div className="tbody">
                    <div className="sec">
                        <h4>Explicado simple</h4>
                        <Html className="read eli5" html={topic.eli5} />
                    </div>
                    <div className="sec">
                        <h4>Explicación para el parcial</h4>
                        <Html className="read tscroll" html={topic.explain} />
                    </div>
                    <div className="sec">
                        <h4>Receta</h4>
                        <Html className="read" html={topic.recipe} />
                    </div>
                    <div className="sec">
                        <h4>Trampas típicas</h4>
                        <Html className="read" html={topic.pitfalls} />
                    </div>
                    {topic.example && (
                        <div className="sec">
                            <h4>Ejercicio resuelto</h4>
                            <div className="example">
                                <Html className="read tscroll" html={topic.example.q} />
                                <div className="row" style={{ marginTop: 8 }}>
                                    <button className="btn small" onClick={() => setShowSolution(!showSolution)}>
                                        {showSolution ? "Ocultar solución" : "Ver solución"}
                                    </button>
                                </div>
                                {showSolution && (
                                    <div className="sol tscroll">
                                        <h4>Solución</h4>
                                        <Html html={topic.example.sol} />
                                    </div>
                                )}
                            </div>
                        </div>
                    )}
                    <div className="row" style={{ marginTop: 14 }}>
                        <button className={`btn ${seen ? "" : "primary"}`} onClick={() => toggleTopic(`${subject}|${topic.id}`)}>
                            {seen ? "Marcar como pendiente" : "Marcar como estudiado"}
                        </button>
                        <button className="btn" onClick={() => onCards(topic.id)}>
                            Flashcards de este tema
                        </button>
                        <button className="btn" onClick={() => onQuiz(topic.id)}>
                            Preguntas de este tema
                        </button>
                    </div>
                </div>
            )}
        </details>
    );
}

// Temas de la materia en el orden recomendado de estudio.
function TopicList({ subject, data, openTopic, onCards, onQuiz }) {
    useEffect(() => {
        if (!openTopic) return;
        const el = document.getElementById(`topic-${openTopic}`);
        if (el) setTimeout(() => el.scrollIntoView({ block: "start", behavior: "smooth" }), 60);
    }, [openTopic]);

    const parts = ["P1", "P2", "General"].filter((p) => data.notes.some((n) => n.part === p));
    const partTitle = { P1: "Apuntes · 1er parcial", P2: "Apuntes · 2º parcial", General: "Apuntes · mapa, fórmulas, recetas y trampas" };

    return (
        <div>
            {data.topics.length > 0 && (
                <>
                    {data.notes.length > 0 && <h3 className="listhead">Temas de la revisión, en orden de estudio</h3>}
                    {data.topics.map((topic, i) => (
                        <Topic key={topic.id} subject={subject} topic={topic} index={i} open={openTopic === topic.id} onCards={onCards} onQuiz={onQuiz} />
                    ))}
                </>
            )}
            {parts.map((part) => (
                <div key={part}>
                    <h3 className="listhead">{partTitle[part]}</h3>
                    {data.notes
                        .filter((n) => n.part === part)
                        .map((note) => (
                            <Note key={note.id} subject={subject} note={note} />
                        ))}
                </div>
            ))}
        </div>
    );
}

export default TopicList;
