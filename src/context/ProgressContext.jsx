import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { addDays, todayStr } from "../lib/dates.js";

// Todo el progreso vive en localStorage de este navegador.
// Se puede exportar e importar como archivo .json para pasarlo a otro dispositivo.
const STORAGE_KEY = "fcea-revisiones-v1";

// intervalos de repaso (días) según la caja de la tarjeta
export const CARD_INTERVALS = [0, 1, 2, 4, 7, 12];

const EMPTY = { v: 1, updated: 0, tasks: {}, topics: {}, cards: {}, quiz: {}, exams: {}, drafts: {}, errors: {}, checks: {} };

function loadState() {
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (!raw) return EMPTY;
        const parsed = JSON.parse(raw);
        // compatibilidad con la versión artifact (usaba "err")
        if (parsed.err && !parsed.errors) parsed.errors = parsed.err;
        return { ...EMPTY, ...parsed };
    } catch (e) {
        return EMPTY;
    }
}

const ProgressContext = createContext(null);

export function ProgressProvider({ children }) {
    const [state, setState] = useState(loadState);

    useEffect(() => {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
        } catch (e) {
            // almacenamiento bloqueado: la app sigue funcionando sin guardar
        }
    }, [state]);

    const update = useCallback((fn) => {
        setState((prev) => {
            const next = structuredClone(prev);
            fn(next);
            next.updated = Date.now();
            return next;
        });
    }, []);

    const actions = useMemo(
        () => ({
            toggleTask: (taskId, done) =>
                update((s) => {
                    if (done) s.tasks[taskId] = todayStr();
                    else delete s.tasks[taskId];
                }),
            toggleTopic: (key) =>
                update((s) => {
                    if (s.topics[key]) delete s.topics[key];
                    else s.topics[key] = todayStr();
                }),
            rateCard: (key, rating) =>
                update((s) => {
                    const card = s.cards[key] || { box: 0 };
                    if (rating === 0) {
                        card.box = 0;
                        card.due = todayStr();
                    } else {
                        card.box = Math.min(5, card.box + rating);
                        card.due = addDays(todayStr(), CARD_INTERVALS[card.box]);
                    }
                    s.cards[key] = card;
                }),
            answerQuiz: (subject, index, correct) =>
                update((s) => {
                    const key = `${subject}|${index}`;
                    const st = s.quiz[key] || { ok: 0, bad: 0 };
                    if (correct) st.ok++;
                    else st.bad++;
                    s.quiz[key] = st;
                    const errKey = `${subject}|q|${index}`;
                    if (correct) delete s.errors[errKey];
                    else s.errors[errKey] = { at: Date.now() };
                }),
            setDraft: (key, fn) =>
                update((s) => {
                    if (!s.drafts[key]) s.drafts[key] = { answers: {}, start: Date.now(), used: 0, done: false, practice: false, paused: false };
                    fn(s.drafts[key]);
                }),
            resetDraft: (key) =>
                update((s) => {
                    delete s.drafts[key];
                }),
            saveResult: (key, score, errorKeys, okKeys) =>
                update((s) => {
                    const prev = s.exams[key];
                    s.exams[key] = { last: score, best: prev ? Math.max(prev.best, score) : score, at: Date.now(), n: (prev ? prev.n : 0) + 1 };
                    errorKeys.forEach((k) => (s.errors[k] = { at: Date.now() }));
                    okKeys.forEach((k) => delete s.errors[k]);
                }),
            updateSelfScore: (key, score) =>
                update((s) => {
                    const prev = s.exams[key] || { n: 1, best: 0 };
                    s.exams[key] = { ...prev, last: score, best: Math.max(prev.best || 0, score) };
                }),
            toggleCheck: (key) =>
                update((s) => {
                    if (!s.checks) s.checks = {};
                    if (s.checks[key]) delete s.checks[key];
                    else s.checks[key] = todayStr();
                }),
            clearError: (key) =>
                update((s) => {
                    delete s.errors[key];
                }),
            resetAll: () => setState({ ...EMPTY, updated: Date.now() }),
            importState: (data) => setState({ ...EMPTY, ...data, updated: Date.now() }),
        }),
        [update],
    );

    const value = useMemo(() => ({ state, ...actions }), [state, actions]);
    return <ProgressContext.Provider value={value}>{children}</ProgressContext.Provider>;
}

export function useProgress() {
    return useContext(ProgressContext);
}
