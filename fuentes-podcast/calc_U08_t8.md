# Cálculo 1B · Unidad 8: Series geométricas

Material para la 1ª revisión de octubre 2026 (FCEA-UDELAR). Peso en el parcial según los parciales anteriores: 20% del puntaje, prioridad imprescindible.
2 preguntas fijas: una numérica (P8) y una con parámetro (P10). 14 de 70.

## Explicación simple
Tenés una pizza. Te comés la mitad, después la mitad de lo que queda, después la mitad de lo que queda... Aunque lo hagas infinitas veces, nunca te comés más de una pizza. Eso es una serie geométrica que converge: cada pedazo es una fracción fija (la razón  r ) del anterior, y si esa fracción es menor que 1 en valor absoluto, la suma total es finita.
Si en cambio cada pedazo fuera el doble del anterior, la suma se iría al infinito: la serie diverge. Toda la tarea es identificar el primer pedazo y la razón, y usar la fórmula "primer término dividido  (1-r) ".

## Explicación para el parcial
La fórmula

 \sum_{n=n_0}^{\infty} c\,r^n=\frac{\text{primer término}}{1-r}=\frac{c\,r^{n_0}}{1-r}\quad\text{si } |r|\lt1 

Si  |r|\ge1  (y  c\neq0 ), la serie diverge. La forma más segura de no equivocarte: 
calculá el primer término sustituyendo  n=n_0  en la expresión, y dividí entre  1-r 
. Así no importa si la suma arranca en 0, en 1 o en 2.

Cómo encontrar  r 

Llevá todo a la forma  (\text{algo})^n . Herramientas:

- 
 \frac{1}{3^{n-1}}=3\cdot\left(\frac13\right)^n ;  2^{n+1}=2\cdot2^n ;  3^{2n}=9^n ;  (2^n)^2=4^n .
- 
 \frac{5^n}{3^{2n}}=\left(\frac59\right)^n .
- 
Otra forma:  r=\frac{a_{n+1}}{a_n}  (el cociente entre dos términos seguidos).

Separar sumas

Si el término general es suma de dos geométricas, separás:  \sum\frac{5+2^n}{3^{n-1}}=\sum\frac{5}{3^{n-1}}+\sum\frac{2^n}{3^{n-1}} . Si las dos convergen, la suma converge a la suma de los resultados. Si una diverge y la otra converge, el total diverge.

Ejemplo (mayo 2026,  n\ge1 ):  \sum\frac{5}{3^{n-1}}  tiene primer término 5 y  r=\frac13 : da  \frac{5}{2/3}=\frac{15}{2} .  \sum\frac{2^n}{3^{n-1}}  tiene primer término 2 y  r=\frac23 : da  \frac{2}{1/3}=6 . Total  \frac{27}{2} .

Series con parámetro  x 

Te dicen "la serie suma  S " y hay que hallar  x :

- 
Identificá  r  en función de  x  y el primer término.
- 
Planteá  \frac{\text{primer término}}{1-r}=S  y resolvé.
- 
Chequeá  |r|\lt1 
 con cada solución. Las que no cumplan se descartan (aunque cumplan la ecuación).

Ejemplo (mayo 2025):  \sum_{n\ge0}\frac{1}{x^{2n+1}}=\frac23 . Primer término  \frac1x ,  r=\frac1{x^2} .  \frac{1/x}{1-1/x^2}=\frac{x}{x^2-1}=\frac23 \Rightarrow 2x^2-3x-2=0\Rightarrow x=2  o  x=-\frac12 . Con  x=-\frac12 ,  r=4 : no sirve. Respuesta  x=2 , y el  -\frac12  estaba en las opciones como trampa.

Series alternadas:  (-1)^n  se mete adentro de la razón.  \sum_{n\ge0}\frac{(-1)^n}{x^{n+1}} : primer término  \frac1x ,  r=-\frac1x , suma  \frac{1/x}{1+1/x}=\frac1{x+1} .

En el parcial hay siempre dos preguntas de este tema: una numérica (converge a cuánto o diverge) y una con parámetro. Son de las más rápidas si tenés el método claro, así que conviene hacerlas primero para asegurar puntos.

