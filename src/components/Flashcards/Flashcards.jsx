import { useCallback, useEffect, useState } from "react";
import Html from "../Html/Html.jsx";
import DeckFilter, { itemKey } from "../DeckFilter/DeckFilter.jsx";
import { CARD_INTERVALS, useProgress } from "../../context/ProgressContext.jsx";
import { todayStr } from "../../lib/dates.js";
import { cardBox } from "../../lib/progress.js";
import { shuffle } from "../../lib/format.js";
import "./Flashcards.css";

const NEW_PER_SESSION = 25;

// Mazo de la sesión: primero las vencidas, después hasta 25 nuevas.
function buildDeck(state, subject, data, topic, all = false) {
    const today = todayStr();
    const ids = data.flashcards.map((c, i) => i).filter((i) => !topic || itemKey(data.flashcards[i]) === topic);
    if (all) return shuffle(ids);
    const due = ids.filter((i) => state.cards[`${subject}|${i}`] && state.cards[`${subject}|${i}`].due <= today);
    const fresh = ids.filter((i) => !state.cards[`${subject}|${i}`]);
    return shuffle(due).concat(fresh.slice(0, NEW_PER_SESSION));
}

function nextLabel(st, rating) {
    const box = Math.min(5, cardBox(st) + rating);
    const days = CARD_INTERVALS[box];
    if (days === 0) return "hoy";
    if (days === 1) return "mañana";
    return `en ${days} días`;
}

function Flashcards({ subject, data, initialTopic = "" }) {
    const { state, rateCard } = useProgress();
    const [topic, setTopic] = useState(initialTopic);
    const [deck, setDeck] = useState(() => buildDeck(state, subject, data, initialTopic));
    const [pos, setPos] = useState(0);
    const [flipped, setFlipped] = useState(false);
    const [reviewed, setReviewed] = useState(0);

    const restart = (newTopic, all = false) => {
        setTopic(newTopic);
        setDeck(buildDeck(state, subject, data, newTopic, all));
        setPos(0);
        setFlipped(false);
    };

    const rate = useCallback(
        (rating) => {
            const index = deck[pos];
            rateCard(`${subject}|${index}`, rating);
            if (rating === 0) {
                // "Otra vez": vuelve a aparecer unas tarjetas más adelante
                setDeck((d) => {
                    const copy = d.slice();
                    copy.splice(Math.min(copy.length, pos + 4), 0, index);
                    return copy;
                });
            }
            setPos((p) => p + 1);
            setFlipped(false);
            setReviewed((r) => r + 1);
        },
        [deck, pos, rateCard, subject],
    );

    useEffect(() => {
        const onKey = (e) => {
            if (/input|textarea|select/i.test(e.target.tagName)) return;
            if (pos >= deck.length) return;
            if ((e.key === " " || e.key === "Enter") && !flipped) {
                e.preventDefault();
                setFlipped(true);
            } else if (flipped && ["1", "2", "3"].includes(e.key)) {
                rate(Number(e.key) - 1);
            }
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [flipped, pos, deck, rate]);

    const topicSelect = <DeckFilter id="fc-topic" data={data} items={data.flashcards} value={topic} onChange={(v) => restart(v)} />;

    if (pos >= deck.length) {
        return (
            <div>
                <div className="row">
                    {topicSelect}
                    <button className="btn" onClick={() => restart(topic, true)}>
                        Repasar todas igual
                    </button>
                </div>
                <div className="empty" style={{ marginTop: 14 }}>
                    No te quedan tarjetas para hoy{topic ? " en este tema" : ""}. {reviewed ? `Repasaste ${reviewed} en esta sesión.` : ""}
                    <br />
                    Vuelven según cómo las calificaste: «Otra vez» hoy mismo, «Bien» entre 1 y 12 días después.
                </div>
            </div>
        );
    }

    const index = deck[pos];
    const card = data.flashcards[index];
    const st = state.cards[`${subject}|${index}`];
    const cardTopic = data.topics.find((t) => t.id === card.t) || (card.g ? { title: card.g } : null);

    return (
        <div className="fc-wrap">
            <div className="row">
                {topicSelect}
                <span className="muted mono" style={{ fontSize: 13 }}>
                    {pos + 1} de {deck.length}
                </span>
            </div>
            <div className="fc" role="button" tabIndex={0} aria-label="Dar vuelta la tarjeta" onClick={() => setFlipped(true)}>
                <span className="side">{cardTopic ? cardTopic.title : ""}</span>
                <Html className="face" html={card.q} />
                {flipped ? (
                    <Html className="face back" html={card.a} />
                ) : (
                    <span className="muted" style={{ fontSize: 13 }}>
                        Pensá la respuesta y tocá la tarjeta (o la barra espaciadora) para darla vuelta.
                    </span>
                )}
            </div>
            {flipped && (
                <div className="rate">
                    <button className="r0" onClick={() => rate(0)}>
                        Otra vez<small>la vuelvo a ver hoy</small>
                    </button>
                    <button className="r1" onClick={() => rate(1)}>
                        Bien<small>{nextLabel(st, 1)}</small>
                    </button>
                    <button className="r2" onClick={() => rate(2)}>
                        Fácil<small>{nextLabel(st, 2)}</small>
                    </button>
                </div>
            )}
            <div className="fc-meta">
                <span>Caja {cardBox(st)} de 5</span>
                <span>Atajos: espacio para dar vuelta · 1, 2, 3 para calificar</span>
            </div>
        </div>
    );
}

export default Flashcards;
