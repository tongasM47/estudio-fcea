// Material del 1er semestre 2026 (versión anterior del sitio), convertido a datos.
// Formato: ver README (notes, flashcards, questions, exercises, checklist).
const data = {
    "notes": [
        {
            "id": "n-k-mapa",
            "title": "Mapa",
            "part": "General",
            "html": "<h3>Cómo encaro la materia</h3>\n<p>La contabilidad es un <b>sistema de información</b>: mira hechos económicos, los respalda con comprobantes, los registra en cuentas y los transforma en información útil para decidir y controlar. El 1er parcial es la <b>mecánica</b> (patrimonio, cuentas, asientos); el 2º cierra el <b>ciclo</b> (proceso contable, ajustes y armado de estados).</p>\n<table>\n<tr><th>Parcial</th><th>Unidades</th><th>De qué va</th></tr>\n<tr><td><b>P1</b></td><td>1–6</td><td>Patrimonio, hechos económicos, cuentas, asientos, comprobantes, IVA, sueldos, ciclo contable</td></tr>\n<tr><td><b>P2</b></td><td>7–8</td><td>Proceso contable y estructura de resultados · Ajustes por balance + Hoja de trabajo</td></tr>\n</table>\n<div class=\"key\"><span class=\"tag\">★ La ecuación que sostiene todo</span> <span class=\"fml\">Activo = Pasivo + Patrimonio Neto</span>. Si entiendo esto, entiendo por qué cada asiento tiene que <b>balancear</b>.</div>"
        },
        {
            "id": "n-k-p1a",
            "title": "P1 · Patrimonio y hechos",
            "part": "P1",
            "html": "<h3>1er Parcial · Patrimonio, hechos económicos y la ecuación (U1–U3)</h3>\n<div class=\"eli\"><span class=\"tag\">ELI5</span> La contabilidad es el tablero del barco: no maneja la empresa, pero te muestra qué tenés, qué debés y si el rumbo viene bien.</div>\n<p>Todo arranca con el <b>patrimonio</b>: el conjunto de bienes, derechos y obligaciones de la empresa en un momento dado. Para entenderlo se parte en tres piezas. El <b>Activo</b> es <b>todo lo que la empresa tiene y le sirve</b>: plata en caja, mercadería, máquinas, lo que le deben los clientes. Para ser activo, el recurso tiene que estar <b>controlado</b> por la empresa y tener <b>utilidad económica</b> (servir para generar plata). El <b>Pasivo</b> es <b>todo lo que la empresa debe a terceros</b>: a proveedores, al banco, al Estado. Y el <b>Patrimonio Neto</b> es <b>lo que realmente es del dueño</b>: lo que quedaría si vendieras todo el activo y pagaras todas las deudas. Por eso se define como una <b>resta</b>: Patrimonio Neto = Activo − Pasivo.</p>\n<table>\n<tr><th>Concepto</th><th>Definición</th></tr>\n<tr><td>Activo</td><td>Recursos controlados por la empresa con utilidad económica (lo que tiene)</td></tr>\n<tr><td>Pasivo</td><td>Obligaciones con terceros (lo que debe)</td></tr>\n<tr><td>Patrimonio Neto</td><td>Diferencia Activo − Pasivo (lo que queda para el dueño)</td></tr>\n</table>\n<p>La cátedra es exigente con la definición de <b>Activo</b>: para que algo sea activo tiene que cumplir <b>las 4 características a la vez</b>: (1) tener <b>utilidad económica</b> (valor de uso o cambio — una máquina rota no la tiene); (2) que el acceso a sus beneficios esté bajo el <b>control</b> de la empresa; (3) que ese control haya nacido de <b>un hecho ya ocurrido</b>; y (4) que se le pueda <b>asignar un valor en dinero sobre bases objetivas</b>. Por esta última, <b>los recursos humanos NO son activo</b> (no se pueden valuar objetivamente) — trampa clásica.</p>\n<p>La cátedra llega a la ecuación por otro camino que conviene saber: toda empresa tiene <b>recursos</b> (lo que usa) que salieron de <b>fuentes</b> (de dónde se obtuvieron). Las fuentes son <b>propias</b> (aporte del dueño, ganancias reinvertidas) o <b>ajenas</b> (deudas con terceros). Como todo recurso salió de alguna fuente, <b>Recursos = Fuentes</b>, que es exactamente la <b>ecuación contable</b>: <b>Activo = Pasivo + Patrimonio Neto</b>. Leída en criollo: <b>todo lo que la empresa tiene</b> (izquierda) <b>salió de algún lado</b> (derecha): o lo financió un tercero (pasivo) o lo puso el dueño (patrimonio). Por eso los dos lados <b>siempre dan igual</b> y cada registración tiene que <b>balancear</b>.</p>\n<div class=\"key\"><span class=\"tag\">Ecuación contable</span> <span class=\"fml\">Activo = Pasivo + Patrimonio Neto</span></div>\n<div style=\"text-align:center;margin:16px 0\">\n<svg style=\"max-width:340px;width:100%\" viewbox=\"0 0 360 200\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect fill=\"rgba(108,140,255,.18)\" height=\"140\" stroke=\"#6c8cff\" stroke-width=\"2\" width=\"92\" x=\"68\" y=\"30\"></rect>\n<text fill=\"#6c8cff\" font-size=\"14\" font-weight=\"bold\" text-anchor=\"middle\" x=\"114\" y=\"104\">ACTIVO</text>\n<text fill=\"#aab4c8\" font-size=\"10\" text-anchor=\"middle\" x=\"114\" y=\"186\">lo que tiene</text>\n<text fill=\"#e8ecf5\" font-size=\"24\" text-anchor=\"middle\" x=\"180\" y=\"108\">=</text>\n<rect fill=\"rgba(255,107,107,.16)\" height=\"58\" stroke=\"#ff6b6b\" stroke-width=\"2\" width=\"92\" x=\"200\" y=\"30\"></rect>\n<text fill=\"#ff6b6b\" font-size=\"13\" font-weight=\"bold\" text-anchor=\"middle\" x=\"246\" y=\"64\">PASIVO</text>\n<rect fill=\"rgba(54,211,153,.16)\" height=\"82\" stroke=\"#36d399\" stroke-width=\"2\" width=\"92\" x=\"200\" y=\"88\"></rect>\n<text fill=\"#36d399\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"middle\" x=\"246\" y=\"124\">PATRIMONIO</text>\n<text fill=\"#36d399\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"middle\" x=\"246\" y=\"139\">NETO</text>\n<text fill=\"#aab4c8\" font-size=\"10\" text-anchor=\"middle\" x=\"246\" y=\"186\">debe + es del dueño</text>\n</svg>\n<div style=\"color:#7a8499;font-size:.8rem\">El Activo (lo que tiene) siempre iguala al Pasivo (lo que debe) más el Patrimonio Neto (lo del dueño). Por eso los dos lados <b>balancean</b>.</div>\n</div>\n<h4>Actos administrativos vs hechos económicos</h4>\n<p>La contabilidad <b>no registra todo lo que pasa</b> en la empresa, solo lo que toca el patrimonio. Por eso distingue dos cosas. Un <b>acto administrativo</b> es un paso de gestión que <b>todavía no movió plata ni bienes</b>: pedir un presupuesto, firmar un contrato, contratar a alguien que arranca el mes que viene. No se registra porque el patrimonio no cambió. Un <b>hecho económico</b>, en cambio, <b>sí modifica el patrimonio</b>: comprar, vender, pagar, cobrar. Ese es el que entra a los libros. Y los hechos económicos se clasifican según <b>qué le hacen al patrimonio</b>: el <b>permutativo</b> cambia solo la <b>composición</b> sin tocar el monto total (pago una deuda con caja: baja caja, baja la deuda, el neto queda igual); el <b>modificativo</b> cambia el <b>monto</b> generando ganancia o pérdida (pago un gasto de luz: el patrimonio se achica); y el <b>mixto</b> hace las dos cosas a la vez (vendo con ganancia: cambia qué tengo y además crece el patrimonio).</p>\n<table>\n<tr><th>Tipo</th><th>¿Afecta el patrimonio?</th><th>Ejemplo</th></tr>\n<tr><td>Acto administrativo</td><td>No</td><td>Emitir una orden de compra, contratar personal</td></tr>\n<tr><td>Hecho económico</td><td>Sí</td><td>Comprar, vender, pagar, cobrar</td></tr>\n</table>\n<table>\n<tr><th>Hecho económico</th><th>Qué modifica</th><th>Efecto</th></tr>\n<tr><td>Permutativo</td><td>La composición</td><td>No cambia el monto del patrimonio (compra al contado)</td></tr>\n<tr><td>Modificativo</td><td>El monto</td><td>Genera ganancia o pérdida (pagar un gasto)</td></tr>\n<tr><td>Mixto</td><td>Composición y monto</td><td>Venta con utilidad</td></tr>\n</table>\n<div class=\"key\"><span class=\"tag\">Regla del modificativo (clave)</span> Si <b>solo aumenta el Activo</b> o <b>solo disminuye el Pasivo</b> → el PN sube → <b>GANANCIA</b>. Si <b>solo disminuye el Activo</b> o <b>solo aumenta el Pasivo</b> → el PN baja → <b>PÉRDIDA</b>. (El permutativo, en cambio, mueve dos cuentas por igual importe y deja el PN igual.)</div>\n<div class=\"trap\"><span class=\"tag\">Ojo con la trampa</span> El <b>acto administrativo</b> no tiene naturaleza jurídica ni económica (solo prepara/controla); el <b>hecho económico</b> tiene las dos y crea, modifica o extingue un derecho u obligación valuable en dinero. Si solo se \"prepara\" algo, es acto administrativo.</div>\n<h4>El proceso contable: de los datos a la información</h4>\n<p>La contabilidad es un <b>sistema de información</b> que transforma datos del patrimonio en información para decidir y controlar. Lo hace en <b>3 etapas</b> que conviene tener claras (reaparecen todo el curso): <b>1) captación de datos</b> (se recogen los hechos económicos mediante <b>comprobantes</b>); <b>2) procesamiento</b> (se clasifican y registran — la \"teneduría de libros\": Diario y Mayor); <b>3) preparación de la información</b> (se arman los <b>informes</b>: internos para la gestión, y externos como los <b>Estados Financieros</b>, según las Normas Contables Adecuadas — en Uruguay, marco del Decreto 291/014 y NIIF para PYMES).</p>"
        },
        {
            "id": "n-k-p1b",
            "title": "P1 · Cuentas y asientos",
            "part": "P1",
            "html": "<h3>1er Parcial · Cuentas, Debe/Haber y asientos (U4–U6)</h3>\n<div class=\"idea\">✓ <b>Idea madre:</b> cada cuenta tiene dos lados. <b>Debe</b> es la izquierda, <b>Haber</b> la derecha. La <b>regla de registración</b> es el corazón de todo asiento.</div>\n<p>Una <b>cuenta</b> es simplemente el \"cajón\" donde anoto los movimientos de algo concreto: hay una cuenta Caja, una cuenta Mercaderías, una cuenta Proveedores, etc. Cada cuenta tiene dos columnas: el <b>Debe</b> (la izquierda) y el <b>Haber</b> (la derecha). Ojo, que acá está la trampa más grande de toda la materia: <b>Debe y Haber NO significan \"lo que se debe\" ni \"lo que se tiene\"</b>. Son solo nombres para la <b>izquierda</b> y la <b>derecha</b>. Anotar en el Debe se dice <b>debitar</b>; anotar en el Haber, <b>acreditar</b>.</p>\n<p>¿Y cómo sé de qué lado anotar? Con la <b>regla madre</b>, que sale directo de la ecuación contable. Las cuentas que están a la <b>izquierda</b> de la ecuación (Activo, y las Pérdidas que lo consumen) <b>aumentan por el Debe</b>. Las que están a la <b>derecha</b> (Pasivo, Patrimonio y Ganancias) <b>aumentan por el Haber</b>. Para <b>disminuir</b>, va al revés. Memorizá esta sola frase y resolvés casi cualquier asiento.</p>\n<div class=\"eli\"><span class=\"tag\">ELI5</span> Pensalo como una balanza con dos platos: Debe a la izquierda, Haber a la derecha. Cada operación pone peso en los dos platos por el <b>mismo monto</b> (eso es la <b>partida doble</b>), así la balanza nunca se desnivela. Si sumás todos los Debe y todos los Haber, tienen que dar igual.</div>\n<p>El <b>saldo</b> de una cuenta es la diferencia entre sus dos lados: si el Debe es mayor, queda <b>saldo deudor</b> (típico de los activos); si el Haber es mayor, <b>saldo acreedor</b> (típico de pasivos y patrimonio). Y para ordenar todo esto la empresa arma un <b>plan de cuentas</b> (la lista codificada de todas sus cuentas) y un <b>manual de cuentas</b> (que explica cuándo y cómo usar cada una).</p>\n<table>\n<tr><th>Término</th><th>Significado</th></tr>\n<tr><td>Debitar / Acreditar</td><td>Anotar en el Debe / en el Haber</td></tr>\n<tr><td>Saldo deudor</td><td>Debe &gt; Haber</td></tr>\n<tr><td>Saldo acreedor</td><td>Haber &gt; Debe</td></tr>\n<tr><td>Plan de cuentas</td><td>Lista ordenada y codificada de cuentas (organiza)</td></tr>\n<tr><td>Manual de cuentas</td><td>Explica cómo se usa cada cuenta (guía)</td></tr>\n</table>\n<h4>Asientos tipo</h4>\n<p>Un <b>asiento</b> es el registro de un hecho económico en el Diario, siempre con su lado Debe y su lado Haber cuadrando. La lógica para armarlo es: pregunto <b>qué cuentas se mueven</b>, miro si cada una <b>aumenta o disminuye</b>, y aplico la regla madre para ubicarla en el Debe o el Haber. Estos son los cuatro que más caen, y conviene tenerlos automatizados:</p>\n<table>\n<tr><th>Operación</th><th>Debe</th><th>Haber</th></tr>\n<tr><td>Compra de mercadería a crédito</td><td>Mercaderías</td><td>Proveedores</td></tr>\n<tr><td>Venta a crédito (con su costo)</td><td>Deudores / Costo de vtas</td><td>Ventas / Mercaderías</td></tr>\n<tr><td>Cobro de deudor en efectivo</td><td>Caja</td><td>Deudores</td></tr>\n<tr><td>Pago a proveedor con cheque</td><td>Proveedores</td><td>Banco</td></tr>\n</table>\n<div class=\"trap\"><span class=\"tag\">Ojo con la trampa</span> En toda venta con costo van <b>dos</b> efectos: el ingreso (Ventas) y la baja de mercadería (Costo de ventas). No te olvides del costo.</div>\n<h4>Clasificación de cuentas (la que importa: integrales vs diferenciales)</h4>\n<p>La cátedra clasifica las cuentas de varias formas, pero hay <b>una que es la llave del 2º parcial</b>: <b>integrales</b> vs. <b>diferenciales</b>. Las <b>integrales</b> integran el Activo y el Pasivo (bienes, derechos, obligaciones — incluye la patrimonial Capital); las <b>diferenciales</b> representan las variaciones del patrimonio, o sea los <b>Resultados</b> (Pérdidas y Ganancias). Guardá esta distinción: en los <b>ajustes</b> (U8), las integrales se ajustan \"por realidad\" y las diferenciales \"por ejercicio económico\". Otras clasificaciones que da el curso: por su <b>extensión</b> (colectivas vs. analíticas — la suma de las analíticas debe igualar a su colectiva), por el <b>objeto</b> (patrimoniales, de resultados, de orden, de movimiento) y por el <b>saldo</b> (acumulativas vs. residuales).</p>\n<div class=\"key\"><span class=\"tag\">De la ecuación a la partida doble</span> La regla de registración sale de despejar la ecuación: <b>Activo + Pérdidas = Pasivo + Capital + Resultados anteriores + Ganancias</b>. Por eso Activo y Pérdidas tienen saldo <b>deudor</b> (aumentan por el Debe) y Pasivo, Patrimonio y Ganancias tienen saldo <b>acreedor</b> (aumentan por el Haber).</div>\n<h4>Los libros (Código de Comercio)</h4>\n<p>Los registros se clasifican por <b>orden de entrada</b> en <b>cronológicos</b> (de 1ª entrada, anotan por fecha → los <b>Diarios</b>) y <b>sistemáticos</b> (de 2ª entrada, por cuenta → los <b>Mayores</b>); y por importancia en <b>principales</b> (Diario y Mayor) y <b>auxiliares</b>. El <b>Código de Comercio</b> (art. 55) obliga a llevar <b>3 libros</b>: <b>Diario</b> (art. 56: día por día, cronológico), <b>Inventarios</b> (arts. 59-61: el balance al inicio y cierre) y <b>Copiador de Cartas</b>. El <b>Libro Mayor NO es obligatorio</b> legalmente, pero es imprescindible en la práctica. Y ojo con las <b>prohibiciones</b> (art. 66): no se puede dejar blancos, raspar ni enmendar — los errores se corrigen con <b>un nuevo asiento</b> (contracara: art. 67, los libros sin las formalidades no valen como prueba en juicio).</p>"
        },
        {
            "id": "n-k-p1c",
            "title": "P1 · Comprobantes, IVA y sueldos",
            "part": "P1",
            "html": "<h3>1er Parcial · Comprobantes, IVA y sueldos</h3>\n<div class=\"idea\">✓ <b>Idea madre:</b> ningún asiento se registra \"de palabra\": cada hecho económico necesita un <b>comprobante</b> que lo respalde. Y dos cálculos —<b>IVA</b> y <b>utilidad</b>— aparecen en casi todos los ejercicios.</div>\n<h4>Comprobantes</h4>\n<p>El <b>comprobante</b> es el papel (o documento) que prueba que el hecho económico ocurrió: es el respaldo legal y contable de cada registración. Cada tipo de operación tiene el suyo, y en el parcial te pueden dar el comprobante y pedirte el asiento, así que conviene reconocerlos. La <b>factura</b> documenta una <b>venta</b> (a crédito o contado); el <b>recibo</b> documenta un <b>movimiento de plata</b> (un cobro o un pago); el <b>remito</b> acompaña la <b>entrega de mercadería</b> y por eso va <b>sin precio</b>; y las <b>notas de crédito y débito</b> corrigen una factura ya emitida (la nota de crédito <b>baja</b> la deuda del cliente —típico de una devolución— y la de débito la <b>sube</b>).</p>\n<table>\n<tr><th>Comprobante</th><th>Qué documenta</th></tr>\n<tr><td>Factura / Boleta</td><td>Una venta (a crédito / al contado)</td></tr>\n<tr><td>Recibo</td><td>Un cobro o pago de dinero</td></tr>\n<tr><td>Nota de crédito / débito</td><td>Disminuye / aumenta una deuda ya facturada (devoluciones, ajustes)</td></tr>\n<tr><td>Remito</td><td>Entrega de mercadería (sin precio)</td></tr>\n<tr><td>Cheque / Vale / Conforme</td><td>Medios de pago y documentos a pagar</td></tr>\n</table>\n<p>La cátedra hace dos distinciones que caen en múltiple opción. Por su <b>autonomía</b>: los <b>documentos probatorios</b> son prueba del hecho económico (dependen de la operación que los originó: factura, boleta, recibo, notas), mientras que los <b>títulos de crédito</b> son <b>autónomos</b>, valen por sí mismos sin depender de la operación (el <b>conforme</b> —deuda por compra de mercadería—, el <b>vale</b> —deuda por préstamo de dinero— y el <b>cheque</b>). Y por su <b>forma de emisión</b>: manual, electrónica clásica o <b>comprobantes electrónicos en línea con la DGI (CFE)</b>: e-Factura (a contribuyentes), e-Ticket (a consumidor final), e-Remito, e-Resguardo. El comprobante cumple <b>4 funciones</b>: contable, de control, jurídica e impositiva.</p>\n<div class=\"trap\"><span class=\"tag\">Ojo con la trampa</span> El <b>remito</b> prueba un <b>acto administrativo</b> (movimiento físico de mercadería), no un hecho económico. Y el conforme/vale/cheque son <b>títulos de crédito</b> (autónomos), no documentos probatorios.</div>\n<h4>IVA y utilidad</h4>\n<p>El <b>IVA</b> (Impuesto al Valor Agregado) es un impuesto que la empresa le <b>cobra al cliente</b> por cuenta del Estado: lo suma al precio, lo guarda y después se lo paga a la DGI. No es ni ganancia ni gasto de la empresa, es <b>plata de paso</b> (por eso va a una cuenta de pasivo: \"IVA ventas\"). Se calcula sobre el precio <b>sin</b> IVA: tasa básica <b>22%</b>, tasa mínima <b>10%</b> para algunos productos. La <b>utilidad</b> (lo que la empresa gana en la operación) se puede medir de dos formas que dan números distintos: <b>sobre el costo</b> (gano respecto de lo que me costó) o <b>sobre la venta</b> (gano respecto del precio final). Tenés que leer bien cuál te pide la letra, porque confundirlas es el error de múltiple opción más frecuente.</p>\n<div class=\"formula-grid\">\n<div class=\"fbox\"><div class=\"big\">IVA = Precio sin IVA × tasa</div><small>Tasa básica 22% / mínima 10% (ojo con la del ejercicio)</small></div>\n<div class=\"fbox\"><div class=\"big\">Utilidad sobre costo = U / Costo</div><small>El margen se calcula sobre el costo</small></div>\n<div class=\"fbox\"><div class=\"big\">Utilidad sobre venta = U / Venta</div><small>El margen se calcula sobre el precio de venta</small></div>\n</div>\n<div class=\"trap\"><span class=\"tag\">Ojo con la trampa</span> \"Sobre costo\" y \"sobre venta\" dan números distintos: fijate bien cuál pide la letra. Es el error de múltiple opción más común.</div>\n<h4>Sueldos y leyes sociales</h4>\n<p>El sueldo tiene dos números que no hay que confundir. El <b>sueldo nominal</b> es el sueldo \"de bruto\", el total pactado. De ahí se le <b>descuentan los aportes del trabajador</b> (BPS jubilatorio, FONASA para la salud, etc.), y lo que queda es el <b>líquido</b>, que es la plata que la persona efectivamente cobra. Esos descuentos no se los queda la empresa: los retiene y se los paga al Estado. Pero además la <b>empresa pone de su bolsillo</b> sus propios aportes (las <b>leyes sociales patronales</b>): eso es un <b>costo extra</b> para ella, por encima del nominal. Por eso emplear a alguien le sale a la empresa <b>más</b> que el sueldo nominal, y el trabajador cobra <b>menos</b> que el nominal.</p>\n<div class=\"eli\"><span class=\"tag\">ELI5</span> Nominal es el precio de lista; líquido es lo que te queda en la mano después de los descuentos. Y la empresa, encima del nominal, paga un \"recargo\" (las cargas patronales) que el trabajador ni ve.</div>"
        },
        {
            "id": "n-k-p2a",
            "title": "P2 · Proceso contable y resultados",
            "part": "P2",
            "html": "<h3>2º Parcial · Proceso contable y estructura de resultados (U7)</h3>\n<div class=\"idea\">✓ <b>Idea madre:</b> el proceso contable transforma los datos en información: <b>Diario → Mayor → Balance</b>. Y el resultado del ejercicio sale de enfrentar las cuentas de <b>ganancia</b> contra las de <b>pérdida</b>.</div>\n<div class=\"eli\"><span class=\"tag\">ELI5</span> Primero anoto todo por fecha (Diario), después agrupo por cuenta (Mayor), y al final ordeno todo para ver cómo terminé (Balance) y cuánto gané o perdí.</div>\n<p>El <b>proceso contable</b> es la cadena de pasos que convierte hechos sueltos en información ordenada, y siempre va en el mismo orden: <b>Diario → Mayor → Balance</b>. En el <b>Libro Diario</b> registro cada operación <b>en orden de fecha</b>, con su asiento (Debe y Haber). El problema es que así no sé cuánto tengo en cada cuenta, porque los movimientos de Caja, por ejemplo, están desparramados por todo el libro. Para eso está el <b>Libro Mayor</b>: <b>agrupa todos los movimientos de cada cuenta</b> en un solo lugar y me da su <b>saldo</b>. Finalmente, el <b>Balance de saldos</b> junta los saldos de <b>todas</b> las cuentas en una lista, y sirve de <b>control</b>: como cada asiento balanceaba, la suma de saldos deudores tiene que ser igual a la de acreedores.</p>\n<table>\n<tr><th>Registro</th><th>Qué hace</th></tr>\n<tr><td>Libro Diario</td><td>Registra las operaciones por fecha (asientos)</td></tr>\n<tr><td>Libro Mayor</td><td>Agrupa los movimientos por cuenta y da su saldo</td></tr>\n<tr><td>Balance de saldos</td><td>Lista todas las cuentas con su saldo para controlar</td></tr>\n</table>\n<h4>Cuentas patrimoniales vs de resultado</h4>\n<p>Acá viene la distinción clave del 2º parcial, porque define <b>a qué estado va cada cuenta</b> al cierre. Las cuentas <b>patrimoniales</b> son las que representan <b>cosas que perduran</b>: el Activo, el Pasivo y el Patrimonio (Caja, Mercaderías, Proveedores, Capital). Estas van al <b>Balance General</b>, que es una \"foto\" de cómo está parada la empresa a una fecha. Las cuentas de <b>resultado</b> son las que miden <b>cómo me fue durante el período</b>: las <b>Ganancias</b> (ingresos, como Ventas) y las <b>Pérdidas</b> (gastos, como Sueldos o Alquileres). Estas van al <b>Estado de Resultados</b>, que es como una \"película\" de lo que pasó en el año. La diferencia entre ganancias y pérdidas me da el <b>resultado del ejercicio</b>, y ese número se traslada al Patrimonio: si gané, el patrimonio del dueño crece; si perdí, se achica.</p>\n<div class=\"eli\"><span class=\"tag\">ELI5</span> Las patrimoniales son una <b>foto</b> (qué tengo y qué debo hoy); las de resultado son una <b>película</b> (cuánto gané y gasté durante el año). La película termina y su resultado se suma a la foto.</div>\n<table>\n<tr><th>Tipo</th><th>Qué son</th><th>A dónde van</th></tr>\n<tr><td>Patrimoniales</td><td>Activo, Pasivo y Patrimonio</td><td>Al Balance General</td></tr>\n<tr><td>De resultado</td><td>Ganancias (ingresos) y Pérdidas (gastos)</td><td>Al Estado de Resultados</td></tr>\n</table>\n<div class=\"key\"><span class=\"tag\">Resultado del ejercicio</span> <span class=\"fml\">Resultado = Ganancias − Pérdidas</span>. Si es positivo hay utilidad (aumenta el Patrimonio); si es negativo hay pérdida.</div>\n<h4>Los Estados Financieros (lo que la empresa muestra al mundo)</h4>\n<p>La información patrimonial se entrega a los usuarios <b>externos</b> al menos una vez al año mediante los <b>Estados Financieros</b> (que, a diferencia de los informes internos, <b>no son confidenciales</b> y son obligatorios según las normas — en Uruguay, NIIF para PYMES). Ojo con los nombres, que la cátedra cambió y le gusta preguntar:</p>\n<table>\n<tr><th>Estado Financiero</th><th>(Ex nombre)</th><th>Qué muestra</th></tr>\n<tr><td>Estado de Situación Financiera</td><td>Ex Situación Patrimonial</td><td>La \"foto\": recursos, obligaciones y PN a una fecha</td></tr>\n<tr><td>Estado de Resultados</td><td>—</td><td>El rendimiento (resultado) del ejercicio</td></tr>\n<tr><td>Estado del Resultado Integral</td><td>—</td><td>El ER + los \"otros resultados integrales\"</td></tr>\n<tr><td>Estado de Cambios en el Patrimonio</td><td>Ex Evolución del Patrimonio</td><td>Cómo variaron los rubros patrimoniales</td></tr>\n<tr><td>Estado de Flujo de Efectivo</td><td>Ex Origen y Aplicación de Fondos</td><td>De dónde salió y en qué se usó el efectivo</td></tr>\n<tr><td>Notas</td><td>—</td><td>Aclaraciones para interpretar los estados</td></tr>\n</table>\n<h4>Los dos supuestos que sostienen todo (clave para U8)</h4>\n<p>Los Estados Financieros se preparan sobre <b>dos supuestos fundamentales</b> que vas a usar todo el tiempo en los ajustes. El <b>principio de lo devengado</b>: los efectos de las operaciones se reconocen en <b>el período en que ocurren, independientemente de cuándo se cobran o pagan</b>. Y la <b>empresa en marcha</b>: se asume que la empresa <b>está en actividad y va a seguir</b> en el futuro previsible (no se va a liquidar). Además, el <b>Marco Conceptual 2010</b> pide que la información tenga <b>2 características fundamentales</b> —<b>relevancia</b> (si la omito, el usuario decide mal) y <b>representación fiel</b> (completa, neutra y sin errores)— y <b>4 de mejora</b>: <b>comprensibilidad, comparabilidad, verificabilidad y oportunidad</b>.</p>\n<div class=\"eli\"><span class=\"tag\">ELI5</span> Devengado = anoto la cuenta de la luz de diciembre en diciembre, aunque la pague en enero. Empresa en marcha = armo los números asumiendo que la empresa sigue abierta el año que viene (si fuera a cerrar mañana, todo se valuaría distinto).</div>"
        },
        {
            "id": "n-k-p2b",
            "title": "P2 · Ajustes y hoja de trabajo",
            "part": "P2",
            "html": "<h3>2º Parcial · Ajustes por balance y hoja de trabajo (U8)</h3>\n<div class=\"idea\">✓ <b>Idea madre:</b> antes de cerrar, <b>ajusto</b> las cuentas para que reflejen la realidad (criterio de lo <b>devengado</b>: lo que corresponde al período, se haya cobrado/pagado o no). La <b>hoja de trabajo</b> ordena todo el cierre paso a paso.</div>\n<div class=\"eli\"><span class=\"tag\">ELI5</span> Ajustar es \"poner las cuentas al día\": reconocer lo que ya pasó aunque la plata todavía no se haya movido (un alquiler que debo, una máquina que se gastó un año).</div>\n<p>Durante el año registré las operaciones a medida que pasaban, pero al cierre las cuentas <b>no reflejan del todo la realidad</b>, y antes de armar los estados tengo que <b>ajustarlas</b>. El principio que manda acá es el de lo <b>devengado</b>: una ganancia o un gasto se reconoce <b>en el período al que corresponde</b>, se haya cobrado o pagado o no. Es lo contrario de lo \"percibido\" (que miraría solo cuándo se movió la plata). Ejemplo clásico: si en diciembre uso luz pero la factura me llega en enero, ese gasto es de <b>diciembre</b>, así que lo tengo que reconocer aunque todavía no lo pagué.</p>\n<h4>La llave de toda la unidad: ajustar por realidad vs. por ejercicio económico</h4>\n<p>La definición textual de la cátedra: ajustar es el <b>procedimiento de Teneduría de Libros que permite adecuar la contabilidad <i>a la realidad</i> o <i>al ejercicio económico</i></b>. Y acá engancha con la clasificación de cuentas de U4: <b>integrales</b> (Activo y Pasivo) vs. <b>diferenciales</b> (Resultados). Esa es la dicotomía que ordena todo:</p>\n<table>\n<tr><th>Tipo de ajuste</th><th>Sobre qué cuentas</th><th>Por qué se hace</th></tr>\n<tr><td><b>Por consideración de la REALIDAD</b></td><td><b>Integrales</b> (A y P)</td><td>El saldo contable no coincide con la realidad: corrección de errores/omisiones (arqueo, conciliación) y corrección de valores (deudores en gestión, concurso, incobrables, adelantos)</td></tr>\n<tr><td><b>Por consideración al EJERCICIO ECONÓMICO</b></td><td><b>Diferenciales</b> (Resultados)</td><td>Hay que dejar en el ejercicio <b>solo</b> sus ingresos y gastos (criterio de lo devengado): devengamiento y diferimiento</td></tr>\n</table>\n<p>Los ajustes <b>por ejercicio económico</b> (los que más caen) se ordenan en <b>3 grupos</b>. <b>Grupo 1 — registré de MENOS</b>: faltan gastos o ingresos del ejercicio (un gasto a pagar, un ingreso a cobrar) → los reconozco y creo el pasivo/activo correspondiente. <b>Grupo 2 — registré de MÁS</b>: cargué como gasto o ganancia algo que excede el ejercicio (alquiler pagado o cobrado por adelantado) → posterga el resultado y lo llevo a un activo (gasto adelantado) o pasivo (ingreso adelantado). <b>Grupo 3 — casos especiales</b>: <b>intereses perdidos, intereses ganados y seguros</b>, que se ajustan con <b>cuentas regularizadoras</b> (\"a vencer\").</p>\n<div class=\"key\"><span class=\"tag\">Cuentas regularizadoras y extornos</span> Las cuentas \"<b>a vencer</b>\" regularizan: <i>Intereses perdidos a vencer</i> y <i>Seguros a vencer</i> regularizan un <b>pasivo</b>; <i>Intereses ganados a vencer</i> y la <i>Provisión para incobrables</i> regularizan un <b>activo</b>. Los ajustes de los Grupos 2 y 3 se <b>extornan</b> el <b>primer día del ejercicio siguiente</b> (tras la reapertura). Trampa: en el Grupo 1 las cuentas de resultado quedan en <b>cero</b> tras el extorno; en los Grupos 2 y 3 <b>no</b> — el saldo trasladado se vuelve pérdida/ganancia del <b>nuevo</b> ejercicio.</div>\n<div class=\"trap\"><span class=\"tag\">Ojo con la trampa</span> <b>No compensar</b> saldos deudores y acreedores de una misma cuenta: si un deudor te dejó una seña, eso es un <b>pasivo</b> (Adelanto de clientes), no se \"netea\" contra Deudores. Lo mismo con Anticipo a proveedores (activo).</div>\n<h4>Hoja de Trabajo (U9): la planilla que cierra el ejercicio</h4>\n<p>La <b>Hoja de Trabajo</b> es un elemento <b>extracontable y no obligatorio</b> (ojo, los ajustes <b>sí</b> van al Diario y al Mayor; la hoja es solo el borrador que ordena todo). Sirve para <b>determinar el resultado</b> y armar los asientos de cierre. Tiene <b>6 pares de columnas</b> que se llenan de izquierda a derecha, cada una arrastrando a la siguiente:</p>\n<ol class=\"steps\">\n<li><b>Números</b> (Débitos / Créditos): las sumas del Mayor.</li>\n<li><b>Saldos</b> (Deudor / Acreedor): el balancete de saldos. Σ deudores = Σ acreedores.</li>\n<li><b>Ajustes</b> (Debe / Haber): los débitos y créditos de los asientos de ajuste (si nace una cuenta nueva, entra con saldo inicial cero).</li>\n<li><b>Saldos ajustados</b> (Deudor / Acreedor): saldos ± ajustes.</li>\n<li><b>Estado de Resultados</b> (Pérdidas / Ganancias): van las cuentas <b>diferenciales</b>.</li>\n<li><b>Estado de Situación</b> (Activo / Pasivo y Patrimonio): van las <b>integrales</b>.</li>\n</ol>\n<p>Cada cuenta se clasifica en <b>una sola</b> columna (no se reparte). El <b>Resultado del Ejercicio</b> es la diferencia entre Ganancias y Pérdidas, y se anota —acá está la trampa— en la columna del ER con el <b>menor valor</b> (para que los totales cuadren): si hubo <b>ganancia</b>, el resultado va en la columna de <b>Pérdidas</b>; si hubo <b>pérdida</b>, en la de <b>Ganancias</b>. En el Estado de Situación va siempre en <b>Pasivo y Patrimonio</b> (es una cuenta de Patrimonio): positivo si ganancia, negativo si pérdida.</p>\n<h4>Los 3 asientos de resultados (con la cuenta puente)</h4>\n<p>Para cerrar las cuentas de resultado (que son acumulativas y tienen que arrancar de cero el año siguiente) se usa una <b>cuenta puente / de movimiento: \"Pérdidas y Ganancias\"</b>. Son <b>3 asientos</b>: (1) <b>cierro las pérdidas</b> contra Pérdidas y Ganancias (debito P y G, acredito cada pérdida); (2) <b>cierro las ganancias</b> contra Pérdidas y Ganancias (debito cada ganancia, acredito P y G); (3) <b>registro el resultado</b> pasando el saldo de Pérdidas y Ganancias a la cuenta patrimonial <b>Resultado del Ejercicio</b>. Después de los tres, <b>Pérdidas y Ganancias queda saldada (en cero)</b>. Por último, el <b>asiento de cierre de libros</b> cancela todas las cuentas de Activo, Pasivo y Patrimonio (¡sin olvidar incluir Resultado del Ejercicio!), y el primer día del año siguiente se reabre extornándolo.</p>\n<div class=\"eli\"><span class=\"tag\">ELI5</span> \"Pérdidas y Ganancias\" es un <b>balde</b> donde volcás todas las pérdidas y todas las ganancias del año. Lo que queda en el balde es tu resultado, y lo vaciás en \"Resultado del Ejercicio\". El balde tiene que quedar <b>vacío</b>.</div>\n<div class=\"trap\"><span class=\"tag\">Ojo con la trampa</span> La Hoja de Trabajo es <b>extracontable</b> (los ajustes igual van al Diario/Mayor). El resultado se anota en la columna del ER del <b>menor</b> valor. Y son <b>3</b> asientos de resultados; la cuenta puente \"Pérdidas y Ganancias\" tiene que quedar <b>saldada</b>.</div>"
        },
        {
            "id": "n-k-rec",
            "title": "Recetas de examen",
            "part": "General",
            "html": "<h3>Recetas de examen — tipos de ejercicio (revisiones reales)</h3>\n<p class=\"tagline\">Sacado de las revisiones reales (Primera Revisión Mayo 2026 + ejercicios de 2ª revisión). Primero el formato, después la receta por tipo. Foco en el 2º parcial, que es el que rendís.</p>\n<div class=\"key\"><span class=\"tag\">★ Formato del examen</span> <b>1ª revisión (1er parcial, U1-U6):</b> 10 preguntas, ~5 numéricas + ~5 de opción múltiple; entregás un número o una letra (el desarrollo lo hacés en borrador). <b>2ª revisión (2º parcial, U7-U9):</b> <b>desarrollo largo</b> — completar Hoja de Trabajo y/o presentar Ajustes por Balance + Extornos, asientos de Resultados y Cierre. <b>Siempre desglosá el IVA antes de calcular</b> (en los ejercicios modernos la tasa es 20%).</div>\n<h4>2º Parcial · las 3 familias (en orden de frecuencia)</h4>\n<div class=\"key\"><span class=\"tag\">⭐ Receta 1 — Hoja de Trabajo + asientos de Resultados y Cierre (la más frecuente)</span> Te dan un <b>balancete de saldos</b> y piden completar la HT, los asientos de Resultados, de Cierre (y a veces Reapertura).</div>\n<ol class=\"steps\">\n<li><b>Naturaleza de cada saldo</b> (deudor/acreedor). Si hay incógnitas (X, Y), resolvelas primero (Receta 3).</li>\n<li><b>Clasificar cada cuenta</b>: las <b>diferenciales</b> (Costo de Ventas, Sueldos, Seguros, Intereses, Ventas, Descuentos…) van al <b>Estado de Resultados</b>; las <b>integrales</b> (Caja, Banco, Mercaderías, Deudores, Acreedores, IVA, BPS, Capital…) al <b>Estado de Situación</b>.</li>\n<li><b>Sumar columnas</b>: Ganancias − Pérdidas = <b>Resultado del Ejercicio</b>, que se lleva a la columna del menor valor del ER y a Pasivo+Patrimonio de Situación para que ambos pares cuadren.</li>\n<li><b>Asiento de Resultados</b>: cerrar ganancias y pérdidas contra la cuenta puente <b>Pérdidas y Ganancias</b>; su saldo (el resultado) va a Capital o \"Resultado del Ejercicio\".</li>\n<li><b>Asiento de Cierre</b>: debitar pasivos+patrimonio (incl. Capital y Resultado) contra los activos. <b>Reapertura</b> = el inverso, el 1er día del nuevo ejercicio.</li>\n</ol>\n<div class=\"trap\"><span class=\"tag\">Trampas de la HT</span> La <b>Cuenta Particular del dueño</b>: si es un préstamo del dueño a la empresa, es <b>PASIVO</b> (la empresa le debe). El <b>IVA</b>: saldo deudor = crédito a favor (Activo); acreedor = obligación (Pasivo) — no es cuenta de resultado. <b>Provisión para aguinaldo</b> = Pasivo. Y no te olvides de llevar el <b>Resultado</b> a Situación, o no cuadra.</div>\n<div class=\"key\"><span class=\"tag\">⭐ Receta 2 — Ajustes por Balance + Extornos</span> El <b>ajuste lleva fecha de cierre (30.6)</b>; el <b>extorno, el día siguiente (1.7)</b>. Regla madre: separar lo <b>devengado</b> (ya consumido/ganado → va a resultado) de lo <b>no devengado / a vencer</b> (queda en cuenta transitoria). El extorno revierte lo no devengado.</div>\n<table>\n<tr><th>Sub-tipo</th><th>Cómo se resuelve</th><th>Trampa</th></tr>\n<tr><td><b>Seguros</b> (prorrateo de pólizas) — casi siempre cae</td><td>Para cada póliza (suelen ser 2: Hurto e Incendio), armar las 4 cuentas: <b>Seguros</b> (devengado), <b>Seguros pagados por adelantado</b> (Activo), <b>Seguros a vencer</b> (reg. de pasivo), <b>Seguros a pagar</b> (Pasivo). Prima/meses de vigencia × meses transcurridos = devengado.</td><td>Mezclar las 2 pólizas; prorratear desde la fecha de <b>contratación</b> en vez de la de <b>vigencia</b>; olvidar la parte impaga.</td></tr>\n<tr><td><b>Intereses</b> (perdidos/ganados a vencer)</td><td>Al cierre, mandar a resultado la parte <b>devengada</b>; el resto queda \"a vencer\". Ajuste contra la cuenta a vencer; extorno 1.7 la revierte a la cuenta de resultado.</td><td>Confundir \"a vencer\" (reg. de pasivo, los perdidos) con la de ganados (reg. de activo).</td></tr>\n<tr><td><b>Alquileres</b> (cobrados/pagados por adelantado)</td><td>Prorratear por meses transcurridos. Lo no devengado se difiere (a vencer / por adelantado).</td><td>El saldo a veces viene del asiento de reapertura, y hay aumentos de tarifa a mitad de ejercicio.</td></tr>\n<tr><td><b>Deudores</b>: incobrables, concurso, anticipos, previsión</td><td>Cliente fugado → Deudores Incobrables (pérdida). Saldo acreedor de un deudor → <b>Anticipo de Clientes</b> (Pasivo). Concurso con quita → Quita por Concurso (pérdida) + Deudores por Concurso. Estimación global → Previsión para Incobrables.</td><td>Confundir saldo acreedor de un deudor (anticipo, pasivo) con un incobrable. Poner el extorno en la fecha del ajuste, o que <b>no corresponda extorno</b>.</td></tr>\n</table>\n<div class=\"key\"><span class=\"tag\">Receta 3 — Determinación de incógnitas (X1, X2…)</span> Vienen pegadas a la HT. Los 4 clásicos: <b>Ventas</b> (desde Costo y %utilidad: si es sobre venta, Ventas = Costo×100/(100−%ut)); <b>IVA</b> (por diferencia: débitos − créditos); <b>Vale a pagar</b> (nominal = líquido + intereses); <b>Cuenta Particular</b> (por diferencia o por movimientos: retiros vs aportes).</div>\n<h4>1er Parcial · recetas por tipo</h4>\n<table>\n<tr><th>Tipo · cómo lo reconozco</th><th>Cómo se resuelve</th><th>Trampa</th></tr>\n<tr><td><b>Recursos y Fuentes</b> (aporte inicial) — numérica</td><td>Recursos = bienes que entran. Fuentes = de dónde salen: ajenas (préstamo, acreedores) + propias (lo que cada socio puso). Recursos = Fuentes.</td><td>Contar como propio lo comprado a crédito. El alquiler mensual no es aporte inicial.</td></tr>\n<tr><td><b>Capital inicial</b> — numérica</td><td><b>Capital = Activos aportados − Pasivos asumidos</b>. Cheques/conformes a cobrar suman; conformes a pagar y mercadería a crédito restan.</td><td>Olvidar restar el conforme a pagar o la mercadería a crédito.</td></tr>\n<tr><td><b>% Utilidad / Costo de Venta</b> — numérica</td><td>1) Desglosar IVA: Venta sin IVA = Importe/1,20. 2) Si util es sobre venta: Costo = Venta sin IVA × (100−%ut)/100.</td><td>Calcular el % sobre el monto CON IVA. Confundir sobre venta vs sobre costo.</td></tr>\n<tr><td><b>Saldo de una cuenta</b> (Deudores/IVA) — numérica</td><td>Llevar el mayor: suben con ventas a crédito y notas de débito (con IVA); bajan con cobros y notas de crédito por devolución (con IVA).</td><td>Olvidar el IVA. Mezclar la devolución de compras (Acreedores) con Deudores.</td></tr>\n<tr><td><b>Sueldos / saldo BPS</b> — numérica</td><td>3 asientos (adelanto, liquidación, leyes sociales). <b>BPS</b> = aporte obrero (20%) + patronal (10%) + sobre ficto (25%), todo sobre el <b>nominal/ficto</b>.</td><td>Olvidar el aporte <b>sobre el ficto patronal</b> (el más grande). Confundir BPS con BSE.</td></tr>\n<tr><td><b>Permutativo vs Modificativo</b> — opción múltiple</td><td>Permutativo = solo cambia la composición (cobrar un cheque, canjear acreedor por conforme). Modificativo = afecta el patrimonio vía un resultado (cualquier gasto/ganancia).</td><td>Un asiento con cuenta de resultado SIEMPRE es modificativo, aunque parezca un simple movimiento.</td></tr>\n<tr><td><b>Comprobantes / Registración</b> — opción múltiple</td><td>Asociar hecho → comprobante (gasto bancario = Nota de Débito Bancaria; compra contado = Boleta; crédito = Factura). Registrar desglosando IVA y según la forma de cobro/pago.</td><td>Confundir Nota de Crédito vs Débito; Boleta (contado) vs Factura (crédito). Acreditar Deudores en una venta al contado (es Caja).</td></tr>\n</table>\n<h4>Grilla de respuestas — Revisión Mayo 2026 Tanda 1 (para autocorrección)</h4>\n<table>\n<tr><th>Versión</th><th>P1 Rec</th><th>P2 Cap</th><th>P3 %Ut</th><th>P4 Saldo</th><th>P5 BPS</th><th>P6</th><th>P7</th><th>P8</th><th>P9</th><th>P10</th></tr>\n<tr><td>V1</td><td>3600</td><td>300</td><td>375</td><td>200</td><td>8000</td><td>b</td><td>c</td><td>a</td><td>a</td><td>a</td></tr>\n<tr><td>V2</td><td>3800</td><td>600</td><td>360</td><td>110</td><td>9600</td><td>c</td><td>a</td><td>c</td><td>b</td><td>c</td></tr>\n<tr><td>V3</td><td>3550</td><td>900</td><td>300</td><td>190</td><td>6400</td><td>a</td><td>c</td><td>a</td><td>c</td><td>a</td></tr>\n<tr><td>V4</td><td>4900</td><td>1200</td><td>400</td><td>210</td><td>8800</td><td>c</td><td>b</td><td>b</td><td>a</td><td>b</td></tr>\n</table>"
        },
        {
            "id": "n-k-trap",
            "title": "Trampas",
            "part": "General",
            "html": "<h3>Trampas típicas</h3>\n<div class=\"trap\"><span class=\"tag\">P1</span> Acto administrativo vs hecho económico: solo el segundo modifica el patrimonio.</div>\n<div class=\"trap\"><span class=\"tag\">P1</span> Regla de registración: Activo y Pérdidas por el Debe; Pasivo, Patrimonio y Ganancias por el Haber.</div>\n<div class=\"trap\"><span class=\"tag\">P1</span> Utilidad sobre costo ≠ sobre venta. Leé bien la base.</div>\n<div class=\"trap\"><span class=\"tag\">P2</span> Patrimoniales van al Balance; las de resultado al Estado de Resultados. No las mezcles.</div>\n<div class=\"trap\"><span class=\"tag\">P2</span> Todo ajuste toca dos cuentas y la hoja de trabajo tiene que cuadrar.</div>"
        }
    ],
    "flashcards": [
        {
            "g": "Tarjetas del apunte",
            "q": "Ecuación contable",
            "a": "Activo = Pasivo + Patrimonio Neto. Por eso los asientos balancean."
        },
        {
            "g": "Tarjetas del apunte",
            "q": "Regla de registración",
            "a": "Activo y Pérdidas aumentan por el Debe. Pasivo, Patrimonio y Ganancias por el Haber."
        },
        {
            "g": "Tarjetas del apunte",
            "q": "Permutativo vs modificativo",
            "a": "Permutativo: cambia la composición, no el monto. Modificativo: cambia el monto (ganancia/pérdida)."
        },
        {
            "g": "Tarjetas del apunte",
            "q": "Diario vs Mayor",
            "a": "Diario: registra por fecha. Mayor: agrupa por cuenta y da el saldo."
        },
        {
            "g": "Tarjetas del apunte",
            "q": "Cuentas patrimoniales vs de resultado",
            "a": "Patrimoniales (Activo/Pasivo/PN) → Balance. De resultado (ganancias/pérdidas) → Estado de Resultados."
        },
        {
            "g": "Tarjetas del apunte",
            "q": "¿Qué es un ajuste por balance?",
            "a": "Una registración al cierre para reflejar lo devengado (amortizaciones, devengados, previsiones) antes de armar los estados."
        },
        {
            "g": "Patrimonio y hechos económicos (U1–U3)",
            "q": "Ecuación contable",
            "a": "Activo = Pasivo + Patrimonio Neto. Por eso los asientos balancean."
        },
        {
            "g": "Patrimonio y hechos económicos (U1–U3)",
            "q": "¿Qué es el Activo?",
            "a": "Los recursos que la empresa controla y tienen utilidad económica (lo que tiene)."
        },
        {
            "g": "Patrimonio y hechos económicos (U1–U3)",
            "q": "¿Qué es el Pasivo?",
            "a": "Las obligaciones con terceros (lo que debe)."
        },
        {
            "g": "Patrimonio y hechos económicos (U1–U3)",
            "q": "¿Qué es el Patrimonio Neto?",
            "a": "La diferencia Activo − Pasivo (lo que es del dueño)."
        },
        {
            "g": "Patrimonio y hechos económicos (U1–U3)",
            "q": "¿Qué es la contabilidad?",
            "a": "Un sistema de información sobre el patrimonio, sus variaciones y resultados."
        },
        {
            "g": "Patrimonio y hechos económicos (U1–U3)",
            "q": "Acto administrativo",
            "a": "No modifica el patrimonio (ej. emitir una orden de compra)."
        },
        {
            "g": "Patrimonio y hechos económicos (U1–U3)",
            "q": "Hecho económico",
            "a": "Sí modifica el patrimonio (comprar, vender, pagar, cobrar)."
        },
        {
            "g": "Patrimonio y hechos económicos (U1–U3)",
            "q": "Hecho permutativo",
            "a": "Cambia la composición del patrimonio, pero no el monto."
        },
        {
            "g": "Patrimonio y hechos económicos (U1–U3)",
            "q": "Hecho modificativo",
            "a": "Cambia el monto del patrimonio (genera ganancia o pérdida)."
        },
        {
            "g": "Patrimonio y hechos económicos (U1–U3)",
            "q": "Hecho mixto",
            "a": "Cambia composición y monto a la vez (ej. venta con utilidad)."
        },
        {
            "g": "Patrimonio y hechos económicos (U1–U3)",
            "q": "Usuarios internos",
            "a": "Directores y gerentes: usan informes de gestión."
        },
        {
            "g": "Patrimonio y hechos económicos (U1–U3)",
            "q": "Usuarios externos",
            "a": "Bancos, DGI, proveedores: usan los estados financieros."
        },
        {
            "g": "Patrimonio y hechos económicos (U1–U3)",
            "q": "Comprobante",
            "a": "El documento que respalda un hecho económico."
        },
        {
            "g": "Patrimonio y hechos económicos (U1–U3)",
            "q": "Ejercicio económico",
            "a": "El período (normalmente un año) que se mide."
        },
        {
            "g": "Patrimonio y hechos económicos (U1–U3)",
            "q": "Finalidad de la contabilidad",
            "a": "Brindar información para tomar decisiones y controlar."
        },
        {
            "g": "Patrimonio y hechos económicos (U1–U3)",
            "q": "Estados financieros",
            "a": "Situación financiera, resultados, cambios en el patrimonio y flujo de efectivo."
        },
        {
            "g": "Cuentas, Debe/Haber y asientos (U4–U6)",
            "q": "Debe y Haber",
            "a": "Debe es el lado izquierdo de la cuenta; Haber es el derecho."
        },
        {
            "g": "Cuentas, Debe/Haber y asientos (U4–U6)",
            "q": "Debitar / Acreditar",
            "a": "Anotar en el Debe / anotar en el Haber."
        },
        {
            "g": "Cuentas, Debe/Haber y asientos (U4–U6)",
            "q": "Saldo deudor",
            "a": "Cuando el Debe es mayor que el Haber."
        },
        {
            "g": "Cuentas, Debe/Haber y asientos (U4–U6)",
            "q": "Saldo acreedor",
            "a": "Cuando el Haber es mayor que el Debe."
        },
        {
            "g": "Cuentas, Debe/Haber y asientos (U4–U6)",
            "q": "Regla de registración (Debe)",
            "a": "Activo y Pérdidas aumentan por el Debe."
        },
        {
            "g": "Cuentas, Debe/Haber y asientos (U4–U6)",
            "q": "Regla de registración (Haber)",
            "a": "Pasivo, Patrimonio y Ganancias aumentan por el Haber."
        },
        {
            "g": "Cuentas, Debe/Haber y asientos (U4–U6)",
            "q": "Plan de cuentas",
            "a": "La lista ordenada y codificada de cuentas (organiza)."
        },
        {
            "g": "Cuentas, Debe/Haber y asientos (U4–U6)",
            "q": "Manual de cuentas",
            "a": "Explica cómo se usa cada cuenta (guía)."
        },
        {
            "g": "Cuentas, Debe/Haber y asientos (U4–U6)",
            "q": "Compra de mercadería a crédito",
            "a": "Debe Mercaderías / Haber Proveedores."
        },
        {
            "g": "Cuentas, Debe/Haber y asientos (U4–U6)",
            "q": "Venta a crédito con su costo",
            "a": "Debe Deudores / Haber Ventas; y Debe Costo de ventas / Haber Mercaderías."
        },
        {
            "g": "Cuentas, Debe/Haber y asientos (U4–U6)",
            "q": "Cobro de deudor en efectivo",
            "a": "Debe Caja / Haber Deudores."
        },
        {
            "g": "Cuentas, Debe/Haber y asientos (U4–U6)",
            "q": "Pago a proveedor con cheque",
            "a": "Debe Proveedores / Haber Banco."
        },
        {
            "g": "Cuentas, Debe/Haber y asientos (U4–U6)",
            "q": "¿Por qué balancea un asiento?",
            "a": "Porque el total del Debe = total del Haber (refleja A=P+PN)."
        },
        {
            "g": "Cuentas, Debe/Haber y asientos (U4–U6)",
            "q": "Costo de ventas",
            "a": "La baja de la mercadería vendida; va al Debe (es una pérdida)."
        },
        {
            "g": "Cuentas, Debe/Haber y asientos (U4–U6)",
            "q": "Devolución de compra",
            "a": "Se revierte: Debe Proveedores / Haber Mercaderías."
        },
        {
            "g": "Cuentas, Debe/Haber y asientos (U4–U6)",
            "q": "¿Cuántos efectos tiene una venta con costo?",
            "a": "Dos: el ingreso (Ventas) y la baja de la mercadería (Costo de ventas)."
        },
        {
            "g": "Comprobantes, IVA y sueldos",
            "q": "Factura",
            "a": "Documenta una venta (a crédito o al contado)."
        },
        {
            "g": "Comprobantes, IVA y sueldos",
            "q": "Recibo",
            "a": "Documenta un cobro o un pago de dinero."
        },
        {
            "g": "Comprobantes, IVA y sueldos",
            "q": "Nota de crédito",
            "a": "Disminuye una deuda ya facturada (devoluciones, ajustes)."
        },
        {
            "g": "Comprobantes, IVA y sueldos",
            "q": "Nota de débito",
            "a": "Aumenta una deuda ya facturada."
        },
        {
            "g": "Comprobantes, IVA y sueldos",
            "q": "Remito",
            "a": "Documenta la entrega de mercadería (sin precio)."
        },
        {
            "g": "Comprobantes, IVA y sueldos",
            "q": "Cheque",
            "a": "Una orden de pago contra una cuenta bancaria."
        },
        {
            "g": "Comprobantes, IVA y sueldos",
            "q": "IVA",
            "a": "Impuesto al valor agregado (tasa básica 22%, mínima 10%)."
        },
        {
            "g": "Comprobantes, IVA y sueldos",
            "q": "Utilidad sobre costo",
            "a": "Utilidad dividida el costo (U/Costo)."
        },
        {
            "g": "Comprobantes, IVA y sueldos",
            "q": "Utilidad sobre venta",
            "a": "Utilidad dividida el precio de venta (U/Venta)."
        },
        {
            "g": "Comprobantes, IVA y sueldos",
            "q": "¿Sobre costo o sobre venta?",
            "a": "Dan números distintos: hay que mirar bien qué pide la letra."
        },
        {
            "g": "Comprobantes, IVA y sueldos",
            "q": "Sueldo nominal",
            "a": "El sueldo antes de los descuentos."
        },
        {
            "g": "Comprobantes, IVA y sueldos",
            "q": "Sueldo líquido",
            "a": "Lo que cobra el trabajador: nominal menos los aportes."
        },
        {
            "g": "Comprobantes, IVA y sueldos",
            "q": "Aportes del trabajador",
            "a": "BPS y FONASA, que se descuentan del sueldo nominal."
        },
        {
            "g": "Comprobantes, IVA y sueldos",
            "q": "Leyes sociales patronales",
            "a": "Aportes que paga la empresa: son un costo."
        },
        {
            "g": "Comprobantes, IVA y sueldos",
            "q": "Cheque diferido",
            "a": "Cheque que se cobra o paga en una fecha futura."
        },
        {
            "g": "Comprobantes, IVA y sueldos",
            "q": "Conforme / Vale",
            "a": "Documento que reconoce una deuda a pagar."
        },
        {
            "g": "Proceso contable, resultados y ajustes (U7–U8)",
            "q": "Libro Diario",
            "a": "Registra las operaciones por fecha (los asientos)."
        },
        {
            "g": "Proceso contable, resultados y ajustes (U7–U8)",
            "q": "Libro Mayor",
            "a": "Agrupa los movimientos por cuenta y da su saldo."
        },
        {
            "g": "Proceso contable, resultados y ajustes (U7–U8)",
            "q": "Balance de saldos",
            "a": "Lista todas las cuentas con su saldo para controlar."
        },
        {
            "g": "Proceso contable, resultados y ajustes (U7–U8)",
            "q": "Cuentas patrimoniales",
            "a": "Activo, Pasivo y Patrimonio → van al Balance General."
        },
        {
            "g": "Proceso contable, resultados y ajustes (U7–U8)",
            "q": "Cuentas de resultado",
            "a": "Ganancias y Pérdidas → van al Estado de Resultados."
        },
        {
            "g": "Proceso contable, resultados y ajustes (U7–U8)",
            "q": "Resultado del ejercicio",
            "a": "Ganancias − Pérdidas. Si es positivo, hay utilidad."
        },
        {
            "g": "Proceso contable, resultados y ajustes (U7–U8)",
            "q": "¿Qué es un ajuste por balance?",
            "a": "Una registración al cierre para reflejar lo devengado antes de armar los estados."
        },
        {
            "g": "Proceso contable, resultados y ajustes (U7–U8)",
            "q": "Criterio de lo devengado",
            "a": "Reconocer lo que corresponde al período, se haya cobrado/pagado o no."
        },
        {
            "g": "Proceso contable, resultados y ajustes (U7–U8)",
            "q": "Amortización",
            "a": "Reconoce el desgaste del activo fijo como gasto (pérdida) del período."
        },
        {
            "g": "Proceso contable, resultados y ajustes (U7–U8)",
            "q": "Previsión por incobrables",
            "a": "Reconoce una pérdida probable por deudores que quizá no paguen."
        },
        {
            "g": "Proceso contable, resultados y ajustes (U7–U8)",
            "q": "Extorno",
            "a": "Una reversión o corrección de una registración."
        },
        {
            "g": "Proceso contable, resultados y ajustes (U7–U8)",
            "q": "Hoja de trabajo",
            "a": "Ordena el cierre: saldos → ajustes → balance ajustado → resultados → balance general."
        },
        {
            "g": "Proceso contable, resultados y ajustes (U7–U8)",
            "q": "¿Cuántas cuentas toca un ajuste?",
            "a": "Dos (en general, una de resultado y una patrimonial)."
        },
        {
            "g": "Proceso contable, resultados y ajustes (U7–U8)",
            "q": "Cierre del ejercicio",
            "a": "Se cancelan las cuentas de resultado contra el patrimonio."
        },
        {
            "g": "Proceso contable, resultados y ajustes (U7–U8)",
            "q": "Utilidad y patrimonio",
            "a": "Si hay utilidad, el Patrimonio Neto aumenta."
        },
        {
            "g": "Proceso contable, resultados y ajustes (U7–U8)",
            "q": "Estado de Resultados vs Balance",
            "a": "Resultados muestra ganancias/pérdidas del período; el Balance, la situación a una fecha."
        }
    ],
    "questions": [
        {
            "g": "Autoevaluación del apunte",
            "q": "La ecuación contable es…",
            "opts": [
                "Activo = Pasivo + Patrimonio Neto",
                "Activo = Pasivo − Patrimonio",
                "Activo + Pasivo = Patrimonio"
            ],
            "ans": 0,
            "exp": "Lo que tengo = lo que debo + lo que es del dueño."
        },
        {
            "g": "Autoevaluación del apunte",
            "q": "¿Qué aumenta por el Debe?",
            "opts": [
                "Patrimonio y Ganancias",
                "Activo y Pérdidas",
                "Pasivo y Ganancias"
            ],
            "ans": 1,
            "exp": "Activo y Pérdidas por el Debe; Pasivo, Patrimonio y Ganancias por el Haber."
        },
        {
            "g": "Autoevaluación del apunte",
            "q": "Comprar mercadería al contado es un hecho…",
            "opts": [
                "un acto administrativo",
                "permutativo (cambia composición, no monto)",
                "modificativo (genera resultado)"
            ],
            "ans": 1,
            "exp": "Cambio caja por mercadería: misma magnitud de patrimonio, distinta composición."
        },
        {
            "g": "Autoevaluación del apunte",
            "q": "Las cuentas de resultado van al…",
            "opts": [
                "Balance General",
                "Estado de Resultados",
                "Libro Diario solamente"
            ],
            "ans": 1,
            "exp": "Ganancias y pérdidas → Estado de Resultados; patrimoniales → Balance."
        },
        {
            "g": "Autoevaluación del apunte",
            "q": "La amortización de una máquina en el ajuste anual…",
            "opts": [
                "es una pérdida y reduce el valor neto del activo",
                "es una ganancia",
                "no afecta el resultado"
            ],
            "ans": 0,
            "exp": "Reconoce el desgaste como gasto del período (baja resultado y activo neto)."
        },
        {
            "g": "Patrimonio y hechos económicos",
            "q": "La ecuación contable es…",
            "opts": [
                "Activo = Pasivo + Patrimonio Neto",
                "Activo = Pasivo − Patrimonio",
                "Activo + Pasivo = Patrimonio"
            ],
            "ans": 0,
            "exp": "Lo que tengo = lo que debo + lo del dueño."
        },
        {
            "g": "Patrimonio y hechos económicos",
            "q": "El Activo es…",
            "opts": [
                "las deudas",
                "lo que la empresa controla (tiene)",
                "lo del dueño"
            ],
            "ans": 1,
            "exp": "Recursos con utilidad económica."
        },
        {
            "g": "Patrimonio y hechos económicos",
            "q": "El Pasivo es…",
            "opts": [
                "los recursos",
                "las obligaciones con terceros",
                "el patrimonio"
            ],
            "ans": 1,
            "exp": "Lo que la empresa debe."
        },
        {
            "g": "Patrimonio y hechos económicos",
            "q": "El Patrimonio Neto es…",
            "opts": [
                "solo el capital",
                "Activo + Pasivo",
                "Activo − Pasivo"
            ],
            "ans": 2,
            "exp": "Lo que queda para el dueño."
        },
        {
            "g": "Patrimonio y hechos económicos",
            "q": "Emitir una orden de compra es…",
            "opts": [
                "un hecho económico",
                "un acto administrativo",
                "un asiento"
            ],
            "ans": 1,
            "exp": "No modifica el patrimonio."
        },
        {
            "g": "Patrimonio y hechos económicos",
            "q": "Comprar mercadería al contado es un hecho…",
            "opts": [
                "modificativo",
                "mixto",
                "permutativo"
            ],
            "ans": 2,
            "exp": "Cambia composición, no monto."
        },
        {
            "g": "Patrimonio y hechos económicos",
            "q": "Pagar un gasto es un hecho…",
            "opts": [
                "permutativo",
                "acto administrativo",
                "modificativo"
            ],
            "ans": 2,
            "exp": "Genera una pérdida (cambia el monto)."
        },
        {
            "g": "Patrimonio y hechos económicos",
            "q": "Una venta con utilidad es un hecho…",
            "opts": [
                "solo modificativo",
                "mixto",
                "permutativo"
            ],
            "ans": 1,
            "exp": "Cambia composición y monto."
        },
        {
            "g": "Patrimonio y hechos económicos",
            "q": "Los bancos y la DGI son usuarios…",
            "opts": [
                "externos",
                "operativos",
                "internos"
            ],
            "ans": 0,
            "exp": "Usan los estados financieros."
        },
        {
            "g": "Patrimonio y hechos económicos",
            "q": "Un comprobante…",
            "opts": [
                "es un asiento",
                "es una cuenta",
                "respalda un hecho económico"
            ],
            "ans": 2,
            "exp": "Documenta el hecho."
        },
        {
            "g": "Patrimonio y hechos económicos",
            "q": "La finalidad de la contabilidad es…",
            "opts": [
                "solo pagar impuestos",
                "informar para decidir y controlar",
                "guardar facturas"
            ],
            "ans": 1,
            "exp": "Información para la gestión."
        },
        {
            "g": "Patrimonio y hechos económicos",
            "q": "El ejercicio económico es…",
            "opts": [
                "un asiento",
                "una cuenta",
                "el período que se mide (normalmente un año)"
            ],
            "ans": 2,
            "exp": "El período contable."
        },
        {
            "g": "Cuentas, Debe/Haber y asientos",
            "q": "El Debe es…",
            "opts": [
                "el lado izquierdo",
                "el saldo",
                "el lado derecho"
            ],
            "ans": 0,
            "exp": "Debe izquierda, Haber derecha."
        },
        {
            "g": "Cuentas, Debe/Haber y asientos",
            "q": "¿Qué aumenta por el Debe?",
            "opts": [
                "Pasivo y Ganancias",
                "Patrimonio y Ganancias",
                "Activo y Pérdidas"
            ],
            "ans": 2,
            "exp": "Regla de registración."
        },
        {
            "g": "Cuentas, Debe/Haber y asientos",
            "q": "¿Qué aumenta por el Haber?",
            "opts": [
                "Pasivo, Patrimonio y Ganancias",
                "solo el Activo",
                "Activo y Pérdidas"
            ],
            "ans": 0,
            "exp": "Regla de registración."
        },
        {
            "g": "Cuentas, Debe/Haber y asientos",
            "q": "Saldo deudor es…",
            "opts": [
                "Debe mayor que Haber",
                "Haber mayor que Debe",
                "Debe = Haber"
            ],
            "ans": 0,
            "exp": "Predomina el Debe."
        },
        {
            "g": "Cuentas, Debe/Haber y asientos",
            "q": "El plan de cuentas…",
            "opts": [
                "explica cómo usar cada cuenta",
                "es la lista ordenada de cuentas",
                "es el balance"
            ],
            "ans": 1,
            "exp": "Organiza; el manual guía."
        },
        {
            "g": "Cuentas, Debe/Haber y asientos",
            "q": "Comprar mercadería a crédito:",
            "opts": [
                "Debe Mercaderías / Haber Proveedores",
                "Debe Caja / Haber Ventas",
                "Debe Proveedores / Haber Mercaderías"
            ],
            "ans": 0,
            "exp": "Entra mercadería, nace una deuda."
        },
        {
            "g": "Cuentas, Debe/Haber y asientos",
            "q": "Cobrar a un deudor en efectivo:",
            "opts": [
                "Debe Banco / Haber Ventas",
                "Debe Caja / Haber Deudores",
                "Debe Deudores / Haber Caja"
            ],
            "ans": 1,
            "exp": "Entra caja, baja el deudor."
        },
        {
            "g": "Cuentas, Debe/Haber y asientos",
            "q": "Pagar a un proveedor con cheque:",
            "opts": [
                "Debe Banco / Haber Proveedores",
                "Debe Proveedores / Haber Banco",
                "Debe Caja / Haber Proveedores"
            ],
            "ans": 1,
            "exp": "Baja la deuda, sale del banco."
        },
        {
            "g": "Cuentas, Debe/Haber y asientos",
            "q": "En una venta con costo van…",
            "opts": [
                "dos efectos (ingreso y baja de mercadería)",
                "solo el costo",
                "solo el ingreso"
            ],
            "ans": 0,
            "exp": "Ventas y Costo de ventas."
        },
        {
            "g": "Cuentas, Debe/Haber y asientos",
            "q": "¿Por qué balancea un asiento?",
            "opts": [
                "porque el Debe = el Haber",
                "porque lo dice la DGI",
                "por casualidad"
            ],
            "ans": 0,
            "exp": "Refleja A=P+PN."
        },
        {
            "g": "Cuentas, Debe/Haber y asientos",
            "q": "Acreditar es…",
            "opts": [
                "anotar en el Debe",
                "cobrar",
                "anotar en el Haber"
            ],
            "ans": 2,
            "exp": "Haber = acreditar."
        },
        {
            "g": "Cuentas, Debe/Haber y asientos",
            "q": "El manual de cuentas…",
            "opts": [
                "es el Diario",
                "es la lista de cuentas",
                "explica cómo se usa cada cuenta"
            ],
            "ans": 2,
            "exp": "Guía; el plan organiza."
        },
        {
            "g": "Comprobantes, IVA y sueldos",
            "q": "La factura documenta…",
            "opts": [
                "una venta",
                "una entrega sin precio",
                "un cobro"
            ],
            "ans": 0,
            "exp": "La operación de venta."
        },
        {
            "g": "Comprobantes, IVA y sueldos",
            "q": "El recibo documenta…",
            "opts": [
                "una venta a crédito",
                "un cobro o pago de dinero",
                "una entrega"
            ],
            "ans": 1,
            "exp": "Movimiento de dinero."
        },
        {
            "g": "Comprobantes, IVA y sueldos",
            "q": "La nota de crédito…",
            "opts": [
                "es una venta nueva",
                "aumenta una deuda",
                "disminuye una deuda facturada"
            ],
            "ans": 2,
            "exp": "Por devoluciones o ajustes a la baja."
        },
        {
            "g": "Comprobantes, IVA y sueldos",
            "q": "El remito documenta…",
            "opts": [
                "la entrega de mercadería (sin precio)",
                "la venta",
                "el cobro"
            ],
            "ans": 0,
            "exp": "Solo la entrega."
        },
        {
            "g": "Comprobantes, IVA y sueldos",
            "q": "La tasa básica del IVA es…",
            "opts": [
                "22%",
                "21%",
                "10%"
            ],
            "ans": 0,
            "exp": "Básica 22%, mínima 10%."
        },
        {
            "g": "Comprobantes, IVA y sueldos",
            "q": "Utilidad sobre costo es…",
            "opts": [
                "U/Costo",
                "Costo/Venta",
                "U/Venta"
            ],
            "ans": 0,
            "exp": "Margen sobre el costo."
        },
        {
            "g": "Comprobantes, IVA y sueldos",
            "q": "Utilidad sobre venta es…",
            "opts": [
                "U/Costo",
                "Venta/Costo",
                "U/Venta"
            ],
            "ans": 2,
            "exp": "Margen sobre el precio."
        },
        {
            "g": "Comprobantes, IVA y sueldos",
            "q": "El sueldo líquido es…",
            "opts": [
                "solo el nominal",
                "el nominal menos los aportes",
                "el nominal más los aportes"
            ],
            "ans": 1,
            "exp": "Lo que cobra el trabajador."
        },
        {
            "g": "Comprobantes, IVA y sueldos",
            "q": "Las leyes sociales patronales son…",
            "opts": [
                "un costo de la empresa",
                "un ingreso",
                "un descuento al trabajador"
            ],
            "ans": 0,
            "exp": "Aportes que paga la empresa."
        },
        {
            "g": "Comprobantes, IVA y sueldos",
            "q": "Un cheque diferido…",
            "opts": [
                "se cobra en una fecha futura",
                "no es un comprobante",
                "se cobra ya"
            ],
            "ans": 0,
            "exp": "Pago a futuro."
        },
        {
            "g": "Comprobantes, IVA y sueldos",
            "q": "Compro a 80 y vendo a 100. Utilidad sobre costo:",
            "opts": [
                "25%",
                "20%",
                "80%"
            ],
            "ans": 0,
            "exp": "20/80=25%."
        },
        {
            "g": "Comprobantes, IVA y sueldos",
            "q": "Mismo caso, utilidad sobre venta:",
            "opts": [
                "25%",
                "100%",
                "20%"
            ],
            "ans": 2,
            "exp": "20/100=20%."
        },
        {
            "g": "Proceso contable, resultados y ajustes",
            "q": "El Libro Diario…",
            "opts": [
                "es el balance",
                "registra las operaciones por fecha",
                "agrupa por cuenta"
            ],
            "ans": 1,
            "exp": "Asientos cronológicos."
        },
        {
            "g": "Proceso contable, resultados y ajustes",
            "q": "El Libro Mayor…",
            "opts": [
                "agrupa por cuenta y da el saldo",
                "es un comprobante",
                "registra por fecha"
            ],
            "ans": 0,
            "exp": "Por cuenta."
        },
        {
            "g": "Proceso contable, resultados y ajustes",
            "q": "Las cuentas de resultado van al…",
            "opts": [
                "Diario solamente",
                "Estado de Resultados",
                "Balance General"
            ],
            "ans": 1,
            "exp": "Ganancias y pérdidas."
        },
        {
            "g": "Proceso contable, resultados y ajustes",
            "q": "Las cuentas patrimoniales van al…",
            "opts": [
                "Balance General",
                "Mayor solamente",
                "Estado de Resultados"
            ],
            "ans": 0,
            "exp": "Activo, Pasivo y PN."
        },
        {
            "g": "Proceso contable, resultados y ajustes",
            "q": "El resultado del ejercicio es…",
            "opts": [
                "Ganancias − Pérdidas",
                "Debe − Haber",
                "Activo − Pasivo"
            ],
            "ans": 0,
            "exp": "Si es positivo, hay utilidad."
        },
        {
            "g": "Proceso contable, resultados y ajustes",
            "q": "Un ajuste por balance…",
            "opts": [
                "es un cobro",
                "es una venta",
                "refleja lo devengado al cierre"
            ],
            "ans": 2,
            "exp": "Pone las cuentas al día."
        },
        {
            "g": "Proceso contable, resultados y ajustes",
            "q": "La amortización de una máquina…",
            "opts": [
                "no afecta el resultado",
                "es una ganancia",
                "es una pérdida y reduce el valor neto del activo"
            ],
            "ans": 2,
            "exp": "Reconoce el desgaste."
        },
        {
            "g": "Proceso contable, resultados y ajustes",
            "q": "El criterio de lo devengado…",
            "opts": [
                "solo registra lo cobrado",
                "ignora lo no pagado",
                "reconoce lo del período aunque no se cobre/pague"
            ],
            "ans": 2,
            "exp": "Lo que corresponde al período."
        },
        {
            "g": "Proceso contable, resultados y ajustes",
            "q": "La previsión por incobrables…",
            "opts": [
                "reconoce una pérdida probable",
                "aumenta el activo",
                "es una ganancia"
            ],
            "ans": 0,
            "exp": "Deudores que quizá no paguen."
        },
        {
            "g": "Proceso contable, resultados y ajustes",
            "q": "La hoja de trabajo…",
            "opts": [
                "ordena el cierre paso a paso",
                "es un comprobante",
                "es una cuenta"
            ],
            "ans": 0,
            "exp": "Saldos, ajustes, balance, resultados."
        },
        {
            "g": "Proceso contable, resultados y ajustes",
            "q": "Cada ajuste toca…",
            "opts": [
                "dos cuentas",
                "una cuenta",
                "ninguna"
            ],
            "ans": 0,
            "exp": "Una de resultado y una patrimonial, en general."
        },
        {
            "g": "Proceso contable, resultados y ajustes",
            "q": "Si las Ganancias superan a las Pérdidas…",
            "opts": [
                "no pasa nada",
                "hay utilidad y sube el patrimonio",
                "hay pérdida"
            ],
            "ans": 1,
            "exp": "El resultado positivo aumenta el PN."
        }
    ],
    "exercises": [
        {
            "g": "Ejercicios del apunte",
            "title": "Ej 1 · Asiento de venta con costo",
            "html": "<p><b>Letra:</b> Vendo mercadería a crédito por $1.000; esa mercadería me había costado $600. Registrá el asiento.</p>\n<ol class=\"steps\">\n<li>Ingreso por la venta: <b>Debe</b> Deudores 1.000 / <b>Haber</b> Ventas 1.000.</li>\n<li>Baja del stock con su costo: <b>Debe</b> Costo de ventas 600 / <b>Haber</b> Mercaderías 600.</li>\n<li>Utilidad bruta de la operación: 1.000 − 600 = <b>$400</b>.</li>\n</ol>"
        },
        {
            "g": "Ejercicios del apunte",
            "title": "Ej 2 · Utilidad sobre costo vs sobre venta",
            "html": "<p><b>Letra:</b> Compro a $80 y vendo a $100. ¿Cuál es la utilidad sobre costo y sobre venta?</p>\n<ol class=\"steps\">\n<li>Utilidad = 100 − 80 = 20.</li>\n<li>Sobre costo: 20/80 = <b>25%</b>.</li>\n<li>Sobre venta: 20/100 = <b>20%</b>.</li>\n</ol>"
        },
        {
            "g": "Ejercicios del apunte",
            "title": "Ej 3 · Ajuste de amortización",
            "html": "<p><b>Letra:</b> Una máquina costó $12.000 y se amortiza en 10 años (lineal). Registrá el ajuste anual.</p>\n<ol class=\"steps\">\n<li>Amortización del año: 12.000 / 10 = $1.200.</li>\n<li>Asiento: <b>Debe</b> Amortización (pérdida) 1.200 / <b>Haber</b> Amortización acumulada 1.200.</li>\n<li>Efecto: baja el resultado y reduce el valor neto del activo fijo.</li>\n</ol>"
        },
        {
            "g": "Asientos tipo",
            "title": "Compra de mercadería a crédito",
            "q": "Compro mercadería a crédito por $5.000. Registrá el asiento.",
            "steps": [
                "Entra mercadería (activo, aumenta por el Debe) y nace una deuda (pasivo, aumenta por el Haber).",
                "Debe Mercaderías 5.000 / Haber Proveedores 5.000."
            ]
        },
        {
            "g": "Asientos tipo",
            "title": "Venta a crédito con su costo",
            "q": "Vendo a crédito por $8.000 mercadería que costó $5.000. Registrá.",
            "steps": [
                "Ingreso: Debe Deudores 8.000 / Haber Ventas 8.000.",
                "Baja del stock con su costo: Debe Costo de ventas 5.000 / Haber Mercaderías 5.000.",
                "Utilidad bruta: 8.000 − 5.000 = 3.000."
            ]
        },
        {
            "g": "Asientos tipo",
            "title": "Cobro de deudor en efectivo",
            "q": "Cobro $3.000 a un deudor, en efectivo.",
            "steps": [
                "Entra caja (activo, Debe) y baja el deudor (activo, Haber).",
                "Debe Caja 3.000 / Haber Deudores 3.000."
            ]
        },
        {
            "g": "Asientos tipo",
            "title": "Pago a proveedor con cheque",
            "q": "Pago $2.000 a un proveedor con cheque.",
            "steps": [
                "Baja la deuda (pasivo, Debe) y sale dinero del banco (activo, Haber).",
                "Debe Proveedores 2.000 / Haber Banco 2.000."
            ]
        },
        {
            "g": "Asientos tipo",
            "title": "Compra al contado en efectivo",
            "q": "Compro mercadería al contado por $1.500 en efectivo.",
            "steps": [
                "Entra mercadería (Debe) y sale caja (Haber). Es permutativo (no cambia el monto del patrimonio).",
                "Debe Mercaderías 1.500 / Haber Caja 1.500."
            ]
        },
        {
            "g": "Asientos tipo",
            "title": "Venta con IVA (22%)",
            "q": "Vendo a crédito por $1.000 más IVA 22%. Registrá.",
            "steps": [
                "IVA = 1.000·0,22 = 220. Total a cobrar = 1.220.",
                "Debe Deudores 1.220 / Haber Ventas 1.000 y Haber IVA ventas 220."
            ]
        },
        {
            "g": "Asientos tipo",
            "title": "Utilidad sobre costo vs sobre venta",
            "q": "Compro a $80 y vendo a $100. ¿Utilidad sobre costo y sobre venta?",
            "steps": [
                "Utilidad = 100 − 80 = 20.",
                "Sobre costo: 20/80 = 25%. Sobre venta: 20/100 = 20%."
            ]
        },
        {
            "g": "Asientos tipo",
            "title": "Pago de sueldos",
            "q": "El sueldo nominal es $20.000, con aportes del trabajador por $3.600. ¿Cuánto cobra (líquido)?",
            "steps": [
                "Líquido = nominal − aportes del trabajador.",
                "20.000 − 3.600 = 16.400."
            ]
        },
        {
            "g": "Ajustes y cierre",
            "title": "Amortización lineal",
            "q": "Una máquina costó $12.000 y se amortiza en 10 años. Registrá el ajuste anual.",
            "steps": [
                "Amortización del año: 12.000 / 10 = 1.200.",
                "Debe Amortización (pérdida) 1.200 / Haber Amortización acumulada 1.200. Baja el resultado y el valor neto del activo."
            ]
        },
        {
            "g": "Ajustes y cierre",
            "title": "Gasto devengado no pagado",
            "q": "Debo el alquiler del mes ($3.000) y todavía no lo pagué. Ajuste.",
            "steps": [
                "El gasto corresponde al período (devengado), aunque no se pagó.",
                "Debe Alquileres (pérdida) 3.000 / Haber Alquileres a pagar (pasivo) 3.000."
            ]
        },
        {
            "g": "Ajustes y cierre",
            "title": "Ingreso devengado no cobrado",
            "q": "Gané $500 de intereses que todavía no cobré. Ajuste.",
            "steps": [
                "El ingreso corresponde al período.",
                "Debe Intereses a cobrar (activo) 500 / Haber Intereses ganados (ganancia) 500."
            ]
        },
        {
            "g": "Ajustes y cierre",
            "title": "Previsión por incobrables",
            "q": "Estimo que $400 de deudores no se cobrarán. Ajuste.",
            "steps": [
                "Reconozco la pérdida probable.",
                "Debe Pérdida por incobrables 400 / Haber Previsión incobrables 400."
            ]
        },
        {
            "g": "Ajustes y cierre",
            "title": "Sueldos devengados a pagar",
            "q": "Se devengaron sueldos por $10.000 que se pagan el mes próximo. Ajuste.",
            "steps": [
                "El gasto es del período.",
                "Debe Sueldos (pérdida) 10.000 / Haber Sueldos a pagar (pasivo) 10.000."
            ]
        },
        {
            "g": "Ajustes y cierre",
            "title": "Resultado del ejercicio",
            "q": "Las Ganancias suman $50.000 y las Pérdidas $38.000. ¿Cuál es el resultado?",
            "steps": [
                "Resultado = Ganancias − Pérdidas = 50.000 − 38.000.",
                "= 12.000 de utilidad → aumenta el Patrimonio Neto."
            ]
        },
        {
            "g": "Ajustes y cierre",
            "title": "Clasificar cuentas",
            "q": "Indicá a qué estado van: Caja, Ventas, Proveedores, Costo de ventas.",
            "steps": [
                "Patrimoniales (Balance): Caja (activo), Proveedores (pasivo).",
                "De resultado (Estado de Resultados): Ventas (ganancia), Costo de ventas (pérdida)."
            ]
        },
        {
            "g": "Ajustes y cierre",
            "title": "Ecuación contable",
            "q": "El Activo es $80.000 y el Pasivo $30.000. ¿Cuál es el Patrimonio Neto?",
            "steps": [
                "PN = Activo − Pasivo.",
                "80.000 − 30.000 = 50.000."
            ]
        }
    ],
    "checklist": [
        "Domino la ecuación contable y distingo activo/pasivo/PN",
        "Aplico la regla de registración en cualquier asiento",
        "Hago asientos de compra, venta con costo, cobros y pagos",
        "Distingo comprobantes y calculo IVA y utilidad (costo vs venta)",
        "Entiendo Diario → Mayor → Balance y el resultado del ejercicio",
        "Hago los ajustes típicos (devengados, amortización, previsiones)",
        "Armo la hoja de trabajo paso a paso y cuadra"
    ]
};

export default data;