## Cómo se resuelve en el parcial
- 
Escribí el término general como  c\cdot r^n  (o separalo en varias geométricas).
- 
Chequeá  |r|\lt1  en cada una. Si alguna tiene  |r|\ge1 : diverge.
- 
Calculá el primer término reemplazando  n  por el índice inicial.
- 
Suma  =\frac{\text{primer término}}{1-r} . Sumá las partes.
- 
Con parámetro: planteá la ecuación, resolvé y descartá soluciones con  |r|\ge1 .

## Trampas típicas
- 
Usar  \frac{1}{1-r}  cuando la suma arranca en  n=1 : el primer término no es 1.
- 
Olvidar las constantes:  2^{n+1}=2\cdot2^n ,  3^{n+1}=3\cdot3^n .
- 
Aplicar la fórmula con  |r|\ge1  y obtener un número "lindo" (incluso negativo): con  r=\frac43  daría  -1 , pero la serie diverge.
- 
No descartar la solución con  |r|\ge1  en las preguntas con parámetro.
- 
Confundir  (2^n)^2=4^n  con  2^{n^2} .

## Ejercicio resuelto
Estudiá  \sum_{n=0}^{\infty}\frac{2\cdot3^{n+1}}{(2^n)^2} .
Solución:
(2^n)^2=4^n  y  2\cdot3^{n+1}=6\cdot3^n . El término es  6\left(\frac34\right)^n , con  r=\frac34 ,  |r|\lt1 : converge.
Primer término ( n=0 ): 6. Suma  =\frac{6}{1-3/4}=24 .

## Cómo aparece en la prueba
- P8 (7/7): Serie geométrica numérica. \sum con potencias corridas: \frac{2^n}{3^{n-1}}, \frac{2\cdot3^{n+1}}{(2^n)^2}, \frac{2^{n-1}}{3^{n+1}}, \frac{3\cdot2^n}{5^{n+1}}, \frac{5^n}{3^{2n}}, \frac5{3^{n-1}}, \frac{5+2^n}{3^{n-1}} (suma de dos geométricas, nuevo en 2026). "Diverge" nunca fue la correcta. Consejo: Usá siempre \sum=\frac{\text{primer término}}{1-r}: calculá el primer término con el n donde arranca la suma y no tenés que reacomodar exponentes. 3^{2n}=9^n y (2^n)^2=4^n son disfraces.
- P10 (7/7): Serie geométrica con parámetro: hallar \(x\). \sum que depende de x igualada a un número. 2023: x en el numerador (\frac{x^{n+1}}{3^n}, \frac{x^n}{3\cdot4^{n-1}}); desde 2024: x en el denominador (\left(\frac{x-1}x\right)^n, \frac2{x^{n+1}}, \frac1{x^{2n+1}}, \frac{(-1)^n}{x^{n+1}}, \frac{2^{n+1}}{x^n}). Consejo: Planteá \frac{\text{primer término}}{1-r}= valor, despejá y 
verificá |r|\lt1
. En mayo 2025 (r=\frac1{x^2}) la ecuación daba x=2 y x=-\frac12; la segunda no cumple |r|\lt1 y era una opción trampa.

## Subtema: Qué es una serie y cuándo converge
Tenés una torta. Te comés la mitad; después la mitad de lo que queda; después la mitad de eso, y así para siempre. Aunque comas infinitas veces, nunca vas a comer más de una torta: la cantidad total se acerca a 1. Una serie es sumar infinitos números. A veces, como con la torta, el total se acerca a un número fijo (converge). Otras veces el total crece sin freno o no se decide (diverge).

Dada una sucesión  a_n , la serie  \sum_{n=n_0}^{\infty}a_n  es el límite de las 
sumas parciales

 S_N=a_{n_0}+a_{n_0+1}+\dots+a_N,\qquad \sum_{n=n_0}^{\infty}a_n=\lim_{N\to\infty}S_N 

- 
Si ese límite es un número finito, la serie 
converge
 a ese número. Si es  \pm\infty  o no existe, 
diverge
.

- 
Condición necesaria:
 si la serie converge, entonces  a_n\to0 . Al revés no vale: que  a_n\to0  no garantiza convergencia. Pero sirve para descartar: si  a_n\not\to0 , la serie diverge seguro.

- 
Cambiar, agregar o sacar una cantidad finita de términos no cambia si converge o no (sí cambia el valor de la suma).

- 
Si  \sum a_n=A  y  \sum b_n=B , entonces  \sum(\alpha a_n+\beta b_n)=\alpha A+\beta B .

