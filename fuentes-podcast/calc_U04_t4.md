# Cálculo 1B · Unidad 4: Derivada de la función inversa y regla de la cadena

Material para la 1ª revisión de octubre 2026 (FCEA-UDELAR). Peso en el parcial según los parciales anteriores: 20% del puntaje, prioridad imprescindible.
2 preguntas fijas por prueba (P6 y P7): 14 de 70. Cambia el disfraz de g, la cuenta siempre es 1/f'(a).

## Explicación simple
Pensá en un auto que recorre una ruta: la función te dice en qué kilómetro estás según el minuto. Si en cierto momento vas a 3 kilómetros por minuto, la inversa (que te dice en qué minuto estás según el kilómetro) avanza 1/3 de minuto por kilómetro. Eso es todo: 
la derivada de la inversa es "uno sobre" la derivada original
, mirada en el punto que corresponde.
La única trampa es no confundir los lugares: si la función manda el 4 al 1, la inversa manda el 1 al 4. Entonces la derivada de la inversa en 1 se calcula con la derivada original en 4.

## Explicación para el parcial
La fórmula

Si  f  es derivable e invertible,  f(a)=b  y  f'(a)\neq0 , entonces

 (f^{-1})'(b)=\frac{1}{f'(a)}=\frac{1}{f'(f^{-1}(b))} 

Se deduce derivando  f(f^{-1}(x))=x  con la cadena:  f'(f^{-1}(x))\cdot(f^{-1})'(x)=1 .

Molde 1: composición con  f^{-1} 

Te dan  f(a)=b ,  f'(a)  y una  g  armada con  f^{-1} . Siempre se evalúa en  b  (porque  f^{-1}(b)=a  es el dato conocido).

 g(x) 
 | 
 g'(x) 
 | 

 \sqrt{f^{-1}(x)} 
 | 
 \frac{1}{2\sqrt{f^{-1}(x)}}\cdot(f^{-1})'(x) 
 | 

 L(f^{-1}(x)) 
 | 
 \frac{1}{f^{-1}(x)}\cdot(f^{-1})'(x) 
 | 

 (f^{-1}(x))^3 
 | 
 3(f^{-1}(x))^2\cdot(f^{-1})'(x) 
 | 

 (f^{-1}(x))^2+f(x) 
 | 
 2f^{-1}(x)\cdot(f^{-1})'(x)+f'(x) 
 | 

Ejemplo (mayo 2026):  f(4)=1 ,  f'(4)=\frac14 ,  g=\sqrt{f^{-1}} . Entonces  f^{-1}(1)=4 ,  (f^{-1})'(1)=\frac{1}{1/4}=4 , y  g'(1)=\frac{1}{2\sqrt4}\cdot4=1 .

Ojo con  (f^{-1})^2+f : el término  f'(x)  se evalúa en el mismo  x  que te piden. En mayo 2025  f(3)=3  y  f'(3)=2 , así que  a=b=3  y todo se evalúa en 3.

Molde 2:  f  explícita

Te dan una  f  concreta (por ejemplo  e^{-2x}+e^{-3x}  o  \text{Arctg}\,x+(2x+2)^2 ) y opciones del tipo " f^{-1}(c)=0  y  (f^{-1})'(c)=\ldots ". El truco: 
calculá  f(0) 
 (casi siempre el punto es 0, a veces 1 si hay un  L(x) ). Ese valor es  c , y  f^{-1}(c)=0 . Después  (f^{-1})'(c)=1/f'(0) .

Chequeá que el número  c  de la opción sea el que te dio: en mayo 2025 había opciones con  f^{-1}(3)  y  f^{-1}(5) , y solo  f(0)=5  era cierto.

Intuición gráfica

El gráfico de  f^{-1}  es el de  f  reflejado en la recta  y=x . Al reflejar, una recta tangente con pendiente  m  se convierte en una con pendiente  1/m : lo que antes era "subir  m  por cada paso horizontal" pasa a ser "subir 1 por cada  m  pasos". Por eso aparece el "uno sobre". Y como el punto  (a,b)  del gráfico de  f  pasa a ser  (b,a)  en el de  f^{-1} , la pendiente de la inversa en  b  es la inversa de la pendiente de  f  en  a . Si te olvidás la fórmula en la prueba, reconstruila con este dibujo mental o derivando  f(f^{-1}(x))=x .

En el parcial estas dos preguntas (molde 1 y molde 2) valen 8 puntos y son casi mecánicas: con práctica salen en tres o cuatro minutos cada una.

## Cómo se resuelve en el parcial
- 
Anotá el par:  f(a)=b \Rightarrow f^{-1}(b)=a .
- 
Calculá  (f^{-1})'(b)=1/f'(a) .
- 
Derivá  g  con la regla de la cadena, dejando  f^{-1}(x)  y  (f^{-1})'(x)  como "cajas".
- 
Evaluá en  x=b : reemplazá las cajas por  a  y por  1/f'(a) .
- 
Si la  f  es explícita: calculá  f(0)  y  f'(0) ; la respuesta es  f^{-1}(f(0))=0  y  (f^{-1})'(f(0))=1/f'(0) .

## Trampas típicas
- 
Poner  (f^{-1})'(b)=f'(a)  en vez de  1/f'(a) .
- 
Evaluar en el punto equivocado: si  f(4)=1 ,  g'(1)  usa  f^{-1}(1)=4 , no  f^{-1}(4) .
- 
Olvidar multiplicar por  (f^{-1})'  al usar la cadena.
- 
Cuando piden  g(b)+g'(b) , olvidarse de sumar  g(b)  (ej.  L(f^{-1}(2))=L(1)=0 ).
- 
En  f  explícita, derivar mal por la cadena:  (e^{-3x})'=-3e^{-3x} .

## Ejercicio resuelto
f:\mathbb{R}\to\mathbb{R}  derivable e invertible,  f(1)=2 ,  f'(1)=3 ,  g(x)=L(f^{-1}(x)) . Calculá  g(2)+g'(2) .
Solución:
f^{-1}(2)=1 ,  (f^{-1})'(2)=\frac{1}{f'(1)}=\frac13 .
 g(2)=L(1)=0 .
 g'(x)=\frac{(f^{-1})'(x)}{f^{-1}(x)} \Rightarrow g'(2)=\frac{1/3}{1}=\frac13 .
 g(2)+g'(2)=\frac13 .

