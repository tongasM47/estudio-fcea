import { useRef, useState } from "react";
import "./Podcast.css";

const SPEEDS = [1, 1.25, 1.5, 1.75, 2];

// Reproductor de un episodio con control de velocidad.
function Podcast({ podcast, compact = false }) {
    const audio = useRef(null);
    const [speed, setSpeed] = useState(1);

    if (!podcast) return <p className="pod-pending">Podcast en preparación: se suma cuando NotebookLM termine de generarlo.</p>;

    const changeSpeed = (s) => {
        setSpeed(s);
        if (audio.current) audio.current.playbackRate = s;
    };

    return (
        <div className={`pod ${compact ? "compact" : ""}`}>
            {podcast.title && <div className="pod-title">«{podcast.title}»</div>}
            <audio
                ref={audio}
                controls
                preload="none"
                src={podcast.src}
                onPlay={(e) => (e.currentTarget.playbackRate = speed)}
            />
            <div className="pod-speeds" role="group" aria-label="Velocidad">
                {SPEEDS.map((s) => (
                    <button key={s} className="btn small" aria-pressed={speed === s} onClick={() => changeSpeed(s)}>
                        {s}×
                    </button>
                ))}
                {podcast.min && <span className="pod-min">~{podcast.min} min</span>}
            </div>
        </div>
    );
}

export default Podcast;