En el parcial todas las series son geométricas (o suma de dos geométricas), así que la definición sirve sobre todo para entender por qué funciona la fórmula y por qué el índice inicial importa.
Ideas clave:
- Serie = límite de las sumas parciales  S_N
- Converge si ese límite es finito
- Si converge,  a_n\to0 ; si  a_n\not\to0 , diverge
- La suma es lineal: se pueden separar y sacar constantes
Mini ejercicio: S_3  de  \sum_{n=1}^\infty\frac1{2^n}  y el valor de la serie.
Solución: S_3=\frac12+\frac14+\frac18=\frac78 . Las sumas parciales son  1-\frac1{2^N}\to1 : la serie vale 1.

## Subtema: Serie geométrica: fórmula, convergencia y divergencia
En una serie geométrica cada término es el anterior multiplicado siempre por el mismo número  r , como una pelota que en cada rebote sube una fracción fija del rebote anterior. Si la fracción es menor que 1, los rebotes se achican y la altura total recorrida es finita. Si es 1 o más, los rebotes no se achican y la suma se va al infinito (o, con signos que alternan, nunca se queda quieta).

\sum_{n=0}^{\infty}r^n  tiene sumas parciales  S_N=\frac{1-r^{N+1}}{1-r}  (para  r\neq1 ). De ahí:

 \sum_{n=0}^{\infty}c\,r^n=\frac{c}{1-r}\quad\text{si } |r|\lt1 

 r 
 | 
Comportamiento
 | 

 |r|\lt1 
 | 
converge a  \frac{\text{primer término}}{1-r} 
 | 

 r\ge1 
 | 
diverge a  +\infty  (con  c\gt0 )
 | 

 r=-1 
 | 
oscila ( 1,0,1,0,\dots ): diverge
 | 

 r\lt-1 
 | 
oscila con amplitud creciente: diverge
 | 

Trampa:
 la fórmula  \frac{c}{1-r}  da un número aunque  |r|\ge1 : con  r=\frac54  daría  -4 . Ese número no significa nada; la serie diverge. Por eso "Converge a  -4 " puede aparecer como opción.

Con  r  negativo ( (-\frac13)^n ), la fórmula funciona igual si  |r|\lt1 :  \frac{1}{1+\frac13}=\frac34 .

Antes de aplicar la fórmula, anotá  r  y compará su valor absoluto con 1. Es un segundo de trabajo y evita la trampa más frecuente de las opciones. En el parcial la numérica nunca dio \"Diverge\" en V1, pero si cambian los datos puede serlo.
Ideas clave:
- \sum c\,r^n=\frac{\text{primer término}}{1-r}  si  |r|\lt1
- |r|\ge1 : diverge, aunque la fórmula dé un número
- r=-1  oscila y diverge
- r  negativo con  |r|\lt1  converge igual
Mini ejercicio: \sum_{n=0}^\infty\left(\frac54\right)^n
Solución: r=\frac54\gt1 : diverge. La fórmula daría  \frac1{1-5/4}=-4 , absurdo para una suma de positivos.

## Subtema: Índice inicial y primer término
La fórmula de la serie geométrica es "primer término dividido  1-r ". El error es creer que el primer término siempre es 1 o siempre es  c . Depende de desde dónde empezás a contar: si la fila empieza en la posición 3, el primero de la fila es el que está en la posición 3. Mirá el número de abajo del  \sum  y reemplazalo: ese es tu primer término.

\sum_{n=n_0}^{\infty}c\,r^n=\frac{c\,r^{n_0}}{1-r}=\frac{\text{término con } n=n_0}{1-r} 

El método más seguro: 
sustituí  n=n_0  en la expresión tal como está
 (sin reacomodar) para obtener el primer término, calculá  r  como cociente entre dos términos seguidos, y dividí.

- 
 \sum_{n=2}^\infty\left(\frac13\right)^n : primer término  \frac19 ,  r=\frac13 :  \frac{1/9}{2/3}=\frac16 .

- 
 \sum_{n=1}^\infty\frac3{4^n} : primer término  \frac34 ,  r=\frac14 :  \frac{3/4}{3/4}=1 .

- 
 \sum_{n=0}^\infty\left(\frac12\right)^{n+2} : primer término  \frac14 ,  r=\frac12 :  \frac12 .

