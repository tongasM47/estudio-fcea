# Introducción a la Microeconomía · Unidad 6: U4 · Teoría de juegos: estrategias dominantes, Nash y dilemas sociales

Material de estudio para la 1ª revisión de octubre 2026 (FCEA-UDELAR). TODO el contenido de este documento sale exclusivamente del material de la cátedra (notas, teóricos, diapositivas, guías, ejercicios y soluciones oficiales publicados en EVA). No hay que agregar conceptos, autores, ejemplos ni criterios que no estén acá.

Fuente de la cátedra: Capítulo 4, secc. 4.1 a 4.6 (pág. 2-29); 1ª revisión mayo 2026 V1, preg. 4 a 6 (letra y solución)

Peso en la prueba según los parciales anteriores: 27% del puntaje, prioridad imprescindible. 3 de 10 preguntas en mayo (P4, P5, P6) y 1 de las 4 de U1-U5 en julio y en agosto. En todas las versiones.

## Explicación simple
Dos compañeras hacen un trabajo en grupo. Cada una decide sin saber qué hace la otra. Si hay una jugada que te conviene hagas lo que haga la otra, esa es tu estrategia dominante: la jugás sí o sí.
A veces esa jugada lleva a algo bueno para las dos (la "mano invisible"). Otras veces, cada una hace lo que le conviene y terminan las dos peor que si hubieran cooperado: ese es el dilema del prisionero, como dos pescadores que sobrepescan el mismo lago hasta que no queda nada. Y otras veces hay varios resultados estables posibles y el problema es ponerse de acuerdo en cuál, aunque cada uno prefiera uno distinto.

## Explicación para el parcial
Elementos de un juego

Jugadores, estrategias (acciones posibles) y pagos (lo que obtiene cada uno según la combinación de estrategias). Se representa con una matriz de pagos donde cada celda es (pago de fila, pago de columna). En los juegos con matriz del capítulo las decisiones son simultáneas (nadie ve lo que eligió el otro) y el juego se juega una sola vez (no repetido).

Mejor respuesta y estrategia dominante

La mejor respuesta es la estrategia que da el mayor pago dada la estrategia del otro. Una estrategia dominante es la mejor respuesta a todas las estrategias del otro. Si los dos tienen estrategia dominante, el resultado es un equilibrio en estrategias dominantes.

Método práctico: marcá el mejor pago de cada jugador frente a cada estrategia del rival. Si un jugador tiene sus marcas siempre en la misma fila (o columna), esa es su estrategia dominante.

Equilibrio de Nash

Un equilibrio de Nash es una combinación de estrategias en la que cada jugador está jugando su mejor respuesta a lo que hace el otro: nadie gana cambiando solo. En la matriz: la celda donde ambos pagos están marcados. Todo equilibrio en dominantes es de Nash, pero puede haber Nash sin dominantes, y más de un Nash.

Mano invisible vs dilema social

- Juego de la mano invisible: tiene un único equilibrio de Nash y es Pareto eficiente; persiguiendo su interés propio los jugadores llegan al resultado que es mejor para todos (ej. arroz y yuca de Anil y Bala; en la revisión, el trabajo en grupo con pagos (3, 3) donde esforzarse es dominante).
- Dilema social: acciones que maximizan el beneficio individual llevan a un resultado peor para todos. El caso típico es el dilema del prisionero: cada uno tiene una estrategia dominante (no cooperar), pero el equilibrio es Pareto ineficiente: si ambos cooperaran, los dos estarían mejor. Ejemplo: dos productoras de arroz con una represa: intensivo es dominante, terminan en (500, 500) cuando (1.000, 1.000) era posible.

Ejemplos de dilemas sociales del libro: cambio climático, atascos de tráfico, uso excesivo de antibióticos, sobreexplotación de recursos comunes como las poblaciones de peces ("la tragedia de los comunes" de Hardin), limpiar la cocina compartida o el trabajo en grupo (free riders).

Varios equilibrios de Nash y conflicto de intereses

