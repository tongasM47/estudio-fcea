import Podcast from "./Podcast.jsx";
import { podcastFor } from "../../data/podcasts.js";
import "./Podcast.css";

// Todos los episodios de la materia, uno por unidad, en el orden de estudio.
function PodcastList({ subject, data, onOpenTopic }) {
    const ready = data.topics.filter((t) => podcastFor(subject, t.id)).length;
    return (
        <div>
            <p className="pod-pending" style={{ marginBottom: 12 }}>
                {ready} de {data.topics.length} episodios listos. Cada uno cubre una unidad: analogía simple, explicación, receta, ejemplo, trampas y 3 ideas clave.
                Sirven para repasar caminando o en el ómnibus; no reemplazan hacer los ejercicios.
            </p>
            <div className="podlist">
                {data.topics.map((t, i) => (
                    <div className="poditem" key={t.id}>
                        <h4>
                            <span className="num">{String(i + 1).padStart(2, "0")}</span>
                            <span>{t.title}</span>
                            <button className="btn small" onClick={() => onOpenTopic(t.id)}>
                                Ver tema
                            </button>
                        </h4>
                        <Podcast podcast={podcastFor(subject, t.id)} compact />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PodcastList;
