# Cálculo 1B · Unidad 5: Polinomio de Taylor y desarrollos notables

Material para la 1ª revisión de octubre 2026 (FCEA-UDELAR). Peso en el parcial según los parciales anteriores: 0% del puntaje, prioridad alta.
Nunca se pregunta sola, pero sostiene P2, P5 y P9 (30% del puntaje). Sin materiales: los desarrollos de e^x, \text{sen}, \cos, L(1+x), \text{Arctg} tienen que salir de memoria hasta orden 3.

## Explicación simple
Imaginá que tenés que describirle a alguien por teléfono una montaña rusa, pero solo cerca de la estación. Primero le decís la altura en la estación (orden 0). Después si sube o baja (orden 1). Después si la curva se está doblando hacia arriba o hacia abajo (orden 2). Cuanto más datos das, mejor se parece tu descripción a la montaña real, al menos cerca de la estación.
El polinomio de Taylor es eso: una "copia barata" de una función complicada hecha solo con potencias de  x . Cerca de 0,  e^x  se comporta casi igual que  1+x+\frac{x^2}{2} . Aprenderte cinco copias baratas de memoria te resuelve varias preguntas del parcial.

## Explicación para el parcial
Definición

El polinomio de Taylor de orden  n  de  f  en 0 es

 P_n(x)=f(0)+f'(0)x+\frac{f''(0)}{2}x^2+\frac{f'''(0)}{3!}x^3+\dots+\frac{f^{(n)}(0)}{n!}x^n 

y se cumple  f(x)=P_n(x)+o(x^n) , donde  o(x^n)  ("o chica") es un resto que, dividido  x^n , tiende a 0 cuando  x\to0 . Traducción: el error es mucho más chico que  x^n .

Tabla que tenés que saber de memoria (hasta orden 4)

Función
 | 
Desarrollo en 0
 | 

 e^x 
 | 
 1+x+\frac{x^2}{2}+\frac{x^3}{6}+\frac{x^4}{24}+o(x^4) 
 | 

 \text{sen}\,x 
 | 
 x-\frac{x^3}{6}+o(x^4) 
 | 

 \cos x 
 | 
 1-\frac{x^2}{2}+\frac{x^4}{24}+o(x^4) 
 | 

 L(1+x) 
 | 
 x-\frac{x^2}{2}+\frac{x^3}{3}-\frac{x^4}{4}+o(x^4) 
 | 

 \text{Arctg}\,x 
 | 
 x-\frac{x^3}{3}+o(x^4) 
 | 

 (1+x)^a 
 | 
 1+ax+\frac{a(a-1)}{2}x^2+\frac{a(a-1)(a-2)}{6}x^3+o(x^3) 
 | 

Cómo recordarlas:  e^x  tiene todos los términos con  1/k! . El seno tiene solo potencias impares con signos alternados; el coseno, solo pares.  L(1+x)  tiene  1/k  (no factorial) con signos alternados.  \text{Arctg}  es "como el seno pero con denominadores 1, 3, 5".

Sustitución: la herramienta que más se usa

Si sabés el desarrollo de  f(u) , para  f(2x)  o  f(-x)  reemplazás  u  por  2x  o  -x , con cuidado con las potencias:

- 
 \text{sen}(2x)=2x-\frac{(2x)^3}{6}+\dots=2x-\frac{4x^3}{3}+\dots 

- 
 \cos(2x)=1-\frac{(2x)^2}{2}+\dots=1-2x^2+\dots 

- 
 e^{-x}=1-x+\frac{x^2}{2}-\frac{x^3}{6}+\dots 

- 
 e^{-2x}=1-2x+2x^2-\frac43x^3+\dots 

- 
 L(1-2x)=-2x-\frac{(2x)^2}{2}-\frac{(2x)^3}{3}-\dots=-2x-2x^2-\frac83x^3-\dots 

- 
 L(1+2x)=2x-2x^2+\frac83x^3-\dots 

Álgebra de  o(\cdot) 

- 
 o(x^n)+o(x^n)=o(x^n) ;  c\cdot o(x^n)=o(x^n) ;  x^k\cdot o(x^n)=o(x^{n+k}) .
- 
Si  m\gt n ,  x^m=o(x^n) : los términos de grado mayor se "tiran" al resto.

Para qué sirve en el parcial

