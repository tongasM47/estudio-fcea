# Cálculo 1B · Unidad 5: Polinomio de Taylor y desarrollos notables

Material de estudio para la 1ª revisión de octubre 2026 (FCEA-UDELAR). TODO el contenido de este documento sale exclusivamente del material de la cátedra (notas, teóricos, diapositivas, guías, ejercicios y soluciones oficiales publicados en EVA). No hay que agregar conceptos, autores, ejemplos ni criterios que no estén acá.

Fuente de la cátedra: Notas C1B 2026, cap. 4, sec. 4.1 y 4.2 (pág. 57-63), Ejercicios 4.1 y 4.2 (pág. 66) con soluciones (pág. 121); clase virtual 9

Peso en la prueba según los parciales anteriores: 0% del puntaje, prioridad alta. Nunca se pregunta sola, pero sostiene P2, P5 y P9 (30% del puntaje). Sin materiales: los desarrollos de e^x, \text{sen}, \cos, L(1+x), \text{Arctg} tienen que salir de memoria hasta orden 3.

## Explicación simple
Imaginá que tenés que describirle a alguien por teléfono una montaña rusa, pero solo cerca de la estación. Primero le decís la altura en la estación (orden 0). Después si sube o baja (orden 1). Después si la curva se está doblando hacia arriba o hacia abajo (orden 2). Cuanto más datos das, mejor se parece tu descripción a la montaña real, al menos cerca de la estación.
El polinomio de Taylor es eso: una "copia barata" de una función complicada hecha solo con potencias de  x . Cerca de 0,  e^x  se comporta casi igual que  1+x+\frac{x^2}{2} . Aprenderte cinco copias baratas de memoria te resuelve varias preguntas del parcial.

## Explicación para el parcial
Definición

El polinomio de Taylor de orden  n  de  f  en 0 es

 P_n(x)=f(0)+f'(0)x+\frac{f''(0)}{2}x^2+\frac{f'''(0)}{3!}x^3+\dots+\frac{f^{(n)}(0)}{n!}x^n 
y el Teorema de Taylor dice que  f(x)=P_n(x)+R_n(x) , donde el resto  R_n(x)  cumple  \lim_{x\to0}\frac{R_n(x)}{x^n}=0 : es un infinitésimo de mayor orden que  x^n . Traducción: el error es mucho más chico que  x^n .

Tabla que tenés que saber de memoria (hasta orden 4)

Función | Desarrollo en 0 | 

 e^x  |  1+x+\frac{x^2}{2}+\frac{x^3}{6}+\frac{x^4}{24}+R_4(x)  | 

 \text{sen}\,x  |  x-\frac{x^3}{6}+R_4(x)  | 

 \cos x  |  1-\frac{x^2}{2}+\frac{x^4}{24}+R_4(x)  | 

 L(1+x)  |  x-\frac{x^2}{2}+\frac{x^3}{3}-\frac{x^4}{4}+R_4(x)  | 

 \text{Arctg}\,x  |  x-\frac{x^3}{3}+R_4(x)  | 

 \frac{1}{1-x}  |  1+x+x^2+x^3+R_3(x)  | 

Todas salen de calcular las derivadas en 0 y usar la fórmula de Taylor, como en el Ejemplo 32 y los Ejercicios 4.1 y 4.2 de las Notas (en las soluciones figuran, por ejemplo,  \text{sen}\,x ,  \cos x  y  \text{Arctg}\,x  hasta orden 3). Cómo recordarlas:  e^x  tiene todos los términos con  1/k! . El seno tiene solo potencias impares con signos alternados; el coseno, solo pares.  L(1+x)  tiene  1/k  (no factorial) con signos alternados.  \text{Arctg}  es "como el seno pero con denominadores 1, 3, 5".

Sustitución: la herramienta que más se usa

Si sabés el desarrollo de  f(u) , para  f(2x)  o  f(-x)  reemplazás  u  por  2x  o  -x , con cuidado con las potencias. Da lo mismo que derivar: si  g(x)=f(cx) , por la regla de la cadena  g^{(k)}(0)=c^k f^{(k)}(0) , así que el coeficiente de  x^k  queda multiplicado por  c^k .

