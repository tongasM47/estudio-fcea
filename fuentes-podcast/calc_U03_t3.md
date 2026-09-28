# Cálculo 1B · Unidad 3: Función inversa: despejar, dominio y recorrido, trigonométricas restringidas

Material de estudio para la 1ª revisión de octubre 2026 (FCEA-UDELAR). TODO el contenido de este documento sale exclusivamente del material de la cátedra (notas, teóricos, diapositivas, guías, ejercicios y soluciones oficiales publicados en EVA). No hay que agregar conceptos, autores, ejemplos ni criterios que no estén acá.

Fuente de la cátedra: Notas C1B 2026, sec. 2.2 (pág. 35-39) y sec. 3.2 (pág. 53-55); clases virtuales 5, 6, 8 y 9; 1ª rev. mayo 2026, ej. 1 y 3

Peso en la prueba según los parciales anteriores: 17% del puntaje, prioridad imprescindible. Inversa explícita 7/7 más "invertible si U" con \cos/\text{Arctg} 5/7 (desde 2024 fija): 12 de 70. Para el 5/10 esperá 2 preguntas (20%).

## Explicación simple
Si una función es una receta que convierte ingredientes en torta, la inversa es la "receta al revés": te dan la torta y tenés que decir qué ingredientes usaste. Eso solo se puede hacer si cada torta sale de una única combinación de ingredientes (inyectiva) y si te dan tortas que efectivamente se pueden hacer (sobreyectiva).
Con las funciones trigonométricas pasa algo raro: el coseno repite valores todo el tiempo, como un reloj que marca la misma hora dos veces por día. Para poder "dar vuelta" el reloj, te quedás con un pedazo del día donde cada hora aparece una sola vez. El parcial te da ese pedazo y te pregunta qué horas aparecen en él.

## Explicación para el parcial
Cuándo existe la inversa

 f:A\to B  tiene inversa  f^{-1}:B\to A  si y solo si es biyectiva. En ese caso  f^{-1}(y)=x \iff f(x)=y ,  f^{-1}(f(x))=x  y  f(f^{-1}(y))=y . El dominio de  f^{-1}  es el codominio  B  de  f  y su recorrido es  A .

Cómo se hace en el parcial (molde "hallar  f^{-1} ")

- Verificá que  f  es biyectiva entre los conjuntos dados: estrictamente monótona en  A  y con  f(A)=B . Si la imagen real no coincide con  B , la respuesta es "no es invertible".

- Escribí  y=f(x)  y despejá  x . Esa expresión es  f^{-1}(y) .

- Si al despejar aparece un  \pm  (raíz cuadrada), elegí el signo que hace que el resultado caiga en  A .

Ejemplo:  f:(0,1)\to(-2,-1) ,  f(x)=\sqrt{1-x^2}-2 .  y+2=\sqrt{1-x^2} \Rightarrow (y+2)^2=1-x^2 \Rightarrow x^2=1-(y+2)^2=-y^2-4y-3 . Como  x\in(0,1)  es positivo,  x=\sqrt{-y^2-4y-3} .

Consejo práctico: en múltiple opción podés probar. Tomá un  x  cómodo, calculá  y=f(x)  y fijate cuál opción devuelve ese  x . Por ejemplo con  f(x)=e^{x-1}+2 :  f(1)=3 , y la opción correcta tiene que cumplir  f^{-1}(3)=1 .

Trigonométricas restringidas (molde "¿qué  U  la hace invertible?")

Te dan  f:[a,b)\to U  con  f(x)=\cos x  o  -\cos x  en un intervalo donde es monótona. Ya es inyectiva; lo que falta es que sea sobreyectiva, o sea  U=f([a,b)) . Calculás los valores en los extremos y mirás cuál extremo se incluye:

-  \cos  en  [0,\pi) : va de  1  (incluido) a  -1  (excluido):  U=(-1,1] .

-  \cos  en  [\pi/2,\pi) : de  0  (incluido) a  -1  (excluido):  U=(-1,0] .