Hay juegos con dos equilibrios de Nash. A veces los dos jugadores prefieren el mismo (división del trabajo de Anil y Bala, donde la economía puede quedar "atascada" en el peor), y a veces cada jugador prefiere uno distinto (Astrid y Bettina con Java o C++): conflicto de intereses. Con la información del juego no se puede predecir cuál ocurre. Ej.: pagos (4, 3) y (3, 7). A prefiere el primero, B el segundo. Si pueden acordar antes, puede haber una transferencia: pasar de (4, 3) a (3, 7) le cuesta 1 a A y le da 4 a B, así que B puede compensar a A con algo entre 1 y 4 y los dos quedan mejor. La transferencia va de quien más gana hacia quien pierde.

Resolver dilemas sociales

El libro menciona políticas de gobierno (cuotas de pesca de bacalao en el Atlántico Norte, impuesto a los vertederos en el Reino Unido, cobro de las bolsas plásticas en Uruguay con la Ley 19.655), instituciones creadas por comunidades locales (el Tribunal de las Aguas de Valencia) y las preferencias sociales (tema siguiente). En el dilema del prisionero de Anil y Bala, el mal resultado viene de que no valoran el pago del otro, no hay forma de hacer pagar al que no trabaja por el daño causado y no pueden negociar un acuerdo.

## Cómo se resuelve en el parcial
- Escribí la matriz con (fila, columna).
- Para cada estrategia del rival, marcá la mejor respuesta de cada jugador.
- ¿Un jugador tiene siempre la misma mejor respuesta? Es dominante.
- Celdas con ambas marcas = equilibrios de Nash.
- Chequeá Pareto: ¿hay otra celda donde los dos estén al menos igual y uno mejor? Si sí, el equilibrio es ineficiente (dilema).
- Si hay dos Nash: ¿quién prefiere cuál? La transferencia va del que gana más al cambiar hacia el que pierde.

## Trampas típicas
- Leer los pagos al revés: el primer número es del jugador de las filas.
- Decir que un equilibrio es Nash porque "maximiza la suma": Nash es de mejores respuestas individuales.
- Afirmar que el equilibrio en dominantes siempre es Pareto eficiente: en el dilema del prisionero no lo es.
- Confundir "no hay estrategia dominante" con "no hay equilibrio de Nash".
- Poner la transferencia al revés: paga quien gana al moverse al equilibrio que prefiere.

## Ejercicio resuelto
Letra: Dos pescadores eligen Moderado (M) o Intensivo (I). Pagos (fila, columna): (M,M) = (6,6); (M,I) = (2,8); (I,M) = (8,2); (I,I) = (3,3). ¿Estrategias dominantes? ¿Nash? ¿Es eficiente?

Solución: Fila: si columna juega M, I da 8 > 6; si juega I, I da 3 > 2. I es dominante. Por simetría también para columna.
Equilibrio en estrategias dominantes (y de Nash): (I, I) con pagos (3, 3).
No es Pareto eficiente: en (M, M) ambos obtienen 6 > 3. Es un dilema del prisionero.

## Cómo aparece en la prueba
- P4 (rev 1/1): Armar la matriz de pagos a partir de un relato y buscar estrategias dominantes. Un relato con costos y beneficios (esfuerzo, culpa, nota) que tenés que pasar vos a pagos netos. Consejo: Armá la matriz en el borrador antes de leer las opciones. Pago neto = beneficio − costo propio. Chequeá la dominancia comparando fila contra fila para cada columna.
- P5 (rev 1/1 · ex 2/2): Dilema del prisionero y eficiencia de Pareto. Juego con estrategia dominante que lleva a un resultado ineficiente (represa, emisiones, tecnología contaminante). Preguntan si el equilibrio es Pareto eficiente y qué asignación lo Pareto-domina. Consejo: Pareto no suma pagos: una opción que dice "mejora de Pareto porque el total es mayor" es falsa si alguien empeora. Ser equilibrio en dominantes no implica ser eficiente.
- P6 (rev 1/1 · ex 1/2): Varios equilibrios de Nash, conflicto de intereses y transferencias. Matriz con dos equilibrios de Nash que cada jugador prefiere distinto; preguntan quién podría compensar a quién para coordinar. Consejo: Calculá cuánto pierde uno y cuánto gana el otro al pasar de un equilibrio al otro. Solo puede pagar el que gana más de lo que el otro pierde, y el monto va entre esas dos cifras.

