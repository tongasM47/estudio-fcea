import { useEffect, useState } from "react";
import Html from "../Html/Html.jsx";
import QuestionOptions from "../QuestionOptions/QuestionOptions.jsx";
import { useProgress } from "../../context/ProgressContext.jsx";
import { MINIMUMS } from "../../data/subjects.js";
import { LETTERS, formatAmount, formatNumber } from "../../lib/format.js";
import { examMax, gradeQuestion, isAnswered } from "../../lib/grading.js";
import "./ExamRunner.css";

function elapsedSeconds(draft) {
    const running = draft.paused || draft.done ? 0 : (Date.now() - draft.start) / 1000;
    return Math.floor((draft.used || 0) + running);
}

function formatClock(seconds) {
    const negative = seconds < 0;
    const s = Math.abs(seconds);
    const text = `${String(Math.floor(s / 60)).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}`;
    return negative ? `+${text}` : text;
}

function Verdict({ grade, q }) {
    if (!grade) return null;
    if (grade.status === "ok") return <span className="verdict ok">+{formatNumber(grade.points)}</span>;
    if (grade.status === "wrong") return <span className="verdict no">{formatNumber(grade.points)}</span>;
    if (grade.status === "self")
        return (
            <span className="verdict ok">
                {formatNumber(grade.points)} / {q.pts}
            </span>
        );
    return <span className="verdict na">{q.type === "open" ? "sin autoevaluar" : "en blanco"}</span>;
}

function ExamQuestion({ exam, q, index, draft, grade, onChange }) {
    const answer = draft.answers[index] || {};
    const done = draft.done;
    const reveal = done || (draft.practice && (q.type === "open" ? answer.shown : q.type === "num" ? answer.checked : answer.value != null));

    let input = null;
    if (q.type === "num") {
        input = (
            <div className="numin">
                <label htmlFor={`num-${index}`} className="muted" style={{ fontSize: 13 }}>
                    Respuesta
                </label>
                <input
                    id={`num-${index}`}
                    inputMode="decimal"
                    value={answer.value == null ? "" : answer.value}
                    disabled={done}
                    placeholder="Ej: 26.200"
                    onChange={(e) => onChange(index, { value: e.target.value, checked: false })}
                />
                <span className="muted" style={{ fontSize: 12 }}>
                    respuesta numérica
                </span>
                {draft.practice && !done && (
                    <button className="btn small" onClick={() => onChange(index, { checked: true })}>
                        Comprobar
                    </button>
                )}
            </div>
        );
    } else if (q.type === "open") {
        input = (
            <>
                <textarea
                    id={`open-${index}`}
                    readOnly={done}
                    value={answer.text || ""}
                    placeholder="Escribí tu respuesta como la escribirías en la prueba."
                    onChange={(e) => onChange(index, { text: e.target.value })}
                />
                {!done && draft.practice && (
                    <div className="row" style={{ marginTop: 6 }}>
                        <button className="btn small" onClick={() => onChange(index, { shown: true })}>
                            Ver pauta
                        </button>
                    </div>
                )}
            </>
        );
    } else {
        input = (
            <>
                <QuestionOptions
                    options={q.opts}
                    picked={answer.value}
                    answer={q.ans}
                    reveal={reveal}
                    disabled={done}
                    onPick={(j) => onChange(index, { value: j })}
                />
                {!done && answer.value != null && (
                    <button className="btn small" style={{ marginTop: 6 }} onClick={() => onChange(index, { value: null })}>
                        Dejar en blanco
                    </button>
                )}
            </>
        );
    }

    let solTitle = `Solución · correcta: ${LETTERS[q.ans]}`;
    if (q.type === "open") solTitle = "Pauta / respuesta modelo";
    if (q.type === "num") solTitle = "Solución";

    return (
        <div className="q">
            <div className="qh">
                <span>
                    Pregunta {index + 1}
                    {q.type === "open" ? ` · ${q.pts} pts` : ""}
                </span>
                <Verdict grade={grade} q={q} />
            </div>
            <Html className="qtext tscroll" html={q.q} />
            {input}
            {reveal && (
                <div className="sol tscroll">
                    <h4>{solTitle}</h4>
                    {q.type === "num" && (
                        <p>
                            <strong>
                                Respuesta: <span className="mono">{formatAmount(q.ans)}</span>
                            </strong>
                        </p>
                    )}
                    <Html html={q.sol} />
                </div>
            )}
            {done && q.type === "open" && (
                <div className="selfscore">
                    <label htmlFor={`self-${index}`}>Comparando con la pauta, me doy</label>
                    <input
                        id={`self-${index}`}
                        inputMode="decimal"
                        value={answer.self == null ? "" : answer.self}
                        onChange={(e) => onChange(index, { self: e.target.value })}
                    />
                    de {q.pts} puntos
                </div>
            )}
        </div>
    );
}

