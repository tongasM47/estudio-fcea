import { useRef, useState } from "react";
import { useProgress } from "../../context/ProgressContext.jsx";
import { todayStr } from "../../lib/dates.js";

// Exportar / importar el progreso (para pasarlo de la compu al celular) y borrarlo.
function Footer() {
    const { state, importState, resetAll } = useProgress();
    const fileRef = useRef(null);
    const [message, setMessage] = useState("");
    const [confirmReset, setConfirmReset] = useState(false);

    const exportProgress = () => {
        const blob = new Blob([JSON.stringify(state, null, 1)], { type: "application/json" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `progreso-fcea-${todayStr()}.json`;
        a.click();
        URL.revokeObjectURL(url);
        setMessage("Progreso exportado.");
    };

    const importProgress = (e) => {
        const file = e.target.files && e.target.files[0];
        if (!file) return;
        file.text()
            .then((text) => {
                const data = JSON.parse(text);
                if (!data || typeof data !== "object" || !data.tasks) throw new Error("formato");
                importState(data);
                setMessage("Progreso importado.");
            })
            .catch(() => setMessage("Ese archivo no es un progreso exportado desde esta página."));
        e.target.value = "";
    };

    return (
        <footer className="foot">
            <p>
                Armado con el material de EVA de cada curso (parciales, soluciones oficiales, cronogramas y fichas del segundo semestre 2026). Las claves de los
                parciales reales son las oficiales; los simulacros y las explicaciones son material de práctica. Ante cualquier duda de fechas o reglas, vale lo
                que publique cada cátedra en EVA.
            </p>
            <div className="row">
                <button className="btn small" onClick={exportProgress}>
                    Exportar mi progreso
                </button>
                <button className="btn small" onClick={() => fileRef.current && fileRef.current.click()}>
                    Importar progreso
                </button>
                <input ref={fileRef} id="import-file" type="file" accept="application/json,.json" hidden onChange={importProgress} />
                <button
                    className="btn small"
                    onClick={() => {
                        if (!confirmReset) return setConfirmReset(true);
                        resetAll();
                        setConfirmReset(false);
                        setMessage("Progreso borrado.");
                    }}
                >
                    {confirmReset ? "Tocá de nuevo para borrar todo" : "Borrar mi progreso"}
                </button>
                {message && <span className="muted">{message}</span>}
            </div>
        </footer>
    );
}

export default Footer;