## Cómo aparece en la prueba
- P6 (7/7): Derivada de \(g\) armada con \(f^{-1}\) (datos \(f(a),f'(a)\)). Dan f(a)=b y f'(a) y piden g'(b) (o g(b)+g'(b)). Variantes de g: (f^{-1})^3 dos veces, (f^{-1})^2+f, \sqrt{f^{-1}}, L(f^{-1}), f+4f^{-1}, x\cdot f^{-1}(x). Consejo: (f^{-1})'(b)=\frac1{f'(a)} con a=f^{-1}(b). Trampa principal: evaluar f' en b en vez de en a. Después es regla de la cadena o del producto común. Si piden g(b)+g'(b), no te olvides de g(b).
- P7 (7/7): \(f\) explícita: \(f^{-1}(b)\) y \((f^{-1})'(b)\). f = polinomio + otra función: (x+1)^3-\frac2x, (2x-1)^2+2L(x), (x+1)^2+L(x+1), (x+1)^2+e^{2x}, (x+2)^2+e^{2x}, \text{Arctg}(x)+(2x+2)^2, e^{-2x}+e^{-3x}. El punto es siempre x=0 o x=1. "Ninguna" nunca fue la correcta. Consejo: Calculá f(0) y f(1): uno de los dos da el b de las opciones. Luego (f^{-1})'(b)=1/f'(a). Las opciones falsas cambian el punto (f^{-1}(1) vs f^{-1}(2)) o dan 1/f' mal derivado (olvidar la cadena en e^{2x}). En mayo 2026 f era decreciente: la derivada daba negativa.

## Subtema: La fórmula y de dónde sale
Si 1 dólar son 40 pesos, entonces 1 peso es  \frac1{40}  de dólar: el cambio "de vuelta" es el recíproco del cambio "de ida". La derivada mide cuánto cambia la salida por cada unidad que cambia la entrada. La inversa hace el viaje de vuelta, así que su derivada es el recíproco: si  f  multiplica los cambios por 4,  f^{-1}  los divide por 4. Lo único delicado es mirar el tipo de cambio en el lugar correcto.

Si  f  es derivable e invertible,  f(a)=b  y  f'(a)\neq0 :

 (f^{-1})'(b)=\frac{1}{f'(a)}=\frac{1}{f'\big(f^{-1}(b)\big)} 

De dónde sale:
 derivando  f(f^{-1}(x))=x  con la cadena queda  f'(f^{-1}(x))\cdot(f^{-1})'(x)=1 .

- 
Se evalúa  f'  en  a=f^{-1}(b) , 
nunca en  b 
. Es la trampa número uno del parcial.

- 
Si  f'(a)=0 ,  f^{-1}  no es derivable en  b  (tangente vertical). Ejemplo:  f(x)=x^3  en  a=0 .

- 
Gráficamente: la tangente a  f  en  (a,b)  con pendiente  m  se refleja en la tangente a  f^{-1}  en  (b,a)  con pendiente  \frac1m . El signo se conserva:  f  decreciente da  (f^{-1})'  negativa.

Cuando te dan datos en dos puntos (por ejemplo  f(1)=3  y  f(3)=1 ), antes de usar la fórmula escribí " f^{-1}(b)=\ ? " y buscá cuál dato lo contesta.
Ideas clave:
- (f^{-1})'(b)=1/f'(a)  con  f(a)=b
- Se deriva  f(f^{-1}(x))=x
- f'  se evalúa en  a , no en  b
- f'(a)=0 : la inversa no es derivable en  b
- El signo de la derivada se conserva
Mini ejercicio: f(2)=4 ,  f(4)=2 ,  f'(2)=3 ,  f'(4)=5 . Calculá  (f^{-1})'(4) .
Solución: f^{-1}(4)=2  (porque  f(2)=4 ). Entonces  (f^{-1})'(4)=\frac1{f'(2)}=\frac13 , no  \frac15 .

