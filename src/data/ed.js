// Contenido de la materia "ed". Ver README para el formato.
const ed = {
    topics: [
        {
            id: "t1",
            title: "Qué es la Economía Descriptiva y el Sistema de Cuentas Nacionales",
            weight: "media",
            eli5: String.raw`<p>Imaginá que el país es un barrio enorme lleno de familias, almacenes, fábricas y una junta vecinal (el gobierno). Todos compran, venden, cobran sueldos, pagan impuestos y se prestan plata. La Economía Descriptiva es el "contador del barrio": no opina si las cosas están bien o mal, solo anota todo con reglas fijas para que cualquiera pueda leer el resultado.</p><p>El Sistema de Cuentas Nacionales (SCN) es el libro de reglas de ese contador. Dice quién cuenta como vecino del barrio (los <strong>residentes</strong>), en qué grupos se ordenan los vecinos (hogares, empresas, gobierno) y en qué orden se anotan las cosas: primero lo que se produce, después cómo se reparte el ingreso, después qué se gasta y qué se ahorra, y al final cómo se invierte y quién le presta a quién. Todo lo que pasa con gente de afuera del barrio se anota en la cuenta del <strong>Resto del Mundo</strong>.</p>`,
            explain: String.raw`<p>La Economía Descriptiva mide la economía con un marco contable coherente: el <strong>Sistema de Cuentas Nacionales</strong> (SCN 1993, actualizado en 2008), un manual de Naciones Unidas que usan casi todos los países. En Uruguay las cuentas nacionales las elabora el Banco Central (BCU).</p>
<h4>Residencia</h4>
<p>Una unidad es <strong>residente</strong> si su centro de interés económico está en el territorio económico del país (vive o produce ahí de forma estable, en general un año o más). No importa la nacionalidad: una empresa extranjera instalada en Uruguay es residente; un uruguayo que vive y trabaja en España no lo es. Todas las transacciones entre residentes y no residentes se registran contra el <strong>Resto del Mundo (RM)</strong>.</p>
<h4>Sectores institucionales</h4>
<ul>
<li><strong>Sociedades no financieras</strong>: producen bienes y servicios de mercado (una frigorífica, UTE, ANTEL, ANCAP: las empresas públicas son sociedades, no gobierno).</li>
<li><strong>Sociedades financieras</strong>: intermediación financiera y seguros (BROU, BCU, bancos privados, aseguradoras).</li>
<li><strong>Gobierno general</strong>: gobierno central, intendencias, BPS, entes que prestan servicios no de mercado (ministerios, escuelas públicas, hospitales públicos).</li>
<li><strong>Hogares</strong>: consumidores y también productores no constituidos en sociedad (el almacenero, el productor familiar, el profesional independiente).</li>
<li><strong>Instituciones sin fines de lucro que sirven a los hogares</strong> (ISFLSH): en el curso suelen ir junto con hogares.</li>
</ul>
<p>En los ejercicios de la prueba casi siempre aparecen cuatro "cuentas en T": <strong>Sociedades, Gobierno, Hogares y Resto del Mundo</strong>.</p>
<h4>Producción de mercado y no de mercado</h4>
<p>La producción <strong>de mercado</strong> se vende a precios económicamente significativos y su valor se mide por las ventas (más la variación de existencias). La producción <strong>no de mercado</strong> (típica del gobierno: seguridad, educación pública, salud pública) se entrega gratis o casi gratis; como no tiene precio, se valora <strong>por sus costos</strong>: consumo intermedio + remuneración de asalariados + consumo de capital fijo (sin excedente neto).</p>
<h4>Secuencia de cuentas</h4>
<table>
<tr><th>Cuenta</th><th>Saldo contable</th></tr>
<tr><td>Producción</td><td>Valor agregado bruto (VAB)</td></tr>
<tr><td>Generación del ingreso</td><td>Excedente de explotación bruto (EEB) / ingreso mixto</td></tr>
<tr><td>Asignación del ingreso primario</td><td>Saldo de ingresos primarios</td></tr>
<tr><td>Distribución secundaria del ingreso</td><td>Ingreso disponible bruto</td></tr>
<tr><td>Utilización del ingreso disponible</td><td>Ahorro bruto</td></tr>
<tr><td>Cuenta de capital</td><td>Préstamo neto (+) / endeudamiento neto (−)</td></tr>
<tr><td>Cuenta financiera</td><td>Préstamo neto (mismo número, visto por el lado financiero)</td></tr>
</table>
<p>Las primeras cinco son <strong>cuentas corrientes</strong>; las dos últimas son <strong>cuentas de acumulación</strong>. El saldo de cada cuenta es el primer renglón de la siguiente: así se encadenan. En cada cuenta en T, a la izquierda van los <strong>empleos</strong> (usos) y a la derecha los <strong>recursos</strong>; el saldo se anota del lado de los empleos para que cierre.</p>
<p>Además, para ver la economía por <strong>ramas de actividad</strong> (agro, industria, servicios) se usa el <strong>Cuadro de Oferta y Utilización (COU)</strong>, que es el tema central del primer módulo de la prueba.</p>`,
            recipe: String.raw`<ol><li>Ante una unidad, preguntate primero si es residente (centro de interés en el país) o va al Resto del Mundo.</li><li>Clasificala: ¿vende a precios de mercado? Es sociedad (aunque sea del Estado, como ANTEL, UTE, ANCAP, BROU). ¿Presta servicios gratuitos financiados con impuestos? Es gobierno (ministerios, intendencias, BPS). ¿Es una familia o un trabajador independiente? Es hogar.</li><li>Si es gobierno, recordá que su producción se mide por costos (CI + RA + CKF).</li><li>Ubicá la transacción en la secuencia de cuentas: ¿es producción, reparto del ingreso, gasto, inversión o financiamiento?</li></ol>`,
            pitfalls: String.raw`<ul><li>Creer que las empresas públicas (ANTEL, UTE, ANCAP, OSE, BROU) son "gobierno". Son <strong>sociedades</strong> (no financieras o financieras).</li><li>Confundir residencia con nacionalidad.</li><li>Pensar que la producción del gobierno tiene excedente: la producción no de mercado se valora por costos, el EEN es cero.</li><li>Olvidar que el productor independiente (ingreso mixto) está en el sector Hogares.</li></ul>`,
            example: {
                q: String.raw`¿Cuál de las siguientes erogaciones forma parte del gasto de consumo final del gobierno? a) Compra de camionetas por el Ministerio del Interior. b) Sueldos de los funcionarios de ANTEL. c) Combustible comprado por el BROU. d) Sueldos de los maestros de escuelas públicas.`,
                sol: String.raw`<p>a) Las camionetas son bienes de capital: van a <strong>FBKF</strong> del gobierno, no a consumo final.</p><p>b) ANTEL es una sociedad pública (produce para el mercado): sus sueldos son RA de una sociedad.</p><p>c) El BROU es una sociedad financiera: su combustible es consumo intermedio de esa sociedad.</p><p>d) <strong>Correcta.</strong> Los sueldos de maestros públicos son RA del gobierno, forman parte de su producción no de mercado (CI + RA + CKF), y esa producción, menos lo que el gobierno vende, es su gasto de consumo final.</p>`,
            },
        },
        {
            id: "t2",
            title: "El Cuadro de Oferta y Utilización (COU) paso a paso",
            weight: "alta",
            eli5: String.raw`<p>Pensá en una panadería y un molino. El molino (rama 1) produce harina: una parte se la vende a la panadería, otra la exporta y otra queda en el depósito. La panadería (rama 2) compra harina y luz, hace pan y lo vende a las familias. El COU es una planilla gigante donde cada <strong>fila</strong> te dice <em>a dónde fue</em> lo que produjo cada rama (a otras ramas como insumo, a las familias, al exterior, al depósito) y cada <strong>columna</strong> de rama te dice <em>qué usó</em> esa rama para producir (insumos) y cuánto valor le agregó (sueldos, desgaste de máquinas, impuestos, ganancia).</p><p>El truco mágico: lo que una rama produjo se puede contar de dos formas, por dónde fue (la fila) o por cuánto costó hacerlo más lo que ganó (la columna). Las dos sumas tienen que dar igual. Con esa regla completás cualquier casillero vacío.</p>`,
            explain: String.raw`<p>El COU (en el curso se lo presenta como una sola matriz simétrica "rama × rama") ordena toda la producción y el uso de bienes y servicios de la economía en un año.</p>
<h4>Cómo se lee</h4>
<table>
<tr><th></th><th>Rama 1</th><th>Rama 2</th><th>Gobierno</th><th>GCFH</th><th>GCFG</th><th>FBKF</th><th>VE</th><th>E</th><th>Total</th></tr>
<tr><td>Rama 1</td><td colspan="3">utilización intermedia</td><td colspan="5">utilización final</td><td>VBP rama 1</td></tr>
<tr><td>Rama 2</td><td colspan="3">(celda (i,j): producto de i usado por j)</td><td colspan="5"></td><td>VBP rama 2</td></tr>
<tr><td>Gobierno</td><td colspan="3"></td><td colspan="5"></td><td>VBP gob.</td></tr>
<tr><td>Importaciones</td><td colspan="3">insumos importados</td><td colspan="5">bienes finales importados</td><td>M</td></tr>
<tr><td>RA, CKF, Imp−S, EEN</td><td colspan="3">componentes del VAB de cada rama</td><td colspan="6"></td></tr>
</table>
<ul>
<li><strong>Filas de las ramas</strong>: en qué se usó lo que produjo esa rama. Su total es la <strong>producción (VBP)</strong> de la rama.</li>
<li><strong>Fila de importaciones</strong>: en qué se usaron los bienes importados. Su total son las importaciones totales M.</li>
<li><strong>Columnas de las ramas</strong>: arriba, sus insumos (nacionales de cada rama + importados) = <strong>consumo intermedio (CI)</strong>; abajo, los componentes del <strong>VAB</strong>: RA + CKF + (Imp−S) + EEN. Total de la columna = CI + VAB = VBP.</li>
<li><strong>Columnas de utilización final</strong>: GCFH, GCFG, FBKF, VE y E. Cada una suma lo nacional (de cada rama) y lo importado.</li>
</ul>
<h4>La regla de oro</h4>
<div class="box">Para cada rama: <strong>total de la fila = total de la columna = VBP</strong>. Es decir, lo que se usó de su producción = lo que costó producirla (CI) + el valor agregado.</div>
<h4>La rama Gobierno</h4>
<p>Su VBP se mide por costos: CI + RA + CKF (Imp−S y EEN en cero). Su fila muestra ventas (por ejemplo a hogares, en GCFH) y el resto va a <strong>GCFG</strong>. Entonces <strong>GCFG = producción del gobierno − ventas</strong>. Si en el COU falta el GCFG, se calcula con la columna del gobierno.</p>
<h4>Qué se puede sacar del COU</h4>
<ul>
<li>PIB por las tres ópticas (ver tema siguiente).</li>
<li>VBP total = suma de las producciones de las ramas (sin importaciones).</li>
<li>Oferta total = VBP total + M = utilización intermedia total + utilización final total.</li>
<li>RA <strong>pagada por los productores residentes</strong> (fila RA).</li>
</ul>
<p>Lo que el COU <strong>no</strong> muestra: sectores institucionales (no sabés cuánta FBKF hizo el gobierno como sector ni el ingreso primario de los hogares), RA recibida por residentes (depende de lo que se paga y cobra al exterior), rentas de la propiedad ni transferencias.</p>
<h4>Leer una celda</h4>
<p>Si Rama 1 es agropecuaria y Rama 2 industria, la celda (fila Rama 1, columna Rama 2) son bienes agropecuarios nacionales usados como insumo por la industria: trigo para el molino, leche para la láctea, ganado para el frigorífico. Un tractor nunca va en la parte intermedia (es FBKF), y algo importado nunca va en la fila de una rama nacional (va en la fila de importaciones).</p>`,
            recipe: String.raw`<ol><li>Anotá qué datos te dan y marcá los casilleros vacíos.</li><li>Si falta el total de una fila de rama, sumá la fila: VBP = utilización intermedia + utilización final de ese producto.</li><li>Pasá ese VBP al total de la columna de la misma rama. Calculá CI (suma de la parte de arriba de la columna, <strong>incluyendo importaciones</strong>) y VAB = VBP − CI.</li><li>Un componente del VAB que falte (típicamente EEN) = VAB − RA − CKF − (Imp−S).</li><li>Gobierno: VBP = CI + RA + CKF; GCFG = VBP − ventas del gobierno (lo que aparece en su fila en otras columnas).</li><li>Una celda de utilización final que falte (por ejemplo VE): total de la fila − todo lo demás de la fila. Puede dar negativa.</li><li>Chequeá: PIB = ΣVAB = GCFH + GCFG + FBKF + VE + E − M.</li></ol>`,
            pitfalls: String.raw`<ul><li>Calcular CI sin sumar los insumos <strong>importados</strong> de la columna.</li><li>Confundir la celda (i, j) con (j, i): "producido por la Rama 1 usado por la Rama 2" es fila 1, columna 2.</li><li>Sumar las importaciones al VBP total de la economía: el VBP es solo producción nacional.</li><li>Olvidar la parte importada al calcular GCFH o FBKF totales (la columna incluye la fila de importaciones).</li><li>"Insumos nacionales usados por el gobierno" excluye los importados.</li><li>VE puede ser negativa (se usó stock de años anteriores).</li><li>"Bienes producidos por la rama que quedaron sin usar" es la VE de esa rama.</li></ul>`,
            example: {
                q: String.raw`<p>COU (millones de $):</p><table><tr><th></th><th>R1</th><th>R2</th><th>Gob</th><th>GCFH</th><th>GCFG</th><th>FBKF</th><th>VE</th><th>E</th><th>Total</th></tr><tr><td>R1</td><td>1.000</td><td>4.000</td><td>0</td><td>2.000</td><td>0</td><td>0</td><td>500</td><td>3.500</td><td>?</td></tr><tr><td>R2</td><td>1.500</td><td>2.000</td><td>1.000</td><td>8.000</td><td>0</td><td>2.500</td><td>0</td><td>2.000</td><td>17.000</td></tr><tr><td>Gob</td><td>0</td><td>0</td><td>0</td><td>400</td><td>?</td><td>0</td><td>0</td><td>0</td><td>?</td></tr><tr><td>M</td><td>500</td><td>2.000</td><td>500</td><td>3.000</td><td>0</td><td>1.500</td><td>0</td><td>0</td><td>7.500</td></tr><tr><td>RA</td><td>3.000</td><td>4.000</td><td>3.500</td><td colspan="6"></td></tr><tr><td>CKF</td><td>1.000</td><td>2.000</td><td>500</td><td colspan="6"></td></tr><tr><td>Imp−S</td><td>500</td><td>1.500</td><td>0</td><td colspan="6"></td></tr><tr><td>EEN</td><td>?</td><td>1.500</td><td>0</td><td colspan="6"></td></tr></table><p>Hallá el VBP de R1, el EEN de R1, el GCFG y el PIB.</p>`,
                sol: String.raw`<p><strong>VBP R1</strong> (fila): 1.000 + 4.000 + 2.000 + 500 + 3.500 = <strong>11.000</strong>.</p><p><strong>EEN R1</strong>: CI R1 = 1.000 + 1.500 + 0 + 500 = 3.000. VAB R1 = 11.000 − 3.000 = 8.000. EEN = 8.000 − 3.000 − 1.000 − 500 = <strong>3.500</strong>.</p><p>Chequeo R2: CI = 4.000 + 2.000 + 0 + 2.000 = 8.000; VAB = 4.000 + 2.000 + 1.500 + 1.500 = 9.000; 8.000 + 9.000 = 17.000. Cierra.</p><p><strong>Gobierno</strong>: VBP = CI (0 + 1.000 + 0 + 500 = 1.500) + RA 3.500 + CKF 500 = 5.500. GCFG = 5.500 − 400 (ventas a hogares) = <strong>5.100</strong>.</p><p><strong>PIB</strong> = ΣVAB = 8.000 + 9.000 + 4.000 = 21.000. Por el gasto: GCFH = 2.000 + 8.000 + 400 + 3.000 = 13.400; GCFG 5.100; FBKF = 2.500 + 1.500 = 4.000; VE 500; E 5.500; M 7.500. 13.400 + 5.100 + 4.000 + 500 + 5.500 − 7.500 = <strong>21.000</strong>. Cierra.</p>`,
            },
        },
        {
            id: "t3",
            title: "Agregados macro: las tres ópticas del PIB e identidades",
            weight: "alta",
            eli5: String.raw`<p>Pensá en una familia que tiene una quinta y vende tomates. Podés medir cuánto "hizo" la familia en el año de tres maneras. Una: cuánto valor le agregó a lo que compró (vendió tomates por 100, gastó 30 en semillas y abono, agregó 70). Dos: a quién le fue ese valor (sueldo de un peón, desgaste del tractor, impuestos, ganancia de la familia). Tres: quién terminó comprando los tomates finales (familias que los comen, el exterior, lo que quedó guardado). Las tres cuentas dan lo mismo: 70.</p><p>El PIB es eso mismo para todo el país. Después, si le sumás lo que los uruguayos cobran de afuera y le restás lo que pagan afuera, llegás a cuánto ingreso quedó "para los de acá".</p>`,
            explain: String.raw`<h4>PIB por las tres ópticas</h4>
<ul>
<li><strong>Producción</strong>: PIB = Σ VAB = Σ (VBP − CI). Importante: es la suma de <strong>valores agregados</strong>, no de producciones (así no se cuenta dos veces el trigo que ya está dentro del pan).</li>
<li><strong>Ingreso</strong>: PIB = RA + CKF + (Imp−S) + EEN = RA + (Imp−S) + EEB, donde EEB = CKF + EEN.</li>
<li><strong>Gasto</strong>: PIB = GCFH + GCFG + FBKF + VE + E − M = GCF + FBK + (E − M).</li>
</ul>
<p>Otra forma equivalente: PIB = utilización final total − M = (VBP + M − CI) − M = VBP − CI.</p>
<h4>Del producto al ingreso nacional</h4>
<table>
<tr><th>Agregado</th><th>Fórmula</th></tr>
<tr><td>PIB</td><td>Σ VAB</td></tr>
<tr><td>RNFE</td><td>(RA recibida del RM − RA pagada al RM) + (rentas de la propiedad recibidas del RM − pagadas al RM)</td></tr>
<tr><td>INB</td><td>PIB + RNFE</td></tr>
<tr><td>TCN</td><td>transferencias corrientes recibidas del RM − pagadas al RM</td></tr>
<tr><td>INDB</td><td>INB + TCN</td></tr>
<tr><td>Ahorro nacional bruto (AB)</td><td>INDB − GCF (GCF = GCFH + GCFG)</td></tr>
<tr><td>Saldo corriente con el exterior</td><td>Desde la economía: (E − M) + RNFE + TCN = AB − FBK. <strong>En las cuentas de la cátedra se registra desde el Resto del Mundo, con el signo contrario:</strong> (M − E) − RNFE − TCN.</td></tr>
<tr><td>Préstamo neto de la economía</td><td>AB + transferencias de capital netas − FBK = saldo corriente + TK netas</td></tr>
</table>
<p>Los agregados "netos" restan el CKF: PIN = PIB − CKF, INN = INB − CKF, etc.</p>
<h4>Por qué cierran las identidades</h4>
<p>Si en el INDB reemplazás el PIB por el gasto: INDB = GCF + FBK + (E − M) + RNFE + TCN. Restando GCF: AB = FBK + [(E − M) + RNFE + TCN]. O sea: el ahorro nacional financia la inversión interna y el resto es lo que le prestamos al exterior (saldo corriente positivo) o, si es negativo, lo que el exterior nos presta. Esta es la <strong>identidad ahorro-inversión-saldo externo</strong>.</p>
<h4>Relación con el Resto del Mundo</h4>
<p>Las transacciones <strong>corrientes</strong> con el RM son: exportaciones e importaciones de bienes y servicios, remuneración de factores (RA y rentas de la propiedad) y transferencias corrientes. Las transferencias de capital y los movimientos financieros no son corrientes.</p>
<h4>Dato de coyuntura</h4>
<p>Según el BCU, el PIB de Uruguay creció 4,9% en 2022, 3,1% en 2024 y 1,8% en 2025 (en volumen, respecto al año anterior). En la prueba ya apareció una pregunta de este tipo.</p>`,
            recipe: String.raw`<ol><li>Leé bien qué agregado piden: ¿PIB, INB, INDB, ahorro, saldo corriente?</li><li>Óptica del gasto: sumá GCF de hogares <strong>y</strong> gobierno, FBKF <strong>y</strong> VE, E, y restá M.</li><li>Para INB, calculá RNFE separando lo que se recibe del RM (suma) y lo que se paga al RM (resta), tanto de RA como de intereses, dividendos, etc.</li><li>Para INDB sumá TCN (solo transferencias <strong>corrientes</strong>: remesas, donaciones de bienes de consumo o en efectivo para gasto corriente, cuotas a organismos).</li><li>Ahorro = INDB − GCF. Saldo corriente = ahorro − FBK. Préstamo neto = saldo corriente + TK netas.</li></ol>`,
            pitfalls: String.raw`<ul><li>Poner FBKF donde va FBK (se olvida la VE) o GCFH donde va GCF total.</li><li>Sumar VBP en lugar de VAB para el PIB.</li><li>Olvidar que los intereses pagados a no residentes restan en RNFE (son renta de la propiedad).</li><li>Meter una donación de equipamiento (capital) en las TCN.</li><li>Confundir el signo: si la economía tiene préstamo neto negativo, el RM tiene préstamo neto positivo del mismo monto.</li></ul>`,
            example: {
                q: String.raw`Datos: PIB 50.000; RA recibida del exterior 300; RA pagada a no residentes 100; intereses y dividendos pagados al exterior 2.200; recibidos del exterior 400; remesas recibidas 800; donación de medicamentos recibida del exterior 200; donación de ambulancias recibida 500; GCF 41.000; FBK 9.000. Hallá RNFE, INB, INDB, ahorro nacional bruto, saldo corriente y préstamo neto de la economía.`,
                sol: String.raw`<p>RNFE = (300 − 100) + (400 − 2.200) = 200 − 1.800 = <strong>−1.600</strong>.</p><p>INB = 50.000 − 1.600 = <strong>48.400</strong>.</p><p>TCN = 800 + 200 = 1.000 (las ambulancias son transferencia de capital, no entran). INDB = 48.400 + 1.000 = <strong>49.400</strong>.</p><p>AB = 49.400 − 41.000 = <strong>8.400</strong>.</p><p>Saldo corriente = AB − FBK = 8.400 − 9.000 = <strong>−600</strong>.</p><p>Préstamo neto = −600 + 500 (TK netas) = <strong>−100</strong>: la economía se endeudó en 100 con el RM.</p>`,
            },
        },
        {
            id: "t4",
            title: "Cuentas de producción y de generación del ingreso",
            weight: "media",
            eli5: String.raw`<p>Una heladería vende helados por 1.000 en el año. Para hacerlos compró leche, azúcar, conos y luz por 400: eso se "gastó" dentro del proceso (consumo intermedio). Lo que la heladería creó de verdad son los 600 restantes: el valor agregado.</p><p>La cuenta de producción es esa resta. La cuenta de generación del ingreso responde: ¿a quién le tocan esos 600? Una parte a los empleados (sueldos y aportes), otra al Estado (impuestos a la producción, menos lo que el Estado le subsidia), otra se "aparta" para reponer la máquina de helados que se va gastando (consumo de capital fijo), y lo que sobra es la ganancia del dueño (excedente neto).</p>`,
            explain: String.raw`<h4>Cuenta de producción</h4>
<table><tr><th>Empleos</th><th>Recursos</th></tr><tr><td>CI<br>VAB (saldo)</td><td>VBP</td></tr></table>
<p><strong>VAB = VBP − CI</strong>. El VBP de mercado se valora por las ventas más la variación de existencias de productos propios; el del gobierno (no de mercado) por sus costos (CI + RA + CKF).</p>
<p>El <strong>consumo intermedio</strong> son bienes y servicios que se usan y se agotan en el proceso productivo dentro del período (materias primas, energía, fletes, publicidad). Los bienes durables que se usan más de un año (máquinas, vehículos, edificios, software) no son CI sino <strong>FBKF</strong>; su desgaste anual es el <strong>CKF</strong>.</p>
<h4>Cuenta de generación del ingreso</h4>
<table><tr><th>Empleos</th><th>Recursos</th></tr><tr><td>RA<br>Impuestos sobre la producción − subvenciones<br>EEB / ingreso mixto (saldo)</td><td>VAB</td></tr></table>
<p>EEB = VAB − RA − (Imp−S) = CKF + EEN. Cuando el productor es un hogar (trabajador independiente) el saldo se llama <strong>ingreso mixto</strong>, porque mezcla remuneración del trabajo del dueño y ganancia.</p>
<h4>Remuneración de asalariados</h4>
<p>RA = <strong>sueldos y salarios</strong> (nominales, en dinero o en especie) + <strong>contribuciones sociales de los empleadores</strong> (aportes patronales). El salario nominal ya incluye el aporte personal del trabajador, que le es descontado. Entonces:</p>
<ul>
<li>Salario nominal = RA − aportes patronales.</li>
<li>Salario líquido (lo que cobra) = salario nominal − aportes personales = RA − patronales − personales.</li>
</ul>
<p>Los aportes personales y patronales, sumados, son las <strong>contribuciones sociales</strong> que después los hogares pagan al gobierno (BPS) en la distribución secundaria.</p>
<h4>Impuestos sobre la producción</h4>
<p>Son los que recaen sobre producir, importar o vender (IVA, IMESI, aranceles, contribución inmobiliaria sobre locales productivos). No confundir con los impuestos <strong>sobre el ingreso</strong> (IRPF, IRAE), que van en la distribución secundaria. Las subvenciones se restan: por eso se habla de impuestos netos (Imp−S).</p>
<h4>Contribución de una rama al PIB</h4>
<p>Se mide por su <strong>VAB</strong>, no por su producción: si la industria produce 33.000 pero compra 16.000 de insumos, su contribución al PIB es 17.000.</p>`,
            recipe: String.raw`<ol><li>VAB = VBP − CI. Si no tenés VBP, sumá la fila de la rama en el COU.</li><li>EEB = VAB − RA − (Imp−S); EEN = EEB − CKF.</li><li>Salarios nominales = RA − aportes patronales. Líquido = nominal − aportes personales.</li><li>Gobierno: EEN = 0, EEB = CKF.</li><li>Ante un gasto, preguntate: ¿se agota en el año (CI) o dura más (FBKF)?</li></ol>`,
            pitfalls: String.raw`<ul><li>Restar los aportes personales al calcular el salario nominal (solo se restan los patronales de la RA).</li><li>Poner IRPF o IRAE como impuesto sobre la producción.</li><li>Tratar la leche que compra una láctea como FBKF: es CI.</li><li>Medir la contribución de una rama por su VBP.</li></ul>`,
            example: {
                q: String.raw`La industria tuvo RA por 40.000. Los aportes personales fueron 6.000 y los patronales 8.000. ¿Cuánto fueron los salarios nominales y el salario líquido? Si su VAB fue 70.000, CKF 9.000 e Imp−S 6.000, ¿cuánto fue el EEN?`,
                sol: String.raw`<p>Salarios nominales = RA − patronales = 40.000 − 8.000 = <strong>32.000</strong> (incluyen los 6.000 de aporte personal).</p><p>Salario líquido = 32.000 − 6.000 = <strong>26.000</strong>.</p><p>EEB = 70.000 − 40.000 − 6.000 = 24.000. EEN = 24.000 − 9.000 = <strong>15.000</strong>.</p>`,
            },
        },
        {
            id: "t5",
            title: "Asignación y distribución del ingreso (primario y secundario)",
            weight: "alta",
            eli5: String.raw`<p>Pensá en una familia. El ingreso <strong>primario</strong> es lo que ganan por participar en producir: el sueldo del padre, la ganancia del kiosco de la madre y los intereses del plazo fijo, menos los intereses que pagan por la tarjeta. Después viene la <strong>distribución secundaria</strong>: plata que va y viene sin que nadie entregue nada a cambio. Pagan IRPF y aportes al BPS (sale plata), cobran la jubilación de la abuela y una remesa del tío que vive en España (entra plata). Lo que queda después de todo eso es su <strong>ingreso disponible</strong>: la plata que realmente pueden gastar o ahorrar.</p><p>El país hace lo mismo: el PIB es el ingreso generado adentro; se le suma lo que cobramos del exterior y se resta lo que pagamos (INB), y después se suman las transferencias netas que llegan del exterior (INDB).</p>`,
            explain: String.raw`<h4>Cuenta de asignación del ingreso primario</h4>
<p>Registra los ingresos que reciben los sectores por su participación en la producción o por ser dueños de activos.</p>
<table><tr><th>Empleos</th><th>Recursos</th></tr><tr><td>Rentas de la propiedad pagadas<br>Saldo de ingresos primarios</td><td>EEB / ingreso mixto<br>RA (solo hogares)<br>Imp−S (solo gobierno)<br>Rentas de la propiedad recibidas</td></tr></table>
<ul>
<li><strong>Hogares</strong>: ingreso mixto (EEB de sus empresas) + RA recibida (la pagada por productores residentes, menos la que va a no residentes, más la que cobran residentes en el exterior) + rentas recibidas − rentas pagadas.</li>
<li><strong>Gobierno</strong>: su EEB (= CKF) + Imp−S + rentas recibidas − rentas pagadas (intereses de la deuda pública).</li>
<li><strong>Sociedades</strong>: EEB + rentas recibidas − rentas pagadas (intereses, dividendos).</li>
</ul>
<p><strong>Rentas de la propiedad</strong>: intereses, dividendos, utilidades reinvertidas de inversión extranjera directa, arrendamiento de tierras y recursos del subsuelo. <strong>Los intereses pagados a no residentes son renta de la propiedad</strong> y restan en la RNFE.</p>
<div class="box">Σ saldos de ingresos primarios de los sectores residentes = <strong>INB</strong> = PIB + RNFE.</div>
<h4>Cuenta de distribución secundaria del ingreso</h4>
<p>Registra las <strong>transferencias corrientes</strong> (sin contrapartida):</p>
<ul>
<li><strong>Impuestos corrientes sobre el ingreso y la riqueza</strong> (IRPF, IRAE, IP): pagan hogares y sociedades, recibe el gobierno.</li>
<li><strong>Contribuciones sociales</strong> (aportes personales + patronales): pagan los hogares, recibe el gobierno (seguridad social).</li>
<li><strong>Prestaciones sociales</strong> (jubilaciones, pensiones, asignaciones familiares, seguro de desempleo): paga el gobierno, reciben los hogares.</li>
<li><strong>Otras transferencias corrientes</strong>: remesas de emigrantes, donaciones corrientes (en efectivo o de bienes de consumo como alimentos, medicamentos, libros), cuotas a organismos internacionales, primas y siniestros de seguros.</li>
</ul>
<table><tr><th>Empleos</th><th>Recursos</th></tr><tr><td>Transferencias corrientes pagadas<br>Ingreso disponible bruto (saldo)</td><td>Saldo de ingresos primarios<br>Transferencias corrientes recibidas</td></tr></table>
<div class="box">Σ ingresos disponibles de los sectores residentes = <strong>INDB</strong> = INB + TCN.</div>
<p>Las transferencias entre residentes se cancelan al sumar (lo que paga un sector lo cobra otro); solo cambian el total las que se hacen con el RM.</p>
<h4>Transferencias de capital: afuera</h4>
<p>Una donación de <strong>bienes de capital</strong> (ambulancias, computadoras para escuelas, maquinaria) o de dinero para financiar una inversión es transferencia <strong>de capital</strong>: no entra en el ingreso disponible, va a la cuenta de capital. Los impuestos a la herencia también son de capital.</p>
<h4>La cuenta en T del Resto del Mundo</h4>
<p>Se arma desde el punto de vista del RM: sus recursos son lo que los residentes le pagan (M, RA y rentas pagadas a no residentes, transferencias enviadas) y sus empleos lo que el RM paga a residentes (E, RA y rentas recibidas por residentes, transferencias recibidas). Su saldo es el saldo corriente de la economía con el signo cambiado.</p>`,
            recipe: String.raw`<ol><li>Hacé una tabla con columnas Sociedades, Gobierno, Hogares, RM y anotá cada transacción: quién paga y quién recibe.</li><li>Si falta un dato de rentas de la propiedad (por ejemplo lo que recibe el RM), usá que el total pagado = total recibido considerando los cuatro sectores.</li><li>Ingreso primario de cada sector: EEB (+ RA si es hogar, + Imp−S si es gobierno) + rentas recibidas − rentas pagadas.</li><li>Chequeo: Σ ingresos primarios = PIB + RNFE.</li><li>Ingreso disponible: ingreso primario + transferencias corrientes recibidas − pagadas. Ojo con dejar afuera las transferencias de capital.</li><li>Chequeo: Σ ingresos disponibles = INB + TCN.</li></ol>`,
            pitfalls: String.raw`<ul><li>Darle a los hogares la RA pagada por productores residentes sin ajustar por lo que va y viene del exterior.</li><li>Olvidar el EEB (CKF) del gobierno o sus Imp−S en el ingreso primario.</li><li>Poner los impuestos sobre el ingreso en el ingreso primario (van en la secundaria).</li><li>Tratar las contribuciones sociales como ingreso de los hogares: los hogares las <strong>pagan</strong>.</li><li>Sumar las donaciones de equipamiento a las TCN.</li><li>Olvidar que las sociedades también pagan impuestos sobre el ingreso (IRAE).</li></ul>`,
            example: {
                q: String.raw`Gobierno: CKF 800; Imp−S 5.000; intereses pagados 1.500 (600 a no residentes); intereses recibidos 200; impuestos sobre el ingreso recibidos 3.000; contribuciones sociales 2.500; prestaciones sociales pagadas 4.000; donación en efectivo recibida del exterior para gasto corriente 300; donación de computadoras para escuelas recibida del exterior 700. Hallá el ingreso primario y el ingreso disponible del gobierno.`,
                sol: String.raw`<p>Ingreso primario = EEB 800 + Imp−S 5.000 + 200 − 1.500 = <strong>4.500</strong>. (Da igual a quién se pagan los intereses: los 1.500 salen del gobierno.)</p><p>Ingreso disponible = 4.500 + 3.000 + 2.500 − 4.000 + 300 = <strong>6.300</strong>. Las computadoras (700) son transferencia de capital: no entran.</p>`,
            },
        },
        {
            id: "t6",
            title: "Utilización del ingreso y ahorro",
            weight: "alta",
            eli5: String.raw`<p>Tu ingreso disponible es la plata que te quedó en el bolsillo después de impuestos, aportes, jubilaciones y remesas. Con eso hacés dos cosas: gastar en consumo (comida, ropa, Netflix) o no gastarlo. Lo que no gastás es tu <strong>ahorro</strong>. Así de simple: ahorro = ingreso disponible − consumo.</p><p>Una empresa no "consume" en ese sentido (no come ni va al cine; lo que compra para producir ya se contó como insumo). Entonces todo su ingreso disponible es ahorro. Y el gobierno "consume" los servicios que presta gratis (escuelas, policía): si gasta más de lo que le queda disponible, su ahorro es negativo.</p>`,
            explain: String.raw`<h4>Cuenta de utilización del ingreso disponible</h4>
<table><tr><th>Empleos</th><th>Recursos</th></tr><tr><td>Gasto de consumo final<br>Ahorro bruto (saldo)</td><td>Ingreso disponible bruto</td></tr></table>
<p><strong>Ahorro bruto = ingreso disponible bruto − gasto de consumo final</strong>. Por sector:</p>
<ul>
<li><strong>Hogares</strong>: ahorro = ID hogares − GCFH.</li>
<li><strong>Gobierno</strong>: ahorro = ID gobierno − GCFG. Si es negativo se habla de déficit corriente.</li>
<li><strong>Sociedades</strong>: <strong>no tienen consumo final</strong>, entonces su ahorro bruto = su ingreso disponible bruto (en general lo que retienen de utilidades después de pagar intereses, dividendos e IRAE).</li>
<li><strong>Total economía</strong>: ahorro nacional bruto = INDB − GCF = Σ ahorros sectoriales.</li>
</ul>
<h4>El gasto de consumo final del gobierno</h4>
<p>GCFG = producción no de mercado del gobierno − ventas (tasas, entradas, servicios cobrados). La producción se mide por costos: CI + RA + CKF. Por eso, por ejemplo, la energía que una intendencia compra a Brasil termina dentro del GCFG: es CI del gobierno, forma parte del costo de su producción y esa producción es lo que el gobierno "consume" en nombre de la sociedad. En cambio, la compra de patrulleros es FBKF del gobierno, y los sueldos de ANTEL o el combustible del BROU son de sociedades.</p>
<h4>Bruto y neto</h4>
<p>Si al ahorro bruto le restás el CKF obtenés el ahorro neto. En el curso se trabaja casi siempre en términos brutos.</p>
<h4>Lectura</h4>
<p>El ahorro es el puente entre las cuentas corrientes y las de acumulación: la cuenta de capital arranca con el ahorro bruto como recurso y lo compara con la inversión (FBK). Un sector con mucho ahorro y poca inversión le presta al resto; uno con poco ahorro y mucha inversión se endeuda.</p>`,
            recipe: String.raw`<ol><li>Conseguí el ingreso disponible de cada sector (tema anterior).</li><li>Restá GCFH a hogares y GCFG a gobierno. A sociedades no les restes nada.</li><li>Ahorro nacional = suma de los tres o, directo, INDB − GCFH − GCFG.</li><li>Chequeo: ahorro nacional − FBK = (E − M) + RNFE + TCN.</li></ol>`,
            pitfalls: String.raw`<ul><li>Restarle un "consumo" a las sociedades.</li><li>Usar la producción del gobierno en vez de GCFG (hay que restar las ventas).</li><li>Confundir ahorro con préstamo neto: el ahorro es antes de invertir.</li><li>Olvidar que el ahorro de un sector puede ser negativo.</li></ul>`,
            example: {
                q: String.raw`Ingresos disponibles: Sociedades 7.000; Gobierno 5.000; Hogares 30.000. GCFH 27.500; producción del gobierno 8.000, de la cual vendió 500. Hallá el ahorro de cada sector y el ahorro nacional bruto.`,
                sol: String.raw`<p>GCFG = 8.000 − 500 = 7.500.</p><p>Ahorro sociedades = <strong>7.000</strong> (no consumen). Ahorro gobierno = 5.000 − 7.500 = <strong>−2.500</strong>. Ahorro hogares = 30.000 − 27.500 = <strong>2.500</strong>.</p><p>Ahorro nacional bruto = 7.000 − 2.500 + 2.500 = <strong>7.000</strong> = INDB (42.000) − GCF (35.000).</p>`,
            },
        },
        {
            id: "t7",
            title: "Cuentas de acumulación: capital y financiera",
            weight: "alta",
            eli5: String.raw`<p>Una familia ahorró 100 en el año. Con esa plata quiere construir un cuarto nuevo que cuesta 150. Le faltan 50: se los presta el banco. Esa familia tuvo un <strong>préstamo neto negativo</strong> de −50 (necesitó financiamiento). Su vecina ahorró 100 e invirtió solo 30: le sobraron 70, que dejó en un plazo fijo; tiene <strong>préstamo neto positivo</strong> de +70 (le presta a otros a través del banco).</p><p>La <strong>cuenta de capital</strong> mira el lado "real": ahorro, inversión y regalos de capital. La <strong>cuenta financiera</strong> mira el lado "plata": qué activos financieros compraste (depósitos, bonos, acciones, préstamos que diste) y qué deudas nuevas asumiste. Las dos cuentas tienen que dar el mismo número final. Y como toda deuda de uno es activo de otro, si el país entero se endeuda, el Resto del Mundo es quien presta.</p>`,
            explain: String.raw`<h4>Cuenta de capital</h4>
<table><tr><th>Variaciones de activos</th><th>Variaciones de pasivos y patrimonio neto</th></tr><tr><td>FBKF<br>VE<br>Préstamo neto (+) / endeudamiento neto (−) (saldo)</td><td>Ahorro bruto<br>Transferencias de capital por cobrar<br>(−) Transferencias de capital por pagar</td></tr></table>
<p><strong>Préstamo neto (PRN) = ahorro bruto + transferencias de capital netas − FBK</strong> (FBK = FBKF + VE; en rigor también la adquisición neta de activos no producidos, que en el curso suele ser cero).</p>
<p>Transferencias de capital: donaciones de bienes de capital o de dinero para invertir, ayudas a la inversión, impuestos a la herencia. Una donación de ambulancias del exterior al gobierno es transferencia de capital recibida por el gobierno (y las ambulancias, que son importaciones, forman parte de su FBKF).</p>
<h4>Cuenta financiera</h4>
<table><tr><th>Adquisición neta de activos financieros</th><th>Emisión neta de pasivos</th></tr><tr><td>Dinero legal y depósitos<br>Valores distintos de acciones<br>Préstamos y créditos comerciales<br>Acciones y otras participaciones de capital</td><td>Dinero legal y depósitos<br>Valores distintos de acciones<br>Préstamos y créditos comerciales<br>Acciones y otras participaciones de capital</td></tr></table>
<div class="box"><strong>Préstamo neto = adquisición neta de activos financieros − emisión neta de pasivos</strong>, y tiene que ser igual al PRN de la cuenta de capital.</div>
<ul>
<li><strong>Dinero legal y depósitos</strong>: los billetes son pasivo del Banco Central; los depósitos, pasivo de los bancos (sociedades financieras). Para quien los tiene, son activos.</li>
<li><strong>Valores distintos de acciones</strong>: bonos, letras, obligaciones negociables. Cuando el gobierno coloca bonos, <strong>emite pasivos</strong>.</li>
<li><strong>Préstamos y créditos comerciales</strong>: el que presta adquiere un activo; el que pide prestado emite un pasivo.</li>
<li><strong>Acciones y otras participaciones</strong>: pasivo de la sociedad que las emite, activo de quien las compra (incluye la inversión extranjera directa).</li>
</ul>
<h4>Reglas que salen solas</h4>
<ul>
<li>Por <strong>instrumento</strong>: todo lo que alguien adquiere lo emitió alguien (sumando los cuatro sectores, incluido el RM): Σ activos = Σ pasivos. Sirve para completar huecos.</li>
<li>Por <strong>sector</strong>: activos − pasivos = PRN de ese sector.</li>
<li>Σ PRN de todos los sectores incluido el RM = 0. Por eso <strong>PRN de la economía = −PRN del RM</strong>.</li>
<li>Si un sector tiene PRN negativo, <strong>necesariamente</strong> su emisión neta de pasivos supera su adquisición neta de activos financieros (no quiere decir que no haya adquirido activos).</li>
</ul>
<h4>Identidad ahorro-inversión-saldo externo</h4>
<p>Para toda la economía: AB + TK netas − FBK = PRN = saldo corriente + TK netas. Con TK netas = 0: <strong>AB = FBK + PRN</strong>. Si FBK es 6.556 y el PRN de la economía fue −1.000, el ahorro nacional bruto fue 5.556.</p>
<p>Las cuentas de acumulación describen, entonces, la <strong>utilización del ahorro bruto en acumulación (inversión) y cómo se financia</strong> esa acumulación.</p>`,
            recipe: String.raw`<ol><li>Cuenta de capital de cada sector: PRN = ahorro + TK recibidas − TK pagadas − FBKF − VE.</li><li>Cuenta financiera: armá la tabla instrumentos × sectores, con dos columnas por sector (activos y pasivos).</li><li>Hueco en un instrumento: usá la fila (Σ activos = Σ pasivos de ese instrumento).</li><li>Hueco en un sector: usá la columna (activos − pasivos = PRN del sector, que sacás de la cuenta de capital).</li><li>PRN del RM = −(suma de los PRN de los residentes).</li><li>Chequeo: saldo corriente (E − M + RNFE + TCN) + TK netas = PRN de la economía.</li></ol>`,
            pitfalls: String.raw`<ul><li>Invertir el signo: PRN = activos − pasivos, no al revés.</li><li>Olvidar las transferencias de capital al pasar de ahorro a PRN.</li><li>Olvidar la VE en la FBK del sector.</li><li>Decir que un sector con PRN negativo "no adquirió activos": solo significa que emitió más pasivos que los activos que adquirió.</li><li>Pensar que el PRN del RM tiene el mismo signo que el de la economía.</li></ul>`,
            example: {
                q: String.raw`Hogares: ahorro 4.000, FBKF (viviendas) 2.500, sin transferencias de capital. En la cuenta financiera adquirieron depósitos por 1.800, bonos por X y tomaron préstamos por 600. Hallá el PRN de los hogares y X.`,
                sol: String.raw`<p>PRN = 4.000 − 2.500 = <strong>1.500</strong>.</p><p>Cuenta financiera: (1.800 + X) − 600 = 1.500, entonces X = <strong>300</strong>.</p>`,
            },
        },
    ],
    flashcards: [
        {
            t: "t1",
            q: String.raw`¿Qué criterio define si una unidad es residente?`,
            a: String.raw`Tener su centro de interés económico en el territorio económico del país (en general, actuar ahí un año o más). No importa la nacionalidad.`,
        },
        {
            t: "t1",
            q: String.raw`¿Cuáles son los sectores institucionales que aparecen en los ejercicios de la prueba?`,
            a: String.raw`Sociedades (no financieras y financieras), Gobierno general, Hogares (incluye ISFLSH) y Resto del Mundo.`,
        },
        {
            t: "t1",
            q: String.raw`¿ANTEL, UTE, ANCAP y el BROU son gobierno?`,
            a: String.raw`No. Producen para el mercado: son sociedades públicas (el BROU, sociedad financiera). Sus sueldos, compras e inversiones no son del gobierno general.`,
        },
        {
            t: "t1",
            q: String.raw`¿Cómo se valora la producción no de mercado del gobierno?`,
            a: String.raw`Por sus costos: CI + RA + CKF. No tiene excedente neto de explotación.`,
        },
        {
            t: "t1",
            q: String.raw`¿En qué sector está un productor familiar o un profesional independiente?`,
            a: String.raw`En Hogares. El saldo de su cuenta de generación del ingreso se llama ingreso mixto.`,
        },
        {
            t: "t1",
            q: String.raw`Nombrá en orden las cuentas corrientes de un sector y su saldo.`,
            a: String.raw`Producción (VAB) → generación del ingreso (EEB / ingreso mixto) → asignación del ingreso primario (saldo de ingresos primarios) → distribución secundaria (ingreso disponible) → utilización del ingreso (ahorro).`,
        },
        {
            t: "t1",
            q: String.raw`¿Cuáles son las cuentas de acumulación y su saldo?`,
            a: String.raw`Cuenta de capital y cuenta financiera. Ambas tienen como saldo el préstamo neto (+) o endeudamiento neto (−).`,
        },
        {
            t: "t1",
            q: String.raw`En una cuenta en T del SCN, ¿qué va a cada lado?`,
            a: String.raw`Izquierda: empleos (usos). Derecha: recursos. El saldo se anota en los empleos para que la cuenta cierre, y pasa como recurso a la cuenta siguiente.`,
        },
        {
            t: "t2",
            q: String.raw`En el COU, ¿qué muestra la fila de una rama?`,
            a: String.raw`En qué se usó su producción: como insumo de cada rama (utilización intermedia) y en utilización final (GCFH, GCFG, FBKF, VE, E). Su total es el VBP de la rama.`,
        },
        {
            t: "t2",
            q: String.raw`En el COU, ¿qué muestra la columna de una rama?`,
            a: String.raw`Arriba, sus insumos nacionales e importados (CI). Abajo, los componentes de su VAB: RA, CKF, Imp−S, EEN. Total de columna = CI + VAB = VBP.`,
        },
        { t: "t2", q: String.raw`Regla de oro del COU para completar huecos`, a: String.raw`Para cada rama, total de la fila = total de la columna = VBP.` },
        {
            t: "t2",
            q: String.raw`¿Qué es la celda (fila Rama 1, columna Rama 2)?`,
            a: String.raw`El valor de bienes producidos por la Rama 1 (nacionales) que la Rama 2 usó como insumo.`,
        },
        {
            t: "t2",
            q: String.raw`¿Cómo se calcula el GCFG a partir del COU?`,
            a: String.raw`Producción del gobierno (CI + RA + CKF, de su columna) menos lo que el gobierno vende (lo que aparece en su fila en otras columnas, por ejemplo en GCFH).`,
        },
        {
            t: "t2",
            q: String.raw`¿Qué representa la VE de la fila de una rama?`,
            a: String.raw`Bienes producidos por esa rama que quedaron en existencias sin usar en el año. Si es negativa, se usó stock de años anteriores.`,
        },
        {
            t: "t2",
            q: String.raw`¿El VBP total de la economía incluye las importaciones?`,
            a: String.raw`No. Es la suma de las producciones de las ramas residentes. Oferta total = VBP + M.`,
        },
        {
            t: "t2",
            q: String.raw`¿Qué información NO da el COU?`,
            a: String.raw`Nada por sector institucional (FBKF del gobierno como sector, ingresos primarios por sector), ni RA percibida por residentes, ni rentas de la propiedad, ni transferencias.`,
        },
        { t: "t2", q: String.raw`¿Qué RA muestra el COU?`, a: String.raw`La RA pagada por los productores residentes (por rama).` },
        {
            t: "t2",
            q: String.raw`¿Los insumos importados forman parte del CI de la rama?`,
            a: String.raw`Sí. CI = insumos nacionales de todas las ramas + insumos importados (la fila de importaciones en esa columna).`,
        },
        {
            t: "t2",
            q: String.raw`¿Dónde va un tractor comprado por el agro en el COU?`,
            a: String.raw`En la columna FBKF (fila de la rama que lo produjo o fila de importaciones si es importado). Nunca en la utilización intermedia.`,
        },
        {
            t: "t2",
            q: String.raw`Si el agro es la Rama 1, ¿qué puede ser un valor en la columna de la Rama 1 y fila de la Rama 1?`,
            a: String.raw`Productos agropecuarios nacionales usados como insumo por el propio agro: semillas, terneros de invernada, forraje producido en el país.`,
        },
        { t: "t3", q: String.raw`PIB por la óptica de la producción`, a: String.raw`PIB = Σ VAB = Σ (VBP − CI).` },
        { t: "t3", q: String.raw`PIB por la óptica del ingreso`, a: String.raw`PIB = RA + CKF + (Imp−S) + EEN = RA + (Imp−S) + EEB.` },
        { t: "t3", q: String.raw`PIB por la óptica del gasto`, a: String.raw`PIB = GCFH + GCFG + FBKF + VE + E − M = GCF + FBK + (E − M).` },
        {
            t: "t3",
            q: String.raw`¿Qué es la RNFE?`,
            a: String.raw`Remuneración neta de factores del exterior: RA neta recibida del RM + rentas de la propiedad netas recibidas del RM (intereses, dividendos, utilidades).`,
        },
        { t: "t3", q: String.raw`INB = ?`, a: String.raw`INB = PIB + RNFE.` },
        { t: "t3", q: String.raw`INDB = ?`, a: String.raw`INDB = INB + TCN (transferencias corrientes netas del exterior).` },
        { t: "t3", q: String.raw`Ahorro nacional bruto = ?`, a: String.raw`AB = INDB − GCF (hogares + gobierno).` },
        {
            t: "t3",
            q: String.raw`Saldo corriente con el exterior: ¿con qué signo lo pide la cátedra?`,
            a: String.raw`Visto desde la economía: (E − M) + RNFE + TCN = AB − FBK. Pero en las cuentas de la cátedra (Asignación y Distribución, Utilización) el renglón «Saldo corriente con el exterior» se registra desde el Resto del Mundo: (M − E) − RNFE − TCN = FBK − AB. En los parciales usaron este signo (2019, 2023, 2024): si la economía tiene déficit, el número sale positivo.`,
        },
        {
            t: "t3",
            q: String.raw`Préstamo neto de la economía`,
            a: String.raw`PRN = AB + TK netas − FBK = saldo corriente + TK netas = −PRN del Resto del Mundo.`,
        },
        {
            t: "t3",
            q: String.raw`¿Cómo se pasa de un agregado bruto a uno neto?`,
            a: String.raw`Restando el consumo de capital fijo: PIN = PIB − CKF; INN = INB − CKF.`,
        },
        {
            t: "t3",
            q: String.raw`¿Qué transacciones corrientes hay con el RM?`,
            a: String.raw`Exportaciones e importaciones de bienes y servicios, remuneración de factores (RA y rentas de la propiedad) y transferencias corrientes. No las de capital ni las financieras.`,
        },
        {
            t: "t3",
            q: String.raw`Coyuntura: ¿cuánto creció el PIB de Uruguay en 2022?`,
            a: String.raw`4,9% respecto a 2021 (BCU). Ya apareció como pregunta de la prueba.`,
        },
        {
            t: "t3",
            q: String.raw`Coyuntura: ¿cuánto creció el PIB de Uruguay en 2024?`,
            a: String.raw`3,1% respecto a 2023, según el informe de Cuentas Nacionales del BCU publicado en marzo de 2025 (impulsado por la recuperación del agro tras la sequía, la celulosa y la energía).`,
        },
        {
            t: "t3",
            q: String.raw`Coyuntura: ¿cuánto creció el PIB de Uruguay en 2025?`,
            a: String.raw`1,8% respecto a 2024, según el BCU (dato publicado el 25 de marzo de 2026), por debajo de la proyección oficial.`,
        },
        {
            t: "t3",
            q: String.raw`PIB a partir de la utilización final`,
            a: String.raw`PIB = utilización final total − M (porque utilización final = VBP + M − CI).`,
        },
        { t: "t4", q: String.raw`VAB = ?`, a: String.raw`VAB = VBP − CI = RA + CKF + (Imp−S) + EEN.` },
        {
            t: "t4",
            q: String.raw`¿Qué incluye la RA?`,
            a: String.raw`Sueldos y salarios nominales (que ya incluyen el aporte personal) + contribuciones sociales de los empleadores (aportes patronales).`,
        },
        {
            t: "t4",
            q: String.raw`RA 40.000, aportes personales 6.000, patronales 8.000. ¿Salarios nominales?`,
            a: String.raw`40.000 − 8.000 = 32.000. Solo se restan los patronales.`,
        },
        { t: "t4", q: String.raw`Salario líquido = ?`, a: String.raw`Salario nominal − aportes personales = RA − aportes patronales − aportes personales.` },
        {
            t: "t4",
            q: String.raw`¿Qué son las contribuciones sociales?`,
            a: String.raw`Los aportes personales + patronales a la seguridad social. En la distribución secundaria las pagan los hogares y las recibe el gobierno.`,
        },
        {
            t: "t4",
            q: String.raw`¿Consumo intermedio o FBKF? Leche fresca comprada por una láctea.`,
            a: String.raw`Consumo intermedio: se agota en el proceso productivo del año.`,
        },
        {
            t: "t4",
            q: String.raw`¿Consumo intermedio o FBKF? Servidores importados por una empresa de software.`,
            a: String.raw`FBKF: son bienes de capital que se usan varios años.`,
        },
        {
            t: "t4",
            q: String.raw`¿El IRPF y el IRAE son impuestos sobre la producción?`,
            a: String.raw`No, son impuestos corrientes sobre el ingreso: van en la distribución secundaria. Sobre la producción son IVA, IMESI, aranceles, etc.`,
        },
        { t: "t4", q: String.raw`¿Cómo se mide la contribución de una rama al PIB?`, a: String.raw`Por su VAB.` },
        {
            t: "t5",
            q: String.raw`Recursos de la cuenta de asignación del ingreso primario de los hogares`,
            a: String.raw`Ingreso mixto / EEB, RA recibida y rentas de la propiedad recibidas. (Empleos: rentas de la propiedad pagadas.)`,
        },
        {
            t: "t5",
            q: String.raw`Recursos de la cuenta de asignación del ingreso primario del gobierno`,
            a: String.raw`EEB (= CKF), impuestos netos de subvenciones sobre la producción e importación, rentas de la propiedad recibidas.`,
        },
        {
            t: "t5",
            q: String.raw`¿Qué son las rentas de la propiedad?`,
            a: String.raw`Intereses, dividendos, utilidades reinvertidas de IED y arrendamientos de tierras y recursos naturales.`,
        },
        {
            t: "t5",
            q: String.raw`Los intereses de deuda pública pagados a no residentes, ¿dónde van?`,
            a: String.raw`Son renta de la propiedad pagada por el gobierno: restan en su ingreso primario y en la RNFE del país.`,
        },
        { t: "t5", q: String.raw`Σ saldos de ingresos primarios de los sectores residentes = ?`, a: String.raw`INB = PIB + RNFE.` },
        {
            t: "t5",
            q: String.raw`Tipos de transferencias corrientes de la distribución secundaria`,
            a: String.raw`Impuestos corrientes sobre el ingreso y la riqueza, contribuciones sociales, prestaciones sociales y otras transferencias corrientes (remesas, donaciones corrientes, cuotas a organismos internacionales).`,
        },
        {
            t: "t5",
            q: String.raw`Donación de medicamentos del exterior al gobierno: ¿corriente o de capital?`,
            a: String.raw`Corriente: son bienes de consumo. Entra en TCN y en el ingreso disponible del gobierno.`,
        },
        {
            t: "t5",
            q: String.raw`Donación de ambulancias del exterior al gobierno: ¿corriente o de capital?`,
            a: String.raw`De capital: son bienes de capital. No entra en TCN ni en el ingreso disponible; va a la cuenta de capital.`,
        },
        { t: "t5", q: String.raw`Σ ingresos disponibles de los sectores residentes = ?`, a: String.raw`INDB = INB + TCN.` },
        {
            t: "t5",
            q: String.raw`¿Quién paga y quién recibe las prestaciones sociales?`,
            a: String.raw`Las paga el gobierno (jubilaciones, pensiones, asignaciones) y las reciben los hogares.`,
        },
        {
            t: "t5",
            q: String.raw`Si falta cuánto recibió de rentas de la propiedad el RM, ¿cómo lo calculás?`,
            a: String.raw`Total de rentas pagadas por todos (incluido el RM) = total recibido por todos. Despejás lo del RM.`,
        },
        { t: "t6", q: String.raw`Ahorro bruto de un sector`, a: String.raw`Ingreso disponible bruto − gasto de consumo final.` },
        { t: "t6", q: String.raw`Ahorro bruto de las sociedades`, a: String.raw`Igual a su ingreso disponible bruto: las sociedades no tienen consumo final.` },
        { t: "t6", q: String.raw`GCFG = ?`, a: String.raw`Producción del gobierno (CI + RA + CKF) − ventas del gobierno.` },
        {
            t: "t6",
            q: String.raw`¿La energía que una intendencia compra a Brasil termina en el GCFG?`,
            a: String.raw`Sí: es importación usada como CI del gobierno; forma parte del costo de su producción no de mercado, que (menos ventas) es su GCF.`,
        },
        { t: "t7", q: String.raw`Préstamo neto en la cuenta de capital`, a: String.raw`PRN = ahorro bruto + TK recibidas − TK pagadas − FBKF − VE.` },
        {
            t: "t7",
            q: String.raw`Préstamo neto en la cuenta financiera`,
            a: String.raw`PRN = adquisición neta de activos financieros − emisión neta de pasivos.`,
        },
        {
            t: "t7",
            q: String.raw`Instrumentos financieros que usa el curso`,
            a: String.raw`Dinero legal y depósitos; valores distintos de acciones; préstamos y créditos comerciales; acciones y otras participaciones de capital.`,
        },
        {
            t: "t7",
            q: String.raw`PRN de la economía y PRN del RM`,
            a: String.raw`Son iguales en valor absoluto y de signo contrario: la suma de los PRN de todos los sectores, incluido el RM, es cero.`,
        },
        {
            t: "t7",
            q: String.raw`Si las Sociedades tienen PRN negativo, ¿qué se deduce necesariamente?`,
            a: String.raw`Que su emisión neta de pasivos superó su adquisición neta de activos financieros.`,
        },
        {
            t: "t7",
            q: String.raw`FBK 6.556, TK netas 0, PRN de la economía −1.000. ¿Ahorro nacional bruto?`,
            a: String.raw`AB = FBK + PRN = 6.556 − 1.000 = 5.556.`,
        },
        {
            t: "t7",
            q: String.raw`¿Qué describen las cuentas de acumulación?`,
            a: String.raw`La utilización del ahorro bruto en acumulación (inversión) y su financiación.`,
        },
        {
            t: "t7",
            q: String.raw`Regla para completar un hueco en la cuenta financiera por instrumento`,
            a: String.raw`Para cada instrumento, la suma de adquisiciones netas de activos de todos los sectores (incluido el RM) es igual a la suma de emisiones netas de pasivos.`,
        },
        {
            t: "t7",
            q: String.raw`El gobierno coloca bonos en el exterior. ¿Cómo se registra?`,
            a: String.raw`Gobierno: emisión neta de pasivos en valores distintos de acciones. RM: adquisición neta de activos en ese instrumento.`,
        },
    ],
    questions: [
        {
            t: "t1",
            q: String.raw`Una empresa de capitales finlandeses que produce celulosa en Uruguay desde hace diez años es, para el SCN uruguayo:`,
            opts: [
                String.raw`Parte del Resto del Mundo, porque sus dueños no son uruguayos`,
                String.raw`Una unidad residente del sector Sociedades no financieras`,
                String.raw`Parte del Gobierno, porque firmó un convenio con el Estado`,
                String.raw`Una unidad no residente del sector Sociedades financieras`,
            ],
            ans: 1,
            exp: String.raw`La residencia depende del centro de interés económico, no de la nacionalidad de los dueños: produce en Uruguay de forma estable, entonces es residente. Produce bienes para el mercado y no hace intermediación financiera: sociedad no financiera.`,
        },
        {
            t: "t1",
            q: String.raw`¿Cuál de las siguientes unidades pertenece al sector Gobierno general?`,
            opts: [String.raw`ANCAP`, String.raw`El BROU`, String.raw`OSE`, String.raw`El Banco de Previsión Social (BPS)`],
            ans: 3,
            exp: String.raw`El BPS administra la seguridad social: es gobierno general. ANCAP y OSE son sociedades públicas no financieras (venden a precios de mercado) y el BROU es una sociedad financiera.`,
        },
        {
            t: "t1",
            q: String.raw`La producción de los servicios de enseñanza pública se valora:`,
            opts: [
                String.raw`Por la suma de sus costos: consumo intermedio, remuneración de asalariados y consumo de capital fijo`,
                String.raw`Por el precio que pagarían los hogares en un colegio privado`,
                String.raw`Por la remuneración de asalariados únicamente`,
                String.raw`Por sus costos más un excedente neto de explotación normal`,
            ],
            ans: 0,
            exp: String.raw`Es producción no de mercado: no hay precio, se valora por costos (CI + RA + CKF) y no se le imputa excedente neto.`,
        },
        {
            t: "t1",
            q: String.raw`El saldo contable de la cuenta de distribución secundaria del ingreso es:`,
            opts: [
                String.raw`El saldo de ingresos primarios`,
                String.raw`El ahorro bruto`,
                String.raw`El ingreso disponible bruto`,
                String.raw`El excedente de explotación bruto`,
            ],
            ans: 2,
            exp: String.raw`Secuencia: producción → VAB; generación → EEB; asignación primaria → saldo de ingresos primarios; distribución secundaria → ingreso disponible; utilización → ahorro.`,
        },
        {
            t: "t1",
            q: String.raw`Un uruguayo que vive hace cinco años en Madrid y envía dinero a su familia en Montevideo es, para las cuentas de Uruguay:`,
            opts: [
                String.raw`Residente, porque tiene nacionalidad uruguaya`,
                String.raw`Residente, porque manda dinero al país`,
                String.raw`No residente: sus envíos son transferencias corrientes del Resto del Mundo a los hogares`,
                String.raw`No residente: sus envíos son transferencias de capital`,
            ],
            ans: 2,
            exp: String.raw`Su centro de interés está en España: es no residente. Las remesas son transferencias corrientes (otras transferencias corrientes) del RM a los hogares residentes.`,
        },
        {
            t: "t1",
            q: String.raw`Las cuentas corrientes de un sector institucional son:`,
            opts: [
                String.raw`Producción, generación del ingreso, asignación del ingreso primario, distribución secundaria y utilización del ingreso`,
                String.raw`Cuenta de capital y cuenta financiera`,
                String.raw`Producción, cuenta de capital y cuenta financiera`,
                String.raw`Solo la cuenta de producción y la de utilización del ingreso`,
            ],
            ans: 0,
            exp: String.raw`Las de capital y financiera son cuentas de acumulación.`,
        },
        {
            t: "t2",
            q: String.raw`En el COU, el total de la fila de una rama de actividad es igual a:`,
            opts: [
                String.raw`El valor agregado bruto de esa rama`,
                String.raw`La utilización final de esa rama`,
                String.raw`El consumo intermedio de esa rama`,
                String.raw`El valor bruto de producción de esa rama`,
            ],
            ans: 3,
            exp: String.raw`La fila muestra en qué se usó todo lo producido por la rama (intermedio + final), su total es el VBP, que también es el total de la columna (CI + VAB).`,
        },
        {
            t: "t2",
            q: String.raw`En un COU donde la Rama 1 es agropecuaria, el valor 16.000 registrado en la columna de la actividad agropecuaria y fila de la Rama 1 puede corresponder a compras de:`,
            opts: [
                String.raw`Fertilizantes importados`,
                String.raw`Semillas de soja producidas en el país para sembrar`,
                String.raw`Dos cosechadoras`,
                String.raw`Trigo comprado por un molino`,
            ],
            ans: 1,
            exp: String.raw`Fila Rama 1 = producto agropecuario nacional; columna agro = usado como insumo por el agro. Los fertilizantes importados van en la fila de importaciones; las cosechadoras son FBKF; el trigo del molino es insumo de la industria (columna Rama 2).`,
        },
        {
            t: "t2",
            q: String.raw`A partir del COU es posible conocer:`,
            opts: [
                String.raw`La remuneración de asalariados pagada por los productores residentes`,
                String.raw`La FBKF de cada sector institucional`,
                String.raw`Los ingresos primarios de cada sector institucional`,
                String.raw`La remuneración de asalariados percibida por los residentes`,
            ],
            ans: 0,
            exp: String.raw`El COU está organizado por ramas, no por sectores; muestra la RA que paga cada rama. La RA que perciben los residentes requiere conocer la RA pagada a y recibida del exterior.`,
        },
        {
            t: "t2",
            q: String.raw`En el COU, el consumo intermedio de una rama se obtiene:`,
            opts: [
                String.raw`Sumando solo los insumos nacionales de su columna`,
                String.raw`Sumando su fila en la parte de utilización intermedia`,
                String.raw`Sumando los insumos nacionales de todas las ramas y los insumos importados de su columna`,
                String.raw`Restando el VAB del total de su fila y de las importaciones`,
            ],
            ans: 2,
            exp: String.raw`El CI incluye lo importado. La fila en la parte intermedia muestra a quién le vendió insumos la rama, no lo que compró.`,
        },
        {
            t: "t2",
            q: String.raw`En un COU, la VE de la fila de la Rama 2 es negativa. Eso significa que:`,
            opts: [
                String.raw`Hay un error: la VE nunca puede ser negativa`,
                String.raw`En el año se usaron bienes de la Rama 2 que estaban en existencias de períodos anteriores`,
                String.raw`La Rama 2 tuvo pérdidas`,
                String.raw`La Rama 2 importó más de lo que exportó`,
            ],
            ans: 1,
            exp: String.raw`La VE es la diferencia entre entradas y salidas de existencias. Si es negativa, se desacumuló stock. No tiene que ver con pérdidas ni con comercio exterior.`,
        },
        {
            t: "t2",
            q: String.raw`En un COU, la producción del gobierno fue 10.000 y en su fila aparecen ventas a los hogares por 800. El gasto de consumo final del gobierno es:`,
            opts: [String.raw`10.000`, String.raw`10.800`, String.raw`800`, String.raw`9.200`],
            ans: 3,
            exp: String.raw`GCFG = producción no de mercado − ventas = 10.000 − 800 = 9.200.`,
        },
        {
            t: "t2",
            q: String.raw`El valor total de la producción de la economía se obtiene del COU como:`,
            opts: [
                String.raw`La suma de los totales de todas las filas, incluida la de importaciones`,
                String.raw`La suma de los VAB de las ramas`,
                String.raw`La utilización final total menos las importaciones`,
                String.raw`La suma de los totales de las filas de las ramas residentes`,
            ],
            ans: 3,
            exp: String.raw`VBP total = Σ producción de las ramas. Con importaciones sería oferta total; ΣVAB y utilización final − M son el PIB.`,
        },
        {
            t: "t2",
            q: String.raw`En un COU, la oferta total de bienes y servicios es igual a:`,
            opts: [
                String.raw`El PIB más las importaciones`,
                String.raw`La utilización intermedia total más la utilización final total`,
                String.raw`El VBP total menos el consumo intermedio`,
                String.raw`La utilización final total`,
            ],
            ans: 1,
            exp: String.raw`Oferta total = VBP + M = utilización intermedia + utilización final. PIB + M es la oferta final, que es igual a la utilización final.`,
        },
        {
            t: "t3",
            q: String.raw`El PIB es igual a:`,
            opts: [
                String.raw`GCF + FBKF + saldo de la balanza comercial`,
                String.raw`GCF de hogares + FBK + E − M`,
                String.raw`GCFH + GCFG + FBKF + VE + E − M`,
                String.raw`VBP total − importaciones`,
            ],
            ans: 2,
            exp: String.raw`La segunda omite la VE (FBKF en vez de FBK), la tercera omite el consumo del gobierno, la cuarta resta M al VBP cuando habría que restar el CI.`,
        },
        {
            t: "t3",
            q: String.raw`La contribución de la actividad industrial al PIB se mide por:`,
            opts: [
                String.raw`El valor agregado bruto de la industria`,
                String.raw`El valor bruto de producción de la industria`,
                String.raw`Las ventas de la industria a los hogares`,
                String.raw`La remuneración de asalariados de la industria`,
            ],
            ans: 0,
            exp: String.raw`El PIB es la suma de los VAB; la contribución de una rama es su VAB.`,
        },
        {
            t: "t3",
            q: String.raw`Si el PIB es 40.000 y la RNFE es −1.500, el INB es:`,
            opts: [String.raw`41.500`, String.raw`38.500`, String.raw`40.000`, String.raw`1.500`],
            ans: 1,
            exp: String.raw`INB = PIB + RNFE = 40.000 − 1.500 = 38.500.`,
        },
        {
            t: "t3",
            q: String.raw`¿Cuál de las siguientes afecta la RNFE de Uruguay?`,
            opts: [
                String.raw`Remesas enviadas por emigrantes uruguayos`,
                String.raw`Una donación de ambulancias recibida del exterior`,
                String.raw`Importaciones de petróleo`,
                String.raw`Intereses de deuda pública pagados a tenedores no residentes`,
            ],
            ans: 3,
            exp: String.raw`La RNFE incluye RA y rentas de la propiedad con el RM. Las remesas son transferencias corrientes (TCN), la donación de ambulancias es transferencia de capital y el petróleo es importación.`,
        },
        {
            t: "t3",
            q: String.raw`En una economía abierta, las transacciones corrientes con el Resto del Mundo comprenden:`,
            opts: [
                String.raw`Exportaciones e importaciones de bienes y servicios, remuneración de factores y transferencias corrientes`,
                String.raw`Solo exportaciones e importaciones de bienes`,
                String.raw`Exportaciones, importaciones, remuneración de factores y transferencias de capital`,
                String.raw`Remuneración de factores, transferencias corrientes y préstamos`,
            ],
            ans: 0,
            exp: String.raw`Las transferencias de capital van a la cuenta de capital y los préstamos a la cuenta financiera: no son corrientes.`,
        },
        {
            t: "t3",
            q: String.raw`El saldo de la cuenta corriente de la economía con el exterior es igual a:`,
            opts: [String.raw`Ahorro nacional bruto − FBKF`, String.raw`INDB − FBK`, String.raw`Ahorro nacional bruto − FBK`, String.raw`E − M`],
            ans: 2,
            exp: String.raw`De AB = FBK + (E − M) + RNFE + TCN, el saldo corriente visto desde la economía es AB − FBK. E − M es solo el saldo comercial. Ojo: cuando la prueba pide el renglón «Saldo corriente con el exterior» de las cuentas por sector, lo registra desde el Resto del Mundo, con el signo contrario (FBK − AB).`,
        },
        {
            t: "t3",
            q: String.raw`Si el ingreso nacional disponible bruto es 50.000 y el gasto de consumo final total es 43.000, el ahorro nacional bruto es:`,
            opts: [String.raw`93.000`, String.raw`43.000`, String.raw`7.000`, String.raw`No se puede saber sin la FBK`],
            ans: 2,
            exp: String.raw`AB = INDB − GCF = 50.000 − 43.000 = 7.000.`,
        },
        {
            t: "t3",
            q: String.raw`Según el BCU, el PIB de Uruguay en 2025, respecto al año anterior:`,
            opts: [String.raw`Creció 1,8%`, String.raw`Creció 4,9%`, String.raw`Cayó 1,8%`, String.raw`Creció 3,1%`],
            ans: 0,
            exp: String.raw`El BCU informó en marzo de 2026 un crecimiento de 1,8% en 2025. El 4,9% corresponde a 2022 y el 3,1% a 2024.`,
        },
        {
            t: "t3",
            q: String.raw`El excedente de explotación bruto es igual a:`,
            opts: [String.raw`VAB − CI`, String.raw`RA + EEN`, String.raw`VBP − RA`, String.raw`Consumo de capital fijo + excedente de explotación neto`],
            ans: 3,
            exp: String.raw`EEB = VAB − RA − (Imp−S) = CKF + EEN.`,
        },
        {
            t: "t4",
            q: String.raw`Si los aportes personales y patronales fueron 6.000 y 8.000 respectivamente y la RA fue 40.000, los salarios nominales percibidos fueron:`,
            opts: [String.raw`26.000`, String.raw`32.000`, String.raw`34.000`, String.raw`40.000`],
            ans: 1,
            exp: String.raw`RA = salarios nominales + aportes patronales, entonces salarios nominales = 40.000 − 8.000 = 32.000. Los 26.000 serían el salario líquido (también descontando el aporte personal).`,
        },
        {
            t: "t4",
            q: String.raw`¿Cuál de los siguientes NO forma parte de la FBKF?`,
            opts: [
                String.raw`Leche fresca utilizada para elaborar productos lácteos`,
                String.raw`Vehículos importados para transporte de mercancías`,
                String.raw`Maquinaria agrícola importada`,
                String.raw`Servidores informáticos importados`,
            ],
            ans: 0,
            exp: String.raw`La leche se agota en el proceso productivo del año: es consumo intermedio. Los otros son bienes de capital (que sean importados no importa: son FBKF igual).`,
        },
        {
            t: "t4",
            q: String.raw`¿Cuál es un impuesto sobre la producción e importación?`,
            opts: [String.raw`El IRPF`, String.raw`El IRAE`, String.raw`El IVA`, String.raw`El impuesto a las herencias`],
            ans: 2,
            exp: String.raw`El IVA recae sobre la venta de bienes y servicios. IRPF e IRAE son impuestos corrientes sobre el ingreso; el impuesto a las herencias es transferencia de capital.`,
        },
        {
            t: "t4",
            q: String.raw`El VAB de una rama es igual a:`,
            opts: [
                String.raw`VBP + CI`,
                String.raw`RA + CKF + impuestos netos de subvenciones sobre la producción + EEN`,
                String.raw`RA + EEN`,
                String.raw`VBP − RA − CKF`,
            ],
            ans: 1,
            exp: String.raw`Es la definición del VAB desde la óptica del ingreso (cuenta de generación del ingreso).`,
        },
        {
            t: "t4",
            q: String.raw`Un productor rural independiente, sin empleados, vende su producción por 900 y compra insumos por 300. Su CKF es 100 y paga 50 de impuestos sobre la producción. Su ingreso mixto bruto es:`,
            opts: [String.raw`600`, String.raw`450`, String.raw`500`, String.raw`550`],
            ans: 3,
            exp: String.raw`VAB = 900 − 300 = 600. Ingreso mixto bruto = 600 − 0 (RA) − 50 = 550. (El neto sería 450.)`,
        },
        {
            t: "t5",
            q: String.raw`En la cuenta de asignación del ingreso primario del gobierno, figura como recurso:`,
            opts: [
                String.raw`Impuestos sobre el ingreso (IRPF, IRAE)`,
                String.raw`Contribuciones sociales`,
                String.raw`Remuneración de asalariados`,
                String.raw`Impuestos netos de subvenciones sobre la producción e importaciones`,
            ],
            ans: 3,
            exp: String.raw`Imp−S son ingreso primario del gobierno. IRPF, IRAE y contribuciones son transferencias de la distribución secundaria; la RA es recurso de los hogares.`,
        },
        {
            t: "t5",
            q: String.raw`Una donación de computadoras para escuelas públicas recibida por el gobierno desde un organismo internacional es:`,
            opts: [
                String.raw`Una transferencia corriente recibida por el gobierno`,
                String.raw`Una transferencia de capital recibida por el gobierno`,
                String.raw`Una exportación`,
                String.raw`Una renta de la propiedad`,
            ],
            ans: 1,
            exp: String.raw`Las computadoras son bienes de capital (duran varios años): la donación es transferencia de capital y no entra en el ingreso disponible.`,
        },
        {
            t: "t5",
            q: String.raw`Una donación de medicamentos recibida por el Ministerio de Salud desde el exterior es:`,
            opts: [
                String.raw`Una transferencia de capital`,
                String.raw`Parte de la RNFE`,
                String.raw`Una transferencia corriente que aumenta el ingreso disponible del gobierno`,
                String.raw`Una renta de la propiedad del gobierno`,
            ],
            ans: 2,
            exp: String.raw`Los medicamentos son bienes de consumo corriente: su donación es transferencia corriente (entra en TCN).`,
        },
        {
            t: "t5",
            q: String.raw`La suma de los saldos de ingresos primarios de todos los sectores residentes es:`,
            opts: [
                String.raw`El ingreso nacional bruto`,
                String.raw`El PIB`,
                String.raw`El ingreso nacional disponible bruto`,
                String.raw`El ahorro nacional bruto`,
            ],
            ans: 0,
            exp: String.raw`Σ ingresos primarios = PIB + RNFE = INB.`,
        },
        {
            t: "t5",
            q: String.raw`Las contribuciones sociales, en la cuenta de distribución secundaria del ingreso:`,
            opts: [
                String.raw`Son un recurso de los hogares y un empleo del gobierno`,
                String.raw`Son un empleo de los hogares y un recurso del gobierno`,
                String.raw`Son un empleo de las sociedades y un recurso de los hogares`,
                String.raw`No aparecen: ya están en la RA`,
            ],
            ans: 1,
            exp: String.raw`Los aportes (personales y patronales) forman parte de la RA que reciben los hogares, y en la secundaria los hogares los pagan al gobierno. Las prestaciones sociales son las que van del gobierno a los hogares.`,
        },
        {
            t: "t5",
            q: String.raw`El IRAE pagado por las sociedades:`,
            opts: [
                String.raw`Reduce el VAB de las sociedades`,
                String.raw`Es un impuesto sobre la producción`,
                String.raw`Reduce el INDB del país`,
                String.raw`Reduce el ingreso disponible de las sociedades y aumenta el del gobierno`,
            ],
            ans: 3,
            exp: String.raw`Es un impuesto corriente sobre el ingreso: transferencia entre residentes en la distribución secundaria. No cambia el INDB total.`,
        },
        {
            t: "t5",
            q: String.raw`Un aumento de las remesas que los emigrantes envían a sus familias en Uruguay, con todo lo demás constante:`,
            opts: [
                String.raw`Aumenta el INDB pero no el PIB ni el INB`,
                String.raw`Aumenta el PIB`,
                String.raw`Aumenta el INB pero no el INDB`,
                String.raw`No afecta ningún agregado`,
            ],
            ans: 0,
            exp: String.raw`Las remesas son transferencias corrientes del RM: entran en TCN, que es lo que separa el INB del INDB.`,
        },
        {
            t: "t6",
            q: String.raw`El ahorro bruto de las sociedades es igual a:`,
            opts: [
                String.raw`Su ingreso disponible bruto menos su consumo intermedio`,
                String.raw`Su EEB`,
                String.raw`Su ingreso disponible bruto`,
                String.raw`Su ingreso disponible menos la FBKF`,
            ],
            ans: 2,
            exp: String.raw`Las sociedades no tienen gasto de consumo final: todo su ingreso disponible es ahorro.`,
        },
        {
            t: "t6",
            q: String.raw`¿Cuál de las siguientes erogaciones computa (directa o indirectamente) en el gasto de consumo final del gobierno?`,
            opts: [
                String.raw`La compra de vehículos por el Ministerio del Interior`,
                String.raw`Las remuneraciones de los trabajadores de ANTEL`,
                String.raw`La compra de energía eléctrica a Brasil por parte de una intendencia`,
                String.raw`El combustible comprado por el BROU`,
            ],
            ans: 2,
            exp: String.raw`La energía es CI de la intendencia (gobierno), integra el costo de su producción no de mercado y esa producción (menos ventas) es su GCF. Los vehículos son FBKF; ANTEL y el BROU son sociedades.`,
        },
        {
            t: "t6",
            q: String.raw`Si el ingreso disponible del gobierno es 6.000, su producción es 10.000 y vende servicios por 1.000, su ahorro es:`,
            opts: [String.raw`−3.000`, String.raw`−4.000`, String.raw`5.000`, String.raw`−9.000`],
            ans: 0,
            exp: String.raw`GCFG = 10.000 − 1.000 = 9.000. Ahorro = 6.000 − 9.000 = −3.000.`,
        },
        {
            t: "t6",
            q: String.raw`El ahorro nacional bruto es igual a:`,
            opts: [
                String.raw`El INB menos el gasto de consumo final`,
                String.raw`El PIB menos el gasto de consumo final`,
                String.raw`La FBK`,
                String.raw`La suma de los ahorros brutos de sociedades, gobierno y hogares`,
            ],
            ans: 3,
            exp: String.raw`AB = INDB − GCF = Σ ahorros sectoriales. Con INB o PIB faltarían las TCN y/o la RNFE; la FBK solo coincide si el saldo corriente es cero.`,
        },
        {
            t: "t7",
            q: String.raw`Cuando las Sociedades tienen préstamo neto negativo:`,
            opts: [
                String.raw`Necesariamente no adquirieron activos financieros`,
                String.raw`Necesariamente su emisión neta de pasivos supera su adquisición neta de activos financieros`,
                String.raw`Necesariamente su ahorro es negativo`,
                String.raw`El Resto del Mundo necesariamente tiene préstamo neto negativo`,
            ],
            ans: 1,
            exp: String.raw`PRN = activos − pasivos. Negativo implica pasivos > activos, pero pudieron adquirir activos. Su ahorro puede ser positivo y menor que su inversión. El signo del RM depende de toda la economía.`,
        },
        {
            t: "t7",
            q: String.raw`Si la FBK es 6.556, las transferencias de capital netas son 0 y el préstamo neto de la economía es −1.200, el ahorro nacional bruto es:`,
            opts: [String.raw`5.356`, String.raw`7.756`, String.raw`6.556`, String.raw`1.200`],
            ans: 0,
            exp: String.raw`AB = FBK + PRN = 6.556 − 1.200 = 5.356.`,
        },
        {
            t: "t7",
            q: String.raw`Las cuentas de acumulación describen:`,
            opts: [
                String.raw`La generación del valor agregado`,
                String.raw`La distribución del ingreso entre sectores`,
                String.raw`La utilización del ahorro bruto en acumulación y su financiación`,
                String.raw`Solo los stocks de activos al final del año`,
            ],
            ans: 2,
            exp: String.raw`La cuenta de capital muestra cómo el ahorro (y las TK) financia la FBK; la financiera, con qué instrumentos se presta o se financia la diferencia.`,
        },
        {
            t: "t7",
            q: String.raw`Si el préstamo neto de la economía es −2.000, el préstamo neto del Resto del Mundo es:`,
            opts: [String.raw`−2.000`, String.raw`2.000`, String.raw`0`, String.raw`No se puede saber`],
            ans: 1,
            exp: String.raw`La suma de los PRN de todos los sectores (incluido el RM) es cero.`,
        },
        {
            t: "t7",
            q: String.raw`En la cuenta financiera, un depósito de un hogar en un banco comercial se registra como:`,
            opts: [
                String.raw`Emisión de pasivo de hogares`,
                String.raw`Adquisición de activo de sociedades financieras`,
                String.raw`Préstamo del banco al hogar`,
                String.raw`Adquisición de activo (dinero legal y depósitos) de hogares y emisión de pasivo del mismo instrumento de sociedades financieras`,
            ],
            ans: 3,
            exp: String.raw`El depósito es un activo para el hogar y una deuda (pasivo) para el banco.`,
        },
        {
            t: "t7",
            q: String.raw`El gobierno tuvo ahorro de −3.000, recibió transferencias de capital por 400 e hizo FBKF por 1.000. Su préstamo neto es:`,
            opts: [String.raw`−4.400`, String.raw`−2.600`, String.raw`−4.000`, String.raw`−3.600`],
            ans: 3,
            exp: String.raw`PRN = −3.000 + 400 − 1.000 = −3.600.`,
        },
        {
            t: "t7",
            q: String.raw`Una empresa extranjera compra acciones de una sociedad uruguaya. En la cuenta financiera:`,
            opts: [
                String.raw`El RM emite pasivos en acciones`,
                String.raw`El RM adquiere activos en acciones y la sociedad residente emite pasivos en acciones`,
                String.raw`La sociedad residente adquiere activos en acciones`,
                String.raw`Se registra como transferencia de capital`,
            ],
            ans: 1,
            exp: String.raw`Las acciones son pasivo de quien las emite y activo de quien las compra.`,
        },
    ],
    exams: [
        {
            id: "sim-1",
            title: "Simulacro 1 · 1ª prueba (SCN)",
            kind: "simulacro",
            minutes: 120,
            scoring: { correct: 1.5, wrong: -0.5, blank: 0 },
            note: String.raw`<p>Simulacro con el formato de la 1ª prueba de 2023 y 2024: preguntas de múltiple opción en módulos (COU, cuentas corrientes por sector, cuenta financiera) más preguntas conceptuales. Cada correcta suma 1,5, cada incorrecta resta 0,5, en blanco 0. La prueba real vale 45 puntos (mínimo 18) y tiene 32 preguntas; con 30 correctas llegás al máximo. Sin materiales, con calculadora, 2 horas.</p><p><strong>Estrategia</strong>: con 4 opciones y −0,5 por error, adivinar totalmente al azar tiene valor esperado 0 (0,25 × 1,5 − 0,75 × 0,5 = 0). Si descartaste al menos una opción, conviene responder: con 3 opciones posibles el valor esperado es +0,17 y con 2, +0,5. En los módulos numéricos, completá primero los casilleros con ? del cuadro y chequeá que el PIB dé igual por las tres ópticas antes de marcar.</p>`,
            questions: [
                {
                    t: "t2",
                    q: String.raw`<div class="box"><p><strong>Módulo 1 · COU.</strong> Economía con dos ramas de mercado (Rama 1: agropecuaria; Rama 2: industria) y el Gobierno, que produce servicios no de mercado. Cifras en millones de $. Los casilleros con ? no se conocen.</p><table><tr><th></th><th>Rama 1</th><th>Rama 2</th><th>Gobierno</th><th>GCFH</th><th>GCFG</th><th>FBKF</th><th>VE</th><th>E</th><th>Total</th></tr><tr><td>Rama 1</td><td>2.000</td><td>9.000</td><td>500</td><td>6.000</td><td>0</td><td>0</td><td>1.500</td><td>5.000</td><td>?</td></tr><tr><td>Rama 2</td><td>3.000</td><td>4.000</td><td>1.500</td><td>14.000</td><td>0</td><td>3.500</td><td>500</td><td>6.500</td><td>?</td></tr><tr><td>Gobierno</td><td>0</td><td>0</td><td>0</td><td>800</td><td>?</td><td>0</td><td>0</td><td>0</td><td>?</td></tr><tr><td>Importaciones</td><td>1.500</td><td>3.000</td><td>1.000</td><td>4.200</td><td>0</td><td>2.500</td><td>0</td><td>0</td><td>?</td></tr><tr><td>RA</td><td>5.000</td><td>7.000</td><td>6.000</td><td colspan="6"></td></tr><tr><td>CKF</td><td>2.000</td><td>3.000</td><td>1.000</td><td colspan="6"></td></tr><tr><td>Imp−S</td><td>1.500</td><td>2.500</td><td>0</td><td colspan="6"></td></tr><tr><td>EEN</td><td>9.000</td><td>?</td><td>0</td><td colspan="6"></td></tr></table></div><p>La producción (VBP) de la Rama 1 fue:</p>`,
                    opts: [String.raw`$ 17.500`, String.raw`$ 24.000`, String.raw`$ 6.500`, String.raw`$ 12.500`],
                    ans: 1,
                    sol: String.raw`Total de la fila Rama 1: 2.000 + 9.000 + 500 + 6.000 + 0 + 0 + 1.500 + 5.000 = 24.000. (17.500 es su VAB y 6.500 su CI; 12.500 es solo la utilización final de la fila.)`,
                },
                {
                    t: "t2",
                    q: String.raw`<div class="box"><p><strong>Módulo 1 · COU.</strong> Economía con dos ramas de mercado (Rama 1: agropecuaria; Rama 2: industria) y el Gobierno, que produce servicios no de mercado. Cifras en millones de $. Los casilleros con ? no se conocen.</p><table><tr><th></th><th>Rama 1</th><th>Rama 2</th><th>Gobierno</th><th>GCFH</th><th>GCFG</th><th>FBKF</th><th>VE</th><th>E</th><th>Total</th></tr><tr><td>Rama 1</td><td>2.000</td><td>9.000</td><td>500</td><td>6.000</td><td>0</td><td>0</td><td>1.500</td><td>5.000</td><td>?</td></tr><tr><td>Rama 2</td><td>3.000</td><td>4.000</td><td>1.500</td><td>14.000</td><td>0</td><td>3.500</td><td>500</td><td>6.500</td><td>?</td></tr><tr><td>Gobierno</td><td>0</td><td>0</td><td>0</td><td>800</td><td>?</td><td>0</td><td>0</td><td>0</td><td>?</td></tr><tr><td>Importaciones</td><td>1.500</td><td>3.000</td><td>1.000</td><td>4.200</td><td>0</td><td>2.500</td><td>0</td><td>0</td><td>?</td></tr><tr><td>RA</td><td>5.000</td><td>7.000</td><td>6.000</td><td colspan="6"></td></tr><tr><td>CKF</td><td>2.000</td><td>3.000</td><td>1.000</td><td colspan="6"></td></tr><tr><td>Imp−S</td><td>1.500</td><td>2.500</td><td>0</td><td colspan="6"></td></tr><tr><td>EEN</td><td>9.000</td><td>?</td><td>0</td><td colspan="6"></td></tr></table></div><p>El valor de los bienes intermedios producidos por la Rama 1 y utilizados por la Rama 2 fue:</p>`,
                    opts: [String.raw`$ 3.000`, String.raw`$ 12.000`, String.raw`$ 16.000`, String.raw`$ 9.000`],
                    ans: 3,
                    sol: String.raw`Celda fila Rama 1, columna Rama 2 = 9.000. El 3.000 es la celda inversa (producido por la Rama 2 usado por la Rama 1); 12.000 suma lo importado por la Rama 2; 16.000 es todo el CI de la Rama 2.`,
                },
                {
                    t: "t2",
                    q: String.raw`<div class="box"><p><strong>Módulo 1 · COU.</strong> Economía con dos ramas de mercado (Rama 1: agropecuaria; Rama 2: industria) y el Gobierno, que produce servicios no de mercado. Cifras en millones de $. Los casilleros con ? no se conocen.</p><table><tr><th></th><th>Rama 1</th><th>Rama 2</th><th>Gobierno</th><th>GCFH</th><th>GCFG</th><th>FBKF</th><th>VE</th><th>E</th><th>Total</th></tr><tr><td>Rama 1</td><td>2.000</td><td>9.000</td><td>500</td><td>6.000</td><td>0</td><td>0</td><td>1.500</td><td>5.000</td><td>?</td></tr><tr><td>Rama 2</td><td>3.000</td><td>4.000</td><td>1.500</td><td>14.000</td><td>0</td><td>3.500</td><td>500</td><td>6.500</td><td>?</td></tr><tr><td>Gobierno</td><td>0</td><td>0</td><td>0</td><td>800</td><td>?</td><td>0</td><td>0</td><td>0</td><td>?</td></tr><tr><td>Importaciones</td><td>1.500</td><td>3.000</td><td>1.000</td><td>4.200</td><td>0</td><td>2.500</td><td>0</td><td>0</td><td>?</td></tr><tr><td>RA</td><td>5.000</td><td>7.000</td><td>6.000</td><td colspan="6"></td></tr><tr><td>CKF</td><td>2.000</td><td>3.000</td><td>1.000</td><td colspan="6"></td></tr><tr><td>Imp−S</td><td>1.500</td><td>2.500</td><td>0</td><td colspan="6"></td></tr><tr><td>EEN</td><td>9.000</td><td>?</td><td>0</td><td colspan="6"></td></tr></table></div><p>Las importaciones totales fueron:</p>`,
                    opts: [String.raw`$ 12.200`, String.raw`$ 5.500`, String.raw`$ 6.700`, String.raw`$ 11.500`],
                    ans: 0,
                    sol: String.raw`Total de la fila de importaciones: 1.500 + 3.000 + 1.000 + 4.200 + 2.500 = 12.200. (5.500 son solo las intermedias, 6.700 solo las finales y 11.500 son las exportaciones.)`,
                },
                {
                    t: "t2",
                    q: String.raw`<div class="box"><p><strong>Módulo 1 · COU.</strong> Economía con dos ramas de mercado (Rama 1: agropecuaria; Rama 2: industria) y el Gobierno, que produce servicios no de mercado. Cifras en millones de $. Los casilleros con ? no se conocen.</p><table><tr><th></th><th>Rama 1</th><th>Rama 2</th><th>Gobierno</th><th>GCFH</th><th>GCFG</th><th>FBKF</th><th>VE</th><th>E</th><th>Total</th></tr><tr><td>Rama 1</td><td>2.000</td><td>9.000</td><td>500</td><td>6.000</td><td>0</td><td>0</td><td>1.500</td><td>5.000</td><td>?</td></tr><tr><td>Rama 2</td><td>3.000</td><td>4.000</td><td>1.500</td><td>14.000</td><td>0</td><td>3.500</td><td>500</td><td>6.500</td><td>?</td></tr><tr><td>Gobierno</td><td>0</td><td>0</td><td>0</td><td>800</td><td>?</td><td>0</td><td>0</td><td>0</td><td>?</td></tr><tr><td>Importaciones</td><td>1.500</td><td>3.000</td><td>1.000</td><td>4.200</td><td>0</td><td>2.500</td><td>0</td><td>0</td><td>?</td></tr><tr><td>RA</td><td>5.000</td><td>7.000</td><td>6.000</td><td colspan="6"></td></tr><tr><td>CKF</td><td>2.000</td><td>3.000</td><td>1.000</td><td colspan="6"></td></tr><tr><td>Imp−S</td><td>1.500</td><td>2.500</td><td>0</td><td colspan="6"></td></tr><tr><td>EEN</td><td>9.000</td><td>?</td><td>0</td><td colspan="6"></td></tr></table></div><p>Las importaciones utilizadas para FBKF fueron:</p>`,
                    opts: [String.raw`$ 6.000`, String.raw`$ 3.500`, String.raw`$ 2.500`, String.raw`$ 8.500`],
                    ans: 2,
                    sol: String.raw`Celda fila Importaciones, columna FBKF = 2.500. La FBKF total es 6.000 (3.500 nacional de la Rama 2 + 2.500 importada).`,
                },
                {
                    t: "t2",
                    q: String.raw`<div class="box"><p><strong>Módulo 1 · COU.</strong> Economía con dos ramas de mercado (Rama 1: agropecuaria; Rama 2: industria) y el Gobierno, que produce servicios no de mercado. Cifras en millones de $. Los casilleros con ? no se conocen.</p><table><tr><th></th><th>Rama 1</th><th>Rama 2</th><th>Gobierno</th><th>GCFH</th><th>GCFG</th><th>FBKF</th><th>VE</th><th>E</th><th>Total</th></tr><tr><td>Rama 1</td><td>2.000</td><td>9.000</td><td>500</td><td>6.000</td><td>0</td><td>0</td><td>1.500</td><td>5.000</td><td>?</td></tr><tr><td>Rama 2</td><td>3.000</td><td>4.000</td><td>1.500</td><td>14.000</td><td>0</td><td>3.500</td><td>500</td><td>6.500</td><td>?</td></tr><tr><td>Gobierno</td><td>0</td><td>0</td><td>0</td><td>800</td><td>?</td><td>0</td><td>0</td><td>0</td><td>?</td></tr><tr><td>Importaciones</td><td>1.500</td><td>3.000</td><td>1.000</td><td>4.200</td><td>0</td><td>2.500</td><td>0</td><td>0</td><td>?</td></tr><tr><td>RA</td><td>5.000</td><td>7.000</td><td>6.000</td><td colspan="6"></td></tr><tr><td>CKF</td><td>2.000</td><td>3.000</td><td>1.000</td><td colspan="6"></td></tr><tr><td>Imp−S</td><td>1.500</td><td>2.500</td><td>0</td><td colspan="6"></td></tr><tr><td>EEN</td><td>9.000</td><td>?</td><td>0</td><td colspan="6"></td></tr></table></div><p>El valor total de la producción de la economía fue:</p>`,
                    opts: [String.raw`$ 41.500`, String.raw`$ 79.200`, String.raw`$ 67.000`, String.raw`$ 57.000`],
                    ans: 2,
                    sol: String.raw`VBP total = 24.000 (Rama 1) + 33.000 (Rama 2) + 10.000 (Gobierno) = 67.000. La Rama 2 se obtiene sumando su fila: 3.000 + 4.000 + 1.500 + 14.000 + 3.500 + 500 + 6.500 = 33.000. El Gobierno por su columna: CI (500 + 1.500 + 1.000 = 3.000) + RA 6.000 + CKF 1.000 = 10.000. (41.500 es el PIB; 79.200 suma las importaciones; 57.000 olvida al gobierno.)`,
                },
                {
                    t: "t2",
                    q: String.raw`<div class="box"><p><strong>Módulo 1 · COU.</strong> Economía con dos ramas de mercado (Rama 1: agropecuaria; Rama 2: industria) y el Gobierno, que produce servicios no de mercado. Cifras en millones de $. Los casilleros con ? no se conocen.</p><table><tr><th></th><th>Rama 1</th><th>Rama 2</th><th>Gobierno</th><th>GCFH</th><th>GCFG</th><th>FBKF</th><th>VE</th><th>E</th><th>Total</th></tr><tr><td>Rama 1</td><td>2.000</td><td>9.000</td><td>500</td><td>6.000</td><td>0</td><td>0</td><td>1.500</td><td>5.000</td><td>?</td></tr><tr><td>Rama 2</td><td>3.000</td><td>4.000</td><td>1.500</td><td>14.000</td><td>0</td><td>3.500</td><td>500</td><td>6.500</td><td>?</td></tr><tr><td>Gobierno</td><td>0</td><td>0</td><td>0</td><td>800</td><td>?</td><td>0</td><td>0</td><td>0</td><td>?</td></tr><tr><td>Importaciones</td><td>1.500</td><td>3.000</td><td>1.000</td><td>4.200</td><td>0</td><td>2.500</td><td>0</td><td>0</td><td>?</td></tr><tr><td>RA</td><td>5.000</td><td>7.000</td><td>6.000</td><td colspan="6"></td></tr><tr><td>CKF</td><td>2.000</td><td>3.000</td><td>1.000</td><td colspan="6"></td></tr><tr><td>Imp−S</td><td>1.500</td><td>2.500</td><td>0</td><td colspan="6"></td></tr><tr><td>EEN</td><td>9.000</td><td>?</td><td>0</td><td colspan="6"></td></tr></table></div><p>El valor de los insumos nacionales utilizados por el Gobierno fue:</p>`,
                    opts: [String.raw`$ 2.000`, String.raw`$ 3.000`, String.raw`$ 1.000`, String.raw`$ 7.000`],
                    ans: 0,
                    sol: String.raw`Columna Gobierno, filas de ramas nacionales: 500 + 1.500 + 0 = 2.000. El CI total (3.000) incluye 1.000 importado. 7.000 es su VAB.`,
                },
                {
                    t: "t2",
                    q: String.raw`<div class="box"><p><strong>Módulo 1 · COU.</strong> Economía con dos ramas de mercado (Rama 1: agropecuaria; Rama 2: industria) y el Gobierno, que produce servicios no de mercado. Cifras en millones de $. Los casilleros con ? no se conocen.</p><table><tr><th></th><th>Rama 1</th><th>Rama 2</th><th>Gobierno</th><th>GCFH</th><th>GCFG</th><th>FBKF</th><th>VE</th><th>E</th><th>Total</th></tr><tr><td>Rama 1</td><td>2.000</td><td>9.000</td><td>500</td><td>6.000</td><td>0</td><td>0</td><td>1.500</td><td>5.000</td><td>?</td></tr><tr><td>Rama 2</td><td>3.000</td><td>4.000</td><td>1.500</td><td>14.000</td><td>0</td><td>3.500</td><td>500</td><td>6.500</td><td>?</td></tr><tr><td>Gobierno</td><td>0</td><td>0</td><td>0</td><td>800</td><td>?</td><td>0</td><td>0</td><td>0</td><td>?</td></tr><tr><td>Importaciones</td><td>1.500</td><td>3.000</td><td>1.000</td><td>4.200</td><td>0</td><td>2.500</td><td>0</td><td>0</td><td>?</td></tr><tr><td>RA</td><td>5.000</td><td>7.000</td><td>6.000</td><td colspan="6"></td></tr><tr><td>CKF</td><td>2.000</td><td>3.000</td><td>1.000</td><td colspan="6"></td></tr><tr><td>Imp−S</td><td>1.500</td><td>2.500</td><td>0</td><td colspan="6"></td></tr><tr><td>EEN</td><td>9.000</td><td>?</td><td>0</td><td colspan="6"></td></tr></table></div><p>El gasto de consumo final de los hogares fue:</p>`,
                    opts: [String.raw`$ 20.800`, String.raw`$ 34.200`, String.raw`$ 24.200`, String.raw`$ 25.000`],
                    ans: 3,
                    sol: String.raw`Columna GCFH completa: 6.000 + 14.000 + 800 + 4.200 = 25.000. 20.800 olvida lo importado; 34.200 es el GCF total (hogares + gobierno); 24.200 olvida lo que los hogares compran al gobierno.`,
                },
                {
                    t: "t6",
                    q: String.raw`<div class="box"><p><strong>Módulo 1 · COU.</strong> Economía con dos ramas de mercado (Rama 1: agropecuaria; Rama 2: industria) y el Gobierno, que produce servicios no de mercado. Cifras en millones de $. Los casilleros con ? no se conocen.</p><table><tr><th></th><th>Rama 1</th><th>Rama 2</th><th>Gobierno</th><th>GCFH</th><th>GCFG</th><th>FBKF</th><th>VE</th><th>E</th><th>Total</th></tr><tr><td>Rama 1</td><td>2.000</td><td>9.000</td><td>500</td><td>6.000</td><td>0</td><td>0</td><td>1.500</td><td>5.000</td><td>?</td></tr><tr><td>Rama 2</td><td>3.000</td><td>4.000</td><td>1.500</td><td>14.000</td><td>0</td><td>3.500</td><td>500</td><td>6.500</td><td>?</td></tr><tr><td>Gobierno</td><td>0</td><td>0</td><td>0</td><td>800</td><td>?</td><td>0</td><td>0</td><td>0</td><td>?</td></tr><tr><td>Importaciones</td><td>1.500</td><td>3.000</td><td>1.000</td><td>4.200</td><td>0</td><td>2.500</td><td>0</td><td>0</td><td>?</td></tr><tr><td>RA</td><td>5.000</td><td>7.000</td><td>6.000</td><td colspan="6"></td></tr><tr><td>CKF</td><td>2.000</td><td>3.000</td><td>1.000</td><td colspan="6"></td></tr><tr><td>Imp−S</td><td>1.500</td><td>2.500</td><td>0</td><td colspan="6"></td></tr><tr><td>EEN</td><td>9.000</td><td>?</td><td>0</td><td colspan="6"></td></tr></table></div><p>El gasto de consumo final del gobierno fue:</p>`,
                    opts: [String.raw`$ 10.000`, String.raw`$ 9.200`, String.raw`$ 7.000`, String.raw`$ 3.000`],
                    ans: 1,
                    sol: String.raw`Producción del gobierno = CI 3.000 + RA 6.000 + CKF 1.000 = 10.000 (por la columna). En su fila, vendió 800 a los hogares. GCFG = 10.000 − 800 = 9.200.`,
                },
                {
                    t: "t3",
                    q: String.raw`<div class="box"><p><strong>Módulo 1 · COU.</strong> Economía con dos ramas de mercado (Rama 1: agropecuaria; Rama 2: industria) y el Gobierno, que produce servicios no de mercado. Cifras en millones de $. Los casilleros con ? no se conocen.</p><table><tr><th></th><th>Rama 1</th><th>Rama 2</th><th>Gobierno</th><th>GCFH</th><th>GCFG</th><th>FBKF</th><th>VE</th><th>E</th><th>Total</th></tr><tr><td>Rama 1</td><td>2.000</td><td>9.000</td><td>500</td><td>6.000</td><td>0</td><td>0</td><td>1.500</td><td>5.000</td><td>?</td></tr><tr><td>Rama 2</td><td>3.000</td><td>4.000</td><td>1.500</td><td>14.000</td><td>0</td><td>3.500</td><td>500</td><td>6.500</td><td>?</td></tr><tr><td>Gobierno</td><td>0</td><td>0</td><td>0</td><td>800</td><td>?</td><td>0</td><td>0</td><td>0</td><td>?</td></tr><tr><td>Importaciones</td><td>1.500</td><td>3.000</td><td>1.000</td><td>4.200</td><td>0</td><td>2.500</td><td>0</td><td>0</td><td>?</td></tr><tr><td>RA</td><td>5.000</td><td>7.000</td><td>6.000</td><td colspan="6"></td></tr><tr><td>CKF</td><td>2.000</td><td>3.000</td><td>1.000</td><td colspan="6"></td></tr><tr><td>Imp−S</td><td>1.500</td><td>2.500</td><td>0</td><td colspan="6"></td></tr><tr><td>EEN</td><td>9.000</td><td>?</td><td>0</td><td colspan="6"></td></tr></table></div><p>El PIB fue:</p>`,
                    opts: [String.raw`$ 41.500`, String.raw`$ 39.500`, String.raw`$ 53.700`, String.raw`$ 67.000`],
                    ans: 0,
                    sol: String.raw`Producción: VAB R1 = 24.000 − 6.500 = 17.500; VAB R2 = 33.000 − 16.000 = 17.000; VAB Gob = 7.000; suma 41.500. Gasto: 25.000 + 9.200 + 6.000 + 2.000 + 11.500 − 12.200 = 41.500. Ingreso: RA 18.000 + CKF 6.000 + Imp−S 4.000 + EEN 13.500 = 41.500. (39.500 olvida la VE, 53.700 es la utilización final sin restar M, 67.000 es el VBP.)`,
                },
                {
                    t: "t2",
                    q: String.raw`<div class="box"><p><strong>Módulo 1 · COU.</strong> Economía con dos ramas de mercado (Rama 1: agropecuaria; Rama 2: industria) y el Gobierno, que produce servicios no de mercado. Cifras en millones de $. Los casilleros con ? no se conocen.</p><table><tr><th></th><th>Rama 1</th><th>Rama 2</th><th>Gobierno</th><th>GCFH</th><th>GCFG</th><th>FBKF</th><th>VE</th><th>E</th><th>Total</th></tr><tr><td>Rama 1</td><td>2.000</td><td>9.000</td><td>500</td><td>6.000</td><td>0</td><td>0</td><td>1.500</td><td>5.000</td><td>?</td></tr><tr><td>Rama 2</td><td>3.000</td><td>4.000</td><td>1.500</td><td>14.000</td><td>0</td><td>3.500</td><td>500</td><td>6.500</td><td>?</td></tr><tr><td>Gobierno</td><td>0</td><td>0</td><td>0</td><td>800</td><td>?</td><td>0</td><td>0</td><td>0</td><td>?</td></tr><tr><td>Importaciones</td><td>1.500</td><td>3.000</td><td>1.000</td><td>4.200</td><td>0</td><td>2.500</td><td>0</td><td>0</td><td>?</td></tr><tr><td>RA</td><td>5.000</td><td>7.000</td><td>6.000</td><td colspan="6"></td></tr><tr><td>CKF</td><td>2.000</td><td>3.000</td><td>1.000</td><td colspan="6"></td></tr><tr><td>Imp−S</td><td>1.500</td><td>2.500</td><td>0</td><td colspan="6"></td></tr><tr><td>EEN</td><td>9.000</td><td>?</td><td>0</td><td colspan="6"></td></tr></table></div><p>Los bienes producidos por la Rama 1 que quedaron en existencias sin utilizarse fueron:</p>`,
                    opts: [String.raw`$ 2.000`, String.raw`$ 500`, String.raw`$ 1.500`, String.raw`$ 5.000`],
                    ans: 2,
                    sol: String.raw`Es la VE de la fila Rama 1: 1.500. 2.000 es la VE total de la economía; 500 la de la Rama 2.`,
                },
                {
                    t: "t4",
                    q: String.raw`<div class="box"><p><strong>Módulo 1 · COU.</strong> Economía con dos ramas de mercado (Rama 1: agropecuaria; Rama 2: industria) y el Gobierno, que produce servicios no de mercado. Cifras en millones de $. Los casilleros con ? no se conocen.</p><table><tr><th></th><th>Rama 1</th><th>Rama 2</th><th>Gobierno</th><th>GCFH</th><th>GCFG</th><th>FBKF</th><th>VE</th><th>E</th><th>Total</th></tr><tr><td>Rama 1</td><td>2.000</td><td>9.000</td><td>500</td><td>6.000</td><td>0</td><td>0</td><td>1.500</td><td>5.000</td><td>?</td></tr><tr><td>Rama 2</td><td>3.000</td><td>4.000</td><td>1.500</td><td>14.000</td><td>0</td><td>3.500</td><td>500</td><td>6.500</td><td>?</td></tr><tr><td>Gobierno</td><td>0</td><td>0</td><td>0</td><td>800</td><td>?</td><td>0</td><td>0</td><td>0</td><td>?</td></tr><tr><td>Importaciones</td><td>1.500</td><td>3.000</td><td>1.000</td><td>4.200</td><td>0</td><td>2.500</td><td>0</td><td>0</td><td>?</td></tr><tr><td>RA</td><td>5.000</td><td>7.000</td><td>6.000</td><td colspan="6"></td></tr><tr><td>CKF</td><td>2.000</td><td>3.000</td><td>1.000</td><td colspan="6"></td></tr><tr><td>Imp−S</td><td>1.500</td><td>2.500</td><td>0</td><td colspan="6"></td></tr><tr><td>EEN</td><td>9.000</td><td>?</td><td>0</td><td colspan="6"></td></tr></table></div><p>El excedente de explotación neto de la Rama 2 fue:</p>`,
                    opts: [String.raw`$ 7.500`, String.raw`$ 4.500`, String.raw`$ 17.000`, String.raw`$ 2.000`],
                    ans: 1,
                    sol: String.raw`VBP R2 = 33.000 (fila). CI R2 = 9.000 + 4.000 + 0 + 3.000 = 16.000. VAB = 17.000. EEN = 17.000 − 7.000 − 3.000 − 2.500 = 4.500. (7.500 es el EEB = CKF + EEN.)`,
                },
                {
                    t: "t4",
                    q: String.raw`<div class="box"><p><strong>Módulo 1 · COU.</strong> Economía con dos ramas de mercado (Rama 1: agropecuaria; Rama 2: industria) y el Gobierno, que produce servicios no de mercado. Cifras en millones de $. Los casilleros con ? no se conocen.</p><table><tr><th></th><th>Rama 1</th><th>Rama 2</th><th>Gobierno</th><th>GCFH</th><th>GCFG</th><th>FBKF</th><th>VE</th><th>E</th><th>Total</th></tr><tr><td>Rama 1</td><td>2.000</td><td>9.000</td><td>500</td><td>6.000</td><td>0</td><td>0</td><td>1.500</td><td>5.000</td><td>?</td></tr><tr><td>Rama 2</td><td>3.000</td><td>4.000</td><td>1.500</td><td>14.000</td><td>0</td><td>3.500</td><td>500</td><td>6.500</td><td>?</td></tr><tr><td>Gobierno</td><td>0</td><td>0</td><td>0</td><td>800</td><td>?</td><td>0</td><td>0</td><td>0</td><td>?</td></tr><tr><td>Importaciones</td><td>1.500</td><td>3.000</td><td>1.000</td><td>4.200</td><td>0</td><td>2.500</td><td>0</td><td>0</td><td>?</td></tr><tr><td>RA</td><td>5.000</td><td>7.000</td><td>6.000</td><td colspan="6"></td></tr><tr><td>CKF</td><td>2.000</td><td>3.000</td><td>1.000</td><td colspan="6"></td></tr><tr><td>Imp−S</td><td>1.500</td><td>2.500</td><td>0</td><td colspan="6"></td></tr><tr><td>EEN</td><td>9.000</td><td>?</td><td>0</td><td colspan="6"></td></tr></table></div><p>Si en la Rama 2 los aportes personales fueron $ 800 y los patronales $ 1.200, los salarios nominales pagados por la Rama 2 fueron:</p>`,
                    opts: [String.raw`$ 5.000`, String.raw`$ 6.200`, String.raw`$ 7.000`, String.raw`$ 5.800`],
                    ans: 3,
                    sol: String.raw`RA = salarios nominales + aportes patronales. Salarios nominales = 7.000 − 1.200 = 5.800. (5.000 es el salario líquido, que también descuenta el aporte personal.)`,
                },
                {
                    t: "t3",
                    q: String.raw`<div class="box"><p><strong>Módulo 1 · COU.</strong> Economía con dos ramas de mercado (Rama 1: agropecuaria; Rama 2: industria) y el Gobierno, que produce servicios no de mercado. Cifras en millones de $. Los casilleros con ? no se conocen.</p><table><tr><th></th><th>Rama 1</th><th>Rama 2</th><th>Gobierno</th><th>GCFH</th><th>GCFG</th><th>FBKF</th><th>VE</th><th>E</th><th>Total</th></tr><tr><td>Rama 1</td><td>2.000</td><td>9.000</td><td>500</td><td>6.000</td><td>0</td><td>0</td><td>1.500</td><td>5.000</td><td>?</td></tr><tr><td>Rama 2</td><td>3.000</td><td>4.000</td><td>1.500</td><td>14.000</td><td>0</td><td>3.500</td><td>500</td><td>6.500</td><td>?</td></tr><tr><td>Gobierno</td><td>0</td><td>0</td><td>0</td><td>800</td><td>?</td><td>0</td><td>0</td><td>0</td><td>?</td></tr><tr><td>Importaciones</td><td>1.500</td><td>3.000</td><td>1.000</td><td>4.200</td><td>0</td><td>2.500</td><td>0</td><td>0</td><td>?</td></tr><tr><td>RA</td><td>5.000</td><td>7.000</td><td>6.000</td><td colspan="6"></td></tr><tr><td>CKF</td><td>2.000</td><td>3.000</td><td>1.000</td><td colspan="6"></td></tr><tr><td>Imp−S</td><td>1.500</td><td>2.500</td><td>0</td><td colspan="6"></td></tr><tr><td>EEN</td><td>9.000</td><td>?</td><td>0</td><td colspan="6"></td></tr></table></div><p>Para esta economía, el PIB es igual a:</p>`,
                    opts: [
                        String.raw`GCF + FBKF + E − M`,
                        String.raw`GCFH + FBK + E − M`,
                        String.raw`VBP total menos importaciones totales`,
                        String.raw`Utilización final total menos importaciones totales`,
                    ],
                    ans: 3,
                    sol: String.raw`Utilización final = 25.000 + 9.200 + 6.000 + 2.000 + 11.500 = 53.700; menos M 12.200 = 41.500. La segunda olvida la VE (daría 39.500), la tercera el GCFG (32.300) y la cuarta resta M al VBP (54.800) en vez de restar el CI.`,
                },
                {
                    t: "t5",
                    q: String.raw`<div class="box"><p><strong>Módulo 2 · Cuentas corrientes por sector.</strong> Misma economía del Módulo 1 (PIB, GCFH, GCFG y FBK son los del COU). Cifras en millones de $; — = no corresponde.</p><table><tr><th>Transacción</th><th>Sociedades</th><th>Gobierno</th><th>Hogares</th><th>Resto del Mundo</th></tr><tr><td>EEB / ingreso mixto</td><td>11.000</td><td>1.000</td><td>7.500</td><td>—</td></tr><tr><td>RA pagada por productores residentes (total 18.000): pagada a no residentes</td><td>—</td><td>—</td><td>—</td><td>300</td></tr><tr><td>RA recibida del exterior por hogares residentes</td><td>—</td><td>—</td><td>500</td><td>—</td></tr><tr><td>Impuestos netos de subvenciones sobre la producción (total)</td><td>—</td><td>4.000</td><td>—</td><td>—</td></tr><tr><td>Rentas de la propiedad pagadas</td><td>3.000</td><td>1.200</td><td>400</td><td>600</td></tr><tr><td>Rentas de la propiedad recibidas</td><td>800</td><td>200</td><td>1.600</td><td>?</td></tr><tr><td>Impuestos corrientes sobre el ingreso pagados</td><td>2.000</td><td>—</td><td>1.500</td><td>—</td></tr><tr><td>Contribuciones sociales pagadas por los hogares</td><td>—</td><td>—</td><td>3.000</td><td>—</td></tr><tr><td>Prestaciones sociales pagadas por el gobierno</td><td>—</td><td>4.500</td><td>—</td><td>—</td></tr><tr><td>Remesas: recibidas por hogares desde el exterior / enviadas al exterior</td><td>—</td><td>—</td><td>700 / 200</td><td>—</td></tr><tr><td>Donación en efectivo del RM al gobierno para gastos corrientes</td><td>—</td><td>300</td><td>—</td><td>—</td></tr><tr><td>Cuotas pagadas por el gobierno a organismos internacionales</td><td>—</td><td>100</td><td>—</td><td>—</td></tr><tr><td>Donación del RM al gobierno de ambulancias</td><td>—</td><td>400</td><td>—</td><td>—</td></tr><tr><td>Gasto de consumo final</td><td>—</td><td>9.200</td><td>25.000</td><td>—</td></tr><tr><td>FBK (FBKF + VE)</td><td>6.000 (4.000 + 2.000)</td><td>1.000</td><td>1.000</td><td>—</td></tr></table></div><p>Las rentas de la propiedad recibidas por el Resto del Mundo fueron:</p>`,
                    opts: [String.raw`$ 600`, String.raw`$ 2.600`, String.raw`$ 5.200`, String.raw`$ 2.000`],
                    ans: 1,
                    sol: String.raw`Pagadas en total: 3.000 + 1.200 + 400 + 600 = 5.200. Recibidas por residentes: 800 + 200 + 1.600 = 2.600. Lo que falta lo recibió el RM: 5.200 − 2.600 = 2.600.`,
                },
                {
                    t: "t3",
                    q: String.raw`<div class="box"><p><strong>Módulo 2 · Cuentas corrientes por sector.</strong> Misma economía del Módulo 1 (PIB, GCFH, GCFG y FBK son los del COU). Cifras en millones de $; — = no corresponde.</p><table><tr><th>Transacción</th><th>Sociedades</th><th>Gobierno</th><th>Hogares</th><th>Resto del Mundo</th></tr><tr><td>EEB / ingreso mixto</td><td>11.000</td><td>1.000</td><td>7.500</td><td>—</td></tr><tr><td>RA pagada por productores residentes (total 18.000): pagada a no residentes</td><td>—</td><td>—</td><td>—</td><td>300</td></tr><tr><td>RA recibida del exterior por hogares residentes</td><td>—</td><td>—</td><td>500</td><td>—</td></tr><tr><td>Impuestos netos de subvenciones sobre la producción (total)</td><td>—</td><td>4.000</td><td>—</td><td>—</td></tr><tr><td>Rentas de la propiedad pagadas</td><td>3.000</td><td>1.200</td><td>400</td><td>600</td></tr><tr><td>Rentas de la propiedad recibidas</td><td>800</td><td>200</td><td>1.600</td><td>?</td></tr><tr><td>Impuestos corrientes sobre el ingreso pagados</td><td>2.000</td><td>—</td><td>1.500</td><td>—</td></tr><tr><td>Contribuciones sociales pagadas por los hogares</td><td>—</td><td>—</td><td>3.000</td><td>—</td></tr><tr><td>Prestaciones sociales pagadas por el gobierno</td><td>—</td><td>4.500</td><td>—</td><td>—</td></tr><tr><td>Remesas: recibidas por hogares desde el exterior / enviadas al exterior</td><td>—</td><td>—</td><td>700 / 200</td><td>—</td></tr><tr><td>Donación en efectivo del RM al gobierno para gastos corrientes</td><td>—</td><td>300</td><td>—</td><td>—</td></tr><tr><td>Cuotas pagadas por el gobierno a organismos internacionales</td><td>—</td><td>100</td><td>—</td><td>—</td></tr><tr><td>Donación del RM al gobierno de ambulancias</td><td>—</td><td>400</td><td>—</td><td>—</td></tr><tr><td>Gasto de consumo final</td><td>—</td><td>9.200</td><td>25.000</td><td>—</td></tr><tr><td>FBK (FBKF + VE)</td><td>6.000 (4.000 + 2.000)</td><td>1.000</td><td>1.000</td><td>—</td></tr></table></div><p>La remuneración neta de factores del exterior (RNFE) fue:</p>`,
                    opts: [String.raw`$ −2.000`, String.raw`$ −2.200`, String.raw`$ −1.800`, String.raw`$ 1.800`],
                    ans: 2,
                    sol: String.raw`RA neta = 500 − 300 = 200. Rentas netas = 600 (pagadas por el RM a residentes) − 2.600 (recibidas por el RM) = −2.000. RNFE = 200 − 2.000 = −1.800.`,
                },
                {
                    t: "t3",
                    q: String.raw`<div class="box"><p><strong>Módulo 2 · Cuentas corrientes por sector.</strong> Misma economía del Módulo 1 (PIB, GCFH, GCFG y FBK son los del COU). Cifras en millones de $; — = no corresponde.</p><table><tr><th>Transacción</th><th>Sociedades</th><th>Gobierno</th><th>Hogares</th><th>Resto del Mundo</th></tr><tr><td>EEB / ingreso mixto</td><td>11.000</td><td>1.000</td><td>7.500</td><td>—</td></tr><tr><td>RA pagada por productores residentes (total 18.000): pagada a no residentes</td><td>—</td><td>—</td><td>—</td><td>300</td></tr><tr><td>RA recibida del exterior por hogares residentes</td><td>—</td><td>—</td><td>500</td><td>—</td></tr><tr><td>Impuestos netos de subvenciones sobre la producción (total)</td><td>—</td><td>4.000</td><td>—</td><td>—</td></tr><tr><td>Rentas de la propiedad pagadas</td><td>3.000</td><td>1.200</td><td>400</td><td>600</td></tr><tr><td>Rentas de la propiedad recibidas</td><td>800</td><td>200</td><td>1.600</td><td>?</td></tr><tr><td>Impuestos corrientes sobre el ingreso pagados</td><td>2.000</td><td>—</td><td>1.500</td><td>—</td></tr><tr><td>Contribuciones sociales pagadas por los hogares</td><td>—</td><td>—</td><td>3.000</td><td>—</td></tr><tr><td>Prestaciones sociales pagadas por el gobierno</td><td>—</td><td>4.500</td><td>—</td><td>—</td></tr><tr><td>Remesas: recibidas por hogares desde el exterior / enviadas al exterior</td><td>—</td><td>—</td><td>700 / 200</td><td>—</td></tr><tr><td>Donación en efectivo del RM al gobierno para gastos corrientes</td><td>—</td><td>300</td><td>—</td><td>—</td></tr><tr><td>Cuotas pagadas por el gobierno a organismos internacionales</td><td>—</td><td>100</td><td>—</td><td>—</td></tr><tr><td>Donación del RM al gobierno de ambulancias</td><td>—</td><td>400</td><td>—</td><td>—</td></tr><tr><td>Gasto de consumo final</td><td>—</td><td>9.200</td><td>25.000</td><td>—</td></tr><tr><td>FBK (FBKF + VE)</td><td>6.000 (4.000 + 2.000)</td><td>1.000</td><td>1.000</td><td>—</td></tr></table></div><p>El ingreso nacional bruto (INB) fue:</p>`,
                    opts: [String.raw`$ 39.700`, String.raw`$ 43.300`, String.raw`$ 40.400`, String.raw`$ 41.500`],
                    ans: 0,
                    sol: String.raw`INB = PIB + RNFE = 41.500 − 1.800 = 39.700. (40.400 es el INDB; 43.300 suma la RNFE con signo cambiado.)`,
                },
                {
                    t: "t5",
                    q: String.raw`<div class="box"><p><strong>Módulo 2 · Cuentas corrientes por sector.</strong> Misma economía del Módulo 1 (PIB, GCFH, GCFG y FBK son los del COU). Cifras en millones de $; — = no corresponde.</p><table><tr><th>Transacción</th><th>Sociedades</th><th>Gobierno</th><th>Hogares</th><th>Resto del Mundo</th></tr><tr><td>EEB / ingreso mixto</td><td>11.000</td><td>1.000</td><td>7.500</td><td>—</td></tr><tr><td>RA pagada por productores residentes (total 18.000): pagada a no residentes</td><td>—</td><td>—</td><td>—</td><td>300</td></tr><tr><td>RA recibida del exterior por hogares residentes</td><td>—</td><td>—</td><td>500</td><td>—</td></tr><tr><td>Impuestos netos de subvenciones sobre la producción (total)</td><td>—</td><td>4.000</td><td>—</td><td>—</td></tr><tr><td>Rentas de la propiedad pagadas</td><td>3.000</td><td>1.200</td><td>400</td><td>600</td></tr><tr><td>Rentas de la propiedad recibidas</td><td>800</td><td>200</td><td>1.600</td><td>?</td></tr><tr><td>Impuestos corrientes sobre el ingreso pagados</td><td>2.000</td><td>—</td><td>1.500</td><td>—</td></tr><tr><td>Contribuciones sociales pagadas por los hogares</td><td>—</td><td>—</td><td>3.000</td><td>—</td></tr><tr><td>Prestaciones sociales pagadas por el gobierno</td><td>—</td><td>4.500</td><td>—</td><td>—</td></tr><tr><td>Remesas: recibidas por hogares desde el exterior / enviadas al exterior</td><td>—</td><td>—</td><td>700 / 200</td><td>—</td></tr><tr><td>Donación en efectivo del RM al gobierno para gastos corrientes</td><td>—</td><td>300</td><td>—</td><td>—</td></tr><tr><td>Cuotas pagadas por el gobierno a organismos internacionales</td><td>—</td><td>100</td><td>—</td><td>—</td></tr><tr><td>Donación del RM al gobierno de ambulancias</td><td>—</td><td>400</td><td>—</td><td>—</td></tr><tr><td>Gasto de consumo final</td><td>—</td><td>9.200</td><td>25.000</td><td>—</td></tr><tr><td>FBK (FBKF + VE)</td><td>6.000 (4.000 + 2.000)</td><td>1.000</td><td>1.000</td><td>—</td></tr></table></div><p>El saldo de ingresos primarios de los hogares fue:</p>`,
                    opts: [String.raw`$ 26.700`, String.raw`$ 26.900`, String.raw`$ 27.300`, String.raw`$ 19.400`],
                    ans: 1,
                    sol: String.raw`RA recibida por hogares = 18.000 − 300 + 500 = 18.200. Ingreso primario = 7.500 + 18.200 + 1.600 − 400 = 26.900. (26.700 usa la RA pagada por productores sin ajustar por el exterior; 27.300 olvida las rentas pagadas; 19.400 olvida el ingreso mixto.)`,
                },
                {
                    t: "t5",
                    q: String.raw`<div class="box"><p><strong>Módulo 2 · Cuentas corrientes por sector.</strong> Misma economía del Módulo 1 (PIB, GCFH, GCFG y FBK son los del COU). Cifras en millones de $; — = no corresponde.</p><table><tr><th>Transacción</th><th>Sociedades</th><th>Gobierno</th><th>Hogares</th><th>Resto del Mundo</th></tr><tr><td>EEB / ingreso mixto</td><td>11.000</td><td>1.000</td><td>7.500</td><td>—</td></tr><tr><td>RA pagada por productores residentes (total 18.000): pagada a no residentes</td><td>—</td><td>—</td><td>—</td><td>300</td></tr><tr><td>RA recibida del exterior por hogares residentes</td><td>—</td><td>—</td><td>500</td><td>—</td></tr><tr><td>Impuestos netos de subvenciones sobre la producción (total)</td><td>—</td><td>4.000</td><td>—</td><td>—</td></tr><tr><td>Rentas de la propiedad pagadas</td><td>3.000</td><td>1.200</td><td>400</td><td>600</td></tr><tr><td>Rentas de la propiedad recibidas</td><td>800</td><td>200</td><td>1.600</td><td>?</td></tr><tr><td>Impuestos corrientes sobre el ingreso pagados</td><td>2.000</td><td>—</td><td>1.500</td><td>—</td></tr><tr><td>Contribuciones sociales pagadas por los hogares</td><td>—</td><td>—</td><td>3.000</td><td>—</td></tr><tr><td>Prestaciones sociales pagadas por el gobierno</td><td>—</td><td>4.500</td><td>—</td><td>—</td></tr><tr><td>Remesas: recibidas por hogares desde el exterior / enviadas al exterior</td><td>—</td><td>—</td><td>700 / 200</td><td>—</td></tr><tr><td>Donación en efectivo del RM al gobierno para gastos corrientes</td><td>—</td><td>300</td><td>—</td><td>—</td></tr><tr><td>Cuotas pagadas por el gobierno a organismos internacionales</td><td>—</td><td>100</td><td>—</td><td>—</td></tr><tr><td>Donación del RM al gobierno de ambulancias</td><td>—</td><td>400</td><td>—</td><td>—</td></tr><tr><td>Gasto de consumo final</td><td>—</td><td>9.200</td><td>25.000</td><td>—</td></tr><tr><td>FBK (FBKF + VE)</td><td>6.000 (4.000 + 2.000)</td><td>1.000</td><td>1.000</td><td>—</td></tr></table></div><p>El saldo de ingresos primarios del gobierno fue:</p>`,
                    opts: [String.raw`$ 3.000`, String.raw`$ 5.200`, String.raw`$ 7.500`, String.raw`$ 4.000`],
                    ans: 3,
                    sol: String.raw`EEB 1.000 + Imp−S 4.000 + 200 − 1.200 = 4.000. (3.000 olvida el EEB = CKF; 5.200 olvida los intereses pagados; 7.500 suma los impuestos sobre el ingreso, que son de la distribución secundaria.)`,
                },
                {
                    t: "t3",
                    q: String.raw`<div class="box"><p><strong>Módulo 2 · Cuentas corrientes por sector.</strong> Misma economía del Módulo 1 (PIB, GCFH, GCFG y FBK son los del COU). Cifras en millones de $; — = no corresponde.</p><table><tr><th>Transacción</th><th>Sociedades</th><th>Gobierno</th><th>Hogares</th><th>Resto del Mundo</th></tr><tr><td>EEB / ingreso mixto</td><td>11.000</td><td>1.000</td><td>7.500</td><td>—</td></tr><tr><td>RA pagada por productores residentes (total 18.000): pagada a no residentes</td><td>—</td><td>—</td><td>—</td><td>300</td></tr><tr><td>RA recibida del exterior por hogares residentes</td><td>—</td><td>—</td><td>500</td><td>—</td></tr><tr><td>Impuestos netos de subvenciones sobre la producción (total)</td><td>—</td><td>4.000</td><td>—</td><td>—</td></tr><tr><td>Rentas de la propiedad pagadas</td><td>3.000</td><td>1.200</td><td>400</td><td>600</td></tr><tr><td>Rentas de la propiedad recibidas</td><td>800</td><td>200</td><td>1.600</td><td>?</td></tr><tr><td>Impuestos corrientes sobre el ingreso pagados</td><td>2.000</td><td>—</td><td>1.500</td><td>—</td></tr><tr><td>Contribuciones sociales pagadas por los hogares</td><td>—</td><td>—</td><td>3.000</td><td>—</td></tr><tr><td>Prestaciones sociales pagadas por el gobierno</td><td>—</td><td>4.500</td><td>—</td><td>—</td></tr><tr><td>Remesas: recibidas por hogares desde el exterior / enviadas al exterior</td><td>—</td><td>—</td><td>700 / 200</td><td>—</td></tr><tr><td>Donación en efectivo del RM al gobierno para gastos corrientes</td><td>—</td><td>300</td><td>—</td><td>—</td></tr><tr><td>Cuotas pagadas por el gobierno a organismos internacionales</td><td>—</td><td>100</td><td>—</td><td>—</td></tr><tr><td>Donación del RM al gobierno de ambulancias</td><td>—</td><td>400</td><td>—</td><td>—</td></tr><tr><td>Gasto de consumo final</td><td>—</td><td>9.200</td><td>25.000</td><td>—</td></tr><tr><td>FBK (FBKF + VE)</td><td>6.000 (4.000 + 2.000)</td><td>1.000</td><td>1.000</td><td>—</td></tr></table></div><p>Las transferencias corrientes netas del exterior (TCN) fueron:</p>`,
                    opts: [String.raw`$ 700`, String.raw`$ 1.100`, String.raw`$ 1.000`, String.raw`$ 400`],
                    ans: 0,
                    sol: String.raw`Recibidas: remesas 700 + donación en efectivo 300 = 1.000. Pagadas: remesas 200 + cuotas 100 = 300. TCN = 700. La donación de ambulancias (400) es transferencia de capital: si la sumás da 1.100.`,
                },
                {
                    t: "t5",
                    q: String.raw`<div class="box"><p><strong>Módulo 2 · Cuentas corrientes por sector.</strong> Misma economía del Módulo 1 (PIB, GCFH, GCFG y FBK son los del COU). Cifras en millones de $; — = no corresponde.</p><table><tr><th>Transacción</th><th>Sociedades</th><th>Gobierno</th><th>Hogares</th><th>Resto del Mundo</th></tr><tr><td>EEB / ingreso mixto</td><td>11.000</td><td>1.000</td><td>7.500</td><td>—</td></tr><tr><td>RA pagada por productores residentes (total 18.000): pagada a no residentes</td><td>—</td><td>—</td><td>—</td><td>300</td></tr><tr><td>RA recibida del exterior por hogares residentes</td><td>—</td><td>—</td><td>500</td><td>—</td></tr><tr><td>Impuestos netos de subvenciones sobre la producción (total)</td><td>—</td><td>4.000</td><td>—</td><td>—</td></tr><tr><td>Rentas de la propiedad pagadas</td><td>3.000</td><td>1.200</td><td>400</td><td>600</td></tr><tr><td>Rentas de la propiedad recibidas</td><td>800</td><td>200</td><td>1.600</td><td>?</td></tr><tr><td>Impuestos corrientes sobre el ingreso pagados</td><td>2.000</td><td>—</td><td>1.500</td><td>—</td></tr><tr><td>Contribuciones sociales pagadas por los hogares</td><td>—</td><td>—</td><td>3.000</td><td>—</td></tr><tr><td>Prestaciones sociales pagadas por el gobierno</td><td>—</td><td>4.500</td><td>—</td><td>—</td></tr><tr><td>Remesas: recibidas por hogares desde el exterior / enviadas al exterior</td><td>—</td><td>—</td><td>700 / 200</td><td>—</td></tr><tr><td>Donación en efectivo del RM al gobierno para gastos corrientes</td><td>—</td><td>300</td><td>—</td><td>—</td></tr><tr><td>Cuotas pagadas por el gobierno a organismos internacionales</td><td>—</td><td>100</td><td>—</td><td>—</td></tr><tr><td>Donación del RM al gobierno de ambulancias</td><td>—</td><td>400</td><td>—</td><td>—</td></tr><tr><td>Gasto de consumo final</td><td>—</td><td>9.200</td><td>25.000</td><td>—</td></tr><tr><td>FBK (FBKF + VE)</td><td>6.000 (4.000 + 2.000)</td><td>1.000</td><td>1.000</td><td>—</td></tr></table></div><p>El ingreso disponible bruto del gobierno fue:</p>`,
                    opts: [String.raw`$ 6.600`, String.raw`$ 10.700`, String.raw`$ 6.200`, String.raw`$ 3.200`],
                    ans: 2,
                    sol: String.raw`4.000 + impuestos sobre el ingreso (2.000 + 1.500) + contribuciones 3.000 − prestaciones 4.500 + 300 − 100 = 6.200. (6.600 mete las ambulancias; 10.700 no resta las prestaciones; 3.200 olvida las contribuciones.)`,
                },
                {
                    t: "t5",
                    q: String.raw`<div class="box"><p><strong>Módulo 2 · Cuentas corrientes por sector.</strong> Misma economía del Módulo 1 (PIB, GCFH, GCFG y FBK son los del COU). Cifras en millones de $; — = no corresponde.</p><table><tr><th>Transacción</th><th>Sociedades</th><th>Gobierno</th><th>Hogares</th><th>Resto del Mundo</th></tr><tr><td>EEB / ingreso mixto</td><td>11.000</td><td>1.000</td><td>7.500</td><td>—</td></tr><tr><td>RA pagada por productores residentes (total 18.000): pagada a no residentes</td><td>—</td><td>—</td><td>—</td><td>300</td></tr><tr><td>RA recibida del exterior por hogares residentes</td><td>—</td><td>—</td><td>500</td><td>—</td></tr><tr><td>Impuestos netos de subvenciones sobre la producción (total)</td><td>—</td><td>4.000</td><td>—</td><td>—</td></tr><tr><td>Rentas de la propiedad pagadas</td><td>3.000</td><td>1.200</td><td>400</td><td>600</td></tr><tr><td>Rentas de la propiedad recibidas</td><td>800</td><td>200</td><td>1.600</td><td>?</td></tr><tr><td>Impuestos corrientes sobre el ingreso pagados</td><td>2.000</td><td>—</td><td>1.500</td><td>—</td></tr><tr><td>Contribuciones sociales pagadas por los hogares</td><td>—</td><td>—</td><td>3.000</td><td>—</td></tr><tr><td>Prestaciones sociales pagadas por el gobierno</td><td>—</td><td>4.500</td><td>—</td><td>—</td></tr><tr><td>Remesas: recibidas por hogares desde el exterior / enviadas al exterior</td><td>—</td><td>—</td><td>700 / 200</td><td>—</td></tr><tr><td>Donación en efectivo del RM al gobierno para gastos corrientes</td><td>—</td><td>300</td><td>—</td><td>—</td></tr><tr><td>Cuotas pagadas por el gobierno a organismos internacionales</td><td>—</td><td>100</td><td>—</td><td>—</td></tr><tr><td>Donación del RM al gobierno de ambulancias</td><td>—</td><td>400</td><td>—</td><td>—</td></tr><tr><td>Gasto de consumo final</td><td>—</td><td>9.200</td><td>25.000</td><td>—</td></tr><tr><td>FBK (FBKF + VE)</td><td>6.000 (4.000 + 2.000)</td><td>1.000</td><td>1.000</td><td>—</td></tr></table></div><p>El ingreso disponible bruto de los hogares fue:</p>`,
                    opts: [String.raw`$ 30.400`, String.raw`$ 26.900`, String.raw`$ 27.400`, String.raw`$ 28.900`],
                    ans: 2,
                    sol: String.raw`26.900 − 1.500 (IRPF) − 3.000 (contribuciones) + 4.500 (prestaciones) + 700 − 200 (remesas) = 27.400. (30.400 no resta las contribuciones; 28.900 no resta los impuestos.)`,
                },
                {
                    t: "t6",
                    q: String.raw`<div class="box"><p><strong>Módulo 2 · Cuentas corrientes por sector.</strong> Misma economía del Módulo 1 (PIB, GCFH, GCFG y FBK son los del COU). Cifras en millones de $; — = no corresponde.</p><table><tr><th>Transacción</th><th>Sociedades</th><th>Gobierno</th><th>Hogares</th><th>Resto del Mundo</th></tr><tr><td>EEB / ingreso mixto</td><td>11.000</td><td>1.000</td><td>7.500</td><td>—</td></tr><tr><td>RA pagada por productores residentes (total 18.000): pagada a no residentes</td><td>—</td><td>—</td><td>—</td><td>300</td></tr><tr><td>RA recibida del exterior por hogares residentes</td><td>—</td><td>—</td><td>500</td><td>—</td></tr><tr><td>Impuestos netos de subvenciones sobre la producción (total)</td><td>—</td><td>4.000</td><td>—</td><td>—</td></tr><tr><td>Rentas de la propiedad pagadas</td><td>3.000</td><td>1.200</td><td>400</td><td>600</td></tr><tr><td>Rentas de la propiedad recibidas</td><td>800</td><td>200</td><td>1.600</td><td>?</td></tr><tr><td>Impuestos corrientes sobre el ingreso pagados</td><td>2.000</td><td>—</td><td>1.500</td><td>—</td></tr><tr><td>Contribuciones sociales pagadas por los hogares</td><td>—</td><td>—</td><td>3.000</td><td>—</td></tr><tr><td>Prestaciones sociales pagadas por el gobierno</td><td>—</td><td>4.500</td><td>—</td><td>—</td></tr><tr><td>Remesas: recibidas por hogares desde el exterior / enviadas al exterior</td><td>—</td><td>—</td><td>700 / 200</td><td>—</td></tr><tr><td>Donación en efectivo del RM al gobierno para gastos corrientes</td><td>—</td><td>300</td><td>—</td><td>—</td></tr><tr><td>Cuotas pagadas por el gobierno a organismos internacionales</td><td>—</td><td>100</td><td>—</td><td>—</td></tr><tr><td>Donación del RM al gobierno de ambulancias</td><td>—</td><td>400</td><td>—</td><td>—</td></tr><tr><td>Gasto de consumo final</td><td>—</td><td>9.200</td><td>25.000</td><td>—</td></tr><tr><td>FBK (FBKF + VE)</td><td>6.000 (4.000 + 2.000)</td><td>1.000</td><td>1.000</td><td>—</td></tr></table></div><p>El ahorro bruto de las sociedades fue:</p>`,
                    opts: [String.raw`$ 6.800`, String.raw`$ 8.800`, String.raw`$ 800`, String.raw`$ 11.000`],
                    ans: 0,
                    sol: String.raw`Ingreso primario = 11.000 + 800 − 3.000 = 8.800. Ingreso disponible = 8.800 − 2.000 = 6.800. Las sociedades no tienen consumo final: ahorro = 6.800. (800 es su préstamo neto.)`,
                },
                {
                    t: "t6",
                    q: String.raw`<div class="box"><p><strong>Módulo 2 · Cuentas corrientes por sector.</strong> Misma economía del Módulo 1 (PIB, GCFH, GCFG y FBK son los del COU). Cifras en millones de $; — = no corresponde.</p><table><tr><th>Transacción</th><th>Sociedades</th><th>Gobierno</th><th>Hogares</th><th>Resto del Mundo</th></tr><tr><td>EEB / ingreso mixto</td><td>11.000</td><td>1.000</td><td>7.500</td><td>—</td></tr><tr><td>RA pagada por productores residentes (total 18.000): pagada a no residentes</td><td>—</td><td>—</td><td>—</td><td>300</td></tr><tr><td>RA recibida del exterior por hogares residentes</td><td>—</td><td>—</td><td>500</td><td>—</td></tr><tr><td>Impuestos netos de subvenciones sobre la producción (total)</td><td>—</td><td>4.000</td><td>—</td><td>—</td></tr><tr><td>Rentas de la propiedad pagadas</td><td>3.000</td><td>1.200</td><td>400</td><td>600</td></tr><tr><td>Rentas de la propiedad recibidas</td><td>800</td><td>200</td><td>1.600</td><td>?</td></tr><tr><td>Impuestos corrientes sobre el ingreso pagados</td><td>2.000</td><td>—</td><td>1.500</td><td>—</td></tr><tr><td>Contribuciones sociales pagadas por los hogares</td><td>—</td><td>—</td><td>3.000</td><td>—</td></tr><tr><td>Prestaciones sociales pagadas por el gobierno</td><td>—</td><td>4.500</td><td>—</td><td>—</td></tr><tr><td>Remesas: recibidas por hogares desde el exterior / enviadas al exterior</td><td>—</td><td>—</td><td>700 / 200</td><td>—</td></tr><tr><td>Donación en efectivo del RM al gobierno para gastos corrientes</td><td>—</td><td>300</td><td>—</td><td>—</td></tr><tr><td>Cuotas pagadas por el gobierno a organismos internacionales</td><td>—</td><td>100</td><td>—</td><td>—</td></tr><tr><td>Donación del RM al gobierno de ambulancias</td><td>—</td><td>400</td><td>—</td><td>—</td></tr><tr><td>Gasto de consumo final</td><td>—</td><td>9.200</td><td>25.000</td><td>—</td></tr><tr><td>FBK (FBKF + VE)</td><td>6.000 (4.000 + 2.000)</td><td>1.000</td><td>1.000</td><td>—</td></tr></table></div><p>El ahorro bruto del gobierno fue:</p>`,
                    opts: [String.raw`$ 6.200`, String.raw`$ −2.600`, String.raw`$ −3.600`, String.raw`$ −3.000`],
                    ans: 3,
                    sol: String.raw`Ahorro = ID − GCFG = 6.200 − 9.200 = −3.000. (−2.600 suma las ambulancias; −3.600 es el préstamo neto.)`,
                },
                {
                    t: "t6",
                    q: String.raw`<div class="box"><p><strong>Módulo 2 · Cuentas corrientes por sector.</strong> Misma economía del Módulo 1 (PIB, GCFH, GCFG y FBK son los del COU). Cifras en millones de $; — = no corresponde.</p><table><tr><th>Transacción</th><th>Sociedades</th><th>Gobierno</th><th>Hogares</th><th>Resto del Mundo</th></tr><tr><td>EEB / ingreso mixto</td><td>11.000</td><td>1.000</td><td>7.500</td><td>—</td></tr><tr><td>RA pagada por productores residentes (total 18.000): pagada a no residentes</td><td>—</td><td>—</td><td>—</td><td>300</td></tr><tr><td>RA recibida del exterior por hogares residentes</td><td>—</td><td>—</td><td>500</td><td>—</td></tr><tr><td>Impuestos netos de subvenciones sobre la producción (total)</td><td>—</td><td>4.000</td><td>—</td><td>—</td></tr><tr><td>Rentas de la propiedad pagadas</td><td>3.000</td><td>1.200</td><td>400</td><td>600</td></tr><tr><td>Rentas de la propiedad recibidas</td><td>800</td><td>200</td><td>1.600</td><td>?</td></tr><tr><td>Impuestos corrientes sobre el ingreso pagados</td><td>2.000</td><td>—</td><td>1.500</td><td>—</td></tr><tr><td>Contribuciones sociales pagadas por los hogares</td><td>—</td><td>—</td><td>3.000</td><td>—</td></tr><tr><td>Prestaciones sociales pagadas por el gobierno</td><td>—</td><td>4.500</td><td>—</td><td>—</td></tr><tr><td>Remesas: recibidas por hogares desde el exterior / enviadas al exterior</td><td>—</td><td>—</td><td>700 / 200</td><td>—</td></tr><tr><td>Donación en efectivo del RM al gobierno para gastos corrientes</td><td>—</td><td>300</td><td>—</td><td>—</td></tr><tr><td>Cuotas pagadas por el gobierno a organismos internacionales</td><td>—</td><td>100</td><td>—</td><td>—</td></tr><tr><td>Donación del RM al gobierno de ambulancias</td><td>—</td><td>400</td><td>—</td><td>—</td></tr><tr><td>Gasto de consumo final</td><td>—</td><td>9.200</td><td>25.000</td><td>—</td></tr><tr><td>FBK (FBKF + VE)</td><td>6.000 (4.000 + 2.000)</td><td>1.000</td><td>1.000</td><td>—</td></tr></table></div><p>El ahorro nacional bruto fue:</p>`,
                    opts: [String.raw`$ 8.000`, String.raw`$ 6.200`, String.raw`$ 6.600`, String.raw`$ 7.300`],
                    ans: 1,
                    sol: String.raw`INDB = 39.700 + 700 = 40.400. AB = 40.400 − (25.000 + 9.200) = 6.200. Por sectores: 6.800 − 3.000 + 2.400 (hogares: 27.400 − 25.000) = 6.200.`,
                },
                {
                    t: "t3",
                    q: String.raw`<div class="box"><p><strong>Módulo 2 · Cuentas corrientes por sector.</strong> Misma economía del Módulo 1 (PIB, GCFH, GCFG y FBK son los del COU). Cifras en millones de $; — = no corresponde.</p><table><tr><th>Transacción</th><th>Sociedades</th><th>Gobierno</th><th>Hogares</th><th>Resto del Mundo</th></tr><tr><td>EEB / ingreso mixto</td><td>11.000</td><td>1.000</td><td>7.500</td><td>—</td></tr><tr><td>RA pagada por productores residentes (total 18.000): pagada a no residentes</td><td>—</td><td>—</td><td>—</td><td>300</td></tr><tr><td>RA recibida del exterior por hogares residentes</td><td>—</td><td>—</td><td>500</td><td>—</td></tr><tr><td>Impuestos netos de subvenciones sobre la producción (total)</td><td>—</td><td>4.000</td><td>—</td><td>—</td></tr><tr><td>Rentas de la propiedad pagadas</td><td>3.000</td><td>1.200</td><td>400</td><td>600</td></tr><tr><td>Rentas de la propiedad recibidas</td><td>800</td><td>200</td><td>1.600</td><td>?</td></tr><tr><td>Impuestos corrientes sobre el ingreso pagados</td><td>2.000</td><td>—</td><td>1.500</td><td>—</td></tr><tr><td>Contribuciones sociales pagadas por los hogares</td><td>—</td><td>—</td><td>3.000</td><td>—</td></tr><tr><td>Prestaciones sociales pagadas por el gobierno</td><td>—</td><td>4.500</td><td>—</td><td>—</td></tr><tr><td>Remesas: recibidas por hogares desde el exterior / enviadas al exterior</td><td>—</td><td>—</td><td>700 / 200</td><td>—</td></tr><tr><td>Donación en efectivo del RM al gobierno para gastos corrientes</td><td>—</td><td>300</td><td>—</td><td>—</td></tr><tr><td>Cuotas pagadas por el gobierno a organismos internacionales</td><td>—</td><td>100</td><td>—</td><td>—</td></tr><tr><td>Donación del RM al gobierno de ambulancias</td><td>—</td><td>400</td><td>—</td><td>—</td></tr><tr><td>Gasto de consumo final</td><td>—</td><td>9.200</td><td>25.000</td><td>—</td></tr><tr><td>FBK (FBKF + VE)</td><td>6.000 (4.000 + 2.000)</td><td>1.000</td><td>1.000</td><td>—</td></tr></table></div><p>El saldo de la cuenta corriente con el exterior fue:</p>`,
                    opts: [String.raw`$ −1.800`, String.raw`$ −1.400`, String.raw`$ −700`, String.raw`$ 1.800`],
                    ans: 0,
                    sol: String.raw`AB − FBK = 6.200 − 8.000 = −1.800. Chequeo: (E − M) + RNFE + TCN = (11.500 − 12.200) − 1.800 + 700 = −1.800. (−1.400 es el préstamo neto, que suma las transferencias de capital; −700 es solo el saldo comercial.)`,
                },
                {
                    t: "t7",
                    q: String.raw`<div class="box"><p><strong>Módulo 3 · Cuenta financiera.</strong> Misma economía de los módulos 1 y 2. Cifras en millones de $.</p><table><tr><th rowspan="2">Instrumento</th><th colspan="2">Sociedades</th><th colspan="2">Gobierno</th><th colspan="2">Hogares</th><th colspan="2">Resto del Mundo</th></tr><tr><th>ANA</th><th>ENP</th><th>ANA</th><th>ENP</th><th>ANA</th><th>ENP</th><th>ANA</th><th>ENP</th></tr><tr><td>Dinero legal y depósitos</td><td>500</td><td>1.500</td><td>200</td><td>0</td><td>1.200</td><td>0</td><td>0</td><td>400</td></tr><tr><td>Valores distintos de acciones</td><td>2.000</td><td>200</td><td>0</td><td>?</td><td>300</td><td>0</td><td>1.200</td><td>300</td></tr><tr><td>Préstamos y créditos comerciales</td><td>1.300</td><td>700</td><td>0</td><td>800</td><td>0</td><td>500</td><td>?</td><td>200</td></tr><tr><td>Acciones y otras participaciones</td><td>200</td><td>800</td><td>0</td><td>0</td><td>400</td><td>0</td><td>400</td><td>200</td></tr></table><p>ANA: adquisición neta de activos financieros. ENP: emisión neta de pasivos.</p></div><p>El préstamo neto (PRN) del gobierno fue:</p>`,
                    opts: [String.raw`$ −4.000`, String.raw`$ −2.600`, String.raw`$ −3.600`, String.raw`$ −3.000`],
                    ans: 2,
                    sol: String.raw`Cuenta de capital: ahorro −3.000 + transferencias de capital recibidas 400 − FBK 1.000 = −3.600. (−4.000 olvida las ambulancias; −3.000 es el ahorro.)`,
                },
                {
                    t: "t7",
                    q: String.raw`<div class="box"><p><strong>Módulo 3 · Cuenta financiera.</strong> Misma economía de los módulos 1 y 2. Cifras en millones de $.</p><table><tr><th rowspan="2">Instrumento</th><th colspan="2">Sociedades</th><th colspan="2">Gobierno</th><th colspan="2">Hogares</th><th colspan="2">Resto del Mundo</th></tr><tr><th>ANA</th><th>ENP</th><th>ANA</th><th>ENP</th><th>ANA</th><th>ENP</th><th>ANA</th><th>ENP</th></tr><tr><td>Dinero legal y depósitos</td><td>500</td><td>1.500</td><td>200</td><td>0</td><td>1.200</td><td>0</td><td>0</td><td>400</td></tr><tr><td>Valores distintos de acciones</td><td>2.000</td><td>200</td><td>0</td><td>?</td><td>300</td><td>0</td><td>1.200</td><td>300</td></tr><tr><td>Préstamos y créditos comerciales</td><td>1.300</td><td>700</td><td>0</td><td>800</td><td>0</td><td>500</td><td>?</td><td>200</td></tr><tr><td>Acciones y otras participaciones</td><td>200</td><td>800</td><td>0</td><td>0</td><td>400</td><td>0</td><td>400</td><td>200</td></tr></table><p>ANA: adquisición neta de activos financieros. ENP: emisión neta de pasivos.</p></div><p>La emisión neta de valores distintos de acciones del gobierno (casillero ?) fue:</p>`,
                    opts: [String.raw`$ 3.800`, String.raw`$ 3.000`, String.raw`$ 3.400`, String.raw`$ 2.800`],
                    ans: 1,
                    sol: String.raw`PRN gobierno = ANA − ENP: −3.600 = 200 − (X + 800), entonces X = 3.000. Chequeo por instrumento: activos en valores 300 + 2.000 + 1.200 = 3.500 = pasivos 3.000 + 200 + 300.`,
                },
                {
                    t: "t7",
                    q: String.raw`<div class="box"><p><strong>Módulo 3 · Cuenta financiera.</strong> Misma economía de los módulos 1 y 2. Cifras en millones de $.</p><table><tr><th rowspan="2">Instrumento</th><th colspan="2">Sociedades</th><th colspan="2">Gobierno</th><th colspan="2">Hogares</th><th colspan="2">Resto del Mundo</th></tr><tr><th>ANA</th><th>ENP</th><th>ANA</th><th>ENP</th><th>ANA</th><th>ENP</th><th>ANA</th><th>ENP</th></tr><tr><td>Dinero legal y depósitos</td><td>500</td><td>1.500</td><td>200</td><td>0</td><td>1.200</td><td>0</td><td>0</td><td>400</td></tr><tr><td>Valores distintos de acciones</td><td>2.000</td><td>200</td><td>0</td><td>?</td><td>300</td><td>0</td><td>1.200</td><td>300</td></tr><tr><td>Préstamos y créditos comerciales</td><td>1.300</td><td>700</td><td>0</td><td>800</td><td>0</td><td>500</td><td>?</td><td>200</td></tr><tr><td>Acciones y otras participaciones</td><td>200</td><td>800</td><td>0</td><td>0</td><td>400</td><td>0</td><td>400</td><td>200</td></tr></table><p>ANA: adquisición neta de activos financieros. ENP: emisión neta de pasivos.</p></div><p>La adquisición neta de préstamos y créditos comerciales del Resto del Mundo (casillero ?) fue:</p>`,
                    opts: [String.raw`$ 1.300`, String.raw`$ 2.200`, String.raw`$ 400`, String.raw`$ 900`],
                    ans: 3,
                    sol: String.raw`En préstamos, pasivos totales = 500 (hogares) + 800 (gobierno) + 700 (sociedades) + 200 (RM) = 2.200. Activos: 1.300 (sociedades) + X = 2.200, entonces X = 900.`,
                },
                {
                    t: "t7",
                    q: String.raw`<div class="box"><p><strong>Módulo 3 · Cuenta financiera.</strong> Misma economía de los módulos 1 y 2. Cifras en millones de $.</p><table><tr><th rowspan="2">Instrumento</th><th colspan="2">Sociedades</th><th colspan="2">Gobierno</th><th colspan="2">Hogares</th><th colspan="2">Resto del Mundo</th></tr><tr><th>ANA</th><th>ENP</th><th>ANA</th><th>ENP</th><th>ANA</th><th>ENP</th><th>ANA</th><th>ENP</th></tr><tr><td>Dinero legal y depósitos</td><td>500</td><td>1.500</td><td>200</td><td>0</td><td>1.200</td><td>0</td><td>0</td><td>400</td></tr><tr><td>Valores distintos de acciones</td><td>2.000</td><td>200</td><td>0</td><td>?</td><td>300</td><td>0</td><td>1.200</td><td>300</td></tr><tr><td>Préstamos y créditos comerciales</td><td>1.300</td><td>700</td><td>0</td><td>800</td><td>0</td><td>500</td><td>?</td><td>200</td></tr><tr><td>Acciones y otras participaciones</td><td>200</td><td>800</td><td>0</td><td>0</td><td>400</td><td>0</td><td>400</td><td>200</td></tr></table><p>ANA: adquisición neta de activos financieros. ENP: emisión neta de pasivos.</p></div><p>El préstamo neto del Resto del Mundo fue:</p>`,
                    opts: [String.raw`$ −1.400`, String.raw`$ 1.800`, String.raw`$ 2.500`, String.raw`$ 1.400`],
                    ans: 3,
                    sol: String.raw`RM: ANA = 1.200 + 900 + 400 = 2.500; ENP = 400 + 300 + 200 + 200 = 1.100; PRN = 1.400. Chequeo: PRN de la economía = 800 (sociedades) − 3.600 (gobierno) + 1.400 (hogares) = −1.400 = saldo corriente −1.800 + TK 400.`,
                },
                {
                    t: "t7",
                    q: String.raw`<div class="box"><p><strong>Módulo 3 · Cuenta financiera.</strong> Misma economía de los módulos 1 y 2. Cifras en millones de $.</p><table><tr><th rowspan="2">Instrumento</th><th colspan="2">Sociedades</th><th colspan="2">Gobierno</th><th colspan="2">Hogares</th><th colspan="2">Resto del Mundo</th></tr><tr><th>ANA</th><th>ENP</th><th>ANA</th><th>ENP</th><th>ANA</th><th>ENP</th><th>ANA</th><th>ENP</th></tr><tr><td>Dinero legal y depósitos</td><td>500</td><td>1.500</td><td>200</td><td>0</td><td>1.200</td><td>0</td><td>0</td><td>400</td></tr><tr><td>Valores distintos de acciones</td><td>2.000</td><td>200</td><td>0</td><td>?</td><td>300</td><td>0</td><td>1.200</td><td>300</td></tr><tr><td>Préstamos y créditos comerciales</td><td>1.300</td><td>700</td><td>0</td><td>800</td><td>0</td><td>500</td><td>?</td><td>200</td></tr><tr><td>Acciones y otras participaciones</td><td>200</td><td>800</td><td>0</td><td>0</td><td>400</td><td>0</td><td>400</td><td>200</td></tr></table><p>ANA: adquisición neta de activos financieros. ENP: emisión neta de pasivos.</p></div><p>A partir de los datos, es correcto afirmar que:</p>`,
                    opts: [
                        String.raw`Las sociedades tuvieron necesidad de financiamiento porque emitieron pasivos`,
                        String.raw`Los hogares tuvieron capacidad de financiamiento por $ 1.400`,
                        String.raw`El gobierno no adquirió activos financieros`,
                        String.raw`La economía le prestó $ 1.400 al Resto del Mundo`,
                    ],
                    ans: 1,
                    sol: String.raw`Hogares: ahorro 2.400 − FBK 1.000 = 1.400 = ANA 1.900 − ENP 500. Las sociedades emitieron pasivos (3.200) pero adquirieron más activos (4.000): PRN +800. El gobierno adquirió depósitos por 200. La economía se endeudó 1.400 con el RM, no le prestó.`,
                },
                {
                    t: "t4",
                    q: String.raw`<p>¿Cuál de los siguientes NO forma parte de la formación bruta de capital fijo?</p>`,
                    opts: [
                        String.raw`Vehículos importados para transporte de mercancías`,
                        String.raw`Maquinaria agrícola importada`,
                        String.raw`Leche fresca utilizada para elaborar productos lácteos`,
                        String.raw`Servidores informáticos importados`,
                    ],
                    ans: 2,
                    sol: String.raw`La leche se agota en el proceso: es consumo intermedio. Los demás son bienes de capital, y que sean importados no cambia su clasificación.`,
                },
                {
                    t: "t6",
                    q: String.raw`<p>¿Cuál de las siguientes erogaciones computa en el gasto de consumo final del gobierno?</p>`,
                    opts: [
                        String.raw`Los sueldos de los médicos de los hospitales públicos`,
                        String.raw`La compra de patrulleros por el Ministerio del Interior`,
                        String.raw`Las remuneraciones de los trabajadores de ANTEL`,
                        String.raw`El combustible comprado por el BROU`,
                    ],
                    ans: 0,
                    sol: String.raw`Los sueldos de médicos públicos son RA del gobierno, integran su producción no de mercado y por lo tanto su GCF. Los patrulleros son FBKF; ANTEL y el BROU son sociedades.`,
                },
            ],
        },
        {
            id: "sim-2",
            title: "Simulacro 2 · 1ª prueba (SCN)",
            kind: "simulacro",
            minutes: 120,
            scoring: { correct: 1.5, wrong: -0.5, blank: 0 },
            note: String.raw`<p>Simulacro con el formato de la 1ª prueba de 2023 y 2024: preguntas de múltiple opción en módulos (COU, cuentas corrientes por sector, cuenta financiera) más preguntas conceptuales. Cada correcta suma 1,5, cada incorrecta resta 0,5, en blanco 0. La prueba real vale 45 puntos (mínimo 18) y tiene 32 preguntas; con 30 correctas llegás al máximo. Sin materiales, con calculadora, 2 horas.</p><p><strong>Estrategia</strong>: con 4 opciones y −0,5 por error, adivinar totalmente al azar tiene valor esperado 0 (0,25 × 1,5 − 0,75 × 0,5 = 0). Si descartaste al menos una opción, conviene responder: con 3 opciones posibles el valor esperado es +0,17 y con 2, +0,5. En los módulos numéricos, completá primero los casilleros con ? del cuadro y chequeá que el PIB dé igual por las tres ópticas antes de marcar.</p>`,
            questions: [
                {
                    t: "t2",
                    q: String.raw`<div class="box"><p><strong>Módulo 1 · COU.</strong> Economía con dos ramas de mercado (Rama 1: agropecuaria; Rama 2: industria manufacturera) y el Gobierno, que produce servicios no de mercado. Cifras en millones de $. Los casilleros con ? no se conocen.</p><table><tr><th></th><th>Rama 1</th><th>Rama 2</th><th>Gobierno</th><th>GCFH</th><th>GCFG</th><th>FBKF</th><th>VE</th><th>E</th><th>Total</th></tr><tr><td>Rama 1</td><td>1.500</td><td>7.000</td><td>0</td><td>3.000</td><td>0</td><td>800</td><td>700</td><td>9.000</td><td>22.000</td></tr><tr><td>Rama 2</td><td>2.500</td><td>5.000</td><td>2.000</td><td>18.000</td><td>0</td><td>2.000</td><td>?</td><td>4.000</td><td>33.000</td></tr><tr><td>Gobierno</td><td>0</td><td>0</td><td>0</td><td>500</td><td>?</td><td>0</td><td>0</td><td>0</td><td>?</td></tr><tr><td>Importaciones</td><td>1.000</td><td>4.000</td><td>1.500</td><td>5.000</td><td>0</td><td>4.500</td><td>0</td><td>0</td><td>16.000</td></tr><tr><td>RA</td><td>4.000</td><td>8.000</td><td>7.500</td><td colspan="6"></td></tr><tr><td>CKF</td><td>1.500</td><td>2.500</td><td>1.000</td><td colspan="6"></td></tr><tr><td>Imp−S</td><td>500</td><td>3.000</td><td>0</td><td colspan="6"></td></tr><tr><td>EEN</td><td>?</td><td>3.500</td><td>0</td><td colspan="6"></td></tr></table></div><p>La variación de existencias de productos de la Rama 2 (casillero ?) fue:</p>`,
                    opts: [String.raw`$ 500`, String.raw`$ −500`, String.raw`$ 0`, String.raw`$ 700`],
                    ans: 1,
                    sol: String.raw`Fila Rama 2: 2.500 + 5.000 + 2.000 + 18.000 + 0 + 2.000 + X + 4.000 = 33.000, entonces 33.500 + X = 33.000 y X = −500. Se usaron bienes industriales en stock de años anteriores.`,
                },
                {
                    t: "t4",
                    q: String.raw`<div class="box"><p><strong>Módulo 1 · COU.</strong> Economía con dos ramas de mercado (Rama 1: agropecuaria; Rama 2: industria manufacturera) y el Gobierno, que produce servicios no de mercado. Cifras en millones de $. Los casilleros con ? no se conocen.</p><table><tr><th></th><th>Rama 1</th><th>Rama 2</th><th>Gobierno</th><th>GCFH</th><th>GCFG</th><th>FBKF</th><th>VE</th><th>E</th><th>Total</th></tr><tr><td>Rama 1</td><td>1.500</td><td>7.000</td><td>0</td><td>3.000</td><td>0</td><td>800</td><td>700</td><td>9.000</td><td>22.000</td></tr><tr><td>Rama 2</td><td>2.500</td><td>5.000</td><td>2.000</td><td>18.000</td><td>0</td><td>2.000</td><td>?</td><td>4.000</td><td>33.000</td></tr><tr><td>Gobierno</td><td>0</td><td>0</td><td>0</td><td>500</td><td>?</td><td>0</td><td>0</td><td>0</td><td>?</td></tr><tr><td>Importaciones</td><td>1.000</td><td>4.000</td><td>1.500</td><td>5.000</td><td>0</td><td>4.500</td><td>0</td><td>0</td><td>16.000</td></tr><tr><td>RA</td><td>4.000</td><td>8.000</td><td>7.500</td><td colspan="6"></td></tr><tr><td>CKF</td><td>1.500</td><td>2.500</td><td>1.000</td><td colspan="6"></td></tr><tr><td>Imp−S</td><td>500</td><td>3.000</td><td>0</td><td colspan="6"></td></tr><tr><td>EEN</td><td>?</td><td>3.500</td><td>0</td><td colspan="6"></td></tr></table></div><p>El excedente de explotación neto de la Rama 1 (casillero ?) fue:</p>`,
                    opts: [String.raw`$ 12.500`, String.raw`$ 17.000`, String.raw`$ 12.000`, String.raw`$ 11.000`],
                    ans: 3,
                    sol: String.raw`VBP R1 = 22.000. CI R1 = 1.500 + 2.500 + 0 + 1.000 = 5.000. VAB = 17.000. EEN = 17.000 − 4.000 − 1.500 − 500 = 11.000. (12.500 es el EEB; 12.000 sale de olvidar el insumo importado en el CI.)`,
                },
                {
                    t: "t6",
                    q: String.raw`<div class="box"><p><strong>Módulo 1 · COU.</strong> Economía con dos ramas de mercado (Rama 1: agropecuaria; Rama 2: industria manufacturera) y el Gobierno, que produce servicios no de mercado. Cifras en millones de $. Los casilleros con ? no se conocen.</p><table><tr><th></th><th>Rama 1</th><th>Rama 2</th><th>Gobierno</th><th>GCFH</th><th>GCFG</th><th>FBKF</th><th>VE</th><th>E</th><th>Total</th></tr><tr><td>Rama 1</td><td>1.500</td><td>7.000</td><td>0</td><td>3.000</td><td>0</td><td>800</td><td>700</td><td>9.000</td><td>22.000</td></tr><tr><td>Rama 2</td><td>2.500</td><td>5.000</td><td>2.000</td><td>18.000</td><td>0</td><td>2.000</td><td>?</td><td>4.000</td><td>33.000</td></tr><tr><td>Gobierno</td><td>0</td><td>0</td><td>0</td><td>500</td><td>?</td><td>0</td><td>0</td><td>0</td><td>?</td></tr><tr><td>Importaciones</td><td>1.000</td><td>4.000</td><td>1.500</td><td>5.000</td><td>0</td><td>4.500</td><td>0</td><td>0</td><td>16.000</td></tr><tr><td>RA</td><td>4.000</td><td>8.000</td><td>7.500</td><td colspan="6"></td></tr><tr><td>CKF</td><td>1.500</td><td>2.500</td><td>1.000</td><td colspan="6"></td></tr><tr><td>Imp−S</td><td>500</td><td>3.000</td><td>0</td><td colspan="6"></td></tr><tr><td>EEN</td><td>?</td><td>3.500</td><td>0</td><td colspan="6"></td></tr></table></div><p>El gasto de consumo final del gobierno (casillero ?) fue:</p>`,
                    opts: [String.raw`$ 11.500`, String.raw`$ 12.000`, String.raw`$ 8.500`, String.raw`$ 12.500`],
                    ans: 0,
                    sol: String.raw`Producción del gobierno por su columna: CI (0 + 2.000 + 0 + 1.500) + RA 7.500 + CKF 1.000 = 12.000. Vendió 500 a hogares: GCFG = 12.000 − 500 = 11.500.`,
                },
                {
                    t: "t3",
                    q: String.raw`<div class="box"><p><strong>Módulo 1 · COU.</strong> Economía con dos ramas de mercado (Rama 1: agropecuaria; Rama 2: industria manufacturera) y el Gobierno, que produce servicios no de mercado. Cifras en millones de $. Los casilleros con ? no se conocen.</p><table><tr><th></th><th>Rama 1</th><th>Rama 2</th><th>Gobierno</th><th>GCFH</th><th>GCFG</th><th>FBKF</th><th>VE</th><th>E</th><th>Total</th></tr><tr><td>Rama 1</td><td>1.500</td><td>7.000</td><td>0</td><td>3.000</td><td>0</td><td>800</td><td>700</td><td>9.000</td><td>22.000</td></tr><tr><td>Rama 2</td><td>2.500</td><td>5.000</td><td>2.000</td><td>18.000</td><td>0</td><td>2.000</td><td>?</td><td>4.000</td><td>33.000</td></tr><tr><td>Gobierno</td><td>0</td><td>0</td><td>0</td><td>500</td><td>?</td><td>0</td><td>0</td><td>0</td><td>?</td></tr><tr><td>Importaciones</td><td>1.000</td><td>4.000</td><td>1.500</td><td>5.000</td><td>0</td><td>4.500</td><td>0</td><td>0</td><td>16.000</td></tr><tr><td>RA</td><td>4.000</td><td>8.000</td><td>7.500</td><td colspan="6"></td></tr><tr><td>CKF</td><td>1.500</td><td>2.500</td><td>1.000</td><td colspan="6"></td></tr><tr><td>Imp−S</td><td>500</td><td>3.000</td><td>0</td><td colspan="6"></td></tr><tr><td>EEN</td><td>?</td><td>3.500</td><td>0</td><td colspan="6"></td></tr></table></div><p>El PIB fue:</p>`,
                    opts: [String.raw`$ 43.500`, String.raw`$ 58.500`, String.raw`$ 42.500`, String.raw`$ 67.000`],
                    ans: 2,
                    sol: String.raw`ΣVAB = 17.000 + 17.000 + 8.500 = 42.500. Gasto: GCFH (3.000 + 18.000 + 500 + 5.000 = 26.500) + GCFG 11.500 + FBKF (800 + 2.000 + 4.500 = 7.300) + VE (700 − 500 = 200) + E 13.000 − M 16.000 = 42.500. (43.500 toma la VE de la Rama 2 como +500.)`,
                },
                {
                    t: "t4",
                    q: String.raw`<div class="box"><p><strong>Módulo 1 · COU.</strong> Economía con dos ramas de mercado (Rama 1: agropecuaria; Rama 2: industria manufacturera) y el Gobierno, que produce servicios no de mercado. Cifras en millones de $. Los casilleros con ? no se conocen.</p><table><tr><th></th><th>Rama 1</th><th>Rama 2</th><th>Gobierno</th><th>GCFH</th><th>GCFG</th><th>FBKF</th><th>VE</th><th>E</th><th>Total</th></tr><tr><td>Rama 1</td><td>1.500</td><td>7.000</td><td>0</td><td>3.000</td><td>0</td><td>800</td><td>700</td><td>9.000</td><td>22.000</td></tr><tr><td>Rama 2</td><td>2.500</td><td>5.000</td><td>2.000</td><td>18.000</td><td>0</td><td>2.000</td><td>?</td><td>4.000</td><td>33.000</td></tr><tr><td>Gobierno</td><td>0</td><td>0</td><td>0</td><td>500</td><td>?</td><td>0</td><td>0</td><td>0</td><td>?</td></tr><tr><td>Importaciones</td><td>1.000</td><td>4.000</td><td>1.500</td><td>5.000</td><td>0</td><td>4.500</td><td>0</td><td>0</td><td>16.000</td></tr><tr><td>RA</td><td>4.000</td><td>8.000</td><td>7.500</td><td colspan="6"></td></tr><tr><td>CKF</td><td>1.500</td><td>2.500</td><td>1.000</td><td colspan="6"></td></tr><tr><td>Imp−S</td><td>500</td><td>3.000</td><td>0</td><td colspan="6"></td></tr><tr><td>EEN</td><td>?</td><td>3.500</td><td>0</td><td colspan="6"></td></tr></table></div><p>La contribución de la industria manufacturera al PIB fue:</p>`,
                    opts: [String.raw`$ 33.000`, String.raw`$ 16.000`, String.raw`$ 17.000`, String.raw`$ 14.000`],
                    ans: 2,
                    sol: String.raw`Se mide por el VAB de la Rama 2: 33.000 − 16.000 = 17.000. (33.000 es su producción, 16.000 su CI, 14.000 su VAB sin impuestos netos.)`,
                },
                {
                    t: "t2",
                    q: String.raw`<div class="box"><p><strong>Módulo 1 · COU.</strong> Economía con dos ramas de mercado (Rama 1: agropecuaria; Rama 2: industria manufacturera) y el Gobierno, que produce servicios no de mercado. Cifras en millones de $. Los casilleros con ? no se conocen.</p><table><tr><th></th><th>Rama 1</th><th>Rama 2</th><th>Gobierno</th><th>GCFH</th><th>GCFG</th><th>FBKF</th><th>VE</th><th>E</th><th>Total</th></tr><tr><td>Rama 1</td><td>1.500</td><td>7.000</td><td>0</td><td>3.000</td><td>0</td><td>800</td><td>700</td><td>9.000</td><td>22.000</td></tr><tr><td>Rama 2</td><td>2.500</td><td>5.000</td><td>2.000</td><td>18.000</td><td>0</td><td>2.000</td><td>?</td><td>4.000</td><td>33.000</td></tr><tr><td>Gobierno</td><td>0</td><td>0</td><td>0</td><td>500</td><td>?</td><td>0</td><td>0</td><td>0</td><td>?</td></tr><tr><td>Importaciones</td><td>1.000</td><td>4.000</td><td>1.500</td><td>5.000</td><td>0</td><td>4.500</td><td>0</td><td>0</td><td>16.000</td></tr><tr><td>RA</td><td>4.000</td><td>8.000</td><td>7.500</td><td colspan="6"></td></tr><tr><td>CKF</td><td>1.500</td><td>2.500</td><td>1.000</td><td colspan="6"></td></tr><tr><td>Imp−S</td><td>500</td><td>3.000</td><td>0</td><td colspan="6"></td></tr><tr><td>EEN</td><td>?</td><td>3.500</td><td>0</td><td colspan="6"></td></tr></table></div><p>La utilización final de bienes importados fue:</p>`,
                    opts: [String.raw`$ 9.500`, String.raw`$ 16.000`, String.raw`$ 6.500`, String.raw`$ 5.000`],
                    ans: 0,
                    sol: String.raw`Fila importaciones, columnas de utilización final: GCFH 5.000 + FBKF 4.500 = 9.500. (16.000 son las importaciones totales; 6.500 las intermedias.)`,
                },
                {
                    t: "t2",
                    q: String.raw`<div class="box"><p><strong>Módulo 1 · COU.</strong> Economía con dos ramas de mercado (Rama 1: agropecuaria; Rama 2: industria manufacturera) y el Gobierno, que produce servicios no de mercado. Cifras en millones de $. Los casilleros con ? no se conocen.</p><table><tr><th></th><th>Rama 1</th><th>Rama 2</th><th>Gobierno</th><th>GCFH</th><th>GCFG</th><th>FBKF</th><th>VE</th><th>E</th><th>Total</th></tr><tr><td>Rama 1</td><td>1.500</td><td>7.000</td><td>0</td><td>3.000</td><td>0</td><td>800</td><td>700</td><td>9.000</td><td>22.000</td></tr><tr><td>Rama 2</td><td>2.500</td><td>5.000</td><td>2.000</td><td>18.000</td><td>0</td><td>2.000</td><td>?</td><td>4.000</td><td>33.000</td></tr><tr><td>Gobierno</td><td>0</td><td>0</td><td>0</td><td>500</td><td>?</td><td>0</td><td>0</td><td>0</td><td>?</td></tr><tr><td>Importaciones</td><td>1.000</td><td>4.000</td><td>1.500</td><td>5.000</td><td>0</td><td>4.500</td><td>0</td><td>0</td><td>16.000</td></tr><tr><td>RA</td><td>4.000</td><td>8.000</td><td>7.500</td><td colspan="6"></td></tr><tr><td>CKF</td><td>1.500</td><td>2.500</td><td>1.000</td><td colspan="6"></td></tr><tr><td>Imp−S</td><td>500</td><td>3.000</td><td>0</td><td colspan="6"></td></tr><tr><td>EEN</td><td>?</td><td>3.500</td><td>0</td><td colspan="6"></td></tr></table></div><p>El valor 7.000 registrado en la fila de la Rama 1 y la columna de la Rama 2 puede corresponder a:</p>`,
                    opts: [
                        String.raw`Tractores comprados por productores agropecuarios`,
                        String.raw`Fertilizantes importados por la industria`,
                        String.raw`Leche en polvo exportada`,
                        String.raw`Trigo producido en el país comprado por molinos harineros`,
                    ],
                    ans: 3,
                    sol: String.raw`Fila Rama 1 = producto agropecuario nacional; columna Rama 2 = usado como insumo por la industria. Los tractores son FBKF, los fertilizantes importados van en la fila de importaciones y la leche en polvo exportada es producto industrial en la columna E.`,
                },
                {
                    t: "t3",
                    q: String.raw`<div class="box"><p><strong>Módulo 1 · COU.</strong> Economía con dos ramas de mercado (Rama 1: agropecuaria; Rama 2: industria manufacturera) y el Gobierno, que produce servicios no de mercado. Cifras en millones de $. Los casilleros con ? no se conocen.</p><table><tr><th></th><th>Rama 1</th><th>Rama 2</th><th>Gobierno</th><th>GCFH</th><th>GCFG</th><th>FBKF</th><th>VE</th><th>E</th><th>Total</th></tr><tr><td>Rama 1</td><td>1.500</td><td>7.000</td><td>0</td><td>3.000</td><td>0</td><td>800</td><td>700</td><td>9.000</td><td>22.000</td></tr><tr><td>Rama 2</td><td>2.500</td><td>5.000</td><td>2.000</td><td>18.000</td><td>0</td><td>2.000</td><td>?</td><td>4.000</td><td>33.000</td></tr><tr><td>Gobierno</td><td>0</td><td>0</td><td>0</td><td>500</td><td>?</td><td>0</td><td>0</td><td>0</td><td>?</td></tr><tr><td>Importaciones</td><td>1.000</td><td>4.000</td><td>1.500</td><td>5.000</td><td>0</td><td>4.500</td><td>0</td><td>0</td><td>16.000</td></tr><tr><td>RA</td><td>4.000</td><td>8.000</td><td>7.500</td><td colspan="6"></td></tr><tr><td>CKF</td><td>1.500</td><td>2.500</td><td>1.000</td><td colspan="6"></td></tr><tr><td>Imp−S</td><td>500</td><td>3.000</td><td>0</td><td colspan="6"></td></tr><tr><td>EEN</td><td>?</td><td>3.500</td><td>0</td><td colspan="6"></td></tr></table></div><p>La formación bruta de capital (FBK) fue:</p>`,
                    opts: [String.raw`$ 7.300`, String.raw`$ 7.500`, String.raw`$ 8.500`, String.raw`$ 3.000`],
                    ans: 1,
                    sol: String.raw`FBK = FBKF + VE = 7.300 + (700 − 500) = 7.500. (7.300 es solo la FBKF; 8.500 toma la VE de la Rama 2 como +500; 3.000 olvida la FBKF importada.)`,
                },
                {
                    t: "t3",
                    q: String.raw`<div class="box"><p><strong>Módulo 1 · COU.</strong> Economía con dos ramas de mercado (Rama 1: agropecuaria; Rama 2: industria manufacturera) y el Gobierno, que produce servicios no de mercado. Cifras en millones de $. Los casilleros con ? no se conocen.</p><table><tr><th></th><th>Rama 1</th><th>Rama 2</th><th>Gobierno</th><th>GCFH</th><th>GCFG</th><th>FBKF</th><th>VE</th><th>E</th><th>Total</th></tr><tr><td>Rama 1</td><td>1.500</td><td>7.000</td><td>0</td><td>3.000</td><td>0</td><td>800</td><td>700</td><td>9.000</td><td>22.000</td></tr><tr><td>Rama 2</td><td>2.500</td><td>5.000</td><td>2.000</td><td>18.000</td><td>0</td><td>2.000</td><td>?</td><td>4.000</td><td>33.000</td></tr><tr><td>Gobierno</td><td>0</td><td>0</td><td>0</td><td>500</td><td>?</td><td>0</td><td>0</td><td>0</td><td>?</td></tr><tr><td>Importaciones</td><td>1.000</td><td>4.000</td><td>1.500</td><td>5.000</td><td>0</td><td>4.500</td><td>0</td><td>0</td><td>16.000</td></tr><tr><td>RA</td><td>4.000</td><td>8.000</td><td>7.500</td><td colspan="6"></td></tr><tr><td>CKF</td><td>1.500</td><td>2.500</td><td>1.000</td><td colspan="6"></td></tr><tr><td>Imp−S</td><td>500</td><td>3.000</td><td>0</td><td colspan="6"></td></tr><tr><td>EEN</td><td>?</td><td>3.500</td><td>0</td><td colspan="6"></td></tr></table></div><p>El excedente de explotación bruto de la economía fue:</p>`,
                    opts: [String.raw`$ 19.500`, String.raw`$ 14.500`, String.raw`$ 23.000`, String.raw`$ 18.500`],
                    ans: 0,
                    sol: String.raw`EEB = CKF (1.500 + 2.500 + 1.000 = 5.000) + EEN (11.000 + 3.500 + 0 = 14.500) = 19.500. Chequeo: PIB 42.500 = RA 19.500 + Imp−S 3.500 + EEB 19.500.`,
                },
                {
                    t: "t2",
                    q: String.raw`<div class="box"><p><strong>Módulo 1 · COU.</strong> Economía con dos ramas de mercado (Rama 1: agropecuaria; Rama 2: industria manufacturera) y el Gobierno, que produce servicios no de mercado. Cifras en millones de $. Los casilleros con ? no se conocen.</p><table><tr><th></th><th>Rama 1</th><th>Rama 2</th><th>Gobierno</th><th>GCFH</th><th>GCFG</th><th>FBKF</th><th>VE</th><th>E</th><th>Total</th></tr><tr><td>Rama 1</td><td>1.500</td><td>7.000</td><td>0</td><td>3.000</td><td>0</td><td>800</td><td>700</td><td>9.000</td><td>22.000</td></tr><tr><td>Rama 2</td><td>2.500</td><td>5.000</td><td>2.000</td><td>18.000</td><td>0</td><td>2.000</td><td>?</td><td>4.000</td><td>33.000</td></tr><tr><td>Gobierno</td><td>0</td><td>0</td><td>0</td><td>500</td><td>?</td><td>0</td><td>0</td><td>0</td><td>?</td></tr><tr><td>Importaciones</td><td>1.000</td><td>4.000</td><td>1.500</td><td>5.000</td><td>0</td><td>4.500</td><td>0</td><td>0</td><td>16.000</td></tr><tr><td>RA</td><td>4.000</td><td>8.000</td><td>7.500</td><td colspan="6"></td></tr><tr><td>CKF</td><td>1.500</td><td>2.500</td><td>1.000</td><td colspan="6"></td></tr><tr><td>Imp−S</td><td>500</td><td>3.000</td><td>0</td><td colspan="6"></td></tr><tr><td>EEN</td><td>?</td><td>3.500</td><td>0</td><td colspan="6"></td></tr></table></div><p>La utilización intermedia total (consumo intermedio de la economía) fue:</p>`,
                    opts: [String.raw`$ 18.000`, String.raw`$ 83.000`, String.raw`$ 24.500`, String.raw`$ 58.500`],
                    ans: 2,
                    sol: String.raw`CI R1 5.000 + CI R2 16.000 + CI Gob 3.500 = 24.500 (incluye 6.500 importados; 18.000 es solo lo nacional). 83.000 es la oferta total (VBP 67.000 + M 16.000).`,
                },
                {
                    t: "t4",
                    q: String.raw`<div class="box"><p><strong>Módulo 1 · COU.</strong> Economía con dos ramas de mercado (Rama 1: agropecuaria; Rama 2: industria manufacturera) y el Gobierno, que produce servicios no de mercado. Cifras en millones de $. Los casilleros con ? no se conocen.</p><table><tr><th></th><th>Rama 1</th><th>Rama 2</th><th>Gobierno</th><th>GCFH</th><th>GCFG</th><th>FBKF</th><th>VE</th><th>E</th><th>Total</th></tr><tr><td>Rama 1</td><td>1.500</td><td>7.000</td><td>0</td><td>3.000</td><td>0</td><td>800</td><td>700</td><td>9.000</td><td>22.000</td></tr><tr><td>Rama 2</td><td>2.500</td><td>5.000</td><td>2.000</td><td>18.000</td><td>0</td><td>2.000</td><td>?</td><td>4.000</td><td>33.000</td></tr><tr><td>Gobierno</td><td>0</td><td>0</td><td>0</td><td>500</td><td>?</td><td>0</td><td>0</td><td>0</td><td>?</td></tr><tr><td>Importaciones</td><td>1.000</td><td>4.000</td><td>1.500</td><td>5.000</td><td>0</td><td>4.500</td><td>0</td><td>0</td><td>16.000</td></tr><tr><td>RA</td><td>4.000</td><td>8.000</td><td>7.500</td><td colspan="6"></td></tr><tr><td>CKF</td><td>1.500</td><td>2.500</td><td>1.000</td><td colspan="6"></td></tr><tr><td>Imp−S</td><td>500</td><td>3.000</td><td>0</td><td colspan="6"></td></tr><tr><td>EEN</td><td>?</td><td>3.500</td><td>0</td><td colspan="6"></td></tr></table></div><p>Si en la Rama 2 los aportes patronales fueron $ 1.200 y los personales $ 900, los salarios nominales fueron:</p>`,
                    opts: [String.raw`$ 5.900`, String.raw`$ 6.800`, String.raw`$ 7.100`, String.raw`$ 8.000`],
                    ans: 1,
                    sol: String.raw`Salarios nominales = RA − patronales = 8.000 − 1.200 = 6.800. (5.900 es el salario líquido.)`,
                },
                {
                    t: "t2",
                    q: String.raw`<div class="box"><p><strong>Módulo 1 · COU.</strong> Economía con dos ramas de mercado (Rama 1: agropecuaria; Rama 2: industria manufacturera) y el Gobierno, que produce servicios no de mercado. Cifras en millones de $. Los casilleros con ? no se conocen.</p><table><tr><th></th><th>Rama 1</th><th>Rama 2</th><th>Gobierno</th><th>GCFH</th><th>GCFG</th><th>FBKF</th><th>VE</th><th>E</th><th>Total</th></tr><tr><td>Rama 1</td><td>1.500</td><td>7.000</td><td>0</td><td>3.000</td><td>0</td><td>800</td><td>700</td><td>9.000</td><td>22.000</td></tr><tr><td>Rama 2</td><td>2.500</td><td>5.000</td><td>2.000</td><td>18.000</td><td>0</td><td>2.000</td><td>?</td><td>4.000</td><td>33.000</td></tr><tr><td>Gobierno</td><td>0</td><td>0</td><td>0</td><td>500</td><td>?</td><td>0</td><td>0</td><td>0</td><td>?</td></tr><tr><td>Importaciones</td><td>1.000</td><td>4.000</td><td>1.500</td><td>5.000</td><td>0</td><td>4.500</td><td>0</td><td>0</td><td>16.000</td></tr><tr><td>RA</td><td>4.000</td><td>8.000</td><td>7.500</td><td colspan="6"></td></tr><tr><td>CKF</td><td>1.500</td><td>2.500</td><td>1.000</td><td colspan="6"></td></tr><tr><td>Imp−S</td><td>500</td><td>3.000</td><td>0</td><td colspan="6"></td></tr><tr><td>EEN</td><td>?</td><td>3.500</td><td>0</td><td colspan="6"></td></tr></table></div><p>A partir de este COU es posible conocer:</p>`,
                    opts: [
                        String.raw`La FBKF realizada por el sector Gobierno`,
                        String.raw`El ingreso primario de los hogares`,
                        String.raw`La remuneración de asalariados percibida por los residentes`,
                        String.raw`La remuneración de asalariados pagada por los productores residentes`,
                    ],
                    ans: 3,
                    sol: String.raw`El COU está por ramas: muestra la RA que paga cada rama. La columna FBKF no dice qué sector invirtió; el ingreso primario y la RA percibida requieren datos de sectores y del exterior.`,
                },
                {
                    t: "t3",
                    q: String.raw`<div class="box"><p><strong>Módulo 2 · Cuentas corrientes por sector.</strong> Misma economía del Módulo 1 (PIB, GCFH, GCFG y FBK son los del COU). Cifras en millones de $; — = no corresponde.</p><table><tr><th>Transacción</th><th>Sociedades</th><th>Gobierno</th><th>Hogares</th><th>Resto del Mundo</th></tr><tr><td>EEB / ingreso mixto</td><td>11.500</td><td>1.000</td><td>7.000</td><td>—</td></tr><tr><td>RA pagada por productores residentes (total 19.500): pagada a no residentes</td><td>—</td><td>—</td><td>—</td><td>200</td></tr><tr><td>RA recibida del exterior por hogares residentes</td><td>—</td><td>—</td><td>600</td><td>—</td></tr><tr><td>Impuestos netos de subvenciones sobre la producción (total)</td><td>—</td><td>3.500</td><td>—</td><td>—</td></tr><tr><td>Rentas de la propiedad pagadas</td><td>2.500</td><td>1.500</td><td>300</td><td>400</td></tr><tr><td>Rentas de la propiedad recibidas</td><td>1.000</td><td>300</td><td>1.200</td><td>?</td></tr><tr><td>Impuestos corrientes sobre el ingreso pagados</td><td>1.800</td><td>—</td><td>2.200</td><td>—</td></tr><tr><td>Contribuciones sociales pagadas por los hogares</td><td>—</td><td>—</td><td>3.600</td><td>—</td></tr><tr><td>Prestaciones sociales pagadas por el gobierno</td><td>—</td><td>5.000</td><td>—</td><td>—</td></tr><tr><td>Remesas: recibidas por hogares desde el exterior / enviadas al exterior</td><td>—</td><td>—</td><td>900 / 100</td><td>—</td></tr><tr><td>Donación en efectivo del RM al gobierno para gastos corrientes</td><td>—</td><td>250</td><td>—</td><td>—</td></tr><tr><td>Donación del RM al gobierno de equipos informáticos para escuelas</td><td>—</td><td>600</td><td>—</td><td>—</td></tr><tr><td>Gasto de consumo final</td><td>—</td><td>11.500</td><td>26.500</td><td>—</td></tr><tr><td>FBK (FBKF + VE)</td><td>5.200 (5.000 + 200)</td><td>1.300</td><td>1.000</td><td>—</td></tr></table></div><p>La remuneración neta de factores del exterior (RNFE) fue:</p>`,
                    opts: [String.raw`$ −1.800`, String.raw`$ −2.200`, String.raw`$ 400`, String.raw`$ −1.400`],
                    ans: 3,
                    sol: String.raw`Rentas recibidas por el RM: pagadas totales (2.500 + 1.500 + 300 + 400 = 4.700) − recibidas por residentes (1.000 + 300 + 1.200 = 2.500) = 2.200. Rentas netas = 400 − 2.200 = −1.800. RA neta = 600 − 200 = 400. RNFE = −1.400.`,
                },
                {
                    t: "t3",
                    q: String.raw`<div class="box"><p><strong>Módulo 2 · Cuentas corrientes por sector.</strong> Misma economía del Módulo 1 (PIB, GCFH, GCFG y FBK son los del COU). Cifras en millones de $; — = no corresponde.</p><table><tr><th>Transacción</th><th>Sociedades</th><th>Gobierno</th><th>Hogares</th><th>Resto del Mundo</th></tr><tr><td>EEB / ingreso mixto</td><td>11.500</td><td>1.000</td><td>7.000</td><td>—</td></tr><tr><td>RA pagada por productores residentes (total 19.500): pagada a no residentes</td><td>—</td><td>—</td><td>—</td><td>200</td></tr><tr><td>RA recibida del exterior por hogares residentes</td><td>—</td><td>—</td><td>600</td><td>—</td></tr><tr><td>Impuestos netos de subvenciones sobre la producción (total)</td><td>—</td><td>3.500</td><td>—</td><td>—</td></tr><tr><td>Rentas de la propiedad pagadas</td><td>2.500</td><td>1.500</td><td>300</td><td>400</td></tr><tr><td>Rentas de la propiedad recibidas</td><td>1.000</td><td>300</td><td>1.200</td><td>?</td></tr><tr><td>Impuestos corrientes sobre el ingreso pagados</td><td>1.800</td><td>—</td><td>2.200</td><td>—</td></tr><tr><td>Contribuciones sociales pagadas por los hogares</td><td>—</td><td>—</td><td>3.600</td><td>—</td></tr><tr><td>Prestaciones sociales pagadas por el gobierno</td><td>—</td><td>5.000</td><td>—</td><td>—</td></tr><tr><td>Remesas: recibidas por hogares desde el exterior / enviadas al exterior</td><td>—</td><td>—</td><td>900 / 100</td><td>—</td></tr><tr><td>Donación en efectivo del RM al gobierno para gastos corrientes</td><td>—</td><td>250</td><td>—</td><td>—</td></tr><tr><td>Donación del RM al gobierno de equipos informáticos para escuelas</td><td>—</td><td>600</td><td>—</td><td>—</td></tr><tr><td>Gasto de consumo final</td><td>—</td><td>11.500</td><td>26.500</td><td>—</td></tr><tr><td>FBK (FBKF + VE)</td><td>5.200 (5.000 + 200)</td><td>1.300</td><td>1.000</td><td>—</td></tr></table></div><p>El ingreso nacional bruto fue:</p>`,
                    opts: [String.raw`$ 43.900`, String.raw`$ 41.100`, String.raw`$ 42.150`, String.raw`$ 40.700`],
                    ans: 1,
                    sol: String.raw`INB = 42.500 − 1.400 = 41.100.`,
                },
                {
                    t: "t3",
                    q: String.raw`<div class="box"><p><strong>Módulo 2 · Cuentas corrientes por sector.</strong> Misma economía del Módulo 1 (PIB, GCFH, GCFG y FBK son los del COU). Cifras en millones de $; — = no corresponde.</p><table><tr><th>Transacción</th><th>Sociedades</th><th>Gobierno</th><th>Hogares</th><th>Resto del Mundo</th></tr><tr><td>EEB / ingreso mixto</td><td>11.500</td><td>1.000</td><td>7.000</td><td>—</td></tr><tr><td>RA pagada por productores residentes (total 19.500): pagada a no residentes</td><td>—</td><td>—</td><td>—</td><td>200</td></tr><tr><td>RA recibida del exterior por hogares residentes</td><td>—</td><td>—</td><td>600</td><td>—</td></tr><tr><td>Impuestos netos de subvenciones sobre la producción (total)</td><td>—</td><td>3.500</td><td>—</td><td>—</td></tr><tr><td>Rentas de la propiedad pagadas</td><td>2.500</td><td>1.500</td><td>300</td><td>400</td></tr><tr><td>Rentas de la propiedad recibidas</td><td>1.000</td><td>300</td><td>1.200</td><td>?</td></tr><tr><td>Impuestos corrientes sobre el ingreso pagados</td><td>1.800</td><td>—</td><td>2.200</td><td>—</td></tr><tr><td>Contribuciones sociales pagadas por los hogares</td><td>—</td><td>—</td><td>3.600</td><td>—</td></tr><tr><td>Prestaciones sociales pagadas por el gobierno</td><td>—</td><td>5.000</td><td>—</td><td>—</td></tr><tr><td>Remesas: recibidas por hogares desde el exterior / enviadas al exterior</td><td>—</td><td>—</td><td>900 / 100</td><td>—</td></tr><tr><td>Donación en efectivo del RM al gobierno para gastos corrientes</td><td>—</td><td>250</td><td>—</td><td>—</td></tr><tr><td>Donación del RM al gobierno de equipos informáticos para escuelas</td><td>—</td><td>600</td><td>—</td><td>—</td></tr><tr><td>Gasto de consumo final</td><td>—</td><td>11.500</td><td>26.500</td><td>—</td></tr><tr><td>FBK (FBKF + VE)</td><td>5.200 (5.000 + 200)</td><td>1.300</td><td>1.000</td><td>—</td></tr></table></div><p>El ingreso nacional disponible bruto fue:</p>`,
                    opts: [String.raw`$ 42.750`, String.raw`$ 41.100`, String.raw`$ 42.150`, String.raw`$ 41.950`],
                    ans: 2,
                    sol: String.raw`TCN = remesas 900 − 100 + donación en efectivo 250 = 1.050. INDB = 41.100 + 1.050 = 42.150. Los equipos informáticos (600) son transferencia de capital: si los sumás da 42.750.`,
                },
                {
                    t: "t5",
                    q: String.raw`<div class="box"><p><strong>Módulo 2 · Cuentas corrientes por sector.</strong> Misma economía del Módulo 1 (PIB, GCFH, GCFG y FBK son los del COU). Cifras en millones de $; — = no corresponde.</p><table><tr><th>Transacción</th><th>Sociedades</th><th>Gobierno</th><th>Hogares</th><th>Resto del Mundo</th></tr><tr><td>EEB / ingreso mixto</td><td>11.500</td><td>1.000</td><td>7.000</td><td>—</td></tr><tr><td>RA pagada por productores residentes (total 19.500): pagada a no residentes</td><td>—</td><td>—</td><td>—</td><td>200</td></tr><tr><td>RA recibida del exterior por hogares residentes</td><td>—</td><td>—</td><td>600</td><td>—</td></tr><tr><td>Impuestos netos de subvenciones sobre la producción (total)</td><td>—</td><td>3.500</td><td>—</td><td>—</td></tr><tr><td>Rentas de la propiedad pagadas</td><td>2.500</td><td>1.500</td><td>300</td><td>400</td></tr><tr><td>Rentas de la propiedad recibidas</td><td>1.000</td><td>300</td><td>1.200</td><td>?</td></tr><tr><td>Impuestos corrientes sobre el ingreso pagados</td><td>1.800</td><td>—</td><td>2.200</td><td>—</td></tr><tr><td>Contribuciones sociales pagadas por los hogares</td><td>—</td><td>—</td><td>3.600</td><td>—</td></tr><tr><td>Prestaciones sociales pagadas por el gobierno</td><td>—</td><td>5.000</td><td>—</td><td>—</td></tr><tr><td>Remesas: recibidas por hogares desde el exterior / enviadas al exterior</td><td>—</td><td>—</td><td>900 / 100</td><td>—</td></tr><tr><td>Donación en efectivo del RM al gobierno para gastos corrientes</td><td>—</td><td>250</td><td>—</td><td>—</td></tr><tr><td>Donación del RM al gobierno de equipos informáticos para escuelas</td><td>—</td><td>600</td><td>—</td><td>—</td></tr><tr><td>Gasto de consumo final</td><td>—</td><td>11.500</td><td>26.500</td><td>—</td></tr><tr><td>FBK (FBKF + VE)</td><td>5.200 (5.000 + 200)</td><td>1.300</td><td>1.000</td><td>—</td></tr></table></div><p>El saldo de ingresos primarios de las sociedades fue:</p>`,
                    opts: [String.raw`$ 10.000`, String.raw`$ 11.500`, String.raw`$ 8.200`, String.raw`$ 12.500`],
                    ans: 0,
                    sol: String.raw`EEB 11.500 + 1.000 − 2.500 = 10.000. (8.200 ya resta el IRAE, que es de la distribución secundaria.)`,
                },
                {
                    t: "t5",
                    q: String.raw`<div class="box"><p><strong>Módulo 2 · Cuentas corrientes por sector.</strong> Misma economía del Módulo 1 (PIB, GCFH, GCFG y FBK son los del COU). Cifras en millones de $; — = no corresponde.</p><table><tr><th>Transacción</th><th>Sociedades</th><th>Gobierno</th><th>Hogares</th><th>Resto del Mundo</th></tr><tr><td>EEB / ingreso mixto</td><td>11.500</td><td>1.000</td><td>7.000</td><td>—</td></tr><tr><td>RA pagada por productores residentes (total 19.500): pagada a no residentes</td><td>—</td><td>—</td><td>—</td><td>200</td></tr><tr><td>RA recibida del exterior por hogares residentes</td><td>—</td><td>—</td><td>600</td><td>—</td></tr><tr><td>Impuestos netos de subvenciones sobre la producción (total)</td><td>—</td><td>3.500</td><td>—</td><td>—</td></tr><tr><td>Rentas de la propiedad pagadas</td><td>2.500</td><td>1.500</td><td>300</td><td>400</td></tr><tr><td>Rentas de la propiedad recibidas</td><td>1.000</td><td>300</td><td>1.200</td><td>?</td></tr><tr><td>Impuestos corrientes sobre el ingreso pagados</td><td>1.800</td><td>—</td><td>2.200</td><td>—</td></tr><tr><td>Contribuciones sociales pagadas por los hogares</td><td>—</td><td>—</td><td>3.600</td><td>—</td></tr><tr><td>Prestaciones sociales pagadas por el gobierno</td><td>—</td><td>5.000</td><td>—</td><td>—</td></tr><tr><td>Remesas: recibidas por hogares desde el exterior / enviadas al exterior</td><td>—</td><td>—</td><td>900 / 100</td><td>—</td></tr><tr><td>Donación en efectivo del RM al gobierno para gastos corrientes</td><td>—</td><td>250</td><td>—</td><td>—</td></tr><tr><td>Donación del RM al gobierno de equipos informáticos para escuelas</td><td>—</td><td>600</td><td>—</td><td>—</td></tr><tr><td>Gasto de consumo final</td><td>—</td><td>11.500</td><td>26.500</td><td>—</td></tr><tr><td>FBK (FBKF + VE)</td><td>5.200 (5.000 + 200)</td><td>1.300</td><td>1.000</td><td>—</td></tr></table></div><p>El ingreso disponible bruto de los hogares fue:</p>`,
                    opts: [String.raw`$ 31.400`, String.raw`$ 27.800`, String.raw`$ 30.000`, String.raw`$ 17.800`],
                    ans: 1,
                    sol: String.raw`RA recibida = 19.500 − 200 + 600 = 19.900. Ingreso primario = 7.000 + 19.900 + 1.200 − 300 = 27.800. Disponible = 27.800 − 2.200 − 3.600 + 5.000 + 900 − 100 = 27.800 (casualmente igual). 31.400 olvida restar las contribuciones; 30.000 los impuestos; 17.800 resta las prestaciones en vez de sumarlas.`,
                },
                {
                    t: "t6",
                    q: String.raw`<div class="box"><p><strong>Módulo 2 · Cuentas corrientes por sector.</strong> Misma economía del Módulo 1 (PIB, GCFH, GCFG y FBK son los del COU). Cifras en millones de $; — = no corresponde.</p><table><tr><th>Transacción</th><th>Sociedades</th><th>Gobierno</th><th>Hogares</th><th>Resto del Mundo</th></tr><tr><td>EEB / ingreso mixto</td><td>11.500</td><td>1.000</td><td>7.000</td><td>—</td></tr><tr><td>RA pagada por productores residentes (total 19.500): pagada a no residentes</td><td>—</td><td>—</td><td>—</td><td>200</td></tr><tr><td>RA recibida del exterior por hogares residentes</td><td>—</td><td>—</td><td>600</td><td>—</td></tr><tr><td>Impuestos netos de subvenciones sobre la producción (total)</td><td>—</td><td>3.500</td><td>—</td><td>—</td></tr><tr><td>Rentas de la propiedad pagadas</td><td>2.500</td><td>1.500</td><td>300</td><td>400</td></tr><tr><td>Rentas de la propiedad recibidas</td><td>1.000</td><td>300</td><td>1.200</td><td>?</td></tr><tr><td>Impuestos corrientes sobre el ingreso pagados</td><td>1.800</td><td>—</td><td>2.200</td><td>—</td></tr><tr><td>Contribuciones sociales pagadas por los hogares</td><td>—</td><td>—</td><td>3.600</td><td>—</td></tr><tr><td>Prestaciones sociales pagadas por el gobierno</td><td>—</td><td>5.000</td><td>—</td><td>—</td></tr><tr><td>Remesas: recibidas por hogares desde el exterior / enviadas al exterior</td><td>—</td><td>—</td><td>900 / 100</td><td>—</td></tr><tr><td>Donación en efectivo del RM al gobierno para gastos corrientes</td><td>—</td><td>250</td><td>—</td><td>—</td></tr><tr><td>Donación del RM al gobierno de equipos informáticos para escuelas</td><td>—</td><td>600</td><td>—</td><td>—</td></tr><tr><td>Gasto de consumo final</td><td>—</td><td>11.500</td><td>26.500</td><td>—</td></tr><tr><td>FBK (FBKF + VE)</td><td>5.200 (5.000 + 200)</td><td>1.300</td><td>1.000</td><td>—</td></tr></table></div><p>El ahorro bruto de los hogares fue:</p>`,
                    opts: [String.raw`$ 27.800`, String.raw`$ −200`, String.raw`$ 300`, String.raw`$ 1.300`],
                    ans: 3,
                    sol: String.raw`27.800 − GCFH 26.500 = 1.300. (300 es su préstamo neto: 1.300 − FBK 1.000.)`,
                },
                {
                    t: "t6",
                    q: String.raw`<div class="box"><p><strong>Módulo 2 · Cuentas corrientes por sector.</strong> Misma economía del Módulo 1 (PIB, GCFH, GCFG y FBK son los del COU). Cifras en millones de $; — = no corresponde.</p><table><tr><th>Transacción</th><th>Sociedades</th><th>Gobierno</th><th>Hogares</th><th>Resto del Mundo</th></tr><tr><td>EEB / ingreso mixto</td><td>11.500</td><td>1.000</td><td>7.000</td><td>—</td></tr><tr><td>RA pagada por productores residentes (total 19.500): pagada a no residentes</td><td>—</td><td>—</td><td>—</td><td>200</td></tr><tr><td>RA recibida del exterior por hogares residentes</td><td>—</td><td>—</td><td>600</td><td>—</td></tr><tr><td>Impuestos netos de subvenciones sobre la producción (total)</td><td>—</td><td>3.500</td><td>—</td><td>—</td></tr><tr><td>Rentas de la propiedad pagadas</td><td>2.500</td><td>1.500</td><td>300</td><td>400</td></tr><tr><td>Rentas de la propiedad recibidas</td><td>1.000</td><td>300</td><td>1.200</td><td>?</td></tr><tr><td>Impuestos corrientes sobre el ingreso pagados</td><td>1.800</td><td>—</td><td>2.200</td><td>—</td></tr><tr><td>Contribuciones sociales pagadas por los hogares</td><td>—</td><td>—</td><td>3.600</td><td>—</td></tr><tr><td>Prestaciones sociales pagadas por el gobierno</td><td>—</td><td>5.000</td><td>—</td><td>—</td></tr><tr><td>Remesas: recibidas por hogares desde el exterior / enviadas al exterior</td><td>—</td><td>—</td><td>900 / 100</td><td>—</td></tr><tr><td>Donación en efectivo del RM al gobierno para gastos corrientes</td><td>—</td><td>250</td><td>—</td><td>—</td></tr><tr><td>Donación del RM al gobierno de equipos informáticos para escuelas</td><td>—</td><td>600</td><td>—</td><td>—</td></tr><tr><td>Gasto de consumo final</td><td>—</td><td>11.500</td><td>26.500</td><td>—</td></tr><tr><td>FBK (FBKF + VE)</td><td>5.200 (5.000 + 200)</td><td>1.300</td><td>1.000</td><td>—</td></tr></table></div><p>El ahorro bruto del gobierno fue:</p>`,
                    opts: [String.raw`$ −5.350`, String.raw`$ −4.750`, String.raw`$ 6.150`, String.raw`$ −6.050`],
                    ans: 0,
                    sol: String.raw`Ingreso primario = 1.000 + 3.500 + 300 − 1.500 = 3.300. Disponible = 3.300 + 4.000 + 3.600 − 5.000 + 250 = 6.150. Ahorro = 6.150 − 11.500 = −5.350. (−4.750 suma los equipos donados; −6.050 es el préstamo neto.)`,
                },
                {
                    t: "t6",
                    q: String.raw`<div class="box"><p><strong>Módulo 2 · Cuentas corrientes por sector.</strong> Misma economía del Módulo 1 (PIB, GCFH, GCFG y FBK son los del COU). Cifras en millones de $; — = no corresponde.</p><table><tr><th>Transacción</th><th>Sociedades</th><th>Gobierno</th><th>Hogares</th><th>Resto del Mundo</th></tr><tr><td>EEB / ingreso mixto</td><td>11.500</td><td>1.000</td><td>7.000</td><td>—</td></tr><tr><td>RA pagada por productores residentes (total 19.500): pagada a no residentes</td><td>—</td><td>—</td><td>—</td><td>200</td></tr><tr><td>RA recibida del exterior por hogares residentes</td><td>—</td><td>—</td><td>600</td><td>—</td></tr><tr><td>Impuestos netos de subvenciones sobre la producción (total)</td><td>—</td><td>3.500</td><td>—</td><td>—</td></tr><tr><td>Rentas de la propiedad pagadas</td><td>2.500</td><td>1.500</td><td>300</td><td>400</td></tr><tr><td>Rentas de la propiedad recibidas</td><td>1.000</td><td>300</td><td>1.200</td><td>?</td></tr><tr><td>Impuestos corrientes sobre el ingreso pagados</td><td>1.800</td><td>—</td><td>2.200</td><td>—</td></tr><tr><td>Contribuciones sociales pagadas por los hogares</td><td>—</td><td>—</td><td>3.600</td><td>—</td></tr><tr><td>Prestaciones sociales pagadas por el gobierno</td><td>—</td><td>5.000</td><td>—</td><td>—</td></tr><tr><td>Remesas: recibidas por hogares desde el exterior / enviadas al exterior</td><td>—</td><td>—</td><td>900 / 100</td><td>—</td></tr><tr><td>Donación en efectivo del RM al gobierno para gastos corrientes</td><td>—</td><td>250</td><td>—</td><td>—</td></tr><tr><td>Donación del RM al gobierno de equipos informáticos para escuelas</td><td>—</td><td>600</td><td>—</td><td>—</td></tr><tr><td>Gasto de consumo final</td><td>—</td><td>11.500</td><td>26.500</td><td>—</td></tr><tr><td>FBK (FBKF + VE)</td><td>5.200 (5.000 + 200)</td><td>1.300</td><td>1.000</td><td>—</td></tr></table></div><p>El ahorro nacional bruto fue:</p>`,
                    opts: [String.raw`$ 4.750`, String.raw`$ 7.500`, String.raw`$ 4.150`, String.raw`$ 3.100`],
                    ans: 2,
                    sol: String.raw`INDB − GCF = 42.150 − 38.000 = 4.150. Por sectores: sociedades 8.200 (= 10.000 − 1.800) + hogares 1.300 − gobierno 5.350 = 4.150.`,
                },
                {
                    t: "t7",
                    q: String.raw`<div class="box"><p><strong>Módulo 3 · Cuenta financiera.</strong> Misma economía de los módulos 1 y 2. Cifras en millones de $.</p><table><tr><th rowspan="2">Instrumento</th><th colspan="2">Sociedades</th><th colspan="2">Gobierno</th><th colspan="2">Hogares</th><th colspan="2">Resto del Mundo</th></tr><tr><th>ANA</th><th>ENP</th><th>ANA</th><th>ENP</th><th>ANA</th><th>ENP</th><th>ANA</th><th>ENP</th></tr><tr><td>Dinero legal y depósitos</td><td>300</td><td>1.000</td><td>450</td><td>0</td><td>600</td><td>0</td><td>0</td><td>?</td></tr><tr><td>Valores distintos de acciones</td><td>?</td><td>0</td><td>0</td><td>5.000</td><td>0</td><td>0</td><td>1.300</td><td>500</td></tr><tr><td>Préstamos y créditos comerciales</td><td>1.500</td><td>1.200</td><td>0</td><td>1.500</td><td>0</td><td>500</td><td>1.900</td><td>200</td></tr><tr><td>Acciones y otras participaciones</td><td>0</td><td>800</td><td>0</td><td>0</td><td>200</td><td>0</td><td>700</td><td>100</td></tr></table><p>ANA: adquisición neta de activos financieros. ENP: emisión neta de pasivos.</p></div><p>El préstamo neto de las sociedades fue:</p>`,
                    opts: [String.raw`$ 8.200`, String.raw`$ −3.000`, String.raw`$ 3.000`, String.raw`$ 3.200`],
                    ans: 2,
                    sol: String.raw`Cuenta de capital: ahorro 8.200 − FBK 5.200 = 3.000. (3.200 olvida la VE.)`,
                },
                {
                    t: "t7",
                    q: String.raw`<div class="box"><p><strong>Módulo 3 · Cuenta financiera.</strong> Misma economía de los módulos 1 y 2. Cifras en millones de $.</p><table><tr><th rowspan="2">Instrumento</th><th colspan="2">Sociedades</th><th colspan="2">Gobierno</th><th colspan="2">Hogares</th><th colspan="2">Resto del Mundo</th></tr><tr><th>ANA</th><th>ENP</th><th>ANA</th><th>ENP</th><th>ANA</th><th>ENP</th><th>ANA</th><th>ENP</th></tr><tr><td>Dinero legal y depósitos</td><td>300</td><td>1.000</td><td>450</td><td>0</td><td>600</td><td>0</td><td>0</td><td>?</td></tr><tr><td>Valores distintos de acciones</td><td>?</td><td>0</td><td>0</td><td>5.000</td><td>0</td><td>0</td><td>1.300</td><td>500</td></tr><tr><td>Préstamos y créditos comerciales</td><td>1.500</td><td>1.200</td><td>0</td><td>1.500</td><td>0</td><td>500</td><td>1.900</td><td>200</td></tr><tr><td>Acciones y otras participaciones</td><td>0</td><td>800</td><td>0</td><td>0</td><td>200</td><td>0</td><td>700</td><td>100</td></tr></table><p>ANA: adquisición neta de activos financieros. ENP: emisión neta de pasivos.</p></div><p>La adquisición neta de valores distintos de acciones por parte de las sociedades (casillero ?) fue:</p>`,
                    opts: [String.raw`$ 4.200`, String.raw`$ 1.200`, String.raw`$ 5.500`, String.raw`$ 3.700`],
                    ans: 0,
                    sol: String.raw`PRN sociedades = 3.000 = ANA − ENP. ENP = 1.000 + 0 + 1.200 + 800 = 3.000, entonces ANA = 6.000 = 300 + X + 1.500 + 0, X = 4.200. Chequeo por instrumento: 4.200 + 1.300 = 5.500 = 5.000 + 500.`,
                },
                {
                    t: "t7",
                    q: String.raw`<div class="box"><p><strong>Módulo 3 · Cuenta financiera.</strong> Misma economía de los módulos 1 y 2. Cifras en millones de $.</p><table><tr><th rowspan="2">Instrumento</th><th colspan="2">Sociedades</th><th colspan="2">Gobierno</th><th colspan="2">Hogares</th><th colspan="2">Resto del Mundo</th></tr><tr><th>ANA</th><th>ENP</th><th>ANA</th><th>ENP</th><th>ANA</th><th>ENP</th><th>ANA</th><th>ENP</th></tr><tr><td>Dinero legal y depósitos</td><td>300</td><td>1.000</td><td>450</td><td>0</td><td>600</td><td>0</td><td>0</td><td>?</td></tr><tr><td>Valores distintos de acciones</td><td>?</td><td>0</td><td>0</td><td>5.000</td><td>0</td><td>0</td><td>1.300</td><td>500</td></tr><tr><td>Préstamos y créditos comerciales</td><td>1.500</td><td>1.200</td><td>0</td><td>1.500</td><td>0</td><td>500</td><td>1.900</td><td>200</td></tr><tr><td>Acciones y otras participaciones</td><td>0</td><td>800</td><td>0</td><td>0</td><td>200</td><td>0</td><td>700</td><td>100</td></tr></table><p>ANA: adquisición neta de activos financieros. ENP: emisión neta de pasivos.</p></div><p>La emisión neta de dinero legal y depósitos del Resto del Mundo (casillero ?) fue:</p>`,
                    opts: [String.raw`$ 1.350`, String.raw`$ 0`, String.raw`$ 650`, String.raw`$ 350`],
                    ans: 3,
                    sol: String.raw`Activos en depósitos: 300 + 450 + 600 + 0 = 1.350. Pasivos: sociedades 1.000 + RM X. X = 350 (depósitos de residentes en bancos del exterior).`,
                },
                {
                    t: "t7",
                    q: String.raw`<div class="box"><p><strong>Módulo 3 · Cuenta financiera.</strong> Misma economía de los módulos 1 y 2. Cifras en millones de $.</p><table><tr><th rowspan="2">Instrumento</th><th colspan="2">Sociedades</th><th colspan="2">Gobierno</th><th colspan="2">Hogares</th><th colspan="2">Resto del Mundo</th></tr><tr><th>ANA</th><th>ENP</th><th>ANA</th><th>ENP</th><th>ANA</th><th>ENP</th><th>ANA</th><th>ENP</th></tr><tr><td>Dinero legal y depósitos</td><td>300</td><td>1.000</td><td>450</td><td>0</td><td>600</td><td>0</td><td>0</td><td>?</td></tr><tr><td>Valores distintos de acciones</td><td>?</td><td>0</td><td>0</td><td>5.000</td><td>0</td><td>0</td><td>1.300</td><td>500</td></tr><tr><td>Préstamos y créditos comerciales</td><td>1.500</td><td>1.200</td><td>0</td><td>1.500</td><td>0</td><td>500</td><td>1.900</td><td>200</td></tr><tr><td>Acciones y otras participaciones</td><td>0</td><td>800</td><td>0</td><td>0</td><td>200</td><td>0</td><td>700</td><td>100</td></tr></table><p>ANA: adquisición neta de activos financieros. ENP: emisión neta de pasivos.</p></div><p>El préstamo neto del Resto del Mundo fue:</p>`,
                    opts: [String.raw`$ 3.350`, String.raw`$ 2.750`, String.raw`$ −2.750`, String.raw`$ 3.900`],
                    ans: 1,
                    sol: String.raw`RM: ANA 3.900 − ENP 1.150 = 2.750. Chequeo: PRN economía = 3.000 − 6.050 + 300 = −2.750 = saldo corriente (4.150 − 7.500 = −3.350) + TK 600. (3.350 es el saldo corriente con signo cambiado, sin las TK.)`,
                },
                {
                    t: "t7",
                    q: String.raw`<div class="box"><p><strong>Módulo 3 · Cuenta financiera.</strong> Misma economía de los módulos 1 y 2. Cifras en millones de $.</p><table><tr><th rowspan="2">Instrumento</th><th colspan="2">Sociedades</th><th colspan="2">Gobierno</th><th colspan="2">Hogares</th><th colspan="2">Resto del Mundo</th></tr><tr><th>ANA</th><th>ENP</th><th>ANA</th><th>ENP</th><th>ANA</th><th>ENP</th><th>ANA</th><th>ENP</th></tr><tr><td>Dinero legal y depósitos</td><td>300</td><td>1.000</td><td>450</td><td>0</td><td>600</td><td>0</td><td>0</td><td>?</td></tr><tr><td>Valores distintos de acciones</td><td>?</td><td>0</td><td>0</td><td>5.000</td><td>0</td><td>0</td><td>1.300</td><td>500</td></tr><tr><td>Préstamos y créditos comerciales</td><td>1.500</td><td>1.200</td><td>0</td><td>1.500</td><td>0</td><td>500</td><td>1.900</td><td>200</td></tr><tr><td>Acciones y otras participaciones</td><td>0</td><td>800</td><td>0</td><td>0</td><td>200</td><td>0</td><td>700</td><td>100</td></tr></table><p>ANA: adquisición neta de activos financieros. ENP: emisión neta de pasivos.</p></div><p>El préstamo neto del gobierno fue:</p>`,
                    opts: [String.raw`$ −6.050`, String.raw`$ −6.650`, String.raw`$ −5.350`, String.raw`$ −6.500`],
                    ans: 0,
                    sol: String.raw`Capital: −5.350 + 600 − 1.300 = −6.050. Financiera: ANA 450 − ENP (5.000 + 1.500) = −6.050. (−6.500 es solo la emisión de pasivos con signo negativo.)`,
                },
                {
                    t: "t7",
                    q: String.raw`<p>Si la FBK de una economía es 6.556, las transferencias de capital netas son 0 y su préstamo neto es −1.200, el ahorro nacional bruto es:</p>`,
                    opts: [String.raw`$ 7.756`, String.raw`$ 6.556`, String.raw`$ 5.356`, String.raw`$ −1.200`],
                    ans: 2,
                    sol: String.raw`PRN = AB + TK − FBK, entonces AB = −1.200 + 6.556 = 5.356.`,
                },
                {
                    t: "t3",
                    q: String.raw`<p>En una economía abierta, la relación con el Resto del Mundo en términos de transacciones corrientes refiere a:</p>`,
                    opts: [
                        String.raw`Exportaciones e importaciones de bienes y servicios y transferencias de capital`,
                        String.raw`Exportaciones e importaciones de bienes y servicios, remuneración de factores y transferencias corrientes`,
                        String.raw`Solo exportaciones e importaciones de bienes`,
                        String.raw`Remuneración de factores, transferencias corrientes y préstamos recibidos`,
                    ],
                    ans: 1,
                    sol: String.raw`Las transferencias de capital y los préstamos no son transacciones corrientes.`,
                },
                {
                    t: "t7",
                    q: String.raw`<p>Las cuentas de acumulación describen:</p>`,
                    opts: [
                        String.raw`La generación y distribución del ingreso`,
                        String.raw`El valor de los activos y pasivos al cierre del año`,
                        String.raw`La producción de bienes de capital de la economía`,
                        String.raw`La utilización del ahorro bruto en acumulación y su financiación`,
                    ],
                    ans: 3,
                    sol: String.raw`La cuenta de capital muestra cómo se usa el ahorro (y las TK) en FBK; la financiera, cómo se financia la diferencia. Los stocks van en los balances, no en estas cuentas.`,
                },
                {
                    t: "t3",
                    q: String.raw`<p>Según el BCU, el PIB de Uruguay en 2025, respecto al año anterior:</p>`,
                    opts: [String.raw`Creció 3,1%`, String.raw`Cayó 0,4%`, String.raw`Creció 4,9%`, String.raw`Creció 1,8%`],
                    ans: 3,
                    sol: String.raw`El BCU informó en marzo de 2026 un crecimiento de 1,8% en 2025. El 3,1% corresponde a 2024 y el 4,9% a 2022.`,
                },
            ],
        },
    ],
};

export default ed;