// Modo examen: reloj, respuestas guardadas a medida que avanzás y corrección con la regla real.
function ExamRunner({ subject, exam, onBack }) {
    const { state, setDraft, resetDraft, saveResult, updateSelfScore } = useProgress();
    const key = `${subject}|${exam.id}`;
    const draft = state.drafts[key];
    const [, setTick] = useState(0);
    const [confirmSubmit, setConfirmSubmit] = useState(false);

    useEffect(() => {
        if (!draft) setDraft(key, () => {});
    }, [draft, key, setDraft]);

    useEffect(() => {
        const timer = setInterval(() => setTick((t) => t + 1), 1000);
        return () => clearInterval(timer);
    }, []);

    if (!draft) return null;

    const onlyOpen = exam.questions.every((q) => q.type === "open");
    const grades = draft.done ? exam.questions.map((q, i) => gradeQuestion(exam, q, draft.answers[i])) : null;
    const score = grades ? grades.reduce((a, g) => a + g.points, 0) : 0;
    const max = examMax(exam);
    const left = exam.minutes * 60 - elapsedSeconds(draft);
    const blanks = exam.questions.filter((q, i) => !isAnswered(q, draft.answers[i])).length;

    const changeAnswer = (index, patch) => {
        setDraft(key, (d) => {
            d.answers[index] = { ...(d.answers[index] || {}), ...patch };
        });
        if (draft.done && patch.self != null) {
            const answers = { ...draft.answers, [index]: { ...(draft.answers[index] || {}), ...patch } };
            const total = exam.questions.reduce((a, q, i) => a + gradeQuestion(exam, q, answers[i]).points, 0);
            updateSelfScore(key, total);
        }
    };

    const submit = () => {
        if (blanks && !confirmSubmit) {
            setConfirmSubmit(true);
            return;
        }
        const graded = exam.questions.map((q, i) => gradeQuestion(exam, q, draft.answers[i]));
        const total = graded.reduce((a, g) => a + g.points, 0);
        const errorKeys = [];
        const okKeys = [];
        graded.forEach((g, i) => {
            const errKey = `${subject}|e|${exam.id}|${i}`;
            if (g.status === "wrong" || (g.status === "blank" && exam.questions[i].type !== "open")) errorKeys.push(errKey);
            else okKeys.push(errKey);
        });
        setDraft(key, (d) => {
            d.used = elapsedSeconds(d);
            d.paused = false;
            d.done = true;
        });
        saveResult(key, total, errorKeys, okKeys);
        setConfirmSubmit(false);
        window.scrollTo(0, 0);
    };

    const togglePause = () =>
        setDraft(key, (d) => {
            if (d.paused) {
                d.paused = false;
                d.start = Date.now();
            } else {
                d.used = elapsedSeconds(d);
                d.paused = true;
            }
        });

    const minimum = MINIMUMS[subject];
    const scaled = subject === "ed" ? Math.min(45, score) : score;
    const counts = grades && {
        ok: grades.filter((g) => g.status === "ok").length,
        wrong: grades.filter((g) => g.status === "wrong").length,
        blank: grades.filter((g) => g.status === "blank").length,
    };

    return (
        <div>
            <div className="row">
                <button className="btn small" onClick={onBack}>
                    ← Volver a la lista
                </button>
            </div>
            <h3>{exam.title}</h3>
            {exam.note && <Html className="casenote tscroll" html={exam.note} />}

            <div className="examtop">
                <div>
                    <span className={`timer mono ${left < 300 ? "low" : ""}`}>{left >= 0 ? formatClock(left) : `Tiempo ${formatClock(left)}`}</span>{" "}
                    <span className="muted" style={{ fontSize: 13 }}>
                        de {exam.minutes} min
                    </span>
                </div>
                <div className="row">
                    {!draft.done && (
                        <>
                            <label className="row" style={{ fontSize: 13 }}>
                                <input
                                    type="checkbox"
                                    id="practice"
                                    checked={draft.practice}
                                    onChange={(e) => setDraft(key, (d) => (d.practice = e.target.checked))}
                                />{" "}
                                Ver solución al responder
                            </label>
                            <button className="btn small" onClick={togglePause}>
                                {draft.paused ? "Seguir reloj" : "Pausar"}
                            </button>
                            <button className="btn primary small" onClick={submit}>
                                {confirmSubmit ? `Quedan ${blanks} sin responder. Entregar igual` : "Entregar"}
                            </button>
                        </>
                    )}
                    {draft.done && (
                        <button className="btn small" onClick={() => resetDraft(key)}>
                            Hacerlo de nuevo
                        </button>
                    )}
                </div>
            </div>

            {draft.done && (
                <div className="scorebox">
                    <div className="big">
                        {formatNumber(score)}
                        {max ? ` / ${formatNumber(max)}` : ""}
                    </div>
                    <div>
                        {onlyOpen
                            ? "Puntaje autoevaluado con la pauta de cada pregunta. En el parcial real contestás solo 4 de las 5 teóricas."
                            : `${counts.ok} bien · ${counts.wrong} mal · ${counts.blank} en blanco. Regla: +${formatNumber(exam.scoring.correct)} bien, ${formatNumber(exam.scoring.wrong)} mal${exam.questions.some((q) => q.type === "num") ? " (las numéricas mal valen 0)" : ""}.`}
                        {minimum && max ? (
                            <p style={{ margin: "6px 0 0" }}>
                                {scaled >= minimum ? <span className="verdict ok">Salvás</span> : <span className="verdict no">No llegás</span>} El mínimo del
                                parcial es {minimum} puntos
                                {subject === "ed" ? " (sobre 45)" : ""}.
                            </p>
                        ) : null}
                    </div>
                </div>
            )}

            {exam.questions.map((q, i) => (
                <ExamQuestion key={i} exam={exam} q={q} index={i} draft={draft} grade={grades ? grades[i] : null} onChange={changeAnswer} />
            ))}

            {!draft.done && (
                <div className="row">
                    <button className="btn primary" onClick={submit}>
                        {confirmSubmit ? `Quedan ${blanks} sin responder. Entregar igual` : "Entregar y corregir"}
                    </button>
                </div>
            )}
        </div>
    );
}

export default ExamRunner;
