import { useState } from "react";
import Html from "../Html/Html.jsx";
import { useProgress } from "../../context/ProgressContext.jsx";
import "./Note.css";

const PART_LABEL = { P1: "1er parcial", P2: "2º parcial", General: "general" };

// Un apunte (sección de teoría en HTML libre), plegable.
function Note({ subject, note }) {
    const { state, toggleTopic } = useProgress();
    const [open, setOpen] = useState(false);
    const key = `${subject}|${note.id}`;
    const seen = !!state.topics[key];

    return (
        <details className="topic note" open={open} onToggle={(e) => setOpen(e.currentTarget.open)}>
            <summary>
                <span className="num">{note.part === "General" ? "·" : note.part}</span>
                <span className="tt">{note.title.replace(/^P[12] · /, "")}</span>
                <span className="row">
                    {seen && <span className="pill ok">leído</span>}
                    <span className="pill">{PART_LABEL[note.part] || note.part}</span>
                </span>
            </summary>
            {open && (
                <div className="tbody">
                    <Html className="legacy read" html={note.html} />
                    <div className="row" style={{ marginTop: 14 }}>
                        <button className={`btn ${seen ? "" : "primary"}`} onClick={() => toggleTopic(key)}>
                            {seen ? "Marcar como pendiente" : "Marcar como leído"}
                        </button>
                    </div>
                </div>
            )}
        </details>
    );
}

export default Note;
