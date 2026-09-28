// Parciales modelo de Introducción a la Microeconomía, armados a partir del análisis.
const NOTE = String.raw`<p>Sigue el molde de la 1ª revisión de mayo 2026: P1 restricción lineal (frontera factible o isocosto) · P2 TMS/TMT · P3 efecto ingreso y sustitución · P4-P6 juegos · P7 ultimátum · P8-P10 Ángela y Bruno. 10 preguntas de 3 opciones, 40 puntos (mínimo 16), 2 horas. Correcta +4, incorrecta −1, en blanco 0. Datos nuevos; los gráficos van descritos en tablas.</p>`;

const models = [
    {
        id: "modelo-1", title: "Parcial modelo 1", kind: "modelo",
        minutes: 120,
        scoring: { correct: 4, wrong: -1, blank: 0 },
        note: NOTE,
        questions: [
            {
                t: "t4",
                q: String.raw`Una trabajadora dispone de 24 horas por día, no tiene ingresos no laborales y gasta todo lo que gana. Su salario es de US$ 25 por hora y su elección óptima es el punto A: 15 horas de tiempo libre y un consumo de 225. Le suben el salario a US$ 35 por hora. Considerá también el punto E: 10 horas de tiempo libre y consumo de 380. ¿Cuál afirmación es correcta?`,
                opts: [
                    String.raw`Con la suba, la frontera se desplaza en paralelo hacia arriba: con 24 horas de tiempo libre ahora puede consumir 240.`,
                    String.raw`Después de la suba, el punto A queda exactamente sobre la nueva frontera factible.`,
                    String.raw`El punto E no era factible con el salario de 25, pero sí lo es con el salario de 35.`,
                ],
                ans: 2,
                sol: String.raw`<p>Frontera: \( c = w(24 - t) \).</p><ul><li>(A) Falsa. Un cambio de salario hace pivotear la frontera sobre (24, 0): si no trabaja no gana nada, con cualquier salario. Un desplazamiento paralelo corresponde a un ingreso no laboral.</li><li>(B) Falsa. Con 15 h libres trabaja 9 h: antes \( 25 \times 9 = 225 \) (sobre la frontera), después \( 35 \times 9 = 315 &gt; 225 \). A queda <em>debajo</em> de la nueva frontera: factible pero no está sobre ella.</li><li>(C) Verdadera. Con 10 h libres trabaja 14 h: antes \( 25 \times 14 = 350 &lt; 380 \) (no factible); después \( 35 \times 14 = 490 \ge 380 \) (factible).</li></ul><p>Respuesta <strong>C</strong>.</p>`,
            },
            {
                t: "t4",
                q: String.raw`Rosa gana US$ 4 por hora, dispone de 24 horas y gasta todo su ingreso. La tabla muestra cuatro puntos de su frontera factible y su TMS en cada uno:<br><table><tr><th>Punto</th><th>Tiempo libre (h)</th><th>Consumo (US$)</th><th>TMS</th></tr><tr><td>A</td><td>8</td><td>64</td><td>12</td></tr><tr><td>B</td><td>13</td><td>44</td><td>4</td></tr><tr><td>C</td><td>16</td><td>32</td><td>2,5</td></tr><tr><td>D</td><td>20</td><td>16</td><td>0,8</td></tr></table>¿Cuál afirmación es correcta?`,
                opts: [
                    String.raw`En A, Rosa mejoraría trabajando menos horas: está dispuesta a ceder 12 de consumo por una hora libre que solo le cuesta 4.`,
                    String.raw`En C la TMT es mayor que la TMS, por lo que a Rosa le convendría aumentar su tiempo libre.`,
                    String.raw`En D la TMS es menor que la TMT; D es un óptimo de esquina y a Rosa no le conviene moverse.`,
                ],
                ans: 0,
                sol: String.raw`<p>Chequeo: \( 4(24-8)=64 \), \( 4 \times 11 = 44 \), \( 4 \times 8 = 32 \), \( 4 \times 4 = 16 \). Los cuatro puntos están sobre la frontera y la TMT es 4 en toda ella.</p><ul><li>(A) Verdadera. En A, TMS = 12 &gt; TMT = 4: valora una hora libre en 12 y le cuesta 4. Gana moviéndose hacia más tiempo libre, es decir, trabajando menos.</li><li>(B) Falsa. En C, TMS = 2,5 &lt; 4: la hora libre le cuesta más de lo que la valora. Le conviene <em>menos</em> tiempo libre.</li><li>(C) Falsa. En D, TMS = 0,8 &lt; 4: le conviene trabajar más. No es esquina (la esquina sería 24 h libres) y no es óptimo. El óptimo es B, donde TMS = TMT = 4.</li></ul><p>Respuesta <strong>A</strong>.</p>`,
            },
            {
                t: "t5",
                q: String.raw`El salario de Julián sube de US$ 10 a US$ 20 por hora. El gráfico del problema se resume en esta tabla:<br><table><tr><th>Punto</th><th>Qué es</th><th>Tiempo libre (h)</th><th>Consumo</th></tr><tr><td>A</td><td>Óptimo inicial (salario 10)</td><td>14</td><td>100</td></tr><tr><td>C</td><td>Tangencia de la curva de indiferencia inicial con una recta de pendiente −20</td><td>11</td><td>170</td></tr><tr><td>B</td><td>Óptimo final (salario 20)</td><td>15</td><td>180</td></tr></table>¿Cuál afirmación describe correctamente la descomposición?`,
                opts: [
                    String.raw`El efecto sustitución lleva de 14 a 15 horas y el efecto ingreso de 15 a 11; domina el efecto sustitución.`,
                    String.raw`El efecto sustitución lleva de 14 a 11 horas y el efecto ingreso de 11 a 15; domina el efecto ingreso y el tiempo libre aumenta 1 hora.`,
                    String.raw`Como Julián es más rico y el tiempo libre se encareció, los dos efectos reducen el tiempo libre y trabaja más horas.`,
                ],
                ans: 1,
                sol: String.raw`<p>El efecto sustitución es el movimiento <strong>sobre la curva de indiferencia inicial</strong> hasta la pendiente nueva: de A (14 h) a C (11 h). El tiempo libre se encareció y baja 3 horas.</p><p>El efecto ingreso es el desplazamiento paralelo de C hasta el óptimo final B: de 11 a 15 horas (+4). Estar más rico lleva a más tiempo libre (el libro supone que el efecto ingreso no es negativo).</p><p>Total: \( -3 + 4 = +1 \). Julián pasa de 14 a 15 h libres: domina el efecto ingreso. Chequeo: \( 10 \times 10 = 100 \) y \( 20 \times 9 = 180 \).</p><p>(A) invierte los tramos. (C) es falsa: ante una suba del salario, los efectos van en direcciones opuestas. Respuesta <strong>B</strong>.</p>`,
            },
            {
                t: "t6",
                q: String.raw`Dos vecinos comparten una huerta y cada uno decide si la Cuida (C) o No la cuida (N), simultáneamente. Cuidarla le cuesta 3 a quien lo hace. Si los dos la cuidan, cada uno obtiene una cosecha que valora en 8; si la cuida uno solo, la cosecha vale 4 para cada uno; si no la cuida ninguno, 0. ¿Cuál afirmación es correcta?`,
                opts: [
                    String.raw`No hay equilibrio en estrategias dominantes: a cada vecino le conviene que el otro cuide y no cuidar él.`,
                    String.raw`Cuidar es estrategia dominante para ambos y el equilibrio (C, C) = (5, 5) es Pareto eficiente.`,
                    String.raw`El equilibrio es (N, N) = (0, 0), porque cuidar tiene un costo y el otro se aprovecha de la cosecha.`,
                ],
                ans: 1,
                sol: String.raw`<p>Pagos netos (fila, columna): (C, C) = (8 − 3, 8 − 3) = (5, 5); (C, N) = (4 − 3, 4) = (1, 4); (N, C) = (4, 1); (N, N) = (0, 0).</p><p>Fila: si el otro juega C, C da 5 &gt; 4; si juega N, C da 1 &gt; 0. C es dominante (lo mismo para la columna).</p><p>Equilibrio en dominantes: (C, C) = (5, 5). Ningún otro resultado mejora a los dos: es Pareto eficiente (caso de mano invisible, no de dilema).</p><p>(A) Falsa: sí hay dominante. (C) Falsa: si el otro cuida, no cuidar da 4 &lt; 5. Respuesta <strong>B</strong>.</p>`,
            },
            {
                t: "t6",
                q: String.raw`Dos cooperativas pesqueras comparten un caladero y eligen Respetar la cuota (R) o Sobrepescar (S). Pagos anuales en miles de dólares (cooperativa 1, cooperativa 2):<br><table><tr><th></th><th>2: R</th><th>2: S</th></tr><tr><th>1: R</th><td>(800, 800)</td><td>(300, 1.100)</td></tr><tr><th>1: S</th><td>(1.100, 300)</td><td>(450, 450)</td></tr></table>¿Cuál afirmación es correcta?`,
                opts: [
                    String.raw`El resultado (1.100, 300) es una mejora paretiana respecto de (450, 450), porque la suma de pagos es mayor.`,
                    String.raw`El equilibrio (S, S) es Pareto eficiente porque es un equilibrio en estrategias dominantes.`,
                    String.raw`(R, R) Pareto-domina al equilibrio (S, S), pero no es un equilibrio de Nash: a cada cooperativa le convendría desviarse y ganar 300 más.`,
                ],
                ans: 2,
                sol: String.raw`<p>Fila: frente a R, S da 1.100 &gt; 800; frente a S, S da 450 &gt; 300. S es dominante (simétrico). Equilibrio: (S, S) = (450, 450).</p><ul><li>(A) Falsa. De (450, 450) a (1.100, 300) la cooperativa 2 empeora. Pareto no compara sumas.</li><li>(B) Falsa. (R, R) = (800, 800) mejora a las dos: el equilibrio es Pareto ineficiente (dilema del prisionero).</li><li>(C) Verdadera. En (R, R), cada una pasaría de 800 a 1.100 desviándose a S: gana \( 1.100 - 800 = 300 \). Por eso no es Nash.</li></ul><p>Respuesta <strong>C</strong>.</p>`,
            },
            {
                t: "t6",
                q: String.raw`Dos empresas eligen simultáneamente el formato de un conector: X o Y. Conocen todos los pagos (empresa A, empresa B):<br><table><tr><th></th><th>B: X</th><th>B: Y</th></tr><tr><th>A: X</th><td>(6, 2)</td><td>(1, 1)</td></tr><tr><th>A: Y</th><td>(0, 0)</td><td>(4, 5)</td></tr></table>¿Cuál afirmación es correcta?`,
                opts: [
                    String.raw`Hay dos equilibrios de Nash. Si pueden acordar antes de jugar, B podría pagarle a A un monto entre 2 y 3 para coordinar en (Y, Y), y ambas quedarían mejor que en (X, X).`,
                    String.raw`Hay dos equilibrios de Nash. Si pueden acordar antes de jugar, A podría pagarle a B para coordinar en (X, X), y ambas quedarían mejor que en (Y, Y).`,
                    String.raw`El único equilibrio de Nash es (X, X), porque allí la empresa A obtiene su mayor pago.`,
                ],
                ans: 0,
                sol: String.raw`<p>(X, X): si A se va a Y obtiene 0 &lt; 6; si B se va a Y obtiene 1 &lt; 2. Es Nash. (Y, Y): A en X obtiene 1 &lt; 4; B en X obtiene 0 &lt; 5. Es Nash. Hay dos equilibrios y cada empresa prefiere uno distinto.</p><p>De (6, 2) a (4, 5): A pierde 2 y B gana 3. B puede transferirle a A entre 2 y 3 y ambas quedan mejor (por ejemplo, con 2,5: A = 6,5 y B = 2,5).</p><p>De (4, 5) a (6, 2): A gana 2 y B pierde 3. A no alcanza a compensar a B. (B) es falsa. (C) ignora el segundo equilibrio. Respuesta <strong>A</strong>.</p>`,
            },
            {
                t: "t7",
                q: String.raw`Sofía (proponente) y Lucas (receptor) juegan un ultimátum por $ 1.000 (unidad mínima: $ 10). Lucas rechaza cualquier oferta menor a $ 250 y acepta desde $ 250. Sofía conoce ese umbral y solo le importa su propio pago. ¿Cuál afirmación es correcta?`,
                opts: [
                    String.raw`Sofía ofrece $ 10, porque un receptor racional acepta cualquier monto positivo.`,
                    String.raw`Sofía ofrece $ 250 y se queda con $ 750; que ofrezca más que el mínimo no prueba que tenga preferencias sociales.`,
                    String.raw`Si se agrega un segundo receptor que acepta cualquier oferta positiva, Lucas va a rechazar más seguido, porque su rechazo castiga más a Sofía.`,
                ],
                ans: 1,
                sol: String.raw`<p>Sofía maximiza su pago sabiendo cómo responde Lucas: con menos de $ 250 la rechazan y obtiene 0; con $ 250 se queda con $ 750; ofrecer más reduce su pago. Ofrece $ 250. Es una decisión estratégica, compatible con ser homo economicus.</p><p>(A) Falsa: Lucas no es homo economicus (rechaza ofertas positivas), y Sofía lo sabe.</p><p>(C) Falsa: con competencia entre receptores, si Lucas rechaza, el otro acepta. Su rechazo ya no castiga a Sofía y termina aceptando ofertas más bajas. Respuesta <strong>B</strong>.</p>`,
            },
            {
                t: "t8",
                q: String.raw`Bruno es dueño de la tierra y Ángela, que no tiene tierra, puede trabajarla. Se comparan tres arreglos: trabajo forzoso, contrato de trabajo de "tómalo o déjalo" y arrendamiento con renta fijada por Bruno. ¿Cuál afirmación es correcta?`,
                opts: [
                    String.raw`Una ley que reduce la jornada de Ángela siempre lleva a una asignación Pareto eficiente, porque mejora a Ángela.`,
                    String.raw`Pasar del trabajo forzoso al contrato de "tómalo o déjalo" necesariamente mejora a Bruno, porque Ángela trabaja voluntariamente.`,
                    String.raw`En el arrendamiento, Ángela elige sus horas y la asignación es Pareto eficiente; si Bruno fija la renta de modo que ella quede sobre su curva de reserva, el resultado es igual al del contrato de "tómalo o déjalo".`,
                ],
                ans: 2,
                sol: String.raw`<ul><li>(A) Falsa. Una asignación es eficiente si TMS = TMT. Una jornada legal fijada en otro nivel mejora a Ángela (redistribuye), pero puede ser Pareto ineficiente.</li><li>(B) Falsa. Al pasar del forzoso al contrato, la opción de reserva de Ángela sube (ya no es la supervivencia sino su mejor alternativa). Bruno tiene que darle más: queda peor o igual, no mejor.</li><li>(C) Verdadera. Con renta fija, Ángela se queda con lo producido de más y elige horas donde TMS = TMT (eficiente). Si Bruno fija la renta para dejarla en su curva de reserva, la asignación coincide con la del contrato de tómalo o déjalo: Ángela sin renta económica y Bruno con todo el excedente.</li></ul><p>Respuesta <strong>C</strong>.</p>`,
            },
            {
                t: "t8",
                q: String.raw`El gráfico (tiempo libre de Ángela en el eje horizontal, fanegas de trigo en el vertical) muestra la frontera factible de la tierra de Bruno, la curva de indiferencia de reserva de Ángela del caso 2 (CI<sub>R</sub>) y su curva de reserva del caso 3, tras la ley (CI<sub>N</sub>, más alta). Se marcan cuatro asignaciones:<br><table><tr><th>Asignación</th><th>Tiempo libre (h)</th><th>Producción</th><th>Ángela</th><th>Bruno</th><th>Curva de Ángela</th></tr><tr><td>P</td><td>16</td><td>18 (sobre la frontera)</td><td>8</td><td>10</td><td>CI<sub>R</sub></td></tr><tr><td>Q</td><td>16</td><td>18 (sobre la frontera)</td><td>12</td><td>6</td><td>CI<sub>N</sub></td></tr><tr><td>R</td><td>18</td><td>14 (sobre la frontera)</td><td>6</td><td>8</td><td>CI<sub>R</sub></td></tr><tr><td>S</td><td>16</td><td>16 (debajo de la frontera)</td><td>8</td><td>8</td><td>CI<sub>R</sub></td></tr></table>¿Cuál afirmación es correcta?`,
                opts: [
                    String.raw`P es una mejora paretiana respecto de R y también respecto de S.`,
                    String.raw`Q es una mejora paretiana respecto de P, porque Ángela recibe 4 fanegas más trabajando las mismas horas.`,
                    String.raw`R es una mejora paretiana respecto de P, porque Ángela trabaja 2 horas menos.`,
                ],
                ans: 0,
                sol: String.raw`<p>Para Ángela alcanza con ver la curva: P, R y S están en CI<sub>R</sub> (le son indiferentes); Q está en CI<sub>N</sub> (mejor). Para Bruno, su grano.</p><ul><li>(A) Verdadera. De R a P: Ángela indiferente y Bruno sube de 8 a 10. De S a P: Ángela igual (8 fanegas, mismas horas) y Bruno sube de 8 a 10. En los dos casos nadie empeora y uno mejora.</li><li>(B) Falsa. De P a Q, Bruno baja de 10 a 6. Es redistribución, no mejora paretiana (P y Q no son comparables según Pareto).</li><li>(C) Falsa. Trabajar menos no alcanza: R está en la misma curva que P (Ángela indiferente) y Bruno pasa de 10 a 8.</li></ul><p>Respuesta <strong>A</strong>.</p>`,
            },
            {
                t: "t8",
                q: String.raw`Trabajo forzoso: Bruno elige cuántas horas trabaja Ángela y le da el mínimo de su curva de indiferencia de reserva (supervivencia). Se sabe:<br><table><tr><th>Tiempo libre (h)</th><th>Comparación</th><th>Producto medio (fanegas por hora trabajada)</th><th>Grano de Ángela en su curva de reserva</th></tr><tr><td>10</td><td>TMS &gt; TMT</td><td>0,8</td><td>6</td></tr><tr><td>14</td><td>TMS = TMT</td><td>1,2</td><td>4</td></tr><tr><td>18</td><td>TMS &lt; TMT</td><td>1,5</td><td>2,5</td></tr></table>¿Cuál afirmación es correcta?`,
                opts: [
                    String.raw`Ángela trabaja 14 horas, se producen 16,8 fanegas, Ángela recibe 4 y Bruno se queda con 12,8.`,
                    String.raw`Ángela trabaja 10 horas, se producen 12 fanegas, Ángela recibe 4 y Bruno se queda con 8; la asignación es Pareto eficiente.`,
                    String.raw`Bruno elige 18 horas de tiempo libre porque allí el producto medio es máximo: se producen 9 fanegas y Bruno se queda con 6,5.`,
                ],
                ans: 1,
                sol: String.raw`<p>Bruno maximiza lo que le queda eligiendo el punto de la curva de reserva donde TMS = TMT: 14 h de tiempo libre, o sea \( 24 - 14 = 10 \) h de trabajo.</p><p>Producción = producto medio × horas trabajadas = \( 1{,}2 \times 10 = 12 \). Ángela recibe 4 y Bruno \( 12 - 4 = 8 \). Como TMS = TMT, es Pareto eficiente (aunque muy desigual).</p><p>(A) multiplica por el tiempo libre en lugar de las horas trabajadas. (C) confunde maximizar el producto medio con maximizar lo que obtiene Bruno: en 18 h libres produce \( 1{,}5 \times 6 = 9 \) y se queda con 6,5 &lt; 8. Respuesta <strong>B</strong>.</p>`,
            },
        ],
    },
    {
        id: "modelo-2", title: "Parcial modelo 2", kind: "modelo",
        minutes: 120,
        scoring: { correct: 4, wrong: -1, blank: 0 },
        note: NOTE,
        questions: [
            {
                t: "t3",
                q: String.raw`Un taller textil puede producir 500 camisas por semana con cinco tecnologías que combinan trabajadores (L, eje horizontal) y energía en MWh (E, eje vertical). El salario es $ 60 por trabajador y la energía cuesta $ 20 por MWh.<br><table><tr><th>Tecnología</th><th>L</th><th>E</th></tr><tr><td>A</td><td>2</td><td>16</td></tr><tr><td>B</td><td>4</td><td>10</td></tr><tr><td>C</td><td>5</td><td>17</td></tr><tr><td>D</td><td>8</td><td>5</td></tr><tr><td>E</td><td>6</td><td>12</td></tr></table>¿Cuál afirmación es correcta?`,
                opts: [
                    String.raw`Con estos precios, A y B tienen el mismo costo y la recta isocosto que pasa por ambas es \( E = 22 - 3L \).`,
                    String.raw`La empresa elige D porque es la que usa menos energía; C y E están dominadas.`,
                    String.raw`Si el salario bajara a $ 40, la empresa elegiría la tecnología A.`,
                ],
                ans: 0,
                sol: String.raw`<p>Costos \( C = 60L + 20E \): A = 120 + 320 = 440; B = 240 + 200 = 440; C = 300 + 340 = 640; D = 480 + 100 = 580; E = 360 + 240 = 600.</p><ul><li>(A) Verdadera. A y B empatan en 440. Isocosto: \( E = 440/20 - (60/20)L = 22 - 3L \). Chequeo: A: \( 22 - 6 = 16 \); B: \( 22 - 12 = 10 \).</li><li>(B) Falsa. D cuesta 580: usar menos de un insumo no alcanza. (C está dominada por A y por B, y E por B, pero la elección es falsa.)</li><li>(C) Falsa. Si el trabajo se abarata, conviene la tecnología más intensiva en trabajo: con w = 40, A = 400, B = 360, D = 420. Elige B.</li></ul><p>Respuesta <strong>A</strong>.</p>`,
            },
            {
                t: "t4",
                q: String.raw`Pedro gana US$ 6 por hora, dispone de 24 horas y además recibe una transferencia fija de US$ 30 por día. Gasta todo su ingreso. La tabla muestra tres puntos de su frontera factible:<br><table><tr><th>Punto</th><th>Tiempo libre (h)</th><th>Consumo (US$)</th><th>TMS</th></tr><tr><td>A</td><td>10</td><td>114</td><td>15</td></tr><tr><td>B</td><td>15</td><td>84</td><td>6</td></tr><tr><td>C</td><td>19</td><td>60</td><td>2</td></tr></table>¿Cuál afirmación es correcta?`,
                opts: [
                    String.raw`El punto (24 h de tiempo libre; consumo 0) está sobre su frontera factible.`,
                    String.raw`B es su elección óptima: la TMS es igual al salario, que es la TMT.`,
                    String.raw`En C le conviene aumentar su tiempo libre, porque la TMS es menor que la TMT.`,
                ],
                ans: 1,
                sol: String.raw`<p>Frontera: \( c = 6(24 - t) + 30 \). Chequeo: \( 6 \times 14 + 30 = 114 \); \( 6 \times 9 + 30 = 84 \); \( 6 \times 5 + 30 = 60 \). TMT = 6 (la transferencia desplaza la frontera, no cambia la pendiente).</p><ul><li>(A) Falsa. Con 24 h libres consume la transferencia: (24; 30). La frontera ya no toca (24; 0).</li><li>(B) Verdadera. TMS = 6 = TMT.</li><li>(C) Falsa. TMS 2 &lt; TMT 6: una hora libre le cuesta 6 y la valora en 2. Le conviene <em>menos</em> tiempo libre.</li></ul><p>Respuesta <strong>B</strong>.</p>`,
            },
            {
                t: "t5",
                q: String.raw`Por una crisis del sector, el salario de Martina <strong>baja</strong> de US$ 20 a US$ 15 por hora. Suponé, como el libro, que el efecto ingreso no es negativo. El gráfico se resume así:<br><table><tr><th>Punto</th><th>Qué es</th><th>Tiempo libre (h)</th></tr><tr><td>A</td><td>Óptimo inicial (salario 20)</td><td>14</td></tr><tr><td>C</td><td>Tangencia de la curva de indiferencia inicial con una recta de pendiente −15</td><td>15</td></tr><tr><td>B</td><td>Óptimo final (salario 15)</td><td>13</td></tr></table>¿Cuál afirmación es correcta?`,
                opts: [
                    String.raw`Como el salario bajó, los dos efectos reducen el tiempo libre y Martina trabaja 1 hora más.`,
                    String.raw`El efecto sustitución reduce el tiempo libre de 14 a 13 horas y el efecto ingreso lo aumenta de 13 a 15; domina el efecto sustitución.`,
                    String.raw`El efecto sustitución aumenta el tiempo libre de 14 a 15 horas y el efecto ingreso lo reduce de 15 a 13; domina el efecto ingreso y Martina trabaja 1 hora más.`,
                ],
                ans: 2,
                sol: String.raw`<p>Con un salario menor, el tiempo libre se abarata: el efecto sustitución (sobre la curva inicial, de A a C) lo <strong>aumenta</strong>, de 14 a 15 h.</p><p>Martina es más pobre y el efecto ingreso (de C a B) lo <strong>reduce</strong>, de 15 a 13 h.</p><p>Total: \( +1 - 2 = -1 \). Pasa a 13 h libres (11 h de trabajo): domina el efecto ingreso. Su consumo cae de \( 20 \times 10 = 200 \) a \( 15 \times 11 = 165 \).</p><p>(A) Falsa: los efectos van en sentidos opuestos. (B) invierte el sentido de ambos. Respuesta <strong>C</strong>.</p>`,
            },
            {
                t: "t6",
                q: String.raw`Dos supermercados de un barrio deciden simultáneamente si Abren (Ab) o Cierran (Ce) los domingos. Beneficios semanales (super 1, super 2):<br><table><tr><th></th><th>2: Ab</th><th>2: Ce</th></tr><tr><th>1: Ab</th><td>(2, 3)</td><td>(5, 4)</td></tr><tr><th>1: Ce</th><td>(1, 6)</td><td>(3, 1)</td></tr></table>¿Cuál afirmación es correcta?`,
                opts: [
                    String.raw`Abrir es estrategia dominante para los dos supermercados y el equilibrio es (Ab, Ab).`,
                    String.raw`Solo el super 1 tiene estrategia dominante; el único equilibrio de Nash es (Ab, Ce) = (5, 4).`,
                    String.raw`(Ce, Ab) es un equilibrio de Nash porque allí el super 2 obtiene su pago máximo.`,
                ],
                ans: 1,
                sol: String.raw`<p>Super 1: frente a Ab, Ab da 2 &gt; 1; frente a Ce, Ab da 5 &gt; 3. Ab es dominante.</p><p>Super 2: frente a Ab del 1, prefiere Ce (4 &gt; 3); frente a Ce del 1, prefiere Ab (6 &gt; 1). No tiene dominante.</p><p>Como el 1 juega Ab, el 2 responde Ce: equilibrio único (Ab, Ce) = (5, 4). Chequeo: el 1 no gana cerrando (3 &lt; 5) y el 2 no gana abriendo (3 &lt; 4).</p><p>(A) Falsa para el super 2. (C) Falsa: en (Ce, Ab) el super 1 se desviaría a Ab (2 &gt; 1). Que un jugador tenga su máximo no hace a un resultado Nash. Respuesta <strong>B</strong>.</p>`,
            },
            {
                t: "t6",
                q: String.raw`Dos municipios vecinos deciden si Invierten (I) o No invierten (N) en una planta de tratamiento de aguas. Invertir le cuesta 300 al que lo hace. Si invierten los dos, cada municipio obtiene un beneficio de 700; si invierte uno solo, el beneficio es de 420 para cada uno; si no invierte ninguno, cada uno obtiene 150. ¿Cuál afirmación es correcta?`,
                opts: [
                    String.raw`(I, I) es una mejora paretiana respecto del equilibrio de Nash, pero no es un equilibrio de Nash.`,
                    String.raw`(N, I) es una mejora paretiana respecto del equilibrio, porque el pago conjunto sube de 300 a 540.`,
                    String.raw`El equilibrio de Nash es (I, I), porque es el resultado que maximiza el pago conjunto.`,
                ],
                ans: 0,
                sol: String.raw`<p>Pagos netos: (I, I) = (700 − 300, 700 − 300) = (400, 400); (I, N) = (420 − 300, 420) = (120, 420); (N, I) = (420, 120); (N, N) = (150, 150).</p><p>Frente a I: N da 420 &gt; 400. Frente a N: N da 150 &gt; 120. N es dominante; el equilibrio es (N, N) = (150, 150).</p><ul><li>(A) Verdadera. (400, 400) mejora a los dos, pero en (I, I) cada municipio gana desviándose (420 &gt; 400).</li><li>(B) Falsa. Pareto no mira la suma: de (150, 150) a (420, 120) el municipio 2 empeora.</li><li>(C) Falsa. El equilibrio no maximiza el pago conjunto: es un dilema del prisionero.</li></ul><p>Respuesta <strong>A</strong>.</p>`,
            },
            {
                t: "t6",
                q: String.raw`Dos food trucks eligen simultáneamente dónde instalarse: Playa (P) o Centro (C). Si van al mismo lugar se reparten poca clientela. Beneficios diarios (truck 1, truck 2):<br><table><tr><th></th><th>2: P</th><th>2: C</th></tr><tr><th>1: P</th><td>(3, 3)</td><td>(8, 6)</td></tr><tr><th>1: C</th><td>(7, 9)</td><td>(2, 2)</td></tr></table>¿Cuál afirmación es correcta?`,
                opts: [
                    String.raw`El juego no tiene equilibrio de Nash, porque los intereses de los dos trucks son opuestos.`,
                    String.raw`(P, C) y (C, P) son equilibrios de Nash; si pueden acordar, el truck 2 podría pagarle al truck 1 entre 1 y 3 para quedar en (C, P), y ambos mejorarían respecto de (P, C).`,
                    String.raw`Playa es estrategia dominante para los dos trucks, porque es donde más ganan cuando el otro va al Centro.`,
                ],
                ans: 1,
                sol: String.raw`<p>(P, C): el 1 en C obtiene 2 &lt; 8 y el 2 en P obtiene 3 &lt; 6. Es Nash. (C, P): el 1 en P obtiene 3 &lt; 7 y el 2 en C obtiene 2 &lt; 9. Es Nash. (P, P) y (C, C) no lo son.</p><p>De (8, 6) a (7, 9): el 1 pierde 1 y el 2 gana 3. El 2 puede compensar al 1 con un monto entre 1 y 3 y los dos quedan mejor.</p><p>(A) Falsa: hay dos equilibrios, en las celdas cruzadas (como la división del trabajo del libro). (C) Falsa: si el otro va a Playa, cada uno prefiere Centro (7 &gt; 3 para el 1; 6 &gt; 3 para el 2). Respuesta <strong>B</strong>.</p>`,
            },
            {
                t: "t7",
                q: String.raw`En un juego del ultimátum por $ 600, la receptora acepta cualquier oferta de al menos $ 180 y rechaza las menores. ¿Cuál afirmación es correcta?`,
                opts: [
                    String.raw`Si la proponente ofrece $ 180, necesariamente tiene preferencias sociales, porque una homo economicus ofrecería el mínimo posible.`,
                    String.raw`Una receptora homo economicus también rechazaría $ 100, porque es menos de lo que le corresponde por justicia.`,
                    String.raw`Si la proponente solo busca su propio pago y conoce el umbral, ofrece $ 180 y se queda con $ 420; al rechazar ofertas menores, la receptora muestra que está dispuesta a perder dinero para castigar una oferta injusta.`,
                ],
                ans: 2,
                sol: String.raw`<p>La proponente egoísta maximiza su pago sujeto a que acepten: ofrece exactamente el umbral, $ 180, y se queda con \( 600 - 180 = 420 \). Rechazar, por ejemplo, $ 150 le cuesta $ 150 a la receptora: es una preferencia social (reciprocidad o aversión a la desigualdad).</p><p>(A) Falsa: ofrecer más del mínimo puede ser pura estrategia, por miedo al rechazo. (B) Falsa: una homo economicus acepta cualquier monto positivo, porque rechazar le da 0. Respuesta <strong>C</strong>.</p>`,
            },
            {
                t: "t8",
                q: String.raw`Bruno es dueño de la tierra y le ofrece a Ángela un contrato de trabajo de "tómalo o déjalo", eligiendo las horas donde TMS = TMT. ¿Cuál afirmación es correcta?`,
                opts: [
                    String.raw`Ángela obtiene una renta económica positiva, porque acepta el contrato voluntariamente.`,
                    String.raw`Si mejora la opción de reserva de Ángela (por ejemplo, un empleo mejor pago en otro lugar), con el mismo tipo de contrato Bruno se queda con menos grano, y la asignación sigue siendo Pareto eficiente.`,
                    String.raw`El trabajo forzoso nunca puede ser Pareto eficiente, porque Ángela trabaja obligada.`,
                ],
                ans: 1,
                sol: String.raw`<ul><li>(A) Falsa. Con tómalo o déjalo, Bruno la deja exactamente sobre su curva de reserva: a Ángela le da igual aceptar o no, así que su renta económica es 0. Aceptar voluntariamente no implica ganar renta.</li><li>(B) Verdadera. Si la curva de reserva sube, Bruno tiene que darle más grano para que acepte y le queda menos. Como sigue eligiendo horas donde TMS = TMT, la asignación sigue siendo eficiente: cambia la distribución, no la eficiencia.</li><li>(C) Falsa. En el trabajo forzoso Bruno también elige TMS = TMT sobre la curva de supervivencia: es Pareto eficiente, aunque injusto.</li></ul><p>Respuesta <strong>B</strong>.</p>`,
            },
            {
                t: "t8",
                q: String.raw`El gráfico de Ángela y Bruno (tiempo libre en el eje horizontal, trigo en el vertical) muestra dos curvas de indiferencia de Ángela: CI<sub>1</sub> y CI<sub>2</sub>, esta última más alta. Se marcan cuatro asignaciones:<br><table><tr><th>Asignación</th><th>Tiempo libre (h)</th><th>Producción</th><th>Ángela</th><th>Bruno</th><th>Curva de Ángela</th></tr><tr><td>G</td><td>14</td><td>20</td><td>9</td><td>11</td><td>CI<sub>1</sub></td></tr><tr><td>H</td><td>14</td><td>20</td><td>12</td><td>8</td><td>CI<sub>2</sub></td></tr><tr><td>J</td><td>17</td><td>16</td><td>8</td><td>8</td><td>CI<sub>2</sub></td></tr><tr><td>K</td><td>17</td><td>16</td><td>6</td><td>10</td><td>CI<sub>1</sub></td></tr></table>¿Cuál afirmación es correcta?`,
                opts: [
                    String.raw`H es una mejora paretiana respecto de J, porque se producen 4 fanegas más.`,
                    String.raw`J es una mejora paretiana respecto de K, porque Ángela pasa a una curva de indiferencia más alta.`,
                    String.raw`G es una mejora paretiana respecto de K.`,
                ],
                ans: 2,
                sol: String.raw`<ul><li>(A) Falsa. H y J están en CI<sub>2</sub> (Ángela indiferente) y Bruno recibe 8 en ambas. Nadie mejora: una producción mayor no alcanza si no mejora a nadie.</li><li>(B) Falsa. Ángela mejora (de CI<sub>1</sub> a CI<sub>2</sub>), pero Bruno baja de 10 a 8.</li><li>(C) Verdadera. G y K están en CI<sub>1</sub> (Ángela indiferente, aunque trabaje 3 horas más en G, recibe más grano) y Bruno sube de 10 a 11.</li></ul><p>Respuesta <strong>C</strong>.</p>`,
            },
            {
                t: "t8",
                q: String.raw`Bruno le ofrece a Ángela un contrato de "tómalo o déjalo": elige las horas y le paga lo justo para dejarla en su curva de indiferencia de reserva (si rechaza, Bruno obtiene 0). Se sabe:<br><table><tr><th>Horas de trabajo</th><th>Producción total (fanegas)</th><th>Grano mínimo que Ángela acepta por esas horas</th></tr><tr><td>6</td><td>15</td><td>5</td></tr><tr><td>8</td><td>19</td><td>6</td></tr><tr><td>10</td><td>22</td><td>8</td></tr><tr><td>12</td><td>24</td><td>11</td></tr></table>¿Cuál afirmación es correcta?`,
                opts: [
                    String.raw`Bruno propone 10 horas y le paga 8 fanegas; la renta económica de Bruno es 14 y la de Ángela es 0.`,
                    String.raw`Bruno propone 12 horas porque ahí la producción es máxima; le paga 11 fanegas y se queda con 13.`,
                    String.raw`Bruno propone 10 horas y le paga 11 fanegas, la mitad de la producción, para que Ángela acepte.`,
                ],
                ans: 0,
                sol: String.raw`<p>Lo que le queda a Bruno = producción − grano mínimo: 6 h → 10; 8 h → 13; 10 h → 14; 12 h → 13. Elige 10 h: paga 8 y se queda con 14.</p><p>Su renta es 14 (su reserva es 0); la de Ángela es 0, porque queda sobre su curva de reserva.</p><p>Lectura marginal (equivale a TMS = TMT): de 8 a 10 h la producción sube 3 y lo que pide Ángela sube 2 (conviene); de 10 a 12 h la producción sube 2 y lo que pide sube 3 (no conviene).</p><p>(B) Maximizar la producción no maximiza lo de Bruno. (C) Bruno no reparte a medias: paga solo lo mínimo. Respuesta <strong>A</strong>.</p>`,
            },
        ],
    },
];

export default models;