-  -\cos  en  [\pi,3\pi/2) :  \cos  va de  -1  a  0 , así que  -\cos  va de  1  (incluido) a  0  (excluido):  U=(0,1] .

La regla es simple: el extremo del intervalo que está cerrado da el valor que está cerrado en  U . Lo importante no es si el número es mayor o menor, sino de qué extremo viene.

Por qué el despeje no alcanza

Muchas veces el despeje "sale" aunque la función no sea invertible, porque el álgebra no sabe nada del dominio y el codominio. Por eso el orden correcto es primero chequear que la función es biyectiva entre los conjuntos que te dan, y recién después despejar. Si el codominio que figura en la letra es más grande que la imagen real, la respuesta correcta es "no es invertible", aunque haya una opción con una fórmula que parece bien. En los parciales recientes siempre fue invertible, pero la opción "no es invertible" está ahí para que no la descartes sin pensar.

## Cómo se resuelve en el parcial
- Chequeá monotonía en el dominio dado (derivada o conocimiento de la función).
- Calculá la imagen del dominio: evaluá en extremos cerrados, límites en los abiertos. Si no coincide con el codominio dado: no invertible.
- Despejá  x  de  y=f(x) , cuidando el signo de las raíces.
- Validá con un punto: elegí  x_0 , calculá  f(x_0) , metelo en tu  f^{-1}  y verificá que da  x_0 .
- Para trig: evaluá la función en los dos extremos del intervalo y copiá qué extremo es abierto o cerrado.

## Trampas típicas
- Confundir  L(y-2)+1  con  L(y+1)-2 : siempre verificá con un punto.
- En trig, poner el corchete cerrado del lado equivocado: ej.  \cos  en  [\pi/2,\pi)  da  (-1,0] , no  [-1,0) .
- Olvidar el signo de  -\cos : da la imagen "espejada".
- Elegir el signo equivocado de la raíz cuando el dominio es de números negativos o positivos.
- Olvidar que si la función no es monótona en el dominio dado, ya no es invertible aunque el despeje "salga".

## Ejercicio resuelto
Letra: f:[0,+\infty)\to[0,+\infty) ,  f(x)=L(x^2+1) . ¿Es invertible? Si lo es, hallá  f^{-1} .

Solución: f'(x)=\frac{2x}{x^2+1}\gt0  para  x\gt0 : estrictamente creciente, inyectiva.  f(0)=0  y  f\to+\infty : imagen  [0,+\infty) , coincide con el codominio. Es biyectiva.
 y=L(x^2+1)\Rightarrow e^y=x^2+1\Rightarrow x^2=e^y-1\Rightarrow x=\sqrt{e^y-1}  (signo + porque  x\ge0 ).
Chequeo:  x=0\Rightarrow y=0 , y  \sqrt{e^0-1}=0 . Bien.  f^{-1}(y)=\sqrt{e^y-1} .

## Cómo aparece en la prueba
- P1 (7/7): Inversa explícita: despejar \(f^{-1}(y)\). Dan f:A\to B con dominio y codominio y piden elegir entre tres fórmulas de f^{-1}(y) o "no es invertible". Funciones usadas: con L 3 veces (-L(x+2)-3, -L(x-2)+3, L(x^2+1)), con e^x 2 veces (1+e^{2-x}, e^{x-1}+2), con raíz o cuadrática 2 veces (-(x+3)^2+5, \sqrt{1-x^2}-2). "No es invertible" nunca fue la correcta. Consejo: Despejá y después probá un punto: si f(a)=b, la fórmula correcta da f^{-1}(b)=a. En las raíces el signo lo decide el dominio (si x\le-3, va -\sqrt{\ }). Las opciones falsas cambian un signo dentro del L o del exponente.
- P3 (7/7 (trig o Arctg 5/7)): ¿Para qué \(U\) es invertible? (trig restringida). f:I\to U con \cos en un intervalo de un cuarto o media vuelta ([0,\pi), [\frac\pi2,\pi) dos veces, [\pi,\frac{3\pi}{2}) con -\cos) o \text{Arctg} en [0,+\infty). Hay que elegir el recorrido exacto, con corchetes bien puestos. En 2023 el mismo lugar era "sobreyectiva si U es" con una cuadrática o una a trozos. Consejo: Evaluá en los extremos del intervalo y mirá si están incluidos: extremo cerrado da corchete, abierto da paréntesis. Las 4 opciones son el mismo intervalo con los corchetes o el signo cambiado. Con -\cos cambia el signo de todo.