-  \text{sen}(2x)=2x-\frac{(2x)^3}{6}+\dots=2x-\frac{4x^3}{3}+\dots 

-  \cos(2x)=1-\frac{(2x)^2}{2}+\dots=1-2x^2+\dots 

-  e^{-x}=1-x+\frac{x^2}{2}-\frac{x^3}{6}+\dots 

-  e^{-2x}=1-2x+2x^2-\frac43x^3+\dots 

-  L(1-2x)=-2x-\frac{(2x)^2}{2}-\frac{(2x)^3}{3}-\dots=-2x-2x^2-\frac83x^3-\dots 

-  L(1+2x)=2x-2x^2+\frac83x^3-\dots 

El resto  R_n(x) 

-  R_n(x)  es un infinitésimo de mayor orden que  x^n :  \lim_{x\to0}\frac{R_n(x)}{x^n}=0  (Observación 11 de las Notas).
- La suma de infinitésimos de distinto orden es equivalente al de menor orden (Observación 10): por eso lo que queda en el resto no cambia el resultado de un límite.

Para qué sirve en el parcial

Este tema es la base de tres preguntas: los dos o tres límites (molde d) y la pregunta de Taylor con extremos u operaciones (molde i). No se pregunta "escribí el desarrollo de tal función" directamente, pero si te equivocás en un coeficiente de la tabla, se cae todo lo demás. Por eso la tabla hay que saberla de memoria, sin dudar, y practicar las sustituciones con  2x ,  -x  y  -2x , que son las que más aparecen. Un buen ejercicio es escribirla de cero todos los días hasta la prueba, y chequear cada coeficiente derivando la función en 0 cuando tengas dudas: por ejemplo, el coeficiente de  x^2  en  e^{-2x}  tiene que ser  f''(0)/2=4/2=2 .

## Cómo se resuelve en el parcial
- Identificá la función base ( e^u ,  \text{sen}\,u ,  \cos u ,  L(1+u) ,  \text{Arctg}\,u ).
- Escribí su desarrollo con  u .
- Sustituí  u  por lo que corresponda ( 2x ,  -x ,  -2x ) elevando bien las potencias.
- Cortá en el orden que necesitás y agregá  R_n(x) .

## Trampas típicas
- Olvidar elevar el coeficiente:  (2x)^2=4x^2 , no  2x^2 .
- Poner factoriales en  L(1+x) : es  x-\frac{x^2}{2}+\frac{x^3}{3} , el 3 no es  3!=6 .
- Confundir los signos de  L(1-2x) : todos los términos quedan negativos.
- Olvidar el 1 inicial de  e^x  y  \cos x .
- Confundir el seno con el Arctg en el término cúbico:  -\frac{x^3}{6}  vs  -\frac{x^3}{3} .

## Ejercicio resuelto
Letra: Escribí el desarrollo de orden 3 en 0 de  e^{-2x}+\text{sen}(2x) .

Solución: e^{-2x}=1-2x+\frac{4x^2}{2}-\frac{8x^3}{6}+R_3(x)=1-2x+2x^2-\frac43x^3+R_3(x) .
 \text{sen}(2x)=2x-\frac{8x^3}{6}+R_3(x)=2x-\frac43x^3+R_3(x) .
Suma:  1+2x^2-\frac83x^3+R_3(x) . Fijate que los términos en  x  se cancelaron.

## Subtema: Definición del polinomio de Taylor
Fuente de la cátedra: Notas C1B 2026, sec. 4.2, Teorema 4.2 (pág. 60), Ejemplos 31 y 32 (pág. 60-61); clase virtual 9

Querés copiar una curva con una regla flexible, pero solo cerca de un punto. Primero la ponés a la misma altura que la curva. Después le das la misma inclinación. Después la doblás con la misma curvatura. Cada paso la parece más a la curva cerca de ese punto. El polinomio de Taylor es eso: un polinomio que copia la altura, la inclinación, la curvatura (y así) de la función en 0.

