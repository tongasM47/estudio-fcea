import { EXAMS_INFO } from "../../data/plan.js";
import { subjectColor } from "../../data/subjects.js";
import { useProgress } from "../../context/ProgressContext.jsx";
import "./TaskRow.css";

const KIND_LABEL = { analysis: "Análisis", topic: "Tema", cards: "Flashcards", quiz: "Preguntas", exam: "Parcial", errors: "Errores", gen: "Generador" };

// Una tarea del plan: checkbox + botón que abre el recurso correspondiente.
function TaskRow({ task, onOpen }) {
    const { state, toggleTask } = useProgress();
    const done = !!state.tasks[task.id];
    const inputId = `task-${task.id.replace(/[^0-9a-z]/gi, "")}`;

    return (
        <div className={`task ${done ? "done" : ""}`} style={{ "--c": subjectColor(task.s) }}>
            <input id={inputId} type="checkbox" checked={done} onChange={(e) => toggleTask(task.id, e.target.checked)} aria-label="Marcar como hecha" />
            <label className="tl" htmlFor={inputId}>
                <span>{task.l}</span>
                <span className="sub">
                    <span className="dot" />
                    {EXAMS_INFO[task.s].short} · {KIND_LABEL[task.k]} · <span className="mono">{String(task.h).replace(".", ",")} h</span>
                </span>
            </label>
            <button className="go" onClick={() => onOpen(task)}>
                Abrir
            </button>
        </div>
    );
}

export default TaskRow;