## Subtema: Qué es la inversa y cuándo existe
Fuente de la cátedra: Notas C1B 2026, sec. 2.2.1 y 2.2.2, Definición 2.6 (pág. 35-37); clases virtuales 5 y 6

Pensá en un traductor que pasa palabras de español a inglés. Para poder traducir de vuelta sin dudas, cada palabra en español tiene que tener su propia palabra en inglés (nada de dos palabras con la misma traducción) y todas las palabras inglesas de la lista tienen que usarse. Si pasa eso, el diccionario se puede leer al revés: esa lectura al revés es la función inversa. Ida y vuelta te deja donde empezaste.

f:A\to B  tiene inversa  f^{-1}:B\to A  si y solo si es biyectiva. En ese caso:

-  f^{-1}(y)=x \iff f(x)=y . Todo dato " f(a)=b " se lee al revés:  f^{-1}(b)=a .

-  f^{-1}(f(x))=x  para  x\in A  y  f(f^{-1}(y))=y  para  y\in B .

- Dominio de  f^{-1}  = codominio de  f  ( B ); recorrido de  f^{-1}  = dominio de  f  ( A ).

- El gráfico de  f^{-1}  es el de  f  reflejado en la recta  y=x : el punto  (a,b)  pasa a  (b,a) .

- Si  f  es estrictamente creciente,  f^{-1}  también; si es decreciente,  f^{-1}  también.

Ojo con la notación:  f^{-1}(x)  no es  \frac{1}{f(x)} . Son cosas distintas.

Ideas clave:
- Inversa existe  \iff  biyectiva
- f(a)=b \iff f^{-1}(b)=a
- Dominio y recorrido se intercambian
- Gráfico reflejado en  y=x
- f^{-1}  no es  1/f

Ejemplo: f  es invertible y su gráfico pasa por  (2,7) . ¿Qué sabés de  f^{-1} ?
Resolución: f^{-1}(7)=2 : el gráfico de  f^{-1}  pasa por  (7,2) .

## Subtema: Despejar con logaritmo y exponencial
Fuente de la cátedra: Notas C1B 2026, Ejemplos 23 y 27 (pág. 35 y 38-39), Ejercicios 2.6 y 2.10 (pág. 42-44); clases virtuales 6 y 7

Armar un regalo: primero lo metés en una caja, después lo envolvés, después le ponés un moño. Para desarmarlo hacés lo mismo al revés: primero sacás el moño, después el papel, al final abrís la caja. Despejar una inversa es eso: la última operación que le hizo  f  a la  x  es la primera que tenés que deshacer. Una suma se deshace restando, un producto dividiendo, una exponencial con logaritmo.

Se escribe  y=f(x)  y se despeja  x  deshaciendo las operaciones de afuera hacia adentro.

 f(x)  | Despeje |  f^{-1}(y)  | 

 a\,e^{bx+c}+d  |  e^{bx+c}=\frac{y-d}{a} \Rightarrow bx+c=L\!\left(\frac{y-d}{a}\right)  |  \frac{1}{b}\left[L\!\left(\frac{y-d}{a}\right)-c\right]  | 

 a\,L(bx+c)+d  |  L(bx+c)=\frac{y-d}{a} \Rightarrow bx+c=e^{(y-d)/a}  |  \frac{1}{b}\left[e^{(y-d)/a}-c\right]  | 

Ejemplo:  y=1+e^{2-x} \Rightarrow e^{2-x}=y-1 \Rightarrow 2-x=L(y-1) \Rightarrow x=2-L(y-1) .

