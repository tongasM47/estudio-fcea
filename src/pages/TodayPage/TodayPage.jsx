import ExamRail from "../../components/ExamRail/ExamRail.jsx";
import ProgressBars from "../../components/ProgressBars/ProgressBars.jsx";
import TaskRow from "../../components/TaskRow/TaskRow.jsx";
import { useProgress } from "../../context/ProgressContext.jsx";
import { EXAMS_INFO, PLAN } from "../../data/plan.js";
import { ORDER, subjectColor } from "../../data/subjects.js";
import { formatDay, todayStr } from "../../lib/dates.js";
import { allTasks, cardCounts, dayTasks, errorCount } from "../../lib/progress.js";
import "./TodayPage.css";

const MAX_LATE = 8;

function TodayPage({ onNavigate, onOpenTask }) {
    const { state } = useProgress();
    const today = todayStr();

    let day = PLAN.find((d) => d.d === today);
    let label = "Hoy";
    if (!day) {
        const next = PLAN.find((d) => d.d > today);
        day = next || PLAN[PLAN.length - 1];
        label = next ? "Próximo día del plan" : "Último día del plan";
    }
    const hours = day.tasks.reduce((a, t) => a + t.h, 0);
    const late = allTasks().filter((t) => t.d < today && !state.tasks[t.id]);

    return (
        <>
            <ExamRail onNavigate={onNavigate} />
            <div className="grid2">
                <section className="panel">
                    <h3>
                        {label} · {formatDay(day.d)} <span className="hours">≈ {String(hours).replace(".", ",")} h</span>
                    </h3>
                    {day.note && <p className="note">{day.note}</p>}
                    {day.exam && (
                        <div className="examday" style={{ "--c": subjectColor(day.exam) }}>
                            Hoy rendís {EXAMS_INFO[day.exam].name}
                            {EXAMS_INFO[day.exam].time ? ` a las ${EXAMS_INFO[day.exam].time}` : ""}.
                        </div>
                    )}
                    <div className="day">
                        {dayTasks(day).map((t) => (
                            <TaskRow key={t.id} task={t} onOpen={onOpenTask} />
                        ))}
                    </div>
                    {late.length > 0 && (
                        <>
                            <h3>Atrasadas ({late.length})</h3>
                            <p className="note">Tareas de días anteriores sin marcar. Hacé primero las de la materia que rendís antes.</p>
                            <div className="day">
                                {late.slice(0, MAX_LATE).map((t) => (
                                    <TaskRow key={t.id} task={t} onOpen={onOpenTask} />
                                ))}
                            </div>
                            {late.length > MAX_LATE && <p className="note">Y {late.length - MAX_LATE} más en el Plan.</p>}
                        </>
                    )}
                </section>
                <section className="panel">
                    <h3>Avance por materia</h3>
                    <ProgressBars />
                    <h3>Para repasar hoy</h3>
                    <div className="day">
                        {ORDER.map((id) => {
                            const cards = cardCounts(state, id);
                            const errors = errorCount(state, id);
                            const kind = cards.due ? "cards" : errors ? "errors" : "cards";
                            return (
                                <div key={id} className="review" style={{ "--c": subjectColor(id) }}>
                                    <div className="tl">
                                        <span>
                                            <span className="dot" /> {EXAMS_INFO[id].short}
                                        </span>
                                        <span className="sub mono">
                                            {cards.due} tarjetas vencidas · {cards.fresh} nuevas · {errors} errores
                                        </span>
                                    </div>
                                    <button className="go" onClick={() => onOpenTask({ s: id, k: kind })}>
                                        Repasar
                                    </button>
                                </div>
                            );
                        })}
                    </div>
                    <h3>Cómo usar esto</h3>
                    <ol className="howto">
                        <li>Seguí el plan del día. Cada tarea abre el tema, las tarjetas o el parcial que corresponde.</li>
                        <li>En cada tema leé primero la explicación simple, después la completa, y resolvé el ejemplo tapando la solución.</li>
                        <li>Los parciales viejos se hacen con reloj y sin mirar. Lo que erraste queda en la pestaña Errores.</li>
                        <li>Bloques de 50 minutos y 10 de descanso. Las flashcards, todos los días aunque sea 15 minutos.</li>
                    </ol>
                </section>
            </div>
        </>
    );
}

export default TodayPage;
