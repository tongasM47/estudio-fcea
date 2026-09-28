# Cálculo 1B · Unidad 1: Repaso exprés: funciones elementales y derivadas

Material para la 1ª revisión de octubre 2026 (FCEA-UDELAR). Peso en el parcial según los parciales anteriores: 0% del puntaje, prioridad media.
Base de todo: gráficos de e^x, L, \cos, \text{Arctg} (P3, P4) y derivadas (P6, P7, P9). Inferencia: no hay pregunta propia.

## Explicación simple
Pensá en las funciones como máquinas: metés un número, sale otro. Para este parcial usás siempre las mismas seis o siete máquinas:  e^x ,  L(x) ,  \text{sen}\,x ,  \cos x ,  \text{Arctg}\,x , las potencias y las raíces. Si conocés bien cada una (qué números acepta, qué números puede devolver y si "sube" o "baja"), el resto del parcial es combinar piezas conocidas, como armar con Legos.
La derivada es el "velocímetro" de la máquina: te dice qué tan rápido cambia la salida cuando movés un poquito la entrada. Si el velocímetro marca positivo, la función sube; si marca negativo, baja. Con eso solo ya resolvés media prueba.

## Explicación para el parcial
Este tema no se pregunta solo, pero está adentro de las 10 preguntas. Si no tenés claro el dominio, la imagen y la monotonía de las funciones elementales, no podés decidir si una función es inyectiva, ni hallar una inversa, ni escribir un Taylor.

Ficha de cada función

Función
 | 
Dominio
 | 
Imagen (recorrido)
 | 
Monotonía
 | 
Derivada
 | 

 e^x 
 | 
 \mathbb{R} 
 | 
 (0,+\infty) 
 | 
creciente
 | 
 e^x 
 | 

 L(x) 
 | 
 (0,+\infty) 
 | 
 \mathbb{R} 
 | 
creciente
 | 
 1/x 
 | 

 \text{sen}\,x 
 | 
 \mathbb{R} 
 | 
 [-1,1] 
 | 
periódica
 | 
 \cos x 
 | 

 \cos x 
 | 
 \mathbb{R} 
 | 
 [-1,1] 
 | 
periódica; decrece en  [0,\pi] , crece en  [\pi,2\pi] 
 | 
 -\text{sen}\,x 
 | 

 \text{Arctg}\,x 
 | 
 \mathbb{R} 
 | 
 (-\pi/2,\pi/2) 
 | 
creciente
 | 
 \frac{1}{1+x^2} 
 | 

 \sqrt{x} 
 | 
 [0,+\infty) 
 | 
 [0,+\infty) 
 | 
creciente
 | 
 \frac{1}{2\sqrt{x}} 
 | 

 x^n 
 | 
 \mathbb{R} 
 | 
según  n 
 | 
según  n 
 | 
 n x^{n-1} 
 | 

Valores que tenés que saber de memoria

- 
 e^0=1 ,  L(1)=0 ,  L(e)=1 ,  \cos 0=1 ,  \cos(\pi/2)=0 ,  \cos \pi=-1 ,  \cos(3\pi/2)=0 ,  \cos(2\pi)=1 .

- 
 e^x  y  L(x)  son inversas una de la otra:  e^{L(x)}=x  y  L(e^x)=x .

Reglas de derivación

- 
Suma y constante:  (af+bg)'=af'+bg' .

- 
Producto:  (fg)'=f'g+fg' . Cociente:  (f/g)'=\frac{f'g-fg'}{g^2} .

- 
Regla de la cadena
:  (h(u(x)))'=h'(u(x))\cdot u'(x) . Ejemplos:  (e^{-2x})'=-2e^{-2x} ;  (L(x^2+1))'=\frac{2x}{x^2+1} ;  ((2x+2)^2)'=2(2x+2)\cdot 2 .

Parábolas

