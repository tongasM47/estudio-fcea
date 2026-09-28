// Generador de ejercicios de Cálculo 1B (moldes de la 1ª revisión)
// Generador de ejercicios de Cálculo 1B (moldes de la 1ª revisión)

function gcd(a, b) {
    a = Math.abs(a);
    b = Math.abs(b);
    while (b) {
        [a, b] = [b, a % b];
    }
    return a || 1;
}
function F(n, d) {
    if (d === undefined) d = 1;
    if (d < 0) {
        n = -n;
        d = -d;
    }
    const g = gcd(n, d);
    return { n: n / g, d: d / g };
}
const add = (a, b) => F(a.n * b.d + b.n * a.d, a.d * b.d);
const mul = (a, b) => F(a.n * b.n, a.d * b.d);
const neg = (a) => F(-a.n, a.d);
const isZ = (a) => a.n === 0;
const eq = (a, b) => a.n === b.n && a.d === b.d;
function tex(a) {
    if (a.d === 1) return String(a.n);
    return (a.n < 0 ? "-" : "") + "\\frac{" + Math.abs(a.n) + "}{" + a.d + "}";
}
const fact = (n) => (n <= 1 ? 1 : n * fact(n - 1));
const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];
const shuffle = (arr) => {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
};

// coeficientes de Taylor en 0 (grado 0..4) de g(a x)
const FUN = {
    exp: { tex: (a) => "e^{" + (a === 1 ? "" : a === -1 ? "-" : a) + "x}", c: (a, n) => F(Math.pow(a, n), fact(n)), name: "e^u = 1 + u + u^2/2 + u^3/6 + …" },
    sen: {
        tex: (a) => "\\operatorname{sen}(" + (a === 1 ? "" : a === -1 ? "-" : a) + "x)",
        c: (a, n) => (n % 2 === 0 ? F(0) : F((((n - 1) / 2) % 2 ? -1 : 1) * Math.pow(a, n), fact(n))),
        name: "sen u = u − u^3/6 + …",
    },
    cos: {
        tex: (a) => "\\cos(" + (a === 1 ? "" : a) + "x)",
        c: (a, n) => (n % 2 === 1 ? F(0) : F(((n / 2) % 2 ? -1 : 1) * Math.pow(a, n), fact(n))),
        name: "cos u = 1 − u^2/2 + u^4/24 − …",
    },
    ln: {
        tex: (a) => "L(1" + (a > 0 ? "+" : "-") + (Math.abs(a) === 1 ? "" : Math.abs(a)) + "x)",
        c: (a, n) => (n === 0 ? F(0) : F((n % 2 ? 1 : -1) * Math.pow(a, n), n)),
        name: "L(1+u) = u − u^2/2 + u^3/3 − …",
    },
    atg: {
        tex: (a) => "\\operatorname{Arctg}(" + (a === 1 ? "" : a) + "x)",
        c: (a, n) => (n % 2 === 0 ? F(0) : F((((n - 1) / 2) % 2 ? -1 : 1) * Math.pow(a, n), n)),
        name: "Arctg u = u − u^3/3 + …",
    },
};

function polyTex(p) {
    // p[0..] fracciones, grado ascendente
    let s = "";
    p.forEach((c, i) => {
        if (isZ(c)) return;
        const sign = c.n < 0 ? " - " : s ? " + " : "";
        const abs = F(Math.abs(c.n), c.d);
        const coef = i > 0 && abs.n === 1 && abs.d === 1 ? "" : tex(abs);
        const xp = i === 0 ? "" : i === 1 ? "x" : "x^{" + i + "}";
        s += sign + coef + xp;
    });
    return s;
}