Este tema es la base de tres preguntas: los dos o tres límites (molde d) y la pregunta de Taylor con extremos u operaciones (molde i). No se pregunta "escribí el desarrollo de tal función" directamente, pero si te equivocás en un coeficiente de la tabla, se cae todo lo demás. Por eso la tabla hay que saberla de memoria, sin dudar, y practicar las sustituciones con  2x ,  -x  y  -2x , que son las que más aparecen. Un buen ejercicio es escribirla de cero todos los días hasta la prueba, y chequear cada coeficiente derivando la función en 0 cuando tengas dudas: por ejemplo, el coeficiente de  x^2  en  e^{-2x}  tiene que ser  f''(0)/2=4/2=2 .

## Cómo se resuelve en el parcial
- 
Identificá la función base ( e^u ,  \text{sen}\,u ,  \cos u ,  L(1+u) ,  \text{Arctg}\,u ).
- 
Escribí su desarrollo con  u .
- 
Sustituí  u  por lo que corresponda ( 2x ,  -x ,  -2x ) elevando bien las potencias.
- 
Cortá en el orden que necesitás y agregá  o(x^n) .

## Trampas típicas
- 
Olvidar elevar el coeficiente:  (2x)^2=4x^2 , no  2x^2 .
- 
Poner factoriales en  L(1+x) : es  x-\frac{x^2}{2}+\frac{x^3}{3} , el 3 no es  3!=6 .
- 
Confundir los signos de  L(1-2x) : todos los términos quedan negativos.
- 
Olvidar el 1 inicial de  e^x  y  \cos x .
- 
Confundir el seno con el Arctg en el término cúbico:  -\frac{x^3}{6}  vs  -\frac{x^3}{3} .

## Ejercicio resuelto
Escribí el desarrollo de orden 3 en 0 de  e^{-2x}+\text{sen}(2x) .
Solución:
e^{-2x}=1-2x+\frac{4x^2}{2}-\frac{8x^3}{6}+o(x^3)=1-2x+2x^2-\frac43x^3+o(x^3) .
 \text{sen}(2x)=2x-\frac{8x^3}{6}+o(x^3)=2x-\frac43x^3+o(x^3) .
Suma:  1+2x^2-\frac83x^3+o(x^3) . Fijate que los términos en  x  se cancelaron.

## Subtema: Definición del polinomio de Taylor
Querés copiar una curva con una regla flexible, pero solo cerca de un punto. Primero la ponés a la misma altura que la curva. Después le das la misma inclinación. Después la doblás con la misma curvatura. Cada paso la parece más a la curva cerca de ese punto. El polinomio de Taylor es eso: un polinomio que copia la altura, la inclinación, la curvatura (y así) de la función en 0.

El polinomio de Taylor de orden  n  de  f  en 0 es

 P_n(x)=\sum_{k=0}^{n}\frac{f^{(k)}(0)}{k!}x^k=f(0)+f'(0)x+\frac{f''(0)}{2}x^2+\frac{f'''(0)}{6}x^3+\dots 

- 
Coeficiente de  x^k :  a_k=\frac{f^{(k)}(0)}{k!} . Al revés:  f^{(k)}(0)=k!\,a_k .

- 
Cumple  f(x)=P_n(x)+o(x^n) : la diferencia, dividida  x^n , tiende a 0.

- 
Unicidad:
 si encontrás un polinomio  Q  de grado  \le n  con  f(x)=Q(x)+o(x^n) , entonces  Q  es el Taylor. Por eso se puede calcular sustituyendo, sumando y multiplicando desarrollos conocidos, sin derivar.

- 
El Taylor de un polinomio es el mismo polinomio cortado en el orden pedido.

- 
"Orden  n " no significa "grado  n ": el Taylor de orden 3 de  \cos x  es  1-\frac{x^2}2 , de grado 2.
Ideas clave:
- a_k=f^{(k)}(0)/k!
- f=P_n+o(x^n)
- Unicidad: cualquier camino que dé  f=Q+o(x^n)  sirve
- Orden no es lo mismo que grado
Mini ejercicio: f(0)=2 ,  f'(0)=-1 ,  f''(0)=6 . Escribí  P_2 .
Solución: P_2(x)=2-x+\frac62x^2=2-x+3x^2 .

## Subtema: Desarrollos notables de memoria
Así como sabés de memoria que  7\times8=56  y no lo recalculás cada vez, hay cinco o seis desarrollos que conviene saber de memoria. En la prueba no hay materiales, y todos los límites y ejercicios de Taylor se arman a partir de ellos. Si los sabés sin dudar, cada ejercicio se reduce a sumar y restar coeficientes. Es la inversión de tiempo que más rinde en toda la materia.

Función
 | 
