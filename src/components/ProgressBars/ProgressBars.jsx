import { EXAMS_INFO } from "../../data/plan.js";
import { ORDER, subjectColor } from "../../data/subjects.js";
import { useProgress } from "../../context/ProgressContext.jsx";
import { subjectProgress } from "../../lib/progress.js";
import "./ProgressBars.css";

// Avance de cada materia = horas del plan marcadas como hechas.
function ProgressBars() {
    const { state } = useProgress();

    return (
        <div className="bars">
            {ORDER.map((id) => {
                const pct = Math.round(subjectProgress(state, id).pct * 100);
                return (
                    <div key={id} className="bar" style={{ "--c": subjectColor(id) }}>
                        <span>{EXAMS_INFO[id].short}</span>
                        <div className="track">
                            <div className="fill" style={{ width: `${pct}%` }} />
                        </div>
                        <span className="pct">{pct}%</span>
                    </div>
                );
            })}
        </div>
    );
}

export default ProgressBars;