Relación útil:  \sum_{n=1}^\infty=\sum_{n=0}^\infty-(\text{término } n=0) . Si  \sum_{n=0}^\infty\left(\frac25\right)^n=\frac53 , entonces  \sum_{n=1}^\infty\left(\frac25\right)^n=\frac53-1=\frac23 .

El índice inicial no cambia si converge o diverge; solo cambia el valor.

Si preferís reacomodar, hacelo con cuidado:  \sum_{n=2}^\infty r^n=r^2\sum_{m=0}^\infty r^m  (cambio  m=n-2 ). Es el mismo resultado, pero con más pasos donde equivocarse. Sustituir  n=n_0  directamente en la expresión original es lo más rápido y lo que menos errores produce.
Ideas clave:
- Primer término: sustituí  n=n_0  tal como está
- \frac{1}{1-r}  solo si arranca en 0 y el término es  r^n
- \sum_{n\ge1}=\sum_{n\ge0}-a_0
- El índice cambia el valor, no la convergencia
Mini ejercicio: \sum_{n=3}^\infty\frac{2^n}{3^n}
Solución: Primer término  \frac8{27} ,  r=\frac23 :  \frac{8/27}{1/3}=\frac89 .

## Subtema: Reacomodar exponentes (series disfrazadas)
A veces la serie geométrica viene disfrazada: exponentes corridos ( n+1 ,  n-1 ), potencias dobles ( 3^{2n} ) o cuadrados de potencias ( (2^n)^2 ). Por debajo del disfraz siempre hay un "algo a la  n ". Sacarle el disfraz es reescribir cada potencia como un número fijo por "algo a la  n ". Y si no querés sacar el disfraz, mirá cuánto se multiplica cada término respecto del anterior: eso es  r .

Herramientas para encontrar  r :

- 
 a^{n+k}=a^k\cdot a^n  y  a^{n-k}=\frac{a^n}{a^k} :  3^{n+1}=3\cdot3^n ,  \frac1{5^{n-1}}=5\cdot\left(\frac15\right)^n .

- 
 a^{2n}=(a^2)^n :  3^{2n}=9^n ,  2^{3n}=8^n . Y  (2^n)^2=4^n  (no  2^{n^2} ).

- 
Juntá todo en  \left(\frac{\text{arriba}}{\text{abajo}}\right)^n :  \frac{4^n}{3^{2n+1}}=\frac13\left(\frac49\right)^n .

- 
Atajo:  r=\frac{a_{n+1}}{a_n} . Con potencias,  r  es el cociente de las bases "por cada  n ": en  \frac{2^{n+1}}{5^{n-1}} ,  r=\frac25 .

Después: primer término sustituyendo  n=n_0 , chequeo  |r|\lt1 , fórmula. Ejemplo:  \sum_{n=0}^\infty\frac{2^{n+1}}{5^{n-1}} : primer término  \frac{2}{5^{-1}}=10 ,  r=\frac25 , suma  \frac{10}{3/5}=\frac{50}3 .

Si  |r|\ge1  la respuesta es "Diverge", aunque entre las opciones esté el número que da la fórmula.

En el parcial el término general suele venir como cociente de dos potencias con exponentes corridos. No hace falta llevarlo a la forma  c\,r^n : alcanza con saber  r  (cociente de bases) y el primer término (sustituyendo  n=n_0 ). Dejá la simplificación de fracciones para el final.
Ideas clave:
- a^{n+k}=a^k a^n ;  a^{2n}=(a^2)^n
- (2^n)^2=4^n , no  2^{n^2}
- r  = cociente de bases por cada  n
- Primer término con  n=n_0  sin reacomodar
Mini ejercicio: \sum_{n=1}^\infty\frac{3^{n+1}}{4^n}
Solución: r=\frac34 , primer término  \frac{9}{4} . Suma  \frac{9/4}{1/4}=9 .

## Subtema: Suma de dos geométricas
Si en un mismo canasto echás manzanas de dos árboles, el total es lo que dio un árbol más lo que dio el otro. Una fracción con una suma arriba se puede partir en dos fracciones, y cada una es una serie geométrica con su propio  r . Se calcula cada una por separado y se suman. Pero ojo: si uno de los árboles da infinitas manzanas, el canasto se desborda, no importa lo que haga el otro.

