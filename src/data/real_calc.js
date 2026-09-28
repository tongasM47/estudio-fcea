// 1as revisiones reales de Cálculo 1B que faltaban en calc.js (versión 1, clave oficial).
const TRI = [
    String.raw`\( f \) no es inyectiva ni sobreyectiva`,
    String.raw`\( f \) es inyectiva pero no sobreyectiva`,
    String.raw`\( f \) no es inyectiva pero sí sobreyectiva`,
    String.raw`\( f \) es biyectiva`,
];
const note = (d) => String.raw`Prueba del ` + d + String.raw`. 10 preguntas de múltiple opción, 40 puntos (mínimo 8), sin materiales. El puntaje por respuesta incorrecta es una suposición: verificá la regla que figura en la letra el día de la prueba.`;

const extra = [
    {
        id: "rev-2023-05",
        title: "1ª revisión mayo 2023 · Versión 1",
        kind: "real",
        minutes: 120,
        scoring: { correct: 4, wrong: -1, blank: 0 },
        note: note("2 de mayo de 2023"),
        questions: [
            {
                t: "t6",
                q: String.raw`\( \lim_{x\to0}\frac{x\,\text{sen}(x)+2\cos(x)-2}{x^4} \) es igual a:`,
                opts: [String.raw`\( -\frac1{12} \)`, String.raw`\( \frac16 \)`, String.raw`\( -\frac16 \)`, String.raw`\( \frac1{12} \)`],
                ans: 0,
                sol: String.raw`<p>\(x\,\text{sen}(x)=x\left(x-\frac{x^3}6\right)+o(x^4)=x^2-\frac{x^4}6+o(x^4)\).</p>
<p>\(2\cos(x)-2=2\left(1-\frac{x^2}2+\frac{x^4}{24}\right)-2+o(x^4)=-x^2+\frac{x^4}{12}+o(x^4)\).</p>
<p>Numerador: \(-\frac{x^4}6+\frac{x^4}{12}=-\frac{x^4}{12}\). El límite es \(-\frac1{12}\).</p>`,
            },
            {
                t: "t8",
                q: String.raw`Si \( \sum_{n=0}^{\infty}\frac{x^{n+1}}{3^n}=-\frac65 \), entonces:`,
                opts: [String.raw`\( x=-1 \)`, String.raw`\( x=-\frac12 \)`, String.raw`\( x=-2 \)`, String.raw`\( x=1 \)`],
                ans: 2,
                sol: String.raw`<p>Primer término (\(n=0\)): \(x\). Razón: \(\frac x3\).</p>
<p>\(\frac{x}{1-\frac x3}=\frac{3x}{3-x}=-\frac65\Rightarrow15x=-18+6x\Rightarrow x=-2\).</p>
<p>Chequeo: \(|r|=\frac23\lt1\), converge.</p>`,
            },
            {
                t: "t4",
                q: String.raw`Sea \( f:\mathbb{R}\to\mathbb{R} \) derivable e invertible tal que \( f(3)=3 \) y \( f'(3)=2 \). Sea \( g(x)=f(x)+4f^{-1}(x) \). Entonces \( g'(3) \) es:`,
                opts: [String.raw`\( 2 \)`, String.raw`\( \frac52 \)`, String.raw`\( 4 \)`, String.raw`\( \frac32 \)`],
                ans: 2,
                sol: String.raw`<p>\(f(3)=3\Rightarrow f^{-1}(3)=3\) y \((f^{-1})'(3)=\frac1{f'(3)}=\frac12\).</p>
<p>\(g'(3)=f'(3)+4\,(f^{-1})'(3)=2+4\cdot\frac12=4\).</p>`,
            },
            {
                t: "t7",
                q: String.raw`Se sabe que el polinomio de Taylor de orden 2 de \( f \) en 0 es \( P(x)=3-2x+4x^2 \) y \( g(x)=(2x+1)\,f(x) \). Entonces \( g(0)+g'(0)+g''(0) \) es:`,
                opts: [String.raw`\( 13 \)`, String.raw`\( 6 \)`, String.raw`\( 7 \)`, String.raw`\( 3 \)`],
                ans: 2,
                sol: String.raw`<p>De \(P\): \(f(0)=3\), \(f'(0)=-2\), \(f''(0)=2\cdot4=8\).</p>
<p>\(g(0)=1\cdot3=3\).</p>
<p>\(g'=2f+(2x+1)f'\Rightarrow g'(0)=6-2=4\).</p>
<p>\(g''=4f'+(2x+1)f''\Rightarrow g''(0)=-8+8=0\).</p>
<p>Suma: \(3+4+0=7\).</p>`,
            },
            {
                t: "t3",
                q: String.raw`Sea \( f:(-\infty,-3]\to(-\infty,5] \) tal que \( f(x)=-(x+3)^2+5 \). Entonces:`,
                opts: [
                    String.raw`\( f \) no es invertible`,
                    String.raw`\( f \) es invertible y \( f^{-1}(y)=-3-\sqrt{-y-5} \)`,
                    String.raw`\( f \) es invertible y \( f^{-1}(y)=-3+\sqrt{-y+5} \)`,
                    String.raw`\( f \) es invertible y \( f^{-1}(y)=-3-\sqrt{5-y} \)`,
                ],
                ans: 3,
                sol: String.raw`<p>La parábola tiene vértice en \((-3,5)\) y en \((-\infty,-3]\) es creciente, con recorrido \((-\infty,5]\): es biyectiva.</p>
<p>Despejo: \((x+3)^2=5-y\Rightarrow x+3=\pm\sqrt{5-y}\). Como \(x\le-3\), \(x+3\le0\): va el signo menos. \(f^{-1}(y)=-3-\sqrt{5-y}\).</p>
<p>La opción con \(+\sqrt{\ }\) da valores \(\ge-3\), fuera del dominio.</p>`,
            },
            {
                t: "t6",
                q: String.raw`\( \lim_{x\to0}\frac{L(1+2x)-2x}{x^2} \) es igual a:`,
                opts: [String.raw`\( \frac12 \)`, String.raw`\( 2 \)`, String.raw`\( 1 \)`, String.raw`\( -2 \)`],
                ans: 3,
                sol: String.raw`<p>\(L(1+2x)=2x-\frac{(2x)^2}2+o(x^2)=2x-2x^2+o(x^2)\).</p>
<p>Numerador: \(-2x^2+o(x^2)\). El límite es \(-2\).</p>`,
            },
            {
                t: "t8",
                q: String.raw`La serie \( \sum_{n=1}^{\infty}\frac{2^n}{3^{n-1}} \):`,
                opts: [String.raw`Converge a \( \frac23 \)`, String.raw`Converge a \( 12 \)`, String.raw`Diverge`, String.raw`Converge a \( 6 \)`],
                ans: 3,
                sol: String.raw`<p>Primer término (\(n=1\)): \(\frac21=2\). Razón: \(\frac23\lt1\).</p>
<p>Suma: \(\frac{2}{1-\frac23}=6\).</p>`,
            },
            {
                t: "t4",
                q: String.raw`Sea \( f:(0,+\infty)\to\mathbb{R} \) tal que \( f(x)=(x+1)^3-\frac2x \), que es invertible. Entonces:`,
                opts: [
                    String.raw`\( f^{-1}(6)=1 \) y \( (f^{-1})'(6)=\frac1{14} \)`,
                    String.raw`\( f^{-1}(6)=1 \) y \( (f^{-1})'(6)=\frac18 \)`,
                    String.raw`\( f^{-1}(6)=1 \) y \( (f^{-1})'(6)=\frac1{10} \)`,
                    String.raw`Ninguna de las otras opciones es correcta`,
                ],
                ans: 0,
                sol: String.raw`<p>\(f(1)=8-2=6\Rightarrow f^{-1}(6)=1\).</p>
<p>\(f'(x)=3(x+1)^2+\frac2{x^2}\Rightarrow f'(1)=12+2=14\).</p>
<p>\((f^{-1})'(6)=\frac1{14}\). \(\frac1{10}\) sale de derivar \(-\frac2x\) con el signo cambiado.</p>`,
            },
            {
                t: "t2",
                q: String.raw`Sea \( f:\mathbb{R}\to\mathbb{R} \) tal que \( f(x)=\begin{cases}-x^2+6x+7 & \text{si } x\le-1\\ 2+2x & \text{si } x\gt-1\end{cases} \). Entonces:`,
                opts: [TRI[0], TRI[1], TRI[3], TRI[2]],
                ans: 2,
                sol: String.raw`<p>Rama 1: parábola con vértice en \(x=3\), fuera del trozo; para \(x\le-1\) es creciente, \(f(-1)=-1-6+7=0\). Recorrido \((-\infty,0]\).</p>
<p>Rama 2: recta creciente, tiende a 0 cuando \(x\to-1^+\) sin alcanzarlo. Recorrido \((0,+\infty)\).</p>
<p>Las dos crecen, los recorridos no se pisan y juntos dan \(\mathbb R\): es biyectiva.</p>`,
            },
            {
                t: "t2",
                q: String.raw`Sea \( f:\mathbb{R}\to U \) tal que \( f(x)=-x^2+4x-3 \). Entonces \( f \) es sobreyectiva si \( U \) es:`,
                opts: [String.raw`\( [-3,+\infty) \)`, String.raw`\( (-\infty,-3] \)`, String.raw`\( (-\infty,1] \)`, String.raw`\( [1,+\infty) \)`],
                ans: 2,
                sol: String.raw`<p>Parábola hacia abajo con vértice en \(x=2\): \(f(2)=-4+8-3=1\) es el máximo.</p>
<p>Recorrido \((-\infty,1]\): con ese \(U\) es sobreyectiva. \(-3\) es \(f(0)\), no el máximo.</p>`,
            },
        ],
    },
    {
        id: "rev-2024-05",
        title: "1ª revisión mayo 2024 · Versión 1",
        kind: "real",
        minutes: 120,
        scoring: { correct: 4, wrong: -1, blank: 0 },
        note: note("7 de mayo de 2024"),
        questions: [
            {
                t: "t7",
                q: String.raw`Se sabe que el polinomio de Taylor de orden 2 de \( f \) en 0 es \( P(x)=2-6x+2x^2 \). Por otro lado \( g(x)=L\big(f(x)-1\big) \). Entonces \( g(0)+g'(0)+g''(0) \) es:`,
                opts: [String.raw`\( -6 \)`, String.raw`\( 32 \)`, String.raw`\( -10 \)`, String.raw`\( -38 \)`],
                ans: 3,
                sol: String.raw`<p>De \(P\): \(f(0)=2\), \(f'(0)=-6\), \(f''(0)=4\).</p>
<p>\(g(0)=L(1)=0\).</p>
<p>\(g'=\frac{f'}{f-1}\Rightarrow g'(0)=\frac{-6}{1}=-6\).</p>
<p>\(g''=\frac{f''(f-1)-(f')^2}{(f-1)^2}\Rightarrow g''(0)=\frac{4-36}{1}=-32\).</p>
<p>Suma: \(0-6-32=-38\).</p>`,
            },
            {
                t: "t4",
                q: String.raw`Sea \( f:\mathbb{R}\to\mathbb{R} \) derivable e invertible tal que \( f(3)=2 \) y \( f'(3)=9 \). Sea \( g(x)=\big(f^{-1}(x)\big)^3 \). Entonces \( g'(2) \) es:`,
                opts: [String.raw`\( 3 \)`, String.raw`\( 27 \)`, String.raw`\( \frac16 \)`, String.raw`\( 6 \)`],
                ans: 0,
                sol: String.raw`<p>\(f^{-1}(2)=3\) y \((f^{-1})'(2)=\frac1{f'(3)}=\frac19\).</p>
<p>\(g'(2)=3\big(f^{-1}(2)\big)^2(f^{-1})'(2)=3\cdot9\cdot\frac19=3\).</p>`,
            },
            {
                t: "t3",
                q: String.raw`Sea \( f:[0,+\infty)\to U \) tal que \( f(x)=\text{Arctg}(x) \). Entonces \( f \) es invertible si \( U \) es:`,
                opts: [String.raw`\( (-\frac{\pi}{2},\frac{\pi}{2}) \)`, String.raw`\( [0,\frac{\pi}{2}) \)`, String.raw`\( (-\pi,0] \)`, String.raw`\( [0,+\infty) \)`],
                ans: 1,
                sol: String.raw`<p>\(\text{Arctg}\) es creciente, \(\text{Arctg}(0)=0\) (incluido) y tiende a \(\frac\pi2\) cuando \(x\to+\infty\) sin alcanzarlo.</p>
<p>Recorrido \([0,\frac\pi2)\).</p>`,
            },
            {
                t: "t3",
                q: String.raw`Sea \( f:(2,+\infty)\to\mathbb{R} \) tal que \( f(x)=-L(x-2)+3 \). Entonces:`,
                opts: [
                    String.raw`\( f \) no es invertible`,
                    String.raw`\( f \) es invertible y \( f^{-1}(y)=2+e^{3-y} \)`,
                    String.raw`\( f \) es invertible y \( f^{-1}(y)=-2+e^{-3+y} \)`,
                    String.raw`\( f \) es invertible y \( f^{-1}(y)=-2+e^{3-y} \)`,
                ],
                ans: 1,
                sol: String.raw`<p>\(L(x-2)\) recorre \(\mathbb R\) de forma creciente en \((2,+\infty)\), así que \(f\) es biyectiva sobre \(\mathbb R\).</p>
<p>Despejo: \(L(x-2)=3-y\Rightarrow x=2+e^{3-y}\).</p>
<p>Chequeo: \(f(3)=3\) y \(2+e^0=3\).</p>`,
            },
            {
                t: "t6",
                q: String.raw`\( \lim_{x\to0}\frac{e^{-2x}-e^{3x}+5x}{x^2} \) es igual a:`,
                opts: [String.raw`\( 0 \)`, String.raw`\( -\frac52 \)`, String.raw`\( \frac32 \)`, String.raw`\( 2 \)`],
                ans: 1,
                sol: String.raw`<p>\(e^{-2x}=1-2x+2x^2+o(x^2)\) y \(e^{3x}=1+3x+\frac92x^2+o(x^2)\).</p>
<p>Numerador: \((1-1)+(-2x-3x+5x)+\left(2-\frac92\right)x^2=-\frac52x^2+o(x^2)\). El límite es \(-\frac52\).</p>`,
            },
            {
                t: "t8",
                q: String.raw`La serie \( \sum_{n=1}^{\infty}\frac{2^{n-1}}{3^{n+1}} \):`,
                opts: [String.raw`Diverge`, String.raw`Converge a \( \frac12 \)`, String.raw`Converge a \( \frac32 \)`, String.raw`Converge a \( \frac13 \)`],
                ans: 3,
                sol: String.raw`<p>Primer término (\(n=1\)): \(\frac{1}{9}\). Razón: \(\frac23\).</p>
<p>Suma: \(\frac{1/9}{1/3}=\frac13\).</p>`,
            },
            {
                t: "t4",
                q: String.raw`Sea \( f:(-1,+\infty)\to\mathbb{R} \) tal que \( f(x)=(x+1)^2+L(x+1) \), que es invertible. Entonces:`,
                opts: [
                    String.raw`\( f^{-1}(1)=0 \) y \( (f^{-1})'(1)=\frac13 \)`,
                    String.raw`\( f^{-1}(1)=0 \) y \( (f^{-1})'(1)=-3 \)`,
                    String.raw`\( f^{-1}(4+L(2))=1 \) y \( (f^{-1})'(4+L(2))=\frac15 \)`,
                    String.raw`Ninguna de las otras opciones es correcta`,
                ],
                ans: 0,
                sol: String.raw`<p>\(f(0)=1+0=1\Rightarrow f^{-1}(1)=0\).</p>
<p>\(f'(x)=2(x+1)+\frac1{x+1}\Rightarrow f'(0)=3\Rightarrow(f^{-1})'(1)=\frac13\).</p>
<p>La opción C tiene bien \(f(1)=4+L(2)\), pero \(f'(1)=4+\frac12=\frac92\), no 5.</p>`,
            },
            {
                t: "t6",
                q: String.raw`\( \lim_{x\to0}\frac{\text{sen}(2x)-2L(1+x)-x^2}{x^3} \) es igual a:`,
                opts: [String.raw`\( \frac32 \)`, String.raw`\( -\frac23 \)`, String.raw`\( \frac23 \)`, String.raw`\( -2 \)`],
                ans: 3,
                sol: String.raw`<p>\(\text{sen}(2x)=2x-\frac{(2x)^3}6+o(x^3)=2x-\frac43x^3+o(x^3)\).</p>
<p>\(2L(1+x)=2x-x^2+\frac23x^3+o(x^3)\).</p>
<p>Numerador: \(2x-\frac43x^3-2x+x^2-\frac23x^3-x^2=-2x^3+o(x^3)\). El límite es \(-2\).</p>`,
            },
            {
                t: "t2",
                q: String.raw`Sea \( f:\mathbb{R}\to\mathbb{R} \) tal que \( f(x)=\begin{cases}e^{-x} & \text{si } x\le0\\ -x^2+2x & \text{si } x\gt0\end{cases} \). Entonces:`,
                opts: TRI,
                ans: 2,
                sol: String.raw`<p>Rama 1: \(e^{-x}\) decrece en \((-\infty,0]\), recorrido \([1,+\infty)\).</p>
<p>Rama 2: parábola con vértice en \(x=1\), \(f(1)=1\); recorrido \((-\infty,1]\).</p>
<p>\(f(0)=f(1)=1\) (y la parábola repite valores a ambos lados del vértice): no es inyectiva. La unión de recorridos es \(\mathbb R\): es sobreyectiva.</p>`,
            },
            {
                t: "t8",
                q: String.raw`Si \( \sum_{n=0}^{\infty}\left(\frac{x-1}{x}\right)^n=\frac32 \), entonces:`,
                opts: [String.raw`\( x=\frac32 \)`, String.raw`\( x=6 \)`, String.raw`\( x=\frac23 \)`, String.raw`\( x=\frac13 \)`],
                ans: 0,
                sol: String.raw`<p>Primer término 1, razón \(\frac{x-1}x\).</p>
<p>\(\frac{1}{1-\frac{x-1}x}=\frac{1}{\frac1x}=x=\frac32\).</p>
<p>Chequeo: \(r=\frac{1/2}{3/2}=\frac13\), \(|r|\lt1\).</p>`,
            },
        ],
    },
    {
        id: "rev-2024-10",
        title: "1ª revisión octubre 2024 · Versión 1",
        kind: "real",
        minutes: 120,
        scoring: { correct: 4, wrong: -1, blank: 0 },
        note: note("7 de octubre de 2024"),
        questions: [
            {
                t: "t7",
                q: String.raw`Se sabe que el polinomio de Taylor de orden 2 de \( f \) en 0 es \( P(x)=1-5x+3x^2 \). Por otro lado \( g(x)=\frac1{f(x)} \) y su polinomio de Taylor de orden 2 en 0 es \( Q(x) \). Entonces \( Q(1) \) es:`,
                opts: [String.raw`\( -1 \)`, String.raw`\( 32 \)`, String.raw`\( -16 \)`, String.raw`\( 28 \)`],
                ans: 3,
                sol: String.raw`<p>\(f(0)=1\), \(f'(0)=-5\), \(f''(0)=6\).</p>
<p>\(g'=-\frac{f'}{f^2}\Rightarrow g'(0)=5\). \(g''=\frac{-f''f+2(f')^2}{f^3}\Rightarrow g''(0)=-6+50=44\).</p>
<p>\(Q(x)=1+5x+22x^2\) (también sale de \(\frac1{1-u}=1+u+u^2\) con \(u=5x-3x^2\)).</p>
<p>\(Q(1)=1+5+22=28\).</p>`,
            },
            {
                t: "t4",
                q: String.raw`Sea \( f:\mathbb{R}\to\mathbb{R} \) derivable e invertible tal que \( f(2)=-2 \) y \( f'(2)=4 \). Sea \( g(x)=x\,f^{-1}(x) \). Entonces \( g'(-2) \) es:`,
                opts: [String.raw`\( \frac32 \)`, String.raw`\( 9 \)`, String.raw`\( \frac34 \)`, String.raw`\( -7 \)`],
                ans: 0,
                sol: String.raw`<p>\(f^{-1}(-2)=2\) y \((f^{-1})'(-2)=\frac1{f'(2)}=\frac14\).</p>
<p>\(g'(x)=f^{-1}(x)+x\,(f^{-1})'(x)\Rightarrow g'(-2)=2+(-2)\cdot\frac14=\frac32\).</p>`,
            },
            {
                t: "t3",
                q: String.raw`Sea \( f:[\frac{\pi}{2},\pi)\to U \) tal que \( f(x)=\cos(x) \). Entonces \( f \) es invertible si \( U \) es:`,
                opts: [String.raw`\( [-1,0) \)`, String.raw`\( [0,1) \)`, String.raw`\( (-1,0] \)`, String.raw`\( (-1,1] \)`],
                ans: 2,
                sol: String.raw`<p>En \([\frac\pi2,\pi]\) el coseno decrece de 0 a \(-1\).</p>
<p>\(\frac\pi2\) incluido: el 0 entra. \(\pi\) excluido: el \(-1\) no se alcanza. Recorrido \((-1,0]\).</p>`,
            },
            {
                t: "t3",
                q: String.raw`Sea \( f:\mathbb{R}\to(1,+\infty) \) tal que \( f(x)=1+e^{2-x} \). Entonces:`,
                opts: [
                    String.raw`\( f \) no es invertible`,
                    String.raw`\( f \) es invertible y \( f^{-1}(y)=-2+L(1-y) \)`,
                    String.raw`\( f \) es invertible y \( f^{-1}(y)=1+L(y-2) \)`,
                    String.raw`\( f \) es invertible y \( f^{-1}(y)=2-L(y-1) \)`,
                ],
                ans: 3,
                sol: String.raw`<p>\(e^{2-x}\) es decreciente y recorre \((0,+\infty)\): \(f\) es biyectiva sobre \((1,+\infty)\).</p>
<p>Despejo: \(e^{2-x}=y-1\Rightarrow2-x=L(y-1)\Rightarrow x=2-L(y-1)\).</p>
<p>Chequeo: \(f(2)=2\) y \(2-L(1)=2\).</p>`,
            },
            {
                t: "t6",
                q: String.raw`\( \lim_{x\to0}\frac{2L(1+x)-\text{sen}(2x)+x^2}{x^3} \) es igual a:`,
                opts: [String.raw`\( 1 \)`, String.raw`\( \frac23 \)`, String.raw`\( 2 \)`, String.raw`\( -\frac23 \)`],
                ans: 2,
                sol: String.raw`<p>\(2L(1+x)=2x-x^2+\frac23x^3+o(x^3)\).</p>
<p>\(\text{sen}(2x)=2x-\frac43x^3+o(x^3)\).</p>
<p>Numerador: \(2x-x^2+\frac23x^3-2x+\frac43x^3+x^2=2x^3+o(x^3)\). El límite es 2.</p>`,
            },
            {
                t: "t8",
                q: String.raw`La serie \( \sum_{n=1}^{\infty}\frac{3\cdot2^n}{5^{n+1}} \):`,
                opts: [String.raw`Diverge`, String.raw`Converge a \( \frac25 \)`, String.raw`Converge a \( \frac52 \)`, String.raw`Converge a \( 1 \)`],
                ans: 1,
                sol: String.raw`<p>Primer término (\(n=1\)): \(\frac{6}{25}\). Razón: \(\frac25\).</p>
<p>Suma: \(\frac{6/25}{3/5}=\frac25\).</p>`,
            },
            {
                t: "t4",
                q: String.raw`Sea \( f:[-1,+\infty)\to[e^{-2},+\infty) \) tal que \( f(x)=(x+1)^2+e^{2x} \), que es invertible. Entonces:`,
                opts: [
                    String.raw`\( f^{-1}(1)=0 \) y \( (f^{-1})'(1)=\frac14 \)`,
                    String.raw`\( f^{-1}(2)=0 \) y \( (f^{-1})'(2)=\frac13 \)`,
                    String.raw`\( f^{-1}(2)=0 \) y \( (f^{-1})'(2)=\frac14 \)`,
                    String.raw`Ninguna de las otras opciones es correcta`,
                ],
                ans: 2,
                sol: String.raw`<p>\(f(0)=1+1=2\Rightarrow f^{-1}(2)=0\).</p>
<p>\(f'(x)=2(x+1)+2e^{2x}\Rightarrow f'(0)=4\Rightarrow(f^{-1})'(2)=\frac14\).</p>
<p>\(\frac13\) sale de olvidar el 2 de la cadena en \(e^{2x}\).</p>`,
            },
            {
                t: "t6",
                q: String.raw`\( \lim_{x\to0}\frac{\text{Arctg}(x)-L(1+x)}{x^2} \) es igual a:`,
                opts: [String.raw`\( \frac12 \)`, String.raw`\( -\frac12 \)`, String.raw`\( 1 \)`, String.raw`\( -1 \)`],
                ans: 0,
                sol: String.raw`<p>\(\text{Arctg}(x)=x+o(x^2)\) (no tiene término de grado 2) y \(L(1+x)=x-\frac{x^2}2+o(x^2)\).</p>
<p>Numerador: \(\frac{x^2}2+o(x^2)\). El límite es \(\frac12\).</p>`,
            },
            {
                t: "t2",
                q: String.raw`Sea \( f:\mathbb{R}\to\mathbb{R} \) tal que \( f(x)=\begin{cases}2x-1 & \text{si } x\le1\\ 2x^2+4x-4 & \text{si } x\gt1\end{cases} \). Entonces:`,
                opts: TRI,
                ans: 1,
                sol: String.raw`<p>Rama 1: recta creciente, \(f(1)=1\). Recorrido \((-\infty,1]\).</p>
<p>Rama 2: parábola con vértice en \(x=-1\), fuera del trozo; creciente para \(x\gt1\), tiende a \(2+4-4=2\) cuando \(x\to1^+\). Recorrido \((2,+\infty)\).</p>
<p>No se pisan: es inyectiva. Falta \((1,2]\): no es sobreyectiva.</p>`,
            },
            {
                t: "t8",
                q: String.raw`Si \( \sum_{n=0}^{\infty}\frac{2}{x^{n+1}}=1 \), entonces:`,
                opts: [String.raw`\( x=2 \)`, String.raw`\( x=3 \)`, String.raw`\( x=\frac23 \)`, String.raw`\( x=\frac32 \)`],
                ans: 1,
                sol: String.raw`<p>Primer término \(\frac2x\), razón \(\frac1x\).</p>
<p>\(\frac{2/x}{1-\frac1x}=\frac{2}{x-1}=1\Rightarrow x=3\).</p>
<p>Chequeo: \(|r|=\frac13\lt1\).</p>`,
            },
        ],
    },
];

export default extra;