El polinomio de Taylor de orden  n  de  f  en 0 es

 P_n(x)=\sum_{k=0}^{n}\frac{f^{(k)}(0)}{k!}x^k=f(0)+f'(0)x+\frac{f''(0)}{2}x^2+\frac{f'''(0)}{6}x^3+\dots 

- Coeficiente de  x^k :  a_k=\frac{f^{(k)}(0)}{k!} . Al revés:  f^{(k)}(0)=k!\,a_k .

- Teorema de Taylor:  f(x)=P_n(x)+R_n(x) , con  \lim_{x\to0}\frac{R_n(x)}{x^n}=0 . El resto  R_n(x)  es un infinitésimo de mayor orden que  x^n .

- Los coeficientes salen de derivar en 0, como en el Ejemplo 32 de las Notas ( e^x ) y en los Ejercicios 4.1 y 4.2.

- El Taylor de un polinomio es el mismo polinomio cortado en el orden pedido.

- "Orden  n " no significa "grado  n ": el Taylor de orden 3 de  \cos x  es  1-\frac{x^2}2 , de grado 2.

Ideas clave:
- a_k=f^{(k)}(0)/k!
- f(x)=P_n(x)+R_n(x) , con  R_n(x)/x^n\to0
- Los coeficientes salen de derivar en 0
- Orden no es lo mismo que grado

Ejemplo: f(0)=2 ,  f'(0)=-1 ,  f''(0)=6 . Escribí  P_2 .
Resolución: P_2(x)=2-x+\frac62x^2=2-x+3x^2 .

## Subtema: Desarrollos notables de memoria
Fuente de la cátedra: Notas C1B 2026, Ejemplo 32 (pág. 61), Ejercicios 4.1 y 4.2 (pág. 66) y sus soluciones (pág. 121)

Así como sabés de memoria que  7\times8=56  y no lo recalculás cada vez, hay cinco o seis desarrollos que conviene saber de memoria. En la prueba no hay materiales, y todos los límites y ejercicios de Taylor se arman a partir de ellos. Si los sabés sin dudar, cada ejercicio se reduce a sumar y restar coeficientes. Es la inversión de tiempo que más rinde en toda la materia.

Función | Desarrollo en 0 (hasta orden 3) | 

 e^x  |  1+x+\frac{x^2}2+\frac{x^3}6  | 

 \text{sen}\,x  |  x-\frac{x^3}6  | 

 \cos x  |  1-\frac{x^2}2  (y  +\frac{x^4}{24} ) | 

 L(1+x)  |  x-\frac{x^2}2+\frac{x^3}3  | 

 \text{Arctg}\,x  |  x-\frac{x^3}3  | 

 \frac1{1-x}  |  1+x+x^2+x^3  | 

Para recordarlos:  e^x  lleva factoriales y todos los signos  + .  \text{sen}  y  \cos  llevan factoriales, solo impares o solo pares, signos alternados.  L(1+x)  y  \text{Arctg}  llevan denominadores 1, 2, 3 (sin factorial);  \text{Arctg}  solo impares. Sale un par útil:  \text{sen}\,x-\text{Arctg}\,x=\frac{x^3}6+R_3(x) .

Todos salen de calcular  f(0),f'(0),f''(0),f'''(0)  y usar la fórmula de Taylor: es lo que hacen el Ejemplo 32 y los Ejercicios 4.1 y 4.2 de las Notas (en las soluciones está, por ejemplo,  \text{Arctg}\,x=x-\frac{x^3}3  hasta orden 3, y  \frac1{1-x}=1+x+x^2  hasta orden 2).

Una forma de fijarlos: escribí la tabla todos los días antes de estudiar, sin mirar, hasta que salga en menos de un minuto. En la prueba, antes de empezar los límites, anotá en un costado los desarrollos que vas a usar con las sustituciones ya hechas. Así separás el trabajo de memoria del trabajo de cuentas.

Ideas clave:
- e^x  y  \text{sen} ,  \cos : factoriales
- L(1+x)  y  \text{Arctg} : denominadores  1,2,3  sin factorial
- \text{sen}  y  \text{Arctg}  difieren en el cúbico:  \frac16  contra  \frac13
- \frac1{1-x}=1+x+x^2+x^3+\dots  (Ej. 4.1 a)

