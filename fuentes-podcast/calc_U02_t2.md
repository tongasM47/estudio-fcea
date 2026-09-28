# Cálculo 1B · Unidad 2: Inyectiva, sobreyectiva, biyectiva (incluye funciones a trozos)

Material de estudio para la 1ª revisión de octubre 2026 (FCEA-UDELAR). TODO el contenido de este documento sale exclusivamente del material de la cátedra (notas, teóricos, diapositivas, guías, ejercicios y soluciones oficiales publicados en EVA). No hay que agregar conceptos, autores, ejemplos ni criterios que no estén acá.

Fuente de la cátedra: Notas C1B 2026, cap. 2, sec. 2.1 (pág. 23-34) y Ejercicios 2.1-2.12 (pág. 41-44); clases virtuales 3 y 4

Peso en la prueba según los parciales anteriores: 13% del puntaje, prioridad alta. A trozos 7/7 más, en 2023, dos de "sobreyectiva si U" (cuadrática y a trozos): 9 de 70. Desde 2024 es una sola pregunta (10%). Ramas: parábola en 6/7, L en 3, e^x en 3, recta en 2.

## Explicación simple
Imaginá un cine: las personas son las  x  y las butacas son los valores  y . La función asigna a cada persona una butaca.
- Inyectiva: nunca se sientan dos personas en la misma butaca.
- Sobreyectiva: no queda ninguna butaca vacía (todas las del codominio se usan).
- Biyectiva: las dos cosas a la vez; cada butaca tiene exactamente una persona.

En el parcial la función está partida en dos pedazos. Tenés que mirar cada pedazo por separado (¿hay dos personas del mismo pedazo en la misma butaca?) y después ver si los dos pedazos se pisan butacas entre ellos, y si entre los dos llenan todo el cine.

## Explicación para el parcial
Definiciones

Sea  f:A\to B .

- Inyectiva: si  x_1\neq x_2  entonces  f(x_1)\neq f(x_2) . Gráficamente: toda recta horizontal corta al gráfico a lo sumo una vez.

- Sobreyectiva: la imagen de  f  es todo el codominio  B . Ojo: depende del codominio que te den, no solo de la fórmula.

- Biyectiva: inyectiva y sobreyectiva. Es exactamente la condición para que exista la inversa  f^{-1}:B\to A .

Herramienta clave: monotonía estricta

Si en un intervalo  f'(x)\gt 0  (o  f'(x)\lt 0 ), entonces  f  es estrictamente creciente (o decreciente) ahí, y por lo tanto inyectiva en ese intervalo. Si además es continua, la imagen del intervalo se obtiene mirando los valores (o límites) en los extremos.

Funciones a trozos  f:\mathbb{R}\to\mathbb{R} 

El molde del parcial es algo como  f(x)=\begin{cases} x^2-2x+1 & x\le 1\\ -L(x) & x\gt 1\end{cases} . Se analiza así:

- Trozo izquierdo: ¿es monótono en su intervalo? Si es una parábola cuyo vértice cae dentro del intervalo, ese trozo ya no es inyectivo y la función entera tampoco. Calculá su imagen  I_1 .

- Trozo derecho: lo mismo, imagen  I_2 . Usá límites en los extremos abiertos ( x\to 1^+ ,  x\to+\infty ).

- Inyectividad global: cada trozo inyectivo y además  I_1\cap I_2=\varnothing . Si las imágenes se superponen, hay dos  x  distintos (uno de cada trozo) con la misma imagen.

- Sobreyectividad:  I_1\cup I_2  tiene que ser todo el codominio (en general  \mathbb{R} ). Si falta un pedacito, por ejemplo  [-1,0) , no es sobreyectiva.

Ejemplos de los parciales

Función |  I_1  |  I_2  | Resultado | 

 (x-1)^2  si  x\le1 ;  -L(x)  si  x\gt1  |  [0,+\infty) , decrece |  (-\infty,0) , decrece | biyectiva | 

 x^2-2x  si  x\le0 ;  -e^x  si  x\gt0  |  [0,+\infty)  |  (-\infty,-1)  | inyectiva, no sobre (falta  [-1,0) ) | 

 e^x  si  x\le0 ;  L(x)  si  x\gt0  |  (0,1]  |  \mathbb{R}  | sobre, no inyectiva | 

 -(x+1)^2  si  x\le1 ;  L(x)  si  x\gt1  |  (-\infty,0] , vértice en  -1  |  (0,+\infty)  | sobre, no inyectiva | 

Variante: a veces te piden el codominio  U  que hace sobreyectiva a  f . La respuesta es justamente  U=I_1\cup I_2 .

