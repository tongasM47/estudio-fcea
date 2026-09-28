import { EXAMS_INFO } from "../../data/plan.js";
import { NAV, ORDER, subjectColor } from "../../data/subjects.js";
import "./Header.css";

function Header({ view, onNavigate }) {
    const firstPast = NAV.find((id) => !ORDER.includes(id));

    return (
        <header className="top">
            <div className="top-in">
                <div className="brand">
                    <h1>
                        Cuaderno de Revisiones <span>· FCEA 2026</span>
                    </h1>
                    <span className="sync">Progreso guardado en este navegador</span>
                </div>
                <nav className="nav" aria-label="Secciones">
                    <button aria-current={view === "hoy" ? "page" : undefined} onClick={() => onNavigate("hoy")}>
                        Hoy
                    </button>
                    <button aria-current={view === "plan" ? "page" : undefined} onClick={() => onNavigate("plan")}>
                        Plan
                    </button>
                    {NAV.map((id) => (
                        <span key={id} className="navitem">
                            {id === firstPast && <span className="navsep">1er sem.</span>}
                            <button aria-current={view === id ? "page" : undefined} style={{ "--c": subjectColor(id) }} onClick={() => onNavigate(id)}>
                                <span className="dot" />
                                {EXAMS_INFO[id].short}
                            </button>
                        </span>
                    ))}
                </nav>
            </div>
        </header>
    );
}

export default Header;