Aparecen en casi todas las funciones a trozos. Para  ax^2+bx+c  el vértice está en  x_v=-\frac{b}{2a} . Si  a\gt 0  baja hasta el vértice y después sube; si  a\lt 0 , al revés. Truco: muchas vienen como cuadrado perfecto, por ejemplo  x^2-2x+1=(x-1)^2  o  -x^2-2x-1=-(x+1)^2 : así ves el vértice sin hacer cuentas.

Por qué vale la pena este repaso

En las últimas cuatro revisiones, todas las preguntas usan solamente estas funciones. Cuando una opción dice "no es invertible" o "no es sobreyectiva", casi siempre la trampa está en un detalle de dominio o de imagen: un  L  que no acepta el 0, una exponencial que nunca llega a 0, un coseno que repite valores. Si tenés la ficha de cada función en la cabeza, esos detalles los ves en segundos. Y la regla de la cadena aparece en por lo menos tres preguntas por parcial (derivada de la inversa,  f  explícita, operaciones con Taylor), así que conviene practicarla hasta que salga sola, sin pensar.

## Cómo se resuelve en el parcial
- 
Identificá qué funciones elementales aparecen y anotá su dominio e imagen.
- 
Si hay una parábola, completá cuadrados o calculá el vértice  -b/(2a) .
- 
Para saber si sube o baja en un intervalo, derivá y mirá el signo de  f'  en ese intervalo.
- 
Para derivar composiciones, andá "de afuera hacia adentro" multiplicando derivadas (regla de la cadena).

## Trampas típicas
- 
Olvidarte del factor interno en la cadena:  (e^{-3x})'=-3e^{-3x} , no  e^{-3x} .
- 
Creer que  L(x)  está definido en 0 o en negativos.
- 
Pensar que  e^x  puede valer 0 o algo negativo: su imagen es  (0,+\infty) , con 0 excluido.
- 
Confundir  (\cos x)'=-\text{sen}\,x  con  +\text{sen}\,x .

## Ejercicio resuelto
Derivá  f(x)=\text{Arctg}(x)+(2x+2)^2  y calculá  f'(0) .
Solución:
(\text{Arctg}\,x)'=\frac{1}{1+x^2} . Para  (2x+2)^2  usamos la cadena:  2(2x+2)\cdot 2=4(2x+2) .
Entonces  f'(x)=\frac{1}{1+x^2}+4(2x+2)  y  f'(0)=1+8=9 .

## Subtema: Exponencial y logaritmo
Pensá en una planta que cada día crece un poco más rápido que el anterior: eso es  e^x . Nunca tiene tamaño cero ni negativo, aunque vayas muy para atrás en el tiempo se hace chiquitita pero sigue ahí. El logaritmo  L  es el botón de "deshacer": le decís el tamaño de la planta y te contesta cuánto tiempo pasó. Por eso  L  solo acepta tamaños positivos (no existe una planta de tamaño  -3 ) y puede devolver cualquier tiempo, incluso negativo.

e^x  y  L(x)  son inversas:  e^{L(x)}=x  para  x\gt0  y  L(e^x)=x  para todo  x . Las dos son 
estrictamente crecientes
.

- 
Límites que se usan para recorridos:  e^x\to0^+  cuando  x\to-\infty ;  L(x)\to-\infty  cuando  x\to0^+ ; las dos van a  +\infty  cuando  x\to+\infty .

- 
Propiedades:  L(ab)=L(a)+L(b) ,  L(a/b)=L(a)-L(b) ,  L(a^k)=k\,L(a) ,  e^{a+b}=e^ae^b ,  e^{kL(a)}=a^k .

Transformaciones.
 Para  a\,e^{bx+c}+d  o  a\,L(bx+c)+d :

- 
El dominio de  L(bx+c)  sale de pedir  bx+c\gt0 :  -L(x+2)-3  vive en  (-2,+\infty) .

- 
La imagen de  e^{u}  (con  u  recorriendo todo  \mathbb R ) es  (0,+\infty) ; sumar  d  la corre a  (d,+\infty)  y multiplicar por un negativo la da vuelta:  3-e^{x}  tiene imagen  (-\infty,3) .