Ejemplo: Desarrollá  \frac1{1+x}  hasta orden 3.
Resolución: Derivando:  f(0)=1 ,  f'(0)=-1 ,  f''(0)=2 ,  f'''(0)=-6 , así que  1-x+\frac22x^2-\frac66x^3=1-x+x^2-x^3  (lo mismo que cambiar  x  por  -x  en  \frac1{1-x} ).

## Subtema: Sustitución: u = ax, u = −x, u = x²
Fuente de la cátedra: Notas C1B 2026, Ejercicios 4.1 d y 4.3 (pág. 66-67); regla de la cadena (clase virtual 7)

Tenés una receta para una persona y cocinás para el doble. No todos los ingredientes se multiplican igual: en Taylor, el término con  x  se multiplica por 2, el de  x^2  por 4, el de  x^3  por 8. Eso pasa cuando cambiás  x  por  2x : cada potencia arrastra su propio factor. Si te olvidás de elevar el 2, el plato sale mal.

Si  f(u)=a_0+a_1u+a_2u^2+a_3u^3+R_3(u)  y  u=cx , entonces

 f(cx)=a_0+a_1c\,x+a_2c^2x^2+a_3c^3x^3+R_3(x) 
Es lo mismo que derivar: si  g(x)=f(cx) , por la regla de la cadena  g^{(k)}(0)=c^k f^{(k)}(0) , así que el coeficiente de  x^k  queda multiplicado por  c^k .

-  e^{-2x}=1-2x+2x^2-\frac43x^3 ;  L(1+3x)=3x-\frac92x^2+9x^3 ;  \cos(3x)=1-\frac92x^2 .

-  u=-x  cambia el signo de las potencias impares:  L(1-x)=-x-\frac{x^2}2-\frac{x^3}3  (todos negativos).

-  u=x^2 : cada potencia se duplica.  e^{x^2}=1+x^2+\frac{x^4}2+R_4(x) ;  \cos(x^2)=1-\frac{x^4}2+R_4(x) . Un desarrollo de orden 2 en  u  ya da orden 4 en  x . Se puede comprobar derivando, como en el Ejercicio 4.1 d de las Notas: el Taylor de orden 2 de  L(1+x^2)  es  x^2 .

Truco de control: el coeficiente de  x^k  en  f(cx)  es  c^k  por el coeficiente original. Si en tu cuenta un  c  no quedó elevado a la potencia correcta, hay error.

Cuando la sustitución lleva signo y número a la vez ( u=-2x ), hacé las dos cosas en cada término:  (-2x)^2=4x^2  (positivo) y  (-2x)^3=-8x^3  (negativo). Por eso  e^{-2x}=1-2x+2x^2-\frac43x^3  alterna signos y  L(1-2x)=-2x-2x^2-\frac83x^3  queda todo negativo.

Ideas clave:
- Coeficiente de  x^k  en  f(cx) :  c^k a_k
- u=-x : cambian de signo las potencias impares
- L(1-cx) : todos los términos negativos
- u=x^2 : el orden en  x  se duplica

Ejemplo: \text{Arctg}(2x)  hasta orden 3.
Resolución: 2x-\frac{(2x)^3}3=2x-\frac83x^3 .

## Subtema: El resto de Taylor e infinitésimos
Fuente de la cátedra: Notas C1B 2026, Observaciones 9, 10 y 11 (pág. 58-60), Teoremas 4.1 y 4.2, Ejemplo 33 (pág. 62)

Cuando contás millones de pesos, los centavos no cambian la cuenta: son chiquitos comparados con lo que estás midiendo. El resto  R_n(x)  del Teorema de Taylor es eso: la diferencia entre la función y su polinomio, que cerca de 0 es muchísimo más chica que  x^n . No se tira sin avisar: se anota  R_n(x)  y se sabe que, dividido  x^n , se va a 0.

Infinitésimos (Notas, Observación 10):  f  es un infinitésimo en  a  si  \lim_{x\to a}f(x)=0 . Si  f  y  g  son infinitésimos en  a  y  \lim_{x\to a}\frac{f(x)}{g(x)}=0 ,  f  es de mayor orden que  g : se acerca a cero más rápido.