## Subtema: Juegos y matriz de pagos: armarla desde un relato
Fuente de la cátedra: Capítulo 4, secc. 4.2 (pág. 5-9) y 4.4 (juego del equipo de trabajo, pág. 16-18); 1ª revisión mayo 2026 V1, preg. 4

Vos y tu hermano tienen que decidir, sin hablar, si ordenan el cuarto. Lo que te pasa a vos depende de lo que hagas vos y también de lo que haga él. Para pensarlo, dibujás una tabla con cuatro casilleros: los dos ordenan, solo vos, solo él, ninguno. En cada casillero anotás cuánto le gusta el resultado a cada uno, restando el cansancio de ordenar. Esa tabla es la matriz de pagos, y con ella ya podés adivinar qué va a hacer cada uno.

Un juego describe una interacción estratégica: lo que obtiene cada uno depende de lo que hacen todos. Tiene tres elementos: jugadores, estrategias (acciones posibles) y pagos para cada combinación de estrategias. En el capítulo: juegos simultáneos y no repetidos (de una partida), en los que los jugadores conocen los pagos.

En la matriz de pagos cada celda es (pago de la fila; pago de la columna).

Armado desde un relato (tipo P4): pago neto de cada jugador = beneficio que recibe − costo propio.

Ejemplo: esforzarse cuesta 3 y no esforzarse genera culpa que cuesta 2. Nota valorada en 8 si ambas se esfuerzan, 5 si solo una, 2 si ninguna.

 | B: Esforzarse | B: No | 

A: Esforzarse | (8 − 3; 8 − 3) = (5; 5) | (5 − 3; 5 − 2) = (2; 3) | 

A: No | (3; 2) | (2 − 2; 2 − 2) = (0; 0) | 

Así arma el libro el juego del equipo de trabajo de Anil y Bala: ingresos de 12 si trabajan los dos, 6 si trabaja uno y 0 si ninguno, repartidos a medias, y una desutilidad de 4 para quien trabaja.

Errores típicos: restar el costo del esfuerzo a quien no se esforzó, olvidar la culpa, o poner en la celda asimétrica los pagos cruzados (el que no se esfuerza es el que tiene el pago más alto en esa celda, 3, no 2).

Armá la matriz en el borrador antes de leer las opciones. Las opciones suelen ser correctas para una matriz mal armada.

Ideas clave:
- Jugadores, estrategias y pagos
- Celda = (pago fila; pago columna)
- Pago neto = beneficio − costo propio (esfuerzo o culpa)
- Armá la matriz antes de leer las opciones

## Subtema: Estrategia dominante y mano invisible
Fuente de la cátedra: Capítulo 4, secc. 4.3 y 4.4 (pág. 10-16)

Hay decisiones que son buenas pase lo que pase. Si llueve o no llueve, llevar el celular cargado siempre te conviene. En un juego, una estrategia dominante es así: es tu mejor jugada hagas lo que hagas el otro. Si los dos jugadores tienen una jugada así, el resultado es fácil de predecir: cada uno la juega. A veces ese resultado es bueno para ambos, como si una mano invisible los guiara; otras veces es malo para los dos.

La mejor respuesta es la estrategia que da el mayor pago dada una estrategia del otro. Una estrategia dominante es la mejor respuesta a todas las estrategias del otro.

Método: para el jugador fila, compará sus pagos columna por columna (fila contra fila con la columna fija). Si una fila gana en todas las columnas, es dominante. Para el jugador columna, compará fila por fila.

Si ambos tienen estrategia dominante, el resultado es un equilibrio en estrategias dominantes (que también es de Nash).