function genLimit() {
    for (let tries = 0; tries < 200; tries++) {
        const names = shuffle(Object.keys(FUN)).slice(0, 2);
        const a1 = pick([1, 2, -1, -2, 3]),
            a2 = pick([1, 2, -1, -2]);
        const k = pick([2, 2, 3]);
        const c2 = pick([1, -1, 2, -2]);
        if ((names[0] === "cos" || names[0] === "atg" || names[0] === "sen") && a1 < 0) continue;
        if ((names[1] === "cos" || names[1] === "atg" || names[1] === "sen") && a2 < 0) continue;
        const coefs = (n) => add(FUN[names[0]].c(a1, n), mul(F(c2), FUN[names[1]].c(a2, n)));
        const corr = [];
        for (let n = 0; n < k; n++) corr.push(neg(coefs(n)));
        const ans = coefs(k);
        if (isZ(ans) || Math.abs(ans.n) > 40 || ans.d > 24) continue;
        const t2 = (c2 === 1 ? " + " : c2 === -1 ? " - " : c2 > 0 ? " + " + c2 : " - " + -c2) + FUN[names[1]].tex(a2);
        const pc = polyTex(corr);
        const num = FUN[names[0]].tex(a1) + t2 + (pc ? (pc.trim().startsWith("-") ? " " + pc : " + " + pc) : "");
        const q = "\\[ \\lim_{x\\to 0} \\frac{" + num + "}{x^{" + k + "}} \\]";
        const lines = [];
        for (let n = 0; n <= k; n++) lines.push("\\(x^{" + n + "}\\): \\(" + tex(coefs(n)) + (n < k ? " + (" + tex(corr[n]) + ") = 0" : "") + "\\)");
        const sol =
            "<p>Desarrollá cada función hasta orden \\(" +
            k +
            "\\) y sumá coeficiente a coeficiente:</p><ul><li>" +
            "\\(" +
            FUN[names[0]].tex(a1) +
            "\\) y \\(" +
            FUN[names[1]].tex(a2) +
            "\\): usá la tabla con \\(u\\) igual a lo que está adentro.</li>" +
            lines.map((l) => "<li>" + l + "</li>").join("") +
            "</ul><p>Los términos de grado menor que \\(" +
            k +
            "\\) se cancelan, el numerador queda \\(" +
            tex(ans) +
            "x^{" +
            k +
            "} + o(x^{" +
            k +
            "})\\) y el límite vale <strong>\\(" +
            tex(ans) +
            "\\)</strong>.</p>";
        const distract = [neg(ans), mul(ans, F(2)), mul(ans, F(1, 2)), add(ans, F(1)), F(0)].filter((d) => !eq(d, ans));
        const opts = shuffle(
            [ans].concat(
                shuffle(distract)
                    .filter((d, i, arr) => arr.findIndex((x) => eq(x, d)) === i)
                    .slice(0, 3),
            ),
        );
        return { title: "Límite con Taylor", q, opts: opts.map((o) => "\\(" + tex(o) + "\\)"), ans: opts.findIndex((o) => eq(o, ans)), sol };
    }
}

function genSeries() {
    const n0 = pick([0, 1, 1, 2]);
    const a = pick([1, 2, 3, 5]);
    let p = pick([1, 2, 3, -1, -2]),
        q = pick([2, 3, 4, 5]);
    if (Math.random() < 0.18) {
        p = pick([4, 5, 7]);
        q = pick([2, 3]);
    }
    const r = F(p, q);
    const conv = Math.abs(r.n) < r.d;
    const term =
        a === 1
            ? "\\frac{" + (p < 0 ? "(" + p + ")" : p) + "^{n}}{" + q + "^{n}}"
            : "\\frac{" + a + "\\cdot " + (p < 0 ? "(" + p + ")" : p) + "^{n}}{" + q + "^{n}}";
    const qtex = "\\[ \\sum_{n=" + n0 + "}^{+\\infty} " + term + " \\]";
    let ans, sol;
    const first = mul(F(a), F(Math.pow(p, n0), Math.pow(q, n0)));
    if (conv) {
        ans = mul(first, F(r.d, r.d - r.n));
        sol =
            "<p>Es geométrica de razón \\(r = " +
            tex(r) +
            "\\), y \\(|r| < 1\\), así que converge.</p><p>Suma = primer término / (1 − r). Primer término (n = " +
            n0 +
            "): \\(" +
            tex(first) +
            "\\).</p><p>\\[ S = \\frac{" +
            tex(first) +
            "}{1 - (" +
            tex(r) +
            ")} = " +
            tex(ans) +
            " \\]</p>";
    } else {
        sol =
            "<p>La razón es \\(r = " +
            tex(r) +
            "\\) y \\(|r| \\ge 1\\): el término general no tiende a 0, la serie <strong>diverge</strong>. Aplicar la fórmula a ciegas da un número sin sentido.</p>";
    }
    let opts;
    if (conv) {
        const d = [mul(F(a), F(r.d, r.d - r.n)), add(ans, F(1)), mul(ans, F(2)), F(-ans.n, ans.d)].filter((x) => !eq(x, ans));
        opts = shuffle(
            ["\\(" + tex(ans) + "\\)", "Diverge"].concat(
                d
                    .filter((x, i, arr) => arr.findIndex((y) => eq(y, x)) === i)
                    .slice(0, 2)
                    .map((x) => "\\(" + tex(x) + "\\)"),
            ),
        );
        return { title: "Serie geométrica", q: qtex, opts, ans: opts.indexOf("\\(" + tex(ans) + "\\)"), sol };
    }
    const fake = mul(first, F(r.d, r.d - r.n));
    opts = shuffle(["Diverge", "\\(" + tex(fake) + "\\)", "\\(" + tex(F(Math.abs(fake.n) + 1, fake.d)) + "\\)", "\\(0\\)"]);
    return { title: "Serie geométrica", q: qtex, opts, ans: opts.indexOf("Diverge"), sol };
}

