// Análisis de parciales anteriores de Cálculo 1B (1ª revisión).
const analysis = {
    sources: [
        { label: "1ª revisión mayo 2023 (V1)", kind: "revision", note: "2/5/2023, letra leída del PDF, clave oficial verificada con sympy" },
        { label: "1ª revisión octubre 2023 (V1)", kind: "revision", note: "9/10/2023, clave oficial verificada" },
        { label: "1ª revisión mayo 2024 (V1)", kind: "revision", note: "7/5/2024, letra leída del PDF, clave oficial verificada con sympy" },
        { label: "1ª revisión octubre 2024 (V1)", kind: "revision", note: "7/10/2024, letra leída del PDF, clave oficial verificada con sympy" },
        { label: "1ª revisión mayo 2025 (V1)", kind: "revision", note: "5/5/2025, clave oficial verificada" },
        { label: "1ª revisión octubre 2025 (V1)", kind: "revision", note: "6/10/2025, clave oficial verificada" },
        { label: "1ª revisión mayo 2026 (V1)", kind: "revision", note: "5/5/2026, clave oficial verificada" },
    ],
    format: {
        summary: String.raw`<p>Siete revisiones seguidas (mayo 2023 a mayo 2026) tienen <strong>exactamente los mismos 10 moldes</strong>: cambian los números y las funciones, no el tipo de ejercicio. Son 10 preguntas de múltiple opción con 4 opciones, sin desarrollo. Desde octubre 2025 hasta mayo 2026 el orden de las preguntas quedó idéntico, así que lo más probable es que el 5/10 venga en ese orden. Tres bloques pesan 20% cada uno (derivada de la inversa, límites con Taylor, series geométricas) y la parte de funciones inversas otro 20%.</p>`,
        rows: [
            ["Fecha", "lunes 05/10/2026"],
            ["Preguntas", "10 múltiple opción, 4 opciones (A a D), una sola correcta"],
            ["Puntaje", "40 puntos (4 por pregunta), mínimo 8 para aprobar la revisión"],
            ["Duración", "2 horas (12 minutos por pregunta en promedio)"],
            ["Materiales", "sin materiales: los desarrollos de Taylor y las derivadas van de memoria"],
            ["Penalización", "no figura en EVA ni en ninguna de las 7 letras. Se asume +4 / −1 / 0 (en blanco): hay que confirmarlo en la letra el día de la prueba"],
            ["Estructura", "10 moldes fijos: 4 de funciones (inversa explícita, recorrido/U, a trozos, derivada de la inversa ×2), 2 límites con Taylor, 1 Taylor al revés, 2 series geométricas"],
            ["Claves", "en las 70 respuestas V1 las letras están repartidas parejo (A 16, B 18, C 18, D 18): no hay letra favorita"],
        ],
    },
    blueprint: [
        { slot: "P1", t: "t3", title: "Inversa explícita: despejar \\(f^{-1}(y)\\)", freq: "7/7", difficulty: "media",
            what: String.raw`Dan \(f:A\to B\) con dominio y codominio y piden elegir entre tres fórmulas de \(f^{-1}(y)\) o "no es invertible". Funciones usadas: con \(L\) 3 veces (\(-L(x+2)-3\), \(-L(x-2)+3\), \(L(x^2+1)\)), con \(e^x\) 2 veces (\(1+e^{2-x}\), \(e^{x-1}+2\)), con raíz o cuadrática 2 veces (\(-(x+3)^2+5\), \(\sqrt{1-x^2}-2\)). "No es invertible" nunca fue la correcta.`,
            tip: String.raw`Despejá y después <strong>probá un punto</strong>: si \(f(a)=b\), la fórmula correcta da \(f^{-1}(b)=a\). En las raíces el signo lo decide el dominio (si \(x\le-3\), va \(-\sqrt{\ }\)). Las opciones falsas cambian un signo dentro del \(L\) o del exponente.` },
        { slot: "P2", t: "t6", title: "Límite con Taylor (denominador \\(x^2\\))", freq: "7/7", difficulty: "media",
            what: String.raw`Cociente de combinaciones de \(\text{sen}(2x)\), \(\cos\), \(e^{\pm x}\), \(e^{\pm2x}\), \(L(1\pm2x)\), \(\text{Arctg}(x)\) sobre \(x^2\), con los términos lineales ya cancelados. Resultados reales: \(0,-4,-\frac52,2,-2\).`,
            tip: String.raw`Desarrollá cada función hasta el orden del denominador y sumá coeficiente a coeficiente. Trampa: \(L(1+2x)=2x-2x^2+\dots\) (el \(\frac{(2x)^2}{2}\) da 2, no 1) y \(\cos(2x)=1-2x^2\).` },
        { slot: "P3", t: "t3", title: "¿Para qué \\(U\\) es invertible? (trig restringida)", freq: "7/7 (trig o Arctg 5/7)", difficulty: "baja",
            what: String.raw`\(f:I\to U\) con \(\cos\) en un intervalo de un cuarto o media vuelta (\([0,\pi)\), \([\frac\pi2,\pi)\) dos veces, \([\pi,\frac{3\pi}{2})\) con \(-\cos\)) o \(\text{Arctg}\) en \([0,+\infty)\). Hay que elegir el recorrido exacto, con corchetes bien puestos. En 2023 el mismo lugar era "sobreyectiva si \(U\) es" con una cuadrática o una a trozos.`,
            tip: String.raw`Evaluá en los extremos del intervalo y mirá si están incluidos: extremo cerrado da corchete, abierto da paréntesis. Las 4 opciones son el mismo intervalo con los corchetes o el signo cambiado. Con \(-\cos\) cambia el signo de todo.` },
        { slot: "P4", t: "t2", title: "Función a trozos: inyectiva / sobreyectiva", freq: "7/7", difficulty: "media",
            what: String.raw`\(f:\mathbb R\to\mathbb R\) a trozos (casi siempre una parábola y una rama con \(e^x\), \(L\) o recta). Opciones fijas: ni iny. ni sobre / iny. no sobre / no iny. sí sobre / biyectiva. Correctas V1: biyectiva 2, iny. no sobre 2, no iny. sí sobre 3, ninguna vez "ni ni".`,
            tip: String.raw`Sacá el recorrido de cada rama (vértice de la parábola, límites en \(\pm\infty\) y en el punto de corte, abierto o cerrado). Si los recorridos se pisan, no es inyectiva; si su unión no es \(\mathbb R\), no es sobreyectiva. Ojo con el vértice dentro del trozo: ahí la rama sola ya no es inyectiva.` },
        { slot: "P5", t: "t6", title: "Segundo límite con Taylor (a veces \\(x^3\\))", freq: "7/7", difficulty: "media-alta",
            what: String.raw`Mismo molde que P2 pero más largo: con \(x^3\) en 3/7 (2024 y mayo 2026) y con \(x^4\) una vez (2023: \(x\,\text{sen}x+2\cos x-2\)). Aparecen restas como \(\text{sen}(2x)-2L(1+x)-x^2\) donde lo de orden 1 y 2 se cancela.`,
            tip: String.raw`Con \(x^3\) necesitás los términos cúbicos: \(\text{sen}(2x)=2x-\frac43x^3\), \(L(1+x)=x-\frac{x^2}2+\frac{x^3}3\), \(e^{-x}=1-x+\frac{x^2}2-\frac{x^3}6\), \(\text{Arctg}x=x-\frac{x^3}3\). Antes de dividir, verificá que todo lo de grado menor se anuló.` },
        { slot: "P6", t: "t4", title: "Derivada de \\(g\\) armada con \\(f^{-1}\\) (datos \\(f(a),f'(a)\\))", freq: "7/7", difficulty: "media",
            what: String.raw`Dan \(f(a)=b\) y \(f'(a)\) y piden \(g'(b)\) (o \(g(b)+g'(b)\)). Variantes de \(g\): \((f^{-1})^3\) dos veces, \((f^{-1})^2+f\), \(\sqrt{f^{-1}}\), \(L(f^{-1})\), \(f+4f^{-1}\), \(x\cdot f^{-1}(x)\).`,
            tip: String.raw`\((f^{-1})'(b)=\frac1{f'(a)}\) con \(a=f^{-1}(b)\). Trampa principal: evaluar \(f'\) en \(b\) en vez de en \(a\). Después es regla de la cadena o del producto común. Si piden \(g(b)+g'(b)\), no te olvides de \(g(b)\).` },
        { slot: "P7", t: "t4", title: "\\(f\\) explícita: \\(f^{-1}(b)\\) y \\((f^{-1})'(b)\\)", freq: "7/7", difficulty: "baja-media",
            what: String.raw`\(f\) = polinomio + otra función: \((x+1)^3-\frac2x\), \((2x-1)^2+2L(x)\), \((x+1)^2+L(x+1)\), \((x+1)^2+e^{2x}\), \((x+2)^2+e^{2x}\), \(\text{Arctg}(x)+(2x+2)^2\), \(e^{-2x}+e^{-3x}\). El punto es siempre \(x=0\) o \(x=1\). "Ninguna" nunca fue la correcta.`,
            tip: String.raw`Calculá \(f(0)\) y \(f(1)\): uno de los dos da el \(b\) de las opciones. Luego \((f^{-1})'(b)=1/f'(a)\). Las opciones falsas cambian el punto (\(f^{-1}(1)\) vs \(f^{-1}(2)\)) o dan \(1/f'\) mal derivado (olvidar la cadena en \(e^{2x}\)). En mayo 2026 \(f\) era decreciente: la derivada daba negativa.` },
        { slot: "P8", t: "t8", title: "Serie geométrica numérica", freq: "7/7", difficulty: "media",
            what: String.raw`\(\sum\) con potencias corridas: \(\frac{2^n}{3^{n-1}}\), \(\frac{2\cdot3^{n+1}}{(2^n)^2}\), \(\frac{2^{n-1}}{3^{n+1}}\), \(\frac{3\cdot2^n}{5^{n+1}}\), \(\frac{5^n}{3^{2n}}\), \(\frac5{3^{n-1}}\), \(\frac{5+2^n}{3^{n-1}}\) (suma de dos geométricas, nuevo en 2026). "Diverge" nunca fue la correcta.`,
            tip: String.raw`Usá siempre \(\sum=\frac{\text{primer término}}{1-r}\): calculá el primer término con el \(n\) donde arranca la suma y no tenés que reacomodar exponentes. \(3^{2n}=9^n\) y \((2^n)^2=4^n\) son disfraces.` },
        { slot: "P9", t: "t7", title: "Taylor al revés / operaciones con el polinomio", freq: "7/7", difficulty: "media-alta",
            what: String.raw`Dan el polinomio de orden 2 de \(f\) en 0 y definen \(g\) a partir de \(f\). Evolución: 2023-2024 pedían \(g(0)+g'(0)+g''(0)\) con \(g=(2x+1)f\), \(L(f)\), \(L(f-1)\); oct 2024 a oct 2025 pedían \(Q(1)\) con \(g=\frac1f\), \(\frac{f'}f\), \(2f+3f'\); mayo 2026 pidió afirmaciones sobre máximos/mínimos de \(f\) y de \(g=2\cos(2x)-f\).`,
            tip: String.raw`Leé de \(P\): \(f(0)\) = término independiente, \(f'(0)\) = coef. de \(x\), \(f''(0)=2\cdot\)coef. de \(x^2\). Trampa clásica: usar el coeficiente como si fuera \(f''(0)\). Para extremos: \(f'(0)=0\) y el signo de \(f''(0)\).` },
        { slot: "P10", t: "t8", title: "Serie geométrica con parámetro: hallar \\(x\\)", freq: "7/7", difficulty: "media",
            what: String.raw`\(\sum\) que depende de \(x\) igualada a un número. 2023: \(x\) en el numerador (\(\frac{x^{n+1}}{3^n}\), \(\frac{x^n}{3\cdot4^{n-1}}\)); desde 2024: \(x\) en el denominador (\(\left(\frac{x-1}x\right)^n\), \(\frac2{x^{n+1}}\), \(\frac1{x^{2n+1}}\), \(\frac{(-1)^n}{x^{n+1}}\), \(\frac{2^{n+1}}{x^n}\)).`,
            tip: String.raw`Planteá \(\frac{\text{primer término}}{1-r}=\) valor, despejá y <strong>verificá \(|r|\lt1\)</strong>. En mayo 2025 (\(r=\frac1{x^2}\)) la ecuación daba \(x=2\) y \(x=-\frac12\); la segunda no cumple \(|r|\lt1\) y era una opción trampa.` },
    ],
    topics: [
        { t: "t4", name: "Derivada de la inversa y regla de la cadena", count: 7, of: 7, share: 20, priority: "imprescindible",
            note: String.raw`2 preguntas fijas por prueba (P6 y P7): 14 de 70. Cambia el disfraz de \(g\), la cuenta siempre es \(1/f'(a)\).` },
        { t: "t6", name: "Límites con Taylor (x → 0)", count: 7, of: 7, share: 20, priority: "imprescindible",
            note: String.raw`2 límites por prueba, 14 en total. Funciones en los 14: \(\text{sen}\) 7, \(L\) 7, \(e^x\) 5, \(\cos\) 4, \(\text{Arctg}\) 2. Denominador \(x^2\) 10 veces, \(x^3\) 3, \(x^4\) 1.` },
        { t: "t8", name: "Series geométricas", count: 7, of: 7, share: 20, priority: "imprescindible",
            note: String.raw`2 preguntas fijas: una numérica (P8) y una con parámetro (P10). 14 de 70.` },
        { t: "t3", name: "Función inversa: despejar, recorrido, trig restringidas", count: 7, of: 7, share: 17, priority: "imprescindible",
            note: String.raw`Inversa explícita 7/7 más "invertible si \(U\)" con \(\cos\)/\(\text{Arctg}\) 5/7 (desde 2024 fija): 12 de 70. Para el 5/10 esperá 2 preguntas (20%).` },
        { t: "t2", name: "Inyectiva, sobreyectiva, biyectiva (a trozos)", count: 7, of: 7, share: 13, priority: "alta",
            note: String.raw`A trozos 7/7 más, en 2023, dos de "sobreyectiva si \(U\)" (cuadrática y a trozos): 9 de 70. Desde 2024 es una sola pregunta (10%). Ramas: parábola en 6/7, \(L\) en 3, \(e^x\) en 3, recta en 2.` },
        { t: "t7", name: "Taylor al revés: derivadas en 0, extremos, operaciones", count: 7, of: 7, share: 10, priority: "alta",
            note: String.raw`1 pregunta fija (P9), la más variable en su pedido (suma de derivadas, \(Q(1)\), extremos).` },
        { t: "t5", name: "Polinomio de Taylor y desarrollos notables", count: 0, of: 7, share: 0, priority: "alta",
            note: String.raw`Nunca se pregunta sola, pero sostiene P2, P5 y P9 (30% del puntaje). Sin materiales: los desarrollos de \(e^x\), \(\text{sen}\), \(\cos\), \(L(1+x)\), \(\text{Arctg}\) tienen que salir de memoria hasta orden 3.` },
        { t: "t1", name: "Repaso: funciones elementales y derivadas", count: 0, of: 7, share: 0, priority: "media",
            note: String.raw`Base de todo: gráficos de \(e^x\), \(L\), \(\cos\), \(\text{Arctg}\) (P3, P4) y derivadas (P6, P7, P9). Inferencia: no hay pregunta propia.` },
    ],
    trends: String.raw`<p><strong>El molde no cambió en 7 pruebas; el orden sí, y se estabilizó.</strong> Posición de cada molde por prueba:</p>
<table>
<tr><th>Molde</th><th>may-23</th><th>oct-23</th><th>may-24</th><th>oct-24</th><th>may-25</th><th>oct-25</th><th>may-26</th></tr>
<tr><td>Inversa explícita</td><td>5</td><td>5</td><td>4</td><td>4</td><td>4</td><td>1</td><td>1</td></tr>
<tr><td>Límite Taylor (1º)</td><td>1</td><td>3</td><td>5</td><td>5</td><td>2</td><td>2</td><td>2</td></tr>
<tr><td>Recorrido / "si U es"</td><td>10</td><td>8</td><td>3</td><td>3</td><td>3</td><td>3</td><td>3</td></tr>
<tr><td>A trozos iny/sobre</td><td>9</td><td>1</td><td>9</td><td>9</td><td>1</td><td>4</td><td>4</td></tr>
<tr><td>Límite Taylor (2º)</td><td>6</td><td>10</td><td>8</td><td>8</td><td>5</td><td>5</td><td>5</td></tr>
<tr><td>Derivada de g con \(f^{-1}\)</td><td>3</td><td>4</td><td>2</td><td>2</td><td>8</td><td>6</td><td>6</td></tr>
<tr><td>\(f\) explícita, \((f^{-1})'\)</td><td>8</td><td>6</td><td>7</td><td>7</td><td>7</td><td>7</td><td>7</td></tr>
<tr><td>Serie numérica</td><td>7</td><td>7</td><td>6</td><td>6</td><td>6</td><td>8</td><td>8</td></tr>
<tr><td>Taylor al revés</td><td>4</td><td>9</td><td>1</td><td>1</td><td>9</td><td>9</td><td>9</td></tr>
<tr><td>Serie con parámetro</td><td>2</td><td>2</td><td>10</td><td>10</td><td>10</td><td>10</td><td>10</td></tr>
</table>
<p>Mayo y octubre 2024 tienen el mismo orden, y octubre 2025 y mayo 2026 también: el orden se repite de a pares. Lo más probable para el 5/10 es el orden de mayo 2026 (el que usan los parciales modelo), pero no dependas del número de pregunta: reconocé el molde.</p>
<h4>Cambios y variantes</h4>
<ul>
<li><strong>2023 → 2024:</strong> desaparece "sobreyectiva si \(U\)" (cuadrática/a trozos) y entra la trigonométrica restringida (\(\text{Arctg}\) en mayo 2024, \(\cos\) o \(-\cos\) desde octubre 2024). También desaparece el límite con \(x^4\).</li>
<li><strong>Taylor al revés</strong> es el que más se reinventa: suma \(g(0)+g'(0)+g''(0)\) (2023-mayo 2024), \(Q(1)\) del polinomio de \(g\) (octubre 2024-octubre 2025), afirmaciones sobre extremos (mayo 2026, nuevo).</li>
<li><strong>Derivada de la inversa con datos:</strong> \(g=(f^{-1})^3\) (2023, 2024), \(f+4f^{-1}\), \(x\,f^{-1}(x)\), \((f^{-1})^2+f\), \(L(f^{-1})\) pidiendo \(g(2)+g'(2)\) (octubre 2025), \(\sqrt{f^{-1}}\) (mayo 2026). Dos veces \(f(a)=a\) (punto fijo), lo que esconde la trampa de evaluar en el punto equivocado.</li>
<li><strong>\(f\) explícita:</strong> siempre polinomio + \(L\), \(e\), \(\text{Arctg}\) o racional, evaluada en 0 o 1. Mayo 2026 trajo una decreciente (\(e^{-2x}+e^{-3x}\)) con derivada negativa.</li>
<li><strong>Series:</strong> la numérica pasó de una geométrica disfrazada a una suma de dos (\(\frac{5+2^n}{3^{n-1}}\), mayo 2026). La de parámetro pasó de \(x\) arriba (2023) a \(x\) abajo, con \((-1)^n\) (octubre 2025) y con potencia impar \(x^{2n+1}\) que da una raíz falsa (mayo 2025).</li>
<li>Opciones que nunca fueron correctas en V1: "no es invertible", "ninguna de las otras", "diverge", "ni inyectiva ni sobreyectiva". Solo miramos la versión 1: en las otras versiones pueden serlo, así que no las descartes a ciegas.</li>
</ul>`,
    beyond: String.raw`<p>Todo lo que entró en 7 pruebas está cubierto por los 10 moldes. Lo del programa que no apareció y conviene tener a mano (1 a 1,5 h en total, después de lo imprescindible):</p>
<ul>
<li>Ejercicios 4.1 a 4.3 de las Notas (Taylor de \(\frac1{1-x}\), \(L(1+x^2)\), \(e^x+3x^2-1\) y límites con \(x^4\) abajo): no salieron tal cual, pero son la práctica que propone la cátedra (20 min).</li>
<li>Derivadas de \(\text{Arcsen}\) y \(\text{Arccos}\) (Notas 3.2.2, clase virtual 9) y restricción de \(\text{sen}\) (no solo \(\cos\)): la P3 podría venir con \(\text{sen}\) o \(-\text{sen}\) (20 min).</li>
<li>Extremos con \(f''(0)=0\) (Observación 12 de las Notas: la primera derivada no nula decide), por si la P9 de extremos se complica (20 min).</li>
<li>Series que no convergen (diverge si \(r\ge1\), oscila si \(r\le-1\), Notas 1.2.2) o que arrancan en \(n=2\): nunca fue la respuesta, pero un cambio de datos lo vuelve posible (15 min).</li>
</ul>`,
    strategy: String.raw`<ol>
<li><strong>Primera pasada (≈50 min), lo mecánico:</strong> P3 (recorrido, 3 min), P7 (\(f\) explícita, 5 min), P8 y P10 (series, 6 min cada una), P1 (inversa, verificá con un punto), P4 (a trozos, dibujá las dos ramas).</li>
<li><strong>Segunda pasada (≈50 min), lo que tiene cuentas:</strong> P2 y P5 (límites: escribí los desarrollos en un costado antes de empezar), P6 (derivada con \(f^{-1}\)), P9 (Taylor al revés).</li>
<li><strong>Últimos 20 min:</strong> revisá signos en límites y \(|r|\lt1\) en P10, y pasá las respuestas a la hoja.</li>
<li><strong>Cuándo dejar en blanco:</strong> con +4/−1 y 4 opciones, contestar al azar vale en promedio \(+0{,}25\), y si descartás una opción sube a \(+0{,}67\). Si la penalización fuera −4/3 (azar = 0), solo contestá cuando puedas descartar al menos una. Confirmá la regla en la letra antes de decidir.</li>
<li>Para aprobar alcanzan 8 puntos (2 correctas netas), pero la meta real es asegurar 7-8: los moldes de funciones y series son los más baratos.</li>
</ol>`,
    studyPlan: String.raw`<ol>
<li><strong>Dom 27/09 (2 h):</strong> desarrollos notables de memoria (\(e^x\), \(\text{sen}\), \(\cos\), \(L(1+x)\), \(\text{Arctg}\) hasta orden 3, t5) y los 14 límites de las revisiones (t6).</li>
<li><strong>Lun 28/09 (2 h):</strong> derivada de la inversa (t4): las 7 P6 y las 7 P7. Escribite la regla \((f^{-1})'(b)=1/f'(f^{-1}(b))\) hasta que salga sola.</li>
<li><strong>Mar 29/09 (2 h):</strong> series (t8): las 14 preguntas, siempre con "primer término sobre \(1-r\)" y chequeo de \(|r|\lt1\).</li>
<li><strong>Mié 30/09 (2 h):</strong> funciones (t3 y t2): inversas explícitas, recorridos de \(\cos\), \(\text{sen}\), \(\text{Arctg}\) en el círculo, funciones a trozos.</li>
<li><strong>Jue 01/10 (2 h):</strong> Taylor al revés (t7) en sus 3 variantes + 1 h de "más allá" (Ejercicios 4.1 a 4.10 de las Notas, \(\text{sen}\) restringido, extremos).</li>
<li><strong>Vie 02/10 (2,5 h):</strong> Parcial modelo 1 con reloj (2 h) y corrección con la lista de errores.</li>
<li><strong>Sáb 03/10 (2,5 h):</strong> Parcial modelo 2 con reloj y corrección; si sobra, una revisión real que no hayas hecho (mayo 2023, mayo 2024 u octubre 2024, desde el PDF).</li>
<li><strong>Dom 04/10 (1 h):</strong> solo flashcards de desarrollos y fórmulas, repaso de la lista de errores. Nada nuevo; dormir bien.</li>
</ol>`,
};

export default analysis;
