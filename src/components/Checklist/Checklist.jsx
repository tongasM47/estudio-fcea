import { useProgress } from "../../context/ProgressContext.jsx";
import "./Checklist.css";

// Lo que tenés que saber hacer antes del parcial.
function Checklist({ subject, data }) {
    const { state, toggleCheck } = useProgress();
    const checks = state.checks || {};
    const done = data.checklist.filter((item, i) => checks[`${subject}|${i}`]).length;

    return (
        <div>
            <p className="lede">
                Marcá lo que ya sabés hacer sin mirar. Llevás{" "}
                <span className="mono">
                    {done}/{data.checklist.length}
                </span>
                .
            </p>
            <div className="checklist">
                {data.checklist.map((item, i) => {
                    const key = `${subject}|${i}`;
                    const id = `chk-${subject}-${i}`;
                    return (
                        <label key={key} htmlFor={id} className={`checkitem ${checks[key] ? "done" : ""}`}>
                            <input id={id} type="checkbox" checked={!!checks[key]} onChange={() => toggleCheck(key)} />
                            <span>{item}</span>
                        </label>
                    );
                })}
            </div>
        </div>
    );
}

export default Checklist;
