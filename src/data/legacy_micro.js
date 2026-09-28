// Material del 1er semestre 2026 (versión anterior del sitio), convertido a datos.
// Formato: ver README (notes, flashcards, questions, exercises, checklist).
const data = {
    "notes": [
        {
            "id": "n-m-mapa",
            "title": "Mapa",
            "part": "General",
            "html": "<h3>Cómo encaro este parcial</h3>\n<p>El primer parcial fue producción, frontera, juegos y Pareto (U1–U5). Este segundo se va a lo concreto del mercado: <b>cómo una empresa pone precios</b>, <b>cómo se forma el precio cuando hay muchos</b> y <b>cómo la empresa maneja a su gente</b>. Igual que antes, lo mío es reconocer el tipo de ejercicio antes de calcular.</p>\n<table>\n<tr><th>Unidad</th><th>De qué va</th><th>La pregunta clave</th><th>Herramienta</th></tr>\n<tr><td><b>U6</b> La empresa y sus clientes</td><td>Empresa que <b>fija precios</b> (tiene poder de mercado)</td><td>¿Qué precio y cantidad me dejan más beneficio?</td><td><span class=\"fml\">IMg = CMg</span> + margen</td></tr>\n<tr><td><b>U7</b> Oferta y demanda</td><td>Muchos compradores y vendedores, <b>precio-aceptantes</b></td><td>¿Dónde se cruzan oferta y demanda?</td><td><span class=\"fml\">Qd = Qs</span> + excedentes</td></tr>\n<tr><td><b>U8</b> La empresa y su personal</td><td>Contratos incompletos: comprar <b>esfuerzo</b></td><td>¿Qué salario hace que el trabajador rinda?</td><td>Renta del empleo + salario de eficiencia</td></tr>\n</table>\n<div class=\"key\"><span class=\"tag\">★ Regla de oro</span> En U6 la empresa <b>elige</b> el precio; en U7 el precio <b>se lo imponen</b> (lo toma del mercado). Esa diferencia decide casi todo el ejercicio.</div>\n<div class=\"idea\">🔗 <b>Hilo conductor del curso:</b> en U6 hay poder de mercado y <mark>P &gt; CMg</mark> (hay pérdida de eficiencia). En U7, con competencia, <mark>P = CMg</mark> y el resultado es eficiente. En U8 vemos que el mercado de trabajo NO se vacía: queda desempleo y eso es parte del equilibrio.</div>"
        },
        {
            "id": "n-m-p1a",
            "title": "P1 · Producción y tecnologías",
            "part": "P1",
            "html": "<h3>1er Parcial · Producción, tecnologías y costos (U1–U2)</h3>\n<div class=\"idea\">✓ <b>Idea madre:</b> la micro estudia cómo personas, empresas y Estado deciden con <b>recursos escasos</b>. El curso (CORE-ECON) arranca de problemas reales y construye modelos. La gran imagen del crecimiento es el <b>\"palo de hockey\"</b>: muchos siglos casi plano y, con la revolución capitalista y la tecnología, una subida fuerte.</div>\n<div class=\"eli\"><span class=\"tag\">ELI5</span> Economía no es solo plata: es decisiones. Como no puedo tener todo, elegir algo significa <b>resignar otra cosa</b> (costo de oportunidad).</div>\n<h4>Conceptos base</h4>\n<p>La economía estudia cómo tomamos decisiones cuando los recursos son <b>escasos</b>. Y \"escaso\" no quiere decir \"poco\": un bien es escaso si lo <b>valoramos</b> y conseguir más tiene un <b>costo de oportunidad</b>, es decir, nos obliga a resignar otra cosa. El aire no es escaso (hay de sobra); tu tiempo sí lo es. Como no podemos estudiar la realidad entera, los economistas usan <b>modelos</b>: representaciones simplificadas que se quedan con lo esencial para responder una pregunta, igual que un mapa que no dibuja cada árbol pero te lleva a destino. Para analizarlos con orden se usa el <b>ceteris paribus</b>: cambio <b>una</b> variable y dejo <b>todo lo demás congelado</b>, para ver el efecto de esa sola cosa. El curso CORE-ECON arranca con una foto histórica: durante <b>siglos</b> el ingreso por persona casi no se movió, hasta que con la <b>revolución capitalista</b> (propiedad privada + mercados + empresas) y el cambio tecnológico la curva pegó un salto: es el famoso <b>\"palo de hockey\"</b>. Y el motor de ese salto es la <b>destrucción creativa</b>: las tecnologías nuevas desplazan a las viejas y liberan recursos para usos mejores.</p>\n<table>\n<tr><th>Concepto</th><th>Definición</th><th>ELI5</th></tr>\n<tr><td>Escasez</td><td>Un bien es escaso si se valora y conseguir más tiene costo de oportunidad</td><td>No puedo tener todo</td></tr>\n<tr><td>Modelo</td><td>Representación simplificada de la realidad para responder una pregunta</td><td>Como un mapa: muestra lo útil</td></tr>\n<tr><td>Ceteris paribus</td><td>Mantener constante todo lo demás para aislar una relación</td><td>Cambio una cosa y congelo el resto</td></tr>\n<tr><td>Capitalismo</td><td>Empresas privadas usan capital y trabajo para producir y vender en mercados buscando beneficios</td><td>Propiedad privada + mercados + empresas</td></tr>\n<tr><td>Destrucción creativa</td><td>Nuevas tecnologías desplazan a las viejas y liberan recursos</td><td>Lo nuevo pisa lo viejo</td></tr>\n</table>\n<h4>Producción: producto medio y marginal</h4>\n<p>Una <b>función de producción</b> es la relación entre lo que <b>pongo</b> (insumos: trabajo, capital, energía) y lo que <b>obtengo</b> (producto). Para entender cuánto rinde un insumo se miran dos cosas distintas que conviene no mezclar. El <b>producto medio</b> es el <b>promedio</b>: divido todo lo producido entre las unidades de insumo (Q/L). El <b>producto marginal</b> es lo <b>extra</b> que aporta la <b>última</b> unidad que sumé (ΔQ/ΔL). La idea central es que el marginal suele ir <b>cayendo</b>: cada hora o trabajador adicional agrega menos que el anterior, porque los recursos fijos se van saturando. Eso son los <b>rendimientos decrecientes</b> (el cuarto cocinero en una cocina chica ya casi no suma).</p>\n<table>\n<tr><th>Medida</th><th>Fórmula</th><th>Qué es</th></tr>\n<tr><td>Producto medio (PM)</td><td><span class=\"fml\">PM = Q / L</span></td><td>Promedio por unidad de insumo</td></tr>\n<tr><td>Producto marginal (PMg)</td><td><span class=\"fml\">PMg = ΔQ / ΔL</span></td><td>El extra de la última unidad</td></tr>\n</table>\n<div class=\"trap\"><span class=\"tag\">Ojo con la trampa</span> PM no es PMg. Si el ejercicio dice \"la última hora\" o \"una hora adicional\", es <b>marginal</b>. Y ocio = tiempo total − trabajo.</div>\n<h4>Tecnologías y costo de oportunidad</h4>\n<p>Una <b>tecnología</b> es una receta para producir. Una tecnología <b>domina</b> a otra si usa <b>menos o igual de todos</b> los insumos y menos de al menos uno → la dominada se descarta. Si ninguna domina, recién ahí miro <b>precios relativos</b>.</p>\n<div class=\"formula-grid\">\n<div class=\"fbox\"><div class=\"big\">CT = wL + rK</div><small>Costo con dos insumos</small></div>\n<div class=\"fbox\"><div class=\"big\">Renta = BN elegido − BN mejor alternativa</div><small>Renta económica</small></div>\n<div class=\"fbox\"><div class=\"big\">Costo económico = costo directo + costo de oportunidad</div><small>Lo que realmente \"cuesta\" decidir</small></div>\n</div>"
        },
        {
            "id": "n-m-p1b",
            "title": "P1 · Frontera y consumo-ocio",
            "part": "P1",
            "html": "<h3>1er Parcial · Preferencias, frontera factible y consumo-ocio (U3)</h3>\n<div class=\"idea\">✓ <b>Idea madre:</b> elijo la <b>mejor combinación alcanzable</b>. La <b>frontera factible</b> dice qué puedo lograr; las <b>curvas de indiferencia</b> dicen qué prefiero. El óptimo es donde se tocan.</div>\n<div class=\"eli\"><span class=\"tag\">ELI5</span> La frontera es lo que el bolsillo (o el tiempo) me permite; la indiferencia es lo que me gusta. El punto justo es donde lo que quiero toca lo que puedo.</div>\n<p>Toda elección económica junta <b>dos cosas</b>: lo que <b>quiero</b> y lo que <b>puedo</b>. Lo que quiero se representa con las <b>curvas de indiferencia</b>: cada curva une combinaciones de bienes que me dan <b>la misma satisfacción</b>, y cuanto más arriba y a la derecha esté la curva, mejor estoy. Su pendiente es la <b>TMS</b> (tasa marginal de sustitución): cuánto de un bien estoy dispuesto a <b>resignar</b> para ganar un poco del otro sin cambiar mi satisfacción — es mi valoración <b>subjetiva</b>. Lo que puedo se representa con la <b>frontera factible</b>: el borde de lo alcanzable con mis recursos (adentro es posible, afuera imposible). Su pendiente es la <b>TMT</b> (tasa marginal de transformación): la tasa a la que <b>el mundo</b> me deja cambiar un bien por otro — es el \"tipo de cambio\" <b>objetivo</b> que me impone la realidad. El óptimo aparece donde mi valoración iguala a la del mundo: <b>TMS = TMT</b>, es decir, donde la curva de indiferencia más alta apenas <b>toca</b> la frontera.</p>\n<table>\n<tr><th>Concepto</th><th>Definición</th><th>Clave</th></tr>\n<tr><td>Curva de indiferencia</td><td>Combinaciones que me dan la misma satisfacción (utilidad)</td><td>Más arriba/derecha = mejor</td></tr>\n<tr><td>TMS</td><td>Tasa marginal de sustitución: cuánto cambio un bien por otro manteniendo utilidad</td><td>Pendiente de la indiferencia</td></tr>\n<tr><td>Frontera factible</td><td>Borde de lo alcanzable con mis recursos</td><td>Adentro = posible; afuera = imposible</td></tr>\n<tr><td>TMT</td><td>Tasa marginal de transformación: a qué tasa el mundo me deja cambiar un bien por otro</td><td>Pendiente de la frontera</td></tr>\n</table>\n<div class=\"key\"><span class=\"tag\">Regla del óptimo interior</span> <span class=\"fml\">TMS = TMT</span>: la curva de indiferencia más alta toca la frontera factible.</div>\n<h4>Consumo, ocio y salario</h4>\n<p>El modelo estrella de esta unidad aplica todo lo anterior a una decisión muy real: <b>cuánto trabajar</b>. Acá los dos \"bienes\" son el <b>consumo</b> (la plata que gano para gastar) y el <b>ocio</b> (mi tiempo libre). El truco es ver que el ocio <b>no es gratis</b>: cada hora que descanso es una hora que <b>no trabajo</b>, así que su costo de oportunidad es <b>el salario que dejo de ganar</b>. Por eso la frontera factible entre consumo y ocio tiene como pendiente el <b>salario</b>: a mayor salario, más empinada (renunciar a una hora de ocio \"rinde\" más consumo). Elijo el punto donde mi curva de indiferencia toca esa frontera.</p>\n<div class=\"formula-grid\">\n<div class=\"fbox\"><div class=\"big\">y = w × h</div><small>Ingreso por trabajo (w salario/hora, h horas)</small></div>\n<div class=\"fbox\"><div class=\"big\">c = w(24 − t)</div><small>Consumo según tiempo libre t</small></div>\n</div>\n<div class=\"trap\"><span class=\"tag\">Ojo con la trampa</span> Ante un cambio de salario, no asumas que A→B es siempre efecto sustitución: hay efecto ingreso y efecto sustitución.</div>"
        },
        {
            "id": "n-m-p1c",
            "title": "P1 · Juegos y Pareto",
            "part": "P1",
            "html": "<h3>1er Parcial · Juegos, dilemas sociales, Pareto e instituciones (U4–U5)</h3>\n<div class=\"idea\">✓ <b>Idea madre:</b> cuando lo que me conviene depende de lo que hace el otro, uso <b>teoría de juegos</b>. Las <b>reglas del juego</b> (instituciones) deciden qué se produce y quién se queda con qué.</div>\n<div class=\"eli\"><span class=\"tag\">ELI5</span> En un juego miro: \"si el otro hace X, ¿qué me conviene a mí?\". Cuando las mejores respuestas de los dos coinciden, nadie quiere moverse: eso es Nash.</div>\n<p>Hasta acá cada uno decidía solo. Pero muchas veces <b>lo que me conviene depende de lo que haga el otro</b>: ahí entra la <b>teoría de juegos</b>. Dos ideas la ordenan. Una <b>estrategia dominante</b> es la que me conviene <b>pase lo que pase</b> el otro: si la tengo, la juego siempre sin pensar. El <b>equilibrio de Nash</b> es una situación donde <b>cada uno está jugando su mejor respuesta</b> a lo que hace el otro, así que <b>nadie gana cambiando de jugada por su cuenta</b>. Lo interesante (y lo que más cae) es el <b>dilema social</b> o <b>dilema del prisionero</b>: cada uno, haciendo lo individualmente racional, lleva a un resultado <b>peor para todos</b> que si hubieran cooperado. El villano típico es el <b>free-rider</b>, el que se cuelga del esfuerzo ajeno sin aportar.</p>\n<table>\n<tr><th>Concepto</th><th>Definición</th><th>Clave</th></tr>\n<tr><td>Estrategia dominante</td><td>La mejor sin importar lo que haga el otro</td><td>Si existe, la juego siempre</td></tr>\n<tr><td>Equilibrio de Nash</td><td>Cada uno juega su mejor respuesta a la del otro</td><td>Nadie gana desviándose solo</td></tr>\n<tr><td>Dilema social / del prisionero</td><td>Lo racional individual da un resultado peor para todos</td><td>Free-riders: se cuelgan del esfuerzo ajeno</td></tr>\n<tr><td>Pago esperado</td><td><span class=\"fml\">PE = probabilidad × pago si aceptan</span></td><td>Ultimátum: pago del proponente = torta − oferta</td></tr>\n</table>\n<p>El otro gran tema es cómo evaluar si un resultado es \"bueno\". Acá se usa el criterio de <b>Pareto</b>, que separa <b>dos preguntas que la gente confunde</b>: si algo es <b>eficiente</b> y si es <b>justo</b>. Una <b>mejora paretiana</b> es un cambio donde <b>alguien mejora y nadie empeora</b> (plata gratis: hay que hacerlo). Una situación es <b>eficiente de Pareto</b> cuando ya <b>no quedan</b> mejoras así: no se puede beneficiar a uno sin perjudicar a otro. Cuidado, que <b>eficiente no es lo mismo que justo</b>: un reparto en el que uno se queda con casi todo puede ser perfectamente eficiente de Pareto. Quién se queda con qué lo deciden las <b>instituciones</b>, las \"reglas del juego\" (quién tiene poder, la propiedad, los contratos). En el modelo <b>Ángela-Bruno</b> del curso se ve justamente eso: cambiando las reglas (de la esclavitud a la propiedad de la tierra al salario), cambia cuánto produce Ángela y cuánto se queda cada uno, aunque la tierra sea la misma.</p>\n<div class=\"key\"><span class=\"tag\">Pareto e instituciones</span> Una <b>mejora paretiana</b>: alguien mejora y <b>nadie empeora</b>. Eficiente de Pareto: no se puede mejorar a uno sin empeorar a otro. En el modelo <b>Ángela-Bruno</b>, las reglas (poder, propiedad, contratos) definen la distribución.</div>\n<div class=\"trap\"><span class=\"tag\">Ojo con la trampa</span> Nash ≠ \"lo mejor para todos\". Pareto ≠ \"justo\": un reparto súper desigual puede ser eficiente de Pareto.</div>"
        },
        {
            "id": "n-m-u6",
            "title": "P2 · U6 Empresa y clientes",
            "part": "P2",
            "html": "<h3>Unidad 6 — La empresa y sus clientes</h3>\n<div class=\"idea\">✓ <b>Idea madre:</b> una empresa con producto diferenciado <b>fija el precio</b>. Enfrenta una curva de demanda con pendiente negativa: si quiere vender más, tiene que bajar el precio. Elige el punto (precio, cantidad) que le deja el <b>mayor beneficio posible</b>.</div>\n<div class=\"eli\"><span class=\"tag\">ELI5</span> Es como tener el único puesto que vende ese pancho especial: si cobrás caro, vendés pocos; si cobrás barato, vendés muchos pero ganás poco por cada uno. Buscás el precio del medio que te deja la torta más grande.</div>\n<p>La clave de toda la unidad es entender por qué la empresa <b>no</b> pone el precio más alto posible. Como su producto está <b>diferenciado</b> (nadie vende exactamente lo mismo), tiene <b>poder de mercado</b>: puede elegir el precio. Pero enfrenta una <b>curva de demanda con pendiente negativa</b>, que no es otra cosa que <b>todos los clientes ordenados de mayor a menor disposición a pagar</b>. Si quiere venderle a uno más, tiene que <b>bajarle el precio a todos</b>, no solo al cliente nuevo. Por eso lo que gana por vender una unidad extra (el <b>ingreso marginal</b>) es <b>menor</b> que el precio de esa unidad: gano el precio del cliente nuevo, pero pierdo un poquito en cada cliente que antes pagaba más. La empresa sigue agregando ventas mientras lo que entra por la última unidad (IMg) supere lo que cuesta producirla (CMg), y se planta justo cuando <b>IMg = CMg</b>. Ese es el óptimo.</p>\n<h4>Conceptos que tengo que dominar</h4>\n<table>\n<tr><th>Concepto</th><th>Qué es</th><th>ELI5 / clave</th></tr>\n<tr><td>Disposición a pagar (DAP)</td><td>Lo máximo que un cliente paga por una unidad</td><td>La <b>curva de demanda</b> ordena a los clientes de mayor a menor DAP</td></tr>\n<tr><td>Empresa que fija precios</td><td>Tiene poder de mercado (producto diferenciado); enfrenta demanda con pendiente negativa</td><td>Lo opuesto al precio-aceptante de U7</td></tr>\n<tr><td>Ingreso total (IT)</td><td><span class=\"fml\">IT = P × Q</span></td><td>La plata que entra</td></tr>\n<tr><td>Ingreso marginal (IMg)</td><td>Lo extra que entra por vender 1 unidad más</td><td><b>IMg &lt; P</b>: para vender una más, bajo el precio a TODAS</td></tr>\n<tr><td>Costo marginal (CMg)</td><td>Lo que cuesta producir 1 unidad más</td><td>Se compara contra el IMg</td></tr>\n<tr><td>Curvas de isobeneficio</td><td>Combinaciones de P y Q con el mismo beneficio</td><td>Como curvas de indiferencia, pero de la empresa</td></tr>\n<tr><td>Margen (markup)</td><td><span class=\"fml\">(P − CMg)/P = 1/|ε|</span></td><td>Cuanto más <b>inelástica</b> la demanda, más margen me banco</td></tr>\n<tr><td>Elasticidad precio (ε)</td><td><span class=\"fml\">ε = %ΔQ / %ΔP</span> (en valor absoluto)</td><td>Elástica (&gt;1): sensible al precio. Inelástica (&lt;1): poco sensible</td></tr>\n</table>\n<h4>El óptimo de la empresa</h4>\n<p>El mejor punto es el de la curva de demanda que toca la <b>isobeneficio más alta</b>: ahí la curva de demanda y la isobeneficio se tocan (tangencia). En ese punto se cumple <span class=\"fml\">IMg = CMg</span> y también <b>RMS = RMT</b> (la pendiente de la demanda iguala la de la isobeneficio).</p>\n<div class=\"key\"><span class=\"tag\">Para el ejercicio</span> Dada una tabla de demanda y costos: 1) calculo IT, 2) calculo IMg, 3) busco la Q donde <b>IMg = CMg</b>, 4) leo el precio en la demanda, 5) saco beneficio y margen.</div>\n<div class=\"trap\"><span class=\"tag\">Ojo con la trampa</span> El óptimo <b>NO</b> es donde el precio es más alto ni donde se vende más. Es donde <b>IMg = CMg</b>. Y el margen usa <b>CMg</b>, no CMe.</div>\n<h4>Eficiencia: por qué el poder de mercado deja plata sobre la mesa</h4>\n<p>Como la empresa cobra <mark>P &gt; CMg</mark>, produce <b>menos</b> de lo eficiente. Hay clientes con DAP por encima del CMg que se quedan sin comprar: esas ventas que no pasan son la <b>pérdida de eficiencia</b> (deadweight loss). Con <b>discriminación de precios</b> (cobrar distinto según la DAP de cada cliente) la empresa captura más excedente.</p>"
        },
        {
            "id": "n-m-u7",
            "title": "P2 · U7 Oferta y demanda",
            "part": "P2",
            "html": "<h3>Unidad 7 — Oferta y demanda: mercados con muchos compradores y vendedores</h3>\n<div class=\"idea\">✓ <b>Idea madre:</b> cuando hay <b>muchos</b> compradores y vendedores chicos, nadie fija el precio. Todos son <b>precio-aceptantes</b>: toman el precio del mercado como dado. El precio sale solo del cruce de la oferta con la demanda.</div>\n<div class=\"eli\"><span class=\"tag\">ELI5</span> Es una feria gigante con mil puestos que venden lo mismo. Si uno cobra de más, te cruzás de vereda. Entonces el precio se acomoda solito hasta que lo que se ofrece es igual a lo que se quiere comprar.</div>\n<p>Esta unidad es el <b>contraste</b> con la anterior. Acá hay <b>tantos</b> compradores y vendedores, y todos venden algo tan parecido, que <b>nadie</b> tiene poder para mover el precio: todos son <b>precio-aceptantes</b>, lo toman como un dato del mercado. ¿Y de dónde sale ese precio? Del cruce de dos fuerzas. La <b>demanda</b> (los compradores ordenados por disposición a pagar, de mayor a menor) y la <b>oferta</b> (los vendedores ordenados por costo, de menor a mayor, porque cada empresa produce mientras P ≥ CMg). Donde se cruzan queda el <b>equilibrio</b> (P*, Q*), el único precio donde la cantidad que se quiere comprar iguala a la que se quiere vender: el mercado <b>se vacía</b>, no sobra ni falta nada. Lo potente es que en ese punto se cumple <b>P = CMg</b> y el <b>excedente total</b> (lo que ganan compradores + vendedores) es <b>máximo</b>: es <b>eficiente de Pareto</b>. Justo lo contrario del poder de mercado de U6, donde P &gt; CMg y se perdía eficiencia.</p>\n<table>\n<tr><th>Concepto</th><th>Qué es</th><th>Clave</th></tr>\n<tr><td>Precio-aceptante</td><td>Toma el precio del mercado como dado</td><td>Su demanda individual es <b>horizontal</b> al precio</td></tr>\n<tr><td>Curva de oferta del mercado</td><td>Suma horizontal de los CMg de las empresas</td><td>Cada empresa produce donde <b>P = CMg</b></td></tr>\n<tr><td>Equilibrio competitivo</td><td>P* y Q* donde <span class=\"fml\">Qd = Qs</span></td><td>El mercado se <b>vacía</b>: no sobra ni falta</td></tr>\n<tr><td>Excedente del consumidor</td><td>Σ (DAP − precio pagado)</td><td>Lo que el comprador \"se ahorra\"</td></tr>\n<tr><td>Excedente del productor</td><td>Σ (precio − CMg)</td><td>Lo que el vendedor gana sobre su costo</td></tr>\n<tr><td>Eficiencia de Pareto</td><td>En el equilibrio competitivo el excedente total es <b>máximo</b></td><td>Acá <b>P = CMg</b> → eficiente (≠ monopolio)</td></tr>\n</table>\n<div style=\"text-align:center;margin:16px 0\">\n<svg style=\"max-width:340px;width:100%\" viewbox=\"0 0 360 200\" xmlns=\"http://www.w3.org/2000/svg\">\n<line stroke=\"#7a8499\" stroke-width=\"1.5\" x1=\"45\" x2=\"45\" y1=\"12\" y2=\"174\"></line>\n<line stroke=\"#7a8499\" stroke-width=\"1.5\" x1=\"40\" x2=\"345\" y1=\"160\" y2=\"160\"></line>\n<text fill=\"#aab4c8\" font-size=\"13\" x=\"348\" y=\"164\">Q</text>\n<text fill=\"#aab4c8\" font-size=\"13\" x=\"33\" y=\"14\">P</text>\n<line stroke=\"#6c8cff\" stroke-width=\"2.5\" x1=\"55\" x2=\"300\" y1=\"40\" y2=\"155\"></line>\n<text fill=\"#6c8cff\" font-size=\"12\" x=\"250\" y=\"150\">Demanda</text>\n<line stroke=\"#36d399\" stroke-width=\"2.5\" x1=\"55\" x2=\"300\" y1=\"155\" y2=\"40\"></line>\n<text fill=\"#36d399\" font-size=\"12\" x=\"258\" y=\"44\">Oferta</text>\n<line stroke=\"#7a8499\" stroke-dasharray=\"4 3\" stroke-width=\"1.2\" x1=\"177\" x2=\"177\" y1=\"97\" y2=\"160\"></line>\n<line stroke=\"#7a8499\" stroke-dasharray=\"4 3\" stroke-width=\"1.2\" x1=\"177\" x2=\"45\" y1=\"97\" y2=\"97\"></line>\n<circle cx=\"177\" cy=\"97\" fill=\"#ffc24b\" r=\"4.5\"></circle>\n<text fill=\"#ffc24b\" font-size=\"12\" x=\"170\" y=\"176\">Q*</text>\n<text fill=\"#ffc24b\" font-size=\"12\" x=\"27\" y=\"101\">P*</text>\n</svg>\n<div style=\"color:#7a8499;font-size:.8rem\">El precio y la cantidad de equilibrio (P*, Q*) salen del <b>cruce de la oferta y la demanda</b>. Ahí el mercado se vacía: no sobra ni falta.</div>\n</div>\n<div class=\"key\"><span class=\"tag\">Las 4 condiciones de la eficiencia (CORE-ECON)</span> El equilibrio competitivo es Pareto eficiente <b>solo si se cumplen 4 condiciones estrictas</b>: (1) <b>muchos</b> compradores y vendedores de bienes <b>idénticos</b>; (2) todos <b>precio-aceptantes</b> en el equilibrio; (3) <b>sin externalidades</b> (nadie le traslada costos o beneficios a terceros que no se tengan en cuenta); (4) <b>contratos completos</b> (cubren todo lo relevante y son exigibles ante la justicia). Si alguna falla, el resultado deja de ser eficiente — y por eso existen el poder de mercado (U6) y los problemas del mercado de trabajo (U8).</div>\n<p>Un detalle fino que la cátedra liga al equilibrio competitivo: es también un <b>equilibrio de Nash</b>. Como todos son precio-aceptantes, ninguno puede mejorar comerciando a otro precio (siempre hay otra contraparte dispuesta al precio de equilibrio). Y la <b>distribución del excedente</b> entre consumidores y productores depende de las <b>elasticidades relativas</b> de la oferta y la demanda: el lado más <b>inelástico</b> se queda con la porción mayor.</p>\n<h4>Intervenciones del Estado</h4>\n<table>\n<tr><th>Medida</th><th>Qué hace</th><th>Efecto</th></tr>\n<tr><td>Impuesto</td><td>Mete una cuña entre lo que paga el comprador y lo que recibe el vendedor</td><td>Baja Q, recauda, genera <b>pérdida de eficiencia</b>. La <b>incidencia</b> recae más en el lado más inelástico</td></tr>\n<tr><td>Precio máximo (techo)</td><td>Tope por <b>debajo</b> del equilibrio (ej. alquileres)</td><td><b>Escasez</b>: la demanda supera a la oferta</td></tr>\n<tr><td>Precio mínimo (piso)</td><td>Piso por <b>encima</b> del equilibrio (ej. salario mínimo)</td><td><b>Excedente</b>: sobra oferta (ej. desempleo)</td></tr>\n</table>\n<div class=\"trap\"><span class=\"tag\">Ojo con la trampa</span> No confundas <b>desplazar la curva</b> (cambia un determinante: ingreso, gustos, costos) con <b>moverse sobre la curva</b> (cambia el precio). Y un techo de precios sólo \"muerde\" si está por <b>debajo</b> del equilibrio.</div>"
        },
        {
            "id": "n-m-u8",
            "title": "P2 · U8 Empresa y personal",
            "part": "P2",
            "html": "<h3>Unidad 8 — La empresa y su personal</h3>\n<div class=\"idea\">✓ <b>Idea madre:</b> la empresa contrata trabajo, pero <b>no puede comprar esfuerzo</b> directamente: el contrato es incompleto. Usa el <b>salario</b> y la <b>amenaza de despido</b> para que el trabajador se esfuerce.</div>\n<div class=\"eli\"><span class=\"tag\">ELI5</span> No podés pagar por \"ganas de laburar\". Entonces le pagás un poco de más para que tenga algo que perder: si zafa y lo echan, pierde esa diferencia. Ese miedo a perder el buen laburo es lo que lo hace rendir.</div>\n<p>El problema de fondo de esta unidad es que el contrato de trabajo es <b>incompleto</b>: la empresa puede contratar las <b>horas</b> del trabajador, pero no su <b>esfuerzo</b>, porque no se puede escribir en un papel ni verificar del todo \"esforzate al 90%\". Esto es un caso del <b>problema principal-agente</b>: el <b>principal</b> (la empresa) quiere algo que el <b>agente</b> (el trabajador) elige por su cuenta y que no se observa bien — hay conflicto de intereses e información asimétrica. ¿La solución de la empresa? Crear un incentivo. Le paga un <b>salario por encima</b> de lo que el trabajador conseguiría afuera (su <b>salario de reserva</b>), de modo que tener <b>este</b> empleo le deje una ganancia extra: la <b>renta del empleo</b>. Esa renta es lo que <b>perdería si lo echan por vago</b>, así que funciona como zanahoria y garrote a la vez. Por eso aparece el <b>desempleo involuntario</b> como algo <b>necesario</b>: si todos consiguieran trabajo igual de bueno al instante, la amenaza de despido no asustaría a nadie y el truco no funcionaría.</p>\n<table>\n<tr><th>Concepto</th><th>Qué es</th><th>Clave</th></tr>\n<tr><td>Contrato incompleto</td><td>El esfuerzo no se puede exigir ni verificar en el contrato</td><td>Raíz de todo el problema</td></tr>\n<tr><td>Problema principal-agente</td><td>El principal (empresa) quiere algo que el agente (trabajador) elige y no se observa del todo</td><td>Conflicto de intereses + info asimétrica</td></tr>\n<tr><td>Salario de reserva</td><td>El mejor ingreso del trabajador <b>fuera</b> de este empleo</td><td>Sube si sube el seguro de paro o bajan los despidos</td></tr>\n<tr><td>Renta del empleo</td><td>Lo que gana por tener <b>este</b> empleo por encima de su reserva (neto del esfuerzo)</td><td>Es lo que <b>perdería si lo echan</b> → motiva</td></tr>\n<tr><td>Salario de eficiencia</td><td>La empresa paga <b>por encima</b> del que vaciaría el mercado</td><td>Para crear renta y disciplinar</td></tr>\n<tr><td>Desempleo involuntario</td><td>Queda gente sin trabajo en el equilibrio</td><td>Es <b>necesario</b>: sin paro, la amenaza de despido no asusta</td></tr>\n</table>\n<h4>Cómo elige la empresa el salario</h4>\n<p>La <b>curva de mejor respuesta</b> del trabajador dice cuánto esfuerzo pone según el salario (a más salario, más esfuerzo). La empresa busca el salario que <b>minimiza el costo por unidad de esfuerzo</b>: el punto donde una recta desde el origen es tangente a la curva de mejor respuesta.</p>\n<div class=\"key\"><span class=\"tag\">Cadena de efectos típica</span> Sube el seguro de paro → sube el <b>salario de reserva</b> → baja la <b>renta del empleo</b> → el trabajador se esfuerza menos → la empresa <b>sube el salario</b> para recomponer la renta.</div>\n<h4>El gran resultado: el pleno empleo es imposible</h4>\n<p>El salario que la empresa termina pagando (el <b>salario de no holgazaneo</b>) es <b>salario de reserva + costo del esfuerzo + una renta</b>. Ahora pensá en toda la economía: si hubiera <b>pleno empleo</b>, perder el trabajo no costaría nada (conseguís otro al instante), así que la renta del empleo necesaria para que la gente se esfuerce se dispararía al infinito y <b>ninguna empresa podría pagarla</b>. Conclusión potente de CORE-ECON: <b>tiene que existir desempleo involuntario en el equilibrio</b> — la amenaza del paro es justamente lo que hace que el sistema funcione. No es una falla, es parte del equilibrio.</p>\n<p>Esto también explica el <b>salario mínimo</b>, que tiene dos lecturas según el mercado. En <b>competencia perfecta</b>, un mínimo por encima del equilibrio genera <b>desempleo</b> (sobra oferta de trabajo). Pero si la empresa tiene <b>poder de monopsonio</b> (es la que manda en el mercado laboral), un salario mínimo puede <b>subir a la vez el salario y el empleo</b> — y la evidencia uruguaya (Casacuberta y Gandelman) muestra que acá predominan empresas con poder de mercado, cuyo poder se redujo con el salario mínimo y los Consejos de Salarios.</p>\n<div class=\"trap\"><span class=\"tag\">Ojo con la trampa</span> La renta del empleo <b>no</b> es el salario: es salario − reserva − costo del esfuerzo. El salario de eficiencia no es \"generosidad\", es estrategia para que rindan. Y el desempleo involuntario <b>no</b> es un accidente: es <b>necesario</b> para que la amenaza de despido discipline (por eso el pleno empleo es imposible).</div>"
        },
        {
            "id": "n-m-fml",
            "title": "Fórmulas",
            "part": "General",
            "html": "<h3>Hoja de fórmulas — la imprimo y la llevo</h3>\n<div class=\"formula-grid\">\n<div class=\"fbox\"><div class=\"big\">IT = P × Q</div><small>Ingreso total</small></div>\n<div class=\"fbox\"><div class=\"big\">IMg = ΔIT / ΔQ</div><small>Ingreso marginal. Siempre &lt; P</small></div>\n<div class=\"fbox\"><div class=\"big\">CMg = ΔCT / ΔQ</div><small>Costo marginal</small></div>\n<div class=\"fbox\"><div class=\"big\">IMg = CMg</div><small>Óptimo de la empresa que fija precios (U6)</small></div>\n<div class=\"fbox\"><div class=\"big\">Beneficio = (P − CMe)·Q</div><small>= IT − CT</small></div>\n<div class=\"fbox\"><div class=\"big\">(P − CMg)/P = 1/|ε|</div><small>Margen / índice de Lerner</small></div>\n<div class=\"fbox\"><div class=\"big\">ε = %ΔQ / %ΔP</div><small>Elasticidad precio de la demanda</small></div>\n<div class=\"fbox\"><div class=\"big\">Qd = Qs</div><small>Equilibrio competitivo (U7). Acá P = CMg</small></div>\n<div class=\"fbox\"><div class=\"big\">EC = Σ(DAP − P)</div><small>Excedente del consumidor</small></div>\n<div class=\"fbox\"><div class=\"big\">EP = Σ(P − CMg)</div><small>Excedente del productor</small></div>\n<div class=\"fbox\"><div class=\"big\">Renta empleo = w − w_reserva − costo esfuerzo</div><small>Lo que pierde si lo echan (U8)</small></div>\n<div class=\"fbox\"><div class=\"big\">min  w / esfuerzo</div><small>La empresa minimiza el costo por unidad de esfuerzo (U8)</small></div>\n</div>"
        },
        {
            "id": "n-m-rec",
            "title": "Recetas de examen",
            "part": "General",
            "html": "<h3>Recetas de examen — tipos de ejercicio</h3>\n<p class=\"tagline\">La materia es nueva, así que esto sale de los ejercicios de cada capítulo del libro y de la prueba de práctica. Foco en U6-U8 (tu parcial).</p>\n<div class=\"key\"><span class=\"tag\">★ Formato del examen</span> <b>10 preguntas de múltiple opción</b>, 3 opciones (A/B/C), una correcta. 40 puntos, mínimo 16. <b>Correcta +4, incorrecta −1, en blanco 0</b> → conviene responder solo si podés descartar al menos una opción. Tres modalidades: <b>conceptual</b> (\"señalá la verdadera\"), <b>lectura de gráfico</b>, y <b>cálculo escondido en la opción</b> (acá ganás puntos seguros si sabés la fórmula).</div>\n<h4>U6 · La empresa y sus clientes</h4>\n<table>\n<tr><th>Tipo · cómo lo reconozco</th><th>Cómo se resuelve</th><th>Trampa</th></tr>\n<tr><td><b>Beneficio en un punto de la demanda</b> — tabla Q–P y costo unitario</td><td><b>Beneficio = (P − costo unitario) × Q</b>. Calculalo para cada Q y compará; el máximo está en el medio de la demanda. (Ej.: costo 60, Q=400, P=180 → (180−60)×400 = 48.000.)</td><td>La opción mete un número redondo casi correcto — calculá, no estimes. \"Más Q = más beneficio\" es falso.</td></tr>\n<tr><td><b>CMg, CMe y costos fijos</b> — desde C(Q)</td><td><b>CMg = pendiente de C(Q)</b>. Costos fijos = C(0). <b>CMe = C(Q)/Q</b>; si no hay fijos y CMg es constante → CMe = CMg.</td><td>Decir que el CMe \"baja al producir más\" cuando NO hay costos fijos (ahí es constante).</td></tr>\n<tr><td><b>Óptimo del productor</b> — tangencia / IMg = CMg</td><td>El óptimo (P*, Q*) está donde la <b>demanda es tangente a una isobeneficio</b>, o donde <b>IMg = CMg</b>. Si IMg &gt; CMg conviene producir más; si IMg &lt; CMg, menos.</td><td>Creer que en IMg=CMg \"el beneficio es cero\". No: ese ES el óptimo; el beneficio total es positivo.</td></tr>\n<tr><td><b>Excedentes vs beneficio · pérdida irrecuperable</b></td><td>Exc. consumidor = DAP − precio. <b>Exc. productor = ingresos − CMg (NO incluye costos fijos)</b>. <b>Beneficio = exc. productor − costos fijos</b>. La empresa con poder restringe Q → deja <b>pérdida irrecuperable</b>.</td><td>Decir \"excedente del productor = beneficio\" (ignora los costos fijos). Creer que el monopolista logra TODAS las ganancias del comercio.</td></tr>\n<tr><td><b>Qué aumenta el poder de mercado</b></td><td>Menos sustitutos, patentes, fidelidad de marca, producto diferenciado → demanda <b>menos elástica</b> → puede subir el precio.</td><td>Que a los consumidores \"les importe más el precio\" REDUCE el poder, no lo aumenta.</td></tr>\n</table>\n<h4>U7 · Oferta y demanda</h4>\n<table>\n<tr><th>Tipo · cómo lo reconozco</th><th>Cómo se resuelve</th><th>Trampa</th></tr>\n<tr><td><b>Equilibrio Qd = Qs</b> y sentido del exceso</td><td>Equilibrio = donde Qd = Qs (mercado se vacía). <b>P &gt; P* → exceso de OFERTA</b>; P &lt; P* → exceso de demanda. Se transa la cantidad del equilibrio, no la demanda máxima.</td><td>Invertir el sentido del exceso (P alto = exceso de oferta, no de demanda).</td></tr>\n<tr><td><b>Desplazamientos</b> de oferta/demanda</td><td>Cambia la DAP (gustos, ingreso, sustitutos) → se mueve la <b>demanda</b>. Cambian costos/nº de vendedores → se mueve la <b>oferta</b>. Si lo que cambió fue la otra curva, hay <b>movimiento a lo largo</b>, no desplazamiento.</td><td>Decir que la oferta \"se desplaza\" cuando lo que cambió fue la demanda.</td></tr>\n<tr><td><b>Elasticidad</b> e ingreso total</td><td><b>ε = −(%ΔQ)/(%ΔP)</b> (con el signo menos para que dé positivo). ε&gt;1 elástica, &lt;1 inelástica. Si elástica, <b>bajar</b> el precio sube el IT; si inelástica, <b>subir</b> el precio sube el IT.</td><td>Olvidar el signo menos. Confundir pendiente con elasticidad (la elasticidad varía a lo largo de la curva).</td></tr>\n<tr><td><b>Incidencia de un impuesto</b> (¡clave!)</td><td>El impuesto desplaza la oferta hacia arriba: consumidores pagan <b>P1</b>, productores reciben <b>P0</b>. <b>Ingreso fiscal = (P1 − P0) × Q1</b>. <b>Pérdida de eficiencia = ½·(P1 − P0)·(Q* − Q1)</b>.</td><td>Decir que los productores reciben P* o que el ingreso fiscal es (P*−P0)·Q1. Reciben <b>P0</b> y se usa la brecha completa P1−P0.</td></tr>\n</table>\n<h4>U8 · La empresa y su personal</h4>\n<table>\n<tr><th>Tipo · cómo lo reconozco</th><th>Cómo se resuelve</th><th>Trampa</th></tr>\n<tr><td><b>Renta del empleo</b> (cálculo, muy frecuente)</td><td><b>Renta/h</b> = (w − c) − (subsidio − costo psico). <b>Renta total</b> = renta/h × horas/sem × semanas de búsqueda. <b>Salario de reserva</b> = valor de la mejor alternativa / horas totales del horizonte. (Ej. María: (12−2)−(4−1)=7 $/h; total 7×35×44=10.780.)</td><td>Dar la renta para todo el horizonte (solo dura las semanas de búsqueda). El salario de reserva NO es solo el subsidio.</td></tr>\n<tr><td><b>Salario de no holgazaneo</b></td><td><b>w = wr + c + (s/(h−s))·c</b> (wr reserva, c esfuerzo, s semanas hasta el despido, h horizonte). Siempre <b>por encima</b> del salario de reserva. Si s sube → w sube; si h sube → la renta baja.</td><td>Olvidar el término de renta y poner w = wr + c.</td></tr>\n<tr><td><b>Óptimo del empleador</b> — no holgazaneo + isobeneficio</td><td>Conjunto factible = por <b>encima</b> de la curva de no holgazaneo. El óptimo es la <b>tangencia</b> con la isobeneficio más alta. Beneficio = y − w·N.</td><td>Confundir misma isobeneficio con mismo beneficio numérico — verificá con y − w·N.</td></tr>\n<tr><td><b>Contrato laboral / salario mínimo</b> — conceptual</td><td>El contrato laboral da <b>autoridad para dirigir</b>, no transfiere la propiedad del empleado; es de larga duración. Salario mínimo (estudio de Dube, experimento natural): <b>redujo la rotación</b> y la desigualdad, efecto en empleo <b>mínimo</b>.</td><td>\"El contrato transfiere la propiedad\" (falso). \"El salario mínimo aumentó la rotación\" (fue al revés).</td></tr>\n</table>"
        },
        {
            "id": "n-m-trap",
            "title": "Trampas",
            "part": "General",
            "html": "<h3>Trampas típicas (donde se pierden puntos fáciles)</h3>\n<div class=\"trap\"><span class=\"tag\">U6</span> El óptimo es <b>IMg = CMg</b>, no \"el precio más alto\" ni \"vender lo más posible\". Y <b>IMg &lt; P</b> siempre cuando fijo precios.</div>\n<div class=\"trap\"><span class=\"tag\">U6</span> El margen usa <b>CMg</b>, no CMe. Y a mayor elasticidad, <b>menor</b> margen.</div>\n<div class=\"trap\"><span class=\"tag\">U7</span> Precio-aceptante produce donde <b>P = CMg</b> (acá IMg = P). No lo mezcles con el monopolio.</div>\n<div class=\"trap\"><span class=\"tag\">U7</span> Desplazar la curva ≠ moverse sobre la curva. Un techo de precios sólo afecta si está <b>debajo</b> del equilibrio.</div>\n<div class=\"trap\"><span class=\"tag\">U8</span> Renta del empleo ≠ salario. El desempleo de equilibrio <b>no es un error</b>: es lo que hace creíble la amenaza.</div>"
        }
    ],
    "flashcards": [
        {
            "g": "Tarjetas del apunte",
            "q": "¿Por qué IMg < P cuando fijo precios?",
            "a": "Porque para vender una unidad más tengo que bajar el precio a TODAS las que vendía. El ingreso extra es el precio nuevo menos lo que pierdo en las anteriores."
        },
        {
            "g": "Tarjetas del apunte",
            "q": "Condición de óptimo de la empresa (U6)",
            "a": "IMg = CMg. Gráficamente: la curva de demanda toca la isobeneficio más alta (tangencia, RMS = RMT)."
        },
        {
            "g": "Tarjetas del apunte",
            "q": "Índice de Lerner / margen",
            "a": "(P − CMg)/P = 1/|ε|. Más inelástica la demanda → más margen."
        },
        {
            "g": "Tarjetas del apunte",
            "q": "¿Qué es un precio-aceptante?",
            "a": "Una empresa o consumidor tan chico que toma el precio del mercado como dado. Su demanda individual es horizontal."
        },
        {
            "g": "Tarjetas del apunte",
            "q": "Equilibrio competitivo",
            "a": "P* y Q* donde Qd = Qs. El mercado se vacía y, como P = CMg, el resultado es eficiente en el sentido de Pareto."
        },
        {
            "g": "Tarjetas del apunte",
            "q": "¿A quién golpea más un impuesto?",
            "a": "Al lado más inelástico del mercado (el que menos puede escapar del precio)."
        },
        {
            "g": "Tarjetas del apunte",
            "q": "Renta del empleo",
            "a": "Lo que el trabajador gana por tener ESTE empleo por encima de su reserva (neto del esfuerzo). Es lo que pierde si lo echan."
        },
        {
            "g": "Tarjetas del apunte",
            "q": "¿Por qué hay desempleo en equilibrio? (U8)",
            "a": "Porque sin paro, perder el empleo no costaría nada y la amenaza de despido no disciplinaría. El desempleo hace creíble la amenaza."
        },
        {
            "g": "1er Parcial · Producción, tecnologías y costos (U1–U2)",
            "q": "¿Qué estudia la microeconomía?",
            "a": "Cómo deciden e interactúan consumidores, empresas y Estado con recursos escasos."
        },
        {
            "g": "1er Parcial · Producción, tecnologías y costos (U1–U2)",
            "q": "Escasez",
            "a": "Un bien es escaso si se valora y conseguir más tiene costo de oportunidad."
        },
        {
            "g": "1er Parcial · Producción, tecnologías y costos (U1–U2)",
            "q": "Costo de oportunidad",
            "a": "Lo que dejo de ganar al elegir una alternativa en lugar de la mejor otra."
        },
        {
            "g": "1er Parcial · Producción, tecnologías y costos (U1–U2)",
            "q": "Modelo",
            "a": "Una representación simplificada de la realidad para responder una pregunta."
        },
        {
            "g": "1er Parcial · Producción, tecnologías y costos (U1–U2)",
            "q": "Ceteris paribus",
            "a": "Mantener todo lo demás constante para aislar una relación."
        },
        {
            "g": "1er Parcial · Producción, tecnologías y costos (U1–U2)",
            "q": "Función de producción",
            "a": "La relación entre los insumos usados y el producto obtenido."
        },
        {
            "g": "1er Parcial · Producción, tecnologías y costos (U1–U2)",
            "q": "Producto medio (PM)",
            "a": "Producto total dividido el insumo total: PM = Q/L."
        },
        {
            "g": "1er Parcial · Producción, tecnologías y costos (U1–U2)",
            "q": "Producto marginal (PMg)",
            "a": "El extra de producto al agregar una unidad de insumo: PMg = ΔQ/ΔL."
        },
        {
            "g": "1er Parcial · Producción, tecnologías y costos (U1–U2)",
            "q": "Rendimientos decrecientes",
            "a": "Cada unidad extra de insumo agrega menos que la anterior."
        },
        {
            "g": "1er Parcial · Producción, tecnologías y costos (U1–U2)",
            "q": "Tecnología",
            "a": "Una receta para producir (una forma de combinar insumos)."
        },
        {
            "g": "1er Parcial · Producción, tecnologías y costos (U1–U2)",
            "q": "Dominancia tecnológica",
            "a": "Una tecnología domina a otra si usa menos o igual de todos los insumos."
        },
        {
            "g": "1er Parcial · Producción, tecnologías y costos (U1–U2)",
            "q": "Precios relativos",
            "a": "El precio de un insumo respecto a otro; deciden cuando ninguna tecnología domina."
        },
        {
            "g": "1er Parcial · Producción, tecnologías y costos (U1–U2)",
            "q": "Costo total con dos insumos",
            "a": "CT = wL + rK (precio del trabajo por trabajo, precio del capital por capital)."
        },
        {
            "g": "1er Parcial · Producción, tecnologías y costos (U1–U2)",
            "q": "Costo económico",
            "a": "Costo directo + costo de oportunidad."
        },
        {
            "g": "1er Parcial · Producción, tecnologías y costos (U1–U2)",
            "q": "Renta económica",
            "a": "Beneficio neto de la opción elegida − beneficio de la mejor alternativa."
        },
        {
            "g": "1er Parcial · Producción, tecnologías y costos (U1–U2)",
            "q": "PM vs PMg",
            "a": "PM es el promedio (Q/L); PMg es el extra de la última unidad. Si dice \"la última hora\", es marginal."
        },
        {
            "g": "1er Parcial · Frontera, consumo-ocio, juegos y Pareto (U3–U5)",
            "q": "Curva de indiferencia",
            "a": "Combinaciones que dan la misma satisfacción (utilidad)."
        },
        {
            "g": "1er Parcial · Frontera, consumo-ocio, juegos y Pareto (U3–U5)",
            "q": "TMS",
            "a": "Tasa marginal de sustitución: cuánto cambio un bien por otro manteniendo la utilidad (pendiente de la indiferencia)."
        },
        {
            "g": "1er Parcial · Frontera, consumo-ocio, juegos y Pareto (U3–U5)",
            "q": "Frontera factible",
            "a": "El borde de lo que puedo alcanzar con mis recursos."
        },
        {
            "g": "1er Parcial · Frontera, consumo-ocio, juegos y Pareto (U3–U5)",
            "q": "TMT",
            "a": "Tasa marginal de transformación: a qué tasa el mundo me deja cambiar un bien por otro (pendiente de la frontera)."
        },
        {
            "g": "1er Parcial · Frontera, consumo-ocio, juegos y Pareto (U3–U5)",
            "q": "Óptimo interior",
            "a": "Donde TMS = TMT (la curva de indiferencia toca la frontera)."
        },
        {
            "g": "1er Parcial · Frontera, consumo-ocio, juegos y Pareto (U3–U5)",
            "q": "Consumo y ocio",
            "a": "Cada hora de ocio cuesta el salario que dejo de ganar: c = w(24 − t)."
        },
        {
            "g": "1er Parcial · Frontera, consumo-ocio, juegos y Pareto (U3–U5)",
            "q": "Equilibrio de Nash",
            "a": "Cada uno juega su mejor respuesta a la del otro; nadie gana desviándose solo."
        },
        {
            "g": "1er Parcial · Frontera, consumo-ocio, juegos y Pareto (U3–U5)",
            "q": "Estrategia dominante",
            "a": "La mejor jugada sin importar lo que haga el otro."
        },
        {
            "g": "1er Parcial · Frontera, consumo-ocio, juegos y Pareto (U3–U5)",
            "q": "Dilema del prisionero",
            "a": "Lo racional individual lleva a un resultado peor para todos."
        },
        {
            "g": "1er Parcial · Frontera, consumo-ocio, juegos y Pareto (U3–U5)",
            "q": "Free-rider",
            "a": "El que se cuelga del esfuerzo ajeno sin aportar."
        },
        {
            "g": "1er Parcial · Frontera, consumo-ocio, juegos y Pareto (U3–U5)",
            "q": "Pago esperado",
            "a": "Probabilidad × pago si aceptan (PE)."
        },
        {
            "g": "1er Parcial · Frontera, consumo-ocio, juegos y Pareto (U3–U5)",
            "q": "Eficiencia de Pareto",
            "a": "No se puede mejorar a uno sin empeorar a otro."
        },
        {
            "g": "1er Parcial · Frontera, consumo-ocio, juegos y Pareto (U3–U5)",
            "q": "Mejora paretiana",
            "a": "Alguien mejora y nadie empeora."
        },
        {
            "g": "1er Parcial · Frontera, consumo-ocio, juegos y Pareto (U3–U5)",
            "q": "¿Pareto = justo?",
            "a": "No: un reparto muy desigual puede ser eficiente de Pareto."
        },
        {
            "g": "1er Parcial · Frontera, consumo-ocio, juegos y Pareto (U3–U5)",
            "q": "Instituciones",
            "a": "Las reglas del juego (poder, propiedad, contratos) que deciden quién obtiene qué."
        },
        {
            "g": "1er Parcial · Frontera, consumo-ocio, juegos y Pareto (U3–U5)",
            "q": "¿Nash es lo mejor para todos?",
            "a": "No: el equilibrio puede ser malo para ambos (dilema social)."
        },
        {
            "g": "2º Parcial · U6 La empresa y sus clientes",
            "q": "Disposición a pagar (DAP)",
            "a": "Lo máximo que un cliente paga por una unidad."
        },
        {
            "g": "2º Parcial · U6 La empresa y sus clientes",
            "q": "Curva de demanda",
            "a": "Relación precio-cantidad; ordena a los clientes de mayor a menor DAP."
        },
        {
            "g": "2º Parcial · U6 La empresa y sus clientes",
            "q": "Empresa que fija precios",
            "a": "Tiene poder de mercado; enfrenta una demanda con pendiente negativa."
        },
        {
            "g": "2º Parcial · U6 La empresa y sus clientes",
            "q": "Ingreso total",
            "a": "IT = P × Q."
        },
        {
            "g": "2º Parcial · U6 La empresa y sus clientes",
            "q": "Ingreso marginal",
            "a": "Lo extra por vender una unidad más. Es menor que el precio (IMg < P)."
        },
        {
            "g": "2º Parcial · U6 La empresa y sus clientes",
            "q": "¿Por qué IMg < P?",
            "a": "Porque para vender una unidad más hay que bajar el precio a TODAS las anteriores."
        },
        {
            "g": "2º Parcial · U6 La empresa y sus clientes",
            "q": "Costo marginal (CMg)",
            "a": "Lo que cuesta producir una unidad más."
        },
        {
            "g": "2º Parcial · U6 La empresa y sus clientes",
            "q": "Curvas de isobeneficio",
            "a": "Combinaciones de P y Q que dan el mismo beneficio."
        },
        {
            "g": "2º Parcial · U6 La empresa y sus clientes",
            "q": "Óptimo de la empresa (U6)",
            "a": "Donde IMg = CMg (la demanda toca la isobeneficio más alta)."
        },
        {
            "g": "2º Parcial · U6 La empresa y sus clientes",
            "q": "Margen / índice de Lerner",
            "a": "(P − CMg)/P = 1/|ε|."
        },
        {
            "g": "2º Parcial · U6 La empresa y sus clientes",
            "q": "Elasticidad precio",
            "a": "ε = %ΔQ / %ΔP (en valor absoluto). Mayor que 1 elástica, menor que 1 inelástica."
        },
        {
            "g": "2º Parcial · U6 La empresa y sus clientes",
            "q": "Elasticidad y margen",
            "a": "A mayor elasticidad de la demanda, menor margen."
        },
        {
            "g": "2º Parcial · U6 La empresa y sus clientes",
            "q": "Excedente del consumidor",
            "a": "La suma de (DAP − precio pagado)."
        },
        {
            "g": "2º Parcial · U6 La empresa y sus clientes",
            "q": "Pérdida de eficiencia (U6)",
            "a": "Como cobra P > CMg, la empresa produce menos de lo eficiente."
        },
        {
            "g": "2º Parcial · U6 La empresa y sus clientes",
            "q": "Discriminación de precios",
            "a": "Cobrar distinto a cada cliente según su DAP, para capturar más excedente."
        },
        {
            "g": "2º Parcial · U6 La empresa y sus clientes",
            "q": "¿El monopolio es eficiente?",
            "a": "No: cobra P > CMg y deja ganancias del comercio sin realizar."
        },
        {
            "g": "2º Parcial · U7 Oferta y demanda + U8 Empresa y personal",
            "q": "Precio-aceptante",
            "a": "Toma el precio del mercado como dado; su demanda individual es horizontal."
        },
        {
            "g": "2º Parcial · U7 Oferta y demanda + U8 Empresa y personal",
            "q": "Oferta del mercado",
            "a": "Suma horizontal de los CMg de las empresas (cada una produce donde P = CMg)."
        },
        {
            "g": "2º Parcial · U7 Oferta y demanda + U8 Empresa y personal",
            "q": "Equilibrio competitivo",
            "a": "P* y Q* donde Qd = Qs; el mercado se vacía."
        },
        {
            "g": "2º Parcial · U7 Oferta y demanda + U8 Empresa y personal",
            "q": "En competencia, ¿qué se cumple?",
            "a": "P = CMg → el resultado es eficiente (a diferencia del monopolio)."
        },
        {
            "g": "2º Parcial · U7 Oferta y demanda + U8 Empresa y personal",
            "q": "Excedente del productor",
            "a": "La suma de (precio − CMg)."
        },
        {
            "g": "2º Parcial · U7 Oferta y demanda + U8 Empresa y personal",
            "q": "¿Cuándo es máximo el excedente total?",
            "a": "En el equilibrio competitivo (eficiente de Pareto)."
        },
        {
            "g": "2º Parcial · U7 Oferta y demanda + U8 Empresa y personal",
            "q": "Impuesto",
            "a": "Mete una cuña, baja Q, genera pérdida de eficiencia; la incidencia recae más en el lado más inelástico."
        },
        {
            "g": "2º Parcial · U7 Oferta y demanda + U8 Empresa y personal",
            "q": "Precio máximo (techo)",
            "a": "Por debajo del equilibrio → escasez (falta producto)."
        },
        {
            "g": "2º Parcial · U7 Oferta y demanda + U8 Empresa y personal",
            "q": "Precio mínimo (piso)",
            "a": "Por encima del equilibrio → excedente (ej. desempleo con salario mínimo)."
        },
        {
            "g": "2º Parcial · U7 Oferta y demanda + U8 Empresa y personal",
            "q": "Contrato incompleto",
            "a": "El esfuerzo no se puede exigir ni verificar en el contrato."
        },
        {
            "g": "2º Parcial · U7 Oferta y demanda + U8 Empresa y personal",
            "q": "Problema principal-agente",
            "a": "El principal quiere algo que el agente elige y no se observa del todo."
        },
        {
            "g": "2º Parcial · U7 Oferta y demanda + U8 Empresa y personal",
            "q": "Salario de reserva",
            "a": "El mejor ingreso del trabajador fuera de este empleo."
        },
        {
            "g": "2º Parcial · U7 Oferta y demanda + U8 Empresa y personal",
            "q": "Renta del empleo",
            "a": "Lo que gana por tener ESTE empleo por encima de su reserva. Es lo que pierde si lo echan."
        },
        {
            "g": "2º Parcial · U7 Oferta y demanda + U8 Empresa y personal",
            "q": "Salario de eficiencia",
            "a": "La empresa paga por encima del que vacía el mercado, para motivar el esfuerzo."
        },
        {
            "g": "2º Parcial · U7 Oferta y demanda + U8 Empresa y personal",
            "q": "Desempleo involuntario",
            "a": "Existe en el equilibrio y es necesario para que la amenaza de despido sea creíble."
        },
        {
            "g": "2º Parcial · U7 Oferta y demanda + U8 Empresa y personal",
            "q": "Desplazar vs moverse sobre la curva",
            "a": "Desplazar = cambia un determinante (ingreso, costos); moverse sobre ella = cambia el precio."
        }
    ],
    "questions": [
        {
            "g": "Autoevaluación del apunte",
            "q": "Una empresa que fija precios maximiza beneficio donde…",
            "opts": [
                "vende la mayor cantidad posible",
                "el precio es máximo",
                "IMg = CMg"
            ],
            "ans": 2,
            "exp": "Donde el ingreso marginal iguala al costo marginal. Ahí la torta es más grande."
        },
        {
            "g": "Autoevaluación del apunte",
            "q": "Si la demanda es más inelástica, el margen óptimo…",
            "opts": [
                "es mayor",
                "es menor",
                "no cambia"
            ],
            "ans": 0,
            "exp": "Margen = 1/|ε|. Menos elástica → clientes menos sensibles → me banco más margen."
        },
        {
            "g": "Autoevaluación del apunte",
            "q": "En competencia perfecta, cada empresa produce donde…",
            "opts": [
                "IMg < P",
                "P = CMe mínimo siempre",
                "P = CMg"
            ],
            "ans": 2,
            "exp": "El precio-aceptante toma P como dado y produce hasta donde P = CMg (acá IMg = P)."
        },
        {
            "g": "Autoevaluación del apunte",
            "q": "Un precio máximo (techo) efectivo genera…",
            "opts": [
                "excedente (sobra producto)",
                "escasez (falta producto)",
                "nada, si está sobre el equilibrio"
            ],
            "ans": 1,
            "exp": "Por debajo del equilibrio, la demanda supera a la oferta: escasez. (El piso genera lo contrario.)"
        },
        {
            "g": "Autoevaluación del apunte",
            "q": "La renta del empleo es…",
            "opts": [
                "lo que el trabajador perdería si lo echaran",
                "el salario de reserva",
                "el salario total que cobra"
            ],
            "ans": 0,
            "exp": "Salario − reserva − costo del esfuerzo. Esa diferencia es lo que lo motiva a no zafar."
        },
        {
            "g": "Autoevaluación del apunte",
            "q": "Si sube el seguro de paro, en el modelo de U8…",
            "opts": [
                "sube la reserva, baja la renta y la empresa sube el salario",
                "no cambia nada",
                "baja la reserva y la empresa baja el salario"
            ],
            "ans": 0,
            "exp": "Mejor opción afuera → menos miedo a perder el empleo → la empresa recompone con más salario."
        },
        {
            "g": "Producción, tecnologías y costos",
            "q": "El producto medio es…",
            "opts": [
                "Q·L",
                "ΔQ/ΔL",
                "Q/L"
            ],
            "ans": 2,
            "exp": "Promedio por unidad de insumo."
        },
        {
            "g": "Producción, tecnologías y costos",
            "q": "El producto marginal es…",
            "opts": [
                "Q/L",
                "ΔQ/ΔL",
                "Q−L"
            ],
            "ans": 1,
            "exp": "El extra de la última unidad."
        },
        {
            "g": "Producción, tecnologías y costos",
            "q": "Hay rendimientos decrecientes cuando…",
            "opts": [
                "la producción cae",
                "el costo baja",
                "cada unidad extra agrega menos"
            ],
            "ans": 2,
            "exp": "La función sube pero se aplana."
        },
        {
            "g": "Producción, tecnologías y costos",
            "q": "Una tecnología domina a otra si…",
            "opts": [
                "es más nueva",
                "usa menos o igual de todos los insumos",
                "es más barata en un insumo"
            ],
            "ans": 1,
            "exp": "Dominancia."
        },
        {
            "g": "Producción, tecnologías y costos",
            "q": "Si ninguna tecnología domina, decido por…",
            "opts": [
                "los precios relativos",
                "la más nueva",
                "la que use menos trabajo"
            ],
            "ans": 0,
            "exp": "Comparo costos con precios."
        },
        {
            "g": "Producción, tecnologías y costos",
            "q": "El costo total con trabajo y capital es…",
            "opts": [
                "wL − rK",
                "wL + rK",
                "w + r"
            ],
            "ans": 1,
            "exp": "Precio por cantidad de cada insumo."
        },
        {
            "g": "Producción, tecnologías y costos",
            "q": "La renta económica es…",
            "opts": [
                "el ingreso total",
                "el costo fijo",
                "el beneficio elegido − el de la mejor alternativa"
            ],
            "ans": 2,
            "exp": "Lo que gano de más por la mejor opción."
        },
        {
            "g": "Producción, tecnologías y costos",
            "q": "El costo de oportunidad es…",
            "opts": [
                "el precio",
                "el costo fijo",
                "lo que dejo de ganar al elegir"
            ],
            "ans": 2,
            "exp": "La mejor alternativa resignada."
        },
        {
            "g": "Producción, tecnologías y costos",
            "q": "Si el ejercicio dice \"una hora adicional\", es…",
            "opts": [
                "marginal",
                "medio",
                "total"
            ],
            "ans": 0,
            "exp": "Es PMg."
        },
        {
            "g": "Producción, tecnologías y costos",
            "q": "Un modelo es…",
            "opts": [
                "una representación simplificada de la realidad",
                "una opinión",
                "la realidad exacta"
            ],
            "ans": 0,
            "exp": "Como un mapa."
        },
        {
            "g": "Producción, tecnologías y costos",
            "q": "\"Ceteris paribus\" significa…",
            "opts": [
                "ignorar los precios",
                "mantener todo lo demás constante",
                "cambiar todo a la vez"
            ],
            "ans": 1,
            "exp": "Aíslo una relación."
        },
        {
            "g": "Producción, tecnologías y costos",
            "q": "La microeconomía estudia…",
            "opts": [
                "solo el dinero",
                "decisiones con recursos escasos",
                "la macro del país"
            ],
            "ans": 1,
            "exp": "Consumidores, empresas y Estado."
        },
        {
            "g": "Frontera, consumo-ocio, juegos y Pareto",
            "q": "El óptimo interior cumple…",
            "opts": [
                "TMS > TMT",
                "TMT = 0",
                "TMS = TMT"
            ],
            "ans": 2,
            "exp": "La indiferencia toca la frontera."
        },
        {
            "g": "Frontera, consumo-ocio, juegos y Pareto",
            "q": "La TMS es la pendiente de…",
            "opts": [
                "la curva de indiferencia",
                "la frontera factible",
                "la demanda"
            ],
            "ans": 0,
            "exp": "Lo que prefiero."
        },
        {
            "g": "Frontera, consumo-ocio, juegos y Pareto",
            "q": "La TMT es la pendiente de…",
            "opts": [
                "la frontera factible",
                "la oferta",
                "la indiferencia"
            ],
            "ans": 0,
            "exp": "Lo que puedo."
        },
        {
            "g": "Frontera, consumo-ocio, juegos y Pareto",
            "q": "El costo de una hora de ocio es…",
            "opts": [
                "cero",
                "el consumo total",
                "el salario que dejo de ganar"
            ],
            "ans": 2,
            "exp": "Costo de oportunidad del ocio."
        },
        {
            "g": "Frontera, consumo-ocio, juegos y Pareto",
            "q": "Donde coinciden las mejores respuestas hay…",
            "opts": [
                "un máximo",
                "equilibrio de Nash",
                "un monopolio"
            ],
            "ans": 1,
            "exp": "Nadie gana desviándose solo."
        },
        {
            "g": "Frontera, consumo-ocio, juegos y Pareto",
            "q": "Una estrategia dominante es…",
            "opts": [
                "la cooperativa",
                "la mejor sin importar lo que haga el otro",
                "la más arriesgada"
            ],
            "ans": 1,
            "exp": "Siempre conviene jugarla."
        },
        {
            "g": "Frontera, consumo-ocio, juegos y Pareto",
            "q": "¿Nash es siempre lo mejor para todos?",
            "opts": [
                "Sí",
                "Solo si cooperan",
                "No"
            ],
            "ans": 2,
            "exp": "Puede ser malo para ambos (dilema social)."
        },
        {
            "g": "Frontera, consumo-ocio, juegos y Pareto",
            "q": "Una mejora paretiana…",
            "opts": [
                "alguien mejora y nadie empeora",
                "todos mejoran siempre",
                "alguien empeora"
            ],
            "ans": 0,
            "exp": "Sin perjudicar a nadie."
        },
        {
            "g": "Frontera, consumo-ocio, juegos y Pareto",
            "q": "¿Pareto implica justo?",
            "opts": [
                "No",
                "Sí",
                "Siempre"
            ],
            "ans": 0,
            "exp": "Un reparto desigual puede ser eficiente."
        },
        {
            "g": "Frontera, consumo-ocio, juegos y Pareto",
            "q": "Un free-rider…",
            "opts": [
                "no existe",
                "aporta de más",
                "se cuelga del esfuerzo ajeno"
            ],
            "ans": 2,
            "exp": "Dilema social."
        },
        {
            "g": "Frontera, consumo-ocio, juegos y Pareto",
            "q": "El pago esperado es…",
            "opts": [
                "el costo",
                "probabilidad × pago si aceptan",
                "el pago seguro"
            ],
            "ans": 1,
            "exp": "Promedio ponderado."
        },
        {
            "g": "Frontera, consumo-ocio, juegos y Pareto",
            "q": "Las instituciones son…",
            "opts": [
                "las reglas del juego (poder, propiedad, contratos)",
                "los bancos",
                "los edificios"
            ],
            "ans": 0,
            "exp": "Deciden quién obtiene qué."
        },
        {
            "g": "U6 · La empresa y sus clientes",
            "q": "Una empresa que fija precios maximiza donde…",
            "opts": [
                "IMg = CMg",
                "vende lo más posible",
                "el precio es máximo"
            ],
            "ans": 0,
            "exp": "Ahí la torta es mayor."
        },
        {
            "g": "U6 · La empresa y sus clientes",
            "q": "El ingreso marginal, al fijar precios, es…",
            "opts": [
                "menor que el precio",
                "igual al precio",
                "mayor que el precio"
            ],
            "ans": 0,
            "exp": "Hay que bajar el precio a todas."
        },
        {
            "g": "U6 · La empresa y sus clientes",
            "q": "El margen (Lerner) es…",
            "opts": [
                "(P−CMg)/P = 1/|ε|",
                "(P−CMe)/P",
                "P·Q"
            ],
            "ans": 0,
            "exp": "Relacionado con la elasticidad."
        },
        {
            "g": "U6 · La empresa y sus clientes",
            "q": "A mayor elasticidad de la demanda, el margen…",
            "opts": [
                "es mayor",
                "no cambia",
                "es menor"
            ],
            "ans": 2,
            "exp": "Clientes sensibles → menos margen."
        },
        {
            "g": "U6 · La empresa y sus clientes",
            "q": "La disposición a pagar es…",
            "opts": [
                "lo máximo que un cliente paga",
                "el costo",
                "el precio fijo"
            ],
            "ans": 0,
            "exp": "Ordena la demanda."
        },
        {
            "g": "U6 · La empresa y sus clientes",
            "q": "El poder de mercado genera…",
            "opts": [
                "precios bajos",
                "eficiencia total",
                "pérdida de eficiencia (P > CMg)"
            ],
            "ans": 2,
            "exp": "Produce menos de lo eficiente."
        },
        {
            "g": "U6 · La empresa y sus clientes",
            "q": "El óptimo de la empresa NO es…",
            "opts": [
                "donde la demanda toca la isobeneficio más alta",
                "donde IMg = CMg",
                "vender lo máximo posible"
            ],
            "ans": 2,
            "exp": "Es IMg=CMg."
        },
        {
            "g": "U6 · La empresa y sus clientes",
            "q": "La discriminación de precios…",
            "opts": [
                "cobra distinto según la DAP",
                "cobra a todos igual",
                "baja el precio a todos"
            ],
            "ans": 0,
            "exp": "Captura más excedente."
        },
        {
            "g": "U6 · La empresa y sus clientes",
            "q": "La demanda de una empresa con poder de mercado tiene pendiente…",
            "opts": [
                "positiva",
                "horizontal",
                "negativa"
            ],
            "ans": 2,
            "exp": "Para vender más baja el precio."
        },
        {
            "g": "U6 · La empresa y sus clientes",
            "q": "El excedente del consumidor es…",
            "opts": [
                "el costo",
                "el beneficio de la empresa",
                "la DAP menos el precio pagado"
            ],
            "ans": 2,
            "exp": "Lo que el comprador se ahorra."
        },
        {
            "g": "U6 · La empresa y sus clientes",
            "q": "El margen usa…",
            "opts": [
                "CMg",
                "el precio",
                "CMe"
            ],
            "ans": 0,
            "exp": "Costo marginal, no medio."
        },
        {
            "g": "U6 · La empresa y sus clientes",
            "q": "¿El monopolio es eficiente?",
            "opts": [
                "Sí",
                "Solo a veces",
                "No (P > CMg)"
            ],
            "ans": 2,
            "exp": "Deja ganancias del comercio sin realizar."
        },
        {
            "g": "U7 Oferta y demanda + U8 Empresa y personal",
            "q": "Un precio-aceptante…",
            "opts": [
                "fija el precio",
                "no vende",
                "toma el precio del mercado como dado"
            ],
            "ans": 2,
            "exp": "Demanda individual horizontal."
        },
        {
            "g": "U7 Oferta y demanda + U8 Empresa y personal",
            "q": "En competencia perfecta la empresa produce donde…",
            "opts": [
                "P = CMg",
                "IMg < P",
                "P = CMe siempre"
            ],
            "ans": 0,
            "exp": "Acá IMg = P."
        },
        {
            "g": "U7 Oferta y demanda + U8 Empresa y personal",
            "q": "El equilibrio competitivo es donde…",
            "opts": [
                "la oferta es máxima",
                "Qd = Qs",
                "el precio es 0"
            ],
            "ans": 1,
            "exp": "El mercado se vacía."
        },
        {
            "g": "U7 Oferta y demanda + U8 Empresa y personal",
            "q": "Un impuesto golpea más al lado…",
            "opts": [
                "más inelástico",
                "del comprador siempre",
                "más elástico"
            ],
            "ans": 0,
            "exp": "El que menos puede escapar del precio."
        },
        {
            "g": "U7 Oferta y demanda + U8 Empresa y personal",
            "q": "Un precio máximo (techo) efectivo genera…",
            "opts": [
                "excedente",
                "escasez",
                "equilibrio"
            ],
            "ans": 1,
            "exp": "Demanda supera a oferta."
        },
        {
            "g": "U7 Oferta y demanda + U8 Empresa y personal",
            "q": "Un precio mínimo (piso) genera…",
            "opts": [
                "escasez",
                "excedente",
                "equilibrio"
            ],
            "ans": 1,
            "exp": "Sobra oferta (ej. desempleo)."
        },
        {
            "g": "U7 Oferta y demanda + U8 Empresa y personal",
            "q": "La renta del empleo es…",
            "opts": [
                "el salario total",
                "el salario de reserva",
                "lo que el trabajador perdería si lo echan"
            ],
            "ans": 2,
            "exp": "Salario − reserva − esfuerzo."
        },
        {
            "g": "U7 Oferta y demanda + U8 Empresa y personal",
            "q": "El salario de eficiencia…",
            "opts": [
                "se paga por encima del de mercado para motivar",
                "es el mínimo legal",
                "no existe"
            ],
            "ans": 0,
            "exp": "Crea renta y disciplina."
        },
        {
            "g": "U7 Oferta y demanda + U8 Empresa y personal",
            "q": "El desempleo de equilibrio (U8)…",
            "opts": [
                "es necesario para que la amenaza de despido asuste",
                "no existe",
                "es un error del modelo"
            ],
            "ans": 0,
            "exp": "Hace creíble la amenaza."
        },
        {
            "g": "U7 Oferta y demanda + U8 Empresa y personal",
            "q": "El problema principal-agente surge porque…",
            "opts": [
                "no hay contrato",
                "el esfuerzo no se observa del todo",
                "el salario es bajo"
            ],
            "ans": 1,
            "exp": "Conflicto de intereses + info asimétrica."
        },
        {
            "g": "U7 Oferta y demanda + U8 Empresa y personal",
            "q": "Si sube el seguro de paro…",
            "opts": [
                "baja todo",
                "sube la reserva, baja la renta y la empresa sube el salario",
                "no cambia nada"
            ],
            "ans": 1,
            "exp": "Recompone la disciplina."
        },
        {
            "g": "U7 Oferta y demanda + U8 Empresa y personal",
            "q": "Desplazar la curva vs moverse sobre ella…",
            "opts": [
                "ninguna existe",
                "son lo mismo",
                "desplazar cambia un determinante; moverse cambia el precio"
            ],
            "ans": 2,
            "exp": "Distinción clave de U7."
        }
    ],
    "exercises": [
        {
            "g": "Ejercicios del apunte",
            "title": "Ej 1 · U6 — Empresa que fija precios: precio, cantidad y margen óptimos",
            "html": "<p><b>Letra:</b> La demanda de mi producto es <span class=\"fml\">P = 10 − Q</span> (P en $, Q en miles). El costo marginal es constante <span class=\"fml\">CMg = 2</span> y no hay costos fijos. Hallá la cantidad y el precio que maximizan el beneficio, el beneficio y el margen.</p>\n<ol class=\"steps\">\n<li><b>Ingreso total:</b> IT = P·Q = (10 − Q)·Q = 10Q − Q².</li>\n<li><b>Ingreso marginal:</b> IMg = 10 − 2Q (la pendiente del IT).</li>\n<li><b>Óptimo IMg = CMg:</b> 10 − 2Q = 2 → <b>Q* = 4</b> (mil unidades).</li>\n<li><b>Precio:</b> lo leo en la demanda: P = 10 − 4 = <b>$6</b>.</li>\n<li><b>Beneficio:</b> (P − CMg)·Q = (6 − 2)·4 = <b>$16</b> (miles).</li>\n<li><b>Margen:</b> (6 − 2)/6 = <b>0,67</b> → 67%. Chequeo con elasticidad: ε = −1·(6/4) = −1,5; 1/|ε| = 0,67 ✓.</li>\n</ol>\n<div class=\"key\"><span class=\"tag\">Comparación con lo eficiente</span> Lo eficiente sería P = CMg = 2 → Q = 8. Como yo produzco 4, la <b>pérdida de eficiencia</b> es el triángulo ½·(6−2)·(8−4) = <b>8</b>.</div>"
        },
        {
            "g": "Ejercicios del apunte",
            "title": "Ej 2 · U7 — Equilibrio competitivo y excedentes",
            "html": "<p><b>Letra:</b> En un mercado competitivo, la demanda es <span class=\"fml\">Qd = 12 − P</span> y la oferta <span class=\"fml\">Qs = 2P</span>. Hallá el precio y cantidad de equilibrio y los excedentes.</p>\n<ol class=\"steps\">\n<li><b>Equilibrio:</b> Qd = Qs → 12 − P = 2P → 3P = 12 → <b>P* = 4</b>.</li>\n<li><b>Cantidad:</b> Q* = 2·4 = <b>8</b>.</li>\n<li><b>Excedente del consumidor:</b> precio máximo de la demanda (P cuando Q=0) es 12. EC = ½·(12 − 4)·8 = <b>32</b>.</li>\n<li><b>Excedente del productor:</b> la oferta arranca en P=0. EP = ½·(4 − 0)·8 = <b>16</b>.</li>\n<li><b>Excedente total:</b> 32 + 16 = <b>48</b> (máximo, porque es competitivo y P = CMg).</li>\n</ol>\n<div class=\"trap\"><span class=\"tag\">Ojo</span> Si me ponen un <b>impuesto</b> o un <b>precio máximo</b>, el excedente total baja: la diferencia es la pérdida de eficiencia.</div>"
        },
        {
            "g": "Ejercicios del apunte",
            "title": "Ej 3 · U8 — Renta del empleo y salario de reserva",
            "html": "<p><b>Letra:</b> Un trabajador consigue afuera $100/semana (seguro de paro + changas). La desutilidad de esforzarse en este empleo equivale a $20. La empresa le paga $160. (a) ¿Cuál es su renta del empleo? (b) ¿Qué pasa si el seguro de paro sube y su reserva pasa a $130?</p>\n<ol class=\"steps\">\n<li><b>Renta del empleo (a):</b> w − reserva − costo esfuerzo = 160 − 100 − 20 = <b>$40</b>. Eso es lo que pierde si lo echan → lo motiva a rendir.</li>\n<li><b>Sube la reserva (b):</b> nueva renta = 160 − 130 − 20 = <b>$10</b>. La renta cae, la amenaza de despido pierde fuerza.</li>\n<li><b>Reacción de la empresa:</b> para recomponer la disciplina, <b>sube el salario</b> (salario de eficiencia más alto).</li>\n</ol>"
        },
        {
            "g": "1er Parcial · Producción, costos y juegos",
            "title": "Producto medio y marginal",
            "q": "Con 2 horas se producen 46 kg y con 3 horas 66 kg. Calculá PM(3) y PMg de 2 a 3.",
            "steps": [
                "PM(3) = Q/L = 66/3 = 22 kg por hora.",
                "PMg = ΔQ/ΔL = (66−46)/(3−2) = 20 kg extra."
            ]
        },
        {
            "g": "1er Parcial · Producción, costos y juegos",
            "title": "Tiempo de ocio",
            "q": "Una persona dispone de 14 horas y trabaja 8. ¿Cuántas horas de ocio tiene?",
            "steps": [
                "Ocio = tiempo total − trabajo.",
                "14 − 8 = 6 horas de ocio."
            ]
        },
        {
            "g": "1er Parcial · Producción, costos y juegos",
            "title": "Tecnología dominada",
            "q": "La tecnología A usa 5 trabajadores y 3 robots; la B usa 6 trabajadores y 4 robots. ¿Cuál descarto?",
            "steps": [
                "A usa menos (o igual) de TODOS los insumos que B → A domina a B.",
                "Descarto la B antes de mirar precios."
            ]
        },
        {
            "g": "1er Parcial · Producción, costos y juegos",
            "title": "Costo total con dos insumos",
            "q": "Una tecnología usa 4 trabajadores (w=10) y 2 máquinas (r=20). ¿Cuál es el costo total?",
            "steps": [
                "CT = wL + rK.",
                "CT = 4·10 + 2·20 = 40 + 40 = 80."
            ]
        },
        {
            "g": "1er Parcial · Producción, costos y juegos",
            "title": "Renta económica",
            "q": "La opción elegida da un beneficio neto de 120; la mejor alternativa daba 90. ¿Cuál es la renta económica?",
            "steps": [
                "Renta = beneficio elegido − beneficio de la mejor alternativa.",
                "120 − 90 = 30."
            ]
        },
        {
            "g": "1er Parcial · Producción, costos y juegos",
            "title": "Consumo-ocio",
            "q": "El salario es 8 por hora, hay 24 horas disponibles y la persona toma 6 horas de ocio. ¿Cuál es su consumo?",
            "steps": [
                "Trabaja 24 − 6 = 18 horas.",
                "Consumo = 8 · 18 = 144."
            ]
        },
        {
            "g": "1er Parcial · Producción, costos y juegos",
            "title": "Equilibrio de Nash",
            "q": "¿Cómo encuentro un equilibrio de Nash en una matriz de pagos?",
            "steps": [
                "Para cada jugador, marco su mejor respuesta a cada jugada del otro (por filas y por columnas).",
                "Donde coinciden las dos mejores respuestas, hay un equilibrio de Nash."
            ]
        },
        {
            "g": "1er Parcial · Producción, costos y juegos",
            "title": "Producto medio vs marginal",
            "q": "En el punto C se usan 3 horas y se producen 66 kg. ¿El PM es promedio o marginal?",
            "steps": [
                "PM = Q/L = 66/3 = 22: es un PROMEDIO.",
                "El marginal mira solo el cambio entre dos puntos (la última unidad)."
            ]
        },
        {
            "g": "2º Parcial · Empresa y mercados",
            "title": "Óptimo de la empresa (U6)",
            "q": "La demanda es P=10−Q y el costo marginal CMg=2 (sin costos fijos). Hallá Q, P y el beneficio óptimos.",
            "steps": [
                "IT=(10−Q)Q=10Q−Q² → IMg=10−2Q. Igualo a CMg: 10−2Q=2 → Q=4.",
                "P=10−4=6. Beneficio=(P−CMg)·Q=(6−2)·4=16."
            ]
        },
        {
            "g": "2º Parcial · Empresa y mercados",
            "title": "Margen de la empresa (U6)",
            "q": "Con P=6 y CMg=2, ¿cuál es el margen (Lerner)?",
            "steps": [
                "Margen=(P−CMg)/P.",
                "(6−2)/6=0,67 → 67%."
            ]
        },
        {
            "g": "2º Parcial · Empresa y mercados",
            "title": "Pérdida de eficiencia (U6)",
            "q": "Con demanda P=10−Q y CMg=2: ¿cuánto vale la pérdida de eficiencia del monopolio?",
            "steps": [
                "Lo eficiente es P=CMg=2 → Q=8. El monopolio produce Q=4.",
                "Pérdida = triángulo ½·(6−2)·(8−4) = 8."
            ]
        },
        {
            "g": "2º Parcial · Empresa y mercados",
            "title": "Equilibrio competitivo (U7)",
            "q": "La demanda es Qd=12−P y la oferta Qs=2P. Hallá el precio y la cantidad de equilibrio.",
            "steps": [
                "Qd=Qs → 12−P=2P → 3P=12 → P=4.",
                "Q=2·4=8."
            ]
        },
        {
            "g": "2º Parcial · Empresa y mercados",
            "title": "Excedente del consumidor (U7)",
            "q": "Con la demanda Qd=12−P (corta el eje de precios en 12), P*=4 y Q*=8: ¿cuál es el excedente del consumidor?",
            "steps": [
                "Es el triángulo entre la demanda y el precio.",
                "EC = ½·(12−4)·8 = 32."
            ]
        },
        {
            "g": "2º Parcial · Empresa y mercados",
            "title": "Renta del empleo (U8)",
            "q": "Un trabajador consigue 100 afuera, la desutilidad del esfuerzo equivale a 20 y la empresa le paga 160. ¿Cuál es su renta del empleo?",
            "steps": [
                "Renta = salario − reserva − costo del esfuerzo.",
                "160 − 100 − 20 = 40 (lo que pierde si lo echan)."
            ]
        },
        {
            "g": "2º Parcial · Empresa y mercados",
            "title": "Cambia el seguro de paro (U8)",
            "q": "Si el seguro de paro sube y la reserva pasa de 100 a 130 (salario 160, esfuerzo 20), ¿qué pasa con la renta y qué hace la empresa?",
            "steps": [
                "Nueva renta = 160 − 130 − 20 = 10: cae, la amenaza de despido pierde fuerza.",
                "La empresa sube el salario (salario de eficiencia más alto) para recomponer la disciplina."
            ]
        },
        {
            "g": "2º Parcial · Empresa y mercados",
            "title": "Efecto de un impuesto (U7)",
            "q": "¿Qué pasa con la cantidad y la eficiencia si se pone un impuesto en un mercado competitivo?",
            "steps": [
                "Baja la cantidad transada y aparece una pérdida de eficiencia (deadweight loss).",
                "La incidencia recae más en el lado más inelástico del mercado."
            ]
        }
    ],
    "checklist": [
        "Sé calcular IMg y encontrar Q* con IMg = CMg (U6)",
        "Sé sacar el margen y relacionarlo con la elasticidad (U6)",
        "Entiendo por qué el poder de mercado genera pérdida de eficiencia (U6)",
        "Resuelvo un equilibrio competitivo y calculo excedentes (U7)",
        "Sé el efecto de impuestos, techos y pisos de precios (U7)",
        "Distingo desplazar la curva de moverse sobre la curva (U7)",
        "Calculo la renta del empleo y entiendo el salario de eficiencia (U8)",
        "Puedo explicar por qué hay desempleo en el equilibrio (U8)"
    ]
};

export default data;
