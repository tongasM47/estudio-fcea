import { useState } from "react";
import Html from "../Html/Html.jsx";
import "./Exercises.css";

function Exercise({ exercise, index }) {
    const [show, setShow] = useState(false);
    return (
        <div className="q exercise">
            <div className="qh">
                <span>
                    Ejercicio {index + 1} · {exercise.g}
                </span>
            </div>
            <h4 className="ex-title">{exercise.title}</h4>
            {exercise.q && <Html className="qtext" html={exercise.q} />}
            <div className="row" style={{ marginTop: 8 }}>
                <button className="btn small" onClick={() => setShow(!show)}>
                    {show ? "Ocultar resolución" : "Ver resolución"}
                </button>
            </div>
            {show && (
                <div className="sol tscroll legacy">
                    <h4>Resolución</h4>
                    {exercise.steps ? (
                        <ol>
                            {exercise.steps.map((step, i) => (
                                <Html as="li" key={i} html={step} />
                            ))}
                        </ol>
                    ) : (
                        <Html html={exercise.html} />
                    )}
                </div>
            )}
        </div>
    );
}

// Ejercicios resueltos paso a paso, filtrables por unidad.
function Exercises({ data }) {
    const groups = [...new Set(data.exercises.map((e) => e.g))];
    const [group, setGroup] = useState("");
    const list = data.exercises.filter((e) => !group || e.g === group);

    return (
        <div>
            <p className="lede">Intentá cada uno en papel antes de abrir la resolución.</p>
            <div className="row">
                <select id="ex-group" value={group} onChange={(e) => setGroup(e.target.value)} aria-label="Filtrar por unidad">
                    <option value="">Todas las unidades ({data.exercises.length})</option>
                    {groups.map((g) => (
                        <option key={g} value={g}>
                            {g}
                        </option>
                    ))}
                </select>
            </div>
            <div style={{ marginTop: 12 }}>
                {list.map((exercise) => (
                    <Exercise key={data.exercises.indexOf(exercise)} exercise={exercise} index={data.exercises.indexOf(exercise)} />
                ))}
            </div>
        </div>
    );
}

export default Exercises;