## Cómo se resuelve en el parcial
- Escribí cada trozo y su intervalo.
- En cada trozo: derivá (o ubicá el vértice si es parábola). ¿El signo de la derivada se mantiene en todo el intervalo? Si el vértice cae adentro, no es inyectiva: tachá "inyectiva" y "biyectiva".
- Calculá la imagen de cada trozo evaluando en el extremo cerrado y tomando límite en los abiertos y en  \pm\infty .
- Inyectiva sii cada trozo es inyectivo y las imágenes no se tocan.
- Sobreyectiva sii la unión de las imágenes es el codominio.
- Elegí la opción que coincide.

## Trampas típicas
- Olvidar que el punto de corte pertenece a un solo trozo: en  x\le1  el 1 va a la izquierda, entonces  f(1)  se calcula con la fórmula de la izquierda.
- Confundir cerrado y abierto en las imágenes:  -e^x  con  x\gt0  da  (-\infty,-1) , el  -1  NO se alcanza.
- Creer que si cada trozo es creciente la función es inyectiva: si las imágenes se pisan, no lo es.
- Usar la imagen de toda la parábola en vez de la del trozo restringido.
- Pensar que "crece y decrece" no importa: una función que primero crece y luego decrece (o que cambia de sentido entre trozos) puede seguir siendo inyectiva solo si las imágenes no se pisan.

## Ejercicio resuelto
Letra: f:\mathbb{R}\to\mathbb{R} ,  f(x)=\begin{cases} x^2-2x & x\le 0\\ -e^x & x\gt 0\end{cases} . ¿Es inyectiva? ¿Sobreyectiva?

Solución: Trozo 1 ( x\le0 ):  f'(x)=2x-2\lt0  para  x\le0 : decreciente.  f(0)=0  y cuando  x\to-\infty ,  f\to+\infty . Imagen  [0,+\infty) .
Trozo 2 ( x\gt0 ):  -e^x  es decreciente. Cuando  x\to0^+ ,  -e^x\to-1  (sin alcanzarlo); cuando  x\to+\infty ,  \to-\infty . Imagen  (-\infty,-1) .
Las imágenes no se pisan y cada trozo es inyectivo: inyectiva. La unión es  (-\infty,-1)\cup[0,+\infty) , falta  [-1,0) : no sobreyectiva.

## Cómo aparece en la prueba
- P4 (7/7): Función a trozos: inyectiva / sobreyectiva. f:\mathbb R\to\mathbb R a trozos (casi siempre una parábola y una rama con e^x, L o recta). Opciones fijas: ni iny. ni sobre / iny. no sobre / no iny. sí sobre / biyectiva. Correctas V1: biyectiva 2, iny. no sobre 2, no iny. sí sobre 3, ninguna vez "ni ni". Consejo: Sacá el recorrido de cada rama (vértice de la parábola, límites en \pm\infty y en el punto de corte, abierto o cerrado). Si los recorridos se pisan, no es inyectiva; si su unión no es \mathbb R, no es sobreyectiva. Ojo con el vértice dentro del trozo: ahí la rama sola ya no es inyectiva.

## Subtema: Inyectiva: definición y cómo probarla
Fuente de la cátedra: Notas C1B 2026, sec. 2.1.2, Definición 2.3 y Teorema 2.1 (pág. 27-30); clase virtual 4

Pensá en un salón de clase donde cada alumno se sienta en una silla. La función es inyectiva si nunca hay dos alumnos en la misma silla: cada silla ocupada tiene un único dueño. Si encontrás dos alumnos distintos sentados en la misma silla, se terminó: no es inyectiva, no hace falta revisar a nadie más. Las sillas vacías no importan para esto (eso es otra propiedad).

f:A\to B  es inyectiva si  x_1\neq x_2 \Rightarrow f(x_1)\neq f(x_2) . La forma equivalente, más cómoda para probar, es  f(x_1)=f(x_2)\Rightarrow x_1=x_2 .

- Para refutar alcanza un contraejemplo: dos puntos distintos con la misma imagen.  x^2  no es inyectiva en  \mathbb R  porque  f(-1)=f(1) .

- Para probar: despejar ( 3x_1-2=3x_2-2\Rightarrow x_1=x_2 ) o, mucho más rápido en el parcial, mostrar que es estrictamente monótona.

- La inyectividad depende del dominio:  x^2  no es inyectiva en  \mathbb R  pero sí en  [0,+\infty) .  \cos  no lo es en  \mathbb R  pero sí en  [0,\pi] .

-  f'(x_0)=0  en un punto aislado no rompe la inyectividad:  x^3  es inyectiva aunque  f'(0)=0 . Lo que la rompe es que  f  cambie de sentido.

Ideas clave:
- f(x_1)=f(x_2)\Rightarrow x_1=x_2
- Un contraejemplo alcanza para decir que no
- Estrictamente monótona implica inyectiva
- Cambiar el dominio puede volverla inyectiva