- 
La imagen de  L(u)  con  u  recorriendo  (0,+\infty)  es  \mathbb R , y sigue siendo  \mathbb R  después de multiplicar por una constante no nula y sumar.
Ideas clave:
- e^x\gt0  siempre;  L  solo existe para argumento positivo
- e^x  y  L  son crecientes e inversas una de la otra
- L(a^k)=k\,L(a)  y  e^{kL(a)}=a^k
- Sumar una constante corre la imagen; multiplicar por un negativo la da vuelta
Mini ejercicio: Dominio e imagen de  f(x)=2-e^{x-1} .
Solución: Dominio  \mathbb R . Como  e^{x-1}  recorre  (0,+\infty) ,  -e^{x-1}  recorre  (-\infty,0)  y  f  recorre  (-\infty,2) .

## Subtema: Trigonométricas y Arctg
Imaginá que das vueltas en una calesita de radio 1. El coseno te dice cuánto estás corrido a la derecha del centro y el seno cuánto estás arriba. Como la calesita gira siempre igual, los valores se repiten en cada vuelta: por eso seno y coseno no son inyectivas en todo  \mathbb R . El Arctg es otra cosa: es como un ascensor que sube siempre, pero nunca llega a la terraza ( \pi/2 ) ni al sótano ( -\pi/2 ).

x 
 | 
 0 
 | 
 \pi/2 
 | 
 \pi 
 | 
 3\pi/2 
 | 
 2\pi 
 | 

 \text{sen}\,x 
 | 
0
 | 
1
 | 
0
 | 
 -1 
 | 
0
 | 

 \cos x 
 | 
1
 | 
0
 | 
 -1 
 | 
0
 | 
1
 | 

- 
 \text{sen}  crece en  [-\pi/2,\pi/2]  y decrece en  [\pi/2,3\pi/2] .

- 
 \cos  decrece en  [0,\pi]  y crece en  [\pi,2\pi] .

- 
 -\cos  y  -\text{sen}  son los mismos gráficos dados vuelta: donde  \cos  crece,  -\cos  decrece, y los valores cambian de signo.

- 
 \text{Arctg}:\mathbb R\to(-\pi/2,\pi/2) , creciente.  \text{Arctg}(0)=0 ,  \text{Arctg}(1)=\pi/4 ,  \text{Arctg}(-1)=-\pi/4 ,  \text{Arctg}(\sqrt3)=\pi/3 . Tiende a  \pm\pi/2  en  \pm\infty  sin alcanzarlos.

Esto es lo que se usa en la pregunta de "¿para qué  U  es invertible?": saber hacia dónde va la función en el intervalo y cuánto vale en los extremos.
Ideas clave:
- Tabla de sen y cos en  0,\pi/2,\pi,3\pi/2,2\pi
- \cos  decrece en  [0,\pi] ;  \text{sen}  crece en  [-\pi/2,\pi/2]
- \text{Arctg}  es creciente y su imagen es  (-\pi/2,\pi/2) , abierta
- El signo menos da vuelta la monotonía y los valores
Mini ejercicio: ¿Cómo se mueve  -\cos x  en  [\pi/2,\pi] ?
Solución: \cos  baja de 0 a  -1 , así que  -\cos  sube de 0 a 1: es creciente con imagen  [0,1] .

## Subtema: Reglas de derivación y cadena
Pensá en tres engranajes conectados. Si el de afuera gira 3 veces por cada vuelta del del medio, y el del medio gira 2 veces por cada vuelta del de adentro, entonces el de afuera da  3\times2=6  vueltas por cada vuelta del de adentro. La regla de la cadena es eso: cuando una función está adentro de otra, las velocidades de cambio se multiplican. Si te olvidás de un engranaje, la cuenta te da mal.