## Subtema: f explícita: inversa y su derivada en un punto (P7)
Te dan una máquina que transforma números y te preguntan de qué número salió cierto resultado, sin darte el manual para desarmarla. El truco es probar con los números más fáciles, 0 y 1: casi siempre uno de los dos da justo el resultado de las opciones. Una vez que sabés de dónde salió, la "velocidad de vuelta" es uno sobre la velocidad de la máquina en ese número.

Molde: " f:A\to B ,  f(x)=\ldots , invertible. Entonces:" y opciones del tipo " f^{-1}(c)=a  y  (f^{-1})'(c)=\ldots ".

- 
Calculá  f(0)  (o  f(1)  si hay  L(x)  o  \frac1x ). Ese valor es  c , y  f^{-1}(c)=0  (o 1).

- 
Derivá  f  con cuidado (cadena en  e^{2x} ,  \text{Arctg}(2x) ,  (2x-1)^2 ) y evaluá en ese mismo punto.

- 
 (f^{-1})'(c)=\frac1{f'(0)} .

- 
Compará con las opciones: mirá el número  c , el punto  a  y la derivada. Si alguna de las tres cosas no coincide, esa opción cae.

Las opciones falsas cambian el punto ( f^{-1}(1)=0  contra  f^{-1}(0)=1 ), ponen  f'(0)  en lugar de  \frac1{f'(0)}  o usan una derivada sin la cadena. Si  f  es decreciente, la derivada de la inversa es negativa. "Ninguna de las otras" nunca fue la correcta en V1, pero puede serlo: si tu cuenta no aparece, revisala una vez y, si da igual, marcala.
Ideas clave:
- Evaluá  f(0)  y  f(1) : uno es el  c  de las opciones
- (f^{-1})'(c)=1/f'(0)
- Cuidado con la cadena al derivar
- f  decreciente: derivada de la inversa negativa
Mini ejercicio: f(x)=x^3+2x+1 , invertible en  \mathbb R .
Solución: f(0)=1 , así que  f^{-1}(1)=0 .  f'(x)=3x^2+2 ,  f'(0)=2 :  (f^{-1})'(1)=\frac12 .