Ejemplo: ¿Es inyectiva  f(x)=(x-2)^2  en  [1,+\infty) ?
Resolución: No: el vértice  x=2  está adentro, y  f(1)=f(3)=1 . En  [2,+\infty)  sí lo sería.

## Subtema: Sobreyectiva y el papel del codominio
Fuente de la cátedra: Notas C1B 2026, sec. 2.1.1, Definiciones 2.1 y 2.2 (pág. 25-27); clases virtuales 3 y 4; 1ª rev. mayo y octubre 2023 (sobreyectiva si U es)

El codominio es la lista de invitados a una fiesta, y la imagen es la gente que efectivamente vino. La función es sobreyectiva si vinieron todos los de la lista. Fijate que la misma fiesta (la misma fórmula) puede ser un éxito o un fracaso según qué lista hayas escrito: si invitaste de más, falta gente. Por eso no alcanza con mirar la fórmula: hay que mirar qué codominio te dieron.

f:A\to B  es sobreyectiva si su imagen  f(A)  es todo  B ; dicho de otra forma, si para cada  y\in B  la ecuación  f(x)=y  tiene alguna solución en  A .

- Siempre podés hacer sobreyectiva a una función achicando el codominio hasta su imagen:  e^x:\mathbb R\to\mathbb R  no es sobreyectiva,  e^x:\mathbb R\to(0,+\infty)  sí.

- Para calcular la imagen de una continua: monotonía más valores (o límites) en los extremos. En una parábola, el vértice da el mínimo o el máximo.

- Molde de 2023 " f:\mathbb R\to U  es sobreyectiva si  U  es": la respuesta es exactamente la imagen. Ejemplo:  x^2+2x  tiene vértice en  -1  con valor  -1 , así que  U=[-1,+\infty) .

Cuidado con los corchetes: un valor que solo se "acerca" (límite) va abierto; uno que se alcanza en un punto del dominio va cerrado.

Ideas clave:
- Sobreyectiva: imagen = codominio
- Depende del codominio, no solo de la fórmula
- "Sobreyectiva si  U  es":  U  = imagen exacta
- Límite no alcanzado: paréntesis; valor alcanzado: corchete

Ejemplo: ¿Es sobreyectiva  L:(0,+\infty)\to\mathbb R ? ¿Y  \cos:\mathbb R\to[-1,1] ?
Resolución: Las dos sí: la imagen del logaritmo es todo  \mathbb R  y la del coseno es  [-1,1] . El coseno, en cambio, no es inyectiva.

## Subtema: Biyectiva e inversa
Fuente de la cátedra: Notas C1B 2026, sec. 2.1.3 (pág. 30-34), Ejemplos 21, 22 y 28; clase virtual 4

Un baile de parejas perfecto: cada chica baila con exactamente un chico, ningún chico baila con dos, y no queda nadie sentado. Eso es una biyección. Y como las parejas son perfectas, se puede leer al revés: si te dicen el chico, sabés sin dudar cuál es la chica. Esa lectura al revés es la función inversa. Por eso, cuando te preguntan si una función tiene inversa, en realidad te están preguntando si el baile es perfecto.

f:A\to B  es biyectiva si es inyectiva y sobreyectiva. Es exactamente la condición para que exista  f^{-1}:B\to A .

Criterio práctico en  \mathbb R : si  f:\mathbb R\to\mathbb R  es continua, estrictamente monótona y sus límites en  -\infty  y  +\infty  son  \mp\infty  (o  \pm\infty ), es biyectiva. Ejemplos:  x^3 ,  x^3+2x ,  x+e^x .

Volver biyectiva una función: se restringe el dominio a un intervalo donde sea monótona y se toma como codominio su imagen. Así se construyen  \sqrt{x}  (de  x^2  en  [0,+\infty) ),  L  (de  e^x  con codominio  (0,+\infty) ) y  \text{Arctg} .

Función | Biyectiva de | en | 

 e^x  |  \mathbb R  |  (0,+\infty)  | 

 x^2  |  [0,+\infty)  |  [0,+\infty)  | 

 \cos x  |  [0,\pi]  |  [-1,1]  | 

 \text{Arctg}\,x  |  \mathbb R  |  (-\pi/2,\pi/2)  |

Ideas clave:
- Biyectiva = inyectiva + sobreyectiva = tiene inversa
- Continua, estrictamente monótona y con límites  \pm\infty : biyectiva en  \mathbb R
- Restringir dominio y codominio la vuelve biyectiva

Ejemplo: ¿Es biyectiva  f:\mathbb R\to\mathbb R ,  f(x)=x^3+2x ?
Resolución: f'(x)=3x^2+2\gt0 : estrictamente creciente, así que inyectiva. Es continua y va de  -\infty  a  +\infty : sobreyectiva. Biyectiva.