Si el término general es  \frac{A+B}{C} , separás:  \sum\frac{A}{C}+\sum\frac{B}{C} .

- 
Las dos convergen: la suma converge a la suma de los dos resultados.

- 
Una converge y la otra diverge: la suma 
diverge
.

- 
Cada parte tiene su propio primer término y su propio  r : no mezcles.

Ejemplo (mayo 2026):  \sum_{n=1}^\infty\frac{5+2^n}{3^{n-1}}=\sum\frac5{3^{n-1}}+\sum\frac{2^n}{3^{n-1}}=\frac{5}{2/3}+\frac{2}{1/3}=\frac{15}2+6=\frac{27}2 .

Con resta o con  (-1)^n  funciona igual:  \sum_{n=1}^\infty\frac{2^n+(-1)^n}{5^n}=\frac{2/5}{3/5}+\frac{-1/5}{6/5}=\frac23-\frac16=\frac12 . La parte con  (-1)^n  tiene  r=-\frac15  y primer término negativo.

Las opciones falsas suelen ser la suma de una sola de las partes o el resultado de usar un solo  r  para las dos.

En la prueba, escribí las dos series por separado en renglones distintos, cada una con su  r , su primer término y su resultado, y recién al final sumalas. Controlá que las dos cumplen  |r|\lt1 : alcanza con que una no lo cumpla para que la respuesta sea \"Diverge\".
Ideas clave:
- Separá en dos geométricas y sumá los resultados
- Cada parte con su primer término y su  r
- Una diverge: el total diverge
- (-1)^n  da  r  negativo
Mini ejercicio: \sum_{n=0}^\infty\frac{2^n+3^n}{6^n}
Solución: \sum\left(\frac13\right)^n+\sum\left(\frac12\right)^n=\frac32+2=\frac72 .

## Subtema: Series con parámetro y la condición |r| < 1
Ahora la pelota que rebota tiene un número desconocido  x  en su fracción de rebote, y te dicen cuánto recorrió en total. Armás la ecuación "primer término dividido  1-r  igual al total" y despejás  x . Pero cuidado: a veces la ecuación da una solución con la que la pelota rebotaría cada vez más alto. Esa solución es trucha, porque con ella la suma nunca habría dado un número. Hay que tirarla.

Molde P10: "Si  \sum\ldots=S , entonces:" con  x  en la base.

- 
Identificá  r  (función de  x ) y el primer término (sustituyendo  n=n_0 ).

- 
Planteá  \frac{\text{primer término}}{1-r}=S  y resolvé.

- 
Chequeá  |r|\lt1 
 con cada solución y descartá las que no cumplen.

Ejemplo:  \sum_{n=0}^\infty\frac2{x^{2n+1}}=\frac34 . Primer término  \frac2x ,  r=\frac1{x^2} .  \frac{2/x}{1-1/x^2}=\frac{2x}{x^2-1}=\frac34 \Rightarrow 3x^2-8x-3=0 \Rightarrow x=3  o  x=-\frac13 . Con  x=-\frac13 ,  r=9 : se descarta. Respuesta:  x=3 .

A veces las dos soluciones sirven:  \sum_{n=0}^\infty\frac1{x^{2n}}=\frac43  da  x^2=4 , y con  x=\pm2  queda  r=\frac14  en los dos casos.

Dominio de convergencia:
  \sum\frac{(x-1)^n}{3^n}  converge si  \left|\frac{x-1}3\right|\lt1 \iff -2\lt x\lt4  (abierto).

Cuando  x  está en el denominador ( r=\frac1x ,  \frac1{x^2} ), la condición  |r|\lt1  se traduce en  |x|\gt1 : las soluciones con  |x|\le1  se descartan. En octubre 2025 apareció una alternada,  \frac{(-1)^n}{x^{n+1}} , donde  r=-\frac1x : el signo cambia la ecuación pero no la condición.
Ideas clave:
- Primer término sobre  1-r  igual al dato
- Siempre chequear  |r|\lt1  con cada solución
- Con  x  abajo,  r=\frac1x  o  \frac1{x^2}
- El conjunto de convergencia es un intervalo abierto
Mini ejercicio: \sum_{n=0}^\infty\frac{x^n}{2^n}=3
Solución: \frac1{1-x/2}=3\Rightarrow x=\frac43 , y  |r|=\frac23\lt1 : vale.