En la matriz del trabajo en grupo (esforzarse 5 contra 3 si la otra se esfuerza; 2 contra 0 si no): esforzarse es dominante para las dos y el equilibrio (5; 5) es el mejor resultado posible para ambas. Un juego con un único equilibrio de Nash que es Pareto eficiente se llama juego de la mano invisible: persiguiendo el interés propio se llega al mejor resultado para todos.

- Puede pasar que solo un jugador tenga dominante: entonces no hay equilibrio en dominantes, pero puede haber un Nash (el otro responde a la dominante).

- Que exista una estrategia dominante no asegura un buen resultado: ver dilema del prisionero.

- "Lo mejor para mí es no esforzarme y que el otro sí" no impide que esforzarse sea dominante: la dominancia compara mis opciones dada la del otro.

Ideas clave:
- Dominante: mejor respuesta a todo lo que haga el otro
- Comparar fila contra fila con la columna fija
- Ambos con dominante ⇒ equilibrio en dominantes
- Mano invisible: único Nash y Pareto eficiente

Ejemplo: Esforzarse cuesta 2, no esforzarse genera culpa de 1. Nota valorada 5 si ambas se esfuerzan, 3 si solo una, 1 si ninguna. ¿Hay estrategia dominante?
Resolución: Pagos: (E, E) = (3; 3); (E, N) = (1; 2); (N, E) = (2; 1); (N, N) = (0; 0). Si la otra se esfuerza: esforzarse 3 > 2. Si no: esforzarse 1 > 0. Esforzarse es dominante para ambas y el equilibrio (3; 3) es el mejor para las dos.

## Subtema: Equilibrio de Nash
Fuente de la cátedra: Capítulo 4, secc. 4.3 y 4.6 (pág. 10-14 y 24-29)

Dos amigos eligen a qué heladería ir sin poder hablarse. Un equilibrio de Nash es una situación en la que, mirando lo que hizo el otro, ninguno se arrepiente de su elección. Si los dos fueron a la misma heladería y querían estar juntos, ninguno quiere cambiar: es un equilibrio. Puede haber más de uno: ir los dos a la de la esquina, o los dos a la del centro. Y puede ser que ninguno de los dos tenga una "jugada siempre mejor", pero igual haya equilibrio.

Un equilibrio de Nash es una combinación de estrategias en la que cada jugador juega su mejor respuesta a lo que hace el otro: nadie gana cambiando unilateralmente.

Método de marcar:

- Para cada columna, marcá el mayor pago del jugador fila.

- Para cada fila, marcá el mayor pago del jugador columna.

- Las celdas con las dos marcas son equilibrios de Nash.

- Todo equilibrio en dominantes es Nash; no todo Nash es en dominantes.

- Puede haber varios Nash (el juego del conductor, la división del trabajo de Anil y Bala, Java o C++ de Astrid y Bettina) y juegos sin dominantes con un solo Nash.

- Un Nash puede ser Pareto ineficiente (dilema del prisionero).

 | Bala: Arroz | Bala: Mandioca | 

Anil: Arroz | (2; 2) | (6; 5) | 

Anil: Mandioca | (5; 6) | (1; 1) | 

Como en la división del trabajo del libro (figura 4.8): si Bala cultiva arroz, a Anil le conviene mandioca (5 > 2); si Bala cultiva mandioca, arroz (6 > 1). Lo mismo para Bala. Nadie tiene dominante y hay dos Nash: (Arroz, Mandioca) y (Mandioca, Arroz).

Ideas clave:
- Nash: cada uno hace su mejor respuesta; nadie gana cambiando solo
- Marcá mejores respuestas; celda con dos marcas = Nash
- Puede haber varios Nash y Nash sin dominantes
- Dominantes ⇒ Nash, pero no al revés

Ejemplo: A elige Arriba o Abajo; B elige Izquierda o Derecha. (Arr, Izq) = (4; 3); (Arr, Der) = (2; 1); (Ab, Izq) = (3; 0); (Ab, Der) = (1; 2). Buscá dominantes y Nash.
Resolución: A: Arriba es dominante (4 > 3 y 2 > 1). B: si A juega Arriba, Izquierda (3 > 1); si Abajo, Derecha (2 > 0): B no tiene dominante. Único Nash: (Arriba, Izquierda) = (4; 3). No es equilibrio en estrategias dominantes, porque B no tiene dominante.