h 
 | 
 h' 
 | 

 e^{u} 
 | 
 e^{u}\,u' 
 | 

 L(u) 
 | 
 \frac{u'}{u} 
 | 

 u^n 
 | 
 n\,u^{n-1}u' 
 | 

 \sqrt u 
 | 
 \frac{u'}{2\sqrt u} 
 | 

 \frac1u 
 | 
 -\frac{u'}{u^2} 
 | 

 \text{sen}\,u ,  \cos u 
 | 
 \cos(u)\,u' ,  -\text{sen}(u)\,u' 
 | 

 \text{Arctg}\,u 
 | 
 \frac{u'}{1+u^2} 
 | 

Producto:  (fg)'=f'g+fg' . Cociente:  (f/g)'=\frac{f'g-fg'}{g^2} .

En el parcial la derivada aparece adentro de otras preguntas:  f'(0)  en la derivada de la inversa,  f''(0)  en Taylor al revés. Las trampas son siempre las mismas: olvidar el factor de adentro ( (e^{2x})'=2e^{2x} ) o el signo ( (e^{-x})'=-e^{-x} ,  (\cos x)'=-\text{sen}\,x ).

Para no equivocarte, nombrá lo de adentro antes de derivar: en  L(x^2+1) ,  u=x^2+1  y  u'=2x , así que la derivada es  \frac{2x}{x^2+1} . Con productos, derivá un factor por vez y dejá el otro quieto. En el parcial casi siempre hay que evaluar en 0 o en 1: hacelo recién al final, cuando la expresión de la derivada ya esté completa, para no perder factores en el camino.
Ideas clave:
- Cadena: derivada de afuera evaluada en lo de adentro, por la derivada de adentro
- (L(u))'=u'/u  y  (\text{Arctg}\,u)'=u'/(1+u^2)
- (1/u)'=-u'/u^2
- Controlá siempre el factor interno y el signo
Mini ejercicio: Derivá  f(x)=L(x^2+1)+e^{-3x}  y evaluá en 0.
Solución: f'(x)=\frac{2x}{x^2+1}-3e^{-3x} , así que  f'(0)=0-3=-3 .

## Subtema: Parábolas: vértice y recorrido en un trozo
Una parábola con  a\gt0  es un tobogán en forma de U: bajás hasta el fondo y después subís. Si solo te quedás con el pedazo que está a la izquierda del fondo, siempre vas bajando, y nunca pasás dos veces por la misma altura. Pero si tu pedazo incluye el fondo, bajás y volvés a subir, y hay alturas que visitás dos veces. Saber dónde está el fondo (el vértice) es todo el secreto.

Para  ax^2+bx+c : vértice en  x_v=-\frac{b}{2a} , con valor  y_v=f(x_v) . Completando cuadrado queda  a(x-x_v)^2+y_v .

- 
 a\gt0 : decrece en  (-\infty,x_v] , crece en  [x_v,+\infty) , mínimo  y_v .

- 
 a\lt0 : crece en  (-\infty,x_v] , decrece en  [x_v,+\infty) , máximo  y_v .

Recorrido en un trozo
, por ejemplo  x\le c :

- 
Si  x_v  queda 
fuera
 del trozo (o justo en el borde), la rama es monótona y su imagen va de  f(c)  a  \pm\infty . El extremo  f(c)  va cerrado si  c  está incluido.

- 
Si  x_v  queda 
adentro
, la rama no es inyectiva y su imagen arranca en  y_v .

Trucos de lectura:  x^2-2x+1=(x-1)^2 ,  -x^2-2x-1=-(x+1)^2 . Muchas parábolas del parcial vienen así disfrazadas.
Ideas clave:
- x_v=-b/(2a)
- Vértice fuera del trozo: rama monótona, imagen desde  f(\text{borde})
- Vértice dentro del trozo: la rama ya no es inyectiva
- Buscá cuadrados perfectos escondidos
Mini ejercicio: Imagen de  x^2-6x+10  para  x\ge4 .
Solución: x_v=3 , fuera del trozo  [4,+\infty) , donde la parábola crece.  f(4)=2 : imagen  [2,+\infty) .