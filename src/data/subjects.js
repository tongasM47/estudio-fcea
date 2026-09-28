// Registro de materias.
// Cada materia combina el contenido nuevo (src/data/<id>.js) con el material del
// 1er semestre (src/data/legacy_<id>.js) cuando existe.
// Para sumar una materia nueva: creá su archivo de datos, importalo acá, agregala a
// SUBJECTS y a un semestre de SEMESTERS, sumá sus datos en EXAMS_INFO (src/data/plan.js)
// y su color --<id> en src/index.css (en los tres bloques de tema).
import calc from "./calc.js";
import ed from "./ed.js";
import micro from "./micro.js";
import cc from "./cc.js";
import ago from "./ago.js";
import legacyCalc1a from "./legacy_calc1a.js";
import legacyAygo1 from "./legacy_aygo1.js";
import legacyMicro from "./legacy_micro.js";
import legacyCc from "./legacy_cc.js";
import analysisCalc from "./analysis_calc.js";
import analysisEd from "./analysis_ed.js";
import analysisMicro from "./analysis_micro.js";
import analysisCc from "./analysis_cc.js";
import analysisAgo from "./analysis_ago.js";
import modelCalc from "./model_calc.js";
import realCalc from "./real_calc.js";
import deepCalc from "./deep_calc.js";
import deepEd from "./deep_ed.js";
import deepMicro from "./deep_micro.js";
import deepCc from "./deep_cc.js";
import deepAgo from "./deep_ago.js";
import modelEd from "./model_ed.js";
import modelMicro from "./model_micro.js";
import modelCc from "./model_cc.js";
import modelAgo from "./model_ago.js";

// Une contenido nuevo, apuntes anteriores, análisis de parciales y parciales modelo. Las tarjetas y preguntas nuevas van primero
// para que el progreso guardado (por posición) no se corra.
function combine(base = {}, legacy = {}, analysis = null, models = [], deep = null) {
    const subtopics = (deep && deep.subtopics) || {};
    return {
        topics: (base.topics || []).map((t) => ({ ...t, subtopics: subtopics[t.id] || [] })),
        notes: legacy.notes || [],
        flashcards: [...(base.flashcards || []), ...(legacy.flashcards || []), ...((deep && deep.flashcards) || [])],
        questions: [...(base.questions || []), ...(legacy.questions || []), ...((deep && deep.questions) || [])],
        exams: [...(base.exams || []), ...models],
        exercises: legacy.exercises || [],
        checklist: legacy.checklist || [],
        analysis,
    };
}

export const SUBJECTS = {
    calc: combine(
        {
            ...calc,
            exams: [
                ...[...calc.exams.filter((e) => e.kind === "real"), ...realCalc].sort((x, y) => y.id.localeCompare(x.id)),
                ...calc.exams.filter((e) => e.kind !== "real"),
            ],
        },
        {},
        analysisCalc,
        modelCalc,
        deepCalc,
    ),
    ed: combine(ed, {}, analysisEd, modelEd, deepEd),
    micro: combine(micro, legacyMicro, analysisMicro, modelMicro, deepMicro),
    cc: combine(cc, legacyCc, analysisCc, modelCc, deepCc),
    ago: combine(ago, {}, analysisAgo, modelAgo, deepAgo),
    calc1a: combine({}, legacyCalc1a),
    aygo1: combine({}, legacyAygo1),
};

// materias con parcial en la ronda actual (cuenta regresiva y plan)
export const ORDER = ["calc", "ed", "micro", "cc", "ago"];

export const SEMESTERS = [
    { id: "2026-2", label: "2º semestre 2026", subjects: ["calc", "ed", "micro", "cc", "ago"] },
    { id: "2026-1", label: "1er semestre 2026", subjects: ["calc1a", "aygo1", "micro", "cc"] },
];

// orden del menú: las de la ronda actual y después las que solo están en semestres anteriores
export const NAV = [...ORDER, ...SEMESTERS.flatMap((s) => s.subjects).filter((id, i, all) => !ORDER.includes(id) && all.indexOf(id) === i)];

// mínimo para salvar cada primera revisión de la ronda actual
export const MINIMUMS = { calc: 8, ed: 18, micro: 16, cc: 12, ago: 14 };

export const subjectColor = (id) => `var(--${id})`;
