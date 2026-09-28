import { PLAN } from "../data/plan.js";
import { SUBJECTS } from "../data/subjects.js";
import { todayStr } from "./dates.js";

// todas las tareas del plan con un id estable "AAAA-MM-DD#n"
export function allTasks() {
    const out = [];
    PLAN.forEach((day) => day.tasks.forEach((t, i) => out.push({ ...t, id: `${day.d}#${i}`, d: day.d })));
    return out;
}

export function dayTasks(day) {
    return day.tasks.map((t, i) => ({ ...t, id: `${day.d}#${i}`, d: day.d }));
}

export const cardBox = (st) => (st ? (st.box != null ? st.box : st.b || 0) : 0);

export function subjectProgress(state, id) {
    const tasks = allTasks().filter((t) => t.s === id);
    const hours = tasks.reduce((a, t) => a + t.h, 0);
    const hoursDone = tasks.filter((t) => state.tasks[t.id]).reduce((a, t) => a + t.h, 0);
    const data = SUBJECTS[id];
    return {
        pct: hours ? hoursDone / hours : 0,
        topics: [...data.topics, ...data.notes].filter((t) => state.topics[`${id}|${t.id}`]).length,
        topicsTotal: data.topics.length + data.notes.length,
        cards: data.flashcards.filter((c, i) => cardBox(state.cards[`${id}|${i}`]) >= 3).length,
        exams: data.exams.filter((e) => state.exams[`${id}|${e.id}`]).length,
    };
}

export function cardCounts(state, id) {
    const today = todayStr();
    let due = 0;
    let fresh = 0;
    SUBJECTS[id].flashcards.forEach((c, i) => {
        const st = state.cards[`${id}|${i}`];
        if (!st) fresh++;
        else if (st.due <= today) due++;
    });
    return { due, fresh };
}

export const errorCount = (state, id) => Object.keys(state.errors).filter((k) => k.startsWith(`${id}|`)).length;
