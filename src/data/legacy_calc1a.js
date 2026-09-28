// Material del 1er semestre 2026 (versión anterior del sitio), convertido a datos.
// Formato: ver README (notes, flashcards, questions, exercises, checklist).
const data = {
    "notes": [
        {
            "id": "n-c-mapa",
            "title": "Mapa",
            "part": "General",
            "html": "<h3>Mapa de la materia (empiezo por acá)</h3>\n<h4>¿Qué es el cálculo y para qué lo estudio?</h4>\n<p>Arranco de cero. Una <b>función</b> es una máquina que a cada número de entrada (x) le asigna una salida (f(x)) — por ejemplo, \"a cada cantidad producida le asigno su costo\". El <b>cálculo</b> es la rama de la matemática que estudia <b>cómo cambian</b> esas funciones: si suben o bajan, qué tan rápido, hacia dónde se acercan y dónde están sus puntos máximos o mínimos. En economía eso es oro puro, porque me deja contestar preguntas como \"¿qué cantidad me da la <b>máxima</b> utilidad?\" o \"¿cómo reacciona la demanda si subo el precio?\".</p>\n<div class=\"eli\"><span class=\"tag\">ELI5</span> Si una función es una película de cómo se mueve algo, el cálculo es la cámara lenta: te deja ver, instante a instante, qué tan rápido y hacia dónde va.</div>\n<h4>El programa completo, en orden (las 9 unidades del manual)</h4>\n<p>El curso sigue un orden que no es casual: cada unidad usa la anterior. Por eso conviene estudiarlo <b>de arriba hacia abajo</b>, empezando por las funciones (Cap. 1) y terminando en optimización (Cap. 9). Las primeras 4 fueron el <b>1er parcial</b>; de la 5 a la 9 es el <b>2º</b>.</p>\n<table>\n<tr><th>Cap.</th><th>Unidad</th><th>Parcial</th><th>La pregunta que contesta</th></tr>\n<tr><td>1</td><td>Funciones lineales</td><td>P1</td><td>¿Cómo modelo algo de cambio constante (costos, ingresos)?</td></tr>\n<tr><td>2</td><td>Funciones cuadráticas</td><td>P1</td><td>¿Cómo es una parábola y dónde está su máx/mín (vértice)?</td></tr>\n<tr><td>3</td><td>Más sobre funciones</td><td>P1</td><td>Dominio, operaciones, composición, valor absoluto, por tramos</td></tr>\n<tr><td>4</td><td>Exponencial y logarítmica</td><td>P1</td><td>Crecimiento (interés compuesto) y su función inversa</td></tr>\n<tr><td>5</td><td>Límites para x→a</td><td>P2</td><td>¿Hacia qué valor se acerca f(x) cerca de un punto?</td></tr>\n<tr><td>6</td><td>Límites para x→±∞</td><td>P2</td><td>¿Qué hace la función \"a lo lejos\"? (asíntotas)</td></tr>\n<tr><td>7</td><td>Continuidad</td><td>P2</td><td>¿La función se corta o pega un salto?</td></tr>\n<tr><td>8</td><td>Derivabilidad</td><td>P2</td><td>¿Qué tan rápido cambia? ¿Cuál es la pendiente?</td></tr>\n<tr><td>9</td><td>Variación y optimización</td><td>P2</td><td>¿Dónde crece, decrece, dónde está el máx/mín?</td></tr>\n</table>\n<p class=\"tagline\">En el menú de arriba las agrupé en las pestañas P1 (funciones) y P2 (límites, continuidad, derivadas, optimización), en este mismo orden.</p>\n<div class=\"idea\">🔗 <b>El hilo conductor:</b> con las <b>funciones</b> (Cap 1–4) armo el <b>límite</b> (5–6) → el límite define la <b>derivada</b> (8) → la derivada me dice si la función <b>crece o decrece</b> → y eso me lleva a los <b>máximos y mínimos</b> (optimización, 9). La continuidad (7) es el puente. Si una pieza no me cierra, vuelvo a la anterior, porque todo se encadena.</div>\n<div class=\"key\"><span class=\"tag\">★ Regla de oro para el parcial</span> Casi todo ejercicio se reduce a uno de dos gestos: <b>levantar una indeterminación</b> (si es de límites) o <b>derivar y estudiar el signo de f ′</b> (todo lo demás: crecimiento, máximos, optimización). Apenas reconozco cuál de los dos me piden, ya tengo medio ejercicio ganado. Además es <b>sin material</b>, así que las definiciones, la tabla de derivadas y los procedimientos los llevo memorizados.</div>\n<h4>Cómo es la prueba de verdad (lo saqué de las revisiones viejas)</h4>\n<p>Miré la 2ª revisión de julio 2025 para saber a qué me enfrento. Esto es clave para no llevarme sorpresas:</p>\n<table>\n<tr><th>Dato</th><th>Detalle</th></tr>\n<tr><td>Formato</td><td><b>10 preguntas de opción múltiple</b> (A, B, C, D), una sola correcta</td></tr>\n<tr><td>Puntaje</td><td>+6 si acierto · <b>−1.5 si me equivoco</b> · 0 si dejo en blanco. Total 60, mínimo 15</td></tr>\n<tr><td>Tiempo</td><td>120 minutos · sin material</td></tr>\n<tr><td>Notación</td><td>Usan <b>L</b> en lugar de ln (logaritmo neperiano)</td></tr>\n</table>\n<div class=\"trap\"><span class=\"tag\">Estrategia por el puntaje negativo</span> Como equivocarse <b>resta</b> 1.5, si entre dos opciones no tengo ni idea, a veces conviene dejar en blanco (0) antes que arriesgar. Pero si puedo <b>descartar</b> dos opciones, ahí sí conviene jugármela.</div>\n<div class=\"key\"><span class=\"tag\">Tipos de pregunta que vi (y que practico en el Quiz)</span> Límites al infinito con órdenes de infinito (ej. x²/eˣ) · continuidad de funciones por tramos hallando un parámetro · derivadas con producto y regla de la cadena (ej. e²ˣ·L(2x)) · composición de funciones · mínimo/máximo absoluto en un intervalo cerrado · y preguntas <b>conceptuales</b> de \"¿cuáles de estos enunciados son verdaderos?\" (sobre Bolzano, Weierstrass, crecimiento y derivada).</div>\n<h4>⭐ Lo que SIEMPRE cae en el 2º parcial (crucé varios años de revisiones)</h4>\n<p>Comparé las 2ª revisiones de varios años (2023–2025) y los tipos de pregunta se repiten casi calcados. Si domino estos 7, tengo el parcial muy encaminado. <b>Estos son los que rinden:</b></p>\n<table>\n<tr><th>#</th><th>Lo que preguntan (cae siempre)</th><th>Ejemplo real de las revisiones</th></tr>\n<tr><td>1</td><td><b>Derivar un producto/cociente</b> con exponencial y logaritmo</td><td>Derivá f(x)=eˣ·L(3x²) o x²·L(x)</td></tr>\n<tr><td>2</td><td><b>Límite con órdenes de infinito</b> (eˣ ≫ xⁿ ≫ L x) o 0/0 factorizando</td><td>lím de x²/eˣ cuando x→±∞</td></tr>\n<tr><td>3</td><td><b>Continuidad de función por tramos</b>: hallar el parámetro, o composición f∘g / g∘f</td><td>Hallá a, b para que f sea continua; ¿f∘g es continua en 0?</td></tr>\n<tr><td>4</td><td><b>Cadena compuesta</b>: dada f con f(a) y f′(a), derivar F(x)=(f(x))ⁿ+f(xᵏ)</td><td>F(x)=(f(x))³+f(x³), hallá F′(1) — ¡apareció igual en 2023 y 2025!</td></tr>\n<tr><td>5</td><td><b>Recta tangente</b> (directa o al revés): relacionar f(a) y f′(a) con la tangente</td><td>Si y=3x+4 es tangente en (1,f(1)), ¿cuánto valen f(1) y f′(1)?</td></tr>\n<tr><td>6</td><td><b>Máximo/mínimo absoluto en un intervalo cerrado [a,b]</b> + máx/mín relativos</td><td>Mínimo absoluto de x⁴−4x−1 en [2,3]; máx/mín relativos de un cúbico</td></tr>\n<tr><td>7</td><td><b>Teoría V/F</b>: Bolzano, Weierstrass, Lagrange, \"f′&gt;0 ⟺ creciente\", \"derivable ⟹ continua\"</td><td>\"¿Cuáles de estos enunciados son verdaderos?\"</td></tr>\n</table>\n<h4>⭐ Lo que SIEMPRE cae en el 1er parcial (funciones)</h4>\n<p>También crucé las 1ª revisiones (2023–2025). Aunque el examen que rindo ahora es el 2º, esto es clave para los que rinden examen de toda la materia:</p>\n<table>\n<tr><th>#</th><th>Lo que preguntan (cae siempre)</th><th>Ejemplo real</th></tr>\n<tr><td>1</td><td><b>Optimización económica</b>: costo y demanda lineales → utilidad máxima (precio, costo o utilidad)</td><td>CF=10, cv=5, D(p)=30−2p → ¿utilidad máxima?</td></tr>\n<tr><td>2</td><td><b>Intersección</b> de dos rectas, o de una recta con una parábola (cuántos puntos)</td><td>¿En cuántos puntos se cortan x+2 y x²?</td></tr>\n<tr><td>3</td><td><b>Recorrido / dominio</b> de funciones (con |x|, cuadrática o por tramos)</td><td>El recorrido de f(x)=|x|−3</td></tr>\n<tr><td>4</td><td><b>Composición</b> de funciones evaluada</td><td>(f∘g)(0) y (g∘f)(0)</td></tr>\n<tr><td>5</td><td><b>Función por tramos con parámetros</b> (hallar a, b por condiciones/raíces)</td><td>Hallar a y b sabiendo que 0 y 3 son raíces</td></tr>\n<tr><td>6</td><td><b>Ecuaciones con valor absoluto</b> (cuántas soluciones)</td><td>x² + 3|x| + 2 = 0</td></tr>\n<tr><td>7</td><td><b>Ecuaciones exponenciales/logarítmicas</b> y crecimiento/decrecimiento exponencial</td><td>Resolver 2e²ˣ=12; P(t)=A·e⁻⁸ᵗ</td></tr>\n</table>\n<div class=\"key\"><span class=\"tag\">Mi estrategia de estudio</span> Practico estos tipos (7 del 1º + 7 del 2º) hasta que me salgan en automático. En la autoevaluación y en los ejercicios de cada unidad están todos, con la explicación de por qué cada opción es correcta o incorrecta.</div>"
        },
        {
            "id": "n-c-u1",
            "title": "1 · Lineales",
            "part": "P1",
            "html": "<h3>Unidad 1 · Funciones lineales (Cap. 1)</h3>\n<h4>Antes que nada: ¿qué es una función?</h4>\n<p>Una <b>función</b> es una regla que a cada número de entrada le asigna <b>un único</b> número de salida. La entrada se llama x (variable independiente), la salida y o f(x). En economía la uso para conectar dos cantidades: \"a cada cantidad producida, su costo\", \"a cada precio, su demanda\". En el 1er parcial conozco las familias de funciones; en el 2º las exprimo con cálculo.</p>\n<h4>Función lineal: cambio constante</h4>\n<p>Es la más simple: <span class=\"fml\">y = m·x + n</span>. Su gráfico es una <b>recta</b>. Tiene dos números con significado:</p>\n<table>\n<tr><th>Símbolo</th><th>Qué es</th><th>Qué significa</th></tr>\n<tr><td><b>m</b> (pendiente)</td><td>cuánto cambia y por cada +1 en x</td><td>la <b>tasa de cambio</b>. m&gt;0 sube, m&lt;0 baja, m=0 plana</td></tr>\n<tr><td><b>n</b> (ordenada en el origen)</td><td>el valor de y cuando x = 0</td><td>el valor de y donde la recta corta el eje vertical (eje y)</td></tr>\n</table>\n<div style=\"text-align:center;margin:16px 0\">\n<svg style=\"max-width:340px;width:100%\" viewbox=\"0 0 360 200\" xmlns=\"http://www.w3.org/2000/svg\">\n<line stroke=\"#7a8499\" stroke-width=\"1.5\" x1=\"40\" x2=\"40\" y1=\"12\" y2=\"180\"></line>\n<line stroke=\"#7a8499\" stroke-width=\"1.5\" x1=\"14\" x2=\"346\" y1=\"160\" y2=\"160\"></line>\n<text fill=\"#aab4c8\" font-size=\"13\" x=\"349\" y=\"165\">x</text>\n<text fill=\"#aab4c8\" font-size=\"13\" x=\"29\" y=\"14\">y</text>\n<line stroke=\"#6c8cff\" stroke-width=\"2.5\" x1=\"15\" x2=\"322\" y1=\"127\" y2=\"32\"></line>\n<text fill=\"#6c8cff\" font-size=\"13\" x=\"250\" y=\"28\">y = m·x + n</text>\n<line stroke=\"#36d399\" stroke-dasharray=\"4 3\" stroke-width=\"1.5\" x1=\"40\" x2=\"180\" y1=\"120\" y2=\"120\"></line>\n<line stroke=\"#36d399\" stroke-dasharray=\"4 3\" stroke-width=\"1.5\" x1=\"180\" x2=\"180\" y1=\"120\" y2=\"80\"></line>\n<text fill=\"#36d399\" font-size=\"12\" x=\"78\" y=\"135\">Δx (avance)</text>\n<text fill=\"#36d399\" font-size=\"12\" x=\"185\" y=\"104\">Δy (subida)</text>\n<circle cx=\"40\" cy=\"120\" fill=\"#ffc24b\" r=\"4\"></circle>\n<text fill=\"#ffc24b\" font-size=\"14\" x=\"22\" y=\"116\">n</text>\n</svg>\n<div style=\"color:#7a8499;font-size:.8rem\">La recta corta el eje y en <b>n</b>; la pendiente <b>m = Δy/Δx</b> (subida sobre avance) es la misma en toda la recta.</div>\n</div>\n<p>Es lineal porque la tasa de cambio es <b>siempre la misma</b> (cada paso sube lo mismo). Por eso modela cosas con costo constante por unidad:</p>\n<table>\n<tr><th>En economía</th><th>Modelo</th><th>Lectura</th></tr>\n<tr><td>Costo total</td><td>CT = costos fijos + (costo por unidad)·x</td><td>n = costos fijos; m = costo variable unitario</td></tr>\n<tr><td>Ingreso</td><td>I = precio·x</td><td>arranca en 0 y sube \"precio\" por cada unidad vendida</td></tr>\n<tr><td>Utilidad</td><td>U = I − CT</td><td>el <b>punto de equilibrio</b> es donde U = 0 (ni gano ni pierdo)</td></tr>\n</table>\n<div class=\"key\"><span class=\"tag\">Determinar una recta</span> Si tengo dos puntos, la pendiente es <span class=\"fml\">m = (y₂−y₁)/(x₂−x₁)</span> (\"cuánto subió y\" sobre \"cuánto avanzó x\"). Para ver dónde se cruzan dos rectas, igualo sus fórmulas y despejo x.</div>\n<h4> Hoja de fórmulas — Unidad 1</h4>\n<div class=\"formula-grid\">\n<div class=\"fbox\"><div class=\"big\">y = m·x + n</div><small>Recta · m = pendiente, n = ordenada en el origen</small></div>\n<div class=\"fbox\"><div class=\"big\">m = (y₂−y₁)/(x₂−x₁)</div><small>Pendiente a partir de dos puntos</small></div>\n<div class=\"fbox\"><div class=\"big\">CT = CF + cv·x</div><small>Costo total (fijos + variable·cantidad)</small></div>\n<div class=\"fbox\"><div class=\"big\">I = p·x · U = I − CT</div><small>Ingreso y utilidad</small></div>\n<div class=\"fbox\"><div class=\"big\">Equilibrio: U = 0 (o Qd = Qs)</div><small>Punto de no ganar ni perder / equilibrio de mercado</small></div>\n</div>\n<h4>Ejercicios resueltos de esta unidad (de fácil a difícil)</h4>"
        },
        {
            "id": "n-c-u2",
            "title": "2 · Cuadráticas",
            "part": "P1",
            "html": "<h3>Unidad 2 · Funciones cuadráticas (Cap. 2)</h3>\n<div class=\"idea\">✓ <b>Idea madre:</b> después de la recta (cambio constante) viene la <b>parábola</b>, que sube y baja: tiene un punto más alto o más bajo (el vértice). En economía modela ingreso y utilidad, donde justo me interesa ese máximo.</div>\n<h4>Función cuadrática: la parábola</h4>\n<p>Forma <span class=\"fml\">y = ax² + bx + c</span>. Su gráfico es una <b>parábola</b> (una \"U\" o una \"U invertida\"). El número <b>a</b> manda la forma:</p>\n<table>\n<tr><th>Si…</th><th>La parábola…</th><th>Tiene un…</th></tr>\n<tr><td>a &gt; 0</td><td>abre hacia arriba (U)</td><td><b>mínimo</b> en el vértice</td></tr>\n<tr><td>a &lt; 0</td><td>abre hacia abajo (∩)</td><td><b>máximo</b> en el vértice</td></tr>\n</table>\n<div style=\"text-align:center;margin:16px 0\">\n<svg style=\"max-width:340px;width:100%\" viewbox=\"0 0 360 200\" xmlns=\"http://www.w3.org/2000/svg\">\n<line stroke=\"#7a8499\" stroke-width=\"1.5\" x1=\"20\" x2=\"345\" y1=\"160\" y2=\"160\"></line>\n<line stroke=\"#7a8499\" stroke-width=\"1.5\" x1=\"180\" x2=\"180\" y1=\"12\" y2=\"185\"></line>\n<text fill=\"#aab4c8\" font-size=\"13\" x=\"349\" y=\"165\">x</text>\n<path d=\"M 80 160 Q 180 -50 280 160\" fill=\"none\" stroke=\"#6c8cff\" stroke-width=\"2.5\"></path>\n<circle cx=\"80\" cy=\"160\" fill=\"#ff6b6b\" r=\"4\"></circle>\n<circle cx=\"280\" cy=\"160\" fill=\"#ff6b6b\" r=\"4\"></circle>\n<text fill=\"#ff6b6b\" font-size=\"12\" x=\"58\" y=\"178\">raíz</text>\n<text fill=\"#ff6b6b\" font-size=\"12\" x=\"262\" y=\"178\">raíz</text>\n<circle cx=\"180\" cy=\"55\" fill=\"#ffc24b\" r=\"4\"></circle>\n<text fill=\"#ffc24b\" font-size=\"12\" x=\"188\" y=\"52\">vértice (máximo)</text>\n<text fill=\"#6c8cff\" font-size=\"13\" x=\"300\" y=\"110\">a &lt; 0</text>\n</svg>\n<div style=\"color:#7a8499;font-size:.8rem\">Parábola con <b>a &lt; 0</b> (abre hacia abajo): las <b>raíces</b> son los cortes con el eje x; el <b>vértice</b> es el máximo.</div>\n</div>\n<p>Dos cosas que siempre me piden:</p>\n<div class=\"formula-grid\">\n<div class=\"fbox\"><div class=\"big\">x = (−b ± √(b²−4ac)) / 2a</div><small><b>Raíces (Bhaskara):</b> los x donde la parábola corta el eje horizontal (donde y = 0)</small></div>\n<div class=\"fbox\"><div class=\"big\">x_v = −b / 2a</div><small><b>Vértice:</b> el x donde está el máximo o mínimo</small></div>\n</div>\n<div class=\"key\"><span class=\"tag\">Conexión económica</span> Si el ingreso o la utilidad es una parábola hacia abajo, el <b>vértice es el punto de máximo</b>. Esto lo voy a reencontrar en el 2º parcial: ahí el vértice sale de derivar e igualar a cero (f ′=0). ¡Es la misma idea!</div>\n<div class=\"trap\"><span class=\"tag\">Ojo con la trampa</span> El signo de <b>a</b> decide si el vértice es máximo o mínimo. No confundas las <b>raíces</b> (cortes con el eje x) con el <b>vértice</b> (la punta).</div>\n<h4> Hoja de fórmulas — Unidad 2</h4>\n<div class=\"formula-grid\">\n<div class=\"fbox\"><div class=\"big\">y = ax² + bx + c</div><small>Forma general · a≠0</small></div>\n<div class=\"fbox\"><div class=\"big\">Δ = b² − 4ac</div><small>Discriminante: Δ&gt;0 → 2 raíces · Δ=0 → 1 · Δ&lt;0 → ninguna real</small></div>\n<div class=\"fbox\"><div class=\"big\">x = (−b ± √Δ) / 2a</div><small>Raíces (Bhaskara)</small></div>\n<div class=\"fbox\"><div class=\"big\">x_v = −b / 2a</div><small>Vértice (x). Su y se obtiene evaluando: y_v = f(x_v)</small></div>\n<div class=\"fbox\"><div class=\"big\">a &gt; 0 → mínimo · a &lt; 0 → máximo</div><small>El signo de a decide la concavidad</small></div>\n</div>\n<h4>Ejercicios resueltos de esta unidad (de fácil a difícil)</h4>"
        },
        {
            "id": "n-c-u3",
            "title": "3 · Más funciones",
            "part": "P1",
            "html": "<h3>Unidad 3 · Más sobre funciones (Cap. 3)</h3>\n<div class=\"idea\">✓ <b>Idea madre:</b> antes de avanzar necesito manejar bien las funciones en general: dónde existen (dominio), cómo combinarlas y cómo meter una dentro de otra (composición). Esto último es la semilla de la regla de la cadena del 2º parcial.</div>\n<h4>Conceptos que necesito para no trabarme después</h4>\n<table>\n<tr><th>Concepto</th><th>Qué es</th><th>Por qué me importa</th></tr>\n<tr><td><b>Dominio</b></td><td>El conjunto de valores de x donde la función <b>existe</b></td><td>Ojo con dos prohibiciones: no se puede dividir por cero ni sacar raíz de un número negativo. Eso \"saca\" valores del dominio</td></tr>\n<tr><td><b>Operaciones</b></td><td>Sumar, restar, multiplicar o dividir funciones</td><td>las funciones de verdad son combinaciones de las básicas</td></tr>\n<tr><td><b>Composición</b></td><td>Meter una función <b>adentro</b> de otra: f(g(x))</td><td>es la base de la <b>regla de la cadena</b> del 2º parcial</td></tr>\n<tr><td><b>Función potencial</b></td><td>y = xⁿ</td><td>es la que más derivo después (regla: baja el exponente)</td></tr>\n<tr><td><b>Por tramos / valor absoluto</b></td><td>Distinta fórmula según el intervalo de x</td><td>ej. el IRPF, que cobra distinto % por franjas de ingreso</td></tr>\n</table>\n<h4> Hoja de fórmulas — Unidad 3</h4>\n<div class=\"formula-grid\">\n<div class=\"fbox\"><div class=\"big\">Dominio: denominador ≠ 0</div><small>No se puede dividir por cero</small></div>\n<div class=\"fbox\"><div class=\"big\">Dominio: lo de adentro de √ ≥ 0</div><small>No hay raíz (par) de negativos</small></div>\n<div class=\"fbox\"><div class=\"big\">(f∘g)(x) = f(g(x))</div><small>Composición: primero g, después f</small></div>\n<div class=\"fbox\"><div class=\"big\">|x| = x si x≥0 ; −x si x&lt;0</div><small>Valor absoluto (función por tramos)</small></div>\n</div>\n<h4>Ejercicios resueltos de esta unidad (de fácil a difícil)</h4>"
        },
        {
            "id": "n-c-u4",
            "title": "4 · Exp y log",
            "part": "P1",
            "html": "<h3>Unidad 4 · Exponencial y logarítmica (Cap. 4)</h3>\n<div class=\"idea\">✓ <b>Idea madre:</b> dos familias de funciones que son una la inversa de la otra. La exponencial modela crecimiento que se acelera (interés compuesto); el logaritmo lo \"deshace\". Reaparecen mucho en el 2º parcial.</div>\n<h4>Función exponencial: crecimiento que se acelera</h4>\n<p>Es <span class=\"fml\">y = aˣ</span>: la variable está <b>en el exponente</b>. A diferencia de la lineal (que sube siempre lo mismo), la exponencial <b>crece cada vez más rápido</b> — por eso modela el interés compuesto, donde los intereses generan más intereses.</p>\n<div class=\"fbox\"><div class=\"big\">M = C·(1 + i)ⁿ</div><small>Monto final M, a partir de un capital C, a tasa i, durante n períodos. (1+i) se aplica n veces.</small></div>\n<div class=\"eli\"><span class=\"tag\">ELI5</span> Lineal = ahorrás $10 por mes (siempre igual). Exponencial = una bola de nieve que rueda: cuanto más grande, más nieve junta por vuelta.</div>\n<p>Hay una base especial, <b>e ≈ 2,718</b> (el número de Euler), que aparece naturalmente en crecimiento continuo. La exponencial de base e, <span class=\"fml\">eˣ</span>, es la reina del cálculo (su derivada es ella misma).</p>\n<div style=\"text-align:center;margin:16px 0\">\n<svg style=\"max-width:340px;width:100%\" viewbox=\"0 0 360 200\" xmlns=\"http://www.w3.org/2000/svg\">\n<line stroke=\"#7a8499\" stroke-width=\"1.5\" x1=\"40\" x2=\"40\" y1=\"12\" y2=\"175\"></line>\n<line stroke=\"#7a8499\" stroke-width=\"1.5\" x1=\"14\" x2=\"346\" y1=\"165\" y2=\"165\"></line>\n<text fill=\"#aab4c8\" font-size=\"13\" x=\"349\" y=\"170\">x</text>\n<line stroke=\"#7a8499\" stroke-dasharray=\"5 4\" stroke-width=\"2\" x1=\"40\" x2=\"320\" y1=\"150\" y2=\"70\"></line>\n<text fill=\"#aab4c8\" font-size=\"11\" x=\"285\" y=\"66\">lineal</text>\n<path d=\"M 45 160 Q 230 158 312 25\" fill=\"none\" stroke=\"#6c8cff\" stroke-width=\"2.5\"></path>\n<text fill=\"#6c8cff\" font-size=\"13\" x=\"255\" y=\"34\">y = eˣ</text>\n</svg>\n<div style=\"color:#7a8499;font-size:.8rem\">La exponencial (azul) arranca despacio pero después <b>se dispara</b>, mucho más rápido que una recta (punteada). Por eso, a la larga, le gana a cualquier potencia.</div>\n</div>\n<p>Y el logaritmo, al ser su <b>inversa</b>, es como esa misma curva <b>reflejada</b>: crece pero cada vez más lento.</p>\n<h4>Función logarítmica: la que \"deshace\" la exponencial</h4>\n<p>El <b>logaritmo</b> es la función <b>inversa</b> de la exponencial: hace la pregunta al revés. La exponencial dice \"si elevo a a la x, ¿cuánto da?\"; el logaritmo dice \"¿a qué exponente tengo que elevar a para llegar a este número?\".</p>\n<div class=\"formula-grid\">\n<div class=\"fbox\"><div class=\"big\">y = aˣ  ⟺  x = log_a(y)</div><small>Son la misma relación, leída en dos sentidos</small></div>\n<div class=\"fbox\"><div class=\"big\">ln(a·b) = ln a + ln b<br/>ln(aⁿ) = n·ln a</div><small>Propiedades: el log convierte productos en sumas y baja exponentes</small></div>\n</div>\n<p><b>ln</b> es el logaritmo natural (base e). Es el \"compañero\" de eˣ.</p>\n<div class=\"key\"><span class=\"tag\">Por qué importa para el 2º parcial</span> eˣ y ln x reaparecen todo el tiempo: en los <b>órdenes de infinito</b> de los límites (eˣ ≫ xⁿ ≫ ln x) y en la <b>tabla de derivadas</b> ((eˣ)′=eˣ, (ln x)′=1/x). Si las domino ahora, el 2º parcial se hace mucho más liviano.</div>\n<h4> Hoja de fórmulas — Unidad 4</h4>\n<div class=\"formula-grid\">\n<div class=\"fbox\"><div class=\"big\">M = C·(1 + i)ⁿ</div><small>Interés compuesto</small></div>\n<div class=\"fbox\"><div class=\"big\">y = aˣ ⟺ x = log_a(y)</div><small>Exponencial ↔ logaritmo (inversas)</small></div>\n<div class=\"fbox\"><div class=\"big\">L(a·b)=L a+L b · L(a/b)=L a−L b · L(aⁿ)=n·L a</div><small>Propiedades del log (el curso escribe L = ln)</small></div>\n<div class=\"fbox\"><div class=\"big\">L(1)=0 · L(e)=1 · eᴸ⁽ˣ⁾=x</div><small>Valores y cancelación útiles</small></div>\n</div>\n<h4>Ejercicios resueltos de esta unidad (de fácil a difícil)</h4>"
        },
        {
            "id": "n-c-u5",
            "title": "5 · Límites x→a",
            "part": "P2",
            "html": "<h3>Unidad 5 · Límites para x → a (Cap. 5)</h3>\n<h4>Primero lo macro: ¿para qué sirve un límite?</h4>\n<p>Antes de calcular nada, quiero entender <b>por qué existe esta herramienta</b>. Un límite responde una pregunta muy concreta: <i>\"¿hacia qué valor se está acercando una función cuando me acerco a cierto punto?\"</i>. Sirve para dos cosas que vienen después: (1) estudiar qué hace una función en puntos donde \"se rompe\" o ni siquiera existe, y (2) — la más importante— es la <b>base de la derivada</b> (el resto del curso se apoya en esto). Si entiendo bien límites, lo demás se encadena solo.</p>\n<div class=\"eli\"><span class=\"tag\">ELI5</span> Imaginá que caminás hacia una puerta. El límite es <b>a dónde estás llegando</b>, aunque la puerta esté tapiada y no puedas pasar. No importa qué hay exactamente en la puerta: importa hacia dónde venías yendo.</div>\n<h4>¿Qué significa \"x → a\"? (leo el símbolo)</h4>\n<p>La expresión <span class=\"fml\">x → a</span> se lee \"x tiende a a\" y significa: <b>x se acerca a a todo lo que quiera, por los dos lados, pero sin llegar nunca a ser exactamente a</b>. Esto último es la clave: <b>el límite NO mira el valor en a, mira los alrededores</b>. Por eso una función puede tener un \"agujero\" justo en a y aún así tener límite.</p>\n<p>La notación completa es <span class=\"fml\">lím_(x→a) f(x) = L</span>, y se lee: \"el límite de f(x), cuando x tiende a a, es L\". L es el número al que se está arrimando f(x).</p>\n<h4>Cómo lo calculo (paso 1: probar a sustituir)</h4>\n<p>Lo primero, siempre, es <b>sustituir</b>: meto x = a en la función y veo qué da. Si la función es \"tranquila\" en ese punto (un polinomio, por ejemplo), el límite es directamente ese valor. ¿Por qué? Porque esas funciones no pegan saltos: a dónde se acercan coincide con lo que valen. (Eso es justo la idea de <b>continuidad</b>, que vemos en la sección siguiente.)</p>\n<p>El problema aparece cuando al sustituir me da una <b>indeterminación</b>.</p>\n<h4>¿Qué es una \"indeterminación\"? (el caso 0/0)</h4>\n<p>Una indeterminación es un resultado que <b>por sí solo no me dice cuánto vale el límite</b>. El caso típico es <span class=\"fml\">0/0</span>: el numerador tiende a 0 y el denominador también. ¿Por qué no puedo concluir nada? Porque 0/0 <b>podría dar cualquier cosa</b> según cómo se acerquen a cero arriba y abajo (podría dar 4, dar 0, dar ∞…). No es que \"no exista\": es que <b>todavía no lo sé</b> y tengo que trabajarlo. A eso se le llama \"levantar la indeterminación\".</p>\n<div class=\"trap\"><span class=\"tag\">Ojo con la trampa</span> 0/0 <b>no</b> es 0 ni 1. Es una señal de \"che, hay trabajo para hacer acá\".</div>\n<h4>Levantar 0/0 con polinomios (y por qué funciona)</h4>\n<p>Si al sustituir x = a me da 0 arriba y 0 abajo, eso me está diciendo algo útil: <b>a es raíz del numerador y del denominador</b> (una \"raíz\" es un valor que hace cero al polinomio). Y si a es raíz, entonces <span class=\"fml\">(x − a)</span> es un <b>factor</b> de ese polinomio — es decir, lo puedo escribir como (x − a) por otra cosa.</p>\n<p>La estrategia: <b>factorizo</b> arriba y abajo (con Bhaskara si es de grado 2, o con Ruffini si es de grado mayor), me queda el factor (x − a) repetido, y lo <b>simplifico</b>. ¿Puedo \"tacharlo\" sin hacer trampa? Sí, porque en el límite x se <b>acerca</b> a a pero <b>nunca es</b> a, así que (x − a) nunca es exactamente cero y dividir por él es legal. Ese (x − a) era justamente el culpable del 0/0; al sacarlo, la indeterminación desaparece y ya puedo sustituir tranquilo.</p>\n<div class=\"key\"><span class=\"tag\">La receta, en una línea</span> 0/0 con polinomios → factorizo arriba y abajo → simplifico el (x − a) que sobra → sustituyo. (Hay un ejemplo completo con Bhaskara y otro con Ruffini en la pestaña <b>Ejercicios</b>.)</div>\n<h4>Límites laterales (acercarme por un lado o por el otro)</h4>\n<p>A veces la función hace cosas distintas según de qué lado me acerco. Por eso miro los <b>límites laterales</b>:</p>\n<table>\n<tr><th>Notación</th><th>Cómo me acerco</th></tr>\n<tr><td><span class=\"fml\">x → a⁻</span></td><td>Por la <b>izquierda</b>: con valores un poquito <b>menores</b> que a</td></tr>\n<tr><td><span class=\"fml\">x → a⁺</span></td><td>Por la <b>derecha</b>: con valores un poquito <b>mayores</b> que a</td></tr>\n</table>\n<p>Regla de oro: <b>el límite existe si y solo si los dos laterales existen y dan lo mismo</b>. Si por izquierda tiende a 3 y por derecha a 5 (un \"salto\"), el límite <b>no existe</b>. Esto es típico en funciones definidas por tramos.</p>\n<h4>Cuando el límite se va a infinito (asíntota vertical)</h4>\n<p>Si al acercarme a a el <b>denominador tiende a 0 pero el numerador NO</b> (tiende a un número distinto de cero), la fracción se hace gigante: la función se dispara a +∞ o −∞. Gráficamente, eso es una <b>asíntota vertical</b> en x = a (la curva sube o baja pegada a esa recta vertical sin tocarla).</p>\n<div style=\"text-align:center;margin:16px 0\">\n<svg style=\"max-width:340px;width:100%\" viewbox=\"0 0 360 200\" xmlns=\"http://www.w3.org/2000/svg\">\n<line stroke=\"#7a8499\" stroke-width=\"1.5\" x1=\"14\" x2=\"346\" y1=\"100\" y2=\"100\"></line>\n<line stroke=\"#ffc24b\" stroke-dasharray=\"5 4\" stroke-width=\"1.8\" x1=\"185\" x2=\"185\" y1=\"14\" y2=\"188\"></line>\n<text fill=\"#ffc24b\" font-size=\"13\" x=\"179\" y=\"186\">a</text>\n<path d=\"M 55 78 Q 150 80 176 182\" fill=\"none\" stroke=\"#6c8cff\" stroke-width=\"2.5\"></path>\n<path d=\"M 194 18 Q 230 120 325 122\" fill=\"none\" stroke=\"#6c8cff\" stroke-width=\"2.5\"></path>\n<text fill=\"#aab4c8\" font-size=\"11\" x=\"225\" y=\"50\">→ +∞</text>\n<text fill=\"#aab4c8\" font-size=\"11\" x=\"120\" y=\"170\">→ −∞</text>\n</svg>\n<div style=\"color:#7a8499;font-size:.8rem\">Cerca de x = a la función se dispara (por un lado a −∞, por el otro a +∞), <b>pegándose a la recta vertical x = a</b> sin tocarla: esa es la asíntota vertical.</div>\n</div>\n<h4>El límite no mira el punto, mira los alrededores</h4>\n<div style=\"text-align:center;margin:16px 0\">\n<svg style=\"max-width:340px;width:100%\" viewbox=\"0 0 360 200\" xmlns=\"http://www.w3.org/2000/svg\">\n<line stroke=\"#7a8499\" stroke-width=\"1.5\" x1=\"40\" x2=\"40\" y1=\"12\" y2=\"180\"></line>\n<line stroke=\"#7a8499\" stroke-width=\"1.5\" x1=\"14\" x2=\"346\" y1=\"160\" y2=\"160\"></line>\n<text fill=\"#aab4c8\" font-size=\"13\" x=\"349\" y=\"165\">x</text>\n<line stroke=\"#6c8cff\" stroke-width=\"2.5\" x1=\"40\" x2=\"320\" y1=\"170\" y2=\"40\"></line>\n<line stroke=\"#7a8499\" stroke-dasharray=\"4 3\" stroke-width=\"1.2\" x1=\"180\" x2=\"180\" y1=\"105\" y2=\"160\"></line>\n<line stroke=\"#7a8499\" stroke-dasharray=\"4 3\" stroke-width=\"1.2\" x1=\"180\" x2=\"40\" y1=\"105\" y2=\"105\"></line>\n<circle cx=\"180\" cy=\"105\" fill=\"#161d2e\" r=\"5.5\" stroke=\"#ffc24b\" stroke-width=\"2.5\"></circle>\n<text fill=\"#aab4c8\" font-size=\"13\" x=\"175\" y=\"177\">a</text>\n<text fill=\"#ffc24b\" font-size=\"14\" x=\"22\" y=\"110\">L</text>\n<text fill=\"#ffc24b\" font-size=\"11\" x=\"193\" y=\"99\">hueco en a</text>\n</svg>\n<div style=\"color:#7a8499;font-size:.8rem\">La función se acerca a <b>L</b> por los dos lados, aunque en x = a tenga un \"agujero\" (no esté definida). Eso es justo lo que mide el límite.</div>\n</div>\n<h4> Hoja de fórmulas — Unidad 5</h4>\n<div class=\"formula-grid\">\n<div class=\"fbox\"><div class=\"big\">lím_(x→a) f(x) = L</div><small>Hacia qué valor se acerca f(x) cerca de a</small></div>\n<div class=\"fbox\"><div class=\"big\">Existe ⟺ lím_(x→a⁻) = lím_(x→a⁺)</div><small>Los dos laterales deben coincidir</small></div>\n<div class=\"fbox\"><div class=\"big\">0/0 → factorizo y simplifico (x−a)</div><small>Bhaskara (grado 2) o Ruffini (grado &gt;2)</small></div>\n<div class=\"fbox\"><div class=\"big\">denom→0, numer≠0 → ±∞</div><small>Asíntota vertical en x = a</small></div>\n</div>\n<h4>Ejercicios resueltos de esta unidad (de fácil a difícil)</h4>"
        },
        {
            "id": "n-c-u6",
            "title": "6 · Límites al ∞",
            "part": "P2",
            "html": "<h3>Unidad 6 · Límites para x → ±∞ (Cap. 6)</h3>\n<div class=\"idea\">✓ <b>Idea madre:</b> en la Unidad 5 me acercaba a un punto concreto. Acá pregunto otra cosa: ¿qué hace la función <b>a lo lejos</b>, cuando x se vuelve enorme (o muy negativo)? Sirve para encontrar las <b>asíntotas horizontales</b>.</div>\n<h4>Qué significa x → ±∞</h4>\n<p>Acá la pregunta cambia: ya no me acerco a un punto, sino que me voy <b>cada vez más a la derecha (x→+∞) o a la izquierda (x→−∞)</b> y miro hacia dónde va la función. Si tiende a un número fijo L, hay una <b>asíntota horizontal</b> y = L (una recta horizontal a la que la curva se arrima sin tocar).</p>\n<p>El caso típico es un cociente de polinomios que da <span class=\"fml\">∞/∞</span> (otra indeterminación). ¿Cómo lo resuelvo? <b>Me quedo con el término de mayor grado</b> de arriba y de abajo, porque cuando x es enorme, ese término es tan grande que aplasta a todos los demás (los demás se vuelven despreciables). Ejemplo: (3x² + 2x)/(x² − 5) → para x enorme se comporta como 3x²/x² = 3.</p>\n<h4>Órdenes de infinito (¿quién crece más rápido?)</h4>\n<p>Cuando varias cosas se van a infinito, gana la que crece más rápido. El orden, de más fuerte a más débil, es:</p>\n<div class=\"key\"><span class=\"tag\">Jerarquía (x→+∞)</span> <span class=\"fml\">eˣ</span> ≫ <span class=\"fml\">xⁿ</span> ≫ <span class=\"fml\">ln x</span>. La exponencial le gana a cualquier potencia, y cualquier potencia le gana al logaritmo. El más fuerte manda el resultado.</div>\n<div class=\"eli\"><span class=\"tag\">ELI5</span> Es una carrera hacia el infinito: la exponencial es un cohete, las potencias (x², x³…) son autos, y el logaritmo va caminando. A la larga, gana el cohete por lejos.</div>\n<div style=\"text-align:center;margin:16px 0\">\n<svg style=\"max-width:340px;width:100%\" viewbox=\"0 0 360 200\" xmlns=\"http://www.w3.org/2000/svg\">\n<line stroke=\"#7a8499\" stroke-width=\"1.5\" x1=\"40\" x2=\"40\" y1=\"12\" y2=\"175\"></line>\n<line stroke=\"#7a8499\" stroke-width=\"1.5\" x1=\"14\" x2=\"346\" y1=\"165\" y2=\"165\"></line>\n<text fill=\"#aab4c8\" font-size=\"13\" x=\"349\" y=\"170\">x</text>\n<path d=\"M 45 162 Q 235 162 298 22\" fill=\"none\" stroke=\"#6c8cff\" stroke-width=\"2.5\"></path>\n<text fill=\"#6c8cff\" font-size=\"12\" x=\"300\" y=\"30\">eˣ</text>\n<path d=\"M 45 162 Q 205 138 332 58\" fill=\"none\" stroke=\"#ffc24b\" stroke-width=\"2.5\"></path>\n<text fill=\"#ffc24b\" font-size=\"12\" x=\"335\" y=\"60\">xⁿ</text>\n<path d=\"M 48 150 Q 180 120 335 108\" fill=\"none\" stroke=\"#36d399\" stroke-width=\"2.5\"></path>\n<text fill=\"#36d399\" font-size=\"12\" x=\"335\" y=\"104\">L x</text>\n</svg>\n<div style=\"color:#7a8499;font-size:.8rem\">La carrera al infinito: <b>eˣ</b> (cohete) sube más rápido que cualquier potencia <b>xⁿ</b> (auto), y la potencia más rápido que el logaritmo <b>L x</b> (a pie).</div>\n</div>\n<h4>Asíntota horizontal (la curva se arrima a una recta)</h4>\n<div style=\"text-align:center;margin:16px 0\">\n<svg style=\"max-width:340px;width:100%\" viewbox=\"0 0 360 200\" xmlns=\"http://www.w3.org/2000/svg\">\n<line stroke=\"#7a8499\" stroke-width=\"1.5\" x1=\"40\" x2=\"40\" y1=\"12\" y2=\"180\"></line>\n<line stroke=\"#7a8499\" stroke-width=\"1.5\" x1=\"14\" x2=\"346\" y1=\"170\" y2=\"170\"></line>\n<text fill=\"#aab4c8\" font-size=\"13\" x=\"349\" y=\"175\">x</text>\n<line stroke=\"#ffc24b\" stroke-dasharray=\"5 4\" stroke-width=\"1.5\" x1=\"40\" x2=\"345\" y1=\"70\" y2=\"70\"></line>\n<path d=\"M 48 158 C 130 82, 210 74, 335 71\" fill=\"none\" stroke=\"#6c8cff\" stroke-width=\"2.5\"></path>\n<text fill=\"#ffc24b\" font-size=\"13\" x=\"295\" y=\"63\">y = L</text>\n</svg>\n<div style=\"color:#7a8499;font-size:.8rem\">Cuando x → +∞, la curva se <b>arrima</b> a la recta horizontal y = L sin tocarla: esa es la <b>asíntota horizontal</b>.</div>\n</div>\n<h4> Hoja de fórmulas — Unidad 6</h4>\n<div class=\"formula-grid\">\n<div class=\"fbox\"><div class=\"big\">x → +∞ / −∞</div><small>Comportamiento \"a lo lejos\"</small></div>\n<div class=\"fbox\"><div class=\"big\">∞/∞ → término de mayor grado</div><small>Cociente de polinomios: domina la mayor potencia</small></div>\n<div class=\"fbox\"><div class=\"big\">eˣ ≫ xⁿ ≫ L x</div><small>Órdenes de infinito: gana el más fuerte</small></div>\n<div class=\"fbox\"><div class=\"big\">tiende a L → asíntota horizontal y = L</div><small>Si el límite es un número finito</small></div>\n</div>\n<h4>Ejercicios resueltos de esta unidad (de fácil a difícil)</h4>"
        },
        {
            "id": "n-c-cont",
            "title": "7 · Continuidad",
            "part": "P2",
            "html": "<h3>Unidad 7 · Continuidad (Cap. 7)</h3>\n<h4>¿Por qué me importa la continuidad?</h4>\n<p>\"Continua\" es la versión formal de algo intuitivo: que la función <b>no se corta ni pega saltos</b>. Me importa por dos motivos. Primero, es justo la propiedad que hace que <b>sustituir funcione</b> para calcular límites (en una función continua, \"hacia dónde se acerca\" = \"lo que vale\"). Segundo, es el <b>requisito</b> de los dos teoremas más útiles del capítulo (Bolzano y Weierstrass), que dan puntos casi seguros en el parcial.</p>\n<div class=\"eli\"><span class=\"tag\">ELI5</span> Una función continua la dibujo <b>sin levantar el lápiz</b>. Si para dibujarla tengo que levantar la birome (porque hay un agujero o un salto), ahí hay una <b>discontinuidad</b>.</div>\n<h4>La definición formal: 3 condiciones (y por qué cada una)</h4>\n<p>f es continua en el punto a <b>si y solo si</b> se cumplen las tres a la vez:</p>\n<table>\n<tr><th>Condición</th><th>Qué pide</th><th>Qué pasa si falla</th></tr>\n<tr><td>1) Existe f(a)</td><td>La función está definida en a (tiene un valor ahí)</td><td>Hay un <b>agujero</b>: ni siquiera hay punto</td></tr>\n<tr><td>2) Existe lím_(x→a) f(x)</td><td>Los dos límites laterales existen y coinciden</td><td>Hay un <b>salto</b> (por izquierda va a un lado, por derecha a otro)</td></tr>\n<tr><td>3) lím_(x→a) f(x) = f(a)</td><td>Hacia dónde se acerca = lo que realmente vale</td><td>El punto está \"<b>despegado</b>\" del resto de la curva</td></tr>\n</table>\n<p>En criollo: <b>la función tiene que valer algo en a, tiene que acercarse a algo, y esos dos algos tienen que ser el mismo</b>. Si las tres se cumplen, no hay corte.</p>\n<h4>Tipos de discontinuidad</h4>\n<table>\n<tr><th>Tipo</th><th>Qué pasa</th></tr>\n<tr><td>Evitable (un agujero)</td><td>El límite existe, pero falta el punto o está corrido. Se \"arregla\" rellenando el huequito.</td></tr>\n<tr><td>De salto</td><td>Los laterales existen pero dan distinto: la curva pega un salto. No se arregla.</td></tr>\n</table>\n<h4>Los dos teoremas estrella</h4>\n<p><b>Teorema de Bolzano.</b> Si f es continua en un intervalo cerrado [a, b] y en los extremos tiene <b>signos opuestos</b> (uno positivo y otro negativo, es decir f(a)·f(b) &lt; 0), entonces seguro <b>cruza el cero</b> en algún punto de adentro: tiene <b>al menos una raíz</b> en (a, b).</p>\n<div class=\"eli\"><span class=\"tag\">ELI5 de Bolzano</span> Si salís de abajo del agua y terminás arriba del agua, y nunca te teletransportaste (sos continuo), en algún momento <b>tuviste que cruzar la superficie</b>. Ese cruce es la raíz.</div>\n<div style=\"text-align:center;margin:16px 0\">\n<svg style=\"max-width:340px;width:100%\" viewbox=\"0 0 360 200\" xmlns=\"http://www.w3.org/2000/svg\">\n<line stroke=\"#7a8499\" stroke-width=\"1.5\" x1=\"40\" x2=\"40\" y1=\"12\" y2=\"185\"></line>\n<line stroke=\"#7a8499\" stroke-width=\"1.5\" x1=\"14\" x2=\"346\" y1=\"100\" y2=\"100\"></line>\n<text fill=\"#aab4c8\" font-size=\"11\" x=\"20\" y=\"114\">y=0</text>\n<path d=\"M 60 165 Q 190 97 300 40\" fill=\"none\" stroke=\"#6c8cff\" stroke-width=\"2.5\"></path>\n<circle cx=\"60\" cy=\"165\" fill=\"#ff6b6b\" r=\"4.5\"></circle>\n<circle cx=\"300\" cy=\"40\" fill=\"#36d399\" r=\"4.5\"></circle>\n<text fill=\"#aab4c8\" font-size=\"13\" x=\"52\" y=\"182\">a</text>\n<text fill=\"#aab4c8\" font-size=\"13\" x=\"296\" y=\"34\">b</text>\n<text fill=\"#ff6b6b\" font-size=\"11\" x=\"14\" y=\"172\">f(a)&lt;0</text>\n<text fill=\"#36d399\" font-size=\"11\" x=\"305\" y=\"46\">f(b)&gt;0</text>\n<circle cx=\"185\" cy=\"100\" fill=\"#ffc24b\" r=\"5\"></circle>\n<text fill=\"#ffc24b\" font-size=\"12\" x=\"192\" y=\"92\">raíz</text>\n</svg>\n<div style=\"color:#7a8499;font-size:.8rem\">f(a) está <b>debajo</b> del eje (negativa) y f(b) <b>encima</b> (positiva). Como es continua, en algún punto de (a,b) <b>cruza el cero</b>: ahí hay una raíz.</div>\n</div>\n<p><b>Teorema de Weierstrass.</b> Si f es continua en un intervalo <b>cerrado</b> [a, b], entonces alcanza un <b>máximo y un mínimo absolutos</b> ahí dentro (hay un punto más alto y uno más bajo, no se escapa al infinito ni queda \"sin tope\"). Esto es lo que garantiza que los problemas de optimización <b>tengan solución</b>.</p>\n<div class=\"trap\"><span class=\"tag\">Ojo con la trampa</span> Los dos teoremas exigen <b>continuidad</b> en el intervalo <b>cerrado</b> [a, b] (con los extremos incluidos). Si la función se corta, o el intervalo es abierto, el teorema <b>no aplica</b> aunque parezca que sí.</div>\n<h4>Cómo se ve una discontinuidad de salto</h4>\n<div style=\"text-align:center;margin:16px 0\">\n<svg style=\"max-width:340px;width:100%\" viewbox=\"0 0 360 200\" xmlns=\"http://www.w3.org/2000/svg\">\n<line stroke=\"#7a8499\" stroke-width=\"1.5\" x1=\"40\" x2=\"40\" y1=\"12\" y2=\"180\"></line>\n<line stroke=\"#7a8499\" stroke-width=\"1.5\" x1=\"14\" x2=\"346\" y1=\"160\" y2=\"160\"></line>\n<text fill=\"#aab4c8\" font-size=\"13\" x=\"349\" y=\"165\">x</text>\n<line stroke=\"#6c8cff\" stroke-width=\"2.5\" x1=\"50\" x2=\"180\" y1=\"130\" y2=\"95\"></line>\n<circle cx=\"180\" cy=\"95\" fill=\"#6c8cff\" r=\"4.5\"></circle>\n<line stroke=\"#6c8cff\" stroke-width=\"2.5\" x1=\"180\" x2=\"320\" y1=\"55\" y2=\"40\"></line>\n<circle cx=\"180\" cy=\"55\" fill=\"#161d2e\" r=\"5\" stroke=\"#6c8cff\" stroke-width=\"2.5\"></circle>\n<line stroke=\"#7a8499\" stroke-dasharray=\"4 3\" stroke-width=\"1.2\" x1=\"180\" x2=\"180\" y1=\"55\" y2=\"160\"></line>\n<text fill=\"#aab4c8\" font-size=\"13\" x=\"175\" y=\"177\">a</text>\n<text fill=\"#ff6b6b\" font-size=\"12\" x=\"193\" y=\"80\">¡salto!</text>\n</svg>\n<div style=\"color:#7a8499;font-size:.8rem\">En x = a la función pega un <b>salto</b>: el límite por izquierda y por derecha dan distinto, así que no es continua (tendría que poder dibujarse sin levantar el lápiz).</div>\n</div>\n<h4> Hoja de fórmulas — Unidad 7</h4>\n<div class=\"formula-grid\">\n<div class=\"fbox\"><div class=\"big\">Continua en a ⟺ existe f(a) · existe lím · son iguales</div><small>Las 3 condiciones juntas</small></div>\n<div class=\"fbox\"><div class=\"big\">Bolzano</div><small>f continua en [a,b] y f(a)·f(b)&lt;0 → hay una raíz en (a,b)</small></div>\n<div class=\"fbox\"><div class=\"big\">Weierstrass</div><small>f continua en [a,b] → alcanza máximo y mínimo absolutos</small></div>\n<div class=\"fbox\"><div class=\"big\">Derivable ⟹ continua</div><small>(pero continua NO implica derivable)</small></div>\n</div>\n<h4>Ejercicios resueltos de esta unidad (de fácil a difícil)</h4>"
        },
        {
            "id": "n-c-der",
            "title": "8 · Derivadas",
            "part": "P2",
            "html": "<h3>Unidad 8 · Derivabilidad (Cap. 8)</h3>\n<h4>Lo macro: ¿qué problema vino a resolver la derivada?</h4>\n<p>Sé sacar la <b>pendiente de una recta</b> (cuánto sube por cada paso que avanzo): tomo dos puntos y hago \"subida sobre avance\". Pero, ¿y si la curva no es una recta? La pendiente cambia en cada punto. La pregunta difícil es: <b>¿cuál es la pendiente en UN solo punto?</b> Para una recta entre dos puntos es fácil; para \"un punto solo\" no tengo con qué compararlo. La derivada es la herramienta que resuelve justo eso, y de paso me dice la <b>velocidad de cambio instantánea</b> de la función (cuán rápido sube o baja ahí).</p>\n<div class=\"eli\"><span class=\"tag\">ELI5</span> Es el velocímetro de la función. El cuentakilómetros te dice cuánto recorriste (la función); el velocímetro te dice qué tan rápido vas <b>en este instante</b> (la derivada). Positiva = subiendo, negativa = bajando.</div>\n<h4>Construyo la definición desde cero</h4>\n<p>Quiero la pendiente en el punto a. Como con un solo punto no puedo, hago una trampa inteligente: tomo <b>otro punto x cercano</b> y calculo la pendiente de la recta que une los dos (se llama <b>recta secante</b>). Esa pendiente entre dos puntos es el <b>cociente incremental</b>:</p>\n<div class=\"fbox\"><div class=\"big\">Δf / Δx = (f(x) − f(a)) / (x − a)</div><small>\"subida\" sobre \"avance\" entre a y x. (Δ se lee \"delta\" = variación, cuánto cambió.)</small></div>\n<p>Ahora la idea genial: <b>acerco x cada vez más a a</b>. La recta secante se va \"apoyando\" sobre la curva hasta convertirse en la <b>recta tangente</b> (la que tiene la <b>misma inclinación que la curva en ese punto</b> y la mejor aproxima ahí cerca). \"Acercar x a a\" ya sé hacerlo: es un <b>límite</b>. Por eso la derivada es el límite del cociente incremental:</p>\n<div class=\"formula-grid\">\n<div class=\"fbox\"><div class=\"big\">f ′(a) = lím_(x→a) (f(x)−f(a))/(x−a)</div><small>Definición. Se lee \"f prima de a\"</small></div>\n<div class=\"fbox\"><div class=\"big\">f ′(a) = lím_(h→0) (f(a+h)−f(a))/h</div><small>La misma, llamando h = x−a (h→0 = acercar)</small></div>\n</div>\n<p>Las dos fórmulas son lo mismo escrito distinto: en la segunda llamo <b>h</b> a la distancia entre los puntos, y \"acercar x a a\" es \"hacer h→0\". Se simboliza <span class=\"fml\">f ′(a)</span> o <span class=\"fml\">df/dx</span>. <b>Acá se ve por qué primero hay que entender límites:</b> la derivada ES un límite.</p>\n<h4>Qué significa geométricamente y la recta tangente</h4>\n<p>f ′(a) es la <b>pendiente de la recta tangente</b> en el punto (a, f(a)). Y como ya tengo un punto y una pendiente, puedo escribir esa recta con la fórmula de la recta que vi en el 1er parcial (y = f(a) + pendiente·(x − a)):</p>\n<div class=\"key\"><span class=\"tag\">Recta tangente en a</span> <span class=\"fml\">y = f(a) + f ′(a)·(x − a)</span></div>\n<h4>Una relación importante: derivable ⟹ continua (pero no al revés)</h4>\n<p>Si una función es <b>derivable</b> en un punto (tiene tangente bien definida), entonces seguro es <b>continua</b> ahí (no se corta). Pero al revés <b>no</b> siempre: una función puede ser continua y aún así no tener derivada. El ejemplo clásico es <span class=\"fml\">|x|</span> (valor absoluto) en x = 0: no se corta, pero hace un <b>pico</b>, y en un pico no hay una única pendiente (por izquierda baja, por derecha sube). Sin pendiente única, no hay derivada.</p>\n<div style=\"text-align:center;margin:16px 0\">\n<svg style=\"max-width:340px;width:100%\" viewbox=\"0 0 360 200\" xmlns=\"http://www.w3.org/2000/svg\">\n<line stroke=\"#7a8499\" stroke-width=\"1.5\" x1=\"180\" x2=\"180\" y1=\"12\" y2=\"180\"></line>\n<line stroke=\"#7a8499\" stroke-width=\"1.5\" x1=\"20\" x2=\"342\" y1=\"150\" y2=\"150\"></line>\n<text fill=\"#aab4c8\" font-size=\"13\" x=\"345\" y=\"155\">x</text>\n<line stroke=\"#6c8cff\" stroke-width=\"2.5\" x1=\"80\" x2=\"180\" y1=\"50\" y2=\"150\"></line>\n<line stroke=\"#6c8cff\" stroke-width=\"2.5\" x1=\"180\" x2=\"280\" y1=\"150\" y2=\"50\"></line>\n<circle cx=\"180\" cy=\"150\" fill=\"#161d2e\" r=\"5\" stroke=\"#ff6b6b\" stroke-width=\"2.5\"></circle>\n<text fill=\"#6c8cff\" font-size=\"13\" x=\"90\" y=\"46\">y = |x|</text>\n<text fill=\"#ff6b6b\" font-size=\"12\" x=\"190\" y=\"140\">pico en x=0</text>\n</svg>\n<div style=\"color:#7a8499;font-size:.8rem\">En el <b>pico</b> (x=0) la curva no se corta (es <b>continua</b>) pero cambia de pendiente de golpe: por izquierda baja, por derecha sube. No hay una única tangente → <b>no es derivable</b> ahí. Por eso continua no implica derivable.</div>\n</div>\n<h4>La tabla de derivadas (atajos que evitan hacer el límite cada vez)</h4>\n<p>Calcular la derivada con el límite siempre sería lentísimo. Por suerte, aplicando esa definición una vez a cada función \"básica\", salen fórmulas listas para usar. Esta tabla es eso: el resultado de hacer el límite, ya resuelto. Me la aprendo de memoria (el parcial es sin material).</p>\n<table>\n<tr><th>f(x)</th><th>f ′(x)</th><th>En palabras</th></tr>\n<tr><td>k (constante)</td><td>0</td><td>algo que no cambia no tiene pendiente</td></tr>\n<tr><td>xⁿ</td><td>n·xⁿ⁻¹</td><td>\"bajo el exponente y le resto 1\" (ej: x³ → 3x²)</td></tr>\n<tr><td>eˣ</td><td>eˣ</td><td>la única que es su propia derivada</td></tr>\n<tr><td>aˣ</td><td>aˣ·ln a</td><td>exponencial de base a</td></tr>\n<tr><td>ln x</td><td>1/x</td><td>logaritmo natural</td></tr>\n<tr><td>√x</td><td>1/(2√x)</td><td>(es xⁿ con n = ½, sale de la regla de la potencia)</td></tr>\n</table>\n<h4>Reglas de derivación (cómo combinar las básicas) y de dónde salen</h4>\n<p>Las funciones de verdad son combinaciones de las básicas (sumas, productos, etc.). Estas reglas dicen cómo derivar esas combinaciones:</p>\n<table>\n<tr><th>Si la función es…</th><th>Su derivada es…</th><th>Idea de por qué</th></tr>\n<tr><td>Suma/resta: f ± g</td><td>f ′ ± g′</td><td>la variación del total es la suma de las variaciones: derivo cada una</td></tr>\n<tr><td>Constante por función: k·f</td><td>k·f ′</td><td>multiplicar por k estira todo k veces, también la pendiente</td></tr>\n<tr><td>Producto: f·g</td><td>f ′·g + f·g′</td><td>cambian los dos factores: aporta el cambio de uno por el otro, y viceversa</td></tr>\n<tr><td>Cociente: f/g</td><td>(f ′·g − f·g′) / g²</td><td>parecida al producto, pero con un menos y dividido g²</td></tr>\n<tr><td><b>Cadena: f(g(x))</b></td><td>f ′(g(x))·g′(x)</td><td>función \"adentro de\" otra: derivo la de afuera y multiplico por la derivada de la de adentro</td></tr>\n</table>\n<div class=\"eli\"><span class=\"tag\">ELI5 de la cadena</span> Si tengo \"una caja dentro de otra caja\", derivo la de afuera dejando la de adentro quieta, y después multiplico por la derivada de la de adentro. Como pelar una cebolla: una capa a la vez.</div>\n<div class=\"trap\"><span class=\"tag\">Ojo con la trampa</span> La del producto <b>no</b> es f ′·g′. La del cociente lleva <b>menos</b> en el medio y g² abajo (y el orden importa por el menos). Y la cadena se olvida muy fácil: nunca te olvides de multiplicar por la derivada de lo de adentro. (También hay ejercicios en la pestaña <b>Ejercicios</b>.)</div>\n<h4>La derivada es la pendiente de la recta tangente</h4>\n<div style=\"text-align:center;margin:16px 0\">\n<svg style=\"max-width:340px;width:100%\" viewbox=\"0 0 360 200\" xmlns=\"http://www.w3.org/2000/svg\">\n<line stroke=\"#7a8499\" stroke-width=\"1.5\" x1=\"40\" x2=\"40\" y1=\"12\" y2=\"180\"></line>\n<line stroke=\"#7a8499\" stroke-width=\"1.5\" x1=\"14\" x2=\"346\" y1=\"170\" y2=\"170\"></line>\n<text fill=\"#aab4c8\" font-size=\"13\" x=\"349\" y=\"175\">x</text>\n<path d=\"M 70 45 Q 185 205 305 45\" fill=\"none\" stroke=\"#6c8cff\" stroke-width=\"2.5\"></path>\n<line stroke=\"#ffc24b\" stroke-width=\"2\" x1=\"185\" x2=\"335\" y1=\"150\" y2=\"40\"></line>\n<circle cx=\"255\" cy=\"97\" fill=\"#36d399\" r=\"4.5\"></circle>\n<text fill=\"#36d399\" font-size=\"12\" x=\"200\" y=\"112\">(a, f(a))</text>\n<text fill=\"#ffc24b\" font-size=\"12\" x=\"248\" y=\"34\">recta tangente</text>\n</svg>\n<div style=\"color:#7a8499;font-size:.8rem\">La derivada <b>f ′(a)</b> es la <b>pendiente de la recta tangente</b> a la curva en el punto (a, f(a)).</div>\n</div>\n<h4> Hoja de fórmulas — Unidad 8</h4>\n<div class=\"formula-grid\">\n<div class=\"fbox\"><div class=\"big\">f ′(a) = lím_(h→0) (f(a+h)−f(a))/h</div><small>Definición</small></div>\n<div class=\"fbox\"><div class=\"big\">y = f(a) + f ′(a)(x−a)</div><small>Recta tangente en a</small></div>\n<div class=\"fbox\"><div class=\"big\">(xⁿ)′=n·xⁿ⁻¹ · (eˣ)′=eˣ · (L x)′=1/x</div><small>Tabla básica (L = ln)</small></div>\n<div class=\"fbox\"><div class=\"big\">(f·g)′ = f ′g + fg′</div><small>Producto</small></div>\n<div class=\"fbox\"><div class=\"big\">(f/g)′ = (f ′g − fg′)/g²</div><small>Cociente</small></div>\n<div class=\"fbox\"><div class=\"big\">(f(g(x)))′ = f ′(g(x))·g′(x)</div><small>Regla de la cadena</small></div>\n</div>\n<h4>Ejercicios resueltos de esta unidad (de fácil a difícil)</h4>"
        },
        {
            "id": "n-c-opt",
            "title": "9 · Optimización",
            "part": "P2",
            "html": "<h3>Unidad 9 · Variación y optimización (Cap. 9)</h3>\n<h4>Por qué esta es la parte que paga todo lo anterior</h4>\n<p>Acá llega el premio de haber aprendido derivadas. \"Optimizar\" es <b>encontrar lo mejor</b>: la cantidad que da la <b>máxima</b> utilidad, el precio que da el <b>máximo</b> ingreso, las dimensiones de <b>mínimo</b> costo. Y resulta que la derivada es la herramienta perfecta para esto, porque me dice exactamente dónde la función sube, dónde baja y dónde llega a su tope.</p>\n<h4>El signo de la derivada me dice si sube o baja</h4>\n<p>Ya vimos que f ′ es la pendiente. Entonces es directo: si la pendiente es positiva, la función va para arriba; si es negativa, va para abajo.</p>\n<table>\n<tr><th>Si en un tramo…</th><th>Entonces f…</th><th>Por qué</th></tr>\n<tr><td>f ′(x) &gt; 0</td><td>crece (sube)</td><td>pendiente positiva = va hacia arriba</td></tr>\n<tr><td>f ′(x) &lt; 0</td><td>decrece (baja)</td><td>pendiente negativa = va hacia abajo</td></tr>\n</table>\n<h4>Los puntos críticos: donde la función \"se da vuelta\"</h4>\n<p>Pensá en una montaña: justo en la <b>cima</b>, por un instante no subís ni bajás, estás <b>plano</b>. Eso quiere decir que en un máximo (o un mínimo) la pendiente es <b>cero</b>: la recta tangente es horizontal. Por eso, los candidatos a máximo/mínimo son los <b>puntos críticos</b>: donde <span class=\"fml\">f ′(x) = 0</span>.</p>\n<p>Pero \"f ′ = 0\" sola no me dice si es cima o valle (los dos son planos arriba). Para distinguirlos miro <b>cómo cambia el signo de f ′ alrededor</b>:</p>\n<table>\n<tr><th>En el punto crítico a…</th><th>Es un…</th><th>Imagen</th></tr>\n<tr><td>f ′ pasa de <b>+</b> a <b>−</b></td><td><b>máximo</b></td><td>venía subiendo y empieza a bajar = cima ⛰️</td></tr>\n<tr><td>f ′ pasa de <b>−</b> a <b>+</b></td><td><b>mínimo</b></td><td>venía bajando y empieza a subir = valle 🏞️</td></tr>\n</table>\n<div class=\"eli\"><span class=\"tag\">ELI5</span> El velocímetro (f ′) en una cima marca cero justo en la punta: venías acelerando hacia arriba (+) y arrancás a bajar (−). Ese cambio de + a − es la firma de un máximo.</div>\n<h4>Procedimiento completo de optimización (lo aplico siempre igual)</h4>\n<ol class=\"steps\">\n<li>Escribo la <b>función</b> a optimizar y su <b>dominio</b> (en economía suele ser x ≥ 0). Si el problema viene con texto, primero traduzco: defino variables y armo la función.</li>\n<li><b>Derivo</b> e igualo a cero: f ′(x) = 0 → me da los <b>puntos críticos</b> (los candidatos).</li>\n<li>Estudio el <b>signo de f ′</b> antes y después de cada crítico para <b>clasificar</b> (máx o mín).</li>\n<li>Reviso también los <b>extremos del dominio</b>: a veces el mejor valor está en el borde, no en un crítico.</li>\n<li><b>Interpreto</b> en contexto: \"la cantidad óptima es…\", \"la utilidad máxima es…\".</li>\n</ol>\n<div class=\"trap\"><span class=\"tag\">Ojo con la trampa</span> Encontrar f ′(a)=0 <b>no alcanza</b>: hay que <b>clasificarlo</b> con el signo de f ′ y mirar el dominio. Un crítico puede ser un mínimo cuando yo buscaba un máximo, o el óptimo real puede estar en un borde.</div>\n<h4>Elasticidad de la demanda (9.3): una aplicación estrella</h4>\n<p>La <b>elasticidad</b> mide qué tan sensible es la cantidad que la gente compra (la demanda) a un cambio del precio. Es clave para una pregunta económica concreta: <i>si subo un poco el precio, ¿mi ingreso total sube o baja?</i></p>\n<p>De dónde sale: el ingreso es <span class=\"fml\">I(p) = p·D(p)</span> (precio por cantidad vendida). Para ver si sube o baja al subir el precio, derivo (¡otra vez la derivada!) usando la regla del producto: <span class=\"fml\">I′(p) = D(p) + p·D′(p)</span>. Estudiando el signo de eso, el curso define la elasticidad como:</p>\n<div class=\"key\"><span class=\"tag\">Definición del curso</span> <span class=\"fml\">η(p) = − p·D′(p) / D(p)</span>  (el signo menos es para que dé positiva, ya que D′&lt;0: si sube el precio, baja la cantidad).</div>\n<table>\n<tr><th>Si η(p)…</th><th>La demanda es…</th><th>Si subo levemente el precio, el ingreso…</th></tr>\n<tr><td>&gt; 1</td><td>elástica (muy sensible)</td><td><b>baja</b> (la gente compra mucho menos)</td></tr>\n<tr><td>= 1</td><td>unitaria</td><td>el ingreso tiene un punto crítico (I′=0): para la demanda típica, su <b>máximo</b></td></tr>\n<tr><td>&lt; 1</td><td>inelástica (poco sensible)</td><td><b>sube</b> (la cantidad casi no cae)</td></tr>\n</table>\n<div class=\"eli\"><span class=\"tag\">ELI5</span> Si vendés algo que la gente <b>necesita sí o sí</b> (inelástico, como el pan), podés subir el precio y casi no te compran menos → ganás más. Si vendés algo <b>prescindible</b> (elástico, como un lujo), subís el precio y se te van los clientes → ganás menos.</div>\n<div class=\"key\"><span class=\"tag\">Ejemplo del manual</span> D(p)=3000−30p → η(p)= p/(100−p). En p=20: η=¼ &lt;1 (inelástica → subir precio sube ingreso). En p=60: η=3/2 &gt;1 (elástica → subir precio baja ingreso). (Cálculo completo más abajo.)</div>\n<h4>En un máximo, la pendiente es cero</h4>\n<div style=\"text-align:center;margin:16px 0\">\n<svg style=\"max-width:340px;width:100%\" viewbox=\"0 0 360 200\" xmlns=\"http://www.w3.org/2000/svg\">\n<line stroke=\"#7a8499\" stroke-width=\"1.5\" x1=\"40\" x2=\"40\" y1=\"12\" y2=\"180\"></line>\n<line stroke=\"#7a8499\" stroke-width=\"1.5\" x1=\"14\" x2=\"346\" y1=\"170\" y2=\"170\"></line>\n<text fill=\"#aab4c8\" font-size=\"13\" x=\"349\" y=\"175\">x</text>\n<path d=\"M 55 155 Q 180 -5 305 155\" fill=\"none\" stroke=\"#6c8cff\" stroke-width=\"2.5\"></path>\n<line stroke=\"#ffc24b\" stroke-dasharray=\"5 4\" stroke-width=\"1.8\" x1=\"120\" x2=\"240\" y1=\"73\" y2=\"73\"></line>\n<circle cx=\"180\" cy=\"73\" fill=\"#ffc24b\" r=\"4.5\"></circle>\n<text fill=\"#ffc24b\" font-size=\"12\" x=\"150\" y=\"60\">f ′ = 0 (máximo)</text>\n<text fill=\"#36d399\" font-size=\"13\" x=\"78\" y=\"120\">f ′&gt;0</text>\n<text fill=\"#ff6b6b\" font-size=\"13\" x=\"262\" y=\"120\">f ′&lt;0</text>\n</svg>\n<div style=\"color:#7a8499;font-size:.8rem\">En el máximo la pendiente es <b>0</b> (tangente horizontal). f ′ pasa de <b>+</b> (subiendo) a <b>−</b> (bajando): esa es la firma de un máximo.</div>\n</div>\n<h4> Hoja de fórmulas — Unidad 9</h4>\n<div class=\"formula-grid\">\n<div class=\"fbox\"><div class=\"big\">f ′&gt;0 crece · f ′&lt;0 decrece</div><small>El signo de la derivada</small></div>\n<div class=\"fbox\"><div class=\"big\">f ′(a) = 0 → punto crítico</div><small>Candidato a máximo o mínimo</small></div>\n<div class=\"fbox\"><div class=\"big\">+ a − = máximo · − a + = mínimo</div><small>Clasifico por el cambio de signo de f ′</small></div>\n<div class=\"fbox\"><div class=\"big\">En [a,b]: comparo críticos y extremos</div><small>El óptimo puede estar en un borde</small></div>\n<div class=\"fbox\"><div class=\"big\">η(p) = − p·D′(p)/D(p)</div><small>Elasticidad de la demanda</small></div>\n</div>\n<h4>Ejercicios resueltos de esta unidad (de fácil a difícil)</h4>"
        },
        {
            "id": "n-c-fml",
            "title": "Fórmulas",
            "part": "General",
            "html": "<h3>Hoja de ecuaciones de TODO Cálculo</h3>\n<p>Acá junté <b>todas</b> las fórmulas de las 9 unidades, en orden. El parcial es sin material, así que esta es la hoja que tengo que tener en la cabeza. La uso como repaso final: si miro una fórmula y no me acuerdo de dónde sale, vuelvo a la unidad.</p>\n<h4>1er Parcial · Funciones</h4>\n<p style=\"color:var(--accent);font-weight:700;margin:6px 0\">Unidad 1 — Lineales</p>\n<div class=\"formula-grid\">\n<div class=\"fbox\"><div class=\"big\">y = m·x + n</div><small>Recta. m = pendiente, n = corte con eje y</small></div>\n<div class=\"fbox\"><div class=\"big\">m = (y₂−y₁)/(x₂−x₁)</div><small>Pendiente con dos puntos</small></div>\n<div class=\"fbox\"><div class=\"big\">CT = CF + cv·x · I = p·x · U = I − CT</div><small>Costo, ingreso, utilidad</small></div>\n<div class=\"fbox\"><div class=\"big\">U = 0 (equilibrio) · Qd = Qs (mercado)</div><small>Punto de equilibrio</small></div>\n</div>\n<p style=\"color:var(--accent);font-weight:700;margin:6px 0\">Unidad 2 — Cuadráticas</p>\n<div class=\"formula-grid\">\n<div class=\"fbox\"><div class=\"big\">y = ax² + bx + c</div><small>Parábola</small></div>\n<div class=\"fbox\"><div class=\"big\">Δ = b² − 4ac</div><small>Δ&gt;0: 2 raíces · =0: 1 · &lt;0: ninguna</small></div>\n<div class=\"fbox\"><div class=\"big\">x = (−b ± √Δ) / 2a</div><small>Raíces (Bhaskara)</small></div>\n<div class=\"fbox\"><div class=\"big\">x_v = −b/2a</div><small>Vértice. a&gt;0 mínimo · a&lt;0 máximo</small></div>\n</div>\n<p style=\"color:var(--accent);font-weight:700;margin:6px 0\">Unidad 3 — Más sobre funciones</p>\n<div class=\"formula-grid\">\n<div class=\"fbox\"><div class=\"big\">Dominio: denom ≠ 0 · radicando ≥ 0</div><small>Las dos prohibiciones</small></div>\n<div class=\"fbox\"><div class=\"big\">(f∘g)(x) = f(g(x))</div><small>Composición (primero g, después f)</small></div>\n<div class=\"fbox\"><div class=\"big\">|x| = x si x≥0 · −x si x&lt;0</div><small>Valor absoluto (por tramos)</small></div>\n</div>\n<p style=\"color:var(--accent);font-weight:700;margin:6px 0\">Unidad 4 — Exponencial y logarítmica</p>\n<div class=\"formula-grid\">\n<div class=\"fbox\"><div class=\"big\">M = C·(1 + i)ⁿ</div><small>Interés compuesto</small></div>\n<div class=\"fbox\"><div class=\"big\">y = aˣ ⟺ x = log_a(y)</div><small>Exponencial ↔ logaritmo (inversas)</small></div>\n<div class=\"fbox\"><div class=\"big\">L(ab)=La+Lb · L(a/b)=La−Lb · L(aⁿ)=n·La</div><small>Propiedades del log (L = ln)</small></div>\n<div class=\"fbox\"><div class=\"big\">L(1)=0 · L(e)=1 · e^(L x)=x</div><small>Valores y cancelación</small></div>\n</div>\n<h4>2º Parcial · Límites, continuidad, derivadas y optimización</h4>\n<p style=\"color:var(--accent);font-weight:700;margin:6px 0\">Unidad 5 — Límites para x→a</p>\n<div class=\"formula-grid\">\n<div class=\"fbox\"><div class=\"big\">lím_(x→a) f(x) = L</div><small>Hacia qué valor se acerca</small></div>\n<div class=\"fbox\"><div class=\"big\">Existe ⟺ lím_(x→a⁻) = lím_(x→a⁺)</div><small>Laterales coinciden</small></div>\n<div class=\"fbox\"><div class=\"big\">0/0 → factorizo y simplifico (x−a)</div><small>Bhaskara o Ruffini</small></div>\n<div class=\"fbox\"><div class=\"big\">denom→0, numer≠0 → ±∞</div><small>Asíntota vertical en x=a</small></div>\n</div>\n<p style=\"color:var(--accent);font-weight:700;margin:6px 0\">Unidad 6 — Límites para x→±∞</p>\n<div class=\"formula-grid\">\n<div class=\"fbox\"><div class=\"big\">∞/∞ → término de mayor grado</div><small>Cociente de polinomios</small></div>\n<div class=\"fbox\"><div class=\"big\">eˣ ≫ xⁿ ≫ L x</div><small>Órdenes de infinito</small></div>\n<div class=\"fbox\"><div class=\"big\">tiende a L → asíntota horizontal y=L</div><small>Comportamiento a lo lejos</small></div>\n</div>\n<p style=\"color:var(--accent);font-weight:700;margin:6px 0\">Unidad 7 — Continuidad</p>\n<div class=\"formula-grid\">\n<div class=\"fbox\"><div class=\"big\">Continua en a ⟺ ∃f(a) · ∃lím · son iguales</div><small>Las 3 condiciones</small></div>\n<div class=\"fbox\"><div class=\"big\">Bolzano</div><small>Continua en [a,b] y cambia de signo → raíz en (a,b)</small></div>\n<div class=\"fbox\"><div class=\"big\">Weierstrass</div><small>Continua en [a,b] → alcanza máx y mín absolutos</small></div>\n<div class=\"fbox\"><div class=\"big\">Derivable ⟹ continua</div><small>(no al revés)</small></div>\n</div>\n<p style=\"color:var(--accent);font-weight:700;margin:6px 0\">Unidad 8 — Derivadas</p>\n<div class=\"formula-grid\">\n<div class=\"fbox\"><div class=\"big\">f ′(a) = lím_(h→0) (f(a+h)−f(a))/h</div><small>Definición</small></div>\n<div class=\"fbox\"><div class=\"big\">y = f(a) + f ′(a)(x−a)</div><small>Recta tangente</small></div>\n<div class=\"fbox\"><div class=\"big\">(k)′=0 · (xⁿ)′=n·xⁿ⁻¹ · (√x)′=1/(2√x)</div><small>Tabla (potencias)</small></div>\n<div class=\"fbox\"><div class=\"big\">(eˣ)′=eˣ · (aˣ)′=aˣ·L a · (L x)′=1/x</div><small>Tabla (exp y log)</small></div>\n<div class=\"fbox\"><div class=\"big\">(f±g)′=f ′±g′ · (k·f)′=k·f ′</div><small>Suma y constante</small></div>\n<div class=\"fbox\"><div class=\"big\">(f·g)′ = f ′g + fg′</div><small>Producto</small></div>\n<div class=\"fbox\"><div class=\"big\">(f/g)′ = (f ′g − fg′)/g²</div><small>Cociente</small></div>\n<div class=\"fbox\"><div class=\"big\">(f(g(x)))′ = f ′(g(x))·g′(x)</div><small>Regla de la cadena</small></div>\n</div>\n<p style=\"color:var(--accent);font-weight:700;margin:6px 0\">Unidad 9 — Variación y optimización</p>\n<div class=\"formula-grid\">\n<div class=\"fbox\"><div class=\"big\">f ′&gt;0 crece · f ′&lt;0 decrece</div><small>Signo de la derivada</small></div>\n<div class=\"fbox\"><div class=\"big\">f ′(a)=0 → punto crítico</div><small>Candidato a máx/mín</small></div>\n<div class=\"fbox\"><div class=\"big\">+ a − = máximo · − a + = mínimo</div><small>Clasificación por cambio de signo</small></div>\n<div class=\"fbox\"><div class=\"big\">En [a,b]: comparo críticos y extremos</div><small>El óptimo puede estar en un borde</small></div>\n<div class=\"fbox\"><div class=\"big\">η(p) = − p·D′(p)/D(p)</div><small>Elasticidad (η&gt;1 elástica, &lt;1 inelástica)</small></div>\n<div class=\"fbox\"><div class=\"big\">I(p) = p·D(p) → I′(p) = D(p) + p·D′(p)</div><small>Ingreso y su derivada</small></div>\n</div>"
        },
        {
            "id": "n-c-trap",
            "title": "Trampas",
            "part": "General",
            "html": "<h3>Trampas típicas</h3>\n<div class=\"trap\"><span class=\"tag\">Límites</span> 0/0 e ∞/∞ son indeterminaciones: hay que <b>trabajarlas</b>, no valen 0 ni 1. Si los laterales no coinciden, el límite <b>no existe</b>.</div>\n<div class=\"trap\"><span class=\"tag\">Continuidad</span> Bolzano y Weierstrass exigen <b>continuidad en el intervalo cerrado</b>. Sin eso, no aplican.</div>\n<div class=\"trap\"><span class=\"tag\">Derivadas</span> (f·g)′ ≠ f ′·g′. La cadena se olvida: multiplicá por la derivada de lo de adentro. Continua no implica derivable.</div>\n<div class=\"trap\"><span class=\"tag\">Optimización</span> f ′(a)=0 no garantiza máximo: clasificá con el signo de f ′ y mirá el dominio.</div>\n<div class=\"trap\"><span class=\"tag\">Elasticidad</span> Con la notación del curso, <b>η ya es positiva</b> (por el signo menos): η&gt;1 elástica, η&lt;1 inelástica. No le pongas valor absoluto aparte.</div>\n<p style=\"color:var(--accent);font-weight:700;margin:12px 0 2px\">Del 1er parcial (funciones)</p>\n<div class=\"trap\"><span class=\"tag\">Dominio</span> No se puede dividir por cero ni sacar raíz (par) de un negativo. Esos valores <b>salen</b> del dominio.</div>\n<div class=\"trap\"><span class=\"tag\">Composición</span> f∘g <b>no</b> es g∘f: el orden importa. (f∘g)(x)=f(g(x)) (primero g).</div>\n<div class=\"trap\"><span class=\"tag\">Cuadrática</span> El signo de <b>a</b> decide máximo vs mínimo. No confundas las <b>raíces</b> (cortes con el eje x) con el <b>vértice</b> (la punta).</div>\n<div class=\"trap\"><span class=\"tag\">Utilidad (P1)</span> Armá bien U = Ingreso − Costo total (con CF y costo variable) ANTES de maximizar; el óptimo está en el vértice de la parábola.</div>\n<div class=\"trap\"><span class=\"tag\">Logaritmo</span> L(a+b) <b>no</b> es L(a)+L(b). El log convierte <b>productos</b> en sumas (L(ab)=La+Lb), no sumas.</div>\n<div class=\"trap\"><span class=\"tag\">Dominio vs recorrido</span> El <b>dominio</b> son las x donde existe; el <b>recorrido</b> (o imagen) son los valores de y que toma. No los confundas: son cosas distintas.</div>\n<div class=\"trap\"><span class=\"tag\">Límites</span> El límite <b>no</b> mira f(a): mira los alrededores. La función puede no existir en a y aún tener límite (el agujero).</div>\n<div class=\"trap\"><span class=\"tag\">Derivadas</span> La derivada de una <b>constante</b> es 0 (no la constante). Y ojo: derivar no es lo mismo que evaluar; f ′(a) es la pendiente, no el valor f(a).</div>\n<div class=\"trap\"><span class=\"tag\">Optimización</span> Un <b>máximo relativo</b> no siempre es el <b>absoluto</b>: en un intervalo [a,b] el absoluto puede estar en un borde. Siempre comparo críticos y extremos.</div>\n<div class=\"trap\"><span class=\"tag\">Notación</span> El parcial escribe <b>L en vez de ln</b>. Es lo mismo: logaritmo natural (base e).</div>\n<div class=\"trap\"><span class=\"tag\">Estrategia del parcial</span> Equivocarse <b>resta</b> 1.5. Si no puedo descartar al menos dos opciones, a veces conviene dejar en blanco (0) antes que arriesgar.</div>"
        }
    ],
    "flashcards": [
        {
            "g": "Tarjetas del apunte",
            "q": "¿Cuándo existe el límite en a?",
            "a": "Cuando los dos límites laterales (por izquierda y por derecha) existen y coinciden."
        },
        {
            "g": "Tarjetas del apunte",
            "q": "0/0 con polinomios, ¿qué hago?",
            "a": "Factorizo numerador y denominador y simplifico el factor (x−a). Después sustituyo."
        },
        {
            "g": "Tarjetas del apunte",
            "q": "Órdenes de infinito (x→+∞)",
            "a": "eˣ ≫ xⁿ ≫ ln x. Gana el más fuerte."
        },
        {
            "g": "Tarjetas del apunte",
            "q": "Las 3 condiciones de continuidad en a",
            "a": "Existe f(a), existe el límite en a, y son iguales: lím f(x) = f(a)."
        },
        {
            "g": "Tarjetas del apunte",
            "q": "Teorema de Bolzano",
            "a": "Si f es continua en [a,b] y cambia de signo, tiene al menos una raíz en (a,b)."
        },
        {
            "g": "Tarjetas del apunte",
            "q": "¿Qué es f ′(a)?",
            "a": "La pendiente de la recta tangente en a / la tasa instantánea de cambio. Es el límite del cociente incremental."
        },
        {
            "g": "Tarjetas del apunte",
            "q": "Regla de la cadena",
            "a": "(f(g(x)))′ = f ′(g(x))·g′(x). Derivo lo de afuera y multiplico por la derivada de lo de adentro."
        },
        {
            "g": "Tarjetas del apunte",
            "q": "¿Máximo o mínimo?",
            "a": "f ′(a)=0 y f ′ pasa de + a − → máximo. De − a + → mínimo."
        },
        {
            "g": "Tarjetas del apunte",
            "q": "∞/∞ con polinomios",
            "a": "Me quedo con el término de mayor grado de arriba y abajo. Igual grado → cociente de coeficientes; arriba menor → 0; arriba mayor → ±∞."
        },
        {
            "g": "Tarjetas del apunte",
            "q": "Recta tangente en a",
            "a": "y = f(a) + f ′(a)·(x − a). Necesito el punto f(a) y la pendiente f ′(a)."
        },
        {
            "g": "Tarjetas del apunte",
            "q": "¿Derivable ⟹ continua?",
            "a": "Sí: derivable implica continua. Pero al revés NO (ej. |x| en 0: continua pero con pico, no derivable)."
        },
        {
            "g": "Tarjetas del apunte",
            "q": "Weierstrass",
            "a": "f continua en un intervalo cerrado [a,b] alcanza máximo y mínimo absolutos."
        },
        {
            "g": "Tarjetas del apunte",
            "q": "¿Qué es la pendiente m?",
            "a": "La tasa de cambio: cuánto sube y por cada +1 en x. m>0 sube, m<0 baja. n es el corte con el eje y."
        },
        {
            "g": "Tarjetas del apunte",
            "q": "Punto de equilibrio",
            "a": "Donde la utilidad es 0 (ni gano ni pierdo): U = I − CT = 0."
        },
        {
            "g": "Tarjetas del apunte",
            "q": "Vértice de una parábola",
            "a": "x_v = −b/2a. Es máximo si a<0, mínimo si a>0. Ahí se maximiza el ingreso/utilidad."
        },
        {
            "g": "Tarjetas del apunte",
            "q": "Discriminante Δ",
            "a": "Δ = b²−4ac. Δ>0: 2 raíces · Δ=0: 1 · Δ<0: ninguna real."
        },
        {
            "g": "Tarjetas del apunte",
            "q": "¿Cómo saco el dominio?",
            "a": "Quito lo prohibido: denominador ≠ 0 y radicando (de raíz par) ≥ 0."
        },
        {
            "g": "Tarjetas del apunte",
            "q": "Composición f∘g",
            "a": "(f∘g)(x) = f(g(x)): primero aplico g, después f. El orden importa (f∘g ≠ g∘f)."
        },
        {
            "g": "Tarjetas del apunte",
            "q": "Interés compuesto",
            "a": "M = C·(1+i)ⁿ. Crecimiento exponencial: los intereses generan más intereses."
        },
        {
            "g": "Tarjetas del apunte",
            "q": "Logaritmo: ¿para qué?",
            "a": "Es la inversa de la exponencial (la \"deshace\"). Sirve para despejar la x del exponente. L(ab)=La+Lb."
        },
        {
            "g": "Unidad 1 · Lineales",
            "q": "Forma de una recta",
            "a": "y = m·x + n"
        },
        {
            "g": "Unidad 1 · Lineales",
            "q": "¿Qué es m?",
            "a": "La pendiente: cuánto sube y por cada +1 en x. Es la tasa de cambio."
        },
        {
            "g": "Unidad 1 · Lineales",
            "q": "¿Qué es n?",
            "a": "La ordenada en el origen: el valor de y donde la recta corta el eje vertical (en x=0)."
        },
        {
            "g": "Unidad 1 · Lineales",
            "q": "¿m>0 o m<0?",
            "a": "m>0 la recta crece, m<0 decrece, m=0 es horizontal."
        },
        {
            "g": "Unidad 1 · Lineales",
            "q": "Pendiente con dos puntos",
            "a": "m = (y₂−y₁)/(x₂−x₁): subida sobre avance."
        },
        {
            "g": "Unidad 1 · Lineales",
            "q": "Raíz de una recta",
            "a": "El x donde y=0 (el corte con el eje horizontal)."
        },
        {
            "g": "Unidad 1 · Lineales",
            "q": "Costo total (lineal)",
            "a": "CT = costos fijos + costo variable·x."
        },
        {
            "g": "Unidad 1 · Lineales",
            "q": "Ingreso y utilidad",
            "a": "I = precio·x ; U = I − CT."
        },
        {
            "g": "Unidad 1 · Lineales",
            "q": "Punto de equilibrio",
            "a": "Donde U = 0 (ni gano ni pierdo)."
        },
        {
            "g": "Unidad 1 · Lineales",
            "q": "¿Cómo cruzo dos rectas?",
            "a": "Igualo sus fórmulas y despejo x; después saco y."
        },
        {
            "g": "Unidad 1 · Lineales",
            "q": "Equilibrio de mercado",
            "a": "Donde la demanda iguala a la oferta: Qd = Qs."
        },
        {
            "g": "Unidad 2 · Cuadráticas",
            "q": "Forma de una cuadrática",
            "a": "y = ax² + bx + c. Su gráfico es una parábola."
        },
        {
            "g": "Unidad 2 · Cuadráticas",
            "q": "¿Qué decide el signo de a?",
            "a": "a>0 abre hacia arriba (tiene mínimo); a<0 hacia abajo (tiene máximo)."
        },
        {
            "g": "Unidad 2 · Cuadráticas",
            "q": "Discriminante",
            "a": "Δ = b² − 4ac."
        },
        {
            "g": "Unidad 2 · Cuadráticas",
            "q": "¿Cuántas raíces según Δ?",
            "a": "Δ>0: 2 raíces · Δ=0: 1 (doble) · Δ<0: ninguna real."
        },
        {
            "g": "Unidad 2 · Cuadráticas",
            "q": "Fórmula de Bhaskara",
            "a": "x = (−b ± √Δ) / 2a."
        },
        {
            "g": "Unidad 2 · Cuadráticas",
            "q": "Abscisa del vértice",
            "a": "x_v = −b/2a."
        },
        {
            "g": "Unidad 2 · Cuadráticas",
            "q": "¿Cómo saco la y del vértice?",
            "a": "Evalúo la función en x_v: y_v = f(x_v)."
        },
        {
            "g": "Unidad 2 · Cuadráticas",
            "q": "¿Qué son las raíces?",
            "a": "Los cortes con el eje x (donde y=0)."
        },
        {
            "g": "Unidad 2 · Cuadráticas",
            "q": "Signo de una cuadrática (a>0)",
            "a": "Negativa entre las raíces, positiva fuera."
        },
        {
            "g": "Unidad 2 · Cuadráticas",
            "q": "¿Dónde se maximiza el ingreso?",
            "a": "En el vértice de la parábola (si abre hacia abajo)."
        },
        {
            "g": "Unidad 2 · Cuadráticas",
            "q": "Raíz doble",
            "a": "Cuando Δ=0: la parábola toca el eje x en un solo punto (el vértice)."
        },
        {
            "g": "Unidad 3 · Más sobre funciones",
            "q": "¿Qué es una función?",
            "a": "Una regla que a cada x le asigna un único valor y."
        },
        {
            "g": "Unidad 3 · Más sobre funciones",
            "q": "¿Qué es el dominio?",
            "a": "El conjunto de x donde la función existe."
        },
        {
            "g": "Unidad 3 · Más sobre funciones",
            "q": "Prohibición de dominio 1",
            "a": "No se puede dividir por cero (denominador ≠ 0)."
        },
        {
            "g": "Unidad 3 · Más sobre funciones",
            "q": "Prohibición de dominio 2",
            "a": "No se puede sacar raíz (par) de un número negativo (radicando ≥ 0)."
        },
        {
            "g": "Unidad 3 · Más sobre funciones",
            "q": "¿Qué es el recorrido?",
            "a": "La imagen: los valores de y que la función llega a tomar."
        },
        {
            "g": "Unidad 3 · Más sobre funciones",
            "q": "Composición de funciones",
            "a": "(f∘g)(x) = f(g(x)): primero aplico g, después f."
        },
        {
            "g": "Unidad 3 · Más sobre funciones",
            "q": "¿f∘g = g∘f?",
            "a": "No: el orden importa, en general son distintas."
        },
        {
            "g": "Unidad 3 · Más sobre funciones",
            "q": "Función potencial",
            "a": "y = xⁿ. Es la base de las derivadas del 2º parcial."
        },
        {
            "g": "Unidad 3 · Más sobre funciones",
            "q": "Valor absoluto",
            "a": "|x| = x si x≥0 ; −x si x<0. Siempre da ≥ 0."
        },
        {
            "g": "Unidad 3 · Más sobre funciones",
            "q": "Función por tramos",
            "a": "Distinta fórmula según el intervalo de x (ej. IRPF por franjas)."
        },
        {
            "g": "Unidad 3 · Más sobre funciones",
            "q": "|−7| vale…",
            "a": "7. El valor absoluto nunca es negativo."
        },
        {
            "g": "Unidad 4 · Exponencial y logarítmica",
            "q": "Función exponencial",
            "a": "y = aˣ: la variable está en el exponente. Crece cada vez más rápido."
        },
        {
            "g": "Unidad 4 · Exponencial y logarítmica",
            "q": "El número e",
            "a": "e ≈ 2,718 (número de Euler), base del crecimiento continuo."
        },
        {
            "g": "Unidad 4 · Exponencial y logarítmica",
            "q": "(eˣ)′ =",
            "a": "eˣ. Es la única función que es su propia derivada."
        },
        {
            "g": "Unidad 4 · Exponencial y logarítmica",
            "q": "Interés compuesto",
            "a": "M = C·(1+i)ⁿ (capital C, tasa i, n períodos)."
        },
        {
            "g": "Unidad 4 · Exponencial y logarítmica",
            "q": "¿Qué es el logaritmo?",
            "a": "La función inversa de la exponencial: la deshace."
        },
        {
            "g": "Unidad 4 · Exponencial y logarítmica",
            "q": "L = ln",
            "a": "El curso escribe L en vez de ln: es el logaritmo natural (base e)."
        },
        {
            "g": "Unidad 4 · Exponencial y logarítmica",
            "q": "L(a·b) =",
            "a": "L(a) + L(b). El log convierte productos en sumas."
        },
        {
            "g": "Unidad 4 · Exponencial y logarítmica",
            "q": "L(a/b) =",
            "a": "L(a) − L(b)."
        },
        {
            "g": "Unidad 4 · Exponencial y logarítmica",
            "q": "L(aⁿ) =",
            "a": "n·L(a). Baja el exponente."
        },
        {
            "g": "Unidad 4 · Exponencial y logarítmica",
            "q": "L(1) y L(e)",
            "a": "L(1)=0 y L(e)=1."
        },
        {
            "g": "Unidad 4 · Exponencial y logarítmica",
            "q": "¿Cómo despejo x del exponente?",
            "a": "Aplico L a ambos lados (ej. eˣ=5 → x=L(5))."
        },
        {
            "g": "Unidad 5 · Límites para x→a",
            "q": "¿Qué es un límite?",
            "a": "Hacia qué valor se acerca f(x) cuando x se acerca a a."
        },
        {
            "g": "Unidad 5 · Límites para x→a",
            "q": "¿Qué significa x→a?",
            "a": "x se acerca a a por los dos lados, sin llegar a ser a."
        },
        {
            "g": "Unidad 5 · Límites para x→a",
            "q": "Primer paso para un límite",
            "a": "Sustituir x=a. Si da un número, ese es."
        },
        {
            "g": "Unidad 5 · Límites para x→a",
            "q": "¿Qué es 0/0?",
            "a": "Una indeterminación: no sé el resultado, tengo que trabajarlo (no es 0 ni 1)."
        },
        {
            "g": "Unidad 5 · Límites para x→a",
            "q": "0/0 con polinomios",
            "a": "Factorizo arriba y abajo y simplifico el factor (x−a). Después sustituyo."
        },
        {
            "g": "Unidad 5 · Límites para x→a",
            "q": "¿Por qué puedo simplificar (x−a)?",
            "a": "Porque en el límite x se acerca a a pero nunca es a, así que (x−a)≠0."
        },
        {
            "g": "Unidad 5 · Límites para x→a",
            "q": "Límites laterales",
            "a": "x→a⁻ (por izquierda, valores menores) y x→a⁺ (por derecha, mayores)."
        },
        {
            "g": "Unidad 5 · Límites para x→a",
            "q": "¿Cuándo existe el límite?",
            "a": "Si y solo si los dos laterales existen y coinciden."
        },
        {
            "g": "Unidad 5 · Límites para x→a",
            "q": "Si los laterales dan distinto…",
            "a": "Hay un salto y el límite NO existe."
        },
        {
            "g": "Unidad 5 · Límites para x→a",
            "q": "Asíntota vertical",
            "a": "Si el denominador→0 y el numerador no, la función se dispara a ±∞ en x=a."
        },
        {
            "g": "Unidad 5 · Límites para x→a",
            "q": "¿El límite mira f(a)?",
            "a": "No: mira los alrededores. La función puede tener un agujero en a y aún tener límite."
        },
        {
            "g": "Unidad 6 · Límites para x→±∞",
            "q": "¿Qué pregunto en x→+∞?",
            "a": "Qué hace la función a lo lejos (cuando x se vuelve enorme)."
        },
        {
            "g": "Unidad 6 · Límites para x→±∞",
            "q": "Asíntota horizontal",
            "a": "Si el límite en ±∞ es un número L, hay asíntota horizontal y=L."
        },
        {
            "g": "Unidad 6 · Límites para x→±∞",
            "q": "∞/∞ con polinomios",
            "a": "Me quedo con el término de mayor grado de arriba y de abajo."
        },
        {
            "g": "Unidad 6 · Límites para x→±∞",
            "q": "∞/∞ mismo grado",
            "a": "El límite es el cociente de los coeficientes principales."
        },
        {
            "g": "Unidad 6 · Límites para x→±∞",
            "q": "∞/∞ arriba menor grado",
            "a": "El límite es 0 (gana el de abajo)."
        },
        {
            "g": "Unidad 6 · Límites para x→±∞",
            "q": "∞/∞ arriba mayor grado",
            "a": "El límite es ±∞ (gana el de arriba)."
        },
        {
            "g": "Unidad 6 · Límites para x→±∞",
            "q": "Órdenes de infinito",
            "a": "eˣ ≫ xⁿ ≫ L x. Gana el más fuerte."
        },
        {
            "g": "Unidad 6 · Límites para x→±∞",
            "q": "eˣ vs cualquier potencia",
            "a": "La exponencial le gana: x^n/eˣ → 0."
        },
        {
            "g": "Unidad 6 · Límites para x→±∞",
            "q": "Potencia vs logaritmo",
            "a": "La potencia le gana: L(x)/x → 0."
        },
        {
            "g": "Unidad 6 · Límites para x→±∞",
            "q": "ELI5 de la carrera al infinito",
            "a": "eˣ es un cohete, xⁿ un auto, L x va a pie. Gana el cohete."
        },
        {
            "g": "Unidad 7 · Continuidad",
            "q": "Continua (intuición)",
            "a": "La puedo dibujar sin levantar el lápiz."
        },
        {
            "g": "Unidad 7 · Continuidad",
            "q": "Las 3 condiciones de continuidad",
            "a": "Existe f(a), existe el límite en a, y son iguales."
        },
        {
            "g": "Unidad 7 · Continuidad",
            "q": "Si no existe f(a)…",
            "a": "Hay un agujero (falla la condición 1)."
        },
        {
            "g": "Unidad 7 · Continuidad",
            "q": "Si los laterales difieren…",
            "a": "Hay un salto (falla la condición 2)."
        },
        {
            "g": "Unidad 7 · Continuidad",
            "q": "Discontinuidad evitable",
            "a": "El límite existe pero falta o está corrido el punto (un huequito)."
        },
        {
            "g": "Unidad 7 · Continuidad",
            "q": "Discontinuidad de salto",
            "a": "Los laterales existen pero dan distinto: la curva pega un salto."
        },
        {
            "g": "Unidad 7 · Continuidad",
            "q": "Teorema de Bolzano",
            "a": "f continua en [a,b] y cambia de signo → tiene una raíz en (a,b)."
        },
        {
            "g": "Unidad 7 · Continuidad",
            "q": "¿Qué necesita Bolzano?",
            "a": "Continuidad en el intervalo CERRADO [a,b]."
        },
        {
            "g": "Unidad 7 · Continuidad",
            "q": "Teorema de Weierstrass",
            "a": "f continua en [a,b] alcanza máximo y mínimo absolutos."
        },
        {
            "g": "Unidad 7 · Continuidad",
            "q": "Derivable ⟹ continua",
            "a": "Verdadero: si es derivable, seguro es continua."
        },
        {
            "g": "Unidad 7 · Continuidad",
            "q": "¿Continua ⟹ derivable?",
            "a": "No: |x| en 0 es continua pero tiene un pico (no derivable)."
        },
        {
            "g": "Unidad 8 · Derivadas",
            "q": "¿Qué es f′(a)?",
            "a": "La pendiente de la recta tangente en a / la tasa instantánea de cambio."
        },
        {
            "g": "Unidad 8 · Derivadas",
            "q": "Definición de derivada",
            "a": "f′(a) = lím_(h→0) (f(a+h)−f(a))/h."
        },
        {
            "g": "Unidad 8 · Derivadas",
            "q": "Recta tangente en a",
            "a": "y = f(a) + f′(a)·(x−a)."
        },
        {
            "g": "Unidad 8 · Derivadas",
            "q": "(k)′ =",
            "a": "0 (la derivada de una constante es cero)."
        },
        {
            "g": "Unidad 8 · Derivadas",
            "q": "(xⁿ)′ =",
            "a": "n·xⁿ⁻¹ (bajo el exponente y le resto 1)."
        },
        {
            "g": "Unidad 8 · Derivadas",
            "q": "(eˣ)′ =",
            "a": "eˣ."
        },
        {
            "g": "Unidad 8 · Derivadas",
            "q": "(L x)′ =",
            "a": "1/x."
        },
        {
            "g": "Unidad 8 · Derivadas",
            "q": "(√x)′ =",
            "a": "1/(2√x)."
        },
        {
            "g": "Unidad 8 · Derivadas",
            "q": "Regla del producto",
            "a": "(f·g)′ = f′·g + f·g′."
        },
        {
            "g": "Unidad 8 · Derivadas",
            "q": "Regla del cociente",
            "a": "(f/g)′ = (f′·g − f·g′)/g²."
        },
        {
            "g": "Unidad 8 · Derivadas",
            "q": "Regla de la cadena",
            "a": "(f(g(x)))′ = f′(g(x))·g′(x)."
        },
        {
            "g": "Unidad 8 · Derivadas",
            "q": "ELI5 de la cadena",
            "a": "Derivo la de afuera dejando la de adentro quieta, y multiplico por la derivada de la de adentro."
        },
        {
            "g": "Unidad 9 · Variación y optimización",
            "q": "¿Qué dice f′>0?",
            "a": "La función crece (sube)."
        },
        {
            "g": "Unidad 9 · Variación y optimización",
            "q": "¿Qué dice f′<0?",
            "a": "La función decrece (baja)."
        },
        {
            "g": "Unidad 9 · Variación y optimización",
            "q": "¿Qué es un punto crítico?",
            "a": "Donde f′(a)=0: la tangente es horizontal. Candidato a máx/mín."
        },
        {
            "g": "Unidad 9 · Variación y optimización",
            "q": "¿Cuándo hay máximo?",
            "a": "En un crítico donde f′ pasa de + a −."
        },
        {
            "g": "Unidad 9 · Variación y optimización",
            "q": "¿Cuándo hay mínimo?",
            "a": "En un crítico donde f′ pasa de − a +."
        },
        {
            "g": "Unidad 9 · Variación y optimización",
            "q": "Pasos de optimización",
            "a": "Derivo, igualo f′=0, clasifico con el signo de f′, miro el dominio."
        },
        {
            "g": "Unidad 9 · Variación y optimización",
            "q": "Máximo/mínimo en [a,b]",
            "a": "Comparo el valor en los puntos críticos y en los extremos del intervalo."
        },
        {
            "g": "Unidad 9 · Variación y optimización",
            "q": "¿Máx relativo = absoluto?",
            "a": "No siempre: en [a,b] el absoluto puede estar en un borde."
        },
        {
            "g": "Unidad 9 · Variación y optimización",
            "q": "Elasticidad de la demanda",
            "a": "η(p) = −p·D′(p)/D(p). El menos la hace positiva."
        },
        {
            "g": "Unidad 9 · Variación y optimización",
            "q": "η>1 vs η<1",
            "a": "η>1 elástica (subir precio baja ingreso); η<1 inelástica (subir precio sube ingreso)."
        },
        {
            "g": "Unidad 9 · Variación y optimización",
            "q": "Ingreso y su derivada",
            "a": "I(p)=p·D(p) → I′(p)=D(p)+p·D′(p)."
        },
        {
            "g": "Unidad 9 · Variación y optimización",
            "q": "f′(a)=0 significa…",
            "a": "La tangente es horizontal en a (posible máximo o mínimo)."
        }
    ],
    "questions": [
        {
            "g": "Autoevaluación del apunte",
            "q": "La recta que pasa por (1, 3) y (3, 7) es…",
            "opts": [
                "y = 4x − 1",
                "y = 2x + 3",
                "y = 2x + 1"
            ],
            "ans": 2,
            "exp": "m=(7−3)/(3−1)=2; con (1,3): 3=2·1+n → n=1."
        },
        {
            "g": "Autoevaluación del apunte",
            "q": "¿En cuántos puntos se cortan f(x)=x+2 y g(x)=x²?",
            "opts": [
                "1",
                "2",
                "0"
            ],
            "ans": 1,
            "exp": "x²=x+2 → x²−x−2=0 → (x−2)(x+1)=0 → x=2 y x=−1: dos puntos."
        },
        {
            "g": "Autoevaluación del apunte",
            "q": "Costo fijo 10, costo variable 5/u, demanda D(p)=30−2p (se produce lo que se demanda). La utilidad máxima es…",
            "opts": [
                "200",
                "50",
                "40"
            ],
            "ans": 2,
            "exp": "Produzco x=D(p)=30−2p. U(p)=Ingreso−Costo=p·x−(10+5x)=(p−5)(30−2p)−10 = −2p²+40p−160. Es una parábola (a<0): máximo en el vértice p=−40/(2·(−2))=10 → U(10)=−200+400−160=40."
        },
        {
            "g": "Autoevaluación del apunte",
            "q": "Las raíces de 2x² + 5x − 3 son…",
            "opts": [
                "x = 1/2 y x = −3",
                "x = 3 y x = −1/2",
                "no tiene raíces reales"
            ],
            "ans": 0,
            "exp": "Δ=25+24=49; x=(−5±7)/4 → 1/2 y −3."
        },
        {
            "g": "Autoevaluación del apunte",
            "q": "x² − 4x + k = 0 tiene dos raíces reales distintas cuando…",
            "opts": [
                "k < 4",
                "k > 4",
                "k = 4"
            ],
            "ans": 0,
            "exp": "Δ=16−4k>0 → k<4."
        },
        {
            "g": "Autoevaluación del apunte",
            "q": "El dominio de f(x)=√(x−3) es…",
            "opts": [
                "x ≠ 3",
                "todos los reales",
                "x ≥ 3"
            ],
            "ans": 2,
            "exp": "El radicando debe ser ≥ 0: x−3≥0 → x≥3."
        },
        {
            "g": "Autoevaluación del apunte",
            "q": "Con f(x)=x² y g(x)=x+1, (f∘g)(x) es…",
            "opts": [
                "x² + 1",
                "(x+1)²",
                "x² + x"
            ],
            "ans": 1,
            "exp": "(f∘g)(x)=f(g(x))=f(x+1)=(x+1)². El orden importa."
        },
        {
            "g": "Autoevaluación del apunte",
            "q": "La solución de 2e^(2x) = 12 es…",
            "opts": [
                "x = L(3)",
                "x = L(12)",
                "x = L(6)/2"
            ],
            "ans": 2,
            "exp": "e^(2x)=6 → 2x=L(6) → x=L(6)/2."
        },
        {
            "g": "Autoevaluación del apunte",
            "q": "L(8) + L(3) − L(4) =",
            "opts": [
                "L(24)",
                "L(7)",
                "L(6)"
            ],
            "ans": 2,
            "exp": "L(8·3/4)=L(6)."
        },
        {
            "g": "Autoevaluación del apunte",
            "q": "lím_(x→3) (x²−9)/(x−3) =",
            "opts": [
                "no existe",
                "0",
                "6"
            ],
            "ans": 2,
            "exp": "0/0 → (x−3)(x+3)/(x−3)=x+3 → 6."
        },
        {
            "g": "Autoevaluación del apunte",
            "q": "lím_(x→+∞) x²/eˣ =",
            "opts": [
                "0",
                "+∞",
                "1"
            ],
            "ans": 0,
            "exp": "eˣ (cohete) le gana a x² (auto) → el denominador domina → 0."
        },
        {
            "g": "Autoevaluación del apunte",
            "q": "f(x)={2x+1 si x<1 ; x²+a si x≥1}. ¿Qué a la hace continua en 1?",
            "opts": [
                "a = 0",
                "a = 3",
                "a = 2"
            ],
            "ans": 2,
            "exp": "Deben pegar: 2·1+1=3 y 1+a → 3=1+a → a=2."
        },
        {
            "g": "Autoevaluación del apunte",
            "q": "Una función continua en a cumple…",
            "opts": [
                "existe f(a), existe el límite y son iguales",
                "que sea derivable",
                "solo que exista f(a)"
            ],
            "ans": 0,
            "exp": "Las 3 condiciones juntas."
        },
        {
            "g": "Autoevaluación del apunte",
            "q": "La derivada de f(x)=x²·eˣ es…",
            "opts": [
                "2x·eˣ + x²·eˣ",
                "x²·eˣ",
                "2x·eˣ"
            ],
            "ans": 0,
            "exp": "Producto: (x²)′eˣ+x²(eˣ)′=2x·eˣ+x²·eˣ."
        },
        {
            "g": "Autoevaluación del apunte",
            "q": "La derivada de (x²+1)⁵ es…",
            "opts": [
                "5(x²+1)⁴",
                "5(x²+1)⁴·2x",
                "5·2x"
            ],
            "ans": 1,
            "exp": "Cadena: derivo lo de afuera y multiplico por la derivada de lo de adentro (2x)."
        },
        {
            "g": "Autoevaluación del apunte",
            "q": "Si y=3x+4 es tangente a f en (1, f(1)), entonces…",
            "opts": [
                "f(1)=7 y f ′(1)=3",
                "f(1)=4 y f ′(1)=3",
                "f(1)=3 y f ′(1)=4"
            ],
            "ans": 0,
            "exp": "La pendiente de la tangente es f ′(1)=3; y el punto está en la recta: f(1)=3·1+4=7."
        },
        {
            "g": "Autoevaluación del apunte",
            "q": "f(1)=2, f ′(1)=3, F(x)=(f(x))³+f(x³). F ′(1)=",
            "opts": [
                "21",
                "30",
                "45"
            ],
            "ans": 2,
            "exp": "F ′=3(f)²f ′+f ′(x³)·3x² → en 1: 3·4·3+3·3=45."
        },
        {
            "g": "Autoevaluación del apunte",
            "q": "f(x)=x⁴−4x−1 en [2,3]. El mínimo absoluto es…",
            "opts": [
                "7 (en x=2)",
                "−1",
                "68 (en x=3)"
            ],
            "ans": 0,
            "exp": "f ′=4x³−4=0 → x=1 ∉[2,3]; comparo bordes: f(2)=7, f(3)=68 → mínimo 7."
        },
        {
            "g": "Autoevaluación del apunte",
            "q": "Si la demanda es inelástica (η<1), subir el precio hace que el ingreso…",
            "opts": [
                "no cambie",
                "baje",
                "suba"
            ],
            "ans": 2,
            "exp": "Inelástica: la cantidad cae poco → el ingreso sube."
        },
        {
            "g": "Autoevaluación del apunte",
            "q": "f continua en [a,b] con f(a)·f(b)<0. Entonces…",
            "opts": [
                "es derivable",
                "no tiene raíces",
                "tiene al menos una raíz en (a,b) (Bolzano)"
            ],
            "ans": 2,
            "exp": "Cambia de signo y es continua → cruza el cero (Bolzano)."
        },
        {
            "g": "Unidad 1 · Lineales",
            "q": "Pendiente de la recta que pasa por (2,1) y (5,7):",
            "opts": [
                "2",
                "6",
                "3"
            ],
            "ans": 0,
            "exp": "m=(7−1)/(5−2)=6/3=2."
        },
        {
            "g": "Unidad 1 · Lineales",
            "q": "¿Dónde corta la recta y=−3x+7 al eje y?",
            "opts": [
                "en y=7/3",
                "en y=7",
                "en y=−3"
            ],
            "ans": 1,
            "exp": "En x=0, y=n=7."
        },
        {
            "g": "Unidad 1 · Lineales",
            "q": "¿La recta y=−2x+5 crece o decrece?",
            "opts": [
                "decrece",
                "es constante",
                "crece"
            ],
            "ans": 0,
            "exp": "m=−2<0 → decrece."
        },
        {
            "g": "Unidad 1 · Lineales",
            "q": "Raíz (corte con el eje x) de y=2x−6:",
            "opts": [
                "x=6",
                "x=−3",
                "x=3"
            ],
            "ans": 2,
            "exp": "2x−6=0 → x=3."
        },
        {
            "g": "Unidad 1 · Lineales",
            "q": "CF=100, costo variable 4/u, precio 9. Utilidad de vender 50 unidades:",
            "opts": [
                "150",
                "250",
                "350"
            ],
            "ans": 0,
            "exp": "I=9·50=450; CT=100+4·50=300; U=150."
        },
        {
            "g": "Unidad 1 · Lineales",
            "q": "Punto de equilibrio con CF=200, cv=3, precio 5:",
            "opts": [
                "100 unidades",
                "200 unidades",
                "40 unidades"
            ],
            "ans": 0,
            "exp": "(5−3)x=200 → x=100."
        },
        {
            "g": "Unidad 1 · Lineales",
            "q": "¿Dónde se cruzan y=2x+1 e y=−x+7?",
            "opts": [
                "(2,5)",
                "(3,5)",
                "(2,3)"
            ],
            "ans": 0,
            "exp": "2x+1=−x+7 → x=2, y=5."
        },
        {
            "g": "Unidad 1 · Lineales",
            "q": "Recta de pendiente 4 que pasa por (0,−3):",
            "opts": [
                "y=4x+3",
                "y=4x−3",
                "y=−3x+4"
            ],
            "ans": 1,
            "exp": "n=−3, m=4."
        },
        {
            "g": "Unidad 1 · Lineales",
            "q": "Si CT=500+8x, ¿cuánto cuesta producir una unidad más?",
            "opts": [
                "508",
                "8",
                "800"
            ],
            "ans": 1,
            "exp": "En una lineal cada unidad extra cuesta la pendiente: 8."
        },
        {
            "g": "Unidad 2 · Cuadráticas",
            "q": "Raíces de x²−5x+6:",
            "opts": [
                "−2 y −3",
                "1 y 6",
                "2 y 3"
            ],
            "ans": 2,
            "exp": "Δ=25−24=1; x=(5±1)/2 → 2 y 3."
        },
        {
            "g": "Unidad 2 · Cuadráticas",
            "q": "Abscisa del vértice de y=x²−4x+1:",
            "opts": [
                "x=−2",
                "x=2",
                "x=4"
            ],
            "ans": 1,
            "exp": "x=−b/2a=4/2=2."
        },
        {
            "g": "Unidad 2 · Cuadráticas",
            "q": "¿La parábola y=−x²+2x−5 tiene máximo o mínimo?",
            "opts": [
                "máximo",
                "mínimo",
                "ninguno"
            ],
            "ans": 0,
            "exp": "a=−1<0 → abre hacia abajo → máximo."
        },
        {
            "g": "Unidad 2 · Cuadráticas",
            "q": "¿Cuántas raíces reales tiene 3x²+x+5?",
            "opts": [
                "1",
                "ninguna",
                "2"
            ],
            "ans": 1,
            "exp": "Δ=1−60<0 → sin raíces reales."
        },
        {
            "g": "Unidad 2 · Cuadráticas",
            "q": "y=x²−6x+9 tiene…",
            "opts": [
                "ninguna raíz",
                "una raíz doble",
                "dos raíces"
            ],
            "ans": 1,
            "exp": "Δ=36−36=0 → raíz doble en x=3."
        },
        {
            "g": "Unidad 2 · Cuadráticas",
            "q": "Ingreso I(p)=p(40−2p). Precio que lo maximiza:",
            "opts": [
                "40",
                "20",
                "10"
            ],
            "ans": 2,
            "exp": "I=40p−2p², vértice p=−40/(2·(−2))=10."
        },
        {
            "g": "Unidad 2 · Cuadráticas",
            "q": "¿Para qué x es x²−x−6>0?",
            "opts": [
                "x<−2 o x>3",
                "−2<x<3",
                "siempre"
            ],
            "ans": 0,
            "exp": "Raíces −2 y 3, a>0 → positiva fuera de las raíces."
        },
        {
            "g": "Unidad 2 · Cuadráticas",
            "q": "Valor (y) del vértice de y=x²−4x+1:",
            "opts": [
                "−3",
                "−1",
                "3"
            ],
            "ans": 0,
            "exp": "y(2)=4−8+1=−3."
        },
        {
            "g": "Unidad 2 · Cuadráticas",
            "q": "x²+kx+9=0 tiene raíz doble cuando…",
            "opts": [
                "k=±6",
                "k=6 solamente",
                "k=9"
            ],
            "ans": 0,
            "exp": "Δ=k²−36=0 → k=±6."
        },
        {
            "g": "Unidad 3 · Más sobre funciones",
            "q": "Dominio de 1/(x−2):",
            "opts": [
                "x≠2",
                "x≥2",
                "todos los reales"
            ],
            "ans": 0,
            "exp": "El denominador no puede ser 0."
        },
        {
            "g": "Unidad 3 · Más sobre funciones",
            "q": "Dominio de √(2x−4):",
            "opts": [
                "x≥2",
                "x≤2",
                "x≠2"
            ],
            "ans": 0,
            "exp": "2x−4≥0 → x≥2."
        },
        {
            "g": "Unidad 3 · Más sobre funciones",
            "q": "Con f(x)=x² y g(x)=x−3, (f∘g)(x) es:",
            "opts": [
                "(x−3)²",
                "x²−9",
                "x²−3"
            ],
            "ans": 0,
            "exp": "f(g(x))=(x−3)²."
        },
        {
            "g": "Unidad 3 · Más sobre funciones",
            "q": "Con f(x)=x+1 y g(x)=2x, (g∘f)(x) es:",
            "opts": [
                "x+2",
                "2x+1",
                "2x+2"
            ],
            "ans": 2,
            "exp": "g(f(x))=2(x+1)=2x+2."
        },
        {
            "g": "Unidad 3 · Más sobre funciones",
            "q": "f(x)={x² si x<0; 2x si x≥0}. f(−2)=",
            "opts": [
                "−2",
                "4",
                "−4"
            ],
            "ans": 1,
            "exp": "x=−2<0 → x²=4."
        },
        {
            "g": "Unidad 3 · Más sobre funciones",
            "q": "La misma f, f(3)=",
            "opts": [
                "9",
                "3",
                "6"
            ],
            "ans": 2,
            "exp": "x=3≥0 → 2x=6."
        },
        {
            "g": "Unidad 3 · Más sobre funciones",
            "q": "|x| en x=−5 vale:",
            "opts": [
                "5",
                "−5",
                "0"
            ],
            "ans": 0,
            "exp": "|−5|=5."
        },
        {
            "g": "Unidad 3 · Más sobre funciones",
            "q": "Dominio de √x/(x−1):",
            "opts": [
                "x≥0 y x≠1",
                "x>1",
                "x≥0"
            ],
            "ans": 0,
            "exp": "Radicando≥0 (x≥0) y denominador≠0 (x≠1)."
        },
        {
            "g": "Unidad 3 · Más sobre funciones",
            "q": "¿(f∘g) es siempre igual a (g∘f)?",
            "opts": [
                "Solo si son lineales",
                "No, el orden importa",
                "Sí, siempre"
            ],
            "ans": 1,
            "exp": "En general f∘g ≠ g∘f."
        },
        {
            "g": "Unidad 4 · Exponencial y logarítmica",
            "q": "Si 2ˣ=8, entonces x=",
            "opts": [
                "3",
                "2",
                "4"
            ],
            "ans": 0,
            "exp": "2³=8."
        },
        {
            "g": "Unidad 4 · Exponencial y logarítmica",
            "q": "L(e³)=",
            "opts": [
                "3",
                "1",
                "e³"
            ],
            "ans": 0,
            "exp": "L(eⁿ)=n."
        },
        {
            "g": "Unidad 4 · Exponencial y logarítmica",
            "q": "L(1)=",
            "opts": [
                "e",
                "0",
                "1"
            ],
            "ans": 1,
            "exp": "e⁰=1 → L(1)=0."
        },
        {
            "g": "Unidad 4 · Exponencial y logarítmica",
            "q": "Si eˣ=5, entonces x=",
            "opts": [
                "L(5)",
                "L(5)/2",
                "5/e"
            ],
            "ans": 0,
            "exp": "Aplico L a ambos lados: x=L(5)."
        },
        {
            "g": "Unidad 4 · Exponencial y logarítmica",
            "q": "L(12)−L(4)=",
            "opts": [
                "L(48)",
                "L(3)",
                "L(8)"
            ],
            "ans": 1,
            "exp": "L(12/4)=L(3)."
        },
        {
            "g": "Unidad 4 · Exponencial y logarítmica",
            "q": "Resolvé 3e^(2x)=15:",
            "opts": [
                "x=L(5)/2",
                "x=L(5)",
                "x=L(15)/2"
            ],
            "ans": 0,
            "exp": "e^(2x)=5 → 2x=L(5) → x=L(5)/2."
        },
        {
            "g": "Unidad 4 · Exponencial y logarítmica",
            "q": "2000 al 10% anual compuesto durante 2 años da:",
            "opts": [
                "2200",
                "2420",
                "2400"
            ],
            "ans": 1,
            "exp": "2000·(1,1)²=2420."
        },
        {
            "g": "Unidad 4 · Exponencial y logarítmica",
            "q": "L(a²) es igual a:",
            "opts": [
                "2·L(a)",
                "L(2a)",
                "L(a)²"
            ],
            "ans": 0,
            "exp": "L(aⁿ)=n·L(a)."
        },
        {
            "g": "Unidad 4 · Exponencial y logarítmica",
            "q": "En P(t)=A·e^(−2t), cuando t crece, P…",
            "opts": [
                "se mantiene",
                "crece",
                "tiende a 0"
            ],
            "ans": 2,
            "exp": "Exponente negativo → decrece hacia 0."
        },
        {
            "g": "Unidad 5 · Límites para x→a",
            "q": "lím_(x→2) (x²−4)/(x−2) =",
            "opts": [
                "4",
                "2",
                "0"
            ],
            "ans": 0,
            "exp": "(x−2)(x+2)/(x−2)=x+2 → 4."
        },
        {
            "g": "Unidad 5 · Límites para x→a",
            "q": "lím_(x→0) (x²+3x)/x =",
            "opts": [
                "0",
                "+∞",
                "3"
            ],
            "ans": 2,
            "exp": "x(x+3)/x=x+3 → 3."
        },
        {
            "g": "Unidad 5 · Límites para x→a",
            "q": "lím_(x→1) (x−1)/(x²−1) =",
            "opts": [
                "1/2",
                "1",
                "0"
            ],
            "ans": 0,
            "exp": "(x−1)/[(x−1)(x+1)]=1/(x+1) → 1/2."
        },
        {
            "g": "Unidad 5 · Límites para x→a",
            "q": "lím_(x→3) (x²−9)/(x²−3x) =",
            "opts": [
                "3",
                "1",
                "2"
            ],
            "ans": 2,
            "exp": "(x−3)(x+3)/[x(x−3)]=(x+3)/x → 6/3=2."
        },
        {
            "g": "Unidad 5 · Límites para x→a",
            "q": "f(x)={x+1 si x<2; 5 si x≥2}. lím_(x→2) f(x) =",
            "opts": [
                "3",
                "5",
                "no existe"
            ],
            "ans": 2,
            "exp": "Izq=3, der=5; no coinciden."
        },
        {
            "g": "Unidad 5 · Límites para x→a",
            "q": "Para que lím_(x→2) (x²−ax+4)/(x−2) sea finito, a=",
            "opts": [
                "0",
                "2",
                "4"
            ],
            "ans": 2,
            "exp": "El numerador debe →0 en x=2: 8−2a=0 → a=4."
        },
        {
            "g": "Unidad 5 · Límites para x→a",
            "q": "lím_(x→0⁺) 1/x =",
            "opts": [
                "0",
                "+∞",
                "−∞"
            ],
            "ans": 1,
            "exp": "Denominador→0 por la derecha → +∞."
        },
        {
            "g": "Unidad 5 · Límites para x→a",
            "q": "lím_(x→2) 5/(x−2)² =",
            "opts": [
                "5",
                "+∞",
                "0"
            ],
            "ans": 1,
            "exp": "Denominador→0⁺ (al cuadrado), numerador 5 → +∞."
        },
        {
            "g": "Unidad 5 · Límites para x→a",
            "q": "lím_(x→1) (x³−1)/(x−1) =",
            "opts": [
                "1",
                "0",
                "3"
            ],
            "ans": 2,
            "exp": "x³−1=(x−1)(x²+x+1) → x²+x+1 → 3."
        },
        {
            "g": "Unidad 5 · Límites para x→a",
            "q": "Si lím_(x→a⁻)=2 y lím_(x→a⁺)=2, el límite…",
            "opts": [
                "no existe",
                "existe y vale 2",
                "vale 4"
            ],
            "ans": 1,
            "exp": "Laterales coinciden → límite=2."
        },
        {
            "g": "Unidad 6 · Límites para x→±∞",
            "q": "lím_(x→+∞) 3x²/(x²+1) =",
            "opts": [
                "3",
                "0",
                "+∞"
            ],
            "ans": 0,
            "exp": "Mayor grado: 3x²/x²=3."
        },
        {
            "g": "Unidad 6 · Límites para x→±∞",
            "q": "lím_(x→+∞) (2x+1)/(x²+5) =",
            "opts": [
                "0",
                "2",
                "+∞"
            ],
            "ans": 0,
            "exp": "Arriba grado menor → 0."
        },
        {
            "g": "Unidad 6 · Límites para x→±∞",
            "q": "lím_(x→+∞) x³/(x+1) =",
            "opts": [
                "1",
                "0",
                "+∞"
            ],
            "ans": 2,
            "exp": "Arriba grado mayor → +∞."
        },
        {
            "g": "Unidad 6 · Límites para x→±∞",
            "q": "lím_(x→+∞) x²/eˣ =",
            "opts": [
                "0",
                "1",
                "+∞"
            ],
            "ans": 0,
            "exp": "eˣ le gana a x² → 0."
        },
        {
            "g": "Unidad 6 · Límites para x→±∞",
            "q": "lím_(x→+∞) eˣ/x³ =",
            "opts": [
                "0",
                "+∞",
                "1"
            ],
            "ans": 1,
            "exp": "eˣ le gana a x³ → +∞."
        },
        {
            "g": "Unidad 6 · Límites para x→±∞",
            "q": "lím_(x→+∞) L(x)/x =",
            "opts": [
                "+∞",
                "0",
                "1"
            ],
            "ans": 1,
            "exp": "x le gana a L(x) → 0."
        },
        {
            "g": "Unidad 6 · Límites para x→±∞",
            "q": "lím_(x→+∞) (5x²−x)/(2x²+3) =",
            "opts": [
                "2",
                "5/2",
                "5"
            ],
            "ans": 1,
            "exp": "Mayor grado: 5x²/2x²=5/2."
        },
        {
            "g": "Unidad 6 · Límites para x→±∞",
            "q": "¿Quién crece más rápido cuando x→+∞?",
            "opts": [
                "eˣ",
                "x¹⁰⁰",
                "crecen igual"
            ],
            "ans": 0,
            "exp": "La exponencial le gana a cualquier potencia."
        },
        {
            "g": "Unidad 6 · Límites para x→±∞",
            "q": "lím_(x→−∞) 1/x =",
            "opts": [
                "1",
                "−∞",
                "0"
            ],
            "ans": 2,
            "exp": "1 dividido algo enorme → 0."
        },
        {
            "g": "Unidad 7 · Continuidad",
            "q": "f(x)={2x si x<1; x+1 si x≥1}. ¿Es continua en 1?",
            "opts": [
                "No",
                "Sí (2=2)",
                "Falta información"
            ],
            "ans": 1,
            "exp": "Izq 2·1=2, der 1+1=2 → coinciden."
        },
        {
            "g": "Unidad 7 · Continuidad",
            "q": "f(x)={x+a si x<0; 3 si x≥0}. a para que sea continua en 0:",
            "opts": [
                "a=−3",
                "a=0",
                "a=3"
            ],
            "ans": 2,
            "exp": "Izq: 0+a=a; der: 3 → a=3."
        },
        {
            "g": "Unidad 7 · Continuidad",
            "q": "¿Cuántas condiciones definen continuidad en a?",
            "opts": [
                "3",
                "2",
                "1"
            ],
            "ans": 0,
            "exp": "Existe f(a), existe el límite, y son iguales."
        },
        {
            "g": "Unidad 7 · Continuidad",
            "q": "f(x)=(x²−1)/(x−1) para x≠1, f(1)=5. ¿Continua en 1?",
            "opts": [
                "Falta info",
                "No",
                "Sí"
            ],
            "ans": 1,
            "exp": "El límite es 2 pero f(1)=5 → no coinciden."
        },
        {
            "g": "Unidad 7 · Continuidad",
            "q": "¿Qué necesita Bolzano para aplicarse?",
            "opts": [
                "f derivable",
                "f continua en [a,b]",
                "f positiva"
            ],
            "ans": 1,
            "exp": "Continuidad en el intervalo cerrado."
        },
        {
            "g": "Unidad 7 · Continuidad",
            "q": "f(x)=x³+x−1 en [0,1]: f(0)=−1, f(1)=1. Por Bolzano…",
            "opts": [
                "f es constante",
                "hay una raíz en (0,1)",
                "no hay raíz"
            ],
            "ans": 1,
            "exp": "Cambia de signo y es continua → cruza el cero."
        },
        {
            "g": "Unidad 7 · Continuidad",
            "q": "¿|x| es continua en 0?",
            "opts": [
                "Solo por la derecha",
                "No",
                "Sí"
            ],
            "ans": 2,
            "exp": "No se corta; es continua (aunque no derivable)."
        },
        {
            "g": "Unidad 7 · Continuidad",
            "q": "Weierstrass garantiza que f continua en [a,b]…",
            "opts": [
                "tiene una raíz",
                "es derivable",
                "alcanza máx y mín absolutos"
            ],
            "ans": 2,
            "exp": "Alcanza máximo y mínimo absolutos."
        },
        {
            "g": "Unidad 7 · Continuidad",
            "q": "Laterales distintos en a es una discontinuidad…",
            "opts": [
                "de salto",
                "no es discontinuidad",
                "evitable"
            ],
            "ans": 0,
            "exp": "Salto: por izquierda y derecha da distinto."
        },
        {
            "g": "Unidad 8 · Derivadas",
            "q": "(x⁵)′ =",
            "opts": [
                "x⁴",
                "5x⁵",
                "5x⁴"
            ],
            "ans": 2,
            "exp": "(xⁿ)′=n·xⁿ⁻¹."
        },
        {
            "g": "Unidad 8 · Derivadas",
            "q": "(3x²−2x+7)′ =",
            "opts": [
                "6x−2",
                "6x−2x",
                "3x−2"
            ],
            "ans": 0,
            "exp": "Derivo término a término."
        },
        {
            "g": "Unidad 8 · Derivadas",
            "q": "(eˣ)′ =",
            "opts": [
                "eˣ",
                "1",
                "x·eˣ"
            ],
            "ans": 0,
            "exp": "La exponencial es su propia derivada."
        },
        {
            "g": "Unidad 8 · Derivadas",
            "q": "(L x)′ =",
            "opts": [
                "1/x",
                "x",
                "L x"
            ],
            "ans": 0,
            "exp": "Derivada del logaritmo natural."
        },
        {
            "g": "Unidad 8 · Derivadas",
            "q": "(x·eˣ)′ =",
            "opts": [
                "x·eˣ",
                "eˣ",
                "eˣ+x·eˣ"
            ],
            "ans": 2,
            "exp": "Producto: 1·eˣ+x·eˣ."
        },
        {
            "g": "Unidad 8 · Derivadas",
            "q": "(x²·L x)′ =",
            "opts": [
                "2x/x",
                "2x·L x + x",
                "2x·L x"
            ],
            "ans": 1,
            "exp": "2x·Lx + x²·(1/x) = 2x·Lx + x."
        },
        {
            "g": "Unidad 8 · Derivadas",
            "q": "((x²+1)³)′ =",
            "opts": [
                "3(x²+1)²",
                "6x",
                "6x(x²+1)²"
            ],
            "ans": 2,
            "exp": "Cadena: 3(x²+1)²·2x."
        },
        {
            "g": "Unidad 8 · Derivadas",
            "q": "(e^(3x))′ =",
            "opts": [
                "3e^(3x)",
                "3x·e^(3x)",
                "e^(3x)"
            ],
            "ans": 0,
            "exp": "Cadena: e^(3x)·3."
        },
        {
            "g": "Unidad 8 · Derivadas",
            "q": "(1/x)′ =",
            "opts": [
                "−1/x",
                "−1/x²",
                "1/x²"
            ],
            "ans": 1,
            "exp": "(x⁻¹)′=−x⁻²=−1/x²."
        },
        {
            "g": "Unidad 8 · Derivadas",
            "q": "Recta tangente a f(x)=x² en x=1 (f(1)=1, f′(1)=2):",
            "opts": [
                "y=2x+1",
                "y=2x−1",
                "y=x"
            ],
            "ans": 1,
            "exp": "y=1+2(x−1)=2x−1."
        },
        {
            "g": "Unidad 8 · Derivadas",
            "q": "f(1)=2, f′(1)=3, F(x)=(f(x))³+f(x³). F′(1) =",
            "opts": [
                "45",
                "30",
                "39"
            ],
            "ans": 0,
            "exp": "3·(2²)·3 + f′(1)·3 = 36+9 = 45."
        },
        {
            "g": "Unidad 8 · Derivadas",
            "q": "Si y=3x+4 es tangente a f en (1,f(1)):",
            "opts": [
                "f(1)=4 y f′(1)=3",
                "f(1)=3 y f′(1)=4",
                "f(1)=7 y f′(1)=3"
            ],
            "ans": 2,
            "exp": "Pendiente f′(1)=3; el punto está en la recta: f(1)=3+4=7."
        },
        {
            "g": "Unidad 9 · Variación y optimización",
            "q": "Si f′(x)>0 en un intervalo, f…",
            "opts": [
                "decrece",
                "crece",
                "es constante"
            ],
            "ans": 1,
            "exp": "Derivada positiva → sube."
        },
        {
            "g": "Unidad 9 · Variación y optimización",
            "q": "Punto crítico de f(x)=x²−4x:",
            "opts": [
                "x=4",
                "x=0",
                "x=2"
            ],
            "ans": 2,
            "exp": "f′=2x−4=0 → x=2."
        },
        {
            "g": "Unidad 9 · Variación y optimización",
            "q": "En ese x=2, f(x)=x²−4x tiene un…",
            "opts": [
                "nada",
                "mínimo",
                "máximo"
            ],
            "ans": 1,
            "exp": "f′ pasa de − a + → mínimo."
        },
        {
            "g": "Unidad 9 · Variación y optimización",
            "q": "U(x)=−x²+20x. Cantidad que maximiza la utilidad:",
            "opts": [
                "5",
                "10",
                "20"
            ],
            "ans": 1,
            "exp": "U′=−2x+20=0 → x=10."
        },
        {
            "g": "Unidad 9 · Variación y optimización",
            "q": "Mínimo absoluto de f(x)=x²+1 en [−1,2]:",
            "opts": [
                "2",
                "5",
                "1"
            ],
            "ans": 2,
            "exp": "Crítico x=0 ∈[−1,2]; f(0)=1, menor que en los bordes."
        },
        {
            "g": "Unidad 9 · Variación y optimización",
            "q": "f(x)=x³−3x. Máximo relativo en:",
            "opts": [
                "x=1",
                "x=−1",
                "x=0"
            ],
            "ans": 1,
            "exp": "f′=3x²−3=0 → ±1; en −1 pasa de + a − → máximo."
        },
        {
            "g": "Unidad 9 · Variación y optimización",
            "q": "Máximo absoluto de f(x)=−x²+4 en [−1,3]:",
            "opts": [
                "3",
                "−5",
                "4"
            ],
            "ans": 2,
            "exp": "Crítico x=0; f(0)=4 (mayor que en los bordes)."
        },
        {
            "g": "Unidad 9 · Variación y optimización",
            "q": "Elasticidad de D(p)=3000−30p en p=60:",
            "opts": [
                "3/2 (elástica)",
                "1",
                "1/4 (inelástica)"
            ],
            "ans": 0,
            "exp": "η=p/(100−p)=60/40=3/2."
        },
        {
            "g": "Unidad 9 · Variación y optimización",
            "q": "Si η>1 (demanda elástica), subir el precio hace que el ingreso…",
            "opts": [
                "baje",
                "no cambie",
                "suba"
            ],
            "ans": 0,
            "exp": "Elástica: la cantidad cae mucho → el ingreso baja."
        },
        {
            "g": "Unidad 9 · Variación y optimización",
            "q": "f′(a)=0 significa que en a la tangente es…",
            "opts": [
                "inclinada 45°",
                "vertical",
                "horizontal"
            ],
            "ans": 2,
            "exp": "Pendiente 0 → tangente horizontal (candidato a máx/mín)."
        }
    ],
    "exercises": [
        {
            "g": "1 · Lineales",
            "title": "① Básico · Leer pendiente, signo y raíz de una recta",
            "html": "<p><b>Letra:</b> Sea f(x) = −2x + 4. (a) ¿Crece o decrece? (b) ¿Dónde corta los ejes? (c) ¿Para qué x es positiva?</p>\n<ol class=\"steps\">\n<li>(a) La pendiente es m = −2 &lt; 0 → la función <b>decrece</b>.</li>\n<li>(b) Corte con eje y: x=0 → f(0)=4 → punto (0, 4). Corte con eje x (raíz): −2x+4=0 → <b>x=2</b> → punto (2, 0).</li>\n<li>(c) Como decrece y vale 0 en x=2, es <b>positiva para x &lt; 2</b> y negativa para x &gt; 2.</li>\n</ol>"
        },
        {
            "g": "1 · Lineales",
            "title": "② Medio · Hallar la recta que pasa por dos puntos",
            "html": "<p><b>Letra:</b> Encontrá la ecuación de la recta que pasa por A=(1, 3) y B=(3, 7).</p>\n<ol class=\"steps\">\n<li>Pendiente: m = (7−3)/(3−1) = 4/2 = <b>2</b>.</li>\n<li>Uso y = mx + n con el punto A=(1,3): 3 = 2·1 + n → n = <b>1</b>.</li>\n<li>Recta: <b>y = 2x + 1</b>. (Verifico con B: 2·3+1 = 7 ✓.)</li>\n</ol>"
        },
        {
            "g": "1 · Lineales",
            "title": "③ Aplicado · Costo, ingreso, utilidad y punto de equilibrio",
            "html": "<p><b>Letra:</b> Una empresa tiene costos fijos de $500 y un costo variable de $3 por unidad. Vende cada unidad a $8. (a) Escribí CT, I y U en función de x. (b) ¿Cuántas unidades necesita para no perder?</p>\n<ol class=\"steps\">\n<li>(a) CT = 500 + 3x · I = 8x · U = I − CT = 8x − (500 + 3x) = <b>5x − 500</b>.</li>\n<li>(b) Equilibrio: U = 0 → 5x − 500 = 0 → <b>x = 100 unidades</b>.</li>\n<li>Lectura: con menos de 100 pierde, con más gana. Cada unidad extra aporta $5 (la pendiente de U).</li>\n</ol>"
        },
        {
            "g": "1 · Lineales",
            "title": "④ Más complejo · Intersección de dos rectas (comparar dos planes)",
            "html": "<p><b>Letra:</b> El plan A cobra $200 fijos + $2 por unidad; el plan B cobra $50 fijos + $5 por unidad. ¿A partir de cuántas unidades conviene A?</p>\n<ol class=\"steps\">\n<li>Costo A: C_A = 200 + 2x. Costo B: C_B = 50 + 5x.</li>\n<li>Se cruzan donde cuestan igual: 200 + 2x = 50 + 5x → 150 = 3x → <b>x = 50</b>.</li>\n<li>Para x &gt; 50, A crece más lento (pendiente 2 &lt; 5) → <b>conviene A a partir de 50 unidades</b>; antes, B.</li>\n</ol>"
        },
        {
            "g": "1 · Lineales",
            "title": "⑤ Medio · Recta dada por un punto y la pendiente",
            "html": "<p><b>Letra:</b> Hallá la recta de pendiente m = −3 que pasa por el punto P = (2, 1).</p>\n<ol class=\"steps\">\n<li>Arranco de y = mx + n con m = −3: y = −3x + n.</li>\n<li>Como pasa por (2, 1): 1 = −3·2 + n → 1 = −6 + n → n = <b>7</b>.</li>\n<li>Recta: <b>y = −3x + 7</b>.</li>\n</ol>"
        },
        {
            "g": "1 · Lineales",
            "title": "⑥ Aplicado · Equilibrio de mercado (oferta = demanda)",
            "html": "<p><b>Letra:</b> La demanda es Qd = 100 − 2p y la oferta Qs = 10 + 3p (p = precio). Hallá el precio y la cantidad de equilibrio.</p>\n<ol class=\"steps\">\n<li>El equilibrio es donde lo que se pide = lo que se ofrece: Qd = Qs.</li>\n<li>100 − 2p = 10 + 3p → 90 = 5p → <b>p = 18</b>.</li>\n<li>Cantidad: reemplazo en cualquiera: Q = 100 − 2·18 = <b>64</b>. (Chequeo con la oferta: 10 + 3·18 = 64 ✓.)</li>\n</ol>"
        },
        {
            "g": "1 · Lineales",
            "title": "⑦ Conceptual · Interpretar la pendiente como tasa de cambio",
            "html": "<p><b>Letra:</b> El costo de producir x unidades es CT(x) = 400 + 6x. (a) ¿Qué significan el 400 y el 6? (b) ¿Cuánto aumenta el costo si paso de 50 a 51 unidades? ¿Y de 200 a 201?</p>\n<ol class=\"steps\">\n<li>(a) El <b>400</b> es el costo fijo (lo que gasto aunque produzca 0). El <b>6</b> es el costo de cada unidad extra (la pendiente = costo marginal, acá constante).</li>\n<li>(b) Como es lineal, cada unidad extra cuesta siempre lo mismo: <b>$6</b>, tanto de 50→51 como de 200→201.</li>\n<li>Idea clave: en una función lineal la tasa de cambio es <b>constante</b>. En el 2º parcial, cuando la función no sea recta, esa \"tasa\" cambiará en cada punto y la mediré con la <b>derivada</b>.</li>\n</ol>"
        },
        {
            "g": "2 · Cuadráticas",
            "title": "① Básico · Raíces con Bhaskara",
            "html": "<p><b>Letra:</b> Hallá las raíces de f(x) = 2x² + 5x − 3.</p>\n<ol class=\"steps\">\n<li>Identifico: a=2, b=5, c=−3. Discriminante: Δ = 5² − 4·2·(−3) = 25 + 24 = 49.</li>\n<li>Como Δ=49&gt;0, hay 2 raíces: x = (−5 ± √49)/(2·2) = (−5 ± 7)/4.</li>\n<li>x₁ = (−5+7)/4 = <b>1/2</b> · x₂ = (−5−7)/4 = <b>−3</b>.</li>\n</ol>"
        },
        {
            "g": "2 · Cuadráticas",
            "title": "② Básico · Vértice y si es máximo o mínimo",
            "html": "<p><b>Letra:</b> Para f(x) = −x² + 4x, hallá el vértice e indicá si es máximo o mínimo.</p>\n<ol class=\"steps\">\n<li>a=−1, b=4, c=0. Como a&lt;0, la parábola abre hacia abajo → tiene <b>máximo</b>.</li>\n<li>x_v = −b/2a = −4/(2·(−1)) = <b>2</b>.</li>\n<li>y_v = f(2) = −(2²) + 4·2 = −4 + 8 = <b>4</b>. Vértice (2, 4), es un máximo.</li>\n</ol>"
        },
        {
            "g": "2 · Cuadráticas",
            "title": "③ Medio · Estudiar el signo de la cuadrática",
            "html": "<p><b>Letra:</b> ¿Para qué valores de x es positiva f(x) = x² − x − 6?</p>\n<ol class=\"steps\">\n<li>Raíces: Δ = 1 + 24 = 25 → x = (1 ± 5)/2 → x₁ = 3, x₂ = −2.</li>\n<li>Como a=1&gt;0 (abre hacia arriba), es <b>negativa entre las raíces</b> y positiva afuera.</li>\n<li>Entonces f(x) &gt; 0 para <b>x &lt; −2 o x &gt; 3</b>.</li>\n</ol>"
        },
        {
            "g": "2 · Cuadráticas",
            "title": "④ Aplicado · Precio que maximiza el ingreso",
            "html": "<p><b>Letra:</b> La demanda es Q = 60 − 2p. El ingreso es I(p) = p·Q. ¿Qué precio maximiza el ingreso?</p>\n<ol class=\"steps\">\n<li>I(p) = p(60 − 2p) = 60p − 2p². Es una parábola en p con a=−2&lt;0 → tiene máximo.</li>\n<li>p_v = −b/2a = −60/(2·(−2)) = <b>$15</b>.</li>\n<li>Ingreso máximo: I(15) = 60·15 − 2·15² = 900 − 450 = <b>$450</b>. (En el 2º parcial esto sale derivando I y poniendo I′=0.)</li>\n</ol>"
        },
        {
            "g": "2 · Cuadráticas",
            "title": "⑤ Aplicado · Utilidad: equilibrio (raíces) y máximo (vértice)",
            "html": "<p><b>Letra:</b> La utilidad es U(x) = −x² + 10x − 16. (a) ¿Entre qué cantidades hay ganancia? (b) ¿Qué cantidad da la utilidad máxima?</p>\n<ol class=\"steps\">\n<li>(a) Hay ganancia donde U&gt;0. Raíces: Δ = 100 − 64 = 36 → x = (−10 ± 6)/(−2) → x₁ = 2, x₂ = 8. Como a&lt;0, U&gt;0 <b>entre 2 y 8</b>.</li>\n<li>(b) Máximo en el vértice: x_v = −10/(2·(−1)) = <b>5</b>.</li>\n<li>Utilidad máxima: U(5) = −25 + 50 − 16 = <b>9</b>.</li>\n</ol>"
        },
        {
            "g": "2 · Cuadráticas",
            "title": "⑥ Más complejo · Discriminante con parámetro",
            "html": "<p><b>Letra:</b> ¿Para qué valores de k la ecuación x² − 4x + k = 0 tiene dos raíces reales distintas?</p>\n<ol class=\"steps\">\n<li>Dos raíces reales distintas ⟺ Δ &gt; 0. Acá Δ = (−4)² − 4·1·k = 16 − 4k.</li>\n<li>16 − 4k &gt; 0 → 16 &gt; 4k → <b>k &lt; 4</b>.</li>\n<li>(Si k = 4 hay una sola raíz doble; si k &gt; 4, ninguna real.)</li>\n</ol>"
        },
        {
            "g": "3 · Más funciones",
            "title": "① Básico · Dominio de una función",
            "html": "<p><b>Letra:</b> Hallá el dominio de f(x) = √(x − 3) y de g(x) = 1/(x − 5).</p>\n<ol class=\"steps\">\n<li><b>f:</b> lo de adentro de la raíz debe ser ≥ 0: x − 3 ≥ 0 → <b>x ≥ 3</b>. Dominio: [3, +∞).</li>\n<li><b>g:</b> el denominador no puede ser 0: x − 5 ≠ 0 → <b>x ≠ 5</b>. Dominio: todos los reales menos 5.</li>\n</ol>"
        },
        {
            "g": "3 · Más funciones",
            "title": "② Medio · Composición de funciones (el orden importa)",
            "html": "<p><b>Letra:</b> Sean f(x) = x² y g(x) = x + 1. Hallá (f∘g)(x) y (g∘f)(x).</p>\n<ol class=\"steps\">\n<li>(f∘g)(x) = f(g(x)) = f(x+1) = <b>(x+1)²</b> (meto g adentro de f).</li>\n<li>(g∘f)(x) = g(f(x)) = g(x²) = <b>x² + 1</b>.</li>\n<li>Conclusión: ¡el orden importa! (x+1)² ≠ x²+1. Esto es clave para la regla de la cadena del 2º parcial.</li>\n</ol>"
        },
        {
            "g": "3 · Más funciones",
            "title": "③ Medio · Evaluar una función por tramos",
            "html": "<p><b>Letra:</b> Sea f(x) = { 2x si x &lt; 1 ; x² + 3 si x ≥ 1 }. Calculá f(0), f(1) y f(3).</p>\n<ol class=\"steps\">\n<li>f(0): como 0 &lt; 1, uso 2x → f(0) = 2·0 = <b>0</b>.</li>\n<li>f(1): como 1 ≥ 1, uso x²+3 → f(1) = 1 + 3 = <b>4</b>.</li>\n<li>f(3): como 3 ≥ 1, uso x²+3 → f(3) = 9 + 3 = <b>12</b>.</li>\n</ol>"
        },
        {
            "g": "3 · Más funciones",
            "title": "④ Aplicado · Función por tramos tipo IRPF",
            "html": "<p><b>Letra:</b> Un impuesto cobra 0% hasta $1000 y 10% sobre lo que excede $1000. Escribí el impuesto T(x) por tramos y calculá T(800) y T(1500).</p>\n<ol class=\"steps\">\n<li>Por tramos: T(x) = { 0 si x ≤ 1000 ; 0,10·(x − 1000) si x &gt; 1000 }.</li>\n<li>T(800): como 800 ≤ 1000 → <b>$0</b>.</li>\n<li>T(1500): como 1500 &gt; 1000 → 0,10·(1500 − 1000) = <b>$50</b>.</li>\n</ol>"
        },
        {
            "g": "4 · Exp y log",
            "title": "① Básico · Simplificar con propiedades del logaritmo",
            "html": "<p><b>Letra:</b> Escribí como un solo logaritmo: L(8) + L(3) − L(4). (Recordá: el curso usa L = ln.)</p>\n<ol class=\"steps\">\n<li>Suma de logs = log del producto: L(8) + L(3) = L(8·3) = L(24).</li>\n<li>Resta de logs = log del cociente: L(24) − L(4) = L(24/4) = <b>L(6)</b>.</li>\n</ol>"
        },
        {
            "g": "4 · Exp y log",
            "title": "② Básico · Interés compuesto",
            "html": "<p><b>Letra:</b> Deposito $1000 al 5% anual durante 3 años (interés compuesto). ¿Cuánto tengo al final?</p>\n<ol class=\"steps\">\n<li>M = C·(1+i)ⁿ con C=1000, i=0,05, n=3.</li>\n<li>M = 1000·(1,05)³ = 1000·1,157625 = <b>$1157,63</b> aprox.</li>\n</ol>"
        },
        {
            "g": "4 · Exp y log",
            "title": "③ Medio · Despejar usando logaritmo",
            "html": "<p><b>Letra:</b> Resolvé para x: e^(2x) = 7.</p>\n<ol class=\"steps\">\n<li>Aplico L (logaritmo natural) a ambos lados: L(e^(2x)) = L(7).</li>\n<li>Como L y e se cancelan: 2x = L(7).</li>\n<li>x = <b>L(7)/2</b> ≈ 0,973.</li>\n</ol>"
        },
        {
            "g": "4 · Exp y log",
            "title": "④ Aplicado · ¿En cuántos años se duplica?",
            "html": "<p><b>Letra:</b> ¿En cuántos años se duplica un capital al 6% anual compuesto?</p>\n<ol class=\"steps\">\n<li>Quiero M = 2C: 2C = C·(1,06)ⁿ → 2 = (1,06)ⁿ.</li>\n<li>Aplico L: L(2) = n·L(1,06) → n = L(2)/L(1,06).</li>\n<li>n = 0,693/0,0583 ≈ <b>11,9 años</b>.</li>\n</ol>"
        },
        {
            "g": "5 · Límites x→a",
            "title": "① Básico · Límite 0/0 con factorización (Bhaskara)",
            "html": "<p><b>Letra:</b> Calculá lím_(x→3) (x² − 9)/(x − 3).</p>\n<ol class=\"steps\">\n<li>Sustituyo x=3: (9−9)/(3−3) = 0/0 → indeterminación.</li>\n<li>Factorizo: x² − 9 = (x − 3)(x + 3).</li>\n<li>Simplifico (x − 3): queda (x + 3). Sustituyo: 3 + 3 = <b>6</b>.</li>\n</ol>"
        },
        {
            "g": "5 · Límites x→a",
            "title": "② Medio · Límite 0/0 con Ruffini (grado 3)",
            "html": "<p><b>Letra:</b> Calculá lím_(x→1) (x³ − 2x² + x)/(x² − 1).</p>\n<ol class=\"steps\">\n<li>Sustituyo x=1: numerador 1−2+1=0, denominador 0 → 0/0.</li>\n<li>Numerador: x³−2x²+x = x(x²−2x+1) = x(x−1)². Denominador: x²−1 = (x−1)(x+1).</li>\n<li>Simplifico un (x−1): queda x(x−1)/(x+1). Sustituyo x=1: 1·0/2 = <b>0</b>.</li>\n</ol>"
        },
        {
            "g": "5 · Límites x→a",
            "title": "③ Medio · Límites laterales (¿existe el límite?)",
            "html": "<p><b>Letra:</b> Sea f(x) = { x + 1 si x &lt; 2 ; 5 si x ≥ 2 }. ¿Existe lím_(x→2) f(x)?</p>\n<ol class=\"steps\">\n<li>Por izquierda (x→2⁻, uso x+1): lím = 2 + 1 = 3.</li>\n<li>Por derecha (x→2⁺, uso 5): lím = 5.</li>\n<li>Como 3 ≠ 5, los laterales no coinciden → el límite <b>no existe</b> (hay un salto).</li>\n</ol>"
        },
        {
            "g": "5 · Límites x→a",
            "title": "④ Difícil (tipo revisión) · Hallar un parámetro para que el límite dé un valor",
            "html": "<p><b>Letra:</b> Hallá a para que lím_(x→2) (x² − a·x + 4)/(x − 2) sea finito, y calculá el límite.</p>\n<ol class=\"steps\">\n<li>El denominador → 0. Para que el límite sea finito (no ±∞), el numerador <b>también</b> debe → 0 en x=2 (así da 0/0, que sí se puede levantar).</li>\n<li>Numerador en x=2: 4 − 2a + 4 = 0 → 8 − 2a = 0 → <b>a = 4</b>.</li>\n<li>Con a=4: (x² − 4x + 4)/(x − 2) = (x − 2)²/(x − 2) = (x − 2). Límite: 2 − 2 = <b>0</b>.</li>\n</ol>"
        },
        {
            "g": "6 · Límites al ∞",
            "title": "① Básico · ∞/∞ con polinomios del mismo grado",
            "html": "<p><b>Letra:</b> Calculá lím_(x→+∞) (3x² + 2x)/(x² − 5).</p>\n<ol class=\"steps\">\n<li>Es ∞/∞. Me quedo con el término de mayor grado arriba y abajo: 3x² / x².</li>\n<li>Simplifico: 3x²/x² = 3. Resultado: <b>3</b> (asíntota horizontal y = 3).</li>\n</ol>"
        },
        {
            "g": "6 · Límites al ∞",
            "title": "② Medio · ∞/∞ con grados distintos",
            "html": "<p><b>Letra:</b> Calculá (a) lím_(x→+∞) (2x + 1)/(x² + 3) y (b) lím_(x→+∞) (x³ + 1)/(x + 2).</p>\n<ol class=\"steps\">\n<li>(a) Mayor grado: 2x / x² = 2/x → cuando x→+∞, tiende a <b>0</b> (gana el de abajo).</li>\n<li>(b) Mayor grado: x³ / x = x² → cuando x→+∞, tiende a <b>+∞</b> (gana el de arriba).</li>\n<li>Regla rápida: si el de arriba tiene grado menor → 0; mayor → ±∞; igual → cociente de coeficientes.</li>\n</ol>"
        },
        {
            "g": "6 · Límites al ∞",
            "title": "③ Difícil (tipo revisión) · Órdenes de infinito: x²/eˣ",
            "html": "<p><b>Letra:</b> Sea f(x) = x²/eˣ. Calculá lím_(x→+∞) f(x) y lím_(x→−∞) f(x). (Este tipo cayó en julio 2025.)</p>\n<ol class=\"steps\">\n<li><b>x→+∞:</b> arriba x² (un \"auto\"), abajo eˣ (un \"cohete\"). Gana el cohete → el denominador es mucho más grande → f(x) → <b>0</b>.</li>\n<li><b>x→−∞:</b> x² → +∞ (positivo), y eˣ → 0⁺ (muy chiquito positivo). Entonces +∞ / 0⁺ → <b>+∞</b>.</li>\n<li>Moraleja: la exponencial le gana a cualquier potencia cuando x→+∞.</li>\n</ol>"
        },
        {
            "g": "7 · Continuidad",
            "title": "① Básico · ¿Es continua? (chequear las 3 condiciones)",
            "html": "<p><b>Letra:</b> Sea f(x) = (x² − 1)/(x − 1) para x ≠ 1, y f(1) = 5. ¿Es continua en x = 1?</p>\n<ol class=\"steps\">\n<li>Existe f(1) = 5 ✓ (condición 1).</li>\n<li>Límite: (x²−1)/(x−1) = (x−1)(x+1)/(x−1) = x+1 → lím_(x→1) = 2 ✓ (condición 2).</li>\n<li>¿Coinciden? lím = 2 pero f(1) = 5 → <b>2 ≠ 5</b>, no coinciden → <b>NO es continua</b> (el punto está \"despegado\").</li>\n</ol>"
        },
        {
            "g": "7 · Continuidad",
            "title": "② Medio (tipo revisión) · Hallar el parámetro para que sea continua",
            "html": "<p><b>Letra:</b> Sea f(x) = { 2x + 1 si x &lt; 1 ; x² + a si x ≥ 1 }. ¿Qué valor de a hace que f sea continua en x = 1?</p>\n<ol class=\"steps\">\n<li>Para que sea continua, los dos pedazos tienen que \"pegar\" en x=1: el límite por izquierda = el valor por derecha.</li>\n<li>Por izquierda (2x+1): 2·1 + 1 = 3. Por derecha (x²+a): 1 + a.</li>\n<li>Igualo: 3 = 1 + a → <b>a = 2</b>.</li>\n</ol>"
        },
        {
            "g": "7 · Continuidad",
            "title": "③ Medio · Usar Bolzano para garantizar una raíz",
            "html": "<p><b>Letra:</b> Mostrá que f(x) = x³ + x − 1 tiene una raíz en (0, 1).</p>\n<ol class=\"steps\">\n<li>f es un polinomio → es continua en el cerrado [0, 1].</li>\n<li>Evalúo los extremos: f(0) = −1 (negativo) y f(1) = 1 (positivo) → cambia de signo.</li>\n<li>Por <b>Bolzano</b>, como es continua y cambia de signo, existe al menos una raíz en (0, 1). ✓</li>\n</ol>"
        },
        {
            "g": "8 · Derivadas",
            "title": "① Básico · Derivar un polinomio",
            "html": "<p><b>Letra:</b> Derivá f(x) = 2x³ − 5x² + 7x − 29.</p>\n<ol class=\"steps\">\n<li>Derivo término a término con (xⁿ)′ = n·xⁿ⁻¹: (2x³)′=6x², (−5x²)′=−10x, (7x)′=7, (−29)′=0.</li>\n<li>f ′(x) = <b>6x² − 10x + 7</b>.</li>\n</ol>"
        },
        {
            "g": "8 · Derivadas",
            "title": "② Medio (tipo revisión) · Producto + cadena: eˣ·L(3x²)",
            "html": "<p><b>Letra:</b> Derivá f(x) = eˣ·L(3x²). (Recordá: L = ln.)</p>\n<ol class=\"steps\">\n<li>Es un <b>producto</b> de eˣ y L(3x²): aplico (f·g)′ = f ′g + fg′.</li>\n<li>(eˣ)′ = eˣ. Para (L(3x²))′ uso la <b>cadena</b>: (1/(3x²))·(3x²)′ = (1/(3x²))·6x = 2/x.</li>\n<li>f ′(x) = eˣ·L(3x²) + eˣ·(2/x) = <b>eˣ·L(3x²) + 2eˣ/x</b>.</li>\n</ol>"
        },
        {
            "g": "8 · Derivadas",
            "title": "③ Difícil (tipo revisión) · Cadena compuesta: F(x) = (f(x))³ + f(x³)",
            "html": "<p><b>Letra:</b> Sea f derivable con f(1) = 2 y f ′(1) = 3. Para F(x) = (f(x))³ + f(x³), hallá F ′(1). (Este tipo cayó casi igual en 2023 y 2025.)</p>\n<ol class=\"steps\">\n<li>Derivo con la cadena cada término: el primero, 3(f(x))²·f ′(x); el segundo, f ′(x³)·(3x²).</li>\n<li>F ′(x) = 3(f(x))²·f ′(x) + f ′(x³)·3x².</li>\n<li>En x=1: 3·(f(1))²·f ′(1) + f ′(1)·3 = 3·(2²)·3 + 3·3 = 36 + 9 = <b>45</b>.</li>\n</ol>"
        },
        {
            "g": "8 · Derivadas",
            "title": "④ Medio (tipo revisión) · Recta tangente \"al revés\"",
            "html": "<p><b>Letra:</b> La recta y = 3x + 4 es tangente a la gráfica de f en el punto (1, f(1)). ¿Cuánto valen f(1) y f ′(1)?</p>\n<ol class=\"steps\">\n<li>La tangente en a=1 es y = f(1) + f ′(1)(x − 1). Su <b>pendiente</b> es f ′(1).</li>\n<li>La recta dada tiene pendiente 3 → <b>f ′(1) = 3</b>.</li>\n<li>El punto de tangencia está sobre la recta: f(1) = 3·1 + 4 = <b>7</b>. Entonces f(1)=7, f ′(1)=3.</li>\n</ol>"
        },
        {
            "g": "9 · Optimización",
            "title": "① Básico · ¿Dónde crece y dónde decrece?",
            "html": "<p><b>Letra:</b> Estudiá el crecimiento de f(x) = x³ − 3x.</p>\n<ol class=\"steps\">\n<li>Derivo: f ′(x) = 3x² − 3 = 3(x − 1)(x + 1). Puntos críticos: x = 1 y x = −1.</li>\n<li>Signo de f ′: positiva para x &lt; −1 (crece), negativa entre −1 y 1 (decrece), positiva para x &gt; 1 (crece).</li>\n<li>Entonces hay un <b>máximo relativo en x = −1</b> (+ a −) y un <b>mínimo relativo en x = 1</b> (− a +).</li>\n</ol>"
        },
        {
            "g": "9 · Optimización",
            "title": "② Medio · Optimización: utilidad máxima",
            "html": "<p><b>Letra:</b> La utilidad es U(x) = −x² + 40x − 100. ¿Qué cantidad la maximiza?</p>\n<ol class=\"steps\">\n<li>Derivo e igualo a 0: U ′(x) = −2x + 40 = 0 → x = 20.</li>\n<li>U ′ pasa de + a − en x=20 → es <b>máximo</b>.</li>\n<li>Utilidad máxima: U(20) = −400 + 800 − 100 = <b>300</b>.</li>\n</ol>"
        },
        {
            "g": "9 · Optimización",
            "title": "③ Difícil (tipo revisión) · Mínimo absoluto en un intervalo cerrado",
            "html": "<p><b>Letra:</b> Hallá el mínimo absoluto de f(x) = x⁴ − 4x − 1 en [2, 3]. (Cayó en julio 2025.)</p>\n<ol class=\"steps\">\n<li>Busco críticos: f ′(x) = 4x³ − 4 = 0 → x³ = 1 → x = 1. <b>No está en [2,3]</b>, así que no hay críticos adentro.</li>\n<li>Como no hay críticos internos, el mínimo está en un <b>extremo</b>. Evalúo: f(2) = 16 − 8 − 1 = 7; f(3) = 81 − 12 − 1 = 68.</li>\n<li>El menor es <b>m = 7</b> (en x = 2).</li>\n</ol>"
        },
        {
            "g": "9 · Optimización",
            "title": "④ Medio (tipo revisión) · Máximo y mínimo relativos de un cúbico",
            "html": "<p><b>Letra:</b> Para f(x) = 3x³ − 9x² + 4: ¿cuántas soluciones tiene f ′(x)=0 y qué extremos hay?</p>\n<ol class=\"steps\">\n<li>f ′(x) = 9x² − 18x = 9x(x − 2) = 0 → x = 0 y x = 2: <b>dos soluciones</b>.</li>\n<li>Signo de f ′: + para x&lt;0, − entre 0 y 2, + para x&gt;2.</li>\n<li>En x=0 pasa de + a − → <b>máximo relativo</b>; en x=2 pasa de − a + → <b>mínimo relativo</b>. (Hay máx y mín.)</li>\n</ol>"
        },
        {
            "g": "9 · Optimización",
            "title": "⑤ Aplicado · Elasticidad de la demanda",
            "html": "<p><b>Letra:</b> La demanda es D(p) = 3000 − 30p. Calculá la elasticidad en p = 20 y p = 60 e interpretá.</p>\n<ol class=\"steps\">\n<li>D ′(p) = −30. Elasticidad: η(p) = −p·D′(p)/D(p) = 30p/(3000 − 30p) = <b>p/(100 − p)</b>.</li>\n<li>En p=20: η = 20/80 = <b>¼ &lt; 1 → inelástica</b> (subir el precio sube el ingreso).</li>\n<li>En p=60: η = 60/40 = <b>3/2 &gt; 1 → elástica</b> (subir el precio baja el ingreso).</li>\n</ol>"
        },
        {
            "g": "Ejercicios del apunte",
            "title": "Ej 1 · Límite 0/0 con factorización",
            "html": "<p><b>Letra:</b> Calculá <span class=\"fml\">lím_(x→2) (x² − 4)/(x − 2)</span>.</p>\n<ol class=\"steps\">\n<li>Sustituyo x = 2: (4−4)/(2−2) = <b>0/0</b> → indeterminación.</li>\n<li>Factorizo el numerador: x² − 4 = (x − 2)(x + 2).</li>\n<li>Simplifico (x − 2): queda (x + 2).</li>\n<li>Ahora sí sustituyo: 2 + 2 = <b>4</b>.</li>\n</ol>"
        },
        {
            "g": "Ejercicios del apunte",
            "title": "Ej 2 · Límite x→∞ de cociente de polinomios",
            "html": "<p><b>Letra:</b> Calculá <span class=\"fml\">lím_(x→+∞) (3x² + 2x)/(x² − 5)</span>.</p>\n<ol class=\"steps\">\n<li>Es ∞/∞. Me quedo con el término de <b>mayor grado</b> arriba y abajo: 3x² / x².</li>\n<li>Simplifico: 3x²/x² = 3.</li>\n<li>Resultado: <b>3</b> (hay asíntota horizontal y = 3).</li>\n</ol>"
        },
        {
            "g": "Ejercicios del apunte",
            "title": "Ej 3 · Derivada + recta tangente",
            "html": "<p><b>Letra:</b> Sea f(x) = x² − 4x + 3. Hallá f ′(x) y la recta tangente en x = 1.</p>\n<ol class=\"steps\">\n<li>Derivo con la tabla: f ′(x) = 2x − 4.</li>\n<li>Pendiente en x = 1: f ′(1) = 2·1 − 4 = <b>−2</b>.</li>\n<li>Punto: f(1) = 1 − 4 + 3 = 0 → (1, 0).</li>\n<li>Recta tangente: y = 0 + (−2)(x − 1) → <b>y = −2x + 2</b>.</li>\n</ol>"
        },
        {
            "g": "Ejercicios del apunte",
            "title": "Ej 4 · Optimización económica (utilidad máxima)",
            "html": "<p><b>Letra:</b> La utilidad de una empresa es U(x) = −x² + 40x − 100 (x = cantidad). ¿Qué cantidad maximiza la utilidad?</p>\n<ol class=\"steps\">\n<li>Derivo: U′(x) = −2x + 40.</li>\n<li>Igualo a 0: −2x + 40 = 0 → <b>x = 20</b>.</li>\n<li>Verifico que sea máximo: U′ pasa de + (x&lt;20) a − (x&gt;20) → es <b>máximo</b>.</li>\n<li>Utilidad máxima: U(20) = −400 + 800 − 100 = <b>300</b>.</li>\n</ol>"
        },
        {
            "g": "Ejercicios del apunte",
            "title": "Ej 5 · Límite 0/0 con Ruffini (numerador de grado 3)",
            "html": "<p><b>Letra:</b> Calculá <span class=\"fml\">lím_(x→1) (x³ − 4x² + 2x + 1)/(2x² − 3x + 1)</span>.</p>\n<ol class=\"steps\">\n<li>Sustituyo x=1: numerador y denominador dan 0 → <b>0/0</b>. Entonces x=1 es raíz de ambos.</li>\n<li>Factorizo el numerador (grado 3) con <b>Ruffini</b> dividiendo por (x−1): queda (x−1)(x²−3x−1).</li>\n<li>El denominador: 2x²−3x+1 = (x−1)(2x−1).</li>\n<li>Simplifico (x−1): queda (x²−3x−1)/(2x−1).</li>\n<li>Sustituyo x=1: (1−3−1)/(2−1) = −3/1 = <b>−3</b>.</li>\n</ol>"
        },
        {
            "g": "Ejercicios del apunte",
            "title": "Ej 6 · Derivadas con regla del producto y del cociente",
            "html": "<p><b>Letra:</b> Derivá (a) f(x)=x²·eˣ y (b) g(x)=eˣ/(3x+1).</p>\n<ol class=\"steps\">\n<li><b>(a) Producto</b> (f·g)′=f′g+fg′: (x²)′eˣ + x²(eˣ)′ = 2x·eˣ + x²·eˣ = <b>x·eˣ·(2+x)</b>.</li>\n<li><b>(b) Cociente</b> (f/g)′=(f′g−fg′)/g²: [eˣ(3x+1) − eˣ·3] / (3x+1)² = <b>eˣ(3x−2)/(3x+1)²</b>.</li>\n</ol>"
        },
        {
            "g": "Ejercicios del apunte",
            "title": "Ej 7 · Regla de la cadena",
            "html": "<p><b>Letra:</b> Derivá h(x) = (x² + 1)⁵ y luego k(x) = e^(3x).</p>\n<ol class=\"steps\">\n<li><b>h:</b> lo de afuera es (·)⁵, lo de adentro x²+1. h′ = 5(x²+1)⁴ · (x²+1)′ = 5(x²+1)⁴·2x = <b>10x(x²+1)⁴</b>.</li>\n<li><b>k:</b> lo de afuera eˣ, lo de adentro 3x. k′ = e^(3x)·(3x)′ = <b>3·e^(3x)</b>.</li>\n</ol>"
        },
        {
            "g": "Ejercicios del apunte",
            "title": "Ej 8 · Elasticidad de la demanda (caso del manual)",
            "html": "<p><b>Letra:</b> La demanda es D(p)=3000−30p. Calculá la elasticidad en p=20 y p=60 e interpretá.</p>\n<ol class=\"steps\">\n<li>D′(p) = −30.</li>\n<li>η(p) = −p·D′(p)/D(p) = −p·(−30)/(3000−30p) = 30p/(3000−30p) = <b>p/(100−p)</b>.</li>\n<li>En p=20: η = 20/80 = <b>¼ &lt; 1 → inelástica</b> (subir el precio sube el ingreso).</li>\n<li>En p=60: η = 60/40 = <b>3/2 &gt; 1 → elástica</b> (subir el precio baja el ingreso).</li>\n</ol>"
        },
        {
            "g": "Ejercicios del apunte",
            "title": "Ej 9 · Optimización con restricción (cercar un terreno)",
            "html": "<p><b>Letra:</b> Quiero cercar un terreno rectangular de área fija A con el menor perímetro posible. ¿Qué dimensiones convienen?</p>\n<ol class=\"steps\">\n<li>Variables: lados x&gt;0, y&gt;0. Objetivo: minimizar P = 2(x+y).</li>\n<li>Restricción: x·y = A → despejo y = A/x.</li>\n<li>Sustituyo: P(x) = 2(x + A/x), con x&gt;0.</li>\n<li>Derivo: P′(x) = 2(1 − A/x²) = 2(x²−A)/x². Igualo a 0 → x² = A → x = √A.</li>\n<li>Signo de P′: negativa antes de √A, positiva después → <b>mínimo</b> en x=√A.</li>\n<li>Como y = A/x = √A, queda <b>x = y = √A: el rectángulo óptimo es un cuadrado</b>.</li>\n</ol>"
        },
        {
            "g": "Unidad 1 · Lineales",
            "title": "Recta por dos puntos",
            "q": "Hallá la recta que pasa por (−1, 4) y (2, −2).",
            "steps": [
                "Pendiente: m=(−2−4)/(2−(−1))=−6/3=−2.",
                "Con (−1,4): 4=−2·(−1)+n → 4=2+n → n=2.",
                "Recta: y=−2x+2."
            ]
        },
        {
            "g": "Unidad 1 · Lineales",
            "title": "Costo, ingreso y equilibrio",
            "q": "CF=300, costo variable 7/u, precio 12. Escribí U(x) y hallá el equilibrio.",
            "steps": [
                "I=12x; CT=300+7x; U=I−CT=12x−300−7x=5x−300.",
                "Equilibrio U=0: 5x=300 → x=60 unidades."
            ]
        },
        {
            "g": "Unidad 1 · Lineales",
            "title": "Comparar dos planes",
            "q": "Plan A: 100+3x; Plan B: 40+5x. ¿Desde cuántas unidades conviene A?",
            "steps": [
                "Igualo: 100+3x=40+5x → 60=2x → x=30.",
                "Para x>30, A crece más lento (3<5) → conviene A desde 30 unidades."
            ]
        },
        {
            "g": "Unidad 1 · Lineales",
            "title": "Interpretar la pendiente",
            "q": "La demanda es D(p)=200−4p. ¿Cuánto cambia la cantidad si el precio sube 1?",
            "steps": [
                "La pendiente respecto a p es −4.",
                "Cada vez que p sube 1, la cantidad baja 4 unidades."
            ]
        },
        {
            "g": "Unidad 1 · Lineales",
            "title": "Recta dado punto y pendiente",
            "q": "Recta de pendiente −1/2 que pasa por (4, 1).",
            "steps": [
                "y=−½x+n; con (4,1): 1=−½·4+n=−2+n → n=3.",
                "Recta: y=−½x+3."
            ]
        },
        {
            "g": "Unidad 2 · Cuadráticas",
            "title": "Raíces y vértice",
            "q": "Para f(x)=x²−2x−8, hallá raíces y vértice.",
            "steps": [
                "Δ=4+32=36; x=(2±6)/2 → x=4 y x=−2.",
                "Vértice: x_v=−(−2)/2=1; y_v=f(1)=1−2−8=−9. Vértice (1,−9), mínimo (a>0)."
            ]
        },
        {
            "g": "Unidad 2 · Cuadráticas",
            "title": "Ingreso máximo",
            "q": "Demanda Q=50−p, ingreso I(p)=p·Q. ¿Precio óptimo e ingreso máximo?",
            "steps": [
                "I(p)=p(50−p)=50p−p². a<0 → máximo en el vértice.",
                "p_v=−50/(2·(−1))=25. I(25)=50·25−25²=1250−625=625."
            ]
        },
        {
            "g": "Unidad 2 · Cuadráticas",
            "title": "Signo de la cuadrática",
            "q": "¿Para qué x es −x²+4x−3 ≥ 0?",
            "steps": [
                "Raíces: x²−4x+3=0 → x=1 y x=3.",
                "Como a=−1<0, es positiva entre las raíces: 1 ≤ x ≤ 3."
            ]
        },
        {
            "g": "Unidad 2 · Cuadráticas",
            "title": "Parámetro y raíces",
            "q": "¿Para qué k la ecuación x²+kx+4=0 NO tiene raíces reales?",
            "steps": [
                "Sin raíces reales ⟺ Δ<0. Δ=k²−16.",
                "k²−16<0 → −4<k<4."
            ]
        },
        {
            "g": "Unidad 2 · Cuadráticas",
            "title": "Utilidad cuadrática completa",
            "q": "U(x)=−2x²+24x−40. ¿Entre qué cantidades hay ganancia y cuál es la máxima?",
            "steps": [
                "Ganancia U>0. Raíces: x²−12x+20=0 → x=(12±8)/2 → 2 y 10. Ganancia entre 2 y 10.",
                "Máximo: x_v=24/(2·2)=6 → U(6)=−72+144−40=32."
            ]
        },
        {
            "g": "Unidad 3 · Más sobre funciones",
            "title": "Dominio completo",
            "q": "Hallá el dominio de f(x)=√(x+2)/(x−3).",
            "steps": [
                "Radicando ≥0: x+2≥0 → x≥−2.",
                "Denominador ≠0: x≠3.",
                "Dominio: x≥−2 y x≠3."
            ]
        },
        {
            "g": "Unidad 3 · Más sobre funciones",
            "title": "Composición en ambos sentidos",
            "q": "f(x)=2x+1, g(x)=x². Hallá (f∘g)(x) y (g∘f)(x).",
            "steps": [
                "(f∘g)(x)=f(x²)=2x²+1.",
                "(g∘f)(x)=g(2x+1)=(2x+1)². Son distintas: el orden importa."
            ]
        },
        {
            "g": "Unidad 3 · Más sobre funciones",
            "title": "Función por tramos",
            "q": "f(x)={x+3 si x<2; x² si x≥2}. Calculá f(0), f(2) y f(−1).",
            "steps": [
                "f(0): 0<2 → 0+3=3.",
                "f(2): 2≥2 → 2²=4.",
                "f(−1): −1<2 → −1+3=2."
            ]
        },
        {
            "g": "Unidad 3 · Más sobre funciones",
            "title": "Recorrido con valor absoluto",
            "q": "¿Cuál es el recorrido de f(x)=|x|−3?",
            "steps": [
                "|x| toma valores ≥0.",
                "Entonces |x|−3 toma valores ≥−3. Recorrido: [−3, +∞)."
            ]
        },
        {
            "g": "Unidad 3 · Más sobre funciones",
            "title": "Composición evaluada",
            "q": "f(x)=x²+2, g(x)=x²−1. Calculá (f∘g)(0).",
            "steps": [
                "g(0)=0−1=−1.",
                "f(−1)=(−1)²+2=3. Entonces (f∘g)(0)=3."
            ]
        },
        {
            "g": "Unidad 4 · Exponencial y logarítmica",
            "title": "Ecuación exponencial",
            "q": "Resolvé 5·e^(3x)=20.",
            "steps": [
                "e^(3x)=4.",
                "3x=L(4) → x=L(4)/3."
            ]
        },
        {
            "g": "Unidad 4 · Exponencial y logarítmica",
            "title": "Propiedades del log",
            "q": "Escribí como un solo logaritmo: 2L(x)+L(3)−L(2).",
            "steps": [
                "2L(x)=L(x²).",
                "L(x²)+L(3)−L(2)=L(3x²/2)."
            ]
        },
        {
            "g": "Unidad 4 · Exponencial y logarítmica",
            "title": "Interés compuesto",
            "q": "¿En cuánto se convierten 5000 al 8% anual compuesto en 3 años?",
            "steps": [
                "M=5000·(1,08)³.",
                "(1,08)³≈1,2597 → M≈6298,56."
            ]
        },
        {
            "g": "Unidad 4 · Exponencial y logarítmica",
            "title": "Duplicación de capital",
            "q": "¿En cuántos años se duplica un capital al 5% anual compuesto?",
            "steps": [
                "2=(1,05)ⁿ → L(2)=n·L(1,05).",
                "n=L(2)/L(1,05)≈0,693/0,0488≈14,2 años."
            ]
        },
        {
            "g": "Unidad 4 · Exponencial y logarítmica",
            "title": "¿Cuándo vale 0 el log?",
            "q": "¿Para qué x vale 0 la función f(x)=L(x−1)?",
            "steps": [
                "L(algo)=0 ⟺ algo=1.",
                "x−1=1 → x=2."
            ]
        },
        {
            "g": "Unidad 5 · Límites para x→a",
            "title": "0/0 con Bhaskara",
            "q": "Calculá lím_(x→2) (x²−x−2)/(x−2).",
            "steps": [
                "Sustituyo: 0/0. Factorizo el numerador: x²−x−2=(x−2)(x+1).",
                "Simplifico (x−2): queda x+1 → 2+1=3."
            ]
        },
        {
            "g": "Unidad 5 · Límites para x→a",
            "title": "0/0 con Ruffini",
            "q": "Calculá lím_(x→1) (x³−1)/(x²−1).",
            "steps": [
                "0/0. x³−1=(x−1)(x²+x+1); x²−1=(x−1)(x+1).",
                "Simplifico (x−1): (x²+x+1)/(x+1) → 3/2."
            ]
        },
        {
            "g": "Unidad 5 · Límites para x→a",
            "title": "Límites laterales",
            "q": "f(x)={x² si x≤1; 2x si x>1}. ¿Existe lím_(x→1)?",
            "steps": [
                "Por izquierda (x²): 1²=1.",
                "Por derecha (2x): 2·1=2.",
                "1≠2 → no existe (salto)."
            ]
        },
        {
            "g": "Unidad 5 · Límites para x→a",
            "title": "Parámetro para límite finito",
            "q": "Hallá b para que lím_(x→3) (x²+bx−6)/(x−3) sea finito, y calculalo.",
            "steps": [
                "Para evitar ±∞, el numerador debe →0 en x=3: 9+3b−6=0 → 3b=−3 → b=−1.",
                "Con b=−1: (x²−x−6)/(x−3)=(x−3)(x+2)/(x−3)=x+2 → 5."
            ]
        },
        {
            "g": "Unidad 5 · Límites para x→a",
            "title": "Asíntota vertical",
            "q": "¿Tiene f(x)=4/(x−1) asíntota vertical? ¿Dónde?",
            "steps": [
                "El denominador →0 en x=1 y el numerador (4) no.",
                "Hay asíntota vertical en x=1 (la función se dispara a ±∞)."
            ]
        },
        {
            "g": "Unidad 6 · Límites para x→±∞",
            "title": "∞/∞ mismo grado",
            "q": "Calculá lím_(x→+∞) (4x²−x+1)/(2x²+3).",
            "steps": [
                "Mayor grado arriba y abajo: 4x²/2x².",
                "=2 (asíntota horizontal y=2)."
            ]
        },
        {
            "g": "Unidad 6 · Límites para x→±∞",
            "title": "∞/∞ grados distintos",
            "q": "Calculá lím_(x→+∞) (3x+2)/(x²−1) y lím_(x→+∞) x³/(2x+1).",
            "steps": [
                "Primero: 3x/x²=3/x → 0 (gana abajo).",
                "Segundo: x³/2x=x²/2 → +∞ (gana arriba)."
            ]
        },
        {
            "g": "Unidad 6 · Límites para x→±∞",
            "title": "Órdenes de infinito (suma)",
            "q": "Calculá lím_(x→+∞) (x²+eˣ)/eˣ.",
            "steps": [
                "Divido todo por eˣ: x²/eˣ + 1.",
                "x²/eˣ→0 (eˣ gana) → el límite es 0+1=1."
            ]
        },
        {
            "g": "Unidad 6 · Límites para x→±∞",
            "title": "Exponencial vs potencia",
            "q": "Calculá lím_(x→+∞) x⁵/eˣ.",
            "steps": [
                "eˣ le gana a cualquier potencia.",
                "El denominador domina → 0."
            ]
        },
        {
            "g": "Unidad 6 · Límites para x→±∞",
            "title": "Logaritmo vs potencia",
            "q": "Calculá lím_(x→+∞) L(x)/√x.",
            "steps": [
                "La potencia √x le gana al logaritmo.",
                "El denominador domina → 0."
            ]
        },
        {
            "g": "Unidad 7 · Continuidad",
            "title": "Las 3 condiciones",
            "q": "f(x)=(x²−4)/(x−2) para x≠2, f(2)=4. ¿Es continua en 2?",
            "steps": [
                "Existe f(2)=4. Límite: (x−2)(x+2)/(x−2)=x+2 → 4.",
                "Coinciden (4=4) → SÍ es continua en 2."
            ]
        },
        {
            "g": "Unidad 7 · Continuidad",
            "title": "Parámetro de continuidad",
            "q": "f(x)={3x+a si x<2; x²+1 si x≥2}. Hallá a para que sea continua en 2.",
            "steps": [
                "Por izquierda: 3·2+a=6+a. Por derecha: 2²+1=5.",
                "6+a=5 → a=−1."
            ]
        },
        {
            "g": "Unidad 7 · Continuidad",
            "title": "Bolzano",
            "q": "Mostrá que f(x)=x³+x−3 tiene una raíz en (1,2).",
            "steps": [
                "f es continua (polinomio). f(1)=1+1−3=−1; f(2)=8+2−3=7.",
                "Cambia de signo → por Bolzano hay una raíz en (1,2)."
            ]
        },
        {
            "g": "Unidad 7 · Continuidad",
            "title": "Discontinuidad de salto",
            "q": "f(x)={x si x<0; x+2 si x≥0}. ¿Es continua en 0?",
            "steps": [
                "Por izquierda: 0. Por derecha: 0+2=2.",
                "0≠2 → discontinuidad de salto, no es continua."
            ]
        },
        {
            "g": "Unidad 7 · Continuidad",
            "title": "Weierstrass",
            "q": "¿Por qué f(x)=x² seguro tiene mínimo en [−1,3]?",
            "steps": [
                "f es continua y [−1,3] es cerrado.",
                "Por Weierstrass, alcanza mínimo y máximo absolutos (el mínimo es f(0)=0)."
            ]
        },
        {
            "g": "Unidad 8 · Derivadas",
            "title": "Regla del producto",
            "q": "Derivá f(x)=x³·L(x).",
            "steps": [
                "Producto: (x³)′·L(x)+x³·(L(x))′.",
                "=3x²·L(x)+x³·(1/x)=3x²·L(x)+x²."
            ]
        },
        {
            "g": "Unidad 8 · Derivadas",
            "title": "Regla del cociente",
            "q": "Derivá f(x)=x/(x²+1).",
            "steps": [
                "Cociente: (1·(x²+1)−x·2x)/(x²+1)².",
                "=(x²+1−2x²)/(x²+1)²=(1−x²)/(x²+1)²."
            ]
        },
        {
            "g": "Unidad 8 · Derivadas",
            "title": "Regla de la cadena",
            "q": "Derivá f(x)=L(x²+1).",
            "steps": [
                "Cadena: (1/(x²+1))·(x²+1)′.",
                "=(1/(x²+1))·2x=2x/(x²+1)."
            ]
        },
        {
            "g": "Unidad 8 · Derivadas",
            "title": "Recta tangente",
            "q": "Hallá la recta tangente a f(x)=x²−3x en x=2.",
            "steps": [
                "f(2)=4−6=−2. f′(x)=2x−3 → f′(2)=1.",
                "y=−2+1·(x−2)=x−4."
            ]
        },
        {
            "g": "Unidad 8 · Derivadas",
            "title": "Cadena compuesta (tipo parcial)",
            "q": "f(1)=2, f′(1)=1. F(x)=f(x²)+(f(x))². Hallá F′(1).",
            "steps": [
                "F′(x)=f′(x²)·2x+2f(x)·f′(x).",
                "En x=1: f′(1)·2+2·f(1)·f′(1)=1·2+2·2·1=2+4=6."
            ]
        },
        {
            "g": "Unidad 8 · Derivadas",
            "title": "Exponencial compuesta",
            "q": "Derivá f(x)=e^(x²).",
            "steps": [
                "Cadena: e^(x²)·(x²)′.",
                "=e^(x²)·2x=2x·e^(x²)."
            ]
        },
        {
            "g": "Unidad 9 · Variación y optimización",
            "title": "Crecimiento completo",
            "q": "Estudiá dónde crece y decrece f(x)=x³−12x.",
            "steps": [
                "f′=3x²−12=3(x−2)(x+2). Críticos x=±2.",
                "f′>0 para x<−2 y x>2 (crece); f′<0 entre −2 y 2 (decrece). Máx en −2, mín en 2."
            ]
        },
        {
            "g": "Unidad 9 · Variación y optimización",
            "title": "Optimización económica",
            "q": "El beneficio es B(x)=−2x²+60x−200. ¿Cantidad óptima y beneficio máximo?",
            "steps": [
                "B′=−4x+60=0 → x=15.",
                "B′ pasa de + a − → máximo. B(15)=−450+900−200=250."
            ]
        },
        {
            "g": "Unidad 9 · Variación y optimización",
            "title": "Mínimo en intervalo cerrado",
            "q": "Hallá el mínimo absoluto de f(x)=x³−3x en [0,2].",
            "steps": [
                "f′=3x²−3=0 → x=1 (∈[0,2]). f(1)=1−3=−2.",
                "Bordes: f(0)=0, f(2)=8−6=2. El mínimo es −2 (en x=1)."
            ]
        },
        {
            "g": "Unidad 9 · Variación y optimización",
            "title": "Cercar un terreno",
            "q": "Quiero un rectángulo de área 100 con perímetro mínimo. ¿Dimensiones?",
            "steps": [
                "P=2(x+y), con xy=100 → y=100/x. P(x)=2(x+100/x).",
                "P′=2(1−100/x²)=0 → x²=100 → x=10. Entonces y=10: un cuadrado de 10×10."
            ]
        },
        {
            "g": "Unidad 9 · Variación y optimización",
            "title": "Elasticidad",
            "q": "D(p)=500−5p. Calculá la elasticidad en p=40 e interpretá.",
            "steps": [
                "D′=−5. η=−p·D′/D=5p/(500−5p)=p/(100−p).",
                "En p=40: η=40/60=2/3<1 → inelástica (subir el precio sube el ingreso)."
            ]
        },
        {
            "g": "Unidad 9 · Variación y optimización",
            "title": "Máx/mín relativos de un cúbico",
            "q": "Para f(x)=2x³−3x², hallá máximos y mínimos relativos.",
            "steps": [
                "f′=6x²−6x=6x(x−1)=0 → x=0 y x=1.",
                "f′: + para x<0, − entre 0 y 1, + para x>1. Máximo relativo en x=0, mínimo relativo en x=1."
            ]
        }
    ],
    "checklist": [
        "U1 · Hallo una recta (por 2 puntos o punto+pendiente) y la intersección de dos rectas",
        "U1 · Resuelvo costo, ingreso, utilidad y el punto de equilibrio",
        "U2 · Hallo raíces (Bhaskara), el vértice y uso el discriminante; maximizo ingreso/utilidad con el vértice",
        "U3 · Calculo dominio, hago composición de funciones y evalúo funciones por tramos",
        "U4 · Manejo exponencial y logaritmo: interés compuesto, propiedades del log y ecuaciones exponenciales",
        "U5 · Calculo límites levantando 0/0 (factorizo / Ruffini) y manejo los límites laterales y la asíntota vertical",
        "U6 · Resuelvo ∞/∞ (mayor grado) y sé los órdenes de infinito (eˣ ≫ xⁿ ≫ L x) y la asíntota horizontal",
        "U7 · Aplico las 3 condiciones de continuidad y los teoremas de Bolzano y Weierstrass",
        "U8 · Me sé la tabla de derivadas y las reglas (producto, cociente, cadena) y calculo la recta tangente",
        "U8 · Resuelvo la cadena compuesta F(x)=(f(x))ⁿ+f(xᵏ) y la tangente \"al revés\"",
        "U9 · Estudio crecimiento con el signo de f ′ y clasifico máx/mín (relativos y absolutos en [a,b])",
        "U9 · Resuelvo optimización económica y calculo e interpreto la elasticidad de la demanda"
    ]
};

export default data;
