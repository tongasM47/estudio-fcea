import { EXAMS_INFO } from "../../data/plan.js";
import { ORDER, subjectColor } from "../../data/subjects.js";
import { diffDays, formatDay, todayStr } from "../../lib/dates.js";
import "./ExamRail.css";

// Las cinco fechas de parcial con la cuenta regresiva.
function ExamRail({ onNavigate }) {
    const today = todayStr();

    return (
        <div className="rail">
            {ORDER.map((id) => {
                const info = EXAMS_INFO[id];
                const left = diffDays(today, info.date);
                let label;
                if (left > 1)
                    label = (
                        <>
                            {left} <small>días</small>
                        </>
                    );
                else if (left === 1) label = "mañana";
                else if (left === 0) label = "hoy";
                else label = "rendido";
                return (
                    <button key={id} className={`stop ${left < 0 ? "past" : ""}`} style={{ "--c": subjectColor(id) }} onClick={() => onNavigate(id)}>
                        <span className="d">
                            {formatDay(info.date)}
                            {info.time ? ` · ${info.time}` : ""}
                        </span>
                        <span className="n">{info.short}</span>
                        <span className="left">{label}</span>
                    </button>
                );
            })}
        </div>
    );
}

export default ExamRail;
