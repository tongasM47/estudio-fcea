// Subtemas, flashcards y preguntas por subtema de Cálculo 1B.
const deep = {
    subtopics: {
        t1: [
            {
                id: "t1.1",
                title: String.raw`Exponencial y logaritmo`,
                eli5: String.raw`<p>Pensá en una planta que cada día crece un poco más rápido que el anterior: eso es \( e^x \). Nunca tiene tamaño cero ni negativo, aunque vayas muy para atrás en el tiempo se hace chiquitita pero sigue ahí. El logaritmo \( L \) es el botón de "deshacer": le decís el tamaño de la planta y te contesta cuánto tiempo pasó. Por eso \( L \) solo acepta tamaños positivos (no existe una planta de tamaño \( -3 \)) y puede devolver cualquier tiempo, incluso negativo.</p>`,
                explain: String.raw`<p>\( e^x \) y \( L(x) \) son inversas: \( e^{L(x)}=x \) para \( x\gt0 \) y \( L(e^x)=x \) para todo \( x \). Las dos son <strong>estrictamente crecientes</strong>.</p>
<ul>
<li>Límites que se usan para recorridos: \( e^x\to0^+ \) cuando \( x\to-\infty \); \( L(x)\to-\infty \) cuando \( x\to0^+ \); las dos van a \( +\infty \) cuando \( x\to+\infty \).</li>
<li>Propiedades: \( L(ab)=L(a)+L(b) \), \( L(a/b)=L(a)-L(b) \), \( L(a^k)=k\,L(a) \), \( e^{a+b}=e^ae^b \), \( e^{kL(a)}=a^k \).</li>
</ul>
<p><strong>Transformaciones.</strong> Para \( a\,e^{bx+c}+d \) o \( a\,L(bx+c)+d \):</p>
<ul>
<li>El dominio de \( L(bx+c) \) sale de pedir \( bx+c\gt0 \): \( -L(x+2)-3 \) vive en \( (-2,+\infty) \).</li>
<li>La imagen de \( e^{u} \) (con \( u \) recorriendo todo \( \mathbb R \)) es \( (0,+\infty) \); sumar \( d \) la corre a \( (d,+\infty) \) y multiplicar por un negativo la da vuelta: \( 3-e^{x} \) tiene imagen \( (-\infty,3) \).</li>
<li>La imagen de \( L(u) \) con \( u \) recorriendo \( (0,+\infty) \) es \( \mathbb R \), y sigue siendo \( \mathbb R \) después de multiplicar por una constante no nula y sumar.</li>
</ul>`,
                keys: [String.raw`\( e^x\gt0 \) siempre; \( L \) solo existe para argumento positivo`, String.raw`\( e^x \) y \( L \) son crecientes e inversas una de la otra`, String.raw`\( L(a^k)=k\,L(a) \) y \( e^{kL(a)}=a^k \)`, String.raw`Sumar una constante corre la imagen; multiplicar por un negativo la da vuelta`],
                example: {
                    q: String.raw`Dominio e imagen de \( f(x)=2-e^{x-1} \).`,
                    sol: String.raw`Dominio \( \mathbb R \). Como \( e^{x-1} \) recorre \( (0,+\infty) \), \( -e^{x-1} \) recorre \( (-\infty,0) \) y \( f \) recorre \( (-\infty,2) \).`,
                },
            },
            {
                id: "t1.2",
                title: String.raw`Trigonométricas y Arctg`,
                eli5: String.raw`<p>Imaginá que das vueltas en una calesita de radio 1. El coseno te dice cuánto estás corrido a la derecha del centro y el seno cuánto estás arriba. Como la calesita gira siempre igual, los valores se repiten en cada vuelta: por eso seno y coseno no son inyectivas en todo \( \mathbb R \). El Arctg es otra cosa: es como un ascensor que sube siempre, pero nunca llega a la terraza (\( \pi/2 \)) ni al sótano (\( -\pi/2 \)).</p>`,
                explain: String.raw`<table>
<tr><th>\( x \)</th><th>\( 0 \)</th><th>\( \pi/2 \)</th><th>\( \pi \)</th><th>\( 3\pi/2 \)</th><th>\( 2\pi \)</th></tr>
<tr><td>\( \text{sen}\,x \)</td><td>0</td><td>1</td><td>0</td><td>\( -1 \)</td><td>0</td></tr>
<tr><td>\( \cos x \)</td><td>1</td><td>0</td><td>\( -1 \)</td><td>0</td><td>1</td></tr>
</table>
<ul>
<li>\( \text{sen} \) crece en \( [-\pi/2,\pi/2] \) y decrece en \( [\pi/2,3\pi/2] \).</li>
<li>\( \cos \) decrece en \( [0,\pi] \) y crece en \( [\pi,2\pi] \).</li>
<li>\( -\cos \) y \( -\text{sen} \) son los mismos gráficos dados vuelta: donde \( \cos \) crece, \( -\cos \) decrece, y los valores cambian de signo.</li>
<li>\( \text{Arctg}:\mathbb R\to(-\pi/2,\pi/2) \), creciente. \( \text{Arctg}(0)=0 \), \( \text{Arctg}(1)=\pi/4 \), \( \text{Arctg}(-1)=-\pi/4 \), \( \text{Arctg}(\sqrt3)=\pi/3 \). Tiende a \( \pm\pi/2 \) en \( \pm\infty \) sin alcanzarlos.</li>
</ul>
<p>Esto es lo que se usa en la pregunta de "¿para qué \( U \) es invertible?": saber hacia dónde va la función en el intervalo y cuánto vale en los extremos.</p>`,
                keys: [String.raw`Tabla de sen y cos en \( 0,\pi/2,\pi,3\pi/2,2\pi \)`, String.raw`\( \cos \) decrece en \( [0,\pi] \); \( \text{sen} \) crece en \( [-\pi/2,\pi/2] \)`, String.raw`\( \text{Arctg} \) es creciente y su imagen es \( (-\pi/2,\pi/2) \), abierta`, String.raw`El signo menos da vuelta la monotonía y los valores`],
                example: {
                    q: String.raw`¿Cómo se mueve \( -\cos x \) en \( [\pi/2,\pi] \)?`,
                    sol: String.raw`\( \cos \) baja de 0 a \( -1 \), así que \( -\cos \) sube de 0 a 1: es creciente con imagen \( [0,1] \).`,
                },
            },
            {
                id: "t1.3",
                title: String.raw`Reglas de derivación y cadena`,
                eli5: String.raw`<p>Pensá en tres engranajes conectados. Si el de afuera gira 3 veces por cada vuelta del del medio, y el del medio gira 2 veces por cada vuelta del de adentro, entonces el de afuera da \( 3\times2=6 \) vueltas por cada vuelta del de adentro. La regla de la cadena es eso: cuando una función está adentro de otra, las velocidades de cambio se multiplican. Si te olvidás de un engranaje, la cuenta te da mal.</p>`,
                explain: String.raw`<table>
<tr><th>\( h \)</th><th>\( h' \)</th></tr>
<tr><td>\( e^{u} \)</td><td>\( e^{u}\,u' \)</td></tr>
<tr><td>\( L(u) \)</td><td>\( \frac{u'}{u} \)</td></tr>
<tr><td>\( u^n \)</td><td>\( n\,u^{n-1}u' \)</td></tr>
<tr><td>\( \sqrt u \)</td><td>\( \frac{u'}{2\sqrt u} \)</td></tr>
<tr><td>\( \frac1u \)</td><td>\( -\frac{u'}{u^2} \)</td></tr>
<tr><td>\( \text{sen}\,u \), \( \cos u \)</td><td>\( \cos(u)\,u' \), \( -\text{sen}(u)\,u' \)</td></tr>
<tr><td>\( \text{Arctg}\,u \)</td><td>\( \frac{u'}{1+u^2} \)</td></tr>
</table>
<p>Producto: \( (fg)'=f'g+fg' \). Cociente: \( (f/g)'=\frac{f'g-fg'}{g^2} \).</p>
<p>En el parcial la derivada aparece adentro de otras preguntas: \( f'(0) \) en la derivada de la inversa, \( f''(0) \) en Taylor al revés. Las trampas son siempre las mismas: olvidar el factor de adentro (\( (e^{2x})'=2e^{2x} \)) o el signo (\( (e^{-x})'=-e^{-x} \), \( (\cos x)'=-\text{sen}\,x \)).</p>
<p>Para no equivocarte, nombrá lo de adentro antes de derivar: en \( L(x^2+1) \), \( u=x^2+1 \) y \( u'=2x \), así que la derivada es \( \frac{2x}{x^2+1} \). Con productos, derivá un factor por vez y dejá el otro quieto. En el parcial casi siempre hay que evaluar en 0 o en 1: hacelo recién al final, cuando la expresión de la derivada ya esté completa, para no perder factores en el camino.</p>`,
                keys: [String.raw`Cadena: derivada de afuera evaluada en lo de adentro, por la derivada de adentro`, String.raw`\( (L(u))'=u'/u \) y \( (\text{Arctg}\,u)'=u'/(1+u^2) \)`, String.raw`\( (1/u)'=-u'/u^2 \)`, String.raw`Controlá siempre el factor interno y el signo`],
                example: {
                    q: String.raw`Derivá \( f(x)=L(x^2+1)+e^{-3x} \) y evaluá en 0.`,
                    sol: String.raw`\( f'(x)=\frac{2x}{x^2+1}-3e^{-3x} \), así que \( f'(0)=0-3=-3 \).`,
                },
            },
            {
                id: "t1.4",
                title: String.raw`Parábolas: vértice y recorrido en un trozo`,
                eli5: String.raw`<p>Una parábola con \( a\gt0 \) es un tobogán en forma de U: bajás hasta el fondo y después subís. Si solo te quedás con el pedazo que está a la izquierda del fondo, siempre vas bajando, y nunca pasás dos veces por la misma altura. Pero si tu pedazo incluye el fondo, bajás y volvés a subir, y hay alturas que visitás dos veces. Saber dónde está el fondo (el vértice) es todo el secreto.</p>`,
                explain: String.raw`<p>Para \( ax^2+bx+c \): vértice en \( x_v=-\frac{b}{2a} \), con valor \( y_v=f(x_v) \). Completando cuadrado queda \( a(x-x_v)^2+y_v \).</p>
<ul>
<li>\( a\gt0 \): decrece en \( (-\infty,x_v] \), crece en \( [x_v,+\infty) \), mínimo \( y_v \).</li>
<li>\( a\lt0 \): crece en \( (-\infty,x_v] \), decrece en \( [x_v,+\infty) \), máximo \( y_v \).</li>
</ul>
<p><strong>Recorrido en un trozo</strong>, por ejemplo \( x\le c \):</p>
<ol>
<li>Si \( x_v \) queda <strong>fuera</strong> del trozo (o justo en el borde), la rama es monótona y su imagen va de \( f(c) \) a \( \pm\infty \). El extremo \( f(c) \) va cerrado si \( c \) está incluido.</li>
<li>Si \( x_v \) queda <strong>adentro</strong>, la rama no es inyectiva y su imagen arranca en \( y_v \).</li>
</ol>
<p>Trucos de lectura: \( x^2-2x+1=(x-1)^2 \), \( -x^2-2x-1=-(x+1)^2 \). Muchas parábolas del parcial vienen así disfrazadas.</p>`,
                keys: [String.raw`\( x_v=-b/(2a) \)`, String.raw`Vértice fuera del trozo: rama monótona, imagen desde \( f(\text{borde}) \)`, String.raw`Vértice dentro del trozo: la rama ya no es inyectiva`, String.raw`Buscá cuadrados perfectos escondidos`],
                example: {
                    q: String.raw`Imagen de \( x^2-6x+10 \) para \( x\ge4 \).`,
                    sol: String.raw`\( x_v=3 \), fuera del trozo \( [4,+\infty) \), donde la parábola crece. \( f(4)=2 \): imagen \( [2,+\infty) \).`,
                },
            },
        ],
        t2: [
            {
                id: "t2.1",
                title: String.raw`Inyectiva: definición y cómo probarla`,
                eli5: String.raw`<p>Pensá en un salón de clase donde cada alumno se sienta en una silla. La función es inyectiva si nunca hay dos alumnos en la misma silla: cada silla ocupada tiene un único dueño. Si encontrás dos alumnos distintos sentados en la misma silla, se terminó: no es inyectiva, no hace falta revisar a nadie más. Las sillas vacías no importan para esto (eso es otra propiedad).</p>`,
                explain: String.raw`<p>\( f:A\to B \) es <strong>inyectiva</strong> si \( x_1\neq x_2 \Rightarrow f(x_1)\neq f(x_2) \). La forma equivalente, más cómoda para probar, es \( f(x_1)=f(x_2)\Rightarrow x_1=x_2 \).</p>
<ul>
<li><strong>Para refutar</strong> alcanza un contraejemplo: dos puntos distintos con la misma imagen. \( x^2 \) no es inyectiva en \( \mathbb R \) porque \( f(-1)=f(1) \).</li>
<li><strong>Para probar</strong>: despejar (\( 3x_1-2=3x_2-2\Rightarrow x_1=x_2 \)) o, mucho más rápido en el parcial, mostrar que es <strong>estrictamente monótona</strong>.</li>
<li>La inyectividad <strong>depende del dominio</strong>: \( x^2 \) no es inyectiva en \( \mathbb R \) pero sí en \( [0,+\infty) \). \( \cos \) no lo es en \( \mathbb R \) pero sí en \( [0,\pi] \).</li>
<li>\( f'(x_0)=0 \) en un punto aislado no rompe la inyectividad: \( x^3 \) es inyectiva aunque \( f'(0)=0 \). Lo que la rompe es que \( f \) cambie de sentido.</li>
</ul>`,
                keys: [String.raw`\( f(x_1)=f(x_2)\Rightarrow x_1=x_2 \)`, String.raw`Un contraejemplo alcanza para decir que no`, String.raw`Estrictamente monótona implica inyectiva`, String.raw`Cambiar el dominio puede volverla inyectiva`],
                example: {
                    q: String.raw`¿Es inyectiva \( f(x)=(x-2)^2 \) en \( [1,+\infty) \)?`,
                    sol: String.raw`No: el vértice \( x=2 \) está adentro, y \( f(1)=f(3)=1 \). En \( [2,+\infty) \) sí lo sería.`,
                },
            },
            {
                id: "t2.2",
                title: String.raw`Sobreyectiva y el papel del codominio`,
                eli5: String.raw`<p>El codominio es la lista de invitados a una fiesta, y la imagen es la gente que efectivamente vino. La función es sobreyectiva si vinieron todos los de la lista. Fijate que la misma fiesta (la misma fórmula) puede ser un éxito o un fracaso según qué lista hayas escrito: si invitaste de más, falta gente. Por eso no alcanza con mirar la fórmula: hay que mirar qué codominio te dieron.</p>`,
                explain: String.raw`<p>\( f:A\to B \) es <strong>sobreyectiva</strong> si su imagen \( f(A) \) es todo \( B \); dicho de otra forma, si para cada \( y\in B \) la ecuación \( f(x)=y \) tiene alguna solución en \( A \).</p>
<ul>
<li>Siempre podés hacer sobreyectiva a una función <strong>achicando el codominio</strong> hasta su imagen: \( e^x:\mathbb R\to\mathbb R \) no es sobreyectiva, \( e^x:\mathbb R\to(0,+\infty) \) sí.</li>
<li>Para calcular la imagen de una continua: monotonía más valores (o límites) en los extremos. En una parábola, el vértice da el mínimo o el máximo.</li>
<li>Molde de 2023 "\( f:\mathbb R\to U \) es sobreyectiva si \( U \) es": la respuesta es exactamente la imagen. Ejemplo: \( x^2+2x \) tiene vértice en \( -1 \) con valor \( -1 \), así que \( U=[-1,+\infty) \).</li>
</ul>
<p>Cuidado con los corchetes: un valor que solo se "acerca" (límite) va abierto; uno que se alcanza en un punto del dominio va cerrado.</p>`,
                keys: [String.raw`Sobreyectiva: imagen = codominio`, String.raw`Depende del codominio, no solo de la fórmula`, String.raw`"Sobreyectiva si \( U \) es": \( U \) = imagen exacta`, String.raw`Límite no alcanzado: paréntesis; valor alcanzado: corchete`],
                example: {
                    q: String.raw`¿Es sobreyectiva \( L:(0,+\infty)\to\mathbb R \)? ¿Y \( \cos:\mathbb R\to[-1,1] \)?`,
                    sol: String.raw`Las dos sí: la imagen del logaritmo es todo \( \mathbb R \) y la del coseno es \( [-1,1] \). El coseno, en cambio, no es inyectiva.`,
                },
            },
            {
                id: "t2.3",
                title: String.raw`Biyectiva e inversa`,
                eli5: String.raw`<p>Un baile de parejas perfecto: cada chica baila con exactamente un chico, ningún chico baila con dos, y no queda nadie sentado. Eso es una biyección. Y como las parejas son perfectas, se puede leer al revés: si te dicen el chico, sabés sin dudar cuál es la chica. Esa lectura al revés es la función inversa. Por eso, cuando te preguntan si una función tiene inversa, en realidad te están preguntando si el baile es perfecto.</p>`,
                explain: String.raw`<p>\( f:A\to B \) es <strong>biyectiva</strong> si es inyectiva y sobreyectiva. Es exactamente la condición para que exista \( f^{-1}:B\to A \).</p>
<p><strong>Criterio práctico en \( \mathbb R \):</strong> si \( f:\mathbb R\to\mathbb R \) es continua, estrictamente monótona y sus límites en \( -\infty \) y \( +\infty \) son \( \mp\infty \) (o \( \pm\infty \)), es biyectiva. Ejemplos: \( x^3 \), \( x^3+2x \), \( x+e^x \).</p>
<p><strong>Volver biyectiva una función:</strong> se restringe el dominio a un intervalo donde sea monótona y se toma como codominio su imagen. Así se construyen \( \sqrt{x} \) (de \( x^2 \) en \( [0,+\infty) \)), \( L \) (de \( e^x \) con codominio \( (0,+\infty) \)) y \( \text{Arctg} \).</p>
<table>
<tr><th>Función</th><th>Biyectiva de</th><th>en</th></tr>
<tr><td>\( e^x \)</td><td>\( \mathbb R \)</td><td>\( (0,+\infty) \)</td></tr>
<tr><td>\( x^2 \)</td><td>\( [0,+\infty) \)</td><td>\( [0,+\infty) \)</td></tr>
<tr><td>\( \cos x \)</td><td>\( [0,\pi] \)</td><td>\( [-1,1] \)</td></tr>
<tr><td>\( \text{Arctg}\,x \)</td><td>\( \mathbb R \)</td><td>\( (-\pi/2,\pi/2) \)</td></tr>
</table>`,
                keys: [String.raw`Biyectiva = inyectiva + sobreyectiva = tiene inversa`, String.raw`Continua, estrictamente monótona y con límites \( \pm\infty \): biyectiva en \( \mathbb R \)`, String.raw`Restringir dominio y codominio la vuelve biyectiva`],
                example: {
                    q: String.raw`¿Es biyectiva \( f:\mathbb R\to\mathbb R \), \( f(x)=x^3+2x \)?`,
                    sol: String.raw`\( f'(x)=3x^2+2\gt0 \): estrictamente creciente, así que inyectiva. Es continua y va de \( -\infty \) a \( +\infty \): sobreyectiva. Biyectiva.`,
                },
            },
            {
                id: "t2.4",
                title: String.raw`Método gráfico y monotonía`,
                eli5: String.raw`<p>Pasá un láser horizontal por el gráfico, subiéndolo de a poco. Si en alguna altura el láser toca la curva dos veces, la función no es inyectiva. Si en alguna altura no toca nada, no es sobreyectiva. La derivada ayuda a saber cómo se mueve la curva: si es siempre positiva, la curva solo sube, y un láser nunca la puede tocar dos veces.</p>`,
                explain: String.raw`<ul>
<li><strong>Recta horizontal:</strong> inyectiva si cada recta \( y=c \) corta al gráfico a lo sumo una vez; sobreyectiva (sobre \( B \)) si cada \( y=c \) con \( c\in B \) lo corta al menos una vez.</li>
<li><strong>Derivada:</strong> si \( f'\gt0 \) en un intervalo (salvo puntos aislados donde vale 0), \( f \) es estrictamente creciente ahí, y por lo tanto inyectiva. Lo mismo con \( f'\lt0 \).</li>
<li>Si \( f' \) <strong>cambia de signo</strong>, \( f \) sube y baja: no es inyectiva. Ejemplo: \( x^3-3x \) tiene \( f'=3x^2-3 \), negativa en \( (-1,1) \), y \( f(0)=f(\sqrt3)=0 \).</li>
<li><strong>Imagen de un intervalo:</strong> si \( f \) es continua y monótona en \( (a,b) \), la imagen es el intervalo entre \( \lim_{x\to a^+}f \) y \( \lim_{x\to b^-}f \), con corchete en los extremos que pertenezcan al dominio.</li>
</ul>
<p>En el parcial conviene dibujar a mano alzada: con dos o tres valores y hacia dónde va cada rama ya se ve la respuesta.</p>`,
                keys: [String.raw`Recta horizontal: dos cortes = no inyectiva; cero cortes = no sobreyectiva`, String.raw`\( f' \) de signo constante: inyectiva`, String.raw`\( f' \) cambia de signo: no inyectiva`, String.raw`Imagen de intervalo: límites en los extremos`],
                example: {
                    q: String.raw`¿Es sobreyectiva \( f:\mathbb R\to\mathbb R \), \( f(x)=x^3-3x \)?`,
                    sol: String.raw`Sí: es continua, tiende a \( -\infty \) y a \( +\infty \), así que toma todos los valores. No es inyectiva porque \( f' \) cambia de signo.`,
                },
            },
            {
                id: "t2.5",
                title: String.raw`Funciones a trozos (molde P4)`,
                eli5: String.raw`<p>Una ruta hecha de dos tramos de empresas distintas. Para que nunca pases dos veces por la misma altura, cada tramo tiene que ir siempre para el mismo lado, y además los dos tramos no pueden compartir alturas. Para que pases por todas las alturas, entre los dos tramos tienen que cubrirlas todas, sin dejar un agujero. Se revisa cada tramo por separado y después se comparan.</p>`,
                explain: String.raw`<p>Receta para \( f:\mathbb R\to\mathbb R \) con dos ramas separadas en \( x=c \):</p>
<ol>
<li><strong>Rama izquierda</strong> (\( x\le c \) o \( x\lt c \)): ¿es monótona? Si es parábola, ¿el vértice cae adentro? Calculá su imagen \( I_1 \): valor en \( c \) (cerrado si \( c \) está incluido, abierto si es límite) y límite en \( -\infty \).</li>
<li><strong>Rama derecha:</strong> lo mismo, imagen \( I_2 \), con límite cuando \( x\to c^+ \) (abierto) y cuando \( x\to+\infty \).</li>
<li><strong>Inyectiva</strong> si cada rama es inyectiva y \( I_1\cap I_2=\varnothing \).</li>
<li><strong>Sobreyectiva</strong> si \( I_1\cup I_2=\mathbb R \).</li>
</ol>
<table>
<tr><th>¿Se pisan?</th><th>¿Cubren \( \mathbb R \)?</th><th>Resultado</th></tr>
<tr><td>No (y ramas inyectivas)</td><td>Sí</td><td>biyectiva</td></tr>
<tr><td>No</td><td>No</td><td>inyectiva, no sobreyectiva</td></tr>
<tr><td>Sí (o vértice adentro)</td><td>Sí</td><td>no inyectiva, sí sobreyectiva</td></tr>
<tr><td>Sí</td><td>No</td><td>ni una ni otra</td></tr>
</table>
<p>Trampa clásica: imágenes que "se tocan" en un solo punto, como \( [0,+\infty) \) y \( (0,+\infty) \). Ese 0 no es el problema; el problema es que comparten todo \( (0,+\infty) \).</p>`,
                keys: [String.raw`Imagen de cada rama con extremos abiertos o cerrados`, String.raw`Vértice adentro de la rama: no inyectiva`, String.raw`Imágenes que se pisan: no inyectiva`, String.raw`Unión distinta de \( \mathbb R \): no sobreyectiva`, String.raw`El punto de corte pertenece a una sola rama`],
                example: {
                    q: String.raw`\( f(x)=e^x \) si \( x\le0 \); \( x+2 \) si \( x\gt0 \).`,
                    sol: String.raw`\( I_1=(0,1] \), \( I_2=(2,+\infty) \). No se pisan: inyectiva. Faltan \( (-\infty,0] \) y \( (1,2] \): no sobreyectiva.`,
                },
            },
        ],
        t3: [
            {
                id: "t3.1",
                title: String.raw`Qué es la inversa y cuándo existe`,
                eli5: String.raw`<p>Pensá en un traductor que pasa palabras de español a inglés. Para poder traducir de vuelta sin dudas, cada palabra en español tiene que tener su propia palabra en inglés (nada de dos palabras con la misma traducción) y todas las palabras inglesas de la lista tienen que usarse. Si pasa eso, el diccionario se puede leer al revés: esa lectura al revés es la función inversa. Ida y vuelta te deja donde empezaste.</p>`,
                explain: String.raw`<p>\( f:A\to B \) tiene inversa \( f^{-1}:B\to A \) si y solo si es <strong>biyectiva</strong>. En ese caso:</p>
<ul>
<li>\( f^{-1}(y)=x \iff f(x)=y \). Todo dato "\( f(a)=b \)" se lee al revés: \( f^{-1}(b)=a \).</li>
<li>\( f^{-1}(f(x))=x \) para \( x\in A \) y \( f(f^{-1}(y))=y \) para \( y\in B \).</li>
<li>Dominio de \( f^{-1} \) = codominio de \( f \) (\( B \)); recorrido de \( f^{-1} \) = dominio de \( f \) (\( A \)).</li>
<li>El gráfico de \( f^{-1} \) es el de \( f \) reflejado en la recta \( y=x \): el punto \( (a,b) \) pasa a \( (b,a) \).</li>
<li>Si \( f \) es estrictamente creciente, \( f^{-1} \) también; si es decreciente, \( f^{-1} \) también.</li>
</ul>
<p>Ojo con la notación: \( f^{-1}(x) \) no es \( \frac{1}{f(x)} \). Son cosas distintas.</p>`,
                keys: [String.raw`Inversa existe \( \iff \) biyectiva`, String.raw`\( f(a)=b \iff f^{-1}(b)=a \)`, String.raw`Dominio y recorrido se intercambian`, String.raw`Gráfico reflejado en \( y=x \)`, String.raw`\( f^{-1} \) no es \( 1/f \)`],
                example: {
                    q: String.raw`\( f \) es invertible y su gráfico pasa por \( (2,7) \). ¿Qué sabés de \( f^{-1} \)?`,
                    sol: String.raw`\( f^{-1}(7)=2 \): el gráfico de \( f^{-1} \) pasa por \( (7,2) \).`,
                },
            },
            {
                id: "t3.2",
                title: String.raw`Despejar con logaritmo y exponencial`,
                eli5: String.raw`<p>Armar un regalo: primero lo metés en una caja, después lo envolvés, después le ponés un moño. Para desarmarlo hacés lo mismo al revés: primero sacás el moño, después el papel, al final abrís la caja. Despejar una inversa es eso: la última operación que le hizo \( f \) a la \( x \) es la primera que tenés que deshacer. Una suma se deshace restando, un producto dividiendo, una exponencial con logaritmo.</p>`,
                explain: String.raw`<p>Se escribe \( y=f(x) \) y se despeja \( x \) deshaciendo las operaciones de afuera hacia adentro.</p>
<table>
<tr><th>\( f(x) \)</th><th>Despeje</th><th>\( f^{-1}(y) \)</th></tr>
<tr><td>\( a\,e^{bx+c}+d \)</td><td>\( e^{bx+c}=\frac{y-d}{a} \Rightarrow bx+c=L\!\left(\frac{y-d}{a}\right) \)</td><td>\( \frac{1}{b}\left[L\!\left(\frac{y-d}{a}\right)-c\right] \)</td></tr>
<tr><td>\( a\,L(bx+c)+d \)</td><td>\( L(bx+c)=\frac{y-d}{a} \Rightarrow bx+c=e^{(y-d)/a} \)</td><td>\( \frac{1}{b}\left[e^{(y-d)/a}-c\right] \)</td></tr>
</table>
<p>Ejemplo: \( y=1+e^{2-x} \Rightarrow e^{2-x}=y-1 \Rightarrow 2-x=L(y-1) \Rightarrow x=2-L(y-1) \).</p>
<p><strong>Siempre verificá con un punto</strong>: elegí \( x \) cómodo (el que anula el exponente o hace 1 el argumento del \( L \)), calculá \( y=f(x) \) y fijate qué opción devuelve ese \( x \). Las opciones falsas del parcial cambian un signo dentro del \( L \) o del exponente, y el punto las descarta en segundos.</p>
<p>Ojo con los signos adentro del exponente: en \( e^{3-2x} \) despejar da \( 3-2x=L(y) \) y recién después \( x=\frac{3-L(y)}{2} \). Si el codominio que te dan no coincide con la imagen (por ejemplo \( e^x+2 \) con codominio \( \mathbb R \), cuando la imagen es \( (2,+\infty) \)), la fórmula existe pero la función no es invertible entre esos conjuntos: la respuesta es \"no es invertible\".</p>`,
                keys: [String.raw`Deshacer de afuera hacia adentro`, String.raw`\( e^{u}=v \Rightarrow u=L(v) \); \( L(u)=v \Rightarrow u=e^{v} \)`, String.raw`Verificar con el punto que anula el exponente o da \( L(1) \)`, String.raw`Si la imagen no coincide con el codominio, no es invertible`],
                example: {
                    q: String.raw`\( f:\mathbb R\to(0,+\infty) \), \( f(x)=e^{3-2x} \). Hallá \( f^{-1} \).`,
                    sol: String.raw`\( 3-2x=L(y) \Rightarrow x=\frac{3-L(y)}{2} \). Chequeo: \( f(\frac32)=e^0=1 \) y \( f^{-1}(1)=\frac{3-0}2=\frac32 \).`,
                },
            },
            {
                id: "t3.3",
                title: String.raw`Despejar con raíces y cuadráticas: el signo`,
                eli5: String.raw`<p>Si te digo "pensé un número y al elevarlo al cuadrado me dio 9", no sabés si pensé 3 o \( -3 \): hay dos candidatos. Para decidir necesitás una pista extra, por ejemplo "el número era negativo". En las inversas con cuadrados esa pista es el dominio de \( f \): te dice de qué lado del vértice vivían los \( x \), y por lo tanto qué signo lleva la raíz.</p>`,
                explain: String.raw`<p>Con \( f(x)=a(x-h)^2+k \) en un dominio que está de un solo lado de \( h \):</p>
\[ (x-h)^2=\frac{y-k}{a}\ \Rightarrow\ x=h\pm\sqrt{\frac{y-k}{a}} \]
<ul>
<li>Si el dominio es \( x\ge h \), va \( + \): \( x=h+\sqrt{\cdots} \).</li>
<li>Si el dominio es \( x\le h \), va \( - \): \( x=h-\sqrt{\cdots} \).</li>
</ul>
<p>Ejemplo: \( f:(-\infty,2]\to[-1,+\infty) \), \( f(x)=(x-2)^2-1 \). \( (x-2)^2=y+1 \), y como \( x\le2 \), \( x=2-\sqrt{y+1} \).</p>
<p>Con raíces: \( y=\sqrt{u(x)}+c \Rightarrow (y-c)^2=u(x) \), y después se despeja \( x \). Si al final aparece otra raíz (como en \( \sqrt{1-x^2} \)), el signo vuelve a salir del dominio: \( x\in(0,1) \) positivo, \( +\sqrt{\ } \).</p>
<p>Si el dominio contiene al vértice, \( f \) no es inyectiva y la respuesta es "no es invertible", aunque el despeje "salga".</p>`,
                keys: [String.raw`El dominio decide el signo de la raíz`, String.raw`\( x\ge h \): \( +\sqrt{\ } \); \( x\le h \): \( -\sqrt{\ } \)`, String.raw`Vértice dentro del dominio: no invertible`, String.raw`Verificá con un punto de cada lado`],
                example: {
                    q: String.raw`\( f:(-\infty,0]\to[1,+\infty) \), \( f(x)=x^2+1 \). Hallá \( f^{-1} \).`,
                    sol: String.raw`\( x^2=y-1 \) y \( x\le0 \), así que \( f^{-1}(y)=-\sqrt{y-1} \). Chequeo: \( f(-2)=5 \), \( f^{-1}(5)=-2 \).`,
                },
            },
            {
                id: "t3.4",
                title: String.raw`Dominio y recorrido de la inversa`,
                eli5: String.raw`<p>La inversa hace el camino de vuelta. Si \( f \) arrancaba en tu casa (el dominio) y llegaba a la escuela (la imagen), \( f^{-1} \) arranca en la escuela y termina en tu casa. Por eso, para saber desde dónde arranca la inversa, alcanza con saber hasta dónde llegaba \( f \). Y si en el mapa pusiste una escuela a la que en realidad nunca llegás, la vuelta no se puede hacer.</p>`,
                explain: String.raw`<ul>
<li>\( \text{Dom}(f^{-1})=B \) (codominio de \( f \)) y \( \text{Rec}(f^{-1})=A \) (dominio de \( f \)).</li>
<li>Para que el enunciado "\( f:A\to B \) es invertible" sea cierto, la imagen real \( f(A) \) tiene que ser <strong>exactamente</strong> \( B \). Si \( B \) es más grande, \( f \) no es sobreyectiva y la opción correcta es "no es invertible".</li>
<li>Para calcular \( f(A) \): monotonía y valores (o límites) en los extremos de \( A \), cuidando corchetes.</li>
</ul>
<p>Ejemplo: \( f:[0,+\infty)\to B \), \( f(x)=2-e^{-x} \). Crece (porque \( -e^{-x} \) crece), \( f(0)=1 \) incluido y \( f\to2 \) sin alcanzarlo: \( B=[1,2) \). Entonces \( f^{-1}:[1,2)\to[0,+\infty) \), \( f^{-1}(y)=-L(2-y) \).</p>
<p>La fórmula de \( f^{-1} \) también da una pista: su dominio natural tiene que contener a \( B \). Si \( f^{-1}(y)=L(y-3)+1 \), necesitás \( y\gt3 \).</p>`,
                keys: [String.raw`\( \text{Dom}(f^{-1})=B \), \( \text{Rec}(f^{-1})=A \)`, String.raw`Invertible como \( f:A\to B \) exige \( f(A)=B \) exacto`, String.raw`Codominio más grande que la imagen: no invertible`, String.raw`La fórmula de \( f^{-1} \) tiene que estar definida en todo \( B \)`],
                example: {
                    q: String.raw`\( f:(0,1]\to B \), \( f(x)=-L(x) \). ¿Qué \( B \) la hace invertible?`,
                    sol: String.raw`\( -L \) decrece: en \( x=1 \) vale 0 (incluido) y cuando \( x\to0^+ \) tiende a \( +\infty \). \( B=[0,+\infty) \).`,
                },
            },
            {
                id: "t3.5",
                title: String.raw`Coseno y seno restringidos (molde P3)`,
                eli5: String.raw`<p>En una calesita, si mirás una vuelta entera pasás dos veces por cada altura (una subiendo y otra bajando). Pero si mirás solo un cuarto o media vuelta, siempre en el mismo sentido, cada altura aparece una sola vez. El único detalle es si el caballito del principio y el del final están incluidos: eso decide si ponés corchete o paréntesis en los extremos.</p>`,
                explain: String.raw`<p>Molde: \( f:I\to U \) con \( \pm\cos \) o \( \pm\text{sen} \) en un intervalo donde es monótona. Ya es inyectiva; hay que elegir \( U=f(I) \).</p>
<ol>
<li>Evaluá \( f \) en los dos extremos de \( I \).</li>
<li>Extremo de \( I \) cerrado: el valor va con corchete. Extremo abierto: paréntesis.</li>
<li>Ordená los dos valores de menor a mayor, llevando cada uno su corchete.</li>
</ol>
<table>
<tr><th>\( f \) en \( I \)</th><th>Va de</th><th>\( U \)</th></tr>
<tr><td>\( \cos \) en \( (0,\pi/2] \)</td><td>1 (no) a 0 (sí)</td><td>\( [0,1) \)</td></tr>
<tr><td>\( \cos \) en \( [\pi,3\pi/2) \)</td><td>\( -1 \) (sí) a 0 (no)</td><td>\( [-1,0) \)</td></tr>
<tr><td>\( \text{sen} \) en \( [\pi/2,3\pi/2) \)</td><td>1 (sí) a \( -1 \) (no)</td><td>\( (-1,1] \)</td></tr>
<tr><td>\( -\text{sen} \) en \( (-\pi/2,0] \)</td><td>1 (no) a 0 (sí)</td><td>\( [0,1) \)</td></tr>
</table>
<p>Las cuatro opciones del parcial son el mismo intervalo con corchetes o signo cambiados. Con \( -\cos \) o \( -\text{sen} \), calculá primero el valor de \( \cos \) o \( \text{sen} \) y después cambiá el signo. Si el intervalo no es de monotonía (por ejemplo \( [0,3\pi/2) \) para \( \cos \)), no es invertible para ningún \( U \).</p>`,
                keys: [String.raw`Evaluá en los extremos; cerrado da corchete`, String.raw`Ordená de menor a mayor llevando cada corchete`, String.raw`Con signo menos: primero el valor, después el signo`, String.raw`Intervalo sin monotonía: no invertible`],
                example: {
                    q: String.raw`\( f:[0,\pi)\to U \), \( f(x)=2\cos x+1 \).`,
                    sol: String.raw`\( \cos \) va de 1 (incluido) a \( -1 \) (excluido); \( 2\cos x+1 \) va de 3 (incluido) a \( -1 \) (excluido): \( U=(-1,3] \).`,
                },
            },
            {
                id: "t3.6",
                title: String.raw`Arctg restringida e inversas trigonométricas`,
                eli5: String.raw`<p>Muchos ángulos distintos tienen la misma pendiente (la tangente se repite cada media vuelta). Para que la pregunta "¿qué ángulo tiene esta pendiente?" tenga una sola respuesta, se elige una ventana fija de ángulos, entre \( -90^\circ \) y \( 90^\circ \). La respuesta de esa ventana es el \( \text{Arctg} \). Con el seno y el coseno se hace lo mismo, cada uno con su ventana.</p>`,
                explain: String.raw`<table>
<tr><th>Inversa</th><th>de</th><th>Dominio</th><th>Recorrido</th><th>Derivada</th></tr>
<tr><td>\( \text{Arctg} \)</td><td>\( \text{tg} \) en \( (-\frac\pi2,\frac\pi2) \)</td><td>\( \mathbb R \)</td><td>\( (-\frac\pi2,\frac\pi2) \)</td><td>\( \frac1{1+x^2} \)</td></tr>
<tr><td>\( \text{Arcsen} \)</td><td>\( \text{sen} \) en \( [-\frac\pi2,\frac\pi2] \)</td><td>\( [-1,1] \)</td><td>\( [-\frac\pi2,\frac\pi2] \)</td><td>\( \frac1{\sqrt{1-x^2}} \)</td></tr>
<tr><td>\( \text{Arccos} \)</td><td>\( \cos \) en \( [0,\pi] \)</td><td>\( [-1,1] \)</td><td>\( [0,\pi] \)</td><td>\( -\frac1{\sqrt{1-x^2}} \)</td></tr>
</table>
<p><strong>Arctg restringida</strong> (salió en mayo 2024): \( \text{Arctg} \) es creciente, así que la imagen de un intervalo \( [a,b) \) es \( [\text{Arctg}\,a,\text{Arctg}\,b) \), con los mismos corchetes. Si un extremo es \( \pm\infty \), el valor es \( \pm\frac\pi2 \) <strong>siempre abierto</strong>.</p>
<p>Valores: \( \text{Arctg}(1)=\frac\pi4 \), \( \text{Arctg}(\sqrt3)=\frac\pi3 \), \( \text{Arcsen}(\frac12)=\frac\pi6 \), \( \text{Arccos}(\frac12)=\frac\pi3 \), \( \text{Arccos}(0)=\frac\pi2 \).</p>
<p>Estas restricciones son el mismo razonamiento que la pregunta de \( \cos \) restringido, pero al revés: primero se elige el intervalo donde la función es monótona, y ahí la inversa existe. Si en el parcial aparece \( -\text{Arctg} \) o \( \text{Arctg} \) sobre una semirrecta, calculá el valor en el extremo finito (corchete si está incluido) y usá \( \pm\frac\pi2 \) abierto para el extremo infinito, cambiando el signo si hay un menos adelante.</p>`,
                keys: [String.raw`\( \text{Arctg}:\mathbb R\to(-\frac\pi2,\frac\pi2) \), creciente`, String.raw`\( \text{Arcsen}:[-1,1]\to[-\frac\pi2,\frac\pi2] \); \( \text{Arccos}:[-1,1]\to[0,\pi] \)`, String.raw`En \( \pm\infty \), \( \text{Arctg} \) da \( \pm\frac\pi2 \) abierto`, String.raw`\( (\text{Arcsen})'=\frac1{\sqrt{1-x^2}} \), \( (\text{Arccos})'=-\frac1{\sqrt{1-x^2}} \)`],
                example: {
                    q: String.raw`\( f:(-\infty,1]\to U \), \( f(x)=\text{Arctg}\,x \).`,
                    sol: String.raw`Creciente: de \( -\frac\pi2 \) (límite, abierto) a \( \frac\pi4 \) (alcanzado): \( U=(-\frac\pi2,\frac\pi4] \).`,
                },
            },
        ],
        t4: [
            {
                id: "t4.1",
                title: String.raw`La fórmula y de dónde sale`,
                eli5: String.raw`<p>Si 1 dólar son 40 pesos, entonces 1 peso es \( \frac1{40} \) de dólar: el cambio "de vuelta" es el recíproco del cambio "de ida". La derivada mide cuánto cambia la salida por cada unidad que cambia la entrada. La inversa hace el viaje de vuelta, así que su derivada es el recíproco: si \( f \) multiplica los cambios por 4, \( f^{-1} \) los divide por 4. Lo único delicado es mirar el tipo de cambio en el lugar correcto.</p>`,
                explain: String.raw`<p>Si \( f \) es derivable e invertible, \( f(a)=b \) y \( f'(a)\neq0 \):</p>
\[ (f^{-1})'(b)=\frac{1}{f'(a)}=\frac{1}{f'\big(f^{-1}(b)\big)} \]
<p><strong>De dónde sale:</strong> derivando \( f(f^{-1}(x))=x \) con la cadena queda \( f'(f^{-1}(x))\cdot(f^{-1})'(x)=1 \).</p>
<ul>
<li>Se evalúa \( f' \) en \( a=f^{-1}(b) \), <strong>nunca en \( b \)</strong>. Es la trampa número uno del parcial.</li>
<li>Si \( f'(a)=0 \), \( f^{-1} \) no es derivable en \( b \) (tangente vertical). Ejemplo: \( f(x)=x^3 \) en \( a=0 \).</li>
<li>Gráficamente: la tangente a \( f \) en \( (a,b) \) con pendiente \( m \) se refleja en la tangente a \( f^{-1} \) en \( (b,a) \) con pendiente \( \frac1m \). El signo se conserva: \( f \) decreciente da \( (f^{-1})' \) negativa.</li>
</ul>
<p>Cuando te dan datos en dos puntos (por ejemplo \( f(1)=3 \) y \( f(3)=1 \)), antes de usar la fórmula escribí "\( f^{-1}(b)=\ ? \)" y buscá cuál dato lo contesta.</p>`,
                keys: [String.raw`\( (f^{-1})'(b)=1/f'(a) \) con \( f(a)=b \)`, String.raw`Se deriva \( f(f^{-1}(x))=x \)`, String.raw`\( f' \) se evalúa en \( a \), no en \( b \)`, String.raw`\( f'(a)=0 \): la inversa no es derivable en \( b \)`, String.raw`El signo de la derivada se conserva`],
                example: {
                    q: String.raw`\( f(2)=4 \), \( f(4)=2 \), \( f'(2)=3 \), \( f'(4)=5 \). Calculá \( (f^{-1})'(4) \).`,
                    sol: String.raw`\( f^{-1}(4)=2 \) (porque \( f(2)=4 \)). Entonces \( (f^{-1})'(4)=\frac1{f'(2)}=\frac13 \), no \( \frac15 \).`,
                },
            },
            {
                id: "t4.2",
                title: String.raw`f explícita: inversa y su derivada en un punto (P7)`,
                eli5: String.raw`<p>Te dan una máquina que transforma números y te preguntan de qué número salió cierto resultado, sin darte el manual para desarmarla. El truco es probar con los números más fáciles, 0 y 1: casi siempre uno de los dos da justo el resultado de las opciones. Una vez que sabés de dónde salió, la "velocidad de vuelta" es uno sobre la velocidad de la máquina en ese número.</p>`,
                explain: String.raw`<p>Molde: "\( f:A\to B \), \( f(x)=\ldots \), invertible. Entonces:" y opciones del tipo "\( f^{-1}(c)=a \) y \( (f^{-1})'(c)=\ldots \)".</p>
<ol>
<li>Calculá \( f(0) \) (o \( f(1) \) si hay \( L(x) \) o \( \frac1x \)). Ese valor es \( c \), y \( f^{-1}(c)=0 \) (o 1).</li>
<li>Derivá \( f \) con cuidado (cadena en \( e^{2x} \), \( \text{Arctg}(2x) \), \( (2x-1)^2 \)) y evaluá en ese mismo punto.</li>
<li>\( (f^{-1})'(c)=\frac1{f'(0)} \).</li>
<li>Compará con las opciones: mirá el número \( c \), el punto \( a \) y la derivada. Si alguna de las tres cosas no coincide, esa opción cae.</li>
</ol>
<p>Las opciones falsas cambian el punto (\( f^{-1}(1)=0 \) contra \( f^{-1}(0)=1 \)), ponen \( f'(0) \) en lugar de \( \frac1{f'(0)} \) o usan una derivada sin la cadena. Si \( f \) es decreciente, la derivada de la inversa es negativa. "Ninguna de las otras" nunca fue la correcta en V1, pero puede serlo: si tu cuenta no aparece, revisala una vez y, si da igual, marcala.</p>`,
                keys: [String.raw`Evaluá \( f(0) \) y \( f(1) \): uno es el \( c \) de las opciones`, String.raw`\( (f^{-1})'(c)=1/f'(0) \)`, String.raw`Cuidado con la cadena al derivar`, String.raw`\( f \) decreciente: derivada de la inversa negativa`],
                example: {
                    q: String.raw`\( f(x)=x^3+2x+1 \), invertible en \( \mathbb R \).`,
                    sol: String.raw`\( f(0)=1 \), así que \( f^{-1}(1)=0 \). \( f'(x)=3x^2+2 \), \( f'(0)=2 \): \( (f^{-1})'(1)=\frac12 \).`,
                },
            },
            {
                id: "t4.3",
                title: String.raw`Composiciones con potencias y raíces`,
                eli5: String.raw`<p>Una cebolla tiene capas: para llegar al centro las sacás de afuera hacia adentro. Si \( g \) es "la inversa y después al cubo", la capa de afuera es el cubo y la de adentro es la inversa. Derivás la capa de afuera (dejando adentro lo que había), y multiplicás por la derivada de la capa de adentro. La de adentro es la derivada de la inversa, que ya sabés calcular.</p>`,
                explain: String.raw`<p>Con \( f(a)=b \) y \( f'(a) \) como datos, y \( (f^{-1})'(b)=\frac1{f'(a)} \):</p>
<table>
<tr><th>\( g(x) \)</th><th>\( g'(b) \)</th></tr>
<tr><td>\( (f^{-1}(x))^n \)</td><td>\( n\,a^{n-1}\cdot\frac1{f'(a)} \)</td></tr>
<tr><td>\( \sqrt{f^{-1}(x)} \)</td><td>\( \frac1{2\sqrt a}\cdot\frac1{f'(a)} \)</td></tr>
<tr><td>\( \sqrt[3]{f^{-1}(x)} \)</td><td>\( \frac1{3\sqrt[3]{a^2}}\cdot\frac1{f'(a)} \)</td></tr>
<tr><td>\( \frac1{f^{-1}(x)} \)</td><td>\( -\frac1{a^2}\cdot\frac1{f'(a)} \)</td></tr>
</table>
<p>Fijate que en todas aparece \( a \) (no \( b \)) adentro de la potencia: lo que se eleva es \( f^{-1}(b)=a \).</p>
<p>Ejemplo: \( f(2)=5 \), \( f'(2)=3 \), \( g=(f^{-1})^2 \). \( g'(5)=2\cdot f^{-1}(5)\cdot(f^{-1})'(5)=2\cdot2\cdot\frac13=\frac43 \). Si ponés \( 2\cdot5\cdot\frac13 \) usaste \( b \) en vez de \( a \); si ponés \( 2\cdot2\cdot3 \) olvidaste invertir \( f'(a) \).</p>
<p>Si piden \( g(b)+g'(b) \), sumá también \( g(b)=a^n \) (o \( \sqrt a \), etc.).</p>
<p>Un orden de trabajo que evita errores: primero escribí \( a=f^{-1}(b) \) leyendo el dato al revés, después \( (f^{-1})'(b)=\frac1{f'(a)} \), y recién ahí derivá \( g \) con la cadena y reemplazá. Así cada número aparece una sola vez en su lugar. Las opciones falsas del parcial son justamente las que salen de mezclar \( a \) con \( b \) o de no invertir \( f'(a) \).</p>`,
                keys: [String.raw`Derivada de afuera evaluada en \( f^{-1}(b)=a \)`, String.raw`Por \( (f^{-1})'(b)=1/f'(a) \)`, String.raw`\( ((f^{-1})^n)'(b)=n\,a^{n-1}/f'(a) \)`, String.raw`Si piden \( g(b)+g'(b) \), no olvides \( g(b) \)`],
                example: {
                    q: String.raw`\( f(9)=2 \), \( f'(9)=\frac13 \), \( g=\sqrt{f^{-1}} \). Calculá \( g'(2) \).`,
                    sol: String.raw`\( f^{-1}(2)=9 \), \( (f^{-1})'(2)=3 \). \( g'(2)=\frac1{2\sqrt9}\cdot3=\frac12 \).`,
                },
            },
            {
                id: "t4.4",
                title: String.raw`Composiciones con L, exponencial, productos y cocientes`,
                eli5: String.raw`<p>Es la misma idea de la cebolla, pero ahora la capa de afuera es un logaritmo, una exponencial, o la inversa aparece multiplicada por otra cosa. Para cada disfraz hay una regla de derivar que ya conocés (la del \( L \), la del producto, la del cociente). Lo único nuevo es que, cada vez que aparece la derivada de la inversa, la reemplazás por "uno sobre la derivada de \( f \) en el punto de origen".</p>`,
                explain: String.raw`<table>
<tr><th>\( g(x) \)</th><th>\( g'(b) \) (con \( f(a)=b \))</th></tr>
<tr><td>\( L(f^{-1}(x)) \)</td><td>\( \frac1a\cdot\frac1{f'(a)} \)</td></tr>
<tr><td>\( e^{f^{-1}(x)} \)</td><td>\( e^{a}\cdot\frac1{f'(a)} \)</td></tr>
<tr><td>\( x\,f^{-1}(x) \)</td><td>\( a+b\cdot\frac1{f'(a)} \)</td></tr>
<tr><td>\( \frac{f^{-1}(x)}{x} \)</td><td>\( \frac{\frac{b}{f'(a)}-a}{b^2} \)</td></tr>
<tr><td>\( f^{-1}(h(x)) \)</td><td>\( \frac{h'(x_0)}{f'(a)} \), donde \( h(x_0)=b \) y \( f(a)=b \)</td></tr>
</table>
<p>En el producto \( x\,f^{-1}(x) \), la \( x \) de afuera vale \( b \) (el punto donde evaluás), y \( f^{-1}(b)=a \). Mezclar los dos es el error típico.</p>
<p>Con \( f^{-1}(h(x)) \) (inversa de una composición), primero ubicá qué \( x_0 \) hace \( h(x_0)=b \). Ejemplo: \( g(x)=f^{-1}(x^2) \), \( f(3)=4 \), \( f'(3)=5 \): \( g'(2)=(f^{-1})'(4)\cdot2\cdot2=\frac45 \).</p>
<p>Antes de derivar, escribí los dos datos que vas a usar: \( f^{-1}(b)=a \) y \( (f^{-1})'(b)=\frac1{f'(a)} \). Después aplicá la regla correspondiente (logaritmo, exponencial, producto o cociente) como si \( f^{-1} \) fuera una función cualquiera \( u \), con \( u(b)=a \) y \( u'(b)=\frac1{f'(a)} \). Si el enunciado pide \( g(b)+g'(b) \), calculá también \( g(b) \): \( L(a) \), \( e^a \), \( b\,a \) o \( \frac ab \) según el caso.</p>`,
                keys: [String.raw`\( (L(f^{-1}))'(b)=\frac1{a\,f'(a)} \)`, String.raw`En \( x\,f^{-1}(x) \): la \( x \) vale \( b \), la \( f^{-1} \) vale \( a \)`, String.raw`Cociente: \( \frac{u'v-uv'}{v^2} \) con \( u=f^{-1} \), \( v=x \)`, String.raw`\( L(f^{-1}(b))=L(a) \); si \( a=1 \) da 0`],
                example: {
                    q: String.raw`\( f(1)=3 \), \( f'(1)=2 \), \( g(x)=x\,f^{-1}(x) \). Calculá \( g'(3) \).`,
                    sol: String.raw`\( g'(x)=f^{-1}(x)+x\,(f^{-1})'(x) \). En 3: \( 1+3\cdot\frac12=\frac52 \).`,
                },
            },
            {
                id: "t4.5",
                title: String.raw`Sumas y combinaciones de f y f⁻¹`,
                eli5: String.raw`<p>Cuando \( g \) es una suma, cada sumando se deriva por separado, como cuando dos personas empujan un auto y sumás sus fuerzas. La parte con \( f^{-1} \) usa la regla de la inversa; la parte con \( f \) se deriva normal. Lo que hay que vigilar es en qué punto evaluás cada parte: los dos sumandos se evalúan en el mismo \( x \), pero la derivada de \( f \) que necesitás puede no ser la del dato.</p>`,
                explain: String.raw`<p>Para \( g(x)=\alpha\,f(x)+\beta\,f^{-1}(x)+h(x) \) evaluada en \( b \):</p>
\[ g'(b)=\alpha\,f'(b)+\frac{\beta}{f'(a)}+h'(b) \]
<ul>
<li>El término \( f'(b) \) pide la derivada de \( f \) <strong>en \( b \)</strong>. Solo la tenés si te la dan o si \( a=b \) (punto fijo, \( f(a)=a \)). Por eso en el parcial, cuando aparece \( f \) sumada, el dato es del tipo \( f(3)=3 \).</li>
<li>\( (f^{-1})^2+f \): \( g'(b)=2a\cdot\frac1{f'(a)}+f'(b) \).</li>
<li>Si piden \( g(b)+g'(b) \): \( g(b)=\alpha f(b)+\beta a+h(b) \). De nuevo, \( f(b) \) solo se conoce si \( a=b \) o si te lo dan.</li>
</ul>
<p>Ejemplo: \( f(2)=2 \), \( f'(2)=4 \), \( g=f+3f^{-1} \). Como \( a=b=2 \): \( g'(2)=4+\frac34=\frac{19}4 \).</p>
<p>Antes de calcular, leé qué derivadas de \( f \) necesitás y en qué punto. Si la pregunta pide \( g'(b) \) y \( g \) contiene \( f(x) \) sumada, vas a necesitar \( f'(b) \): si el dato es \( f(a)=b \) con \( a\neq b \), falta información (o el enunciado te la da aparte). Con un punto fijo \( f(3)=3 \), \( f'(3) \) sirve para las dos partes: para \( f'(b) \) y para \( (f^{-1})'(b)=\frac1{f'(3)} \).</p>`,
                keys: [String.raw`Cada sumando por separado, todos evaluados en \( b \)`, String.raw`\( f'(b) \) solo se conoce si \( f(a)=a \) o te lo dan`, String.raw`\( (f^{-1})' \) siempre es \( 1/f'(a) \)`, String.raw`\( g(b)+g'(b) \): sumá el valor también`],
                example: {
                    q: String.raw`\( f(0)=3 \), \( f'(0)=2 \), \( g(x)=f^{-1}(x)+x^2 \). Calculá \( g'(3) \).`,
                    sol: String.raw`\( g'(3)=(f^{-1})'(3)+2\cdot3=\frac12+6=\frac{13}2 \).`,
                },
            },
        ],
        t5: [
            {
                id: "t5.1",
                title: String.raw`Definición del polinomio de Taylor`,
                eli5: String.raw`<p>Querés copiar una curva con una regla flexible, pero solo cerca de un punto. Primero la ponés a la misma altura que la curva. Después le das la misma inclinación. Después la doblás con la misma curvatura. Cada paso la parece más a la curva cerca de ese punto. El polinomio de Taylor es eso: un polinomio que copia la altura, la inclinación, la curvatura (y así) de la función en 0.</p>`,
                explain: String.raw`<p>El polinomio de Taylor de orden \( n \) de \( f \) en 0 es</p>
\[ P_n(x)=\sum_{k=0}^{n}\frac{f^{(k)}(0)}{k!}x^k=f(0)+f'(0)x+\frac{f''(0)}{2}x^2+\frac{f'''(0)}{6}x^3+\dots \]
<ul>
<li>Coeficiente de \( x^k \): \( a_k=\frac{f^{(k)}(0)}{k!} \). Al revés: \( f^{(k)}(0)=k!\,a_k \).</li>
<li>Cumple \( f(x)=P_n(x)+o(x^n) \): la diferencia, dividida \( x^n \), tiende a 0.</li>
<li><strong>Unicidad:</strong> si encontrás un polinomio \( Q \) de grado \( \le n \) con \( f(x)=Q(x)+o(x^n) \), entonces \( Q \) es el Taylor. Por eso se puede calcular sustituyendo, sumando y multiplicando desarrollos conocidos, sin derivar.</li>
<li>El Taylor de un polinomio es el mismo polinomio cortado en el orden pedido.</li>
<li>"Orden \( n \)" no significa "grado \( n \)": el Taylor de orden 3 de \( \cos x \) es \( 1-\frac{x^2}2 \), de grado 2.</li>
</ul>`,
                keys: [String.raw`\( a_k=f^{(k)}(0)/k! \)`, String.raw`\( f=P_n+o(x^n) \)`, String.raw`Unicidad: cualquier camino que dé \( f=Q+o(x^n) \) sirve`, String.raw`Orden no es lo mismo que grado`],
                example: {
                    q: String.raw`\( f(0)=2 \), \( f'(0)=-1 \), \( f''(0)=6 \). Escribí \( P_2 \).`,
                    sol: String.raw`\( P_2(x)=2-x+\frac62x^2=2-x+3x^2 \).`,
                },
            },
            {
                id: "t5.2",
                title: String.raw`Desarrollos notables de memoria`,
                eli5: String.raw`<p>Así como sabés de memoria que \( 7\times8=56 \) y no lo recalculás cada vez, hay cinco o seis desarrollos que conviene saber de memoria. En la prueba no hay materiales, y todos los límites y ejercicios de Taylor se arman a partir de ellos. Si los sabés sin dudar, cada ejercicio se reduce a sumar y restar coeficientes. Es la inversión de tiempo que más rinde en toda la materia.</p>`,
                explain: String.raw`<table>
<tr><th>Función</th><th>Desarrollo en 0 (hasta orden 3)</th></tr>
<tr><td>\( e^x \)</td><td>\( 1+x+\frac{x^2}2+\frac{x^3}6 \)</td></tr>
<tr><td>\( \text{sen}\,x \)</td><td>\( x-\frac{x^3}6 \)</td></tr>
<tr><td>\( \cos x \)</td><td>\( 1-\frac{x^2}2 \) (y \( +\frac{x^4}{24} \))</td></tr>
<tr><td>\( L(1+x) \)</td><td>\( x-\frac{x^2}2+\frac{x^3}3 \)</td></tr>
<tr><td>\( \text{Arctg}\,x \)</td><td>\( x-\frac{x^3}3 \)</td></tr>
<tr><td>\( \frac1{1-x} \)</td><td>\( 1+x+x^2+x^3 \)</td></tr>
<tr><td>\( \sqrt{1+x} \)</td><td>\( 1+\frac x2-\frac{x^2}8+\frac{x^3}{16} \)</td></tr>
</table>
<p><strong>Para recordarlos:</strong> \( e^x \) lleva factoriales y todos los signos \( + \). \( \text{sen} \) y \( \cos \) llevan factoriales, solo impares o solo pares, signos alternados. \( L(1+x) \) y \( \text{Arctg} \) llevan denominadores 1, 2, 3 (sin factorial); \( \text{Arctg} \) solo impares. Sale un par útil: \( \text{sen}\,x-\text{Arctg}\,x=\frac{x^3}6+o(x^3) \).</p>
<p>\( (1+x)^\alpha=1+\alpha x+\frac{\alpha(\alpha-1)}2x^2+\dots \) incluye \( \sqrt{1+x} \) (\( \alpha=\frac12 \)) y \( \frac1{1+x} \) (\( \alpha=-1 \)).</p>
<p>Una forma de fijarlos: escribí la tabla todos los días antes de estudiar, sin mirar, hasta que salga en menos de un minuto. En la prueba, antes de empezar los límites, anotá en un costado los desarrollos que vas a usar con las sustituciones ya hechas. Así separás el trabajo de memoria del trabajo de cuentas.</p>`,
                keys: [String.raw`\( e^x \) y \( \text{sen} \), \( \cos \): factoriales`, String.raw`\( L(1+x) \) y \( \text{Arctg} \): denominadores \( 1,2,3 \) sin factorial`, String.raw`\( \text{sen} \) y \( \text{Arctg} \) difieren en el cúbico: \( \frac16 \) contra \( \frac13 \)`, String.raw`\( (1+x)^\alpha \) cubre raíces y recíprocos`],
                example: {
                    q: String.raw`Desarrollá \( \frac1{1+x} \) hasta orden 3.`,
                    sol: String.raw`Con \( \alpha=-1 \), o cambiando \( x \) por \( -x \) en \( \frac1{1-x} \): \( 1-x+x^2-x^3 \).`,
                },
            },
            {
                id: "t5.3",
                title: String.raw`Sustitución: u = ax, u = −x, u = x²`,
                eli5: String.raw`<p>Tenés una receta para una persona y cocinás para el doble. No todos los ingredientes se multiplican igual: en Taylor, el término con \( x \) se multiplica por 2, el de \( x^2 \) por 4, el de \( x^3 \) por 8. Eso pasa cuando cambiás \( x \) por \( 2x \): cada potencia arrastra su propio factor. Si te olvidás de elevar el 2, el plato sale mal.</p>`,
                explain: String.raw`<p>Si \( f(u)=a_0+a_1u+a_2u^2+a_3u^3+o(u^3) \) y \( u=cx \), entonces</p>
\[ f(cx)=a_0+a_1c\,x+a_2c^2x^2+a_3c^3x^3+o(x^3) \]
<ul>
<li>\( e^{-2x}=1-2x+2x^2-\frac43x^3 \); \( L(1+3x)=3x-\frac92x^2+9x^3 \); \( \cos(3x)=1-\frac92x^2 \).</li>
<li>\( u=-x \) cambia el signo de las potencias impares: \( L(1-x)=-x-\frac{x^2}2-\frac{x^3}3 \) (todos negativos).</li>
<li>\( u=x^2 \): cada potencia se duplica. \( e^{x^2}=1+x^2+\frac{x^4}2+o(x^4) \); \( \cos(x^2)=1-\frac{x^4}2+o(x^4) \). Un desarrollo de orden 2 en \( u \) ya da orden 4 en \( x \).</li>
</ul>
<p>Truco de control: el coeficiente de \( x^k \) en \( f(cx) \) es \( c^k \) por el coeficiente original. Si en tu cuenta un \( c \) no quedó elevado a la potencia correcta, hay error.</p>
<p>Cuando la sustitución lleva signo y número a la vez (\( u=-2x \)), hacé las dos cosas en cada término: \( (-2x)^2=4x^2 \) (positivo) y \( (-2x)^3=-8x^3 \) (negativo). Por eso \( e^{-2x}=1-2x+2x^2-\frac43x^3 \) alterna signos y \( L(1-2x)=-2x-2x^2-\frac83x^3 \) queda todo negativo.</p>`,
                keys: [String.raw`Coeficiente de \( x^k \) en \( f(cx) \): \( c^k a_k \)`, String.raw`\( u=-x \): cambian de signo las potencias impares`, String.raw`\( L(1-cx) \): todos los términos negativos`, String.raw`\( u=x^2 \): el orden en \( x \) se duplica`],
                example: {
                    q: String.raw`\( \text{Arctg}(2x) \) hasta orden 3.`,
                    sol: String.raw`\( 2x-\frac{(2x)^3}3=2x-\frac83x^3 \).`,
                },
            },
            {
                id: "t5.4",
                title: String.raw`Notación o chica`,
                eli5: String.raw`<p>Cuando contás millones de pesos, los centavos no importan: son "chiquitos comparados con" lo que estás contando. La o chica es exactamente eso. Escribir \( o(x^2) \) quiere decir "algo que, cerca de 0, es muchísimo más chico que \( x^2 \)". Es la forma de tirar los centavos sin mentir: dejás anotado que había algo, pero que no va a cambiar el resultado.</p>`,
                explain: String.raw`<p>\( g(x)=o(x^n) \) cuando \( x\to0 \) significa \( \lim_{x\to0}\frac{g(x)}{x^n}=0 \).</p>
<ul>
<li>Ejemplos: \( x^3=o(x^2) \), \( x^4=o(x^2) \), pero \( x^2 \) no es \( o(x^2) \) ni \( o(x^3) \).</li>
<li>\( o(x^n)\pm o(x^n)=o(x^n) \) (no se cancelan: "algo chico menos algo chico" sigue siendo chico).</li>
<li>\( c\cdot o(x^n)=o(x^n) \) para \( c\neq0 \) constante.</li>
<li>\( x^k\cdot o(x^n)=o(x^{n+k}) \) y \( \frac{o(x^n)}{x^k}=o(x^{n-k}) \).</li>
<li>\( o(x^n)+o(x^m)=o(x^{\min(n,m)}) \): manda el más grueso.</li>
<li>Si \( m\gt n \), todo \( o(x^m) \) es también \( o(x^n) \).</li>
</ul>
<p>Por qué importa en los límites: si el numerador es \( c\,x^k+o(x^k) \) y el denominador \( x^k \), el límite es \( c \), porque \( \frac{o(x^k)}{x^k}\to0 \).</p>
<p>En la práctica, la o chica es la etiqueta que te recuerda hasta dónde es confiable tu cuenta. Si escribís \( \text{sen}\,x=x+o(x^2) \), podés usarlo en un límite con \( x^2 \) abajo, pero no con \( x^3 \). Y como \( o(x^2)-o(x^2) \) no es 0, dos restos nunca se cancelan entre sí: si tu numerador quedó solo con restos, te faltó desarrollar más.</p>`,
                keys: [String.raw`\( g=o(x^n) \iff g/x^n\to0 \)`, String.raw`\( o(x^n)-o(x^n)=o(x^n) \), no 0`, String.raw`\( x^k\,o(x^n)=o(x^{n+k}) \)`, String.raw`En una suma manda la o de menor exponente`],
                example: {
                    q: String.raw`Simplificá \( x\cdot\big(x^2+o(x^2)\big)+o(x^4) \).`,
                    sol: String.raw`\( x^3+o(x^3)+o(x^4)=x^3+o(x^3) \).`,
                },
            },
            {
                id: "t5.5",
                title: String.raw`Productos de desarrollos y orden necesario`,
                eli5: String.raw`<p>Multiplicar dos desarrollos es como multiplicar dos listas de compras: cada cosa de una lista con cada cosa de la otra. Pero como solo te interesan los productos hasta cierto tamaño (el orden), podés tirar desde el principio las combinaciones que se pasan. Si uno de los factores ya arranca con \( x \), al otro le alcanza con un orden menos.</p>`,
                explain: String.raw`<p>Para el Taylor de orden \( n \) de \( f\cdot g \): multiplicás los desarrollos y descartás todo término de grado mayor que \( n \).</p>
<ul>
<li>\( e^x\,\text{sen}\,x=(1+x+\frac{x^2}2)(x-\frac{x^3}6)+o(x^3)=x+x^2+\frac{x^3}3+o(x^3) \).</li>
<li>\( e^x\cos x=(1+x+\frac{x^2}2)(1-\frac{x^2}2)+o(x^2)=1+x+o(x^2) \): los \( x^2 \) se cancelan.</li>
<li><strong>Factor \( x^k \) adelante:</strong> para \( x^k\,g(x) \) hasta orden \( n \), a \( g \) le alcanza con orden \( n-k \). \( x\,L(1+x) \) hasta orden 3 pide \( L \) hasta orden 2: \( x^2-\frac{x^3}2 \).</li>
<li>Si un factor arranca en \( x^m \) (como \( \text{sen}\,x \)), el otro necesita solo orden \( n-m \).</li>
</ul>
<p>En los límites esto aparece en términos como \( x\,\text{sen}\,x \), \( x\,e^{-x} \) o \( 2x\,e^x \): no los desarrolles de más, pero tampoco de menos.</p>
<p>Una regla de control rápida: el grado más bajo de un producto es la suma de los grados más bajos de los factores. \( x\cdot\text{sen}\,x \) arranca en \( x^2 \), \( x^2\cos x \) en \( x^2 \), \( \text{sen}\,x\cdot L(1+x) \) en \( x^2 \). Si tu resultado arranca antes, hay un error.</p>`,
                keys: [String.raw`Multiplicá y tirá los grados mayores que \( n \)`, String.raw`Factor \( x^k \): el otro alcanza con orden \( n-k \)`, String.raw`\( e^x\,\text{sen}\,x=x+x^2+\frac{x^3}3+\dots \)`, String.raw`Pueden cancelarse términos al multiplicar`],
                example: {
                    q: String.raw`Taylor de orden 3 de \( x\,e^{-x} \).`,
                    sol: String.raw`\( x(1-x+\frac{x^2}2)=x-x^2+\frac{x^3}2 \).`,
                },
            },
        ],
        t6: [
            {
                id: "t6.1",
                title: String.raw`Elegir el orden de desarrollo`,
                eli5: String.raw`<p>Si un juez mide el salto en milímetros, vos también tenés que medir por lo menos en milímetros: si medís en metros, no vas a poder decir quién ganó. En un límite con \( x^3 \) abajo, el "juez" mide hasta \( x^3 \). Si desarrollás el numerador solo hasta \( x^2 \), te falta precisión y no podés concluir. Desarrollar de más no hace daño: esos términos se van solos.</p>`,
                explain: String.raw`<p>Para \( \lim_{x\to0}\frac{N(x)}{x^k} \): desarrollá <strong>cada función del numerador hasta orden \( k \)</strong>. Todo lo que tirás es \( o(x^k) \), y \( \frac{o(x^k)}{x^k}\to0 \).</p>
<ul>
<li>Si una función aparece multiplicada por \( x^m \), le alcanza con orden \( k-m \): en \( x\,\text{sen}\,x \) con \( x^4 \) abajo, \( \text{sen} \) hasta orden 3.</li>
<li>Con sustitución \( u=x^2 \), cada orden en \( u \) vale doble en \( x \): para \( L(1+x^2) \) con \( x^4 \) abajo, alcanza \( L(1+u)=u-\frac{u^2}2 \).</li>
<li>Si desarrollás de menos, te queda un \( o(x^j) \) con \( j\lt k \) dividido \( x^k \): <strong>no se puede concluir</strong>. Hay que volver y agregar términos.</li>
</ul>
<p>Después de sumar, mirá el primer término no nulo \( c\,x^m \):</p>
<table>
<tr><th>Caso</th><th>Límite</th></tr>
<tr><td>\( m=k \)</td><td>\( c \)</td></tr>
<tr><td>\( m\gt k \)</td><td>\( 0 \)</td></tr>
<tr><td>\( m\lt k \)</td><td>\( \pm\infty \) o no existe (distinto a cada lado si \( k-m \) es impar)</td></tr>
</table>`,
                keys: [String.raw`Orden del desarrollo = exponente del denominador`, String.raw`Factor \( x^m \) adelante: un orden \( k-m \) alcanza`, String.raw`Desarrollar de menos no permite concluir`, String.raw`Primer término no nulo \( c\,x^m \): compará \( m \) con \( k \)`],
                example: {
                    q: String.raw`\( \lim_{x\to0}\frac{x(e^x-1)-x^2}{x^3} \)`,
                    sol: String.raw`\( e^x \) hasta orden 2 alcanza (hay un \( x \) adelante): \( x(x+\frac{x^2}2)-x^2=\frac{x^3}2 \). Límite \( \frac12 \).`,
                },
            },
            {
                id: "t6.2",
                title: String.raw`Cancelaciones y términos sueltos`,
                eli5: String.raw`<p>Imaginá una balanza con muchas pesas de distintos tamaños de cada lado. Las pesas grandes (las constantes y los \( x \)) se equilibran entre sí y desaparecen. Lo que decide hacia dónde se inclina la balanza es la primera pesa chica que queda sin pareja. En los límites pasa lo mismo: los términos grandes se cancelan a propósito, y el resultado sale del primer término que sobrevive.</p>`,
                explain: String.raw`<p>Los numeradores del parcial están armados para que las constantes y (casi siempre) los \( x \) se cancelen. Los "términos sueltos" (\( -1 \), \( -2x \), \( +x^2 \), \( -\frac{x^2}2 \)) están ahí justamente para eso.</p>
<ol>
<li>Escribí cada desarrollo en una columna: constantes, \( x \), \( x^2 \), \( x^3 \).</li>
<li>Sumá columna por columna, sin olvidar los términos sueltos ni los signos de las restas (\( -\cos x=-1+\frac{x^2}2 \)).</li>
<li><strong>Control:</strong> antes de dividir, verificá que todo lo de grado menor que \( k \) dio 0. Si no, o hay un error de cuenta o el límite es infinito (en las revisiones nunca pasó).</li>
</ol>
<p>Ejemplo: \( \frac{\text{sen}(3x)-3x}{x^3} \): \( \text{sen}(3x)=3x-\frac{27x^3}6 \), el \( 3x \) se cancela y queda \( -\frac92x^3 \). Límite \( -\frac92 \).</p>
<p>Si el término que "debería" decidir también se cancela (como en \( \frac{\cos x-1+\frac{x^2}2}{x^2} \)), el primer no nulo es de grado mayor y el límite es 0.</p>`,
                keys: [String.raw`Tabla por potencias: constantes, \( x \), \( x^2 \), \( x^3 \)`, String.raw`Los términos sueltos están para cancelar`, String.raw`Restar un desarrollo cambia el signo de todos sus términos`, String.raw`Todo lo de grado menor tiene que dar 0 antes de dividir`],
                example: {
                    q: String.raw`\( \lim_{x\to0}\frac{e^{-x}+x-1}{x^2} \)`,
                    sol: String.raw`\( (1-x+\frac{x^2}2)+x-1=\frac{x^2}2 \). Límite \( \frac12 \).`,
                },
            },
            {
                id: "t6.3",
                title: String.raw`Límites con x² abajo (molde P2)`,
                eli5: String.raw`<p>Es el mismo juego de siempre, pero con la regla más corta: solo te importan las pesas hasta el tamaño \( x^2 \). Desarrollás cada función hasta \( x^2 \), sumás los coeficientes de \( x^2 \) con su signo y ese número es la respuesta. El único peligro es equivocarte al elevar al cuadrado el número que acompaña a la \( x \). Con práctica, estos límites salen en tres o cuatro renglones.</p>`,
                explain: String.raw`<p>Desarrollos hasta orden 2 que más aparecen:</p>
<table>
<tr><th>Función</th><th>Orden 2</th></tr>
<tr><td>\( \text{sen}(2x) \), \( \text{Arctg}(2x) \)</td><td>\( 2x \) (sin término \( x^2 \))</td></tr>
<tr><td>\( \cos x \), \( \cos(2x) \)</td><td>\( 1-\frac{x^2}2 \), \( 1-2x^2 \)</td></tr>
<tr><td>\( e^{x} \), \( e^{-x} \)</td><td>\( 1\pm x+\frac{x^2}2 \)</td></tr>
<tr><td>\( e^{2x} \), \( e^{-2x} \)</td><td>\( 1\pm2x+2x^2 \)</td></tr>
<tr><td>\( L(1+2x) \), \( L(1-2x) \)</td><td>\( \pm2x-2x^2 \)</td></tr>
<tr><td>\( L(1-x) \)</td><td>\( -x-\frac{x^2}2 \)</td></tr>
<tr><td>\( 2x\,e^{x} \)</td><td>\( 2x+2x^2 \)</td></tr>
</table>
<p>Resultados reales: \( 0,\ -4,\ -\frac52,\ 2,\ -2 \). Si tu resultado es un número "raro" como \( \frac{17}{6} \), probablemente arrastraste un término de orden 3 que no correspondía o te equivocaste en un cuadrado.</p>
<p>El seno y el Arctg no tienen término de grado 2: cuando aparecen en un límite con \( x^2 \) abajo, solo aportan su parte lineal (que se cancela con otra).</p>`,
                keys: [String.raw`\( (2x)^2/2=2x^2 \): en \( e^{\pm2x} \) y \( L(1\pm2x) \) el coeficiente es \( \pm2 \)`, String.raw`\( \cos(2x)=1-2x^2 \)`, String.raw`\( \text{sen} \) y \( \text{Arctg} \) no aportan \( x^2 \)`, String.raw`Sumá solo la columna de \( x^2 \) cuando lo demás se canceló`],
                example: {
                    q: String.raw`\( \lim_{x\to0}\frac{\text{sen}(2x)-L(1+2x)}{x^2} \)`,
                    sol: String.raw`\( 2x-(2x-2x^2)=2x^2 \). Límite 2.`,
                },
            },
            {
                id: "t6.4",
                title: String.raw`Límites con x³ abajo (molde P5)`,
                eli5: String.raw`<p>Ahora el juez mide más fino: hasta \( x^3 \). Hay que llevar una columna más en la cuenta, y los números de esa columna son más traicioneros (factoriales, cubos). La buena noticia es que en estos ejercicios casi todo lo de grado 1 y 2 se cancela: si ves que no se cancela, es señal de un error antes de llegar al final.</p>`,
                explain: String.raw`<p>Términos cúbicos que hay que tener a mano:</p>
<table>
<tr><th>Función</th><th>Término en \( x^3 \)</th></tr>
<tr><td>\( \text{sen}\,x \), \( \text{sen}(2x) \)</td><td>\( -\frac{x^3}6 \), \( -\frac43x^3 \)</td></tr>
<tr><td>\( \text{Arctg}\,x \), \( \text{Arctg}(2x) \)</td><td>\( -\frac{x^3}3 \), \( -\frac83x^3 \)</td></tr>
<tr><td>\( e^{x} \), \( e^{-x} \)</td><td>\( \pm\frac{x^3}6 \)</td></tr>
<tr><td>\( L(1+x) \), \( L(1+2x) \)</td><td>\( \frac{x^3}3 \), \( \frac83x^3 \)</td></tr>
<tr><td>\( \cos x \)</td><td>0 (solo pares)</td></tr>
<tr><td>\( x\cos x \), \( x\,e^{-x} \)</td><td>\( -\frac{x^3}2 \), \( \frac{x^3}2 \)</td></tr>
</table>
<p>Receta: armá la tabla con columnas \( 1,\ x,\ x^2,\ x^3 \); verificá que las tres primeras suman 0; el límite es la suma de la columna \( x^3 \).</p>
<p>Ejemplo: \( \frac{x\cos x-\text{sen}\,x}{x^3} \): \( (x-\frac{x^3}2)-(x-\frac{x^3}6)=-\frac{x^3}3 \). Límite \( -\frac13 \).</p>
<p>Antes de sumar, escribí cada desarrollo completo hasta \( x^3 \), incluso los términos que valen 0, para no perder el lugar. Controlá especialmente los signos de los cúbicos: en \( e^{-x} \) el cúbico es negativo, en \( L(1+x) \) positivo, en \( \text{sen} \) y \( \text{Arctg} \) negativo. Si el resultado sale entero cuando todos los coeficientes son fracciones con 6 o 3 abajo, desconfiá y revisá.</p>`,
                keys: [String.raw`Tabla con 4 columnas: \( 1,x,x^2,x^3 \)`, String.raw`\( \text{sen}(2x) \) aporta \( -\frac43x^3 \); \( L(1+2x) \) aporta \( \frac83x^3 \)`, String.raw`\( \cos \) no tiene cúbico`, String.raw`Las columnas de grado menor tienen que anularse`],
                example: {
                    q: String.raw`\( \lim_{x\to0}\frac{e^x-e^{-x}-2x}{x^3} \)`,
                    sol: String.raw`\( e^x-e^{-x}=2x+\frac{x^3}3 \). Menos \( 2x \): \( \frac{x^3}3 \). Límite \( \frac13 \).`,
                },
            },
            {
                id: "t6.5",
                title: String.raw`Casos x⁴ y denominadores que no son potencias`,
                eli5: String.raw`<p>A veces el juez mide todavía más fino (\( x^4 \)), o en vez de un reloj simple usa un reloj armado con piezas (\( x\,\text{sen}\,x \) en lugar de \( x^2 \)). En el primer caso agregás una columna más. En el segundo, desarrollás también el denominador y te quedás con su primer término: \( x\,\text{sen}\,x \) se porta como \( x^2 \) cerca de 0.</p>`,
                explain: String.raw`<p><strong>Denominador \( x^4 \)</strong> (salió en mayo 2023): hacen falta términos de grado 4.</p>
<ul>
<li>\( \cos x=1-\frac{x^2}2+\frac{x^4}{24} \); \( x\,\text{sen}\,x=x^2-\frac{x^4}6 \); \( e^{x^2}=1+x^2+\frac{x^4}2 \); \( \cos(x^2)=1-\frac{x^4}2 \); \( x\,L(1+x)=x^2-\frac{x^3}2+\frac{x^4}3 \).</li>
</ul>
<p><strong>Denominador que no es potencia</strong> (\( x\,\text{sen}\,x \), \( x^2\text{Arctg}\,x \), \( 1-\cos x \)): desarrollalo y quedate con el primer término, que es de la forma \( d\,x^k \). Después el límite es \( \frac{c}{d} \), donde \( c\,x^k \) es el primer término del numerador.</p>
<ul>
<li>\( x\,\text{sen}\,x=x^2+o(x^2) \) y \( x^2\,\text{Arctg}\,x=x^3+o(x^3) \).</li>
<li>Ejemplo: \( \frac{1-\cos x}{x\,\text{sen}\,x}=\frac{\frac{x^2}2+o(x^2)}{x^2+o(x^2)}\to\frac12 \).</li>
</ul>
<p>Los candidatos para un límite "nuevo" son estos: \( x^4 \), \( (1+x)^\alpha \), o un denominador que haya que desarrollar.</p>
<p>Cuando el denominador es un producto (\( x\,\text{sen}\,x \)), no hace falta desarrollarlo de más: su primer término ya decide la potencia \( k \), y el numerador se desarrolla hasta ese mismo \( k \). Si el límite con \( x^4 \) te da un número raro, revisá especialmente el \( \frac{x^4}{24} \) del coseno, que es el término que más se olvida.</p>`,
                keys: [String.raw`\( \cos x \) hasta \( x^4 \): \( +\frac{x^4}{24} \)`, String.raw`\( x\,\text{sen}\,x=x^2-\frac{x^4}6+\dots \)`, String.raw`Denominador no monomio: desarrollalo y usá su primer término`, String.raw`\( \frac{c\,x^k+\dots}{d\,x^k+\dots}\to\frac cd \)`],
                example: {
                    q: String.raw`\( \lim_{x\to0}\frac{x\,\text{sen}\,x-x^2}{x^4} \)`,
                    sol: String.raw`\( x(x-\frac{x^3}6)-x^2=-\frac{x^4}6 \). Límite \( -\frac16 \).`,
                },
            },
        ],
        t7: [
            {
                id: "t7.1",
                title: String.raw`Leer f(0), f'(0) y f''(0) del polinomio`,
                eli5: String.raw`<p>El polinomio de Taylor es como la ficha técnica de la función en 0: el primer número es la altura, el segundo la inclinación, el tercero dice cuánto se curva. Pero el tercero viene "dividido entre 2" de fábrica. Si alguien te pregunta la curvatura verdadera (\( f''(0) \)), tenés que multiplicar ese número por 2. Olvidarse del 2 es el error más común de todo el tema.</p>`,
                explain: String.raw`<p>Si \( P(x)=a_0+a_1x+a_2x^2 \) es el Taylor de orden 2 de \( f \) en 0:</p>
\[ f(0)=a_0,\qquad f'(0)=a_1,\qquad f''(0)=2a_2 \]
<p>En general \( f^{(k)}(0)=k!\,a_k \): para orden 3, \( f'''(0)=6a_3 \).</p>
<ul>
<li>Ejemplo: \( P(x)=3-4x+5x^2 \Rightarrow f(0)=3 \), \( f'(0)=-4 \), \( f''(0)=10 \).</li>
<li>El Taylor de orden 1 de \( f' \) se obtiene derivando \( P \): \( P'(x)=a_1+2a_2x \). Por eso de un Taylor de orden 2 de \( f \) solo sale uno de orden 1 de \( f' \).</li>
<li>Si te dan \( f \) explícita (por ejemplo \( e^{3x} \)), \( f''(0) \) es 2 por el coeficiente de \( x^2 \): \( e^{3x}=1+3x+\frac92x^2 \Rightarrow f''(0)=9 \).</li>
</ul>
<p>En 2023 y mayo 2024 pedían \( g(0)+g'(0)+g''(0) \): cada término sale de esta lectura, y el \( g'' \) es donde se pierde el 2.</p>`,
                keys: [String.raw`\( f(0)=a_0 \), \( f'(0)=a_1 \), \( f''(0)=2a_2 \)`, String.raw`En general \( f^{(k)}(0)=k!\,a_k \)`, String.raw`Derivar \( P \) da el Taylor de \( f' \) con un orden menos`, String.raw`El 2 de \( f'' \) es la trampa clásica`],
                example: {
                    q: String.raw`\( P(x)=2+x-3x^2 \). Calculá \( f(0)+f'(0)+f''(0) \).`,
                    sol: String.raw`\( 2+1+2(-3)=-3 \). Si usás \( -3 \) como \( f''(0) \) te da 0, que suele estar entre las opciones.`,
                },
            },
            {
                id: "t7.2",
                title: String.raw`Extremos relativos en 0`,
                eli5: String.raw`<p>Parado en la punta de una montaña, el piso está horizontal y todo alrededor está más abajo: eso es un máximo. En el fondo de un pozo, piso horizontal y todo alrededor más arriba: mínimo. Si el piso está inclinado, no estás ni en la punta ni en el fondo, estás en una ladera. El polinomio de Taylor te dice justo eso: si hay término con \( x \), estás en una ladera; si no lo hay, el signo del \( x^2 \) te dice si es pozo o montaña.</p>`,
                explain: String.raw`<table>
<tr><th>Condición</th><th>Conclusión en 0</th></tr>
<tr><td>\( f'(0)\neq0 \) (\( a_1\neq0 \))</td><td>no hay extremo</td></tr>
<tr><td>\( f'(0)=0 \) y \( f''(0)\gt0 \) (\( a_1=0 \), \( a_2\gt0 \))</td><td>mínimo relativo</td></tr>
<tr><td>\( f'(0)=0 \) y \( f''(0)\lt0 \) (\( a_1=0 \), \( a_2\lt0 \))</td><td>máximo relativo</td></tr>
<tr><td>\( f'(0)=0 \) y \( f''(0)=0 \)</td><td>el orden 2 no alcanza: mirar el primer término no nulo</td></tr>
</table>
<p>Si hace falta ir más lejos: primer término no nulo después del constante \( a_kx^k \). Con \( k \) par, extremo (mínimo si \( a_k\gt0 \), máximo si \( a_k\lt0 \)); con \( k \) impar, no hay extremo.</p>
<p>Molde de mayo 2026: dos afirmaciones, una sobre \( f \) y otra sobre \( g \) armada con \( f \) y una función conocida (\( 2\cos(2x)-f \)). Para \( g \), calculá su polinomio restando o sumando desarrollos, y aplicá la misma tabla.</p>`,
                keys: [String.raw`Término en \( x \) no nulo: no hay extremo`, String.raw`Sin término en \( x \): el signo de \( a_2 \) decide`, String.raw`\( a_2\gt0 \) mínimo, \( a_2\lt0 \) máximo`, String.raw`Para \( g \), armá su polinomio y aplicá lo mismo`],
                example: {
                    q: String.raw`\( P(x)=1+3x^2 \), \( g(x)=f(x)-2\cos x \). ¿Qué pasa en 0?`,
                    sol: String.raw`\( f \): mínimo (\( a_2=3\gt0 \)). \( g=1+3x^2-2+x^2=-1+4x^2 \): también mínimo.`,
                },
            },
            {
                id: "t7.3",
                title: String.raw`Combinaciones con f y f': el polinomio Q de g`,
                eli5: String.raw`<p>Te dan la ficha técnica de \( f \) y te piden la de otra función armada con \( f \) y su derivada. No necesitás saber quién es \( f \): alcanza con los tres números de la ficha. Derivás \( g \) con las reglas de siempre y cada vez que aparece \( f(0) \), \( f'(0) \) o \( f''(0) \), lo reemplazás por el número que leíste del polinomio.</p>`,
                explain: String.raw`<p>Molde de octubre 2024 a octubre 2025: dan \( P \) de orden 2 de \( f \), definen \( g \) y piden \( Q(1) \), donde \( Q \) es el Taylor de orden 1 de \( g \). Como \( Q(x)=g(0)+g'(0)x \), queda \( Q(1)=g(0)+g'(0) \).</p>
<table>
<tr><th>\( g \)</th><th>\( g(0) \)</th><th>\( g'(0) \)</th></tr>
<tr><td>\( \alpha f+\beta f' \)</td><td>\( \alpha f(0)+\beta f'(0) \)</td><td>\( \alpha f'(0)+\beta f''(0) \)</td></tr>
<tr><td>\( f\cdot f' \)</td><td>\( f(0)f'(0) \)</td><td>\( f'(0)^2+f(0)f''(0) \)</td></tr>
<tr><td>\( \frac{f'}{f} \)</td><td>\( \frac{f'(0)}{f(0)} \)</td><td>\( \frac{f''(0)f(0)-f'(0)^2}{f(0)^2} \)</td></tr>
<tr><td>\( (x+c)\,f \)</td><td>\( c\,f(0) \)</td><td>\( f(0)+c\,f'(0) \)</td></tr>
</table>
<p>Con \( f' \) en la fórmula de \( g \), la derivada de \( g \) pide \( f'' \): por eso se puede llegar solo a orden 1. Si \( g \) no tiene \( f' \) (como \( (x+2)f \)), se puede llegar a orden 2, y ahí conviene multiplicar polinomios: \( (x+2)(1-x+2x^2)=2-x+3x^2+\dots \), y leer \( g''(0)=6 \).</p>`,
                keys: [String.raw`\( Q(1)=g(0)+g'(0) \)`, String.raw`Derivar \( g \) y reemplazar con \( f(0),f'(0),f''(0) \)`, String.raw`\( f''(0)=2a_2 \), no \( a_2 \)`, String.raw`Sin \( f' \) en \( g \): multiplicar polinomios es más rápido`],
                example: {
                    q: String.raw`\( P(x)=2+3x-x^2 \), \( g=3f-f' \). Calculá \( Q(1) \).`,
                    sol: String.raw`\( g(0)=6-3=3 \); \( g'(0)=3\cdot3-f''(0)=9-(-2)=11 \). \( Q(1)=14 \).`,
                },
            },
            {
                id: "t7.4",
                title: String.raw`Composiciones: L(f), 1/f, e^f, f², √f`,
                eli5: String.raw`<p>Ahora \( f \) está adentro de otra función, como un regalo dentro de una caja. Para saber cómo cambia la caja, usás la regla de la cadena: derivada de la caja evaluada en lo que hay adentro, por la derivada de lo de adentro. Otra forma, a veces más cómoda: si \( f(0)=1 \), escribís \( f=1+u \) con \( u \) chiquito, y usás el desarrollo que ya sabés de \( L(1+u) \) o de \( e^u \).</p>`,
                explain: String.raw`<table>
<tr><th>\( g \)</th><th>\( g'(0) \)</th><th>\( g''(0) \)</th></tr>
<tr><td>\( L(f) \)</td><td>\( \frac{f'(0)}{f(0)} \)</td><td>\( \frac{f''(0)f(0)-f'(0)^2}{f(0)^2} \)</td></tr>
<tr><td>\( \frac1f \)</td><td>\( -\frac{f'(0)}{f(0)^2} \)</td><td>(rara vez se pide)</td></tr>
<tr><td>\( e^{f} \)</td><td>\( e^{f(0)}f'(0) \)</td><td>\( e^{f(0)}\left(f''(0)+f'(0)^2\right) \)</td></tr>
<tr><td>\( f^2 \)</td><td>\( 2f(0)f'(0) \)</td><td>\( 2\left(f'(0)^2+f(0)f''(0)\right) \)</td></tr>
<tr><td>\( \sqrt f \)</td><td>\( \frac{f'(0)}{2\sqrt{f(0)}} \)</td><td>(rara vez se pide)</td></tr>
</table>
<p><strong>Por sustitución</strong>, con \( P=1+u \) y \( u=2x-x^2 \): \( L(f)=u-\frac{u^2}2+o(x^2)=2x-x^2-2x^2=2x-3x^2 \). Al elevar \( u \) al cuadrado solo te quedás con los términos de grado \( \le2 \).</p>
<p>\( f^2 \) conviene hacerlo multiplicando: \( (3-x+2x^2)^2=9-6x+(1+12)x^2+\dots \). No es "elevar cada coeficiente al cuadrado".</p>
<p>Elegí el camino según la \( g \): para \( \frac1f \) y \( \sqrt f \) conviene la fórmula de la derivada (solo piden orden 1); para \( L(f) \) y \( e^{f} \) con orden 2, la sustitución suele ser más corta y con menos riesgo de olvidar un término. Si \( f(0)\neq1 \) en \( L(f) \), la constante sale afuera: \( L(f)=L(f(0))+L\!\left(1+\frac{f-f(0)}{f(0)}\right) \).</p>`,
                keys: [String.raw`\( (L f)'(0)=f'(0)/f(0) \)`, String.raw`\( (e^f)''(0)=e^{f(0)}(f''(0)+f'(0)^2) \)`, String.raw`\( f=1+u \): usá \( L(1+u) \) o \( e^u \) conocidos`, String.raw`\( f^2 \): multiplicá polinomios, no eleves coeficientes`],
                example: {
                    q: String.raw`\( P(x)=2+4x+x^2 \), \( g=\frac1f \). Calculá \( Q(1) \) (Taylor de orden 1 de \( g \)).`,
                    sol: String.raw`\( g(0)=\frac12 \), \( g'(0)=-\frac{4}{4}=-1 \). \( Q(1)=\frac12-1=-\frac12 \).`,
                },
            },
            {
                id: "t7.5",
                title: String.raw`Combinaciones con funciones conocidas`,
                eli5: String.raw`<p>Te dan la ficha técnica de \( f \) y te piden la de "\( f \) menos un coseno" o "\( f \) más un logaritmo". Como el coseno y el logaritmo ya tienen ficha conocida (su desarrollo de Taylor), se restan o suman ficha con ficha, número con número. Es como sumar dos listas de precios: cada renglón con su renglón. Después, con la ficha nueva, contestás lo que te pregunten.</p>`,
                explain: String.raw`<p>Si \( g=f\pm c\,h \) con \( h \) conocida, su Taylor es \( P\pm c\,T_h \), donde \( T_h \) es el desarrollo de \( h \) hasta el mismo orden. Si \( g=f\cdot h \), se multiplican y se corta.</p>
<ul>
<li>\( g=2\cos(2x)-f \), \( P=1-2x^2 \): \( 2(1-2x^2)-(1-2x^2)=1-2x^2 \) (mayo 2026: máximo).</li>
<li>\( g=f-e^x \), \( P=1+x+2x^2 \): \( (1+x+2x^2)-(1+x+\frac{x^2}2)=\frac32x^2 \): \( g(0)=g'(0)=0 \), \( g''(0)=3 \), mínimo.</li>
<li>\( g=f+L(1+2x) \), \( P=2-2x+x^2 \): \( 2-2x+x^2+2x-2x^2=2-x^2 \): máximo.</li>
<li>\( g=f\cos x \), \( P=1-2x^2 \): \( (1-2x^2)(1-\frac{x^2}2)=1-\frac52x^2 \).</li>
</ul>
<p>Controles: el coeficiente constante de \( \cos \) y de \( e^x \) es 1 (si hay un 2 o un 3 adelante, multiplica también al 1); \( \cos(2x) \) lleva \( -2x^2 \), no \( -x^2 \). Una vez que tenés el polinomio de \( g \), leé lo que te pidan como en t7.1 y t7.2.</p>`,
                keys: [String.raw`Sumar o restar polinomios renglón por renglón`, String.raw`El factor de adelante multiplica también la constante`, String.raw`\( \cos(2x)=1-2x^2 \), \( L(1+2x)=2x-2x^2 \)`, String.raw`Después leé \( g(0),g'(0),g''(0) \) o el extremo`],
                example: {
                    q: String.raw`\( P(x)=3+x^2 \), \( g=f-3\cos x \). ¿Qué tiene \( g \) en 0?`,
                    sol: String.raw`\( 3+x^2-3+\frac32x^2=\frac52x^2 \): \( g'(0)=0 \), \( g''(0)=5\gt0 \), mínimo.`,
                },
            },
        ],
        t8: [
            {
                id: "t8.1",
                title: String.raw`Qué es una serie y cuándo converge`,
                eli5: String.raw`<p>Tenés una torta. Te comés la mitad; después la mitad de lo que queda; después la mitad de eso, y así para siempre. Aunque comas infinitas veces, nunca vas a comer más de una torta: la cantidad total se acerca a 1. Una serie es sumar infinitos números. A veces, como con la torta, el total se acerca a un número fijo (converge). Otras veces el total crece sin freno o no se decide (diverge).</p>`,
                explain: String.raw`<p>Dada una sucesión \( a_n \), la serie \( \sum_{n=n_0}^{\infty}a_n \) es el límite de las <strong>sumas parciales</strong></p>
\[ S_N=a_{n_0}+a_{n_0+1}+\dots+a_N,\qquad \sum_{n=n_0}^{\infty}a_n=\lim_{N\to\infty}S_N \]
<ul>
<li>Si ese límite es un número finito, la serie <strong>converge</strong> a ese número. Si es \( \pm\infty \) o no existe, <strong>diverge</strong>.</li>
<li><strong>Condición necesaria:</strong> si la serie converge, entonces \( a_n\to0 \). Al revés no vale: que \( a_n\to0 \) no garantiza convergencia. Pero sirve para descartar: si \( a_n\not\to0 \), la serie diverge seguro.</li>
<li>Cambiar, agregar o sacar una cantidad finita de términos no cambia si converge o no (sí cambia el valor de la suma).</li>
<li>Si \( \sum a_n=A \) y \( \sum b_n=B \), entonces \( \sum(\alpha a_n+\beta b_n)=\alpha A+\beta B \).</li>
</ul>
<p>En el parcial todas las series son geométricas (o suma de dos geométricas), así que la definición sirve sobre todo para entender por qué funciona la fórmula y por qué el índice inicial importa.</p>`,
                keys: [String.raw`Serie = límite de las sumas parciales \( S_N \)`, String.raw`Converge si ese límite es finito`, String.raw`Si converge, \( a_n\to0 \); si \( a_n\not\to0 \), diverge`, String.raw`La suma es lineal: se pueden separar y sacar constantes`],
                example: {
                    q: String.raw`\( S_3 \) de \( \sum_{n=1}^\infty\frac1{2^n} \) y el valor de la serie.`,
                    sol: String.raw`\( S_3=\frac12+\frac14+\frac18=\frac78 \). Las sumas parciales son \( 1-\frac1{2^N}\to1 \): la serie vale 1.`,
                },
            },
            {
                id: "t8.2",
                title: String.raw`Serie geométrica: fórmula, convergencia y divergencia`,
                eli5: String.raw`<p>En una serie geométrica cada término es el anterior multiplicado siempre por el mismo número \( r \), como una pelota que en cada rebote sube una fracción fija del rebote anterior. Si la fracción es menor que 1, los rebotes se achican y la altura total recorrida es finita. Si es 1 o más, los rebotes no se achican y la suma se va al infinito (o, con signos que alternan, nunca se queda quieta).</p>`,
                explain: String.raw`<p>\( \sum_{n=0}^{\infty}r^n \) tiene sumas parciales \( S_N=\frac{1-r^{N+1}}{1-r} \) (para \( r\neq1 \)). De ahí:</p>
\[ \sum_{n=0}^{\infty}c\,r^n=\frac{c}{1-r}\quad\text{si } |r|\lt1 \]
<table>
<tr><th>\( r \)</th><th>Comportamiento</th></tr>
<tr><td>\( |r|\lt1 \)</td><td>converge a \( \frac{\text{primer término}}{1-r} \)</td></tr>
<tr><td>\( r\ge1 \)</td><td>diverge a \( +\infty \) (con \( c\gt0 \))</td></tr>
<tr><td>\( r=-1 \)</td><td>oscila (\( 1,0,1,0,\dots \)): diverge</td></tr>
<tr><td>\( r\lt-1 \)</td><td>oscila con amplitud creciente: diverge</td></tr>
</table>
<p><strong>Trampa:</strong> la fórmula \( \frac{c}{1-r} \) da un número aunque \( |r|\ge1 \): con \( r=\frac54 \) daría \( -4 \). Ese número no significa nada; la serie diverge. Por eso "Converge a \( -4 \)" puede aparecer como opción.</p>
<p>Con \( r \) negativo (\( (-\frac13)^n \)), la fórmula funciona igual si \( |r|\lt1 \): \( \frac{1}{1+\frac13}=\frac34 \).</p>
<p>Antes de aplicar la fórmula, anotá \( r \) y compará su valor absoluto con 1. Es un segundo de trabajo y evita la trampa más frecuente de las opciones. En el parcial la numérica nunca dio \"Diverge\" en V1, pero si cambian los datos puede serlo.</p>`,
                keys: [String.raw`\( \sum c\,r^n=\frac{\text{primer término}}{1-r} \) si \( |r|\lt1 \)`, String.raw`\( |r|\ge1 \): diverge, aunque la fórmula dé un número`, String.raw`\( r=-1 \) oscila y diverge`, String.raw`\( r \) negativo con \( |r|\lt1 \) converge igual`],
                example: {
                    q: String.raw`\( \sum_{n=0}^\infty\left(\frac54\right)^n \)`,
                    sol: String.raw`\( r=\frac54\gt1 \): diverge. La fórmula daría \( \frac1{1-5/4}=-4 \), absurdo para una suma de positivos.`,
                },
            },
            {
                id: "t8.3",
                title: String.raw`Índice inicial y primer término`,
                eli5: String.raw`<p>La fórmula de la serie geométrica es "primer término dividido \( 1-r \)". El error es creer que el primer término siempre es 1 o siempre es \( c \). Depende de desde dónde empezás a contar: si la fila empieza en la posición 3, el primero de la fila es el que está en la posición 3. Mirá el número de abajo del \( \sum \) y reemplazalo: ese es tu primer término.</p>`,
                explain: String.raw`\[ \sum_{n=n_0}^{\infty}c\,r^n=\frac{c\,r^{n_0}}{1-r}=\frac{\text{término con } n=n_0}{1-r} \]
<p>El método más seguro: <strong>sustituí \( n=n_0 \) en la expresión tal como está</strong> (sin reacomodar) para obtener el primer término, calculá \( r \) como cociente entre dos términos seguidos, y dividí.</p>
<ul>
<li>\( \sum_{n=2}^\infty\left(\frac13\right)^n \): primer término \( \frac19 \), \( r=\frac13 \): \( \frac{1/9}{2/3}=\frac16 \).</li>
<li>\( \sum_{n=1}^\infty\frac3{4^n} \): primer término \( \frac34 \), \( r=\frac14 \): \( \frac{3/4}{3/4}=1 \).</li>
<li>\( \sum_{n=0}^\infty\left(\frac12\right)^{n+2} \): primer término \( \frac14 \), \( r=\frac12 \): \( \frac12 \).</li>
</ul>
<p>Relación útil: \( \sum_{n=1}^\infty=\sum_{n=0}^\infty-(\text{término } n=0) \). Si \( \sum_{n=0}^\infty\left(\frac25\right)^n=\frac53 \), entonces \( \sum_{n=1}^\infty\left(\frac25\right)^n=\frac53-1=\frac23 \).</p>
<p>El índice inicial no cambia si converge o diverge; solo cambia el valor.</p>
<p>Si preferís reacomodar, hacelo con cuidado: \( \sum_{n=2}^\infty r^n=r^2\sum_{m=0}^\infty r^m \) (cambio \( m=n-2 \)). Es el mismo resultado, pero con más pasos donde equivocarse. Sustituir \( n=n_0 \) directamente en la expresión original es lo más rápido y lo que menos errores produce.</p>`,
                keys: [String.raw`Primer término: sustituí \( n=n_0 \) tal como está`, String.raw`\( \frac{1}{1-r} \) solo si arranca en 0 y el término es \( r^n \)`, String.raw`\( \sum_{n\ge1}=\sum_{n\ge0}-a_0 \)`, String.raw`El índice cambia el valor, no la convergencia`],
                example: {
                    q: String.raw`\( \sum_{n=3}^\infty\frac{2^n}{3^n} \)`,
                    sol: String.raw`Primer término \( \frac8{27} \), \( r=\frac23 \): \( \frac{8/27}{1/3}=\frac89 \).`,
                },
            },
            {
                id: "t8.4",
                title: String.raw`Reacomodar exponentes (series disfrazadas)`,
                eli5: String.raw`<p>A veces la serie geométrica viene disfrazada: exponentes corridos (\( n+1 \), \( n-1 \)), potencias dobles (\( 3^{2n} \)) o cuadrados de potencias (\( (2^n)^2 \)). Por debajo del disfraz siempre hay un "algo a la \( n \)". Sacarle el disfraz es reescribir cada potencia como un número fijo por "algo a la \( n \)". Y si no querés sacar el disfraz, mirá cuánto se multiplica cada término respecto del anterior: eso es \( r \).</p>`,
                explain: String.raw`<p>Herramientas para encontrar \( r \):</p>
<ul>
<li>\( a^{n+k}=a^k\cdot a^n \) y \( a^{n-k}=\frac{a^n}{a^k} \): \( 3^{n+1}=3\cdot3^n \), \( \frac1{5^{n-1}}=5\cdot\left(\frac15\right)^n \).</li>
<li>\( a^{2n}=(a^2)^n \): \( 3^{2n}=9^n \), \( 2^{3n}=8^n \). Y \( (2^n)^2=4^n \) (no \( 2^{n^2} \)).</li>
<li>Juntá todo en \( \left(\frac{\text{arriba}}{\text{abajo}}\right)^n \): \( \frac{4^n}{3^{2n+1}}=\frac13\left(\frac49\right)^n \).</li>
<li>Atajo: \( r=\frac{a_{n+1}}{a_n} \). Con potencias, \( r \) es el cociente de las bases "por cada \( n \)": en \( \frac{2^{n+1}}{5^{n-1}} \), \( r=\frac25 \).</li>
</ul>
<p>Después: primer término sustituyendo \( n=n_0 \), chequeo \( |r|\lt1 \), fórmula. Ejemplo: \( \sum_{n=0}^\infty\frac{2^{n+1}}{5^{n-1}} \): primer término \( \frac{2}{5^{-1}}=10 \), \( r=\frac25 \), suma \( \frac{10}{3/5}=\frac{50}3 \).</p>
<p>Si \( |r|\ge1 \) la respuesta es "Diverge", aunque entre las opciones esté el número que da la fórmula.</p>
<p>En el parcial el término general suele venir como cociente de dos potencias con exponentes corridos. No hace falta llevarlo a la forma \( c\,r^n \): alcanza con saber \( r \) (cociente de bases) y el primer término (sustituyendo \( n=n_0 \)). Dejá la simplificación de fracciones para el final.</p>`,
                keys: [String.raw`\( a^{n+k}=a^k a^n \); \( a^{2n}=(a^2)^n \)`, String.raw`\( (2^n)^2=4^n \), no \( 2^{n^2} \)`, String.raw`\( r \) = cociente de bases por cada \( n \)`, String.raw`Primer término con \( n=n_0 \) sin reacomodar`],
                example: {
                    q: String.raw`\( \sum_{n=1}^\infty\frac{3^{n+1}}{4^n} \)`,
                    sol: String.raw`\( r=\frac34 \), primer término \( \frac{9}{4} \). Suma \( \frac{9/4}{1/4}=9 \).`,
                },
            },
            {
                id: "t8.5",
                title: String.raw`Suma de dos geométricas`,
                eli5: String.raw`<p>Si en un mismo canasto echás manzanas de dos árboles, el total es lo que dio un árbol más lo que dio el otro. Una fracción con una suma arriba se puede partir en dos fracciones, y cada una es una serie geométrica con su propio \( r \). Se calcula cada una por separado y se suman. Pero ojo: si uno de los árboles da infinitas manzanas, el canasto se desborda, no importa lo que haga el otro.</p>`,
                explain: String.raw`<p>Si el término general es \( \frac{A+B}{C} \), separás: \( \sum\frac{A}{C}+\sum\frac{B}{C} \).</p>
<ul>
<li>Las dos convergen: la suma converge a la suma de los dos resultados.</li>
<li>Una converge y la otra diverge: la suma <strong>diverge</strong>.</li>
<li>Cada parte tiene su propio primer término y su propio \( r \): no mezcles.</li>
</ul>
<p>Ejemplo (mayo 2026): \( \sum_{n=1}^\infty\frac{5+2^n}{3^{n-1}}=\sum\frac5{3^{n-1}}+\sum\frac{2^n}{3^{n-1}}=\frac{5}{2/3}+\frac{2}{1/3}=\frac{15}2+6=\frac{27}2 \).</p>
<p>Con resta o con \( (-1)^n \) funciona igual: \( \sum_{n=1}^\infty\frac{2^n+(-1)^n}{5^n}=\frac{2/5}{3/5}+\frac{-1/5}{6/5}=\frac23-\frac16=\frac12 \). La parte con \( (-1)^n \) tiene \( r=-\frac15 \) y primer término negativo.</p>
<p>Las opciones falsas suelen ser la suma de una sola de las partes o el resultado de usar un solo \( r \) para las dos.</p>
<p>En la prueba, escribí las dos series por separado en renglones distintos, cada una con su \( r \), su primer término y su resultado, y recién al final sumalas. Controlá que las dos cumplen \( |r|\lt1 \): alcanza con que una no lo cumpla para que la respuesta sea \"Diverge\".</p>`,
                keys: [String.raw`Separá en dos geométricas y sumá los resultados`, String.raw`Cada parte con su primer término y su \( r \)`, String.raw`Una diverge: el total diverge`, String.raw`\( (-1)^n \) da \( r \) negativo`],
                example: {
                    q: String.raw`\( \sum_{n=0}^\infty\frac{2^n+3^n}{6^n} \)`,
                    sol: String.raw`\( \sum\left(\frac13\right)^n+\sum\left(\frac12\right)^n=\frac32+2=\frac72 \).`,
                },
            },
            {
                id: "t8.6",
                title: String.raw`Series con parámetro y la condición |r| < 1`,
                eli5: String.raw`<p>Ahora la pelota que rebota tiene un número desconocido \( x \) en su fracción de rebote, y te dicen cuánto recorrió en total. Armás la ecuación "primer término dividido \( 1-r \) igual al total" y despejás \( x \). Pero cuidado: a veces la ecuación da una solución con la que la pelota rebotaría cada vez más alto. Esa solución es trucha, porque con ella la suma nunca habría dado un número. Hay que tirarla.</p>`,
                explain: String.raw`<p>Molde P10: "Si \( \sum\ldots=S \), entonces:" con \( x \) en la base.</p>
<ol>
<li>Identificá \( r \) (función de \( x \)) y el primer término (sustituyendo \( n=n_0 \)).</li>
<li>Planteá \( \frac{\text{primer término}}{1-r}=S \) y resolvé.</li>
<li><strong>Chequeá \( |r|\lt1 \)</strong> con cada solución y descartá las que no cumplen.</li>
</ol>
<p>Ejemplo: \( \sum_{n=0}^\infty\frac2{x^{2n+1}}=\frac34 \). Primer término \( \frac2x \), \( r=\frac1{x^2} \). \( \frac{2/x}{1-1/x^2}=\frac{2x}{x^2-1}=\frac34 \Rightarrow 3x^2-8x-3=0 \Rightarrow x=3 \) o \( x=-\frac13 \). Con \( x=-\frac13 \), \( r=9 \): se descarta. Respuesta: \( x=3 \).</p>
<p>A veces las dos soluciones sirven: \( \sum_{n=0}^\infty\frac1{x^{2n}}=\frac43 \) da \( x^2=4 \), y con \( x=\pm2 \) queda \( r=\frac14 \) en los dos casos.</p>
<p><strong>Dominio de convergencia:</strong> \( \sum\frac{(x-1)^n}{3^n} \) converge si \( \left|\frac{x-1}3\right|\lt1 \iff -2\lt x\lt4 \) (abierto).</p>
<p>Cuando \( x \) está en el denominador (\( r=\frac1x \), \( \frac1{x^2} \)), la condición \( |r|\lt1 \) se traduce en \( |x|\gt1 \): las soluciones con \( |x|\le1 \) se descartan. En octubre 2025 apareció una alternada, \( \frac{(-1)^n}{x^{n+1}} \), donde \( r=-\frac1x \): el signo cambia la ecuación pero no la condición.</p>`,
                keys: [String.raw`Primer término sobre \( 1-r \) igual al dato`, String.raw`Siempre chequear \( |r|\lt1 \) con cada solución`, String.raw`Con \( x \) abajo, \( r=\frac1x \) o \( \frac1{x^2} \)`, String.raw`El conjunto de convergencia es un intervalo abierto`],
                example: {
                    q: String.raw`\( \sum_{n=0}^\infty\frac{x^n}{2^n}=3 \)`,
                    sol: String.raw`\( \frac1{1-x/2}=3\Rightarrow x=\frac43 \), y \( |r|=\frac23\lt1 \): vale.`,
                },
            },
        ],
    },
    flashcards: [
        {
            t: "t1",
            s: "t1.1",
            q: String.raw`\( L(ab) \), \( L(a/b) \) y \( L(a^k) \)`,
            a: String.raw`\( L(a)+L(b) \), \( L(a)-L(b) \) y \( k\,L(a) \) (con \( a,b\gt0 \))`,
        },
        {
            t: "t1",
            s: "t1.1",
            q: String.raw`\( e^{L(7)} \) y \( L(e^{-2}) \)`,
            a: String.raw`\( 7 \) y \( -2 \): son funciones inversas`,
        },
        {
            t: "t1",
            s: "t1.1",
            q: String.raw`\( \lim_{x\to0^+}L(x) \) y \( \lim_{x\to-\infty}e^x \)`,
            a: String.raw`\( -\infty \) y \( 0 \) (por arriba: \( 0^+ \))`,
        },
        {
            t: "t1",
            s: "t1.1",
            q: String.raw`Imagen de \( e^{x-1}+2 \) con \( x\in\mathbb R \)`,
            a: String.raw`\( (2,+\infty) \): el 2 no se alcanza`,
        },
        {
            t: "t1",
            s: "t1.1",
            q: String.raw`Dominio de \( -L(x+2)-3 \)`,
            a: String.raw`\( x+2\gt0 \Rightarrow (-2,+\infty) \)`,
        },
        {
            t: "t1",
            s: "t1.1",
            q: String.raw`Imagen de \( L(x^2+1) \) con \( x\in\mathbb R \)`,
            a: String.raw`\( [0,+\infty) \): \( x^2+1\ge1 \) y \( L(1)=0 \)`,
        },
        {
            t: "t1",
            s: "t1.1",
            q: String.raw`Imagen de \( 3-e^{x} \)`,
            a: String.raw`\( (-\infty,3) \): el menos da vuelta \( (0,+\infty) \) y después se suma 3`,
        },
        {
            t: "t1",
            s: "t1.2",
            q: String.raw`Valores de \( \text{sen} \) en \( 0,\ \pi/2,\ \pi,\ 3\pi/2 \)`,
            a: String.raw`\( 0,\ 1,\ 0,\ -1 \)`,
        },
        {
            t: "t1",
            s: "t1.2",
            q: String.raw`¿Dónde crece \( \text{sen}\,x \)?`,
            a: String.raw`En \( [-\pi/2,\pi/2] \) (y en sus traslados por \( 2\pi \)); decrece en \( [\pi/2,3\pi/2] \)`,
        },
        {
            t: "t1",
            s: "t1.2",
            q: String.raw`\( \text{Arctg}(1) \), \( \text{Arctg}(-1) \), \( \text{Arctg}(\sqrt3) \)`,
            a: String.raw`\( \pi/4 \), \( -\pi/4 \), \( \pi/3 \)`,
        },
        {
            t: "t1",
            s: "t1.2",
            q: String.raw`\( \lim_{x\to+\infty}\text{Arctg}\,x \)`,
            a: String.raw`\( \pi/2 \), sin alcanzarlo nunca`,
        },
        {
            t: "t1",
            s: "t1.2",
            q: String.raw`¿Cómo se mueve \( -\cos x \) en \( [\pi,3\pi/2] \)?`,
            a: String.raw`\( \cos \) sube de \( -1 \) a 0, así que \( -\cos \) baja de 1 a 0: decreciente`,
        },
        {
            t: "t1",
            s: "t1.2",
            q: String.raw`¿Por qué \( \text{sen} \) no es inyectiva en \( [0,\pi] \)?`,
            a: String.raw`Sube hasta \( \pi/2 \) y baja: por ejemplo \( \text{sen}(\pi/6)=\text{sen}(5\pi/6)=\frac12 \)`,
        },
        {
            t: "t1",
            s: "t1.3",
            q: String.raw`\( (L(u))' \)`,
            a: String.raw`\( \frac{u'}{u} \)`,
        },
        {
            t: "t1",
            s: "t1.3",
            q: String.raw`\( (\sqrt u)' \)`,
            a: String.raw`\( \frac{u'}{2\sqrt u} \)`,
        },
        {
            t: "t1",
            s: "t1.3",
            q: String.raw`\( (\text{Arctg}\,u)' \)`,
            a: String.raw`\( \frac{u'}{1+u^2} \)`,
        },
        {
            t: "t1",
            s: "t1.3",
            q: String.raw`\( \left(\frac1u\right)' \)`,
            a: String.raw`\( -\frac{u'}{u^2} \)`,
        },
        {
            t: "t1",
            s: "t1.3",
            q: String.raw`\( (e^{2-x})' \)`,
            a: String.raw`\( -e^{2-x} \): la derivada de \( 2-x \) es \( -1 \)`,
        },
        {
            t: "t1",
            s: "t1.3",
            q: String.raw`\( (x\,e^{x})' \)`,
            a: String.raw`\( e^x+x\,e^x=(1+x)e^x \) (regla del producto)`,
        },
        {
            t: "t1",
            s: "t1.3",
            q: String.raw`\( (\cos(2x))' \)`,
            a: String.raw`\( -2\,\text{sen}(2x) \)`,
        },
        {
            t: "t1",
            s: "t1.4",
            q: String.raw`Vértice de \( x^2-4x+3 \)`,
            a: String.raw`\( x_v=2 \), \( y_v=-1 \): punto \( (2,-1) \)`,
        },
        {
            t: "t1",
            s: "t1.4",
            q: String.raw`\( x^2-2x+1 \) y \( -x^2-2x-1 \) como cuadrados`,
            a: String.raw`\( (x-1)^2 \) y \( -(x+1)^2 \)`,
        },
        {
            t: "t1",
            s: "t1.4",
            q: String.raw`Parábola con \( a\lt0 \): ¿dónde crece?`,
            a: String.raw`En \( (-\infty,x_v] \); después decrece. Tiene máximo en el vértice`,
        },
        {
            t: "t1",
            s: "t1.4",
            q: String.raw`Si el vértice cae dentro del trozo, ¿qué pasa con la inyectividad?`,
            a: String.raw`La rama deja de ser inyectiva: baja y sube (o sube y baja)`,
        },
        {
            t: "t1",
            s: "t1.4",
            q: String.raw`Imagen de \( x^2+2x \) para \( x\ge0 \)`,
            a: String.raw`\( x_v=-1 \) fuera del trozo, crece: \( [f(0),+\infty)=[0,+\infty) \)`,
        },
        {
            t: "t1",
            s: "t1.4",
            q: String.raw`Imagen de \( -(x-1)^2+2 \) para \( x\le0 \)`,
            a: String.raw`\( x_v=1 \) fuera, la rama crece hasta \( f(0)=1 \): \( (-\infty,1] \)`,
        },
        {
            t: "t2",
            s: "t2.1",
            q: String.raw`Forma equivalente de "inyectiva" útil para probar`,
            a: String.raw`\( f(x_1)=f(x_2)\Rightarrow x_1=x_2 \)`,
        },
        {
            t: "t2",
            s: "t2.1",
            q: String.raw`¿Qué alcanza para mostrar que \( f \) NO es inyectiva?`,
            a: String.raw`Un par \( x_1\neq x_2 \) con \( f(x_1)=f(x_2) \)`,
        },
        {
            t: "t2",
            s: "t2.1",
            q: String.raw`Contraejemplo de inyectividad para \( x^2 \) en \( \mathbb R \)`,
            a: String.raw`\( f(-1)=f(1)=1 \)`,
        },
        {
            t: "t2",
            s: "t2.1",
            q: String.raw`¿\( f'(0)=0 \) impide que \( f \) sea inyectiva?`,
            a: String.raw`No: \( x^3 \) tiene \( f'(0)=0 \) y es inyectiva. Lo que importa es que no cambie de sentido`,
        },
        {
            t: "t2",
            s: "t2.1",
            q: String.raw`¿Es inyectiva \( \cos \) en \( [0,\pi] \)? ¿Y en \( [0,2\pi] \)?`,
            a: String.raw`En \( [0,\pi] \) sí (decrece). En \( [0,2\pi] \) no: \( \cos 0=\cos 2\pi \)`,
        },
        {
            t: "t2",
            s: "t2.1",
            q: String.raw`¿Para qué \( a \) es inyectiva \( (x-2)^2 \) en \( [a,+\infty) \)?`,
            a: String.raw`Para \( a\ge2 \): el vértice no puede quedar adentro del intervalo abierto`,
        },
        {
            t: "t2",
            s: "t2.2",
            q: String.raw`Sobreyectiva, dicho con ecuaciones`,
            a: String.raw`Para cada \( y\in B \), \( f(x)=y \) tiene al menos una solución \( x\in A \)`,
        },
        {
            t: "t2",
            s: "t2.2",
            q: String.raw`¿Es sobreyectiva \( e^x:\mathbb R\to\mathbb R \)?`,
            a: String.raw`No: la imagen es \( (0,+\infty) \). Con codominio \( (0,+\infty) \) sí`,
        },
        {
            t: "t2",
            s: "t2.2",
            q: String.raw`Cómo volver sobreyectiva cualquier función`,
            a: String.raw`Achicar el codominio hasta la imagen`,
        },
        {
            t: "t2",
            s: "t2.2",
            q: String.raw`\( f:\mathbb R\to U \), \( f(x)=x^2+2x \), sobreyectiva si \( U= \)`,
            a: String.raw`\( [-1,+\infty) \): vértice en \( x=-1 \) con valor \( -1 \)`,
        },
        {
            t: "t2",
            s: "t2.2",
            q: String.raw`Valor que se alcanza solo como límite: ¿corchete o paréntesis?`,
            a: String.raw`Paréntesis: no pertenece a la imagen`,
        },
        {
            t: "t2",
            s: "t2.2",
            q: String.raw`Una función puede ser sobreyectiva y no inyectiva. Ejemplo`,
            a: String.raw`\( \cos:\mathbb R\to[-1,1] \), o \( x^3-3x:\mathbb R\to\mathbb R \)`,
        },
        {
            t: "t2",
            s: "t2.3",
            q: String.raw`Biyectiva, en una frase`,
            a: String.raw`Inyectiva y sobreyectiva: cada \( y \) del codominio viene de exactamente un \( x \)`,
        },
        {
            t: "t2",
            s: "t2.3",
            q: String.raw`Condición práctica de biyectiva \( \mathbb R\to\mathbb R \)`,
            a: String.raw`Continua, estrictamente monótona y con límites \( \pm\infty \) en los dos extremos`,
        },
        {
            t: "t2",
            s: "t2.3",
            q: String.raw`¿Es biyectiva \( \text{Arctg}:\mathbb R\to\mathbb R \)?`,
            a: String.raw`No: no es sobreyectiva. Sí lo es \( \text{Arctg}:\mathbb R\to(-\pi/2,\pi/2) \)`,
        },
        {
            t: "t2",
            s: "t2.3",
            q: String.raw`¿Entre qué conjuntos es biyectiva \( x^2 \)?`,
            a: String.raw`Por ejemplo \( [0,+\infty)\to[0,+\infty) \) o \( (-\infty,0]\to[0,+\infty) \)`,
        },
        {
            t: "t2",
            s: "t2.3",
            q: String.raw`Composición de biyectivas`,
            a: String.raw`Es biyectiva, y \( (g\circ f)^{-1}=f^{-1}\circ g^{-1} \)`,
        },
        {
            t: "t2",
            s: "t2.3",
            q: String.raw`¿Entre qué conjuntos es biyectiva \( \cos \) en la versión estándar?`,
            a: String.raw`\( [0,\pi]\to[-1,1] \) (ahí se define \( \text{Arccos} \))`,
        },
        {
            t: "t2",
            s: "t2.4",
            q: String.raw`Test de la recta horizontal para inyectividad`,
            a: String.raw`Toda recta \( y=c \) corta el gráfico a lo sumo una vez`,
        },
        {
            t: "t2",
            s: "t2.4",
            q: String.raw`Test de la recta horizontal para sobreyectividad en \( B \)`,
            a: String.raw`Toda recta \( y=c \) con \( c\in B \) corta el gráfico al menos una vez`,
        },
        {
            t: "t2",
            s: "t2.4",
            q: String.raw`Si \( f' \) cambia de signo en el dominio...`,
            a: String.raw`\( f \) sube y baja (o al revés): no es inyectiva`,
        },
        {
            t: "t2",
            s: "t2.4",
            q: String.raw`Imagen de \( f \) continua y creciente en \( (a,b) \)`,
            a: String.raw`\( \left(\lim_{x\to a^+}f,\ \lim_{x\to b^-}f\right) \)`,
        },
        {
            t: "t2",
            s: "t2.4",
            q: String.raw`¿Por qué \( x^3-3x \) no es inyectiva?`,
            a: String.raw`\( f'=3x^2-3 \) cambia de signo; por ejemplo \( f(0)=f(\sqrt3)=0 \)`,
        },
        {
            t: "t2",
            s: "t2.4",
            q: String.raw`¿Es biyectiva \( x+e^x:\mathbb R\to\mathbb R \)?`,
            a: String.raw`Sí: \( f'=1+e^x\gt0 \) y va de \( -\infty \) a \( +\infty \)`,
        },
        {
            t: "t2",
            s: "t2.5",
            q: String.raw`Función a trozos: condición de inyectiva`,
            a: String.raw`Cada rama inyectiva y las imágenes de las ramas disjuntas`,
        },
        {
            t: "t2",
            s: "t2.5",
            q: String.raw`Función a trozos: condición de sobreyectiva sobre \( \mathbb R \)`,
            a: String.raw`La unión de las imágenes de las ramas es \( \mathbb R \)`,
        },
        {
            t: "t2",
            s: "t2.5",
            q: String.raw`Imagen de \( (x+1)^2 \) para \( x\le-1 \)`,
            a: String.raw`\( [0,+\infty) \): el vértice está en el borde y la rama decrece`,
        },
        {
            t: "t2",
            s: "t2.5",
            q: String.raw`Imagen de \( L(x+2) \) para \( x\gt-1 \)`,
            a: String.raw`\( x+2\gt1 \Rightarrow (0,+\infty) \)`,
        },
        {
            t: "t2",
            s: "t2.5",
            q: String.raw`Imagen de \( e^{-x} \) para \( x\le0 \)`,
            a: String.raw`\( [1,+\infty) \): decrece de \( +\infty \) a \( e^0=1 \), incluido`,
        },
        {
            t: "t2",
            s: "t2.5",
            q: String.raw`Imagen de \( 1-x \) para \( x\gt1 \)`,
            a: String.raw`\( (-\infty,0) \), abierto en 0`,
        },
        {
            t: "t2",
            s: "t2.5",
            q: String.raw`\( x^2 \) si \( x\le1 \) y \( 1-x \) si \( x\gt1 \): ¿inyectiva?`,
            a: String.raw`No, aunque las imágenes \( [0,+\infty) \) y \( (-\infty,0) \) sean disjuntas: la rama \( x^2 \) contiene el vértice (\( f(-1)=f(1) \))`,
        },
        {
            t: "t2",
            s: "t2.5",
            q: String.raw`¿Qué opción nunca fue correcta en V1 del molde a trozos?`,
            a: String.raw`"Ni inyectiva ni sobreyectiva". No la descartes a ciegas: puede serlo`,
        },
        {
            t: "t3",
            s: "t3.1",
            q: String.raw`Si \( f(3)=8 \) y \( f \) es invertible, ¿qué sabés?`,
            a: String.raw`\( f^{-1}(8)=3 \)`,
        },
        {
            t: "t3",
            s: "t3.1",
            q: String.raw`\( f^{-1}(f(x)) \) y \( f(f^{-1}(y)) \)`,
            a: String.raw`\( x \) (para \( x\in A \)) e \( y \) (para \( y\in B \))`,
        },
        {
            t: "t3",
            s: "t3.1",
            q: String.raw`Recorrido de \( f^{-1} \) si \( f:A\to B \) es biyectiva`,
            a: String.raw`\( A \), el dominio de \( f \)`,
        },
        {
            t: "t3",
            s: "t3.1",
            q: String.raw`Relación entre los gráficos de \( f \) y \( f^{-1} \)`,
            a: String.raw`Simétricos respecto de la recta \( y=x \): \( (a,b)\leftrightarrow(b,a) \)`,
        },
        {
            t: "t3",
            s: "t3.1",
            q: String.raw`¿Es \( f^{-1}(x)=\frac1{f(x)} \)?`,
            a: String.raw`No. \( f^{-1} \) es la inversa para la composición, no el recíproco`,
        },
        {
            t: "t3",
            s: "t3.1",
            q: String.raw`Si \( f \) es estrictamente decreciente e invertible, ¿cómo es \( f^{-1} \)?`,
            a: String.raw`Estrictamente decreciente también`,
        },
        {
            t: "t3",
            s: "t3.2",
            q: String.raw`Inversa de \( f(x)=2e^{3x} \)`,
            a: String.raw`\( f^{-1}(y)=\frac13L\!\left(\frac y2\right) \)`,
        },
        {
            t: "t3",
            s: "t3.2",
            q: String.raw`Inversa de \( f(x)=L(2x)+1 \)`,
            a: String.raw`\( f^{-1}(y)=\frac{e^{y-1}}{2} \)`,
        },
        {
            t: "t3",
            s: "t3.2",
            q: String.raw`Inversa de \( f(x)=1+e^{2-x} \)`,
            a: String.raw`\( f^{-1}(y)=2-L(y-1) \)`,
        },
        {
            t: "t3",
            s: "t3.2",
            q: String.raw`Inversa de \( f(x)=-L(x+2)-3 \)`,
            a: String.raw`\( f^{-1}(y)=e^{-y-3}-2 \)`,
        },
        {
            t: "t3",
            s: "t3.2",
            q: String.raw`Punto cómodo para verificar una inversa con \( e^{x-1} \)`,
            a: String.raw`\( x=1 \): el exponente se anula y \( e^0=1 \)`,
        },
        {
            t: "t3",
            s: "t3.2",
            q: String.raw`Punto cómodo para verificar una inversa con \( L(x-2) \)`,
            a: String.raw`\( x=3 \): \( L(1)=0 \)`,
        },
        {
            t: "t3",
            s: "t3.2",
            q: String.raw`Paso de "\( e^{u}=v \)" a "\( u= \)"`,
            a: String.raw`\( u=L(v) \), válido solo si \( v\gt0 \)`,
        },
        {
            t: "t3",
            s: "t3.3",
            q: String.raw`\( (x-h)^2=c \) con dominio \( x\le h \): ¿cuánto vale \( x \)?`,
            a: String.raw`\( x=h-\sqrt c \)`,
        },
        {
            t: "t3",
            s: "t3.3",
            q: String.raw`Inversa de \( (x-1)^2+2 \) en \( [1,+\infty) \)`,
            a: String.raw`\( 1+\sqrt{y-2} \)`,
        },
        {
            t: "t3",
            s: "t3.3",
            q: String.raw`Inversa de \( -(x+3)^2+5 \) en \( (-\infty,-3] \)`,
            a: String.raw`\( -3-\sqrt{5-y} \)`,
        },
        {
            t: "t3",
            s: "t3.3",
            q: String.raw`Inversa de \( \sqrt{1-x^2} \) en \( [0,1] \)`,
            a: String.raw`\( \sqrt{1-y^2} \): la función es su propia inversa ahí`,
        },
        {
            t: "t3",
            s: "t3.3",
            q: String.raw`¿Qué pasa si el dominio contiene al vértice de la parábola?`,
            a: String.raw`No es inyectiva: no es invertible, aunque el despeje parezca funcionar`,
        },
        {
            t: "t3",
            s: "t3.3",
            q: String.raw`Inversa de \( x^2+1 \) en \( (-\infty,0] \)`,
            a: String.raw`\( -\sqrt{y-1} \)`,
        },
        {
            t: "t3",
            s: "t3.4",
            q: String.raw`\( \text{Dom}(f^{-1}) \) si \( f:A\to B \) es biyectiva`,
            a: String.raw`\( B \)`,
        },
        {
            t: "t3",
            s: "t3.4",
            q: String.raw`Si \( f(A)\subsetneq B \), ¿es invertible \( f:A\to B \)?`,
            a: String.raw`No: falta sobreyectividad`,
        },
        {
            t: "t3",
            s: "t3.4",
            q: String.raw`\( B \) para que \( f:[0,+\infty)\to B \), \( f(x)=2-e^{-x} \), sea invertible`,
            a: String.raw`\( [1,2) \)`,
        },
        {
            t: "t3",
            s: "t3.4",
            q: String.raw`Si \( f^{-1}(y)=L(y-3)+1 \), ¿qué \( y \) admite?`,
            a: String.raw`\( y\gt3 \): ese es el codominio de \( f \)`,
        },
        {
            t: "t3",
            s: "t3.4",
            q: String.raw`\( f:(-1,+\infty)\to\mathbb R \), \( f(x)=L(x+1) \): recorrido de \( f^{-1} \)`,
            a: String.raw`\( (-1,+\infty) \)`,
        },
        {
            t: "t3",
            s: "t3.4",
            q: String.raw`Imagen de \( -L(x) \) en \( (0,1] \)`,
            a: String.raw`\( [0,+\infty) \)`,
        },
        {
            t: "t3",
            s: "t3.5",
            q: String.raw`\( U \) para \( \cos:(0,\pi/2]\to U \)`,
            a: String.raw`\( [0,1) \)`,
        },
        {
            t: "t3",
            s: "t3.5",
            q: String.raw`\( U \) para \( \cos:[\pi,3\pi/2)\to U \)`,
            a: String.raw`\( [-1,0) \)`,
        },
        {
            t: "t3",
            s: "t3.5",
            q: String.raw`\( U \) para \( \text{sen}:[\pi/2,3\pi/2)\to U \)`,
            a: String.raw`\( (-1,1] \)`,
        },
        {
            t: "t3",
            s: "t3.5",
            q: String.raw`\( U \) para \( -\text{sen}:(-\pi/2,0]\to U \)`,
            a: String.raw`\( [0,1) \)`,
        },
        {
            t: "t3",
            s: "t3.5",
            q: String.raw`\( U \) para \( \cos:[3\pi/2,2\pi)\to U \)`,
            a: String.raw`\( [0,1) \): de 0 (incluido) sube hacia 1 (excluido)`,
        },
        {
            t: "t3",
            s: "t3.5",
            q: String.raw`¿Es invertible \( \cos \) en \( [0,3\pi/2) \)?`,
            a: String.raw`No para ningún \( U \): baja hasta \( \pi \) y vuelve a subir`,
        },
        {
            t: "t3",
            s: "t3.5",
            q: String.raw`¿En qué intervalos de \( [0,2\pi] \) es monótono \( \text{sen} \)?`,
            a: String.raw`Crece en \( [0,\pi/2] \), decrece en \( [\pi/2,3\pi/2] \), crece en \( [3\pi/2,2\pi] \)`,
        },
        {
            t: "t3",
            s: "t3.6",
            q: String.raw`Dominio y recorrido de \( \text{Arcsen} \)`,
            a: String.raw`\( [-1,1]\to[-\frac\pi2,\frac\pi2] \)`,
        },
        {
            t: "t3",
            s: "t3.6",
            q: String.raw`Dominio y recorrido de \( \text{Arccos} \)`,
            a: String.raw`\( [-1,1]\to[0,\pi] \)`,
        },
        {
            t: "t3",
            s: "t3.6",
            q: String.raw`\( (\text{Arcsen}\,x)' \) y \( (\text{Arccos}\,x)' \)`,
            a: String.raw`\( \frac1{\sqrt{1-x^2}} \) y \( -\frac1{\sqrt{1-x^2}} \)`,
        },
        {
            t: "t3",
            s: "t3.6",
            q: String.raw`\( U \) para \( \text{Arctg}:(-\infty,1]\to U \)`,
            a: String.raw`\( (-\frac\pi2,\frac\pi4] \)`,
        },
        {
            t: "t3",
            s: "t3.6",
            q: String.raw`\( \text{Arcsen}(\frac12) \) y \( \text{Arccos}(\frac12) \)`,
            a: String.raw`\( \frac\pi6 \) y \( \frac\pi3 \)`,
        },
        {
            t: "t3",
            s: "t3.6",
            q: String.raw`\( U \) para \( \text{Arctg}:[0,+\infty)\to U \)`,
            a: String.raw`\( [0,\frac\pi2) \): el 0 se alcanza, \( \frac\pi2 \) no`,
        },
        {
            t: "t4",
            s: "t4.1",
            q: String.raw`Fórmula de \( (f^{-1})'(b) \) con \( f(a)=b \)`,
            a: String.raw`\( \frac{1}{f'(a)} \), con \( f'(a)\neq0 \)`,
        },
        {
            t: "t4",
            s: "t4.1",
            q: String.raw`¿Qué se deriva para deducir la fórmula?`,
            a: String.raw`\( f(f^{-1}(x))=x \), con la regla de la cadena`,
        },
        {
            t: "t4",
            s: "t4.1",
            q: String.raw`Trampa número uno de la derivada de la inversa`,
            a: String.raw`Evaluar \( f' \) en \( b \) en vez de en \( a=f^{-1}(b) \)`,
        },
        {
            t: "t4",
            s: "t4.1",
            q: String.raw`¿Qué pasa si \( f'(a)=0 \)?`,
            a: String.raw`\( f^{-1} \) no es derivable en \( b \): tangente vertical (ej. \( x^3 \) en 0)`,
        },
        {
            t: "t4",
            s: "t4.1",
            q: String.raw`Tangente a \( f \) en \( (a,b) \) con pendiente \( m \): ¿y la de \( f^{-1} \)?`,
            a: String.raw`En \( (b,a) \) con pendiente \( \frac1m \)`,
        },
        {
            t: "t4",
            s: "t4.1",
            q: String.raw`Si \( f \) es decreciente, ¿qué signo tiene \( (f^{-1})' \)?`,
            a: String.raw`Negativo: \( \frac1{f'(a)} \) con \( f'(a)\lt0 \)`,
        },
        {
            t: "t4",
            s: "t4.1",
            q: String.raw`\( f(0)=2 \), \( f'(0)=-4 \): \( (f^{-1})'(2)= \)`,
            a: String.raw`\( -\frac14 \)`,
        },
        {
            t: "t4",
            s: "t4.2",
            q: String.raw`Molde "\( f \) explícita": primer paso`,
            a: String.raw`Calcular \( f(0) \) (o \( f(1) \)): ese valor es el \( c \) con \( f^{-1}(c)=0 \)`,
        },
        {
            t: "t4",
            s: "t4.2",
            q: String.raw`\( f(x)=x^3+2x+1 \): \( f^{-1}(1) \) y \( (f^{-1})'(1) \)`,
            a: String.raw`\( 0 \) y \( \frac12 \)`,
        },
        {
            t: "t4",
            s: "t4.2",
            q: String.raw`\( f(x)=e^{3x}+x \): \( (f^{-1})'(1) \)`,
            a: String.raw`\( f(0)=1 \), \( f'(0)=3+1=4 \): \( \frac14 \)`,
        },
        {
            t: "t4",
            s: "t4.2",
            q: String.raw`\( f(x)=x^2+3L(x) \): punto cómodo y derivada de la inversa`,
            a: String.raw`\( x=1 \): \( f(1)=1 \), \( f'(1)=2+3=5 \), \( (f^{-1})'(1)=\frac15 \)`,
        },
        {
            t: "t4",
            s: "t4.2",
            q: String.raw`\( f(x)=\text{Arctg}(2x)+x^3+3x \): \( (f^{-1})'(0) \)`,
            a: String.raw`\( f(0)=0 \), \( f'(0)=2+3=5 \): \( \frac15 \)`,
        },
        {
            t: "t4",
            s: "t4.2",
            q: String.raw`¿Cuándo el punto cómodo es \( x=1 \) y no \( x=0 \)?`,
            a: String.raw`Cuando \( f \) tiene \( L(x) \), \( \frac1x \) o el dominio no incluye el 0`,
        },
        {
            t: "t4",
            s: "t4.2",
            q: String.raw`Opciones falsas típicas en el molde \( f \) explícita`,
            a: String.raw`Punto cambiado (\( f^{-1}(0)=1 \) contra \( f^{-1}(1)=0 \)), \( f'(0) \) sin invertir, derivada sin cadena`,
        },
        {
            t: "t4",
            s: "t4.3",
            q: String.raw`\( g=(f^{-1})^n \): \( g'(b) \)`,
            a: String.raw`\( n\,a^{n-1}\cdot\frac1{f'(a)} \), con \( a=f^{-1}(b) \)`,
        },
        {
            t: "t4",
            s: "t4.3",
            q: String.raw`\( g=\frac1{f^{-1}} \): \( g'(b) \)`,
            a: String.raw`\( -\frac{1}{a^2}\cdot\frac1{f'(a)} \)`,
        },
        {
            t: "t4",
            s: "t4.3",
            q: String.raw`\( g=\sqrt[3]{f^{-1}} \): \( g'(b) \)`,
            a: String.raw`\( \frac1{3\sqrt[3]{a^2}}\cdot\frac1{f'(a)} \)`,
        },
        {
            t: "t4",
            s: "t4.3",
            q: String.raw`\( f(2)=5 \), \( f'(2)=3 \), \( g=(f^{-1})^2 \): \( g'(5) \)`,
            a: String.raw`\( 2\cdot2\cdot\frac13=\frac43 \)`,
        },
        {
            t: "t4",
            s: "t4.3",
            q: String.raw`\( f(1)=4 \), \( f'(1)=\frac12 \), \( g=(f^{-1})^3 \): \( g'(4) \)`,
            a: String.raw`\( 3\cdot1^2\cdot2=6 \)`,
        },
        {
            t: "t4",
            s: "t4.3",
            q: String.raw`En \( ((f^{-1})^n)'(b) \), ¿qué se eleva a \( n-1 \): \( a \) o \( b \)?`,
            a: String.raw`\( a=f^{-1}(b) \)`,
        },
        {
            t: "t4",
            s: "t4.4",
            q: String.raw`\( g=L(f^{-1}) \): \( g'(b) \)`,
            a: String.raw`\( \frac1a\cdot\frac1{f'(a)} \)`,
        },
        {
            t: "t4",
            s: "t4.4",
            q: String.raw`\( g=e^{f^{-1}} \): \( g'(b) \)`,
            a: String.raw`\( \frac{e^{a}}{f'(a)} \)`,
        },
        {
            t: "t4",
            s: "t4.4",
            q: String.raw`\( g=x\,f^{-1}(x) \): \( g'(b) \)`,
            a: String.raw`\( a+\frac{b}{f'(a)} \)`,
        },
        {
            t: "t4",
            s: "t4.4",
            q: String.raw`\( g=\frac{f^{-1}(x)}{x} \): \( g'(b) \)`,
            a: String.raw`\( \frac{b/f'(a)-a}{b^2} \)`,
        },
        {
            t: "t4",
            s: "t4.4",
            q: String.raw`\( g(x)=f^{-1}(x^2) \), \( f(3)=4 \), \( f'(3)=5 \): \( g'(2) \)`,
            a: String.raw`\( \frac{1}{5}\cdot4=\frac45 \)`,
        },
        {
            t: "t4",
            s: "t4.4",
            q: String.raw`\( f(1)=2 \), \( g=L(f^{-1}) \): \( g(2) \)`,
            a: String.raw`\( L(f^{-1}(2))=L(1)=0 \)`,
        },
        {
            t: "t4",
            s: "t4.5",
            q: String.raw`\( g=\alpha f+\beta f^{-1} \): \( g'(b) \)`,
            a: String.raw`\( \alpha f'(b)+\frac{\beta}{f'(a)} \)`,
        },
        {
            t: "t4",
            s: "t4.5",
            q: String.raw`¿Cuándo se puede calcular \( f'(b) \) con los datos \( f(a)=b \), \( f'(a) \)?`,
            a: String.raw`Solo si \( a=b \) (punto fijo) o si te dan \( f'(b) \) aparte`,
        },
        {
            t: "t4",
            s: "t4.5",
            q: String.raw`\( f(2)=2 \), \( f'(2)=4 \), \( g=f+3f^{-1} \): \( g'(2) \)`,
            a: String.raw`\( 4+\frac34=\frac{19}4 \)`,
        },
        {
            t: "t4",
            s: "t4.5",
            q: String.raw`\( g=(f^{-1})^2+f \): \( g'(b) \)`,
            a: String.raw`\( \frac{2a}{f'(a)}+f'(b) \)`,
        },
        {
            t: "t4",
            s: "t4.5",
            q: String.raw`\( f(0)=1 \), \( f'(0)=4 \), \( g=2f^{-1}+x \): \( g(1)+g'(1) \)`,
            a: String.raw`\( g(1)=1 \), \( g'(1)=\frac24+1=\frac32 \): total \( \frac52 \)`,
        },
        {
            t: "t4",
            s: "t4.5",
            q: String.raw`¿Por qué los datos del parcial a veces son \( f(3)=3 \)?`,
            a: String.raw`Porque \( g \) tiene un \( f \) sumado y hace falta \( f'(b) \): con punto fijo, \( f'(b)=f'(a) \)`,
        },
        {
            t: "t5",
            s: "t5.1",
            q: String.raw`Coeficiente de \( x^k \) en el Taylor en 0`,
            a: String.raw`\( \frac{f^{(k)}(0)}{k!} \)`,
        },
        {
            t: "t5",
            s: "t5.1",
            q: String.raw`Si \( P_3(x)=1+x-2x^3 \), ¿cuánto vale \( f'''(0) \)?`,
            a: String.raw`\( 3!\cdot(-2)=-12 \)`,
        },
        {
            t: "t5",
            s: "t5.1",
            q: String.raw`Taylor de orden 2 de \( x^3+2x^2-x+5 \)`,
            a: String.raw`\( 5-x+2x^2 \): el mismo polinomio cortado`,
        },
        {
            t: "t5",
            s: "t5.1",
            q: String.raw`¿Qué dice la unicidad del Taylor?`,
            a: String.raw`Si \( f=Q+o(x^n) \) con \( Q \) de grado \( \le n \), \( Q \) es el Taylor de orden \( n \)`,
        },
        {
            t: "t5",
            s: "t5.1",
            q: String.raw`\( \lim_{x\to0}\frac{f(x)-P_n(x)}{x^n} \)`,
            a: String.raw`0: el resto es \( o(x^n) \)`,
        },
        {
            t: "t5",
            s: "t5.1",
            q: String.raw`¿Orden y grado son lo mismo?`,
            a: String.raw`No: el Taylor de orden 3 de \( \cos x \) es \( 1-\frac{x^2}2 \), de grado 2`,
        },
        {
            t: "t5",
            s: "t5.2",
            q: String.raw`\( \sqrt{1+x} \) hasta orden 2`,
            a: String.raw`\( 1+\frac x2-\frac{x^2}8 \)`,
        },
        {
            t: "t5",
            s: "t5.2",
            q: String.raw`\( \frac1{1-x} \) hasta orden 3`,
            a: String.raw`\( 1+x+x^2+x^3 \)`,
        },
        {
            t: "t5",
            s: "t5.2",
            q: String.raw`\( \frac1{1+x} \) hasta orden 3`,
            a: String.raw`\( 1-x+x^2-x^3 \)`,
        },
        {
            t: "t5",
            s: "t5.2",
            q: String.raw`\( (1+x)^\alpha \) hasta orden 2`,
            a: String.raw`\( 1+\alpha x+\frac{\alpha(\alpha-1)}2x^2 \)`,
        },
        {
            t: "t5",
            s: "t5.2",
            q: String.raw`\( \text{sen}\,x-\text{Arctg}\,x \) hasta orden 3`,
            a: String.raw`\( \frac{x^3}6 \): \( -\frac16+\frac13 \)`,
        },
        {
            t: "t5",
            s: "t5.2",
            q: String.raw`Coeficiente de \( x^3 \) en \( L(1+x) \) y en \( e^x \)`,
            a: String.raw`\( \frac13 \) y \( \frac16 \)`,
        },
        {
            t: "t5",
            s: "t5.2",
            q: String.raw`¿Qué funciones tienen solo potencias impares?`,
            a: String.raw`\( \text{sen}\,x \) y \( \text{Arctg}\,x \) (son impares)`,
        },
        {
            t: "t5",
            s: "t5.3",
            q: String.raw`\( L(1+3x) \) hasta orden 2`,
            a: String.raw`\( 3x-\frac92x^2 \)`,
        },
        {
            t: "t5",
            s: "t5.3",
            q: String.raw`\( \cos(3x) \) hasta orden 2`,
            a: String.raw`\( 1-\frac92x^2 \)`,
        },
        {
            t: "t5",
            s: "t5.3",
            q: String.raw`\( e^{x^2} \) hasta orden 4`,
            a: String.raw`\( 1+x^2+\frac{x^4}2 \)`,
        },
        {
            t: "t5",
            s: "t5.3",
            q: String.raw`\( L(1-x) \) hasta orden 3`,
            a: String.raw`\( -x-\frac{x^2}2-\frac{x^3}3 \)`,
        },
        {
            t: "t5",
            s: "t5.3",
            q: String.raw`\( \text{Arctg}(2x) \) hasta orden 3`,
            a: String.raw`\( 2x-\frac83x^3 \)`,
        },
        {
            t: "t5",
            s: "t5.3",
            q: String.raw`\( e^{2x} \) hasta orden 3`,
            a: String.raw`\( 1+2x+2x^2+\frac43x^3 \)`,
        },
        {
            t: "t5",
            s: "t5.3",
            q: String.raw`\( \cos(x^2) \) hasta orden 4`,
            a: String.raw`\( 1-\frac{x^4}2 \)`,
        },
        {
            t: "t5",
            s: "t5.4",
            q: String.raw`¿Es \( x^3=o(x^2) \)?`,
            a: String.raw`Sí: \( \frac{x^3}{x^2}=x\to0 \)`,
        },
        {
            t: "t5",
            s: "t5.4",
            q: String.raw`\( o(x^2)-o(x^2) \)`,
            a: String.raw`\( o(x^2) \) (no es 0)`,
        },
        {
            t: "t5",
            s: "t5.4",
            q: String.raw`\( x^2\cdot o(x) \)`,
            a: String.raw`\( o(x^3) \)`,
        },
        {
            t: "t5",
            s: "t5.4",
            q: String.raw`\( o(x^2)+o(x^3) \)`,
            a: String.raw`\( o(x^2) \): manda el exponente menor`,
        },
        {
            t: "t5",
            s: "t5.4",
            q: String.raw`\( \frac{o(x^3)}{x^2} \) cuando \( x\to0 \)`,
            a: String.raw`\( o(x)\to0 \)`,
        },
        {
            t: "t5",
            s: "t5.4",
            q: String.raw`¿Es \( 2x^2=o(x^2) \)?`,
            a: String.raw`No: \( \frac{2x^2}{x^2}=2\not\to0 \)`,
        },
        {
            t: "t5",
            s: "t5.5",
            q: String.raw`Taylor de orden 3 de \( e^x\,\text{sen}\,x \)`,
            a: String.raw`\( x+x^2+\frac{x^3}3 \)`,
        },
        {
            t: "t5",
            s: "t5.5",
            q: String.raw`Taylor de orden 2 de \( e^x\cos x \)`,
            a: String.raw`\( 1+x \): los \( x^2 \) se cancelan`,
        },
        {
            t: "t5",
            s: "t5.5",
            q: String.raw`Taylor de orden 3 de \( x\,L(1+x) \)`,
            a: String.raw`\( x^2-\frac{x^3}2 \)`,
        },
        {
            t: "t5",
            s: "t5.5",
            q: String.raw`Taylor de orden 4 de \( x\,\text{sen}\,x \)`,
            a: String.raw`\( x^2-\frac{x^4}6 \)`,
        },
        {
            t: "t5",
            s: "t5.5",
            q: String.raw`Para \( x^2g(x) \) hasta orden 4, ¿hasta qué orden desarrollás \( g \)?`,
            a: String.raw`Hasta orden 2`,
        },
        {
            t: "t5",
            s: "t5.5",
            q: String.raw`Taylor de orden 2 de \( 2x\,e^x \)`,
            a: String.raw`\( 2x+2x^2 \)`,
        },
        {
            t: "t6",
            s: "t6.1",
            q: String.raw`Si hay \( x^k \) abajo, ¿hasta qué orden desarrollás?`,
            a: String.raw`Hasta orden \( k \) cada función del numerador`,
        },
        {
            t: "t6",
            s: "t6.1",
            q: String.raw`\( x\,g(x) \) en un numerador con \( x^3 \) abajo: ¿orden de \( g \)?`,
            a: String.raw`2: \( x\cdot o(x^2)=o(x^3) \)`,
        },
        {
            t: "t6",
            s: "t6.1",
            q: String.raw`¿Qué pasa si desarrollás de menos?`,
            a: String.raw`Te queda un resto que dividido \( x^k \) no tiende a 0: no podés concluir`,
        },
        {
            t: "t6",
            s: "t6.1",
            q: String.raw`Numerador \( c\,x^m+o(x^m) \), denominador \( x^k \), con \( m\lt k \)`,
            a: String.raw`El límite es infinito o no existe (con \( k-m \) impar, signos distintos a cada lado)`,
        },
        {
            t: "t6",
            s: "t6.1",
            q: String.raw`\( \lim_{x\to0}\frac{e^x-1-x}{x^3} \)`,
            a: String.raw`No existe: el numerador es \( \frac{x^2}2+\dots \), queda \( \frac1{2x} \)`,
        },
        {
            t: "t6",
            s: "t6.1",
            q: String.raw`\( L(1+x^2) \) hasta orden 4 en \( x \)`,
            a: String.raw`\( x^2-\frac{x^4}2 \): alcanza orden 2 en \( u=x^2 \)`,
        },
        {
            t: "t6",
            s: "t6.2",
            q: String.raw`Primer control antes de dividir`,
            a: String.raw`Que las constantes y los términos de grado menor que \( k \) den 0`,
        },
        {
            t: "t6",
            s: "t6.2",
            q: String.raw`\( -\cos x \) hasta orden 2`,
            a: String.raw`\( -1+\frac{x^2}2 \)`,
        },
        {
            t: "t6",
            s: "t6.2",
            q: String.raw`\( \lim_{x\to0}\frac{e^{2x}-1-2x}{x^2} \)`,
            a: String.raw`2`,
        },
        {
            t: "t6",
            s: "t6.2",
            q: String.raw`\( \lim_{x\to0}\frac{\text{sen}(3x)-3x}{x^3} \)`,
            a: String.raw`\( -\frac{27}6=-\frac92 \)`,
        },
        {
            t: "t6",
            s: "t6.2",
            q: String.raw`\( \lim_{x\to0}\frac{L(1+x)-x+\frac{x^2}2}{x^3} \)`,
            a: String.raw`\( \frac13 \)`,
        },
        {
            t: "t6",
            s: "t6.2",
            q: String.raw`\( \lim_{x\to0}\frac{\cos x-1+\frac{x^2}2}{x^2} \)`,
            a: String.raw`0: el primer término que queda es \( \frac{x^4}{24} \)`,
        },
        {
            t: "t6",
            s: "t6.3",
            q: String.raw`\( e^{-2x} \) y \( L(1+2x) \) hasta orden 2`,
            a: String.raw`\( 1-2x+2x^2 \) y \( 2x-2x^2 \)`,
        },
        {
            t: "t6",
            s: "t6.3",
            q: String.raw`\( \lim_{x\to0}\frac{e^{2x}-\cos x-2x}{x^2} \)`,
            a: String.raw`\( 2+\frac12=\frac52 \)`,
        },
        {
            t: "t6",
            s: "t6.3",
            q: String.raw`\( \lim_{x\to0}\frac{L(1+2x)+e^{-2x}-1}{x^2} \)`,
            a: String.raw`0: \( -2x^2+2x^2 \)`,
        },
        {
            t: "t6",
            s: "t6.3",
            q: String.raw`\( \lim_{x\to0}\frac{\cos(2x)+e^{x}-2-x}{x^2} \)`,
            a: String.raw`\( -2+\frac12=-\frac32 \)`,
        },
        {
            t: "t6",
            s: "t6.3",
            q: String.raw`\( 2x\,e^{x} \) hasta orden 2`,
            a: String.raw`\( 2x+2x^2 \)`,
        },
        {
            t: "t6",
            s: "t6.3",
            q: String.raw`¿Qué aportan \( \text{sen}(ax) \) y \( \text{Arctg}(ax) \) a la columna \( x^2 \)?`,
            a: String.raw`Nada: no tienen término de grado 2`,
        },
        {
            t: "t6",
            s: "t6.3",
            q: String.raw`\( \lim_{x\to0}\frac{L(1-x)+\text{sen}\,x}{x^2} \)`,
            a: String.raw`\( -\frac12 \)`,
        },
        {
            t: "t6",
            s: "t6.4",
            q: String.raw`Término cúbico de \( \text{Arctg}(2x) \) y de \( \text{sen}(2x) \)`,
            a: String.raw`\( -\frac83x^3 \) y \( -\frac43x^3 \)`,
        },
        {
            t: "t6",
            s: "t6.4",
            q: String.raw`\( x\cos x \) hasta orden 3`,
            a: String.raw`\( x-\frac{x^3}2 \)`,
        },
        {
            t: "t6",
            s: "t6.4",
            q: String.raw`\( \lim_{x\to0}\frac{x\cos x-\text{sen}\,x}{x^3} \)`,
            a: String.raw`\( -\frac12+\frac16=-\frac13 \)`,
        },
        {
            t: "t6",
            s: "t6.4",
            q: String.raw`\( \lim_{x\to0}\frac{2\,\text{Arctg}\,x-\text{sen}(2x)}{x^3} \)`,
            a: String.raw`\( -\frac23+\frac43=\frac23 \)`,
        },
        {
            t: "t6",
            s: "t6.4",
            q: String.raw`\( e^x-e^{-x} \) hasta orden 3`,
            a: String.raw`\( 2x+\frac{x^3}3 \)`,
        },
        {
            t: "t6",
            s: "t6.4",
            q: String.raw`\( \lim_{x\to0}\frac{L(1+2x)-2x+2x^2}{x^3} \)`,
            a: String.raw`\( \frac83 \)`,
        },
        {
            t: "t6",
            s: "t6.5",
            q: String.raw`\( \cos x \) hasta orden 4`,
            a: String.raw`\( 1-\frac{x^2}2+\frac{x^4}{24} \)`,
        },
        {
            t: "t6",
            s: "t6.5",
            q: String.raw`\( x\,\text{sen}\,x \) hasta orden 4`,
            a: String.raw`\( x^2-\frac{x^4}6 \)`,
        },
        {
            t: "t6",
            s: "t6.5",
            q: String.raw`\( \lim_{x\to0}\frac{\cos x-1+\frac{x^2}2}{x^4} \)`,
            a: String.raw`\( \frac1{24} \)`,
        },
        {
            t: "t6",
            s: "t6.5",
            q: String.raw`\( \lim_{x\to0}\frac{1-\cos x}{x\,\text{sen}\,x} \)`,
            a: String.raw`\( \frac{x^2/2}{x^2}\to\frac12 \)`,
        },
        {
            t: "t6",
            s: "t6.5",
            q: String.raw`Primer término de \( x^2\,\text{Arctg}\,x \)`,
            a: String.raw`\( x^3 \)`,
        },
        {
            t: "t6",
            s: "t6.5",
            q: String.raw`\( \lim_{x\to0}\frac{\cos(x^2)-1}{x^4} \)`,
            a: String.raw`\( -\frac12 \)`,
        },
        {
            t: "t7",
            s: "t7.1",
            q: String.raw`\( P=a_0+a_1x+a_2x^2 \): \( f(0),f'(0),f''(0) \)`,
            a: String.raw`\( a_0,\ a_1,\ 2a_2 \)`,
        },
        {
            t: "t7",
            s: "t7.1",
            q: String.raw`\( P=3-4x+5x^2 \): \( f''(0) \)`,
            a: String.raw`\( 10 \)`,
        },
        {
            t: "t7",
            s: "t7.1",
            q: String.raw`\( f'''(0) \) si el coeficiente de \( x^3 \) es \( a_3 \)`,
            a: String.raw`\( 6a_3 \)`,
        },
        {
            t: "t7",
            s: "t7.1",
            q: String.raw`Taylor de orden 1 de \( f' \) a partir de \( P=a_0+a_1x+a_2x^2 \)`,
            a: String.raw`\( a_1+2a_2x \)`,
        },
        {
            t: "t7",
            s: "t7.1",
            q: String.raw`\( f(x)=e^{3x} \): \( f''(0) \) leído del Taylor`,
            a: String.raw`Coeficiente \( \frac92 \), así que \( f''(0)=9 \)`,
        },
        {
            t: "t7",
            s: "t7.1",
            q: String.raw`\( P=2+x-3x^2 \): \( f(0)+f'(0)+f''(0) \)`,
            a: String.raw`\( 2+1-6=-3 \)`,
        },
        {
            t: "t7",
            s: "t7.2",
            q: String.raw`Condición de "no hay extremo en 0" leída de \( P \)`,
            a: String.raw`Coeficiente de \( x \) no nulo`,
        },
        {
            t: "t7",
            s: "t7.2",
            q: String.raw`\( P=4-3x^2 \): ¿qué hay en 0?`,
            a: String.raw`Máximo relativo`,
        },
        {
            t: "t7",
            s: "t7.2",
            q: String.raw`\( P=-2+5x^2 \): ¿qué hay en 0?`,
            a: String.raw`Mínimo relativo (el signo de \( a_0 \) no importa)`,
        },
        {
            t: "t7",
            s: "t7.2",
            q: String.raw`\( P=1+2x+x^2 \): ¿qué hay en 0?`,
            a: String.raw`Nada: \( f'(0)=2\neq0 \)`,
        },
        {
            t: "t7",
            s: "t7.2",
            q: String.raw`Si \( f'(0)=f''(0)=0 \), ¿qué se mira?`,
            a: String.raw`El primer término no nulo \( a_kx^k \): \( k \) par da extremo, \( k \) impar no`,
        },
        {
            t: "t7",
            s: "t7.2",
            q: String.raw`\( P=1+3x^2 \), \( g=f-2\cos x \): polinomio de \( g \)`,
            a: String.raw`\( -1+4x^2 \): mínimo`,
        },
        {
            t: "t7",
            s: "t7.3",
            q: String.raw`\( Q \) de orden 1 de \( g \): ¿cuánto vale \( Q(1) \)?`,
            a: String.raw`\( g(0)+g'(0) \)`,
        },
        {
            t: "t7",
            s: "t7.3",
            q: String.raw`\( g=\alpha f+\beta f' \): \( g'(0) \)`,
            a: String.raw`\( \alpha f'(0)+\beta f''(0) \)`,
        },
        {
            t: "t7",
            s: "t7.3",
            q: String.raw`\( g=f\cdot f' \): \( g'(0) \)`,
            a: String.raw`\( f'(0)^2+f(0)f''(0) \)`,
        },
        {
            t: "t7",
            s: "t7.3",
            q: String.raw`\( g=\frac{f'}{f} \): \( g'(0) \)`,
            a: String.raw`\( \frac{f''(0)f(0)-f'(0)^2}{f(0)^2} \)`,
        },
        {
            t: "t7",
            s: "t7.3",
            q: String.raw`¿Por qué con \( g=2f+3f' \) solo se llega a orden 1?`,
            a: String.raw`\( g'' \) pediría \( f'''(0) \), que un Taylor de orden 2 no da`,
        },
        {
            t: "t7",
            s: "t7.3",
            q: String.raw`\( P=1-x+2x^2 \), \( g=(x+2)f \): polinomio de orden 2 de \( g \)`,
            a: String.raw`\( 2-x+3x^2 \)`,
        },
        {
            t: "t7",
            s: "t7.4",
            q: String.raw`\( g=L(f) \): \( g(0) \) y \( g'(0) \)`,
            a: String.raw`\( L(f(0)) \) y \( \frac{f'(0)}{f(0)} \)`,
        },
        {
            t: "t7",
            s: "t7.4",
            q: String.raw`\( g=e^{f} \): \( g''(0) \)`,
            a: String.raw`\( e^{f(0)}\left(f''(0)+f'(0)^2\right) \)`,
        },
        {
            t: "t7",
            s: "t7.4",
            q: String.raw`\( g=\frac1f \): \( g'(0) \)`,
            a: String.raw`\( -\frac{f'(0)}{f(0)^2} \)`,
        },
        {
            t: "t7",
            s: "t7.4",
            q: String.raw`\( (3-x+2x^2)^2 \) hasta orden 2`,
            a: String.raw`\( 9-6x+13x^2 \)`,
        },
        {
            t: "t7",
            s: "t7.4",
            q: String.raw`\( P=1+2x-x^2 \), \( g=L(f) \): polinomio de orden 2`,
            a: String.raw`\( u=2x-x^2 \): \( u-\frac{u^2}2=2x-3x^2 \)`,
        },
        {
            t: "t7",
            s: "t7.4",
            q: String.raw`\( g=\sqrt f \): \( g'(0) \)`,
            a: String.raw`\( \frac{f'(0)}{2\sqrt{f(0)}} \)`,
        },
        {
            t: "t7",
            s: "t7.5",
            q: String.raw`\( 2\cos(2x) \) hasta orden 2`,
            a: String.raw`\( 2-4x^2 \)`,
        },
        {
            t: "t7",
            s: "t7.5",
            q: String.raw`\( P=1+x+2x^2 \), \( g=f-e^x \): polinomio de \( g \)`,
            a: String.raw`\( \frac32x^2 \): mínimo, \( g''(0)=3 \)`,
        },
        {
            t: "t7",
            s: "t7.5",
            q: String.raw`\( P=2-2x+x^2 \), \( g=f+L(1+2x) \): polinomio de \( g \)`,
            a: String.raw`\( 2-x^2 \): máximo`,
        },
        {
            t: "t7",
            s: "t7.5",
            q: String.raw`\( P=1-2x^2 \), \( g=f\cos x \): polinomio de \( g \)`,
            a: String.raw`\( 1-\frac52x^2 \)`,
        },
        {
            t: "t7",
            s: "t7.5",
            q: String.raw`\( P=1-2x^2 \), \( g=2\cos(2x)-f \): polinomio de \( g \)`,
            a: String.raw`\( 1-2x^2 \): máximo`,
        },
        {
            t: "t7",
            s: "t7.5",
            q: String.raw`Error típico al restar \( 3\cos x \)`,
            a: String.raw`Olvidar que el 3 multiplica también al 1: \( 3\cos x=3-\frac32x^2 \)`,
        },
        {
            t: "t8",
            s: "t8.1",
            q: String.raw`Definición de \( \sum_{n=n_0}^\infty a_n \)`,
            a: String.raw`\( \lim_{N\to\infty}S_N \), con \( S_N=a_{n_0}+\dots+a_N \)`,
        },
        {
            t: "t8",
            s: "t8.1",
            q: String.raw`Condición necesaria de convergencia`,
            a: String.raw`\( a_n\to0 \). Si no se cumple, la serie diverge`,
        },
        {
            t: "t8",
            s: "t8.1",
            q: String.raw`¿\( a_n\to0 \) alcanza para converger?`,
            a: String.raw`No: es necesaria pero no suficiente`,
        },
        {
            t: "t8",
            s: "t8.1",
            q: String.raw`\( S_3 \) de \( \sum_{n=1}^\infty\frac1{2^n} \)`,
            a: String.raw`\( \frac78 \)`,
        },
        {
            t: "t8",
            s: "t8.1",
            q: String.raw`Si \( S_N=3-\frac2N \), ¿a qué converge la serie?`,
            a: String.raw`A 3`,
        },
        {
            t: "t8",
            s: "t8.1",
            q: String.raw`¿Sacar los primeros 10 términos cambia la convergencia?`,
            a: String.raw`No; cambia el valor de la suma, no si converge`,
        },
        {
            t: "t8",
            s: "t8.2",
            q: String.raw`Sumas parciales de \( \sum_{n=0}^\infty r^n \)`,
            a: String.raw`\( S_N=\frac{1-r^{N+1}}{1-r} \)`,
        },
        {
            t: "t8",
            s: "t8.2",
            q: String.raw`\( \sum_{n=0}^\infty\left(-\frac13\right)^n \)`,
            a: String.raw`\( \frac{1}{1+\frac13}=\frac34 \)`,
        },
        {
            t: "t8",
            s: "t8.2",
            q: String.raw`\( \sum_{n=0}^\infty(-1)^n \)`,
            a: String.raw`Diverge: las sumas parciales oscilan entre 1 y 0`,
        },
        {
            t: "t8",
            s: "t8.2",
            q: String.raw`\( \sum_{n=0}^\infty\left(\frac54\right)^n \)`,
            a: String.raw`Diverge. La fórmula daría \( -4 \), que no significa nada`,
        },
        {
            t: "t8",
            s: "t8.2",
            q: String.raw`\( \sum_{n=0}^\infty3\left(\frac14\right)^n \)`,
            a: String.raw`\( \frac{3}{3/4}=4 \)`,
        },
        {
            t: "t8",
            s: "t8.2",
            q: String.raw`¿Para qué \( r \) converge \( \sum r^n \)?`,
            a: String.raw`\( -1\lt r\lt1 \)`,
        },
        {
            t: "t8",
            s: "t8.3",
            q: String.raw`Fórmula general con índice inicial \( n_0 \)`,
            a: String.raw`\( \sum_{n=n_0}^\infty c\,r^n=\frac{c\,r^{n_0}}{1-r} \)`,
        },
        {
            t: "t8",
            s: "t8.3",
            q: String.raw`\( \sum_{n=2}^\infty\left(\frac13\right)^n \)`,
            a: String.raw`\( \frac{1/9}{2/3}=\frac16 \)`,
        },
        {
            t: "t8",
            s: "t8.3",
            q: String.raw`\( \sum_{n=1}^\infty\frac3{4^n} \)`,
            a: String.raw`\( \frac{3/4}{3/4}=1 \)`,
        },
        {
            t: "t8",
            s: "t8.3",
            q: String.raw`\( \sum_{n=0}^\infty\left(\frac12\right)^{n+2} \)`,
            a: String.raw`\( \frac{1/4}{1/2}=\frac12 \)`,
        },
        {
            t: "t8",
            s: "t8.3",
            q: String.raw`Relación entre \( \sum_{n\ge1} \) y \( \sum_{n\ge0} \)`,
            a: String.raw`\( \sum_{n\ge1}a_n=\sum_{n\ge0}a_n-a_0 \)`,
        },
        {
            t: "t8",
            s: "t8.3",
            q: String.raw`Error más común con el índice`,
            a: String.raw`Usar \( \frac1{1-r} \) cuando la suma arranca en \( n=1 \) o el término no es \( r^n \) puro`,
        },
        {
            t: "t8",
            s: "t8.4",
            q: String.raw`\( 3^{2n} \) y \( (2^n)^2 \) como potencias de \( n \)`,
            a: String.raw`\( 9^n \) y \( 4^n \)`,
        },
        {
            t: "t8",
            s: "t8.4",
            q: String.raw`\( \frac1{5^{n-1}} \) escrito como \( c\,r^n \)`,
            a: String.raw`\( 5\cdot\left(\frac15\right)^n \)`,
        },
        {
            t: "t8",
            s: "t8.4",
            q: String.raw`Razón de \( \frac{2^{n+1}}{5^{n-1}} \)`,
            a: String.raw`\( \frac25 \)`,
        },
        {
            t: "t8",
            s: "t8.4",
            q: String.raw`\( \sum_{n=1}^\infty\frac{3^{n+1}}{4^n} \)`,
            a: String.raw`\( \frac{9/4}{1/4}=9 \)`,
        },
        {
            t: "t8",
            s: "t8.4",
            q: String.raw`\( \sum_{n=0}^\infty\frac{2^{n+1}}{5^{n-1}} \)`,
            a: String.raw`\( \frac{10}{3/5}=\frac{50}3 \)`,
        },
        {
            t: "t8",
            s: "t8.4",
            q: String.raw`\( \sum_{n=1}^\infty\frac{3^{2n}}{2^{3n}} \)`,
            a: String.raw`Diverge: \( r=\frac98\gt1 \)`,
        },
        {
            t: "t8",
            s: "t8.4",
            q: String.raw`Atajo para encontrar \( r \)`,
            a: String.raw`\( \frac{a_{n+1}}{a_n} \)`,
        },
        {
            t: "t8",
            s: "t8.5",
            q: String.raw`\( \sum\frac{A+B}{C} \) con dos geométricas`,
            a: String.raw`\( \sum\frac AC+\sum\frac BC \), cada una con su \( r \)`,
        },
        {
            t: "t8",
            s: "t8.5",
            q: String.raw`Convergente + divergente`,
            a: String.raw`Diverge`,
        },
        {
            t: "t8",
            s: "t8.5",
            q: String.raw`\( \sum_{n=0}^\infty\frac{2^n+3^n}{6^n} \)`,
            a: String.raw`\( \frac32+2=\frac72 \)`,
        },
        {
            t: "t8",
            s: "t8.5",
            q: String.raw`\( \sum_{n=1}^\infty\frac{5+2^n}{3^{n-1}} \)`,
            a: String.raw`\( \frac{15}2+6=\frac{27}2 \)`,
        },
        {
            t: "t8",
            s: "t8.5",
            q: String.raw`\( \sum_{n=1}^\infty\frac{3+2^n}{4^n} \)`,
            a: String.raw`\( 1+1=2 \)`,
        },
        {
            t: "t8",
            s: "t8.5",
            q: String.raw`\( \sum_{n=1}^\infty\frac{(-1)^n}{5^n} \)`,
            a: String.raw`\( \frac{-1/5}{6/5}=-\frac16 \)`,
        },
        {
            t: "t8",
            s: "t8.6",
            q: String.raw`Tres pasos del molde con parámetro`,
            a: String.raw`Primer término y \( r \); ecuación \( \frac{a}{1-r}=S \); chequear \( |r|\lt1 \)`,
        },
        {
            t: "t8",
            s: "t8.6",
            q: String.raw`\( \sum_{n=0}^\infty\frac{x^n}{2^n}=3 \)`,
            a: String.raw`\( x=\frac43 \)`,
        },
        {
            t: "t8",
            s: "t8.6",
            q: String.raw`\( \sum_{n=1}^\infty\frac3{x^n}=1 \)`,
            a: String.raw`\( \frac3{x-1}=1\Rightarrow x=4 \)`,
        },
        {
            t: "t8",
            s: "t8.6",
            q: String.raw`\( \sum_{n=0}^\infty\frac2{x^{2n+1}}=\frac34 \): ¿qué solución se descarta?`,
            a: String.raw`\( x=-\frac13 \), porque \( r=\frac1{x^2}=9 \)`,
        },
        {
            t: "t8",
            s: "t8.6",
            q: String.raw`¿Para qué \( x \) converge \( \sum\frac{(x-1)^n}{3^n} \)?`,
            a: String.raw`\( -2\lt x\lt4 \)`,
        },
        {
            t: "t8",
            s: "t8.6",
            q: String.raw`\( \sum_{n=0}^\infty\frac1{x^{2n}}=\frac43 \)`,
            a: String.raw`\( x=2 \) o \( x=-2 \): los dos dan \( r=\frac14 \)`,
        },
    ],
    questions: [
        {
            t: "t1",
            s: "t1.1",
            q: String.raw`Sea \( f:\mathbb R\to\mathbb R \) tal que \( f(x)=e^{2-x}+1 \). La imagen de \( f \) es:`,
            opts: [String.raw`\( [1,+\infty) \)`, String.raw`\( (0,+\infty) \)`, String.raw`\( (1,+\infty) \)`, String.raw`\( \mathbb R \)`],
            ans: 2,
            exp: String.raw`\( e^{2-x} \) toma todos los valores de \( (0,+\infty) \) sin alcanzar el 0; al sumar 1 queda \( (1,+\infty) \), abierto porque el 0 nunca se alcanza. \( (0,+\infty) \) olvida el \( +1 \) y \( \mathbb R \) confunde con la imagen del logaritmo.`,
        },
        {
            t: "t1",
            s: "t1.1",
            q: String.raw`El dominio de \( f(x)=-L(x-2)+3 \) es:`,
            opts: [String.raw`\( (2,+\infty) \)`, String.raw`\( [2,+\infty) \)`, String.raw`\( (-2,+\infty) \)`, String.raw`\( (3,+\infty) \)`],
            ans: 0,
            exp: String.raw`El argumento del logaritmo tiene que ser positivo: \( x-2\gt0 \iff x\gt2 \). El 2 no entra porque \( L(0) \) no existe; \( (-2,+\infty) \) sale de cambiar el signo y el 3 no tiene nada que ver con el dominio.`,
        },
        {
            t: "t1",
            s: "t1.1",
            q: String.raw`\( e^{2L(3)} \) es igual a:`,
            opts: [String.raw`\( 6 \)`, String.raw`\( e^6 \)`, String.raw`\( 3^e \)`, String.raw`\( 9 \)`],
            ans: 3,
            exp: String.raw`\( 2L(3)=L(3^2)=L(9) \) y \( e^{L(9)}=9 \). El 6 multiplica en vez de elevar y \( e^6 \) olvida que \( e \) y \( L \) se cancelan.`,
        },
        {
            t: "t1",
            s: "t1.1",
            q: String.raw`Sea \( f:(-2,+\infty)\to\mathbb R \), \( f(x)=-L(x+2)-3 \). La imagen de \( f \) es:`,
            opts: [String.raw`\( (-3,+\infty) \)`, String.raw`\( \mathbb R \)`, String.raw`\( (-\infty,-3) \)`, String.raw`\( (0,+\infty) \)`],
            ans: 1,
            exp: String.raw`\( x+2 \) recorre \( (0,+\infty) \), así que \( L(x+2) \) recorre todo \( \mathbb R \). Multiplicar por \( -1 \) y restar 3 no cambia eso: sigue siendo \( \mathbb R \). Las otras opciones tratan al logaritmo como si tuviera imagen acotada.`,
        },
        {
            t: "t1",
            s: "t1.2",
            q: String.raw`En el intervalo \( [\pi/2,3\pi/2] \), la función \( \text{sen}\,x \):`,
            opts: [String.raw`crece de \( -1 \) a 1`, String.raw`decrece de 0 a \( -1 \)`, String.raw`decrece de 1 a \( -1 \)`, String.raw`no es monótona`],
            ans: 2,
            exp: String.raw`\( \text{sen}(\pi/2)=1 \) y \( \text{sen}(3\pi/2)=-1 \), y entre esos puntos baja todo el tiempo (pasa por \( \text{sen}\,\pi=0 \)). Confundirlo con el coseno lleva a "de 0 a \( -1 \)".`,
        },
        {
            t: "t1",
            s: "t1.2",
            q: String.raw`\( \text{Arctg}(-1)+\text{Arctg}(\sqrt3) \) vale:`,
            opts: [String.raw`\( \frac{\pi}{12} \)`, String.raw`\( \frac{7\pi}{12} \)`, String.raw`\( -\frac{\pi}{12} \)`, String.raw`\( \frac{\pi}{6} \)`],
            ans: 0,
            exp: String.raw`\( \text{Arctg}(-1)=-\frac\pi4 \) y \( \text{Arctg}(\sqrt3)=\frac\pi3 \). Suma: \( -\frac{3\pi}{12}+\frac{4\pi}{12}=\frac{\pi}{12} \). \( \frac{7\pi}{12} \) olvida el signo del primero.`,
        },
        {
            t: "t1",
            s: "t1.2",
            q: String.raw`\( \cos(\pi)+\text{sen}(3\pi/2) \) vale:`,
            opts: [String.raw`\( 0 \)`, String.raw`\( -1 \)`, String.raw`\( 2 \)`, String.raw`\( -2 \)`],
            ans: 3,
            exp: String.raw`\( \cos\pi=-1 \) y \( \text{sen}(3\pi/2)=-1 \): la suma es \( -2 \). Si confundís \( \text{sen}(3\pi/2) \) con \( \cos(3\pi/2)=0 \) te da \( -1 \).`,
        },
        {
            t: "t1",
            s: "t1.2",
            q: String.raw`En \( [0,\pi/2] \), la función \( -\cos x \):`,
            opts: [String.raw`decrece de 1 a 0`, String.raw`crece de \( -1 \) a 0`, String.raw`crece de 0 a 1`, String.raw`decrece de 0 a \( -1 \)`],
            ans: 1,
            exp: String.raw`\( \cos \) baja de 1 a 0 en ese intervalo; con el signo menos, \( -\cos \) sube de \( -1 \) a 0. "Decrece de 1 a 0" es el coseno sin el signo.`,
        },
        {
            t: "t1",
            s: "t1.3",
            q: String.raw`Si \( f(x)=(x+1)^2+e^{2x} \), entonces \( f'(0) \) vale:`,
            opts: [String.raw`\( 3 \)`, String.raw`\( 2 \)`, String.raw`\( 4 \)`, String.raw`\( 6 \)`],
            ans: 2,
            exp: String.raw`\( f'(x)=2(x+1)+2e^{2x} \), así que \( f'(0)=2+2=4 \). El 3 aparece al olvidar la cadena en \( e^{2x} \) (derivarla como \( e^{2x} \)).`,
        },
        {
            t: "t1",
            s: "t1.3",
            q: String.raw`Si \( f(x)=\text{Arctg}(2x)+x^2 \), entonces \( f'(1) \) vale:`,
            opts: [String.raw`\( \frac{12}{5} \)`, String.raw`\( \frac{11}{5} \)`, String.raw`\( \frac52 \)`, String.raw`\( 2 \)`],
            ans: 0,
            exp: String.raw`\( f'(x)=\frac{2}{1+4x^2}+2x \); en 1: \( \frac25+2=\frac{12}5 \). \( \frac{11}5 \) olvida el 2 de adentro en el numerador y \( \frac52 \) usa \( 1+x^2 \) en vez de \( 1+(2x)^2 \).`,
        },
        {
            t: "t1",
            s: "t1.3",
            q: String.raw`Si \( f(x)=L(x^2+1) \), entonces \( f'(1) \) vale:`,
            opts: [String.raw`\( \frac12 \)`, String.raw`\( 2 \)`, String.raw`\( L(2) \)`, String.raw`\( 1 \)`],
            ans: 3,
            exp: String.raw`\( f'(x)=\frac{2x}{x^2+1} \), y en 1 da \( \frac22=1 \). \( \frac12 \) olvida multiplicar por la derivada de adentro (\( 2x \)).`,
        },
        {
            t: "t1",
            s: "t1.3",
            q: String.raw`Si \( h(x)=-\frac2x \), entonces \( h'(x) \) es:`,
            opts: [String.raw`\( -\frac{2}{x^2} \)`, String.raw`\( \frac{2}{x^2} \)`, String.raw`\( \frac2x \)`, String.raw`\( -2L(x) \)`],
            ans: 1,
            exp: String.raw`\( h(x)=-2x^{-1} \), así que \( h'(x)=2x^{-2}=\frac2{x^2} \). El error típico es arrastrar el signo menos sin notar que la derivada de \( x^{-1} \) también es negativa.`,
        },
        {
            t: "t1",
            s: "t1.4",
            q: String.raw`La imagen de \( g(x)=x^2-4x+3 \) restringida a \( x\le1 \) es:`,
            opts: [String.raw`\( [-1,+\infty) \)`, String.raw`\( (0,+\infty) \)`, String.raw`\( [0,+\infty) \)`, String.raw`\( (-\infty,0] \)`],
            ans: 2,
            exp: String.raw`Vértice en \( x=2 \), fuera del trozo. En \( x\le1 \) la parábola decrece, así que la imagen va de \( +\infty \) hasta \( g(1)=0 \), cerrado porque el 1 está incluido. \( [-1,+\infty) \) usa el vértice, que no pertenece al trozo.`,
        },
        {
            t: "t1",
            s: "t1.4",
            q: String.raw`La imagen de \( g(x)=-x^2+4x \) restringida a \( x\le1 \) es:`,
            opts: [String.raw`\( (-\infty,3] \)`, String.raw`\( (-\infty,4] \)`, String.raw`\( (-\infty,3) \)`, String.raw`\( [3,+\infty) \)`],
            ans: 0,
            exp: String.raw`\( a\lt0 \) y vértice en \( x=2 \), fuera del trozo: en \( x\le1 \) la parábola crece hasta \( g(1)=3 \), incluido. El 4 es el máximo de toda la parábola, pero se alcanza en \( x=2 \), que no está.`,
        },
        {
            t: "t1",
            s: "t1.4",
            q: String.raw`¿En cuál de estos intervalos \( g(x)=x^2-2x+3 \) NO es inyectiva?`,
            opts: [String.raw`\( (-\infty,1] \)`, String.raw`\( [1,+\infty) \)`, String.raw`\( [3,+\infty) \)`, String.raw`\( (-\infty,2] \)`],
            ans: 3,
            exp: String.raw`El vértice está en \( x=1 \). En \( (-\infty,2] \) el vértice queda adentro: por ejemplo \( g(0)=g(2)=3 \). En los otros tres la parábola es monótona (el vértice está en el borde o afuera).`,
        },
        {
            t: "t1",
            s: "t1.4",
            q: String.raw`El vértice de \( 2x^2+8x+5 \) es:`,
            opts: [String.raw`\( (2,29) \)`, String.raw`\( (-2,-3) \)`, String.raw`\( (-4,5) \)`, String.raw`\( (-2,5) \)`],
            ans: 1,
            exp: String.raw`\( x_v=-\frac{8}{2\cdot2}=-2 \) y \( g(-2)=8-16+5=-3 \). \( (2,29) \) olvida el signo de \( -b/(2a) \) y \( (-4,5) \) olvida el 2 del denominador.`,
        },
        {
            t: "t2",
            s: "t2.1",
            q: String.raw`¿Cuál de estas funciones es inyectiva en su dominio?`,
            opts: [String.raw`\( f:\mathbb R\to\mathbb R \), \( f(x)=x^2-1 \)`, String.raw`\( f:[0,2\pi]\to\mathbb R \), \( f(x)=\cos x \)`, String.raw`\( f:\mathbb R\to\mathbb R \), \( f(x)=x^3+x \)`, String.raw`\( f:\mathbb R\to\mathbb R \), \( f(x)=|x| \)`],
            ans: 2,
            exp: String.raw`\( (x^3+x)'=3x^2+1\gt0 \): estrictamente creciente, inyectiva. \( x^2-1 \) y \( |x| \) valen lo mismo en \( \pm1 \), y \( \cos 0=\cos 2\pi \).`,
        },
        {
            t: "t2",
            s: "t2.1",
            q: String.raw`Para probar que una función \( f \) NO es inyectiva alcanza con:`,
            opts: [String.raw`encontrar \( x_1\neq x_2 \) con \( f(x_1)=f(x_2) \)`, String.raw`encontrar un punto donde \( f'(x)=0 \)`, String.raw`mostrar que \( f \) no es continua`, String.raw`mostrar que la imagen no es \( \mathbb R \)`],
            ans: 0,
            exp: String.raw`La definición se rompe con un solo par de puntos distintos con igual imagen. \( f'=0 \) en un punto no alcanza (\( x^3 \)), una discontinua puede ser inyectiva y la imagen tiene que ver con sobreyectividad.`,
        },
        {
            t: "t2",
            s: "t2.1",
            q: String.raw`Sea \( f:\mathbb R\to\mathbb R \), \( f(x)=x^3 \). Como \( f'(0)=0 \):`,
            opts: [String.raw`\( f \) no es inyectiva`, String.raw`\( f \) es inyectiva solo en \( (0,+\infty) \)`, String.raw`no se puede saber sin graficar`, String.raw`\( f \) sigue siendo inyectiva, porque no cambia de sentido`],
            ans: 3,
            exp: String.raw`\( f'(x)=3x^2\ge0 \) y solo se anula en \( x=0 \): la función es estrictamente creciente, por lo tanto inyectiva en todo \( \mathbb R \). Un cero aislado de la derivada no la hace cambiar de sentido.`,
        },
        {
            t: "t2",
            s: "t2.1",
            q: String.raw`La función \( f(x)=(x-2)^2 \) con dominio \( [a,+\infty) \) es inyectiva si y solo si:`,
            opts: [String.raw`\( a\ge0 \)`, String.raw`\( a\ge2 \)`, String.raw`\( a\le2 \)`, String.raw`\( a=0 \)`],
            ans: 1,
            exp: String.raw`La parábola tiene vértice en \( x=2 \). Si \( a\lt2 \), el intervalo contiene puntos a los dos lados del vértice (por ejemplo \( f(2-\varepsilon)=f(2+\varepsilon) \)). Con \( a\ge2 \) es creciente.`,
        },
        {
            t: "t2",
            s: "t2.2",
            q: String.raw`Sea \( f:\mathbb R\to U \) tal que \( f(x)=x^2-6x+5 \). Entonces \( f \) es sobreyectiva si \( U \) es:`,
            opts: [String.raw`\( (-4,+\infty) \)`, String.raw`\( [5,+\infty) \)`, String.raw`\( [-4,+\infty) \)`, String.raw`\( [-3,+\infty) \)`],
            ans: 2,
            exp: String.raw`Vértice en \( x=3 \), valor \( 9-18+5=-4 \), que se alcanza: \( U=[-4,+\infty) \). \( [5,+\infty) \) es el valor en 0, y \( -3 \) sale de confundir \( x_v \) con \( y_v \).`,
        },
        {
            t: "t2",
            s: "t2.2",
            q: String.raw`Sea \( f:\mathbb R\to U \) tal que \( f(x)=-2x^2+4x+1 \). Entonces \( f \) es sobreyectiva si \( U \) es:`,
            opts: [String.raw`\( (-\infty,3] \)`, String.raw`\( (-\infty,3) \)`, String.raw`\( (-\infty,1] \)`, String.raw`\( [3,+\infty) \)`],
            ans: 0,
            exp: String.raw`\( a\lt0 \): tiene máximo en \( x_v=1 \), con \( f(1)=-2+4+1=3 \). La imagen es \( (-\infty,3] \), cerrada porque el 3 se alcanza. \( (-\infty,1] \) confunde \( x_v \) con el valor máximo.`,
        },
        {
            t: "t2",
            s: "t2.2",
            q: String.raw`Sea \( f:\mathbb R\to\mathbb R \) tal que \( f(x)=e^x-2 \). Entonces:`,
            opts: [String.raw`\( f \) no es inyectiva ni sobreyectiva`, String.raw`\( f \) es inyectiva pero no sobreyectiva`, String.raw`\( f \) no es inyectiva pero sí sobreyectiva`, String.raw`\( f \) es biyectiva`],
            ans: 1,
            exp: String.raw`\( e^x \) es estrictamente creciente, así que \( f \) es inyectiva. Su imagen es \( (-2,+\infty)\neq\mathbb R \): no es sobreyectiva. Con codominio \( (-2,+\infty) \) sería biyectiva.`,
        },
        {
            t: "t2",
            s: "t2.2",
            q: String.raw`Sea \( f:(0,+\infty)\to\mathbb R \) tal que \( f(x)=L(x)+x \). Entonces:`,
            opts: [String.raw`\( f \) no es inyectiva ni sobreyectiva`, String.raw`\( f \) es inyectiva pero no sobreyectiva`, String.raw`\( f \) no es inyectiva pero sí sobreyectiva`, String.raw`\( f \) es biyectiva`],
            ans: 3,
            exp: String.raw`Suma de crecientes: estrictamente creciente, inyectiva. Cuando \( x\to0^+ \), \( L(x)+x\to-\infty \); cuando \( x\to+\infty \), \( \to+\infty \). Como es continua, toma todos los reales: biyectiva.`,
        },
        {
            t: "t2",
            s: "t2.2",
            q: String.raw`Sea \( f:\mathbb R\to U \) tal que \( f(x)=\begin{cases}-(x-1)^2+2 & \text{si } x\le0\\ 3-x & \text{si } x\gt0\end{cases} \). Entonces \( f \) es sobreyectiva si \( U \) es:`,
            opts: [String.raw`\( (-\infty,3] \)`, String.raw`\( (-\infty,1] \)`, String.raw`\( (-\infty,2] \)`, String.raw`\( (-\infty,3) \)`],
            ans: 3,
            exp: String.raw`Rama izquierda: vértice en \( x=1 \), fuera; en \( x\le0 \) crece hasta \( f(0)=1 \): \( (-\infty,1] \). Rama derecha: \( 3-x \) con \( x\gt0 \) da \( (-\infty,3) \), sin el 3. Unión: \( (-\infty,3) \). El 2 es el máximo de la parábola, pero se alcanza en \( x=1 \), que no está en la rama.`,
        },
        {
            t: "t2",
            s: "t2.3",
            q: String.raw`¿Cuál de estas funciones es biyectiva de \( \mathbb R \) en \( \mathbb R \)?`,
            opts: [String.raw`\( e^x \)`, String.raw`\( x^3+2x \)`, String.raw`\( x^2 \)`, String.raw`\( \text{Arctg}\,x \)`],
            ans: 1,
            exp: String.raw`\( x^3+2x \) tiene derivada \( 3x^2+2\gt0 \) y límites \( \mp\infty \): biyectiva. \( e^x \) y \( \text{Arctg} \) son inyectivas pero su imagen no es \( \mathbb R \); \( x^2 \) no es ni inyectiva ni sobreyectiva.`,
        },
        {
            t: "t2",
            s: "t2.3",
            q: String.raw`\( f:\mathbb R\to U \), \( f(x)=\text{Arctg}\,x \), es biyectiva si \( U \) es:`,
            opts: [String.raw`\( [-\frac\pi2,\frac\pi2] \)`, String.raw`\( [-\frac\pi2,\frac\pi2) \)`, String.raw`\( (-\frac\pi2,\frac\pi2) \)`, String.raw`\( \mathbb R \)`],
            ans: 2,
            exp: String.raw`\( \text{Arctg} \) es creciente y tiende a \( \pm\frac\pi2 \) sin alcanzarlos, así que la imagen es el intervalo abierto. Poner corchetes agrega valores que nadie alcanza.`,
        },
        {
            t: "t2",
            s: "t2.3",
            q: String.raw`Sea \( f:[1,+\infty)\to B \), \( f(x)=x^2-2x \). \( f \) es biyectiva si \( B \) es:`,
            opts: [String.raw`\( [-1,+\infty) \)`, String.raw`\( [0,+\infty) \)`, String.raw`\( (-1,+\infty) \)`, String.raw`\( \mathbb R \)`],
            ans: 0,
            exp: String.raw`Vértice en \( x=1 \), en el borde: la función crece en \( [1,+\infty) \) desde \( f(1)=-1 \), incluido. Ya es inyectiva, y con \( B=[-1,+\infty) \) es sobreyectiva. \( [0,+\infty) \) sale de evaluar en 0, que no está en el dominio.`,
        },
        {
            t: "t2",
            s: "t2.3",
            q: String.raw`Si \( f:A\to B \) y \( g:B\to C \) son biyectivas, entonces \( g\circ f:A\to C \):`,
            opts: [String.raw`es inyectiva pero puede no ser sobreyectiva`, String.raw`es sobreyectiva pero puede no ser inyectiva`, String.raw`puede no ser ni inyectiva ni sobreyectiva`, String.raw`es biyectiva`],
            ans: 3,
            exp: String.raw`La composición de inyectivas es inyectiva y la de sobreyectivas es sobreyectiva. Su inversa es \( f^{-1}\circ g^{-1} \).`,
        },
        {
            t: "t2",
            s: "t2.4",
            q: String.raw`Sea \( f:\mathbb R\to\mathbb R \) tal que \( f(x)=x^3-3x \). Entonces:`,
            opts: [String.raw`\( f \) no es inyectiva ni sobreyectiva`, String.raw`\( f \) es inyectiva pero no sobreyectiva`, String.raw`\( f \) no es inyectiva pero sí sobreyectiva`, String.raw`\( f \) es biyectiva`],
            ans: 2,
            exp: String.raw`\( f'(x)=3x^2-3 \) es negativa en \( (-1,1) \) y positiva afuera: sube, baja y sube. Por ejemplo \( f(0)=f(\sqrt3)=0 \): no es inyectiva. Es continua con límites \( -\infty \) y \( +\infty \): toma todos los valores, sí es sobreyectiva.`,
        },
        {
            t: "t2",
            s: "t2.4",
            q: String.raw`Sea \( f:\mathbb R\to\mathbb R \) tal que \( f(x)=x+e^x \). Entonces:`,
            opts: [String.raw`\( f \) no es inyectiva ni sobreyectiva`, String.raw`\( f \) es inyectiva pero no sobreyectiva`, String.raw`\( f \) no es inyectiva pero sí sobreyectiva`, String.raw`\( f \) es biyectiva`],
            ans: 3,
            exp: String.raw`\( f'(x)=1+e^x\gt0 \): estrictamente creciente, inyectiva. \( \lim_{x\to-\infty}f=-\infty \) (porque \( e^x\to0 \)) y \( \lim_{x\to+\infty}f=+\infty \); al ser continua es sobreyectiva. Biyectiva.`,
        },
        {
            t: "t2",
            s: "t2.4",
            q: String.raw`Sea \( f:[0,+\infty)\to\mathbb R \) tal que \( f(x)=e^x+e^{-x} \). Entonces:`,
            opts: [String.raw`\( f \) no es inyectiva ni sobreyectiva`, String.raw`\( f \) es inyectiva pero no sobreyectiva`, String.raw`\( f \) no es inyectiva pero sí sobreyectiva`, String.raw`\( f \) es biyectiva`],
            ans: 1,
            exp: String.raw`\( f'(x)=e^x-e^{-x}\ge0 \) y solo vale 0 en \( x=0 \): creciente en \( [0,+\infty) \), inyectiva. La imagen es \( [f(0),+\infty)=[2,+\infty)\neq\mathbb R \): no es sobreyectiva.`,
        },
        {
            t: "t2",
            s: "t2.4",
            q: String.raw`La recta \( y=5 \) corta el gráfico de \( f \) en dos puntos. Entonces:`,
            opts: [String.raw`\( f \) no es sobreyectiva`, String.raw`\( f \) no es inyectiva`, String.raw`\( f \) no es continua`, String.raw`\( f \) no es derivable`],
            ans: 1,
            exp: String.raw`Dos cortes quieren decir dos \( x \) distintos con \( f(x)=5 \): se rompe la inyectividad. No dice nada de sobreyectividad (5 se alcanza), ni de continuidad o derivabilidad.`,
        },
        {
            t: "t2",
            s: "t2.5",
            q: String.raw`Sea \( f:\mathbb R\to\mathbb R \) tal que \( f(x)=\begin{cases}x^2+2x+1 & \text{si } x\le-1\\ L(x+2) & \text{si } x\gt-1\end{cases} \). Entonces:`,
            opts: [String.raw`\( f \) no es inyectiva ni sobreyectiva`, String.raw`\( f \) es inyectiva pero no sobreyectiva`, String.raw`\( f \) no es inyectiva pero sí sobreyectiva`, String.raw`\( f \) es biyectiva`],
            ans: 0,
            exp: String.raw`Izquierda: \( (x+1)^2 \) con vértice en el borde, decrece hasta \( f(-1)=0 \): \( [0,+\infty) \). Derecha: \( x+2\gt1 \), \( L \) crece: \( (0,+\infty) \). Se pisan en \( (0,+\infty) \): no es inyectiva. Unión \( [0,+\infty)\neq\mathbb R \): no es sobreyectiva.`,
        },
        {
            t: "t2",
            s: "t2.5",
            q: String.raw`Sea \( f:\mathbb R\to\mathbb R \) tal que \( f(x)=\begin{cases}-x^2 & \text{si } x\le0\\ e^x-1 & \text{si } x\gt0\end{cases} \). Entonces:`,
            opts: [String.raw`\( f \) no es inyectiva ni sobreyectiva`, String.raw`\( f \) es inyectiva pero no sobreyectiva`, String.raw`\( f \) no es inyectiva pero sí sobreyectiva`, String.raw`\( f \) es biyectiva`],
            ans: 3,
            exp: String.raw`Izquierda: \( -x^2 \) crece en \( x\le0 \) hasta 0: \( (-\infty,0] \). Derecha: \( e^x-1 \) crece desde \( 0 \) (no incluido): \( (0,+\infty) \). Disjuntas y con unión \( \mathbb R \): biyectiva.`,
        },
        {
            t: "t2",
            s: "t2.5",
            q: String.raw`Sea \( f:\mathbb R\to\mathbb R \) tal que \( f(x)=\begin{cases}e^x & \text{si } x\le0\\ x+2 & \text{si } x\gt0\end{cases} \). Entonces:`,
            opts: [String.raw`\( f \) no es inyectiva ni sobreyectiva`, String.raw`\( f \) es inyectiva pero no sobreyectiva`, String.raw`\( f \) no es inyectiva pero sí sobreyectiva`, String.raw`\( f \) es biyectiva`],
            ans: 1,
            exp: String.raw`Izquierda: \( (0,1] \). Derecha: \( (2,+\infty) \). No se pisan y cada rama es creciente: inyectiva. Quedan afuera \( (-\infty,0] \) y \( (1,2] \): no es sobreyectiva.`,
        },
        {
            t: "t2",
            s: "t2.5",
            q: String.raw`Sea \( f:\mathbb R\to\mathbb R \) tal que \( f(x)=\begin{cases}x^2-4x & \text{si } x\le1\\ -L(x) & \text{si } x\gt1\end{cases} \). Entonces:`,
            opts: [String.raw`\( f \) no es inyectiva ni sobreyectiva`, String.raw`\( f \) es inyectiva pero no sobreyectiva`, String.raw`\( f \) no es inyectiva pero sí sobreyectiva`, String.raw`\( f \) es biyectiva`],
            ans: 2,
            exp: String.raw`Izquierda: vértice en \( x=2 \), fuera; decrece hasta \( f(1)=-3 \): \( [-3,+\infty) \). Derecha: \( -L(x) \) con \( x\gt1 \): \( (-\infty,0) \). Se pisan en \( [-3,0) \): no inyectiva. La unión es \( \mathbb R \): sobreyectiva.`,
        },
        {
            t: "t2",
            s: "t2.5",
            q: String.raw`Sea \( f:\mathbb R\to\mathbb R \) tal que \( f(x)=\begin{cases}x^2 & \text{si } x\le1\\ 1-x & \text{si } x\gt1\end{cases} \). Entonces:`,
            opts: [String.raw`\( f \) no es inyectiva ni sobreyectiva`, String.raw`\( f \) es inyectiva pero no sobreyectiva`, String.raw`\( f \) no es inyectiva pero sí sobreyectiva`, String.raw`\( f \) es biyectiva`],
            ans: 2,
            exp: String.raw`Las imágenes de las ramas son \( [0,+\infty) \) y \( (-\infty,0) \): disjuntas y con unión \( \mathbb R \), lo que tienta a decir biyectiva. Pero la rama \( x^2 \) contiene su vértice: \( f(-1)=f(1)=1 \). No es inyectiva, sí sobreyectiva.`,
        },
        {
            t: "t2",
            s: "t2.5",
            q: String.raw`Sea \( f:\mathbb R\to\mathbb R \) tal que \( f(x)=\begin{cases}e^{-x} & \text{si } x\le0\\ -L(x+1) & \text{si } x\gt0\end{cases} \). Entonces:`,
            opts: [String.raw`\( f \) no es inyectiva ni sobreyectiva`, String.raw`\( f \) es inyectiva pero no sobreyectiva`, String.raw`\( f \) no es inyectiva pero sí sobreyectiva`, String.raw`\( f \) es biyectiva`],
            ans: 1,
            exp: String.raw`Izquierda: \( e^{-x} \) decrece de \( +\infty \) a \( e^0=1 \): \( [1,+\infty) \). Derecha: \( x+1\gt1 \), \( -L(x+1) \) recorre \( (-\infty,0) \). Disjuntas y ambas ramas decrecientes: inyectiva. Falta \( [0,1) \): no sobreyectiva.`,
        },
        {
            t: "t3",
            s: "t3.1",
            q: String.raw`Si \( f \) es invertible y \( f(2)=5 \), entonces \( f^{-1}(5) \) vale:`,
            opts: [String.raw`\( 5 \)`, String.raw`\( \frac15 \)`, String.raw`\( 2 \)`, String.raw`\( \frac12 \)`],
            ans: 2,
            exp: String.raw`\( f(2)=5 \iff f^{-1}(5)=2 \). \( \frac15 \) confunde la inversa con el recíproco \( \frac1{f} \).`,
        },
        {
            t: "t3",
            s: "t3.1",
            q: String.raw`El punto \( (1,3) \) pertenece al gráfico de una función invertible \( f \). Entonces pertenece al gráfico de \( f^{-1} \) el punto:`,
            opts: [String.raw`\( (3,1) \)`, String.raw`\( (1,\frac13) \)`, String.raw`\( (-1,-3) \)`, String.raw`\( (1,3) \)`],
            ans: 0,
            exp: String.raw`\( f(1)=3 \) implica \( f^{-1}(3)=1 \): el punto se refleja en \( y=x \) y queda \( (3,1) \). \( (1,\frac13) \) sería el gráfico de \( \frac1f \).`,
        },
        {
            t: "t3",
            s: "t3.1",
            q: String.raw`Sea \( f:[0,+\infty)\to[1,+\infty) \), \( f(x)=x^2+1 \). Entonces \( f\big(f^{-1}(5)\big) \) vale:`,
            opts: [String.raw`\( 26 \)`, String.raw`\( 2 \)`, String.raw`\( \sqrt5 \)`, String.raw`\( 5 \)`],
            ans: 3,
            exp: String.raw`Para \( y \) en el codominio, \( f(f^{-1}(y))=y \). No hace falta calcular nada: da 5. (\( f^{-1}(5)=2 \) y \( f(2)=5 \).)`,
        },
        {
            t: "t3",
            s: "t3.1",
            q: String.raw`Si \( f:A\to B \) es biyectiva, la igualdad \( f^{-1}(f(x))=x \) vale para todo \( x \) en:`,
            opts: [String.raw`\( B \)`, String.raw`\( A \)`, String.raw`\( A\cap B \)`, String.raw`\( \mathbb R \)`],
            ans: 1,
            exp: String.raw`Para calcular \( f(x) \), \( x \) tiene que estar en el dominio de \( f \), que es \( A \). La otra identidad, \( f(f^{-1}(y))=y \), vale en \( B \).`,
        },
        {
            t: "t3",
            s: "t3.1",
            q: String.raw`Si \( f \) es estrictamente decreciente e invertible, entonces \( f^{-1} \):`,
            opts: [String.raw`es estrictamente creciente`, String.raw`puede no ser monótona`, String.raw`es estrictamente decreciente`, String.raw`es constante`],
            ans: 2,
            exp: String.raw`Si \( y_1\lt y_2 \) y fuera \( f^{-1}(y_1)\lt f^{-1}(y_2) \), aplicando \( f \) (decreciente) quedaría \( y_1\gt y_2 \), absurdo. La inversa conserva el sentido de monotonía.`,
        },
        {
            t: "t3",
            s: "t3.2",
            q: String.raw`Sea \( f:\mathbb R\to(-1,+\infty) \) tal que \( f(x)=e^{2x+1}-1 \). Entonces:`,
            opts: [String.raw`\( f \) es invertible y \( f^{-1}(y)=\frac{L(y+1)-1}{2} \)`, String.raw`\( f \) es invertible y \( f^{-1}(y)=\frac{L(y-1)-1}{2} \)`, String.raw`\( f \) es invertible y \( f^{-1}(y)=\frac{L(y+1)}{2}-1 \)`, String.raw`\( f \) no es invertible`],
            ans: 0,
            exp: String.raw`\( e^{2x+1}=y+1 \Rightarrow 2x+1=L(y+1) \Rightarrow x=\frac{L(y+1)-1}{2} \). Chequeo: \( f(-\frac12)=e^0-1=0 \) y la fórmula da \( \frac{L(1)-1}{2}=-\frac12 \). La tercera divide solo al logaritmo por 2: da \( -1 \) en \( y=0 \).`,
        },
        {
            t: "t3",
            s: "t3.2",
            q: String.raw`Sea \( f:(1,+\infty)\to\mathbb R \) tal que \( f(x)=2L(x-1)+3 \). Entonces:`,
            opts: [String.raw`\( f \) es invertible y \( f^{-1}(y)=e^{\frac{y+3}{2}}+1 \)`, String.raw`\( f \) es invertible y \( f^{-1}(y)=e^{\frac{y-3}{2}}+1 \)`, String.raw`\( f \) es invertible y \( f^{-1}(y)=e^{\frac{y-3}{2}}-1 \)`, String.raw`\( f \) no es invertible`],
            ans: 1,
            exp: String.raw`\( L(x-1)=\frac{y-3}2 \Rightarrow x-1=e^{\frac{y-3}2} \Rightarrow x=e^{\frac{y-3}2}+1 \). Chequeo: \( f(2)=2L(1)+3=3 \) y la fórmula da \( e^0+1=2 \). Las otras dan \( e^3+1 \) y 0.`,
        },
        {
            t: "t3",
            s: "t3.2",
            q: String.raw`Sea \( f:\mathbb R\to(0,+\infty) \) tal que \( f(x)=e^{3-2x} \). Entonces:`,
            opts: [String.raw`\( f \) es invertible y \( f^{-1}(y)=\frac{3+L(y)}{2} \)`, String.raw`\( f \) es invertible y \( f^{-1}(y)=\frac{L(y)-3}{2} \)`, String.raw`\( f \) es invertible y \( f^{-1}(y)=\frac{3-L(y)}{2} \)`, String.raw`\( f \) no es invertible`],
            ans: 2,
            exp: String.raw`\( 3-2x=L(y) \Rightarrow x=\frac{3-L(y)}{2} \). Chequeo con \( f(1)=e^{1}=e \): la fórmula correcta da \( \frac{3-1}{2}=1 \); la primera da 2 y la segunda \( -1 \).`,
        },
        {
            t: "t3",
            s: "t3.2",
            q: String.raw`Sea \( f:(0,+\infty)\to\mathbb R \) tal que \( f(x)=1-L(2x) \). Entonces:`,
            opts: [String.raw`\( f \) es invertible y \( f^{-1}(y)=2e^{1-y} \)`, String.raw`\( f \) es invertible y \( f^{-1}(y)=\frac{e^{1-y}}{2} \)`, String.raw`\( f \) es invertible y \( f^{-1}(y)=\frac{e^{y-1}}{2} \)`, String.raw`\( f \) no es invertible`],
            ans: 1,
            exp: String.raw`\( L(2x)=1-y \Rightarrow 2x=e^{1-y} \Rightarrow x=\frac{e^{1-y}}2 \). Chequeo: \( f(\frac12)=1-L(1)=1 \), y \( \frac{e^0}{2}=\frac12 \). La primera multiplica por 2 en vez de dividir.`,
        },
        {
            t: "t3",
            s: "t3.2",
            q: String.raw`Sea \( f:\mathbb R\to\mathbb R \) tal que \( f(x)=e^{x}+2 \). Entonces:`,
            opts: [String.raw`\( f \) es invertible y \( f^{-1}(y)=L(y-2) \)`, String.raw`\( f \) es invertible y \( f^{-1}(y)=L(y)-2 \)`, String.raw`\( f \) es invertible y \( f^{-1}(y)=L(y+2) \)`, String.raw`\( f \) no es invertible`],
            ans: 3,
            exp: String.raw`\( f \) es inyectiva, pero su imagen es \( (2,+\infty) \) y el codominio dado es \( \mathbb R \): no es sobreyectiva, así que no es invertible entre esos conjuntos. \( L(y-2) \) sería la inversa si el codominio fuera \( (2,+\infty) \); fijate que no está definida para \( y\le2 \).`,
        },
        {
            t: "t3",
            s: "t3.2",
            q: String.raw`Sea \( f:[0,+\infty)\to[1,+\infty) \) tal que \( f(x)=e^{x^2} \). Entonces:`,
            opts: [String.raw`\( f \) es invertible y \( f^{-1}(y)=\sqrt{L(y)} \)`, String.raw`\( f \) es invertible y \( f^{-1}(y)=-\sqrt{L(y)} \)`, String.raw`\( f \) es invertible y \( f^{-1}(y)=L(\sqrt y) \)`, String.raw`\( f \) no es invertible`],
            ans: 0,
            exp: String.raw`En \( [0,+\infty) \), \( x^2 \) crece, así que \( f \) crece desde \( f(0)=1 \): es biyectiva. \( x^2=L(y) \) y como \( x\ge0 \), \( x=\sqrt{L(y)} \). La opción con \( -\sqrt{\ } \) da valores negativos, fuera del dominio.`,
        },
        {
            t: "t3",
            s: "t3.3",
            q: String.raw`Sea \( f:[1,+\infty)\to[2,+\infty) \) tal que \( f(x)=(x-1)^2+2 \). Entonces:`,
            opts: [String.raw`\( f \) es invertible y \( f^{-1}(y)=1-\sqrt{y-2} \)`, String.raw`\( f \) es invertible y \( f^{-1}(y)=1+\sqrt{y-2} \)`, String.raw`\( f \) es invertible y \( f^{-1}(y)=1+\sqrt{y+2} \)`, String.raw`\( f \) no es invertible`],
            ans: 1,
            exp: String.raw`\( (x-1)^2=y-2 \) y, como \( x\ge1 \), \( x-1=+\sqrt{y-2} \). Chequeo: \( f(3)=6 \) y \( 1+\sqrt4=3 \). Con \( 1-\sqrt{\ } \) daría \( -1 \), fuera del dominio.`,
        },
        {
            t: "t3",
            s: "t3.3",
            q: String.raw`Sea \( f:(-\infty,2]\to[-1,+\infty) \) tal que \( f(x)=(x-2)^2-1 \). Entonces:`,
            opts: [String.raw`\( f \) es invertible y \( f^{-1}(y)=2+\sqrt{y+1} \)`, String.raw`\( f \) es invertible y \( f^{-1}(y)=2-\sqrt{y-1} \)`, String.raw`\( f \) es invertible y \( f^{-1}(y)=2-\sqrt{y+1} \)`, String.raw`\( f \) no es invertible`],
            ans: 2,
            exp: String.raw`\( (x-2)^2=y+1 \) y, como \( x\le2 \), \( x-2=-\sqrt{y+1} \). Chequeo: \( f(0)=3 \) y \( 2-\sqrt4=0 \). La primera da 4, fuera del dominio.`,
        },
        {
            t: "t3",
            s: "t3.3",
            q: String.raw`Sea \( f:[0,1]\to[0,1] \) tal que \( f(x)=\sqrt{1-x^2} \). Entonces:`,
            opts: [String.raw`\( f \) es invertible y \( f^{-1}(y)=\sqrt{1-y^2} \)`, String.raw`\( f \) es invertible y \( f^{-1}(y)=\sqrt{1+y^2} \)`, String.raw`\( f \) es invertible y \( f^{-1}(y)=1-y^2 \)`, String.raw`\( f \) no es invertible`],
            ans: 0,
            exp: String.raw`En \( [0,1] \), \( f \) decrece de 1 a 0: biyectiva. \( y^2=1-x^2 \Rightarrow x^2=1-y^2 \) y \( x\ge0 \): \( x=\sqrt{1-y^2} \). Chequeo: \( f(0)=1 \) y \( \sqrt{1-1}=0 \). \( 1-y^2 \) olvida la raíz: da \( \frac34 \) en \( y=\frac12 \) en lugar de \( \frac{\sqrt3}2 \).`,
        },
        {
            t: "t3",
            s: "t3.3",
            q: String.raw`Sea \( f:(-\infty,0]\to[1,+\infty) \) tal que \( f(x)=x^2+1 \). Entonces \( f^{-1}(y) \) es:`,
            opts: [String.raw`\( \sqrt{y-1} \)`, String.raw`\( -\sqrt{y+1} \)`, String.raw`\( \sqrt{1-y} \)`, String.raw`\( -\sqrt{y-1} \)`],
            ans: 3,
            exp: String.raw`\( x^2=y-1 \) y, como \( x\le0 \), \( x=-\sqrt{y-1} \). Chequeo: \( f(-2)=5 \) y \( -\sqrt4=-2 \). \( \sqrt{1-y} \) ni siquiera está definida para \( y\gt1 \).`,
        },
        {
            t: "t3",
            s: "t3.3",
            q: String.raw`Sea \( f:[-1,2]\to[0,4] \) tal que \( f(x)=x^2 \). Entonces:`,
            opts: [String.raw`\( f \) es invertible y \( f^{-1}(y)=\sqrt y \)`, String.raw`\( f \) es invertible y \( f^{-1}(y)=-\sqrt y \)`, String.raw`\( f \) es invertible y \( f^{-1}(y)=y^2 \)`, String.raw`\( f \) no es invertible`],
            ans: 3,
            exp: String.raw`La imagen es \( [0,4] \), así que es sobreyectiva, pero el dominio contiene al vértice \( x=0 \): \( f(-1)=f(1)=1 \), no es inyectiva. \( \sqrt y \) nunca devuelve los \( x \) negativos del dominio.`,
        },
        {
            t: "t3",
            s: "t3.4",
            q: String.raw`Sea \( f:[0,+\infty)\to B \) tal que \( f(x)=2-e^{-x} \). \( f \) es invertible si \( B \) es:`,
            opts: [String.raw`\( [1,2) \)`, String.raw`\( (1,2] \)`, String.raw`\( [1,2] \)`, String.raw`\( [0,2) \)`],
            ans: 0,
            exp: String.raw`\( -e^{-x} \) crece, así que \( f \) crece: \( f(0)=1 \) (incluido) y \( f\to2 \) cuando \( x\to+\infty \) sin alcanzarlo. \( B=[1,2) \). \( [0,2) \) usa \( e^0=0 \) por error.`,
        },
        {
            t: "t3",
            s: "t3.4",
            q: String.raw`Sea \( f:(-1,+\infty)\to\mathbb R \), \( f(x)=L(x+1) \), invertible. El recorrido de \( f^{-1} \) es:`,
            opts: [String.raw`\( \mathbb R \)`, String.raw`\( (0,+\infty) \)`, String.raw`\( (1,+\infty) \)`, String.raw`\( (-1,+\infty) \)`],
            ans: 3,
            exp: String.raw`El recorrido de \( f^{-1} \) es el dominio de \( f \): \( (-1,+\infty) \). \( \mathbb R \) es su dominio. Se ve también en la fórmula: \( f^{-1}(y)=e^y-1\gt-1 \).`,
        },
        {
            t: "t3",
            s: "t3.4",
            q: String.raw`Si \( f:A\to B \) es invertible y \( f^{-1}(y)=L(y-3)+1 \), entonces \( B \) es:`,
            opts: [String.raw`\( (1,+\infty) \)`, String.raw`\( (3,+\infty) \)`, String.raw`\( \mathbb R \)`, String.raw`\( (-3,+\infty) \)`],
            ans: 1,
            exp: String.raw`\( B \) es el dominio de \( f^{-1} \), y \( L(y-3) \) exige \( y\gt3 \). (De hecho \( f(x)=e^{x-1}+3 \), con imagen \( (3,+\infty) \).)`,
        },
        {
            t: "t3",
            s: "t3.4",
            q: String.raw`Sea \( f:[2,+\infty)\to[1,+\infty) \), \( f(x)=(x-2)^2+1 \). Entonces \( f^{-1}(5) \) vale:`,
            opts: [String.raw`\( 0 \)`, String.raw`\( 26 \)`, String.raw`\( 4 \)`, String.raw`\( 3 \)`],
            ans: 2,
            exp: String.raw`\( (x-2)^2=4 \Rightarrow x=0 \) o \( x=4 \); solo 4 está en el dominio \( [2,+\infty) \). 26 es \( f(5) \), no \( f^{-1}(5) \).`,
        },
        {
            t: "t3",
            s: "t3.4",
            q: String.raw`Sea \( f:(0,1]\to B \), \( f(x)=-L(x) \). \( f \) es invertible si \( B \) es:`,
            opts: [String.raw`\( [0,+\infty) \)`, String.raw`\( (0,+\infty) \)`, String.raw`\( \mathbb R \)`, String.raw`\( (-\infty,0] \)`],
            ans: 0,
            exp: String.raw`\( -L \) decrece: en \( x=1 \) vale 0 (incluido, porque el 1 está en el dominio) y cuando \( x\to0^+ \) tiende a \( +\infty \). \( B=[0,+\infty) \). \( (-\infty,0] \) es la imagen de \( L \) sin el signo menos.`,
        },
        {
            t: "t3",
            s: "t3.5",
            q: String.raw`Sea \( f:(0,\frac\pi2]\to U \) tal que \( f(x)=\cos(x) \). \( f \) es invertible si \( U \) es:`,
            opts: [String.raw`\( (0,1] \)`, String.raw`\( [0,1] \)`, String.raw`\( (0,1) \)`, String.raw`\( [0,1) \)`],
            ans: 3,
            exp: String.raw`\( \cos \) decrece de \( \cos0=1 \) (el 0 no está: 1 excluido) a \( \cos\frac\pi2=0 \) (incluido). Ordenado: \( [0,1) \). \( (0,1] \) pone los corchetes al revés.`,
        },
        {
            t: "t3",
            s: "t3.5",
            q: String.raw`Sea \( f:[\frac\pi2,\frac{3\pi}2)\to U \) tal que \( f(x)=\text{sen}(x) \). \( f \) es invertible si \( U \) es:`,
            opts: [String.raw`\( [-1,1) \)`, String.raw`\( (-1,1] \)`, String.raw`\( [-1,1] \)`, String.raw`\( (-1,1) \)`],
            ans: 1,
            exp: String.raw`\( \text{sen} \) decrece en ese intervalo, de \( \text{sen}\frac\pi2=1 \) (incluido) a \( \text{sen}\frac{3\pi}2=-1 \) (excluido). \( U=(-1,1] \).`,
        },
        {
            t: "t3",
            s: "t3.5",
            q: String.raw`Sea \( f:[\pi,\frac{3\pi}2)\to U \) tal que \( f(x)=\cos(x) \). \( f \) es invertible si \( U \) es:`,
            opts: [String.raw`\( (-1,0] \)`, String.raw`\( (0,1] \)`, String.raw`\( [-1,0) \)`, String.raw`\( [0,1) \)`],
            ans: 2,
            exp: String.raw`\( \cos \) crece en \( [\pi,\frac{3\pi}2] \): de \( \cos\pi=-1 \) (incluido) a \( \cos\frac{3\pi}2=0 \) (excluido). \( U=[-1,0) \). \( (0,1] \) es la respuesta para \( -\cos \) en el mismo intervalo.`,
        },
        {
            t: "t3",
            s: "t3.5",
            q: String.raw`Sea \( f:(-\frac\pi2,0]\to U \) tal que \( f(x)=-\text{sen}(x) \). \( f \) es invertible si \( U \) es:`,
            opts: [String.raw`\( [0,1) \)`, String.raw`\( (0,1] \)`, String.raw`\( [-1,0) \)`, String.raw`\( (-1,0] \)`],
            ans: 0,
            exp: String.raw`\( \text{sen} \) va de \( -1 \) (excluido) a 0 (incluido); cambiando el signo, \( -\text{sen} \) va de 1 (excluido) a 0 (incluido): \( U=[0,1) \). \( (-1,0] \) olvida el signo menos.`,
        },
        {
            t: "t3",
            s: "t3.5",
            q: String.raw`Sea \( f:[0,\pi)\to U \) tal que \( f(x)=2\cos(x)+1 \). \( f \) es invertible si \( U \) es:`,
            opts: [String.raw`\( [-1,3) \)`, String.raw`\( (-1,3) \)`, String.raw`\( (1,3] \)`, String.raw`\( (-1,3] \)`],
            ans: 3,
            exp: String.raw`\( \cos \) decrece de 1 (incluido) a \( -1 \) (excluido); \( 2\cos x+1 \) va de 3 (incluido) a \( -1 \) (excluido). \( U=(-1,3] \).`,
        },
        {
            t: "t3",
            s: "t3.5",
            q: String.raw`Sea \( f:[0,\frac{3\pi}2)\to U \) tal que \( f(x)=\cos(x) \). Entonces:`,
            opts: [String.raw`\( f \) es invertible si \( U=[-1,1] \)`, String.raw`\( f \) no es invertible para ningún \( U \)`, String.raw`\( f \) es invertible si \( U=(-1,1] \)`, String.raw`\( f \) es invertible si \( U=[-1,0) \)`],
            ans: 1,
            exp: String.raw`\( \cos \) baja de 1 a \( -1 \) en \( [0,\pi] \) y sube hasta 0 en \( [\pi,\frac{3\pi}2) \). Por ejemplo \( \cos\frac{2\pi}3=\cos\frac{4\pi}3=-\frac12 \): no es inyectiva, y ningún codominio arregla eso.`,
        },
        {
            t: "t3",
            s: "t3.6",
            q: String.raw`Sea \( f:(-\infty,1]\to U \) tal que \( f(x)=\text{Arctg}(x) \). \( f \) es invertible si \( U \) es:`,
            opts: [String.raw`\( [-\frac\pi2,\frac\pi4] \)`, String.raw`\( (-\frac\pi2,\frac\pi4) \)`, String.raw`\( (-\frac\pi2,\frac\pi4] \)`, String.raw`\( (-\infty,\frac\pi4] \)`],
            ans: 2,
            exp: String.raw`\( \text{Arctg} \) es creciente. En \( -\infty \) tiende a \( -\frac\pi2 \) sin alcanzarlo (abierto) y en 1 vale \( \frac\pi4 \), que se alcanza (cerrado).`,
        },
        {
            t: "t3",
            s: "t3.6",
            q: String.raw`Sea \( f:(-1,\sqrt3]\to U \) tal que \( f(x)=\text{Arctg}(x) \). \( f \) es invertible si \( U \) es:`,
            opts: [String.raw`\( (-\frac\pi4,\frac\pi3] \)`, String.raw`\( [-\frac\pi4,\frac\pi3) \)`, String.raw`\( (-\frac\pi4,\frac\pi6] \)`, String.raw`\( (-\frac\pi2,\frac\pi3] \)`],
            ans: 0,
            exp: String.raw`Creciente, así que conserva los corchetes: \( \text{Arctg}(-1)=-\frac\pi4 \) abierto y \( \text{Arctg}(\sqrt3)=\frac\pi3 \) cerrado. \( \frac\pi6 \) confunde \( \text{Arctg}(\sqrt3) \) con \( \text{Arctg}(\frac{1}{\sqrt3}) \).`,
        },
        {
            t: "t3",
            s: "t3.6",
            q: String.raw`\( \text{Arcsen}\left(\frac12\right) \) vale:`,
            opts: [String.raw`\( \frac\pi3 \)`, String.raw`\( \frac{5\pi}6 \)`, String.raw`\( \frac\pi4 \)`, String.raw`\( \frac\pi6 \)`],
            ans: 3,
            exp: String.raw`Es el ángulo de \( [-\frac\pi2,\frac\pi2] \) cuyo seno es \( \frac12 \): \( \frac\pi6 \). \( \frac{5\pi}6 \) también tiene seno \( \frac12 \), pero está fuera de la ventana de \( \text{Arcsen} \). \( \frac\pi3 \) es \( \text{Arccos}(\frac12) \).`,
        },
        {
            t: "t3",
            s: "t3.6",
            q: String.raw`La derivada de \( \text{Arccos}(x) \) en \( x=0 \) vale:`,
            opts: [String.raw`\( 1 \)`, String.raw`\( -1 \)`, String.raw`\( 0 \)`, String.raw`\( -\frac\pi2 \)`],
            ans: 1,
            exp: String.raw`\( (\text{Arccos}\,x)'=-\frac1{\sqrt{1-x^2}} \), que en 0 da \( -1 \). Tiene sentido: \( \text{Arccos} \) es decreciente. El 1 es la derivada de \( \text{Arcsen} \).`,
        },
        {
            t: "t3",
            s: "t3.6",
            q: String.raw`Sea \( f:[0,+\infty)\to U \) tal que \( f(x)=-\text{Arctg}(x) \). \( f \) es invertible si \( U \) es:`,
            opts: [String.raw`\( [-\frac\pi2,0) \)`, String.raw`\( (-\frac\pi2,0) \)`, String.raw`\( (-\frac\pi2,0] \)`, String.raw`\( [0,\frac\pi2) \)`],
            ans: 2,
            exp: String.raw`\( \text{Arctg} \) va de 0 (incluido) a \( \frac\pi2 \) (no alcanzado); con el signo, \( -\text{Arctg} \) va de 0 (incluido) a \( -\frac\pi2 \) (no alcanzado). Ordenado: \( (-\frac\pi2,0] \). \( [0,\frac\pi2) \) olvida el signo.`,
        },
        {
            t: "t4",
            s: "t4.1",
            q: String.raw`Sea \( f \) derivable e invertible con \( f(1)=3 \) y \( f'(1)=5 \). Entonces \( (f^{-1})'(3) \) vale:`,
            opts: [String.raw`\( \frac15 \)`, String.raw`\( 5 \)`, String.raw`\( \frac13 \)`, String.raw`\( 3 \)`],
            ans: 0,
            exp: String.raw`\( f^{-1}(3)=1 \), así que \( (f^{-1})'(3)=\frac1{f'(1)}=\frac15 \). El 5 olvida invertir y \( \frac13 \) invierte el valor de \( f \), no el de su derivada.`,
        },
        {
            t: "t4",
            s: "t4.1",
            q: String.raw`Sea \( f \) derivable e invertible con \( f(0)=2 \) y \( f'(0)=-4 \). Entonces \( (f^{-1})'(2) \) vale:`,
            opts: [String.raw`\( \frac14 \)`, String.raw`\( -4 \)`, String.raw`\( \frac12 \)`, String.raw`\( -\frac14 \)`],
            ans: 3,
            exp: String.raw`\( (f^{-1})'(2)=\frac1{f'(0)}=-\frac14 \). El signo se conserva: \( f \) es decreciente cerca de 0 y su inversa también. \( \frac12 \) invierte \( f(0) \).`,
        },
        {
            t: "t4",
            s: "t4.1",
            q: String.raw`Sea \( f(x)=x^3 \). La derivada de \( f^{-1} \) en 0:`,
            opts: [String.raw`vale 0`, String.raw`no existe, porque \( f'(0)=0 \)`, String.raw`vale \( \frac13 \)`, String.raw`vale 3`],
            ans: 1,
            exp: String.raw`\( (f^{-1})'(0)=\frac1{f'(0)} \) y \( f'(0)=0 \): la fórmula no se puede aplicar. En efecto, \( f^{-1}(x)=\sqrt[3]x \) tiene tangente vertical en 0.`,
        },
        {
            t: "t4",
            s: "t4.1",
            q: String.raw`La recta tangente al gráfico de \( f \) (invertible) en el punto \( (2,5) \) tiene pendiente 3. La recta tangente al gráfico de \( f^{-1} \) en \( (5,2) \) tiene pendiente:`,
            opts: [String.raw`\( 3 \)`, String.raw`\( -3 \)`, String.raw`\( \frac13 \)`, String.raw`\( \frac25 \)`],
            ans: 2,
            exp: String.raw`Al reflejar en \( y=x \) las pendientes se invierten: \( (f^{-1})'(5)=\frac1{f'(2)}=\frac13 \). \( \frac25 \) es la pendiente de la recta que une el origen con el punto.`,
        },
        {
            t: "t4",
            s: "t4.1",
            q: String.raw`Sea \( f \) derivable e invertible con \( f(3)=1 \), \( f(1)=3 \), \( f'(3)=2 \) y \( f'(1)=6 \). Entonces \( (f^{-1})'(3) \) vale:`,
            opts: [String.raw`\( \frac16 \)`, String.raw`\( \frac12 \)`, String.raw`\( 6 \)`, String.raw`\( 2 \)`],
            ans: 0,
            exp: String.raw`Para \( (f^{-1})'(3) \) necesitás \( f^{-1}(3) \): como \( f(1)=3 \), es 1. Entonces \( \frac1{f'(1)}=\frac16 \). \( \frac12 \) es el error de evaluar \( f' \) en 3, el mismo número del que se pide la derivada.`,
        },
        {
            t: "t4",
            s: "t4.2",
            q: String.raw`Sea \( f:\mathbb R\to\mathbb R \) tal que \( f(x)=x^3+2x+1 \), invertible. Entonces:`,
            opts: [String.raw`\( f^{-1}(1)=0 \) y \( (f^{-1})'(1)=\frac12 \)`, String.raw`\( f^{-1}(0)=1 \) y \( (f^{-1})'(0)=\frac12 \)`, String.raw`\( f^{-1}(1)=0 \) y \( (f^{-1})'(1)=2 \)`, String.raw`Ninguna de las otras opciones es correcta`],
            ans: 0,
            exp: String.raw`\( f(0)=1 \Rightarrow f^{-1}(1)=0 \). \( f'(x)=3x^2+2 \), \( f'(0)=2 \), así que \( (f^{-1})'(1)=\frac12 \). La segunda da vuelta el punto y la tercera no invierte.`,
        },
        {
            t: "t4",
            s: "t4.2",
            q: String.raw`Sea \( f:(0,+\infty)\to\mathbb R \) tal que \( f(x)=x^2+3L(x) \), invertible. Entonces:`,
            opts: [String.raw`\( f^{-1}(1)=1 \) y \( (f^{-1})'(1)=\frac12 \)`, String.raw`\( f^{-1}(1)=1 \) y \( (f^{-1})'(1)=5 \)`, String.raw`\( f^{-1}(1)=1 \) y \( (f^{-1})'(1)=\frac15 \)`, String.raw`Ninguna de las otras opciones es correcta`],
            ans: 2,
            exp: String.raw`Con \( L(x) \) el punto cómodo es 1: \( f(1)=1+0=1 \). \( f'(x)=2x+\frac3x \), \( f'(1)=5 \): \( (f^{-1})'(1)=\frac15 \). \( \frac12 \) olvida el término \( \frac3x \).`,
        },
        {
            t: "t4",
            s: "t4.2",
            q: String.raw`Sea \( f:\mathbb R\to\mathbb R \) tal que \( f(x)=e^{3x}+x \), invertible. Entonces:`,
            opts: [String.raw`\( f^{-1}(1)=0 \) y \( (f^{-1})'(1)=\frac12 \)`, String.raw`\( f^{-1}(1)=0 \) y \( (f^{-1})'(1)=\frac14 \)`, String.raw`\( f^{-1}(0)=1 \) y \( (f^{-1})'(0)=\frac14 \)`, String.raw`Ninguna de las otras opciones es correcta`],
            ans: 1,
            exp: String.raw`\( f(0)=1 \), \( f'(x)=3e^{3x}+1 \), \( f'(0)=4 \): \( (f^{-1})'(1)=\frac14 \). \( \frac12 \) sale de derivar \( e^{3x} \) como \( e^{3x} \), sin la cadena.`,
        },
        {
            t: "t4",
            s: "t4.2",
            q: String.raw`Sea \( f:\mathbb R\to\mathbb R \) tal que \( f(x)=2x-e^{-x} \), invertible. Entonces:`,
            opts: [String.raw`\( f^{-1}(1)=0 \) y \( (f^{-1})'(1)=\frac13 \)`, String.raw`\( f^{-1}(-1)=0 \) y \( (f^{-1})'(-1)=1 \)`, String.raw`\( f^{-1}(0)=-1 \) y \( (f^{-1})'(0)=\frac13 \)`, String.raw`Ninguna de las otras opciones es correcta`],
            ans: 3,
            exp: String.raw`\( f(0)=0-1=-1 \Rightarrow f^{-1}(-1)=0 \). \( f'(x)=2+e^{-x} \), \( f'(0)=3 \), así que \( (f^{-1})'(-1)=\frac13 \). Esa combinación no está: la primera tiene el punto mal, la segunda usa \( f'(0)=2-1 \) (signo de la cadena) y la tercera da vuelta el punto.`,
        },
        {
            t: "t4",
            s: "t4.2",
            q: String.raw`Sea \( f:\mathbb R\to\mathbb R \) tal que \( f(x)=e^{-2x}-x^3-x \), invertible. Entonces:`,
            opts: [String.raw`\( f^{-1}(1)=0 \) y \( (f^{-1})'(1)=-\frac13 \)`, String.raw`\( f^{-1}(1)=0 \) y \( (f^{-1})'(1)=\frac13 \)`, String.raw`\( f^{-1}(1)=0 \) y \( (f^{-1})'(1)=-3 \)`, String.raw`Ninguna de las otras opciones es correcta`],
            ans: 0,
            exp: String.raw`\( f(0)=1 \). \( f'(x)=-2e^{-2x}-3x^2-1 \), \( f'(0)=-3 \): \( (f^{-1})'(1)=-\frac13 \). La función es decreciente, así que la derivada de la inversa tiene que ser negativa: la segunda opción se descarta sin cuentas.`,
        },
        {
            t: "t4",
            s: "t4.2",
            q: String.raw`Sea \( f:\mathbb R\to\mathbb R \) tal que \( f(x)=\text{Arctg}(2x)+x^3+3x \), invertible. Entonces:`,
            opts: [String.raw`\( f^{-1}(0)=0 \) y \( (f^{-1})'(0)=\frac14 \)`, String.raw`\( f^{-1}(0)=0 \) y \( (f^{-1})'(0)=5 \)`, String.raw`\( f^{-1}(0)=0 \) y \( (f^{-1})'(0)=\frac15 \)`, String.raw`Ninguna de las otras opciones es correcta`],
            ans: 2,
            exp: String.raw`\( f(0)=0 \). \( f'(x)=\frac{2}{1+4x^2}+3x^2+3 \), \( f'(0)=2+3=5 \): \( (f^{-1})'(0)=\frac15 \). \( \frac14 \) olvida el 2 de la cadena en \( \text{Arctg}(2x) \).`,
        },
        {
            t: "t4",
            s: "t4.3",
            q: String.raw`Sea \( f:\mathbb R\to\mathbb R \) derivable e invertible tal que \( f(2)=5 \) y \( f'(2)=3 \). Sea \( g(x)=\big(f^{-1}(x)\big)^2 \). Entonces \( g'(5) \) es:`,
            opts: [String.raw`\( \frac{10}3 \)`, String.raw`\( 12 \)`, String.raw`\( \frac23 \)`, String.raw`\( \frac43 \)`],
            ans: 3,
            exp: String.raw`\( g'(5)=2f^{-1}(5)\cdot(f^{-1})'(5)=2\cdot2\cdot\frac13=\frac43 \). \( \frac{10}3 \) usa 5 en vez de \( f^{-1}(5)=2 \); 12 no invierte \( f'(2) \); \( \frac23 \) olvida el factor 2 de la potencia.`,
        },
        {
            t: "t4",
            s: "t4.3",
            q: String.raw`Sea \( f:\mathbb R\to\mathbb R \) derivable e invertible tal que \( f(1)=4 \) y \( f'(1)=\frac12 \). Sea \( g(x)=\big(f^{-1}(x)\big)^3 \). Entonces \( g'(4) \) es:`,
            opts: [String.raw`\( \frac32 \)`, String.raw`\( 6 \)`, String.raw`\( 96 \)`, String.raw`\( 2 \)`],
            ans: 1,
            exp: String.raw`\( f^{-1}(4)=1 \), \( (f^{-1})'(4)=2 \). \( g'(4)=3\cdot1^2\cdot2=6 \). \( \frac32 \) usa \( f'(1) \) sin invertir y 96 eleva 4 en lugar de 1.`,
        },
        {
            t: "t4",
            s: "t4.3",
            q: String.raw`Sea \( f:\mathbb R\to(0,+\infty) \) derivable e invertible tal que \( f(9)=2 \) y \( f'(9)=\frac13 \). Sea \( g(x)=\sqrt{f^{-1}(x)} \). Entonces \( g'(2) \) es:`,
            opts: [String.raw`\( \frac1{18} \)`, String.raw`\( \frac{3}{2\sqrt2} \)`, String.raw`\( \frac12 \)`, String.raw`\( 2 \)`],
            ans: 2,
            exp: String.raw`\( f^{-1}(2)=9 \), \( (f^{-1})'(2)=3 \). \( g'(2)=\frac{1}{2\sqrt9}\cdot3=\frac12 \). \( \frac1{18} \) usa \( \frac13 \) sin invertir; \( \frac{3}{2\sqrt2} \) pone \( \sqrt2 \) (el \( b \)) en lugar de \( \sqrt9 \).`,
        },
        {
            t: "t4",
            s: "t4.3",
            q: String.raw`Sea \( f:\mathbb R\to\mathbb R \) derivable e invertible tal que \( f(2)=1 \) y \( f'(2)=4 \). Sea \( g(x)=\frac{1}{f^{-1}(x)} \). Entonces \( g'(1) \) es:`,
            opts: [String.raw`\( -\frac1{16} \)`, String.raw`\( \frac1{16} \)`, String.raw`\( -\frac14 \)`, String.raw`\( -1 \)`],
            ans: 0,
            exp: String.raw`\( g'(x)=-\frac{(f^{-1})'(x)}{(f^{-1}(x))^2} \). En 1: \( f^{-1}(1)=2 \), \( (f^{-1})'(1)=\frac14 \): \( g'(1)=-\frac{1/4}{4}=-\frac1{16} \). Perder el signo menos da \( \frac1{16} \); poner \( b=1 \) en el denominador da \( -\frac14 \); usar \( f'(2)=4 \) sin invertir da \( -\frac44=-1 \).`,
        },
        {
            t: "t4",
            s: "t4.3",
            q: String.raw`Sea \( f:\mathbb R\to\mathbb R \) derivable e invertible tal que \( f(8)=3 \) y \( f'(8)=\frac16 \). Sea \( g(x)=\sqrt[3]{f^{-1}(x)} \). Entonces \( g'(3) \) es:`,
            opts: [String.raw`\( \frac1{72} \)`, String.raw`\( 2 \)`, String.raw`\( \frac{2}{\sqrt[3]{9}} \)`, String.raw`\( \frac12 \)`],
            ans: 3,
            exp: String.raw`\( f^{-1}(3)=8 \), \( (f^{-1})'(3)=6 \). \( g'(3)=\frac{1}{3\sqrt[3]{64}}\cdot6=\frac{6}{12}=\frac12 \). \( \frac1{72} \) usa \( \frac16 \) sin invertir; \( \frac2{\sqrt[3]9} \) pone \( b=3 \) adentro de la raíz.`,
        },
        {
            t: "t4",
            s: "t4.3",
            q: String.raw`Sea \( f:\mathbb R\to\mathbb R \) derivable e invertible tal que \( f(-1)=2 \) y \( f'(-1)=2 \). Sea \( g(x)=\big(f^{-1}(x)\big)^2 \). Entonces \( g(2)+g'(2) \) es:`,
            opts: [String.raw`\( -1 \)`, String.raw`\( 0 \)`, String.raw`\( 2 \)`, String.raw`\( 1 \)`],
            ans: 1,
            exp: String.raw`\( f^{-1}(2)=-1 \). \( g(2)=(-1)^2=1 \) y \( g'(2)=2\cdot(-1)\cdot\frac12=-1 \). Suma: 0. \( -1 \) es solo \( g'(2) \) (olvida sumar \( g(2) \)); 2 pierde el signo de \( f^{-1}(2) \).`,
        },
        {
            t: "t4",
            s: "t4.4",
            q: String.raw`Sea \( f:\mathbb R\to(0,+\infty) \) derivable e invertible tal que \( f(2)=3 \) y \( f'(2)=4 \). Sea \( g(x)=L\big(f^{-1}(x)\big) \). Entonces \( g'(3) \) es:`,
            opts: [String.raw`\( \frac1{12} \)`, String.raw`\( 2 \)`, String.raw`\( \frac18 \)`, String.raw`\( \frac12 \)`],
            ans: 2,
            exp: String.raw`\( g'(3)=\frac{(f^{-1})'(3)}{f^{-1}(3)}=\frac{1/4}{2}=\frac18 \). \( \frac1{12} \) divide entre 3 (el \( b \)) y 2 usa \( f'(2) \) sin invertir.`,
        },
        {
            t: "t4",
            s: "t4.4",
            q: String.raw`Sea \( f \) derivable e invertible tal que \( f(e)=2 \) y \( f'(e)=\frac1e \). Sea \( g(x)=L\big(f^{-1}(x)\big) \). Entonces \( g(2)+g'(2) \) es:`,
            opts: [String.raw`\( 2 \)`, String.raw`\( 1 \)`, String.raw`\( 1+\frac1{e^2} \)`, String.raw`\( e \)`],
            ans: 0,
            exp: String.raw`\( f^{-1}(2)=e \), así que \( g(2)=L(e)=1 \). \( (f^{-1})'(2)=e \) y \( g'(2)=\frac{e}{e}=1 \). Total 2. El 1 olvida \( g(2) \) (o \( g'(2) \)); \( 1+\frac1{e^2} \) no invierte \( f'(e) \).`,
        },
        {
            t: "t4",
            s: "t4.4",
            q: String.raw`Sea \( f:\mathbb R\to\mathbb R \) derivable e invertible tal que \( f(0)=2 \) y \( f'(0)=5 \). Sea \( g(x)=e^{f^{-1}(x)} \). Entonces \( g'(2) \) es:`,
            opts: [String.raw`\( \frac{e^2}5 \)`, String.raw`\( 5 \)`, String.raw`\( \frac{e}{5} \)`, String.raw`\( \frac15 \)`],
            ans: 3,
            exp: String.raw`\( g'(2)=e^{f^{-1}(2)}\cdot(f^{-1})'(2)=e^{0}\cdot\frac15=\frac15 \). \( \frac{e^2}5 \) pone el 2 (el \( b \)) en el exponente.`,
        },
        {
            t: "t4",
            s: "t4.4",
            q: String.raw`Sea \( f:\mathbb R\to\mathbb R \) derivable e invertible tal que \( f(1)=3 \) y \( f'(1)=2 \). Sea \( g(x)=x\,f^{-1}(x) \). Entonces \( g'(3) \) es:`,
            opts: [String.raw`\( \frac32 \)`, String.raw`\( \frac52 \)`, String.raw`\( 7 \)`, String.raw`\( \frac12 \)`],
            ans: 1,
            exp: String.raw`Producto: \( g'(x)=f^{-1}(x)+x\,(f^{-1})'(x) \). En 3: \( 1+3\cdot\frac12=\frac52 \). \( \frac32 \) olvida el primer término de la regla del producto; 7 no invierte \( f'(1) \).`,
        },
        {
            t: "t4",
            s: "t4.4",
            q: String.raw`Sea \( f:\mathbb R\to\mathbb R \) derivable e invertible tal que \( f(2)=4 \) y \( f'(2)=8 \). Sea \( g(x)=\frac{f^{-1}(x)}{x} \). Entonces \( g'(4) \) es:`,
            opts: [String.raw`\( \frac5{32} \)`, String.raw`\( -\frac18 \)`, String.raw`\( -\frac3{32} \)`, String.raw`\( \frac1{32} \)`],
            ans: 2,
            exp: String.raw`\( g'(x)=\frac{(f^{-1})'(x)\,x-f^{-1}(x)}{x^2} \). En 4: \( \frac{\frac18\cdot4-2}{16}=\frac{-3/2}{16}=-\frac3{32} \). \( \frac5{32} \) suma en el numerador en lugar de restar.`,
        },
        {
            t: "t4",
            s: "t4.4",
            q: String.raw`Sea \( f:\mathbb R\to\mathbb R \) derivable e invertible tal que \( f(3)=4 \) y \( f'(3)=5 \). Sea \( g(x)=f^{-1}(x^2) \). Entonces \( g'(2) \) es:`,
            opts: [String.raw`\( \frac45 \)`, String.raw`\( \frac15 \)`, String.raw`\( \frac25 \)`, String.raw`\( 20 \)`],
            ans: 0,
            exp: String.raw`Cadena: \( g'(x)=(f^{-1})'(x^2)\cdot2x \). En 2: \( (f^{-1})'(4)\cdot4=\frac15\cdot4=\frac45 \). \( \frac15 \) olvida la derivada de \( x^2 \) y \( \frac25 \) la evalúa en 1.`,
        },
        {
            t: "t4",
            s: "t4.5",
            q: String.raw`Sea \( f:\mathbb R\to\mathbb R \) derivable e invertible tal que \( f(2)=2 \) y \( f'(2)=4 \). Sea \( g(x)=f(x)+3f^{-1}(x) \). Entonces \( g'(2) \) es:`,
            opts: [String.raw`\( 16 \)`, String.raw`\( \frac34 \)`, String.raw`\( \frac{13}4 \)`, String.raw`\( \frac{19}4 \)`],
            ans: 3,
            exp: String.raw`\( g'(2)=f'(2)+3(f^{-1})'(2) \). Como \( f(2)=2 \), \( f^{-1}(2)=2 \) y \( (f^{-1})'(2)=\frac14 \). \( g'(2)=4+\frac34=\frac{19}4 \). 16 usa \( 4+3\cdot4 \) sin invertir; \( \frac34 \) olvida el término \( f'(2) \).`,
        },
        {
            t: "t4",
            s: "t4.5",
            q: String.raw`Sea \( f:\mathbb R\to\mathbb R \) derivable e invertible tal que \( f(1)=1 \) y \( f'(1)=\frac13 \). Sea \( g(x)=\big(f^{-1}(x)\big)^2+2f(x) \). Entonces \( g'(1) \) es:`,
            opts: [String.raw`\( \frac43 \)`, String.raw`\( \frac{20}3 \)`, String.raw`\( \frac83 \)`, String.raw`\( 6 \)`],
            ans: 1,
            exp: String.raw`\( g'(1)=2f^{-1}(1)(f^{-1})'(1)+2f'(1)=2\cdot1\cdot3+\frac23=\frac{20}3 \). \( \frac43 \) usa \( \frac13 \) en vez de 3 en la parte de la inversa; 6 olvida el \( 2f'(1) \).`,
        },
        {
            t: "t4",
            s: "t4.5",
            q: String.raw`Sea \( f:\mathbb R\to\mathbb R \) derivable e invertible tal que \( f(0)=3 \) y \( f'(0)=2 \). Sea \( g(x)=f^{-1}(x)+x^2 \). Entonces \( g'(3) \) es:`,
            opts: [String.raw`\( 8 \)`, String.raw`\( \frac12 \)`, String.raw`\( \frac{13}2 \)`, String.raw`\( \frac52 \)`],
            ans: 2,
            exp: String.raw`\( g'(3)=(f^{-1})'(3)+2\cdot3=\frac1{f'(0)}+6=\frac12+6=\frac{13}2 \). 8 no invierte \( f'(0) \) y \( \frac52 \) deriva \( x^2 \) evaluando en 1.`,
        },
        {
            t: "t4",
            s: "t4.5",
            q: String.raw`Sea \( f \) derivable e invertible. Solo se sabe que \( f(1)=2 \) y \( f'(1)=3 \). Sea \( g(x)=f(x)+f^{-1}(x) \). Para calcular \( g'(2) \):`,
            opts: [String.raw`falta conocer \( f'(2) \)`, String.raw`alcanza: \( g'(2)=3+\frac13 \)`, String.raw`alcanza: \( g'(2)=\frac13 \)`, String.raw`alcanza: \( g'(2)=3 \)`],
            ans: 0,
            exp: String.raw`\( g'(2)=f'(2)+(f^{-1})'(2)=f'(2)+\frac13 \). El dato \( f'(1)=3 \) es la derivada en 1, no en 2. Sin \( f'(2) \) no se puede terminar. Por eso en el parcial usan un punto fijo, como \( f(3)=3 \).`,
        },
        {
            t: "t4",
            s: "t4.5",
            q: String.raw`Sea \( f:\mathbb R\to\mathbb R \) derivable e invertible tal que \( f(0)=1 \) y \( f'(0)=4 \). Sea \( g(x)=2f^{-1}(x)+x \). Entonces \( g(1)+g'(1) \) es:`,
            opts: [String.raw`\( \frac32 \)`, String.raw`\( 3 \)`, String.raw`\( 10 \)`, String.raw`\( \frac52 \)`],
            ans: 3,
            exp: String.raw`\( g(1)=2\cdot0+1=1 \). \( g'(1)=2\cdot\frac14+1=\frac32 \). Total \( \frac52 \). \( \frac32 \) es solo \( g'(1) \) y 10 usa \( 2\cdot4+1 \) más \( g(1) \).`,
        },
        {
            t: "t5",
            s: "t5.1",
            q: String.raw`Si \( f(0)=2 \), \( f'(0)=-1 \) y \( f''(0)=6 \), el polinomio de Taylor de orden 2 de \( f \) en 0 es:`,
            opts: [String.raw`\( 2-x+6x^2 \)`, String.raw`\( 2-x+3x^2 \)`, String.raw`\( 2+x+3x^2 \)`, String.raw`\( 2-x+12x^2 \)`],
            ans: 1,
            exp: String.raw`\( P_2=f(0)+f'(0)x+\frac{f''(0)}2x^2=2-x+3x^2 \). Poner \( 6x^2 \) olvida dividir entre \( 2! \).`,
        },
        {
            t: "t5",
            s: "t5.1",
            q: String.raw`El polinomio de Taylor de orden 2 en 0 de \( f(x)=x^3+2x^2-x+5 \) es:`,
            opts: [String.raw`\( 5-x+4x^2 \)`, String.raw`\( 5-x+x^2 \)`, String.raw`\( 5-x+2x^2 \)`, String.raw`\( 5+x+2x^2 \)`],
            ans: 2,
            exp: String.raw`El Taylor de un polinomio es el mismo polinomio cortado: se tira \( x^3 \). Si lo calculás con derivadas: \( f''(0)=4 \), \( \frac42=2 \).`,
        },
        {
            t: "t5",
            s: "t5.1",
            q: String.raw`Si el polinomio de Taylor de orden 3 de \( f \) en 0 es \( 1+x-2x^3 \), entonces \( f'''(0) \) vale:`,
            opts: [String.raw`\( -12 \)`, String.raw`\( -2 \)`, String.raw`\( -6 \)`, String.raw`\( -\frac13 \)`],
            ans: 0,
            exp: String.raw`El coeficiente de \( x^3 \) es \( \frac{f'''(0)}{3!} \), así que \( f'''(0)=6\cdot(-2)=-12 \). \( -2 \) confunde el coeficiente con la derivada.`,
        },
        {
            t: "t5",
            s: "t5.1",
            q: String.raw`Si \( P_3 \) es el polinomio de Taylor de orden 3 de \( f \) en 0, entonces \( \lim_{x\to0}\frac{f(x)-P_3(x)}{x^3} \) es:`,
            opts: [String.raw`\( \frac{f'''(0)}6 \)`, String.raw`\( 1 \)`, String.raw`no se puede saber sin conocer \( f \)`, String.raw`\( 0 \)`],
            ans: 3,
            exp: String.raw`Por definición \( f(x)-P_3(x)=o(x^3) \), y dividido \( x^3 \) tiende a 0. Es la propiedad que justifica todos los límites con Taylor.`,
        },
        {
            t: "t5",
            s: "t5.2",
            q: String.raw`El coeficiente de \( x^3 \) en el desarrollo de Taylor de \( L(1+x) \) en 0 es:`,
            opts: [String.raw`\( \frac16 \)`, String.raw`\( \frac13 \)`, String.raw`\( -\frac13 \)`, String.raw`\( -\frac16 \)`],
            ans: 1,
            exp: String.raw`\( L(1+x)=x-\frac{x^2}2+\frac{x^3}3-\dots \): denominadores 1, 2, 3 sin factorial y signos alternados empezando por \( + \). \( \frac16 \) pone \( 3! \) como si fuera la exponencial.`,
        },
        {
            t: "t5",
            s: "t5.2",
            q: String.raw`El polinomio de Taylor de orden 2 en 0 de \( \sqrt{1+x} \) es:`,
            opts: [String.raw`\( 1+\frac x2+\frac{x^2}8 \)`, String.raw`\( 1+\frac x2-\frac{x^2}4 \)`, String.raw`\( 1+\frac x2-\frac{x^2}8 \)`, String.raw`\( 1+x-\frac{x^2}2 \)`],
            ans: 2,
            exp: String.raw`Con \( \alpha=\frac12 \): \( \frac{\alpha(\alpha-1)}2=\frac{\frac12\cdot(-\frac12)}2=-\frac18 \). \( -\frac{x^2}4 \) olvida dividir entre 2 y \( 1+x-\frac{x^2}2 \) es el principio de \( L(1+x) \) con un 1 de más.`,
        },
        {
            t: "t5",
            s: "t5.2",
            q: String.raw`El polinomio de Taylor de orden 3 en 0 de \( \frac1{1+x} \) es:`,
            opts: [String.raw`\( 1-x+x^2-x^3 \)`, String.raw`\( 1+x+x^2+x^3 \)`, String.raw`\( 1-x+\frac{x^2}2-\frac{x^3}6 \)`, String.raw`\( x-\frac{x^2}2+\frac{x^3}3 \)`],
            ans: 0,
            exp: String.raw`Es la geométrica \( \frac1{1-u} \) con \( u=-x \): \( 1-x+x^2-x^3 \). La opción con factoriales es \( e^{-x} \) y la que empieza en \( x \) es \( L(1+x) \).`,
        },
        {
            t: "t5",
            s: "t5.2",
            q: String.raw`¿Cuál de estos desarrollos hasta orden 3 en 0 es INCORRECTO?`,
            opts: [String.raw`\( \cos x=1-\frac{x^2}2+o(x^3) \)`, String.raw`\( L(1+x)=x-\frac{x^2}2+\frac{x^3}3+o(x^3) \)`, String.raw`\( \text{Arctg}\,x=x-\frac{x^3}3+o(x^3) \)`, String.raw`\( e^x=1+x+x^2+\frac{x^3}6+o(x^3) \)`],
            ans: 3,
            exp: String.raw`En \( e^x \) el término de grado 2 es \( \frac{x^2}{2} \), no \( x^2 \). El coseno sí puede escribirse con \( o(x^3) \) porque su término cúbico es 0.`,
        },
        {
            t: "t5",
            s: "t5.2",
            q: String.raw`\( \text{sen}\,x-\text{Arctg}\,x=c\,x^3+o(x^3) \). Entonces \( c \) vale:`,
            opts: [String.raw`\( -\frac16 \)`, String.raw`\( \frac16 \)`, String.raw`\( \frac12 \)`, String.raw`\( 0 \)`],
            ans: 1,
            exp: String.raw`\( \left(x-\frac{x^3}6\right)-\left(x-\frac{x^3}3\right)=\left(-\frac16+\frac13\right)x^3=\frac16x^3 \). \( 0 \) sale de creer que los dos cúbicos son iguales.`,
        },
        {
            t: "t5",
            s: "t5.3",
            q: String.raw`El coeficiente de \( x^2 \) en el desarrollo de \( L(1+3x) \) en 0 es:`,
            opts: [String.raw`\( -\frac32 \)`, String.raw`\( \frac92 \)`, String.raw`\( -\frac92 \)`, String.raw`\( -9 \)`],
            ans: 2,
            exp: String.raw`\( -\frac{(3x)^2}2=-\frac{9x^2}2 \). \( -\frac32 \) no eleva el 3 al cuadrado y \( -9 \) olvida el \( \frac12 \).`,
        },
        {
            t: "t5",
            s: "t5.3",
            q: String.raw`El polinomio de Taylor de orden 2 en 0 de \( \cos(3x) \) es:`,
            opts: [String.raw`\( 1-\frac92x^2 \)`, String.raw`\( 1-\frac32x^2 \)`, String.raw`\( 1-9x^2 \)`, String.raw`\( 3-\frac92x^2 \)`],
            ans: 0,
            exp: String.raw`\( \cos u=1-\frac{u^2}2 \) con \( u=3x \): \( 1-\frac{9x^2}2 \). \( 3-\dots \) multiplica también el 1, que no depende de \( u \).`,
        },
        {
            t: "t5",
            s: "t5.3",
            q: String.raw`El polinomio de Taylor de orden 4 en 0 de \( e^{x^2} \) es:`,
            opts: [String.raw`\( 1+x^2+\frac{x^4}{24} \)`, String.raw`\( 1+x+\frac{x^2}2+\frac{x^3}6+\frac{x^4}{24} \)`, String.raw`\( 1+x^2+x^4 \)`, String.raw`\( 1+x^2+\frac{x^4}2 \)`],
            ans: 3,
            exp: String.raw`\( e^u=1+u+\frac{u^2}2+o(u^2) \) con \( u=x^2 \): \( 1+x^2+\frac{x^4}2+o(x^4) \). La opción con \( \frac{x^4}{24} \) toma el coeficiente de \( x^4 \) de \( e^x \), que corresponde a \( u^4=x^8 \).`,
        },
        {
            t: "t5",
            s: "t5.3",
            q: String.raw`El polinomio de Taylor de orden 3 en 0 de \( \text{Arctg}(2x) \) es:`,
            opts: [String.raw`\( 2x-\frac23x^3 \)`, String.raw`\( 2x-\frac83x^3 \)`, String.raw`\( 2x-\frac43x^3 \)`, String.raw`\( 2x+\frac83x^3 \)`],
            ans: 1,
            exp: String.raw`\( \text{Arctg}\,u=u-\frac{u^3}3 \) con \( u=2x \): \( 2x-\frac{8x^3}3 \). \( \frac43 \) es el de \( \text{sen}(2x) \) (con 6 abajo), \( \frac23 \) no eleva el 2 al cubo y el signo \( + \) no corresponde: el cúbico del Arctg es negativo.`,
        },
        {
            t: "t5",
            s: "t5.3",
            q: String.raw`El polinomio de Taylor de orden 3 en 0 de \( L(1-x) \) es:`,
            opts: [String.raw`\( -x+\frac{x^2}2-\frac{x^3}3 \)`, String.raw`\( x+\frac{x^2}2+\frac{x^3}3 \)`, String.raw`\( -x-\frac{x^2}2-\frac{x^3}3 \)`, String.raw`\( -x-\frac{x^2}2-\frac{x^3}6 \)`],
            ans: 2,
            exp: String.raw`Con \( u=-x \): \( (-x)-\frac{x^2}2+\frac{-x^3}3 \): todos negativos. La opción con \( +\frac{x^2}2 \) cambia mal un signo y la de \( \frac{x^3}6 \) pone factorial.`,
        },
        {
            t: "t5",
            s: "t5.4",
            q: String.raw`Cuando \( x\to0 \), ¿cuál de estas afirmaciones es verdadera?`,
            opts: [String.raw`\( x^3=o(x^2) \)`, String.raw`\( x^2=o(x^3) \)`, String.raw`\( x=o(x) \)`, String.raw`\( 2x^2=o(x^2) \)`],
            ans: 0,
            exp: String.raw`\( \frac{x^3}{x^2}=x\to0 \). En las otras el cociente no tiende a 0: \( \frac{x^2}{x^3}=\frac1x \), \( \frac xx=1 \), \( \frac{2x^2}{x^2}=2 \).`,
        },
        {
            t: "t5",
            s: "t5.4",
            q: String.raw`\( o(x^2)+o(x^3) \) es igual a:`,
            opts: [String.raw`\( o(x^3) \)`, String.raw`\( o(x^5) \)`, String.raw`\( 0 \)`, String.raw`\( o(x^2) \)`],
            ans: 3,
            exp: String.raw`Un \( o(x^3) \) es también \( o(x^2) \), así que la suma es \( o(x^2) \). No se puede garantizar \( o(x^3) \): el primer sumando podría ser, por ejemplo, \( x^{2{,}5} \).`,
        },
        {
            t: "t5",
            s: "t5.4",
            q: String.raw`\( x^2\cdot o(x) \) es igual a:`,
            opts: [String.raw`\( o(x^2) \) pero no \( o(x^3) \)`, String.raw`\( o(x^3) \)`, String.raw`\( o(x) \) pero no \( o(x^2) \)`, String.raw`\( x^2 \)`],
            ans: 1,
            exp: String.raw`\( \frac{x^2\,o(x)}{x^3}=\frac{o(x)}{x}\to0 \): es \( o(x^3) \). Multiplicar por \( x^k \) suma \( k \) al exponente.`,
        },
        {
            t: "t5",
            s: "t5.4",
            q: String.raw`Si \( g(x)=o(x^3) \), entonces \( \lim_{x\to0}\frac{g(x)}{x^2} \) es:`,
            opts: [String.raw`\( 1 \)`, String.raw`\( +\infty \)`, String.raw`\( 0 \)`, String.raw`no se puede saber`],
            ans: 2,
            exp: String.raw`\( \frac{g(x)}{x^2}=x\cdot\frac{g(x)}{x^3} \), producto de dos cosas que tienden a 0. Un \( o(x^3) \) es "aún más chico" que \( x^2 \).`,
        },
        {
            t: "t5",
            s: "t5.5",
            q: String.raw`El polinomio de Taylor de orden 3 en 0 de \( e^x\,\text{sen}\,x \) es:`,
            opts: [String.raw`\( x+x^2+\frac{x^3}3 \)`, String.raw`\( x+x^2+\frac{x^3}2 \)`, String.raw`\( x+x^2-\frac{x^3}6 \)`, String.raw`\( x+\frac{x^3}3 \)`],
            ans: 0,
            exp: String.raw`\( (1+x+\frac{x^2}2)(x-\frac{x^3}6)=x+x^2+\frac{x^3}2-\frac{x^3}6+\dots=x+x^2+\frac{x^3}3 \). \( \frac{x^3}2 \) olvida el \( -\frac{x^3}6 \) del seno.`,
        },
        {
            t: "t5",
            s: "t5.5",
            q: String.raw`El polinomio de Taylor de orden 3 en 0 de \( x\,L(1+x) \) es:`,
            opts: [String.raw`\( x^2-\frac{x^3}2+\frac{x^4}3 \)`, String.raw`\( x-\frac{x^2}2+\frac{x^3}3 \)`, String.raw`\( x^2+\frac{x^3}2 \)`, String.raw`\( x^2-\frac{x^3}2 \)`],
            ans: 3,
            exp: String.raw`\( x\left(x-\frac{x^2}2\right)=x^2-\frac{x^3}2 \). El término \( \frac{x^4}3 \) es de grado 4, se descarta. La opción \( x-\frac{x^2}2+\frac{x^3}3 \) es \( L(1+x) \) sin multiplicar por \( x \).`,
        },
        {
            t: "t5",
            s: "t5.5",
            q: String.raw`Para obtener el Taylor de orden 4 de \( x^2\cos x \), ¿hasta qué orden alcanza con desarrollar \( \cos x \)?`,
            opts: [String.raw`\( 4 \)`, String.raw`\( 2 \)`, String.raw`\( 6 \)`, String.raw`\( 1 \)`],
            ans: 1,
            exp: String.raw`\( x^2\cdot o(x^2)=o(x^4) \): con \( \cos x=1-\frac{x^2}2+o(x^2) \) queda \( x^2-\frac{x^4}2+o(x^4) \). Desarrollar más no cambia nada.`,
        },
        {
            t: "t5",
            s: "t5.5",
            q: String.raw`El polinomio de Taylor de orden 2 en 0 de \( e^x\cos x \) es:`,
            opts: [String.raw`\( 1+x+x^2 \)`, String.raw`\( 1+x-\frac{x^2}2 \)`, String.raw`\( 1+x \)`, String.raw`\( 1+x+\frac{x^2}2 \)`],
            ans: 2,
            exp: String.raw`\( (1+x+\frac{x^2}2)(1-\frac{x^2}2)=1+x+\frac{x^2}2-\frac{x^2}2+o(x^2)=1+x+o(x^2) \). \( 1+x+x^2 \) suma los \( x^2 \) en vez de restarlos.`,
        },
        {
            t: "t6",
            s: "t6.1",
            q: String.raw`Para calcular \( \lim_{x\to0}\frac{x(e^x-1)-x^2}{x^3} \), ¿hasta qué orden alcanza con desarrollar \( e^x \)?`,
            opts: [String.raw`\( 2 \)`, String.raw`\( 3 \)`, String.raw`\( 1 \)`, String.raw`\( 4 \)`],
            ans: 0,
            exp: String.raw`\( e^x \) aparece multiplicada por \( x \), así que un resto \( o(x^2) \) en \( e^x \) se vuelve \( o(x^3) \), suficiente para \( x^3 \) abajo. Con orden 1 quedaría \( x\cdot o(x)=o(x^2) \), que no alcanza.`,
        },
        {
            t: "t6",
            s: "t6.1",
            q: String.raw`En \( \lim_{x\to0}\frac{x\,\text{sen}\,x-x^2}{x^4} \), ¿hasta qué orden hay que desarrollar \( \text{sen}\,x \)?`,
            opts: [String.raw`\( 4 \)`, String.raw`\( 1 \)`, String.raw`\( 2 \)`, String.raw`\( 3 \)`],
            ans: 3,
            exp: String.raw`Hay un \( x \) adelante: con \( \text{sen}\,x=x-\frac{x^3}6+o(x^3) \) queda \( x\,o(x^3)=o(x^4) \). Orden 2 da lo mismo que orden 1 (el seno no tiene término cuadrático) y no alcanza.`,
        },
        {
            t: "t6",
            s: "t6.1",
            q: String.raw`En un límite con \( x^2 \) en el denominador desarrollaste \( e^{-x}=1-x+o(x) \) y el numerador te quedó \( o(x) \). Entonces:`,
            opts: [String.raw`el límite es 0`, String.raw`no podés concluir: hay que desarrollar hasta orden 2`, String.raw`el límite es infinito`, String.raw`el límite no existe`],
            ans: 1,
            exp: String.raw`\( \frac{o(x)}{x^2} \) puede tender a cualquier cosa: no hay información. Con \( x^2 \) abajo hay que desarrollar hasta orden 2.`,
        },
        {
            t: "t6",
            s: "t6.1",
            q: String.raw`\( \lim_{x\to0}\frac{e^x-1-x}{x^3} \) es igual a:`,
            opts: [String.raw`\( \frac16 \)`, String.raw`\( \frac12 \)`, String.raw`no existe (tiende a \( +\infty \) por la derecha y a \( -\infty \) por la izquierda)`, String.raw`\( 0 \)`],
            ans: 2,
            exp: String.raw`\( e^x-1-x=\frac{x^2}2+o(x^2) \): el primer término no nulo es de grado 2 y el denominador de grado 3. Queda \( \frac{1}{2x} \), que no tiene límite. \( \frac16 \) es el coeficiente cúbico, que no decide nada acá.`,
        },
        {
            t: "t6",
            s: "t6.1",
            q: String.raw`\( \lim_{x\to0}\frac{L(1+x^2)-x^2}{x^4} \) es igual a:`,
            opts: [String.raw`\( -\frac12 \)`, String.raw`\( \frac12 \)`, String.raw`\( 0 \)`, String.raw`\( -\frac14 \)`],
            ans: 0,
            exp: String.raw`\( L(1+u)=u-\frac{u^2}2+o(u^2) \) con \( u=x^2 \): \( x^2-\frac{x^4}2+o(x^4) \). Menos \( x^2 \): \( -\frac{x^4}2 \). Límite \( -\frac12 \).`,
        },
        {
            t: "t6",
            s: "t6.2",
            q: String.raw`\( \lim_{x\to0}\frac{e^{2x}-1-2x}{x^2} \) es igual a:`,
            opts: [String.raw`\( 1 \)`, String.raw`\( 4 \)`, String.raw`\( \frac12 \)`, String.raw`\( 2 \)`],
            ans: 3,
            exp: String.raw`\( e^{2x}=1+2x+\frac{(2x)^2}2=1+2x+2x^2 \). Se cancelan el 1 y el \( 2x \): queda \( 2x^2 \). El 4 olvida dividir entre 2 y el 1 no eleva el 2.`,
        },
        {
            t: "t6",
            s: "t6.2",
            q: String.raw`\( \lim_{x\to0}\frac{\cos x-1+\frac{x^2}{2}}{x^2} \) es igual a:`,
            opts: [String.raw`\( \frac1{24} \)`, String.raw`\( 0 \)`, String.raw`\( -\frac12 \)`, String.raw`\( 1 \)`],
            ans: 1,
            exp: String.raw`\( \cos x-1+\frac{x^2}2=\frac{x^4}{24}+o(x^4) \): el primer no nulo es de grado 4 y el denominador de grado 2. El límite es 0. \( \frac1{24} \) sería con \( x^4 \) abajo.`,
        },
        {
            t: "t6",
            s: "t6.2",
            q: String.raw`\( \lim_{x\to0}\frac{L(1+x)-x+\frac{x^2}{2}}{x^3} \) es igual a:`,
            opts: [String.raw`\( \frac16 \)`, String.raw`\( -\frac13 \)`, String.raw`\( \frac13 \)`, String.raw`\( 0 \)`],
            ans: 2,
            exp: String.raw`\( L(1+x)=x-\frac{x^2}2+\frac{x^3}3 \). Los sueltos cancelan \( x \) y \( -\frac{x^2}2 \): queda \( \frac{x^3}3 \). \( \frac16 \) pone factorial en el logaritmo.`,
        },
        {
            t: "t6",
            s: "t6.2",
            q: String.raw`\( \lim_{x\to0}\frac{\text{sen}(3x)-3x}{x^3} \) es igual a:`,
            opts: [String.raw`\( -\frac92 \)`, String.raw`\( -\frac12 \)`, String.raw`\( -\frac32 \)`, String.raw`\( -27 \)`],
            ans: 0,
            exp: String.raw`\( \text{sen}(3x)=3x-\frac{(3x)^3}6=3x-\frac{27}6x^3 \). Límite \( -\frac{27}6=-\frac92 \). \( -\frac12 \) no eleva el 3 al cubo y \( -27 \) olvida el 6.`,
        },
        {
            t: "t6",
            s: "t6.2",
            q: String.raw`\( \lim_{x\to0}\frac{e^{-x}+x-1}{x^2} \) es igual a:`,
            opts: [String.raw`\( -\frac12 \)`, String.raw`\( 1 \)`, String.raw`\( 0 \)`, String.raw`\( \frac12 \)`],
            ans: 3,
            exp: String.raw`\( e^{-x}=1-x+\frac{x^2}2 \): el término cuadrático es positivo porque \( (-x)^2=x^2 \). Se cancelan 1 y \( x \), queda \( \frac{x^2}2 \).`,
        },
        {
            t: "t6",
            s: "t6.3",
            q: String.raw`\( \lim_{x\to0}\frac{e^{2x}-\cos(x)-2x}{x^2} \) es igual a:`,
            opts: [String.raw`\( \frac32 \)`, String.raw`\( \frac52 \)`, String.raw`\( 3 \)`, String.raw`\( \frac12 \)`],
            ans: 1,
            exp: String.raw`\( e^{2x}=1+2x+2x^2 \), \( -\cos x=-1+\frac{x^2}2 \). Constantes y \( x \) se cancelan; \( x^2 \): \( 2+\frac12=\frac52 \). \( \frac32 \) resta el \( \frac12 \) en vez de sumarlo.`,
        },
        {
            t: "t6",
            s: "t6.3",
            q: String.raw`\( \lim_{x\to0}\frac{L(1+2x)+e^{-2x}-1}{x^2} \) es igual a:`,
            opts: [String.raw`\( 4 \)`, String.raw`\( -4 \)`, String.raw`\( 0 \)`, String.raw`\( 1 \)`],
            ans: 2,
            exp: String.raw`\( L(1+2x)=2x-2x^2 \) y \( e^{-2x}=1-2x+2x^2 \). Suman \( 1+0\cdot x+0\cdot x^2 \); menos 1: todo se cancela hasta orden 2 y el límite es 0. El 4 sale de escribir \( L(1+2x)=2x+2x^2 \) (signo mal) y el \( -4 \) de escribir \( e^{-2x}=1-2x-2x^2 \).`,
        },
        {
            t: "t6",
            s: "t6.3",
            q: String.raw`\( \lim_{x\to0}\frac{\text{sen}(2x)-L(1+2x)}{x^2} \) es igual a:`,
            opts: [String.raw`\( 2 \)`, String.raw`\( -2 \)`, String.raw`\( 1 \)`, String.raw`\( 4 \)`],
            ans: 0,
            exp: String.raw`\( \text{sen}(2x)=2x+o(x^2) \) y \( L(1+2x)=2x-2x^2 \). La resta da \( 2x^2 \). \( -2 \) olvida que restar \( -2x^2 \) suma.`,
        },
        {
            t: "t6",
            s: "t6.3",
            q: String.raw`\( \lim_{x\to0}\frac{\text{Arctg}(2x)-2x\,e^{x}}{x^2} \) es igual a:`,
            opts: [String.raw`\( 2 \)`, String.raw`\( -1 \)`, String.raw`\( 0 \)`, String.raw`\( -2 \)`],
            ans: 3,
            exp: String.raw`\( \text{Arctg}(2x)=2x+o(x^2) \), \( 2x\,e^x=2x(1+x)+o(x^2)=2x+2x^2 \). Resta: \( -2x^2 \).`,
        },
        {
            t: "t6",
            s: "t6.3",
            q: String.raw`\( \lim_{x\to0}\frac{\cos(2x)+e^{x}-2-x}{x^2} \) es igual a:`,
            opts: [String.raw`\( -\frac52 \)`, String.raw`\( -\frac32 \)`, String.raw`\( \frac12 \)`, String.raw`\( -1 \)`],
            ans: 1,
            exp: String.raw`\( \cos(2x)=1-2x^2 \), \( e^x=1+x+\frac{x^2}2 \). Constantes: \( 1+1-2=0 \); \( x \): \( 1-1=0 \); \( x^2 \): \( -2+\frac12=-\frac32 \). \( -1 \) usa \( \cos(2x)=1-x^2 \).`,
        },
        {
            t: "t6",
            s: "t6.3",
            q: String.raw`\( \lim_{x\to0}\frac{L(1-x)+\text{sen}(x)}{x^2} \) es igual a:`,
            opts: [String.raw`\( \frac12 \)`, String.raw`\( -1 \)`, String.raw`\( -\frac12 \)`, String.raw`\( 0 \)`],
            ans: 2,
            exp: String.raw`\( L(1-x)=-x-\frac{x^2}2 \) y \( \text{sen}\,x=x+o(x^2) \). Suma: \( -\frac{x^2}2 \). \( \frac12 \) toma el cuadrático de \( L(1-x) \) con signo \( + \).`,
        },
        {
            t: "t6",
            s: "t6.4",
            q: String.raw`\( \lim_{x\to0}\frac{L(1+x)-\text{sen}(x)+\frac{x^2}{2}}{x^3} \) es igual a:`,
            opts: [String.raw`\( \frac12 \)`, String.raw`\( \frac16 \)`, String.raw`\( \frac13 \)`, String.raw`\( -\frac12 \)`],
            ans: 0,
            exp: String.raw`\( L(1+x)=x-\frac{x^2}2+\frac{x^3}3 \), \( -\text{sen}\,x=-x+\frac{x^3}6 \). Se cancelan \( x \) y \( x^2 \); cúbico: \( \frac13+\frac16=\frac12 \). \( \frac16 \) resta en vez de sumar.`,
        },
        {
            t: "t6",
            s: "t6.4",
            q: String.raw`\( \lim_{x\to0}\frac{2\,\text{Arctg}(x)-\text{sen}(2x)}{x^3} \) es igual a:`,
            opts: [String.raw`\( -\frac23 \)`, String.raw`\( 2 \)`, String.raw`\( \frac13 \)`, String.raw`\( \frac23 \)`],
            ans: 3,
            exp: String.raw`\( 2\,\text{Arctg}\,x=2x-\frac23x^3 \), \( \text{sen}(2x)=2x-\frac43x^3 \). Resta: \( \left(-\frac23+\frac43\right)x^3=\frac23x^3 \).`,
        },
        {
            t: "t6",
            s: "t6.4",
            q: String.raw`\( \lim_{x\to0}\frac{e^{x}-e^{-x}-2x}{x^3} \) es igual a:`,
            opts: [String.raw`\( \frac16 \)`, String.raw`\( \frac13 \)`, String.raw`\( 0 \)`, String.raw`\( \frac23 \)`],
            ans: 1,
            exp: String.raw`\( e^x-e^{-x}=2x+2\cdot\frac{x^3}6=2x+\frac{x^3}3 \) (los pares se cancelan). Menos \( 2x \): \( \frac{x^3}3 \). \( \frac16 \) toma un solo cúbico.`,
        },
        {
            t: "t6",
            s: "t6.4",
            q: String.raw`\( \lim_{x\to0}\frac{x\cos(x)-\text{sen}(x)}{x^3} \) es igual a:`,
            opts: [String.raw`\( \frac13 \)`, String.raw`\( -\frac23 \)`, String.raw`\( -\frac13 \)`, String.raw`\( -\frac12 \)`],
            ans: 2,
            exp: String.raw`\( x\cos x=x-\frac{x^3}2 \) y \( \text{sen}\,x=x-\frac{x^3}6 \). Resta: \( -\frac12+\frac16=-\frac13 \). \( -\frac23 \) suma los dos cúbicos.`,
        },
        {
            t: "t6",
            s: "t6.4",
            q: String.raw`\( \lim_{x\to0}\frac{L(1+2x)-2x+2x^2}{x^3} \) es igual a:`,
            opts: [String.raw`\( \frac83 \)`, String.raw`\( \frac43 \)`, String.raw`\( \frac23 \)`, String.raw`\( 8 \)`],
            ans: 0,
            exp: String.raw`\( L(1+2x)=2x-2x^2+\frac{(2x)^3}3=2x-2x^2+\frac83x^3 \). Quedan \( \frac83x^3 \). \( \frac43 \) divide entre 6 como si fuera factorial.`,
        },
        {
            t: "t6",
            s: "t6.4",
            q: String.raw`\( \lim_{x\to0}\frac{x\,e^{-x}-x+x^2}{x^3} \) es igual a:`,
            opts: [String.raw`\( -\frac12 \)`, String.raw`\( \frac16 \)`, String.raw`\( 1 \)`, String.raw`\( \frac12 \)`],
            ans: 3,
            exp: String.raw`\( x\,e^{-x}=x(1-x+\frac{x^2}2)=x-x^2+\frac{x^3}2 \). Con \( -x+x^2 \) queda \( \frac{x^3}2 \). Alcanza \( e^{-x} \) hasta orden 2 por el \( x \) de adelante.`,
        },
        {
            t: "t6",
            s: "t6.5",
            q: String.raw`\( \lim_{x\to0}\frac{x\,\text{sen}(x)-x^2}{x^4} \) es igual a:`,
            opts: [String.raw`\( \frac16 \)`, String.raw`\( -\frac16 \)`, String.raw`\( -\frac1{24} \)`, String.raw`\( 0 \)`],
            ans: 1,
            exp: String.raw`\( x\,\text{sen}\,x=x^2-\frac{x^4}6 \). Menos \( x^2 \): \( -\frac{x^4}6 \).`,
        },
        {
            t: "t6",
            s: "t6.5",
            q: String.raw`\( \lim_{x\to0}\frac{\cos(x)-1+\frac{x^2}{2}}{x^4} \) es igual a:`,
            opts: [String.raw`\( -\frac1{24} \)`, String.raw`\( \frac1{12} \)`, String.raw`\( \frac1{24} \)`, String.raw`\( 0 \)`],
            ans: 2,
            exp: String.raw`\( \cos x=1-\frac{x^2}2+\frac{x^4}{24}+o(x^4) \). Con los sueltos queda \( \frac{x^4}{24} \).`,
        },
        {
            t: "t6",
            s: "t6.5",
            q: String.raw`\( \lim_{x\to0}\frac{\cos(x^2)-1}{x^4} \) es igual a:`,
            opts: [String.raw`\( -\frac12 \)`, String.raw`\( 0 \)`, String.raw`\( -1 \)`, String.raw`\( \frac12 \)`],
            ans: 0,
            exp: String.raw`\( \cos u=1-\frac{u^2}2 \) con \( u=x^2 \): \( 1-\frac{x^4}2 \). Menos 1: \( -\frac{x^4}2 \).`,
        },
        {
            t: "t6",
            s: "t6.5",
            q: String.raw`\( \lim_{x\to0}\frac{x\,L(1+x)-x^2+\frac{x^3}{2}}{x^4} \) es igual a:`,
            opts: [String.raw`\( \frac14 \)`, String.raw`\( -\frac13 \)`, String.raw`\( \frac12 \)`, String.raw`\( \frac13 \)`],
            ans: 3,
            exp: String.raw`\( x\,L(1+x)=x^2-\frac{x^3}2+\frac{x^4}3+o(x^4) \). Con los sueltos queda \( \frac{x^4}3 \). \( \frac14 \) toma el término de grado 4 de \( L \), que acá daría \( x^5 \).`,
        },
        {
            t: "t6",
            s: "t6.5",
            q: String.raw`\( \lim_{x\to0}\frac{1-\cos(x)}{x\,\text{sen}(x)} \) es igual a:`,
            opts: [String.raw`\( 1 \)`, String.raw`\( \frac12 \)`, String.raw`\( 0 \)`, String.raw`\( 2 \)`],
            ans: 1,
            exp: String.raw`Numerador: \( \frac{x^2}2+o(x^2) \). Denominador: \( x(x+o(x))=x^2+o(x^2) \). El cociente tiende a \( \frac{1/2}{1}=\frac12 \).`,
        },
        {
            t: "t6",
            s: "t6.5",
            q: String.raw`\( \lim_{x\to0}\frac{\text{sen}(x)-x}{x^2\,\text{Arctg}(x)} \) es igual a:`,
            opts: [String.raw`\( -\frac13 \)`, String.raw`\( \frac16 \)`, String.raw`\( -\frac16 \)`, String.raw`\( 0 \)`],
            ans: 2,
            exp: String.raw`Numerador: \( -\frac{x^3}6+o(x^3) \). Denominador: \( x^2(x+o(x))=x^3+o(x^3) \). Límite \( -\frac16 \). \( -\frac13 \) toma el cúbico del Arctg por error.`,
        },
        {
            t: "t7",
            s: "t7.1",
            q: String.raw`Sea \( f \) tal que su polinomio de Taylor de orden 2 en 0 es \( P(x)=3-4x+5x^2 \). Entonces \( f''(0) \) vale:`,
            opts: [String.raw`\( 10 \)`, String.raw`\( 5 \)`, String.raw`\( \frac52 \)`, String.raw`\( -4 \)`],
            ans: 0,
            exp: String.raw`El coeficiente de \( x^2 \) es \( \frac{f''(0)}2 \), así que \( f''(0)=2\cdot5=10 \). El 5 es el coeficiente, no la derivada.`,
        },
        {
            t: "t7",
            s: "t7.1",
            q: String.raw`Sea \( f \) tal que su polinomio de Taylor de orden 2 en 0 es \( P(x)=2+x-3x^2 \). Entonces \( f(0)+f'(0)+f''(0) \) es:`,
            opts: [String.raw`\( 0 \)`, String.raw`\( 3 \)`, String.raw`\( -6 \)`, String.raw`\( -3 \)`],
            ans: 3,
            exp: String.raw`\( f(0)=2 \), \( f'(0)=1 \), \( f''(0)=2\cdot(-3)=-6 \). Suma: \( -3 \). El 0 aparece si usás \( -3 \) como \( f''(0) \).`,
        },
        {
            t: "t7",
            s: "t7.1",
            q: String.raw`Si \( f(0)=1 \), \( f'(0)=0 \) y \( f''(0)=-4 \), el polinomio de Taylor de orden 2 de \( f \) en 0 es:`,
            opts: [String.raw`\( 1-4x^2 \)`, String.raw`\( 1-2x^2 \)`, String.raw`\( 1-8x^2 \)`, String.raw`\( 1-4x \)`],
            ans: 1,
            exp: String.raw`\( \frac{f''(0)}{2}x^2=-2x^2 \). \( 1-4x^2 \) olvida dividir y \( 1-8x^2 \) multiplica en vez de dividir.`,
        },
        {
            t: "t7",
            s: "t7.1",
            q: String.raw`Sea \( f \) tal que su polinomio de Taylor de orden 2 en 0 es \( P(x)=1+2x+3x^2 \). Entonces el polinomio de Taylor de orden 1 de \( f' \) en 0 es:`,
            opts: [String.raw`\( 2+3x \)`, String.raw`\( 1+2x \)`, String.raw`\( 2+6x \)`, String.raw`\( 6+2x \)`],
            ans: 2,
            exp: String.raw`\( f'(0)=2 \) y \( f''(0)=6 \), así que el Taylor de \( f' \) es \( 2+6x \). Es lo mismo que derivar \( P \). \( 1+2x \) es el Taylor de orden 1 de \( f \).`,
        },
        {
            t: "t7",
            s: "t7.1",
            q: String.raw`Sea \( f(x)=e^{3x} \). Leyendo su polinomio de Taylor en 0, \( f''(0) \) vale:`,
            opts: [String.raw`\( 9 \)`, String.raw`\( \frac92 \)`, String.raw`\( 3 \)`, String.raw`\( 27 \)`],
            ans: 0,
            exp: String.raw`\( e^{3x}=1+3x+\frac{9}{2}x^2+\dots \), y \( f''(0)=2\cdot\frac92=9 \) (coincide con derivar dos veces: \( 9e^{0} \)). \( \frac92 \) es el coeficiente.`,
        },
        {
            t: "t7",
            s: "t7.2",
            q: String.raw`Sea \( f \) tal que su polinomio de Taylor de orden 2 en 0 es \( P(x)=4-3x^2 \). Entonces en \( x=0 \), \( f \):`,
            opts: [String.raw`tiene un mínimo relativo`, String.raw`no tiene extremo`, String.raw`no se puede saber`, String.raw`tiene un máximo relativo`],
            ans: 3,
            exp: String.raw`No hay término en \( x \): \( f'(0)=0 \). \( f''(0)=-6\lt0 \): máximo relativo. El 4 (valor en 0) no influye.`,
        },
        {
            t: "t7",
            s: "t7.2",
            q: String.raw`Sea \( f \) tal que su polinomio de Taylor de orden 2 en 0 es \( P(x)=1+2x+x^2 \). Entonces en \( x=0 \), \( f \):`,
            opts: [String.raw`tiene un mínimo relativo`, String.raw`no tiene extremo relativo`, String.raw`tiene un máximo relativo`, String.raw`tiene un punto de inflexión con tangente horizontal`],
            ans: 1,
            exp: String.raw`\( f'(0)=2\neq0 \): la función está creciendo en 0, no puede haber extremo. Que \( a_2\gt0 \) no importa si \( a_1\neq0 \).`,
        },
        {
            t: "t7",
            s: "t7.2",
            q: String.raw`Sea \( f \) tal que su polinomio de Taylor de orden 2 en 0 es \( P(x)=-2+5x^2 \). Entonces en \( x=0 \), \( f \):`,
            opts: [String.raw`tiene un máximo relativo`, String.raw`no tiene extremo, porque \( f(0)\lt0 \)`, String.raw`tiene un mínimo relativo`, String.raw`no tiene extremo, porque \( f'(0)=0 \)`],
            ans: 2,
            exp: String.raw`\( f'(0)=0 \) y \( f''(0)=10\gt0 \): mínimo. El signo de \( f(0) \) no tiene nada que ver con que haya extremo.`,
        },
        {
            t: "t7",
            s: "t7.2",
            q: String.raw`Sea \( f \) tal que su polinomio de Taylor de orden 2 en 0 es \( P(x)=1+3x^2 \). Sea \( g(x)=f(x)-2\cos(x) \). Afirmaciones: (1) \( f \) tiene en \( x=0 \) un mínimo relativo. (2) \( g \) tiene en \( x=0 \) un máximo relativo.`,
            opts: [String.raw`Ambas son verdaderas`, String.raw`Solo (1) es verdadera`, String.raw`Solo (2) es verdadera`, String.raw`Ambas son falsas`],
            ans: 1,
            exp: String.raw`(1) \( a_1=0 \), \( a_2=3\gt0 \): mínimo, verdadera. (2) \( g=1+3x^2-2(1-\frac{x^2}2)=-1+4x^2 \): mínimo, no máximo. Falsa.`,
        },
        {
            t: "t7",
            s: "t7.2",
            q: String.raw`Sea \( f \) tal que su polinomio de Taylor de orden 2 en 0 es \( P(x)=2-x^2 \). Sea \( g(x)=3\cos(x)-f(x) \). Afirmaciones: (1) \( f \) tiene en \( x=0 \) un máximo relativo. (2) \( g \) tiene en \( x=0 \) un máximo relativo.`,
            opts: [String.raw`Ambas son verdaderas`, String.raw`Solo (1) es verdadera`, String.raw`Solo (2) es verdadera`, String.raw`Ambas son falsas`],
            ans: 0,
            exp: String.raw`(1) \( a_2=-1\lt0 \) sin término en \( x \): máximo, verdadera. (2) \( g=3-\frac32x^2-2+x^2=1-\frac12x^2 \): máximo, verdadera. Si olvidás que el 3 multiplica el \( -\frac{x^2}2 \) te queda \( g=1+\frac{x^2}2 \), mínimo.`,
        },
        {
            t: "t7",
            s: "t7.2",
            q: String.raw`Sea \( f \) tal que su polinomio de Taylor de orden 2 en 0 es \( P(x)=1+x-x^2 \). Sea \( g(x)=f(x)-\text{sen}(x) \). Afirmaciones: (1) \( f \) tiene en \( x=0 \) un máximo relativo. (2) \( g \) tiene en \( x=0 \) un máximo relativo.`,
            opts: [String.raw`Ambas son verdaderas`, String.raw`Solo (1) es verdadera`, String.raw`Solo (2) es verdadera`, String.raw`Ambas son falsas`],
            ans: 2,
            exp: String.raw`(1) \( f'(0)=1\neq0 \): no hay extremo, falsa. (2) \( g=1+x-x^2-x+o(x^2)=1-x^2 \): \( g'(0)=0 \), \( g''(0)=-2 \), máximo. Verdadera.`,
        },
        {
            t: "t7",
            s: "t7.3",
            q: String.raw`Sea \( f \) tal que su polinomio de Taylor de orden 2 en 0 es \( P(x)=2+3x-x^2 \). Sea \( g(x)=3f(x)-f'(x) \) y \( Q(x) \) el polinomio de Taylor de orden 1 de \( g \) en 0. Entonces \( Q(1) \) es:`,
            opts: [String.raw`\( 14 \)`, String.raw`\( 13 \)`, String.raw`\( 3 \)`, String.raw`\( 11 \)`],
            ans: 0,
            exp: String.raw`\( g(0)=3\cdot2-3=3 \). \( g'(0)=3f'(0)-f''(0)=9-(-2)=11 \). \( Q(1)=3+11=14 \). El 13 usa \( f''(0)=-1 \) (el coeficiente); 3 y 11 son cada término por separado.`,
        },
        {
            t: "t7",
            s: "t7.3",
            q: String.raw`Sea \( f \) tal que su polinomio de Taylor de orden 2 en 0 es \( P(x)=1+2x+3x^2 \). Sea \( g(x)=\frac{f'(x)}{f(x)} \) y \( Q(x) \) el polinomio de Taylor de orden 1 de \( g \) en 0. Entonces \( Q(1) \) es:`,
            opts: [String.raw`\( 1 \)`, String.raw`\( 2 \)`, String.raw`\( 6 \)`, String.raw`\( 4 \)`],
            ans: 3,
            exp: String.raw`\( g(0)=\frac21=2 \). \( g'(0)=\frac{f''(0)f(0)-f'(0)^2}{f(0)^2}=\frac{6-4}{1}=2 \). \( Q(1)=4 \). Con \( f''(0)=3 \) (el coeficiente) daría \( 2-1=1 \).`,
        },
        {
            t: "t7",
            s: "t7.3",
            q: String.raw`Sea \( f \) tal que su polinomio de Taylor de orden 2 en 0 es \( P(x)=2-x+x^2 \). Sea \( g(x)=f(x)\,f'(x) \) y \( Q(x) \) el polinomio de Taylor de orden 1 de \( g \) en 0. Entonces \( Q(1) \) es:`,
            opts: [String.raw`\( 1 \)`, String.raw`\( 3 \)`, String.raw`\( -2 \)`, String.raw`\( 5 \)`],
            ans: 1,
            exp: String.raw`\( g(0)=2\cdot(-1)=-2 \). \( g'(0)=f'(0)^2+f(0)f''(0)=1+2\cdot2=5 \). \( Q(1)=3 \). Con \( f''(0)=1 \) quedaría \( g'(0)=3 \) y \( Q(1)=1 \).`,
        },
        {
            t: "t7",
            s: "t7.3",
            q: String.raw`Sea \( f \) tal que su polinomio de Taylor de orden 2 en 0 es \( P(x)=1-x+2x^2 \). Sea \( g(x)=(x+2)\,f(x) \). Entonces \( g(0)+g'(0)+g''(0) \) es:`,
            opts: [String.raw`\( 4 \)`, String.raw`\( 5 \)`, String.raw`\( 7 \)`, String.raw`\( 6 \)`],
            ans: 2,
            exp: String.raw`\( (x+2)(1-x+2x^2)=2-2x+4x^2+x-x^2+\dots=2-x+3x^2 \). \( g(0)=2 \), \( g'(0)=-1 \), \( g''(0)=6 \). Suma 7. El 4 usa el coeficiente 3 como \( g''(0) \).`,
        },
        {
            t: "t7",
            s: "t7.4",
            q: String.raw`Sea \( f \) tal que su polinomio de Taylor de orden 2 en 0 es \( P(x)=1+2x-x^2 \). Sea \( g(x)=L\big(f(x)\big) \). Entonces \( g(0)+g'(0)+g''(0) \) es:`,
            opts: [String.raw`\( -4 \)`, String.raw`\( -1 \)`, String.raw`\( 1 \)`, String.raw`\( -6 \)`],
            ans: 0,
            exp: String.raw`Con \( u=2x-x^2 \): \( L(1+u)=u-\frac{u^2}2=2x-x^2-2x^2=2x-3x^2 \). \( g(0)=0 \), \( g'(0)=2 \), \( g''(0)=-6 \). Suma \( -4 \). El \( -1 \) usa \( -3 \) como \( g''(0) \).`,
        },
        {
            t: "t7",
            s: "t7.4",
            q: String.raw`Sea \( f \) tal que su polinomio de Taylor de orden 2 en 0 es \( P(x)=2+4x+x^2 \). Sea \( g(x)=\frac1{f(x)} \) y \( Q(x) \) el polinomio de Taylor de orden 1 de \( g \) en 0. Entonces \( Q(1) \) es:`,
            opts: [String.raw`\( \frac32 \)`, String.raw`\( \frac12 \)`, String.raw`\( -1 \)`, String.raw`\( -\frac12 \)`],
            ans: 3,
            exp: String.raw`\( g(0)=\frac12 \), \( g'(0)=-\frac{f'(0)}{f(0)^2}=-\frac44=-1 \). \( Q(1)=-\frac12 \). \( \frac32 \) pierde el signo de la derivada de \( \frac1f \).`,
        },
        {
            t: "t7",
            s: "t7.4",
            q: String.raw`Sea \( f \) tal que su polinomio de Taylor de orden 2 en 0 es \( P(x)=1+3x+x^2 \). Sea \( g(x)=e^{f(x)-1} \). Entonces \( g''(0) \) es:`,
            opts: [String.raw`\( 10 \)`, String.raw`\( 11 \)`, String.raw`\( 9 \)`, String.raw`\( 2 \)`],
            ans: 1,
            exp: String.raw`\( g''(0)=e^{f(0)-1}\left(f''(0)+f'(0)^2\right)=e^0(2+9)=11 \). El 10 usa \( f''(0)=1 \); el 9 olvida \( f''(0) \) y el 2 olvida \( f'(0)^2 \).`,
        },
        {
            t: "t7",
            s: "t7.4",
            q: String.raw`Sea \( f \) tal que su polinomio de Taylor de orden 2 en 0 es \( P(x)=3-x+2x^2 \). Sea \( g(x)=\big(f(x)\big)^2 \). El polinomio de Taylor de orden 2 de \( g \) en 0 es:`,
            opts: [String.raw`\( 9-6x+12x^2 \)`, String.raw`\( 9+x^2+4x^4 \)`, String.raw`\( 9-6x+13x^2 \)`, String.raw`\( 9-6x+4x^2 \)`],
            ans: 2,
            exp: String.raw`\( (3-x+2x^2)^2 \): el término \( x^2 \) junta \( (-x)^2=x^2 \) y \( 2\cdot3\cdot2x^2=12x^2 \): total \( 13x^2 \). La de \( 12x^2 \) olvida el \( (-x)^2 \); \( 9+x^2+4x^4 \) eleva cada término por separado.`,
        },
        {
            t: "t7",
            s: "t7.4",
            q: String.raw`Sea \( f \) tal que su polinomio de Taylor de orden 2 en 0 es \( P(x)=4+4x+x^2 \). Sea \( g(x)=\sqrt{f(x)} \) y \( Q(x) \) el polinomio de Taylor de orden 1 de \( g \) en 0. Entonces \( Q(1) \) es:`,
            opts: [String.raw`\( 3 \)`, String.raw`\( 2 \)`, String.raw`\( 4 \)`, String.raw`\( \frac52 \)`],
            ans: 0,
            exp: String.raw`\( g(0)=\sqrt4=2 \), \( g'(0)=\frac{f'(0)}{2\sqrt{f(0)}}=\frac44=1 \). \( Q(1)=3 \). (De hecho \( P=(x+2)^2 \), y \( \sqrt{P}=x+2 \).)`,
        },
        {
            t: "t7",
            s: "t7.5",
            q: String.raw`Sea \( f \) tal que su polinomio de Taylor de orden 2 en 0 es \( P(x)=1+x+2x^2 \). Sea \( g(x)=f(x)-e^{x} \). Entonces \( g''(0) \) es:`,
            opts: [String.raw`\( \frac32 \)`, String.raw`\( 4 \)`, String.raw`\( 1 \)`, String.raw`\( 3 \)`],
            ans: 3,
            exp: String.raw`\( g=1+x+2x^2-(1+x+\frac{x^2}2)=\frac32x^2+o(x^2) \), así que \( g''(0)=2\cdot\frac32=3 \). \( \frac32 \) es el coeficiente.`,
        },
        {
            t: "t7",
            s: "t7.5",
            q: String.raw`Sea \( f \) tal que su polinomio de Taylor de orden 2 en 0 es \( P(x)=2-2x+x^2 \). Sea \( g(x)=f(x)+L(1+2x) \). Entonces en \( x=0 \):`,
            opts: [String.raw`\( g \) tiene un mínimo relativo`, String.raw`\( g \) tiene un máximo relativo`, String.raw`\( g \) no tiene extremo`, String.raw`\( g'(0)=-4 \)`],
            ans: 1,
            exp: String.raw`\( L(1+2x)=2x-2x^2 \). \( g=2-2x+x^2+2x-2x^2=2-x^2 \): \( g'(0)=0 \), \( g''(0)=-2 \), máximo. Si se usa \( L(1+2x)=2x-x^2 \), queda \( g=2 \) hasta orden 2 y no se puede decidir.`,
        },
        {
            t: "t7",
            s: "t7.5",
            q: String.raw`Sea \( f \) tal que su polinomio de Taylor de orden 2 en 0 es \( P(x)=3+x^2 \). Sea \( g(x)=f(x)-3\cos(x) \). Entonces \( g(0)+g'(0)+g''(0) \) es:`,
            opts: [String.raw`\( \frac52 \)`, String.raw`\( -1 \)`, String.raw`\( 5 \)`, String.raw`\( 2 \)`],
            ans: 2,
            exp: String.raw`\( 3\cos x=3-\frac32x^2 \). \( g=3+x^2-3+\frac32x^2=\frac52x^2 \): \( g(0)=0 \), \( g'(0)=0 \), \( g''(0)=5 \). \( \frac52 \) es el coeficiente y \( -1 \) resta el \( \frac32x^2 \) en vez de sumarlo.`,
        },
        {
            t: "t7",
            s: "t7.5",
            q: String.raw`Sea \( f \) tal que su polinomio de Taylor de orden 2 en 0 es \( P(x)=1-2x^2 \). Sea \( g(x)=f(x)\cos(x) \). Entonces \( g''(0) \) es:`,
            opts: [String.raw`\( -5 \)`, String.raw`\( -\frac52 \)`, String.raw`\( -4 \)`, String.raw`\( -3 \)`],
            ans: 0,
            exp: String.raw`\( (1-2x^2)(1-\frac{x^2}2)=1-\frac52x^2+o(x^2) \), así que \( g''(0)=-5 \). \( -4 \) ignora el coseno, \( -\frac52 \) es el coeficiente y \( -3 \) usa \( \cos x=1+\frac{x^2}2 \) (signo cambiado).`,
        },
        {
            t: "t8",
            s: "t8.1",
            q: String.raw`La suma parcial \( S_3 \) de \( \sum_{n=1}^{\infty}\frac1{2^n} \) es:`,
            opts: [String.raw`\( \frac{15}{16} \)`, String.raw`\( \frac18 \)`, String.raw`\( 1 \)`, String.raw`\( \frac78 \)`],
            ans: 3,
            exp: String.raw`\( S_3=\frac12+\frac14+\frac18=\frac78 \). \( \frac{15}{16} \) es \( S_4 \) (o \( S_3 \) arrancando en 0 sin el 1), \( \frac18 \) es solo el tercer término y 1 es el valor de la serie.`,
        },
        {
            t: "t8",
            s: "t8.1",
            q: String.raw`La serie \( \sum_{n=1}^{\infty}\frac{n}{n+1} \):`,
            opts: [String.raw`converge a 1`, String.raw`diverge, porque su término general no tiende a 0`, String.raw`converge, porque \( \frac{n}{n+1}\lt1 \)`, String.raw`es geométrica de razón 1`],
            ans: 1,
            exp: String.raw`\( \frac{n}{n+1}\to1\neq0 \): falla la condición necesaria, así que diverge. Que cada término sea menor que 1 no dice nada: sumás infinitos números cercanos a 1.`,
        },
        {
            t: "t8",
            s: "t8.1",
            q: String.raw`Las sumas parciales de una serie son \( S_N=3-\frac2N \). Entonces la serie:`,
            opts: [String.raw`converge a 1`, String.raw`diverge`, String.raw`converge a 3`, String.raw`converge a \( -2 \)`],
            ans: 2,
            exp: String.raw`La serie vale \( \lim S_N=3 \). El 1 es \( S_1 \), no el límite.`,
        },
        {
            t: "t8",
            s: "t8.1",
            q: String.raw`Sobre la condición "\( a_n\to0 \)" para una serie \( \sum a_n \):`,
            opts: [String.raw`es necesaria pero no suficiente para que converja`, String.raw`es suficiente pero no necesaria`, String.raw`es necesaria y suficiente`, String.raw`no tiene relación con la convergencia`],
            ans: 0,
            exp: String.raw`Si la serie converge, \( a_n\to0 \) (necesaria). Pero hay series con \( a_n\to0 \) que divergen, como \( \sum\frac1n \) (no es suficiente).`,
        },
        {
            t: "t8",
            s: "t8.2",
            q: String.raw`La serie \( \sum_{n=0}^{\infty}\left(-\frac13\right)^n \):`,
            opts: [String.raw`Converge a \( \frac32 \)`, String.raw`Converge a \( -\frac34 \)`, String.raw`Diverge`, String.raw`Converge a \( \frac34 \)`],
            ans: 3,
            exp: String.raw`\( |r|=\frac13\lt1 \): converge a \( \frac{1}{1-(-\frac13)}=\frac1{4/3}=\frac34 \). \( \frac32 \) usa \( r=+\frac13 \).`,
        },
        {
            t: "t8",
            s: "t8.2",
            q: String.raw`La serie \( \sum_{n=0}^{\infty}\left(\frac54\right)^n \):`,
            opts: [String.raw`Converge a \( -4 \)`, String.raw`Diverge`, String.raw`Converge a \( 4 \)`, String.raw`Converge a \( 5 \)`],
            ans: 1,
            exp: String.raw`\( r=\frac54\gt1 \): los términos crecen, diverge. \( -4 \) es lo que da aplicar la fórmula sin chequear \( |r|\lt1 \), y es absurdo para una suma de positivos.`,
        },
        {
            t: "t8",
            s: "t8.2",
            q: String.raw`La serie \( \sum_{n=0}^{\infty}(-1)^n \):`,
            opts: [String.raw`Converge a \( \frac12 \)`, String.raw`Converge a \( 0 \)`, String.raw`Diverge`, String.raw`Converge a \( 1 \)`],
            ans: 2,
            exp: String.raw`Las sumas parciales son \( 1,0,1,0,\dots \): no tienen límite. \( \frac12 \) es lo que da la fórmula con \( r=-1 \), que no vale porque \( |r|=1 \).`,
        },
        {
            t: "t8",
            s: "t8.2",
            q: String.raw`La serie \( \sum_{n=0}^{\infty}3\left(\frac14\right)^n \):`,
            opts: [String.raw`Converge a \( 4 \)`, String.raw`Converge a \( \frac34 \)`, String.raw`Converge a \( 1 \)`, String.raw`Converge a \( 12 \)`],
            ans: 0,
            exp: String.raw`Primer término 3, \( r=\frac14 \): \( \frac{3}{3/4}=4 \). \( \frac34 \) multiplica en vez de dividir y 12 usa \( 1-r=\frac14 \).`,
        },
        {
            t: "t8",
            s: "t8.2",
            q: String.raw`La serie geométrica \( \sum_{n=0}^{\infty}r^n \) converge si y solo si:`,
            opts: [String.raw`\( 0\lt r\lt1 \)`, String.raw`\( r\lt1 \)`, String.raw`\( -1\le r\le1 \)`, String.raw`\( -1\lt r\lt1 \)`],
            ans: 3,
            exp: String.raw`Converge exactamente cuando \( |r|\lt1 \), incluidos los \( r \) negativos. Con \( r=\pm1 \) diverge (suma infinitos 1, u oscila), y con \( r\lt-1 \) también.`,
        },
        {
            t: "t8",
            s: "t8.3",
            q: String.raw`La serie \( \sum_{n=2}^{\infty}\left(\frac13\right)^n \):`,
            opts: [String.raw`Converge a \( \frac12 \)`, String.raw`Converge a \( \frac16 \)`, String.raw`Converge a \( \frac32 \)`, String.raw`Converge a \( \frac19 \)`],
            ans: 1,
            exp: String.raw`Primer término \( (\frac13)^2=\frac19 \), \( r=\frac13 \): \( \frac{1/9}{2/3}=\frac16 \). \( \frac32 \) es la suma desde \( n=0 \) y \( \frac12 \) desde \( n=1 \).`,
        },
        {
            t: "t8",
            s: "t8.3",
            q: String.raw`La serie \( \sum_{n=1}^{\infty}\frac{3}{4^n} \):`,
            opts: [String.raw`Converge a \( 4 \)`, String.raw`Converge a \( \frac34 \)`, String.raw`Converge a \( 1 \)`, String.raw`Converge a \( \frac14 \)`],
            ans: 2,
            exp: String.raw`Primer término (\( n=1 \)): \( \frac34 \). \( r=\frac14 \): \( \frac{3/4}{3/4}=1 \). El 4 es la suma desde \( n=0 \) (con primer término 3).`,
        },
        {
            t: "t8",
            s: "t8.3",
            q: String.raw`La serie \( \sum_{n=3}^{\infty}\frac{2^n}{3^n} \):`,
            opts: [String.raw`Converge a \( \frac89 \)`, String.raw`Converge a \( 3 \)`, String.raw`Converge a \( \frac{8}{27} \)`, String.raw`Converge a \( \frac43 \)`],
            ans: 0,
            exp: String.raw`Primer término \( \frac{8}{27} \), \( r=\frac23 \): \( \frac{8/27}{1/3}=\frac89 \). 3 es la suma desde \( n=0 \) y \( \frac43 \) desde \( n=2 \).`,
        },
        {
            t: "t8",
            s: "t8.3",
            q: String.raw`La serie \( \sum_{n=0}^{\infty}\left(\frac12\right)^{n+2} \):`,
            opts: [String.raw`Converge a \( 2 \)`, String.raw`Converge a \( \frac14 \)`, String.raw`Converge a \( 1 \)`, String.raw`Converge a \( \frac12 \)`],
            ans: 3,
            exp: String.raw`Con \( n=0 \) el primer término es \( \frac14 \); \( r=\frac12 \): \( \frac{1/4}{1/2}=\frac12 \). El 2 ignora el \( +2 \) del exponente.`,
        },
        {
            t: "t8",
            s: "t8.3",
            q: String.raw`Se sabe que \( \sum_{n=0}^{\infty}\left(\frac25\right)^n=\frac53 \). Entonces \( \sum_{n=1}^{\infty}\left(\frac25\right)^n \) es:`,
            opts: [String.raw`\( \frac53 \)`, String.raw`\( \frac23 \)`, String.raw`\( \frac{13}{15} \)`, String.raw`\( \frac{8}{3} \)`],
            ans: 1,
            exp: String.raw`Es la misma serie sin el término \( n=0 \), que vale 1: \( \frac53-1=\frac23 \). También directo: \( \frac{2/5}{3/5}=\frac23 \).`,
        },
        {
            t: "t8",
            s: "t8.4",
            q: String.raw`La serie \( \sum_{n=1}^{\infty}\frac{3^{n+1}}{4^n} \):`,
            opts: [String.raw`Diverge`, String.raw`Converge a \( 12 \)`, String.raw`Converge a \( 9 \)`, String.raw`Converge a \( 3 \)`],
            ans: 2,
            exp: String.raw`\( r=\frac34 \). Primer término (\( n=1 \)): \( \frac{9}{4} \). Suma: \( \frac{9/4}{1/4}=9 \). El 12 arranca en \( n=0 \) (primer término 3).`,
        },
        {
            t: "t8",
            s: "t8.4",
            q: String.raw`La serie \( \sum_{n=0}^{\infty}\frac{2^{n+1}}{5^{n-1}} \):`,
            opts: [String.raw`Converge a \( \frac{50}3 \)`, String.raw`Converge a \( \frac{10}3 \)`, String.raw`Converge a \( \frac53 \)`, String.raw`Diverge`],
            ans: 0,
            exp: String.raw`Con \( n=0 \): \( \frac{2}{5^{-1}}=10 \). \( r=\frac25 \). Suma \( \frac{10}{3/5}=\frac{50}3 \). \( \frac{10}3 \) toma 2 como primer término (olvida que \( 5^{-1} \) abajo multiplica por 5) y \( \frac53 \) ignora todas las constantes.`,
        },
        {
            t: "t8",
            s: "t8.4",
            q: String.raw`La serie \( \sum_{n=1}^{\infty}\frac{4^n}{3^{2n+1}} \):`,
            opts: [String.raw`Converge a \( \frac45 \)`, String.raw`Converge a \( \frac{12}{5} \)`, String.raw`Diverge`, String.raw`Converge a \( \frac4{15} \)`],
            ans: 3,
            exp: String.raw`\( 3^{2n+1}=3\cdot9^n \), así que \( r=\frac49 \). Primer término: \( \frac{4}{27} \). Suma: \( \frac{4/27}{5/9}=\frac4{15} \). \( \frac45 \) olvida el 3 extra del denominador.`,
        },
        {
            t: "t8",
            s: "t8.4",
            q: String.raw`La serie \( \sum_{n=0}^{\infty}\frac{2^{2n}}{5^{n+1}} \):`,
            opts: [String.raw`Converge a \( 5 \)`, String.raw`Converge a \( 1 \)`, String.raw`Converge a \( \frac45 \)`, String.raw`Diverge`],
            ans: 1,
            exp: String.raw`\( 2^{2n}=4^n \), \( r=\frac45 \). Primer término \( \frac15 \). Suma: \( \frac{1/5}{1/5}=1 \). El 5 olvida el \( 5^{+1} \) del denominador (primer término 1).`,
        },
        {
            t: "t8",
            s: "t8.4",
            q: String.raw`La serie \( \sum_{n=1}^{\infty}\frac{3^{2n}}{2^{3n}} \):`,
            opts: [String.raw`Converge a \( -9 \)`, String.raw`Converge a \( 9 \)`, String.raw`Diverge`, String.raw`Converge a \( \frac98 \)`],
            ans: 2,
            exp: String.raw`\( 3^{2n}=9^n \) y \( 2^{3n}=8^n \): \( r=\frac98\gt1 \), diverge. \( -9 \) es el resultado de aplicar la fórmula sin chequear \( |r| \).`,
        },
        {
            t: "t8",
            s: "t8.4",
            q: String.raw`La serie \( \sum_{n=2}^{\infty}\frac{5}{2^{n-1}} \):`,
            opts: [String.raw`Converge a \( 5 \)`, String.raw`Converge a \( 10 \)`, String.raw`Converge a \( \frac52 \)`, String.raw`Converge a \( 20 \)`],
            ans: 0,
            exp: String.raw`Con \( n=2 \): \( \frac52 \). \( r=\frac12 \). Suma \( \frac{5/2}{1/2}=5 \). El 10 arranca en \( n=1 \) y el 20 en \( n=0 \).`,
        },
        {
            t: "t8",
            s: "t8.5",
            q: String.raw`La serie \( \sum_{n=0}^{\infty}\frac{2^n+3^n}{6^n} \):`,
            opts: [String.raw`Converge a \( \frac32 \)`, String.raw`Converge a \( 2 \)`, String.raw`Converge a \( \frac65 \)`, String.raw`Converge a \( \frac72 \)`],
            ans: 3,
            exp: String.raw`\( \frac{2^n}{6^n}=(\frac13)^n \) y \( \frac{3^n}{6^n}=(\frac12)^n \). Sumas: \( \frac32 \) y 2. Total \( \frac72 \). \( \frac32 \) y 2 son cada parte sola; \( \frac65 \) usa \( r=\frac56 \) para todo.`,
        },
        {
            t: "t8",
            s: "t8.5",
            q: String.raw`La serie \( \sum_{n=1}^{\infty}\frac{3+2^n}{4^n} \):`,
            opts: [String.raw`Converge a \( 6 \)`, String.raw`Converge a \( 2 \)`, String.raw`Converge a \( 1 \)`, String.raw`Converge a \( \frac{3}{2} \)`],
            ans: 1,
            exp: String.raw`\( \sum_{n\ge1}\frac3{4^n}=\frac{3/4}{3/4}=1 \) y \( \sum_{n\ge1}(\frac12)^n=\frac{1/2}{1/2}=1 \). Total 2. El 6 suma las dos desde \( n=0 \) (\( 4+2 \)) y el 1 es una sola de las partes.`,
        },
        {
            t: "t8",
            s: "t8.5",
            q: String.raw`La serie \( \sum_{n=1}^{\infty}\frac{1+5^n}{4^n} \):`,
            opts: [String.raw`Converge a \( -\frac{14}3 \)`, String.raw`Converge a \( \frac13 \)`, String.raw`Diverge`, String.raw`Converge a \( -5 \)`],
            ans: 2,
            exp: String.raw`\( \sum\frac1{4^n} \) converge, pero \( \sum(\frac54)^n \) tiene \( r\gt1 \) y diverge: el total diverge. \( -\frac{14}3 \) sale de aplicar la fórmula a las dos partes sin chequear.`,
        },
        {
            t: "t8",
            s: "t8.5",
            q: String.raw`La serie \( \sum_{n=0}^{\infty}\frac{2^{n+1}-1}{3^n} \):`,
            opts: [String.raw`Converge a \( \frac92 \)`, String.raw`Converge a \( \frac{15}{2} \)`, String.raw`Converge a \( 6 \)`, String.raw`Converge a \( \frac32 \)`],
            ans: 0,
            exp: String.raw`\( \sum\frac{2\cdot2^n}{3^n}=\frac{2}{1/3}=6 \) y \( \sum\frac1{3^n}=\frac32 \). Resta: \( 6-\frac32=\frac92 \). \( \frac{15}2 \) suma en vez de restar.`,
        },
        {
            t: "t8",
            s: "t8.5",
            q: String.raw`La serie \( \sum_{n=1}^{\infty}\frac{2^n+(-1)^n}{5^n} \):`,
            opts: [String.raw`Converge a \( \frac56 \)`, String.raw`Converge a \( \frac23 \)`, String.raw`Converge a \( \frac13 \)`, String.raw`Converge a \( \frac12 \)`],
            ans: 3,
            exp: String.raw`\( \sum_{n\ge1}(\frac25)^n=\frac{2/5}{3/5}=\frac23 \). \( \sum_{n\ge1}(-\frac15)^n=\frac{-1/5}{6/5}=-\frac16 \). Total \( \frac12 \). \( \frac56 \) toma la parte con \( (-1)^n \) con signo \( + \).`,
        },
        {
            t: "t8",
            s: "t8.6",
            q: String.raw`Si \( \sum_{n=0}^{\infty}\frac{x^n}{2^n}=3 \), entonces:`,
            opts: [String.raw`\( x=\frac23 \)`, String.raw`\( x=\frac43 \)`, String.raw`\( x=\frac32 \)`, String.raw`\( x=-\frac43 \)`],
            ans: 1,
            exp: String.raw`\( r=\frac x2 \), primer término 1: \( \frac1{1-x/2}=3\Rightarrow1-\frac x2=\frac13\Rightarrow x=\frac43 \). \( |r|=\frac23\lt1 \): vale.`,
        },
        {
            t: "t8",
            s: "t8.6",
            q: String.raw`Si \( \sum_{n=1}^{\infty}\frac{3}{x^n}=1 \), entonces:`,
            opts: [String.raw`\( x=3 \)`, String.raw`\( x=\frac32 \)`, String.raw`\( x=4 \)`, String.raw`\( x=-\frac12 \)`],
            ans: 2,
            exp: String.raw`Primer término \( \frac3x \), \( r=\frac1x \): \( \frac{3/x}{1-1/x}=\frac3{x-1}=1\Rightarrow x=4 \), con \( |r|=\frac14 \). \( x=-\frac12 \) sale de tomar 3 como primer término (como si arrancara en 0): \( \frac{3}{1-1/x}=1 \); además daría \( |r|=2 \).`,
        },
        {
            t: "t8",
            s: "t8.6",
            q: String.raw`Si \( \sum_{n=0}^{\infty}\frac{1}{x^{2n}}=\frac43 \), entonces:`,
            opts: [String.raw`\( x=2 \) o \( x=-2 \)`, String.raw`\( x=2 \) solamente`, String.raw`\( x=4 \)`, String.raw`\( x=\frac12 \)`],
            ans: 0,
            exp: String.raw`\( r=\frac1{x^2} \): \( \frac{1}{1-1/x^2}=\frac43\Rightarrow\frac1{x^2}=\frac14\Rightarrow x=\pm2 \). En los dos casos \( r=\frac14 \): ninguna se descarta. \( x=\frac12 \) daría \( r=4 \).`,
        },
        {
            t: "t8",
            s: "t8.6",
            q: String.raw`Si \( \sum_{n=0}^{\infty}\frac{2}{x^{2n+1}}=\frac34 \), entonces:`,
            opts: [String.raw`\( x=-\frac13 \)`, String.raw`\( x=3 \) o \( x=-\frac13 \)`, String.raw`\( x=\frac13 \)`, String.raw`\( x=3 \)`],
            ans: 3,
            exp: String.raw`Primer término \( \frac2x \), \( r=\frac1{x^2} \): \( \frac{2x}{x^2-1}=\frac34\Rightarrow3x^2-8x-3=0\Rightarrow x=3 \) o \( x=-\frac13 \). Con \( x=-\frac13 \), \( r=9\gt1 \): se descarta. Queda \( x=3 \).`,
        },
        {
            t: "t8",
            s: "t8.6",
            q: String.raw`Si \( \sum_{n=1}^{\infty}\left(\frac{x}{3}\right)^n=-\frac14 \), entonces:`,
            opts: [String.raw`\( x=15 \)`, String.raw`\( x=-1 \)`, String.raw`\( x=1 \)`, String.raw`\( x=-3 \)`],
            ans: 1,
            exp: String.raw`Primer término \( \frac x3 \): \( \frac{x/3}{1-x/3}=\frac{x}{3-x}=-\frac14\Rightarrow x=-1 \), con \( |r|=\frac13 \). \( x=15 \) sale de usar \( \frac1{1-r} \) (arrancar en 0), y además daría \( r=5 \).`,
        },
        {
            t: "t8",
            s: "t8.6",
            q: String.raw`La serie \( \sum_{n=0}^{\infty}\frac{(x-1)^n}{3^n} \) converge si y solo si:`,
            opts: [String.raw`\( -3\lt x\lt3 \)`, String.raw`\( 0\lt x\lt2 \)`, String.raw`\( -2\lt x\lt4 \)`, String.raw`\( -2\lt x\le4 \)`],
            ans: 2,
            exp: String.raw`\( r=\frac{x-1}3 \) y hace falta \( |r|\lt1 \iff|x-1|\lt3\iff-2\lt x\lt4 \). En \( x=4 \), \( r=1 \) y diverge: el intervalo es abierto.`,
        },
    ],
};

export default deep;
