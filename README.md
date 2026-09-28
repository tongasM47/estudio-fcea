# Cuaderno de Revisiones · FCEA

Plataforma de estudio para la Licenciatura en Administración (FCEA-UDELAR). Junta todas las materias cursadas en 2026: las del 1er semestre (Cálculo I/A, AYGO I, Microeconomía y Conceptos Contables, con el material completo de ambos parciales) y las primeras revisiones del 2º semestre:

| Materia | Parcial |
| --- | --- |
| Cálculo 1B | lunes 05/10 |
| Economía Descriptiva | sábado 10/10 |
| Introducción a la Microeconomía | miércoles 14/10, 13:00 |
| Conceptos Contables | viernes 16/10, 08:00 |
| Administración y Gestión de las Organizaciones II | sábado 17/10 |

Cada materia puede tener temas explicados (versión simple, explicación completa, receta, trampas y ejercicio resuelto), flashcards con repaso espaciado, preguntas conceptuales, parciales viejos y simulacros con reloj y corrección según la regla de puntaje real, y una lista de errores. Cálculo tiene además un generador de ejercicios.

El progreso se guarda en el navegador (localStorage). Para pasarlo a otro dispositivo usá **Exportar / Importar progreso** al pie de la página.

## Correr en local

```bash
npm install
npm run dev
```

## Publicación

Cada push a `main` construye y publica la página en GitHub Pages con el workflow `.github/workflows/deploy.yml`.
La primera vez hay que ir a **Settings → Pages → Build and deployment → Source: GitHub Actions**.

## Estructura

```
src/
  data/            contenido: una materia por archivo + plan.js (fechas, datos del parcial y plan diario)
  lib/             utilidades (fechas, formato, corrección, MathJax, generador de ejercicios)
  context/         ProgressContext: todo el progreso y su guardado
  components/      un componente por carpeta, con su .jsx y su .css
  pages/           TodayPage, PlanPage, SubjectPage
```

## Cómo agregar contenido

Cada materia se arma en `src/data/subjects.js` combinando dos fuentes:

- `src/data/<id>.js`: contenido estructurado (temas, flashcards, preguntas, parciales).
- `src/data/legacy_<id>.js`: material del 1er semestre en JSON (apuntes, flashcards, preguntas, ejercicios resueltos y checklist).

Además de los campos de abajo, una materia puede tener:

```js
notes: [{ id: "n-u1", title: "P1 · Unidad 1", part: "P1", html: "<p>apunte en HTML</p>" }],   // part: P1 | P2 | General
exercises: [{ g: "Unidad 1", title: "Nombre", q: "Enunciado", steps: ["paso 1", "paso 2"] }], // o html en vez de steps
checklist: ["Sé hacer tal cosa"],
```

En flashcards y preguntas se puede usar `g: "Nombre del grupo"` en lugar de `t` para agruparlas sin tener un tema estructurado.

Todo el contenido está en `src/data/<materia>.js`. Los textos van entre `String.raw` + backticks para que el LaTeX no necesite escapes (no pueden tener backticks ni `${`). Se puede usar HTML simple (`p`, `ul`, `ol`, `li`, `strong`, `em`, `table`, `h4`, `<span class="hl">` para resaltar, `<div class="box">` para un recuadro) y fórmulas con `\( ... \)` en línea o `\[ ... \]` en bloque.

```js
const calc = {
    topics: [
        {
            id: "t1",               // único dentro de la materia
            title: "Título del tema",
            weight: "alta",         // alta | media | baja: cuánto pesa en el parcial
            eli5: String.raw`<p>Explicación simple con una analogía.</p>`,
            explain: String.raw`<p>Explicación completa.</p>`,
            recipe: String.raw`<ol><li>Paso 1</li></ol>`,
            pitfalls: String.raw`<ul><li>Trampa típica</li></ul>`,
            example: { q: String.raw`Enunciado`, sol: String.raw`Solución paso a paso` },
        },
    ],
    flashcards: [
        { t: "t1", q: String.raw`Pregunta`, a: String.raw`Respuesta` },
    ],
    questions: [
        // ans = índice (desde 0) de la opción correcta. No escribas "A)", la app pone las letras.
        { t: "t1", q: String.raw`Pregunta`, opts: [String.raw`Opción 1`, String.raw`Opción 2`], ans: 1, exp: String.raw`Por qué` },
    ],
    exams: [
        {
            id: "rev-2026-05",
            title: "1ª revisión mayo 2026 · Versión 1",
            kind: "real",           // real | simulacro
            minutes: 120,
            scoring: { correct: 4, wrong: -1, blank: 0 },
            note: String.raw`Aclaraciones o texto del caso (opcional)`,
            questions: [
                { t: "t1", q: String.raw`…`, opts: [String.raw`…`, String.raw`…`], ans: 0, sol: String.raw`…` },
                { t: "t1", type: "num", q: String.raw`…`, ans: 26200, tol: 0.5, sol: String.raw`…` },   // respuesta numérica
                { t: "t1", type: "open", pts: 4, q: String.raw`…`, sol: String.raw`pauta` },           // desarrollo, autoevaluada
            ],
        },
    ],
};
```

- **Nuevo tema, tarjeta, pregunta o parcial:** agregalo al array que corresponda. No cambies el orden de las tarjetas ni de las preguntas ya existentes (el progreso se guarda por posición); agregá siempre al final.
- **Nueva materia:** creá `src/data/<id>.js`, registrala en `src/data/subjects.js`, sumá sus datos en `EXAMS_INFO` (`src/data/plan.js`) y su color `--<id>` en `src/index.css` (en los tres bloques de tema).
- **Plan de estudio:** está en `PLAN` dentro de `src/data/plan.js`. Cada tarea: `{ s: materia, k: "topic" | "cards" | "quiz" | "exam" | "errors" | "gen", r: id del tema o examen, h: horas, l: texto }`.

## Fuentes

Parciales, soluciones oficiales, cronogramas y fichas publicados en EVA (FCEA) por cada cátedra. Las claves de los parciales reales son las oficiales; los simulacros, las explicaciones y las respuestas modelo de AYGO II son material de práctica propio. Ante cualquier duda de fechas o reglas, vale lo que publique cada cátedra.
