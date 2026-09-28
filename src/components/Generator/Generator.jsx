import { useState } from "react";
import Html from "../Html/Html.jsx";
import QuestionOptions from "../QuestionOptions/QuestionOptions.jsx";
import { CALC_GEN } from "../../lib/generator.js";

const KINDS = [
    { id: "limit", label: "Límites con Taylor" },
    { id: "series", label: "Series geométricas" },
    { id: "inverse", label: "Derivada de la inversa" },
];

// Ejercicios nuevos al azar con los moldes de la 1ª revisión de Cálculo.
function Generator() {
    const [kind, setKind] = useState("limit");
    const [exercise, setExercise] = useState(() => CALC_GEN.limit());
    const [picked, setPicked] = useState(null);
    const [score, setScore] = useState({ ok: 0, n: 0 });

    const next = (k) => {
        setKind(k);
        setExercise(CALC_GEN[k]());
        setPicked(null);
    };

    const pick = (i) => {
        setPicked(i);
        setScore((s) => ({ ok: s.ok + (i === exercise.ans ? 1 : 0), n: s.n + 1 }));
    };

    const answered = picked !== null;

    return (
        <div>
            <p className="lede">Ejercicios nuevos cada vez, con los mismos moldes de la revisión. Practicá hasta que la receta te salga sola.</p>
            <div className="row">
                {KINDS.map((k) => (
                    <button key={k.id} className={`btn ${kind === k.id ? "primary" : ""}`} onClick={() => next(k.id)}>
                        {k.label}
                    </button>
                ))}
                <span className="muted mono" style={{ fontSize: 13 }}>
                    {score.ok}/{score.n} bien
                </span>
            </div>
            <div className="q" style={{ marginTop: 12 }}>
                <div className="qh">
                    <span>{exercise.title}</span>
                </div>
                <Html className="qtext tscroll" html={exercise.q} />
                <QuestionOptions options={exercise.opts} picked={picked} answer={exercise.ans} reveal={answered} disabled={answered} onPick={pick} />
                {answered && (
                    <div className="sol tscroll">
                        <h4>Solución</h4>
                        <Html html={exercise.sol} />
                    </div>
                )}
                <div className="row" style={{ marginTop: 10 }}>
                    <button className={`btn ${answered ? "primary" : ""}`} onClick={() => next(kind)}>
                        Otro ejercicio
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Generator;