function genInverse() {
    const aa = pick([1, 2, 3, 4]); // punto
    const bb = pick([1, 2, 3, 5]); // f(a)
    const mm = pick([F(1, 2), F(1, 4), F(2), F(3), F(1, 3)]);
    const h = pick([
        {
            tex: "\\sqrt{f^{-1}(x)}",
            d: (a) => F(1, 2),
            cond: (a) => [1, 4].includes(a),
            val: (a) => "\\frac{1}{2\\sqrt{" + a + "}}",
            hp: (a) => F(1, 2 * Math.sqrt(a)),
        },
        { tex: "L\\big(f^{-1}(x)\\big)", cond: () => true, hp: (a) => F(1, a), val: (a) => "\\frac{1}{" + a + "}" },
        { tex: "\\big(f^{-1}(x)\\big)^{2}", cond: () => true, hp: (a) => F(2 * a), val: (a) => "2\\cdot " + a },
        { tex: "\\big(f^{-1}(x)\\big)^{3}", cond: () => true, hp: (a) => F(3 * a * a), val: (a) => "3\\cdot " + a + "^{2}" },
    ]);
    let a = aa;
    if (!h.cond(a)) a = 4;
    const inv = F(mm.d, mm.n); // 1/f'(a)
    const ans = mul(h.hp(a), inv);
    const q =
        "<p>Sea \\(f:\\mathbb{R}\\to\\mathbb{R}\\) derivable e invertible con \\(f(" +
        a +
        ") = " +
        bb +
        "\\) y \\(f'(" +
        a +
        ") = " +
        tex(mm) +
        "\\). Si \\(g(x) = " +
        h.tex +
        "\\), entonces \\(g'(" +
        bb +
        ") =\\)</p>";
    const sol =
        "<ol><li>Como \\(f(" +
        a +
        ") = " +
        bb +
        "\\), entonces \\(f^{-1}(" +
        bb +
        ") = " +
        a +
        "\\).</li><li>Derivada de la inversa: \\((f^{-1})'(" +
        bb +
        ") = \\frac{1}{f'(" +
        a +
        ")} = " +
        tex(inv) +
        "\\).</li><li>Regla de la cadena: \\(g'(" +
        bb +
        ") = h'\\big(f^{-1}(" +
        bb +
        ")\\big)\\cdot (f^{-1})'(" +
        bb +
        ") = " +
        h.val(a) +
        " \\cdot " +
        tex(inv) +
        " = " +
        tex(ans) +
        "\\).</li></ol>";
    const d = [mul(h.hp(a), mm), inv, mul(ans, F(2)), add(ans, F(1))].filter((x) => !eq(x, ans));
    const uniq = d.filter((x, i, arr) => arr.findIndex((y) => eq(y, x)) === i).slice(0, 3);
    const opts = shuffle([ans].concat(uniq));
    return { title: "Derivada de la inversa", q, opts: opts.map((o) => "\\(" + tex(o) + "\\)"), ans: opts.findIndex((o) => eq(o, ans)), sol };
}

export const CALC_GEN = { limit: genLimit, series: genSeries, inverse: genInverse };
