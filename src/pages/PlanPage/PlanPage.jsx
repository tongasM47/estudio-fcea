import TaskRow from "../../components/TaskRow/TaskRow.jsx";
import { useProgress } from "../../context/ProgressContext.jsx";
import { EXAMS_INFO, PLAN } from "../../data/plan.js";
import { subjectColor } from "../../data/subjects.js";
import { formatDay, todayStr } from "../../lib/dates.js";
import { allTasks, dayTasks } from "../../lib/progress.js";
import "./PlanPage.css";

function PlanPage({ onOpenTask }) {
    const { state } = useProgress();
    const today = todayStr();
    const tasks = allTasks();
    const done = tasks.filter((t) => state.tasks[t.id]);
    const hours = tasks.reduce((a, t) => a + t.h, 0);
    const hoursDone = done.reduce((a, t) => a + t.h, 0);

    return (
        <>
            <h2>Plan hasta el 17 de octubre</h2>
            <p className="lede">
                {String(hours).replace(".", ",")} horas repartidas en {PLAN.length} días, ordenadas por fecha de parcial. Llevás{" "}
                <span className="mono">
                    {done.length}/{tasks.length}
                </span>{" "}
                tareas ({Math.round((hoursDone / hours) * 100)}% de las horas). Del 5 al 18/10 es receso: esos días tienen más carga.
            </p>
            {PLAN.map((day) => {
                const dayHours = day.tasks.reduce((a, t) => a + t.h, 0);
                return (
                    <div key={day.d} className={`planday ${day.d === today ? "today" : ""}`}>
                        <div className="when">
                            <strong>{formatDay(day.d)}</strong>
                            {String(dayHours).replace(".", ",")} h
                        </div>
                        <div className="day">
                            {day.exam && (
                                <div className="examday" style={{ "--c": subjectColor(day.exam) }}>
                                    Parcial de {EXAMS_INFO[day.exam].name}
                                    {EXAMS_INFO[day.exam].time ? ` · ${EXAMS_INFO[day.exam].time}` : ""}
                                </div>
                            )}
                            {day.note && !day.exam && <p className="note">{day.note}</p>}
                            {dayTasks(day).map((t) => (
                                <TaskRow key={t.id} task={t} onOpen={onOpenTask} />
                            ))}
                        </div>
                    </div>
                );
            })}
        </>
    );
}

export default PlanPage;
