// Contenido de la materia "ed". Ver README para el formato.
const ed = {
    topics: [
        {
            id: "t1",
            title: "Qué es la Economía Descriptiva y el Sistema de Cuentas Nacionales",
            weight: "media",
            src: String.raw`Tomo 1 ED 2026, cap. I (pág. 5-8) y cap. II secciones 1 y 2 (pág. 9-14); secuencia de cuentas en sección 3.3 (pág. 39-41)`,
            eli5: String.raw`<p>Imaginá que el país es un barrio enorme lleno de familias, comercios, fábricas y una junta vecinal (el gobierno). Todos producen, compran, cobran sueldos, pagan impuestos y se prestan plata. La Economía Descriptiva es el "contador del barrio": su trabajo es describir <em>cómo</em> suceden los hechos económicos, con reglas fijas para que cualquiera pueda revisar la cuenta.</p><p>El Sistema de Cuentas Nacionales (SCN) es el libro de reglas de ese contador. Dice quién es vecino del barrio (los <strong>residentes</strong>), en qué grupos se ordenan (sociedades, gobierno, hogares) y en qué orden se anota todo: primero lo que se produce, después cómo se genera y se reparte el ingreso, qué se consume y qué se ahorra, y al final cómo se acumula y quién le presta a quién. Lo que pasa con gente de afuera del barrio se anota en la cuenta del <strong>Resto del Mundo</strong>.</p>`,
            explain: String.raw`<h4>Dónde se ubica la Economía Descriptiva</h4>
<p>La ciencia económica se despliega en tres niveles: la <strong>descripción</strong> (cómo suceden los hechos: economía descriptiva), la <strong>explicación</strong> (por qué suceden: economía política) y el nivel <strong>práctico</strong> (modificarlos: política económica). Los tres se relacionan entre sí sin un orden cronológico. La descripción tiene enfoque macroeconómico: mide variables del sistema económico en su conjunto (PIB, consumo, formación bruta de capital, remuneraciones, precios al consumo, población ocupada y desocupada, etc.).</p>
<p>Para acercarse a descripciones más confiables el Tomo 1 destaca tres factores: citar las fuentes y explicitar métodos, definiciones y supuestos; usar metodologías basadas en recomendaciones internacionalmente reconocidas y acordadas; y revisar y actualizar esas metodologías. En Uruguay las estadísticas oficiales las elaboran el <strong>INE</strong> y el <strong>BCU</strong>.</p>
<h4>El SCN</h4>
<p>Es el <strong>marco metodológico aceptado internacionalmente</strong> para medir la actividad económica y describir los procesos económicos en una realidad histórica y espacial concreta. Su primera versión es de 1947 y la última es el <strong>SCN 2025</strong> (sexta versión), que conserva el marco básico del SCN 2008, que a su vez conserva el del SCN 1993. En el curso se estudia una <strong>versión simplificada del SCN 1993</strong>, mencionando cambios de 2008 y 2025.</p>
<h4>Productos</h4>
<ul>
<li>Bienes y servicios <strong>económicos</strong> (requieren esfuerzo) frente a bienes <strong>libres</strong> (el aire).</li>
<li>Los productos pueden ser <strong>de mercado</strong> (precios económicamente significativos, en forma simplificada por encima de sus costos), <strong>no de mercado</strong> (gratuitos o a precios no significativos) o <strong>para uso final propio</strong> (retenidos por el productor). Un mismo bien puede ser de los tres tipos (los cuadernos del Tomo).</li>
<li>Según su <strong>destino económico</strong>: <strong>intermedios</strong> (insumos: se utilizan y agotan en un mismo proceso productivo) o <strong>finales</strong> (consumo, capital, exportación). La lana que usa una fábrica de buzos es intermedia; la que compra un hogar o la que se exporta es final. Un vehículo es final: si lo usa una unidad productora es un bien de capital (activo fijo).</li>
</ul>
<h4>Flujos y stocks</h4>
<p>Las <strong>variables de stock</strong> miden el valor económico en un momento (reservas internacionales, stock de activos fijos al 31/12). Las <strong>variables de flujo</strong> miden variaciones de valor a lo largo de un período (producción, gasto de consumo final, formación bruta de capital). Los flujos se miden a través de las <strong>transacciones</strong>.</p>
<h4>A quiénes se describe</h4>
<table>
<tr><th>Sector institucional</th><th>Qué es (ejemplos del Tomo)</th></tr>
<tr><td>Sociedades no financieras</td><td>Producen bienes y servicios no financieros para el mercado; privadas o públicas.</td></tr>
<tr><td>Sociedades financieras</td><td>Producen servicios financieros para el mercado: bancos públicos o privados, incluido el Banco Central.</td></tr>
<tr><td>Gobierno General</td><td>Ministerios, Intendencias, ANEP, UDELAR, BPS. Producen bienes y servicios no de mercado financiados con impuestos.</td></tr>
<tr><td>Hogares</td><td>En la versión simplificada: consumidores y proveedores de fuerza de trabajo.</td></tr>
<tr><td>Resto del Mundo</td><td>Unidades no residentes que realizan transacciones con residentes.</td></tr>
</table>
<p>Una unidad es <strong>residente</strong> si tiene su <strong>centro de interés económico</strong> en el territorio económico. Las <strong>empresas públicas</strong> (ANTEL, ANCAP, UTE) no integran el Gobierno. Además de sectores institucionales, se describen <strong>establecimientos</strong> y <strong>actividades productivas</strong> (ramas, clasificadas con la CIIU): una misma unidad institucional puede realizar varias actividades.</p>
<h4>Qué acciones se describen</h4>
<ul>
<li>Transacción: flujo económico que consiste en una interacción entre unidades institucionales <strong>por mutuo acuerdo</strong>. Puede ser <strong>con contrapartida</strong> o <strong>sin contrapartida</strong> (transferencia). El pago de impuestos es una transacción (aunque sea coactiva) y es sin contrapartida.</li>
<li>Según su objeto: de <strong>bienes y servicios</strong>, <strong>distributivas</strong>, <strong>financieras</strong> y <strong>otras partidas de acumulación</strong>.</li>
</ul>
<h4>Secuencia de cuentas de la versión simplificada</h4>
<table>
<tr><th>Cuenta</th><th>Saldo</th></tr>
<tr><td>Producción</td><td>Valor Agregado Bruto (VAB)</td></tr>
<tr><td>Generación del ingreso</td><td>Excedente de Explotación Bruto (EEB)</td></tr>
<tr><td>Asignación y distribución del ingreso</td><td>Ingreso Disponible Bruto (IDB)</td></tr>
<tr><td>Utilización del ingreso disponible</td><td>Ahorro Bruto (AB)</td></tr>
<tr><td>Cuenta de capital</td><td>Préstamo Neto (PRN)</td></tr>
<tr><td>Cuenta financiera</td><td>Préstamo Neto (el mismo saldo)</td></tr>
</table>
<p>Las cuatro primeras son <strong>cuentas corrientes</strong>; capital y financiera son <strong>cuentas de acumulación</strong>; las <strong>hojas de balance</strong> (situación patrimonial) completan el sistema pero no se analizan en el curso. En cada cuenta se registran <strong>recursos</strong> a la derecha y <strong>usos</strong> a la izquierda; el saldo va del lado de los usos y es el primer recurso de la cuenta siguiente.</p>`,
            recipe: String.raw`<ol><li>Ante una unidad, preguntate si tiene su centro de interés económico en el país (residente) o si va al Resto del Mundo.</li><li>Clasificala en un sector: ¿produce para el mercado? Sociedad (financiera si produce servicios financieros), aunque sea pública como ANTEL, UTE o ANCAP. ¿Presta servicios no de mercado financiados con impuestos? Gobierno General (ministerios, intendencias, ANEP, UDELAR, BPS). ¿Consume y aporta trabajo? Hogares.</li><li>Ante un bien, mirá su destino económico: si se agota en un proceso productivo es intermedio; si no, es final (consumo, capital o exportación).</li><li>Ante una variable, preguntate si se mide en un momento (stock) o a lo largo de un período (flujo).</li><li>Ubicá la transacción en la secuencia: producción, generación, asignación y distribución, utilización, capital o financiera.</li></ol>`,
            pitfalls: String.raw`<ul><li>Creer que las empresas públicas (ANTEL, UTE, ANCAP) son Gobierno: el Tomo aclara que no lo integran.</li><li>Confundir residencia con nacionalidad: el criterio es el centro de interés económico.</li><li>Pensar que un bien es intermedio o final "por naturaleza": depende de su destino económico (la leche del bar es intermedia; la del hogar, final).</li><li>Decir que el pago de un impuesto no es una transacción: lo es, sin contrapartida.</li><li>Tratar la formación bruta de capital como stock: es un flujo; el stock es el de activos fijos.</li><li>Confundir unidad institucional con establecimiento: una misma unidad puede tener varios establecimientos y actividades.</li></ul>`,
            example: {
                q: String.raw`Clasificá según su destino económico: a) la leche que utiliza un bar para preparar el cortado; b) la leche que se consume en un hogar; c) una cosechadora utilizada por una unidad productora para recolectar productos agrícolas; d) la leche que se exporta. Indicá además si el valor de los activos fijos de la economía al 31 de diciembre es una variable de flujo o de stock.`,
                sol: String.raw`<p>a) <strong>Intermedio</strong>: se utiliza y agota en el proceso productivo del bar.</p><p>b) <strong>Final</strong> (consumo final de los hogares).</p><p>c) <strong>Final de capital</strong>: no se agota en un único proceso productivo; integra los activos fijos y su incorporación es FBKF.</p><p>d) <strong>Final</strong> (exportación): no será transformada en la economía que se describe.</p><p>El valor de los activos fijos en una fecha es una variable de <strong>stock</strong>; su variación a lo largo del período (la FBKF) es un flujo.</p>`,
            },
        },
        {
            id: "t2",
            title: "El Cuadro de Oferta y Utilización (COU) paso a paso",
            weight: "alta",
            src: String.raw`Tomo 1 ED 2026, sección 3.1 (pág. 14-27), Cuadros 1 y 2; Clases Prácticas 1 y 2`,
            eli5: String.raw`<p>Pensá en el agro y la industria. El agro (rama 1) produce trigo: una parte se la vende al molino como insumo, otra se exporta y otra queda en el depósito. La industria (rama 2) usa trigo, luz e insumos importados, hace harina y la vende. El COU es una planilla donde cada <strong>fila</strong> te dice <em>a dónde fue</em> lo que produjo cada rama (a otras ramas como insumo, a los hogares, a capital, a existencias o al exterior) y cada <strong>columna</strong> de rama te dice <em>qué usó</em> esa rama para producir (insumos) y cuánto valor agregó (remuneraciones, desgaste de máquinas, impuestos, excedente).</p><p>La regla mágica: la Producción de una rama se puede contar de dos formas, por su destino (la fila) o por sus fuentes generadoras de valor (la columna). Las dos sumas dan igual y con eso completás cualquier casillero vacío.</p>`,
            explain: String.raw`<p>El <strong>cuadro de oferta y utilización simplificado</strong> describe, en unidades monetarias y para un período, el flujo de producción de cada actividad clasificado por destino económico y cómo se originó esa producción. Todas sus variables son de <strong>flujo</strong>. Se concentra en los procesos de producción y generación del ingreso.</p>
<h4>Lectura horizontal: destino económico</h4>
<ul>
<li>Zona de <strong>Utilización Intermedia</strong>: UI<sub>ij</sub> (o IS<sub>ij</sub>) es el insumo producido por la rama i (origen, fila) y utilizado por la rama j (destino, columna). Se registra lo <strong>utilizado</strong>, no lo comprado.</li>
<li>Zona de <strong>Utilización Final</strong>: GCFH, (GCFG), FBKF, VE y E. La FBKF y la VE se registran solo según la rama que <strong>produjo</strong> los bienes: el COU no dice qué sector los incorporó.</li>
<li><strong>Producción<sub>i</sub> = UI<sub>i</sub> + UF<sub>i</sub></strong> (Uso Intermedio más Uso Final de lo producido por la rama i).</li>
<li>Fila de <strong>Importaciones</strong>: M = UIM + UFM (insumos importados + importaciones para consumo, FBKF y VE).</li>
</ul>
<h4>Lectura vertical: fuentes generadoras del valor</h4>
<ul>
<li>Arriba, los <strong>Insumos</strong> o <strong>Consumo Intermedio</strong> de la rama: IS<sub>j</sub> = CI<sub>j</sub> = Σ<sub>i</sub> UI<sub>ij</sub> + M<sub>j</sub> (nacionales <strong>e importados</strong>).</li>
<li>Abajo, el <strong>VAB</strong> a precios básicos: RA + CKF + (Imp − S) + EEN, con EEB = CKF + EEN.</li>
<li><strong>Producción<sub>j</sub> = CI<sub>j</sub> + VAB<sub>j</sub></strong>.</li>
</ul>
<div class="box">No confundir <strong>Uso Intermedio</strong> de la rama i (lo que <em>produjo</em> con destino intermedio, su fila) con <strong>Consumo Intermedio</strong> de la rama i (lo que <em>utilizó</em> como insumo, su columna). Solo para la economía en su conjunto UI = CI.</div>
<h4>El Gobierno en el COU</h4>
<p>Su producción es no de mercado y se valora por sus costos: <strong>Producción<sub>G</sub> = IS<sub>G</sub> + VAB<sub>G</sub></strong>, con <strong>VAB<sub>G</sub> = RA<sub>G</sub> + CKF<sub>G</sub></strong>, EEN<sub>G</sub> = 0, EEB<sub>G</sub> = CKF<sub>G</sub> y sin impuestos ni subsidios sobre su producción. En la versión simplificada toda esa producción tiene como destino la sociedad en su conjunto, representada por el propio Gobierno: <strong>Producción<sub>G</sub> = GCF<sub>G</sub></strong>. Por eso GCF = GCFH + GCFG.</p>
<h4>Valoración y remuneraciones</h4>
<p>En el curso la producción se valora a <strong>precios básicos</strong> (incluye los impuestos sobre la producción netos de subsidios). La <strong>Remuneración de Asalariados</strong> es el costo total de la mano de obra: RA = salario líquido + aportes personales + aportes patronales; el salario nominal es salario líquido + aportes personales.</p>
<h4>Qué permite el COU</h4>
<ul>
<li>Construir las cuentas de producción y de generación del ingreso <strong>por actividades</strong> sin datos adicionales; por sectores institucionales, con datos adicionales.</li>
<li>Obtener Producción, OT, CI, VAB (PIB), OF, DF, FBK, SBC y el Ingreso Interno Bruto.</li>
<li>La fila RA muestra las remuneraciones <strong>pagadas por los productores residentes</strong>. La RX no está en el COU y no puede deducirse de él.</li>
</ul>`,
            recipe: String.raw`<ol><li>Marcá los casilleros vacíos y los datos que te dan.</li><li>Si falta la Producción de una rama, sumá su fila: Producción<sub>i</sub> = UI<sub>i</sub> + UF<sub>i</sub>.</li><li>Pasá esa Producción al total de la columna de la misma rama. CI<sub>j</sub> = suma de la parte de arriba de la columna, <strong>incluyendo importados</strong>; VAB<sub>j</sub> = Producción<sub>j</sub> − CI<sub>j</sub>.</li><li>Componente del VAB que falte (típicamente EEN) = VAB − RA − CKF − (Imp − S).</li><li>Gobierno: Producción<sub>G</sub> = CI<sub>G</sub> + RA<sub>G</sub> + CKF<sub>G</sub> = GCFG.</li><li>Casillero de uso final que falte (por ejemplo VE): total de la fila menos el resto de la fila. Puede ser negativo.</li><li>Chequeá: VAB total = GCFH + GCFG + FBKF + VE + E − M.</li></ol>`,
            pitfalls: String.raw`<ul><li>Calcular el CI de una rama sin sumar los insumos <strong>importados</strong> de su columna.</li><li>Confundir Uso Intermedio (fila) con Consumo Intermedio (columna) de una rama.</li><li>Confundir la celda (i, j) con la (j, i): "producido por la Rama 1 y utilizado por la Rama 2" es fila 1, columna 2.</li><li>Sumar las importaciones a la Producción: la Producción es solo lo producido por residentes.</li><li>Olvidar la parte importada al calcular el GCFH o la FBKF totales.</li><li>"Insumos nacionales utilizados por el Gobierno" excluye los importados.</li><li>Olvidar que la VE puede ser negativa: se utilizaron bienes producidos en períodos anteriores.</li><li>Creer que el COU muestra qué sector incorporó la FBK: solo muestra qué rama la produjo.</li></ul>`,
            example: {
                q: String.raw`<p>Tomá el Cuadro 2 del Tomo 1. Fila Agropecuaria: UI a Agro 95, a Industria 205, a Servicios 0, a Servicios del Gobierno 5; GCFH 120; FBKF 10; VE 60; E 360. Columna Agropecuaria: insumos de Industria 70, de Servicios 10, importados 35; RA 225; CKF 67; Imp − S 20. Columna Servicios del Gobierno: insumos de Agro 5, de Industria 70, de Servicios 15, importados 10; RA 400; CKF 20. Además, para la economía: GCFH 1.030, FBKF 730, VE 175, E 790, M 1.050.</p><p>Hallá la Producción, el CI, el VAB y el EEN de la actividad agropecuaria, la Producción y el GCFG del Gobierno y el PIB por el enfoque del gasto.</p>`,
                sol: String.raw`<p><strong>Producción Agro</strong> (fila) = (95 + 205 + 0 + 5) + (120 + 10 + 60 + 360) = 305 + 550 = <strong>855</strong>.</p><p><strong>CI Agro</strong> (columna) = 95 + 70 + 10 + 35 = <strong>210</strong>. VAB = 855 − 210 = <strong>645</strong>. EEN = 645 − 225 − 67 − 20 = <strong>333</strong>.</p><p><strong>Gobierno</strong>: CI = 5 + 70 + 15 + 10 = 100; VAB = 400 + 20 = 420; Producción<sub>G</sub> = 520 = <strong>GCFG</strong>.</p><p><strong>PIB</strong> (gasto) = 1.030 + 520 + 730 + 175 + 790 − 1.050 = <strong>2.195</strong>, igual al VAB total del Cuadro 2.</p>`,
            },
        },
        {
            id: "t3",
            title: "Agregados macro: las tres ópticas del PIB e identidades",
            weight: "alta",
            src: String.raw`Tomo 1 ED 2026, secciones 3.2 (pág. 27-38) y 3.4 (pág. 69-75); dato de coyuntura: Tomo 1 ED 2026, pág. 33; 1ª rev. 2018 (preg. 46), 2019 (preg. 16) y 2023 (preg. 12)`,
            eli5: String.raw`<p>Pensá en una economía que solo hace tejidos de lana en tres etapas: lana sucia (3.000), hilado (7.500) y tejido (25.000). Si sumás las tres producciones te da 35.500, pero la lana está contada tres veces y el hilado dos. Lo que realmente se creó es 25.000: la suma de lo que <strong>agregó</strong> cada etapa. Eso es el PIB: valor agregado, no producción.</p><p>El mismo PIB se puede ver de tres maneras: sumando lo que agregó cada rama, sumando los ingresos que se generaron (sueldos, excedente, impuestos) o sumando el destino final de lo producido (consumo, inversión, exportaciones menos importaciones). Después, si le sumás lo que los residentes cobran del exterior por sus factores y restás lo que pagan, llegás al ingreso nacional.</p>`,
            explain: String.raw`<h4>Producción y Oferta Total</h4>
<ul>
<li>Producción = Σ Producción<sub>i</sub> = IS (CI) + VAB = UI + UF − M.</li>
<li><strong>Oferta Total</strong> (antes Disponibilidad Bruta Total): OT = Producción + M = UT = UI + UF.</li>
</ul>
<h4>PIB por los tres enfoques</h4>
<ul>
<li><strong>Producción</strong>: PIB = Σ VAB = Producción − CI. La contribución de cada sector al PIB es su VAB.</li>
<li><strong>Gasto</strong>: PIB = GCF (GCFH + GCFG) + FBK (FBKF + VE) + E − M. No aparece el Uso Intermedio (habría duplicación) y se restan las importaciones (no son producción interna).</li>
<li><strong>Ingreso</strong>: VAB = <strong>IIB</strong> = RA + EEB + (Imp − S) de la producción.</li>
</ul>
<p>El PIB no incluye los servicios domésticos y personales producidos y consumidos dentro del mismo hogar. Para saber si la economía creció no sirve comparar valores a precios corrientes ni en dólares: se usan tasas de variación en volumen físico.</p>
<h4>Oferta final y demanda final</h4>
<p><strong>OF = PIB + M</strong>; <strong>DF = GCF + FBK + E</strong>; por definición OF = DF.</p>
<h4>Formación bruta de capital</h4>
<p>FBK = FBKF + VE. <strong>FNKF = FBKF − CKF</strong> (la variación del stock de activos fijos es la FNKF: Stock inicial + FNKF = Stock final). Entonces FBK = FNKF + CKF + VE.</p>
<h4>Agregados con el Resto del Mundo</h4>
<table>
<tr><th>Agregado</th><th>Fórmula del Tomo</th></tr>
<tr><td>Saldo de la Balanza Comercial</td><td>SBC = E − M</td></tr>
<tr><td>Remuneración Neta de Factores del Exterior</td><td>RX = (RPXc − RPXp) + (RAXc − RAXp)</td></tr>
<tr><td>Transferencias netas corrientes</td><td>TRNC = recibidas del RM − enviadas al RM</td></tr>
<tr><td>Saldo de la Cuenta Corriente de la BP</td><td>SBP = E − M + RX + TRNC</td></tr>
<tr><td>Ingreso Nacional Bruto</td><td>INB = IIB + RX = VAB + RX</td></tr>
<tr><td>Ingreso Nacional Disponible Bruto</td><td>INDB = IIB + RX + TRNC = INB + TRNC</td></tr>
<tr><td>Ahorro Nacional Bruto</td><td>ANB = INDB − GCF; ANN = ANB − CKF</td></tr>
<tr><td>Préstamo Neto al RM</td><td>PRN = ANN + CKF + TRNK − FBK = SBP + TRNK</td></tr>
</table>
<div class="box">Criterio de signos de la cátedra: las cuentas del Resto del Mundo se construyen <strong>desde la óptica del Resto del Mundo</strong>. Por eso el <strong>saldo de bienes y servicios con el exterior = M − E = −SBC</strong> y el <strong>saldo corriente con el exterior (SCE) = −SBP</strong>. Un SCE positivo significa que la economía tuvo déficit en la cuenta corriente de la BP.</div>
<p>De PRN = ANB + TRNK − FBK = SBP + TRNK sale <strong>ANB − FBK = SBP</strong>: un país con déficit en cuenta corriente tiene una FBK mayor que la que hubiera surgido de usar solo fondos nacionales (el ejemplo de la represa del Tomo).</p>
<h4>Datos de Uruguay en el Tomo 1 (2026)</h4>
<p>PIB 2024: 3.310.493 millones de pesos corrientes. Según el BCU, la actividad económica en <strong>2025 creció 1,8%</strong> respecto a 2024 (en volumen físico). En las primeras revisiones anteriores se preguntó la variación del PIB del año previo tal como la presentaba el material de ese año.</p>`,
            recipe: String.raw`<ol><li>Leé qué agregado piden: PIB, INB, INDB, ANB, SBP, SCE o PRN.</li><li>Enfoque del gasto: sumá GCFH <strong>y</strong> GCFG, FBKF <strong>y</strong> VE, E, y restá M.</li><li>RX: separá lo cobrado al RM (suma) de lo pagado al RM (resta), tanto rentas de la propiedad como remuneraciones.</li><li>INDB = INB + TRNC (solo transferencias <strong>corrientes</strong>).</li><li>ANB = INDB − GCF. SBP = E − M + RX + TRNC = ANB − FBK. SCE = −SBP.</li><li>PRN al RM = SBP + TRNK.</li></ol>`,
            pitfalls: String.raw`<ul><li>Poner FBKF donde va FBK (se olvida la VE) o GCFH donde va GCF.</li><li>Sumar Producción en lugar de VAB para el PIB.</li><li>Olvidar que los intereses pagados a no residentes restan en RX (son rentas de la propiedad).</li><li>Meter una donación de maquinaria o equipamiento (transferencia de capital) en la TRNC.</li><li>Confundir el signo del saldo corriente: SCE (óptica del RM) = −SBP.</li><li>Confundir OT (Producción + M) con OF (PIB + M).</li><li>Usar datos de coyuntura que no sean los del material del año.</li></ul>`,
            example: {
                q: String.raw`Datos: PIB 50.000; RA cobrada al RM 300; RA pagada al RM 100; rentas de la propiedad pagadas al RM 2.200 y cobradas al RM 400; remesas recibidas 800; donación de medicamentos recibida del exterior 200; donación de ambulancias recibida del exterior 500; GCF 41.000; FBK 9.000. Hallá RX, INB, INDB, ANB, SBP, SCE y el PRN al Resto del Mundo.`,
                sol: String.raw`<p>RX = (400 − 2.200) + (300 − 100) = <strong>−1.600</strong>.</p><p>INB = 50.000 − 1.600 = <strong>48.400</strong>.</p><p>TRNC = 800 + 200 = 1.000 (las ambulancias son transferencia de capital). INDB = <strong>49.400</strong>.</p><p>ANB = 49.400 − 41.000 = <strong>8.400</strong>.</p><p>SBP = ANB − FBK = 8.400 − 9.000 = <strong>−600</strong> (de SBP = E − M + RX + TRNC surge además que E − M = 0). SCE = −SBP = <strong>600</strong>.</p><p>PRN = SBP + TRNK = −600 + 500 = <strong>−100</strong>: la economía requirió financiamiento del RM por 100.</p>`,
            },
        },
        {
            id: "t4",
            title: "Cuentas de producción y de generación del ingreso",
            weight: "media",
            src: String.raw`Tomo 1 ED 2026, sección 3.3.1.1 (pág. 42-51), Cuadros 1 a 4 de las cuentas; Clase Práctica 3`,
            eli5: String.raw`<p>Una empresa molinera produce harina por 1.000 en el año. Para hacerla usó trigo, energía y fletes por 400: eso es consumo intermedio, valor creado por otros. Lo que la molinera agregó son los 600 restantes: su valor agregado bruto.</p><p>La cuenta de producción es esa resta. La cuenta de generación del ingreso responde: ¿cómo se reparten esos 600 entre los que participaron en producir? Una parte a los trabajadores (remuneraciones con sus aportes), otra al Gobierno (impuestos sobre la producción menos subsidios) y lo que queda es el excedente de explotación bruto, que incluye el desgaste de las máquinas.</p>`,
            explain: String.raw`<h4>Cuenta de producción</h4>
<p>Describe el proceso de producción del agente productor. Se construye desde la <strong>óptica del productor</strong>.</p>
<table><tr><th>Usos</th><th>Recursos</th></tr><tr><td>Consumo Intermedio<br>Valor Agregado Bruto (saldo)<br>Consumo de Capital Fijo<br>Valor Agregado Neto</td><td>Producción</td></tr></table>
<p><strong>VAB = Producción − CI</strong>; <strong>VAN = Producción − (CI + CKF)</strong>. El valor agregado debería medirse neto (el CKF es valor que los activos fijos traspasan a los productos), pero como el CKF es difícil de estimar el SCN 93 acepta presentarlo bruto o neto.</p>
<p>Se puede armar <strong>por actividades</strong> (todos los datos salen del COU) o <strong>por sectores institucionales</strong>. En la versión simplificada los Hogares no registran producción. El <strong>Resto del Mundo</strong> se incorpora desde su propia óptica: <strong>recursos = importaciones</strong> (ingreso para el RM) y <strong>usos = exportaciones</strong> (gasto para el RM). Su saldo es el <strong>saldo de bienes y servicios con el exterior = M − E = −SBC</strong>.</p>
<h4>Cuenta de generación del ingreso</h4>
<p>Muestra, desde la <strong>óptica del productor</strong>, las transacciones distributivas ligadas al proceso de producción, como un costo para el productor.</p>
<table><tr><th>Usos</th><th>Recursos</th></tr><tr><td>Remuneración de Asalariados (RA)<br>Impuestos − Subsidios sobre la producción<br>Excedente de Explotación Bruto (saldo)</td><td>Valor Agregado Bruto</td></tr></table>
<ul>
<li><strong>RA</strong>: remuneración total, en dinero o en especie, que paga una empresa a un asalariado; se registra cuando se devenga. Componentes: sueldos y salarios nominales (incluyen los aportes personales) y aportes patronales. Aportes patronales y personales integran las contribuciones sociales.</li>
<li><strong>Imp − S</strong>: impuestos sobre la producción netos de subsidios.</li>
<li><strong>Excedente de Explotación</strong>: saldo que mide el excedente o déficit generado únicamente en la producción, antes de intereses y otras rentas. EEB = CKF + EEN.</li>
</ul>
<p>Para el Gobierno: sin Imp − S sobre su producción y EEB<sub>G</sub> = CKF<sub>G</sub>. En la cuenta por sectores, el RM registra como recurso y como uso el saldo de bienes y servicios con el exterior.</p>
<h4>Impuestos: cuáles son sobre la producción</h4>
<p>Los impuestos sobre la producción y los productos son pagos obligatorios sin contrapartida vinculados al proceso productivo: <strong>sobre la producción</strong> (sobre bienes de capital o mano de obra, licencias, patente de rodados de la empresa, ambientales) y <strong>sobre los productos</strong> (IVA, IMESI, IMEBA, derechos de importación). A precios básicos se incluyen solo los primeros netos de subsidios; a precio productor, también los segundos. Los impuestos sobre el ingreso y la riqueza (IRAE, IRPF, patrimonio) no forman parte de los precios: pertenecen a la distribución.</p>`,
            recipe: String.raw`<ol><li>VAB = Producción − CI. Si no tenés la Producción, sumá la fila de la rama en el COU.</li><li>EEB = VAB − RA − (Imp − S); EEN = EEB − CKF.</li><li>Salario nominal = RA − aportes patronales. Salario líquido = salario nominal − aportes personales.</li><li>Gobierno: EEN = 0, EEB = CKF.</li><li>Cuenta por sectores con RM: recursos del RM = M, usos del RM = E, saldo = M − E.</li></ol>`,
            pitfalls: String.raw`<ul><li>Restar los aportes personales al pasar de RA a salario nominal: solo se restan los patronales.</li><li>Poner IRPF o IRAE como impuestos sobre la producción.</li><li>Olvidar que ambas cuentas se construyen desde la óptica del productor.</li><li>Medir la contribución de una rama al PIB por su Producción: es su VAB.</li><li>Poner el saldo de bienes y servicios con el exterior como E − M: en la cuenta del RM es M − E.</li><li>Registrar producción para los Hogares en la versión simplificada.</li></ul>`,
            example: {
                q: String.raw`La actividad agropecuaria tuvo RA por 40.000, de la que 6.000 son aportes personales y 8.000 aportes patronales. ¿Cuánto fueron los salarios nominales y los líquidos? Si su VAB fue 70.000, su CKF 9.000 y sus Imp − S 6.000, ¿cuánto fueron el EEB y el EEN?`,
                sol: String.raw`<p>Salarios nominales = RA − aportes patronales = 40.000 − 8.000 = <strong>32.000</strong> (incluyen los 6.000 de aportes personales).</p><p>Salario líquido = 32.000 − 6.000 = <strong>26.000</strong>.</p><p>EEB = 70.000 − 40.000 − 6.000 = <strong>24.000</strong>. EEN = 24.000 − 9.000 = <strong>15.000</strong>.</p>`,
            },
        },
        {
            id: "t5",
            title: "Asignación y distribución del ingreso (primario y secundario)",
            weight: "alta",
            src: String.raw`Tomo 1 ED 2026, sección 3.3.1.2 (pág. 51-58), Cuadro 5; Clase Práctica 3`,
            eli5: String.raw`<p>Pensá en una familia. Su ingreso <strong>primario</strong> es lo que gana por participar en producir o por ser dueña de activos: el sueldo de los que trabajan y los intereses del plazo fijo. Después viene la <strong>distribución secundaria</strong>: plata que va y viene sin contrapartida. Pagan aportes a la seguridad social (sale), cobran la jubilación de la abuela y una remesa de un pariente que vive afuera (entra). Lo que queda es su <strong>ingreso disponible</strong>: lo que pueden gastar en consumo o ahorrar.</p><p>El país hace lo mismo: al VAB le suma lo que los residentes cobran del exterior por sus factores y le resta lo que pagan (INB), y después suma las transferencias corrientes netas con el exterior (INDB).</p>`,
            explain: String.raw`<h4>Una sola cuenta en la versión simplificada</h4>
<p>El SCN presenta la cuenta de asignación del ingreso primario y la de distribución secundaria; el curso las junta en la <strong>cuenta de asignación y distribución del ingreso</strong>. Desde aquí las cuentas se compilan solo por <strong>sectores institucionales</strong> y se construyen desde la <strong>óptica del perceptor</strong> del ingreso.</p>
<table><tr><th>Usos</th><th>Recursos</th></tr><tr><td>Rentas de la Propiedad pagadas (RPp)<br>Transferencias corrientes pagadas (TRCe)<br>Ingreso Disponible Bruto (saldo)</td><td>EEB<br>RA<br>Imp − S sobre la producción<br>Rentas de la Propiedad cobradas (RPc)<br>Transferencias corrientes recibidas (TRCr)</td></tr></table>
<ul>
<li><strong>EEB</strong>: recurso de los productores (en el Gobierno, igual a su CKF).</li>
<li><strong>RA</strong>: recurso de los hogares residentes o del RM si se paga a trabajadores no residentes. Aquí se registra lo recibido por los hogares, pagado por residentes o por el RM, por eso puede no coincidir con la RA del COU.</li>
<li><strong>Imp − S</strong>: recurso del Gobierno.</li>
<li><strong>Rentas de la propiedad</strong>: las cobran los propietarios de un activo financiero o de un activo tangible no producido por ponerlo a disposición de otra unidad (renta de la tierra, intereses, dividendos, utilidades).</li>
</ul>
<div class="box">Saldo de ingresos primarios = EEB + RA + (Imp − S) + RPc − RPp. Σ saldos de ingresos primarios de los residentes = <strong>INB = VAB + RX</strong>.</div>
<h4>Transferencias corrientes</h4>
<p>En la versión simplificada son: <strong>contribuciones sociales</strong> (aportes personales y patronales: las pagan los hogares y las recibe el Gobierno), <strong>prestaciones sociales</strong> (jubilaciones y pensiones: las paga el Gobierno y las reciben los hogares) y <strong>otras transferencias corrientes</strong> (cooperación internacional corriente como ayudas de emergencia, remesas, donaciones de empresas a escuelas, donaciones de vacunas o medicamentos del exterior). El SCN 93 incluye además los impuestos corrientes sobre el ingreso y la riqueza, pero la versión del curso no los considera.</p>
<p><strong>IDB = IPB + TRCr − TRCe</strong>: el monto máximo que una unidad puede gastar en consumo final sin reducir su dinero, liquidar activos o aumentar pasivos. Las transferencias entre residentes se cancelan, entonces <strong>INDB = INB + TRCXr − TRCXe</strong>.</p>
<h4>El Resto del Mundo</h4>
<p>Parte del saldo de bienes y servicios con el exterior (M − E), suma como recursos la RA y las rentas que le pagan los residentes y las transferencias que recibe, y resta lo que él paga. Su saldo es el <strong>saldo corriente con el exterior</strong>: SCE = (M − E) + RPxc + RAxc + TRCxr − RPxp − RAxp − TRCxe = <strong>−SBP</strong>.</p>`,
            recipe: String.raw`<ol><li>Armá una tabla con Sociedades, Gobierno, Hogares y RM, y para cada transacción anotá quién la paga (uso) y quién la cobra (recurso).</li><li>Si falta un dato de rentas, usá que en la columna Total lo cobrado es igual a lo pagado.</li><li>Ingreso primario de cada sector: EEB (+ RA en hogares, + Imp − S en gobierno) + RPc − RPp.</li><li>Chequeo: Σ ingresos primarios = VAB + RX = INB.</li><li>IDB: ingreso primario + transferencias corrientes recibidas − pagadas (dejá afuera las de capital).</li><li>Chequeo: Σ IDB = INB + TRNC = INDB. SCE del RM = −SBP.</li></ol>`,
            pitfalls: String.raw`<ul><li>Darles a los hogares la RA del COU sin ajustar por lo pagado a no residentes y lo cobrado del exterior.</li><li>Olvidar el EEB (= CKF) del Gobierno o sus Imp − S.</li><li>Tratar las contribuciones sociales como ingreso de los hogares: los hogares las pagan y son recurso del Gobierno.</li><li>Tratar las jubilaciones como parte del ingreso primario: son prestaciones sociales (distribución secundaria).</li><li>Sumar a las transferencias corrientes una donación de maquinaria o equipamiento (es de capital).</li><li>Construir la cuenta desde la óptica del productor: es desde la del perceptor.</li><li>Leer el SCE con la óptica de la economía: es la del Resto del Mundo.</li></ul>`,
            example: {
                q: String.raw`Gobierno: CKF 800; Imp − S sobre la producción 5.000; intereses pagados por bonos del tesoro 1.500 (600 a no residentes); intereses cobrados 200; contribuciones sociales 2.500; prestaciones sociales pagadas 4.000; donación de medicamentos recibida del exterior 300; donación de un tomógrafo recibida del exterior 700. Hallá el ingreso primario y el ingreso disponible bruto del Gobierno.`,
                sol: String.raw`<p>Ingreso primario = EEB 800 + Imp − S 5.000 + RPc 200 − RPp 1.500 = <strong>4.500</strong> (los 1.500 salen del Gobierno cualquiera sea el perceptor; los 600 pagados a no residentes son recurso del RM).</p><p>IDB = 4.500 + 2.500 − 4.000 + 300 = <strong>3.300</strong>. El tomógrafo (700) es transferencia de capital: va a la cuenta de capital, no al ingreso disponible.</p>`,
            },
        },
        {
            id: "t6",
            title: "Utilización del ingreso y ahorro",
            weight: "alta",
            src: String.raw`Tomo 1 ED 2026, sección 3.3.1.3 (pág. 58-60), Cuadro 6; sección 3.4.7 (pág. 73)`,
            eli5: String.raw`<p>Tu ingreso disponible es la plata que te queda después de aportes, jubilaciones y transferencias. Con eso hacés dos cosas: consumir o no consumir. Lo que no consumís es tu <strong>ahorro</strong>: ahorro = ingreso disponible − consumo.</p><p>Una sociedad no hace consumo final: todo su ingreso disponible es ahorro. El Gobierno "consume" en nombre de la sociedad los servicios que produce (seguridad, defensa, educación pública): si ese consumo supera su ingreso disponible, su ahorro es negativo.</p>`,
            explain: String.raw`<h4>Cuenta de utilización del ingreso disponible</h4>
<table><tr><th>Usos</th><th>Recursos</th></tr><tr><td>Gasto de Consumo Final (GCF)<br>Ahorro Bruto (saldo)</td><td>Ingreso Disponible Bruto (IDB)</td></tr></table>
<p><strong>AB = IDB − GCF</strong>. Solo el Gobierno y los Hogares realizan consumo final:</p>
<ul>
<li><strong>Hogares</strong>: AB = IDB − GCFH.</li>
<li><strong>Gobierno</strong>: AB = IDB − GCFG, con <strong>GCFG = Producción del Gobierno</strong> (servicios no de mercado valorados por sus costos). Puede dar negativo.</li>
<li><strong>Sociedades</strong>: no tienen consumo final, su <strong>AB = IDB</strong> (en otros contextos, "utilidades retenidas" o "no distribuidas").</li>
<li><strong>Resto del Mundo</strong>: no registra consumo final. Su saldo corriente con el exterior cumple un papel parecido al ahorro: recursos reales que el RM pone a disposición de la economía (si es positivo) o que la economía brinda al exterior (si es negativo).</li>
</ul>
<div class="box">Para la economía: <strong>INDB = GCF + AB = GCFG + GCFH + AB</strong>, y el ANB es la suma de los ahorros de los sectores residentes: ANB = INDB − GCF.</div>
<h4>Bruto y neto</h4>
<p>ANN = ANB − CKF. El ahorro puede ser positivo, nulo o negativo, y es la principal fuente de financiamiento de la acumulación: la cuenta de capital empieza con él como recurso.</p>
<h4>Qué entra en el GCFG</h4>
<p>Todo lo que forma parte de la Producción del Gobierno (sus insumos, sus remuneraciones y su CKF) termina en el GCFG. Por ejemplo, los salarios pagados por ANEP o la energía que una Intendencia compra a Brasil y utiliza como insumo. En cambio, un vehículo que compra un Ministerio es FBKF, y las remuneraciones de ANTEL o los insumos del BROU son de sociedades.</p>`,
            recipe: String.raw`<ol><li>Conseguí el IDB de cada sector (cuenta anterior).</li><li>Restá GCFH a Hogares y GCFG (= Producción del Gobierno) al Gobierno. A Sociedades no les restes nada.</li><li>ANB = suma de los ahorros o, directo, INDB − GCFH − GCFG.</li><li>Chequeo: ANB − FBK = SBP.</li></ol>`,
            pitfalls: String.raw`<ul><li>Restarles un consumo a las Sociedades.</li><li>Usar un GCFG distinto de la Producción del Gobierno: en la versión simplificada son iguales.</li><li>Confundir ahorro con préstamo neto: el ahorro es anterior a la acumulación.</li><li>Olvidar que el ahorro de un sector (típicamente el Gobierno) puede ser negativo.</li><li>Poner la compra de vehículos de un Ministerio en el GCFG: es FBKF.</li></ul>`,
            example: {
                q: String.raw`IDB: Sociedades 7.000; Gobierno 5.000; Hogares 30.000. GCFH 27.500. La Producción del Gobierno fue 7.500. Hallá el ahorro de cada sector y el ahorro nacional bruto.`,
                sol: String.raw`<p>GCFG = Producción del Gobierno = 7.500.</p><p>AB Sociedades = <strong>7.000</strong> (no consumen). AB Gobierno = 5.000 − 7.500 = <strong>−2.500</strong>. AB Hogares = 30.000 − 27.500 = <strong>2.500</strong>.</p><p>ANB = 7.000 − 2.500 + 2.500 = <strong>7.000</strong> = INDB (42.000) − GCF (35.000).</p>`,
            },
        },
        {
            id: "t7",
            title: "Cuentas de acumulación: capital y financiera",
            weight: "alta",
            src: String.raw`Tomo 1 ED 2026, sección 3.3.2 (pág. 61-69), Cuadros 7 y 8, y sección 3.4.8 (pág. 73-75); Clases Prácticas 4 y 5`,
            eli5: String.raw`<p>Una empresa ahorró 100 en el año y quiere comprar una máquina de 150. Le faltan 50: se los presta un banco. Su <strong>préstamo neto</strong> es −50 (necesidad de financiamiento). Otra empresa ahorró 100 e invirtió 30: le sobran 70 y compra bonos; su préstamo neto es +70 (capacidad de financiamiento).</p><p>La <strong>cuenta de capital</strong> mira el lado real: ahorro, transferencias de capital e inversión. La <strong>cuenta financiera</strong> mira cómo se movió la plata: qué activos financieros se adquirieron (depósitos, bonos, acciones, préstamos otorgados) y qué pasivos se emitieron. Las dos dan el mismo saldo. Y como todo pasivo de uno es activo de otro, si la economía entera necesita financiamiento, lo pone el Resto del Mundo.</p>`,
            explain: String.raw`<h4>Cuenta de capital</h4>
<p>Describe la variación patrimonial que surge de no consumir todo el valor creado en el período. Recibe el saldo de la cuenta de utilización (el ahorro).</p>
<table><tr><th>Usos</th><th>Recursos</th></tr><tr><td>Formación Bruta de Capital Fijo (FBKF)<br>Variación de Existencias (VE)<br>Préstamo Neto (saldo)</td><td>Ahorro Bruto<br>Transferencias de capital recibidas (+) (TRKr)<br>Transferencias de capital efectuadas (−) (TRKe)</td></tr></table>
<div class="box"><strong>PRN = Ahorro Bruto + TRKr − TRKe − FBK</strong>. Positivo: el sector tiene recursos para prestar (capacidad de financiamiento). Negativo: debió endeudarse en forma neta (necesidad de financiamiento).</div>
<p><strong>Transferencias de capital</strong>: se otorga la propiedad de un activo (distinto de existencias) o se obliga a adquirir o disponer de un activo sin contrapartida: donaciones de maquinaria, dinero para adquirir bienes de capital fijo, condonaciones de deudas. La FBKF es el valor de las adquisiciones menos disposiciones de activos fijos (se usan repetidamente por más de un año).</p>
<h4>Cuenta financiera</h4>
<p>Describe cómo se financió la acumulación: los traspasos de fondos entre agentes mediante <strong>instrumentos financieros</strong>, acuerdos que generan simultáneamente un activo para una unidad y un pasivo para otra.</p>
<table><tr><th>Usos</th><th>Recursos</th></tr><tr><td>Adquisición neta de activos financieros<br>(por instrumento)</td><td>Préstamo Neto<br>Emisión neta de pasivos<br>(por instrumento)</td></tr></table>
<p>Instrumentos (versión simplificada del SCN 93): <strong>Dinero legal y depósitos</strong>; <strong>Valores distintos de acciones</strong> (bonos, letras, obligaciones negociables, obligaciones hipotecarias); <strong>Préstamos y crédito comercial</strong>; <strong>Acciones y participaciones de capital</strong>. Los tres primeros son de naturaleza crediticia; las acciones implican participación en la propiedad.</p>
<div class="box"><strong>PRN = Δ Activos Financieros − Δ Pasivos</strong> (adquisición neta de activos financieros − emisión neta de pasivos), igual al PRN de la cuenta de capital.</div>
<h4>Reglas que salen solas</h4>
<ul>
<li>Por <strong>instrumento</strong>: las transacciones financieras balancean horizontalmente (en la columna Total, activos = pasivos).</li>
<li>Por <strong>sector</strong>: activos − pasivos = PRN del sector. Un PRN negativo implica que la emisión neta de pasivos supera la adquisición neta de activos (no que no adquiera activos).</li>
<li>La suma de los PRN de los residentes es igual al PRN del RM con signo opuesto; en la columna Total el PRN es 0.</li>
</ul>
<h4>El Resto del Mundo</h4>
<p>Desde su óptica: <strong>PRN del RM = SCE − (TRKr − TRKe)</strong> de la economía = Δ activos del RM frente a la economía − Δ pasivos del RM. Desde la economía: <strong>PRN al RM = E − M + RX + TRNC + TRNK = SBP + TRNK</strong>. Para la economía total: <strong>ANB + TRKN del RM = FBK + PRN al RM</strong>.</p>`,
            recipe: String.raw`<ol><li>Cuenta de capital de cada sector: PRN = AB + TRKr − TRKe − FBKF − VE.</li><li>Cuenta financiera: tabla instrumentos × sectores (Sociedades, Gobierno, Hogares, RM), con usos (activos) y recursos (pasivos).</li><li>Hueco en un instrumento: usá la fila (total de activos = total de pasivos).</li><li>Hueco en un sector: usá su columna (activos − pasivos = PRN del sector).</li><li>PRN del RM = −(suma de los PRN de los residentes) = SCE − TRK netas recibidas por la economía.</li><li>Chequeo: SBP + TRNK = PRN de la economía.</li></ol>`,
            pitfalls: String.raw`<ul><li>Invertir el signo: PRN = activos − pasivos, no al revés.</li><li>Olvidar las transferencias de capital al pasar del ahorro al PRN.</li><li>Olvidar la VE en la FBK del sector.</li><li>Decir que un sector con PRN negativo "no adquirió activos".</li><li>Pensar que el PRN del RM tiene el mismo signo que el de la economía.</li><li>Tratar la emisión de acciones como un préstamo: es participación en la propiedad.</li></ul>`,
            example: {
                q: String.raw`Sociedades: ahorro bruto 4.000, FBKF 2.500, VE 0, sin transferencias de capital. En la cuenta financiera adquirieron depósitos por 1.800 y bonos del tesoro por X, y recibieron préstamos por 600. Hallá el PRN de las Sociedades y X.`,
                sol: String.raw`<p>PRN = 4.000 − 2.500 = <strong>1.500</strong>.</p><p>Cuenta financiera: (1.800 + X) − 600 = 1.500, entonces X = <strong>300</strong>.</p>`,
            },
        },
    ],
    flashcards: [
        {
            t: "t1",
            q: String.raw`¿Qué criterio define si una unidad es residente?`,
            a: String.raw`Tener su centro de interés económico en el territorio económico: realizar y tener intención de seguir realizando actividades económicas y transacciones ahí. No importa la nacionalidad.`,
        },
        {
            t: "t1",
            q: String.raw`¿Cuáles son los sectores institucionales de la versión simplificada del SCN del curso?`,
            a: String.raw`Sociedades no financieras, Sociedades financieras, Gobierno General y Hogares (juntos forman la economía residente), más el Resto del Mundo.`,
        },
        {
            t: "t1",
            q: String.raw`¿ANTEL, UTE, ANCAP y el BROU son gobierno?`,
            a: String.raw`No. El Tomo 1 aclara que las empresas públicas no integran el Gobierno: producen para el mercado y son sociedades (los bancos públicos, como el BROU, son sociedades financieras).`,
        },
        {
            t: "t1",
            q: String.raw`¿Cómo se valora la producción no de mercado del gobierno?`,
            a: String.raw`Por sus costos: CI + RA + CKF. Su EEN es 0 y su EEB es igual a su CKF.`,
        },
        {
            t: "t1",
            q: String.raw`¿Qué diferencia a los productos de mercado, no de mercado y para uso final propio?`,
            a: String.raw`De mercado: se venden a precios económicamente significativos. No de mercado: se brindan gratis o a precios no significativos. Para uso final propio: los retiene el productor para su propio uso. Un mismo bien (los cuadernos del Tomo) puede ser de los tres tipos.`,
        },
        {
            t: "t1",
            q: String.raw`Nombrá en orden las cuentas corrientes de la versión simplificada y su saldo.`,
            a: String.raw`Producción (VAB) → generación del ingreso (EEB) → asignación y distribución del ingreso (IDB; en el camino, el saldo de ingresos primarios) → utilización del ingreso disponible (ahorro bruto).`,
        },
        {
            t: "t1",
            q: String.raw`¿Cuáles son las cuentas de acumulación y su saldo?`,
            a: String.raw`Cuenta de capital y cuenta financiera. Ambas tienen como saldo el Préstamo Neto (PRN): positivo si hay capacidad de financiamiento, negativo si hay necesidad.`,
        },
        {
            t: "t1",
            q: String.raw`En una cuenta en T del SCN, ¿qué va a cada lado?`,
            a: String.raw`Izquierda: usos. Derecha: recursos. El saldo se anota del lado de los usos y pasa como recurso a la cuenta siguiente.`,
        },
        {
            t: "t2",
            q: String.raw`En el COU, ¿qué muestra la fila de una rama?`,
            a: String.raw`El destino económico de su producción: Uso Intermedio (insumos de cada rama) y Uso Final (GCFH, FBKF, VE, E). Su total es la Producción de la rama: Producción<sub>i</sub> = UI<sub>i</sub> + UF<sub>i</sub>.`,
        },
        {
            t: "t2",
            q: String.raw`En el COU, ¿qué muestra la columna de una rama?`,
            a: String.raw`Las fuentes generadoras del valor: arriba, sus insumos nacionales e importados (CI); abajo, los componentes de su VAB: RA, CKF, Imp − S, EEN. Total de columna = CI + VAB = Producción.`,
        },
        { t: "t2", q: String.raw`Regla de oro del COU para completar huecos`, a: String.raw`Para cada rama, total de la fila = total de la columna = Producción de la rama.` },
        {
            t: "t2",
            q: String.raw`¿Qué es la celda (fila Rama 1, columna Rama 2)?`,
            a: String.raw`UI<sub>12</sub>: el valor de los bienes y servicios producidos por la Rama 1 (origen) y utilizados como insumo por la Rama 2 (destino). Se registra lo utilizado, no lo comprado.`,
        },
        {
            t: "t2",
            q: String.raw`¿Cómo se calcula el GCFG a partir del COU?`,
            a: String.raw`Es igual a la Producción del Gobierno, que se obtiene por su columna: CI + RA + CKF. En la versión simplificada toda esa producción se destina a la sociedad en su conjunto: Producción<sub>G</sub> = GCFG.`,
        },
        {
            t: "t2",
            q: String.raw`¿Qué representa la VE de la fila de una rama?`,
            a: String.raw`VE<sub>i</sub> = existencia final − existencia inicial de bienes producidos por la rama i. Positiva: quedaron bienes del período sin utilizar. Negativa: se utilizaron bienes producidos en períodos anteriores.`,
        },
        {
            t: "t2",
            q: String.raw`¿La Producción de la economía incluye las importaciones?`,
            a: String.raw`No. Es la suma de las producciones de las ramas. Oferta Total = Producción + M.`,
        },
        {
            t: "t2",
            q: String.raw`¿Qué información NO da el COU?`,
            a: String.raw`Qué sector institucional incorporó la FBK y la VE, los ingresos primarios de cada sector, la RA percibida por los residentes, la RX, las rentas de la propiedad y las transferencias.`,
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
            a: String.raw`Insumos producidos por el propio agro y utilizados por él, por ejemplo semillas (en el Tomo, 95 del valor de los insumos de la Rama 1 los produjo la propia Rama 1).`,
        },
        { t: "t3", q: String.raw`PIB por la óptica de la producción`, a: String.raw`PIB = Σ VAB = Producción − CI.` },
        { t: "t3", q: String.raw`PIB por el enfoque del ingreso`, a: String.raw`VAB = IIB = RA + EEB + (Imp − S) de la producción, con EEB = CKF + EEN.` },
        { t: "t3", q: String.raw`PIB por el enfoque del gasto`, a: String.raw`PIB = GCF (GCFH + GCFG) + FBK (FBKF + VE) + E − M.` },
        {
            t: "t3",
            q: String.raw`¿Qué es la RX?`,
            a: String.raw`Remuneración Neta de Factores del Exterior: RX = (RPXc − RPXp) + (RAXc − RAXp), rentas de la propiedad y remuneraciones cobradas al RM menos las pagadas al RM.`,
        },
        { t: "t3", q: String.raw`INB = ?`, a: String.raw`INB = IIB + RX = VAB + RX (la suma de los saldos de ingresos primarios de los residentes).` },
        { t: "t3", q: String.raw`INDB = ?`, a: String.raw`INDB = INB + TRNC (transferencias corrientes recibidas del RM menos enviadas al RM) = IIB + RX + TRNC.` },
        { t: "t3", q: String.raw`Ahorro Nacional Bruto = ?`, a: String.raw`ANB = INDB − GCF (GCFH + GCFG). ANN = ANB − CKF.` },
        {
            t: "t3",
            q: String.raw`Saldo corriente con el exterior (SCE) y saldo de la cuenta corriente de la BP (SBP): ¿cómo se relacionan?`,
            a: String.raw`SBP = E − M + RX + TRNC (óptica de la economía) = ANB − FBK. El SCE es el saldo de la cuenta del Resto del Mundo, construida desde su óptica: SCE = −SBP. Si la economía tiene déficit en cuenta corriente, el SCE es positivo (en el Tomo: SBP = −245 y SCE = 245).`,
        },
        {
            t: "t3",
            q: String.raw`Préstamo Neto al Resto del Mundo`,
            a: String.raw`PRN = ANN + CKF + TRNK − FBK = SBP + TRNK = −PRN del Resto del Mundo.`,
        },
        {
            t: "t3",
            q: String.raw`¿Cómo se pasa de un agregado bruto a uno neto?`,
            a: String.raw`Restando el Consumo de Capital Fijo: VAN = VAB − CKF, EEN = EEB − CKF, FNKF = FBKF − CKF, ANN = ANB − CKF.`,
        },
        {
            t: "t3",
            q: String.raw`¿Qué transacciones corrientes hay con el RM?`,
            a: String.raw`Transacciones de bienes y servicios (E y M), transacciones de servicios productivos de factores (RA y rentas de la propiedad) y transferencias corrientes. Las transferencias de capital y las financieras son transacciones de acumulación.`,
        },
        {
            t: "t3",
            q: String.raw`Coyuntura: ¿qué variación del PIB de 2022 se preguntó en la 1ª revisión 2023?`,
            a: String.raw`Aumentó 4,9% respecto a 2021 (1ª revisión 2023, pregunta 12). Cada año se pregunta el dato que trae el material vigente.`,
        },
        {
            t: "t3",
            q: String.raw`Coyuntura: ¿a cuánto ascendió el PIB de Uruguay en 2024 según el Tomo 1 (2026)?`,
            a: String.raw`3.310.493 millones de pesos corrientes (fuente BCU). Por el gasto: GCF 2.617.406 + FBK 527.181 + E 934.697 − M 768.792.`,
        },
        {
            t: "t3",
            q: String.raw`Coyuntura: ¿cuánto creció el PIB de Uruguay en 2025?`,
            a: String.raw`Creció 1,8% en volumen físico respecto a 2024, según el BCU citado en el Tomo 1 (pág. 33): por la refinería, las industrias de alimentos, el comercio y el suministro de comidas y bebidas, con caídas en construcción y energía eléctrica.`,
        },
        {
            t: "t3",
            q: String.raw`PIB a partir de la Oferta Final y la Demanda Final`,
            a: String.raw`OF = PIB + M y DF = GCF + FBK + E, con OF = DF. Entonces PIB = DF − M.`,
        },
        { t: "t4", q: String.raw`VAB = ?`, a: String.raw`VAB = Producción − CI = RA + CKF + (Imp − S) + EEN.` },
        {
            t: "t4",
            q: String.raw`¿Qué incluye la RA?`,
            a: String.raw`Es el costo total de la mano de obra: RA = salario líquido + aportes personales + aportes patronales = salario nominal + aportes patronales.`,
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
            a: String.raw`Los aportes personales + patronales a la seguridad social. En la cuenta de asignación y distribución del ingreso son un uso de los Hogares y un recurso del Gobierno.`,
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
            q: String.raw`¿El IRPF y el IRAE son impuestos sobre la producción y los productos?`,
            a: String.raw`No, son impuestos sobre el ingreso: no forman parte de los precios y se vinculan a la distribución del ingreso. Sobre la producción: licencias, patente de rodados de la empresa, ambientales; sobre los productos: IVA, IMESI, IMEBA, derechos de importación.`,
        },
        { t: "t4", q: String.raw`¿Cómo se mide la contribución de una rama al PIB?`, a: String.raw`Por su VAB.` },
        {
            t: "t5",
            q: String.raw`Recursos de los Hogares que forman su saldo de ingresos primarios`,
            a: String.raw`RA recibida (de productores residentes o del RM) y rentas de la propiedad cobradas; se restan las rentas pagadas. En la versión simplificada los hogares no producen, así que no tienen EEB.`,
        },
        {
            t: "t5",
            q: String.raw`Recursos del Gobierno que forman su saldo de ingresos primarios`,
            a: String.raw`EEB (= CKF), impuestos menos subsidios sobre la producción y rentas de la propiedad cobradas (se restan las pagadas).`,
        },
        {
            t: "t5",
            q: String.raw`¿Qué son las rentas de la propiedad?`,
            a: String.raw`Lo que cobran los propietarios de un activo financiero o de un activo tangible no producido por ponerlo a disposición de otra unidad: renta de la tierra, intereses, dividendos y utilidades.`,
        },
        {
            t: "t5",
            q: String.raw`Los intereses de deuda pública pagados a no residentes, ¿dónde van?`,
            a: String.raw`Son renta de la propiedad pagada por el Gobierno: restan en su ingreso primario, son recurso del RM y restan en la RX del país.`,
        },
        { t: "t5", q: String.raw`Σ saldos de ingresos primarios de los sectores residentes = ?`, a: String.raw`INB = VAB + RX.` },
        {
            t: "t5",
            q: String.raw`Tipos de transferencias corrientes en la versión simplificada`,
            a: String.raw`Contribuciones sociales, prestaciones sociales y otras transferencias corrientes (cooperación internacional corriente como ayudas de emergencia, remesas, donaciones). El SCN 93 incluye además los impuestos sobre el ingreso y la riqueza, que la versión del curso no considera.`,
        },
        {
            t: "t5",
            q: String.raw`Donación de medicamentos del exterior al gobierno: ¿corriente o de capital?`,
            a: String.raw`Corriente. Entra en la TRNC y en el ingreso disponible del Gobierno (el Tomo usa el ejemplo de donaciones de vacunas al MSP).`,
        },
        {
            t: "t5",
            q: String.raw`Donación de ambulancias del exterior al gobierno: ¿corriente o de capital?`,
            a: String.raw`De capital: traspasa la propiedad de un activo fijo sin contrapartida. No entra en la TRNC ni en el ingreso disponible; va a la cuenta de capital.`,
        },
        { t: "t5", q: String.raw`Σ ingresos disponibles de los sectores residentes = ?`, a: String.raw`INDB = INB + TRCXr − TRCXe = INB + TRNC.` },
        {
            t: "t5",
            q: String.raw`¿Quién paga y quién recibe las prestaciones sociales?`,
            a: String.raw`Las paga el Gobierno (jubilaciones y pensiones) y las reciben los Hogares.`,
        },
        {
            t: "t5",
            q: String.raw`Si falta cuánto recibió de rentas de la propiedad el RM, ¿cómo lo calculás?`,
            a: String.raw`En la columna Total, las rentas cobradas son iguales a las pagadas (incluido el RM). Despejás lo del RM.`,
        },
        { t: "t6", q: String.raw`Ahorro bruto de un sector`, a: String.raw`AB = IDB − GCF.` },
        { t: "t6", q: String.raw`Ahorro bruto de las sociedades`, a: String.raw`Igual a su ingreso disponible bruto: las sociedades no tienen consumo final.` },
        { t: "t6", q: String.raw`GCFG = ?`, a: String.raw`GCFG = Producción del Gobierno = CI + RA + CKF del Gobierno.` },
        {
            t: "t6",
            q: String.raw`¿La energía que una intendencia compra a Brasil termina en el GCFG?`,
            a: String.raw`Sí: es una importación utilizada como insumo por el Gobierno; integra el costo de su producción no de mercado, que es igual a su GCF.`,
        },
        { t: "t7", q: String.raw`Préstamo neto en la cuenta de capital`, a: String.raw`PRN = Ahorro Bruto + TRKr − TRKe − FBKF − VE.` },
        {
            t: "t7",
            q: String.raw`Préstamo neto en la cuenta financiera`,
            a: String.raw`PRN = Δ Activos Financieros − Δ Pasivos (adquisición neta de activos financieros − emisión neta de pasivos).`,
        },
        {
            t: "t7",
            q: String.raw`Instrumentos financieros que usa el curso`,
            a: String.raw`Dinero legal y depósitos; valores distintos de acciones; préstamos y crédito comercial; acciones y participaciones de capital. Los tres primeros son de naturaleza crediticia; las acciones, de participación en la propiedad.`,
        },
        {
            t: "t7",
            q: String.raw`PRN de la economía y PRN del RM`,
            a: String.raw`La suma de los PRN de los residentes es igual al PRN del RM con signo opuesto; en la columna Total el PRN es 0.`,
        },
        {
            t: "t7",
            q: String.raw`Si las Sociedades tienen PRN negativo, ¿qué se deduce necesariamente?`,
            a: String.raw`Que su emisión neta de pasivos superó su adquisición neta de activos financieros.`,
        },
        {
            t: "t7",
            q: String.raw`FBK 6.556, TRNK 0, PRN de la economía −1.000. ¿Ahorro Nacional Bruto?`,
            a: String.raw`ANB + TRNK = FBK + PRN, entonces ANB = 6.556 − 1.000 = 5.556.`,
        },
        {
            t: "t7",
            q: String.raw`¿Qué describen las cuentas de acumulación?`,
            a: String.raw`La utilización del ahorro en acumulación y el proceso de financiación de esa acumulación (cuenta de capital y cuenta financiera).`,
        },
        {
            t: "t7",
            q: String.raw`Regla para completar un hueco en la cuenta financiera por instrumento`,
            a: String.raw`Las transacciones financieras balancean horizontalmente: para cada instrumento, en la columna Total, la adquisición neta de activos es igual a la emisión neta de pasivos (incluido el RM).`,
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
            exp: String.raw`La residencia depende del centro de interés económico, no de la nacionalidad de los dueños: realiza y tiene intención de seguir realizando actividades en Uruguay, entonces es residente. Produce bienes no financieros para el mercado: sociedad no financiera.`,
        },
        {
            t: "t1",
            q: String.raw`¿Cuál de las siguientes unidades pertenece al sector Gobierno general?`,
            opts: [String.raw`ANCAP`, String.raw`El BROU`, String.raw`UTE`, String.raw`El Banco de Previsión Social (BPS)`],
            ans: 3,
            exp: String.raw`El Tomo 1 incluye al BPS (institución de previsión social) en el Gobierno General. ANCAP y UTE son empresas públicas, que no integran el Gobierno, y el BROU es un banco: sociedad financiera.`,
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
            exp: String.raw`Es producción no de mercado: no tiene precio de mercado, se valora por sus costos (CI + RA + CKF) y su EEN es 0.`,
        },
        {
            t: "t1",
            q: String.raw`El saldo de la cuenta de asignación y distribución del ingreso es:`,
            opts: [
                String.raw`El saldo de ingresos primarios`,
                String.raw`El ahorro bruto`,
                String.raw`El ingreso disponible bruto`,
                String.raw`El excedente de explotación bruto`,
            ],
            ans: 2,
            exp: String.raw`Secuencia de la versión simplificada: producción → VAB; generación del ingreso → EEB; asignación y distribución del ingreso → IDB (pasando por el saldo de ingresos primarios); utilización del ingreso → ahorro bruto.`,
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
            exp: String.raw`Su centro de interés económico está en España: es no residente. Las remesas son otras transferencias corrientes del RM a los hogares residentes.`,
        },
        {
            t: "t1",
            q: String.raw`Las cuentas corrientes de un sector institucional son:`,
            opts: [
                String.raw`Producción, generación del ingreso, asignación y distribución del ingreso y utilización del ingreso disponible`,
                String.raw`Cuenta de capital y cuenta financiera`,
                String.raw`Producción, cuenta de capital y cuenta financiera`,
                String.raw`Solo la cuenta de producción y la de utilización del ingreso`,
            ],
            ans: 0,
            exp: String.raw`Son las cuentas que describen producción, generación, distribución y redistribución del ingreso y su utilización. Las de capital y financiera son cuentas de acumulación.`,
        },
        {
            t: "t2",
            q: String.raw`En el COU, el total de la fila de una rama de actividad es igual a:`,
            opts: [
                String.raw`El valor agregado bruto de esa rama`,
                String.raw`La utilización final de esa rama`,
                String.raw`El consumo intermedio de esa rama`,
                String.raw`La Producción de esa rama`,
            ],
            ans: 3,
            exp: String.raw`La fila muestra el destino económico de lo producido por la rama: Producción<sub>i</sub> = UI<sub>i</sub> + UF<sub>i</sub>, que también es el total de la columna (CI + VAB).`,
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
            exp: String.raw`Fila Rama 1 = producido por la actividad agropecuaria; columna agro = utilizado como insumo por el agro. Los fertilizantes importados van en la fila de importaciones; las cosechadoras son bienes finales de capital (FBKF); el trigo del molino es insumo de la industria (columna Rama 2).`,
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
            exp: String.raw`El COU está organizado por ramas de actividad, no por sectores institucionales; muestra la RA que paga cada rama. La RA que perciben los residentes requiere conocer la pagada a no residentes y la cobrada al exterior (1ª rev. 2023, preg. 11).`,
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
            exp: String.raw`VE<sub>i</sub> = existencia final − existencia inicial. Si es negativa, en el período se utilizaron bienes producidos en períodos anteriores. No tiene que ver con pérdidas ni con comercio exterior.`,
        },
        {
            t: "t2",
            q: String.raw`En un COU, la columna del Gobierno muestra insumos por 2.000, RA por 7.200 y CKF por 800. El gasto de consumo final del Gobierno es:`,
            opts: [String.raw`8.000`, String.raw`7.200`, String.raw`2.000`, String.raw`10.000`],
            ans: 3,
            exp: String.raw`Producción<sub>G</sub> = CI + RA + CKF = 2.000 + 7.200 + 800 = 10.000 y, en la versión simplificada, Producción<sub>G</sub> = GCFG. (8.000 es su VAB, 7.200 su RA y 2.000 su CI.)`,
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
            exp: String.raw`Producción = Σ Producción<sub>i</sub>. Con las importaciones sería la Oferta Total; ΣVAB y utilización final − M son el PIB.`,
        },
        {
            t: "t2",
            q: String.raw`En un COU, la oferta total de bienes y servicios es igual a:`,
            opts: [
                String.raw`El PIB más las importaciones`,
                String.raw`La utilización intermedia total más la utilización final total`,
                String.raw`La Producción menos el consumo intermedio`,
                String.raw`La utilización final total`,
            ],
            ans: 1,
            exp: String.raw`OT = Producción + M = UI + UF. PIB + M es la Oferta Final, igual a la Demanda Final.`,
        },
        {
            t: "t3",
            q: String.raw`El PIB es igual a:`,
            opts: [
                String.raw`GCF + FBKF + saldo de la balanza comercial`,
                String.raw`GCF de hogares + FBK + E − M`,
                String.raw`GCFH + GCFG + FBKF + VE + E − M`,
                String.raw`Producción − importaciones`,
            ],
            ans: 2,
            exp: String.raw`La primera omite la VE (FBKF en vez de FBK), la segunda omite el consumo del Gobierno y la cuarta resta M a la Producción cuando habría que restar el CI.`,
        },
        {
            t: "t3",
            q: String.raw`La contribución de la actividad industrial al PIB se mide por:`,
            opts: [
                String.raw`El valor agregado bruto de la industria`,
                String.raw`La Producción de la industria`,
                String.raw`Las ventas de la industria a los hogares`,
                String.raw`La remuneración de asalariados de la industria`,
            ],
            ans: 0,
            exp: String.raw`El PIB es la suma de los VAB; la contribución de cada sector al PIB es su VAB (1ª rev. 2023, preg. 9).`,
        },
        {
            t: "t3",
            q: String.raw`Si el PIB es 40.000 y la RX es −1.500, el INB es:`,
            opts: [String.raw`41.500`, String.raw`38.500`, String.raw`40.000`, String.raw`1.500`],
            ans: 1,
            exp: String.raw`INB = IIB + RX = 40.000 − 1.500 = 38.500.`,
        },
        {
            t: "t3",
            q: String.raw`¿Cuál de las siguientes afecta la RX de Uruguay?`,
            opts: [
                String.raw`Remesas enviadas por emigrantes uruguayos`,
                String.raw`Una donación de ambulancias recibida del exterior`,
                String.raw`Importaciones de petróleo`,
                String.raw`Intereses de deuda pública pagados a tenedores no residentes`,
            ],
            ans: 3,
            exp: String.raw`La RX incluye remuneraciones y rentas de la propiedad con el RM. Las remesas son transferencias corrientes (TRNC), la donación de ambulancias es transferencia de capital y el petróleo es importación.`,
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
            exp: String.raw`Las transacciones corrientes con el RM son de bienes y servicios, de servicios productivos de factores y transferencias corrientes. Transferencias de capital y préstamos son transacciones de acumulación (1ª rev. 2023, preg. 32).`,
        },
        {
            t: "t3",
            q: String.raw`El Saldo de la Cuenta Corriente de la Balanza de Pagos (SBP) es igual a:`,
            opts: [String.raw`Ahorro nacional bruto − FBKF`, String.raw`INDB − FBK`, String.raw`Ahorro nacional bruto − FBK`, String.raw`E − M`],
            ans: 2,
            exp: String.raw`El Tomo 1 muestra que ANN + CKF − FBK = SBP, es decir ANB − FBK = SBP = E − M + RX + TRNC. E − M es solo el SBC. Ojo: el «Saldo corriente con el exterior» (SCE) de las cuentas del RM es el SBP con signo contrario: SCE = FBK − ANB.`,
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
            opts: [String.raw`Creció 1,8%`, String.raw`Creció 4,9%`, String.raw`Cayó 1,8%`, String.raw`Cayó 0,5%`],
            ans: 0,
            exp: String.raw`El Tomo 1 (2026, pág. 33) cita al BCU: la actividad económica en 2025 creció 1,8% respecto a 2024. El 4,9% fue el crecimiento de 2022, que se preguntó en la 1ª revisión 2023.`,
        },
        {
            t: "t3",
            q: String.raw`El excedente de explotación bruto es igual a:`,
            opts: [String.raw`VAB − CI`, String.raw`RA + EEN`, String.raw`Producción − RA`, String.raw`Consumo de capital fijo + excedente de explotación neto`],
            ans: 3,
            exp: String.raw`EEB = VAB − RA − (Imp − S) = CKF + EEN.`,
        },
        {
            t: "t4",
            q: String.raw`Si los aportes personales y patronales fueron 6.000 y 8.000 respectivamente y la RA fue 40.000, los salarios nominales percibidos fueron:`,
            opts: [String.raw`26.000`, String.raw`32.000`, String.raw`34.000`, String.raw`40.000`],
            ans: 1,
            exp: String.raw`RA = salario líquido + aportes personales + aportes patronales = salario nominal + aportes patronales. Salarios nominales = 40.000 − 8.000 = 32.000; 26.000 sería el salario líquido.`,
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
            exp: String.raw`La leche se utiliza y agota en el proceso productivo: es consumo intermedio. Los otros son activos fijos (que sean importados no cambia su destino): FBKF (1ª rev. 2024, preg. 32).`,
        },
        {
            t: "t4",
            q: String.raw`Según el Tomo 1, ¿cuál de los siguientes es un impuesto sobre la producción y los productos?`,
            opts: [String.raw`El IRPF`, String.raw`El IRAE`, String.raw`El IVA`, String.raw`El impuesto al patrimonio de las personas físicas`],
            ans: 2,
            exp: String.raw`El IVA es un impuesto sobre los productos (proporcional a las ventas). IRPF e IRAE gravan los ingresos y el impuesto al patrimonio grava la riqueza: no se vinculan al proceso productivo sino a la distribución del ingreso.`,
        },
        {
            t: "t4",
            q: String.raw`El VAB de una rama es igual a:`,
            opts: [
                String.raw`Producción + CI`,
                String.raw`RA + CKF + impuestos netos de subvenciones sobre la producción + EEN`,
                String.raw`RA + EEN`,
                String.raw`Producción − RA − CKF`,
            ],
            ans: 1,
            exp: String.raw`Es la descomposición del VAB a precios básicos en la columna del COU y en la cuenta de generación del ingreso.`,
        },
        {
            t: "t4",
            q: String.raw`La columna del Gobierno en un COU muestra insumos por 300, RA por 900 y CKF por 100. Su Excedente de Explotación Bruto es:`,
            opts: [String.raw`0`, String.raw`1.000`, String.raw`1.300`, String.raw`100`],
            ans: 3,
            exp: String.raw`Para el Gobierno EEN = 0 y no hay Imp − S sobre su producción, entonces EEB<sub>G</sub> = CKF<sub>G</sub> = 100. (0 es su EEN, 1.000 su VAB y 1.300 su Producción.)`,
        },
        {
            t: "t5",
            q: String.raw`¿Cuál de los siguientes recursos del Gobierno forma parte de su saldo de ingresos primarios?`,
            opts: [
                String.raw`Otras transferencias corrientes recibidas del RM`,
                String.raw`Contribuciones sociales`,
                String.raw`Remuneración de asalariados`,
                String.raw`Impuestos menos subsidios sobre la producción`,
            ],
            ans: 3,
            exp: String.raw`Imp − S sobre la producción es ingreso primario del Gobierno. Contribuciones sociales y otras transferencias corrientes son distribución secundaria; la RA es recurso de los Hogares (o del RM).`,
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
            exp: String.raw`Las computadoras son activos fijos: su donación traspasa la propiedad de un activo sin contrapartida, es transferencia de capital y no entra en el ingreso disponible.`,
        },
        {
            t: "t5",
            q: String.raw`Una donación de medicamentos recibida por el Ministerio de Salud desde el exterior es:`,
            opts: [
                String.raw`Una transferencia de capital`,
                String.raw`Parte de la RX`,
                String.raw`Una transferencia corriente que aumenta el ingreso disponible del gobierno`,
                String.raw`Una renta de la propiedad del gobierno`,
            ],
            ans: 2,
            exp: String.raw`Es otra transferencia corriente recibida del RM (entra en la TRNC); el Tomo usa el ejemplo de las donaciones de vacunas al MSP.`,
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
            exp: String.raw`Σ saldos de ingresos primarios de los residentes = VAB + RX = INB.`,
        },
        {
            t: "t5",
            q: String.raw`Las contribuciones sociales, en la cuenta de asignación y distribución del ingreso:`,
            opts: [
                String.raw`Son un recurso de los hogares y un uso del gobierno`,
                String.raw`Son un uso de los hogares y un recurso del gobierno`,
                String.raw`Son un uso de las sociedades y un recurso de los hogares`,
                String.raw`No aparecen: ya están en la RA`,
            ],
            ans: 1,
            exp: String.raw`Los aportes personales y patronales forman parte de la RA que reciben los hogares; en esta cuenta los hogares los pagan (uso) y el Gobierno los recibe (recurso). Las prestaciones sociales van del Gobierno a los hogares.`,
        },
        {
            t: "t5",
            q: String.raw`Las jubilaciones y pensiones que el Gobierno paga a los hogares, en la cuenta de asignación y distribución del ingreso:`,
            opts: [
                String.raw`Forman parte de la remuneración de asalariados`,
                String.raw`Son contribuciones sociales: recurso del Gobierno`,
                String.raw`Forman parte del ingreso primario de los hogares`,
                String.raw`Son prestaciones sociales: uso del Gobierno y recurso de los hogares`,
            ],
            ans: 3,
            exp: String.raw`Son prestaciones sociales (distribución secundaria): el Gobierno las paga y los hogares las reciben, financiadas por las contribuciones a la seguridad social. No son RA ni ingreso primario.`,
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
            exp: String.raw`Las remesas son transferencias corrientes del RM: entran en la TRNC, que es lo que separa el INB del INDB (INDB = INB + TRNC).`,
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
            exp: String.raw`La energía es insumo de la Intendencia (Gobierno), integra el costo de su producción no de mercado y esa producción es su GCF (1ª rev. 2023, preg. 10). Los vehículos son FBKF; ANTEL y el BROU son sociedades.`,
        },
        {
            t: "t6",
            q: String.raw`Si el ingreso disponible bruto del Gobierno es 6.000 y su Producción es 9.000, su ahorro bruto es:`,
            opts: [String.raw`−3.000`, String.raw`15.000`, String.raw`3.000`, String.raw`−9.000`],
            ans: 0,
            exp: String.raw`GCFG = Producción del Gobierno = 9.000. AB = IDB − GCFG = 6.000 − 9.000 = −3.000.`,
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
            exp: String.raw`ANB = INDB − GCF = Σ ahorros de los sectores residentes. Con INB o PIB faltarían la TRNC y/o la RX; la FBK solo coincide si el SBP es cero.`,
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
            exp: String.raw`PRN = Δ activos financieros − Δ pasivos. Negativo implica emisión neta de pasivos mayor que la adquisición neta de activos, pero pudieron adquirir activos (1ª rev. 2024, preg. 30). Su ahorro puede ser positivo y menor que su FBK. El signo del RM depende de toda la economía.`,
        },
        {
            t: "t7",
            q: String.raw`Si la FBK es 6.556, la TRNK es 0 y el préstamo neto de la economía es −1.200, el ahorro nacional bruto es:`,
            opts: [String.raw`5.356`, String.raw`7.756`, String.raw`6.556`, String.raw`1.200`],
            ans: 0,
            exp: String.raw`ANB + TRNK = FBK + PRN, entonces ANB = 6.556 − 1.200 = 5.356.`,
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
            exp: String.raw`La cuenta de capital muestra la utilización del ahorro (y de las transferencias de capital) en acumulación; la financiera, el proceso de financiación de esa acumulación (1ª rev. 2024, preg. 29).`,
        },
        {
            t: "t7",
            q: String.raw`Si el préstamo neto de la economía es −2.000, el préstamo neto del Resto del Mundo es:`,
            opts: [String.raw`−2.000`, String.raw`2.000`, String.raw`0`, String.raw`No se puede saber`],
            ans: 1,
            exp: String.raw`La suma de los PRN de los residentes es igual al PRN del RM con signo opuesto.`,
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
            q: String.raw`El Gobierno tuvo ahorro bruto de −3.000, recibió transferencias de capital por 400 e hizo FBKF por 1.000. Su préstamo neto es:`,
            opts: [String.raw`−4.400`, String.raw`−2.600`, String.raw`−4.000`, String.raw`−3.600`],
            ans: 3,
            exp: String.raw`PRN = AB + TRKr − TRKe − FBK = −3.000 + 400 − 1.000 = −3.600.`,
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
            exp: String.raw`Las acciones y participaciones de capital son pasivo de quien las emite y activo de quien las adquiere.`,
        },
    ],
    exams: [
        {
            id: "sim-1",
            title: "Simulacro 1 · 1ª prueba (SCN)",
            kind: "simulacro",
            minutes: 120,
            scoring: { correct: 1.5, wrong: -0.5, blank: 0 },
            note: String.raw`<p>Simulacro con el formato de la 1ª prueba de 2023 y 2024: preguntas de múltiple opción en módulos (COU, cuentas corrientes por sector, cuenta financiera) más preguntas conceptuales. Cada correcta suma 1,5, cada incorrecta resta 0,5, en blanco 0. La prueba real vale 45 puntos (mínimo 18) y tiene 32 preguntas; con 30 correctas llegás al máximo. Duración: 2 horas.</p><p><strong>Estrategia</strong>: con 4 opciones y −0,5 por error, adivinar totalmente al azar tiene valor esperado 0 (0,25 × 1,5 − 0,75 × 0,5 = 0). Si descartaste al menos una opción, conviene responder: con 3 opciones posibles el valor esperado es +0,17 y con 2, +0,5. En los módulos numéricos, completá primero los casilleros con ? del cuadro y chequeá que el PIB dé igual por las tres ópticas antes de marcar.</p>`,
            questions: [
                {
                    t: "t2",
                    q: String.raw`<div class="box"><p><strong>Módulo 1 · COU.</strong> Economía con dos ramas de mercado (Rama 1: agropecuaria; Rama 2: industria) y el Gobierno, que produce servicios no de mercado. Cifras en millones de $. Los casilleros con ? no se conocen.</p><table><tr><th></th><th>Rama 1</th><th>Rama 2</th><th>Gobierno</th><th>GCFH</th><th>GCFG</th><th>FBKF</th><th>VE</th><th>E</th><th>Total</th></tr><tr><td>Rama 1</td><td>2.000</td><td>9.000</td><td>500</td><td>6.000</td><td>0</td><td>0</td><td>1.500</td><td>5.000</td><td>?</td></tr><tr><td>Rama 2</td><td>3.000</td><td>4.000</td><td>1.500</td><td>14.000</td><td>0</td><td>3.500</td><td>500</td><td>6.500</td><td>?</td></tr><tr><td>Gobierno</td><td>0</td><td>0</td><td>0</td><td>0</td><td>?</td><td>0</td><td>0</td><td>0</td><td>?</td></tr><tr><td>Importaciones</td><td>1.500</td><td>3.000</td><td>1.000</td><td>4.200</td><td>0</td><td>2.500</td><td>0</td><td>0</td><td>?</td></tr><tr><td>RA</td><td>5.000</td><td>7.000</td><td>6.000</td><td colspan="6"></td></tr><tr><td>CKF</td><td>2.000</td><td>3.000</td><td>1.000</td><td colspan="6"></td></tr><tr><td>Imp−S</td><td>1.500</td><td>2.500</td><td>0</td><td colspan="6"></td></tr><tr><td>EEN</td><td>9.000</td><td>?</td><td>0</td><td colspan="6"></td></tr></table></div><p>La Producción de la Rama 1 fue:</p>`,
                    opts: [String.raw`$ 17.500`, String.raw`$ 24.000`, String.raw`$ 6.500`, String.raw`$ 12.500`],
                    ans: 1,
                    sol: String.raw`Total de la fila Rama 1: 2.000 + 9.000 + 500 + 6.000 + 0 + 0 + 1.500 + 5.000 = 24.000. (17.500 es su VAB y 6.500 su CI; 12.500 es solo la utilización final de la fila.)`,
                },
                {
                    t: "t2",
                    q: String.raw`<div class="box"><p><strong>Módulo 1 · COU.</strong> Economía con dos ramas de mercado (Rama 1: agropecuaria; Rama 2: industria) y el Gobierno, que produce servicios no de mercado. Cifras en millones de $. Los casilleros con ? no se conocen.</p><table><tr><th></th><th>Rama 1</th><th>Rama 2</th><th>Gobierno</th><th>GCFH</th><th>GCFG</th><th>FBKF</th><th>VE</th><th>E</th><th>Total</th></tr><tr><td>Rama 1</td><td>2.000</td><td>9.000</td><td>500</td><td>6.000</td><td>0</td><td>0</td><td>1.500</td><td>5.000</td><td>?</td></tr><tr><td>Rama 2</td><td>3.000</td><td>4.000</td><td>1.500</td><td>14.000</td><td>0</td><td>3.500</td><td>500</td><td>6.500</td><td>?</td></tr><tr><td>Gobierno</td><td>0</td><td>0</td><td>0</td><td>0</td><td>?</td><td>0</td><td>0</td><td>0</td><td>?</td></tr><tr><td>Importaciones</td><td>1.500</td><td>3.000</td><td>1.000</td><td>4.200</td><td>0</td><td>2.500</td><td>0</td><td>0</td><td>?</td></tr><tr><td>RA</td><td>5.000</td><td>7.000</td><td>6.000</td><td colspan="6"></td></tr><tr><td>CKF</td><td>2.000</td><td>3.000</td><td>1.000</td><td colspan="6"></td></tr><tr><td>Imp−S</td><td>1.500</td><td>2.500</td><td>0</td><td colspan="6"></td></tr><tr><td>EEN</td><td>9.000</td><td>?</td><td>0</td><td colspan="6"></td></tr></table></div><p>El valor de los bienes intermedios producidos por la Rama 1 y utilizados por la Rama 2 fue:</p>`,
                    opts: [String.raw`$ 3.000`, String.raw`$ 12.000`, String.raw`$ 16.000`, String.raw`$ 9.000`],
                    ans: 3,
                    sol: String.raw`Celda fila Rama 1, columna Rama 2 = 9.000. El 3.000 es la celda inversa (producido por la Rama 2 usado por la Rama 1); 12.000 suma lo importado por la Rama 2; 16.000 es todo el CI de la Rama 2.`,
                },
                {
                    t: "t2",
                    q: String.raw`<div class="box"><p><strong>Módulo 1 · COU.</strong> Economía con dos ramas de mercado (Rama 1: agropecuaria; Rama 2: industria) y el Gobierno, que produce servicios no de mercado. Cifras en millones de $. Los casilleros con ? no se conocen.</p><table><tr><th></th><th>Rama 1</th><th>Rama 2</th><th>Gobierno</th><th>GCFH</th><th>GCFG</th><th>FBKF</th><th>VE</th><th>E</th><th>Total</th></tr><tr><td>Rama 1</td><td>2.000</td><td>9.000</td><td>500</td><td>6.000</td><td>0</td><td>0</td><td>1.500</td><td>5.000</td><td>?</td></tr><tr><td>Rama 2</td><td>3.000</td><td>4.000</td><td>1.500</td><td>14.000</td><td>0</td><td>3.500</td><td>500</td><td>6.500</td><td>?</td></tr><tr><td>Gobierno</td><td>0</td><td>0</td><td>0</td><td>0</td><td>?</td><td>0</td><td>0</td><td>0</td><td>?</td></tr><tr><td>Importaciones</td><td>1.500</td><td>3.000</td><td>1.000</td><td>4.200</td><td>0</td><td>2.500</td><td>0</td><td>0</td><td>?</td></tr><tr><td>RA</td><td>5.000</td><td>7.000</td><td>6.000</td><td colspan="6"></td></tr><tr><td>CKF</td><td>2.000</td><td>3.000</td><td>1.000</td><td colspan="6"></td></tr><tr><td>Imp−S</td><td>1.500</td><td>2.500</td><td>0</td><td colspan="6"></td></tr><tr><td>EEN</td><td>9.000</td><td>?</td><td>0</td><td colspan="6"></td></tr></table></div><p>Las importaciones totales fueron:</p>`,
                    opts: [String.raw`$ 12.200`, String.raw`$ 5.500`, String.raw`$ 6.700`, String.raw`$ 11.500`],
                    ans: 0,
                    sol: String.raw`Total de la fila de importaciones: 1.500 + 3.000 + 1.000 + 4.200 + 2.500 = 12.200. (5.500 son solo las intermedias, 6.700 solo las finales y 11.500 son las exportaciones.)`,
                },
                {
                    t: "t2",
                    q: String.raw`<div class="box"><p><strong>Módulo 1 · COU.</strong> Economía con dos ramas de mercado (Rama 1: agropecuaria; Rama 2: industria) y el Gobierno, que produce servicios no de mercado. Cifras en millones de $. Los casilleros con ? no se conocen.</p><table><tr><th></th><th>Rama 1</th><th>Rama 2</th><th>Gobierno</th><th>GCFH</th><th>GCFG</th><th>FBKF</th><th>VE</th><th>E</th><th>Total</th></tr><tr><td>Rama 1</td><td>2.000</td><td>9.000</td><td>500</td><td>6.000</td><td>0</td><td>0</td><td>1.500</td><td>5.000</td><td>?</td></tr><tr><td>Rama 2</td><td>3.000</td><td>4.000</td><td>1.500</td><td>14.000</td><td>0</td><td>3.500</td><td>500</td><td>6.500</td><td>?</td></tr><tr><td>Gobierno</td><td>0</td><td>0</td><td>0</td><td>0</td><td>?</td><td>0</td><td>0</td><td>0</td><td>?</td></tr><tr><td>Importaciones</td><td>1.500</td><td>3.000</td><td>1.000</td><td>4.200</td><td>0</td><td>2.500</td><td>0</td><td>0</td><td>?</td></tr><tr><td>RA</td><td>5.000</td><td>7.000</td><td>6.000</td><td colspan="6"></td></tr><tr><td>CKF</td><td>2.000</td><td>3.000</td><td>1.000</td><td colspan="6"></td></tr><tr><td>Imp−S</td><td>1.500</td><td>2.500</td><td>0</td><td colspan="6"></td></tr><tr><td>EEN</td><td>9.000</td><td>?</td><td>0</td><td colspan="6"></td></tr></table></div><p>Las importaciones utilizadas para FBKF fueron:</p>`,
                    opts: [String.raw`$ 6.000`, String.raw`$ 3.500`, String.raw`$ 2.500`, String.raw`$ 8.500`],
                    ans: 2,
                    sol: String.raw`Celda fila Importaciones, columna FBKF = 2.500. La FBKF total es 6.000 (3.500 nacional de la Rama 2 + 2.500 importada).`,
                },
                {
                    t: "t2",
                    q: String.raw`<div class="box"><p><strong>Módulo 1 · COU.</strong> Economía con dos ramas de mercado (Rama 1: agropecuaria; Rama 2: industria) y el Gobierno, que produce servicios no de mercado. Cifras en millones de $. Los casilleros con ? no se conocen.</p><table><tr><th></th><th>Rama 1</th><th>Rama 2</th><th>Gobierno</th><th>GCFH</th><th>GCFG</th><th>FBKF</th><th>VE</th><th>E</th><th>Total</th></tr><tr><td>Rama 1</td><td>2.000</td><td>9.000</td><td>500</td><td>6.000</td><td>0</td><td>0</td><td>1.500</td><td>5.000</td><td>?</td></tr><tr><td>Rama 2</td><td>3.000</td><td>4.000</td><td>1.500</td><td>14.000</td><td>0</td><td>3.500</td><td>500</td><td>6.500</td><td>?</td></tr><tr><td>Gobierno</td><td>0</td><td>0</td><td>0</td><td>0</td><td>?</td><td>0</td><td>0</td><td>0</td><td>?</td></tr><tr><td>Importaciones</td><td>1.500</td><td>3.000</td><td>1.000</td><td>4.200</td><td>0</td><td>2.500</td><td>0</td><td>0</td><td>?</td></tr><tr><td>RA</td><td>5.000</td><td>7.000</td><td>6.000</td><td colspan="6"></td></tr><tr><td>CKF</td><td>2.000</td><td>3.000</td><td>1.000</td><td colspan="6"></td></tr><tr><td>Imp−S</td><td>1.500</td><td>2.500</td><td>0</td><td colspan="6"></td></tr><tr><td>EEN</td><td>9.000</td><td>?</td><td>0</td><td colspan="6"></td></tr></table></div><p>El valor total de la producción de la economía fue:</p>`,
                    opts: [String.raw`$ 41.500`, String.raw`$ 79.200`, String.raw`$ 67.000`, String.raw`$ 57.000`],
                    ans: 2,
                    sol: String.raw`Producción = 24.000 (Rama 1) + 33.000 (Rama 2) + 10.000 (Gobierno) = 67.000. La Rama 2 se obtiene sumando su fila: 3.000 + 4.000 + 1.500 + 14.000 + 3.500 + 500 + 6.500 = 33.000. El Gobierno por su columna: CI (500 + 1.500 + 1.000 = 3.000) + RA 6.000 + CKF 1.000 = 10.000. (41.500 es el PIB; 79.200 suma las importaciones, es la Oferta Total; 57.000 olvida al Gobierno.)`,
                },
                {
                    t: "t2",
                    q: String.raw`<div class="box"><p><strong>Módulo 1 · COU.</strong> Economía con dos ramas de mercado (Rama 1: agropecuaria; Rama 2: industria) y el Gobierno, que produce servicios no de mercado. Cifras en millones de $. Los casilleros con ? no se conocen.</p><table><tr><th></th><th>Rama 1</th><th>Rama 2</th><th>Gobierno</th><th>GCFH</th><th>GCFG</th><th>FBKF</th><th>VE</th><th>E</th><th>Total</th></tr><tr><td>Rama 1</td><td>2.000</td><td>9.000</td><td>500</td><td>6.000</td><td>0</td><td>0</td><td>1.500</td><td>5.000</td><td>?</td></tr><tr><td>Rama 2</td><td>3.000</td><td>4.000</td><td>1.500</td><td>14.000</td><td>0</td><td>3.500</td><td>500</td><td>6.500</td><td>?</td></tr><tr><td>Gobierno</td><td>0</td><td>0</td><td>0</td><td>0</td><td>?</td><td>0</td><td>0</td><td>0</td><td>?</td></tr><tr><td>Importaciones</td><td>1.500</td><td>3.000</td><td>1.000</td><td>4.200</td><td>0</td><td>2.500</td><td>0</td><td>0</td><td>?</td></tr><tr><td>RA</td><td>5.000</td><td>7.000</td><td>6.000</td><td colspan="6"></td></tr><tr><td>CKF</td><td>2.000</td><td>3.000</td><td>1.000</td><td colspan="6"></td></tr><tr><td>Imp−S</td><td>1.500</td><td>2.500</td><td>0</td><td colspan="6"></td></tr><tr><td>EEN</td><td>9.000</td><td>?</td><td>0</td><td colspan="6"></td></tr></table></div><p>El valor de los insumos nacionales utilizados por el Gobierno fue:</p>`,
                    opts: [String.raw`$ 2.000`, String.raw`$ 3.000`, String.raw`$ 1.000`, String.raw`$ 7.000`],
                    ans: 0,
                    sol: String.raw`Columna Gobierno, filas de ramas nacionales: 500 + 1.500 + 0 = 2.000. El CI total (3.000) incluye 1.000 importado. 7.000 es su VAB.`,
                },
                {
                    t: "t2",
                    q: String.raw`<div class="box"><p><strong>Módulo 1 · COU.</strong> Economía con dos ramas de mercado (Rama 1: agropecuaria; Rama 2: industria) y el Gobierno, que produce servicios no de mercado. Cifras en millones de $. Los casilleros con ? no se conocen.</p><table><tr><th></th><th>Rama 1</th><th>Rama 2</th><th>Gobierno</th><th>GCFH</th><th>GCFG</th><th>FBKF</th><th>VE</th><th>E</th><th>Total</th></tr><tr><td>Rama 1</td><td>2.000</td><td>9.000</td><td>500</td><td>6.000</td><td>0</td><td>0</td><td>1.500</td><td>5.000</td><td>?</td></tr><tr><td>Rama 2</td><td>3.000</td><td>4.000</td><td>1.500</td><td>14.000</td><td>0</td><td>3.500</td><td>500</td><td>6.500</td><td>?</td></tr><tr><td>Gobierno</td><td>0</td><td>0</td><td>0</td><td>0</td><td>?</td><td>0</td><td>0</td><td>0</td><td>?</td></tr><tr><td>Importaciones</td><td>1.500</td><td>3.000</td><td>1.000</td><td>4.200</td><td>0</td><td>2.500</td><td>0</td><td>0</td><td>?</td></tr><tr><td>RA</td><td>5.000</td><td>7.000</td><td>6.000</td><td colspan="6"></td></tr><tr><td>CKF</td><td>2.000</td><td>3.000</td><td>1.000</td><td colspan="6"></td></tr><tr><td>Imp−S</td><td>1.500</td><td>2.500</td><td>0</td><td colspan="6"></td></tr><tr><td>EEN</td><td>9.000</td><td>?</td><td>0</td><td colspan="6"></td></tr></table></div><p>El gasto de consumo final de los hogares fue:</p>`,
                    opts: [String.raw`$ 20.000`, String.raw`$ 34.200`, String.raw`$ 24.200`, String.raw`$ 30.200`],
                    ans: 2,
                    sol: String.raw`Columna GCFH completa: 6.000 + 14.000 + 0 + 4.200 = 24.200. 20.000 olvida lo importado; 34.200 es el GCF total (hogares + gobierno); 30.200 le suma la FBKF.`,
                },
                {
                    t: "t6",
                    q: String.raw`<div class="box"><p><strong>Módulo 1 · COU.</strong> Economía con dos ramas de mercado (Rama 1: agropecuaria; Rama 2: industria) y el Gobierno, que produce servicios no de mercado. Cifras en millones de $. Los casilleros con ? no se conocen.</p><table><tr><th></th><th>Rama 1</th><th>Rama 2</th><th>Gobierno</th><th>GCFH</th><th>GCFG</th><th>FBKF</th><th>VE</th><th>E</th><th>Total</th></tr><tr><td>Rama 1</td><td>2.000</td><td>9.000</td><td>500</td><td>6.000</td><td>0</td><td>0</td><td>1.500</td><td>5.000</td><td>?</td></tr><tr><td>Rama 2</td><td>3.000</td><td>4.000</td><td>1.500</td><td>14.000</td><td>0</td><td>3.500</td><td>500</td><td>6.500</td><td>?</td></tr><tr><td>Gobierno</td><td>0</td><td>0</td><td>0</td><td>0</td><td>?</td><td>0</td><td>0</td><td>0</td><td>?</td></tr><tr><td>Importaciones</td><td>1.500</td><td>3.000</td><td>1.000</td><td>4.200</td><td>0</td><td>2.500</td><td>0</td><td>0</td><td>?</td></tr><tr><td>RA</td><td>5.000</td><td>7.000</td><td>6.000</td><td colspan="6"></td></tr><tr><td>CKF</td><td>2.000</td><td>3.000</td><td>1.000</td><td colspan="6"></td></tr><tr><td>Imp−S</td><td>1.500</td><td>2.500</td><td>0</td><td colspan="6"></td></tr><tr><td>EEN</td><td>9.000</td><td>?</td><td>0</td><td colspan="6"></td></tr></table></div><p>El gasto de consumo final del gobierno fue:</p>`,
                    opts: [String.raw`$ 10.000`, String.raw`$ 6.000`, String.raw`$ 7.000`, String.raw`$ 3.000`],
                    ans: 0,
                    sol: String.raw`Producción del Gobierno por su columna: CI 3.000 + RA 6.000 + CKF 1.000 = 10.000. En la versión simplificada del Tomo 1, Producción<sub>G</sub> = GCFG = 10.000. (7.000 es su VAB, 6.000 su RA y 3.000 su CI.)`,
                },
                {
                    t: "t3",
                    q: String.raw`<div class="box"><p><strong>Módulo 1 · COU.</strong> Economía con dos ramas de mercado (Rama 1: agropecuaria; Rama 2: industria) y el Gobierno, que produce servicios no de mercado. Cifras en millones de $. Los casilleros con ? no se conocen.</p><table><tr><th></th><th>Rama 1</th><th>Rama 2</th><th>Gobierno</th><th>GCFH</th><th>GCFG</th><th>FBKF</th><th>VE</th><th>E</th><th>Total</th></tr><tr><td>Rama 1</td><td>2.000</td><td>9.000</td><td>500</td><td>6.000</td><td>0</td><td>0</td><td>1.500</td><td>5.000</td><td>?</td></tr><tr><td>Rama 2</td><td>3.000</td><td>4.000</td><td>1.500</td><td>14.000</td><td>0</td><td>3.500</td><td>500</td><td>6.500</td><td>?</td></tr><tr><td>Gobierno</td><td>0</td><td>0</td><td>0</td><td>0</td><td>?</td><td>0</td><td>0</td><td>0</td><td>?</td></tr><tr><td>Importaciones</td><td>1.500</td><td>3.000</td><td>1.000</td><td>4.200</td><td>0</td><td>2.500</td><td>0</td><td>0</td><td>?</td></tr><tr><td>RA</td><td>5.000</td><td>7.000</td><td>6.000</td><td colspan="6"></td></tr><tr><td>CKF</td><td>2.000</td><td>3.000</td><td>1.000</td><td colspan="6"></td></tr><tr><td>Imp−S</td><td>1.500</td><td>2.500</td><td>0</td><td colspan="6"></td></tr><tr><td>EEN</td><td>9.000</td><td>?</td><td>0</td><td colspan="6"></td></tr></table></div><p>El PIB fue:</p>`,
                    opts: [String.raw`$ 41.500`, String.raw`$ 39.500`, String.raw`$ 53.700`, String.raw`$ 67.000`],
                    ans: 0,
                    sol: String.raw`Producción: VAB R1 = 24.000 − 6.500 = 17.500; VAB R2 = 33.000 − 16.000 = 17.000; VAB Gob = 7.000; suma 41.500. Gasto: 24.200 + 10.000 + 6.000 + 2.000 + 11.500 − 12.200 = 41.500. Ingreso: RA 18.000 + CKF 6.000 + Imp − S 4.000 + EEN 13.500 = 41.500. (39.500 olvida la VE, 53.700 es la Demanda Final sin restar M, 67.000 es la Producción.)`,
                },
                {
                    t: "t2",
                    q: String.raw`<div class="box"><p><strong>Módulo 1 · COU.</strong> Economía con dos ramas de mercado (Rama 1: agropecuaria; Rama 2: industria) y el Gobierno, que produce servicios no de mercado. Cifras en millones de $. Los casilleros con ? no se conocen.</p><table><tr><th></th><th>Rama 1</th><th>Rama 2</th><th>Gobierno</th><th>GCFH</th><th>GCFG</th><th>FBKF</th><th>VE</th><th>E</th><th>Total</th></tr><tr><td>Rama 1</td><td>2.000</td><td>9.000</td><td>500</td><td>6.000</td><td>0</td><td>0</td><td>1.500</td><td>5.000</td><td>?</td></tr><tr><td>Rama 2</td><td>3.000</td><td>4.000</td><td>1.500</td><td>14.000</td><td>0</td><td>3.500</td><td>500</td><td>6.500</td><td>?</td></tr><tr><td>Gobierno</td><td>0</td><td>0</td><td>0</td><td>0</td><td>?</td><td>0</td><td>0</td><td>0</td><td>?</td></tr><tr><td>Importaciones</td><td>1.500</td><td>3.000</td><td>1.000</td><td>4.200</td><td>0</td><td>2.500</td><td>0</td><td>0</td><td>?</td></tr><tr><td>RA</td><td>5.000</td><td>7.000</td><td>6.000</td><td colspan="6"></td></tr><tr><td>CKF</td><td>2.000</td><td>3.000</td><td>1.000</td><td colspan="6"></td></tr><tr><td>Imp−S</td><td>1.500</td><td>2.500</td><td>0</td><td colspan="6"></td></tr><tr><td>EEN</td><td>9.000</td><td>?</td><td>0</td><td colspan="6"></td></tr></table></div><p>Los bienes producidos por la Rama 1 que quedaron en existencias sin utilizarse fueron:</p>`,
                    opts: [String.raw`$ 2.000`, String.raw`$ 500`, String.raw`$ 1.500`, String.raw`$ 5.000`],
                    ans: 2,
                    sol: String.raw`Es la VE de la fila Rama 1: 1.500. 2.000 es la VE total de la economía; 500 la de la Rama 2.`,
                },
                {
                    t: "t4",
                    q: String.raw`<div class="box"><p><strong>Módulo 1 · COU.</strong> Economía con dos ramas de mercado (Rama 1: agropecuaria; Rama 2: industria) y el Gobierno, que produce servicios no de mercado. Cifras en millones de $. Los casilleros con ? no se conocen.</p><table><tr><th></th><th>Rama 1</th><th>Rama 2</th><th>Gobierno</th><th>GCFH</th><th>GCFG</th><th>FBKF</th><th>VE</th><th>E</th><th>Total</th></tr><tr><td>Rama 1</td><td>2.000</td><td>9.000</td><td>500</td><td>6.000</td><td>0</td><td>0</td><td>1.500</td><td>5.000</td><td>?</td></tr><tr><td>Rama 2</td><td>3.000</td><td>4.000</td><td>1.500</td><td>14.000</td><td>0</td><td>3.500</td><td>500</td><td>6.500</td><td>?</td></tr><tr><td>Gobierno</td><td>0</td><td>0</td><td>0</td><td>0</td><td>?</td><td>0</td><td>0</td><td>0</td><td>?</td></tr><tr><td>Importaciones</td><td>1.500</td><td>3.000</td><td>1.000</td><td>4.200</td><td>0</td><td>2.500</td><td>0</td><td>0</td><td>?</td></tr><tr><td>RA</td><td>5.000</td><td>7.000</td><td>6.000</td><td colspan="6"></td></tr><tr><td>CKF</td><td>2.000</td><td>3.000</td><td>1.000</td><td colspan="6"></td></tr><tr><td>Imp−S</td><td>1.500</td><td>2.500</td><td>0</td><td colspan="6"></td></tr><tr><td>EEN</td><td>9.000</td><td>?</td><td>0</td><td colspan="6"></td></tr></table></div><p>El excedente de explotación neto de la Rama 2 fue:</p>`,
                    opts: [String.raw`$ 7.500`, String.raw`$ 4.500`, String.raw`$ 17.000`, String.raw`$ 2.000`],
                    ans: 1,
                    sol: String.raw`Producción R2 = 33.000 (fila). CI R2 = 9.000 + 4.000 + 0 + 3.000 = 16.000. VAB = 17.000. EEN = 17.000 − 7.000 − 3.000 − 2.500 = 4.500. (7.500 es el EEB = CKF + EEN.)`,
                },
                {
                    t: "t4",
                    q: String.raw`<div class="box"><p><strong>Módulo 1 · COU.</strong> Economía con dos ramas de mercado (Rama 1: agropecuaria; Rama 2: industria) y el Gobierno, que produce servicios no de mercado. Cifras en millones de $. Los casilleros con ? no se conocen.</p><table><tr><th></th><th>Rama 1</th><th>Rama 2</th><th>Gobierno</th><th>GCFH</th><th>GCFG</th><th>FBKF</th><th>VE</th><th>E</th><th>Total</th></tr><tr><td>Rama 1</td><td>2.000</td><td>9.000</td><td>500</td><td>6.000</td><td>0</td><td>0</td><td>1.500</td><td>5.000</td><td>?</td></tr><tr><td>Rama 2</td><td>3.000</td><td>4.000</td><td>1.500</td><td>14.000</td><td>0</td><td>3.500</td><td>500</td><td>6.500</td><td>?</td></tr><tr><td>Gobierno</td><td>0</td><td>0</td><td>0</td><td>0</td><td>?</td><td>0</td><td>0</td><td>0</td><td>?</td></tr><tr><td>Importaciones</td><td>1.500</td><td>3.000</td><td>1.000</td><td>4.200</td><td>0</td><td>2.500</td><td>0</td><td>0</td><td>?</td></tr><tr><td>RA</td><td>5.000</td><td>7.000</td><td>6.000</td><td colspan="6"></td></tr><tr><td>CKF</td><td>2.000</td><td>3.000</td><td>1.000</td><td colspan="6"></td></tr><tr><td>Imp−S</td><td>1.500</td><td>2.500</td><td>0</td><td colspan="6"></td></tr><tr><td>EEN</td><td>9.000</td><td>?</td><td>0</td><td colspan="6"></td></tr></table></div><p>Si en la Rama 2 los aportes personales fueron $ 800 y los patronales $ 1.200, los salarios nominales pagados por la Rama 2 fueron:</p>`,
                    opts: [String.raw`$ 5.000`, String.raw`$ 6.200`, String.raw`$ 7.000`, String.raw`$ 5.800`],
                    ans: 3,
                    sol: String.raw`RA = salarios nominales + aportes patronales. Salarios nominales = 7.000 − 1.200 = 5.800. (5.000 es el salario líquido, que también descuenta el aporte personal.)`,
                },
                {
                    t: "t3",
                    q: String.raw`<div class="box"><p><strong>Módulo 1 · COU.</strong> Economía con dos ramas de mercado (Rama 1: agropecuaria; Rama 2: industria) y el Gobierno, que produce servicios no de mercado. Cifras en millones de $. Los casilleros con ? no se conocen.</p><table><tr><th></th><th>Rama 1</th><th>Rama 2</th><th>Gobierno</th><th>GCFH</th><th>GCFG</th><th>FBKF</th><th>VE</th><th>E</th><th>Total</th></tr><tr><td>Rama 1</td><td>2.000</td><td>9.000</td><td>500</td><td>6.000</td><td>0</td><td>0</td><td>1.500</td><td>5.000</td><td>?</td></tr><tr><td>Rama 2</td><td>3.000</td><td>4.000</td><td>1.500</td><td>14.000</td><td>0</td><td>3.500</td><td>500</td><td>6.500</td><td>?</td></tr><tr><td>Gobierno</td><td>0</td><td>0</td><td>0</td><td>0</td><td>?</td><td>0</td><td>0</td><td>0</td><td>?</td></tr><tr><td>Importaciones</td><td>1.500</td><td>3.000</td><td>1.000</td><td>4.200</td><td>0</td><td>2.500</td><td>0</td><td>0</td><td>?</td></tr><tr><td>RA</td><td>5.000</td><td>7.000</td><td>6.000</td><td colspan="6"></td></tr><tr><td>CKF</td><td>2.000</td><td>3.000</td><td>1.000</td><td colspan="6"></td></tr><tr><td>Imp−S</td><td>1.500</td><td>2.500</td><td>0</td><td colspan="6"></td></tr><tr><td>EEN</td><td>9.000</td><td>?</td><td>0</td><td colspan="6"></td></tr></table></div><p>Para esta economía, el PIB es igual a:</p>`,
                    opts: [String.raw`GCF + FBKF + E − M`, String.raw`GCFH + FBK + E − M`, String.raw`Producción menos importaciones totales`, String.raw`Utilización final total menos importaciones totales`],
                    ans: 3,
                    sol: String.raw`Utilización final (Demanda Final) = 24.200 + 10.000 + 6.000 + 2.000 + 11.500 = 53.700; menos M 12.200 = 41.500. La primera olvida la VE (daría 39.500), la segunda el GCFG (31.500) y la tercera resta M a la Producción (54.800) en vez de restar el CI.`,
                },
                {
                    t: "t5",
                    q: String.raw`<div class="box"><p><strong>Módulo 2 · Cuentas corrientes por sector.</strong> Misma economía del Módulo 1 (PIB, GCFH, GCFG y FBK son los del COU). Cifras en millones de $; — = no corresponde.</p><table><tr><th>Transacción</th><th>Sociedades</th><th>Gobierno</th><th>Hogares</th><th>Resto del Mundo</th></tr><tr><td>EEB</td><td>18.500</td><td>1.000</td><td>—</td><td>—</td></tr><tr><td>RA pagada por productores residentes (total 18.000): pagada a no residentes</td><td>—</td><td>—</td><td>—</td><td>300</td></tr><tr><td>RA cobrada al exterior por hogares residentes</td><td>—</td><td>—</td><td>500</td><td>—</td></tr><tr><td>Impuestos menos subsidios sobre la producción (total)</td><td>—</td><td>4.000</td><td>—</td><td>—</td></tr><tr><td>Rentas de la propiedad pagadas</td><td>7.000</td><td>1.200</td><td>400</td><td>600</td></tr><tr><td>Rentas de la propiedad cobradas</td><td>800</td><td>200</td><td>5.600</td><td>?</td></tr><tr><td>Contribuciones sociales pagadas por los hogares</td><td>—</td><td>—</td><td>3.000</td><td>—</td></tr><tr><td>Prestaciones sociales pagadas por el gobierno</td><td>—</td><td>4.500</td><td>—</td><td>—</td></tr><tr><td>Remesas: recibidas por hogares desde el exterior / enviadas al exterior</td><td>—</td><td>—</td><td>700 / 200</td><td>—</td></tr><tr><td>Donación de vacunas del RM al Gobierno</td><td>—</td><td>300</td><td>—</td><td>—</td></tr><tr><td>Ayuda de emergencia (alimentos) enviada por el Gobierno al exterior</td><td>—</td><td>100</td><td>—</td><td>—</td></tr><tr><td>Donación del RM al Gobierno de ambulancias</td><td>—</td><td>400</td><td>—</td><td>—</td></tr><tr><td>Gasto de consumo final</td><td>—</td><td>10.000</td><td>24.200</td><td>—</td></tr><tr><td>FBK (FBKF + VE)</td><td>7.000 (5.000 + 2.000)</td><td>1.000 (FBKF, incluye las ambulancias)</td><td>—</td><td>—</td></tr></table></div><p>Las rentas de la propiedad recibidas por el Resto del Mundo fueron:</p>`,
                    opts: [String.raw`$ 600`, String.raw`$ 2.600`, String.raw`$ 9.200`, String.raw`$ 2.000`],
                    ans: 1,
                    sol: String.raw`En la columna Total, las rentas cobradas igualan a las pagadas. Pagadas: 7.000 + 1.200 + 400 + 600 = 9.200. Cobradas por residentes: 800 + 200 + 5.600 = 6.600. Lo que falta lo cobró el RM: 9.200 − 6.600 = 2.600.`,
                },
                {
                    t: "t3",
                    q: String.raw`<div class="box"><p><strong>Módulo 2 · Cuentas corrientes por sector.</strong> Misma economía del Módulo 1 (PIB, GCFH, GCFG y FBK son los del COU). Cifras en millones de $; — = no corresponde.</p><table><tr><th>Transacción</th><th>Sociedades</th><th>Gobierno</th><th>Hogares</th><th>Resto del Mundo</th></tr><tr><td>EEB</td><td>18.500</td><td>1.000</td><td>—</td><td>—</td></tr><tr><td>RA pagada por productores residentes (total 18.000): pagada a no residentes</td><td>—</td><td>—</td><td>—</td><td>300</td></tr><tr><td>RA cobrada al exterior por hogares residentes</td><td>—</td><td>—</td><td>500</td><td>—</td></tr><tr><td>Impuestos menos subsidios sobre la producción (total)</td><td>—</td><td>4.000</td><td>—</td><td>—</td></tr><tr><td>Rentas de la propiedad pagadas</td><td>7.000</td><td>1.200</td><td>400</td><td>600</td></tr><tr><td>Rentas de la propiedad cobradas</td><td>800</td><td>200</td><td>5.600</td><td>?</td></tr><tr><td>Contribuciones sociales pagadas por los hogares</td><td>—</td><td>—</td><td>3.000</td><td>—</td></tr><tr><td>Prestaciones sociales pagadas por el gobierno</td><td>—</td><td>4.500</td><td>—</td><td>—</td></tr><tr><td>Remesas: recibidas por hogares desde el exterior / enviadas al exterior</td><td>—</td><td>—</td><td>700 / 200</td><td>—</td></tr><tr><td>Donación de vacunas del RM al Gobierno</td><td>—</td><td>300</td><td>—</td><td>—</td></tr><tr><td>Ayuda de emergencia (alimentos) enviada por el Gobierno al exterior</td><td>—</td><td>100</td><td>—</td><td>—</td></tr><tr><td>Donación del RM al Gobierno de ambulancias</td><td>—</td><td>400</td><td>—</td><td>—</td></tr><tr><td>Gasto de consumo final</td><td>—</td><td>10.000</td><td>24.200</td><td>—</td></tr><tr><td>FBK (FBKF + VE)</td><td>7.000 (5.000 + 2.000)</td><td>1.000 (FBKF, incluye las ambulancias)</td><td>—</td><td>—</td></tr></table></div><p>La remuneración neta de factores del exterior (RX) fue:</p>`,
                    opts: [String.raw`$ −2.000`, String.raw`$ −2.200`, String.raw`$ −1.800`, String.raw`$ 1.800`],
                    ans: 2,
                    sol: String.raw`RX = (RPXc − RPXp) + (RAXc − RAXp) = (600 − 2.600) + (500 − 300) = −2.000 + 200 = −1.800.`,
                },
                {
                    t: "t3",
                    q: String.raw`<div class="box"><p><strong>Módulo 2 · Cuentas corrientes por sector.</strong> Misma economía del Módulo 1 (PIB, GCFH, GCFG y FBK son los del COU). Cifras en millones de $; — = no corresponde.</p><table><tr><th>Transacción</th><th>Sociedades</th><th>Gobierno</th><th>Hogares</th><th>Resto del Mundo</th></tr><tr><td>EEB</td><td>18.500</td><td>1.000</td><td>—</td><td>—</td></tr><tr><td>RA pagada por productores residentes (total 18.000): pagada a no residentes</td><td>—</td><td>—</td><td>—</td><td>300</td></tr><tr><td>RA cobrada al exterior por hogares residentes</td><td>—</td><td>—</td><td>500</td><td>—</td></tr><tr><td>Impuestos menos subsidios sobre la producción (total)</td><td>—</td><td>4.000</td><td>—</td><td>—</td></tr><tr><td>Rentas de la propiedad pagadas</td><td>7.000</td><td>1.200</td><td>400</td><td>600</td></tr><tr><td>Rentas de la propiedad cobradas</td><td>800</td><td>200</td><td>5.600</td><td>?</td></tr><tr><td>Contribuciones sociales pagadas por los hogares</td><td>—</td><td>—</td><td>3.000</td><td>—</td></tr><tr><td>Prestaciones sociales pagadas por el gobierno</td><td>—</td><td>4.500</td><td>—</td><td>—</td></tr><tr><td>Remesas: recibidas por hogares desde el exterior / enviadas al exterior</td><td>—</td><td>—</td><td>700 / 200</td><td>—</td></tr><tr><td>Donación de vacunas del RM al Gobierno</td><td>—</td><td>300</td><td>—</td><td>—</td></tr><tr><td>Ayuda de emergencia (alimentos) enviada por el Gobierno al exterior</td><td>—</td><td>100</td><td>—</td><td>—</td></tr><tr><td>Donación del RM al Gobierno de ambulancias</td><td>—</td><td>400</td><td>—</td><td>—</td></tr><tr><td>Gasto de consumo final</td><td>—</td><td>10.000</td><td>24.200</td><td>—</td></tr><tr><td>FBK (FBKF + VE)</td><td>7.000 (5.000 + 2.000)</td><td>1.000 (FBKF, incluye las ambulancias)</td><td>—</td><td>—</td></tr></table></div><p>El ingreso nacional bruto (INB) fue:</p>`,
                    opts: [String.raw`$ 39.700`, String.raw`$ 43.300`, String.raw`$ 40.400`, String.raw`$ 41.500`],
                    ans: 0,
                    sol: String.raw`INB = VAB + RX = 41.500 − 1.800 = 39.700. (40.400 es el INDB; 43.300 suma la RX con signo cambiado.)`,
                },
                {
                    t: "t5",
                    q: String.raw`<div class="box"><p><strong>Módulo 2 · Cuentas corrientes por sector.</strong> Misma economía del Módulo 1 (PIB, GCFH, GCFG y FBK son los del COU). Cifras en millones de $; — = no corresponde.</p><table><tr><th>Transacción</th><th>Sociedades</th><th>Gobierno</th><th>Hogares</th><th>Resto del Mundo</th></tr><tr><td>EEB</td><td>18.500</td><td>1.000</td><td>—</td><td>—</td></tr><tr><td>RA pagada por productores residentes (total 18.000): pagada a no residentes</td><td>—</td><td>—</td><td>—</td><td>300</td></tr><tr><td>RA cobrada al exterior por hogares residentes</td><td>—</td><td>—</td><td>500</td><td>—</td></tr><tr><td>Impuestos menos subsidios sobre la producción (total)</td><td>—</td><td>4.000</td><td>—</td><td>—</td></tr><tr><td>Rentas de la propiedad pagadas</td><td>7.000</td><td>1.200</td><td>400</td><td>600</td></tr><tr><td>Rentas de la propiedad cobradas</td><td>800</td><td>200</td><td>5.600</td><td>?</td></tr><tr><td>Contribuciones sociales pagadas por los hogares</td><td>—</td><td>—</td><td>3.000</td><td>—</td></tr><tr><td>Prestaciones sociales pagadas por el gobierno</td><td>—</td><td>4.500</td><td>—</td><td>—</td></tr><tr><td>Remesas: recibidas por hogares desde el exterior / enviadas al exterior</td><td>—</td><td>—</td><td>700 / 200</td><td>—</td></tr><tr><td>Donación de vacunas del RM al Gobierno</td><td>—</td><td>300</td><td>—</td><td>—</td></tr><tr><td>Ayuda de emergencia (alimentos) enviada por el Gobierno al exterior</td><td>—</td><td>100</td><td>—</td><td>—</td></tr><tr><td>Donación del RM al Gobierno de ambulancias</td><td>—</td><td>400</td><td>—</td><td>—</td></tr><tr><td>Gasto de consumo final</td><td>—</td><td>10.000</td><td>24.200</td><td>—</td></tr><tr><td>FBK (FBKF + VE)</td><td>7.000 (5.000 + 2.000)</td><td>1.000 (FBKF, incluye las ambulancias)</td><td>—</td><td>—</td></tr></table></div><p>El saldo de ingresos primarios de los hogares fue:</p>`,
                    opts: [String.raw`$ 23.200`, String.raw`$ 23.800`, String.raw`$ 17.800`, String.raw`$ 23.400`],
                    ans: 3,
                    sol: String.raw`En la versión simplificada los hogares no producen: su ingreso primario es RA + rentas cobradas − rentas pagadas. RA recibida por hogares = 18.000 − 300 + 500 = 18.200. Ingreso primario = 18.200 + 5.600 − 400 = 23.400. (23.200 usa la RA del COU sin ajustar por el exterior; 23.800 olvida las rentas pagadas; 17.800 olvida las rentas cobradas.)`,
                },
                {
                    t: "t5",
                    q: String.raw`<div class="box"><p><strong>Módulo 2 · Cuentas corrientes por sector.</strong> Misma economía del Módulo 1 (PIB, GCFH, GCFG y FBK son los del COU). Cifras en millones de $; — = no corresponde.</p><table><tr><th>Transacción</th><th>Sociedades</th><th>Gobierno</th><th>Hogares</th><th>Resto del Mundo</th></tr><tr><td>EEB</td><td>18.500</td><td>1.000</td><td>—</td><td>—</td></tr><tr><td>RA pagada por productores residentes (total 18.000): pagada a no residentes</td><td>—</td><td>—</td><td>—</td><td>300</td></tr><tr><td>RA cobrada al exterior por hogares residentes</td><td>—</td><td>—</td><td>500</td><td>—</td></tr><tr><td>Impuestos menos subsidios sobre la producción (total)</td><td>—</td><td>4.000</td><td>—</td><td>—</td></tr><tr><td>Rentas de la propiedad pagadas</td><td>7.000</td><td>1.200</td><td>400</td><td>600</td></tr><tr><td>Rentas de la propiedad cobradas</td><td>800</td><td>200</td><td>5.600</td><td>?</td></tr><tr><td>Contribuciones sociales pagadas por los hogares</td><td>—</td><td>—</td><td>3.000</td><td>—</td></tr><tr><td>Prestaciones sociales pagadas por el gobierno</td><td>—</td><td>4.500</td><td>—</td><td>—</td></tr><tr><td>Remesas: recibidas por hogares desde el exterior / enviadas al exterior</td><td>—</td><td>—</td><td>700 / 200</td><td>—</td></tr><tr><td>Donación de vacunas del RM al Gobierno</td><td>—</td><td>300</td><td>—</td><td>—</td></tr><tr><td>Ayuda de emergencia (alimentos) enviada por el Gobierno al exterior</td><td>—</td><td>100</td><td>—</td><td>—</td></tr><tr><td>Donación del RM al Gobierno de ambulancias</td><td>—</td><td>400</td><td>—</td><td>—</td></tr><tr><td>Gasto de consumo final</td><td>—</td><td>10.000</td><td>24.200</td><td>—</td></tr><tr><td>FBK (FBKF + VE)</td><td>7.000 (5.000 + 2.000)</td><td>1.000 (FBKF, incluye las ambulancias)</td><td>—</td><td>—</td></tr></table></div><p>El saldo de ingresos primarios del gobierno fue:</p>`,
                    opts: [String.raw`$ 3.000`, String.raw`$ 5.200`, String.raw`$ 7.000`, String.raw`$ 4.000`],
                    ans: 3,
                    sol: String.raw`EEB 1.000 (= CKF) + Imp − S 4.000 + rentas cobradas 200 − rentas pagadas 1.200 = 4.000. (3.000 olvida el EEB; 5.200 olvida los intereses pagados; 7.000 suma las contribuciones sociales, que son distribución secundaria.)`,
                },
                {
                    t: "t3",
                    q: String.raw`<div class="box"><p><strong>Módulo 2 · Cuentas corrientes por sector.</strong> Misma economía del Módulo 1 (PIB, GCFH, GCFG y FBK son los del COU). Cifras en millones de $; — = no corresponde.</p><table><tr><th>Transacción</th><th>Sociedades</th><th>Gobierno</th><th>Hogares</th><th>Resto del Mundo</th></tr><tr><td>EEB</td><td>18.500</td><td>1.000</td><td>—</td><td>—</td></tr><tr><td>RA pagada por productores residentes (total 18.000): pagada a no residentes</td><td>—</td><td>—</td><td>—</td><td>300</td></tr><tr><td>RA cobrada al exterior por hogares residentes</td><td>—</td><td>—</td><td>500</td><td>—</td></tr><tr><td>Impuestos menos subsidios sobre la producción (total)</td><td>—</td><td>4.000</td><td>—</td><td>—</td></tr><tr><td>Rentas de la propiedad pagadas</td><td>7.000</td><td>1.200</td><td>400</td><td>600</td></tr><tr><td>Rentas de la propiedad cobradas</td><td>800</td><td>200</td><td>5.600</td><td>?</td></tr><tr><td>Contribuciones sociales pagadas por los hogares</td><td>—</td><td>—</td><td>3.000</td><td>—</td></tr><tr><td>Prestaciones sociales pagadas por el gobierno</td><td>—</td><td>4.500</td><td>—</td><td>—</td></tr><tr><td>Remesas: recibidas por hogares desde el exterior / enviadas al exterior</td><td>—</td><td>—</td><td>700 / 200</td><td>—</td></tr><tr><td>Donación de vacunas del RM al Gobierno</td><td>—</td><td>300</td><td>—</td><td>—</td></tr><tr><td>Ayuda de emergencia (alimentos) enviada por el Gobierno al exterior</td><td>—</td><td>100</td><td>—</td><td>—</td></tr><tr><td>Donación del RM al Gobierno de ambulancias</td><td>—</td><td>400</td><td>—</td><td>—</td></tr><tr><td>Gasto de consumo final</td><td>—</td><td>10.000</td><td>24.200</td><td>—</td></tr><tr><td>FBK (FBKF + VE)</td><td>7.000 (5.000 + 2.000)</td><td>1.000 (FBKF, incluye las ambulancias)</td><td>—</td><td>—</td></tr></table></div><p>Las transferencias netas corrientes con el exterior (TRNC) fueron:</p>`,
                    opts: [String.raw`$ 700`, String.raw`$ 1.100`, String.raw`$ 1.000`, String.raw`$ 400`],
                    ans: 0,
                    sol: String.raw`Recibidas del RM: remesas 700 + vacunas 300 = 1.000. Enviadas al RM: remesas 200 + ayuda de emergencia 100 = 300. TRNC = 700. La donación de ambulancias (400) es transferencia de capital: si la sumás da 1.100.`,
                },
                {
                    t: "t5",
                    q: String.raw`<div class="box"><p><strong>Módulo 2 · Cuentas corrientes por sector.</strong> Misma economía del Módulo 1 (PIB, GCFH, GCFG y FBK son los del COU). Cifras en millones de $; — = no corresponde.</p><table><tr><th>Transacción</th><th>Sociedades</th><th>Gobierno</th><th>Hogares</th><th>Resto del Mundo</th></tr><tr><td>EEB</td><td>18.500</td><td>1.000</td><td>—</td><td>—</td></tr><tr><td>RA pagada por productores residentes (total 18.000): pagada a no residentes</td><td>—</td><td>—</td><td>—</td><td>300</td></tr><tr><td>RA cobrada al exterior por hogares residentes</td><td>—</td><td>—</td><td>500</td><td>—</td></tr><tr><td>Impuestos menos subsidios sobre la producción (total)</td><td>—</td><td>4.000</td><td>—</td><td>—</td></tr><tr><td>Rentas de la propiedad pagadas</td><td>7.000</td><td>1.200</td><td>400</td><td>600</td></tr><tr><td>Rentas de la propiedad cobradas</td><td>800</td><td>200</td><td>5.600</td><td>?</td></tr><tr><td>Contribuciones sociales pagadas por los hogares</td><td>—</td><td>—</td><td>3.000</td><td>—</td></tr><tr><td>Prestaciones sociales pagadas por el gobierno</td><td>—</td><td>4.500</td><td>—</td><td>—</td></tr><tr><td>Remesas: recibidas por hogares desde el exterior / enviadas al exterior</td><td>—</td><td>—</td><td>700 / 200</td><td>—</td></tr><tr><td>Donación de vacunas del RM al Gobierno</td><td>—</td><td>300</td><td>—</td><td>—</td></tr><tr><td>Ayuda de emergencia (alimentos) enviada por el Gobierno al exterior</td><td>—</td><td>100</td><td>—</td><td>—</td></tr><tr><td>Donación del RM al Gobierno de ambulancias</td><td>—</td><td>400</td><td>—</td><td>—</td></tr><tr><td>Gasto de consumo final</td><td>—</td><td>10.000</td><td>24.200</td><td>—</td></tr><tr><td>FBK (FBKF + VE)</td><td>7.000 (5.000 + 2.000)</td><td>1.000 (FBKF, incluye las ambulancias)</td><td>—</td><td>—</td></tr></table></div><p>El ingreso disponible bruto del gobierno fue:</p>`,
                    opts: [String.raw`$ 3.100`, String.raw`$ 7.200`, String.raw`$ 2.700`, String.raw`$ −300`],
                    ans: 2,
                    sol: String.raw`IDB = ingreso primario 4.000 + contribuciones 3.000 − prestaciones 4.500 + vacunas 300 − ayuda de emergencia 100 = 2.700. (3.100 mete las ambulancias; 7.200 no resta las prestaciones; −300 olvida las contribuciones.)`,
                },
                {
                    t: "t5",
                    q: String.raw`<div class="box"><p><strong>Módulo 2 · Cuentas corrientes por sector.</strong> Misma economía del Módulo 1 (PIB, GCFH, GCFG y FBK son los del COU). Cifras en millones de $; — = no corresponde.</p><table><tr><th>Transacción</th><th>Sociedades</th><th>Gobierno</th><th>Hogares</th><th>Resto del Mundo</th></tr><tr><td>EEB</td><td>18.500</td><td>1.000</td><td>—</td><td>—</td></tr><tr><td>RA pagada por productores residentes (total 18.000): pagada a no residentes</td><td>—</td><td>—</td><td>—</td><td>300</td></tr><tr><td>RA cobrada al exterior por hogares residentes</td><td>—</td><td>—</td><td>500</td><td>—</td></tr><tr><td>Impuestos menos subsidios sobre la producción (total)</td><td>—</td><td>4.000</td><td>—</td><td>—</td></tr><tr><td>Rentas de la propiedad pagadas</td><td>7.000</td><td>1.200</td><td>400</td><td>600</td></tr><tr><td>Rentas de la propiedad cobradas</td><td>800</td><td>200</td><td>5.600</td><td>?</td></tr><tr><td>Contribuciones sociales pagadas por los hogares</td><td>—</td><td>—</td><td>3.000</td><td>—</td></tr><tr><td>Prestaciones sociales pagadas por el gobierno</td><td>—</td><td>4.500</td><td>—</td><td>—</td></tr><tr><td>Remesas: recibidas por hogares desde el exterior / enviadas al exterior</td><td>—</td><td>—</td><td>700 / 200</td><td>—</td></tr><tr><td>Donación de vacunas del RM al Gobierno</td><td>—</td><td>300</td><td>—</td><td>—</td></tr><tr><td>Ayuda de emergencia (alimentos) enviada por el Gobierno al exterior</td><td>—</td><td>100</td><td>—</td><td>—</td></tr><tr><td>Donación del RM al Gobierno de ambulancias</td><td>—</td><td>400</td><td>—</td><td>—</td></tr><tr><td>Gasto de consumo final</td><td>—</td><td>10.000</td><td>24.200</td><td>—</td></tr><tr><td>FBK (FBKF + VE)</td><td>7.000 (5.000 + 2.000)</td><td>1.000 (FBKF, incluye las ambulancias)</td><td>—</td><td>—</td></tr></table></div><p>El ingreso disponible bruto de los hogares fue:</p>`,
                    opts: [String.raw`$ 28.400`, String.raw`$ 23.400`, String.raw`$ 25.400`, String.raw`$ 16.400`],
                    ans: 2,
                    sol: String.raw`23.400 − 3.000 (contribuciones) + 4.500 (prestaciones) + 700 − 200 (remesas) = 25.400. (28.400 no resta las contribuciones; 23.400 es el ingreso primario; 16.400 resta las prestaciones en vez de sumarlas.)`,
                },
                {
                    t: "t6",
                    q: String.raw`<div class="box"><p><strong>Módulo 2 · Cuentas corrientes por sector.</strong> Misma economía del Módulo 1 (PIB, GCFH, GCFG y FBK son los del COU). Cifras en millones de $; — = no corresponde.</p><table><tr><th>Transacción</th><th>Sociedades</th><th>Gobierno</th><th>Hogares</th><th>Resto del Mundo</th></tr><tr><td>EEB</td><td>18.500</td><td>1.000</td><td>—</td><td>—</td></tr><tr><td>RA pagada por productores residentes (total 18.000): pagada a no residentes</td><td>—</td><td>—</td><td>—</td><td>300</td></tr><tr><td>RA cobrada al exterior por hogares residentes</td><td>—</td><td>—</td><td>500</td><td>—</td></tr><tr><td>Impuestos menos subsidios sobre la producción (total)</td><td>—</td><td>4.000</td><td>—</td><td>—</td></tr><tr><td>Rentas de la propiedad pagadas</td><td>7.000</td><td>1.200</td><td>400</td><td>600</td></tr><tr><td>Rentas de la propiedad cobradas</td><td>800</td><td>200</td><td>5.600</td><td>?</td></tr><tr><td>Contribuciones sociales pagadas por los hogares</td><td>—</td><td>—</td><td>3.000</td><td>—</td></tr><tr><td>Prestaciones sociales pagadas por el gobierno</td><td>—</td><td>4.500</td><td>—</td><td>—</td></tr><tr><td>Remesas: recibidas por hogares desde el exterior / enviadas al exterior</td><td>—</td><td>—</td><td>700 / 200</td><td>—</td></tr><tr><td>Donación de vacunas del RM al Gobierno</td><td>—</td><td>300</td><td>—</td><td>—</td></tr><tr><td>Ayuda de emergencia (alimentos) enviada por el Gobierno al exterior</td><td>—</td><td>100</td><td>—</td><td>—</td></tr><tr><td>Donación del RM al Gobierno de ambulancias</td><td>—</td><td>400</td><td>—</td><td>—</td></tr><tr><td>Gasto de consumo final</td><td>—</td><td>10.000</td><td>24.200</td><td>—</td></tr><tr><td>FBK (FBKF + VE)</td><td>7.000 (5.000 + 2.000)</td><td>1.000 (FBKF, incluye las ambulancias)</td><td>—</td><td>—</td></tr></table></div><p>El ahorro bruto de las sociedades fue:</p>`,
                    opts: [String.raw`$ 12.300`, String.raw`$ 19.300`, String.raw`$ 5.300`, String.raw`$ 18.500`],
                    ans: 0,
                    sol: String.raw`Ingreso primario = 18.500 + 800 − 7.000 = 12.300; sin transferencias corrientes, IDB = 12.300. Las sociedades no tienen consumo final: AB = IDB = 12.300. (19.300 olvida las rentas pagadas; 5.300 es su préstamo neto; 18.500 es su EEB.)`,
                },
                {
                    t: "t6",
                    q: String.raw`<div class="box"><p><strong>Módulo 2 · Cuentas corrientes por sector.</strong> Misma economía del Módulo 1 (PIB, GCFH, GCFG y FBK son los del COU). Cifras en millones de $; — = no corresponde.</p><table><tr><th>Transacción</th><th>Sociedades</th><th>Gobierno</th><th>Hogares</th><th>Resto del Mundo</th></tr><tr><td>EEB</td><td>18.500</td><td>1.000</td><td>—</td><td>—</td></tr><tr><td>RA pagada por productores residentes (total 18.000): pagada a no residentes</td><td>—</td><td>—</td><td>—</td><td>300</td></tr><tr><td>RA cobrada al exterior por hogares residentes</td><td>—</td><td>—</td><td>500</td><td>—</td></tr><tr><td>Impuestos menos subsidios sobre la producción (total)</td><td>—</td><td>4.000</td><td>—</td><td>—</td></tr><tr><td>Rentas de la propiedad pagadas</td><td>7.000</td><td>1.200</td><td>400</td><td>600</td></tr><tr><td>Rentas de la propiedad cobradas</td><td>800</td><td>200</td><td>5.600</td><td>?</td></tr><tr><td>Contribuciones sociales pagadas por los hogares</td><td>—</td><td>—</td><td>3.000</td><td>—</td></tr><tr><td>Prestaciones sociales pagadas por el gobierno</td><td>—</td><td>4.500</td><td>—</td><td>—</td></tr><tr><td>Remesas: recibidas por hogares desde el exterior / enviadas al exterior</td><td>—</td><td>—</td><td>700 / 200</td><td>—</td></tr><tr><td>Donación de vacunas del RM al Gobierno</td><td>—</td><td>300</td><td>—</td><td>—</td></tr><tr><td>Ayuda de emergencia (alimentos) enviada por el Gobierno al exterior</td><td>—</td><td>100</td><td>—</td><td>—</td></tr><tr><td>Donación del RM al Gobierno de ambulancias</td><td>—</td><td>400</td><td>—</td><td>—</td></tr><tr><td>Gasto de consumo final</td><td>—</td><td>10.000</td><td>24.200</td><td>—</td></tr><tr><td>FBK (FBKF + VE)</td><td>7.000 (5.000 + 2.000)</td><td>1.000 (FBKF, incluye las ambulancias)</td><td>—</td><td>—</td></tr></table></div><p>El ahorro bruto del gobierno fue:</p>`,
                    opts: [String.raw`$ 2.700`, String.raw`$ −6.900`, String.raw`$ −7.900`, String.raw`$ −7.300`],
                    ans: 3,
                    sol: String.raw`AB = IDB − GCFG = 2.700 − 10.000 = −7.300. (2.700 es su IDB; −6.900 suma las ambulancias; −7.900 es su préstamo neto.)`,
                },
                {
                    t: "t6",
                    q: String.raw`<div class="box"><p><strong>Módulo 2 · Cuentas corrientes por sector.</strong> Misma economía del Módulo 1 (PIB, GCFH, GCFG y FBK son los del COU). Cifras en millones de $; — = no corresponde.</p><table><tr><th>Transacción</th><th>Sociedades</th><th>Gobierno</th><th>Hogares</th><th>Resto del Mundo</th></tr><tr><td>EEB</td><td>18.500</td><td>1.000</td><td>—</td><td>—</td></tr><tr><td>RA pagada por productores residentes (total 18.000): pagada a no residentes</td><td>—</td><td>—</td><td>—</td><td>300</td></tr><tr><td>RA cobrada al exterior por hogares residentes</td><td>—</td><td>—</td><td>500</td><td>—</td></tr><tr><td>Impuestos menos subsidios sobre la producción (total)</td><td>—</td><td>4.000</td><td>—</td><td>—</td></tr><tr><td>Rentas de la propiedad pagadas</td><td>7.000</td><td>1.200</td><td>400</td><td>600</td></tr><tr><td>Rentas de la propiedad cobradas</td><td>800</td><td>200</td><td>5.600</td><td>?</td></tr><tr><td>Contribuciones sociales pagadas por los hogares</td><td>—</td><td>—</td><td>3.000</td><td>—</td></tr><tr><td>Prestaciones sociales pagadas por el gobierno</td><td>—</td><td>4.500</td><td>—</td><td>—</td></tr><tr><td>Remesas: recibidas por hogares desde el exterior / enviadas al exterior</td><td>—</td><td>—</td><td>700 / 200</td><td>—</td></tr><tr><td>Donación de vacunas del RM al Gobierno</td><td>—</td><td>300</td><td>—</td><td>—</td></tr><tr><td>Ayuda de emergencia (alimentos) enviada por el Gobierno al exterior</td><td>—</td><td>100</td><td>—</td><td>—</td></tr><tr><td>Donación del RM al Gobierno de ambulancias</td><td>—</td><td>400</td><td>—</td><td>—</td></tr><tr><td>Gasto de consumo final</td><td>—</td><td>10.000</td><td>24.200</td><td>—</td></tr><tr><td>FBK (FBKF + VE)</td><td>7.000 (5.000 + 2.000)</td><td>1.000 (FBKF, incluye las ambulancias)</td><td>—</td><td>—</td></tr></table></div><p>El ahorro nacional bruto fue:</p>`,
                    opts: [String.raw`$ 8.000`, String.raw`$ 6.200`, String.raw`$ 6.600`, String.raw`$ 7.300`],
                    ans: 1,
                    sol: String.raw`INDB = 39.700 + 700 = 40.400. ANB = 40.400 − (24.200 + 10.000) = 6.200. Por sectores: 12.300 − 7.300 + 1.200 (hogares: 25.400 − 24.200) = 6.200.`,
                },
                {
                    t: "t3",
                    q: String.raw`<div class="box"><p><strong>Módulo 2 · Cuentas corrientes por sector.</strong> Misma economía del Módulo 1 (PIB, GCFH, GCFG y FBK son los del COU). Cifras en millones de $; — = no corresponde.</p><table><tr><th>Transacción</th><th>Sociedades</th><th>Gobierno</th><th>Hogares</th><th>Resto del Mundo</th></tr><tr><td>EEB</td><td>18.500</td><td>1.000</td><td>—</td><td>—</td></tr><tr><td>RA pagada por productores residentes (total 18.000): pagada a no residentes</td><td>—</td><td>—</td><td>—</td><td>300</td></tr><tr><td>RA cobrada al exterior por hogares residentes</td><td>—</td><td>—</td><td>500</td><td>—</td></tr><tr><td>Impuestos menos subsidios sobre la producción (total)</td><td>—</td><td>4.000</td><td>—</td><td>—</td></tr><tr><td>Rentas de la propiedad pagadas</td><td>7.000</td><td>1.200</td><td>400</td><td>600</td></tr><tr><td>Rentas de la propiedad cobradas</td><td>800</td><td>200</td><td>5.600</td><td>?</td></tr><tr><td>Contribuciones sociales pagadas por los hogares</td><td>—</td><td>—</td><td>3.000</td><td>—</td></tr><tr><td>Prestaciones sociales pagadas por el gobierno</td><td>—</td><td>4.500</td><td>—</td><td>—</td></tr><tr><td>Remesas: recibidas por hogares desde el exterior / enviadas al exterior</td><td>—</td><td>—</td><td>700 / 200</td><td>—</td></tr><tr><td>Donación de vacunas del RM al Gobierno</td><td>—</td><td>300</td><td>—</td><td>—</td></tr><tr><td>Ayuda de emergencia (alimentos) enviada por el Gobierno al exterior</td><td>—</td><td>100</td><td>—</td><td>—</td></tr><tr><td>Donación del RM al Gobierno de ambulancias</td><td>—</td><td>400</td><td>—</td><td>—</td></tr><tr><td>Gasto de consumo final</td><td>—</td><td>10.000</td><td>24.200</td><td>—</td></tr><tr><td>FBK (FBKF + VE)</td><td>7.000 (5.000 + 2.000)</td><td>1.000 (FBKF, incluye las ambulancias)</td><td>—</td><td>—</td></tr></table></div><p>El saldo corriente con el exterior (SCE), registrado desde la óptica del Resto del Mundo como en las cuentas del Tomo 1, fue:</p>`,
                    opts: [String.raw`$ −1.800`, String.raw`$ −1.400`, String.raw`$ 700`, String.raw`$ 1.800`],
                    ans: 3,
                    sol: String.raw`SBP = ANB − FBK = 6.200 − 8.000 = −1.800 = E − M + RX + TRNC = (11.500 − 12.200) − 1.800 + 700. El SCE es el SBP con signo contrario: 1.800. (−1.800 es el SBP; −1.400 es el préstamo neto de la economía; 700 es el saldo de bienes y servicios con el exterior, M − E.)`,
                },
                {
                    t: "t7",
                    q: String.raw`<div class="box"><p><strong>Módulo 3 · Cuenta financiera.</strong> Misma economía de los módulos 1 y 2. Cifras en millones de $.</p><table><tr><th rowspan="2">Instrumento</th><th colspan="2">Sociedades</th><th colspan="2">Gobierno</th><th colspan="2">Hogares</th><th colspan="2">Resto del Mundo</th></tr><tr><th>ANA</th><th>ENP</th><th>ANA</th><th>ENP</th><th>ANA</th><th>ENP</th><th>ANA</th><th>ENP</th></tr><tr><td>Dinero legal y depósitos</td><td>500</td><td>1.500</td><td>200</td><td>0</td><td>1.200</td><td>0</td><td>0</td><td>400</td></tr><tr><td>Valores distintos de acciones</td><td>6.300</td><td>200</td><td>0</td><td>?</td><td>300</td><td>0</td><td>1.200</td><td>300</td></tr><tr><td>Préstamos y crédito comercial</td><td>1.300</td><td>500</td><td>0</td><td>800</td><td>0</td><td>700</td><td>?</td><td>200</td></tr><tr><td>Acciones y participaciones de capital</td><td>200</td><td>800</td><td>0</td><td>0</td><td>400</td><td>0</td><td>400</td><td>200</td></tr></table><p>ANA: adquisición neta de activos financieros. ENP: emisión neta de pasivos.</p></div><p>El préstamo neto (PRN) del gobierno fue:</p>`,
                    opts: [String.raw`$ −8.300`, String.raw`$ −5.900`, String.raw`$ −7.900`, String.raw`$ −7.300`],
                    ans: 2,
                    sol: String.raw`Cuenta de capital: AB −7.300 + TRKr 400 − FBK 1.000 = −7.900. (−8.300 olvida las ambulancias; −5.900 suma la FBK en vez de restarla; −7.300 es el ahorro.)`,
                },
                {
                    t: "t7",
                    q: String.raw`<div class="box"><p><strong>Módulo 3 · Cuenta financiera.</strong> Misma economía de los módulos 1 y 2. Cifras en millones de $.</p><table><tr><th rowspan="2">Instrumento</th><th colspan="2">Sociedades</th><th colspan="2">Gobierno</th><th colspan="2">Hogares</th><th colspan="2">Resto del Mundo</th></tr><tr><th>ANA</th><th>ENP</th><th>ANA</th><th>ENP</th><th>ANA</th><th>ENP</th><th>ANA</th><th>ENP</th></tr><tr><td>Dinero legal y depósitos</td><td>500</td><td>1.500</td><td>200</td><td>0</td><td>1.200</td><td>0</td><td>0</td><td>400</td></tr><tr><td>Valores distintos de acciones</td><td>6.300</td><td>200</td><td>0</td><td>?</td><td>300</td><td>0</td><td>1.200</td><td>300</td></tr><tr><td>Préstamos y crédito comercial</td><td>1.300</td><td>500</td><td>0</td><td>800</td><td>0</td><td>700</td><td>?</td><td>200</td></tr><tr><td>Acciones y participaciones de capital</td><td>200</td><td>800</td><td>0</td><td>0</td><td>400</td><td>0</td><td>400</td><td>200</td></tr></table><p>ANA: adquisición neta de activos financieros. ENP: emisión neta de pasivos.</p></div><p>La emisión neta de valores distintos de acciones del gobierno (casillero ?) fue:</p>`,
                    opts: [String.raw`$ 8.100`, String.raw`$ 7.300`, String.raw`$ 7.700`, String.raw`$ 6.900`],
                    ans: 1,
                    sol: String.raw`PRN del Gobierno = Δ activos − Δ pasivos: −7.900 = 200 − (X + 800), entonces X = 7.300. Chequeo por instrumento: activos en valores 6.300 + 0 + 300 + 1.200 = 7.800 = pasivos 200 + 7.300 + 0 + 300. (8.100 es toda su emisión neta de pasivos; 7.700 usa el PRN sin las ambulancias; 6.900 resta el activo en vez de sumarlo.)`,
                },
                {
                    t: "t7",
                    q: String.raw`<div class="box"><p><strong>Módulo 3 · Cuenta financiera.</strong> Misma economía de los módulos 1 y 2. Cifras en millones de $.</p><table><tr><th rowspan="2">Instrumento</th><th colspan="2">Sociedades</th><th colspan="2">Gobierno</th><th colspan="2">Hogares</th><th colspan="2">Resto del Mundo</th></tr><tr><th>ANA</th><th>ENP</th><th>ANA</th><th>ENP</th><th>ANA</th><th>ENP</th><th>ANA</th><th>ENP</th></tr><tr><td>Dinero legal y depósitos</td><td>500</td><td>1.500</td><td>200</td><td>0</td><td>1.200</td><td>0</td><td>0</td><td>400</td></tr><tr><td>Valores distintos de acciones</td><td>6.300</td><td>200</td><td>0</td><td>?</td><td>300</td><td>0</td><td>1.200</td><td>300</td></tr><tr><td>Préstamos y crédito comercial</td><td>1.300</td><td>500</td><td>0</td><td>800</td><td>0</td><td>700</td><td>?</td><td>200</td></tr><tr><td>Acciones y participaciones de capital</td><td>200</td><td>800</td><td>0</td><td>0</td><td>400</td><td>0</td><td>400</td><td>200</td></tr></table><p>ANA: adquisición neta de activos financieros. ENP: emisión neta de pasivos.</p></div><p>La adquisición neta de préstamos y créditos comerciales del Resto del Mundo (casillero ?) fue:</p>`,
                    opts: [String.raw`$ 1.300`, String.raw`$ 2.200`, String.raw`$ 400`, String.raw`$ 900`],
                    ans: 3,
                    sol: String.raw`En préstamos y crédito comercial, pasivos totales = 500 (sociedades) + 800 (gobierno) + 700 (hogares) + 200 (RM) = 2.200. Activos: 1.300 (sociedades) + X = 2.200, entonces X = 900.`,
                },
                {
                    t: "t7",
                    q: String.raw`<div class="box"><p><strong>Módulo 3 · Cuenta financiera.</strong> Misma economía de los módulos 1 y 2. Cifras en millones de $.</p><table><tr><th rowspan="2">Instrumento</th><th colspan="2">Sociedades</th><th colspan="2">Gobierno</th><th colspan="2">Hogares</th><th colspan="2">Resto del Mundo</th></tr><tr><th>ANA</th><th>ENP</th><th>ANA</th><th>ENP</th><th>ANA</th><th>ENP</th><th>ANA</th><th>ENP</th></tr><tr><td>Dinero legal y depósitos</td><td>500</td><td>1.500</td><td>200</td><td>0</td><td>1.200</td><td>0</td><td>0</td><td>400</td></tr><tr><td>Valores distintos de acciones</td><td>6.300</td><td>200</td><td>0</td><td>?</td><td>300</td><td>0</td><td>1.200</td><td>300</td></tr><tr><td>Préstamos y crédito comercial</td><td>1.300</td><td>500</td><td>0</td><td>800</td><td>0</td><td>700</td><td>?</td><td>200</td></tr><tr><td>Acciones y participaciones de capital</td><td>200</td><td>800</td><td>0</td><td>0</td><td>400</td><td>0</td><td>400</td><td>200</td></tr></table><p>ANA: adquisición neta de activos financieros. ENP: emisión neta de pasivos.</p></div><p>El préstamo neto del Resto del Mundo fue:</p>`,
                    opts: [String.raw`$ −1.400`, String.raw`$ 1.800`, String.raw`$ 2.500`, String.raw`$ 1.400`],
                    ans: 3,
                    sol: String.raw`RM: ANA = 1.200 + 900 + 400 = 2.500; ENP = 400 + 300 + 200 + 200 = 1.100; PRN = 1.400. Chequeo: PRN de la economía = 5.300 (sociedades) − 7.900 (gobierno) + 1.200 (hogares) = −1.400 = SBP −1.800 + TRNK 400. Desde el RM: PRN = SCE 1.800 − TRK 400 = 1.400.`,
                },
                {
                    t: "t7",
                    q: String.raw`<div class="box"><p><strong>Módulo 3 · Cuenta financiera.</strong> Misma economía de los módulos 1 y 2. Cifras en millones de $.</p><table><tr><th rowspan="2">Instrumento</th><th colspan="2">Sociedades</th><th colspan="2">Gobierno</th><th colspan="2">Hogares</th><th colspan="2">Resto del Mundo</th></tr><tr><th>ANA</th><th>ENP</th><th>ANA</th><th>ENP</th><th>ANA</th><th>ENP</th><th>ANA</th><th>ENP</th></tr><tr><td>Dinero legal y depósitos</td><td>500</td><td>1.500</td><td>200</td><td>0</td><td>1.200</td><td>0</td><td>0</td><td>400</td></tr><tr><td>Valores distintos de acciones</td><td>6.300</td><td>200</td><td>0</td><td>?</td><td>300</td><td>0</td><td>1.200</td><td>300</td></tr><tr><td>Préstamos y crédito comercial</td><td>1.300</td><td>500</td><td>0</td><td>800</td><td>0</td><td>700</td><td>?</td><td>200</td></tr><tr><td>Acciones y participaciones de capital</td><td>200</td><td>800</td><td>0</td><td>0</td><td>400</td><td>0</td><td>400</td><td>200</td></tr></table><p>ANA: adquisición neta de activos financieros. ENP: emisión neta de pasivos.</p></div><p>A partir de los datos, es correcto afirmar que:</p>`,
                    opts: [
                        String.raw`Las sociedades tuvieron necesidad de financiamiento porque emitieron pasivos`,
                        String.raw`Los hogares tuvieron capacidad de financiamiento por $ 1.200`,
                        String.raw`El gobierno no adquirió activos financieros`,
                        String.raw`La economía le prestó $ 1.400 al Resto del Mundo`,
                    ],
                    ans: 1,
                    sol: String.raw`Hogares: ahorro 1.200 − FBK 0 = 1.200 = ANA 1.900 − ENP 700. Las sociedades emitieron pasivos (3.000) pero adquirieron más activos (8.300): PRN +5.300. El Gobierno adquirió depósitos por 200. La economía requirió financiamiento del RM por 1.400, no le prestó.`,
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
            note: String.raw`<p>Simulacro con el formato de la 1ª prueba de 2023 y 2024: preguntas de múltiple opción en módulos (COU, cuentas corrientes por sector, cuenta financiera) más preguntas conceptuales. Cada correcta suma 1,5, cada incorrecta resta 0,5, en blanco 0. La prueba real vale 45 puntos (mínimo 18) y tiene 32 preguntas; con 30 correctas llegás al máximo. Duración: 2 horas.</p><p><strong>Estrategia</strong>: con 4 opciones y −0,5 por error, adivinar totalmente al azar tiene valor esperado 0 (0,25 × 1,5 − 0,75 × 0,5 = 0). Si descartaste al menos una opción, conviene responder: con 3 opciones posibles el valor esperado es +0,17 y con 2, +0,5. En los módulos numéricos, completá primero los casilleros con ? del cuadro y chequeá que el PIB dé igual por las tres ópticas antes de marcar.</p>`,
            questions: [
                {
                    t: "t2",
                    q: String.raw`<div class="box"><p><strong>Módulo 1 · COU.</strong> Economía con dos ramas de mercado (Rama 1: agropecuaria; Rama 2: industria manufacturera) y el Gobierno, que produce servicios no de mercado. Cifras en millones de $. Los casilleros con ? no se conocen.</p><table><tr><th></th><th>Rama 1</th><th>Rama 2</th><th>Gobierno</th><th>GCFH</th><th>GCFG</th><th>FBKF</th><th>VE</th><th>E</th><th>Total</th></tr><tr><td>Rama 1</td><td>1.500</td><td>7.000</td><td>0</td><td>3.000</td><td>0</td><td>800</td><td>700</td><td>9.000</td><td>22.000</td></tr><tr><td>Rama 2</td><td>2.500</td><td>5.000</td><td>2.000</td><td>18.000</td><td>0</td><td>2.000</td><td>?</td><td>4.000</td><td>33.000</td></tr><tr><td>Gobierno</td><td>0</td><td>0</td><td>0</td><td>0</td><td>?</td><td>0</td><td>0</td><td>0</td><td>?</td></tr><tr><td>Importaciones</td><td>1.000</td><td>4.000</td><td>1.500</td><td>5.000</td><td>0</td><td>4.500</td><td>0</td><td>0</td><td>16.000</td></tr><tr><td>RA</td><td>4.000</td><td>8.000</td><td>7.500</td><td colspan="6"></td></tr><tr><td>CKF</td><td>1.500</td><td>2.500</td><td>1.000</td><td colspan="6"></td></tr><tr><td>Imp−S</td><td>500</td><td>3.000</td><td>0</td><td colspan="6"></td></tr><tr><td>EEN</td><td>?</td><td>3.500</td><td>0</td><td colspan="6"></td></tr></table></div><p>La variación de existencias de productos de la Rama 2 (casillero ?) fue:</p>`,
                    opts: [String.raw`$ 500`, String.raw`$ −500`, String.raw`$ 0`, String.raw`$ 700`],
                    ans: 1,
                    sol: String.raw`Fila Rama 2: 2.500 + 5.000 + 2.000 + 18.000 + 0 + 2.000 + X + 4.000 = 33.000, entonces 33.500 + X = 33.000 y X = −500. Se usaron bienes industriales en stock de años anteriores.`,
                },
                {
                    t: "t4",
                    q: String.raw`<div class="box"><p><strong>Módulo 1 · COU.</strong> Economía con dos ramas de mercado (Rama 1: agropecuaria; Rama 2: industria manufacturera) y el Gobierno, que produce servicios no de mercado. Cifras en millones de $. Los casilleros con ? no se conocen.</p><table><tr><th></th><th>Rama 1</th><th>Rama 2</th><th>Gobierno</th><th>GCFH</th><th>GCFG</th><th>FBKF</th><th>VE</th><th>E</th><th>Total</th></tr><tr><td>Rama 1</td><td>1.500</td><td>7.000</td><td>0</td><td>3.000</td><td>0</td><td>800</td><td>700</td><td>9.000</td><td>22.000</td></tr><tr><td>Rama 2</td><td>2.500</td><td>5.000</td><td>2.000</td><td>18.000</td><td>0</td><td>2.000</td><td>?</td><td>4.000</td><td>33.000</td></tr><tr><td>Gobierno</td><td>0</td><td>0</td><td>0</td><td>0</td><td>?</td><td>0</td><td>0</td><td>0</td><td>?</td></tr><tr><td>Importaciones</td><td>1.000</td><td>4.000</td><td>1.500</td><td>5.000</td><td>0</td><td>4.500</td><td>0</td><td>0</td><td>16.000</td></tr><tr><td>RA</td><td>4.000</td><td>8.000</td><td>7.500</td><td colspan="6"></td></tr><tr><td>CKF</td><td>1.500</td><td>2.500</td><td>1.000</td><td colspan="6"></td></tr><tr><td>Imp−S</td><td>500</td><td>3.000</td><td>0</td><td colspan="6"></td></tr><tr><td>EEN</td><td>?</td><td>3.500</td><td>0</td><td colspan="6"></td></tr></table></div><p>El excedente de explotación neto de la Rama 1 (casillero ?) fue:</p>`,
                    opts: [String.raw`$ 12.500`, String.raw`$ 17.000`, String.raw`$ 12.000`, String.raw`$ 11.000`],
                    ans: 3,
                    sol: String.raw`Producción R1 = 22.000. CI R1 = 1.500 + 2.500 + 0 + 1.000 = 5.000. VAB = 17.000. EEN = 17.000 − 4.000 − 1.500 − 500 = 11.000. (12.500 es el EEB; 12.000 sale de olvidar el insumo importado en el CI.)`,
                },
                {
                    t: "t6",
                    q: String.raw`<div class="box"><p><strong>Módulo 1 · COU.</strong> Economía con dos ramas de mercado (Rama 1: agropecuaria; Rama 2: industria manufacturera) y el Gobierno, que produce servicios no de mercado. Cifras en millones de $. Los casilleros con ? no se conocen.</p><table><tr><th></th><th>Rama 1</th><th>Rama 2</th><th>Gobierno</th><th>GCFH</th><th>GCFG</th><th>FBKF</th><th>VE</th><th>E</th><th>Total</th></tr><tr><td>Rama 1</td><td>1.500</td><td>7.000</td><td>0</td><td>3.000</td><td>0</td><td>800</td><td>700</td><td>9.000</td><td>22.000</td></tr><tr><td>Rama 2</td><td>2.500</td><td>5.000</td><td>2.000</td><td>18.000</td><td>0</td><td>2.000</td><td>?</td><td>4.000</td><td>33.000</td></tr><tr><td>Gobierno</td><td>0</td><td>0</td><td>0</td><td>0</td><td>?</td><td>0</td><td>0</td><td>0</td><td>?</td></tr><tr><td>Importaciones</td><td>1.000</td><td>4.000</td><td>1.500</td><td>5.000</td><td>0</td><td>4.500</td><td>0</td><td>0</td><td>16.000</td></tr><tr><td>RA</td><td>4.000</td><td>8.000</td><td>7.500</td><td colspan="6"></td></tr><tr><td>CKF</td><td>1.500</td><td>2.500</td><td>1.000</td><td colspan="6"></td></tr><tr><td>Imp−S</td><td>500</td><td>3.000</td><td>0</td><td colspan="6"></td></tr><tr><td>EEN</td><td>?</td><td>3.500</td><td>0</td><td colspan="6"></td></tr></table></div><p>El gasto de consumo final del gobierno (casillero ?) fue:</p>`,
                    opts: [String.raw`$ 10.500`, String.raw`$ 12.000`, String.raw`$ 8.500`, String.raw`$ 3.500`],
                    ans: 1,
                    sol: String.raw`Producción del Gobierno por su columna: CI (0 + 2.000 + 1.500 = 3.500) + RA 7.500 + CKF 1.000 = 12.000 = GCFG. (10.500 olvida el insumo importado; 8.500 es su VAB; 3.500 su CI.)`,
                },
                {
                    t: "t3",
                    q: String.raw`<div class="box"><p><strong>Módulo 1 · COU.</strong> Economía con dos ramas de mercado (Rama 1: agropecuaria; Rama 2: industria manufacturera) y el Gobierno, que produce servicios no de mercado. Cifras en millones de $. Los casilleros con ? no se conocen.</p><table><tr><th></th><th>Rama 1</th><th>Rama 2</th><th>Gobierno</th><th>GCFH</th><th>GCFG</th><th>FBKF</th><th>VE</th><th>E</th><th>Total</th></tr><tr><td>Rama 1</td><td>1.500</td><td>7.000</td><td>0</td><td>3.000</td><td>0</td><td>800</td><td>700</td><td>9.000</td><td>22.000</td></tr><tr><td>Rama 2</td><td>2.500</td><td>5.000</td><td>2.000</td><td>18.000</td><td>0</td><td>2.000</td><td>?</td><td>4.000</td><td>33.000</td></tr><tr><td>Gobierno</td><td>0</td><td>0</td><td>0</td><td>0</td><td>?</td><td>0</td><td>0</td><td>0</td><td>?</td></tr><tr><td>Importaciones</td><td>1.000</td><td>4.000</td><td>1.500</td><td>5.000</td><td>0</td><td>4.500</td><td>0</td><td>0</td><td>16.000</td></tr><tr><td>RA</td><td>4.000</td><td>8.000</td><td>7.500</td><td colspan="6"></td></tr><tr><td>CKF</td><td>1.500</td><td>2.500</td><td>1.000</td><td colspan="6"></td></tr><tr><td>Imp−S</td><td>500</td><td>3.000</td><td>0</td><td colspan="6"></td></tr><tr><td>EEN</td><td>?</td><td>3.500</td><td>0</td><td colspan="6"></td></tr></table></div><p>El PIB fue:</p>`,
                    opts: [String.raw`$ 43.500`, String.raw`$ 58.500`, String.raw`$ 42.500`, String.raw`$ 67.000`],
                    ans: 2,
                    sol: String.raw`ΣVAB = 17.000 + 17.000 + 8.500 = 42.500. Gasto: GCFH (3.000 + 18.000 + 5.000 = 26.000) + GCFG 12.000 + FBKF (800 + 2.000 + 4.500 = 7.300) + VE (700 − 500 = 200) + E 13.000 − M 16.000 = 42.500. (43.500 toma la VE de la Rama 2 como +500.)`,
                },
                {
                    t: "t4",
                    q: String.raw`<div class="box"><p><strong>Módulo 1 · COU.</strong> Economía con dos ramas de mercado (Rama 1: agropecuaria; Rama 2: industria manufacturera) y el Gobierno, que produce servicios no de mercado. Cifras en millones de $. Los casilleros con ? no se conocen.</p><table><tr><th></th><th>Rama 1</th><th>Rama 2</th><th>Gobierno</th><th>GCFH</th><th>GCFG</th><th>FBKF</th><th>VE</th><th>E</th><th>Total</th></tr><tr><td>Rama 1</td><td>1.500</td><td>7.000</td><td>0</td><td>3.000</td><td>0</td><td>800</td><td>700</td><td>9.000</td><td>22.000</td></tr><tr><td>Rama 2</td><td>2.500</td><td>5.000</td><td>2.000</td><td>18.000</td><td>0</td><td>2.000</td><td>?</td><td>4.000</td><td>33.000</td></tr><tr><td>Gobierno</td><td>0</td><td>0</td><td>0</td><td>0</td><td>?</td><td>0</td><td>0</td><td>0</td><td>?</td></tr><tr><td>Importaciones</td><td>1.000</td><td>4.000</td><td>1.500</td><td>5.000</td><td>0</td><td>4.500</td><td>0</td><td>0</td><td>16.000</td></tr><tr><td>RA</td><td>4.000</td><td>8.000</td><td>7.500</td><td colspan="6"></td></tr><tr><td>CKF</td><td>1.500</td><td>2.500</td><td>1.000</td><td colspan="6"></td></tr><tr><td>Imp−S</td><td>500</td><td>3.000</td><td>0</td><td colspan="6"></td></tr><tr><td>EEN</td><td>?</td><td>3.500</td><td>0</td><td colspan="6"></td></tr></table></div><p>La contribución de la industria manufacturera al PIB fue:</p>`,
                    opts: [String.raw`$ 33.000`, String.raw`$ 16.000`, String.raw`$ 17.000`, String.raw`$ 14.000`],
                    ans: 2,
                    sol: String.raw`Se mide por el VAB de la Rama 2: 33.000 − 16.000 = 17.000. (33.000 es su producción, 16.000 su CI, 14.000 su VAB sin impuestos netos.)`,
                },
                {
                    t: "t2",
                    q: String.raw`<div class="box"><p><strong>Módulo 1 · COU.</strong> Economía con dos ramas de mercado (Rama 1: agropecuaria; Rama 2: industria manufacturera) y el Gobierno, que produce servicios no de mercado. Cifras en millones de $. Los casilleros con ? no se conocen.</p><table><tr><th></th><th>Rama 1</th><th>Rama 2</th><th>Gobierno</th><th>GCFH</th><th>GCFG</th><th>FBKF</th><th>VE</th><th>E</th><th>Total</th></tr><tr><td>Rama 1</td><td>1.500</td><td>7.000</td><td>0</td><td>3.000</td><td>0</td><td>800</td><td>700</td><td>9.000</td><td>22.000</td></tr><tr><td>Rama 2</td><td>2.500</td><td>5.000</td><td>2.000</td><td>18.000</td><td>0</td><td>2.000</td><td>?</td><td>4.000</td><td>33.000</td></tr><tr><td>Gobierno</td><td>0</td><td>0</td><td>0</td><td>0</td><td>?</td><td>0</td><td>0</td><td>0</td><td>?</td></tr><tr><td>Importaciones</td><td>1.000</td><td>4.000</td><td>1.500</td><td>5.000</td><td>0</td><td>4.500</td><td>0</td><td>0</td><td>16.000</td></tr><tr><td>RA</td><td>4.000</td><td>8.000</td><td>7.500</td><td colspan="6"></td></tr><tr><td>CKF</td><td>1.500</td><td>2.500</td><td>1.000</td><td colspan="6"></td></tr><tr><td>Imp−S</td><td>500</td><td>3.000</td><td>0</td><td colspan="6"></td></tr><tr><td>EEN</td><td>?</td><td>3.500</td><td>0</td><td colspan="6"></td></tr></table></div><p>La utilización final de bienes importados fue:</p>`,
                    opts: [String.raw`$ 9.500`, String.raw`$ 16.000`, String.raw`$ 6.500`, String.raw`$ 5.000`],
                    ans: 0,
                    sol: String.raw`Fila importaciones, columnas de utilización final: GCFH 5.000 + FBKF 4.500 = 9.500. (16.000 son las importaciones totales; 6.500 las intermedias.)`,
                },
                {
                    t: "t2",
                    q: String.raw`<div class="box"><p><strong>Módulo 1 · COU.</strong> Economía con dos ramas de mercado (Rama 1: agropecuaria; Rama 2: industria manufacturera) y el Gobierno, que produce servicios no de mercado. Cifras en millones de $. Los casilleros con ? no se conocen.</p><table><tr><th></th><th>Rama 1</th><th>Rama 2</th><th>Gobierno</th><th>GCFH</th><th>GCFG</th><th>FBKF</th><th>VE</th><th>E</th><th>Total</th></tr><tr><td>Rama 1</td><td>1.500</td><td>7.000</td><td>0</td><td>3.000</td><td>0</td><td>800</td><td>700</td><td>9.000</td><td>22.000</td></tr><tr><td>Rama 2</td><td>2.500</td><td>5.000</td><td>2.000</td><td>18.000</td><td>0</td><td>2.000</td><td>?</td><td>4.000</td><td>33.000</td></tr><tr><td>Gobierno</td><td>0</td><td>0</td><td>0</td><td>0</td><td>?</td><td>0</td><td>0</td><td>0</td><td>?</td></tr><tr><td>Importaciones</td><td>1.000</td><td>4.000</td><td>1.500</td><td>5.000</td><td>0</td><td>4.500</td><td>0</td><td>0</td><td>16.000</td></tr><tr><td>RA</td><td>4.000</td><td>8.000</td><td>7.500</td><td colspan="6"></td></tr><tr><td>CKF</td><td>1.500</td><td>2.500</td><td>1.000</td><td colspan="6"></td></tr><tr><td>Imp−S</td><td>500</td><td>3.000</td><td>0</td><td colspan="6"></td></tr><tr><td>EEN</td><td>?</td><td>3.500</td><td>0</td><td colspan="6"></td></tr></table></div><p>El valor 7.000 registrado en la fila de la Rama 1 y la columna de la Rama 2 puede corresponder a:</p>`,
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
                    q: String.raw`<div class="box"><p><strong>Módulo 1 · COU.</strong> Economía con dos ramas de mercado (Rama 1: agropecuaria; Rama 2: industria manufacturera) y el Gobierno, que produce servicios no de mercado. Cifras en millones de $. Los casilleros con ? no se conocen.</p><table><tr><th></th><th>Rama 1</th><th>Rama 2</th><th>Gobierno</th><th>GCFH</th><th>GCFG</th><th>FBKF</th><th>VE</th><th>E</th><th>Total</th></tr><tr><td>Rama 1</td><td>1.500</td><td>7.000</td><td>0</td><td>3.000</td><td>0</td><td>800</td><td>700</td><td>9.000</td><td>22.000</td></tr><tr><td>Rama 2</td><td>2.500</td><td>5.000</td><td>2.000</td><td>18.000</td><td>0</td><td>2.000</td><td>?</td><td>4.000</td><td>33.000</td></tr><tr><td>Gobierno</td><td>0</td><td>0</td><td>0</td><td>0</td><td>?</td><td>0</td><td>0</td><td>0</td><td>?</td></tr><tr><td>Importaciones</td><td>1.000</td><td>4.000</td><td>1.500</td><td>5.000</td><td>0</td><td>4.500</td><td>0</td><td>0</td><td>16.000</td></tr><tr><td>RA</td><td>4.000</td><td>8.000</td><td>7.500</td><td colspan="6"></td></tr><tr><td>CKF</td><td>1.500</td><td>2.500</td><td>1.000</td><td colspan="6"></td></tr><tr><td>Imp−S</td><td>500</td><td>3.000</td><td>0</td><td colspan="6"></td></tr><tr><td>EEN</td><td>?</td><td>3.500</td><td>0</td><td colspan="6"></td></tr></table></div><p>La formación bruta de capital (FBK) fue:</p>`,
                    opts: [String.raw`$ 7.300`, String.raw`$ 7.500`, String.raw`$ 8.500`, String.raw`$ 3.000`],
                    ans: 1,
                    sol: String.raw`FBK = FBKF + VE = 7.300 + (700 − 500) = 7.500. (7.300 es solo la FBKF; 8.500 toma la VE de la Rama 2 como +500; 3.000 olvida la FBKF importada.)`,
                },
                {
                    t: "t3",
                    q: String.raw`<div class="box"><p><strong>Módulo 1 · COU.</strong> Economía con dos ramas de mercado (Rama 1: agropecuaria; Rama 2: industria manufacturera) y el Gobierno, que produce servicios no de mercado. Cifras en millones de $. Los casilleros con ? no se conocen.</p><table><tr><th></th><th>Rama 1</th><th>Rama 2</th><th>Gobierno</th><th>GCFH</th><th>GCFG</th><th>FBKF</th><th>VE</th><th>E</th><th>Total</th></tr><tr><td>Rama 1</td><td>1.500</td><td>7.000</td><td>0</td><td>3.000</td><td>0</td><td>800</td><td>700</td><td>9.000</td><td>22.000</td></tr><tr><td>Rama 2</td><td>2.500</td><td>5.000</td><td>2.000</td><td>18.000</td><td>0</td><td>2.000</td><td>?</td><td>4.000</td><td>33.000</td></tr><tr><td>Gobierno</td><td>0</td><td>0</td><td>0</td><td>0</td><td>?</td><td>0</td><td>0</td><td>0</td><td>?</td></tr><tr><td>Importaciones</td><td>1.000</td><td>4.000</td><td>1.500</td><td>5.000</td><td>0</td><td>4.500</td><td>0</td><td>0</td><td>16.000</td></tr><tr><td>RA</td><td>4.000</td><td>8.000</td><td>7.500</td><td colspan="6"></td></tr><tr><td>CKF</td><td>1.500</td><td>2.500</td><td>1.000</td><td colspan="6"></td></tr><tr><td>Imp−S</td><td>500</td><td>3.000</td><td>0</td><td colspan="6"></td></tr><tr><td>EEN</td><td>?</td><td>3.500</td><td>0</td><td colspan="6"></td></tr></table></div><p>El excedente de explotación bruto de la economía fue:</p>`,
                    opts: [String.raw`$ 19.500`, String.raw`$ 14.500`, String.raw`$ 23.000`, String.raw`$ 18.500`],
                    ans: 0,
                    sol: String.raw`EEB = CKF (1.500 + 2.500 + 1.000 = 5.000) + EEN (11.000 + 3.500 + 0 = 14.500) = 19.500. Chequeo: PIB 42.500 = RA 19.500 + Imp−S 3.500 + EEB 19.500.`,
                },
                {
                    t: "t2",
                    q: String.raw`<div class="box"><p><strong>Módulo 1 · COU.</strong> Economía con dos ramas de mercado (Rama 1: agropecuaria; Rama 2: industria manufacturera) y el Gobierno, que produce servicios no de mercado. Cifras en millones de $. Los casilleros con ? no se conocen.</p><table><tr><th></th><th>Rama 1</th><th>Rama 2</th><th>Gobierno</th><th>GCFH</th><th>GCFG</th><th>FBKF</th><th>VE</th><th>E</th><th>Total</th></tr><tr><td>Rama 1</td><td>1.500</td><td>7.000</td><td>0</td><td>3.000</td><td>0</td><td>800</td><td>700</td><td>9.000</td><td>22.000</td></tr><tr><td>Rama 2</td><td>2.500</td><td>5.000</td><td>2.000</td><td>18.000</td><td>0</td><td>2.000</td><td>?</td><td>4.000</td><td>33.000</td></tr><tr><td>Gobierno</td><td>0</td><td>0</td><td>0</td><td>0</td><td>?</td><td>0</td><td>0</td><td>0</td><td>?</td></tr><tr><td>Importaciones</td><td>1.000</td><td>4.000</td><td>1.500</td><td>5.000</td><td>0</td><td>4.500</td><td>0</td><td>0</td><td>16.000</td></tr><tr><td>RA</td><td>4.000</td><td>8.000</td><td>7.500</td><td colspan="6"></td></tr><tr><td>CKF</td><td>1.500</td><td>2.500</td><td>1.000</td><td colspan="6"></td></tr><tr><td>Imp−S</td><td>500</td><td>3.000</td><td>0</td><td colspan="6"></td></tr><tr><td>EEN</td><td>?</td><td>3.500</td><td>0</td><td colspan="6"></td></tr></table></div><p>La utilización intermedia total (consumo intermedio de la economía) fue:</p>`,
                    opts: [String.raw`$ 18.000`, String.raw`$ 83.000`, String.raw`$ 24.500`, String.raw`$ 58.500`],
                    ans: 2,
                    sol: String.raw`CI R1 5.000 + CI R2 16.000 + CI Gob 3.500 = 24.500 (incluye 6.500 importados; 18.000 es solo lo nacional). 83.000 es la Oferta Total (Producción 67.000 + M 16.000).`,
                },
                {
                    t: "t4",
                    q: String.raw`<div class="box"><p><strong>Módulo 1 · COU.</strong> Economía con dos ramas de mercado (Rama 1: agropecuaria; Rama 2: industria manufacturera) y el Gobierno, que produce servicios no de mercado. Cifras en millones de $. Los casilleros con ? no se conocen.</p><table><tr><th></th><th>Rama 1</th><th>Rama 2</th><th>Gobierno</th><th>GCFH</th><th>GCFG</th><th>FBKF</th><th>VE</th><th>E</th><th>Total</th></tr><tr><td>Rama 1</td><td>1.500</td><td>7.000</td><td>0</td><td>3.000</td><td>0</td><td>800</td><td>700</td><td>9.000</td><td>22.000</td></tr><tr><td>Rama 2</td><td>2.500</td><td>5.000</td><td>2.000</td><td>18.000</td><td>0</td><td>2.000</td><td>?</td><td>4.000</td><td>33.000</td></tr><tr><td>Gobierno</td><td>0</td><td>0</td><td>0</td><td>0</td><td>?</td><td>0</td><td>0</td><td>0</td><td>?</td></tr><tr><td>Importaciones</td><td>1.000</td><td>4.000</td><td>1.500</td><td>5.000</td><td>0</td><td>4.500</td><td>0</td><td>0</td><td>16.000</td></tr><tr><td>RA</td><td>4.000</td><td>8.000</td><td>7.500</td><td colspan="6"></td></tr><tr><td>CKF</td><td>1.500</td><td>2.500</td><td>1.000</td><td colspan="6"></td></tr><tr><td>Imp−S</td><td>500</td><td>3.000</td><td>0</td><td colspan="6"></td></tr><tr><td>EEN</td><td>?</td><td>3.500</td><td>0</td><td colspan="6"></td></tr></table></div><p>Si en la Rama 2 los aportes patronales fueron $ 1.200 y los personales $ 900, los salarios nominales fueron:</p>`,
                    opts: [String.raw`$ 5.900`, String.raw`$ 6.800`, String.raw`$ 7.100`, String.raw`$ 8.000`],
                    ans: 1,
                    sol: String.raw`Salarios nominales = RA − patronales = 8.000 − 1.200 = 6.800. (5.900 es el salario líquido.)`,
                },
                {
                    t: "t2",
                    q: String.raw`<div class="box"><p><strong>Módulo 1 · COU.</strong> Economía con dos ramas de mercado (Rama 1: agropecuaria; Rama 2: industria manufacturera) y el Gobierno, que produce servicios no de mercado. Cifras en millones de $. Los casilleros con ? no se conocen.</p><table><tr><th></th><th>Rama 1</th><th>Rama 2</th><th>Gobierno</th><th>GCFH</th><th>GCFG</th><th>FBKF</th><th>VE</th><th>E</th><th>Total</th></tr><tr><td>Rama 1</td><td>1.500</td><td>7.000</td><td>0</td><td>3.000</td><td>0</td><td>800</td><td>700</td><td>9.000</td><td>22.000</td></tr><tr><td>Rama 2</td><td>2.500</td><td>5.000</td><td>2.000</td><td>18.000</td><td>0</td><td>2.000</td><td>?</td><td>4.000</td><td>33.000</td></tr><tr><td>Gobierno</td><td>0</td><td>0</td><td>0</td><td>0</td><td>?</td><td>0</td><td>0</td><td>0</td><td>?</td></tr><tr><td>Importaciones</td><td>1.000</td><td>4.000</td><td>1.500</td><td>5.000</td><td>0</td><td>4.500</td><td>0</td><td>0</td><td>16.000</td></tr><tr><td>RA</td><td>4.000</td><td>8.000</td><td>7.500</td><td colspan="6"></td></tr><tr><td>CKF</td><td>1.500</td><td>2.500</td><td>1.000</td><td colspan="6"></td></tr><tr><td>Imp−S</td><td>500</td><td>3.000</td><td>0</td><td colspan="6"></td></tr><tr><td>EEN</td><td>?</td><td>3.500</td><td>0</td><td colspan="6"></td></tr></table></div><p>A partir de este COU es posible conocer:</p>`,
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
                    q: String.raw`<div class="box"><p><strong>Módulo 2 · Cuentas corrientes por sector.</strong> Misma economía del Módulo 1 (PIB, GCFH, GCFG y FBK son los del COU). Cifras en millones de $; — = no corresponde.</p><table><tr><th>Transacción</th><th>Sociedades</th><th>Gobierno</th><th>Hogares</th><th>Resto del Mundo</th></tr><tr><td>EEB</td><td>18.500</td><td>1.000</td><td>—</td><td>—</td></tr><tr><td>RA pagada por productores residentes (total 19.500): pagada a no residentes</td><td>—</td><td>—</td><td>—</td><td>200</td></tr><tr><td>RA cobrada al exterior por hogares residentes</td><td>—</td><td>—</td><td>600</td><td>—</td></tr><tr><td>Impuestos menos subsidios sobre la producción (total)</td><td>—</td><td>3.500</td><td>—</td><td>—</td></tr><tr><td>Rentas de la propiedad pagadas</td><td>6.500</td><td>1.500</td><td>300</td><td>400</td></tr><tr><td>Rentas de la propiedad cobradas</td><td>1.000</td><td>300</td><td>5.200</td><td>?</td></tr><tr><td>Contribuciones sociales pagadas por los hogares</td><td>—</td><td>—</td><td>3.600</td><td>—</td></tr><tr><td>Prestaciones sociales pagadas por el gobierno</td><td>—</td><td>5.000</td><td>—</td><td>—</td></tr><tr><td>Remesas: recibidas por hogares desde el exterior / enviadas al exterior</td><td>—</td><td>—</td><td>900 / 100</td><td>—</td></tr><tr><td>Donación de medicamentos del RM al Gobierno</td><td>—</td><td>250</td><td>—</td><td>—</td></tr><tr><td>Donación del RM al Gobierno de equipos informáticos para escuelas</td><td>—</td><td>600</td><td>—</td><td>—</td></tr><tr><td>Gasto de consumo final</td><td>—</td><td>12.000</td><td>26.000</td><td>—</td></tr><tr><td>FBK (FBKF + VE)</td><td>6.200 (6.000 + 200)</td><td>1.300 (FBKF, incluye los equipos donados)</td><td>—</td><td>—</td></tr></table></div><p>La remuneración neta de factores del exterior (RX) fue:</p>`,
                    opts: [String.raw`$ −1.800`, String.raw`$ −2.200`, String.raw`$ 400`, String.raw`$ −1.400`],
                    ans: 3,
                    sol: String.raw`Rentas cobradas por el RM: pagadas totales (6.500 + 1.500 + 300 + 400 = 8.700) − cobradas por residentes (1.000 + 300 + 5.200 = 6.500) = 2.200. RX = (400 − 2.200) + (600 − 200) = −1.800 + 400 = −1.400.`,
                },
                {
                    t: "t3",
                    q: String.raw`<div class="box"><p><strong>Módulo 2 · Cuentas corrientes por sector.</strong> Misma economía del Módulo 1 (PIB, GCFH, GCFG y FBK son los del COU). Cifras en millones de $; — = no corresponde.</p><table><tr><th>Transacción</th><th>Sociedades</th><th>Gobierno</th><th>Hogares</th><th>Resto del Mundo</th></tr><tr><td>EEB</td><td>18.500</td><td>1.000</td><td>—</td><td>—</td></tr><tr><td>RA pagada por productores residentes (total 19.500): pagada a no residentes</td><td>—</td><td>—</td><td>—</td><td>200</td></tr><tr><td>RA cobrada al exterior por hogares residentes</td><td>—</td><td>—</td><td>600</td><td>—</td></tr><tr><td>Impuestos menos subsidios sobre la producción (total)</td><td>—</td><td>3.500</td><td>—</td><td>—</td></tr><tr><td>Rentas de la propiedad pagadas</td><td>6.500</td><td>1.500</td><td>300</td><td>400</td></tr><tr><td>Rentas de la propiedad cobradas</td><td>1.000</td><td>300</td><td>5.200</td><td>?</td></tr><tr><td>Contribuciones sociales pagadas por los hogares</td><td>—</td><td>—</td><td>3.600</td><td>—</td></tr><tr><td>Prestaciones sociales pagadas por el gobierno</td><td>—</td><td>5.000</td><td>—</td><td>—</td></tr><tr><td>Remesas: recibidas por hogares desde el exterior / enviadas al exterior</td><td>—</td><td>—</td><td>900 / 100</td><td>—</td></tr><tr><td>Donación de medicamentos del RM al Gobierno</td><td>—</td><td>250</td><td>—</td><td>—</td></tr><tr><td>Donación del RM al Gobierno de equipos informáticos para escuelas</td><td>—</td><td>600</td><td>—</td><td>—</td></tr><tr><td>Gasto de consumo final</td><td>—</td><td>12.000</td><td>26.000</td><td>—</td></tr><tr><td>FBK (FBKF + VE)</td><td>6.200 (6.000 + 200)</td><td>1.300 (FBKF, incluye los equipos donados)</td><td>—</td><td>—</td></tr></table></div><p>El ingreso nacional bruto fue:</p>`,
                    opts: [String.raw`$ 43.900`, String.raw`$ 41.100`, String.raw`$ 42.150`, String.raw`$ 40.700`],
                    ans: 1,
                    sol: String.raw`INB = VAB + RX = 42.500 − 1.400 = 41.100.`,
                },
                {
                    t: "t3",
                    q: String.raw`<div class="box"><p><strong>Módulo 2 · Cuentas corrientes por sector.</strong> Misma economía del Módulo 1 (PIB, GCFH, GCFG y FBK son los del COU). Cifras en millones de $; — = no corresponde.</p><table><tr><th>Transacción</th><th>Sociedades</th><th>Gobierno</th><th>Hogares</th><th>Resto del Mundo</th></tr><tr><td>EEB</td><td>18.500</td><td>1.000</td><td>—</td><td>—</td></tr><tr><td>RA pagada por productores residentes (total 19.500): pagada a no residentes</td><td>—</td><td>—</td><td>—</td><td>200</td></tr><tr><td>RA cobrada al exterior por hogares residentes</td><td>—</td><td>—</td><td>600</td><td>—</td></tr><tr><td>Impuestos menos subsidios sobre la producción (total)</td><td>—</td><td>3.500</td><td>—</td><td>—</td></tr><tr><td>Rentas de la propiedad pagadas</td><td>6.500</td><td>1.500</td><td>300</td><td>400</td></tr><tr><td>Rentas de la propiedad cobradas</td><td>1.000</td><td>300</td><td>5.200</td><td>?</td></tr><tr><td>Contribuciones sociales pagadas por los hogares</td><td>—</td><td>—</td><td>3.600</td><td>—</td></tr><tr><td>Prestaciones sociales pagadas por el gobierno</td><td>—</td><td>5.000</td><td>—</td><td>—</td></tr><tr><td>Remesas: recibidas por hogares desde el exterior / enviadas al exterior</td><td>—</td><td>—</td><td>900 / 100</td><td>—</td></tr><tr><td>Donación de medicamentos del RM al Gobierno</td><td>—</td><td>250</td><td>—</td><td>—</td></tr><tr><td>Donación del RM al Gobierno de equipos informáticos para escuelas</td><td>—</td><td>600</td><td>—</td><td>—</td></tr><tr><td>Gasto de consumo final</td><td>—</td><td>12.000</td><td>26.000</td><td>—</td></tr><tr><td>FBK (FBKF + VE)</td><td>6.200 (6.000 + 200)</td><td>1.300 (FBKF, incluye los equipos donados)</td><td>—</td><td>—</td></tr></table></div><p>El ingreso nacional disponible bruto fue:</p>`,
                    opts: [String.raw`$ 42.750`, String.raw`$ 41.100`, String.raw`$ 42.150`, String.raw`$ 41.950`],
                    ans: 2,
                    sol: String.raw`TRNC = remesas 900 − 100 + donación de medicamentos 250 = 1.050. INDB = 41.100 + 1.050 = 42.150. Los equipos informáticos (600) son transferencia de capital: si los sumás da 42.750.`,
                },
                {
                    t: "t5",
                    q: String.raw`<div class="box"><p><strong>Módulo 2 · Cuentas corrientes por sector.</strong> Misma economía del Módulo 1 (PIB, GCFH, GCFG y FBK son los del COU). Cifras en millones de $; — = no corresponde.</p><table><tr><th>Transacción</th><th>Sociedades</th><th>Gobierno</th><th>Hogares</th><th>Resto del Mundo</th></tr><tr><td>EEB</td><td>18.500</td><td>1.000</td><td>—</td><td>—</td></tr><tr><td>RA pagada por productores residentes (total 19.500): pagada a no residentes</td><td>—</td><td>—</td><td>—</td><td>200</td></tr><tr><td>RA cobrada al exterior por hogares residentes</td><td>—</td><td>—</td><td>600</td><td>—</td></tr><tr><td>Impuestos menos subsidios sobre la producción (total)</td><td>—</td><td>3.500</td><td>—</td><td>—</td></tr><tr><td>Rentas de la propiedad pagadas</td><td>6.500</td><td>1.500</td><td>300</td><td>400</td></tr><tr><td>Rentas de la propiedad cobradas</td><td>1.000</td><td>300</td><td>5.200</td><td>?</td></tr><tr><td>Contribuciones sociales pagadas por los hogares</td><td>—</td><td>—</td><td>3.600</td><td>—</td></tr><tr><td>Prestaciones sociales pagadas por el gobierno</td><td>—</td><td>5.000</td><td>—</td><td>—</td></tr><tr><td>Remesas: recibidas por hogares desde el exterior / enviadas al exterior</td><td>—</td><td>—</td><td>900 / 100</td><td>—</td></tr><tr><td>Donación de medicamentos del RM al Gobierno</td><td>—</td><td>250</td><td>—</td><td>—</td></tr><tr><td>Donación del RM al Gobierno de equipos informáticos para escuelas</td><td>—</td><td>600</td><td>—</td><td>—</td></tr><tr><td>Gasto de consumo final</td><td>—</td><td>12.000</td><td>26.000</td><td>—</td></tr><tr><td>FBK (FBKF + VE)</td><td>6.200 (6.000 + 200)</td><td>1.300 (FBKF, incluye los equipos donados)</td><td>—</td><td>—</td></tr></table></div><p>El saldo de ingresos primarios de las sociedades fue:</p>`,
                    opts: [String.raw`$ 13.000`, String.raw`$ 19.500`, String.raw`$ 12.000`, String.raw`$ 18.500`],
                    ans: 0,
                    sol: String.raw`EEB 18.500 + rentas cobradas 1.000 − rentas pagadas 6.500 = 13.000. (19.500 olvida las rentas pagadas; 12.000 olvida las cobradas; 18.500 es el EEB.)`,
                },
                {
                    t: "t5",
                    q: String.raw`<div class="box"><p><strong>Módulo 2 · Cuentas corrientes por sector.</strong> Misma economía del Módulo 1 (PIB, GCFH, GCFG y FBK son los del COU). Cifras en millones de $; — = no corresponde.</p><table><tr><th>Transacción</th><th>Sociedades</th><th>Gobierno</th><th>Hogares</th><th>Resto del Mundo</th></tr><tr><td>EEB</td><td>18.500</td><td>1.000</td><td>—</td><td>—</td></tr><tr><td>RA pagada por productores residentes (total 19.500): pagada a no residentes</td><td>—</td><td>—</td><td>—</td><td>200</td></tr><tr><td>RA cobrada al exterior por hogares residentes</td><td>—</td><td>—</td><td>600</td><td>—</td></tr><tr><td>Impuestos menos subsidios sobre la producción (total)</td><td>—</td><td>3.500</td><td>—</td><td>—</td></tr><tr><td>Rentas de la propiedad pagadas</td><td>6.500</td><td>1.500</td><td>300</td><td>400</td></tr><tr><td>Rentas de la propiedad cobradas</td><td>1.000</td><td>300</td><td>5.200</td><td>?</td></tr><tr><td>Contribuciones sociales pagadas por los hogares</td><td>—</td><td>—</td><td>3.600</td><td>—</td></tr><tr><td>Prestaciones sociales pagadas por el gobierno</td><td>—</td><td>5.000</td><td>—</td><td>—</td></tr><tr><td>Remesas: recibidas por hogares desde el exterior / enviadas al exterior</td><td>—</td><td>—</td><td>900 / 100</td><td>—</td></tr><tr><td>Donación de medicamentos del RM al Gobierno</td><td>—</td><td>250</td><td>—</td><td>—</td></tr><tr><td>Donación del RM al Gobierno de equipos informáticos para escuelas</td><td>—</td><td>600</td><td>—</td><td>—</td></tr><tr><td>Gasto de consumo final</td><td>—</td><td>12.000</td><td>26.000</td><td>—</td></tr><tr><td>FBK (FBKF + VE)</td><td>6.200 (6.000 + 200)</td><td>1.300 (FBKF, incluye los equipos donados)</td><td>—</td><td>—</td></tr></table></div><p>El ingreso disponible bruto de los hogares fue:</p>`,
                    opts: [String.raw`$ 30.600`, String.raw`$ 27.000`, String.raw`$ 24.800`, String.raw`$ 17.000`],
                    ans: 1,
                    sol: String.raw`RA recibida = 19.500 − 200 + 600 = 19.900. Ingreso primario = 19.900 + 5.200 − 300 = 24.800. IDB = 24.800 − 3.600 + 5.000 + 900 − 100 = 27.000. (30.600 no resta las contribuciones; 24.800 es el ingreso primario; 17.000 resta las prestaciones en vez de sumarlas.)`,
                },
                {
                    t: "t6",
                    q: String.raw`<div class="box"><p><strong>Módulo 2 · Cuentas corrientes por sector.</strong> Misma economía del Módulo 1 (PIB, GCFH, GCFG y FBK son los del COU). Cifras en millones de $; — = no corresponde.</p><table><tr><th>Transacción</th><th>Sociedades</th><th>Gobierno</th><th>Hogares</th><th>Resto del Mundo</th></tr><tr><td>EEB</td><td>18.500</td><td>1.000</td><td>—</td><td>—</td></tr><tr><td>RA pagada por productores residentes (total 19.500): pagada a no residentes</td><td>—</td><td>—</td><td>—</td><td>200</td></tr><tr><td>RA cobrada al exterior por hogares residentes</td><td>—</td><td>—</td><td>600</td><td>—</td></tr><tr><td>Impuestos menos subsidios sobre la producción (total)</td><td>—</td><td>3.500</td><td>—</td><td>—</td></tr><tr><td>Rentas de la propiedad pagadas</td><td>6.500</td><td>1.500</td><td>300</td><td>400</td></tr><tr><td>Rentas de la propiedad cobradas</td><td>1.000</td><td>300</td><td>5.200</td><td>?</td></tr><tr><td>Contribuciones sociales pagadas por los hogares</td><td>—</td><td>—</td><td>3.600</td><td>—</td></tr><tr><td>Prestaciones sociales pagadas por el gobierno</td><td>—</td><td>5.000</td><td>—</td><td>—</td></tr><tr><td>Remesas: recibidas por hogares desde el exterior / enviadas al exterior</td><td>—</td><td>—</td><td>900 / 100</td><td>—</td></tr><tr><td>Donación de medicamentos del RM al Gobierno</td><td>—</td><td>250</td><td>—</td><td>—</td></tr><tr><td>Donación del RM al Gobierno de equipos informáticos para escuelas</td><td>—</td><td>600</td><td>—</td><td>—</td></tr><tr><td>Gasto de consumo final</td><td>—</td><td>12.000</td><td>26.000</td><td>—</td></tr><tr><td>FBK (FBKF + VE)</td><td>6.200 (6.000 + 200)</td><td>1.300 (FBKF, incluye los equipos donados)</td><td>—</td><td>—</td></tr></table></div><p>El ahorro bruto de los hogares fue:</p>`,
                    opts: [String.raw`$ 27.000`, String.raw`$ −1.000`, String.raw`$ 4.600`, String.raw`$ 1.000`],
                    ans: 3,
                    sol: String.raw`AB = IDB − GCFH = 27.000 − 26.000 = 1.000. (27.000 es el IDB; 4.600 sale de no restar las contribuciones.)`,
                },
                {
                    t: "t6",
                    q: String.raw`<div class="box"><p><strong>Módulo 2 · Cuentas corrientes por sector.</strong> Misma economía del Módulo 1 (PIB, GCFH, GCFG y FBK son los del COU). Cifras en millones de $; — = no corresponde.</p><table><tr><th>Transacción</th><th>Sociedades</th><th>Gobierno</th><th>Hogares</th><th>Resto del Mundo</th></tr><tr><td>EEB</td><td>18.500</td><td>1.000</td><td>—</td><td>—</td></tr><tr><td>RA pagada por productores residentes (total 19.500): pagada a no residentes</td><td>—</td><td>—</td><td>—</td><td>200</td></tr><tr><td>RA cobrada al exterior por hogares residentes</td><td>—</td><td>—</td><td>600</td><td>—</td></tr><tr><td>Impuestos menos subsidios sobre la producción (total)</td><td>—</td><td>3.500</td><td>—</td><td>—</td></tr><tr><td>Rentas de la propiedad pagadas</td><td>6.500</td><td>1.500</td><td>300</td><td>400</td></tr><tr><td>Rentas de la propiedad cobradas</td><td>1.000</td><td>300</td><td>5.200</td><td>?</td></tr><tr><td>Contribuciones sociales pagadas por los hogares</td><td>—</td><td>—</td><td>3.600</td><td>—</td></tr><tr><td>Prestaciones sociales pagadas por el gobierno</td><td>—</td><td>5.000</td><td>—</td><td>—</td></tr><tr><td>Remesas: recibidas por hogares desde el exterior / enviadas al exterior</td><td>—</td><td>—</td><td>900 / 100</td><td>—</td></tr><tr><td>Donación de medicamentos del RM al Gobierno</td><td>—</td><td>250</td><td>—</td><td>—</td></tr><tr><td>Donación del RM al Gobierno de equipos informáticos para escuelas</td><td>—</td><td>600</td><td>—</td><td>—</td></tr><tr><td>Gasto de consumo final</td><td>—</td><td>12.000</td><td>26.000</td><td>—</td></tr><tr><td>FBK (FBKF + VE)</td><td>6.200 (6.000 + 200)</td><td>1.300 (FBKF, incluye los equipos donados)</td><td>—</td><td>—</td></tr></table></div><p>El ahorro bruto del gobierno fue:</p>`,
                    opts: [String.raw`$ −9.850`, String.raw`$ −9.250`, String.raw`$ 2.150`, String.raw`$ −10.550`],
                    ans: 0,
                    sol: String.raw`Ingreso primario = 1.000 + 3.500 + 300 − 1.500 = 3.300. IDB = 3.300 + 3.600 − 5.000 + 250 = 2.150. AB = 2.150 − 12.000 = −9.850. (−9.250 suma los equipos donados; 2.150 es el IDB; −10.550 es el préstamo neto.)`,
                },
                {
                    t: "t6",
                    q: String.raw`<div class="box"><p><strong>Módulo 2 · Cuentas corrientes por sector.</strong> Misma economía del Módulo 1 (PIB, GCFH, GCFG y FBK son los del COU). Cifras en millones de $; — = no corresponde.</p><table><tr><th>Transacción</th><th>Sociedades</th><th>Gobierno</th><th>Hogares</th><th>Resto del Mundo</th></tr><tr><td>EEB</td><td>18.500</td><td>1.000</td><td>—</td><td>—</td></tr><tr><td>RA pagada por productores residentes (total 19.500): pagada a no residentes</td><td>—</td><td>—</td><td>—</td><td>200</td></tr><tr><td>RA cobrada al exterior por hogares residentes</td><td>—</td><td>—</td><td>600</td><td>—</td></tr><tr><td>Impuestos menos subsidios sobre la producción (total)</td><td>—</td><td>3.500</td><td>—</td><td>—</td></tr><tr><td>Rentas de la propiedad pagadas</td><td>6.500</td><td>1.500</td><td>300</td><td>400</td></tr><tr><td>Rentas de la propiedad cobradas</td><td>1.000</td><td>300</td><td>5.200</td><td>?</td></tr><tr><td>Contribuciones sociales pagadas por los hogares</td><td>—</td><td>—</td><td>3.600</td><td>—</td></tr><tr><td>Prestaciones sociales pagadas por el gobierno</td><td>—</td><td>5.000</td><td>—</td><td>—</td></tr><tr><td>Remesas: recibidas por hogares desde el exterior / enviadas al exterior</td><td>—</td><td>—</td><td>900 / 100</td><td>—</td></tr><tr><td>Donación de medicamentos del RM al Gobierno</td><td>—</td><td>250</td><td>—</td><td>—</td></tr><tr><td>Donación del RM al Gobierno de equipos informáticos para escuelas</td><td>—</td><td>600</td><td>—</td><td>—</td></tr><tr><td>Gasto de consumo final</td><td>—</td><td>12.000</td><td>26.000</td><td>—</td></tr><tr><td>FBK (FBKF + VE)</td><td>6.200 (6.000 + 200)</td><td>1.300 (FBKF, incluye los equipos donados)</td><td>—</td><td>—</td></tr></table></div><p>El ahorro nacional bruto fue:</p>`,
                    opts: [String.raw`$ 4.750`, String.raw`$ 7.500`, String.raw`$ 4.150`, String.raw`$ 3.100`],
                    ans: 2,
                    sol: String.raw`ANB = INDB − GCF = 42.150 − 38.000 = 4.150. Por sectores: sociedades 13.000 + hogares 1.000 − gobierno 9.850 = 4.150.`,
                },
                {
                    t: "t7",
                    q: String.raw`<div class="box"><p><strong>Módulo 3 · Cuenta financiera.</strong> Misma economía de los módulos 1 y 2. Cifras en millones de $.</p><table><tr><th rowspan="2">Instrumento</th><th colspan="2">Sociedades</th><th colspan="2">Gobierno</th><th colspan="2">Hogares</th><th colspan="2">Resto del Mundo</th></tr><tr><th>ANA</th><th>ENP</th><th>ANA</th><th>ENP</th><th>ANA</th><th>ENP</th><th>ANA</th><th>ENP</th></tr><tr><td>Dinero legal y depósitos</td><td>300</td><td>1.000</td><td>450</td><td>0</td><td>600</td><td>0</td><td>0</td><td>?</td></tr><tr><td>Valores distintos de acciones</td><td>?</td><td>0</td><td>0</td><td>9.500</td><td>0</td><td>0</td><td>1.300</td><td>500</td></tr><tr><td>Préstamos y crédito comercial</td><td>1.500</td><td>1.700</td><td>0</td><td>1.500</td><td>0</td><td>0</td><td>1.900</td><td>200</td></tr><tr><td>Acciones y participaciones de capital</td><td>0</td><td>1.000</td><td>0</td><td>0</td><td>400</td><td>0</td><td>700</td><td>100</td></tr></table><p>ANA: adquisición neta de activos financieros. ENP: emisión neta de pasivos.</p></div><p>El préstamo neto de las sociedades fue:</p>`,
                    opts: [String.raw`$ 13.000`, String.raw`$ −6.800`, String.raw`$ 6.800`, String.raw`$ 7.000`],
                    ans: 2,
                    sol: String.raw`Cuenta de capital: AB 13.000 − FBK 6.200 = 6.800. (7.000 olvida la VE; 13.000 es el ahorro.)`,
                },
                {
                    t: "t7",
                    q: String.raw`<div class="box"><p><strong>Módulo 3 · Cuenta financiera.</strong> Misma economía de los módulos 1 y 2. Cifras en millones de $.</p><table><tr><th rowspan="2">Instrumento</th><th colspan="2">Sociedades</th><th colspan="2">Gobierno</th><th colspan="2">Hogares</th><th colspan="2">Resto del Mundo</th></tr><tr><th>ANA</th><th>ENP</th><th>ANA</th><th>ENP</th><th>ANA</th><th>ENP</th><th>ANA</th><th>ENP</th></tr><tr><td>Dinero legal y depósitos</td><td>300</td><td>1.000</td><td>450</td><td>0</td><td>600</td><td>0</td><td>0</td><td>?</td></tr><tr><td>Valores distintos de acciones</td><td>?</td><td>0</td><td>0</td><td>9.500</td><td>0</td><td>0</td><td>1.300</td><td>500</td></tr><tr><td>Préstamos y crédito comercial</td><td>1.500</td><td>1.700</td><td>0</td><td>1.500</td><td>0</td><td>0</td><td>1.900</td><td>200</td></tr><tr><td>Acciones y participaciones de capital</td><td>0</td><td>1.000</td><td>0</td><td>0</td><td>400</td><td>0</td><td>700</td><td>100</td></tr></table><p>ANA: adquisición neta de activos financieros. ENP: emisión neta de pasivos.</p></div><p>La adquisición neta de valores distintos de acciones por parte de las sociedades (casillero ?) fue:</p>`,
                    opts: [String.raw`$ 8.700`, String.raw`$ 3.700`, String.raw`$ 10.000`, String.raw`$ 10.500`],
                    ans: 0,
                    sol: String.raw`PRN sociedades = 6.800 = ANA − ENP. ENP = 1.000 + 0 + 1.700 + 1.000 = 3.700, entonces ANA = 10.500 = 300 + X + 1.500 + 0, X = 8.700. Chequeo por instrumento: 8.700 + 1.300 = 10.000 = 9.500 + 500.`,
                },
                {
                    t: "t7",
                    q: String.raw`<div class="box"><p><strong>Módulo 3 · Cuenta financiera.</strong> Misma economía de los módulos 1 y 2. Cifras en millones de $.</p><table><tr><th rowspan="2">Instrumento</th><th colspan="2">Sociedades</th><th colspan="2">Gobierno</th><th colspan="2">Hogares</th><th colspan="2">Resto del Mundo</th></tr><tr><th>ANA</th><th>ENP</th><th>ANA</th><th>ENP</th><th>ANA</th><th>ENP</th><th>ANA</th><th>ENP</th></tr><tr><td>Dinero legal y depósitos</td><td>300</td><td>1.000</td><td>450</td><td>0</td><td>600</td><td>0</td><td>0</td><td>?</td></tr><tr><td>Valores distintos de acciones</td><td>?</td><td>0</td><td>0</td><td>9.500</td><td>0</td><td>0</td><td>1.300</td><td>500</td></tr><tr><td>Préstamos y crédito comercial</td><td>1.500</td><td>1.700</td><td>0</td><td>1.500</td><td>0</td><td>0</td><td>1.900</td><td>200</td></tr><tr><td>Acciones y participaciones de capital</td><td>0</td><td>1.000</td><td>0</td><td>0</td><td>400</td><td>0</td><td>700</td><td>100</td></tr></table><p>ANA: adquisición neta de activos financieros. ENP: emisión neta de pasivos.</p></div><p>La emisión neta de dinero legal y depósitos del Resto del Mundo (casillero ?) fue:</p>`,
                    opts: [String.raw`$ 1.350`, String.raw`$ 0`, String.raw`$ 650`, String.raw`$ 350`],
                    ans: 3,
                    sol: String.raw`Activos en depósitos: 300 + 450 + 600 + 0 = 1.350. Pasivos: sociedades 1.000 + RM X. X = 350 (depósitos de residentes en bancos del exterior).`,
                },
                {
                    t: "t7",
                    q: String.raw`<div class="box"><p><strong>Módulo 3 · Cuenta financiera.</strong> Misma economía de los módulos 1 y 2. Cifras en millones de $.</p><table><tr><th rowspan="2">Instrumento</th><th colspan="2">Sociedades</th><th colspan="2">Gobierno</th><th colspan="2">Hogares</th><th colspan="2">Resto del Mundo</th></tr><tr><th>ANA</th><th>ENP</th><th>ANA</th><th>ENP</th><th>ANA</th><th>ENP</th><th>ANA</th><th>ENP</th></tr><tr><td>Dinero legal y depósitos</td><td>300</td><td>1.000</td><td>450</td><td>0</td><td>600</td><td>0</td><td>0</td><td>?</td></tr><tr><td>Valores distintos de acciones</td><td>?</td><td>0</td><td>0</td><td>9.500</td><td>0</td><td>0</td><td>1.300</td><td>500</td></tr><tr><td>Préstamos y crédito comercial</td><td>1.500</td><td>1.700</td><td>0</td><td>1.500</td><td>0</td><td>0</td><td>1.900</td><td>200</td></tr><tr><td>Acciones y participaciones de capital</td><td>0</td><td>1.000</td><td>0</td><td>0</td><td>400</td><td>0</td><td>700</td><td>100</td></tr></table><p>ANA: adquisición neta de activos financieros. ENP: emisión neta de pasivos.</p></div><p>El préstamo neto del Resto del Mundo fue:</p>`,
                    opts: [String.raw`$ 3.350`, String.raw`$ 2.750`, String.raw`$ −2.750`, String.raw`$ 3.900`],
                    ans: 1,
                    sol: String.raw`RM: ANA 3.900 − ENP 1.150 = 2.750. Chequeo: PRN economía = 6.800 − 10.550 + 1.000 = −2.750 = SBP (4.150 − 7.500 = −3.350) + TRNK 600. Desde el RM: SCE 3.350 − TRK 600 = 2.750. (3.350 es el SCE, que no descuenta las transferencias de capital.)`,
                },
                {
                    t: "t7",
                    q: String.raw`<div class="box"><p><strong>Módulo 3 · Cuenta financiera.</strong> Misma economía de los módulos 1 y 2. Cifras en millones de $.</p><table><tr><th rowspan="2">Instrumento</th><th colspan="2">Sociedades</th><th colspan="2">Gobierno</th><th colspan="2">Hogares</th><th colspan="2">Resto del Mundo</th></tr><tr><th>ANA</th><th>ENP</th><th>ANA</th><th>ENP</th><th>ANA</th><th>ENP</th><th>ANA</th><th>ENP</th></tr><tr><td>Dinero legal y depósitos</td><td>300</td><td>1.000</td><td>450</td><td>0</td><td>600</td><td>0</td><td>0</td><td>?</td></tr><tr><td>Valores distintos de acciones</td><td>?</td><td>0</td><td>0</td><td>9.500</td><td>0</td><td>0</td><td>1.300</td><td>500</td></tr><tr><td>Préstamos y crédito comercial</td><td>1.500</td><td>1.700</td><td>0</td><td>1.500</td><td>0</td><td>0</td><td>1.900</td><td>200</td></tr><tr><td>Acciones y participaciones de capital</td><td>0</td><td>1.000</td><td>0</td><td>0</td><td>400</td><td>0</td><td>700</td><td>100</td></tr></table><p>ANA: adquisición neta de activos financieros. ENP: emisión neta de pasivos.</p></div><p>El préstamo neto del gobierno fue:</p>`,
                    opts: [String.raw`$ −10.550`, String.raw`$ −11.150`, String.raw`$ −9.850`, String.raw`$ −11.000`],
                    ans: 0,
                    sol: String.raw`Capital: −9.850 + 600 − 1.300 = −10.550. Financiera: ANA 450 − ENP (9.500 + 1.500) = −10.550. (−11.150 olvida los equipos donados; −9.850 es el ahorro; −11.000 es la emisión de pasivos con signo negativo.)`,
                },
                {
                    t: "t7",
                    q: String.raw`<p>Si la FBK de una economía es 6.556, las transferencias de capital netas son 0 y su préstamo neto es −1.200, el ahorro nacional bruto es:</p>`,
                    opts: [String.raw`$ 7.756`, String.raw`$ 6.556`, String.raw`$ 5.356`, String.raw`$ −1.200`],
                    ans: 2,
                    sol: String.raw`ANB + TRNK = FBK + PRN, entonces ANB = 6.556 − 1.200 = 5.356.`,
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
                    sol: String.raw`Las transacciones corrientes con el RM son de bienes y servicios, de servicios productivos de factores y transferencias corrientes (1ª rev. 2023, preg. 32). Las transferencias de capital y los préstamos no son corrientes.`,
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
                    sol: String.raw`La cuenta de capital muestra la utilización del ahorro (y de las transferencias de capital) en acumulación; la financiera, el proceso de financiación. Los stocks se registran en las hojas de balance, que no se analizan en el curso.`,
                },
                {
                    t: "t3",
                    q: String.raw`<p>Según el BCU, el PIB de Uruguay en 2025, respecto al año anterior:</p>`,
                    opts: [String.raw`Creció 4,1%`, String.raw`Cayó 0,4%`, String.raw`Creció 4,9%`, String.raw`Creció 1,8%`],
                    ans: 3,
                    sol: String.raw`El Tomo 1 (2026, pág. 33) cita al BCU: la actividad económica en 2025 creció 1,8% respecto a 2024. El 4,1% es el aumento del volumen físico de las importaciones en ese mismo cuadro y el 4,9% fue el crecimiento de 2022 (1ª revisión 2023).`,
                },
            ],
        },
    ],
};

export default ed;