Siempre verificá con un punto: elegí  x  cómodo (el que anula el exponente o hace 1 el argumento del  L ), calculá  y=f(x)  y fijate qué opción devuelve ese  x . Las opciones falsas del parcial cambian un signo dentro del  L  o del exponente, y el punto las descarta en segundos.

Ojo con los signos adentro del exponente: en  e^{3-2x}  despejar da  3-2x=L(y)  y recién después  x=\frac{3-L(y)}{2} . Si el codominio que te dan no coincide con la imagen (por ejemplo  e^x+2  con codominio  \mathbb R , cuando la imagen es  (2,+\infty) ), la fórmula existe pero la función no es invertible entre esos conjuntos: la respuesta es "no es invertible".

Ideas clave:
- Deshacer de afuera hacia adentro
- e^{u}=v \Rightarrow u=L(v) ;  L(u)=v \Rightarrow u=e^{v}
- Verificar con el punto que anula el exponente o da  L(1)
- Si la imagen no coincide con el codominio, no es invertible

Ejemplo: f:\mathbb R\to(0,+\infty) ,  f(x)=e^{3-2x} . Hallá  f^{-1} .
Resolución: 3-2x=L(y) \Rightarrow x=\frac{3-L(y)}{2} . Chequeo:  f(\frac32)=e^0=1  y  f^{-1}(1)=\frac{3-0}2=\frac32 .

## Subtema: Despejar con raíces y cuadráticas: el signo
Fuente de la cátedra: Notas C1B 2026, Ejemplo 24 (pág. 35-36), Ejercicios 2.5, 2.8, 2.9 y 2.15; clases virtuales 5 (completar cuadrado) y 6 (Ej. 2.9)

Si te digo "pensé un número y al elevarlo al cuadrado me dio 9", no sabés si pensé 3 o  -3 : hay dos candidatos. Para decidir necesitás una pista extra, por ejemplo "el número era negativo". En las inversas con cuadrados esa pista es el dominio de  f : te dice de qué lado del vértice vivían los  x , y por lo tanto qué signo lleva la raíz.

Con  f(x)=a(x-h)^2+k  en un dominio que está de un solo lado de  h :

 (x-h)^2=\frac{y-k}{a}\ \Rightarrow\ x=h\pm\sqrt{\frac{y-k}{a}} 

- Si el dominio es  x\ge h , va  + :  x=h+\sqrt{\cdots} .

- Si el dominio es  x\le h , va  - :  x=h-\sqrt{\cdots} .

Ejemplo:  f:(-\infty,2]\to[-1,+\infty) ,  f(x)=(x-2)^2-1 .  (x-2)^2=y+1 , y como  x\le2 ,  x=2-\sqrt{y+1} .

Con raíces:  y=\sqrt{u(x)}+c \Rightarrow (y-c)^2=u(x) , y después se despeja  x . Si al final aparece otra raíz (como en  \sqrt{1-x^2} ), el signo vuelve a salir del dominio:  x\in(0,1)  positivo,  +\sqrt{\ } .

Si el dominio contiene al vértice,  f  no es inyectiva y la respuesta es "no es invertible", aunque el despeje "salga".

Ideas clave:
- El dominio decide el signo de la raíz
- x\ge h :  +\sqrt{\ } ;  x\le h :  -\sqrt{\ }
- Vértice dentro del dominio: no invertible
- Verificá con un punto de cada lado

Ejemplo: f:(-\infty,0]\to[1,+\infty) ,  f(x)=x^2+1 . Hallá  f^{-1} .
Resolución: x^2=y-1  y  x\le0 , así que  f^{-1}(y)=-\sqrt{y-1} . Chequeo:  f(-2)=5 ,  f^{-1}(5)=-2 .

## Subtema: Dominio y recorrido de la inversa
Fuente de la cátedra: Notas C1B 2026, Definición 2.6 (pág. 35), Teorema 2.2 (pág. 38), Ejercicios 2.13, 2.14 y 2.18; clase virtual 7