## Subtema: Método gráfico y monotonía
Fuente de la cátedra: Notas C1B 2026, recuadro de la pág. 34 (rectas horizontales y proyección sobre el eje oy) y Teorema 2.1 (pág. 30); clases virtuales 4 y 6

Pasá un láser horizontal por el gráfico, subiéndolo de a poco. Si en alguna altura el láser toca la curva dos veces, la función no es inyectiva. Si en alguna altura no toca nada, no es sobreyectiva. La derivada ayuda a saber cómo se mueve la curva: si es siempre positiva, la curva solo sube, y un láser nunca la puede tocar dos veces.

- Recta horizontal: inyectiva si cada recta  y=c  corta al gráfico a lo sumo una vez; sobreyectiva (sobre  B ) si cada  y=c  con  c\in B  lo corta al menos una vez.

- Derivada: si  f'\gt0  en un intervalo (salvo puntos aislados donde vale 0),  f  es estrictamente creciente ahí, y por lo tanto inyectiva. Lo mismo con  f'\lt0 .

- Si  f'  cambia de signo,  f  sube y baja: no es inyectiva. Ejemplo:  x^3-3x  tiene  f'=3x^2-3 , negativa en  (-1,1) , y  f(0)=f(\sqrt3)=0 .

- Imagen de un intervalo: si  f  es continua y monótona en  (a,b) , la imagen es el intervalo entre  \lim_{x\to a^+}f  y  \lim_{x\to b^-}f , con corchete en los extremos que pertenezcan al dominio.

En el parcial conviene dibujar a mano alzada: con dos o tres valores y hacia dónde va cada rama ya se ve la respuesta.

Ideas clave:
- Recta horizontal: dos cortes = no inyectiva; cero cortes = no sobreyectiva
- f'  de signo constante: inyectiva
- f'  cambia de signo: no inyectiva
- Imagen de intervalo: límites en los extremos

Ejemplo: ¿Es sobreyectiva  f:\mathbb R\to\mathbb R ,  f(x)=x^3-3x ?
Resolución: Sí: es continua, tiende a  -\infty  y a  +\infty , así que toma todos los valores. No es inyectiva porque  f'  cambia de signo.

## Subtema: Funciones a trozos (molde P4)
Fuente de la cátedra: Clase virtual 4 (funciones definidas por intervalos); Notas C1B 2026, Ejercicios 2.2-2.12 (pág. 41-44); 1as revisiones 2023-2026, ejercicio a trozos

Una ruta hecha de dos tramos de empresas distintas. Para que nunca pases dos veces por la misma altura, cada tramo tiene que ir siempre para el mismo lado, y además los dos tramos no pueden compartir alturas. Para que pases por todas las alturas, entre los dos tramos tienen que cubrirlas todas, sin dejar un agujero. Se revisa cada tramo por separado y después se comparan.

Receta para  f:\mathbb R\to\mathbb R  con dos ramas separadas en  x=c :

- Rama izquierda ( x\le c  o  x\lt c ): ¿es monótona? Si es parábola, ¿el vértice cae adentro? Calculá su imagen  I_1 : valor en  c  (cerrado si  c  está incluido, abierto si es límite) y límite en  -\infty .

- Rama derecha: lo mismo, imagen  I_2 , con límite cuando  x\to c^+  (abierto) y cuando  x\to+\infty .

- Inyectiva si cada rama es inyectiva y  I_1\cap I_2=\varnothing .

- Sobreyectiva si  I_1\cup I_2=\mathbb R .

¿Se pisan? | ¿Cubren  \mathbb R ? | Resultado | 

No (y ramas inyectivas) | Sí | biyectiva | 

No | No | inyectiva, no sobreyectiva | 

Sí (o vértice adentro) | Sí | no inyectiva, sí sobreyectiva | 

Sí | No | ni una ni otra | 

Trampa clásica: imágenes que "se tocan" en un solo punto, como  [0,+\infty)  y  (0,+\infty) . Ese 0 no es el problema; el problema es que comparten todo  (0,+\infty) .

Ideas clave:
- Imagen de cada rama con extremos abiertos o cerrados
- Vértice adentro de la rama: no inyectiva
- Imágenes que se pisan: no inyectiva
- Unión distinta de  \mathbb R : no sobreyectiva
- El punto de corte pertenece a una sola rama

Ejemplo: f(x)=e^x  si  x\le0 ;  x+2  si  x\gt0 .
Resolución: I_1=(0,1] ,  I_2=(2,+\infty) . No se pisan: inyectiva. Faltan  (-\infty,0]  y  (1,2] : no sobreyectiva.
