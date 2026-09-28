// Subtemas, flashcards y preguntas por subtema de Conceptos Contables.
const deep = {
    subtopics: {
        t1: [
            {
                id: "t1.1",
                title: String.raw`Organizaciones y objetivos de la contabilidad`,
                eli5: String.raw`<p>Pensá en el club de fútbol del barrio. Hay gente (jugadores, técnico, tesorero), hay un objetivo (divertirse y ganar el campeonato), hay metas concretas (entrenar dos veces por semana, juntar plata para camisetas) y hay recursos (pelotas, cancha, la plata de la cuota). Eso es una <strong>organización</strong>.</p><p>El tesorero lleva un cuaderno donde anota cada peso que entra y sale. Con ese cuaderno la comisión decide si compra camisetas o si sube la cuota. Ese cuaderno es la <strong>contabilidad</strong>: no es un fin en sí, sirve para que alguien tome decisiones.</p>`,
                explain: String.raw`<h4>Elementos de toda organización</h4>
<ul><li>Un número de <strong>participantes</strong>.</li><li><strong>Objetivos básicos</strong> y <strong>metas específicas</strong> que se derivan de ellos.</li><li>Un <strong>ejercicio de actividad</strong> para lograr objetivos y metas.</li><li><strong>Recursos</strong> para desarrollar la actividad.</li></ul>
<p>Pueden tener o no fin de lucro, y ser públicas o privadas: todas necesitan información contable.</p>
<h4>La contabilidad como sistema de información</h4>
<p>Capta los hechos económicos de un <strong>ente</strong> (separado de sus dueños), los mide en moneda, los registra y produce informes para tomar decisiones.</p>
<table><tr><th>Informe</th><th>Usuarios</th><th>Rasgo</th></tr>
<tr><td>Estados financieros</td><td>Externos (bancos, proveedores, DGI, inversores)</td><td>Formato general, normado</td></tr>
<tr><td>Informes de gestión</td><td>Internos (dueños, gerentes, mandos medios)</td><td>A medida: detalle de cuentas por cobrar y por pagar, presupuestos</td></tr></table>
<p>El grado de detalle depende del nivel jerárquico: el <strong>nivel alto</strong> (Directorio) necesita información <strong>sintética</strong>; los niveles operativos, información detallada.</p>`,
                keys: [String.raw`Elementos: participantes, objetivos básicos, metas específicas, actividad y recursos.`, String.raw`La contabilidad es un sistema de información para decidir.`, String.raw`Usuarios externos: estados financieros. Internos: informes de gestión.`, String.raw`Directorio: información sintética, poco detalle.`, String.raw`Ente separado de los dueños.`],
                example: { q: String.raw`<p>¿Qué informe usarías para saber cuánto le debe cada cliente a la empresa, y quién lo lee?</p>`, sol: String.raw`<p>El detalle de cuentas por cobrar, que es un <strong>informe de gestión</strong> para usuarios internos (gerente, encargado de cobranzas). No es un estado financiero.</p>` },
            },
            {
                id: "t1.2",
                title: String.raw`Información contable: estados financieros y cualidades`,
                eli5: String.raw`<p>Si le pedís a un amigo que te cuente cómo le fue en el viaje, querés que te lo cuente <strong>a tiempo</strong> (no dentro de cinco años), que sea <strong>verdad</strong> (sin exagerar), que se <strong>entienda</strong> y que puedas <strong>comparar</strong> con el viaje del año pasado.</p><p>Con la información de una empresa pasa lo mismo. Los informes que salen hacia afuera se llaman <strong>estados financieros</strong>, y para que sirvan tienen que cumplir esas cualidades. Y así como una foto sola no cuenta todo el viaje, los estados vienen con <strong>notas</strong> que explican los números.</p>`,
                explain: String.raw`<h4>Objetivo de los estados financieros (NIIF para PYMES, 2.2)</h4>
<p>Informar sobre la <strong>situación financiera</strong>, el <strong>rendimiento</strong> (situación económica) y los <strong>flujos de efectivo</strong> de la entidad, útil para las decisiones económicas de muchos usuarios que no pueden pedir informes a medida.</p>
<h4>Juego completo</h4>
<ul><li>Estado de situación financiera.</li><li>Estado de resultados (o de resultado integral).</li><li>Estado de cambios en el patrimonio.</li><li>Estado de flujos de efectivo.</li><li><strong>Notas</strong> a los estados financieros (son parte: si una afirmación las deja afuera, es incorrecta).</li></ul>
<h4>Supuestos fundamentales</h4>
<p><strong>Devengado</strong> (los hechos se registran cuando ocurren, no cuando se cobra o paga) y <strong>empresa en marcha</strong> (se supone que la empresa sigue operando).</p>
<h4>Cualidades de la información útil</h4>
<p>Comprensibilidad, relevancia (pertinencia), materialidad, fiabilidad (representación fiel, neutral, sin sesgo, íntegra, prudente), esencia sobre forma, comparabilidad, oportunidad y equilibrio costo-beneficio.</p>`,
                keys: [String.raw`Objetivo: situación financiera, rendimiento y flujos de efectivo.`, String.raw`Los estados financieros incluyen las notas.`, String.raw`Supuestos fundamentales: devengado y empresa en marcha.`, String.raw`Cualidades: comprensible, relevante, fiable, comparable, oportuna.`],
                example: { q: String.raw`<p>Verdadero o falso: "Los estados financieros se integran exclusivamente por el Estado de situación, el de Resultados, el de Cambios en el patrimonio y el de Flujo de efectivo".</p>`, sol: String.raw`<p>Falso: faltan las <strong>Notas</strong>. Es exactamente la trampa que usó la cátedra en julio 2025 y diciembre 2025.</p>` },
            },
            {
                id: "t1.3",
                title: String.raw`Patrimonio: recursos, fuentes propias y ajenas`,
                eli5: String.raw`<p>Tu bici vale $ 10.000. Pagaste $ 6.000 con tus ahorros y $ 4.000 te los prestó tu tío. La bici es tu <strong>recurso</strong>. ¿De dónde salió? $ 4.000 de alguien de afuera a quien le debés (<strong>fuente ajena</strong>) y $ 6.000 tuyos (<strong>fuente propia</strong>).</p><p>Si mañana tuvieras que devolverle todo a tu tío, lo que te quedaría "de verdad" son $ 6.000. Eso es tu <strong>patrimonio</strong>: lo que tenés menos lo que debés.</p>`,
                explain: String.raw`<div class="box">\[ \text{Recursos} = \text{Fuentes ajenas} + \text{Fuentes propias} \]
\[ \text{Patrimonio neto} = \text{Recursos} - \text{Obligaciones} \]</div>
<ul><li><strong>Recursos</strong> (activo): lo que la empresa controla y le dará beneficios: Caja, Banco, Deudores, Mercaderías, Muebles, Vehículos, IVA compras, Adelantos al personal.</li><li><strong>Fuentes ajenas</strong> (pasivo, obligaciones): deudas con terceros: Acreedores, Conformes a pagar, Vales y Préstamos bancarios, IVA ventas, BPS, BSE, Sueldos a pagar.</li><li><strong>Fuentes propias</strong> (patrimonio): aportes de los dueños más los resultados que quedan en la empresa.</li></ul>
<p>Definición de la cátedra: el <strong>patrimonio neto</strong> es el derecho que tiene el propietario por el exceso de los recursos sobre las obligaciones.</p>
<p>Trampa de teórico: "el total de recursos debe ser igual al total de fuentes ajenas" es <strong>falso</strong>; es igual a ajenas <em>más</em> propias.</p>
<p>Una ganancia aumenta los recursos (o baja deudas) y aumenta las fuentes propias; una pérdida hace lo contrario.</p>`,
                keys: [String.raw`Recursos = Ajenas + Propias, siempre.`, String.raw`PN = derecho del propietario por el exceso de recursos sobre obligaciones.`, String.raw`IVA ventas, BPS y Sueldos a pagar son fuentes ajenas.`, String.raw`Las ganancias engordan las fuentes propias.`],
                example: { q: String.raw`<p>Caja 3.000, Deudores por ventas 5.000, Mercaderías 8.000, Acreedores por compras 6.000, Conformes a pagar 2.000, BPS 1.000. ¿Patrimonio neto?</p>`, sol: String.raw`<p>Recursos 16.000; obligaciones 9.000. PN = 16.000 − 9.000 = <strong>7.000</strong>.</p>` },
            },
            {
                id: "t1.4",
                title: String.raw`Aportes de los socios: qué es recurso y qué es fuente`,
                eli5: String.raw`<p>Tres amigos arman una empresa. Cada uno trae algo. La pregunta clave para cada cosa es doble: ¿qué entra a la empresa? y ¿quién va a pagar la deuda, si la hay?</p><p>Si Paco trae un auto y todavía se deben cuotas <strong>a nombre de la empresa</strong>, el auto entra entero, pero la empresa carga con la deuda. Si Paco se endeudó <strong>a su nombre</strong> y la paga él, para la empresa es como si lo hubiera pagado todo Paco. Y si firman un contrato de alquiler, eso es una promesa: no entra nada.</p>`,
                explain: String.raw`<table><tr><th>Aporte</th><th>Recurso</th><th>Ajena</th><th>Propia</th></tr>
<tr><td>Efectivo o bien pagado por el socio</td><td>Valor total</td><td>0</td><td>Valor total</td></tr>
<tr><td>Bien con préstamo a nombre de la <strong>empresa</strong></td><td>Valor total</td><td>El préstamo</td><td>Lo que puso el socio</td></tr>
<tr><td>Bien comprado a crédito a nombre de la <strong>empresa</strong></td><td>Valor total</td><td>Acreedores</td><td>0</td></tr>
<tr><td>Préstamo a nombre del <strong>socio</strong>, lo paga él</td><td>Lo aportado</td><td>0</td><td>Lo aportado</td></tr>
<tr><td>Alquiler, garantía, sueldo pactado</td><td colspan="3">Acto administrativo: no entra</td></tr></table>
<p>Cheque diferido de tercero que ya venció al día del inicio: se trata como efectivo (Caja).</p>
<p><strong>Clave oficial rara:</strong> cuando piden "recursos financieros aportados por los socios", la respuesta es el <strong>total de recursos</strong>, no las fuentes propias.</p>
<p>Procedimiento: tabla con una fila por socio, controlá que Recursos = Ajenas + Propias y leé qué total piden (rota entre recursos, propias y ajenas).</p>`,
                keys: [String.raw`El bien entra por su valor total aunque se deba.`, String.raw`Ajena solo si la deuda la paga la empresa.`, String.raw`Alquiler, garantía y sueldo pactado no suman.`, String.raw`"Recursos financieros aportados" = total de recursos.`, String.raw`Cheque diferido ya vencido al inicio = Caja.`],
                example: { q: String.raw`<p>Juan aporta $ 400 en efectivo y una impresora de $ 200. Pedro aporta una camioneta de $ 3.000: pagó $ 1.200 y el resto con un préstamo bancario sin intereses a nombre de la empresa. María aporta $ 300 en efectivo y mercaderías por $ 800 compradas a crédito simple a nombre de la empresa. Firman un alquiler de $ 150 por mes. Recursos, ajenas y propias.</p>`, sol: String.raw`<table><tr><th>Socio</th><th>Recursos</th><th>Ajenas</th><th>Propias</th></tr><tr><td>Juan</td><td>600</td><td>0</td><td>600</td></tr><tr><td>Pedro</td><td>3.000</td><td>1.800</td><td>1.200</td></tr><tr><td>María</td><td>1.100</td><td>800</td><td>300</td></tr><tr><td><strong>Total</strong></td><td><strong>4.700</strong></td><td><strong>2.600</strong></td><td><strong>2.100</strong></td></tr></table><p>El alquiler no se registra.</p>` },
            },
            {
                id: "t1.5",
                title: String.raw`Capital inicial y asiento de apertura`,
                eli5: String.raw`<p>El día que abrís el negocio hacés una foto: todo lo que tenés de un lado, todo lo que debés del otro. Lo que falta para que la foto quede pareja es lo que es tuyo de verdad: el <strong>capital</strong>.</p><p>Si traés $ 5.000 en cosas pero la empresa ya debe $ 3.000 de esas cosas, tu capital es $ 2.000. Por eso el capital nunca se suma directo: siempre sale por diferencia.</p>`,
                explain: String.raw`<div class="box">\[ \text{Capital} = \text{Activos aportados} - \text{Pasivos asumidos por la empresa} \]</div>
<table><tr><th>Aporte</th><th>Cuenta</th></tr>
<tr><td>Efectivo y cheques de terceros al día</td><td>Caja (debe)</td></tr>
<tr><td>Cheques de terceros diferidos</td><td>Cheques diferidos a cobrar (debe)</td></tr>
<tr><td>Conforme firmado por un tercero</td><td>Conformes a cobrar (debe)</td></tr>
<tr><td>Mercaderías, muebles, vehículos</td><td>La cuenta del bien (debe)</td></tr>
<tr><td>Conforme o vale que la empresa debe</td><td>Conformes a pagar / Vales (haber)</td></tr>
<tr><td>Bienes comprados a crédito a nombre de la empresa</td><td>Acreedores por compras (haber)</td></tr>
<tr><td>La diferencia</td><td>Capital (haber)</td></tr></table>
<p>En el P2 de la revisión cambia una sola frase entre tandas: si las mercaderías fueron "adquiridas a crédito simple a nombre de la empresa" hay que sumar Acreedores por compras al pasivo; si no lo dice, no hay deuda. Separar cheque al día y diferido no cambia el capital, pero sí el asiento.</p>`,
                keys: [String.raw`Capital = activos − pasivos, siempre por diferencia.`, String.raw`Cheque de tercero al día va a Caja junto con el efectivo.`, String.raw`Conforme a pagar aportado baja el capital.`, String.raw`Mercadería a crédito a nombre de la empresa suma Acreedores.`],
                example: { q: String.raw`<p>El dueño aporta: $ 3.000 en efectivo; cheques de terceros por $ 800 ($ 300 al día y $ 500 diferidos); un conforme a cobrar de $ 400; un conforme a pagar de $ 2.000; mercaderías por $ 1.500 compradas a crédito simple a nombre de la empresa. Capital y asiento.</p>`, sol: String.raw`<p>Activos: Caja 3.300, Cheques diferidos a cobrar 500, Conformes a cobrar 400, Mercaderías 1.500 = 5.700. Pasivos: Conformes a pagar 2.000 + Acreedores por compras 1.500 = 3.500. Capital = <strong>2.200</strong>.</p><p>Asiento: Caja 3.300, Cheques dif. a cobrar 500, Conformes a cobrar 400, Mercaderías 1.500 a Conformes a pagar 2.000, Acreedores por compras 1.500 y Capital 2.200.</p>` },
            },
        ],
        t2: [
            {
                id: "t2.1",
                title: String.raw`Hechos económicos y actos administrativos`,
                eli5: String.raw`<p>Si le decís a tu hermano "mañana te presto la bici", todavía no pasó nada: la bici sigue en tu casa. Eso es un <strong>acto administrativo</strong>: una promesa, un contrato, un trámite.</p><p>Cuando al otro día le das la bici, ahí sí cambió algo: ya no la tenés. Eso es un <strong>hecho económico</strong>. La contabilidad solo anota lo que cambia de verdad las cosas que tenés o que debés; las promesas se anotan recién el día que se cumplen.</p>`,
                explain: String.raw`<p>Un <strong>hecho económico</strong> modifica hoy los recursos, las obligaciones o el patrimonio del ente: se registra con un asiento y se respalda con un comprobante.</p>
<p>Un <strong>acto administrativo</strong> no cambia nada todavía, aunque pueda generar hechos económicos en el futuro. No se registra.</p>
<table><tr><th>Acto administrativo (no se registra)</th><th>Hecho económico que puede generar después</th></tr>
<tr><td>Firmar un contrato de alquiler</td><td>Pagar o devengar cada alquiler</td></tr>
<tr><td>Contratar a un empleado o pactar el sueldo de un socio</td><td>Liquidar el sueldo del mes</td></tr>
<tr><td>Salir de garante</td><td>Pagar si el deudor no paga</td></tr>
<tr><td>Pedir un préstamo aún no otorgado</td><td>Acreditación del préstamo (NCB)</td></tr>
<tr><td>Pedir un presupuesto o hacer una orden de compra</td><td>La compra con factura o boleta</td></tr></table>
<p>En el parcial aparecen como distractores dentro de P1 (aportes) o como opción "acto administrativo" en la clasificación.</p>`,
                keys: [String.raw`Hecho económico: cambia hoy recursos u obligaciones, se registra.`, String.raw`Acto administrativo: promesa, contrato o trámite, no se registra.`, String.raw`Alquiler firmado, garantía, sueldo pactado y préstamo pedido son actos administrativos.`],
                example: { q: String.raw`<p>¿Cuál se registra? a) Se firma un contrato de alquiler por $ 5.000 mensuales. b) Se paga el primer mes de alquiler en efectivo.</p>`, sol: String.raw`<p>Solo b), que es un hecho económico (Alquileres perdidos a Caja). a) es un acto administrativo.</p>` },
            },
            {
                id: "t2.2",
                title: String.raw`Variaciones permutativas`,
                eli5: String.raw`<p>Tenés $ 100 en el bolsillo y te comprás un libro de $ 100. ¿Sos más rico o más pobre? Ninguna de las dos: tenés lo mismo, en otra forma. Si le pagás $ 50 a un amigo al que le debías $ 50, tampoco cambiaste: tenés menos plata pero también debés menos.</p><p>Eso es una variación <strong>permutativa</strong>: se mueven las piezas, pero el total que es tuyo queda igual.</p>`,
                explain: String.raw`<p>Cambian la <strong>composición</strong> del patrimonio, no su monto. Solo se mueven activos y pasivos. Cuatro formas:</p>
<table><tr><th>Forma</th><th>Ejemplo</th></tr>
<tr><td>Activo sube, activo baja</td><td>Cobro a un deudor, depósito de Caja en Banco, vencimiento de cheque diferido de tercero, documentar un crédito con conforme, adelanto al personal</td></tr>
<tr><td>Activo sube, pasivo sube</td><td>Compra de mercadería o bien de uso a crédito (con IVA compras), préstamo sin intereses descontados</td></tr>
<tr><td>Activo baja, pasivo baja</td><td>Pago a un proveedor, pago del BPS o del líquido, vencimiento de un cheque diferido propio</td></tr>
<tr><td>Pasivo sube, pasivo baja</td><td>Documentar una deuda con conforme, entregar un cheque diferido propio a un proveedor</td></tr></table>
<p>Ojo: comprar mercadería es permutativo aunque "salga plata". La pérdida aparece recién al vender (costo de ventas).</p>`,
                keys: [String.raw`Permutativa: cambia la composición, no el monto del patrimonio.`, String.raw`Solo activos y pasivos en el asiento.`, String.raw`Pagar deudas, cobrar, comprar, documentar: permutativos.`, String.raw`El IVA compras es activo: no vuelve modificativa una compra.`],
                example: { q: String.raw`<p>Clasificá: Acreedores por compras 3.000 a Cheques diferidos a pagar 3.000.</p>`, sol: String.raw`<p>Pasivo baja y pasivo sube por igual importe: <strong>permutativa</strong>.</p>` },
            },
            {
                id: "t2.3",
                title: String.raw`Variaciones modificativas: aumentativas y disminutivas`,
                eli5: String.raw`<p>Si tu abuela te regala $ 100, sos más rico: nadie te lo va a reclamar. Si te comprás un helado y te lo comés, sos más pobre: la plata se fue y no queda nada a cambio.</p><p>Eso son las variaciones <strong>modificativas</strong>: cambia cuánto es tuyo. Si ganás, es <strong>aumentativa</strong>; si perdés, <strong>disminutiva</strong>. En la empresa, las ganancias son ventas, intereses que cobrás o descuentos que te hacen; las pérdidas son gastos, sueldos, costo de lo vendido o intereses que pagás.</p>`,
                explain: String.raw`<p>Cambian el <strong>monto</strong> del patrimonio porque aparece una cuenta de resultado.</p>
<table><tr><th>Aumentativas (ganancias, al Haber)</th><th>Disminutivas (pérdidas, al Debe)</th></tr>
<tr><td>Ventas</td><td>Costo de ventas</td></tr>
<tr><td>Intereses ganados</td><td>Intereses perdidos</td></tr>
<tr><td>Descuentos obtenidos</td><td>Descuentos concedidos</td></tr>
<tr><td>Reversión de costo de ventas por devolución (Mercaderías a Costo de ventas)</td><td>Gastos generales, Gastos bancarios, Comisiones perdidas</td></tr>
<tr><td></td><td>Sueldos, Leyes sociales</td></tr></table>
<p>Casos que confunden:</p>
<ul><li>Devolución de venta (Ventas e IVA ventas a Deudores): baja una ganancia, es <strong>disminutiva</strong>.</li><li>Préstamo con intereses descontados (Banco e Intereses perdidos a Vales): modificativo disminutivo por los intereses.</li><li>Venta por debajo del costo (vende 100, costo 180): modificativa; el patrimonio baja en cantidad (criterio de julio 2025).</li><li>Descuento obtenido en un pago: aumentativa.</li></ul>`,
                keys: [String.raw`Aparece una cuenta de resultado: modificativa.`, String.raw`Ganancia al Haber: aumentativa. Pérdida al Debe: disminutiva.`, String.raw`Devolución de venta: disminutiva. Reversión del costo: aumentativa.`, String.raw`Liquidar sueldos es disminutivo; pagarlos después es permutativo.`],
                example: { q: String.raw`<p>Clasificá: Acreedores por compras 10.000 a Descuentos obtenidos 1.000 y Banco c/c 9.000.</p>`, sol: String.raw`<p>Aparece una ganancia (Descuentos obtenidos) al Haber: <strong>modificativa aumentativa</strong>.</p>` },
            },
            {
                id: "t2.4",
                title: String.raw`Clasificar asientos sin leyenda (formato P6)`,
                eli5: String.raw`<p>Es como un juego de detective: te dan cuatro asientos sin la explicación y tenés que adivinar qué pasó. El truco es buscar una "pista roja": ¿hay alguna palabra de ganancia o pérdida (Gastos, Ventas, Intereses, Sueldos, Costo de ventas)? Si la hay, el patrimonio cambió: es M. Si solo hay cosas que se tienen o se deben, es P.</p>`,
                explain: String.raw`<p>En P6 (La Esteña) te dan cuatro asientos del Diario sin leyenda y elegís la secuencia correcta de P y M. Método en tres pasos:</p>
<ol><li>Recorré cada asiento y marcá las cuentas de resultado: Ventas, Costo de ventas, Gastos (generales, bancarios), Intereses (ganados o perdidos), Descuentos (obtenidos o concedidos), Sueldos, Leyes sociales, Comisiones.</li><li>Si hay al menos una: M. Si no: P.</li><li>Escribí la secuencia completa y recién ahí mirá las opciones (las incorrectas son permutaciones de la misma secuencia).</li></ol>
<table><tr><th>Asiento</th><th>Tipo</th></tr>
<tr><td>Gastos bancarios a Banco c/c</td><td>M</td></tr>
<tr><td>Gastos generales e IVA compras a Caja</td><td>M</td></tr>
<tr><td>Caja a Cheques diferidos a cobrar</td><td>P</td></tr>
<tr><td>Acreedores a Conformes a pagar</td><td>P</td></tr>
<tr><td>Mercaderías e IVA compras a Acreedores</td><td>P</td></tr>
<tr><td>Deudores tarjeta a Ventas e IVA ventas</td><td>M</td></tr></table>
<p>Hacé P6 y P7 juntas: son los mismos cuatro asientos, y al identificar el hecho ya sabés el comprobante.</p>`,
                keys: [String.raw`Buscá cuentas de resultado: si hay, M.`, String.raw`Mercaderías con IVA compras: P.`, String.raw`Ventas o Gastos en el asiento: M.`, String.raw`Armá la secuencia antes de mirar las opciones.`],
                example: { q: String.raw`<p>1) Conformes a pagar 5.000 a Banco c/c 5.000. 2) Deudores por ventas 3.600 a Ventas 3.000 e IVA ventas 600. 3) Costo de ventas 2.000 a Mercaderías 2.000. 4) Caja 1.000 a Cheques diferidos a cobrar 1.000.</p>`, sol: String.raw`<p>1) P (se paga un conforme); 2) M (Ventas); 3) M (Costo de ventas); 4) P (vence un cheque de tercero). Secuencia: <strong>P, M, M, P</strong>.</p>` },
            },
        ],
        t3: [
            {
                id: "t3.1",
                title: String.raw`Clasificación y naturaleza de las cuentas`,
                eli5: String.raw`<p>Imaginá cajones con etiquetas. Algunos guardan cosas que <strong>tenés</strong> (plata, mercadería): activo. Otros anotan lo que <strong>debés</strong> (al proveedor, al BPS): pasivo. Uno anota lo que es <strong>de los dueños</strong>: patrimonio. Y hay cajones especiales que cuentan cuánto <strong>ganaste</strong> o <strong>perdiste</strong> en el año: resultados.</p><p>Los primeros te dicen "cuánto queda hoy"; los de resultados te dicen "cuánto se juntó en el año", como un contador de goles que se reinicia cada temporada.</p>`,
                explain: String.raw`<h4>Por lo que representan</h4>
<table><tr><th>Grupo</th><th>Naturaleza del saldo</th><th>Ejemplos</th></tr>
<tr><td>Activo</td><td>Deudor</td><td>Caja, Banco c/c, Deudores por ventas, Deudores tarjeta, Cheques diferidos a cobrar, Conformes a cobrar, Mercaderías, IVA compras, Crédito fiscal, Adelantos al personal, Muebles y útiles, Vehículos</td></tr>
<tr><td>Pasivo</td><td>Acreedor</td><td>Acreedores por compras, Conformes a pagar, Cheques diferidos a pagar, Vales bancarios a pagar, Préstamos bancarios, IVA ventas, Sueldos a pagar, BPS, BSE</td></tr>
<tr><td>Patrimonio</td><td>Acreedor</td><td>Capital</td></tr>
<tr><td>Pérdidas</td><td>Deudor</td><td>Costo de ventas, Sueldos, Leyes sociales, Gastos generales, Gastos bancarios, Intereses perdidos, Descuentos concedidos, Comisiones perdidas</td></tr>
<tr><td>Ganancias</td><td>Acreedor</td><td>Ventas, Intereses ganados, Descuentos obtenidos</td></tr></table>
<h4>Por el significado del saldo</h4>
<p><strong>Residuales</strong>: el saldo muestra lo que queda en una fecha (activos, pasivos, patrimonio). <strong>Acumulativas</strong>: el saldo acumula lo ocurrido en el período (resultados).</p>
<h4>Colectivas y analíticas</h4>
<p>Deudores por ventas es una cuenta <strong>colectiva</strong>; cada cliente (Sr. AB) es una cuenta <strong>analítica</strong> del auxiliar. Si todo se registró bien, la suma de las analíticas es igual a la colectiva.</p>`,
                keys: [String.raw`Activo y pérdidas: saldo deudor. Pasivo, patrimonio y ganancias: acreedor.`, String.raw`Residuales (lo que queda) vs acumulativas (lo del período).`, String.raw`Suma de analíticas = colectiva si todo está bien registrado.`, String.raw`IVA compras y Crédito fiscal: activo. IVA ventas: pasivo.`],
                example: { q: String.raw`<p>Clasificá: Adelantos al personal, BSE, Descuentos obtenidos, Cheques diferidos a pagar, Comisiones perdidas.</p>`, sol: String.raw`<p>Adelantos al personal: activo. BSE: pasivo. Descuentos obtenidos: ganancia. Cheques diferidos a pagar: pasivo. Comisiones perdidas: pérdida.</p>` },
            },
            {
                id: "t3.2",
                title: String.raw`Reglas de registración y partida doble`,
                eli5: String.raw`<p>Una balanza de dos platos: cada vez que ponés algo de un lado (Debe) tenés que poner lo mismo del otro (Haber). Nunca se pone de un solo lado.</p><p>¿Qué va a cada lado? Si algo que <strong>tenés</strong> aumenta, va al Debe. Si algo que <strong>debés</strong> aumenta, va al Haber. Las pérdidas se portan como cosas que tenés (Debe) y las ganancias como cosas que debés a los dueños (Haber).</p>`,
                explain: String.raw`<table><tr><th>Tipo</th><th>Aumenta</th><th>Disminuye</th></tr>
<tr><td>Activo</td><td>Debe</td><td>Haber</td></tr>
<tr><td>Pasivo</td><td>Haber</td><td>Debe</td></tr>
<tr><td>Patrimonio</td><td>Haber</td><td>Debe</td></tr>
<tr><td>Pérdida</td><td>Debe</td><td>Haber (reversión)</td></tr>
<tr><td>Ganancia</td><td>Haber</td><td>Debe (reversión)</td></tr></table>
<p><strong>Partida doble</strong>: todo hecho afecta al menos dos cuentas y la suma del Debe es igual a la del Haber.</p>
<p>Forma del asiento de Diario: fecha; cuentas debitadas arriba; cuentas acreditadas abajo, precedidas por "a"; importes; leyenda "s/ comprobante N°".</p>
<p>Truco para armar asientos: empezá por la cuenta que conocés seguro (la plata: Caja o Banco; o el crédito o deuda) y deducí el otro lado.</p>
<p>Las reversiones son válidas: una devolución de venta debita Ventas; una devolución de costo acredita Costo de ventas.</p>`,
                keys: [String.raw`Activo y pérdida suben por el Debe.`, String.raw`Pasivo, patrimonio y ganancia suben por el Haber.`, String.raw`Debe = Haber en todo asiento.`, String.raw`El asiento lleva leyenda con el comprobante.`],
                example: { q: String.raw`<p>Se paga una deuda con un proveedor de $ 2.400 con cheque común propio. Armá el asiento.</p>`, sol: String.raw`<p>Baja un pasivo (Debe) y baja un activo (Haber): Acreedores por compras 2.400 a Banco c/c 2.400, s/ Recibo.</p>` },
            },
            {
                id: "t3.3",
                title: String.raw`Plan de cuentas y nombres de la cátedra`,
                eli5: String.raw`<p>Si cada persona de la empresa le pusiera el nombre que quiere a las cosas ("plata", "efectivo", "billetes"), nadie entendería nada. El <strong>plan de cuentas</strong> es como el diccionario de la empresa: la lista oficial de nombres, ordenada y con un número para cada cuenta. Todos anotan con esos nombres y así los informes se pueden sumar y comparar, mes a mes y año a año.</p>`,
                explain: String.raw`<p>El <strong>plan de cuentas</strong> es la lista ordenada, sistemática y codificada de las cuentas que usa la empresa, agrupadas por rubro (activo, pasivo, patrimonio, ganancias, pérdidas). Se diseña según las necesidades de información y debe poder ampliarse. El <strong>manual de cuentas</strong> explica qué representa cada una y cuándo se debita o acredita.</p>
<h4>Nombres que la cátedra usa y que confunden</h4>
<table><tr><th>Cuenta</th><th>Qué es</th></tr>
<tr><td>Sueldos / Sueldos a pagar</td><td>Pérdida / Pasivo</td></tr>
<tr><td>Leyes sociales / BPS</td><td>Pérdida / Pasivo</td></tr>
<tr><td>Intereses perdidos / Intereses ganados</td><td>Pérdida / Ganancia</td></tr>
<tr><td>Descuentos concedidos / obtenidos</td><td>Pérdida (los das) / Ganancia (te los dan)</td></tr>
<tr><td>Cheques diferidos a cobrar / a pagar</td><td>Activo (de terceros) / Pasivo (propios)</td></tr>
<tr><td>Vales bancarios a pagar</td><td>Pasivo (préstamo documentado)</td></tr>
<tr><td>Deudores tarjeta de débito / crédito</td><td>Activo contra la administradora</td></tr>
<tr><td>Crédito fiscal</td><td>Activo contra la DGI (beneficio por tarjeta de débito)</td></tr>
<tr><td>Comisiones perdidas</td><td>Pérdida (comisión de la tarjeta)</td></tr></table>`,
                keys: [String.raw`Plan de cuentas: lista ordenada y codificada.`, String.raw`Manual de cuentas: qué representa y cómo se mueve cada una.`, String.raw`Cada par "gasto / a pagar" es pérdida / pasivo.`, String.raw`Concedidos los das; obtenidos te los dan.`],
                example: { q: String.raw`<p>Una empresa registra las comisiones que le cobra la tarjeta en "Gastos bancarios" un mes y en "Comisiones perdidas" otro. ¿Qué herramienta evita esto?</p>`, sol: String.raw`<p>El plan de cuentas (y su manual), que fija un único nombre y código para cada concepto, lo que además permite comparar entre meses.</p>` },
            },
            {
                id: "t3.4",
                title: String.raw`El Mayor y el saldo de una cuenta`,
                eli5: String.raw`<p>El Diario es como un diario íntimo: anotás todo en el orden en que pasó. Pero si querés saber cuánta plata hay en la caja, tendrías que leer todo el diario buscando "Caja". El <strong>Mayor</strong> es juntar en una hoja todo lo que le pasó a una sola cuenta: de un lado lo que entró, del otro lo que salió. Restás y tenés el <strong>saldo</strong>.</p>`,
                explain: String.raw`<p>El <strong>Mayor</strong> agrupa por cuenta los movimientos del Diario (registro sistemático). Dos formatos:</p>
<ul><li><strong>Mayor completo</strong>: columnas de fecha, detalle, Debe, Haber y saldo.</li><li><strong>Cuenta T</strong>: solo Debe a la izquierda y Haber a la derecha. Es más fácil y rápida porque se anota menos información (afirmación verdadera en diciembre 2025).</li></ul>
<div class="box">\[ \text{Saldo} = \text{Saldo inicial} + \sum \text{Debe} - \sum \text{Haber} \]
Positivo: saldo <strong>deudor</strong>. Negativo: saldo <strong>acreedor</strong>.</div>
<p>"Saldo deudor" no quiere decir que la empresa deba: es un término técnico (Debe mayor que Haber). Caja tiene saldo deudor.</p>
<p>Para una cuenta de saldo acreedor (Acreedores, BPS), conviene calcular al revés: saldo inicial + Haber − Debe.</p>
<p>Un saldo contrario a la naturaleza (Deudores por ventas acreedor, por ejemplo por una seña) indica una situación especial o un error.</p>`,
                keys: [String.raw`Mayor = registro sistemático por cuenta.`, String.raw`Cuenta T: más simple y rápida que el mayor completo.`, String.raw`Saldo = SI + Debe − Haber.`, String.raw`Deudor es un término técnico, no una deuda.`],
                example: { q: String.raw`<p>Caja: saldo inicial 1.000. Cobro a un cliente 2.500; depósito en el banco 3.000; venta contado 1.200 IVA incluido. Saldo final.</p>`, sol: String.raw`<p>1.000 + 2.500 − 3.000 + 1.200 = <strong>1.700 deudor</strong>.</p>` },
            },
            {
                id: "t3.5",
                title: String.raw`Saldo de Deudores por ventas o Acreedores por compras (formato P4)`,
                eli5: String.raw`<p>Tenés una libreta con lo que te debe un amigo. Cada vez que le prestás algo, sumás; cada vez que te devuelve, restás. Pero en la lista que te pasan hay cosas de otros amigos, cosas que te pagó al contado en el momento, y papeles que no tienen nada que ver con la deuda. El truco es mirar cada renglón y preguntarte: ¿esto cambia lo que me debe <em>este</em> amigo? Si no, lo tachás.</p>`,
                explain: String.raw`<p>P4 da una tabla de comprobantes con fecha, emisor, concepto e importe, y pide el saldo de Deudores por ventas (cliente Sr. AB) o de Acreedores por compras (proveedor Sr. AA).</p>
<table><tr><th>Comprobante</th><th>Deudores por ventas</th><th>Acreedores por compras</th></tr>
<tr><td>Factura a crédito (con IVA)</td><td>Suma (emitida a AB)</td><td>Suma (recibida de AA)</td></tr>
<tr><td>ND por intereses (con IVA)</td><td>Suma (emitida a AB)</td><td>Suma (recibida de AA)</td></tr>
<tr><td>NC (con IVA)</td><td>Resta (emitida a AB)</td><td>Resta (emitida por AA)</td></tr>
<tr><td>Recibo común o de cheque diferido</td><td>Resta</td><td>Resta</td></tr>
<tr><td>Recibo de conforme</td><td>Resta (pasa a Conformes)</td><td>Resta</td></tr>
<tr><td>Comprobante interno de costo</td><td colspan="2">No toca</td></tr>
<tr><td>Boleta contado o boleta de devolución contado</td><td colspan="2">No toca (va contra Caja o Banco)</td></tr>
<tr><td>Vencimiento de cheque diferido (CI)</td><td colspan="2">No toca (ya se canceló con el recibo)</td></tr>
<tr><td>Comprobante de otro cliente o proveedor</td><td colspan="2">No toca</td></tr></table>
<p>Leé siempre la columna Emisor: una NC emitida por un proveedor es devolución de compra, no afecta Deudores. Si dicen "IVA incluido", no le sumes IVA.</p>`,
                keys: [String.raw`Suman: factura a crédito y ND, con IVA.`, String.raw`Restan: NC y recibos del mismo cliente o proveedor.`, String.raw`No tocan: CI, boletas contado, vencimientos, otros clientes.`, String.raw`Mirá el emisor antes de mover el mayor.`],
                example: { q: String.raw`<p>Mayor de Deudores por ventas (cliente Sr. AB), sin saldo inicial: factura a crédito $ 300 + IVA (CI costo $ 120); NC emitida por el proveedor DD $ 40 + IVA; recibo de cheque diferido de AB $ 100; recibo común de AB $ 50; ND a AB por intereses $ 30 + IVA; boleta de devolución contado a AB $ 60 + IVA.</p>`, sol: String.raw`<p>360 − 100 − 50 + 36 = <strong>246</strong>. No tocan: el CI, la NC de DD (es devolución de compra) y la boleta de devolución contado (va contra Caja). Es el mismo molde que la P4 de la revisión de mayo.</p>` },
            },
        ],
        t4: [
            {
                id: "t4.1",
                title: String.raw`Registros contables: Diario, Mayor, auxiliares y libros obligatorios`,
                eli5: String.raw`<p>Pensá en un álbum de fotos. Podés ordenarlo por fecha (todo lo que pasó en enero, después febrero) o por persona (todas las fotos de tu abuela juntas). Las dos formas sirven para cosas distintas.</p><p>En contabilidad pasa igual: el <strong>Diario</strong> ordena por fecha y el <strong>Mayor</strong> ordena por cuenta. Y como Deudores por ventas junta a todos los clientes, hay libretas <strong>auxiliares</strong> con el detalle de cada uno.</p>`,
                explain: String.raw`<table><tr><th>Registro</th><th>Tipo</th><th>Para qué</th></tr>
<tr><td>Libro Diario</td><td>Cronológico</td><td>Asientos en orden de fecha, con leyenda del comprobante</td></tr>
<tr><td>Mayor</td><td>Sistemático</td><td>Movimientos agrupados por cuenta; da los saldos</td></tr>
<tr><td>Auxiliares (mayores analíticos, subdiarios)</td><td>Sistemático o cronológico</td><td>Detalle por cliente, proveedor o tipo de operación</td></tr>
<tr><td>Balance de comprobación de sumas y saldos</td><td>Resumen</td><td>Controla que Debe = Haber y lista los saldos</td></tr></table>
<p>Una de las clasificaciones de los registros los divide en <strong>cronológicos y sistemáticos</strong> (verdadero en diciembre 2025).</p>
<h4>Libros obligatorios (art. 55 del Código de Comercio)</h4>
<p>Diario, Copiador de cartas e Inventarios. Afirmar que los obligatorios son "Diario, Inventarios y los libros auxiliares" es <strong>falso</strong>: los auxiliares no son obligatorios por ese artículo.</p>
<h4>Circuito</h4>
<p>Comprobante → asiento en el Diario → pase al Mayor → balance de comprobación → estados financieros.</p>`,
                keys: [String.raw`Diario: cronológico. Mayor: sistemático.`, String.raw`Auxiliares: detalle por cliente o proveedor.`, String.raw`Obligatorios (art. 55): Diario, Copiador de cartas, Inventarios.`, String.raw`Circuito: comprobante, Diario, Mayor, balance de comprobación.`],
                example: { q: String.raw`<p>Verdadero o falso: "Los libros obligatorios según el artículo 55 del Código de Comercio son el Diario, el de Inventarios y los auxiliares".</p>`, sol: String.raw`<p>Falso: son Diario, Copiador de cartas e Inventarios. Los auxiliares no están en esa lista.</p>` },
            },
            {
                id: "t4.2",
                title: String.raw`Factura y boleta: compras y ventas contado y crédito`,
                eli5: String.raw`<p>Cuando comprás algo y pagás en el momento, te dan un ticket: es la <strong>boleta</strong> (contado). Cuando el almacenero te fía y te lo anota para que pagues a fin de mes, te da una <strong>factura</strong> (crédito). La diferencia no es qué comprás, sino si pagás ya o después.</p><p>Con tarjeta, para vos es como pagar al contado: por eso también es boleta.</p>`,
                explain: String.raw`<table><tr><th>Operación</th><th>Comprobante</th><th>Asiento (nuestra empresa)</th></tr>
<tr><td>Venta a crédito</td><td>Factura (e-factura) emitida</td><td>Deudores por ventas a Ventas e IVA ventas</td></tr>
<tr><td>Venta contado (efectivo o cheque de tercero)</td><td>Boleta (e-ticket) emitida</td><td>Caja a Ventas e IVA ventas</td></tr>
<tr><td>Venta con tarjeta de débito o crédito</td><td>Boleta emitida</td><td>Deudores tarjeta a Ventas e IVA ventas</td></tr>
<tr><td>Compra a crédito</td><td>Factura recibida</td><td>Mercaderías e IVA compras a Acreedores por compras</td></tr>
<tr><td>Compra o gasto contado</td><td>Boleta recibida</td><td>Mercaderías (o Gastos) e IVA compras a Caja o Banco c/c</td></tr>
<tr><td>Costo de la venta</td><td>Comprobante interno</td><td>Costo de ventas a Mercaderías</td></tr></table>
<p>Si una compra es mitad crédito y mitad contado, hay dos comprobantes (factura y boleta) y dos asientos.</p>
<p>La forma de pago dentro de la boleta decide la cuenta: efectivo o cheque de tercero, Caja; cheque propio, Banco c/c.</p>`,
                keys: [String.raw`Contado: boleta. Crédito: factura.`, String.raw`Tarjeta: boleta, con Deudores tarjeta.`, String.raw`Cada venta lleva además un CI por el costo.`, String.raw`Mitad contado y mitad crédito: dos comprobantes.`],
                example: { q: String.raw`<p>Se compran mercaderías por $ 30.000 + IVA: la mitad a crédito y el resto al contado con cheque común propio. Comprobantes y asientos.</p>`, sol: String.raw`<p>Factura: Mercaderías 15.000 e IVA compras 3.000 a Acreedores por compras 18.000. Boleta: Mercaderías 15.000 e IVA compras 3.000 a Banco c/c 18.000.</p>` },
            },
            {
                id: "t4.3",
                title: String.raw`Notas de crédito, notas de débito y boleta de devolución contado`,
                eli5: String.raw`<p>Una nota de crédito es un "te debo menos": el comercio te baja lo que le debés porque devolviste algo o te hizo un descuento. Una nota de débito es un "me debés más": por ejemplo, porque pagaste tarde y te cobran intereses.</p><p>Si en cambio devolvés algo y te dan la plata en el acto, el papel es una <strong>boleta de devolución contado</strong>: no se toca la cuenta del cliente, sale plata de la caja.</p>`,
                explain: String.raw`<table><tr><th>Comprobante</th><th>Si lo emitimos</th><th>Si lo recibimos</th></tr>
<tr><td>NC por devolución</td><td>Ventas e IVA ventas a Deudores por ventas (+ CI Mercaderías a Costo de ventas)</td><td>Acreedores por compras a Mercaderías e IVA compras</td></tr>
<tr><td>NC por descuento</td><td>Descuentos concedidos (e IVA ventas) a Deudores por ventas</td><td>Acreedores a Descuentos obtenidos (e IVA compras)</td></tr>
<tr><td>ND por intereses</td><td>Deudores a Intereses ganados e IVA ventas</td><td>Intereses perdidos e IVA compras a Acreedores</td></tr>
<tr><td>Boleta de devolución contado</td><td>Ventas e IVA ventas a Caja (o Banco si es cheque propio)</td><td>Caja a Mercaderías e IVA compras</td></tr></table>
<p><strong>Claves oficiales:</strong> una NC emitida por devolución de una venta que fue <em>contado</em> igual se acredita a Deudores por ventas (queda un crédito a favor del cliente). Lo que decide la cuenta es el comprobante de la devolución, no el de la venta original.</p>
<p>Siempre mirá el emisor: la NC de un proveedor es devolución de compra en nuestros libros.</p>`,
                keys: [String.raw`NC baja lo facturado; ND lo aumenta.`, String.raw`NC emitida: contra Deudores, aunque la venta haya sido contado.`, String.raw`Boleta de devolución contado: contra Caja o Banco.`, String.raw`La NC recibida del proveedor baja Acreedores.`],
                example: { q: String.raw`<p>Emitimos NC por la devolución de mercadería vendida al contado por $ 5.000 + IVA. El CI ya se hizo. Asiento de la NC.</p>`, sol: String.raw`<p>Ventas 5.000 e IVA ventas 1.000 a Deudores por ventas 6.000. No es Caja porque no se devolvió plata: queda un crédito a favor del cliente.</p>` },
            },
            {
                id: "t4.4",
                title: String.raw`Recibos, comprobante interno y planilla de sueldos`,
                eli5: String.raw`<p>Cuando alguien te paga, le das un papelito que dice "recibí": el <strong>recibo</strong>. Si te paga con un cheque para cobrar más adelante, el recibo lo aclara: <strong>recibo de cheque diferido</strong>. Si en lugar de pagar te firma un pagaré, es un <strong>recibo de conforme</strong>.</p><p>Hay cosas que pasan adentro de la empresa sin ningún papel de afuera, como calcular cuánto costó lo que vendiste: para eso la empresa se hace su propio papel, el <strong>comprobante interno</strong>.</p>`,
                explain: String.raw`<table><tr><th>Comprobante</th><th>Qué respalda</th><th>Ejemplo</th></tr>
<tr><td>Recibo (común)</td><td>Cobro o pago de algo a crédito con efectivo, cheque al día o transferencia</td><td>Caja a Deudores por ventas; Acreedores a Banco c/c</td></tr>
<tr><td>Recibo de cheque diferido</td><td>Cobro o pago con cheque diferido</td><td>Cheques dif. a cobrar a Deudores; Acreedores a Cheques dif. a pagar</td></tr>
<tr><td>Recibo de conforme</td><td>Documentar una deuda o crédito con conforme</td><td>Conformes a cobrar a Deudores; Acreedores a Conformes a pagar</td></tr>
<tr><td>Comprobante interno (CI)</td><td>Hechos sin papel externo</td><td>Costo de ventas; vencimiento de cheques diferidos; cobro o pago de conformes</td></tr>
<tr><td>Planilla de liquidación de sueldos (PLS)</td><td>Liquidación mensual</td><td>Sueldos a BPS, Adelantos, Sueldos a pagar; Leyes sociales a BPS y BSE</td></tr>
<tr><td>Vale</td><td>Documento de un préstamo o adelanto</td><td>Vales bancarios a pagar</td></tr></table>
<p>Un cobro mixto (efectivo más cheque diferido) lleva dos comprobantes: recibo común y recibo de cheque diferido.</p>
<p>Pago de un conforme a pagar al vencimiento: la clave de la revisión fue CI y en agosto 2026 se aceptó CI o recibo de conforme. El adelanto de sueldo apareció con CI en la revisión y con recibo en otros ejercicios.</p>`,
                keys: [String.raw`Recibo común: efectivo, cheque al día, transferencia.`, String.raw`Recibo de cheque diferido y recibo de conforme según el instrumento.`, String.raw`CI: costo de ventas y vencimientos de cheques.`, String.raw`PLS: liquidación de sueldos.`],
                example: { q: String.raw`<p>Un cliente cancela $ 5.000: $ 2.000 en efectivo y $ 3.000 con un cheque diferido. Comprobantes y asientos.</p>`, sol: String.raw`<p>Recibo: Caja 2.000 a Deudores por ventas 2.000. Recibo de cheque diferido: Cheques diferidos a cobrar 3.000 a Deudores por ventas 3.000.</p>` },
            },
            {
                id: "t4.5",
                title: String.raw`Comprobantes bancarios y asiento a comprobante (formato P7)`,
                eli5: String.raw`<p>El banco también manda papelitos. Si te saca plata de la cuenta (por ejemplo, para cobrarte el mantenimiento), te manda una <strong>nota de débito bancaria</strong>. Si te pone plata (te prestó, o cobró algo por vos), una <strong>nota de crédito bancaria</strong>. Y cuando vos llevás plata para depositar, te dan una <strong>boleta de depósito</strong>.</p><p>Ojo con los nombres: "débito" para el banco significa que baja tu cuenta.</p>`,
                explain: String.raw`<table><tr><th>Comprobante</th><th>Asiento</th></tr>
<tr><td>Nota de débito bancaria (NDB)</td><td>Gastos bancarios a Banco c/c; también el débito del vale al vencimiento</td></tr>
<tr><td>Nota de crédito bancaria (NCB)</td><td>Banco c/c (e Intereses perdidos) a Vales bancarios a pagar; acreditaciones</td></tr>
<tr><td>Boleta de depósito</td><td>Banco c/c a Caja</td></tr></table>
<h4>P7: del asiento al comprobante</h4>
<table><tr><th>Asiento</th><th>Comprobante</th></tr>
<tr><td>Gastos bancarios a Banco c/c</td><td>NDB</td></tr>
<tr><td>Banco c/c e Intereses perdidos a Vales</td><td>NCB</td></tr>
<tr><td>Banco c/c a Caja</td><td>Boleta de depósito</td></tr>
<tr><td>Gastos (o Mercaderías) e IVA compras a Caja</td><td>Boleta contado</td></tr>
<tr><td>Caja a Cheques diferidos a cobrar</td><td>CI</td></tr>
<tr><td>Cheques diferidos a cobrar a Deudores</td><td>Recibo de cheque diferido</td></tr>
<tr><td>Acreedores a Conformes a pagar</td><td>Recibo de conforme</td></tr>
<tr><td>Costo de ventas a Mercaderías</td><td>CI</td></tr></table>
<p>Descartá primero las opciones con NC o ND donde no hay devoluciones ni intereses, y las que ponen NCB para un gasto bancario.</p>`,
                keys: [String.raw`NDB: el banco baja tu cuenta (gastos).`, String.raw`NCB: el banco sube tu cuenta (préstamo).`, String.raw`Boleta de depósito: Banco a Caja.`, String.raw`Descartá NC/ND si no hay devolución ni intereses.`],
                example: { q: String.raw`<p>Comprobantes de: 1) Gastos bancarios 300 a Banco c/c 300. 2) Banco c/c 2.000 a Caja 2.000. 3) Cheques diferidos a pagar 1.500 a Banco c/c 1.500. 4) Acreedores por compras 6.000 a Conformes a pagar 6.000.</p>`, sol: String.raw`<p>NDB; Boleta de depósito; Comprobante interno; Recibo de conforme.</p>` },
            },
        ],
        t5: [
            {
                id: "t5.1",
                title: String.raw`Compras de mercaderías contado y a crédito`,
                eli5: String.raw`<p>Tenés un kiosco y comprás 10 alfajores. Si pagás en el momento, sale plata de la caja; si el distribuidor te fía, quedás debiéndole. En los dos casos entran 10 alfajores a la estantería.</p><p>En el precio viene escondido un impuesto (el IVA) que no es parte del alfajor: es un crédito que vas a descontar de lo que le pagás al Estado. Por eso los alfajores se anotan a su costo <strong>sin IVA</strong>, y el IVA va aparte.</p>`,
                explain: String.raw`<table><tr><th>Compra</th><th>Comprobante</th><th>Asiento</th></tr>
<tr><td>A crédito</td><td>Factura</td><td>Mercaderías (neto) e IVA compras a Acreedores por compras (total)</td></tr>
<tr><td>Contado en efectivo</td><td>Boleta</td><td>Mercaderías e IVA compras a Caja</td></tr>
<tr><td>Contado con cheque común propio o transferencia</td><td>Boleta</td><td>Mercaderías e IVA compras a Banco c/c</td></tr>
<tr><td>Con cheque diferido propio (entregado en el acto)</td><td>Boleta</td><td>Mercaderías e IVA compras a Cheques diferidos a pagar</td></tr></table>
<p>Mercaderías se valúa <strong>al costo de compra sin IVA</strong>. Si el precio viene IVA incluido, dividí entre 1,2; si viene "+ IVA", el IVA es el 20% del neto.</p>
<p>Con unidades: costo unitario sin IVA × cantidad. Ejemplo: 50 unidades a $ 36 IVA incluido: neto unitario 30, Mercaderías 1.500, IVA compras 300, total 1.800.</p>
<p>La compra es <strong>permutativa</strong>: no hay resultado. El pago posterior de la factura (recibo) no vuelve a tocar el IVA.</p>`,
                keys: [String.raw`Mercaderías al costo, sin IVA.`, String.raw`IVA compras al Debe, activo.`, String.raw`Crédito: factura y Acreedores. Contado: boleta y Caja o Banco.`, String.raw`Cheque propio: Banco c/c.`],
                example: { q: String.raw`<p>Se compran 50 unidades a $ 36 c/u IVA incluido: 30 a crédito y 20 al contado con cheque común propio.</p>`, sol: String.raw`<p>Neto unitario 30. Factura: Mercaderías 900 e IVA compras 180 a Acreedores por compras 1.080. Boleta: Mercaderías 600 e IVA compras 120 a Banco c/c 720.</p>` },
            },
            {
                id: "t5.2",
                title: String.raw`Ventas y costo de ventas (inventario permanente)`,
                eli5: String.raw`<p>Cuando vendés un alfajor pasan dos cosas: te pagan (o te quedan debiendo) y un alfajor se va de la estantería. La contabilidad anota las dos por separado. Una línea dice "vendí a $ 25" y otra dice "se fue un alfajor que me había costado $ 20". Comparando las dos sabés que ganaste $ 5.</p><p>Por eso cada venta tiene dos papeles: la factura o boleta, y un papel interno que registra el costo.</p>`,
                explain: String.raw`<p>En <strong>inventario permanente</strong> cada venta genera dos asientos:</p>
<table><tr><th>Asiento</th><th>Debe</th><th>Haber</th><th>Comprobante</th></tr>
<tr><td>La venta</td><td>Deudores por ventas / Caja / Deudores tarjeta</td><td>Ventas (neto) e IVA ventas</td><td>Factura o boleta</td></tr>
<tr><td>El costo</td><td>Costo de ventas</td><td>Mercaderías (al costo)</td><td>Comprobante interno</td></tr></table>
<div class="box">Utilidad bruta = Ventas − Costo de ventas (ambos sin IVA)</div>
<p>Mercaderías siempre sale al <strong>costo</strong>, nunca al precio de venta: el margen no toca Mercaderías.</p>
<p>En el parcial, el CI de costo casi siempre "ya fue registrado correctamente": te piden solo el asiento de la boleta o factura. No te distraigas con el costo en esos casos.</p>
<p>Ejemplo: 30 unidades con costo unitario 40, vendidas a 60 + IVA c/u a crédito: Deudores 2.160 a Ventas 1.800 e IVA ventas 360; CI: Costo de ventas 1.200 a Mercaderías 1.200. Utilidad bruta 600.</p>`,
                keys: [String.raw`Cada venta: factura o boleta más CI de costo.`, String.raw`Mercaderías sale al costo.`, String.raw`Utilidad bruta = Ventas − Costo de ventas, sin IVA.`, String.raw`Si dicen que el CI ya se hizo, pedí solo la venta.`],
                example: { q: String.raw`<p>Se venden al contado en efectivo mercaderías por $ 2.400 IVA incluido, que costaron $ 1.200. Asientos.</p>`, sol: String.raw`<p>Boleta: Caja 2.400 a Ventas 2.000 e IVA ventas 400. CI: Costo de ventas 1.200 a Mercaderías 1.200. Utilidad bruta 800.</p>` },
            },
            {
                id: "t5.3",
                title: String.raw`Porcentaje de utilidad sobre costo`,
                eli5: String.raw`<p>Comprás una pulsera a $ 100 y querés ganarle "un 25% sobre lo que te costó". Te fijás en el costo, calculás el 25% de $ 100 = $ 25, y la vendés a $ 125.</p><p>Si te dan el precio y te piden el costo, hacés el camino al revés: el precio es "el costo más un cuarto del costo", o sea 1,25 veces el costo. Entonces dividís: 125 / 1,25 = 100.</p>`,
                explain: String.raw`<div class="box">\[ PV = C\,(1+u) \qquad C = \frac{PV}{1+u} \qquad u = \frac{PV - C}{C} \]
Todo <strong>sin IVA</strong>.</div>
<ol><li>Si el precio viene IVA incluido, dividí entre 1,2.</li><li>Aplicá la fórmula.</li><li>Controlá: la utilidad dividida entre el costo tiene que dar u.</li></ol>
<table><tr><th>Dato</th><th>Cálculo</th><th>Resultado</th></tr>
<tr><td>Venta 1.440 IVA incl., 20% s/costo</td><td>1.200 / 1,2</td><td>C = 1.000</td></tr>
<tr><td>Costo 750, 20% s/costo</td><td>750 × 1,2</td><td>PV = 900</td></tr>
<tr><td>Ventas 50.000, costo 40.000</td><td>10.000 / 40.000</td><td>u = 25%</td></tr></table>
<p>Distractores que usa la cátedra: multiplicar el precio por \( (1-u) \) (eso es "sobre ventas"), aplicar la utilidad sobre el precio con IVA, o dar el precio con IVA cuando lo piden sin IVA.</p>`,
                keys: [String.raw`\( PV = C(1+u) \).`, String.raw`\( C = PV/(1+u) \), no \( PV(1-u) \).`, String.raw`Primero sacá el IVA.`, String.raw`Control: utilidad / costo = u.`],
                example: { q: String.raw`<p>Venta por $ 9.000 IVA incluido con una utilidad del 25% sobre costo. Costo de ventas.</p>`, sol: String.raw`<p>PV = 9.000 / 1,2 = 7.500. C = 7.500 / 1,25 = <strong>6.000</strong>. Control: 1.500 / 6.000 = 25%.</p>` },
            },
            {
                id: "t5.4",
                title: String.raw`Porcentaje de utilidad sobre ventas`,
                eli5: String.raw`<p>Ahora el 25% se mide sobre lo que <strong>cobrás</strong>, no sobre lo que te costó. Si vendés a $ 100 y ganás "el 25% sobre ventas", ganás $ 25 y te había costado $ 75. El costo es "el precio menos un cuarto del precio": 100 × 0,75.</p><p>Por eso, con el mismo porcentaje, ganar "sobre ventas" es ganar más que "sobre costo": el 25% sobre ventas equivale a un 33% sobre costo.</p>`,
                explain: String.raw`<div class="box">\[ C = PV\,(1-u) \qquad PV = \frac{C}{1-u} \qquad u = \frac{PV - C}{PV} \]
Todo <strong>sin IVA</strong>.</div>
<table><tr><th>Dato</th><th>Cálculo</th><th>Resultado</th></tr>
<tr><td>Venta 600 IVA incl., 25% s/ventas</td><td>500 × 0,75</td><td>C = 375</td></tr>
<tr><td>Costo 900, 25% s/ventas</td><td>900 / 0,75</td><td>PV = 1.200 (+ IVA)</td></tr>
<tr><td>Costo 2.100, 30% s/ventas</td><td>2.100 / 0,7</td><td>PV = 3.000 (+ IVA)</td></tr></table>
<h4>Pasar de un porcentaje al otro</h4>
<p>\[ u_c = \frac{u_v}{1-u_v} \qquad u_v = \frac{u_c}{1+u_c} \]</p>
<p>20% sobre ventas = 25% sobre costo; 25% sobre ventas = 33,33% sobre costo; 50% sobre costo = 33,33% sobre ventas.</p>
<p>En P3 de la revisión rotan tres variantes: costo con utilidad sobre ventas (T1), costo con utilidad sobre costo (T2), precio sin IVA con utilidad sobre ventas (T3). Cuando piden el precio "$ XX + IVA", respondé el neto.</p>`,
                keys: [String.raw`\( C = PV(1-u) \), \( PV = C/(1-u) \).`, String.raw`\( u_c = u_v/(1-u_v) \).`, String.raw`20% s/ventas = 25% s/costo.`, String.raw`"$ XX + IVA": respondé el neto.`],
                example: { q: String.raw`<p>Costo $ 2.100; utilidad del 30% sobre ventas. Precio de venta ($ XX + IVA).</p>`, sol: String.raw`<p>PV = 2.100 / 0,7 = <strong>3.000</strong> + IVA. Control: 900 / 3.000 = 30%.</p>` },
            },
            {
                id: "t5.5",
                title: String.raw`Devoluciones de ventas: NC o boleta de devolución contado`,
                eli5: String.raw`<p>Un cliente te devuelve un alfajor. Tenés que deshacer las dos cosas que anotaste cuando lo vendiste: la venta (ya no le cobrás o le devolvés la plata) y la salida de la estantería (el alfajor vuelve, a lo que te costó).</p><p>Si le devolvés la plata en el acto, el papel es una boleta de devolución contado y sale plata. Si no, le hacés una nota de crédito: queda a su favor para la próxima.</p>`,
                explain: String.raw`<table><tr><th>Comprobante</th><th>Asiento de la devolución</th><th>Asiento del costo (CI)</th></tr>
<tr><td>NC emitida</td><td>Ventas e IVA ventas a <strong>Deudores por ventas</strong></td><td rowspan="2">Mercaderías a Costo de ventas, al <strong>costo</strong></td></tr>
<tr><td>Boleta de devolución contado</td><td>Ventas e IVA ventas a Caja (efectivo) o Banco c/c (cheque propio)</td></tr></table>
<p>Reglas de la clave oficial:</p>
<ul><li>Mandá el comprobante de la devolución, no el de la venta original: NC contra Deudores aunque la venta haya sido contado.</li><li>La boleta de devolución contado nunca toca Deudores, aunque la venta haya sido a crédito.</li><li>Revisá si el importe es "más IVA" (4.800 + 960) o IVA incluido.</li></ul>
<p>Costo que vuelve: con utilidad sobre costo \( C = PV/(1+u) \); sobre ventas \( C = PV(1-u) \). Siempre sobre el neto devuelto. Ejemplo: NC por 6.000 + IVA con 25% sobre costo: Mercaderías 4.800 a Costo de ventas 4.800.</p>`,
                keys: [String.raw`NC: contra Deudores por ventas.`, String.raw`Boleta de devolución contado: contra Caja o Banco.`, String.raw`El costo vuelve al costo: Mercaderías a Costo de ventas.`, String.raw`Calculá el costo sobre el neto devuelto.`],
                example: { q: String.raw`<p>Se emite boleta de devolución contado por $ 4.000 más IVA y se entrega un cheque común propio. Utilidad 25% sobre costo. Asientos.</p>`, sol: String.raw`<p>Ventas 4.000 e IVA ventas 800 a Banco c/c 4.800. CI: Mercaderías 3.200 a Costo de ventas 3.200 (4.000 / 1,25).</p>` },
            },
            {
                id: "t5.6",
                title: String.raw`Devoluciones de compras y saldo de Mercaderías`,
                eli5: String.raw`<p>Le devolvés al proveedor unos alfajores que vinieron rotos. Salen de tu estantería al mismo precio al que entraron (el costo), y también se va el IVA que habías pagado por ellos. Si te los había fiado, le debés menos; si te devuelve la plata en el acto, entra plata a la caja.</p><p>La estantería (Mercaderías) solo se mueve a costo: entra al comprar, sale al vender o devolver al proveedor, y vuelve cuando un cliente te devuelve algo.</p>`,
                explain: String.raw`<table><tr><th>Comprobante recibido</th><th>Asiento</th></tr>
<tr><td>NC del proveedor</td><td>Acreedores por compras a Mercaderías e IVA compras</td></tr>
<tr><td>Boleta de devolución contado del proveedor</td><td>Caja (o la cuenta de lo que nos entrega) a Mercaderías e IVA compras. <strong>No toca Acreedores</strong></td></tr></table>
<h4>Mayor de Mercaderías</h4>
<table><tr><th>Debe (suma)</th><th>Haber (resta)</th></tr>
<tr><td>Saldo inicial; compras (neto); devoluciones de ventas al costo (CI)</td><td>Costo de las ventas (CI); devoluciones de compras (neto)</td></tr></table>
<p>Control por unidades: unidades en stock × costo unitario sin IVA. El % de utilidad no afecta el saldo. Errores típicos: meter el IVA, restar las ventas a precio de venta, olvidar la devolución de compra o sumar la boleta de devolución contado del proveedor a Acreedores.</p>`,
                keys: [String.raw`NC del proveedor: baja Acreedores, Mercaderías e IVA compras.`, String.raw`Boleta de devolución contado del proveedor: Caja, no Acreedores.`, String.raw`Mercaderías solo se mueve al costo sin IVA.`, String.raw`Controlá con unidades × costo unitario.`],
                example: { q: String.raw`<p>Se compran 80 unidades a $ 30 + IVA; se devuelven 10 al proveedor (NC); se venden 50 con 20% de utilidad sobre ventas. Saldo de Mercaderías.</p>`, sol: String.raw`<p>2.400 − 300 − 1.500 = <strong>600</strong> (20 unidades × 30). El 20% sobre ventas solo define el precio.</p>` },
            },
        ],
        t6: [
            {
                id: "t6.1",
                title: String.raw`Cálculo del IVA: neto, impuesto y total`,
                eli5: String.raw`<p>Imaginá que cada precio es una torta cortada en 6 porciones iguales: 5 porciones son para el comerciante y 1 porción es del Estado. Eso pasa con un IVA del 20%: si pagaste $ 120, $ 100 son el precio y $ 20 el impuesto. Por eso, para encontrar el IVA dentro de un total, dividís entre 6; y para encontrar el precio sin impuesto, dividís entre 1,2.</p>`,
                explain: String.raw`<p>En los ejercicios de la cátedra la tasa es <strong>20%</strong> (en Uruguay la básica real es 22% y la mínima 10%).</p>
<div class="box">Neto → total: \( T = N \times 1{,}2 \)<br>Total → neto: \( N = T / 1{,}2 \)<br>IVA contenido en un total: \( T/6 \)<br>IVA sobre un neto: \( N \times 0{,}2 \)</div>
<table><tr><th>Enunciado</th><th>Neto</th><th>IVA</th><th>Total</th></tr>
<tr><td>$ 4.500 + IVA</td><td>4.500</td><td>900</td><td>5.400</td></tr>
<tr><td>$ 7.200 IVA incluido</td><td>6.000</td><td>1.200</td><td>7.200</td></tr>
<tr><td>$ 4.800 más IVA</td><td>4.800</td><td>960</td><td>5.760</td></tr></table>
<p>Error clásico: calcular el IVA contenido como 20% del total (7.200 × 0,2 = 1.440 es incorrecto) o sacar el neto multiplicando por 0,8.</p>
<p>Leé siempre si el importe dice "+ IVA", "más IVA" o "IVA incluido". Las cuentas de medio de pago, créditos y deudas (Caja, Deudores, Acreedores) llevan siempre el <strong>total</strong>; Ventas, Mercaderías y gastos, el <strong>neto</strong>.</p>`,
                keys: [String.raw`Tasa de la cátedra: 20%.`, String.raw`IVA contenido = total / 6.`, String.raw`Neto = total / 1,2, no total × 0,8.`, String.raw`Caja, Deudores y Acreedores van por el total.`],
                example: { q: String.raw`<p>Una compra de $ 13.200 IVA incluido. Neto e IVA.</p>`, sol: String.raw`<p>Neto 13.200 / 1,2 = 11.000. IVA 13.200 / 6 = 2.200.</p>` },
            },
            {
                id: "t6.2",
                title: String.raw`IVA en compras de bienes de uso y gastos`,
                eli5: String.raw`<p>No solo la mercadería para vender trae IVA. Cuando la empresa compra una camioneta, un escritorio o paga la luz, también paga IVA, y ese IVA también lo puede descontar de lo que le debe al Estado. Es como juntar cupones de descuento: cada compra con IVA te da un cupón (IVA compras).</p><p>En cambio, los sueldos y los aportes al BPS no son compras: no traen cupón.</p>`,
                explain: String.raw`<table><tr><th>Operación</th><th>Asiento</th></tr>
<tr><td>Vehículo o muebles (bienes de uso)</td><td>Vehículos / Muebles y útiles (neto) e IVA compras a Banco, Caja o Acreedores</td></tr>
<tr><td>Gastos generales (luz, papelería) con boleta</td><td>Gastos generales (neto) e IVA compras a Caja o Banco</td></tr>
<tr><td>Intereses que nos cobra un proveedor (ND)</td><td>Intereses perdidos e IVA compras a Acreedores</td></tr>
<tr><td>Comisión de la tarjeta</td><td>Comisiones perdidas e IVA compras (dentro de la liquidación)</td></tr>
<tr><td>Sueldos, leyes sociales, BPS, BSE</td><td>Sin IVA</td></tr>
<tr><td>Gastos bancarios por NDB</td><td>En los ejercicios, por el total salvo que digan "+ IVA"</td></tr></table>
<p>El IVA del bien de uso se discrimina igual que el de la mercadería: el bien entra al neto.</p>
<p>El IVA se registra al facturar o al recibir la boleta. Cuando después se paga la factura, el recibo mueve solo Acreedores y Banco o Caja.</p>`,
                keys: [String.raw`Bienes de uso y gastos: IVA compras aparte.`, String.raw`El bien entra al neto.`, String.raw`Sueldos y aportes no llevan IVA.`, String.raw`Al pagar la factura no se toca el IVA.`],
                example: { q: String.raw`<p>Se compran muebles por $ 8.000 + IVA en efectivo según boleta. Asiento.</p>`, sol: String.raw`<p>Muebles y útiles 8.000 e IVA compras 1.600 a Caja 9.600.</p>` },
            },
            {
                id: "t6.3",
                title: String.raw`IVA en notas de crédito, notas de débito, intereses y descuentos`,
                eli5: String.raw`<p>El IVA sigue al precio como una sombra. Si el precio sube (te cobran intereses con una nota de débito), la sombra crece: hay más IVA. Si el precio baja (una devolución o un descuento con nota de crédito), la sombra se achica: hay que sacar la parte de IVA que corresponde. Siempre fijate quién emitió el papel: eso decide si la sombra es IVA ventas o IVA compras.</p>`,
                explain: String.raw`<table><tr><th>Comprobante</th><th>Emitido por nosotros</th><th>Recibido</th></tr>
<tr><td>ND por intereses</td><td>Deudores a Intereses ganados e <strong>IVA ventas</strong></td><td>Intereses perdidos e <strong>IVA compras</strong> a Acreedores</td></tr>
<tr><td>NC por devolución</td><td>Ventas e <strong>IVA ventas</strong> (al Debe) a Deudores</td><td>Acreedores a Mercaderías e <strong>IVA compras</strong> (al Haber)</td></tr>
<tr><td>NC por descuento</td><td>Descuentos concedidos e <strong>IVA ventas</strong> a Deudores</td><td>Acreedores a Descuentos obtenidos e <strong>IVA compras</strong></td></tr></table>
<p>Conforme con intereses: primero la ND por los intereses con su IVA y después el conforme por el total. Deuda 10.000 + intereses 800 + IVA 160 = conforme 10.960.</p>
<p>Descuento por pronto pago con IVA (criterio de diciembre 2025): deuda 4.000, descuento 10%: NC Descuentos concedidos 400 e IVA ventas 80 a Deudores 480; recibo Caja 3.520 a Deudores 3.520. Son dos comprobantes y dos asientos.</p>
<p>Si el ejercicio dice "sin IVA", el descuento va entero a la cuenta de resultado.</p>`,
                keys: [String.raw`ND emitida: IVA ventas al Haber. ND recibida: IVA compras al Debe.`, String.raw`NC emitida: IVA ventas al Debe. NC recibida: IVA compras al Haber.`, String.raw`Conforme con intereses = deuda + intereses + IVA.`, String.raw`Descuento con IVA: NC y recibo por separado.`],
                example: { q: String.raw`<p>La deuda de un cliente de $ 10.000 se documenta a 3 meses con intereses de $ 800 + IVA. Asientos e importe del conforme.</p>`, sol: String.raw`<p>ND: Deudores 960 a Intereses ganados 800 e IVA ventas 160. Recibo de conforme: Conformes a cobrar 10.960 a Deudores por ventas 10.960.</p>` },
            },
            {
                id: "t6.4",
                title: String.raw`Liquidación del IVA del mes`,
                eli5: String.raw`<p>A fin de mes juntás dos montones: el IVA que les cobraste a tus clientes (plata que no es tuya) y el IVA que les pagaste a tus proveedores (cupones de descuento). Restás: si cobraste más de lo que pagaste, le das la diferencia al Estado. Si pagaste más, te queda un saldo a favor para el mes siguiente. Lo que cobrás o pagás de deudas viejas no entra en esta cuenta.</p>`,
                explain: String.raw`<div class="box">\[ \text{IVA a pagar} = \text{IVA ventas netas} - \text{IVA compras netas} \]</div>
<ul><li><strong>IVA ventas netas</strong>: ventas y ND emitidas, menos NC emitidas.</li><li><strong>IVA compras netas</strong>: compras de mercaderías, bienes de uso, gastos y ND recibidas, menos NC recibidas.</li></ul>
<p>Si el resultado es negativo no hay que pagar: queda un <strong>saldo a favor</strong> (crédito fiscal).</p>
<p>La cuenta <strong>Crédito fiscal</strong> que surge del beneficio por ventas con tarjeta de débito (ver t7) también es un activo contra la DGI.</p>
<p>Qué no entra: cobros y pagos (recibos), sueldos y aportes, boletas de depósito, vencimientos de cheques.</p>
<table><tr><th>Operación</th><th>IVA ventas</th><th>IVA compras</th></tr>
<tr><td>Venta 30.000 + IVA</td><td>+6.000</td><td></td></tr>
<tr><td>NC emitida 2.000 + IVA</td><td>−400</td><td></td></tr>
<tr><td>Compra 18.000 IVA incl.</td><td></td><td>+3.000</td></tr>
<tr><td>ND recibida 600 + IVA</td><td></td><td>+120</td></tr>
<tr><td>Muebles 6.000 + IVA</td><td></td><td>+1.200</td></tr>
<tr><td><strong>Total</strong></td><td><strong>5.600</strong></td><td><strong>4.320</strong></td></tr></table>
<p>IVA a pagar: 5.600 − 4.320 = 1.280.</p>`,
                keys: [String.raw`IVA a pagar = IVA ventas − IVA compras.`, String.raw`Restá las NC de cada lado.`, String.raw`Negativo: saldo a favor.`, String.raw`Recibos y sueldos no entran.`],
                example: { q: String.raw`<p>IVA ventas del mes 2.500 e IVA compras 3.100. Posición.</p>`, sol: String.raw`<p>2.500 − 3.100 = −600: <strong>saldo a favor</strong> de 600, no se paga nada.</p>` },
            },
        ],
        t7: [
            {
                id: "t7.1",
                title: String.raw`Conformes a cobrar y a pagar`,
                eli5: String.raw`<p>Tu primo te debe $ 100 "de palabra". Un día le pedís que te firme un papel: "Pagaré $ 100 el 30 de junio". La deuda es la misma, pero ahora está escrita y firmada: eso es un <strong>conforme</strong>. No entró ni salió plata; solo cambió la forma de la deuda.</p><p>Si le das más tiempo, capaz le cobrás un poquito más (intereses), y el papel se firma por la deuda más esos intereses.</p>`,
                explain: String.raw`<table><tr><th>Hecho</th><th>Asiento</th><th>Comprobante</th></tr>
<tr><td>El cliente documenta su deuda</td><td>Conformes a cobrar a Deudores por ventas</td><td>Recibo de conforme</td></tr>
<tr><td>Documentamos nuestra deuda con el proveedor</td><td>Acreedores por compras a Conformes a pagar</td><td>Recibo de conforme</td></tr>
<tr><td>Intereses por la financiación (antes de firmar)</td><td>Deudores a Intereses ganados e IVA ventas (o Intereses perdidos e IVA compras a Acreedores)</td><td>ND</td></tr>
<tr><td>Cobro del conforme al vencimiento</td><td>Caja (o Banco) a Conformes a cobrar</td><td>CI / recibo</td></tr>
<tr><td>Pago del conforme al vencimiento</td><td>Conformes a pagar a Banco c/c (o Caja)</td><td>CI (clave T3) o recibo de conforme (aceptado en agosto 2026)</td></tr></table>
<p>Documentar es <strong>permutativo</strong>. Al cobrar o pagar el conforme se cancela la cuenta del documento, no Deudores ni Acreedores (ya se cancelaron al firmar).</p>
<p>Importe del conforme con intereses: deuda + intereses + IVA de los intereses. Ejemplo: 20.000 + 1.500 + 300 = 21.800.</p>`,
                keys: [String.raw`Documentar: recibo de conforme, permutativo.`, String.raw`Intereses: primero ND, después conforme por el total.`, String.raw`Al vencer se cancela Conformes, no Deudores ni Acreedores.`, String.raw`Cobro en efectivo: Caja. Pago con cheque propio: Banco.`],
                example: { q: String.raw`<p>El cliente documenta su deuda de $ 20.000 a 6 meses con intereses de $ 1.500 + IVA. Asientos.</p>`, sol: String.raw`<p>ND: Deudores por ventas 1.800 a Intereses ganados 1.500 e IVA ventas 300. Recibo de conforme: Conformes a cobrar 21.800 a Deudores por ventas 21.800.</p>` },
            },
            {
                id: "t7.2",
                title: String.raw`Cheques comunes propios y de terceros`,
                eli5: String.raw`<p>Un cheque común es una orden al banco: "pagale a quien traiga esto". Si un cliente te da un cheque suyo, es como si te diera billetes: lo guardás en la caja hasta llevarlo al banco. Si vos firmás un cheque de tu chequera, la plata sale de tu cuenta del banco.</p><p>Por eso la regla es corta: cheque de otro, <strong>Caja</strong>; cheque mío, <strong>Banco</strong>.</p>`,
                explain: String.raw`<table><tr><th>Hecho</th><th>Asiento</th><th>Comprobante</th></tr>
<tr><td>Recibimos cheque común de un tercero (cobro)</td><td>Caja a Deudores por ventas</td><td>Recibo</td></tr>
<tr><td>Venta contado cobrada con cheque de tercero</td><td>Caja a Ventas e IVA ventas</td><td>Boleta</td></tr>
<tr><td>Depositamos el cheque de tercero</td><td>Banco c/c a Caja</td><td>Boleta de depósito</td></tr>
<tr><td>Endosamos el cheque de tercero a un proveedor</td><td>Acreedores por compras a Caja</td><td>Recibo</td></tr>
<tr><td>Pagamos con cheque común propio</td><td>Acreedores (o el bien, o Conformes a pagar) a Banco c/c</td><td>Recibo o boleta</td></tr>
<tr><td>Boleta de devolución contado pagada con cheque propio</td><td>Ventas e IVA ventas a Banco c/c</td><td>Boleta de devolución contado</td></tr></table>
<p>Criterio de la cátedra: los cheques de terceros al día están en Caja hasta que se depositan. Un error muy elegido es mandarlos directo a Banco c/c.</p>
<p>Para el saldo de Caja: suman efectivo y cheques de terceros recibidos, y los diferidos de terceros que vencen; restan depósitos, pagos en efectivo y endosos. Los cheques propios no tocan Caja.</p>`,
                keys: [String.raw`Cheque de tercero al día: Caja.`, String.raw`Cheque propio: Banco c/c.`, String.raw`Depósito: Banco a Caja, boleta de depósito.`, String.raw`Endoso a proveedor: Acreedores a Caja.`],
                example: { q: String.raw`<p>Caja: saldo inicial 2.000. Un cliente paga con cheque común de tercero 3.000 y 1.000 en efectivo; se deposita el cheque; se paga a un proveedor con cheque común propio 1.500; vence un cheque diferido de tercero por 800. Saldo de Caja.</p>`, sol: String.raw`<p>2.000 + 4.000 − 3.000 + 800 = <strong>3.800</strong>. El cheque propio sale del Banco.</p>` },
            },
            {
                id: "t7.3",
                title: String.raw`Cheques diferidos propios y de terceros`,
                eli5: String.raw`<p>Un cheque diferido es un cheque con "no abrir antes del 20 de junio". Si te lo da un cliente, todavía no es plata en la mano: lo guardás en un cajón especial (Cheques diferidos a cobrar). Cuando llega la fecha, pasa a la caja.</p><p>Si vos lo firmás para un proveedor, todavía no salió plata de tu banco: la deuda sigue, pero ahora escrita en un cheque (Cheques diferidos a pagar). Cuando llega la fecha, el banco paga y baja tu cuenta.</p>`,
                explain: String.raw`<table><tr><th>Hecho</th><th>Asiento</th><th>Comprobante</th></tr>
<tr><td>Recibimos cheque diferido del cliente</td><td>Cheques diferidos a cobrar a Deudores por ventas</td><td>Recibo de cheque diferido</td></tr>
<tr><td>Vence ese cheque</td><td>Caja a Cheques diferidos a cobrar</td><td>CI</td></tr>
<tr><td>Entregamos cheque diferido propio al proveedor</td><td>Acreedores por compras a Cheques diferidos a pagar</td><td>Recibo de cheque diferido</td></tr>
<tr><td>Vence nuestro cheque</td><td>Cheques diferidos a pagar a Banco c/c</td><td>CI</td></tr></table>
<ul><li>Deudores y Acreedores bajan al <strong>entregar o recibir</strong> el cheque, no al vencimiento.</li><li>Cheque de tercero: al vencer va a <strong>Caja</strong>. Cheque propio: al vencer baja <strong>Banco</strong>.</li><li>Un diferido recibido con fecha ya vencida se trata como al día (Caja).</li><li>Saldo de Cheques diferidos a pagar a una fecha: los cheques entregados que todavía no vencieron.</li></ul>
<p>En P10 rotan: vence cheque diferido a pagar (Banco, T1), cobro de conforme (Caja, T2), vence cheque diferido a cobrar (Caja, T3).</p>`,
                keys: [String.raw`Recibir o entregar: recibo de cheque diferido.`, String.raw`Vencimiento: CI.`, String.raw`Tercero vence: Caja. Propio vence: Banco.`, String.raw`Deudores y Acreedores no se tocan al vencer.`],
                example: { q: String.raw`<p>Se entregan a un proveedor tres cheques diferidos propios: $ 5.000 (vence 10/6), $ 4.000 (vence 30/6) y $ 6.000 (vence 15/7). Saldo de Cheques diferidos a pagar al 30/6.</p>`, sol: String.raw`<p>Vencieron los de 10/6 y 30/6 (Cheques dif. a pagar a Banco c/c). Queda <strong>6.000</strong>.</p>` },
            },
            {
                id: "t7.4",
                title: String.raw`Descuentos por pronto pago y cobros mixtos`,
                eli5: String.raw`<p>Si un cliente te paga antes de tiempo, a veces le hacés un descuento como premio. Primero le das un papel que baja lo que te debe (nota de crédito) y después le cobrás el resto (recibo). Son dos papeles distintos, como dos pasos.</p><p>Y si te paga una parte en billetes y otra con un cheque para cobrar más adelante, cada forma de pago tiene su propio papel.</p>`,
                explain: String.raw`<h4>Descuento concedido (se lo damos al cliente)</h4>
<p>NC emitida: Descuentos concedidos (e IVA ventas si lleva IVA) a Deudores por ventas. Recibo: Caja o Banco a Deudores por ventas por lo que efectivamente paga.</p>
<h4>Descuento obtenido (nos lo da el proveedor)</h4>
<p>NC recibida: Acreedores por compras a Descuentos obtenidos (e IVA compras). Recibo: Acreedores a Banco c/c por el resto.</p>
<div class="box">Criterio de diciembre 2025: deuda 4.000, descuento 10% "que se deduce del pago", con IVA: NC 400 + 80 = 480; recibo Caja 3.520 a Deudores 3.520. El recibo no incluye el descuento: ese va en la NC.</div>
<p>Si el enunciado dice "sin IVA", la NC es solo Descuentos concedidos a Deudores.</p>
<h4>Cobros mixtos</h4>
<table><tr><th>Forma de pago</th><th>Cuenta</th><th>Comprobante</th></tr>
<tr><td>Efectivo y cheques comunes de terceros</td><td>Caja</td><td>Recibo</td></tr>
<tr><td>Transferencia</td><td>Banco c/c</td><td>Recibo</td></tr>
<tr><td>Cheque diferido</td><td>Cheques diferidos a cobrar</td><td>Recibo de cheque diferido</td></tr>
<tr><td>Conforme</td><td>Conformes a cobrar</td><td>Recibo de conforme</td></tr></table>`,
                keys: [String.raw`Descuento: NC primero, recibo después.`, String.raw`Concedidos: pérdida, reduce IVA ventas.`, String.raw`Obtenidos: ganancia, reduce IVA compras.`, String.raw`Cobro mixto: un comprobante por instrumento.`],
                example: { q: String.raw`<p>Un cliente debe $ 6.000 y paga antes del vencimiento con un descuento de $ 300 + IVA; paga el resto en efectivo. Asientos.</p>`, sol: String.raw`<p>NC: Descuentos concedidos 300 e IVA ventas 60 a Deudores por ventas 360. Recibo: Caja 5.640 a Deudores por ventas 5.640.</p>` },
            },
            {
                id: "t7.5",
                title: String.raw`Préstamos bancarios y vales con intereses`,
                eli5: String.raw`<p>Le pedís al banco $ 100 prestados a tres meses. El banco te dice: "te los presto, pero te cobro $ 10 de intereses ya, por adelantado". Entonces a tu cuenta entran $ 90, pero vos le vas a devolver $ 100. Firmás un papel (el vale) que dice que debés $ 100.</p><p>Esos $ 10 que no te llegaron son el precio del préstamo: una pérdida para la empresa.</p>`,
                explain: String.raw`<table><tr><th>Hecho</th><th>Asiento</th><th>Comprobante</th></tr>
<tr><td>Préstamo con vale e intereses descontados</td><td>Banco c/c (líquido) e Intereses perdidos a Vales bancarios a pagar (nominal)</td><td>NCB (y el vale firmado)</td></tr>
<tr><td>Préstamo sin descontar intereses</td><td>Banco c/c a Préstamos bancarios</td><td>NCB</td></tr>
<tr><td>Vencimiento del vale, el banco debita</td><td>Vales bancarios a pagar a Banco c/c</td><td>NDB</td></tr>
<tr><td>Pago de cuota con intereses</td><td>Préstamos bancarios e Intereses perdidos a Banco c/c</td><td>NDB o recibo</td></tr></table>
<div class="box">Líquido acreditado = nominal − intereses descontados.<br>La deuda (Vales) es siempre el nominal.</div>
<p>Distractores del examen: poner Intereses <em>ganados</em>, debitar Banco por el nominal, o hacer dos asientos con Banco por el nominal y después los intereses. En los ejercicios los intereses bancarios suelen venir sin IVA; si dicen "+ IVA", se agrega IVA compras.</p>
<p>El préstamo con intereses descontados es <strong>modificativo disminutivo</strong> por los intereses.</p>`,
                keys: [String.raw`Banco por el líquido, Vales por el nominal.`, String.raw`Intereses descontados: Intereses perdidos.`, String.raw`Acreditación: NCB. Débito al vencer: NDB.`, String.raw`Préstamo sin intereses descontados: permutativo.`],
                example: { q: String.raw`<p>El banco otorga un préstamo de $ 40.000 a 90 días contra vale; descuenta $ 3.600 de intereses y acredita el resto. Asiento.</p>`, sol: String.raw`<p>Banco c/c 36.400 e Intereses perdidos 3.600 a Vales bancarios a pagar 40.000, s/ NCB.</p>` },
            },
            {
                id: "t7.6",
                title: String.raw`Tarjetas de débito y crédito: venta y liquidación`,
                eli5: String.raw`<p>Cuando un cliente te paga con tarjeta, para él ya pagó, pero la plata no te llega en el momento: te la debe la empresa de la tarjeta, que te la deposita después. Por eso anotás que te debe la tarjeta, no el cliente.</p><p>Cuando la tarjeta te paga, se queda con una comisión (con su IVA). Y si la venta fue con débito a un consumidor final, el Estado te reconoce un pequeño crédito de IVA que la tarjeta descuenta del depósito.</p>`,
                explain: String.raw`<h4>La venta (boleta)</h4>
<p>Deudores tarjeta de débito (o de crédito) a Ventas e IVA ventas. El CI de costo va aparte.</p>
<h4>La liquidación</h4>
<p>Banco c/c + Comisiones perdidas + IVA compras (+ Crédito fiscal, solo débito) a Deudores tarjeta (por el total).</p>
<div class="box">Comisión = % × importe IVA incluido<br>IVA de la comisión = 20% × comisión<br>Crédito fiscal = puntos de IVA × <strong>neto</strong> de las ventas con débito<br>Banco = total − comisión − IVA comisión − crédito fiscal</div>
<table><tr><th>Ejemplo débito, saldo 12.000</th><th>Importe</th></tr>
<tr><td>Comisión 4%</td><td>480</td></tr>
<tr><td>IVA comisión</td><td>96</td></tr>
<tr><td>Crédito fiscal 2 puntos × 10.000</td><td>200</td></tr>
<tr><td>Banco c/c</td><td>11.224</td></tr></table>
<p>El beneficio fiscal aplica <strong>solo a ventas con tarjeta de débito a consumidores finales</strong> (no a todos los clientes, no a crédito). Crédito fiscal es un activo.</p>
<p>Total de cuentas por cobrar con tarjetas: Deudores por ventas + Deudores tarjeta de débito + Deudores tarjeta de crédito.</p>`,
                keys: [String.raw`Venta: boleta, Deudores tarjeta a Ventas e IVA ventas.`, String.raw`Comisión sobre el total con IVA, más IVA.`, String.raw`Crédito fiscal: puntos × neto, solo débito.`, String.raw`Banco = total − comisión − IVA − crédito fiscal.`],
                example: { q: String.raw`<p>Deudores tarjeta de crédito tiene saldo 24.000. La administradora liquida con comisión del 6% + IVA. Asiento.</p>`, sol: String.raw`<p>Comisión 1.440, IVA 288. Banco c/c 22.272, Comisiones perdidas 1.440 e IVA compras 288 a Deudores tarjeta de crédito 24.000. Sin crédito fiscal por ser tarjeta de crédito.</p>` },
            },
        ],
        t8: [
            {
                id: "t8.1",
                title: String.raw`Nominal, aporte personal, adelantos y líquido`,
                eli5: String.raw`<p>Tu hermana trabaja en un almacén y le prometieron $ 10.000 por mes: ese es el sueldo <strong>nominal</strong>. Pero el día de pago no le dan los $ 10.000: el almacén le descuenta una parte que manda al BPS en su nombre (para su jubilación y salud). Y si a mitad de mes pidió un adelanto, también se lo descuentan. Lo que finalmente le llega a la mano es el <strong>líquido</strong>.</p>`,
                explain: String.raw`<div class="box">\[ \text{Líquido} = \text{Nominal} - \text{Aporte personal (obrero)} - \text{Adelantos} \]</div>
<ul><li><strong>Nominal</strong>: el sueldo bruto. Es la pérdida "Sueldos".</li><li><strong>Aporte personal u obrero</strong>: porcentaje del nominal (20% en los ejercicios) que se le retiene al empleado. Es plata del empleado que la empresa le debe al BPS: no es gasto de la empresa.</li><li><strong>Adelanto</strong>: pago a cuenta durante el mes. Asiento: Adelantos al personal a Banco c/c (o Caja). En la revisión figuró con comprobante interno; en otros ejercicios con recibo. Es un activo que se cancela al liquidar.</li><li><strong>Líquido</strong>: va a Sueldos a pagar (pasivo) hasta que se paga.</li></ul>
<table><tr><th>Dato</th><th>Importe</th></tr>
<tr><td>Nominal</td><td>18.000</td></tr>
<tr><td>Aporte obrero 20%</td><td>3.600</td></tr>
<tr><td>Adelanto</td><td>2.000</td></tr>
<tr><td>Líquido</td><td>12.400</td></tr></table>
<p>El aporte patronal y el BSE no se descuentan al empleado: los paga la empresa por encima del nominal.</p>`,
                keys: [String.raw`Líquido = nominal − obrero − adelantos.`, String.raw`El obrero es una retención, no un gasto.`, String.raw`El adelanto es activo y se cancela al liquidar.`, String.raw`Patronal y BSE no bajan el líquido.`],
                example: { q: String.raw`<p>Nominal $ 30.000; adelanto $ 5.000; obrero 20%; patronal 10%; BSE 1%. Líquido.</p>`, sol: String.raw`<p>30.000 − 6.000 − 5.000 = <strong>19.000</strong>. Patronal y BSE no se descuentan.</p>` },
            },
            {
                id: "t8.2",
                title: String.raw`Aporte patronal, ficto patronal y BSE`,
                eli5: String.raw`<p>Además del sueldo, tener un empleado le cuesta a la empresa otras cosas: un aporte extra al BPS que paga la empresa (el <strong>patronal</strong>) y un seguro por si el empleado se lastima trabajando (el <strong>BSE</strong>).</p><p>Y los dueños que trabajan en su propia empresa, aunque no cobren sueldo, tienen que aportar al BPS como si ganaran un sueldo que fija la ley: ese sueldo "imaginario" es el <strong>ficto patronal</strong>.</p>`,
                explain: String.raw`<table><tr><th>Concepto</th><th>Base</th><th>% típico</th><th>Cuenta al Haber</th></tr>
<tr><td>Aporte patronal</td><td>Nominal</td><td>10%</td><td>BPS</td></tr>
<tr><td>Aporte sobre ficto patronal</td><td><strong>Sueldo ficto</strong></td><td>25%</td><td>BPS</td></tr>
<tr><td>Seguro de accidentes</td><td>Nominal</td><td>1% (o 2%)</td><td><strong>BSE</strong></td></tr></table>
<p>Los tres son pérdida para la empresa: se debita <strong>Leyes sociales</strong>.</p>
<div class="box">Leyes sociales del mes = patronal + BSE + aporte sobre ficto</div>
<p>Con nominal 12.000 y ficto 30.000: patronal 1.200; BSE 1% 120; ficto 7.500. Leyes sociales = 8.820.</p>
<p>Errores típicos: calcular el ficto sobre el nominal del empleado, mandar el BSE al BPS, o sumar el aporte obrero a Leyes sociales (ese sale del nominal). En la revisión de mayo los porcentajes fueron siempre 20% obrero, 10% patronal, 25% ficto y 1% BSE.</p>`,
                keys: [String.raw`Patronal y BSE sobre el nominal; ficto sobre el sueldo ficto.`, String.raw`Todo es Leyes sociales (pérdida).`, String.raw`Patronal y ficto a BPS; seguro a BSE.`, String.raw`El obrero no es Leyes sociales.`],
                example: { q: String.raw`<p>Nominal $ 16.000; ficto $ 20.000; patronal 10%; BSE 2%; ficto 25%. Leyes sociales del mes y cómo se reparte entre BPS y BSE.</p>`, sol: String.raw`<p>Patronal 1.600 + BSE 320 + ficto 5.000 = <strong>6.920</strong>. A BPS van 6.600 y a BSE 320.</p>` },
            },
            {
                id: "t8.3",
                title: String.raw`Asientos de la liquidación y los pagos`,
                eli5: String.raw`<p>A fin de mes, la empresa hace la cuenta del sueldo en una planilla y la anota en dos partes. Primera: "el empleado ganó tanto; de eso, una parte ya se la di (adelanto), otra se la debo al BPS por él, y el resto se lo debo a él". Segunda: "además, yo le debo al BPS y al BSE lo que me toca como empresa". Después, cuando paga, va tachando esas deudas.</p>`,
                explain: String.raw`<table><tr><th>N°</th><th>Asiento</th><th>Comprobante</th><th>Tipo</th></tr>
<tr><td>1</td><td>Adelantos al personal a Banco c/c</td><td>CI o recibo</td><td>P</td></tr>
<tr><td>2</td><td>Sueldos (nominal) a Adelantos al personal, BPS (obrero) y Sueldos a pagar (líquido)</td><td>PLS</td><td>M</td></tr>
<tr><td>3</td><td>Leyes sociales a BPS (patronal) y BSE</td><td>PLS</td><td>M</td></tr>
<tr><td>4</td><td>Leyes sociales a BPS (ficto patronal)</td><td>PLS</td><td>M</td></tr>
<tr><td>5</td><td>Sueldos a pagar a Banco c/c</td><td>Recibo</td><td>P</td></tr>
<tr><td>6</td><td>BPS y BSE a Banco c/c (mes siguiente)</td><td>Recibo</td><td>P</td></tr></table>
<p>Ejemplo: nominal 15.000, adelanto 2.000, obrero 20%, patronal 10%, BSE 1%:</p>
<ul><li>Sueldos 15.000 a Adelantos 2.000, BPS 3.000 y Sueldos a pagar 10.000.</li><li>Leyes sociales 1.650 a BPS 1.500 y BSE 150.</li></ul>
<p>Controlá siempre que Debe = Haber en el asiento 2: nominal = adelanto + obrero + líquido.</p>`,
                keys: [String.raw`Asiento 2: Sueldos a Adelantos, BPS y Sueldos a pagar.`, String.raw`Asiento 3 y 4: Leyes sociales a BPS y BSE.`, String.raw`Liquidar es M; pagar es P.`, String.raw`Nominal = adelanto + obrero + líquido.`],
                example: { q: String.raw`<p>Nominal $ 22.000; adelanto $ 4.000; obrero 20%; patronal 10%; BSE 2%; ficto $ 18.000 al 25%. Asientos de la PLS.</p>`, sol: String.raw`<p>Sueldos 22.000 a Adelantos al personal 4.000, BPS 4.400 y Sueldos a pagar 13.600. Leyes sociales 2.640 a BPS 2.200 y BSE 440. Leyes sociales 4.500 a BPS 4.500.</p>` },
            },
            {
                id: "t8.4",
                title: String.raw`Saldo de la cuenta BPS`,
                eli5: String.raw`<p>La cuenta BPS es como una alcancía de deudas con el BPS. Ahí caen tres monedas cada mes: lo que le retuviste al empleado, lo que te toca a vos como empresa y lo que aportan los dueños por el ficto. Si el mes pasado no pagaste, esas monedas siguen adentro. El seguro (BSE) va a otra alcancía, y el adelanto o el sueldo que le pagás al empleado no tienen nada que ver con esta.</p>`,
                explain: String.raw`<div class="box">\[ \text{Saldo BPS} = \text{Saldo anterior impago} + \text{obrero} + \text{patronal} + \text{ficto} - \text{pagos al BPS} \]</div>
<table><tr><th>Caso</th><th>Cálculo</th><th>BPS</th></tr>
<tr><td>N 10.000, F 20.000 (20/10/25)</td><td>2.000 + 1.000 + 5.000</td><td>8.000</td></tr>
<tr><td>N 11.500, F 23.000</td><td>2.300 + 1.150 + 5.750</td><td>9.200</td></tr>
<tr><td>N 15.000, F 20.000 y deuda anterior 6.000</td><td>3.000 + 1.500 + 5.000 + 6.000</td><td>15.500</td></tr></table>
<p><strong>No afectan el BPS</strong>: el adelanto, el pago del líquido, el BSE.</p>
<p><strong>Sí lo afectan</strong>: una deuda del mes anterior que no se pagó (julio 2026) o su pago durante el mes (lo resta). Leé con cuidado "la empresa está al día con marzo" (no hay saldo anterior) frente a "adeuda el BPS de marzo".</p>`,
                keys: [String.raw`BPS = obrero + patronal + ficto (+ deuda anterior).`, String.raw`El BSE no va al BPS.`, String.raw`Adelanto y líquido no tocan el BPS.`, String.raw`"Al día" significa sin saldo anterior.`],
                example: { q: String.raw`<p>Adelanto $ 2.000. Nominal $ 13.000; ficto $ 22.000; obrero 20%, patronal 10%, ficto 25%, BSE 1%. Se adeuda el BPS del mes anterior por $ 4.000. Saldo de BPS.</p>`, sol: String.raw`<p>2.600 + 1.300 + 5.500 + 4.000 = <strong>13.400</strong>. El BSE (130) y el adelanto no cuentan.</p>` },
            },
            {
                id: "t8.5",
                title: String.raw`Saldo de Leyes sociales, costo total y obligaciones`,
                eli5: String.raw`<p>La cuenta Leyes sociales junta todo lo que la empresa gasta "de más" por tener empleados y dueños trabajando: el aporte patronal, el seguro y el aporte de los dueños. Es como el ticket de lo que te cuesta el equipo además de los sueldos.</p><p>Si querés saber cuánto te cuesta en total el personal, sumás el sueldo completo más ese ticket. Y si querés saber cuánto debés a fin de mes, mirás las alcancías de deudas: BPS, BSE y lo que todavía no le pagaste al empleado.</p>`,
                explain: String.raw`<div class="box">Leyes sociales (saldo) = saldo inicial + patronal + BSE + ficto<br>Pérdida total = Sueldos (nominal) + Leyes sociales del mes<br>Obligaciones = BPS + BSE + Sueldos a pagar (si no se pagó el líquido)</div>
<p>Leyes sociales es una cuenta de pérdida: su saldo es <strong>deudor</strong> y se acumula en el ejercicio, por eso se suma el saldo inicial (T2 de la revisión: saldo inicial 3.000 + 6.100 = 9.100).</p>
<table><tr><th>Caso (N 50.000, F 30.000, 20/10/25/1, sin adelantos, líquido pagado)</th><th>Importe</th></tr>
<tr><td>Sueldos</td><td>50.000</td></tr>
<tr><td>Leyes sociales: 5.000 + 500 + 7.500</td><td>13.000</td></tr>
<tr><td>Pérdida total</td><td>63.000</td></tr>
<tr><td>BPS: 10.000 + 5.000 + 7.500</td><td>22.500</td></tr>
<tr><td>BSE</td><td>500</td></tr>
<tr><td>Obligaciones (líquido ya pagado)</td><td>23.000</td></tr></table>
<p>El aporte obrero no suma a la pérdida (ya está dentro del nominal), pero sí a las obligaciones con el BPS.</p>`,
                keys: [String.raw`Leyes sociales = patronal + BSE + ficto (+ saldo inicial).`, String.raw`Pérdida total = nominal + Leyes sociales.`, String.raw`Obligaciones: BPS + BSE + líquido impago.`, String.raw`El obrero suma a la deuda, no a la pérdida.`],
                example: { q: String.raw`<p>Leyes sociales tiene saldo inicial deudor $ 1.800. Nominal $ 14.000; ficto $ 20.000; patronal 10%, BSE 1%, ficto 25%. Saldo final.</p>`, sol: String.raw`<p>1.800 + 1.400 + 140 + 5.000 = <strong>8.340</strong> deudor.</p>` },
            },
        ],
    },
    flashcards: [
        { t: "t1", s: "t1.1", q: String.raw`¿Cuáles son los elementos de una organización?`, a: String.raw`Un número de participantes, objetivos básicos, metas específicas derivadas de esos objetivos, un ejercicio de actividad para lograrlos y recursos para desarrollarla.` },
        { t: "t1", s: "t1.1", q: String.raw`¿Qué es la contabilidad, en una línea?`, a: String.raw`Un sistema de información que capta, mide en moneda y registra los hechos económicos de un ente y produce informes para tomar decisiones.` },
        { t: "t1", s: "t1.1", q: String.raw`¿Qué informes contables se presentan a los usuarios externos?`, a: String.raw`Los estados financieros.` },
        { t: "t1", s: "t1.1", q: String.raw`¿Qué es un informe de gestión? Dá un ejemplo.`, a: String.raw`Un informe a medida para usuarios internos. Ejemplos: detalle de cuentas por cobrar y por pagar, presupuestos.` },
        { t: "t1", s: "t1.1", q: String.raw`¿Qué grado de detalle necesita el nivel alto de la jerarquía (Directorio)?`, a: String.raw`Poco: información sintética. El detalle alto lo necesitan los niveles operativos.` },
        { t: "t1", s: "t1.1", q: String.raw`¿Una organización sin fin de lucro necesita contabilidad?`, a: String.raw`Sí. Toda organización tiene recursos y necesita información para decidir, tenga o no fin de lucro.` },
        { t: "t1", s: "t1.1", q: String.raw`El dueño paga con su tarjeta personal una cena familiar. ¿Se registra en la empresa?`, a: String.raw`No. Por el principio del ente, la empresa es distinta de su dueño: solo se registran los hechos del ente.` },
        { t: "t1", s: "t1.2", q: String.raw`Objetivo de los estados financieros según la NIIF para PYMES.`, a: String.raw`Informar la situación financiera, el rendimiento (situación económica) y los flujos de efectivo de la entidad, para decisiones económicas de usuarios que no pueden pedir informes a medida.` },
        { t: "t1", s: "t1.2", q: String.raw`¿Qué integra el juego completo de estados financieros?`, a: String.raw`Estado de situación financiera, estado de resultados (o resultado integral), estado de cambios en el patrimonio, estado de flujos de efectivo y las notas.` },
        { t: "t1", s: "t1.2", q: String.raw`¿Las notas forman parte de los estados financieros?`, a: String.raw`Sí. Una afirmación que diga que los estados se integran "exclusivamente" por los cuatro estados, sin notas, es falsa.` },
        { t: "t1", s: "t1.2", q: String.raw`¿Cuáles son los supuestos fundamentales para preparar los estados financieros?`, a: String.raw`El principio de lo devengado y el de empresa en marcha.` },
        { t: "t1", s: "t1.2", q: String.raw`¿Qué dice el principio de lo devengado?`, a: String.raw`Los hechos se reconocen cuando ocurren, no cuando se cobra o se paga.` },
        { t: "t1", s: "t1.2", q: String.raw`¿Qué cualidad falla si el informe llega después de tomada la decisión?`, a: String.raw`La oportunidad.` },
        { t: "t1", s: "t1.2", q: String.raw`¿Qué cualidad falla si cada año se cambia el criterio de valuación sin avisar?`, a: String.raw`La comparabilidad (entre ejercicios).` },
        { t: "t1", s: "t1.2", q: String.raw`¿Qué exige la neutralidad?`, a: String.raw`Que la información no tenga sesgo a favor de ningún usuario ni busque un resultado predeterminado. Es parte de la fiabilidad.` },
        { t: "t1", s: "t1.3", q: String.raw`Definición de patrimonio neto según la cátedra.`, a: String.raw`El derecho que tiene el propietario por el exceso de los recursos sobre las obligaciones.` },
        { t: "t1", s: "t1.3", q: String.raw`¿El total de recursos es igual al total de fuentes ajenas?`, a: String.raw`No: es igual a fuentes ajenas más fuentes propias.` },
        { t: "t1", s: "t1.3", q: String.raw`Recursos 50.000 y pasivo 20.000. ¿Patrimonio?`, a: String.raw`30.000.` },
        { t: "t1", s: "t1.3", q: String.raw`¿Qué tipo de fuente es el IVA ventas?`, a: String.raw`Fuente ajena (pasivo): es una deuda con la DGI.` },
        { t: "t1", s: "t1.3", q: String.raw`¿Qué tipo de fuente son Sueldos a pagar y BPS?`, a: String.raw`Fuentes ajenas (pasivos): deudas con el personal y con el BPS.` },
        { t: "t1", s: "t1.3", q: String.raw`¿Cuándo el patrimonio es negativo?`, a: String.raw`Cuando las obligaciones superan a los recursos.` },
        { t: "t1", s: "t1.3", q: String.raw`Una venta con ganancia cobrada en efectivo, ¿qué hace con recursos y fuentes propias?`, a: String.raw`Suben los recursos (Caja) y suben las fuentes propias por la ganancia.` },
        { t: "t1", s: "t1.4", q: String.raw`Fuente propia de un socio que aporta un bien con deuda a nombre de la empresa.`, a: String.raw`Valor del bien menos la deuda que asume la empresa: lo que el socio puso de su bolsillo.` },
        { t: "t1", s: "t1.4", q: String.raw`Un socio aporta mercaderías de $ 1.000 compradas a crédito simple a nombre de la empresa. Recurso, ajena, propia.`, a: String.raw`Recurso 1.000; ajena 1.000 (Acreedores por compras); propia 0.` },
        { t: "t1", s: "t1.4", q: String.raw`Un socio pide un préstamo a su nombre, lo paga él, y aporta el efectivo. ¿Qué fuente es?`, a: String.raw`Propia: para la empresa (ente distinto) es un aporte de capital.` },
        { t: "t1", s: "t1.4", q: String.raw`¿Qué hechos del enunciado de aportes son distractores típicos?`, a: String.raw`Contrato de alquiler, garantía de un socio, sueldo pactado para un socio, préstamo pedido pero no otorgado: actos administrativos.` },
        { t: "t1", s: "t1.4", q: String.raw`Piden "recursos financieros aportados por los socios". ¿Qué total das?`, a: String.raw`El total de recursos (criterio de la clave oficial), no solo las fuentes propias.` },
        { t: "t1", s: "t1.4", q: String.raw`Cheque diferido de un tercero que venció antes del inicio de actividades: ¿a qué cuenta?`, a: String.raw`A Caja: se trata como cheque al día.` },
        { t: "t1", s: "t1.4", q: String.raw`¿Cómo controlás el ejercicio de aportes?`, a: String.raw`Total recursos = total ajenas + total propias, fila por fila y en el total.` },
        { t: "t1", s: "t1.5", q: String.raw`¿Cómo se calcula el Capital al inicio?`, a: String.raw`Activos aportados menos pasivos que asume la empresa.` },
        { t: "t1", s: "t1.5", q: String.raw`¿Por dónde se registra el Capital en el asiento de apertura?`, a: String.raw`Por el Haber, por la diferencia entre activos y pasivos.` },
        { t: "t1", s: "t1.5", q: String.raw`Efectivo 2.000, cheque de tercero al día 200, cheque diferido 300. ¿Cuánto se debita a Caja?`, a: String.raw`2.200. El diferido va a Cheques diferidos a cobrar (300).` },
        { t: "t1", s: "t1.5", q: String.raw`¿Un conforme a cobrar aportado es activo o pasivo?`, a: String.raw`Activo (Conformes a cobrar): lo firmó un tercero que le va a pagar a la empresa.` },
        { t: "t1", s: "t1.5", q: String.raw`Si en el P2 las mercaderías fueron compradas a crédito a nombre de la empresa, ¿qué cambia?`, a: String.raw`Se agrega Acreedores por compras al pasivo y el capital baja por ese importe.` },
        { t: "t1", s: "t1.5", q: String.raw`¿Separar cheques al día y diferidos cambia el capital?`, a: String.raw`No: cambia qué cuenta se debita, no el total de activos.` },
        { t: "t2", s: "t2.1", q: String.raw`¿Qué diferencia a un hecho económico de un acto administrativo?`, a: String.raw`El hecho económico cambia hoy los recursos, las obligaciones o el patrimonio y se registra. El acto administrativo no cambia nada todavía y no se registra.` },
        { t: "t2", s: "t2.1", q: String.raw`¿Contratar a un empleado se registra?`, a: String.raw`No, es un acto administrativo. Se registrará la liquidación de su sueldo.` },
        { t: "t2", s: "t2.1", q: String.raw`¿Emitir una orden de compra a un proveedor se registra?`, a: String.raw`No. Se registra cuando llega la mercadería con su factura o boleta.` },
        { t: "t2", s: "t2.1", q: String.raw`¿Salir de garante de un préstamo de otro se registra?`, a: String.raw`No: es un acto administrativo mientras no haya que pagar.` },
        { t: "t2", s: "t2.1", q: String.raw`El banco aprueba y acredita un préstamo solicitado el mes anterior. ¿Es acto administrativo?`, a: String.raw`No: la acreditación es un hecho económico (Banco c/c a Préstamos o Vales bancarios, s/ NCB). La solicitud sí era un acto administrativo.` },
        { t: "t2", s: "t2.1", q: String.raw`¿Qué comprobante respalda un acto administrativo?`, a: String.raw`Ninguno contable: no hay asiento. Puede haber un contrato, pero no genera registración.` },
        { t: "t2", s: "t2.2", q: String.raw`Cuatro formas de variación permutativa.`, a: String.raw`Activo por activo; activo y pasivo suben; activo y pasivo bajan; pasivo por pasivo.` },
        { t: "t2", s: "t2.2", q: String.raw`Depositar efectivo en el banco, ¿P o M?`, a: String.raw`Permutativa: Banco c/c a Caja.` },
        { t: "t2", s: "t2.2", q: String.raw`Entregar un cheque diferido propio a un proveedor, ¿P o M?`, a: String.raw`Permutativa: Acreedores por compras a Cheques diferidos a pagar (pasivo por pasivo).` },
        { t: "t2", s: "t2.2", q: String.raw`Dar un adelanto de sueldo por transferencia, ¿P o M?`, a: String.raw`Permutativa: Adelantos al personal (activo) a Banco c/c.` },
        { t: "t2", s: "t2.2", q: String.raw`Comprar un vehículo con IVA a crédito, ¿P o M?`, a: String.raw`Permutativa: Vehículos e IVA compras (activos) a Acreedores (pasivo).` },
        { t: "t2", s: "t2.2", q: String.raw`Pagar al BPS los aportes del mes anterior, ¿P o M?`, a: String.raw`Permutativa: baja BPS (pasivo) y baja Banco (activo). La pérdida se registró al liquidar.` },
        { t: "t2", s: "t2.2", q: String.raw`Documentar con conforme el crédito contra un cliente, ¿P o M?`, a: String.raw`Permutativa: Conformes a cobrar a Deudores por ventas.` },
        { t: "t2", s: "t2.3", q: String.raw`¿Qué es una variación modificativa aumentativa? Ejemplos.`, a: String.raw`Sube el patrimonio por una ganancia: ventas, intereses ganados, descuentos obtenidos.` },
        { t: "t2", s: "t2.3", q: String.raw`¿Qué es una variación modificativa disminutiva? Ejemplos.`, a: String.raw`Baja el patrimonio por una pérdida: costo de ventas, gastos, sueldos, leyes sociales, intereses perdidos, descuentos concedidos.` },
        { t: "t2", s: "t2.3", q: String.raw`Devolución de una venta con NC (Ventas e IVA ventas a Deudores), ¿qué tipo?`, a: String.raw`Modificativa disminutiva: se reduce una ganancia.` },
        { t: "t2", s: "t2.3", q: String.raw`Mercaderías a Costo de ventas por una devolución de venta, ¿qué tipo?`, a: String.raw`Modificativa aumentativa: vuelve un activo y se reduce una pérdida.` },
        { t: "t2", s: "t2.3", q: String.raw`Préstamo con vale: Banco 9.000 e Intereses perdidos 1.000 a Vales bancarios a pagar 10.000. ¿Tipo?`, a: String.raw`Modificativa disminutiva, por los intereses perdidos.` },
        { t: "t2", s: "t2.3", q: String.raw`Se vende en $ 100 (exento de IVA) mercadería que costó $ 180. ¿Permutativo?`, a: String.raw`No: modificativo. Cambia la cantidad del patrimonio (baja 80). Clave de julio 2025.` },
        { t: "t2", s: "t2.3", q: String.raw`Liquidación de tarjeta con comisión: Banco, Comisiones perdidas, IVA compras y Crédito fiscal a Deudores tarjeta. ¿Tipo?`, a: String.raw`Modificativa disminutiva por la comisión.` },
        { t: "t2", s: "t2.4", q: String.raw`Regla rápida para clasificar un asiento sin leyenda.`, a: String.raw`Si tiene una cuenta de resultado es M; si solo tiene activos y pasivos es P.` },
        { t: "t2", s: "t2.4", q: String.raw`Gastos generales 1.000 e IVA compras 200 a Caja 1.200: ¿P o M?`, a: String.raw`M: Gastos generales es una pérdida (el IVA no cambia la clasificación).` },
        { t: "t2", s: "t2.4", q: String.raw`Caja 500 a Cheques diferidos a cobrar 500: ¿P o M?`, a: String.raw`P: vencimiento de un cheque de tercero, activo por activo.` },
        { t: "t2", s: "t2.4", q: String.raw`Cheques diferidos a pagar a Banco c/c: ¿P o M?`, a: String.raw`P: vence un cheque propio, baja pasivo y baja activo.` },
        { t: "t2", s: "t2.4", q: String.raw`Deudores tarjeta de débito a Ventas e IVA ventas: ¿P o M?`, a: String.raw`M: aparece Ventas.` },
        { t: "t2", s: "t2.4", q: String.raw`Leyes sociales a BPS y BSE: ¿P o M?`, a: String.raw`M: Leyes sociales es una pérdida.` },
        { t: "t2", s: "t2.4", q: String.raw`¿Por qué conviene resolver P6 y P7 juntas?`, a: String.raw`Usan los mismos cuatro asientos: al reconocer el hecho sabés a la vez si es P o M y qué comprobante lo respalda.` },
        { t: "t3", s: "t3.1", q: String.raw`¿Qué naturaleza de saldo tienen las cuentas de activo y de pérdida?`, a: String.raw`Deudor.` },
        { t: "t3", s: "t3.1", q: String.raw`¿Qué naturaleza de saldo tienen pasivo, patrimonio y ganancias?`, a: String.raw`Acreedor.` },
        { t: "t3", s: "t3.1", q: String.raw`Cuentas residuales vs acumulativas.`, a: String.raw`Residuales: el saldo muestra lo que queda a una fecha (activo, pasivo, patrimonio). Acumulativas: el saldo acumula lo ocurrido en el período (resultados).` },
        { t: "t3", s: "t3.1", q: String.raw`¿Qué es una cuenta colectiva y una analítica?`, a: String.raw`Colectiva: agrupa (Deudores por ventas). Analítica: el detalle por persona o ítem en el auxiliar (Sr. AB).` },
        { t: "t3", s: "t3.1", q: String.raw`¿Cuándo la suma de las analíticas es igual a la colectiva?`, a: String.raw`Cuando se registraron correctamente todos los movimientos en la contabilidad principal y en la auxiliar.` },
        { t: "t3", s: "t3.1", q: String.raw`¿Qué tipo de cuenta es Crédito fiscal?`, a: String.raw`Activo: crédito contra la DGI por el beneficio de las ventas con tarjeta de débito.` },
        { t: "t3", s: "t3.1", q: String.raw`¿Qué tipo de cuenta es Comisiones perdidas?`, a: String.raw`Pérdida (comisión que cobra la administradora de tarjetas).` },
        { t: "t3", s: "t3.1", q: String.raw`¿Qué tipo de cuenta es Deudores tarjeta de crédito?`, a: String.raw`Activo: crédito contra la administradora de la tarjeta.` },
        { t: "t3", s: "t3.2", q: String.raw`¿Por dónde disminuye un pasivo?`, a: String.raw`Por el Debe.` },
        { t: "t3", s: "t3.2", q: String.raw`¿Por dónde disminuye un activo?`, a: String.raw`Por el Haber.` },
        { t: "t3", s: "t3.2", q: String.raw`¿Qué partes tiene un asiento de Diario?`, a: String.raw`Fecha, cuentas debitadas, cuentas acreditadas (con "a"), importes y leyenda con el comprobante ("s/ Factura N°").` },
        { t: "t3", s: "t3.2", q: String.raw`Devolución de una venta: ¿Ventas va al Debe o al Haber?`, a: String.raw`Al Debe: se revierte la ganancia.` },
        { t: "t3", s: "t3.2", q: String.raw`Truco para armar un asiento cuando dudás.`, a: String.raw`Empezá por la cuenta que conocés seguro (Caja, Banco, Deudores, Acreedores) y deducí el otro lado para que Debe = Haber.` },
        { t: "t3", s: "t3.2", q: String.raw`¿Puede un asiento tener más de dos cuentas?`, a: String.raw`Sí (asiento compuesto): lo que importa es que la suma del Debe sea igual a la del Haber.` },
        { t: "t3", s: "t3.3", q: String.raw`¿Qué es el plan de cuentas?`, a: String.raw`La lista ordenada, sistemática y codificada de las cuentas que usa la empresa, agrupadas por rubros.` },
        { t: "t3", s: "t3.3", q: String.raw`¿Qué es el manual de cuentas?`, a: String.raw`El documento que explica qué representa cada cuenta y cuándo se debita o se acredita.` },
        { t: "t3", s: "t3.3", q: String.raw`¿Qué tipo de cuenta es Vales bancarios a pagar?`, a: String.raw`Pasivo: préstamo del banco documentado con un vale.` },
        { t: "t3", s: "t3.3", q: String.raw`¿Qué tipo de cuenta es BSE?`, a: String.raw`Pasivo: deuda con el Banco de Seguros del Estado.` },
        { t: "t3", s: "t3.3", q: String.raw`Sueldos vs Sueldos a pagar.`, a: String.raw`Sueldos es pérdida (el nominal devengado). Sueldos a pagar es pasivo (el líquido que se le debe al empleado).` },
        { t: "t3", s: "t3.3", q: String.raw`¿Qué característica debe tener un plan de cuentas para crecer con la empresa?`, a: String.raw`Flexibilidad: tiene que poder ampliarse agregando cuentas sin romper la codificación.` },
        { t: "t3", s: "t3.4", q: String.raw`¿Qué tipo de registro es el Mayor?`, a: String.raw`Sistemático: agrupa por cuenta. El Diario es cronológico.` },
        { t: "t3", s: "t3.4", q: String.raw`Mayor completo vs cuenta T.`, a: String.raw`El completo tiene fecha, detalle, Debe, Haber y saldo. La T solo Debe y Haber: es más fácil y rápida porque se anota menos.` },
        { t: "t3", s: "t3.4", q: String.raw`Fórmula del saldo de una cuenta.`, a: String.raw`Saldo inicial + suma del Debe − suma del Haber. Positivo deudor, negativo acreedor.` },
        { t: "t3", s: "t3.4", q: String.raw`¿Saldo deudor significa que la empresa debe?`, a: String.raw`No. Significa que el Debe supera al Haber (Caja, por ejemplo).` },
        { t: "t3", s: "t3.4", q: String.raw`BPS: saldo inicial 5.000; se paga el mes anterior 5.000; se liquidan aportes por 8.000. Saldo.`, a: String.raw`5.000 − 5.000 + 8.000 = 8.000 acreedor.` },
        { t: "t3", s: "t3.4", q: String.raw`¿Qué indica un saldo contrario a la naturaleza de la cuenta?`, a: String.raw`Una situación especial (por ejemplo, un cliente que dejó una seña) o un error de registración.` },
        { t: "t3", s: "t3.5", q: String.raw`En P4, ¿la NC emitida por un proveedor afecta Deudores por ventas?`, a: String.raw`No. Es una devolución de compra: baja Acreedores por compras.` },
        { t: "t3", s: "t3.5", q: String.raw`En P4, ¿la boleta de devolución contado al cliente afecta Deudores por ventas?`, a: String.raw`No: se devuelve plata en el acto, el asiento es contra Caja (o Banco).` },
        { t: "t3", s: "t3.5", q: String.raw`¿El comprobante interno de costo afecta Deudores por ventas?`, a: String.raw`No: es Costo de ventas a Mercaderías.` },
        { t: "t3", s: "t3.5", q: String.raw`¿Un recibo de cheque diferido del cliente baja Deudores por ventas?`, a: String.raw`Sí, en el momento: Cheques diferidos a cobrar a Deudores por ventas. El vencimiento posterior ya no toca Deudores.` },
        { t: "t3", s: "t3.5", q: String.raw`¿Con qué importe entra una ND por intereses de $ 50 + IVA en Deudores?`, a: String.raw`60 (50 + IVA 10).` },
        { t: "t3", s: "t3.5", q: String.raw`¿Con qué importe entra una ND recibida por $ 72 IVA incluido en Acreedores?`, a: String.raw`72: ya incluye el IVA (Intereses perdidos 60, IVA compras 12).` },
        { t: "t3", s: "t3.5", q: String.raw`En P4 aparece un recibo común por un cheque que entrega el Sr. MM. ¿Afecta el saldo del Sr. AB?`, a: String.raw`No: es de otro cliente. Descartá todo comprobante de otro cliente o proveedor.` },
        { t: "t4", s: "t4.1", q: String.raw`¿Qué registro es cronológico y cuál sistemático?`, a: String.raw`Cronológico: el Diario. Sistemático: el Mayor.` },
        { t: "t4", s: "t4.1", q: String.raw`Libros obligatorios según el art. 55 del Código de Comercio.`, a: String.raw`Diario, Copiador de cartas e Inventarios.` },
        { t: "t4", s: "t4.1", q: String.raw`¿Para qué sirven los registros auxiliares?`, a: String.raw`Para llevar el detalle de una cuenta colectiva (cada cliente, cada proveedor) o de un tipo de operación.` },
        { t: "t4", s: "t4.1", q: String.raw`Orden del circuito contable básico.`, a: String.raw`Comprobante, asiento en el Diario, pase al Mayor, balance de comprobación, estados financieros.` },
        { t: "t4", s: "t4.1", q: String.raw`¿Qué controla el balance de comprobación de sumas y saldos?`, a: String.raw`Que la suma del Debe sea igual a la del Haber y que la suma de saldos deudores sea igual a la de acreedores.` },
        { t: "t4", s: "t4.1", q: String.raw`¿Una clasificación de los registros los divide en cronológicos y sistemáticos?`, a: String.raw`Sí, es verdadera (diciembre 2025).` },
        { t: "t4", s: "t4.2", q: String.raw`¿Qué comprobante respalda una compra contado de mercaderías?`, a: String.raw`Boleta contado recibida del proveedor.` },
        { t: "t4", s: "t4.2", q: String.raw`¿Qué comprobante respalda una compra a crédito?`, a: String.raw`Factura recibida del proveedor.` },
        { t: "t4", s: "t4.2", q: String.raw`Venta contado cobrada con un cheque común de un tercero: comprobante y cuenta.`, a: String.raw`Boleta contado; Caja.` },
        { t: "t4", s: "t4.2", q: String.raw`Gastos generales pagados con cheque común propio: comprobante y cuenta.`, a: String.raw`Boleta contado; Banco c/c.` },
        { t: "t4", s: "t4.2", q: String.raw`Compra de $ 30.000 + IVA, mitad crédito y mitad contado. ¿Cuántos comprobantes?`, a: String.raw`Dos: factura por 18.000 y boleta por 18.000 (cada una 15.000 + 3.000 de IVA).` },
        { t: "t4", s: "t4.2", q: String.raw`¿Qué comprobante acompaña a toda venta en inventario permanente?`, a: String.raw`Un comprobante interno por el costo de ventas.` },
        { t: "t4", s: "t4.3", q: String.raw`NC emitida por devolución de una venta contado: ¿qué cuenta se acredita?`, a: String.raw`Deudores por ventas (clave oficial en tres pruebas), no Caja.` },
        { t: "t4", s: "t4.3", q: String.raw`Boleta de devolución contado emitida, se entrega cheque común propio: ¿qué se acredita?`, a: String.raw`Banco c/c (Ventas e IVA ventas a Banco c/c).` },
        { t: "t4", s: "t4.3", q: String.raw`ND recibida del proveedor por intereses: asiento.`, a: String.raw`Intereses perdidos e IVA compras a Acreedores por compras.` },
        { t: "t4", s: "t4.3", q: String.raw`ND emitida a un cliente por intereses: asiento.`, a: String.raw`Deudores por ventas a Intereses ganados e IVA ventas.` },
        { t: "t4", s: "t4.3", q: String.raw`NC recibida del proveedor por devolución: asiento.`, a: String.raw`Acreedores por compras a Mercaderías e IVA compras.` },
        { t: "t4", s: "t4.3", q: String.raw`El proveedor emite una boleta de devolución contado y nos paga en efectivo: asiento.`, a: String.raw`Caja a Mercaderías e IVA compras. La deuda con el proveedor no cambia.` },
        { t: "t4", s: "t4.3", q: String.raw`¿Qué comprobante documenta un descuento por pronto pago que le das a un cliente?`, a: String.raw`Nota de crédito emitida.` },
        { t: "t4", s: "t4.4", q: String.raw`El cliente paga con cheque común de un tercero: ¿comprobante?`, a: String.raw`Recibo (común).` },
        { t: "t4", s: "t4.4", q: String.raw`Entregás un cheque diferido propio a un proveedor: ¿comprobante?`, a: String.raw`Recibo de cheque diferido (lo emite el proveedor).` },
        { t: "t4", s: "t4.4", q: String.raw`Un cliente firma un conforme por su deuda: ¿comprobante?`, a: String.raw`Recibo de conforme.` },
        { t: "t4", s: "t4.4", q: String.raw`¿Qué comprobante respalda el vencimiento de un cheque diferido, propio o de tercero?`, a: String.raw`Comprobante interno.` },
        { t: "t4", s: "t4.4", q: String.raw`Cobro mixto: efectivo y cheque diferido. ¿Comprobantes?`, a: String.raw`Recibo común por el efectivo y recibo de cheque diferido por el cheque.` },
        { t: "t4", s: "t4.4", q: String.raw`¿Qué comprobante respalda el asiento Leyes sociales a BPS y BSE?`, a: String.raw`Planilla de liquidación de sueldos (PLS).` },
        { t: "t4", s: "t4.4", q: String.raw`Pago de un conforme a pagar con cheque propio: ¿comprobante según las claves?`, a: String.raw`CI (clave de la revisión); en agosto 2026 también se aceptó recibo de conforme. Evitá depender de este dato.` },
        { t: "t4", s: "t4.5", q: String.raw`¿Qué es una NDB y qué asiento típico respalda?`, a: String.raw`Nota de débito bancaria: el banco baja la cuenta. Gastos bancarios a Banco c/c.` },
        { t: "t4", s: "t4.5", q: String.raw`¿Qué comprobante respalda el préstamo acreditado en cuenta contra un vale?`, a: String.raw`NCB (nota de crédito bancaria).` },
        { t: "t4", s: "t4.5", q: String.raw`Banco c/c a Caja: ¿comprobante?`, a: String.raw`Boleta de depósito.` },
        { t: "t4", s: "t4.5", q: String.raw`Gastos generales e IVA compras a Caja: ¿comprobante?`, a: String.raw`Boleta contado.` },
        { t: "t4", s: "t4.5", q: String.raw`El banco debita el vale a su vencimiento: asiento y comprobante.`, a: String.raw`Vales bancarios a pagar a Banco c/c, s/ NDB.` },
        { t: "t4", s: "t4.5", q: String.raw`En P7, ¿qué opciones descartás primero?`, a: String.raw`Las que ponen NC o ND sin devolución ni intereses, y las que invierten NDB y NCB.` },
        { t: "t5", s: "t5.1", q: String.raw`¿A qué valor se registra una compra en Mercaderías?`, a: String.raw`Al costo de compra sin IVA; el IVA va a IVA compras.` },
        { t: "t5", s: "t5.1", q: String.raw`Compra contado con cheque común propio por $ 5.000 + IVA: asiento.`, a: String.raw`Mercaderías 5.000 e IVA compras 1.000 a Banco c/c 6.000, s/ Boleta.` },
        { t: "t5", s: "t5.1", q: String.raw`50 unidades a $ 36 IVA incluido: Mercaderías e IVA.`, a: String.raw`Mercaderías 1.500 (50 × 30), IVA compras 300, total 1.800.` },
        { t: "t5", s: "t5.1", q: String.raw`¿La compra de mercadería es permutativa o modificativa?`, a: String.raw`Permutativa: solo activos (Mercaderías, IVA compras) y pasivos o medios de pago.` },
        { t: "t5", s: "t5.1", q: String.raw`Compra a crédito $ 8.000 + IVA: ¿por cuánto se acredita Acreedores?`, a: String.raw`9.600.` },
        { t: "t5", s: "t5.1", q: String.raw`Se paga la factura de compra de $ 9.600 por transferencia: asiento.`, a: String.raw`Acreedores por compras 9.600 a Banco c/c 9.600, s/ Recibo. Sin IVA.` },
        { t: "t5", s: "t5.2", q: String.raw`¿Qué dos asientos genera una venta en inventario permanente?`, a: String.raw`1) Deudores/Caja a Ventas e IVA ventas (factura o boleta). 2) Costo de ventas a Mercaderías (CI).` },
        { t: "t5", s: "t5.2", q: String.raw`¿Cómo se calcula la utilidad bruta?`, a: String.raw`Ventas − Costo de ventas, ambos sin IVA.` },
        { t: "t5", s: "t5.2", q: String.raw`30 unidades de costo 40, vendidas a 60 + IVA c/u a crédito: importes.`, a: String.raw`Deudores 2.160; Ventas 1.800; IVA ventas 360; Costo de ventas 1.200.` },
        { t: "t5", s: "t5.2", q: String.raw`¿Por qué importe sale la mercadería al vender?`, a: String.raw`Por su costo, no por el precio de venta.` },
        { t: "t5", s: "t5.2", q: String.raw`Ventas 20.000 y Costo de ventas 14.000. Utilidad bruta.`, a: String.raw`6.000.` },
        { t: "t5", s: "t5.2", q: String.raw`Si la letra dice que el CI por el costo "ya fue registrado", ¿qué asiento piden?`, a: String.raw`Solo el de la boleta o factura (la venta).` },
        { t: "t5", s: "t5.3", q: String.raw`Fórmula del costo con utilidad sobre costo.`, a: String.raw`\( C = PV/(1+u) \), con PV sin IVA.` },
        { t: "t5", s: "t5.3", q: String.raw`Venta 1.440 IVA incluido, 20% sobre costo. Costo.`, a: String.raw`1.200 / 1,2 = 1.000.` },
        { t: "t5", s: "t5.3", q: String.raw`Costo 750, 20% sobre costo. Precio sin IVA.`, a: String.raw`900.` },
        { t: "t5", s: "t5.3", q: String.raw`Ventas 50.000 y costo 40.000: ¿% sobre costo?`, a: String.raw`10.000 / 40.000 = 25%.` },
        { t: "t5", s: "t5.3", q: String.raw`Precio 3.000 + IVA, 50% sobre costo. Costo.`, a: String.raw`3.000 / 1,5 = 2.000.` },
        { t: "t5", s: "t5.3", q: String.raw`Error típico al pedir el costo con utilidad sobre costo.`, a: String.raw`Multiplicar el precio por \( (1-u) \): esa es la fórmula de "sobre ventas".` },
        { t: "t5", s: "t5.3", q: String.raw`Venta 9.000 IVA incluido, 25% sobre costo. Costo.`, a: String.raw`7.500 / 1,25 = 6.000.` },
        { t: "t5", s: "t5.4", q: String.raw`Fórmula del precio con utilidad sobre ventas.`, a: String.raw`\( PV = C/(1-u) \), sin IVA.` },
        { t: "t5", s: "t5.4", q: String.raw`Costo 900, 25% sobre ventas. Precio sin IVA.`, a: String.raw`900 / 0,75 = 1.200.` },
        { t: "t5", s: "t5.4", q: String.raw`Venta 2.400 IVA incluido, 30% sobre ventas. Costo.`, a: String.raw`2.000 × 0,7 = 1.400.` },
        { t: "t5", s: "t5.4", q: String.raw`20% sobre ventas, ¿cuánto es sobre costo?`, a: String.raw`25%: \( 0{,}2/0{,}8 \).` },
        { t: "t5", s: "t5.4", q: String.raw`50% sobre costo, ¿cuánto es sobre ventas?`, a: String.raw`33,33%: \( 0{,}5/1{,}5 \).` },
        { t: "t5", s: "t5.4", q: String.raw`Precio 4.800 IVA incluido y costo 2.800. ¿% sobre ventas?`, a: String.raw`PV = 4.000; 1.200 / 4.000 = 30%.` },
        { t: "t5", s: "t5.4", q: String.raw`Si piden el precio "$ XX + IVA", ¿qué número escribís?`, a: String.raw`El precio neto, sin IVA.` },
        { t: "t5", s: "t5.5", q: String.raw`NC emitida por devolución de venta: asiento.`, a: String.raw`Ventas e IVA ventas a Deudores por ventas; CI: Mercaderías a Costo de ventas.` },
        { t: "t5", s: "t5.5", q: String.raw`Boleta de devolución contado con cheque común propio: asiento.`, a: String.raw`Ventas e IVA ventas a Banco c/c; CI: Mercaderías a Costo de ventas.` },
        { t: "t5", s: "t5.5", q: String.raw`NC por 6.000 + IVA, utilidad 25% sobre costo: ¿costo que vuelve?`, a: String.raw`6.000 / 1,25 = 4.800: Mercaderías 4.800 a Costo de ventas 4.800.` },
        { t: "t5", s: "t5.5", q: String.raw`Devolución de 3.000 + IVA con 20% sobre ventas: ¿costo que vuelve?`, a: String.raw`3.000 × 0,8 = 2.400.` },
        { t: "t5", s: "t5.5", q: String.raw`"$ 4.800 más IVA": ¿total de la devolución?`, a: String.raw`5.760 (4.800 + 960).` },
        { t: "t5", s: "t5.5", q: String.raw`¿La boleta de devolución contado baja Deudores por ventas?`, a: String.raw`No, aunque la venta haya sido a crédito: se devuelve plata en el acto.` },
        { t: "t5", s: "t5.6", q: String.raw`NC recibida del proveedor por $ 1.200 IVA incluido: asiento.`, a: String.raw`Acreedores por compras 1.200 a Mercaderías 1.000 e IVA compras 200.` },
        { t: "t5", s: "t5.6", q: String.raw`Boleta de devolución contado del proveedor que nos devuelve efectivo: ¿toca Acreedores?`, a: String.raw`No: Caja a Mercaderías e IVA compras.` },
        { t: "t5", s: "t5.6", q: String.raw`¿Qué suma y qué resta en el mayor de Mercaderías?`, a: String.raw`Suman: saldo inicial, compras netas y devoluciones de ventas al costo. Restan: costo de ventas y devoluciones de compras netas.` },
        { t: "t5", s: "t5.6", q: String.raw`80 u compradas a 30 + IVA, 10 devueltas, 50 vendidas. Saldo de Mercaderías.`, a: String.raw`20 u × 30 = 600.` },
        { t: "t5", s: "t5.6", q: String.raw`¿Qué control rápido tiene el saldo de Mercaderías?`, a: String.raw`Unidades que quedan × costo unitario sin IVA.` },
        { t: "t5", s: "t5.6", q: String.raw`40 u a 50 + IVA a crédito; se devuelven 4 con NC. Saldo de Acreedores.`, a: String.raw`2.400 − 240 = 2.160.` },
        { t: "t6", s: "t6.1", q: String.raw`IVA contenido en $ 7.200 IVA incluido.`, a: String.raw`7.200 / 6 = 1.200 (neto 6.000).` },
        { t: "t6", s: "t6.1", q: String.raw`$ 4.500 + IVA: ¿total?`, a: String.raw`5.400.` },
        { t: "t6", s: "t6.1", q: String.raw`$ 13.200 IVA incluido: ¿neto?`, a: String.raw`11.000 (13.200 / 1,2).` },
        { t: "t6", s: "t6.1", q: String.raw`¿Por qué no se saca el neto multiplicando el total por 0,8?`, a: String.raw`Porque el IVA es 20% del neto, no del total: el neto es total / 1,2 (0,8333 del total).` },
        { t: "t6", s: "t6.1", q: String.raw`¿Qué cuentas van por el total (con IVA) y cuáles por el neto?`, a: String.raw`Total: Caja, Banco, Deudores, Acreedores, Deudores tarjeta. Neto: Ventas, Mercaderías, gastos, bienes de uso, intereses.` },
        { t: "t6", s: "t6.1", q: String.raw`Tasas de IVA reales en Uruguay y la que usa la cátedra.`, a: String.raw`Básica 22% y mínima 10%; la cátedra usa 20%.` },
        { t: "t6", s: "t6.2", q: String.raw`Compra de muebles $ 8.000 + IVA en efectivo: asiento.`, a: String.raw`Muebles y útiles 8.000 e IVA compras 1.600 a Caja 9.600.` },
        { t: "t6", s: "t6.2", q: String.raw`Factura de luz $ 1.200 IVA incluido pagada en efectivo: asiento.`, a: String.raw`Gastos generales 1.000 e IVA compras 200 a Caja 1.200, s/ Boleta.` },
        { t: "t6", s: "t6.2", q: String.raw`¿El BPS o los sueldos llevan IVA?`, a: String.raw`No.` },
        { t: "t6", s: "t6.2", q: String.raw`¿Se discrimina el IVA al comprar un bien de uso?`, a: String.raw`Sí: el bien al neto y el IVA a IVA compras.` },
        { t: "t6", s: "t6.2", q: String.raw`Gastos bancarios por NDB de $ 300 sin aclaración: ¿con IVA?`, a: String.raw`En los ejercicios se registran por el total, salvo que digan "+ IVA".` },
        { t: "t6", s: "t6.2", q: String.raw`¿La comisión de la tarjeta lleva IVA?`, a: String.raw`Sí: Comisiones perdidas e IVA compras en el asiento de la liquidación.` },
        { t: "t6", s: "t6.3", q: String.raw`ND emitida por intereses $ 800 + IVA: asiento.`, a: String.raw`Deudores por ventas 960 a Intereses ganados 800 e IVA ventas 160.` },
        { t: "t6", s: "t6.3", q: String.raw`NC recibida por descuento $ 300 + IVA: asiento.`, a: String.raw`Acreedores por compras 360 a Descuentos obtenidos 300 e IVA compras 60.` },
        { t: "t6", s: "t6.3", q: String.raw`NC emitida por descuento $ 500 + IVA: asiento.`, a: String.raw`Descuentos concedidos 500 e IVA ventas 100 a Deudores por ventas 600.` },
        { t: "t6", s: "t6.3", q: String.raw`Deuda 10.000, intereses 800 + IVA: importe del conforme.`, a: String.raw`10.960.` },
        { t: "t6", s: "t6.3", q: String.raw`En una devolución de compra, ¿IVA compras va al Debe o al Haber?`, a: String.raw`Al Haber: se reduce el crédito fiscal.` },
        { t: "t6", s: "t6.3", q: String.raw`Deuda de $ 4.000, descuento del 10% por pronto pago con IVA (criterio dic. 2025): ¿cuánto paga el cliente?`, a: String.raw`Descuento 400 + IVA 80 = 480; paga 3.520.` },
        { t: "t6", s: "t6.4", q: String.raw`Fórmula del IVA a pagar del mes.`, a: String.raw`IVA ventas (neto de NC emitidas) − IVA compras (neto de NC recibidas).` },
        { t: "t6", s: "t6.4", q: String.raw`¿Qué pasa si el IVA compras supera al IVA ventas?`, a: String.raw`No se paga: queda un saldo a favor (crédito fiscal).` },
        { t: "t6", s: "t6.4", q: String.raw`¿Los recibos de cobro y pago entran en la liquidación del IVA?`, a: String.raw`No: el IVA ya se registró en la factura.` },
        { t: "t6", s: "t6.4", q: String.raw`Compras 10.000 + IVA y 5.000 + IVA, NC recibida 1.000 + IVA. Saldo de IVA compras.`, a: String.raw`2.000 + 1.000 − 200 = 2.800.` },
        { t: "t6", s: "t6.4", q: String.raw`¿La ND recibida por intereses suma a IVA compras o a IVA ventas?`, a: String.raw`A IVA compras.` },
        { t: "t6", s: "t6.4", q: String.raw`IVA ventas 5.600 e IVA compras 4.320. Resultado.`, a: String.raw`IVA a pagar 1.280.` },
        { t: "t7", s: "t7.1", q: String.raw`El cliente documenta su deuda con un conforme: asiento y comprobante.`, a: String.raw`Conformes a cobrar a Deudores por ventas, s/ Recibo de conforme.` },
        { t: "t7", s: "t7.1", q: String.raw`Deuda 20.000 documentada con intereses 1.500 + IVA: importe del conforme.`, a: String.raw`21.800.` },
        { t: "t7", s: "t7.1", q: String.raw`Se cobra en efectivo un conforme a cobrar al vencimiento: asiento.`, a: String.raw`Caja a Conformes a cobrar.` },
        { t: "t7", s: "t7.1", q: String.raw`Se paga un conforme a pagar con cheque común propio: asiento.`, a: String.raw`Conformes a pagar a Banco c/c.` },
        { t: "t7", s: "t7.1", q: String.raw`¿Documentar una deuda con conforme es P o M?`, a: String.raw`Permutativo (sin intereses). Los intereses van con ND aparte y ese asiento sí es modificativo.` },
        { t: "t7", s: "t7.1", q: String.raw`Al cobrar el conforme, ¿se acredita Deudores por ventas?`, a: String.raw`No: Deudores ya se canceló al firmar el conforme. Se acredita Conformes a cobrar.` },
        { t: "t7", s: "t7.1", q: String.raw`Nuestra deuda de 8.000 se documenta con intereses 400 + IVA: ¿Conformes a pagar?`, a: String.raw`8.480 (ND recibida: Intereses perdidos 400 e IVA compras 80 a Acreedores 480).` },
        { t: "t7", s: "t7.2", q: String.raw`Recibimos un cheque común de un tercero: ¿cuenta?`, a: String.raw`Caja.` },
        { t: "t7", s: "t7.2", q: String.raw`Depositamos cheques de terceros en el banco: asiento y comprobante.`, a: String.raw`Banco c/c a Caja, s/ Boleta de depósito.` },
        { t: "t7", s: "t7.2", q: String.raw`Endosamos a un proveedor un cheque común de un tercero: asiento.`, a: String.raw`Acreedores por compras a Caja.` },
        { t: "t7", s: "t7.2", q: String.raw`Pagamos a un proveedor con cheque común propio: asiento.`, a: String.raw`Acreedores por compras a Banco c/c, s/ Recibo.` },
        { t: "t7", s: "t7.2", q: String.raw`¿Un pago con cheque propio afecta Caja?`, a: String.raw`No: afecta Banco c/c.` },
        { t: "t7", s: "t7.2", q: String.raw`Error más elegido con cheques de terceros al día.`, a: String.raw`Debitarlos a Banco c/c: van a Caja hasta el depósito.` },
        { t: "t7", s: "t7.3", q: String.raw`Recibimos un cheque diferido de un cliente: asiento y comprobante.`, a: String.raw`Cheques diferidos a cobrar a Deudores por ventas, s/ Recibo de cheque diferido.` },
        { t: "t7", s: "t7.3", q: String.raw`Vence un cheque diferido de un cliente: asiento y comprobante.`, a: String.raw`Caja a Cheques diferidos a cobrar, s/ CI.` },
        { t: "t7", s: "t7.3", q: String.raw`Vence un cheque diferido propio entregado a un proveedor: asiento.`, a: String.raw`Cheques diferidos a pagar a Banco c/c, s/ CI.` },
        { t: "t7", s: "t7.3", q: String.raw`¿Cuándo baja Acreedores al pagar con cheque diferido propio?`, a: String.raw`Al entregar el cheque (recibo de cheque diferido), no al vencimiento.` },
        { t: "t7", s: "t7.3", q: String.raw`Cheques propios de 5.000 (vence 10/6), 4.000 (30/6) y 6.000 (15/7). Saldo al 30/6.`, a: String.raw`6.000.` },
        { t: "t7", s: "t7.3", q: String.raw`Recibimos un cheque diferido cuya fecha ya pasó: ¿cuenta?`, a: String.raw`Caja: se trata como al día.` },
        { t: "t7", s: "t7.3", q: String.raw`Compra contado pagada con un cheque diferido propio: asiento.`, a: String.raw`Mercaderías e IVA compras a Cheques diferidos a pagar, s/ Boleta.` },
        { t: "t7", s: "t7.4", q: String.raw`¿Qué comprobantes lleva un cobro con descuento por pronto pago?`, a: String.raw`NC por el descuento y recibo por lo cobrado.` },
        { t: "t7", s: "t7.4", q: String.raw`Deuda 6.000, descuento 300 + IVA, paga el resto en efectivo: asiento del recibo.`, a: String.raw`Caja 5.640 a Deudores por ventas 5.640.` },
        { t: "t7", s: "t7.4", q: String.raw`Descuento obtenido de un proveedor por 400 + IVA: asiento de la NC recibida.`, a: String.raw`Acreedores por compras 480 a Descuentos obtenidos 400 e IVA compras 80.` },
        { t: "t7", s: "t7.4", q: String.raw`Deuda con proveedor 12.000, NC por descuento 400 + IVA, resto por transferencia: ¿importe?`, a: String.raw`11.520.` },
        { t: "t7", s: "t7.4", q: String.raw`Cliente paga 9.000: 2.000 efectivo, 3.000 cheque común, 4.000 cheque diferido. Asientos.`, a: String.raw`Recibo: Caja 5.000 a Deudores 5.000. Recibo de cheque diferido: Cheques diferidos a cobrar 4.000 a Deudores 4.000.` },
        { t: "t7", s: "t7.4", q: String.raw`¿En el recibo se registra el descuento concedido?`, a: String.raw`No, según la clave de diciembre 2025: el descuento va en la NC; el recibo solo registra lo cobrado.` },
        { t: "t7", s: "t7.5", q: String.raw`Préstamo contra vale con intereses descontados: asiento.`, a: String.raw`Banco c/c (líquido) e Intereses perdidos a Vales bancarios a pagar (nominal), s/ NCB.` },
        { t: "t7", s: "t7.5", q: String.raw`Vale 40.000, intereses 3.600 descontados: ¿cuánto acredita el banco?`, a: String.raw`36.400.` },
        { t: "t7", s: "t7.5", q: String.raw`¿Por qué importe se acredita Vales bancarios a pagar?`, a: String.raw`Por el nominal del vale (lo que hay que devolver).` },
        { t: "t7", s: "t7.5", q: String.raw`Al vencimiento el banco debita el vale: asiento y comprobante.`, a: String.raw`Vales bancarios a pagar a Banco c/c, s/ NDB.` },
        { t: "t7", s: "t7.5", q: String.raw`Pago de una cuota de préstamo: 5.000 de capital y 600 de intereses. Asiento.`, a: String.raw`Préstamos bancarios 5.000 e Intereses perdidos 600 a Banco c/c 5.600.` },
        { t: "t7", s: "t7.5", q: String.raw`¿El préstamo con intereses descontados es P o M?`, a: String.raw`Modificativo disminutivo, por los intereses perdidos.` },
        { t: "t7", s: "t7.6", q: String.raw`Venta con tarjeta de débito $ 6.000 + IVA: asiento.`, a: String.raw`Deudores tarjeta de débito 7.200 a Ventas 6.000 e IVA ventas 1.200, s/ Boleta.` },
        { t: "t7", s: "t7.6", q: String.raw`¿Sobre qué base se calcula la comisión de la tarjeta?`, a: String.raw`Sobre el importe liquidado, IVA incluido (el saldo de Deudores tarjeta). Se le suma IVA.` },
        { t: "t7", s: "t7.6", q: String.raw`¿Sobre qué base se calcula el crédito fiscal por tarjeta de débito?`, a: String.raw`Sobre el neto (sin IVA) de las ventas con débito a consumidores finales: puntos × neto.` },
        { t: "t7", s: "t7.6", q: String.raw`¿Las ventas con tarjeta de crédito generan crédito fiscal en los ejercicios?`, a: String.raw`No: el beneficio se aplica solo a las ventas con tarjeta de débito.` },
        { t: "t7", s: "t7.6", q: String.raw`Liquidación débito, saldo 12.000, comisión 4% + IVA, 2 puntos. Banco.`, a: String.raw`12.000 − 480 − 96 − 200 = 11.224.` },
        { t: "t7", s: "t7.6", q: String.raw`¿El beneficio fiscal aplica a todos los clientes que pagan con débito?`, a: String.raw`No: solo a consumidores finales.` },
        { t: "t7", s: "t7.6", q: String.raw`Asiento tipo de la liquidación de una tarjeta de débito.`, a: String.raw`Banco c/c, Comisiones perdidas, IVA compras y Crédito fiscal a Deudores tarjeta de débito.` },
        { t: "t8", s: "t8.1", q: String.raw`Nominal 18.000, obrero 20%, adelanto 2.000. Líquido.`, a: String.raw`18.000 − 3.600 − 2.000 = 12.400.` },
        { t: "t8", s: "t8.1", q: String.raw`¿El aporte patronal se descuenta del sueldo del empleado?`, a: String.raw`No: lo paga la empresa por encima del nominal.` },
        { t: "t8", s: "t8.1", q: String.raw`¿Qué tipo de cuenta es Adelantos al personal y cuándo se cancela?`, a: String.raw`Activo; se cancela en el asiento de liquidación (se acredita dentro del asiento de Sueldos).` },
        { t: "t8", s: "t8.1", q: String.raw`¿Qué cuenta refleja el líquido antes de pagarlo?`, a: String.raw`Sueldos a pagar (pasivo).` },
        { t: "t8", s: "t8.1", q: String.raw`¿Cuál es la pérdida "Sueldos": el nominal o el líquido?`, a: String.raw`El nominal completo.` },
        { t: "t8", s: "t8.1", q: String.raw`¿El adelanto de sueldo es P o M?`, a: String.raw`Permutativo: Adelantos al personal a Banco c/c.` },
        { t: "t8", s: "t8.2", q: String.raw`¿Sobre qué base se calcula el aporte sobre ficto patronal?`, a: String.raw`Sobre el sueldo ficto patronal (no sobre el nominal del empleado).` },
        { t: "t8", s: "t8.2", q: String.raw`¿Qué es el sueldo ficto patronal?`, a: String.raw`Un sueldo fijado por la ley sobre el que aportan al BPS los dueños o socios que trabajan en la empresa.` },
        { t: "t8", s: "t8.2", q: String.raw`¿A qué cuenta va el seguro de accidentes?`, a: String.raw`Leyes sociales a BSE (no al BPS).` },
        { t: "t8", s: "t8.2", q: String.raw`Nominal 12.000, ficto 30.000, patronal 10%, BSE 1%, ficto 25%. Leyes sociales.`, a: String.raw`1.200 + 120 + 7.500 = 8.820.` },
        { t: "t8", s: "t8.2", q: String.raw`¿El aporte obrero forma parte de Leyes sociales?`, a: String.raw`No: se descuenta del nominal dentro del asiento de Sueldos.` },
        { t: "t8", s: "t8.2", q: String.raw`¿Qué cuentas se acreditan en el asiento de Leyes sociales?`, a: String.raw`BPS (patronal y ficto) y BSE.` },
        { t: "t8", s: "t8.3", q: String.raw`Asiento de la liquidación del nominal.`, a: String.raw`Sueldos a Adelantos al personal, BPS (obrero) y Sueldos a pagar (líquido), s/ PLS.` },
        { t: "t8", s: "t8.3", q: String.raw`Nominal 15.000, adelanto 2.000, obrero 20%. Asiento de Sueldos.`, a: String.raw`Sueldos 15.000 a Adelantos 2.000, BPS 3.000 y Sueldos a pagar 10.000.` },
        { t: "t8", s: "t8.3", q: String.raw`Nominal 15.000, patronal 10%, BSE 1%. Asiento de cargas.`, a: String.raw`Leyes sociales 1.650 a BPS 1.500 y BSE 150.` },
        { t: "t8", s: "t8.3", q: String.raw`Pago del líquido por transferencia: asiento y comprobante.`, a: String.raw`Sueldos a pagar a Banco c/c, s/ Recibo.` },
        { t: "t8", s: "t8.3", q: String.raw`Pago al BPS de los aportes del mes anterior: asiento.`, a: String.raw`BPS a Banco c/c. Permutativo.` },
        { t: "t8", s: "t8.3", q: String.raw`Control del asiento de Sueldos.`, a: String.raw`Nominal = adelantos + aporte obrero + líquido.` },
        { t: "t8", s: "t8.4", q: String.raw`Fórmula del saldo de BPS luego de liquidar.`, a: String.raw`Saldo anterior impago + obrero + patronal + ficto − pagos al BPS del período.` },
        { t: "t8", s: "t8.4", q: String.raw`N 11.500, F 23.000, 20/10/25/1, adelanto 1.500. Saldo BPS.`, a: String.raw`2.300 + 1.150 + 5.750 = 9.200.` },
        { t: "t8", s: "t8.4", q: String.raw`N 15.000, F 20.000, 20/10/25, se adeuda BPS del mes anterior 6.000. Saldo BPS.`, a: String.raw`9.500 + 6.000 = 15.500.` },
        { t: "t8", s: "t8.4", q: String.raw`¿El adelanto de sueldo cambia el saldo de BPS?`, a: String.raw`No: solo baja lo que se le paga al empleado (Sueldos a pagar).` },
        { t: "t8", s: "t8.4", q: String.raw`"La empresa está al día con los aportes de marzo." ¿Qué implica para abril?`, a: String.raw`Que no hay saldo anterior de BPS: el saldo es solo lo liquidado en abril.` },
        { t: "t8", s: "t8.4", q: String.raw`¿Se suma el BSE al saldo de BPS?`, a: String.raw`No: tiene su propia cuenta.` },
        { t: "t8", s: "t8.5", q: String.raw`¿Qué compone el saldo de Leyes sociales?`, a: String.raw`Saldo inicial + aporte patronal + BSE + aporte sobre ficto.` },
        { t: "t8", s: "t8.5", q: String.raw`Leyes sociales con saldo inicial 3.000, N 10.000, F 20.000, 10%/1%/25%. Saldo.`, a: String.raw`3.000 + 1.000 + 100 + 5.000 = 9.100 deudor.` },
        { t: "t8", s: "t8.5", q: String.raw`¿Cómo se calcula la pérdida total por sueldos?`, a: String.raw`Nominal + Leyes sociales (patronal + BSE + ficto). El obrero no suma aparte.` },
        { t: "t8", s: "t8.5", q: String.raw`N 50.000, F 30.000, 20/10/25/1, líquido pagado: obligaciones.`, a: String.raw`BPS 22.500 + BSE 500 = 23.000.` },
        { t: "t8", s: "t8.5", q: String.raw`¿Por qué Leyes sociales arrastra el saldo inicial?`, a: String.raw`Porque es una cuenta de resultado (acumulativa): suma todo lo del ejercicio.` },
        { t: "t8", s: "t8.5", q: String.raw`N 20.000, patronal 10%, BSE 1%, ficto 22.000 al 25%. Costo total.`, a: String.raw`20.000 + 2.000 + 200 + 5.500 = 27.700.` },
    ],
    questions: [
        { t: "t1", s: "t1.1", q: String.raw`Considerando las siguientes afirmaciones: i) Los elementos de una organización son un número de participantes, objetivos básicos, metas específicas, un ejercicio de actividad y recursos. ii) Los informes de gestión son los informes contables que se presentan a los usuarios externos.`, opts: [String.raw`Sólo la primera es correcta`, String.raw`Ambas son correctas`, String.raw`Sólo la segunda es correcta`], ans: 0, exp: String.raw`La i) es la definición de la unidad 1. La ii) es falsa: a los usuarios externos se les presentan los estados financieros; los informes de gestión son para usuarios internos.` },
        { t: "t1", s: "t1.1", q: String.raw`Considerando las siguientes afirmaciones: i) El Directorio requiere un alto grado de detalle de la información contable. ii) La contabilidad es un sistema de información que sirve para tomar decisiones.`, opts: [String.raw`Sólo la primera es correcta`, String.raw`Sólo la segunda es correcta`, String.raw`Ambas son correctas`], ans: 1, exp: String.raw`El nivel alto necesita información sintética; el detalle lo necesitan los niveles operativos. La ii) es correcta.` },
        { t: "t1", s: "t1.1", q: String.raw`¿Cuál de estos es un informe de gestión?`, opts: [String.raw`El estado de situación financiera`, String.raw`Las notas a los estados financieros`, String.raw`El detalle de cuentas por cobrar por cliente`], ans: 2, exp: String.raw`El detalle de cuentas por cobrar es un informe interno a medida. El estado de situación y las notas forman parte de los estados financieros para usuarios externos.` },
        { t: "t1", s: "t1.1", q: String.raw`El dueño de la empresa paga con su dinero personal las vacaciones de su familia. En la contabilidad de la empresa:`, opts: [String.raw`Se registra como gasto de la empresa`, String.raw`No se registra, por el principio del ente`, String.raw`Se registra como aumento del capital`], ans: 1, exp: String.raw`La empresa es un ente separado de su dueño. Un gasto personal pagado con plata personal no toca los recursos ni las fuentes de la empresa.` },
        { t: "t1", s: "t1.2", q: String.raw`Considerando las siguientes afirmaciones: i) Los estados financieros se integran exclusivamente por Estado de situación financiera, Estado de resultados, Estado de cambios en el patrimonio y Estado de flujos de efectivo. ii) Los supuestos fundamentales para preparar los estados financieros son lo devengado y empresa en marcha.`, opts: [String.raw`Ambas son correctas`, String.raw`Sólo la primera es correcta`, String.raw`Sólo la segunda es correcta`], ans: 2, exp: String.raw`A la i) le faltan las notas, que integran los estados financieros ("exclusivamente" la vuelve falsa). La ii) es correcta.` },
        { t: "t1", s: "t1.2", q: String.raw`Según la NIIF para PYMES, el objetivo de los estados financieros es informar sobre:`, opts: [String.raw`La situación financiera, el rendimiento y los flujos de efectivo de la entidad`, String.raw`Solamente el impuesto a pagar a la DGI`, String.raw`Solamente el resultado del ejercicio para los dueños`], ans: 0, exp: String.raw`Es el párrafo 2.2: situación financiera, rendimiento y flujos de efectivo, para un amplio espectro de usuarios. Las otras opciones recortan el objetivo a un solo usuario o dato.` },
        { t: "t1", s: "t1.2", q: String.raw`Un banco recibe el estado de situación de una empresa seis meses después de haber otorgado el préstamo. La cualidad que falló es:`, opts: [String.raw`Comparabilidad`, String.raw`Comprensibilidad`, String.raw`Oportunidad`], ans: 2, exp: String.raw`La información llegó tarde para la decisión: falta de oportunidad. No hay problema de comparar ejercicios ni de entender el informe.` },
        { t: "t1", s: "t1.2", q: String.raw`Una empresa arma sus estados eligiendo los criterios que muestran más ganancia para conseguir un préstamo. Se viola:`, opts: [String.raw`La neutralidad (fiabilidad)`, String.raw`La oportunidad`, String.raw`El supuesto de empresa en marcha`], ans: 0, exp: String.raw`La información debe estar libre de sesgo. Buscar un resultado predeterminado afecta la neutralidad, que es parte de la fiabilidad.` },
        { t: "t1", s: "t1.2", q: String.raw`El principio de lo devengado indica que una venta a crédito se reconoce:`, opts: [String.raw`Cuando el cliente paga`, String.raw`Cuando se realiza la venta`, String.raw`Al cierre del ejercicio, si se cobró`], ans: 1, exp: String.raw`Lo devengado reconoce el hecho cuando ocurre, sin importar el cobro. Por eso la venta a crédito se registra con la factura.` },
        { t: "t1", s: "t1.3", q: String.raw`Considerando las siguientes afirmaciones: i) El total de recursos de una empresa debe ser igual al total de sus fuentes ajenas. ii) El patrimonio neto es el derecho del propietario por el exceso de los recursos sobre las obligaciones.`, opts: [String.raw`Sólo la segunda es correcta`, String.raw`Sólo la primera es correcta`, String.raw`Ambas son correctas`], ans: 0, exp: String.raw`Los recursos son iguales a ajenas más propias, no solo a las ajenas. La ii) es la definición de la cátedra (julio 2025).` },
        { t: "t1", s: "t1.3", q: String.raw`Una empresa tiene Caja 4.000, Deudores por ventas 6.000, Mercaderías 9.000, Acreedores por compras 7.000, Conformes a pagar 3.000 y BPS 2.000. Su patrimonio neto es:`, opts: [String.raw`19.000`, String.raw`7.000`, String.raw`12.000`], ans: 1, exp: String.raw`Recursos 19.000 − obligaciones 12.000 = 7.000. 19.000 es el total de recursos y 12.000 el de obligaciones.` },
        { t: "t1", s: "t1.3", q: String.raw`Una empresa tiene recursos por 40.000 y fuentes propias por 25.000. Sus fuentes ajenas son:`, opts: [String.raw`65.000`, String.raw`25.000`, String.raw`15.000`], ans: 2, exp: String.raw`Ajenas = recursos − propias = 40.000 − 25.000 = 15.000. 65.000 suma en vez de restar.` },
        { t: "t1", s: "t1.3", q: String.raw`¿Cuál de estas cuentas es una fuente ajena?`, opts: [String.raw`Adelantos al personal`, String.raw`Sueldos a pagar`, String.raw`Capital`], ans: 1, exp: String.raw`Sueldos a pagar es una deuda con el personal. Adelantos al personal es un recurso (el empleado le debe a la empresa) y Capital es fuente propia.` },
        { t: "t1", s: "t1.3", q: String.raw`Se vende mercadería que costó 600 en 1.000 (sin IVA), en efectivo. ¿Qué pasa con el patrimonio?`, opts: [String.raw`Aumenta 1.000`, String.raw`No cambia, es permutativo`, String.raw`Aumenta 400`], ans: 2, exp: String.raw`Entra 1.000 a Caja y salen 600 de Mercaderías: los recursos suben 400 sin deuda nueva, así que las fuentes propias suben 400.` },
        { t: "t1", s: "t1.4", q: String.raw`Juan aporta $ 500 en efectivo y una computadora de $ 300. Pedro aporta una camioneta de $ 2.500: pagó $ 900 y el resto con un préstamo bancario sin intereses a nombre de la empresa. María aporta $ 200 en efectivo y mercaderías por $ 1.000 compradas a crédito simple a nombre de la empresa. Además firman un contrato de alquiler por $ 120 mensuales. El total de recursos financieros aportados por los socios es:`, opts: [String.raw`4.500`, String.raw`4.620`, String.raw`1.900`], ans: 0, exp: String.raw`Recursos: 800 + 2.500 + 1.200 = 4.500 (la clave oficial para "recursos financieros aportados" es el total de recursos). 4.620 suma el alquiler (acto administrativo). 1.900 son solo las fuentes propias.` },
        { t: "t1", s: "t1.4", q: String.raw`Ana aporta $ 500 en efectivo y muebles por $ 700. Bruno aporta un auto de $ 2.500: pagó $ 1.000 de su dinero y el resto con un préstamo a nombre de la empresa. Carla aporta $ 250 en efectivo y mercaderías por $ 1.200 compradas a crédito simple a nombre de la empresa, y será garante del alquiler del local. Las fuentes propias son:`, opts: [String.raw`3.650`, String.raw`5.150`, String.raw`2.450`], ans: 2, exp: String.raw`Propias: 1.200 + 1.000 + 250 = 2.450. 3.650 resta solo el préstamo y se olvida de las mercaderías a crédito. 5.150 es el total de recursos. La garantía no cuenta.` },
        { t: "t1", s: "t1.4", q: String.raw`Diego aporta $ 1.000 en efectivo que obtuvo con un préstamo a su nombre, que pagará él. Elena aporta un vehículo de $ 4.000 pagado en $ 2.500 con un préstamo bancario a nombre de la empresa. Fede aporta mercaderías por $ 900 compradas a crédito simple a nombre de la empresa y se pacta que cobrará un sueldo de $ 300 mensuales. Las fuentes ajenas son:`, opts: [String.raw`3.400`, String.raw`4.400`, String.raw`3.700`], ans: 0, exp: String.raw`Ajenas: préstamo de la empresa 2.500 + Acreedores 900 = 3.400. 4.400 suma el préstamo de Diego, que es deuda de él. 3.700 suma el sueldo pactado, que es un acto administrativo.` },
        { t: "t1", s: "t1.4", q: String.raw`Al inicio de actividades un socio aporta $ 600 en efectivo, un cheque común de un tercero por $ 200, un cheque diferido de un tercero por $ 300 que venció dos días antes, y otro cheque diferido por $ 400 que vence en 30 días. El saldo inicial de Caja es:`, opts: [String.raw`800`, String.raw`1.100`, String.raw`1.500`], ans: 1, exp: String.raw`Caja: 600 + 200 + 300 (el diferido ya vencido se trata como al día) = 1.100. El de 400 va a Cheques diferidos a cobrar. 800 olvida el vencido; 1.500 incluye el que no venció.` },
        { t: "t1", s: "t1.4", q: String.raw`En un ejercicio de aportes de socios, ¿cuál de estos hechos NO modifica ningún total?`, opts: [String.raw`La firma de un contrato de alquiler a nombre de la empresa`, String.raw`Mercaderías compradas a crédito a nombre de la empresa`, String.raw`Un préstamo bancario a nombre de la empresa para pagar un vehículo`], ans: 0, exp: String.raw`El alquiler es un acto administrativo. Las mercaderías a crédito y el préstamo de la empresa suman recursos y fuentes ajenas.` },
        { t: "t1", s: "t1.5", q: String.raw`El dueño aporta: $ 2.500 en efectivo; cheques de terceros por $ 900 ($ 400 al día y $ 500 diferidos); un conforme a cobrar de $ 600; un conforme a pagar de $ 1.500; y mercaderías por $ 1.200 adquiridas a crédito simple a nombre de la empresa. El Capital es:`, opts: [String.raw`3.700`, String.raw`2.500`, String.raw`5.200`], ans: 1, exp: String.raw`Activos 5.200 − pasivos (1.500 + 1.200) = 2.500. 3.700 olvida a Acreedores por compras por las mercaderías; 5.200 es el total de activos.` },
        { t: "t1", s: "t1.5", q: String.raw`El dueño aporta $ 1.500 en efectivo, cheques comunes de terceros por $ 600, un conforme a cobrar de $ 500, un vale a pagar al banco por $ 1.800 y mercaderías por $ 2.000 que pagó con su dinero. El Capital es:`, opts: [String.raw`800`, String.raw`4.600`, String.raw`2.800`], ans: 2, exp: String.raw`Activos: 1.500 + 600 + 500 + 2.000 = 4.600. Pasivo: vale 1.800. Capital 2.800. 800 trata las mercaderías como deuda; 4.600 ignora el vale.` },
        { t: "t1", s: "t1.5", q: String.raw`El dueño aporta $ 2.000 en efectivo, un cheque de un tercero al día por $ 200 y otro diferido por $ 300. En el asiento de apertura, Caja se debita por:`, opts: [String.raw`2.500`, String.raw`2.200`, String.raw`2.000`], ans: 1, exp: String.raw`Efectivo y cheque al día van a Caja (2.200). El diferido va a Cheques diferidos a cobrar.` },
        { t: "t1", s: "t1.5", q: String.raw`En el asiento de apertura, la cuenta Capital:`, opts: [String.raw`Se acredita por el total de activos`, String.raw`Se debita por la diferencia entre activos y pasivos`, String.raw`Se acredita por la diferencia entre activos y pasivos`], ans: 2, exp: String.raw`Capital es patrimonio: aumenta por el Haber, y su importe es lo que sobra de los activos una vez cubiertos los pasivos.` },
        { t: "t1", s: "t1.5", q: String.raw`Un socio aporta, entre otras cosas, un conforme a pagar de $ 1.000 firmado por la empresa. Respecto del capital:`, opts: [String.raw`Lo disminuye en 1.000`, String.raw`Lo aumenta en 1.000`, String.raw`No lo afecta porque no es un bien`], ans: 0, exp: String.raw`Es una deuda que asume la empresa (fuente ajena): baja el capital por el mismo importe.` },
        { t: "t2", s: "t2.1", q: String.raw`¿Cuál de los siguientes es un acto administrativo?`, opts: [String.raw`Se paga el sueldo del mes al empleado`, String.raw`Se le da un adelanto de sueldo al empleado`, String.raw`Se contrata a un empleado que empieza a trabajar el mes próximo`], ans: 2, exp: String.raw`Contratar no mueve recursos ni obligaciones. El pago del sueldo y el adelanto sí son hechos económicos permutativos.` },
        { t: "t2", s: "t2.1", q: String.raw`El 10/05 la empresa pide un préstamo al banco; el 20/05 el banco lo aprueba y acredita el importe en la cuenta corriente. ¿Qué se registra?`, opts: [String.raw`Solo la acreditación del 20/05`, String.raw`Solo la solicitud del 10/05`, String.raw`Ambos hechos`], ans: 0, exp: String.raw`La solicitud es un acto administrativo. Lo que cambia los recursos y las deudas es la acreditación, respaldada por la NCB.` },
        { t: "t2", s: "t2.1", q: String.raw`Un hecho económico se caracteriza por:`, opts: [String.raw`Estar documentado en un contrato firmado`, String.raw`Modificar los recursos, las obligaciones o el patrimonio del ente`, String.raw`Implicar siempre un movimiento de efectivo`], ans: 1, exp: String.raw`Un contrato puede ser un acto administrativo. Y hay hechos económicos sin efectivo (compra a crédito, documentar una deuda).` },
        { t: "t2", s: "t2.1", q: String.raw`La empresa emite una orden de compra por mercaderías que el proveedor entregará la semana próxima. Esto:`, opts: [String.raw`No se registra, es un acto administrativo`, String.raw`Es una variación permutativa`, String.raw`Es una variación modificativa disminutiva`], ans: 0, exp: String.raw`Hasta que llegue la mercadería con su factura o boleta no hay recurso ni deuda nueva.` },
        { t: "t2", s: "t2.2", q: String.raw`¿Cuál de estos hechos es permutativo?`, opts: [String.raw`Se pagan gastos generales en efectivo`, String.raw`Se compran mercaderías a crédito por $ 5.000 + IVA`, String.raw`El banco debita gastos de mantenimiento de cuenta`], ans: 1, exp: String.raw`Mercaderías e IVA compras son activos y Acreedores es pasivo: no hay resultado. Los gastos generales y los bancarios son pérdidas.` },
        { t: "t2", s: "t2.2", q: String.raw`Entregar a un proveedor un cheque diferido propio para cancelar una deuda es una variación:`, opts: [String.raw`Permutativa (un activo por un pasivo)`, String.raw`Modificativa disminutiva`, String.raw`Permutativa (un pasivo por otro)`], ans: 2, exp: String.raw`Acreedores por compras a Cheques diferidos a pagar: baja un pasivo y sube otro. El Banco no se toca hasta el vencimiento.` },
        { t: "t2", s: "t2.2", q: String.raw`El pago del sueldo líquido ya liquidado (Sueldos a pagar a Banco c/c) es:`, opts: [String.raw`Modificativo disminutivo`, String.raw`Permutativo`, String.raw`Un acto administrativo`], ans: 1, exp: String.raw`La pérdida se registró al liquidar (Sueldos). El pago solo cancela la deuda con el empleado usando el Banco.` },
        { t: "t2", s: "t2.2", q: String.raw`Depositar en el banco el efectivo de la caja es una variación:`, opts: [String.raw`Permutativa, un activo y un pasivo aumentan`, String.raw`Modificativa aumentativa`, String.raw`Permutativa, un activo por otro`], ans: 2, exp: String.raw`Banco c/c a Caja: sube un activo y baja otro por el mismo importe.` },
        { t: "t2", s: "t2.3", q: String.raw`El asiento Acreedores por compras 10.000 a Descuentos obtenidos 1.000 y Banco c/c 9.000 es:`, opts: [String.raw`Modificativo aumentativo`, String.raw`Modificativo disminutivo`, String.raw`Permutativo`], ans: 0, exp: String.raw`Aparece Descuentos obtenidos, una ganancia: el patrimonio aumenta en 1.000.` },
        { t: "t2", s: "t2.3", q: String.raw`La NC emitida por devolución de una venta (Ventas e IVA ventas a Deudores por ventas) es:`, opts: [String.raw`Modificativa aumentativa`, String.raw`Permutativa`, String.raw`Modificativa disminutiva`], ans: 2, exp: String.raw`Se revierte una ganancia (Ventas al Debe): el patrimonio baja.` },
        { t: "t2", s: "t2.3", q: String.raw`El comprobante interno Mercaderías a Costo de ventas, por una devolución de venta, es:`, opts: [String.raw`Modificativo aumentativo`, String.raw`Modificativo disminutivo`, String.raw`Permutativo`], ans: 0, exp: String.raw`Vuelve un activo (Mercaderías) y se reduce una pérdida (Costo de ventas al Haber): el patrimonio sube.` },
        { t: "t2", s: "t2.3", q: String.raw`Se vende en $ 100 (exento de IVA) mercadería que tuvo un costo de $ 180. Considerando venta y costo juntos:`, opts: [String.raw`Es un hecho permutativo`, String.raw`Es un hecho modificativo que disminuye el patrimonio`, String.raw`Es un hecho modificativo que aumenta el patrimonio`], ans: 1, exp: String.raw`Ventas 100 es menor que Costo de ventas 180: el patrimonio baja 80 en cantidad. Criterio de la solución de julio 2025.` },
        { t: "t2", s: "t2.3", q: String.raw`El asiento Leyes sociales a BPS y BSE es:`, opts: [String.raw`Modificativo disminutivo`, String.raw`Permutativo`, String.raw`Modificativo aumentativo`], ans: 0, exp: String.raw`Leyes sociales es una pérdida a cargo de la empresa: baja el patrimonio.` },
        { t: "t2", s: "t2.4", q: String.raw`Clasifique en P o M: 1) Banco c/c 9.000 e Intereses perdidos 1.000 a Vales bancarios a pagar 10.000. 2) Mercaderías 3.000 e IVA compras 600 a Acreedores por compras 3.600. 3) Cheques diferidos a pagar 5.000 a Banco c/c 5.000. 4) Deudores tarjeta de débito 12.000 a Ventas 10.000 e IVA ventas 2.000.`, opts: [String.raw`P, P, P, M`, String.raw`M, P, P, M`, String.raw`M, P, M, M`], ans: 1, exp: String.raw`1) M por Intereses perdidos. 2) P, solo activos y pasivos. 3) P, vence un cheque propio. 4) M por Ventas.` },
        { t: "t2", s: "t2.4", q: String.raw`Clasifique en P o M: 1) Caja 2.400 a Deudores por ventas 2.400. 2) Sueldos 10.000 a BPS 2.000 y Sueldos a pagar 8.000. 3) Acreedores por compras 1.200 a Mercaderías 1.000 e IVA compras 200. 4) Deudores por ventas 1.200 a Intereses ganados 1.000 e IVA ventas 200.`, opts: [String.raw`P, M, M, M`, String.raw`M, M, P, P`, String.raw`P, M, P, M`], ans: 2, exp: String.raw`El cobro y la devolución de compra solo mueven activos y pasivos. Sueldos e Intereses ganados son resultados.` },
        { t: "t2", s: "t2.4", q: String.raw`Clasifique en P o M: 1) Banco c/c 5.000 a Caja 5.000. 2) Conformes a cobrar 8.000 a Deudores por ventas 8.000. 3) Ventas 4.000 e IVA ventas 800 a Caja 4.800. 4) Mercaderías 1.500 a Costo de ventas 1.500.`, opts: [String.raw`P, P, M, P`, String.raw`P, P, M, M`, String.raw`P, M, M, P`], ans: 1, exp: String.raw`Depósito y documentación son permutativos. 3) devolución con boleta de devolución contado: M (baja Ventas). 4) reversión del costo: M (aparece Costo de ventas).` },
        { t: "t2", s: "t2.4", q: String.raw`Clasifique en P o M: 1) Gastos bancarios 800 a Banco c/c 800. 2) Adelantos al personal 1.500 a Banco c/c 1.500. 3) Vehículos 20.000 e IVA compras 4.000 a Banco c/c 24.000. 4) Descuentos concedidos 300 e IVA ventas 60 a Deudores por ventas 360.`, opts: [String.raw`M, M, P, M`, String.raw`P, P, P, M`, String.raw`M, P, P, M`], ans: 2, exp: String.raw`Gastos bancarios y Descuentos concedidos son pérdidas: M. El adelanto y la compra del vehículo solo mueven activos (y el IVA compras es activo): P.` },
        { t: "t2", s: "t2.4", q: String.raw`En un asiento sin leyenda aparecen Gastos generales 1.000 e IVA compras 200 al Debe y Caja 1.200 al Haber. Se clasifica como:`, opts: [String.raw`Modificativo disminutivo`, String.raw`Permutativo, porque el IVA compras es un activo`, String.raw`Modificativo aumentativo`], ans: 0, exp: String.raw`Alcanza con que haya una cuenta de pérdida (Gastos generales) para que sea modificativo. El IVA no cambia la clasificación.` },
        { t: "t3", s: "t3.1", q: String.raw`Considerando las siguientes afirmaciones: i) La suma de los saldos de las cuentas analíticas es igual al saldo de la cuenta colectiva si se registraron correctamente todos los movimientos en la contabilidad principal y en la auxiliar. ii) Una de las pautas para clasificar las cuentas es por el significado de sus saldos, distinguiendo cuentas acumulativas y residuales.`, opts: [String.raw`Sólo la primera es correcta`, String.raw`Sólo la segunda es correcta`, String.raw`Ambas son correctas`], ans: 2, exp: String.raw`Las dos afirmaciones aparecieron como verdaderas en diciembre 2025.` },
        { t: "t3", s: "t3.1", q: String.raw`La cuenta Crédito fiscal, que surge de la liquidación de las ventas con tarjeta de débito, es:`, opts: [String.raw`Un activo`, String.raw`Un pasivo`, String.raw`Una ganancia`], ans: 0, exp: String.raw`Es un crédito contra la DGI (se descuenta del IVA a pagar). No es ganancia ni deuda.` },
        { t: "t3", s: "t3.1", q: String.raw`¿Cuál de estas cuentas tiene saldo normal acreedor?`, opts: [String.raw`Adelantos al personal`, String.raw`BSE`, String.raw`Comisiones perdidas`], ans: 1, exp: String.raw`BSE es un pasivo. Adelantos es activo y Comisiones perdidas es pérdida: ambas de saldo deudor.` },
        { t: "t3", s: "t3.1", q: String.raw`Una cuenta cuyo saldo muestra lo acumulado durante el ejercicio (por ejemplo Ventas) es una cuenta:`, opts: [String.raw`Acumulativa`, String.raw`Residual`, String.raw`Analítica`], ans: 0, exp: String.raw`Las cuentas de resultado acumulan lo del período. Las residuales muestran lo que queda a una fecha; analítica es otra clasificación (detalle de una colectiva).` },
        { t: "t3", s: "t3.2", q: String.raw`Se paga a un proveedor una deuda de $ 2.400 con cheque común propio. El asiento es:`, opts: [String.raw`Banco c/c 2.400 a Acreedores por compras 2.400`, String.raw`Acreedores por compras 2.400 a Banco c/c 2.400`, String.raw`Acreedores por compras 2.400 a Caja 2.400`], ans: 1, exp: String.raw`Baja el pasivo (Debe) y baja el Banco (Haber). El cheque es propio: sale del Banco, no de Caja.` },
        { t: "t3", s: "t3.2", q: String.raw`Un aumento de una cuenta de pérdida se registra:`, opts: [String.raw`Al Haber`, String.raw`Al Debe o al Haber según el comprobante`, String.raw`Al Debe`], ans: 2, exp: String.raw`Las pérdidas aumentan por el Debe, igual que los activos.` },
        { t: "t3", s: "t3.2", q: String.raw`El banco acredita en la cuenta un préstamo de $ 30.000 sin intereses descontados. Se debita:`, opts: [String.raw`Préstamos bancarios y se acredita Banco c/c`, String.raw`Banco c/c y se acredita Préstamos bancarios`, String.raw`Banco c/c y se acredita Intereses ganados`], ans: 1, exp: String.raw`Sube un activo (Debe) y sube un pasivo (Haber). No es una ganancia: hay que devolverlo.` },
        { t: "t3", s: "t3.2", q: String.raw`¿Cuál de estos asientos está mal planteado?`, opts: [String.raw`Caja 1.200 a Ventas 1.000 e IVA ventas 200`, String.raw`Deudores por ventas 1.200 a Ventas 1.000 e IVA ventas 200`, String.raw`Caja 1.000 a Ventas 1.000 e IVA ventas 200`], ans: 2, exp: String.raw`En el primero el Debe (1.000) no es igual al Haber (1.200): viola la partida doble.` },
        { t: "t3", s: "t3.3", q: String.raw`La lista ordenada, sistemática y codificada de las cuentas que utiliza una empresa es:`, opts: [String.raw`El plan de cuentas`, String.raw`El libro Mayor`, String.raw`El balance de comprobación`], ans: 0, exp: String.raw`El Mayor registra movimientos por cuenta y el balance de comprobación resume sumas y saldos; ninguno es la lista de cuentas.` },
        { t: "t3", s: "t3.3", q: String.raw`Un cliente paga antes del vencimiento y la empresa le hace un descuento. La cuenta de resultado que usa la empresa es:`, opts: [String.raw`Descuentos obtenidos`, String.raw`Intereses ganados`, String.raw`Descuentos concedidos`], ans: 2, exp: String.raw`El descuento lo da la empresa: es una pérdida, Descuentos concedidos. Obtenidos es cuando te lo hace un proveedor.` },
        { t: "t3", s: "t3.3", q: String.raw`La cuenta Sueldos a pagar es:`, opts: [String.raw`Un pasivo`, String.raw`Una pérdida`, String.raw`Un activo`], ans: 0, exp: String.raw`Es el líquido que se le debe al personal. La pérdida es Sueldos (el nominal).` },
        { t: "t3", s: "t3.3", q: String.raw`La comisión que cobra la administradora de tarjetas en la liquidación se registra en:`, opts: [String.raw`Deudores tarjeta de débito, al Debe`, String.raw`Comisiones perdidas`, String.raw`IVA ventas`], ans: 1, exp: String.raw`Es una pérdida de la empresa (con IVA compras aparte). Deudores tarjeta se acredita por el total liquidado.` },
        { t: "t3", s: "t3.4", q: String.raw`Considerando las siguientes afirmaciones: i) Utilizar un mayor en cuenta T es más fácil y rápido de registrar porque se anota menos información que en el mayor completo. ii) El Mayor es un registro cronológico.`, opts: [String.raw`Sólo la primera es correcta`, String.raw`Ambas son correctas`, String.raw`Sólo la segunda es correcta`], ans: 0, exp: String.raw`La i) fue verdadera en diciembre 2025. El Mayor es sistemático (agrupa por cuenta); el cronológico es el Diario.` },
        { t: "t3", s: "t3.4", q: String.raw`Caja tiene saldo inicial 800. En el mes: se cobra a un cliente 1.700 en efectivo, se depositan 2.000 en el banco y se vende al contado en efectivo por 3.600 IVA incluido. El saldo final de Caja es:`, opts: [String.raw`3.500`, String.raw`4.100`, String.raw`8.100`], ans: 1, exp: String.raw`800 + 1.700 − 2.000 + 3.600 = 4.100. 3.500 registra la venta sin IVA (3.000); 8.100 suma el depósito en vez de restarlo.` },
        { t: "t3", s: "t3.4", q: String.raw`La cuenta BPS tiene saldo inicial 6.000 acreedor. En el mes se paga ese saldo y se liquidan aportes por 9.500. El saldo final es:`, opts: [String.raw`15.500 acreedor`, String.raw`3.500 deudor`, String.raw`9.500 acreedor`], ans: 2, exp: String.raw`6.000 − 6.000 + 9.500 = 9.500. 15.500 olvida el pago; 3.500 resta la liquidación.` },
        { t: "t3", s: "t3.4", q: String.raw`"La cuenta Caja tiene saldo deudor" significa que:`, opts: [String.raw`La empresa le debe dinero a la caja`, String.raw`La suma de su Debe supera a la de su Haber`, String.raw`Se registró un error`], ans: 1, exp: String.raw`Deudor es un término técnico. Todo activo con existencia tiene saldo deudor.` },
        { t: "t3", s: "t3.5", q: String.raw`Empresa ZZ, mayo, IVA 20%. Cliente Sr. AB, sin saldo inicial. 05/05 Factura crédito a AB por $ 400 + IVA (CI costo $ 250). 08/05 NC emitida por el proveedor XX por devolución de compra $ 100 + IVA. 12/05 Recibo de cheque diferido: AB entrega cheque por $ 150. 20/05 ND a AB por intereses $ 50 + IVA. 22/05 Boleta de devolución contado: AB devuelve mercaderías de una compra al contado por $ 80 + IVA y se le entrega efectivo. 25/05 NC a AB por devolución $ 100 + IVA. 28/05 Recibo: AB entrega $ 90 en efectivo. El saldo de Deudores por ventas al 31/05 es:`, opts: [String.raw`84`, String.raw`330`, String.raw`180`], ans: 2, exp: String.raw`480 − 150 + 60 − 120 − 90 = 180. 84 resta la boleta de devolución contado (96), que va contra Caja. 330 no resta el cheque diferido, que cancela deuda en el momento del recibo.` },
        { t: "t3", s: "t3.5", q: String.raw`Empresa ZZ, proveedor Sr. AA, saldo inicial de Acreedores por compras $ 500. Factura crédito de AA por $ 1.000 + IVA. NC de AA por devolución de mercaderías $ 200 + IVA. Recibo de cheque diferido: ZZ entrega a AA un cheque diferido propio por $ 400. ND de AA por intereses $ 120 IVA incluido. NC emitida por ZZ al cliente BB $ 50 + IVA. Boleta contado: compra a AA por $ 300 + IVA. Recibo: ZZ paga a AA $ 300 por transferencia. El saldo de Acreedores por compras es:`, opts: [String.raw`880`, String.raw`1.240`, String.raw`1.280`], ans: 0, exp: String.raw`500 + 1.200 − 240 − 400 + 120 − 300 = 880. 1.240 suma la boleta contado (360), que se pagó en el acto. 1.280 no resta el cheque diferido entregado.` },
        { t: "t3", s: "t3.5", q: String.raw`Deudores por ventas tiene saldo inicial $ 2.000. En el mes: el cliente documenta $ 1.200 de su deuda con un conforme (recibo de conforme); venta a crédito $ 1.500 + IVA; vence un cheque diferido recibido el mes anterior por $ 500; NC al cliente por descuento de $ 100 + IVA. Saldo final de Deudores por ventas:`, opts: [String.raw`1.980`, String.raw`3.680`, String.raw`2.480`], ans: 2, exp: String.raw`2.000 − 1.200 + 1.800 − 120 = 2.480. 1.980 resta el vencimiento del cheque, que es Caja a Cheques diferidos a cobrar. 3.680 no resta el conforme.` },
        { t: "t3", s: "t3.5", q: String.raw`¿Cuál de estos comprobantes NO modifica el saldo de Deudores por ventas?`, opts: [String.raw`El comprobante interno por el costo de una venta a crédito`, String.raw`La nota de débito por intereses emitida al cliente`, String.raw`La nota de crédito por devolución emitida al cliente`], ans: 0, exp: String.raw`El CI es Costo de ventas a Mercaderías. La ND suma y la NC resta en Deudores.` },
        { t: "t3", s: "t3.5", q: String.raw`Proveedor Sr. AA, sin saldo inicial. Factura crédito $ 300 + IVA; NC de AA $ 50 + IVA; recibo de cheque diferido entregado a AA $ 100; ND de AA por intereses $ 48 IVA incluido; boleta de devolución contado de AA (nos entrega efectivo) $ 80 + IVA. Saldo de Acreedores por compras:`, opts: [String.raw`152`, String.raw`248`, String.raw`257,60`], ans: 1, exp: String.raw`360 − 60 − 100 + 48 = 248. 152 resta la boleta de devolución contado (96), que va contra Caja. 257,60 le suma IVA a la ND que ya venía con IVA incluido (57,60).` },
        { t: "t4", s: "t4.1", q: String.raw`Considerando las siguientes afirmaciones: i) Una de las clasificaciones de los registros contables los divide en cronológicos y sistemáticos. ii) Los libros obligatorios según el artículo 55 del Código de Comercio son el Diario, el de Inventarios y los libros auxiliares.`, opts: [String.raw`Sólo la primera es correcta`, String.raw`Ambas son correctas`, String.raw`Sólo la segunda es correcta`], ans: 0, exp: String.raw`La i) es verdadera. La ii) es falsa: el art. 55 exige Diario, Copiador de cartas e Inventarios; los auxiliares no están.` },
        { t: "t4", s: "t4.1", q: String.raw`El registro que agrupa los movimientos por cuenta y permite conocer sus saldos es:`, opts: [String.raw`El Diario`, String.raw`El Mayor`, String.raw`El Copiador de cartas`], ans: 1, exp: String.raw`El Mayor es sistemático, por cuenta. El Diario es cronológico y el Copiador guarda la correspondencia.` },
        { t: "t4", s: "t4.1", q: String.raw`El detalle de lo que debe cada cliente se lleva en:`, opts: [String.raw`El libro de Inventarios`, String.raw`El balance de comprobación`, String.raw`Un registro auxiliar de Deudores por ventas`], ans: 2, exp: String.raw`El auxiliar tiene las cuentas analíticas de cada cliente; la colectiva está en el Mayor.` },
        { t: "t4", s: "t4.1", q: String.raw`El orden correcto del circuito contable es:`, opts: [String.raw`Diario, comprobante, Mayor, balance de comprobación`, String.raw`Comprobante, Diario, Mayor, balance de comprobación`, String.raw`Mayor, Diario, comprobante, balance de comprobación`], ans: 1, exp: String.raw`Primero existe el comprobante, después se asienta en el Diario y de ahí se pasa al Mayor. El balance de comprobación resume el Mayor.` },
        { t: "t4", s: "t4.2", q: String.raw`Se compran mercaderías por $ 20.000 + IVA, la mitad a crédito según factura y el resto al contado según boleta. Al día siguiente se cancela la deuda con un cheque común propio según recibo. El asiento del recibo es:`, opts: [String.raw`Acreedores por compras 10.000 e IVA compras 2.000 a Banco c/c 12.000`, String.raw`Acreedores por compras 12.000 a Caja 12.000`, String.raw`Acreedores por compras 12.000 a Banco c/c 12.000`], ans: 2, exp: String.raw`La deuda por la mitad a crédito es 12.000 con IVA; el IVA ya se registró con la factura. El cheque es propio: Banco c/c.` },
        { t: "t4", s: "t4.2", q: String.raw`Se venden mercaderías y el cliente paga la mitad en efectivo y la mitad con un cheque común de un tercero, por $ 3.600 IVA incluido. El asiento de la boleta es:`, opts: [String.raw`Caja 3.600 a Ventas 3.000 e IVA ventas 600`, String.raw`Caja 1.800 y Banco c/c 1.800 a Ventas 3.000 e IVA ventas 600`, String.raw`Caja 3.600 a Ventas 3.600`], ans: 0, exp: String.raw`Efectivo y cheque de tercero al día van a Caja. Hay que discriminar el IVA (3.600 / 1,2 = 3.000).` },
        { t: "t4", s: "t4.2", q: String.raw`Una venta a crédito se respalda con:`, opts: [String.raw`Boleta y comprobante interno por el costo`, String.raw`Factura y recibo`, String.raw`Factura y comprobante interno por el costo`], ans: 2, exp: String.raw`A crédito: factura. El costo se registra con CI. El recibo aparecerá cuando el cliente pague.` },
        { t: "t4", s: "t4.2", q: String.raw`Se pagan gastos de papelería por $ 500 + IVA con un cheque común propio. Comprobante y asiento:`, opts: [String.raw`Boleta; Gastos generales 500 e IVA compras 100 a Banco c/c 600`, String.raw`Factura; Gastos generales 600 a Acreedores 600`, String.raw`Boleta; Gastos generales 600 a Caja 600`], ans: 0, exp: String.raw`Es contado: boleta. Se discrimina el IVA y el cheque propio sale del Banco.` },
        { t: "t4", s: "t4.3", q: String.raw`La empresa emite una NC por $ 4.000 más IVA por la devolución de mercadería vendida al contado según boleta. El costo ya fue registrado. El asiento de la NC es:`, opts: [String.raw`Ventas 4.000 e IVA ventas 800 a Caja 4.800`, String.raw`Ventas 4.000 e IVA ventas 800 a Deudores por ventas 4.800`, String.raw`Deudores por ventas 4.800 a Ventas 4.000 e IVA ventas 800`], ans: 1, exp: String.raw`La NC deja un crédito a favor del cliente: se acredita Deudores por ventas aunque la venta haya sido contado. A Caja iría con boleta de devolución contado. La tercera está invertida.` },
        { t: "t4", s: "t4.3", q: String.raw`Un cliente devuelve mercadería comprada a crédito y la empresa le entrega efectivo según boleta de devolución contado, por $ 2.400 IVA incluido. El asiento es:`, opts: [String.raw`Ventas 2.000 e IVA ventas 400 a Caja 2.400`, String.raw`Ventas 2.000 e IVA ventas 400 a Deudores por ventas 2.400`, String.raw`Ventas 2.400 a Caja 2.400`], ans: 0, exp: String.raw`La boleta de devolución contado implica salida de plata: se acredita Caja. Se discrimina el IVA.` },
        { t: "t4", s: "t4.3", q: String.raw`"ND 741 emitida por el proveedor AA por intereses de $ 72 IVA incluido". En nuestros libros:`, opts: [String.raw`Deudores por ventas 72 a Intereses ganados 60 e IVA ventas 12`, String.raw`Intereses perdidos 60 e IVA compras 12 a Acreedores por compras 72`, String.raw`Intereses perdidos 72 e IVA compras 14,40 a Acreedores por compras 86,40`], ans: 1, exp: String.raw`La ND la emite el proveedor: es una pérdida nuestra y aumenta la deuda. 72 ya incluye IVA: 72 / 1,2 = 60.` },
        { t: "t4", s: "t4.3", q: String.raw`El proveedor emite una boleta de devolución contado por mercaderías que le devolvemos ($ 600 + IVA) y nos entrega efectivo. El asiento es:`, opts: [String.raw`Acreedores por compras 720 a Mercaderías 600 e IVA compras 120`, String.raw`Caja 720 a Ventas 600 e IVA ventas 120`, String.raw`Caja 720 a Mercaderías 600 e IVA compras 120`], ans: 2, exp: String.raw`Nos devuelven plata: entra a Caja. Salen Mercaderías (al costo) e IVA compras. La deuda con el proveedor no se toca; no es una venta.` },
        { t: "t4", s: "t4.4", q: String.raw`Un cliente cancela una deuda de $ 7.000 entregando $ 2.500 en efectivo y un cheque diferido por $ 4.500. Se emiten:`, opts: [String.raw`Un recibo por 7.000`, String.raw`Un recibo por 2.500 y un recibo de cheque diferido por 4.500`, String.raw`Un recibo de cheque diferido por 7.000`], ans: 1, exp: String.raw`Cada instrumento tiene su comprobante: el efectivo va con recibo común (Caja) y el cheque diferido con recibo de cheque diferido (Cheques diferidos a cobrar).` },
        { t: "t4", s: "t4.4", q: String.raw`El asiento Costo de ventas a Mercaderías se respalda con:`, opts: [String.raw`Factura`, String.raw`Nota de crédito`, String.raw`Comprobante interno`], ans: 2, exp: String.raw`El costo de ventas no tiene papel externo: lo respalda un CI.` },
        { t: "t4", s: "t4.4", q: String.raw`El asiento Sueldos a BPS, Adelantos al personal y Sueldos a pagar se respalda con:`, opts: [String.raw`Planilla de liquidación de sueldos`, String.raw`Recibo`, String.raw`Nota de débito bancaria`], ans: 0, exp: String.raw`La liquidación se respalda con la PLS. El recibo respalda pagos (líquido, adelanto).` },
        { t: "t4", s: "t4.4", q: String.raw`La empresa documenta con un conforme la deuda de $ 10.000 que tiene con un proveedor. El comprobante es:`, opts: [String.raw`Factura`, String.raw`Comprobante interno`, String.raw`Recibo de conforme`], ans: 2, exp: String.raw`Documentar una deuda o un crédito con conforme se respalda con recibo de conforme: Acreedores por compras a Conformes a pagar.` },
        { t: "t4", s: "t4.5", q: String.raw`Indique los comprobantes de: 1) Banco c/c 4.000 a Caja 4.000. 2) Banco c/c 18.000 e Intereses perdidos 2.000 a Vales bancarios a pagar 20.000. 3) Deudores por ventas 600 a Intereses ganados 500 e IVA ventas 100. 4) Costo de ventas 700 a Mercaderías 700.`, opts: [String.raw`Boleta de depósito; NCB; ND; CI`, String.raw`Boleta de depósito; NDB; ND; CI`, String.raw`Recibo; Vale; NC; Factura`], ans: 0, exp: String.raw`El depósito es boleta de depósito; el préstamo acreditado, NCB (no NDB); los intereses cobrados, ND; el costo, CI.` },
        { t: "t4", s: "t4.5", q: String.raw`Indique los comprobantes de: 1) Mercaderías 2.000 e IVA compras 400 a Caja 2.400. 2) Cheques diferidos a cobrar 1.000 a Deudores por ventas 1.000. 3) Cheques diferidos a pagar 3.000 a Banco c/c 3.000. 4) Gastos bancarios 150 a Banco c/c 150.`, opts: [String.raw`Factura; Recibo de cheque diferido; CI; NCB`, String.raw`Boleta contado; Recibo de cheque diferido; CI; NDB`, String.raw`Boleta contado; CI; Recibo de cheque diferido; NDB`], ans: 1, exp: String.raw`Compra con Caja: boleta. Cobro con cheque diferido: recibo de cheque diferido. Vencimiento del cheque propio: CI. Gasto bancario: NDB.` },
        { t: "t4", s: "t4.5", q: String.raw`El banco cobra $ 1.200 por mantenimiento de cuenta. El comprobante y el asiento son:`, opts: [String.raw`NDB; Gastos bancarios 1.200 a Banco c/c 1.200`, String.raw`NCB; Gastos bancarios 1.200 a Banco c/c 1.200`, String.raw`NDB; Banco c/c 1.200 a Gastos bancarios 1.200`], ans: 0, exp: String.raw`El banco debita (baja) la cuenta: NDB. Gastos bancarios es pérdida (Debe) y Banco baja (Haber).` },
        { t: "t4", s: "t4.5", q: String.raw`Vence el vale de un préstamo bancario y el banco debita el importe en la cuenta corriente. El asiento y su comprobante son:`, opts: [String.raw`Banco c/c a Vales bancarios a pagar, s/ NCB`, String.raw`Vales bancarios a pagar a Banco c/c, s/ NDB`, String.raw`Vales bancarios a pagar a Caja, s/ Recibo`], ans: 1, exp: String.raw`Se cancela la deuda (Debe del pasivo) y baja el Banco. El banco lo comunica con una nota de débito.` },
        { t: "t5", s: "t5.1", q: String.raw`Se compran mercaderías al contado por $ 5.000 + IVA, pagando con un cheque común propio. El asiento es:`, opts: [String.raw`Mercaderías 5.000 e IVA compras 1.000 a Caja 6.000`, String.raw`Mercaderías 6.000 a Banco c/c 6.000`, String.raw`Mercaderías 5.000 e IVA compras 1.000 a Banco c/c 6.000`], ans: 2, exp: String.raw`El cheque propio sale del Banco. Mercaderías va al costo sin IVA; el IVA se discrimina en IVA compras.` },
        { t: "t5", s: "t5.1", q: String.raw`Se compran 12 unidades a $ 240 c/u IVA incluido: la mitad a crédito según factura y la otra mitad al contado según boleta. El importe acreditado a Acreedores por compras es:`, opts: [String.raw`1.200`, String.raw`1.440`, String.raw`2.880`], ans: 1, exp: String.raw`A crédito son 6 × 240 = 1.440, IVA incluido (la deuda es por el total). 1.200 es el neto; 2.880 incluye la parte contado.` },
        { t: "t5", s: "t5.1", q: String.raw`Se compran a crédito 40 unidades a $ 48 c/u IVA incluido. El asiento es:`, opts: [String.raw`Mercaderías 1.920 a Acreedores por compras 1.920`, String.raw`Mercaderías 1.920 e IVA compras 384 a Acreedores por compras 2.304`, String.raw`Mercaderías 1.600 e IVA compras 320 a Acreedores por compras 1.920`], ans: 2, exp: String.raw`Neto unitario 48 / 1,2 = 40: Mercaderías 1.600 e IVA 320. La segunda no discrimina el IVA; la tercera le suma IVA a un precio que ya lo incluía.` },
        { t: "t5", s: "t5.1", q: String.raw`La cuenta Mercaderías se valúa:`, opts: [String.raw`Al costo de compra sin IVA`, String.raw`Al costo de compra con IVA`, String.raw`Al precio de venta`], ans: 0, exp: String.raw`El IVA es un crédito contra la DGI (IVA compras) y el margen aparece recién en Ventas.` },
        { t: "t5", s: "t5.2", q: String.raw`Se venden al contado en efectivo mercaderías por $ 3.000 IVA incluido, que costaron $ 1.500. El asiento del comprobante interno es:`, opts: [String.raw`Costo de ventas 2.500 a Mercaderías 2.500`, String.raw`Mercaderías 1.500 a Costo de ventas 1.500`, String.raw`Costo de ventas 1.500 a Mercaderías 1.500`], ans: 2, exp: String.raw`El CI registra la salida de la mercadería al costo. 2.500 es el precio neto; la tercera es el asiento de una devolución.` },
        { t: "t5", s: "t5.2", q: String.raw`Se venden a crédito 30 unidades a $ 60 + IVA c/u; el costo unitario es $ 40. Los asientos son:`, opts: [String.raw`Deudores por ventas 2.160 a Ventas 1.800 e IVA ventas 360; Costo de ventas 1.200 a Mercaderías 1.200`, String.raw`Deudores por ventas 2.160 a Ventas 2.160; Costo de ventas 1.200 a Mercaderías 1.200`, String.raw`Deudores por ventas 2.160 a Ventas 1.800 e IVA ventas 360; Costo de ventas 1.800 a Mercaderías 1.800`], ans: 0, exp: String.raw`Ventas al neto con IVA aparte; la mercadería sale al costo (30 × 40), no al precio.` },
        { t: "t5", s: "t5.2", q: String.raw`En el mes las Ventas fueron 20.000 y el Costo de ventas 14.000 (sin IVA). La utilidad bruta es:`, opts: [String.raw`10.000`, String.raw`6.000`, String.raw`34.000`], ans: 1, exp: String.raw`20.000 − 14.000 = 6.000. 10.000 usa ventas con IVA (24.000).` },
        { t: "t5", s: "t5.2", q: String.raw`En inventario permanente, una venta a crédito genera:`, opts: [String.raw`Dos asientos: factura (venta) y comprobante interno (costo)`, String.raw`Un asiento: factura con Ventas y Mercaderías`, String.raw`Dos asientos: factura y recibo`], ans: 0, exp: String.raw`La venta y el costo se registran por separado. El recibo es del cobro posterior.` },
        { t: "t5", s: "t5.3", q: String.raw`Se vende mercadería por $ 1.440 IVA incluido con una utilidad del 20% sobre costo. El costo de ventas es:`, opts: [String.raw`960`, String.raw`1.000`, String.raw`1.152`], ans: 1, exp: String.raw`PV = 1.200; C = 1.200 / 1,2 = 1.000. 960 aplica la fórmula de sobre ventas; 1.152 aplica el 20% al precio con IVA.` },
        { t: "t5", s: "t5.3", q: String.raw`Una mercadería costó $ 750 y se vende con una utilidad del 20% sobre costo. El precio de venta sin IVA es:`, opts: [String.raw`937,50`, String.raw`1.080`, String.raw`900`], ans: 2, exp: String.raw`750 × 1,2 = 900. 937,50 usa sobre ventas (750 / 0,8); 1.080 es el precio con IVA.` },
        { t: "t5", s: "t5.3", q: String.raw`El precio de venta es $ 3.000 + IVA y la utilidad es del 50% sobre costo. El costo es:`, opts: [String.raw`1.500`, String.raw`2.000`, String.raw`2.400`], ans: 1, exp: String.raw`3.000 / 1,5 = 2.000. 1.500 aplica sobre ventas; 2.400 parte del precio con IVA (3.600 / 1,5).` },
        { t: "t5", s: "t5.3", q: String.raw`Ventas del ejercicio 50.000 y costo de ventas 40.000. El porcentaje de utilidad sobre costo es:`, opts: [String.raw`20%`, String.raw`80%`, String.raw`25%`], ans: 2, exp: String.raw`10.000 / 40.000 = 25%. 20% es sobre ventas; 80% es costo sobre ventas.` },
        { t: "t5", s: "t5.3", q: String.raw`Se realiza una venta por $ 10.800 IVA incluido, con una utilidad del 25% sobre costo. El costo de ventas es:`, opts: [String.raw`7.200`, String.raw`6.750`, String.raw`8.640`], ans: 0, exp: String.raw`PV = 9.000; C = 9.000 / 1,25 = 7.200. 6.750 usa 9.000 × 0,75 (sobre ventas); 8.640 divide el precio con IVA.` },
        { t: "t5", s: "t5.4", q: String.raw`Una mercadería costó $ 900 y se vende con una utilidad del 25% sobre ventas. El precio de venta es ($ XX + IVA):`, opts: [String.raw`1.125`, String.raw`1.440`, String.raw`1.200`], ans: 2, exp: String.raw`900 / 0,75 = 1.200. 1.125 aplica sobre costo; 1.440 incluye IVA.` },
        { t: "t5", s: "t5.4", q: String.raw`Se vende mercadería por $ 2.400 IVA incluido con una utilidad del 30% sobre ventas. El costo de ventas es:`, opts: [String.raw`1.400`, String.raw`1.680`, String.raw`1.538,46`], ans: 0, exp: String.raw`PV = 2.000; C = 2.000 × 0,7 = 1.400. 1.680 usa el precio con IVA; 1.538,46 usa la fórmula de sobre costo.` },
        { t: "t5", s: "t5.4", q: String.raw`Una utilidad del 20% sobre ventas equivale a una utilidad sobre costo de:`, opts: [String.raw`20%`, String.raw`25%`, String.raw`16,67%`], ans: 1, exp: String.raw`\( 0{,}2/(1-0{,}2) = 0{,}25 \). 16,67% es la conversión al revés.` },
        { t: "t5", s: "t5.4", q: String.raw`El precio de venta es $ 4.800 IVA incluido y el costo $ 2.800. El porcentaje de utilidad sobre ventas es:`, opts: [String.raw`30%`, String.raw`42,86%`, String.raw`41,67%`], ans: 0, exp: String.raw`PV = 4.000; (4.000 − 2.800) / 4.000 = 30%. 42,86% es sobre costo; 41,67% usa el precio con IVA.` },
        { t: "t5", s: "t5.4", q: String.raw`El costo de una venta es $ 3.500 y la utilidad es del 30% sobre ventas. El precio de venta sin IVA es:`, opts: [String.raw`4.550`, String.raw`5.000`, String.raw`6.000`], ans: 1, exp: String.raw`3.500 / 0,7 = 5.000. 4.550 aplica sobre costo (3.500 × 1,3); 6.000 es con IVA.` },
        { t: "t5", s: "t5.5", q: String.raw`La empresa emite una NC por la devolución de mercadería vendida por $ 5.000 (precio de venta) más IVA. Marca sus ventas con 25% de utilidad sobre costo. Omitió el comprobante interno de la devolución. El asiento del CI es:`, opts: [String.raw`Mercaderías 3.750 a Costo de ventas 3.750`, String.raw`Costo de ventas 4.000 a Mercaderías 4.000`, String.raw`Mercaderías 4.000 a Costo de ventas 4.000`], ans: 2, exp: String.raw`Costo = 5.000 / 1,25 = 4.000 y vuelve a Mercaderías. 3.750 usa sobre ventas; la tercera es el asiento de una venta.` },
        { t: "t5", s: "t5.5", q: String.raw`Se emite una boleta de devolución contado por $ 3.000 más IVA y se entrega al cliente un cheque común propio. El CI ya se registró. El asiento es:`, opts: [String.raw`Ventas 3.000 e IVA ventas 600 a Caja 3.600`, String.raw`Ventas 3.000 e IVA ventas 600 a Banco c/c 3.600`, String.raw`Ventas 3.000 e IVA ventas 600 a Deudores por ventas 3.600`], ans: 1, exp: String.raw`Boleta de devolución contado: sale plata. Como es un cheque propio, se acredita Banco c/c. No es Deudores.` },
        { t: "t5", s: "t5.5", q: String.raw`Un cliente devuelve mercadería vendida por $ 3.000 + IVA; la empresa trabaja con 20% de utilidad sobre ventas. El costo que vuelve a Mercaderías es:`, opts: [String.raw`2.500`, String.raw`2.880`, String.raw`2.400`], ans: 2, exp: String.raw`3.000 × 0,8 = 2.400. 2.500 usa sobre costo (3.000 / 1,2); 2.880 parte del importe con IVA.` },
        { t: "t5", s: "t5.5", q: String.raw`Deudores por ventas sin saldo inicial. Venta a crédito $ 6.000 + IVA; NC al cliente por devolución $ 1.000 + IVA; boleta de devolución contado al mismo cliente por $ 500 + IVA de una compra contado. Saldo de Deudores por ventas:`, opts: [String.raw`6.000`, String.raw`5.400`, String.raw`6.200`], ans: 0, exp: String.raw`7.200 − 1.200 = 6.000. 5.400 resta también la boleta de devolución contado (va contra Caja); 6.200 resta la NC sin IVA.` },
        { t: "t5", s: "t5.5", q: String.raw`La empresa emite una NC por $ 2.500 más IVA por la devolución de mercaderías vendidas al contado según boleta; no devuelve dinero. El asiento de la NC es:`, opts: [String.raw`Ventas 2.500 e IVA ventas 500 a Caja 3.000`, String.raw`Ventas 3.000 a Deudores por ventas 3.000`, String.raw`Ventas 2.500 e IVA ventas 500 a Deudores por ventas 3.000`], ans: 2, exp: String.raw`Clave oficial: la NC se acredita a Deudores por ventas aunque la venta haya sido contado. La tercera no discrimina el IVA.` },
        { t: "t5", s: "t5.6", q: String.raw`Mercaderías tiene saldo inicial $ 2.000. En el mes: compra $ 3.000 + IVA; venta por $ 3.500 + IVA con costo $ 2.500; devolución de compra $ 400 + IVA; un cliente devuelve mercadería de costo $ 300. Saldo de Mercaderías:`, opts: [String.raw`2.400`, String.raw`1.400`, String.raw`2.920`], ans: 0, exp: String.raw`2.000 + 3.000 − 2.500 − 400 + 300 = 2.400. 1.400 resta la venta a precio de venta; 2.920 mete el IVA en compra y devolución.` },
        { t: "t5", s: "t5.6", q: String.raw`Se recibe una NC del proveedor por devolución de mercaderías por $ 1.200 IVA incluido. El asiento es:`, opts: [String.raw`Acreedores por compras 1.200 a Mercaderías 1.200`, String.raw`Acreedores por compras 1.200 a Mercaderías 1.000 e IVA compras 200`, String.raw`Mercaderías 1.000 e IVA compras 200 a Acreedores por compras 1.200`], ans: 1, exp: String.raw`Baja la deuda y salen la mercadería (al neto) y el IVA compras. La tercera es una compra.` },
        { t: "t5", s: "t5.6", q: String.raw`Se compran 60 unidades a $ 25 + IVA c/u; se devuelven 5 al proveedor (NC); se venden 40 con 20% de utilidad sobre ventas. Saldo de Mercaderías:`, opts: [String.raw`375`, String.raw`500`, String.raw`450`], ans: 0, exp: String.raw`Quedan 15 unidades × 25 = 375. 500 olvida la devolución (20 u); 450 valúa con IVA (15 × 30).` },
        { t: "t5", s: "t5.6", q: String.raw`Se compran a crédito 40 unidades a $ 50 + IVA c/u y se devuelven 4 con NC del proveedor. Sin otros movimientos, el saldo de Acreedores por compras es:`, opts: [String.raw`2.400`, String.raw`2.160`, String.raw`2.200`], ans: 1, exp: String.raw`2.400 − 240 = 2.160. 2.400 olvida la NC; 2.200 resta la devolución sin IVA.` },
        { t: "t6", s: "t6.1", q: String.raw`Una compra de $ 7.200 IVA incluido tiene un IVA de:`, opts: [String.raw`1.440`, String.raw`6.000`, String.raw`1.200`], ans: 2, exp: String.raw`7.200 / 6 = 1.200. 1.440 es el 20% del total (error típico); 6.000 es el neto.` },
        { t: "t6", s: "t6.1", q: String.raw`Una venta de $ 4.500 + IVA tiene un total de:`, opts: [String.raw`5.490`, String.raw`5.400`, String.raw`4.500`], ans: 1, exp: String.raw`4.500 × 1,2 = 5.400. 5.490 usa la tasa real del 22%, pero la cátedra usa 20%.` },
        { t: "t6", s: "t6.1", q: String.raw`El neto de una factura de $ 16.800 IVA incluido es:`, opts: [String.raw`13.440`, String.raw`2.800`, String.raw`14.000`], ans: 2, exp: String.raw`16.800 / 1,2 = 14.000. 13.440 multiplica por 0,8; 2.800 es el IVA.` },
        { t: "t6", s: "t6.1", q: String.raw`En una venta a crédito de $ 3.000 + IVA, Deudores por ventas se debita por:`, opts: [String.raw`3.600`, String.raw`3.000`, String.raw`600`], ans: 0, exp: String.raw`El cliente debe el total, IVA incluido. Ventas va por 3.000 e IVA ventas por 600.` },
        { t: "t6", s: "t6.2", q: String.raw`Se compran muebles para la oficina por $ 5.000 + IVA en efectivo. El asiento es:`, opts: [String.raw`Muebles y útiles 6.000 a Caja 6.000`, String.raw`Mercaderías 5.000 e IVA compras 1.000 a Caja 6.000`, String.raw`Muebles y útiles 5.000 e IVA compras 1.000 a Caja 6.000`], ans: 2, exp: String.raw`El IVA del bien de uso se discrimina. No es Mercaderías porque no se compran para vender.` },
        { t: "t6", s: "t6.2", q: String.raw`Se paga en efectivo la factura de luz por $ 1.200 IVA incluido. El asiento es:`, opts: [String.raw`Gastos generales 1.000 e IVA compras 200 a Caja 1.200`, String.raw`Gastos generales 1.200 a Caja 1.200`, String.raw`Gastos generales 1.200 e IVA compras 240 a Caja 1.440`], ans: 0, exp: String.raw`Se discrimina el IVA contenido (1.200 / 6 = 200). La tercera le suma IVA a un importe que ya lo incluía.` },
        { t: "t6", s: "t6.2", q: String.raw`En el mes: compra de mercaderías $ 10.000 + IVA; compra de un vehículo $ 36.000 IVA incluido; gastos de papelería $ 600 IVA incluido; sueldos nominales $ 20.000. El IVA compras del mes es:`, opts: [String.raw`12.100`, String.raw`8.100`, String.raw`2.100`], ans: 1, exp: String.raw`2.000 + 6.000 + 100 = 8.100. 12.100 le pone IVA a los sueldos; 2.100 olvida el IVA del vehículo.` },
        { t: "t6", s: "t6.2", q: String.raw`¿Cuál de estas operaciones NO lleva IVA en el asiento?`, opts: [String.raw`El pago al BPS de los aportes del mes anterior`, String.raw`La compra de muebles con boleta`, String.raw`La factura de un proveedor por intereses`], ans: 0, exp: String.raw`Los aportes a la seguridad social no llevan IVA; además, un pago nunca registra IVA. Muebles e intereses facturados sí.` },
        { t: "t6", s: "t6.3", q: String.raw`Se emite una ND a un cliente por intereses de $ 800 + IVA. El asiento es:`, opts: [String.raw`Deudores por ventas 800 a Intereses ganados 800`, String.raw`Deudores por ventas 960 a Intereses ganados 800 e IVA ventas 160`, String.raw`Intereses perdidos 800 e IVA compras 160 a Deudores por ventas 960`], ans: 1, exp: String.raw`Los intereses que cobramos son ganancia y llevan IVA ventas. La tercera es el asiento del que recibe la ND, y con cuentas cruzadas.` },
        { t: "t6", s: "t6.3", q: String.raw`La deuda de un cliente de $ 15.000 se documenta con un conforme a 6 meses que incluye intereses por $ 1.200 + IVA. El importe del conforme es:`, opts: [String.raw`16.200`, String.raw`19.440`, String.raw`16.440`], ans: 2, exp: String.raw`15.000 + 1.200 + 240 = 16.440. 16.200 olvida el IVA de los intereses; 19.440 le aplica IVA a toda la deuda.` },
        { t: "t6", s: "t6.3", q: String.raw`El proveedor nos envía una NC por un descuento de $ 300 + IVA. El asiento es:`, opts: [String.raw`Descuentos concedidos 300 e IVA ventas 60 a Acreedores por compras 360`, String.raw`Acreedores por compras 360 a Descuentos obtenidos 300 e IVA compras 60`, String.raw`Acreedores por compras 360 a Descuentos obtenidos 360`], ans: 1, exp: String.raw`Baja la deuda, el descuento es ganancia nuestra y se reduce el IVA compras. La segunda usa las cuentas del que emite la NC.` },
        { t: "t6", s: "t6.3", q: String.raw`La empresa emite una NC por un descuento por pronto pago de $ 500 + IVA a un cliente. El asiento es:`, opts: [String.raw`Descuentos concedidos 500 e IVA compras 100 a Deudores por ventas 600`, String.raw`Deudores por ventas 600 a Descuentos obtenidos 500 e IVA ventas 100`, String.raw`Descuentos concedidos 500 e IVA ventas 100 a Deudores por ventas 600`], ans: 2, exp: String.raw`El descuento que damos es pérdida y reduce el IVA ventas (débito fiscal), no el IVA compras.` },
        { t: "t6", s: "t6.3", q: String.raw`El proveedor nos envía una ND por intereses de $ 1.500 IVA incluido. El asiento es:`, opts: [String.raw`Intereses perdidos 1.250 e IVA compras 250 a Acreedores por compras 1.500`, String.raw`Intereses perdidos 1.500 e IVA compras 300 a Acreedores por compras 1.800`, String.raw`Intereses perdidos 1.500 a Acreedores por compras 1.500`], ans: 0, exp: String.raw`IVA incluido: 1.500 / 1,2 = 1.250 y IVA 250. La segunda suma IVA de más; la tercera no lo discrimina.` },
        { t: "t6", s: "t6.4", q: String.raw`En el mes: venta a crédito $ 30.000 + IVA; NC emitida por devolución $ 2.000 + IVA; compra de mercaderías $ 18.000 IVA incluido; ND recibida por intereses $ 600 + IVA; compra de muebles $ 6.000 + IVA. El IVA a pagar es:`, opts: [String.raw`1.680`, String.raw`2.480`, String.raw`1.280`], ans: 2, exp: String.raw`IVA ventas 6.000 − 400 = 5.600; IVA compras 3.000 + 120 + 1.200 = 4.320; diferencia 1.280. 1.680 olvida la NC; 2.480 olvida el IVA de los muebles.` },
        { t: "t6", s: "t6.4", q: String.raw`IVA ventas del mes 4.500 e IVA compras 5.200. La posición de la empresa es:`, opts: [String.raw`Saldo a favor de 700`, String.raw`IVA a pagar 700`, String.raw`IVA a pagar 9.700`], ans: 0, exp: String.raw`4.500 − 5.200 = −700: la empresa pagó más IVA del que cobró; no paga nada y le queda un crédito.` },
        { t: "t6", s: "t6.4", q: String.raw`Compras a crédito de $ 10.000 + IVA y $ 5.000 + IVA; NC recibida por devolución $ 1.000 + IVA; se paga la primera factura por transferencia. Saldo de IVA compras:`, opts: [String.raw`3.000`, String.raw`2.800`, String.raw`3.200`], ans: 1, exp: String.raw`2.000 + 1.000 − 200 = 2.800. 3.000 olvida la NC; 3.200 la suma en lugar de restarla. El pago no toca el IVA.` },
        { t: "t6", s: "t6.4", q: String.raw`¿Cuál de estos hechos modifica el IVA a pagar del mes?`, opts: [String.raw`Una NC emitida a un cliente por devolución`, String.raw`El cobro de una factura del mes anterior`, String.raw`El pago de los sueldos del mes`], ans: 0, exp: String.raw`La NC reduce el IVA ventas. Los cobros no tocan el IVA y los sueldos no lo llevan.` },
        { t: "t7", s: "t7.1", q: String.raw`La deuda de un cliente de $ 30.000 se documenta con un conforme a 6 meses con intereses de $ 2.000 + IVA (ND y recibo de conforme). El importe de Conformes a cobrar es:`, opts: [String.raw`32.000`, String.raw`32.400`, String.raw`38.880`], ans: 1, exp: String.raw`30.000 + 2.000 + 400 = 32.400. 32.000 olvida el IVA de los intereses; 38.880 aplica IVA a todo.` },
        { t: "t7", s: "t7.1", q: String.raw`Vence un conforme a cobrar y el cliente lo paga en efectivo. El asiento es:`, opts: [String.raw`Caja a Deudores por ventas`, String.raw`Conformes a cobrar a Caja`, String.raw`Caja a Conformes a cobrar`], ans: 2, exp: String.raw`Se cancela el documento. Deudores ya se había cancelado al firmar el conforme. La tercera está invertida.` },
        { t: "t7", s: "t7.1", q: String.raw`Se paga al vencimiento un conforme a pagar con un cheque común propio. El asiento es:`, opts: [String.raw`Conformes a pagar a Caja`, String.raw`Conformes a pagar a Banco c/c`, String.raw`Acreedores por compras a Banco c/c`], ans: 1, exp: String.raw`Se cancela la deuda documentada y el cheque propio baja el Banco. Acreedores ya se canceló al documentar.` },
        { t: "t7", s: "t7.1", q: String.raw`La empresa documenta con conforme su deuda de $ 8.000 con un proveedor, que le cobra intereses por $ 400 + IVA. El importe acreditado a Conformes a pagar es:`, opts: [String.raw`8.400`, String.raw`8.000`, String.raw`8.480`], ans: 2, exp: String.raw`Primero la ND del proveedor aumenta la deuda en 480 (400 + 80) y después se documenta todo: 8.480.` },
        { t: "t7", s: "t7.1", q: String.raw`Conformes a cobrar tiene saldo inicial $ 5.000. En el mes: un cliente documenta $ 3.000; se cobra un conforme de $ 2.000 al vencimiento; otro cliente documenta $ 1.000 más intereses de $ 100 + IVA. Saldo final:`, opts: [String.raw`7.120`, String.raw`9.120`, String.raw`7.100`], ans: 0, exp: String.raw`5.000 + 3.000 − 2.000 + 1.120 = 7.120. 9.120 no resta el cobro; 7.100 olvida el IVA de los intereses.` },
        { t: "t7", s: "t7.2", q: String.raw`Un cliente cancela su deuda con un cheque común de un tercero por $ 5.000. El asiento es:`, opts: [String.raw`Banco c/c 5.000 a Deudores por ventas 5.000`, String.raw`Cheques diferidos a cobrar 5.000 a Deudores por ventas 5.000`, String.raw`Caja 5.000 a Deudores por ventas 5.000`], ans: 2, exp: String.raw`Cheque de tercero al día: Caja, hasta que se deposite. No es diferido.` },
        { t: "t7", s: "t7.2", q: String.raw`La empresa entrega a un proveedor, para cancelar su deuda, un cheque común que había recibido de un cliente. El asiento es:`, opts: [String.raw`Acreedores por compras a Caja`, String.raw`Acreedores por compras a Banco c/c`, String.raw`Acreedores por compras a Cheques diferidos a cobrar`], ans: 0, exp: String.raw`El cheque de tercero estaba en Caja: sale de Caja. No es un cheque propio, así que no toca el Banco.` },
        { t: "t7", s: "t7.2", q: String.raw`Se depositan en el banco los cheques comunes de terceros que había en caja. Asiento y comprobante:`, opts: [String.raw`Caja a Banco c/c, s/ Boleta de depósito`, String.raw`Banco c/c a Caja, s/ Boleta de depósito`, String.raw`Banco c/c a Caja, s/ NCB`], ans: 1, exp: String.raw`Sube el Banco y baja la Caja. El comprobante es la boleta de depósito.` },
        { t: "t7", s: "t7.2", q: String.raw`Caja: saldo inicial 1.500. Un cliente paga con cheque común de un tercero por 2.500 y 500 en efectivo; se deposita el cheque; se paga a un proveedor con cheque común propio por 2.000; vence un cheque diferido de un tercero por 1.200. Saldo final de Caja:`, opts: [String.raw`3.200`, String.raw`1.200`, String.raw`5.700`], ans: 0, exp: String.raw`1.500 + 3.000 − 2.500 + 1.200 = 3.200. 1.200 resta el pago con cheque propio (es Banco); 5.700 no resta el depósito.` },
        { t: "t7", s: "t7.3", q: String.raw`Vence un cheque diferido por $ 8.000 que la empresa había entregado a un proveedor. El asiento es:`, opts: [String.raw`Acreedores por compras 8.000 a Banco c/c 8.000`, String.raw`Cheques diferidos a pagar 8.000 a Banco c/c 8.000`, String.raw`Cheques diferidos a pagar 8.000 a Caja 8.000`], ans: 1, exp: String.raw`El cheque es propio: al vencer baja el Banco y se cancela la cuenta del cheque. Acreedores se canceló al entregarlo.` },
        { t: "t7", s: "t7.3", q: String.raw`Vence un cheque diferido por $ 18.000 recibido de un cliente. El asiento es:`, opts: [String.raw`Banco c/c 18.000 a Cheques diferidos a cobrar 18.000`, String.raw`Caja 18.000 a Deudores por ventas 18.000`, String.raw`Caja 18.000 a Cheques diferidos a cobrar 18.000`], ans: 2, exp: String.raw`Cheque de tercero: al vencer pasa a Caja. Deudores ya bajó con el recibo de cheque diferido.` },
        { t: "t7", s: "t7.3", q: String.raw`Se entregan a un proveedor tres cheques diferidos propios: $ 3.000 (vence 5/8), $ 7.000 (vence 31/8) y $ 2.500 (vence 10/9). El saldo de Cheques diferidos a pagar al 31/8 es:`, opts: [String.raw`12.500`, String.raw`2.500`, String.raw`9.500`], ans: 1, exp: String.raw`Al 31/8 vencieron los dos primeros. 12.500 no descuenta vencimientos; 9.500 no considera que el de 31/8 vence ese día.` },
        { t: "t7", s: "t7.3", q: String.raw`Un cliente paga su deuda con un cheque diferido de un tercero cuya fecha de cobro ya pasó. Se debita:`, opts: [String.raw`Cheques diferidos a cobrar`, String.raw`Banco c/c`, String.raw`Caja`], ans: 2, exp: String.raw`Un diferido ya vencido se puede cobrar en el acto: se trata como cheque al día, en Caja.` },
        { t: "t7", s: "t7.3", q: String.raw`Se compran mercaderías al contado por $ 2.000 + IVA pagando con un cheque diferido propio. El asiento es:`, opts: [String.raw`Mercaderías 2.000 e IVA compras 400 a Cheques diferidos a pagar 2.400`, String.raw`Mercaderías 2.000 e IVA compras 400 a Banco c/c 2.400`, String.raw`Mercaderías 2.000 e IVA compras 400 a Acreedores por compras 2.400`], ans: 0, exp: String.raw`El cheque todavía no se cobró: la deuda queda instrumentada en Cheques diferidos a pagar. Banco se acredita al vencimiento.` },
        { t: "t7", s: "t7.4", q: String.raw`Un cliente debe $ 8.000 y paga antes del vencimiento; se le concede un descuento por pronto pago de $ 400 + IVA (NC) y paga el resto en efectivo según recibo. La registración del recibo es:`, opts: [String.raw`Caja 7.520, Descuentos concedidos 400 e IVA ventas 80 a Deudores por ventas 8.000`, String.raw`Descuentos concedidos 400 e IVA compras 80 a Deudores por ventas 480`, String.raw`Caja 7.520 a Deudores por ventas 7.520`], ans: 2, exp: String.raw`El recibo registra solo lo cobrado. El descuento va en la NC (Descuentos concedidos e IVA ventas a Deudores). La tercera usa IVA compras.` },
        { t: "t7", s: "t7.4", q: String.raw`Un cliente cancela una deuda de $ 9.000 con $ 2.000 en efectivo, un cheque común de un tercero de $ 3.000 y un cheque diferido de $ 4.000. La registración correcta es:`, opts: [String.raw`Caja 5.000 a Deudores 5.000 (recibo) y Cheques diferidos a cobrar 4.000 a Deudores 4.000 (recibo de cheque diferido)`, String.raw`Caja 2.000 y Banco c/c 3.000 a Deudores 5.000; Cheques diferidos a cobrar 4.000 a Deudores 4.000`, String.raw`Caja 9.000 a Deudores por ventas 9.000 (recibo)`], ans: 0, exp: String.raw`Efectivo y cheque común de tercero van a Caja; el diferido, a su cuenta y con su propio comprobante.` },
        { t: "t7", s: "t7.4", q: String.raw`La empresa debe $ 12.000 a un proveedor, que le otorga un descuento por pronto pago de $ 400 + IVA (NC). Paga el resto por transferencia. El importe de la transferencia es:`, opts: [String.raw`11.600`, String.raw`11.520`, String.raw`12.000`], ans: 1, exp: String.raw`12.000 − 480 = 11.520. 11.600 resta el descuento sin su IVA.` },
        { t: "t7", s: "t7.4", q: String.raw`El descuento por pronto pago que la empresa otorga a un cliente se documenta con:`, opts: [String.raw`Nota de crédito emitida`, String.raw`Nota de débito emitida`, String.raw`Comprobante interno`], ans: 0, exp: String.raw`El descuento reduce lo que el cliente debe: nota de crédito. La ND aumenta la deuda.` },
        { t: "t7", s: "t7.5", q: String.raw`El banco otorga un préstamo de $ 50.000 contra vale, descuenta $ 4.000 de intereses y acredita el resto (NCB). El asiento es:`, opts: [String.raw`Banco c/c 50.000 a Vales bancarios a pagar 46.000 e Intereses ganados 4.000`, String.raw`Banco c/c 46.000 e Intereses perdidos 4.000 a Vales bancarios a pagar 50.000`, String.raw`Vales bancarios a pagar 46.000 e Intereses perdidos 4.000 a Banco c/c 50.000`], ans: 1, exp: String.raw`Entra el líquido, los intereses son pérdida y la deuda es el nominal. La segunda confunde con Intereses ganados; la tercera está invertida.` },
        { t: "t7", s: "t7.5", q: String.raw`Se obtiene un préstamo de $ 60.000 a 90 días contra vale; el banco descuenta intereses por $ 5.400. El importe que se debita a Banco c/c es:`, opts: [String.raw`60.000`, String.raw`65.400`, String.raw`54.600`], ans: 2, exp: String.raw`El banco acredita el líquido: 60.000 − 5.400. El nominal va a Vales bancarios a pagar.` },
        { t: "t7", s: "t7.5", q: String.raw`Al vencimiento, el banco debita en la cuenta corriente el importe del vale. El asiento es:`, opts: [String.raw`Intereses perdidos a Banco c/c`, String.raw`Vales bancarios a pagar a Banco c/c`, String.raw`Banco c/c a Vales bancarios a pagar`], ans: 1, exp: String.raw`Se cancela la deuda por el nominal. Los intereses ya se registraron al otorgarse el préstamo.` },
        { t: "t7", s: "t7.5", q: String.raw`Se paga por débito bancario una cuota de un préstamo: $ 5.000 de capital y $ 600 de intereses. El asiento es:`, opts: [String.raw`Préstamos bancarios 5.600 a Banco c/c 5.600`, String.raw`Préstamos bancarios 5.000 a Banco c/c 5.000 e Intereses ganados 600`, String.raw`Préstamos bancarios 5.000 e Intereses perdidos 600 a Banco c/c 5.600`], ans: 2, exp: String.raw`El capital baja la deuda y los intereses son pérdida. La segunda deja la deuda mal; la tercera no cierra y usa ganados.` },
        { t: "t7", s: "t7.6", q: String.raw`Se vende con tarjeta de débito por $ 6.000 + IVA según boleta; el CI ya fue registrado. El asiento es:`, opts: [String.raw`Deudores tarjeta de débito 7.200 a Ventas 6.000 e IVA ventas 1.200`, String.raw`Caja 7.200 a Ventas 6.000 e IVA ventas 1.200`, String.raw`Deudores por ventas 7.200 a Ventas 6.000 e IVA ventas 1.200`], ans: 0, exp: String.raw`La plata la deposita la administradora: se debita Deudores tarjeta de débito, no Caja ni Deudores por ventas.` },
        { t: "t7", s: "t7.6", q: String.raw`Deudores tarjeta de débito tiene saldo $ 12.000 por ventas a consumidores finales. La tarjeta liquida con una comisión del 4% + IVA; el beneficio fiscal es de 2 puntos de IVA. El importe debitado a Banco c/c es:`, opts: [String.raw`11.424`, String.raw`11.320`, String.raw`11.224`], ans: 2, exp: String.raw`Comisión 480, IVA 96, crédito fiscal 2% × 10.000 = 200: 12.000 − 776 = 11.224. 11.424 olvida el crédito fiscal; 11.320 olvida el IVA de la comisión.` },
        { t: "t7", s: "t7.6", q: String.raw`Saldos antes de la liquidación: Deudores tarjeta de débito $ 18.000 y Deudores tarjeta de crédito $ 24.000. El beneficio fiscal es de 2 puntos de IVA y se aplica solo a débito. El saldo de Crédito fiscal luego de la liquidación es:`, opts: [String.raw`300`, String.raw`700`, String.raw`360`], ans: 0, exp: String.raw`2% × 15.000 (neto de las ventas con débito) = 300. 700 lo aplica también a crédito; 360 lo calcula sobre el total con IVA.` },
        { t: "t7", s: "t7.6", q: String.raw`Deudores tarjeta de crédito tiene saldo $ 18.000. La administradora liquida con una comisión del 5% + IVA y deposita el resto. El importe debitado a Banco c/c es:`, opts: [String.raw`17.100`, String.raw`16.920`, String.raw`16.620`], ans: 1, exp: String.raw`Comisión 900 e IVA 180: 18.000 − 1.080 = 16.920. 17.100 olvida el IVA; 16.620 resta un crédito fiscal que no corresponde con tarjeta de crédito.` },
        { t: "t7", s: "t7.6", q: String.raw`Considerando las siguientes afirmaciones: i) El beneficio fiscal por las ventas cobradas con tarjeta de débito aplica para todos los clientes que pagan con débito. ii) Una venta con tarjeta de crédito se respalda con boleta.`, opts: [String.raw`Sólo la segunda es correcta`, String.raw`Ambas son correctas`, String.raw`Sólo la primera es correcta`], ans: 0, exp: String.raw`El beneficio aplica solo a ventas a consumidores finales (diciembre 2025). La venta con tarjeta es contado para el cliente: boleta.` },
        { t: "t7", s: "t7.6", q: String.raw`En junio se vende con tarjeta de débito $ 10.000 + IVA y $ 7.200 IVA incluido, y con tarjeta de crédito $ 12.000 + IVA. El crédito fiscal por débito es de 4 puntos de IVA. El Crédito fiscal del mes es:`, opts: [String.raw`320`, String.raw`640`, String.raw`768`], ans: 1, exp: String.raw`Netos con débito: 10.000 + 6.000 = 16.000; 4% × 16.000 = 640. 320 usa 2 puntos; 768 lo calcula sobre los totales con IVA (19.200).` },
        { t: "t8", s: "t8.1", q: String.raw`Sueldo nominal $ 18.000; aporte obrero 20%; aporte patronal 10%; adelanto $ 2.000. El sueldo líquido a pagar es:`, opts: [String.raw`14.400`, String.raw`10.600`, String.raw`12.400`], ans: 2, exp: String.raw`18.000 − 3.600 − 2.000 = 12.400. 14.400 olvida el adelanto; 10.600 descuenta también el patronal, que paga la empresa.` },
        { t: "t8", s: "t8.1", q: String.raw`Nominal $ 25.000; adelanto $ 3.000; obrero 20%; patronal 10%; BSE 1%. El saldo de Sueldos a pagar luego de la liquidación es:`, opts: [String.raw`20.000`, String.raw`17.000`, String.raw`14.250`], ans: 1, exp: String.raw`25.000 − 5.000 − 3.000 = 17.000. 20.000 olvida el adelanto; 14.250 descuenta además patronal y BSE.` },
        { t: "t8", s: "t8.1", q: String.raw`El 15 del mes se entrega un adelanto de sueldo por transferencia bancaria. El asiento es:`, opts: [String.raw`Sueldos a Banco c/c`, String.raw`Banco c/c a Adelantos al personal`, String.raw`Adelantos al personal a Banco c/c`], ans: 2, exp: String.raw`El adelanto es un crédito contra el empleado (activo) hasta la liquidación. Sueldos se registra recién al liquidar.` },
        { t: "t8", s: "t8.1", q: String.raw`El aporte personal (obrero) al BPS es, para la empresa:`, opts: [String.raw`Una retención al empleado que la empresa debe al BPS`, String.raw`Una pérdida adicional al nominal`, String.raw`Un activo`], ans: 0, exp: String.raw`Sale del nominal del empleado; la empresa solo lo retiene y lo debe al BPS. No agrega gasto.` },
        { t: "t8", s: "t8.2", q: String.raw`Sueldo nominal $ 12.000; sueldo ficto patronal $ 30.000; aporte sobre ficto 25%. El aporte sobre ficto patronal es:`, opts: [String.raw`3.000`, String.raw`10.500`, String.raw`7.500`], ans: 2, exp: String.raw`30.000 × 25% = 7.500. 3.000 lo calcula sobre el nominal; 10.500 sobre nominal más ficto.` },
        { t: "t8", s: "t8.2", q: String.raw`Nominal $ 12.000; ficto $ 30.000; aporte obrero 20%, patronal 10%, ficto 25%, BSE 1%. El total debitado a Leyes sociales en el mes es:`, opts: [String.raw`8.820`, String.raw`11.220`, String.raw`8.700`], ans: 0, exp: String.raw`1.200 + 120 + 7.500 = 8.820. 11.220 suma el obrero (2.400), que va dentro de Sueldos; 8.700 olvida el BSE.` },
        { t: "t8", s: "t8.2", q: String.raw`El aporte sobre sueldo ficto patronal corresponde a:`, opts: [String.raw`Las horas extra de los empleados`, String.raw`Los dueños o socios que trabajan en la empresa`, String.raw`El seguro de accidentes de trabajo`], ans: 1, exp: String.raw`El ficto es el sueldo fijado por ley sobre el que aportan los titulares que trabajan. El seguro es el BSE.` },
        { t: "t8", s: "t8.2", q: String.raw`El seguro de accidentes de trabajo del mes se registra:`, opts: [String.raw`Leyes sociales a BSE`, String.raw`Sueldos a BSE`, String.raw`Leyes sociales a BPS`], ans: 0, exp: String.raw`Es una carga de la empresa (Leyes sociales) y se le debe al Banco de Seguros del Estado, no al BPS.` },
        { t: "t8", s: "t8.3", q: String.raw`Nominal $ 15.000; adelanto $ 2.000; aporte obrero 20%. El asiento de liquidación del nominal es:`, opts: [String.raw`Sueldos 15.000 a BPS 3.000 y Sueldos a pagar 12.000`, String.raw`Sueldos 15.000 a Adelantos al personal 2.000, BPS 3.000 y Sueldos a pagar 10.000`, String.raw`Sueldos 13.000 a BPS 3.000 y Sueldos a pagar 10.000`], ans: 1, exp: String.raw`Se cancela el adelanto dentro del asiento. La segunda deja el adelanto sin cancelar; la tercera registra un nominal incorrecto.` },
        { t: "t8", s: "t8.3", q: String.raw`Nominal $ 15.000; aporte patronal 10%; BSE 1%. El asiento de las cargas es:`, opts: [String.raw`Leyes sociales 1.650 a BPS 1.650`, String.raw`Sueldos 1.650 a BPS 1.500 y BSE 150`, String.raw`Leyes sociales 1.650 a BPS 1.500 y BSE 150`], ans: 2, exp: String.raw`Las cargas de la empresa van a Leyes sociales, y el BSE a su propia cuenta.` },
        { t: "t8", s: "t8.3", q: String.raw`El pago del sueldo líquido por transferencia se registra:`, opts: [String.raw`Sueldos a Banco c/c, s/ PLS`, String.raw`Sueldos a pagar a Banco c/c, s/ Recibo`, String.raw`Sueldos a pagar a Banco c/c, s/ PLS`], ans: 1, exp: String.raw`Se cancela el pasivo generado en la liquidación. La PLS respalda la liquidación, no el pago.` },
        { t: "t8", s: "t8.3", q: String.raw`El pago al BPS de los aportes del mes anterior es una variación:`, opts: [String.raw`Modificativa disminutiva`, String.raw`Modificativa aumentativa`, String.raw`Permutativa`], ans: 2, exp: String.raw`BPS a Banco c/c: baja un pasivo y baja un activo. La pérdida se registró al liquidar.` },
        { t: "t8", s: "t8.4", q: String.raw`Adelanto $ 1.500 por transferencia. Nominal $ 11.500; ficto $ 23.000; obrero 20%, patronal 10%, ficto 25%, BSE 1%. La empresa está al día con el mes anterior. El saldo de BPS es:`, opts: [String.raw`9.200`, String.raw`9.315`, String.raw`7.700`], ans: 0, exp: String.raw`2.300 + 1.150 + 5.750 = 9.200. 9.315 suma el BSE (115); 7.700 resta el adelanto, que no afecta al BPS.` },
        { t: "t8", s: "t8.4", q: String.raw`Nominal $ 15.000; ficto $ 20.000; obrero 20%, patronal 10%, ficto 25%, BSE 1%. La empresa adeuda el BPS del mes anterior por $ 6.000. El saldo de BPS al cierre del mes es:`, opts: [String.raw`9.500`, String.raw`15.650`, String.raw`15.500`], ans: 2, exp: String.raw`3.000 + 1.500 + 5.000 + 6.000 = 15.500. 9.500 olvida la deuda anterior; 15.650 suma el BSE (150).` },
        { t: "t8", s: "t8.4", q: String.raw`BPS tenía saldo $ 7.000 por marzo, que se paga el 15/4. Abril: nominal $ 20.000; ficto $ 20.000; obrero 20%, patronal 10%, ficto 25%, BSE 1%. Saldo de BPS al 30/4:`, opts: [String.raw`11.000`, String.raw`18.000`, String.raw`11.200`], ans: 0, exp: String.raw`4.000 + 2.000 + 5.000 = 11.000 (marzo ya se pagó). 18.000 no resta el pago; 11.200 suma el BSE.` },
        { t: "t8", s: "t8.4", q: String.raw`¿Cuál de estos hechos NO modifica el saldo de la cuenta BPS?`, opts: [String.raw`La liquidación del aporte patronal`, String.raw`El pago del sueldo líquido al empleado`, String.raw`El pago de los aportes del mes anterior`], ans: 1, exp: String.raw`El líquido se paga contra Sueldos a pagar. El patronal suma y el pago del mes anterior resta en BPS.` },
        { t: "t8", s: "t8.5", q: String.raw`Leyes sociales tiene saldo inicial deudor $ 2.500. Nominal $ 12.000; ficto $ 24.000; obrero 20%, patronal 10%, ficto 25%, BSE 1%. Saldo de Leyes sociales al cierre:`, opts: [String.raw`9.820`, String.raw`12.220`, String.raw`7.320`], ans: 0, exp: String.raw`2.500 + 1.200 + 120 + 6.000 = 9.820. 12.220 suma el obrero; 7.320 olvida el saldo inicial.` },
        { t: "t8", s: "t8.5", q: String.raw`Nominal $ 20.000; patronal 10%; BSE 1%; ficto $ 22.000 al 25%; obrero 20%. El costo total del personal para la empresa en el mes es:`, opts: [String.raw`31.700`, String.raw`27.700`, String.raw`22.200`], ans: 1, exp: String.raw`20.000 + 2.000 + 200 + 5.500 = 27.700. 31.700 suma el obrero, que ya está dentro del nominal; 22.200 olvida el ficto.` },
        { t: "t8", s: "t8.5", q: String.raw`Nominales $ 50.000; ficto $ 30.000; obrero 20%, patronal 10%, ficto 25%, BSE 1%. Sin adelantos; el líquido se pagó el último día del mes y los aportes se pagan el mes siguiente. Una vez registradas la liquidación y el pago:`, opts: [String.raw`La pérdida es 63.000 y las obligaciones 63.000`, String.raw`La pérdida es 50.000 y las obligaciones 23.000`, String.raw`La pérdida es 63.000 y las obligaciones 23.000`], ans: 2, exp: String.raw`Pérdida: 50.000 + 5.000 + 500 + 7.500 = 63.000. Obligaciones: BPS 22.500 + BSE 500 = 23.000 (el líquido ya se pagó). La tercera olvida Leyes sociales.` },
        { t: "t8", s: "t8.5", q: String.raw`Nominal $ 8.000; ficto $ 16.000; obrero 20%, patronal 10%, ficto 25%, BSE 2%. Leyes sociales no tenía saldo inicial. Su saldo al cierre es:`, opts: [String.raw`6.560`, String.raw`4.960`, String.raw`4.800`], ans: 1, exp: String.raw`800 + 160 + 4.000 = 4.960. 6.560 suma el obrero (1.600); 4.800 olvida el BSE.` },
    ],
};

export default deep;