La inversa hace el camino de vuelta. Si  f  arrancaba en tu casa (el dominio) y llegaba a la escuela (la imagen),  f^{-1}  arranca en la escuela y termina en tu casa. Por eso, para saber desde dónde arranca la inversa, alcanza con saber hasta dónde llegaba  f . Y si en el mapa pusiste una escuela a la que en realidad nunca llegás, la vuelta no se puede hacer.

-  \text{Dom}(f^{-1})=B  (codominio de  f ) y  \text{Rec}(f^{-1})=A  (dominio de  f ).

- Para que el enunciado " f:A\to B  es invertible" sea cierto, la imagen real  f(A)  tiene que ser exactamente  B . Si  B  es más grande,  f  no es sobreyectiva y la opción correcta es "no es invertible".

- Para calcular  f(A) : monotonía y valores (o límites) en los extremos de  A , cuidando corchetes.

Ejemplo:  f:[0,+\infty)\to B ,  f(x)=2-e^{-x} . Crece (porque  -e^{-x}  crece),  f(0)=1  incluido y  f\to2  sin alcanzarlo:  B=[1,2) . Entonces  f^{-1}:[1,2)\to[0,+\infty) ,  f^{-1}(y)=-L(2-y) .

La fórmula de  f^{-1}  también da una pista: su dominio natural tiene que contener a  B . Si  f^{-1}(y)=L(y-3)+1 , necesitás  y\gt3 .

Ideas clave:
- \text{Dom}(f^{-1})=B ,  \text{Rec}(f^{-1})=A
- Invertible como  f:A\to B  exige  f(A)=B  exacto
- Codominio más grande que la imagen: no invertible
- La fórmula de  f^{-1}  tiene que estar definida en todo  B

Ejemplo: f:(0,1]\to B ,  f(x)=-L(x) . ¿Qué  B  la hace invertible?
Resolución: -L  decrece: en  x=1  vale 0 (incluido) y cuando  x\to0^+  tiende a  +\infty .  B=[0,+\infty) .

## Subtema: Coseno y seno restringidos (molde P3)
Fuente de la cátedra: Notas C1B 2026, sec. 3.1 y 3.2 (pág. 47-55); 1ª rev. mayo 2026, ej. 3 (resuelto en la clase virtual 9); 1ª rev. octubre 2024 y octubre 2025, ej. 3

En una calesita, si mirás una vuelta entera pasás dos veces por cada altura (una subiendo y otra bajando). Pero si mirás solo un cuarto o media vuelta, siempre en el mismo sentido, cada altura aparece una sola vez. El único detalle es si el caballito del principio y el del final están incluidos: eso decide si ponés corchete o paréntesis en los extremos.

Molde:  f:I\to U  con  \pm\cos  o  \pm\text{sen}  en un intervalo donde es monótona. Ya es inyectiva; hay que elegir  U=f(I) .

- Evaluá  f  en los dos extremos de  I .

- Extremo de  I  cerrado: el valor va con corchete. Extremo abierto: paréntesis.

- Ordená los dos valores de menor a mayor, llevando cada uno su corchete.

 f  en  I  | Va de |  U  | 

 \cos  en  (0,\pi/2]  | 1 (no) a 0 (sí) |  [0,1)  | 

 \cos  en  [\pi,3\pi/2)  |  -1  (sí) a 0 (no) |  [-1,0)  | 

 \text{sen}  en  [\pi/2,3\pi/2)  | 1 (sí) a  -1  (no) |  (-1,1]  | 

 -\text{sen}  en  (-\pi/2,0]  | 1 (no) a 0 (sí) |  [0,1)  | 

Las cuatro opciones del parcial son el mismo intervalo con corchetes o signo cambiados. Con  -\cos  o  -\text{sen} , calculá primero el valor de  \cos  o  \text{sen}  y después cambiá el signo. Si el intervalo no es de monotonía (por ejemplo  [0,3\pi/2)  para  \cos ), no es invertible para ningún  U .

