import Checklist from "../../components/Checklist/Checklist.jsx";
import ErrorList from "../../components/ErrorList/ErrorList.jsx";
import ExamList from "../../components/ExamList/ExamList.jsx";
import ExamRunner from "../../components/ExamRunner/ExamRunner.jsx";
import Exercises from "../../components/Exercises/Exercises.jsx";
import Flashcards from "../../components/Flashcards/Flashcards.jsx";
import Generator from "../../components/Generator/Generator.jsx";
import Quiz from "../../components/Quiz/Quiz.jsx";
import TopicList from "../../components/TopicList/TopicList.jsx";
import { useProgress } from "../../context/ProgressContext.jsx";
import { EXAMS_INFO } from "../../data/plan.js";
import { ORDER, SUBJECTS, subjectColor } from "../../data/subjects.js";
import { diffDays, todayStr } from "../../lib/dates.js";
import { cardCounts, errorCount, subjectProgress } from "../../lib/progress.js";
import "./SubjectPage.css";

// route = { view, tab, exam, topic, cardTopic, quizTopic }
function SubjectPage({ route, onRoute }) {
    const { state } = useProgress();
    const id = route.view;
    const info = EXAMS_INFO[id];
    const data = SUBJECTS[id];
    const progress = subjectProgress(state, id);
    const cards = cardCounts(state, id);
    const left = diffDays(todayStr(), info.date);

    const tabs = [{ id: "temas", label: "Temas", count: data.topics.length + data.notes.length }];
    if (data.flashcards.length) tabs.push({ id: "cards", label: "Flashcards", count: cards.due + cards.fresh });
    if (data.questions.length) tabs.push({ id: "quiz", label: "Preguntas", count: data.questions.length });
    if (data.exercises.length) tabs.push({ id: "ejercicios", label: "Ejercicios", count: data.exercises.length });
    if (data.exams.length) tabs.push({ id: "exams", label: "Parciales", count: data.exams.length });
    if (id === "calc") tabs.push({ id: "gen", label: "Generador", count: null });
    if (data.checklist.length) tabs.push({ id: "checklist", label: "Checklist", count: data.checklist.length });
    tabs.push({ id: "errors", label: "Errores", count: errorCount(state, id) });

    const setTab = (tab, extra = {}) => onRoute({ ...route, tab, exam: null, topic: null, cardTopic: "", quizTopic: "", ...extra });
    const exam = route.exam ? data.exams.find((e) => e.id === route.exam) : null;

    let body = null;
    if (exam) body = <ExamRunner key={exam.id} subject={id} exam={exam} onBack={() => setTab("exams")} />;
    else if (route.tab === "cards") body = <Flashcards key={`${id}-${route.cardTopic}`} subject={id} data={data} initialTopic={route.cardTopic} />;
    else if (route.tab === "quiz") body = <Quiz key={`${id}-${route.quizTopic}`} subject={id} data={data} initialTopic={route.quizTopic} />;
    else if (route.tab === "exams") body = <ExamList subject={id} data={data} onOpen={(examId) => onRoute({ ...route, exam: examId })} />;
    else if (route.tab === "gen") body = <Generator />;
    else if (route.tab === "errors") body = <ErrorList subject={id} data={data} />;
    else if (route.tab === "ejercicios") body = <Exercises key={id} data={data} />;
    else if (route.tab === "checklist") body = <Checklist subject={id} data={data} />;
    else
        body = (
            <TopicList
                key={`${id}-${route.topic}`}
                subject={id}
                data={data}
                openTopic={route.topic}
                onCards={(t) => setTab("cards", { cardTopic: t })}
                onQuiz={(t) => setTab("quiz", { quizTopic: t })}
            />
        );

    const current = ORDER.includes(id);
    let when = "ya rendida";
    if (left > 0) when = `faltan ${left} días`;
    else if (left === 0) when = "es hoy";

    return (
        <div style={{ "--c": subjectColor(id) }}>
            <div className="subhead">
                <div>
                    <div className="tag">
                        {info.what}
                        {current ? ` · ${when}` : ""}
                    </div>
                    <h2>{info.name}</h2>
                </div>
                <div className="stats">
                    <div className="stat">
                        <b>
                            {progress.topics}/{progress.topicsTotal}
                        </b>
                        <span>temas y apuntes</span>
                    </div>
                    <div className="stat">
                        <b>
                            {progress.cards}/{data.flashcards.length}
                        </b>
                        <span>tarjetas dominadas</span>
                    </div>
                    {data.exams.length > 0 && (
                        <div className="stat">
                            <b>
                                {progress.exams}/{data.exams.length}
                            </b>
                            <span>parciales hechos</span>
                        </div>
                    )}
                </div>
            </div>
            <dl className="facts">
                {info.facts.map(([k, v]) => (
                    <div key={k}>
                        <dt>{k}</dt>
                        <dd>{v}</dd>
                    </div>
                ))}
            </dl>
            {info.strategy && (
                <p className="strategy">
                    <strong>Estrategia de puntaje.</strong> {info.strategy}
                </p>
            )}
            <div className="tabs" role="toolbar">
                {tabs.map((t) => (
                    <button key={t.id} aria-pressed={!exam && route.tab === t.id} onClick={() => setTab(t.id)}>
                        {t.label}
                        {t.count != null && <span className="ct">{t.count}</span>}
                    </button>
                ))}
            </div>
            <div>{body}</div>
        </div>
    );
}

export default SubjectPage;