Desarrollo en 0 (hasta orden 3)
 | 

 e^x 
 | 
 1+x+\frac{x^2}2+\frac{x^3}6 
 | 

 \text{sen}\,x 
 | 
 x-\frac{x^3}6 
 | 

 \cos x 
 | 
 1-\frac{x^2}2  (y  +\frac{x^4}{24} )
 | 

 L(1+x) 
 | 
 x-\frac{x^2}2+\frac{x^3}3 
 | 

 \text{Arctg}\,x 
 | 
 x-\frac{x^3}3 
 | 

 \frac1{1-x} 
 | 
 1+x+x^2+x^3 
 | 

 \sqrt{1+x} 
 | 
 1+\frac x2-\frac{x^2}8+\frac{x^3}{16} 
 | 

Para recordarlos:
  e^x  lleva factoriales y todos los signos  + .  \text{sen}  y  \cos  llevan factoriales, solo impares o solo pares, signos alternados.  L(1+x)  y  \text{Arctg}  llevan denominadores 1, 2, 3 (sin factorial);  \text{Arctg}  solo impares. Sale un par útil:  \text{sen}\,x-\text{Arctg}\,x=\frac{x^3}6+o(x^3) .

 (1+x)^\alpha=1+\alpha x+\frac{\alpha(\alpha-1)}2x^2+\dots  incluye  \sqrt{1+x}  ( \alpha=\frac12 ) y  \frac1{1+x}  ( \alpha=-1 ).

Una forma de fijarlos: escribí la tabla todos los días antes de estudiar, sin mirar, hasta que salga en menos de un minuto. En la prueba, antes de empezar los límites, anotá en un costado los desarrollos que vas a usar con las sustituciones ya hechas. Así separás el trabajo de memoria del trabajo de cuentas.
Ideas clave:
- e^x  y  \text{sen} ,  \cos : factoriales
- L(1+x)  y  \text{Arctg} : denominadores  1,2,3  sin factorial
- \text{sen}  y  \text{Arctg}  difieren en el cúbico:  \frac16  contra  \frac13
- (1+x)^\alpha  cubre raíces y recíprocos
Mini ejercicio: Desarrollá  \frac1{1+x}  hasta orden 3.
Solución: Con  \alpha=-1 , o cambiando  x  por  -x  en  \frac1{1-x} :  1-x+x^2-x^3 .

## Subtema: Sustitución: u = ax, u = −x, u = x²
Tenés una receta para una persona y cocinás para el doble. No todos los ingredientes se multiplican igual: en Taylor, el término con  x  se multiplica por 2, el de  x^2  por 4, el de  x^3  por 8. Eso pasa cuando cambiás  x  por  2x : cada potencia arrastra su propio factor. Si te olvidás de elevar el 2, el plato sale mal.

Si  f(u)=a_0+a_1u+a_2u^2+a_3u^3+o(u^3)  y  u=cx , entonces

 f(cx)=a_0+a_1c\,x+a_2c^2x^2+a_3c^3x^3+o(x^3) 

- 
 e^{-2x}=1-2x+2x^2-\frac43x^3 ;  L(1+3x)=3x-\frac92x^2+9x^3 ;  \cos(3x)=1-\frac92x^2 .

- 
 u=-x  cambia el signo de las potencias impares:  L(1-x)=-x-\frac{x^2}2-\frac{x^3}3  (todos negativos).

- 
 u=x^2 : cada potencia se duplica.  e^{x^2}=1+x^2+\frac{x^4}2+o(x^4) ;  \cos(x^2)=1-\frac{x^4}2+o(x^4) . Un desarrollo de orden 2 en  u  ya da orden 4 en  x .

Truco de control: el coeficiente de  x^k  en  f(cx)  es  c^k  por el coeficiente original. Si en tu cuenta un  c  no quedó elevado a la potencia correcta, hay error.

Cuando la sustitución lleva signo y número a la vez ( u=-2x ), hacé las dos cosas en cada término:  (-2x)^2=4x^2  (positivo) y  (-2x)^3=-8x^3  (negativo). Por eso  e^{-2x}=1-2x+2x^2-\frac43x^3  alterna signos y  L(1-2x)=-2x-2x^2-\frac83x^3  queda todo negativo.
Ideas clave:
- Coeficiente de  x^k  en  f(cx) :  c^k a_k
- u=-x : cambian de signo las potencias impares
- L(1-cx) : todos los términos negativos
- u=x^2 : el orden en  x  se duplica
Mini ejercicio: \text{Arctg}(2x)  hasta orden 3.
Solución: 2x-\frac{(2x)^3}3=2x-\frac83x^3 .