Ideas clave:
- Evaluá en los extremos; cerrado da corchete
- Ordená de menor a mayor llevando cada corchete
- Con signo menos: primero el valor, después el signo
- Intervalo sin monotonía: no invertible

Ejemplo: f:[0,\pi)\to U ,  f(x)=2\cos x+1 .
Resolución: \cos  va de 1 (incluido) a  -1  (excluido);  2\cos x+1  va de 3 (incluido) a  -1  (excluido):  U=(-1,3] .

## Subtema: Arctg restringida e inversas trigonométricas
Fuente de la cátedra: Notas C1B 2026, sec. 3.2.1 y 3.2.2 (pág. 54-55), Ejercicios 3.1, 3.3 y 3.4; clases virtuales 8 y 9; 1ª rev. mayo 2024, ej. 3. Arcsen y Arccos: Notas 3.2.2 y clase virtual 9, no aparecieron en ninguna 1ª revisión 2023-2026

Muchos ángulos distintos tienen la misma pendiente (la tangente se repite cada media vuelta). Para que la pregunta "¿qué ángulo tiene esta pendiente?" tenga una sola respuesta, se elige una ventana fija de ángulos, entre  -90^\circ  y  90^\circ . La respuesta de esa ventana es el  \text{Arctg} . Con el seno y el coseno se hace lo mismo, cada uno con su ventana.

Inversa | de | Dominio | Recorrido | Derivada | 

 \text{Arctg}  |  \text{tg}  en  (-\frac\pi2,\frac\pi2)  |  \mathbb R  |  (-\frac\pi2,\frac\pi2)  |  \frac1{1+x^2}  | 

 \text{Arcsen}  |  \text{sen}  en  [-\frac\pi2,\frac\pi2]  |  [-1,1]  |  [-\frac\pi2,\frac\pi2]  |  \frac1{\sqrt{1-x^2}}  | 

 \text{Arccos}  |  \cos  en  [0,\pi]  |  [-1,1]  |  [0,\pi]  |  -\frac1{\sqrt{1-x^2}}  | 

Arctg restringida (salió en mayo 2024):  \text{Arctg}  es creciente, así que la imagen de un intervalo  [a,b)  es  [\text{Arctg}\,a,\text{Arctg}\,b) , con los mismos corchetes. Si un extremo es  \pm\infty , el valor es  \pm\frac\pi2  siempre abierto.

Valores:  \text{Arctg}(1)=\frac\pi4 ,  \text{Arctg}(\sqrt3)=\frac\pi3 ,  \text{Arcsen}(\frac12)=\frac\pi6 ,  \text{Arccos}(\frac12)=\frac\pi3 ,  \text{Arccos}(0)=\frac\pi2 .

Estas restricciones son el mismo razonamiento que la pregunta de  \cos  restringido, pero al revés: primero se elige el intervalo donde la función es monótona, y ahí la inversa existe. Si en el parcial aparece  -\text{Arctg}  o  \text{Arctg}  sobre una semirrecta, calculá el valor en el extremo finito (corchete si está incluido) y usá  \pm\frac\pi2  abierto para el extremo infinito, cambiando el signo si hay un menos adelante.

Ideas clave:
- \text{Arctg}:\mathbb R\to(-\frac\pi2,\frac\pi2) , creciente
- \text{Arcsen}:[-1,1]\to[-\frac\pi2,\frac\pi2] ;  \text{Arccos}:[-1,1]\to[0,\pi]
- En  \pm\infty ,  \text{Arctg}  da  \pm\frac\pi2  abierto
- (\text{Arcsen})'=\frac1{\sqrt{1-x^2}} ,  (\text{Arccos})'=-\frac1{\sqrt{1-x^2}}

Ejemplo: f:(-\infty,1]\to U ,  f(x)=\text{Arctg}\,x .
Resolución: Creciente: de  -\frac\pi2  (límite, abierto) a  \frac\pi4  (alcanzado):  U=(-\frac\pi2,\frac\pi4] .
