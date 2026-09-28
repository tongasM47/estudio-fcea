// Material del 1er semestre 2026 (versión anterior del sitio), convertido a datos.
// Formato: ver README (notes, flashcards, questions, exercises, checklist).
const data = {
    "notes": [
        {
            "id": "n-a-mapa",
            "title": "Mapa",
            "part": "General",
            "html": "<h3>Cómo encaro la materia</h3>\n<p>AYGO es <b>conceptual</b>: se gana reconociendo a qué autor o modelo pertenece cada idea. El 1er parcial es la organización y el <b>proceso administrativo</b> (planificar, organizar, dirigir, controlar); el 2º baja a las <b>áreas funcionales</b> de la empresa y a cómo se <b>crea y crece</b> una empresa.</p>\n<table>\n<tr><th>Parcial</th><th>Módulos</th><th>De qué va</th></tr>\n<tr><td><b>P1</b></td><td>I y II</td><td>Organizaciones y administradores · Proceso administrativo (planificación, organización, dirección, control)</td></tr>\n<tr><td><b>P2</b></td><td>III y IV</td><td>Gerencias funcionales (comercial, producción, finanzas, RRHH, tecnología) · Creación y crecimiento de empresas</td></tr>\n</table>\n<div class=\"key\"><span class=\"tag\">★ Regla de oro</span> Antes de responder me pregunto: <b>¿de qué autor es esto?</b> (Mintzberg, Robbins, Maslow…). La mitad de los puntos es ubicar bien el modelo.</div>"
        },
        {
            "id": "n-a-p1a",
            "title": "P1 · Organizaciones y administradores",
            "part": "P1",
            "html": "<h3>1er Parcial · Organizaciones y administradores (Módulo I)</h3>\n<h4>¿De qué se trata esta materia?</h4>\n<p>AYGO estudia <b>cómo funcionan las organizaciones y cómo se las administra</b>. Vivimos rodeados de ellas: la facultad, un club, un supermercado, el Estado. Administrar bien es lo que hace que una organización <b>logre sus objetivos sin desperdiciar recursos</b>. Es una materia sobre todo <b>conceptual</b>: se aprueba entendiendo las ideas y, clave, sabiendo <b>a qué autor pertenece cada una</b> (porque muchas preguntas son justamente \"¿de quién es este modelo?\").</p>\n<h4>¿Qué es una organización? (definición de la cátedra)</h4>\n<p>La definición que usa el curso es la de <b>Robbins (1990)</b>: una organización es <b>\"una entidad social coordinada de forma consciente, con un límite relativamente identificable, que funciona sobre bases relativamente continuas para lograr un objetivo o conjunto de objetivos comunes\"</b>. De ahí se desprende que toda organización es un <b>sistema</b> (elementos relacionados entre sí y con el entorno), es una <b>entidad social</b> (personas), está <b>coordinada conscientemente</b>, tiene <b>límites identificables</b> (se sabe quién está adentro y quién no), tiene <b>carácter permanente</b> (voluntad de permanencia) y persigue <b>objetivos</b> ligados a su misión y visión.</p>\n<h4>Los 4 elementos de una organización (esquema de Jorge Xavier)</h4>\n<p>El profesor Xavier desarma toda organización en <b>cuatro elementos</b>. Sabérselos ordena media materia:</p>\n<p><b>1) Entidad social (la Gente).</b> Cada persona ocupa un lugar con un <b>status</b> (la posición, que trae derechos y obligaciones) y cumple un <b>rol</b> (el comportamiento que se espera de ella). La gente forma <b>grupos</b>: <b>formales</b> (definidos por la estructura, con tareas asignadas) e <b>informales</b> (surgen solos por afinidad — los cinco que almuerzan juntos). Y todo eso está bañado por la <b>cultura organizacional</b>: los valores, tradiciones y \"formas de hacer las cosas acá\" que comparten los miembros (Robbins &amp; Coulter). La cultura es una <b>percepción</b>, es <b>descriptiva</b> y es <b>compartida</b>.</p>\n<p><b>2) Estructura deliberada.</b> Acá va una igualdad que la cátedra remarca: <b>Estructura real = Estructura Formal + Estructura Informal</b>. La formal es cómo se divide el trabajo y se coordina; tiene <b>tres dimensiones</b>: <b>formalización</b> (cuán definidos están los procesos), <b>centralización</b> (cuán concentrada está la autoridad) y <b>complejidad</b> (cuán difíciles y especializadas son las actividades).</p>\n<p><b>3) Finalidad definida.</b> El para qué, según su <b>misión</b> (\"¿por qué existimos?\", la razón de ser) y su <b>visión</b> (\"¿hacia dónde vamos?\"). Cuidado con otra distinción que cae: <b>objetivos formales</b> (los declarados en estatutos e informes) vs. <b>objetivos reales</b> (los que de hecho persigue). En las empresas el fin es el <b>lucro</b>; en las sin fines de lucro, satisfacer a un grupo social. Ejemplos del curso para contrastar: la misión/visión de <b>CONAPROLE</b> (con fines de lucro) vs. la del <b>Movimiento Tacurú</b> (sin fines de lucro).</p>\n<p><b>4) Recursos usados según tecnologías.</b> Toda organización transforma <b>insumos</b> (personal, tecnología, capital, equipo, materiales, información) en <b>bienes o servicios</b> mediante un <b>proceso de transformación</b> (Administración de Operaciones).</p>\n<div class=\"eli\"><span class=\"tag\">ELI5</span> Una organización = gente (con su lugar y su cultura) + una estructura (formal e informal) + un para qué (misión/visión) + recursos que se transforman en algo. Una <b>empresa</b> es la organización que hace todo eso buscando <b>lucro</b>: toda empresa es organización, pero no toda organización es empresa (un club o una ONG, no).</div>\n<h4>Mecanicista vs. orgánica (Burns y Stalker)</h4>\n<p>Según cómo sea su estructura, una organización tiende a uno de dos modelos, y cuál conviene <b>depende del entorno</b>. La <b>mecanicista</b> es rígida y controlada (alta especialización, cadena de mando clara, centralización, mucha formalización); busca la <b>eficiencia</b> y sirve para entornos <b>estables</b> y producción masiva. La <b>orgánica</b> es flexible y adaptable (equipos interfuncionales, info que fluye, descentralización, poca formalización); sirve para entornos de <b>incertidumbre</b>. Las <b>variables de contingencia</b> que definen cuál usar son <b>estrategia, ambiente, tecnología y personas</b> (Woodward sumó que la tecnología pesa: producción por unidades/procesos → orgánica; masiva → mecanicista).</p>\n<h4>Productividad, eficiencia, eficacia, efectividad y sostenibilidad</h4>\n<p>La cátedra encadena <b>cinco</b> conceptos (no solo dos). <b>Productividad</b> es la capacidad de producir, medida por unidad de factor (ej.: una hectárea que rinde 8 toneladas de arroz). <b>Eficiencia</b> (Drucker) es <b>\"hacer bien las cosas\"</b>: la mejor relación entre recursos y resultados — tiene que ver con el <b>cómo</b> (producir a $1,5 en vez de $2). <b>Eficacia</b> es <b>\"hacer las cosas correctas\"</b>: las que conducen a los objetivos — tiene que ver con el <b>qué</b>. <b>Efectividad</b> es <b>\"hacer bien las cosas correctas\"</b> = eficiente <b>y</b> eficaz a la vez. Y la cátedra suma la <b>sostenibilidad</b>: la capacidad del sistema de mantenerse en el tiempo afrontando restricciones ecológicas y presiones socioeconómicas (sus tres aspectos: medio ambiente, diversidad cultural y derechos humanos; marcos: los Objetivos de Desarrollo del Milenio de la ONU y el Pacto Mundial de RSC).</p>\n<table>\n<tr><th>Concepto</th><th>Idea</th><th>Pregunta</th></tr>\n<tr><td>Eficiencia (Drucker)</td><td>Hacer bien las cosas — mejor uso de recursos</td><td>¿el <b>cómo</b>?</td></tr>\n<tr><td>Eficacia</td><td>Hacer las cosas correctas — lograr el objetivo</td><td>¿el <b>qué</b>?</td></tr>\n<tr><td>Efectividad</td><td>Hacer bien las cosas correctas</td><td>eficiente <b>+</b> eficaz</td></tr>\n<tr><td>Sostenibilidad</td><td>Mantenerse en el tiempo (ambiente, cultura, DDHH)</td><td>¿perdura?</td></tr>\n</table>\n<div class=\"eli\"><span class=\"tag\">ELI5</span> Eficaz = llegaste a destino. Eficiente = llegaste sin gastar nafta de más. Efectivo = las dos. Sostenible = podés seguir haciéndolo años sin fundirte ni fundir el planeta.</div>\n<h4>Clasificación de organizaciones (las taxonomías)</h4>\n<p>La cátedra llama <b>taxonomías</b> a las clasificaciones, y aclara algo clave: cada una toma <b>una sola característica</b> (la más destacada). Son <b>seis</b>, y varias tienen autor o norma con nombre y apellido — eso es justo lo que preguntan:</p>\n<table>\n<tr><th>Criterio</th><th>Categorías</th><th>Autor / norma</th></tr>\n<tr><td>Deseo de lucro</td><td>Con fines de lucro / Sin fines de lucro</td><td>— (ej.: Salus vs. Teletón)</td></tr>\n<tr><td>Beneficiarios principales</td><td>Miembros / Propietarios / Clientes / Población</td><td><b>Blau y Scott</b></td></tr>\n<tr><td>Propiedad</td><td>Privada / Pública / Mixta</td><td>— (Pública: UTE, ANTEL. Mixta: Cementos del Plata)</td></tr>\n<tr><td>Forma de adhesión (control)</td><td>Coercitiva / Normativa / Utilitaria</td><td><b>Etzioni</b></td></tr>\n<tr><td>Origen de los productos</td><td>Sector Primario / Secundario / Terciario</td><td>—</td></tr>\n<tr><td>Dimensión (tamaño)</td><td>Micro / Pequeña / Mediana / Grande</td><td><b>Decreto 504/007</b> (Uruguay)</td></tr>\n</table>\n<p>Las dos que más caen con autor: <b>Etzioni</b> clasifica por cómo se logra la obediencia — <b>coercitiva</b> (cárceles, servicio militar), <b>normativa</b> (clubes, partidos, iglesias) y <b>utilitaria</b> (empresas, que mueven con incentivos económicos). Y <b>Blau y Scott</b> por quién es el beneficiario principal: los <b>miembros</b> (cooperativas, sindicatos), los <b>propietarios</b> (sociedades comerciales), los <b>clientes</b> (hospitales, universidades) o la <b>población</b> (organismos militares, salud pública). La de <b>dimensión</b> es uruguaya y muy concreta: el <b>Decreto 504/007</b> mide personal ocupado y facturación (Micro ≤4 personas; Pequeña ≤19; Mediana ≤99; Grande supera esos límites), y el organismo competente es <b>DINAPYME</b> (MIEM).</p>\n<div class=\"trap\"><span class=\"tag\">Ojo con la trampa</span> <b>Etzioni = adhesión/control</b> (coercitiva/normativa/utilitaria); <b>Blau y Scott = beneficiarios</b> (miembros/propietarios/clientes/población). Son las dos que se confunden.</div>\n<h4>El entorno: nada vive aislado</h4>\n<p>Ninguna organización existe sola: es <b>un subsistema social inserto en su medio</b> (Cúneo). El <b>medio ambiente externo</b> son \"todas las fuerzas e instituciones que pueden influir en su desempeño\" (Daft), y se divide en dos (Robbins &amp; Coulter):</p>\n<table>\n<tr><th>Entorno</th><th>Qué es</th><th>Componentes</th></tr>\n<tr><td><b>Específico / directo</b></td><td>Fuerzas con efecto <b>directo e inmediato</b> en las decisiones; es único de cada organización y cambia</td><td>Clientes, proveedores, gobierno, medios, sindicatos, grupos de presión, competidores · (internos: empleados, accionistas)</td></tr>\n<tr><td><b>General / indirecto</b></td><td>Fuerzas amplias que afectan el \"clima\" y tienen potencial de volverse acción directa</td><td>Variables sociales, políticas, económicas y tecnológicas</td></tr>\n</table>\n<p>Dentro de las <b>variables sociales</b> el curso enfatiza las <b>generaciones</b> (hoy conviven hasta cuatro en una empresa: baby boomers, X, Y/millennials, Z) y en las <b>tecnológicas</b>, la <b>disrupción digital</b> (todo se vuelve \"ceros y unos\"). La <b>incertidumbre ambiental</b> (Robbins &amp; Coulter) combina dos factores: el <b>grado de cambio</b> (estable ↔ dinámico) y el <b>grado de complejidad</b> (cuántos componentes hay y cuánto los conozco). Y para mirar el entorno indirecto se usa la <b>visión periférica</b> (Day y Schoemaker): detectar las <b>señales débiles</b> de la \"periferia\" antes de que sea tarde.</p>\n<h4>Administración y administradores: qué es y los autores clave</h4>\n<p>La <b>Administración</b>, en la definición que el curso prioriza (<b>Robbins &amp; Coulter</b>), es <b>\"la coordinación y supervisión de las actividades laborales de otras personas, de tal manera que se realicen de forma eficiente y eficaz\"</b>. Administrar = cumplir las <b>4 funciones</b>: planificar, organizar, dirigir y controlar. Un <b>gerente</b> es quien las lleva adelante asignando recursos humanos, materiales, financieros y de información para alcanzar las metas; el detalle que da carácter de gerente es que <b>su éxito se mide por cómo se desempeñan quienes él dirige</b>.</p>\n<p><b>Tipos de gerente</b> (Robbins &amp; Coulter): por nivel, de <b>primera línea/operativos</b> (encargado, supervisor, capataz), de <b>nivel medio</b> y de <b>alto nivel</b>; por ámbito, <b>generales</b> (toda la operación) y <b>funcionales</b> (una sola función: producción, ventas, finanzas, RRHH).</p>\n<p><b>Katz (1955)</b> dice que un gerente necesita <b>3 habilidades</b>: <b>técnicas</b> (saber hacer la tarea — pesan más en la <b>primera línea</b>), <b>humanas</b> (trabajar con personas — las necesitan <b>todos</b> por igual) y <b>conceptuales</b> (ver el panorama y diseñar soluciones — pesan más en la <b>alta dirección</b>).</p>\n<p><b>Mintzberg</b> observó qué hacen <i>de verdad</i> los gerentes y lo resumió en <b>10 roles</b> en 3 categorías: <b>interpersonales</b> (representación, liderazgo, enlace), <b>informativos</b> (monitor/vigilancia, difusión, portavoz) y <b>decisorios</b> (emprendedor, gestor de conflictos, asignador de recursos, negociador).</p>\n<p>Y los <b>clásicos</b> que fundaron la disciplina, en orden histórico: <b>Taylor</b> (\"padre de la administración científica\", 4 principios, tiempos y movimientos), <b>Fayol</b> (la Escuela Clásica: definió el <b>proceso administrativo</b> y sus <b>14 principios</b>), <b>Weber</b> (la <b>burocracia</b>: distingue autoridad <b>tradicional, carismática y legal/racional</b>) y <b>Mayo</b> (experimentos de <b>Hawthorne</b> → la Escuela de <b>Relaciones Humanas</b>: el factor humano importa tanto como la tarea). Después vienen los <b>comportamentales</b> (Maslow en adelante), la <b>Neoclásica</b> (Drucker) y la <b>estrategia</b> (Porter).</p>\n<div class=\"key\"><span class=\"tag\">Dato fino de la cátedra</span> Según <b>Bunge</b>, la administración es una <b>técnica científica</b>: usa el método científico pero <b>no es una ciencia</b> (no busca conocimiento desinteresado, busca controlar/ser útil). Para <b>Koontz</b>, la práctica es un <b>arte</b> y el conocimiento que la sostiene es <b>ciencia</b>: son complementarios.</div>\n<table>\n<tr><th>Autor</th><th>Lo que tenés que asociarle</th></tr>\n<tr><td>Katz</td><td>3 habilidades: técnicas, humanas y conceptuales</td></tr>\n<tr><td>Mintzberg</td><td>10 roles (interpersonales, informativos, decisorios)</td></tr>\n<tr><td>Taylor</td><td>Administración científica (eficiencia en la tarea)</td></tr>\n<tr><td>Fayol</td><td>Proceso administrativo y principios</td></tr>\n<tr><td>Weber</td><td>Burocracia (autoridad y reglas)</td></tr>\n<tr><td>Mayo</td><td>Relaciones humanas (el factor humano)</td></tr>\n</table>\n<div class=\"trap\"><span class=\"tag\">Ojo con la trampa</span> No mezcles los autores: Katz = <b>habilidades</b>; Mintzberg = <b>roles</b>; Taylor/Fayol/Weber/Mayo = las escuelas clásicas. Es lo que más se confunde.</div>"
        },
        {
            "id": "n-a-p1b",
            "title": "P1 · Planificación y organización",
            "part": "P1",
            "html": "<h3>1er Parcial · Planificación y organización (Módulo II, parte 1)</h3>\n<div class=\"idea\">✓ <b>Idea madre:</b> el proceso administrativo es <b>Planificar → Organizar → Dirigir → Controlar</b>. Son las 4 cosas que hace un gerente, en orden. Acá van las dos primeras.</div>\n<h4>Planificación</h4>\n<p><b>Planificar</b> es la primera función: definir <b>a dónde quiero llegar</b> (los objetivos) y <b>cómo</b> (los planes). Antes de actuar, la organización mira para adentro y para afuera con el <b>FODA</b>: Fortalezas y Debilidades (que son <b>internas</b>, dependen de ella) y Oportunidades y Amenazas (que son <b>externas</b>, vienen del entorno) — está en el cuadro de abajo. De ese análisis salen la <b>misión</b> (la razón de ser: qué hace, para quién y cómo), los <b>objetivos</b> (que, según Robbins, tienen que ser concretos: específicos, medibles y con plazo) y los distintos <b>tipos de planes</b> según su alcance y duración.</p>\n<table>\n<tr><th>Herramienta</th><th>Qué es</th></tr>\n<tr><td>FODA</td><td>Fortalezas y Debilidades (internas) · Oportunidades y Amenazas (externas)</td></tr>\n<tr><td>Misión</td><td>Razón de ser de la organización (qué hace, para quién, cómo)</td></tr>\n<tr><td>Objetivos (Robbins)</td><td>Bien redactados: específicos, medibles, con plazo</td></tr>\n<tr><td>Tipos de planes</td><td>Estratégicos/operativos, corto/largo plazo, específicos/direccionales, únicos/permanentes</td></tr>\n</table>\n<div style=\"text-align:center;margin:16px 0\">\n<svg style=\"max-width:340px;width:100%\" viewbox=\"0 0 360 205\" xmlns=\"http://www.w3.org/2000/svg\">\n<text fill=\"#36d399\" font-size=\"11\" text-anchor=\"middle\" x=\"125\" y=\"26\">Ayudan (+)</text>\n<text fill=\"#ff6b6b\" font-size=\"11\" text-anchor=\"middle\" x=\"253\" y=\"26\">Perjudican (−)</text>\n<text fill=\"#aab4c8\" font-size=\"10\" text-anchor=\"middle\" transform=\"rotate(-90 30 76)\" x=\"30\" y=\"76\">Internas</text>\n<text fill=\"#aab4c8\" font-size=\"10\" text-anchor=\"middle\" transform=\"rotate(-90 30 152)\" x=\"30\" y=\"152\">Externas</text>\n<rect fill=\"rgba(54,211,153,.12)\" height=\"74\" stroke=\"#36d399\" stroke-width=\"1.5\" width=\"126\" x=\"62\" y=\"38\"></rect>\n<rect fill=\"rgba(255,107,107,.10)\" height=\"74\" stroke=\"#ff6b6b\" stroke-width=\"1.5\" width=\"126\" x=\"190\" y=\"38\"></rect>\n<rect fill=\"rgba(54,211,153,.08)\" height=\"74\" stroke=\"#36d399\" stroke-width=\"1.5\" width=\"126\" x=\"62\" y=\"114\"></rect>\n<rect fill=\"rgba(255,107,107,.08)\" height=\"74\" stroke=\"#ff6b6b\" stroke-width=\"1.5\" width=\"126\" x=\"190\" y=\"114\"></rect>\n<text fill=\"#e8ecf5\" font-size=\"13\" font-weight=\"bold\" text-anchor=\"middle\" x=\"125\" y=\"72\">Fortalezas</text>\n<text fill=\"#7a8499\" font-size=\"10\" text-anchor=\"middle\" x=\"125\" y=\"90\">(F)</text>\n<text fill=\"#e8ecf5\" font-size=\"13\" font-weight=\"bold\" text-anchor=\"middle\" x=\"253\" y=\"72\">Debilidades</text>\n<text fill=\"#7a8499\" font-size=\"10\" text-anchor=\"middle\" x=\"253\" y=\"90\">(D)</text>\n<text fill=\"#e8ecf5\" font-size=\"13\" font-weight=\"bold\" text-anchor=\"middle\" x=\"125\" y=\"148\">Oportunidades</text>\n<text fill=\"#7a8499\" font-size=\"10\" text-anchor=\"middle\" x=\"125\" y=\"166\">(O)</text>\n<text fill=\"#e8ecf5\" font-size=\"13\" font-weight=\"bold\" text-anchor=\"middle\" x=\"253\" y=\"148\">Amenazas</text>\n<text fill=\"#7a8499\" font-size=\"10\" text-anchor=\"middle\" x=\"253\" y=\"166\">(A)</text>\n</svg>\n<div style=\"color:#7a8499;font-size:.8rem\">Matriz FODA: Fortalezas y Debilidades son <b>internas</b> (de la empresa); Oportunidades y Amenazas son <b>externas</b> (del entorno).</div>\n</div>\n<p>Pero el FODA no se queda en el cuadro: la cátedra (Gallardo) lo usa como <b>matriz de doble entrada</b> que cruza lo interno con lo externo y genera <b>4 estrategias</b>. La <b>FO (maxi-maxi)</b> usa fortalezas para aprovechar oportunidades (la más exitosa); la <b>DO (mini-maxi)</b> supera debilidades para aprovechar oportunidades; la <b>FA (maxi-mini)</b> usa fortalezas para enfrentar amenazas; y la <b>DA (mini-mini)</b> reduce debilidades y evita amenazas.</p>\n<p>Antes de planificar, el administrador tiene una <b>actitud</b> frente al futuro (Gallardo): el <b>inactivo</b> no planea, el <b>reactivo</b> repite soluciones del pasado, el <b>preactivo</b> proyecta el futuro desde el pasado y el <b>interactivo (proactivo)</b> se adelanta y <b>diseña el futuro</b> — es el ideal. Y los <b>objetivos</b> bien hechos (Robbins &amp; Coulter) van en términos de <b>resultados</b> (no acciones), son <b>medibles</b>, con <b>plazo</b>, <b>desafiantes pero logrables</b>, <b>por escrito</b> y <b>comunicados</b>.</p>\n<h4>Tipos de planes y herramientas</h4>\n<p>Hay una <b>regla mnemotécnica</b> del curso para clasificar planes según a qué refieren: <b>dinero → Presupuestos</b>, <b>tiempos → Programas</b>, <b>métodos → Procedimientos</b>, <b>comportamientos → Reglamentos</b>. Y Robbins los clasifica por <b>alcance</b> (estratégicos/operativos), <b>marco temporal</b> (largo/corto plazo), <b>especificidad</b> (direccionales/específicos) y <b>frecuencia de uso</b> (un solo uso/permanentes). Para ordenar la ejecución en el tiempo se usan el <b>Gráfico de Gantt</b> (actividades vs. tiempo) y el <b>PERT / camino crítico</b> (red que marca holguras y la ruta que no admite demoras). Y para controlar la estrategia, el <b>Cuadro de Mando Integral (Balanced Scorecard</b>, Kaplan y Norton) con sus <b>4 perspectivas</b>: financiera, del cliente, de procesos internos, y de aprendizaje y crecimiento.</p>\n<table>\n<tr><th>Plan</th><th>Refiere a…</th><th>Frecuencia</th></tr>\n<tr><td>Presupuesto</td><td>Dinero (expresión numérica del plan)</td><td>—</td></tr>\n<tr><td>Programa</td><td>Tiempos / secuencia</td><td>Una vez</td></tr>\n<tr><td>Procedimiento</td><td>Métodos (instrucciones detalladas)</td><td>Recurrente</td></tr>\n<tr><td>Política</td><td>Guía para decidir</td><td>Permanente</td></tr>\n<tr><td>Reglamento</td><td>Comportamientos (categórico)</td><td>Recurrente</td></tr>\n</table>\n<h4>Organización (estructura)</h4>\n<p><b>Organizar</b> es la segunda función. Stoner lo resume en <b>3 pasos</b>: <b>dividir el trabajo</b>, <b>departamentalizar</b> (agrupar) y <b>coordinar</b>. Para entender la estructura por dentro, la cátedra (Pini) encadena cuatro conceptos: una <b>función</b> es un grupo de actividades homogéneas; un <b>órgano</b> es la parte especializada que las realiza (gerencia, departamento, sección); las <b>tareas</b> de una persona definen un <b>puesto</b>; y los puestos con las mismas tareas forman un <b>cargo</b>. Regla fina: los <b>puestos</b> son el aspecto <b>cuantitativo</b> (cuántas personas), los <b>cargos</b> el <b>cualitativo</b> (qué se hace). Ejemplo del curso: la Oficina de Compras es un <b>órgano</b> con 3 cargos (Jefe, Auxiliar, Dactilógrafo) y 4 puestos (porque hay 2 Auxiliares).</p>\n<p>Esa estructura se dibuja en el <b>organigrama</b>, y la <b>departamentalización</b> puede ser por <b>función</b>, <b>producto</b>, <b>geografía</b>, <b>cliente</b>, <b>proceso</b> o <b>matricial</b> (esta última rompe la unidad de mando: tenés <b>dos jefes</b>). El <b>tramo de control</b> (cuántos subordinados por jefe) define la forma: tramos <b>reducidos</b> → muchos niveles (estructura <b>empinada</b>); tramos <b>amplios</b> → pocos niveles (estructura <b>achatada</b>).</p>\n<p><b>Mintzberg</b> dice que toda organización tiene <b>5 partes</b>: la <b>cumbre/ápice estratégico</b> (la cúpula que decide), la <b>línea media</b> (los mandos que conectan la cúpula con el piso), el <b>núcleo operativo</b> (los que hacen el trabajo real — \"el corazón\"), la <b>tecnoestructura</b> (analistas que estandarizan y planifican el trabajo de los demás) y el <b>staff de apoyo</b> (servicios fuera del flujo central, como legal o cafetería).</p>\n<p>Y la gente se coordina con <b>5 mecanismos</b> (Mintzberg los llama \"el adhesivo de la estructura\"). A medida que la organización se complejiza, se pasa de uno al siguiente: <b>1) ajuste mutuo</b> (dos pares se coordinan hablando, informal); <b>2) supervisión directa</b> (un jefe da las órdenes y controla); <b>3) estandarización de procesos</b> (se especifica <i>cómo</i> hacer la tarea, para trabajos simples y rutinarios); <b>4) estandarización de resultados</b> (se especifica el <i>producto</i> y el operario elige el método); <b>5) estandarización de calificaciones</b> (se especifica la <i>formación</i> del que ejecuta, adquirida afuera — universidades). Y cuando todo se vuelve <b>muy</b> complejo, se vuelve al <b>ajuste mutuo</b>.</p>\n<p>Por último, <b>Burns y Stalker</b> distinguen dos tipos de estructura según el entorno: la <b>mecanicista</b> (rígida, jerárquica, con reglas claras — ideal para entornos <b>estables</b>) y la <b>orgánica</b> (flexible, con poca jerarquía y mucha comunicación — ideal para entornos <b>cambiantes</b>).</p>\n<div class=\"eli\"><span class=\"tag\">ELI5</span> Pensá la organización como un equipo de fútbol. El <b>organigrama</b> es la alineación en la pizarra; la <b>departamentalización</b> es agrupar por puestos (defensores, mediocampistas, delanteros); las <b>5 partes de Mintzberg</b> son DT (ápice), ayudantes de campo (línea media), jugadores (núcleo operativo), preparador físico (tecnoestructura) y utilero/médico (staff). Si el rival juega siempre igual, te alcanza un esquema fijo (<b>mecanicista</b>); si cambia todo el tiempo, necesitás un equipo que se reacomode solo (<b>orgánica</b>).</div>\n<table>\n<tr><th>Concepto</th><th>Clave</th></tr>\n<tr><td>Órganos / cargos / puestos (Pini)</td><td>Órgano = parte especializada · Cargo = qué se hace (cualitativo) · Puesto = cuántas personas (cuantitativo)</td></tr>\n<tr><td>Departamentalización</td><td>Funcional, por producto, geográfica, por cliente, por proceso, matricial (doble mando)</td></tr>\n<tr><td>Tramo de control</td><td>Reducido → estructura empinada (+niveles) · Amplio → achatada (−niveles)</td></tr>\n<tr><td>Mintzberg · 5 partes</td><td>Ápice estratégico, línea media, núcleo operativo, tecnoestructura, staff de apoyo</td></tr>\n<tr><td>Mintzberg · 5 mecanismos</td><td>Ajuste mutuo, supervisión directa, estandarización de procesos / de resultados / de calificaciones</td></tr>\n<tr><td>Burns &amp; Stalker</td><td>Estructura mecanicista (estable) vs orgánica (flexible)</td></tr>\n</table>"
        },
        {
            "id": "n-a-p1c",
            "title": "P1 · Dirección y control",
            "part": "P1",
            "html": "<h3>1er Parcial · Dirección y control (Módulo II, parte 2)</h3>\n<div class=\"idea\">✓ <b>Idea madre:</b> ya planifiqué y organicé; ahora tengo que hacer que la gente trabaje (<b>dirigir</b>) y verificar que las cosas salgan como las planeé (<b>controlar</b>). Dirigir se apoya en dos patas: <b>liderazgo</b> y <b>motivación</b>.</div>\n<h4>Dirección: liderazgo</h4>\n<p><b>Dirigir</b> es influir en las personas para que pongan su esfuerzo en los objetivos. Acá aparece la diferencia clásica: el <b>gerente</b> tiene autoridad porque ocupa el cargo, mientras que el <b>líder</b> consigue que lo sigan por su capacidad de movilizar e inspirar (los mejores son las dos cosas a la vez). Sobre cómo liderar, hay dos modelos que tenés que distinguir bien. <b>Blake y Mouton</b> arman una <b>grilla</b> de dos ejes —cuánto te importan las <b>personas</b> y cuánto la <b>producción</b>— y de ahí salen 5 estilos, siendo el ideal el (9,9), el líder de <b>equipo</b> que cuida ambas cosas al máximo. <b>Hersey y Blanchard</b>, en cambio, dicen que <b>no hay un estilo ideal fijo</b>: el estilo correcto <b>depende de la madurez del seguidor</b> (de cuánto sabe y quiere). Con alguien nuevo conviene <b>decir</b> (dar instrucciones); a medida que madura, pasás a <b>vender</b>, después a <b>participar</b> y finalmente a <b>delegar</b>.</p>\n<p>La cátedra ordena los enfoques de liderazgo como una <b>evolución</b>: primero las <b>teorías de los rasgos</b> (\"el líder nace\", el Gran Hombre), después las <b>conductuales</b> (qué <b>hace</b> el líder — ahí entran Blake &amp; Mouton y la idea clave de que <b>el liderazgo se aprende</b>), luego las <b>situacionales</b> (Hersey &amp; Blanchard) y finalmente, ya para el siglo XXI, el modelo de <b>Bass</b>: distingue el líder <b>transaccional</b> (conduce con recompensas y castigos) del <b>transformacional</b>, que es el más adecuado para el <b>cambio y la innovación</b> y se define por <b>4 \"íes\"</b>: <b>Influencia idealizada, Motivación inspiradora, Estimulación intelectual y Consideración individualizada</b>.</p>\n<table>\n<tr><th>Modelo</th><th>Idea</th></tr>\n<tr><td>Líder vs gerente</td><td>El gerente administra por el cargo (poder de posición); el líder influye por su poder personal y mira el cambio</td></tr>\n<tr><td>Blake &amp; Mouton (Grid 9×9)</td><td>Cruza interés por personas y por producción → 5 estilos (ideal: 9,9 equipo)</td></tr>\n<tr><td>Hersey &amp; Blanchard (situacional)</td><td>El estilo depende de la madurez del seguidor (R1–R4: decir, vender, participar, delegar)</td></tr>\n<tr><td>Bass (transformacional)</td><td>Transaccional (recompensas) vs transformacional (las 4 íes) → para el cambio</td></tr>\n</table>\n<h4>Dirección: motivación</h4>\n<p>Liderar no alcanza si la gente no tiene ganas: la otra pata es la <b>motivación</b>, eso que empuja a una persona a esforzarse. El modelo más famoso es la <b>pirámide de Maslow</b>: las necesidades humanas se ordenan en niveles y se van cubriendo <b>de abajo hacia arriba</b>. Primero las <b>fisiológicas</b> (comer, dormir), después la <b>seguridad</b> (un trabajo estable), las <b>sociales</b> (pertenecer, tener compañeros), la <b>estima</b> (que me reconozcan) y arriba de todo la <b>autorrealización</b> (desarrollar mi potencial). La idea clave: un nivel <b>solo motiva si los de abajo ya están cubiertos</b> — de nada sirve ofrecerle un premio al orgullo a alguien que no llega a fin de mes. <b>McClelland</b> agrega otra mirada: tenemos 3 necesidades <b>aprendidas</b> —de <b>logro</b> (superarse), de <b>poder</b> (influir en otros) y de <b>afiliación</b> (caer bien y tener vínculos)— y cada persona tiene una predominante.</p>\n<p>La cátedra separa las teorías de motivación en dos familias. Las <b>de contenido</b> (con <b>qué</b> se motiva): Maslow, McClelland y sobre todo <b>Herzberg</b>, con su <b>teoría de los dos factores</b>. Herzberg distingue los <b>motivadores</b> o intrínsecos (logro, reconocimiento, responsabilidad → generan <b>satisfacción</b>) de los <b>factores de higiene</b> o extrínsecos (salario, supervisión, condiciones → solo evitan la <b>insatisfacción</b>). La conclusión que más cae: <b>el salario no motiva</b>, solo evita que la gente esté disconforme; lo opuesto de la satisfacción no es la insatisfacción sino la <b>ausencia de satisfacción</b>. Las <b>de proceso</b> (<b>cómo</b> opera la motivación): la <b>teoría de las metas</b> de Locke (metas específicas y difíciles motivan más) y la <b>teoría de las expectativas de Vroom</b> (mi esfuerzo depende de tres relaciones encadenadas: esfuerzo→desempeño, desempeño→recompensa, recompensa→mis metas personales).</p>\n<table>\n<tr><th>Autor</th><th>Modelo</th></tr>\n<tr><td>Maslow (contenido)</td><td>Jerarquía: fisiológicas → seguridad → sociales → estima → autorrealización</td></tr>\n<tr><td>Herzberg (contenido)</td><td>2 factores: motivadores (satisfacción) vs higiene (el salario no motiva)</td></tr>\n<tr><td>McClelland (contenido)</td><td>3 necesidades aprendidas: logro, poder y afiliación</td></tr>\n<tr><td>Vroom (proceso)</td><td>Expectativas: esfuerzo→desempeño→recompensa→metas personales</td></tr>\n</table>\n<div style=\"text-align:center;margin:16px 0\">\n<svg style=\"max-width:340px;width:100%\" viewbox=\"0 0 360 215\" xmlns=\"http://www.w3.org/2000/svg\">\n<polygon fill=\"none\" points=\"180,18 42,198 318,198\" stroke=\"#6c8cff\" stroke-width=\"2\"></polygon>\n<line stroke=\"#7a8499\" stroke-width=\"1\" x1=\"152\" x2=\"208\" y1=\"54\" y2=\"54\"></line>\n<line stroke=\"#7a8499\" stroke-width=\"1\" x1=\"124\" x2=\"236\" y1=\"91\" y2=\"91\"></line>\n<line stroke=\"#7a8499\" stroke-width=\"1\" x1=\"96\" x2=\"264\" y1=\"127\" y2=\"127\"></line>\n<line stroke=\"#7a8499\" stroke-width=\"1\" x1=\"68\" x2=\"292\" y1=\"163\" y2=\"163\"></line>\n<text fill=\"#ffc24b\" font-size=\"11\" text-anchor=\"middle\" x=\"180\" y=\"44\">Autorrealización</text>\n<text fill=\"#aab4c8\" font-size=\"11\" text-anchor=\"middle\" x=\"180\" y=\"77\">Estima</text>\n<text fill=\"#aab4c8\" font-size=\"11\" text-anchor=\"middle\" x=\"180\" y=\"113\">Sociales</text>\n<text fill=\"#aab4c8\" font-size=\"11\" text-anchor=\"middle\" x=\"180\" y=\"149\">Seguridad</text>\n<text fill=\"#36d399\" font-size=\"11\" text-anchor=\"middle\" x=\"180\" y=\"185\">Fisiológicas</text>\n</svg>\n<div style=\"color:#7a8499;font-size:.8rem\">Pirámide de Maslow: se suben los niveles de a uno. Hasta que no están cubiertas las de abajo, las de arriba no motivan.</div>\n</div>\n<h4>Control</h4>\n<p><b>Controlar</b> (Griffin: \"la regulación de las actividades de modo que el desempeño se mantenga dentro de límites aceptables\", como el <b>timón de un barco</b>) es la última función y cierra el círculo. La cátedra da <b>4 razones</b> para controlar: adaptarse a los <b>cambios del entorno</b>, limitar la <b>acumulación de errores</b>, hacer frente a la <b>complejidad</b> de la organización y <b>minimizar costos</b>. Tiene <b>4 etapas</b> en orden: <b>fijar estándares</b> (la meta medible) → <b>medir</b> el desempeño real (\"si no puedo medir, no puedo gestionar\") → <b>comparar</b> con el estándar (definiendo una <b>zona de variación aceptable</b>) → <b>acción correctiva</b>, que puede ser de tres tipos: mantener el status quo, corregir la desviación, o <b>cambiar el estándar</b>. Esto <b>reconecta con la planificación</b>: por eso el proceso administrativo es un <b>ciclo</b>.</p>\n<p>Según <b>cuándo</b> se controla (Robbins), hay <b>3 momentos</b>: <b>preventivo/preliminar</b> (antes, sobre los insumos — anticipa el problema, ej. la selección de personal), <b>concurrente</b> (durante, en tiempo real — busca \"cero defecto\") y <b>posterior/de retroalimentación</b> (después, sobre los resultados). Y según el <b>nivel</b>, hay una pirámide: control de <b>operaciones</b> y <b>financiero</b> en la base, <b>estructural</b> en el medio y <b>estratégico</b> en la cima (su herramienta es el <b>Balanced Scorecard</b>).</p>\n<div class=\"eli\"><span class=\"tag\">ELI5</span> Controlar es como manejar mirando el velocímetro. El <b>estándar</b> es la velocidad máxima (90), <b>medir</b> es mirar la aguja, <b>comparar</b> es ver si vas a 110, y la <b>acción correctiva</b> es soltar el acelerador. El control <b>preventivo</b> es revisar los frenos antes de salir; el <b>concurrente</b> es mirar el tablero mientras manejás; el <b>posterior</b> es ver la multa que te llegó.</div>\n<div class=\"trap\"><span class=\"tag\">Ojo con la trampa</span> No confundas los modelos de liderazgo: Blake &amp; Mouton es una <b>grilla</b> (dos ejes: personas vs producción), Hersey &amp; Blanchard es <b>situacional</b> (depende de la madurez del seguidor). Y ojo con Maslow: el orden es fisiológicas → seguridad → sociales → estima → autorrealización, y se sube <b>de a uno</b>.</div>"
        },
        {
            "id": "n-a-p2a",
            "title": "P2 · Gerencias funcionales",
            "part": "P2",
            "html": "<h3>2º Parcial · Gerencias funcionales (Módulo III)</h3>\n<div class=\"idea\">✓ <b>Idea madre:</b> la empresa se organiza en <b>áreas funcionales</b>, cada una con su gerencia. Tengo que saber qué hace cada una y cómo se conectan.</div>\n<p>Hasta acá vimos administración \"en general\". Ahora bajamos a la empresa concreta: por dentro se divide en <b>áreas funcionales</b>, cada una con su gerencia y su propia planificación estratégica. La idea de fondo del Módulo III es la <b>interdependencia</b>: ninguna decide sola (Producción elige tecnología junto con Finanzas; Comercial define el producto que Producción luego diseña). Son cinco, y la cátedra apoya cada una en autores concretos.</p>\n<h4>Comercial / Marketing (Kotler)</h4>\n<p>El autor central es <b>Kotler</b>, que define marketing como <b>\"el proceso por el cual las empresas crean valor para sus clientes y construyen relaciones para captar a cambio valor de ellos\"</b>. Ojo: el objetivo no es \"vender y hacer publicidad\", es <b>lograr clientes satisfechos</b>. Sigue un <b>proceso de 5 pasos</b> (entender el mercado → diseñar la estrategia → armar el programa/4P → crear relaciones y deleite → captar valor). La estrategia se decide en 4 movidas: <b>segmentación → mercado meta → diferenciación → posicionamiento</b> (la posición es el lugar que ocupás en la mente del consumidor). Y el programa son las <b>4 P</b> (concepto de <b>McCarthy</b>): <b>Producto</b> (con sus 3 niveles —básico, real, aumentado— y su <b>ciclo de vida</b>: introducción, crecimiento, madurez, decadencia), <b>Precio</b> (techo = valor percibido, piso = costos; estrategias por valor, por costo o por competencia), <b>Plaza</b> (canales directos/indirectos, distribución intensiva/selectiva/exclusiva) y <b>Promoción</b> (mezcla de 5: publicidad, promoción de ventas, ventas personales, relaciones públicas y marketing directo).</p>\n<h4>Producción / Operaciones (enfoque en procesos)</h4>\n<p>La cátedra usa el <b>\"enfoque en procesos\"</b> (no separa bienes de servicios): producción es el <b>sistema de transformación</b> que convierte insumos en productos. Distingue <b>eficacia</b> (absoluta: se logra o no el objetivo), <b>eficiencia</b> (relativa: relación costo-resultado) y <b>productividad</b> (lograr la eficacia con cierta eficiencia). Concepto estrella: la <b>cadena de valor de Porter</b> (cada proceso agrega valor hasta el cliente). El diseño del proceso productivo tiene <b>6 etapas</b> e incluye definir <b>tecnología, capacidad y layout</b> (distribución de planta). Tipos de producción: por proceso (lineal, convergente, en lotes, unitario) y por flujo (continua, intermitente, por proyecto). Temas asociados: <b>outsourcing</b>, <b>calidad total</b> y normas <b>UNIT-ISO</b> (UNIT certifica en Uruguay), <b>capacidad ociosa</b> e <b>innovación</b> (Manual de Oslo). Ejemplo del curso: el <b>Antel Arena</b> (capacidad de diseño 10.000 / máxima 15.000).</p>\n<h4>Finanzas (Van Horne, Pascale)</h4>\n<p>Toda la gestión financiera (Van Horne) se reduce a <b>dos tipos de decisión</b>: de <b>inversión</b> (en qué pongo los fondos) y de <b>financiamiento</b> (de dónde los saco). El <b>Estado de Situación Financiera</b> es el \"mapa\": el <b>activo</b> muestra en qué invirtió la empresa; el <b>pasivo + patrimonio</b>, cómo lo financió. Conceptos clave: <b>flujo de caja</b> (se decide por cuándo se cobra/paga, no cuándo se gana), <b>valor tiempo del dinero</b> (Pascale: 3 razones, la inflación es solo una más), <b>riesgo</b> (variabilidad de los rendimientos) y la regla de que a mayor riesgo se exige mayor rendimiento (se baja <b>diversificando</b>). Para comparar inversiones: período de repago, <b>TIR</b> y <b>valor presente</b>. Fuentes de financiamiento uruguayas: aportes de capital, utilidades no distribuidas, crédito de proveedores, <b>factoring</b>, crédito bancario, <b>leasing</b>, ANII. Análisis con <b>ratios</b> (liquidez, solvencia, rentabilidad, rotación) y el <b>punto de equilibrio</b> (donde no se gana ni se pierde, separando costos fijos de variables).</p>\n<h4>Recursos Humanos (Ulrich, Chiavenato, Robbins)</h4>\n<p>La frase emblema: <b>\"nuestra gente es nuestro activo más importante\"</b> — el personal como <b>socio</b>, no como costo. La gestión es <b>contingente</b> (Chiavenato: depende de la situación) y es <b>responsabilidad de línea y función de staff</b>. <b>Ulrich</b> define <b>4 roles</b> de RRHH (socio estratégico, experto administrativo, adalid de los empleados, agente de cambio) y <b>8 desafíos</b>. Y hay <b>3 grandes procesos</b> (Robbins-Coulter): <b>planeación</b> (de la que salen la <b>descripción de cargo</b> —las tareas— y la <b>especificación de cargo</b> —las calificaciones mínimas—), <b>orientación</b> (inducción + capacitación) y <b>gestión del desempeño</b>. El reclutamiento atrae candidatos; la <b>selección</b> es un \"ejercicio de predicción\" y todo instrumento debe tener <b>validez</b> y <b>confiabilidad</b>. Métodos de evaluación: incidentes críticos, escala gráfica, APO y <b>360 grados</b>; y ojo con los <b>5 problemas de Dessler</b> (criterios poco claros, efecto <b>halo</b>, tendencia central, condescendencia/severidad, preferencias/sesgos).</p>\n<h4>Tecnología y Sistemas de Información (Reix, Chiavenato)</h4>\n<p>Estamos en la <b>era de la información</b> (Chiavenato: la 4ª era, donde el recurso clave es el <b>conocimiento</b>). Un <b>sistema de información</b> (Reix) es el conjunto de recursos —hardware, software, personas, datos, procesos— que permite adquirir, tratar, almacenar y comunicar información. Distinción base: el <b>dato</b> es la pieza suelta; la <b>información</b> es el dato con <b>significado</b>. Los sistemas aplicativos se clasifican en <b>operacionales</b> (mucho dato, poco proceso: nómina, facturación), <b>técnicos</b>, <b>gerenciales o estratégicos</b> (apoyan decisiones: <b>MIS</b>) y <b>en red</b>. La herramienta estrella es el <b>ERP</b> (Enterprise Resource Planning): integra toda la empresa en <b>una sola base de datos</b>; sus requisitos son flexibilidad, modularidad, seguridad e integración. Modelos en red: <b>CRM</b> (gestión de la relación con clientes), e-SCM, e-business y comercio electrónico (B2B, B2C, C2C).</p>\n<table>\n<tr><th>Gerencia</th><th>Autor de la cátedra</th><th>Conceptos clave</th></tr>\n<tr><td>Comercial / Marketing</td><td>Kotler · 4P de McCarthy</td><td>Proceso de 5 pasos · segmentación/meta/posicionamiento · 4P · ciclo de vida del producto</td></tr>\n<tr><td>Producción / Operaciones</td><td>Enfoque en procesos · Porter</td><td>Transformación insumos→productos · eficacia/eficiencia/productividad · cadena de valor · UNIT-ISO</td></tr>\n<tr><td>Finanzas</td><td>Van Horne · Pascale</td><td>Inversión vs financiamiento · valor tiempo del dinero · TIR/VP · ratios · punto de equilibrio</td></tr>\n<tr><td>Recursos Humanos</td><td>Ulrich · Chiavenato · Robbins</td><td>4 roles de Ulrich · descripción/especificación de cargo · selección (validez/confiabilidad) · 360° · sesgos de Dessler</td></tr>\n<tr><td>Tecnología y SI</td><td>Reix · Chiavenato</td><td>Era de la información · dato vs información · tipos de SI (MIS) · ERP · CRM/e-business</td></tr>\n</table>\n<div class=\"key\"><span class=\"tag\">Cómo se conecta con P1</span> Cada gerencia aplica el mismo proceso administrativo (planifica, organiza, dirige, controla) pero en su área, y todas dependen entre sí (interdependencia).</div>"
        },
        {
            "id": "n-a-p2b",
            "title": "P2 · Creación y crecimiento",
            "part": "P2",
            "html": "<h3>2º Parcial · Creación y crecimiento de empresas (Módulo IV)</h3>\n<div class=\"idea\">✓ <b>Idea madre:</b> cómo nace una empresa (el emprendedor detecta una oportunidad y la pone en marcha) y cómo crece con el tiempo.</div>\n<h4>Creación de empresas</h4>\n<p>Arranca con una pregunta provocadora de la cátedra (Martínez): <b>¿el objetivo de la empresa es la rentabilidad?</b> La respuesta del curso es <b>NO</b>: la empresa existe para <b>crear valor y satisfacer necesidades de la sociedad</b>; la rentabilidad llega <b>como consecuencia</b>. La que no agrega valor lo destruye y el mercado la desplaza. El <b>valor lo fija subjetivamente el consumidor</b> (no el producto), poniéndole un precio que el cliente acepta pagando.</p>\n<p>El proceso de creación tiene <b>5 etapas</b> (Comas-Ginesta): identificar oportunidades → desarrollar la idea → desarrollar la oferta → armar el plan de negocio → poner en marcha. La distinción clave es <b>idea ≠ oportunidad</b>: la idea es cualquier ocurrencia; la oportunidad es la que <b>crea más valor que los competidores</b>. Las ideas se generan con técnicas creativas (<b>brainstorming</b>, SCAMPER) y se analizan con herramientas como el <b>Método Walt Disney</b> (soñador-realista-crítico) o los <b>6 sombreros de De Bono</b>; y se validan con el <b>FODA</b> (Debilidades/Fortalezas internas, sobre las que influyo; Oportunidades/Amenazas externas, que solo conozco). El <b>plan de negocios</b> tiene dos partes: un <b>plan estratégico</b> (análisis del mercado, tipo de emprendimiento, producto, localización) y <b>4 planes operativos</b> (de Marketing, de Operaciones, de RRHH y Financiero —este último con proyección de resultados, balance y flujo de caja, y el punto de equilibrio).</p>\n<p>El protagonista es el <b>emprendedor</b>. En la PYME se juntan en una persona el <b>gestor, el propietario y el trabajador</b>. Su éxito se apoya en un <b>\"triángulo\": saber</b> (conocimientos), <b>querer</b> (actitud/voluntad) y <b>poder</b> (recursos). Ojo con la diferencia <b>emprendedor vs. administrador</b>: el emprendedor está orientado a las <b>oportunidades</b> (usa recursos que no posee, estructura horizontal); el administrador, a los <b>recursos</b> (los posee, jerarquía formal) — el ejemplo del curso es Steve Jobs vs. Sculley en Apple. <b>McClelland</b> identificó las <b>Características Emprendedoras Personales (CEP)</b>. Para financiarse, además de recursos propios y de allegados, hay <b>capital de riesgo</b>: <b>semilla</b> (inicio), <b>de arranque</b> (ya iniciada) y <b>de expansión</b>, más <b>inversores ángeles</b>, <b>crowdfunding</b> e instituciones como <b>ANII</b>.</p>\n<h4>Formas jurídicas en Uruguay</h4>\n<p>Tema bien uruguayo y muy preguntable. La clave es <b>cuánto responde el dueño</b> con su patrimonio: la <b>Empresa Unipersonal</b> y la <b>Sociedad de Hecho</b> tienen responsabilidad <b>ilimitada</b>; la <b>S.A.</b> (capital en acciones) y la <b>S.R.L.</b> tienen responsabilidad <b>limitada</b>. La <b>S.R.L. es la más usada en Uruguay</b>: mezcla lo personal (los socios gestionan, el capital no está en acciones, transferir cuotas necesita aprobación) con lo de capital (responsabilidad limitada). La forma más nueva es la <b>SAS</b> (Ley 19.820, 2019). Y hay figuras especiales: las <b>Cooperativas</b> (Ley 18.407, ej. CONAPROLE) y el <b>Fideicomiso</b> (Ley 17.703: el fideicomitente transfiere bienes al fiduciario para que los administre en beneficio del beneficiario; sirve de garantía o financiamiento).</p>\n<h4>Crecimiento de empresas</h4>\n<p>Una vez en marcha, la empresa atraviesa un <b>ciclo de vida</b>, y la cátedra usa el modelo de <b>Greiner</b>: la empresa crece por <b>etapas</b> y cada una termina en una <b>crisis</b> que hay que resolver para pasar a la siguiente (por eso <b>cada etapa pide otra forma de gestionarla</b>: lo que sirve con 3 personas no sirve con 300). Para crecer hay <b>formas</b>: <b>interna u orgánica</b> (ampliar capacidad propia), <b>externa</b> (fusiones y adquisiciones —F&amp;A—, o <b>alianzas</b> y franquicias). Y hay <b>direcciones</b>: <b>integración vertical</b> (controlar etapas de la cadena, p. ej. comprar a tu proveedor), <b>integración horizontal</b> (sumar competidores del mismo rubro) o <b>diversificación</b>.</p>\n<p>La herramienta estrella es la <b>matriz de Ansoff</b>, que cruza <b>productos</b> (actuales/nuevos) con <b>mercados</b> (actuales/nuevos) y da <b>4 estrategias</b>: <b>penetración de mercado</b> (mismo producto, mismo mercado: vender más a los que ya tengo), <b>desarrollo de mercado</b> (mismo producto, mercado nuevo), <b>desarrollo de producto</b> (producto nuevo, mismo mercado) y <b>diversificación</b> (producto nuevo + mercado nuevo, la más arriesgada).</p>\n<table>\n<tr><th>Matriz de Ansoff</th><th>Mercado actual</th><th>Mercado nuevo</th></tr>\n<tr><td><b>Producto actual</b></td><td>Penetración de mercado</td><td>Desarrollo de mercado</td></tr>\n<tr><td><b>Producto nuevo</b></td><td>Desarrollo de producto</td><td>Diversificación</td></tr>\n</table>\n<div class=\"trap\"><span class=\"tag\">Ojo con la trampa</span> El objetivo de la empresa <b>no</b> es la rentabilidad (es crear valor; la rentabilidad es consecuencia). La <b>S.R.L.</b> es la forma más usada en Uruguay (no la S.A.). Y en la matriz de Ansoff, <b>diversificación</b> = producto nuevo + mercado nuevo (las dos cosas a la vez).</div>"
        },
        {
            "id": "n-a-aut",
            "title": "Autores clave",
            "part": "General",
            "html": "<h3>Autores clave — el chuletario para ubicar cada modelo</h3>\n<table>\n<tr><th>Autor</th><th>Se lo asocia con…</th></tr>\n<tr><td>Taylor</td><td>Administración científica (eficiencia en la tarea)</td></tr>\n<tr><td>Fayol</td><td>Proceso administrativo y principios</td></tr>\n<tr><td>Weber</td><td>Burocracia</td></tr>\n<tr><td>Mayo</td><td>Relaciones humanas</td></tr>\n<tr><td>Katz</td><td>3 habilidades gerenciales (técnica, humana, conceptual)</td></tr>\n<tr><td>Mintzberg</td><td>10 roles del gerente · 5 partes de la organización · mecanismos de coordinación</td></tr>\n<tr><td>Robbins &amp; Coulter</td><td>Eficiencia/eficacia, objetivos, planes, cultura</td></tr>\n<tr><td>Burns &amp; Stalker</td><td>Estructura mecanicista vs orgánica</td></tr>\n<tr><td>Blake &amp; Mouton</td><td>Grid gerencial (liderazgo)</td></tr>\n<tr><td>Hersey &amp; Blanchard</td><td>Liderazgo situacional</td></tr>\n<tr><td>Maslow · Herzberg · Vroom</td><td>Motivación: jerarquía de necesidades · 2 factores · expectativas</td></tr>\n<tr><td>McClelland</td><td>Necesidades de logro, poder y afiliación · CEP del emprendedor</td></tr>\n<tr><td>Bass</td><td>Liderazgo transaccional vs transformacional (4 íes)</td></tr>\n<tr><td>Etzioni · Blau y Scott</td><td>Clasificación de organizaciones: por adhesión/control · por beneficiarios</td></tr>\n<tr><td>Pini</td><td>Órganos, cargos y puestos</td></tr>\n<tr><td>Kotler · McCarthy</td><td>P2 Comercial: proceso de marketing · las 4 P</td></tr>\n<tr><td>Porter</td><td>P2 Producción: cadena de valor</td></tr>\n<tr><td>Van Horne · Pascale</td><td>P2 Finanzas: inversión/financiamiento · valor tiempo del dinero</td></tr>\n<tr><td>Ulrich</td><td>P2 RRHH: 4 roles y 8 desafíos</td></tr>\n<tr><td>Reix</td><td>P2 Tecnología: definición de sistema de información</td></tr>\n<tr><td>Ansoff</td><td>P2 Crecimiento: matriz producto/mercado (4 estrategias)</td></tr>\n<tr><td>Greiner</td><td>P2 Crecimiento: etapas de crecimiento y sus crisis</td></tr>\n</table>"
        },
        {
            "id": "n-a-rec",
            "title": "Recetas de examen",
            "part": "General",
            "html": "<h3>Recetas de examen — tipos de ejercicio (revisiones 2022–2026)</h3>\n<p class=\"tagline\">Saqué esto de las revisiones reales de los últimos años. Primero el formato, después qué cae siempre y la receta por tipo: cómo lo reconozco → cómo se responde → la trampa.</p>\n<div class=\"key\"><span class=\"tag\">★ Formato del examen (los dos parciales)</span> <b>No es múltiple opción ni V/F.</b> Es <b>desarrollo a partir de UN caso</b> (una empresa descrita en párrafos numerados) + un bloque <b>\"SE PIDE\"</b> con 7 a 12 preguntas, cada una con su <b>puntaje</b> y su <b>etiqueta de tema</b>. Casi todas dicen <b>\"justifique con el texto\"</b>: responder con pura teoría, sin anclar al caso, <b>no suma</b>. Truco habitual: meten una frase textual de un personaje y la pregunta gira sobre esa frase exacta.</div>\n<div class=\"key\"><span class=\"tag\">★ Regla de oro</span> Cada respuesta = <b>concepto/autor + cita o dato del texto que lo prueba</b>. La cátedra puntúa la justificación anclada al caso, no la teoría suelta.</div>\n<h4>1er Parcial · lo que SIEMPRE cae</h4>\n<table>\n<tr><th>Tema</th><th>Frecuencia</th><th>Estrella</th></tr>\n<tr><td>Dirección / Liderazgo</td><td>5/5</td><td><b>Grid de Blake y Mouton</b> (4 de 5 años) · Hersey-Blanchard · McClelland</td></tr>\n<tr><td>Control (4 etapas)</td><td>5/5</td><td>Las 4 etapas aplicadas a un dato del caso</td></tr>\n<tr><td>Organización</td><td>5/5</td><td>Dibujar/corregir organigrama + departamentalización</td></tr>\n<tr><td>Medio Ambiente</td><td>5/5</td><td>Factores directo/indirecto, interno/externo · visión periférica</td></tr>\n<tr><td>Administradores</td><td>4/5</td><td>Katz, Mintzberg, escuelas clásicas (Taylor/Fayol/Mayo/Weber)</td></tr>\n<tr><td>Planificación</td><td>4/5</td><td>FODA, redacción de objetivos, misión/visión</td></tr>\n</table>\n<h4>1er Parcial · recetas por tipo</h4>\n<table>\n<tr><th>Tipo · cómo lo reconozco</th><th>Cómo se resuelve</th><th>Trampa</th></tr>\n<tr><td><b>Grid de Blake y Mouton</b> — \"¿qué estilo de liderazgo aplica X?\"</td><td>Ubicar al personaje en los 2 ejes (interés por personas / por producción) y nombrar el estilo: (1,1) pobre, (1,9) club, (9,1) autoritario, (5,5) medio, <b>(9,9) equipo/ideal</b>. Citar la frase que prueba cada eje.</td><td>Quedarse en un solo eje. Si cuida clima Y resultados es 9,9, no club social.</td></tr>\n<tr><td><b>Hersey y Blanchard (situacional)</b> — compara dos subordinados</td><td>Según la <b>madurez del subordinado</b>: E1 dirigir, E2 persuadir, E3 participar, E4 delegar. Equipo experto → delegar; gente nueva → dirigir.</td><td>El estilo depende del SUBORDINADO, no del jefe. No confundir con Blake-Mouton.</td></tr>\n<tr><td><b>Proceso de control (4 etapas)</b> — te dan un estándar y un valor real</td><td>Desarrollar con los números del caso: 1) fijar estándar, 2) medir, 3) comparar/desvío, 4) acción correctiva. A veces piden el tipo: tiempo real = <b>concurrente</b>.</td><td>Quedarse en teoría sin los números. Confundir estándar (planeado) con medición (real).</td></tr>\n<tr><td><b>Organigrama</b> — \"dibuje\" o \"encuentre los errores\" + departamentalización</td><td>Respetar quién reporta a quién; <b>staff/asesoría con línea punteada</b> al costado. Criterios: funcional, geográfico, por producto, por cliente, por proceso.</td><td>Poner una asesoría como línea de mando. Confundir autoridad funcional con dependencia jerárquica.</td></tr>\n<tr><td><b>Medio Ambiente</b> — identificar y clasificar factores</td><td><b>Directo</b> = clientes, proveedores, competidores, reguladores, sindicatos. <b>Indirecto</b> = económico, político, social, tecnológico. <b>Interno</b> = empleados, cultura. Citar el texto.</td><td>La inflación/tipo de cambio es <b>indirecto</b> aunque \"afecte mucho\". Decir el factor sin clasificarlo.</td></tr>\n<tr><td><b>Katz / Mintzberg</b> — habilidades o roles de un personaje</td><td>Katz por nivel: alta dirección = conceptual, base = técnica, todos = humana. Mintzberg: mapear frases a roles (representa la empresa = enlace; media conflictos = gestor de conflictos; aprueba presupuesto = asignador de recursos).</td><td>Dar habilidad técnica a un gerente general (le toca conceptual). Nombrar el rol sin la frase que lo prueba.</td></tr>\n<tr><td><b>Escuelas clásicas</b> — \"¿a qué autor corresponde cada medida?\"</td><td><b>Taylor</b> = tiempos, eficiencia, premio por productividad individual. <b>Fayol</b> = principios (unidad de mando). <b>Mayo</b> = clima, metas grupales. <b>Weber</b> = burocracia, criterios objetivos, comunicación escrita.</td><td>\"Premios por metas GRUPALES\" es Mayo, no Taylor. \"Comunicación por escrito\" es Weber.</td></tr>\n<tr><td><b>FODA / objetivos cruzados</b> — matriz o \"¿es FO/DO/FA/DA?\"</td><td>F y D = internas; O y A = externas. FO ofensiva, DO adaptación, <b>FA defensiva</b>, DA supervivencia. (Ej.: enfrentar la crisis hídrica —amenaza— con buen mantenimiento —fortaleza— = FA.)</td><td>Poner una fortaleza interna en oportunidad. Confundir FA con DA: si lo que enfrenta la amenaza es una fortaleza, es FA.</td></tr>\n<tr><td><b>Redacción de objetivos</b> — \"proponga / evalúe un objetivo\"</td><td>Debe ser <b>específico, medible, alcanzable, con plazo y responsable</b>. \"Validar 3 de 5 procedimientos para marzo 2024\" (bien) vs. \"terminar el testeo pronto\" (mal).</td><td>Objetivo sin plazo ni métrica. No decir qué característica falla.</td></tr>\n<tr><td><b>Clasificación de organizaciones</b></td><td>Propiedad (privada/pública/mixta; cooperativa = de socios), adhesión, origen de productos, beneficiarios (Blau-Scott), rentabilidad (lucro / sin lucro).</td><td>En una cooperativa el beneficiario son los <b>socios</b> (mutualista), no es empresa de lucro común.</td></tr>\n</table>\n<h4>2º Parcial · lo que SIEMPRE cae</h4>\n<table>\n<tr><th>Tema</th><th>Frecuencia</th><th>Estrella</th></tr>\n<tr><td>Finanzas</td><td>4/4</td><td><b>Punto de equilibrio (cálculo)</b> · razón corriente e índice de solvencia · flujo de caja</td></tr>\n<tr><td>Comercialización</td><td>4/4</td><td>Mezcla comercial (4 P) · clasificación de productos · estrategias de precio</td></tr>\n<tr><td>Producción</td><td>4/4</td><td>Enfoques (costo/calidad/cliente) · capacidad · layout</td></tr>\n<tr><td>Crecimiento</td><td>4/4</td><td><b>Ansoff</b> (dirección) + forma (interno/externo)</td></tr>\n<tr><td>RRHH</td><td>4/4</td><td>Los 3 procesos · inducción · descripción/perfil de cargo · índice de rotación</td></tr>\n<tr><td>Informática</td><td>4/4</td><td>Etapas de implementación · requisitos y riesgos de TICs · ERP</td></tr>\n</table>\n<h4>2º Parcial · recetas por tipo</h4>\n<table>\n<tr><th>Tipo · cómo lo reconozco</th><th>Cómo se resuelve</th><th>Trampa</th></tr>\n<tr><td><b>Punto de equilibrio</b> (el cálculo estrella) — \"calcule el PE, muestre el desarrollo\"</td><td><b>PE = Costos Fijos / (Precio unitario − Costo Variable unitario)</b>. Clasificar bien cada costo en fijo/variable y unificar períodos. Comparar con las ventas reales.</td><td>Clasificar mal los costos (la amortización es FIJA). No mostrar el desarrollo (lo piden). No mensualizar/anualizar parejo.</td></tr>\n<tr><td><b>Razón corriente e índice de solvencia</b></td><td><b>Razón corriente = Activo Corriente / Pasivo Corriente</b> (liquidez corto plazo, &gt;1 ok). <b>Solvencia = Activo total / Pasivo total</b> (&gt;1 sano). Interpretar la evolución.</td><td>Invertir el cociente (pasivo/activo). Confundir liquidez (corto plazo) con solvencia (total).</td></tr>\n<tr><td><b>Flujo de caja / decisión financiera</b></td><td>Flujo = saldo inicial + ingresos − egresos, arrastrando el saldo mes a mes. Decisiones: inversión, financiamiento, distribución.</td><td>Las obligaciones negociables son <b>financiamiento para el emisor</b> pero <b>inversión para el comprador</b> — ojo la perspectiva.</td></tr>\n<tr><td><b>Mezcla comercial (4 P)</b></td><td><b>Producto</b> (qué/marca/calidad), <b>Precio</b>, <b>Plaza</b> (canales), <b>Promoción</b> (publicidad). Pegar cada P a una frase del texto.</td><td>Listar las 4 P en abstracto. Confundir Plaza (canal) con Promoción.</td></tr>\n<tr><td><b>Clasificación de productos de consumo</b></td><td>Conveniencia (compra frecuente: leche, galletas), comparación, especialidad (lealtad), no buscados. Justificar con el hábito de compra.</td><td>Confundirla con la clasificación <b>técnica/de diseño</b> (estandarizado vs a pedido), que es otra pregunta.</td></tr>\n<tr><td><b>Estrategias de precio</b></td><td><b>Penetración</b> = precio bajo por volumen/participación. <b>Descremado</b> = precio alto al inicio. <b>Costo + margen (markup)</b>.</td><td>Confundir penetración (bajo) con descremado (alto).</td></tr>\n<tr><td><b>Crecimiento: Ansoff + forma</b> (suelen venir juntas)</td><td><b>Ansoff (dirección)</b>: penetración, desarrollo de mercado, desarrollo de producto, diversificación (nuevo+nuevo). <b>Forma</b>: interno (recursos propios) vs externo (fusión/adquisición).</td><td>Mezclar dirección con forma (son dos preguntas). Llamar \"diversificación\" a un mero desarrollo de producto.</td></tr>\n<tr><td><b>Producción</b> — enfoques / capacidad / layout / diseño</td><td>Enfoques: costo, calidad, cliente. Capacidad: cuánto puede producir. Layout: distribución de planta. Diseño técnico: en serie vs a medida.</td><td>Confundir clasificación por consumo con clasificación técnica. Mezclar capacidad con enfoque.</td></tr>\n<tr><td><b>RRHH</b> — 3 procesos / inducción / cargo / rotación</td><td><b>3 procesos</b>: provisión (reclutar+seleccionar), desarrollo (capacitar), mantenimiento. <b>Descripción de cargo</b> = tareas; <b>perfil</b> = requisitos de la persona. <b>Rotación</b> = renuncias/plantilla.</td><td>Creer que \"mostrar el escritorio\" es inducción completa (falta socialización: misión/visión/valores). Confundir descripción (puesto) con perfil (persona).</td></tr>\n<tr><td><b>Informática</b> — etapa / requisitos y riesgos / qué tecnología</td><td>Etapas: relevamiento → diseño → desarrollo → <b>testeo</b> → implementación. Requisitos: confiable, oportuno, íntegro, seguro. Si hay papeleo sin base única → recomendar <b>ERP</b>.</td><td>Dar requisitos sin riesgos cuando piden ambos. Errar la etapa (lo que recién se \"plantea\" está en relevamiento, no en testeo).</td></tr>\n<tr><td><b>Creación / emprendedor</b> — fuente de la idea / perfil / financiamiento</td><td>Fuente de la idea: necesidad del mercado, experiencia previa, hobby. Perfil: creatividad, orientación al mercado, tolerancia al riesgo. Financiamiento: ahorros, <b>ANDE</b>, FFF (familia/amigos).</td><td>Decir la fuente sin descartar las otras cuando lo piden. Enumerar el perfil sin anclar a frases del fundador.</td></tr>\n</table>"
        },
        {
            "id": "n-a-trap",
            "title": "Trampas",
            "part": "General",
            "html": "<h3>Trampas típicas</h3>\n<div class=\"trap\"><span class=\"tag\">P1</span> Eficiencia (medios) ≠ eficacia (fines). Una empresa puede ser eficaz pero ineficiente.</div>\n<div class=\"trap\"><span class=\"tag\">P1</span> No mezcles autores: Katz = habilidades; Mintzberg = roles y partes; Maslow = necesidades; McClelland = logro/poder/afiliación.</div>\n<div class=\"trap\"><span class=\"tag\">P1</span> Blake &amp; Mouton es grilla de dos ejes; Hersey &amp; Blanchard es situacional (depende del seguidor).</div>\n<div class=\"trap\"><span class=\"tag\">P2</span> Cada gerencia aplica el proceso administrativo en su área; no son compartimentos aislados (interdependencia).</div>\n<div class=\"trap\"><span class=\"tag\">P2</span> Idea ≠ oportunidad. Y el objetivo de la empresa <b>no</b> es la rentabilidad: es crear valor (la rentabilidad es consecuencia).</div>\n<div class=\"trap\"><span class=\"tag\">P2</span> La <b>S.R.L.</b> es la forma jurídica más usada en Uruguay (no la S.A.). Unipersonal y Soc. de Hecho = responsabilidad ilimitada.</div>\n<div class=\"trap\"><span class=\"tag\">P2</span> Matriz de Ansoff: <b>diversificación</b> = producto nuevo <b>y</b> mercado nuevo. Las 4P son de McCarthy; el proceso de marketing, de Kotler.</div>"
        }
    ],
    "flashcards": [
        {
            "g": "Tarjetas del apunte",
            "q": "Eficiencia vs eficacia",
            "a": "Eficiencia = usar bien los recursos (medios). Eficacia = lograr el objetivo (fines)."
        },
        {
            "g": "Tarjetas del apunte",
            "q": "Las 3 habilidades de Katz",
            "a": "Técnicas, humanas y conceptuales. Las conceptuales pesan más en los niveles altos."
        },
        {
            "g": "Tarjetas del apunte",
            "q": "5 partes de la organización (Mintzberg)",
            "a": "Ápice estratégico, línea media, núcleo operativo, tecnoestructura y staff de apoyo."
        },
        {
            "g": "Tarjetas del apunte",
            "q": "Pirámide de Maslow",
            "a": "Fisiológicas → seguridad → sociales → estima → autorrealización."
        },
        {
            "g": "Tarjetas del apunte",
            "q": "Las 4 P del marketing",
            "a": "Producto, Precio, Plaza y Promoción (marketing mix)."
        },
        {
            "g": "Tarjetas del apunte",
            "q": "Idea vs oportunidad",
            "a": "No toda idea es una oportunidad de negocio viable. El emprendedor detecta oportunidades reales."
        },
        {
            "g": "Módulo I · Organizaciones y administradores",
            "q": "¿Qué es una organización?",
            "a": "Un grupo de personas con objetivos, metas, actividad y recursos."
        },
        {
            "g": "Módulo I · Organizaciones y administradores",
            "q": "¿Qué es una empresa?",
            "a": "Una organización que realiza actividad económica."
        },
        {
            "g": "Módulo I · Organizaciones y administradores",
            "q": "Eficiencia vs eficacia",
            "a": "Eficiencia = usar bien los recursos (medios). Eficacia = lograr el objetivo (fines)."
        },
        {
            "g": "Módulo I · Organizaciones y administradores",
            "q": "Entorno directo (específico)",
            "a": "Clientes, proveedores y competencia: lo que afecta de cerca."
        },
        {
            "g": "Módulo I · Organizaciones y administradores",
            "q": "Entorno indirecto (general)",
            "a": "Factores económicos, políticos, tecnológicos y sociales."
        },
        {
            "g": "Módulo I · Organizaciones y administradores",
            "q": "Cultura organizacional",
            "a": "Los valores compartidos que guían el comportamiento."
        },
        {
            "g": "Módulo I · Organizaciones y administradores",
            "q": "Las 3 habilidades de Katz",
            "a": "Técnicas, humanas y conceptuales."
        },
        {
            "g": "Módulo I · Organizaciones y administradores",
            "q": "¿Qué habilidad de Katz pesa más arriba?",
            "a": "La conceptual (en la alta dirección)."
        },
        {
            "g": "Módulo I · Organizaciones y administradores",
            "q": "Los 10 roles del gerente",
            "a": "De Mintzberg: interpersonales, informativos y decisorios."
        },
        {
            "g": "Módulo I · Organizaciones y administradores",
            "q": "Las 5 partes de la organización (Mintzberg)",
            "a": "Ápice estratégico, línea media, núcleo operativo, tecnoestructura y staff de apoyo."
        },
        {
            "g": "Módulo I · Organizaciones y administradores",
            "q": "Mecanismos de coordinación (Mintzberg)",
            "a": "Ajuste mutuo, supervisión directa y normalización (de procesos, resultados o habilidades)."
        },
        {
            "g": "Módulo I · Organizaciones y administradores",
            "q": "Taylor",
            "a": "Administración científica (eficiencia en la tarea)."
        },
        {
            "g": "Módulo I · Organizaciones y administradores",
            "q": "Fayol",
            "a": "El proceso administrativo y los principios de administración."
        },
        {
            "g": "Módulo I · Organizaciones y administradores",
            "q": "Weber",
            "a": "La burocracia (autoridad y reglas)."
        },
        {
            "g": "Módulo I · Organizaciones y administradores",
            "q": "Mayo",
            "a": "La escuela de relaciones humanas (el factor humano)."
        },
        {
            "g": "Módulo I · Organizaciones y administradores",
            "q": "Robbins y Coulter",
            "a": "Eficiencia/eficacia, objetivos, planes y cultura."
        },
        {
            "g": "Módulo I · Organizaciones y administradores",
            "q": "¿Toda organización es una empresa?",
            "a": "No: un club o una ONG son organizaciones sin fin de lucro."
        },
        {
            "g": "Módulo I · Organizaciones y administradores",
            "q": "Recursos de una organización",
            "a": "Humanos, materiales e inmateriales."
        },
        {
            "g": "Módulo I · Organizaciones y administradores",
            "q": "¿Qué hace un gerente?",
            "a": "Planifica, organiza, dirige y controla recursos para lograr objetivos."
        },
        {
            "g": "Módulo I · Organizaciones y administradores",
            "q": "Niveles gerenciales",
            "a": "Alta dirección, mandos medios y supervisión/operativo."
        },
        {
            "g": "Módulo II · El proceso administrativo",
            "q": "Las 4 funciones del proceso administrativo",
            "a": "Planificar, organizar, dirigir y controlar."
        },
        {
            "g": "Módulo II · El proceso administrativo",
            "q": "¿Qué es planificar?",
            "a": "Definir objetivos y cómo alcanzarlos."
        },
        {
            "g": "Módulo II · El proceso administrativo",
            "q": "FODA",
            "a": "Fortalezas y Debilidades (internas), Oportunidades y Amenazas (externas)."
        },
        {
            "g": "Módulo II · El proceso administrativo",
            "q": "Misión",
            "a": "La razón de ser de la organización (qué hace, para quién, cómo)."
        },
        {
            "g": "Módulo II · El proceso administrativo",
            "q": "Visión",
            "a": "A dónde quiere llegar la organización en el futuro."
        },
        {
            "g": "Módulo II · El proceso administrativo",
            "q": "Objetivos bien redactados (Robbins)",
            "a": "Específicos, medibles y con plazo."
        },
        {
            "g": "Módulo II · El proceso administrativo",
            "q": "Tipos de planes",
            "a": "Estratégicos/operativos, corto/largo plazo, específicos/direccionales, únicos/permanentes."
        },
        {
            "g": "Módulo II · El proceso administrativo",
            "q": "¿Qué es organizar?",
            "a": "Diseñar la estructura: quién hace qué y quién manda a quién."
        },
        {
            "g": "Módulo II · El proceso administrativo",
            "q": "Organigrama",
            "a": "La representación gráfica de la estructura."
        },
        {
            "g": "Módulo II · El proceso administrativo",
            "q": "Departamentalización",
            "a": "Agrupar tareas: funcional, por producto, geográfica, por cliente o por proceso."
        },
        {
            "g": "Módulo II · El proceso administrativo",
            "q": "Tramo de control",
            "a": "Cuántas personas dependen de un mismo jefe."
        },
        {
            "g": "Módulo II · El proceso administrativo",
            "q": "Centralización vs descentralización",
            "a": "Si las decisiones se toman arriba (centralizado) o repartidas (descentralizado)."
        },
        {
            "g": "Módulo II · El proceso administrativo",
            "q": "Burns y Stalker",
            "a": "Estructura mecanicista (estable, rígida) vs orgánica (flexible)."
        },
        {
            "g": "Módulo II · El proceso administrativo",
            "q": "Líder vs gerente",
            "a": "El gerente administra por el cargo; el líder influye por su capacidad."
        },
        {
            "g": "Módulo II · El proceso administrativo",
            "q": "Blake y Mouton (Grid gerencial)",
            "a": "Cruza interés por las personas y por la producción → 5 estilos (ideal 9,9)."
        },
        {
            "g": "Módulo II · El proceso administrativo",
            "q": "Hersey y Blanchard",
            "a": "Liderazgo situacional: el estilo depende de la madurez del seguidor."
        },
        {
            "g": "Módulo II · El proceso administrativo",
            "q": "Pirámide de Maslow",
            "a": "Fisiológicas, seguridad, sociales, estima y autorrealización."
        },
        {
            "g": "Módulo II · El proceso administrativo",
            "q": "McClelland",
            "a": "Tres necesidades aprendidas: logro, poder y afiliación."
        },
        {
            "g": "Módulo II · El proceso administrativo",
            "q": "¿Qué es controlar?",
            "a": "Comparar lo realizado con lo previsto y corregir los desvíos."
        },
        {
            "g": "Módulo II · El proceso administrativo",
            "q": "Etapas del control",
            "a": "Establecer estándares, medir, comparar y tomar acciones correctivas."
        },
        {
            "g": "Módulo III · Las gerencias funcionales",
            "q": "Las 5 gerencias funcionales",
            "a": "Comercial, producción, finanzas, RRHH y tecnología/sistemas de información."
        },
        {
            "g": "Módulo III · Las gerencias funcionales",
            "q": "Gerencia comercial",
            "a": "Detectar y satisfacer las necesidades del mercado (marketing)."
        },
        {
            "g": "Módulo III · Las gerencias funcionales",
            "q": "Las 4 P del marketing",
            "a": "Producto, Precio, Plaza y Promoción."
        },
        {
            "g": "Módulo III · Las gerencias funcionales",
            "q": "Segmentación",
            "a": "Dividir el mercado en grupos con necesidades parecidas."
        },
        {
            "g": "Módulo III · Las gerencias funcionales",
            "q": "Gerencia de producción",
            "a": "Transformar insumos en bienes o servicios."
        },
        {
            "g": "Módulo III · Las gerencias funcionales",
            "q": "Productividad",
            "a": "Producción por unidad de insumo."
        },
        {
            "g": "Módulo III · Las gerencias funcionales",
            "q": "Gerencia de finanzas",
            "a": "Conseguir y asignar los fondos."
        },
        {
            "g": "Módulo III · Las gerencias funcionales",
            "q": "Inversión vs financiamiento",
            "a": "En qué uso el dinero (inversión) vs de dónde lo saco (financiamiento)."
        },
        {
            "g": "Módulo III · Las gerencias funcionales",
            "q": "Rentabilidad vs liquidez",
            "a": "Cuánto gano (rentabilidad) vs tener efectivo disponible (liquidez)."
        },
        {
            "g": "Módulo III · Las gerencias funcionales",
            "q": "Gerencia de RRHH",
            "a": "Atraer, desarrollar y retener a las personas."
        },
        {
            "g": "Módulo III · Las gerencias funcionales",
            "q": "Reclutamiento vs selección",
            "a": "Atraer candidatos (reclutar) vs elegir al mejor (seleccionar)."
        },
        {
            "g": "Módulo III · Las gerencias funcionales",
            "q": "Capacitación",
            "a": "Desarrollar las competencias del personal."
        },
        {
            "g": "Módulo III · Las gerencias funcionales",
            "q": "Evaluación de desempeño",
            "a": "Medir cómo trabaja cada persona."
        },
        {
            "g": "Módulo III · Las gerencias funcionales",
            "q": "Gerencia de tecnología/SI",
            "a": "Gestionar la información y la tecnología para decidir."
        },
        {
            "g": "Módulo III · Las gerencias funcionales",
            "q": "¿Cómo se conectan las gerencias?",
            "a": "Cada una aplica el proceso administrativo (planificar, organizar, dirigir, controlar) en su área."
        },
        {
            "g": "Módulo III · Las gerencias funcionales",
            "q": "Plaza (distribución)",
            "a": "Cómo el producto llega al cliente."
        },
        {
            "g": "Módulo III · Las gerencias funcionales",
            "q": "Promoción",
            "a": "Comunicar y persuadir (publicidad, ventas)."
        },
        {
            "g": "Módulo III · Las gerencias funcionales",
            "q": "Calidad",
            "a": "Cumplir o superar lo que el cliente espera."
        },
        {
            "g": "Módulo III · Las gerencias funcionales",
            "q": "Marketing mix",
            "a": "El conjunto de las 4 P (producto, precio, plaza, promoción)."
        },
        {
            "g": "Módulo III · Las gerencias funcionales",
            "q": "Sistema de información",
            "a": "Datos organizados para la toma de decisiones."
        },
        {
            "g": "Módulo IV · Creación y crecimiento de empresas",
            "q": "¿Qué es un emprendedor?",
            "a": "Quien detecta una oportunidad, asume riesgo y combina recursos para crear valor."
        },
        {
            "g": "Módulo IV · Creación y crecimiento de empresas",
            "q": "Idea vs oportunidad",
            "a": "No toda idea es una oportunidad de negocio viable."
        },
        {
            "g": "Módulo IV · Creación y crecimiento de empresas",
            "q": "Plan de negocios",
            "a": "Documento que describe el proyecto: mercado, producto, operaciones y finanzas."
        },
        {
            "g": "Módulo IV · Creación y crecimiento de empresas",
            "q": "Ciclo de vida de la empresa",
            "a": "Nacimiento, crecimiento, madurez y declive."
        },
        {
            "g": "Módulo IV · Creación y crecimiento de empresas",
            "q": "¿Cada etapa se gestiona igual?",
            "a": "No: cada etapa pide otra estructura y otro estilo de dirección."
        },
        {
            "g": "Módulo IV · Creación y crecimiento de empresas",
            "q": "Crecimiento interno",
            "a": "Aumentar la propia capacidad (más plantas, más ventas)."
        },
        {
            "g": "Módulo IV · Creación y crecimiento de empresas",
            "q": "Crecimiento externo",
            "a": "Fusiones, adquisiciones y alianzas."
        },
        {
            "g": "Módulo IV · Creación y crecimiento de empresas",
            "q": "Integración vertical",
            "a": "Controlar etapas anteriores o posteriores de la cadena."
        },
        {
            "g": "Módulo IV · Creación y crecimiento de empresas",
            "q": "Integración horizontal",
            "a": "Unirse con competidores del mismo nivel."
        },
        {
            "g": "Módulo IV · Creación y crecimiento de empresas",
            "q": "Diversificación",
            "a": "Entrar en nuevos productos o mercados."
        },
        {
            "g": "Módulo IV · Creación y crecimiento de empresas",
            "q": "Riesgo del emprendedor",
            "a": "Asume la incertidumbre del negocio."
        },
        {
            "g": "Módulo IV · Creación y crecimiento de empresas",
            "q": "Estudio de mercado",
            "a": "Analizar demanda, competencia y clientes antes de crear."
        },
        {
            "g": "Módulo IV · Creación y crecimiento de empresas",
            "q": "Innovación",
            "a": "Crear algo nuevo que aporte valor."
        },
        {
            "g": "Módulo IV · Creación y crecimiento de empresas",
            "q": "¿Por qué crecer no es solo vender más?",
            "a": "Aumenta la complejidad: hay que reorganizar la estructura."
        },
        {
            "g": "Módulo IV · Creación y crecimiento de empresas",
            "q": "Financiamiento para crear",
            "a": "Capital propio, préstamos o inversores."
        },
        {
            "g": "Módulo IV · Creación y crecimiento de empresas",
            "q": "Visión del emprendedor",
            "a": "Ve oportunidades donde otros ven problemas."
        }
    ],
    "questions": [
        {
            "g": "Autoevaluación del apunte",
            "q": "Lograr el objetivo, sin importar tanto el uso de recursos, es…",
            "opts": [
                "productividad",
                "eficacia",
                "eficiencia"
            ],
            "ans": 1,
            "exp": "Eficacia = fines. Eficiencia = medios (usar bien los recursos)."
        },
        {
            "g": "Autoevaluación del apunte",
            "q": "Los 10 roles del gerente son de…",
            "opts": [
                "Taylor",
                "Mintzberg",
                "Maslow"
            ],
            "ans": 1,
            "exp": "Mintzberg: roles interpersonales, informativos y decisorios."
        },
        {
            "g": "Autoevaluación del apunte",
            "q": "El FODA analiza…",
            "opts": [
                "fortalezas/debilidades (internas) y oportunidades/amenazas (externas)",
                "la pirámide de necesidades",
                "solo el entorno externo"
            ],
            "ans": 0,
            "exp": "F y D son internas; O y A son externas."
        },
        {
            "g": "Autoevaluación del apunte",
            "q": "Las 4 P del marketing son…",
            "opts": [
                "producto, precio, plaza y promoción",
                "planificar, organizar, dirigir, controlar",
                "personas, proceso, producto y plan"
            ],
            "ans": 0,
            "exp": "Marketing mix de la gerencia comercial (Módulo III)."
        },
        {
            "g": "Autoevaluación del apunte",
            "q": "En el ciclo de vida de la empresa, cada etapa…",
            "opts": [
                "exige cambiar la gestión y la estructura",
                "elimina la necesidad de planificar",
                "se maneja siempre igual"
            ],
            "ans": 0,
            "exp": "Nacimiento, crecimiento, madurez y declive piden estilos de dirección distintos."
        },
        {
            "g": "Módulo I · Organizaciones y administradores",
            "q": "Lograr el objetivo, sin importar tanto los recursos, es…",
            "opts": [
                "productividad",
                "eficiencia",
                "eficacia"
            ],
            "ans": 2,
            "exp": "Eficacia = fines."
        },
        {
            "g": "Módulo I · Organizaciones y administradores",
            "q": "Usar bien los recursos es…",
            "opts": [
                "eficiencia",
                "eficacia",
                "calidad"
            ],
            "ans": 0,
            "exp": "Eficiencia = medios."
        },
        {
            "g": "Módulo I · Organizaciones y administradores",
            "q": "Los 10 roles del gerente son de…",
            "opts": [
                "Taylor",
                "Mintzberg",
                "Maslow"
            ],
            "ans": 1,
            "exp": "Mintzberg: interpersonales, informativos y decisorios."
        },
        {
            "g": "Módulo I · Organizaciones y administradores",
            "q": "Las 3 habilidades gerenciales (técnica, humana, conceptual) son de…",
            "opts": [
                "Katz",
                "Fayol",
                "Weber"
            ],
            "ans": 0,
            "exp": "Katz."
        },
        {
            "g": "Módulo I · Organizaciones y administradores",
            "q": "La administración científica es de…",
            "opts": [
                "Mayo",
                "Mintzberg",
                "Taylor"
            ],
            "ans": 2,
            "exp": "Taylor."
        },
        {
            "g": "Módulo I · Organizaciones y administradores",
            "q": "La burocracia es de…",
            "opts": [
                "Fayol",
                "Mayo",
                "Weber"
            ],
            "ans": 2,
            "exp": "Weber."
        },
        {
            "g": "Módulo I · Organizaciones y administradores",
            "q": "La escuela de relaciones humanas es de…",
            "opts": [
                "Weber",
                "Taylor",
                "Mayo"
            ],
            "ans": 2,
            "exp": "Mayo."
        },
        {
            "g": "Módulo I · Organizaciones y administradores",
            "q": "Clientes, proveedores y competencia son el entorno…",
            "opts": [
                "directo (específico)",
                "indirecto (general)",
                "interno"
            ],
            "ans": 0,
            "exp": "Entorno directo."
        },
        {
            "g": "Módulo I · Organizaciones y administradores",
            "q": "Factores económicos, políticos y tecnológicos son el entorno…",
            "opts": [
                "operativo",
                "indirecto (general)",
                "directo"
            ],
            "ans": 1,
            "exp": "Entorno indirecto."
        },
        {
            "g": "Módulo I · Organizaciones y administradores",
            "q": "¿Cuál NO es una de las 5 partes de Mintzberg?",
            "opts": [
                "la tecnoestructura",
                "el ápice estratégico",
                "el cliente"
            ],
            "ans": 2,
            "exp": "El cliente no es parte de la organización."
        },
        {
            "g": "Módulo I · Organizaciones y administradores",
            "q": "¿Toda organización es una empresa?",
            "opts": [
                "Solo las grandes",
                "Sí",
                "No"
            ],
            "ans": 2,
            "exp": "Un club o una ONG son organizaciones sin fin de lucro."
        },
        {
            "g": "Módulo I · Organizaciones y administradores",
            "q": "La cultura organizacional es…",
            "opts": [
                "el organigrama",
                "los valores compartidos",
                "el balance"
            ],
            "ans": 1,
            "exp": "Valores que guían el comportamiento."
        },
        {
            "g": "Módulo I · Organizaciones y administradores",
            "q": "¿Qué habilidad de Katz pesa más en la alta dirección?",
            "opts": [
                "la manual",
                "la técnica",
                "la conceptual"
            ],
            "ans": 2,
            "exp": "La conceptual."
        },
        {
            "g": "Módulo I · Organizaciones y administradores",
            "q": "El proceso administrativo es…",
            "opts": [
                "vender, producir, cobrar",
                "planificar, organizar, dirigir, controlar",
                "contratar, pagar, despedir"
            ],
            "ans": 1,
            "exp": "Las 4 funciones de Fayol."
        },
        {
            "g": "Módulo II · El proceso administrativo",
            "q": "El FODA analiza…",
            "opts": [
                "F/D internas y O/A externas",
                "solo el entorno externo",
                "la pirámide de necesidades"
            ],
            "ans": 0,
            "exp": "F y D internas; O y A externas."
        },
        {
            "g": "Módulo II · El proceso administrativo",
            "q": "La razón de ser de la organización es…",
            "opts": [
                "la misión",
                "la visión",
                "el FODA"
            ],
            "ans": 0,
            "exp": "La misión."
        },
        {
            "g": "Módulo II · El proceso administrativo",
            "q": "Un buen objetivo (Robbins) es…",
            "opts": [
                "vago y sin plazo",
                "específico, medible y con plazo",
                "solo cualitativo"
            ],
            "ans": 1,
            "exp": "Específico, medible, con plazo."
        },
        {
            "g": "Módulo II · El proceso administrativo",
            "q": "La representación gráfica de la estructura es…",
            "opts": [
                "el balance",
                "el FODA",
                "el organigrama"
            ],
            "ans": 2,
            "exp": "El organigrama."
        },
        {
            "g": "Módulo II · El proceso administrativo",
            "q": "Agrupar por función, producto o geografía es…",
            "opts": [
                "planificación",
                "segmentación",
                "departamentalización"
            ],
            "ans": 2,
            "exp": "Departamentalización."
        },
        {
            "g": "Módulo II · El proceso administrativo",
            "q": "Estructura rígida y estable vs flexible es…",
            "opts": [
                "centralizada vs descentralizada",
                "formal vs informal",
                "mecanicista vs orgánica (Burns y Stalker)"
            ],
            "ans": 2,
            "exp": "Burns y Stalker."
        },
        {
            "g": "Módulo II · El proceso administrativo",
            "q": "El grid gerencial (interés por personas y producción) es de…",
            "opts": [
                "Hersey y Blanchard",
                "Blake y Mouton",
                "Maslow"
            ],
            "ans": 1,
            "exp": "Blake y Mouton."
        },
        {
            "g": "Módulo II · El proceso administrativo",
            "q": "El liderazgo que depende de la madurez del seguidor es de…",
            "opts": [
                "Taylor",
                "Hersey y Blanchard",
                "Blake y Mouton"
            ],
            "ans": 1,
            "exp": "Liderazgo situacional."
        },
        {
            "g": "Módulo II · El proceso administrativo",
            "q": "La pirámide de necesidades es de…",
            "opts": [
                "McClelland",
                "Maslow",
                "Katz"
            ],
            "ans": 1,
            "exp": "Maslow."
        },
        {
            "g": "Módulo II · El proceso administrativo",
            "q": "Logro, poder y afiliación son de…",
            "opts": [
                "McClelland",
                "Maslow",
                "Mayo"
            ],
            "ans": 0,
            "exp": "McClelland."
        },
        {
            "g": "Módulo II · El proceso administrativo",
            "q": "La base de la pirámide de Maslow son las necesidades…",
            "opts": [
                "de autorrealización",
                "fisiológicas",
                "de estima"
            ],
            "ans": 1,
            "exp": "Fisiológicas."
        },
        {
            "g": "Módulo II · El proceso administrativo",
            "q": "Comparar lo realizado con lo previsto y corregir es…",
            "opts": [
                "controlar",
                "organizar",
                "planificar"
            ],
            "ans": 0,
            "exp": "Controlar."
        },
        {
            "g": "Módulo II · El proceso administrativo",
            "q": "El líder se diferencia del gerente en que…",
            "opts": [
                "firma los cheques",
                "tiene más sueldo",
                "influye por su capacidad, no por el cargo"
            ],
            "ans": 2,
            "exp": "El líder influye; el gerente administra por el cargo."
        },
        {
            "g": "Módulo II · El proceso administrativo",
            "q": "¿Cuántas funciones tiene el proceso administrativo?",
            "opts": [
                "5",
                "4",
                "3"
            ],
            "ans": 1,
            "exp": "Planificar, organizar, dirigir, controlar."
        },
        {
            "g": "Módulo III · Las gerencias funcionales",
            "q": "Las 4 P del marketing son…",
            "opts": [
                "planificar, organizar, dirigir, controlar",
                "personas, proceso, producto y plan",
                "producto, precio, plaza y promoción"
            ],
            "ans": 2,
            "exp": "Marketing mix."
        },
        {
            "g": "Módulo III · Las gerencias funcionales",
            "q": "Detectar y satisfacer necesidades del mercado es la gerencia…",
            "opts": [
                "comercial",
                "de finanzas",
                "de producción"
            ],
            "ans": 0,
            "exp": "Comercial."
        },
        {
            "g": "Módulo III · Las gerencias funcionales",
            "q": "Transformar insumos en bienes es la gerencia…",
            "opts": [
                "comercial",
                "de RRHH",
                "de producción"
            ],
            "ans": 2,
            "exp": "Producción."
        },
        {
            "g": "Módulo III · Las gerencias funcionales",
            "q": "Conseguir y asignar fondos es la gerencia…",
            "opts": [
                "comercial",
                "de producción",
                "de finanzas"
            ],
            "ans": 2,
            "exp": "Finanzas."
        },
        {
            "g": "Módulo III · Las gerencias funcionales",
            "q": "Atraer, desarrollar y retener personas es la gerencia…",
            "opts": [
                "de producción",
                "comercial",
                "de RRHH"
            ],
            "ans": 2,
            "exp": "RRHH."
        },
        {
            "g": "Módulo III · Las gerencias funcionales",
            "q": "Dividir el mercado en grupos parecidos es…",
            "opts": [
                "promoción",
                "producción",
                "segmentación"
            ],
            "ans": 2,
            "exp": "Segmentación."
        },
        {
            "g": "Módulo III · Las gerencias funcionales",
            "q": "Producción por unidad de insumo es…",
            "opts": [
                "productividad",
                "rentabilidad",
                "liquidez"
            ],
            "ans": 0,
            "exp": "Productividad."
        },
        {
            "g": "Módulo III · Las gerencias funcionales",
            "q": "Tener efectivo disponible es…",
            "opts": [
                "liquidez",
                "solvencia total",
                "rentabilidad"
            ],
            "ans": 0,
            "exp": "Liquidez."
        },
        {
            "g": "Módulo III · Las gerencias funcionales",
            "q": "Elegir al mejor candidato es…",
            "opts": [
                "reclutamiento",
                "selección",
                "capacitación"
            ],
            "ans": 1,
            "exp": "Selección (reclutar es atraer)."
        },
        {
            "g": "Módulo III · Las gerencias funcionales",
            "q": "Medir cómo trabaja cada persona es…",
            "opts": [
                "evaluación de desempeño",
                "selección",
                "capacitación"
            ],
            "ans": 0,
            "exp": "Evaluación de desempeño."
        },
        {
            "g": "Módulo III · Las gerencias funcionales",
            "q": "Gestionar la información para decidir es la gerencia…",
            "opts": [
                "comercial",
                "de tecnología/SI",
                "de finanzas"
            ],
            "ans": 1,
            "exp": "Tecnología y sistemas de información."
        },
        {
            "g": "Módulo III · Las gerencias funcionales",
            "q": "Las gerencias funcionales se conectan porque…",
            "opts": [
                "cada una aplica el proceso administrativo en su área",
                "no se relacionan",
                "dependen del cliente"
            ],
            "ans": 0,
            "exp": "Mismo proceso administrativo en cada área."
        },
        {
            "g": "Módulo III · Las gerencias funcionales",
            "q": "La P de \"plaza\" se refiere a…",
            "opts": [
                "la publicidad",
                "la distribución",
                "el precio"
            ],
            "ans": 1,
            "exp": "Cómo el producto llega al cliente."
        },
        {
            "g": "Módulo III · Las gerencias funcionales",
            "q": "La calidad es…",
            "opts": [
                "cumplir o superar lo que el cliente espera",
                "el precio más bajo",
                "producir mucho"
            ],
            "ans": 0,
            "exp": "Satisfacer al cliente."
        },
        {
            "g": "Módulo IV · Creación y crecimiento",
            "q": "El emprendedor…",
            "opts": [
                "detecta una oportunidad y asume riesgo",
                "solo aporta dinero",
                "administra por el cargo"
            ],
            "ans": 0,
            "exp": "Detecta oportunidades y asume el riesgo."
        },
        {
            "g": "Módulo IV · Creación y crecimiento",
            "q": "¿Toda idea es una oportunidad de negocio?",
            "opts": [
                "No",
                "Solo las nuevas",
                "Sí"
            ],
            "ans": 0,
            "exp": "No toda idea es viable."
        },
        {
            "g": "Módulo IV · Creación y crecimiento",
            "q": "El documento que describe el proyecto es…",
            "opts": [
                "el FODA",
                "el plan de negocios",
                "el organigrama"
            ],
            "ans": 1,
            "exp": "Plan de negocios."
        },
        {
            "g": "Módulo IV · Creación y crecimiento",
            "q": "El ciclo de vida de la empresa es…",
            "opts": [
                "nacimiento, crecimiento, madurez, declive",
                "solo crecimiento",
                "compra y venta"
            ],
            "ans": 0,
            "exp": "Las 4 etapas."
        },
        {
            "g": "Módulo IV · Creación y crecimiento",
            "q": "¿Cada etapa del ciclo se gestiona igual?",
            "opts": [
                "Solo cambia el dueño",
                "Sí, siempre igual",
                "No, cambia la estructura y el estilo"
            ],
            "ans": 2,
            "exp": "Cada etapa exige otra gestión."
        },
        {
            "g": "Módulo IV · Creación y crecimiento",
            "q": "Aumentar la propia capacidad es crecimiento…",
            "opts": [
                "interno",
                "externo",
                "horizontal"
            ],
            "ans": 0,
            "exp": "Interno."
        },
        {
            "g": "Módulo IV · Creación y crecimiento",
            "q": "Fusiones y adquisiciones son crecimiento…",
            "opts": [
                "vertical",
                "externo",
                "interno"
            ],
            "ans": 1,
            "exp": "Externo."
        },
        {
            "g": "Módulo IV · Creación y crecimiento",
            "q": "Controlar etapas anteriores o posteriores de la cadena es integración…",
            "opts": [
                "vertical",
                "diagonal",
                "horizontal"
            ],
            "ans": 0,
            "exp": "Vertical."
        },
        {
            "g": "Módulo IV · Creación y crecimiento",
            "q": "Unirse con competidores del mismo nivel es integración…",
            "opts": [
                "total",
                "horizontal",
                "vertical"
            ],
            "ans": 1,
            "exp": "Horizontal."
        },
        {
            "g": "Módulo IV · Creación y crecimiento",
            "q": "Entrar en nuevos productos o mercados es…",
            "opts": [
                "diversificación",
                "integración",
                "segmentación"
            ],
            "ans": 0,
            "exp": "Diversificación."
        },
        {
            "g": "Módulo IV · Creación y crecimiento",
            "q": "Antes de crear una empresa conviene hacer…",
            "opts": [
                "un balance",
                "un organigrama",
                "un estudio de mercado"
            ],
            "ans": 2,
            "exp": "Estudio de mercado."
        },
        {
            "g": "Módulo IV · Creación y crecimiento",
            "q": "Crear algo nuevo que aporte valor es…",
            "opts": [
                "burocracia",
                "innovación",
                "liquidez"
            ],
            "ans": 1,
            "exp": "Innovación."
        },
        {
            "g": "Módulo IV · Creación y crecimiento",
            "q": "Crecer no es solo vender más porque…",
            "opts": [
                "siempre es fácil",
                "no cambia nada",
                "aumenta la complejidad y hay que reorganizar"
            ],
            "ans": 2,
            "exp": "Cambia la estructura y la gestión."
        },
        {
            "g": "Módulo IV · Creación y crecimiento",
            "q": "El emprendedor asume…",
            "opts": [
                "ningún riesgo",
                "solo tareas operativas",
                "el riesgo del negocio"
            ],
            "ans": 2,
            "exp": "La incertidumbre del negocio."
        }
    ],
    "exercises": [],
    "checklist": [
        "Distingo organización/empresa, eficiencia/eficacia y los entornos",
        "Ubico a Katz, Mintzberg, Taylor, Fayol, Weber y Mayo",
        "Manejo FODA, misión, objetivos y tipos de planes",
        "Conozco organigrama, departamentalización y Mintzberg (partes y coordinación)",
        "Diferencio los modelos de liderazgo y motivación (Blake&Mouton, Hersey&Blanchard, Maslow, McClelland)",
        "Sé qué hace cada gerencia funcional (comercial, producción, finanzas, RRHH, tecnología)",
        "Entiendo creación de empresas (emprendedor, plan de negocios) y crecimiento (ciclo de vida)"
    ]
};

export default data;
