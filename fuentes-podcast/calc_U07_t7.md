# Cálculo 1B · Unidad 7: Taylor al revés: derivadas en 0, extremos relativos y operaciones con polinomios

Material para la 1ª revisión de octubre 2026 (FCEA-UDELAR). Peso en el parcial según los parciales anteriores: 10% del puntaje, prioridad alta.
1 pregunta fija (P9), la más variable en su pedido (suma de derivadas, Q(1), extremos).

## Explicación simple
El polinomio de Taylor es como la ficha técnica de un auto: si te la dan, podés leer directamente la velocidad ( f' ) y la aceleración ( f'' ) sin ver el auto. Si el auto está quieto (velocidad 0) y la aceleración es positiva, está en un "pozo" (mínimo): cualquier movimiento lo sube. Si la aceleración es negativa, está en una "loma" (máximo).
Y si te piden la ficha de un auto que es combinación de otros (por ejemplo "dos veces este más tres veces su velocidad"), combinás las fichas en vez de pelearte con el auto real.

## Explicación para el parcial
Leer las derivadas del polinomio

Si  P(x)=a_0+a_1x+a_2x^2  es el Taylor de orden 2 de  f  en 0, entonces

 f(0)=a_0,\qquad f'(0)=a_1,\qquad f''(0)=2a_2 

Ejemplo:  P(x)=1-2x+4x^2 \Rightarrow f(0)=1 ,  f'(0)=-2 ,  f''(0)=8 . 
Ojo: el coeficiente de  x^2  es  f''(0)/2 , no  f''(0) .

Extremos relativos

- 
Si  f'(0)=0  y  f''(0)\gt0 : 
mínimo relativo
 en 0.
- 
Si  f'(0)=0  y  f''(0)\lt0 : 
máximo relativo
 en 0.
- 
Si  f'(0)\neq0 : no hay extremo en 0 (la función está subiendo o bajando).

En la práctica: si  P(x)=a_0+a_2x^2  (sin término en  x ), el signo de  a_2  decide: positivo mínimo, negativo máximo.

Operaciones con polinomios de Taylor

Para una  g  armada con  f , hay dos caminos:

- 
Derivar a mano
 y evaluar en 0 usando  f(0),f'(0),f''(0) . Sirve siempre.

- 
Operar polinomios
: sumás, restás o multiplicás los Taylor y cortás en el orden pedido.

 g 
 | 
 g(0) 
 | 
 g'(0) 
 | 
 g''(0) 
 | 

 2f+3f' 
 | 
 2f(0)+3f'(0) 
 | 
 2f'(0)+3f''(0) 
 | 
necesita  f'''(0) 
 | 

 f'/f 
 | 
 f'(0)/f(0) 
 | 
 \frac{f''(0)f(0)-f'(0)^2}{f(0)^2} 
 | 
no se pide
 | 

 L(f) 
 | 
 L(f(0)) 
 | 
 f'(0)/f(0) 
 | 
 \frac{f''(0)f(0)-f'(0)^2}{f(0)^2} 
 | 

 2\cos(2x)-f 
 | 
restá polinomios:  2(1-2x^2)-P(x) 
 | 

Por eso con un Taylor de orden 2 de  f  solo podés sacar el Taylor de orden 1 de  f'  o de  f'/f : al derivar se "pierde" un orden. Por eso el parcial pide  Q  de orden 1.

Una vez que tenés  Q(x)=g(0)+g'(0)x , evaluás lo que te pidan, por ejemplo  Q(1)=g(0)+g'(0) .

Cómo se ve en el parcial

Aparece siempre en una de dos versiones. La primera trae dos afirmaciones sobre extremos (una de  f  y otra de una  g  armada con  f  y alguna función conocida) y tenés que decir cuáles son verdaderas. La segunda te pide el polinomio de orden 1 de una  g  como  2f+3f' ,  f'/f  o  L(f) , evaluado en algún punto. En los dos casos, el primer paso es el mismo: leer  f(0) ,  f'(0)  y  f''(0)  del polinomio que te dan, sin olvidar multiplicar por 2 el coeficiente de  x^2 . Después es aplicar reglas de derivación que ya conocés y evaluar en 0. No hace falta saber quién es  f : con los tres números alcanza.

## Cómo se resuelve en el parcial
- 
Del polinomio  P , anotá  f(0) ,  f'(0) ,  f''(0)=2\cdot (coef. de  x^2 ).
- 
Extremos: si  f'(0)=0 , mirá el signo de  f''(0) .
- 
Para  g : derivala con reglas generales (producto, cociente, cadena), evaluá en 0 con los datos.
- 
Si  g  es suma de funciones con desarrollo conocido (ej.  2\cos 2x-f ), restá polinomios directamente.
- 
Armá  Q  y evaluá donde pidan.

## Trampas típicas
- 
Tomar  f''(0)=a_2  en vez de  2a_2 .
- 
Decir "hay máximo" cuando  f'(0)\neq0 .
- 
En  2\cos(2x)-f , olvidar el 2 que multiplica o el  2x  de adentro:  2\cos 2x=2-4x^2+\dots 
- 
Olvidar el cuadrado en el cociente:  (f'/f)'=\frac{f''f-(f')^2}{f^2} .
- 
Confundir "Taylor de orden 1 de  g " con "Taylor de orden 2".

## Ejercicio resuelto
El Taylor de orden 2 de  f  en 0 es  P(x)=1-3x+x^2  y  g(x)=L(f(x)) . Calculá  g(0)+g'(0)+g''(0) .
Solución:
f(0)=1 ,  f'(0)=-3 ,  f''(0)=2 .
 g(0)=L(1)=0 .  g'=\frac{f'}{f} \Rightarrow g'(0)=-3 .  g''=\frac{f''f-(f')^2}{f^2}\Rightarrow g''(0)=\frac{2-9}{1}=-7 .
Suma:  0-3-7=-10 .

## Cómo aparece en la prueba
- P9 (7/7): Taylor al revés / operaciones con el polinomio. Dan el polinomio de orden 2 de f en 0 y definen g a partir de f. Evolución: 2023-2024 pedían g(0)+g'(0)+g''(0) con g=(2x+1)f, L(f), L(f-1); oct 2024 a oct 2025 pedían Q(1) con g=\frac1f, \frac{f'}f, 2f+3f'; mayo 2026 pidió afirmaciones sobre máximos/mínimos de f y de g=2\cos(2x)-f. Consejo: Leé de P: f(0) = término independiente, f'(0) = coef. de x, f''(0)=2\cdotcoef. de x^2. Trampa clásica: usar el coeficiente como si fuera f''(0). Para extremos: f'(0)=0 y el signo de f''(0).

## Subtema: Leer f(0), f'(0) y f''(0) del polinomio
El polinomio de Taylor es como la ficha técnica de la función en 0: el primer número es la altura, el segundo la inclinación, el tercero dice cuánto se curva. Pero el tercero viene "dividido entre 2" de fábrica. Si alguien te pregunta la curvatura verdadera ( f''(0) ), tenés que multiplicar ese número por 2. Olvidarse del 2 es el error más común de todo el tema.

Si  P(x)=a_0+a_1x+a_2x^2  es el Taylor de orden 2 de  f  en 0:

 f(0)=a_0,\qquad f'(0)=a_1,\qquad f''(0)=2a_2 

En general  f^{(k)}(0)=k!\,a_k : para orden 3,  f'''(0)=6a_3 .

- 
Ejemplo:  P(x)=3-4x+5x^2 \Rightarrow f(0)=3 ,  f'(0)=-4 ,  f''(0)=10 .

- 
El Taylor de orden 1 de  f'  se obtiene derivando  P :  P'(x)=a_1+2a_2x . Por eso de un Taylor de orden 2 de  f  solo sale uno de orden 1 de  f' .

- 
Si te dan  f  explícita (por ejemplo  e^{3x} ),  f''(0)  es 2 por el coeficiente de  x^2 :  e^{3x}=1+3x+\frac92x^2 \Rightarrow f''(0)=9 .

En 2023 y mayo 2024 pedían  g(0)+g'(0)+g''(0) : cada término sale de esta lectura, y el  g''  es donde se pierde el 2.
Ideas clave:
- f(0)=a_0 ,  f'(0)=a_1 ,  f''(0)=2a_2
- En general  f^{(k)}(0)=k!\,a_k
- Derivar  P  da el Taylor de  f'  con un orden menos
- El 2 de  f''  es la trampa clásica
Mini ejercicio: P(x)=2+x-3x^2 . Calculá  f(0)+f'(0)+f''(0) .
Solución: 2+1+2(-3)=-3 . Si usás  -3  como  f''(0)  te da 0, que suele estar entre las opciones.

## Subtema: Extremos relativos en 0
Parado en la punta de una montaña, el piso está horizontal y todo alrededor está más abajo: eso es un máximo. En el fondo de un pozo, piso horizontal y todo alrededor más arriba: mínimo. Si el piso está inclinado, no estás ni en la punta ni en el fondo, estás en una ladera. El polinomio de Taylor te dice justo eso: si hay término con  x , estás en una ladera; si no lo hay, el signo del  x^2  te dice si es pozo o montaña.

Condición
 | 
Conclusión en 0
 | 

 f'(0)\neq0  ( a_1\neq0 )
 | 
no hay extremo
 | 

 f'(0)=0  y  f''(0)\gt0  ( a_1=0 ,  a_2\gt0 )
 | 
mínimo relativo
 | 

 f'(0)=0  y  f''(0)\lt0  ( a_1=0 ,  a_2\lt0 )
 | 
máximo relativo
 | 

 f'(0)=0  y  f''(0)=0 
 | 
el orden 2 no alcanza: mirar el primer término no nulo
 | 

Si hace falta ir más lejos: primer término no nulo después del constante  a_kx^k . Con  k  par, extremo (mínimo si  a_k\gt0 , máximo si  a_k\lt0 ); con  k  impar, no hay extremo.

Molde de mayo 2026: dos afirmaciones, una sobre  f  y otra sobre  g  armada con  f  y una función conocida ( 2\cos(2x)-f ). Para  g , calculá su polinomio restando o sumando desarrollos, y aplicá la misma tabla.
Ideas clave:
- Término en  x  no nulo: no hay extremo
- Sin término en  x : el signo de  a_2  decide
- a_2\gt0  mínimo,  a_2\lt0  máximo
- Para  g , armá su polinomio y aplicá lo mismo
Mini ejercicio: P(x)=1+3x^2 ,  g(x)=f(x)-2\cos x . ¿Qué pasa en 0?
Solución: f : mínimo ( a_2=3\gt0 ).  g=1+3x^2-2+x^2=-1+4x^2 : también mínimo.

## Subtema: Combinaciones con f y f': el polinomio Q de g
Te dan la ficha técnica de  f  y te piden la de otra función armada con  f  y su derivada. No necesitás saber quién es  f : alcanza con los tres números de la ficha. Derivás  g  con las reglas de siempre y cada vez que aparece  f(0) ,  f'(0)  o  f''(0) , lo reemplazás por el número que leíste del polinomio.

Molde de octubre 2024 a octubre 2025: dan  P  de orden 2 de  f , definen  g  y piden  Q(1) , donde  Q  es el Taylor de orden 1 de  g . Como  Q(x)=g(0)+g'(0)x , queda  Q(1)=g(0)+g'(0) .

 g 
 | 
 g(0) 
 | 
 g'(0) 
 | 

 \alpha f+\beta f' 
 | 
 \alpha f(0)+\beta f'(0) 
 | 
 \alpha f'(0)+\beta f''(0) 
 | 

 f\cdot f' 
 | 
 f(0)f'(0) 
 | 
 f'(0)^2+f(0)f''(0) 
 | 

 \frac{f'}{f} 
 | 
 \frac{f'(0)}{f(0)} 
 | 
 \frac{f''(0)f(0)-f'(0)^2}{f(0)^2} 
 | 

 (x+c)\,f 
 | 
 c\,f(0) 
 | 
 f(0)+c\,f'(0) 
 | 

Con  f'  en la fórmula de  g , la derivada de  g  pide  f'' : por eso se puede llegar solo a orden 1. Si  g  no tiene  f'  (como  (x+2)f ), se puede llegar a orden 2, y ahí conviene multiplicar polinomios:  (x+2)(1-x+2x^2)=2-x+3x^2+\dots , y leer  g''(0)=6 .
Ideas clave:
- Q(1)=g(0)+g'(0)
- Derivar  g  y reemplazar con  f(0),f'(0),f''(0)
- f''(0)=2a_2 , no  a_2
- Sin  f'  en  g : multiplicar polinomios es más rápido
Mini ejercicio: P(x)=2+3x-x^2 ,  g=3f-f' . Calculá  Q(1) .
Solución: g(0)=6-3=3 ;  g'(0)=3\cdot3-f''(0)=9-(-2)=11 .  Q(1)=14 .

## Subtema: Composiciones: L(f), 1/f, e^f, f², √f
Ahora  f  está adentro de otra función, como un regalo dentro de una caja. Para saber cómo cambia la caja, usás la regla de la cadena: derivada de la caja evaluada en lo que hay adentro, por la derivada de lo de adentro. Otra forma, a veces más cómoda: si  f(0)=1 , escribís  f=1+u  con  u  chiquito, y usás el desarrollo que ya sabés de  L(1+u)  o de  e^u .

g 
 | 
 g'(0) 
 | 
 g''(0) 
 | 

 L(f) 
 | 
 \frac{f'(0)}{f(0)} 
 | 
 \frac{f''(0)f(0)-f'(0)^2}{f(0)^2} 
 | 

 \frac1f 
 | 
 -\frac{f'(0)}{f(0)^2} 
 | 
(rara vez se pide)
 | 

 e^{f} 
 | 
 e^{f(0)}f'(0) 
 | 
 e^{f(0)}\left(f''(0)+f'(0)^2\right) 
 | 

 f^2 
 | 
 2f(0)f'(0) 
 | 
 2\left(f'(0)^2+f(0)f''(0)\right) 
 | 

 \sqrt f 
 | 
 \frac{f'(0)}{2\sqrt{f(0)}} 
 | 
(rara vez se pide)
 | 

Por sustitución
, con  P=1+u  y  u=2x-x^2 :  L(f)=u-\frac{u^2}2+o(x^2)=2x-x^2-2x^2=2x-3x^2 . Al elevar  u  al cuadrado solo te quedás con los términos de grado  \le2 .

 f^2  conviene hacerlo multiplicando:  (3-x+2x^2)^2=9-6x+(1+12)x^2+\dots . No es "elevar cada coeficiente al cuadrado".

Elegí el camino según la  g : para  \frac1f  y  \sqrt f  conviene la fórmula de la derivada (solo piden orden 1); para  L(f)  y  e^{f}  con orden 2, la sustitución suele ser más corta y con menos riesgo de olvidar un término. Si  f(0)\neq1  en  L(f) , la constante sale afuera:  L(f)=L(f(0))+L\!\left(1+\frac{f-f(0)}{f(0)}\right) .
Ideas clave:
- (L f)'(0)=f'(0)/f(0)
- (e^f)''(0)=e^{f(0)}(f''(0)+f'(0)^2)
- f=1+u : usá  L(1+u)  o  e^u  conocidos
- f^2 : multiplicá polinomios, no eleves coeficientes
Mini ejercicio: P(x)=2+4x+x^2 ,  g=\frac1f . Calculá  Q(1)  (Taylor de orden 1 de  g ).
Solución: g(0)=\frac12 ,  g'(0)=-\frac{4}{4}=-1 .  Q(1)=\frac12-1=-\frac12 .

## Subtema: Combinaciones con funciones conocidas
Te dan la ficha técnica de  f  y te piden la de " f  menos un coseno" o " f  más un logaritmo". Como el coseno y el logaritmo ya tienen ficha conocida (su desarrollo de Taylor), se restan o suman ficha con ficha, número con número. Es como sumar dos listas de precios: cada renglón con su renglón. Después, con la ficha nueva, contestás lo que te pregunten.

Si  g=f\pm c\,h  con  h  conocida, su Taylor es  P\pm c\,T_h , donde  T_h  es el desarrollo de  h  hasta el mismo orden. Si  g=f\cdot h , se multiplican y se corta.

- 
 g=2\cos(2x)-f ,  P=1-2x^2 :  2(1-2x^2)-(1-2x^2)=1-2x^2  (mayo 2026: máximo).

- 
 g=f-e^x ,  P=1+x+2x^2 :  (1+x+2x^2)-(1+x+\frac{x^2}2)=\frac32x^2 :  g(0)=g'(0)=0 ,  g''(0)=3 , mínimo.

- 
 g=f+L(1+2x) ,  P=2-2x+x^2 :  2-2x+x^2+2x-2x^2=2-x^2 : máximo.

- 
 g=f\cos x ,  P=1-2x^2 :  (1-2x^2)(1-\frac{x^2}2)=1-\frac52x^2 .

Controles: el coeficiente constante de  \cos  y de  e^x  es 1 (si hay un 2 o un 3 adelante, multiplica también al 1);  \cos(2x)  lleva  -2x^2 , no  -x^2 . Una vez que tenés el polinomio de  g , leé lo que te pidan como en t7.1 y t7.2.
Ideas clave:
- Sumar o restar polinomios renglón por renglón
- El factor de adelante multiplica también la constante
- \cos(2x)=1-2x^2 ,  L(1+2x)=2x-2x^2
- Después leé  g(0),g'(0),g''(0)  o el extremo
Mini ejercicio: P(x)=3+x^2 ,  g=f-3\cos x . ¿Qué tiene  g  en 0?
Solución: 3+x^2-3+\frac32x^2=\frac52x^2 :  g'(0)=0 ,  g''(0)=5\gt0 , mínimo.