## Subtema: Composiciones con potencias y raíces
Una cebolla tiene capas: para llegar al centro las sacás de afuera hacia adentro. Si  g  es "la inversa y después al cubo", la capa de afuera es el cubo y la de adentro es la inversa. Derivás la capa de afuera (dejando adentro lo que había), y multiplicás por la derivada de la capa de adentro. La de adentro es la derivada de la inversa, que ya sabés calcular.

Con  f(a)=b  y  f'(a)  como datos, y  (f^{-1})'(b)=\frac1{f'(a)} :

 g(x) 
 | 
 g'(b) 
 | 

 (f^{-1}(x))^n 
 | 
 n\,a^{n-1}\cdot\frac1{f'(a)} 
 | 

 \sqrt{f^{-1}(x)} 
 | 
 \frac1{2\sqrt a}\cdot\frac1{f'(a)} 
 | 

 \sqrt[3]{f^{-1}(x)} 
 | 
 \frac1{3\sqrt[3]{a^2}}\cdot\frac1{f'(a)} 
 | 

 \frac1{f^{-1}(x)} 
 | 
 -\frac1{a^2}\cdot\frac1{f'(a)} 
 | 

Fijate que en todas aparece  a  (no  b ) adentro de la potencia: lo que se eleva es  f^{-1}(b)=a .

Ejemplo:  f(2)=5 ,  f'(2)=3 ,  g=(f^{-1})^2 .  g'(5)=2\cdot f^{-1}(5)\cdot(f^{-1})'(5)=2\cdot2\cdot\frac13=\frac43 . Si ponés  2\cdot5\cdot\frac13  usaste  b  en vez de  a ; si ponés  2\cdot2\cdot3  olvidaste invertir  f'(a) .

Si piden  g(b)+g'(b) , sumá también  g(b)=a^n  (o  \sqrt a , etc.).

Un orden de trabajo que evita errores: primero escribí  a=f^{-1}(b)  leyendo el dato al revés, después  (f^{-1})'(b)=\frac1{f'(a)} , y recién ahí derivá  g  con la cadena y reemplazá. Así cada número aparece una sola vez en su lugar. Las opciones falsas del parcial son justamente las que salen de mezclar  a  con  b  o de no invertir  f'(a) .
Ideas clave:
- Derivada de afuera evaluada en  f^{-1}(b)=a
- Por  (f^{-1})'(b)=1/f'(a)
- ((f^{-1})^n)'(b)=n\,a^{n-1}/f'(a)
- Si piden  g(b)+g'(b) , no olvides  g(b)
Mini ejercicio: f(9)=2 ,  f'(9)=\frac13 ,  g=\sqrt{f^{-1}} . Calculá  g'(2) .
Solución: f^{-1}(2)=9 ,  (f^{-1})'(2)=3 .  g'(2)=\frac1{2\sqrt9}\cdot3=\frac12 .

## Subtema: Composiciones con L, exponencial, productos y cocientes
Es la misma idea de la cebolla, pero ahora la capa de afuera es un logaritmo, una exponencial, o la inversa aparece multiplicada por otra cosa. Para cada disfraz hay una regla de derivar que ya conocés (la del  L , la del producto, la del cociente). Lo único nuevo es que, cada vez que aparece la derivada de la inversa, la reemplazás por "uno sobre la derivada de  f  en el punto de origen".

g(x) 
 | 
 g'(b)  (con  f(a)=b )
 | 

 L(f^{-1}(x)) 
 | 
 \frac1a\cdot\frac1{f'(a)} 
 | 

 e^{f^{-1}(x)} 
 | 
 e^{a}\cdot\frac1{f'(a)} 
 | 

 x\,f^{-1}(x) 
 | 
 a+b\cdot\frac1{f'(a)} 
 | 

 \frac{f^{-1}(x)}{x} 
 | 
 \frac{\frac{b}{f'(a)}-a}{b^2} 
 | 

 f^{-1}(h(x)) 
 | 
 \frac{h'(x_0)}{f'(a)} , donde  h(x_0)=b  y  f(a)=b 
 | 

En el producto  x\,f^{-1}(x) , la  x  de afuera vale  b  (el punto donde evaluás), y  f^{-1}(b)=a . Mezclar los dos es el error típico.

Con  f^{-1}(h(x))  (inversa de una composición), primero ubicá qué  x_0  hace  h(x_0)=b . Ejemplo:  g(x)=f^{-1}(x^2) ,  f(3)=4 ,  f'(3)=5 :  g'(2)=(f^{-1})'(4)\cdot2\cdot2=\frac45 .

Antes de derivar, escribí los dos datos que vas a usar:  f^{-1}(b)=a  y  (f^{-1})'(b)=\frac1{f'(a)} . Después aplicá la regla correspondiente (logaritmo, exponencial, producto o cociente) como si  f^{-1}  fuera una función cualquiera  u , con  u(b)=a  y  u'(b)=\frac1{f'(a)} . Si el enunciado pide  g(b)+g'(b) , calculá también  g(b) :  L(a) ,  e^a ,  b\,a  o  \frac ab  según el caso.
Ideas clave:
- (L(f^{-1}))'(b)=\frac1{a\,f'(a)}
- En  x\,f^{-1}(x) : la  x  vale  b , la  f^{-1}  vale  a
- Cociente:  \frac{u'v-uv'}{v^2}  con  u=f^{-1} ,  v=x
- L(f^{-1}(b))=L(a) ; si  a=1  da 0
Mini ejercicio: f(1)=3 ,  f'(1)=2 ,  g(x)=x\,f^{-1}(x) . Calculá  g'(3) .
Solución: g'(x)=f^{-1}(x)+x\,(f^{-1})'(x) . En 3:  1+3\cdot\frac12=\frac52 .

## Subtema: Sumas y combinaciones de f y f⁻¹
Cuando  g  es una suma, cada sumando se deriva por separado, como cuando dos personas empujan un auto y sumás sus fuerzas. La parte con  f^{-1}  usa la regla de la inversa; la parte con  f  se deriva normal. Lo que hay que vigilar es en qué punto evaluás cada parte: los dos sumandos se evalúan en el mismo  x , pero la derivada de  f  que necesitás puede no ser la del dato.

Para  g(x)=\alpha\,f(x)+\beta\,f^{-1}(x)+h(x)  evaluada en  b :

 g'(b)=\alpha\,f'(b)+\frac{\beta}{f'(a)}+h'(b) 

- 
El término  f'(b)  pide la derivada de  f  
en  b 
. Solo la tenés si te la dan o si  a=b  (punto fijo,  f(a)=a ). Por eso en el parcial, cuando aparece  f  sumada, el dato es del tipo  f(3)=3 .

- 
 (f^{-1})^2+f :  g'(b)=2a\cdot\frac1{f'(a)}+f'(b) .

- 
Si piden  g(b)+g'(b) :  g(b)=\alpha f(b)+\beta a+h(b) . De nuevo,  f(b)  solo se conoce si  a=b  o si te lo dan.

Ejemplo:  f(2)=2 ,  f'(2)=4 ,  g=f+3f^{-1} . Como  a=b=2 :  g'(2)=4+\frac34=\frac{19}4 .

Antes de calcular, leé qué derivadas de  f  necesitás y en qué punto. Si la pregunta pide  g'(b)  y  g  contiene  f(x)  sumada, vas a necesitar  f'(b) : si el dato es  f(a)=b  con  a\neq b , falta información (o el enunciado te la da aparte). Con un punto fijo  f(3)=3 ,  f'(3)  sirve para las dos partes: para  f'(b)  y para  (f^{-1})'(b)=\frac1{f'(3)} .
Ideas clave:
- Cada sumando por separado, todos evaluados en  b
- f'(b)  solo se conoce si  f(a)=a  o te lo dan
- (f^{-1})'  siempre es  1/f'(a)
- g(b)+g'(b) : sumá el valor también
Mini ejercicio: f(0)=3 ,  f'(0)=2 ,  g(x)=f^{-1}(x)+x^2 . Calculá  g'(3) .
Solución: g'(3)=(f^{-1})'(3)+2\cdot3=\frac12+6=\frac{13}2 .