## Subtema: Dilema del prisionero y eficiencia de Pareto
Fuente de la cátedra: Capítulo 4, secc. 4.1, 4.4 y 4.5 (pág. 2-5 y 15-24); 1ª revisión mayo 2026 V1, preg. 5

Dos pescadores comparten una laguna. Si los dos pescan poco, los peces se reproducen y a los dos les va bien. Pero cada uno piensa: "si el otro pesca poco, yo pesco mucho y gano más; si el otro pesca mucho, mejor que yo también pesque mucho, así no me quedo sin nada". Entonces los dos pescan mucho, la laguna se vacía y a ambos les va peor que si se hubieran cuidado. Cada uno hizo lo mejor para sí, y el resultado fue malo para los dos: eso es un dilema del prisionero.

Un dilema social es una situación en la que las acciones de individuos que persiguen sus propios objetivos, de forma independiente, llevan a un resultado inferior a otro que habrían logrado actuando de manera conjunta. El caso típico es el dilema del prisionero (Thelma y Louise; el equipo de trabajo de Anil y Bala):

- Cada jugador tiene una estrategia dominante (no cooperar: intensivo, continuar emitiendo, contaminar).

- El equilibrio (en dominantes, y por lo tanto de Nash) es Pareto ineficiente: si ambos cooperaran, los dos estarían mejor.

 | B: Moderada | B: Intensiva | 

A: Moderada | (8; 8) | (3; 12) | 

A: Intensiva | (12; 3) | (5; 5) | 

Intensiva es dominante (12 > 8 y 5 > 3). Equilibrio (5; 5). (Moderada, Moderada) = (8; 8) lo Pareto domina: ambos mejoran.

Trampas de las opciones:

- "(12; 3) es mejora de Pareto sobre (5; 5) porque la suma es mayor (15 > 10)": falso, B empeora. Pareto no suma.

- "El equilibrio es óptimo de Pareto porque es en dominantes": falso, ser equilibrio no implica eficiencia.

- "(8; 8) Pareto domina pero es equilibrio": falso, a cada uno le conviene desviarse a intensiva.

Qué lleva al mal resultado, según el libro: los jugadores no valoran el pago del otro, no hay forma de hacer pagar al que no coopera por el daño causado y no pueden negociar un acuerdo. Si se supera alguno de esos problemas (preferencias sociales, políticas de gobierno, instituciones locales, acuerdos), a veces se alcanza el resultado preferido por ambos.

Ideas clave:
- Dominante individual ⇒ resultado malo para ambos
- El equilibrio es Pareto ineficiente
- La cooperación mutua Pareto domina al equilibrio pero no es Nash
- Pareto no compara sumas

## Subtema: Varios equilibrios de Nash y conflicto de intereses
Fuente de la cátedra: Capítulo 4, secc. 4.6 (pág. 24-29)

Dos amigos quieren ir juntos al cine, pero uno prefiere una de acción y el otro una comedia. Lo peor para los dos es terminar cada uno en una sala distinta, solos. Hay dos resultados buenos: los dos en la de acción o los dos en la comedia. Pero cada uno prefiere uno distinto. Eso es un problema de coordinación con conflicto de intereses: les conviene ponerse de acuerdo, pero discuten en cuál. Otras veces el problema es al revés: conviene hacer cosas distintas, como dos puestos de feria que no quieren vender lo mismo.

Hay juegos sin estrategias dominantes y con dos equilibrios de Nash (secc. 4.6):

- Sin conflicto: manejar por la derecha o por la izquierda da igual, siempre que todos elijan lo mismo.

- Los dos prefieren el mismo equilibrio: en la división del trabajo de Anil y Bala conviene cultivar cosas distintas y ambos prefieren que cada uno cultive lo que mejor se da en su tierra. Aun así, decidiendo por separado, la economía puede quedar "atascada" en el equilibrio peor (la tierra de Bala siguió con mandioca porque su padre era hábil con ese cultivo).

