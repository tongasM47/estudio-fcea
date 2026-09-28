import { parseAmount } from "./format.js";

// Puntaje máximo de un examen. En AYGO II solo se responden 4 de 5 teóricas: tope 35.
export function examMax(exam) {
    let max = 0;
    exam.questions.forEach((q) => {
        max += q.type === "open" ? q.pts || 0 : exam.scoring.correct;
    });
    if (exam.questions.every((q) => q.type === "open") && max > 35) max = 35;
    return max;
}

// Corrige una pregunta con la regla real de la prueba.
// Devuelve { status: "ok" | "wrong" | "blank" | "self" | "pending", points }
export function gradeQuestion(exam, q, answer) {
    if (q.type === "open") {
        if (!answer || answer.self == null || answer.self === "") return { status: "pending", points: 0 };
        const pts = parseFloat(String(answer.self).replace(",", ".")) || 0;
        return { status: "self", points: Math.max(0, Math.min(q.pts || 0, pts)) };
    }
    if (q.type === "num") {
        const v = parseAmount(answer && answer.value);
        if (isNaN(v)) return { status: "blank", points: 0 };
        const tol = q.tol == null ? 0.5 : q.tol;
        // en las numéricas una respuesta mal vale 0, no resta
        return Math.abs(v - q.ans) <= tol ? { status: "ok", points: exam.scoring.correct } : { status: "wrong", points: 0 };
    }
    if (!answer || answer.value == null) return { status: "blank", points: exam.scoring.blank || 0 };
    return answer.value === q.ans ? { status: "ok", points: exam.scoring.correct } : { status: "wrong", points: exam.scoring.wrong };
}

export function isAnswered(q, answer) {
    if (!answer) return false;
    if (q.type === "open") return !!(answer.text && answer.text.trim());
    if (q.type === "num") return answer.value != null && String(answer.value).trim() !== "";
    return answer.value != null;
}
