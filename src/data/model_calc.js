// Parciales modelo de Cálculo 1B, armados a partir del análisis.
const NOTE = String.raw`Sigue los 10 moldes de las 1as revisiones en el orden de octubre 2025 y mayo 2026 (inversa, límite, recorrido, a trozos, límite, derivada con \(f^{-1}\), \(f\) explícita, serie, Taylor al revés, serie con parámetro). 10 preguntas de 4 opciones, 2 h, sin materiales; puntaje +4 / −1 / 0 en blanco (la penalización es una suposición: confirmala en la letra).`;

const models = [
    {
        id: "modelo-1",
        title: "Parcial modelo 1",
        kind: "modelo",
        minutes: 120,
        scoring: { correct: 4, wrong: -1, blank: 0 },
        note: NOTE,
        questions: [
            {
                t: "t3",
                q: String.raw`Sea \( f:[0,+\infty)\to[0,+\infty) \) tal que \( f(x)=\sqrt{e^{2x}-1} \). Entonces:`,
                opts: [
                    String.raw`\( f \) es invertible y \( f^{-1}(y)=\frac{L(y^2-1)}{2} \)`,
                    String.raw`\( f \) es invertible y \( f^{-1}(y)=\frac{L(y^2+1)}{2} \)`,
                    String.raw`\( f \) es invertible y \( f^{-1}(y)=\frac{L(y^2)+1}{2} \)`,
                    String.raw`\( f \) no es invertible`,
                ],
                ans: 1,
                sol: String.raw`<p>Para \(x\ge0\), \(e^{2x}-1\) crece desde 0 hasta \(+\infty\), así que \(f\) es creciente y su recorrido es \([0,+\infty)\): es invertible.</p>
<p>Despejo: \(y=\sqrt{e^{2x}-1}\Rightarrow y^2=e^{2x}-1\Rightarrow e^{2x}=y^2+1\Rightarrow x=\frac{L(y^2+1)}{2}\).</p>
<p>Chequeo con un punto: \(f(0)=0\) y \(\frac{L(0+1)}2=0\). La opción con \(y^2-1\) pasa el 1 con el signo equivocado; la otra separa mal el \(L\).</p>`,
            },
            {
                t: "t6",
                q: String.raw`\( \lim_{x\to0}\frac{\cos(2x)+L(1+2x)-1-2x}{x^2} \) es igual a:`,
                opts: [String.raw`\( -2 \)`, String.raw`\( 0 \)`, String.raw`\( -4 \)`, String.raw`\( -3 \)`],
                ans: 2,
                sol: String.raw`<p>\(\cos(2x)=1-\frac{(2x)^2}{2}+o(x^2)=1-2x^2+o(x^2)\).</p>
<p>\(L(1+2x)=2x-\frac{(2x)^2}{2}+o(x^2)=2x-2x^2+o(x^2)\).</p>
<p>Numerador: \(1-2x^2+2x-2x^2-1-2x=-4x^2+o(x^2)\). El límite es \(-4\).</p>
<p>Si tomás \(\frac{(2x)^2}{2}\) como \(x^2\) en uno de los dos desarrollos te da \(-3\); si lo hacés en los dos, \(-2\).</p>`,
            },
            {
                t: "t3",
                q: String.raw`Sea \( f:[\pi,\frac{3\pi}{2})\to U \) tal que \( f(x)=-\text{sen}(x) \). \( f \) es invertible si \( U \) es:`,
                opts: [String.raw`\( [0,1) \)`, String.raw`\( (0,1] \)`, String.raw`\( (-1,0] \)`, String.raw`\( [-1,0) \)`],
                ans: 0,
                sol: String.raw`<p>En \([\pi,\frac{3\pi}{2}]\) el seno baja de \(\text{sen}(\pi)=0\) a \(\text{sen}(\frac{3\pi}2)=-1\), de forma estrictamente decreciente, así que \(-\text{sen}\) sube de 0 a 1.</p>
<p>\(\pi\) está incluido: \(f(\pi)=0\) entra. \(\frac{3\pi}2\) no está incluido: el 1 no se alcanza. Recorrido \([0,1)\), que es el \(U\) que la hace biyectiva.</p>
<p>\((-1,0]\) es el recorrido de \(\text{sen}\) sin el signo menos; \((0,1]\) es dar vuelta los corchetes.</p>`,
            },
            {
                t: "t2",
                q: String.raw`Sea \( f:\mathbb{R}\to\mathbb{R} \) tal que \( f(x)=\begin{cases}e^{x}-1 & \text{si } x\le0\\ x^2-2x & \text{si } x\gt0\end{cases} \). Entonces:`,
                opts: [
                    String.raw`\( f \) no es inyectiva ni sobreyectiva`,
                    String.raw`\( f \) es inyectiva pero no sobreyectiva`,
                    String.raw`\( f \) no es inyectiva pero sí sobreyectiva`,
                    String.raw`\( f \) es biyectiva`,
                ],
                ans: 0,
                sol: String.raw`<p>Rama 1 (\(x\le0\)): \(e^x-1\) es creciente, vale 0 en \(x=0\) y tiende a \(-1\) en \(-\infty\). Recorrido \((-1,0]\).</p>
<p>Rama 2 (\(x\gt0\)): parábola con vértice en \(x=1\), \(f(1)=-1\); tiende a 0 cuando \(x\to0^+\) y a \(+\infty\). Recorrido \([-1,+\infty)\). El vértice está dentro del trozo, así que esta rama sola ya repite valores (por ejemplo \(f(\frac12)=f(\frac32)=-\frac34\)).</p>
<p>No es inyectiva. El recorrido total es \([-1,+\infty)\neq\mathbb R\): tampoco es sobreyectiva.</p>`,
            },
            {
                t: "t6",
                q: String.raw`\( \lim_{x\to0}\frac{L(1+2x)-2\,\text{sen}(x)+2x^2}{x^3} \) es igual a:`,
                opts: [String.raw`\( \frac83 \)`, String.raw`\( \frac73 \)`, String.raw`\( 2 \)`, String.raw`\( 3 \)`],
                ans: 3,
                sol: String.raw`<p>\(L(1+2x)=2x-\frac{(2x)^2}2+\frac{(2x)^3}3+o(x^3)=2x-2x^2+\frac83x^3+o(x^3)\).</p>
<p>\(2\,\text{sen}(x)=2x-\frac{2x^3}{6}+o(x^3)=2x-\frac13x^3+o(x^3)\).</p>
<p>Numerador: \(2x-2x^2+\frac83x^3-2x+\frac13x^3+2x^2=3x^3+o(x^3)\). El límite es 3.</p>
<p>Olvidar el término cúbico del seno da \(\frac83\); restarlo con el signo cambiado da \(\frac73\).</p>`,
            },
            {
                t: "t4",
                q: String.raw`Sea \( f:\mathbb{R}\to\mathbb{R} \) derivable e invertible tal que \( f(2)=5 \) y \( f'(2)=4 \). Sea \( g(x)=x\,\big(f^{-1}(x)\big)^2 \). Entonces \( g'(5) \) es:`,
                opts: [String.raw`\( 5 \)`, String.raw`\( 9 \)`, String.raw`\( 24 \)`, String.raw`\( 84 \)`],
                ans: 1,
                sol: String.raw`<p>\(f(2)=5\Rightarrow f^{-1}(5)=2\) y \((f^{-1})'(5)=\frac1{f'(2)}=\frac14\).</p>
<p>Regla del producto: \(g'(x)=\big(f^{-1}(x)\big)^2+x\cdot2f^{-1}(x)\,(f^{-1})'(x)\).</p>
<p>\(g'(5)=2^2+5\cdot2\cdot2\cdot\frac14=4+5=9\).</p>
<p>Olvidar el primer sumando da 5; olvidar \((f^{-1})'\) da 24; multiplicar por \(f'(2)\) en vez de dividir da 84.</p>`,
            },
            {
                t: "t4",
                q: String.raw`Sea \( f:\mathbb{R}\to\mathbb{R} \) tal que \( f(x)=\text{Arctg}(x-1)+x^3 \), que es invertible. Entonces:`,
                opts: [
                    String.raw`\( f^{-1}(1)=1 \) y \( (f^{-1})'(1)=\frac14 \)`,
                    String.raw`\( f^{-1}(1)=1 \) y \( (f^{-1})'(1)=\frac13 \)`,
                    String.raw`\( f^{-1}(1)=1 \) y \( (f^{-1})'(1)=4 \)`,
                    String.raw`Ninguna de las otras opciones es correcta`,
                ],
                ans: 0,
                sol: String.raw`<p>Probá \(x=1\): \(f(1)=\text{Arctg}(0)+1=1\), así que \(f^{-1}(1)=1\).</p>
<p>\(f'(x)=\frac{1}{1+(x-1)^2}+3x^2\Rightarrow f'(1)=1+3=4\).</p>
<p>\((f^{-1})'(1)=\frac1{f'(1)}=\frac14\).</p>
<p>\(\frac13\) sale de olvidar la derivada del \(\text{Arctg}\); 4 es \(f'(1)\) sin invertir.</p>`,
            },
            {
                t: "t8",
                q: String.raw`La serie \( \sum_{n=2}^{\infty}\frac{3\cdot2^n-1}{4^{n-1}} \):`,
                opts: [String.raw`Diverge`, String.raw`Converge a \( \frac{32}{3} \)`, String.raw`Converge a \( \frac{19}{3} \)`, String.raw`Converge a \( \frac{17}{3} \)`],
                ans: 3,
                sol: String.raw`<p>Separo en dos geométricas (las dos tienen \(|r|\lt1\)).</p>
<p>\(\sum_{n=2}^\infty\frac{3\cdot2^n}{4^{n-1}}\): primer término (\(n=2\)) \(\frac{12}{4}=3\), razón \(\frac24=\frac12\). Suma \(\frac{3}{1-\frac12}=6\).</p>
<p>\(\sum_{n=2}^\infty\frac{1}{4^{n-1}}\): primer término \(\frac14\), razón \(\frac14\). Suma \(\frac{1/4}{3/4}=\frac13\).</p>
<p>Total: \(6-\frac13=\frac{17}3\). Sumar en vez de restar da \(\frac{19}3\); arrancar en \(n=1\) da \(12-\frac43=\frac{32}3\).</p>`,
            },
            {
                t: "t7",
                q: String.raw`Se sabe que el polinomio de Taylor de orden 2 de \( f \) en 0 es \( P(x)=2-x+3x^2 \). Sea \( g(x)=e^{f(x)-2} \) y \( Q(x) \) el polinomio de Taylor de orden 2 de \( g \) en 0. Entonces \( Q(1) \) es:`,
                opts: [String.raw`\( 3 \)`, String.raw`\( 7 \)`, String.raw`\( \frac72 \)`, String.raw`\( \frac{11}{2} \)`],
                ans: 2,
                sol: String.raw`<p>De \(P\): \(f(0)=2\), \(f'(0)=-1\), \(f''(0)=2\cdot3=6\).</p>
<p>\(g(0)=e^0=1\). \(g'=f'e^{f-2}\Rightarrow g'(0)=-1\). \(g''=(f''+(f')^2)e^{f-2}\Rightarrow g''(0)=6+1=7\).</p>
<p>\(Q(x)=1-x+\frac72x^2\), así que \(Q(1)=1-1+\frac72=\frac72\).</p>
<p>Olvidar \((f')^2\) da 3; no dividir \(g''(0)\) entre 2 da 7; cambiar el signo de \(g'(0)\) da \(\frac{11}2\).</p>`,
            },
            {
                t: "t8",
                q: String.raw`Si \( \sum_{n=0}^{\infty}\frac{(-2)^n}{x^{n+1}}=\frac15 \), entonces:`,
                opts: [String.raw`\( x=7 \)`, String.raw`\( x=3 \)`, String.raw`\( x=-3 \)`, String.raw`\( x=5 \)`],
                ans: 1,
                sol: String.raw`<p>Primer término (\(n=0\)): \(\frac1x\). Razón: \(r=-\frac2x\).</p>
<p>Suma: \(\frac{1/x}{1+\frac2x}=\frac{1}{x+2}=\frac15\Rightarrow x=3\).</p>
<p>Chequeo: \(|r|=\frac23\lt1\), converge.</p>
<p>Ignorar el signo de \((-2)^n\) da \(\frac1{x-2}=\frac15\), o sea \(x=7\).</p>`,
            },
        ],
    },
    {
        id: "modelo-2",
        title: "Parcial modelo 2",
        kind: "modelo",
        minutes: 120,
        scoring: { correct: 4, wrong: -1, blank: 0 },
        note: NOTE,
        questions: [
            {
                t: "t3",
                q: String.raw`Sea \( f:[1,+\infty)\to(-\infty,2] \) tal que \( f(x)=2-L(x^2) \). Entonces:`,
                opts: [
                    String.raw`\( f \) es invertible y \( f^{-1}(y)=e^{\frac{y-2}{2}} \)`,
                    String.raw`\( f \) es invertible y \( f^{-1}(y)=\frac{e^{2-y}}{2} \)`,
                    String.raw`\( f \) es invertible y \( f^{-1}(y)=e^{1-\frac{y}{2}} \)`,
                    String.raw`\( f \) no es invertible`,
                ],
                ans: 2,
                sol: String.raw`<p>Para \(x\ge1\), \(L(x^2)=2L(x)\) crece desde 0, así que \(f\) decrece desde \(f(1)=2\) hacia \(-\infty\): es biyectiva sobre \((-\infty,2]\).</p>
<p>Despejo: \(y=2-2L(x)\Rightarrow L(x)=\frac{2-y}2\Rightarrow x=e^{1-\frac y2}\).</p>
<p>Chequeo: \(f(1)=2\) y \(e^{1-1}=1\). \(e^{\frac{y-2}2}\) tiene el signo del exponente cambiado; \(\frac{e^{2-y}}2\) divide afuera del exponencial.</p>`,
            },
            {
                t: "t6",
                q: String.raw`\( \lim_{x\to0}\frac{e^{-2x}-\cos(x)+2x}{x^2} \) es igual a:`,
                opts: [String.raw`\( \frac52 \)`, String.raw`\( \frac32 \)`, String.raw`\( 2 \)`, String.raw`\( -\frac52 \)`],
                ans: 0,
                sol: String.raw`<p>\(e^{-2x}=1-2x+\frac{(-2x)^2}2+o(x^2)=1-2x+2x^2+o(x^2)\).</p>
<p>\(\cos(x)=1-\frac{x^2}2+o(x^2)\).</p>
<p>Numerador: \(1-2x+2x^2-1+\frac{x^2}2+2x=\frac52x^2+o(x^2)\). El límite es \(\frac52\).</p>
<p>Restar mal el \(-\frac{x^2}2\) del coseno da \(\frac32\).</p>`,
            },
            {
                t: "t3",
                q: String.raw`Sea \( f:(-\infty,0]\to U \) tal que \( f(x)=\text{Arctg}(x) \). \( f \) es invertible si \( U \) es:`,
                opts: [String.raw`\( [-\frac{\pi}{2},0] \)`, String.raw`\( (-\frac{\pi}{2},\frac{\pi}{2}) \)`, String.raw`\( (-\pi,0] \)`, String.raw`\( (-\frac{\pi}{2},0] \)`],
                ans: 3,
                sol: String.raw`<p>\(\text{Arctg}\) es creciente, \(\text{Arctg}(0)=0\) (incluido) y tiende a \(-\frac\pi2\) cuando \(x\to-\infty\) sin alcanzarlo.</p>
<p>Recorrido \((-\frac\pi2,0]\). Con \([-\frac\pi2,0]\) no sería sobreyectiva (el \(-\frac\pi2\) no tiene preimagen); \((-\frac\pi2,\frac\pi2)\) es el recorrido en todo \(\mathbb R\).</p>`,
            },
            {
                t: "t2",
                q: String.raw`Sea \( f:\mathbb{R}\to\mathbb{R} \) tal que \( f(x)=\begin{cases}-x^2+2x & \text{si } x\le1\\ 2+L(x) & \text{si } x\gt1\end{cases} \). Entonces:`,
                opts: [
                    String.raw`\( f \) no es inyectiva ni sobreyectiva`,
                    String.raw`\( f \) es inyectiva pero no sobreyectiva`,
                    String.raw`\( f \) no es inyectiva pero sí sobreyectiva`,
                    String.raw`\( f \) es biyectiva`,
                ],
                ans: 1,
                sol: String.raw`<p>Rama 1: parábola hacia abajo con vértice en \(x=1\), \(f(1)=1\). Para \(x\le1\) es creciente: recorrido \((-\infty,1]\).</p>
<p>Rama 2: \(2+L(x)\) es creciente, tiende a 2 cuando \(x\to1^+\) (sin alcanzarlo): recorrido \((2,+\infty)\).</p>
<p>Las dos ramas crecen y sus recorridos no se pisan: es inyectiva. Falta el intervalo \((1,2]\): no es sobreyectiva.</p>`,
            },
            {
                t: "t6",
                q: String.raw`\( \lim_{x\to0}\frac{\text{Arctg}(2x)-\text{sen}(2x)}{x^3} \) es igual a:`,
                opts: [String.raw`\( \frac43 \)`, String.raw`\( -\frac83 \)`, String.raw`\( -\frac43 \)`, String.raw`\( 0 \)`],
                ans: 2,
                sol: String.raw`<p>\(\text{Arctg}(2x)=2x-\frac{(2x)^3}{3}+o(x^3)=2x-\frac83x^3+o(x^3)\).</p>
<p>\(\text{sen}(2x)=2x-\frac{(2x)^3}{6}+o(x^3)=2x-\frac43x^3+o(x^3)\).</p>
<p>Numerador: \(-\frac83x^3+\frac43x^3=-\frac43x^3\). El límite es \(-\frac43\).</p>
<p>\(\frac43\) es el signo cambiado; \(-\frac83\) sale de olvidar el cúbico del seno; 0 de cortar los desarrollos en orden 1.</p>`,
            },
            {
                t: "t4",
                q: String.raw`Sea \( f:\mathbb{R}\to\mathbb{R} \) derivable e invertible tal que \( f(1)=3 \) y \( f'(1)=6 \). Sea \( g(x)=\frac{f^{-1}(x)}{x} \). Entonces \( g(3)+g'(3) \) es:`,
                opts: [String.raw`\( -\frac1{18} \)`, String.raw`\( \frac12 \)`, String.raw`\( \frac{20}{9} \)`, String.raw`\( \frac5{18} \)`],
                ans: 3,
                sol: String.raw`<p>\(f^{-1}(3)=1\) y \((f^{-1})'(3)=\frac1{f'(1)}=\frac16\).</p>
<p>\(g(3)=\frac13\).</p>
<p>Regla del cociente: \(g'(x)=\frac{(f^{-1})'(x)\cdot x-f^{-1}(x)}{x^2}\Rightarrow g'(3)=\frac{\frac16\cdot3-1}{9}=\frac{-\frac12}{9}=-\frac1{18}\).</p>
<p>\(g(3)+g'(3)=\frac13-\frac1{18}=\frac5{18}\).</p>
<p>\(-\frac1{18}\) es olvidarse de \(g(3)\); \(\frac12\) sale de tomar \(g'(3)\) como \((f^{-1})'(3)=\frac16\) sin hacer el cociente;\(\frac{20}9\) de usar \(f'(1)=6\) en lugar de \(\frac16\).</p>`,
            },
            {
                t: "t4",
                q: String.raw`Sea \( f:\mathbb{R}\to\mathbb{R} \) tal que \( f(x)=e^{-x}-x^3-x \), que es invertible. Entonces:`,
                opts: [
                    String.raw`\( f^{-1}(1)=0 \) y \( (f^{-1})'(1)=\frac12 \)`,
                    String.raw`\( f^{-1}(1)=0 \) y \( (f^{-1})'(1)=-\frac12 \)`,
                    String.raw`\( f^{-1}(1)=0 \) y \( (f^{-1})'(1)=-2 \)`,
                    String.raw`Ninguna de las otras opciones es correcta`,
                ],
                ans: 1,
                sol: String.raw`<p>\(f(0)=1-0-0=1\), así que \(f^{-1}(1)=0\).</p>
<p>\(f'(x)=-e^{-x}-3x^2-1\Rightarrow f'(0)=-1-0-1=-2\) (\(f\) es decreciente: su inversa también, la derivada tiene que dar negativa).</p>
<p>\((f^{-1})'(1)=\frac1{-2}=-\frac12\).</p>
<p>\(\frac12\) es perder el signo (olvidar que \(f\) decrece); \(-2\) es no invertir.</p>`,
            },
            {
                t: "t8",
                q: String.raw`La serie \( \sum_{n=1}^{\infty}\frac{2^n+(-1)^n}{3^{n+1}} \):`,
                opts: [String.raw`Diverge`, String.raw`Converge a \( \frac7{12} \)`, String.raw`Converge a \( \frac74 \)`, String.raw`Converge a \( \frac34 \)`],
                ans: 1,
                sol: String.raw`<p>Separo: \(\sum_{n=1}^\infty\frac{2^n}{3^{n+1}}+\sum_{n=1}^\infty\frac{(-1)^n}{3^{n+1}}\).</p>
<p>Primera: primer término \(\frac29\), razón \(\frac23\). Suma \(\frac{2/9}{1/3}=\frac23\).</p>
<p>Segunda: primer término \(-\frac19\), razón \(-\frac13\). Suma \(\frac{-1/9}{4/3}=-\frac1{12}\).</p>
<p>Total: \(\frac23-\frac1{12}=\frac7{12}\). Olvidar el 3 extra del denominador da \(\frac74\); sumar el \(\frac1{12}\) en vez de restarlo (signo de la alternada) da \(\frac34\).</p>`,
            },
            {
                t: "t7",
                q: String.raw`Se sabe que el polinomio de Taylor de orden 2 de \( f \) en 0 es \( P(x)=1+x-x^2 \). Sea \( g(x)=f(x)-L(1+x) \). Afirmaciones: (1) \( f \) tiene en \( x=0 \) un extremo relativo. (2) \( g \) tiene en \( x=0 \) un máximo relativo.`,
                opts: [String.raw`Ambas son verdaderas`, String.raw`Solo (1) es verdadera`, String.raw`Solo (2) es verdadera`, String.raw`Ambas son falsas`],
                ans: 2,
                sol: String.raw`<p>(1): \(f'(0)=1\neq0\) (coeficiente de \(x\)), así que en 0 no hay extremo. Falsa. El \(-x^2\) no alcanza: primero tiene que anularse la derivada.</p>
<p>(2): \(L(1+x)=x-\frac{x^2}2+o(x^2)\), entonces el polinomio de \(g\) es \(1+x-x^2-x+\frac{x^2}2=1-\frac{x^2}2\). \(g'(0)=0\) y \(g''(0)=-1\lt0\): máximo relativo. Verdadera.</p>`,
            },
            {
                t: "t8",
                q: String.raw`Si \( \sum_{n=0}^{\infty}\frac{3}{x^{2n+1}}=\frac98 \), entonces:`,
                opts: [String.raw`\( x=3 \)`, String.raw`\( x=-\frac13 \)`, String.raw`\( x=3 \) o \( x=-\frac13 \)`, String.raw`\( x=\frac13 \)`],
                ans: 0,
                sol: String.raw`<p>Primer término: \(\frac3x\). Razón: \(r=\frac1{x^2}\).</p>
<p>\(\frac{3/x}{1-\frac1{x^2}}=\frac{3x}{x^2-1}=\frac98\Rightarrow 9x^2-24x-9=0\Rightarrow 3x^2-8x-3=0\Rightarrow x=3\) o \(x=-\frac13\).</p>
<p>Chequeo \(|r|\lt1\): con \(x=3\), \(r=\frac19\) (sirve); con \(x=-\frac13\), \(r=9\) (la serie diverge). Queda solo \(x=3\).</p>`,
            },
        ],
    },
];

export default models;