- Conflicto de intereses: cada jugador prefiere un equilibrio distinto (Astrid y Bettina: Java o C++).

 | B: Tec 1 | B: Tec 2 | 

A: Tec 1 | (7; 3) | (1; 0) | 

A: Tec 2 | (0; 1) | (4; 8) | 

Nash: (Tec 1, Tec 1) = (7; 3) y (Tec 2, Tec 2) = (4; 8). A prefiere el primero; B, el segundo. Como dice el libro para Astrid y Bettina, con la información del juego no se puede predecir cuál ocurre; la historia, las normas sociales o un acuerdo previo pueden influir.

Ejemplo con los equilibrios en las celdas cruzadas: dos compañeras de casa; limpiar cuesta 3, casa limpia por ambas vale 6, por una 4, ninguna 0. Pagos: (L, L) = (3; 3), (L, N) = (1; 4), (N, L) = (4; 1), (N, N) = (0; 0). Nash: (L, N) y (N, L). Cada una prefiere el equilibrio en el que limpia la otra.

Ideas clave:
- Sin dominantes y dos Nash
- Equilibrios en la diagonal (elegir lo mismo) o cruzados (elegir distinto)
- Conflicto de intereses: cada uno prefiere un equilibrio distinto
- El modelo no dice cuál equilibrio ocurre

## Subtema: Transferencias entre equilibrios
Fuente de la cátedra: Solución 1ª revisión mayo 2026 V1, preg. 6; Capítulo 4, secc. 4.6 (pág. 24-29)

Volvamos a los amigos del cine. Supongamos que para uno la comedia es apenas un poco peor que la de acción, pero para el otro la comedia es muchísimo mejor. Entonces el que ama la comedia puede decir: "vamos a la comedia y te pago la entrada y el pochoclo". Si lo que paga es más de lo que el otro pierde y menos de lo que él gana, los dos quedan mejor. Solo puede pagar el que gana más de lo que el otro pierde.

Con dos Nash y conflicto de intereses, si pueden acordar antes de jugar, uno puede compensar al otro para ir a su equilibrio preferido.

- Calculá, al pasar del equilibrio E1 al E2, cuánto gana uno y cuánto pierde el otro.

- La transferencia es posible si la ganancia del que gana supera la pérdida del otro.

- El que gana paga; el monto  T  cumple: pérdida del otro <  T  < ganancia propia.

Con la matriz (Tec 1, Tec 1) = (7; 3) y (Tec 2, Tec 2) = (4; 8):

- De (7; 3) a (4; 8): A pierde 3, B gana 5. B puede pagarle a A entre 3 y 5. Con  T = 4 : A queda con 8 y B con 4, ambos mejor que en (7; 3).

- De (4; 8) a (7; 3): A gana 3 y B pierde 5. A no puede compensar a B.

Conclusión: existe una transferencia posible de B a A. Con la matriz de la revisión, (4; 3) y (3; 7): A pierde 1 y B gana 4 ⇒ de B a A, entre 1 y 4.

La transferencia no cambia el juego en sí: lleva a los dos al equilibrio con mayor suma de pagos y reparte la ganancia. Si la ganancia de uno es igual a la pérdida del otro, no hay transferencia que mejore estrictamente a ambos.

Ideas clave:
- Paga el que gana al cambiar de equilibrio
- Posible solo si su ganancia supera la pérdida del otro
- Monto entre la pérdida del otro y la ganancia propia
- Se va al equilibrio de mayor suma de pagos

Ejemplo: Nash: (Tec 1, Tec 1) = (6; 3) y (Tec 2, Tec 2) = (2; 4). ¿Hay transferencia posible? ¿De quién a quién y de qué monto?
Resolución: De (2; 4) a (6; 3): A gana 4, B pierde 1. A puede pagarle a B entre 1 y 4 para jugar Tec 1. De (6; 3) a (2; 4): B gana 1 y A pierde 4, B no puede compensar. Transferencia de A a B.