## Subtema: Notación o chica
Cuando contás millones de pesos, los centavos no importan: son "chiquitos comparados con" lo que estás contando. La o chica es exactamente eso. Escribir  o(x^2)  quiere decir "algo que, cerca de 0, es muchísimo más chico que  x^2 ". Es la forma de tirar los centavos sin mentir: dejás anotado que había algo, pero que no va a cambiar el resultado.

g(x)=o(x^n)  cuando  x\to0  significa  \lim_{x\to0}\frac{g(x)}{x^n}=0 .

- 
Ejemplos:  x^3=o(x^2) ,  x^4=o(x^2) , pero  x^2  no es  o(x^2)  ni  o(x^3) .

- 
 o(x^n)\pm o(x^n)=o(x^n)  (no se cancelan: "algo chico menos algo chico" sigue siendo chico).

- 
 c\cdot o(x^n)=o(x^n)  para  c\neq0  constante.

- 
 x^k\cdot o(x^n)=o(x^{n+k})  y  \frac{o(x^n)}{x^k}=o(x^{n-k}) .

- 
 o(x^n)+o(x^m)=o(x^{\min(n,m)}) : manda el más grueso.

- 
Si  m\gt n , todo  o(x^m)  es también  o(x^n) .

Por qué importa en los límites: si el numerador es  c\,x^k+o(x^k)  y el denominador  x^k , el límite es  c , porque  \frac{o(x^k)}{x^k}\to0 .

En la práctica, la o chica es la etiqueta que te recuerda hasta dónde es confiable tu cuenta. Si escribís  \text{sen}\,x=x+o(x^2) , podés usarlo en un límite con  x^2  abajo, pero no con  x^3 . Y como  o(x^2)-o(x^2)  no es 0, dos restos nunca se cancelan entre sí: si tu numerador quedó solo con restos, te faltó desarrollar más.
Ideas clave:
- g=o(x^n) \iff g/x^n\to0
- o(x^n)-o(x^n)=o(x^n) , no 0
- x^k\,o(x^n)=o(x^{n+k})
- En una suma manda la o de menor exponente
Mini ejercicio: Simplificá  x\cdot\big(x^2+o(x^2)\big)+o(x^4) .
Solución: x^3+o(x^3)+o(x^4)=x^3+o(x^3) .

## Subtema: Productos de desarrollos y orden necesario
Multiplicar dos desarrollos es como multiplicar dos listas de compras: cada cosa de una lista con cada cosa de la otra. Pero como solo te interesan los productos hasta cierto tamaño (el orden), podés tirar desde el principio las combinaciones que se pasan. Si uno de los factores ya arranca con  x , al otro le alcanza con un orden menos.

Para el Taylor de orden  n  de  f\cdot g : multiplicás los desarrollos y descartás todo término de grado mayor que  n .

- 
 e^x\,\text{sen}\,x=(1+x+\frac{x^2}2)(x-\frac{x^3}6)+o(x^3)=x+x^2+\frac{x^3}3+o(x^3) .

- 
 e^x\cos x=(1+x+\frac{x^2}2)(1-\frac{x^2}2)+o(x^2)=1+x+o(x^2) : los  x^2  se cancelan.

- 
Factor  x^k  adelante:
 para  x^k\,g(x)  hasta orden  n , a  g  le alcanza con orden  n-k .  x\,L(1+x)  hasta orden 3 pide  L  hasta orden 2:  x^2-\frac{x^3}2 .

- 
Si un factor arranca en  x^m  (como  \text{sen}\,x ), el otro necesita solo orden  n-m .

En los límites esto aparece en términos como  x\,\text{sen}\,x ,  x\,e^{-x}  o  2x\,e^x : no los desarrolles de más, pero tampoco de menos.

Una regla de control rápida: el grado más bajo de un producto es la suma de los grados más bajos de los factores.  x\cdot\text{sen}\,x  arranca en  x^2 ,  x^2\cos x  en  x^2 ,  \text{sen}\,x\cdot L(1+x)  en  x^2 . Si tu resultado arranca antes, hay un error.
Ideas clave:
- Multiplicá y tirá los grados mayores que  n
- Factor  x^k : el otro alcanza con orden  n-k
- e^x\,\text{sen}\,x=x+x^2+\frac{x^3}3+\dots
- Pueden cancelarse términos al multiplicar
Mini ejercicio: Taylor de orden 3 de  x\,e^{-x} .
Solución: x(1-x+\frac{x^2}2)=x-x^2+\frac{x^3}2 .