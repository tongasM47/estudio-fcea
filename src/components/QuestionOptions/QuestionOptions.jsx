import Html from "../Html/Html.jsx";
import { LETTERS } from "../../lib/format.js";

// Opciones de una múltiple opción. Con reveal=true marca la correcta y la elegida.
function QuestionOptions({ options, picked, answer, reveal, disabled, onPick }) {
    return (
        <div className="opts">
            {options.map((option, i) => {
                let cls = picked === i ? "sel" : "";
                if (reveal) {
                    if (i === answer) cls = "right";
                    else if (picked === i) cls = "wrong";
                }
                return (
                    <button key={i} className={`opt ${cls}`} disabled={disabled} onClick={() => onPick && onPick(i)}>
                        <span className="L">{LETTERS[i]}</span>
                        <Html as="span" html={option} />
                    </button>
                );
            })}
        </div>
    );
}

export default QuestionOptions;
