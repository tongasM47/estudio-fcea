import { useProgress } from "../../context/ProgressContext.jsx";
import { examMax } from "../../lib/grading.js";
import { formatNumber } from "../../lib/format.js";
import "./ExamList.css";

function ExamList({ subject, data, onOpen }) {
    const { state } = useProgress();

    return (
        <div>
            <p className="lede">
                Hacelos con el reloj corriendo y sin mirar el material. Al entregar se corrige con la regla de puntaje real de esa prueba y ves la solución de
                cada pregunta.
            </p>
            {data.exams.map((exam) => {
                const key = `${subject}|${exam.id}`;
                const result = state.exams[key];
                const draft = state.drafts[key];
                const max = examMax(exam);
                const inProgress = draft && !draft.done;
                return (
                    <div key={exam.id} className="examcard">
                        <div>
                            <div className="et">
                                <span className={`kind ${exam.kind === "real" ? "real" : ""}`}>{exam.kind === "real" ? "real" : "simulacro"}</span>
                                {exam.title}
                            </div>
                            <div className="em">
                                {exam.questions.length} preguntas · {exam.minutes} min
                                {max ? ` · máximo ${formatNumber(max)} pts` : ""}
                                {result && (
                                    <>
                                        {" · último intento: "}
                                        <strong className="mono">
                                            {formatNumber(result.last)}
                                            {max ? `/${formatNumber(max)}` : ""}
                                        </strong>
                                    </>
                                )}
                                {inProgress ? " · tenés uno a medias" : ""}
                            </div>
                        </div>
                        <button className="btn primary" onClick={() => onOpen(exam.id)}>
                            {inProgress ? "Seguir" : result ? "Repetir" : "Empezar"}
                        </button>
                    </div>
                );
            })}
        </div>
    );
}

export default ExamList;
