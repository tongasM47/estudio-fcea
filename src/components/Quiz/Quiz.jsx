import { useState } from "react";
import Html from "../Html/Html.jsx";
import DeckFilter, { matchesFilter } from "../DeckFilter/DeckFilter.jsx";
import QuestionOptions from "../QuestionOptions/QuestionOptions.jsx";
import { useProgress } from "../../context/ProgressContext.jsx";
import { LETTERS } from "../../lib/format.js";

// Orden: primero las que nunca respondiste o más fallaste.
function buildOrder(state, subject, data, topic) {
    const ids = data.questions.map((q, i) => i).filter((i) => !topic || matchesFilter(data.questions[i], topic));
    const score = (i) => {
        const st = state.quiz[`${subject}|${i}`];
        return st ? st.ok - st.bad * 2 : -0.5;
    };
    return ids.sort((a, b) => score(a) - score(b) || Math.random() - 0.5);
}

function Quiz({ subject, data, initialTopic = "" }) {
    const { state, answerQuiz } = useProgress();
    const [topic, setTopic] = useState(initialTopic);
    const [order, setOrder] = useState(() => buildOrder(state, subject, data, initialTopic));
    const [pos, setPos] = useState(0);
    const [picked, setPicked] = useState(null);
    const [tally, setTally] = useState({ ok: 0, bad: 0 });

    const restart = (newTopic) => {
        setTopic(newTopic);
        setOrder(buildOrder(state, subject, data, newTopic));
        setPos(0);
        setPicked(null);
        setTally({ ok: 0, bad: 0 });
    };

    const pick = (i) => {
        const index = order[pos];
        const correct = i === data.questions[index].ans;
        setPicked(i);
        setTally((t) => ({ ok: t.ok + (correct ? 1 : 0), bad: t.bad + (correct ? 0 : 1) }));
        answerQuiz(subject, index, correct);
    };

    const head = (
        <div className="row">
            <DeckFilter id="qz-topic" data={data} items={data.questions} value={topic} onChange={(v) => restart(v)} />
            <span className="muted mono" style={{ fontSize: 13 }}>
                Bien {tally.ok} · Mal {tally.bad}
            </span>
        </div>
    );

    if (pos >= order.length) {
        return (
            <div>
                {head}
                <div className="empty" style={{ marginTop: 14 }}>
                    Terminaste esta tanda: {tally.ok} bien y {tally.bad} mal. Las que erraste quedaron en Errores.
                    <br />
                    <button className="btn" style={{ marginTop: 10 }} onClick={() => restart(topic)}>
                        Otra tanda
                    </button>
                </div>
            </div>
        );
    }

    const q = data.questions[order[pos]];
    const parentTopic = data.topics.find((t) => t.id === q.t);
    const subTopic = parentTopic && q.s ? (parentTopic.subtopics || []).find((st) => st.id === q.s) : null;
    const qTopic = parentTopic ? { title: subTopic ? `${parentTopic.title} · ${subTopic.title}` : parentTopic.title } : q.g ? { title: q.g } : null;
    const answered = picked !== null;

    return (
        <div>
            {head}
            <div className="q" style={{ marginTop: 12 }}>
                <div className="qh">
                    <span>{qTopic ? qTopic.title : ""}</span>
                    <span>
                        {pos + 1} / {order.length}
                    </span>
                </div>
                <Html className="qtext tscroll" html={q.q} />
                <QuestionOptions options={q.opts} picked={picked} answer={q.ans} reveal={answered} disabled={answered} onPick={pick} />
                {answered && (
                    <>
                        <div className="sol">
                            <h4>{picked === q.ans ? "Correcto" : `Incorrecto · la correcta es la ${LETTERS[q.ans]}`}</h4>
                            <Html html={q.exp} />
                        </div>
                        <div className="row" style={{ marginTop: 10 }}>
                            <button
                                className="btn primary"
                                onClick={() => {
                                    setPos(pos + 1);
                                    setPicked(null);
                                }}
                            >
                                Siguiente
                            </button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}

export default Quiz;