- En 0:  x^3  es de mayor orden que  x^2  ( \frac{x^3}{x^2}=x\to0 );  2x^2  no es de mayor orden que  x^2  (el cociente da 2).

- Suma de infinitésimos de distinto orden es equivalente al de menor orden: si  f  es de mayor orden que  g ,  f+g\sim g .

El resto de Taylor (Teorema 4.2 y Observación 11):  f(x)=P_n(x)+R_n(x)  con  \lim_{x\to0}\frac{R_n(x)}{x^n}=0 , o sea que  R_n(x)  es un infinitésimo de mayor orden que  x^n .

Por qué importa en los límites (Ejemplo 33 de las Notas): si el numerador queda  c\,x^k+R_k(x)  y el denominador es  x^k , el límite es  c+\lim\frac{R_k(x)}{x^k}=c . Si en cambio usaste un desarrollo de orden menor que  k , te queda un resto que dividido  x^k  no sabés a qué tiende: hay que desarrollar más.

Ideas clave:
- Infinitésimo en  a :  \lim_{x\to a}f(x)=0
- f  de mayor orden que  g :  f/g\to0
- Suma de infinitésimos de distinto orden: equivale al de menor orden
- R_n(x)/x^n\to0 : el resto no cambia el límite

Ejemplo: Calculá  \lim_{x\to0}\frac{e^x-1-x}{x^2}  escribiendo el resto.
Resolución: e^x=1+x+\frac{x^2}2+R_2(x) . El numerador queda  \frac{x^2}2+R_2(x)  y  \frac{\frac{x^2}2+R_2(x)}{x^2}=\frac12+\frac{R_2(x)}{x^2}\to\frac12  (Ejemplo 33 de las Notas).

## Subtema: Productos de desarrollos y orden necesario
Fuente de la cátedra: Notas C1B 2026, Ejercicios 4.5 b y 4.6 (pág. 67) y sus soluciones (pág. 121-122)

Multiplicar dos desarrollos es como multiplicar dos listas de compras: cada cosa de una lista con cada cosa de la otra. Pero como solo te interesan los productos hasta cierto tamaño (el orden), podés tirar desde el principio las combinaciones que se pasan. Si uno de los factores ya arranca con  x , al otro le alcanza con un orden menos.

Para el Taylor de orden  n  de  f\cdot g : multiplicás los desarrollos y descartás todo término de grado mayor que  n .

-  e^x\,\text{sen}\,x=(1+x+\frac{x^2}2)(x-\frac{x^3}6)+R_3(x)=x+x^2+\frac{x^3}3+R_3(x) .

-  e^x\cos x=(1+x+\frac{x^2}2)(1-\frac{x^2}2)+R_2(x)=1+x+R_2(x) : los  x^2  se cancelan.

- Factor  x^k  adelante: para  x^k\,g(x)  hasta orden  n , a  g  le alcanza con orden  n-k .  x\,L(1+x)  hasta orden 3 pide  L  hasta orden 2:  x^2-\frac{x^3}2 .

- Si un factor arranca en  x^m  (como  \text{sen}\,x ), el otro necesita solo orden  n-m .

En los límites esto aparece en términos como  x\,\text{sen}\,x ,  x\,e^{-x}  o  2x\,e^x : no los desarrolles de más, pero tampoco de menos.

Una regla de control rápida: el grado más bajo de un producto es la suma de los grados más bajos de los factores.  x\cdot\text{sen}\,x  arranca en  x^2 ,  x^2\cos x  en  x^2 ,  \text{sen}\,x\cdot L(1+x)  en  x^2 . Si tu resultado arranca antes, hay un error.

Ideas clave:
- Multiplicá y tirá los grados mayores que  n
- Factor  x^k : el otro alcanza con orden  n-k
- e^x\,\text{sen}\,x=x+x^2+\frac{x^3}3+\dots
- Pueden cancelarse términos al multiplicar

Ejemplo: Taylor de orden 3 de  x\,e^{-x} .
Resolución: x(1-x+\frac{x^2}2)=x-x^2+\frac{x^3}2 .
