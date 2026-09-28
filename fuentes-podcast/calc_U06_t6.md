# Cálculo 1B · Unidad 6: Límites con Taylor (x → 0)

Material de estudio para la 1ª revisión de octubre 2026 (FCEA-UDELAR). TODO el contenido de este documento sale exclusivamente del material de la cátedra (notas, teóricos, diapositivas, guías, ejercicios y soluciones oficiales publicados en EVA). No hay que agregar conceptos, autores, ejemplos ni criterios que no estén acá.

Fuente de la cátedra: Notas C1B 2026, Ejemplo 33 (pág. 62), Observación 10 (pág. 59) y Ejercicio 4.3 (pág. 66-67); clase virtual 9

Peso en la prueba según los parciales anteriores: 20% del puntaje, prioridad imprescindible. 2 límites por prueba, 14 en total. Funciones en los 14: \text{sen} 7, L 7, e^x 5, \cos 4, \text{Arctg} 2. Denominador x^2 10 veces, x^3 3, x^4 1.

## Explicación simple
Es como pesar una pluma arriba de un camión: si pesás el camión con la pluma y después el camión sin la pluma, las dos cifras gigantes se cancelan y lo que queda es lo que te importa. En estos límites, el numerador tiene "partes grandes" (los 1 y las  x ) que se cancelan entre sí, y lo que sobrevive es algo como  x^2  o  x^3 .
Taylor es la balanza de precisión: escribís cada función como polinomio, cancelás lo que se cancela, y el primer término que sobrevive te dice todo. Si el denominador es  x^2 , necesitás llegar hasta  x^2  en el numerador; si es  x^3 , hasta  x^3 .

## Explicación para el parcial
Todos los límites del parcial son de la forma  \lim_{x\to0}\frac{N(x)}{x^k}  con  k=2  o  k=3 , donde  N  es una combinación de funciones elementales. Directamente dan  \frac00 : hay que usar Taylor.

El método

- Elegí el orden: desarrollá cada función del numerador hasta el orden  k  del denominador. Con  x^2  abajo, orden 2; con  x^3 , orden 3.

- Sustituí y sumá término a término, agrupando por potencia: constantes,  x ,  x^2 ,  x^3 .

- Mirá el primer término que no se anula,  c\,x^m :
- Si  m=k : el límite es  c .
- Si  m\gt k : el límite es 0.
- Si  m\lt k : el límite es  \pm\infty  o no existe (en los parciales casi nunca pasa).

Ejemplos de parciales

Límite | Numerador desarrollado | Resultado | 

 \frac{\text{sen}(2x)+L(1-2x)}{x^2}  |  (2x)+(-2x-2x^2)+R_2(x)=-2x^2+R_2(x)  |  -2  | 

 \frac{\text{sen}(2x)+e^{-2x}-1}{x^2}  |  2x+(1-2x+2x^2)-1=2x^2  |  2  | 

 \frac{\cos(2x)-e^{-x}-x}{x^2}  |  (1-2x^2)-(1-x+\frac{x^2}{2})-x=-\frac52x^2  |  -\frac52  | 

 \frac{e^{-x}-\cos x+x-x^2}{x^3}  |  (1-x+\frac{x^2}{2}-\frac{x^3}{6})-(1-\frac{x^2}{2})+x-x^2=-\frac{x^3}{6}  |  -\frac16  | 

 \frac{\text{sen}(2x)-2x}{x^2}  |  -\frac43x^3  |  0  (grado 3 sobre grado 2) | 

¿Por qué alcanza con el orden del denominador?

Porque todo lo que tiraste es  R_k(x) , y  \frac{R_k(x)}{x^k}\to0 . Si desarrollás de más, no pasa nada: esos términos se van a 0. Si desarrollás de menos, te queda un  R_1(x)  dividido  x^2  y no podés concluir nada.

En el  \cos x  y el  \text{sen}\,x  hay que tener en cuenta que el término de orden 3 del coseno es 0 y el de orden 2 del seno también:  \cos x=1-\frac{x^2}{2}+R_3(x) ,  \text{sen}\,x=x+R_2(x) . Eso a veces te ahorra cuentas.

Consejo de tiempo: son preguntas "regaladas" si sabés la tabla. Apuntá a resolverlas en menos de 5 minutos cada una.

Un detalle que ayuda a detectar errores: si al sumar las columnas te queda algo distinto de cero en una potencia menor que la del denominador (por ejemplo, un término en  x  cuando abajo hay  x^2 ), casi seguro te equivocaste en un signo o en un coeficiente, porque los docentes arman estos límites para que den un número finito. Volvé a mirar las sustituciones antes de marcar " -\infty " o "no existe".

## Cómo se resuelve en el parcial
- Mirá la potencia  k  del denominador.
- Desarrollá cada término del numerador hasta  x^k  (con sustituciones tipo  2x ,  -x ).
- Armá una tabla por columnas: constantes,  x ,  x^2 ,  x^3 . Sumá cada columna.
- Las columnas de grado menor que  k  deberían dar 0. El coeficiente de  x^k  es el límite.
- Si también la columna  x^k  da 0, el límite es 0.

## Trampas típicas
- Desarrollar hasta orden 2 cuando el denominador es  x^3 .
- Errores de signo al restar un desarrollo entero:  -\cos x=-1+\frac{x^2}{2} ,  -e^{-x}=-1+x-\frac{x^2}{2} .
- Olvidar los términos "sueltos" del numerador ( +x ,  -x^2 ,  -1 ).
- Calcular  (2x)^3/6  como  2x^3/6 : es  8x^3/6=\frac43x^3 .
- En opciones aparecen justo los resultados de esos errores (ej.  \frac16  vs  -\frac16 ). No elijas "lo que se parece": hacé la cuenta prolija.

## Ejercicio resuelto
Letra: Calculá  \lim_{x\to0}\frac{L(1+2x)-2\,\text{sen}\,x}{x^2} .

Solución: Denominador  x^2 : orden 2.
 L(1+2x)=2x-\frac{(2x)^2}{2}+R_2(x)=2x-2x^2+R_2(x) .
 2\,\text{sen}\,x=2x+R_2(x) .
Numerador:  2x-2x^2-2x+R_2(x)=-2x^2+R_2(x) .
Límite:  -2 .

## Cómo aparece en la prueba
- P2 (7/7): Límite con Taylor (denominador \(x^2\)). Cociente de combinaciones de \text{sen}(2x), \cos, e^{\pm x}, e^{\pm2x}, L(1\pm2x), \text{Arctg}(x) sobre x^2, con los términos lineales ya cancelados. Resultados reales: 0,-4,-\frac52,2,-2. Consejo: Desarrollá cada función hasta el orden del denominador y sumá coeficiente a coeficiente. Trampa: L(1+2x)=2x-2x^2+\dots (el \frac{(2x)^2}{2} da 2, no 1) y \cos(2x)=1-2x^2.
- P5 (7/7): Segundo límite con Taylor (a veces \(x^3\)). Mismo molde que P2 pero más largo: con x^3 en 3/7 (2024 y mayo 2026) y con x^4 una vez (2023: x\,\text{sen}x+2\cos x-2). Aparecen restas como \text{sen}(2x)-2L(1+x)-x^2 donde lo de orden 1 y 2 se cancela. Consejo: Con x^3 necesitás los términos cúbicos: \text{sen}(2x)=2x-\frac43x^3, L(1+x)=x-\frac{x^2}2+\frac{x^3}3, e^{-x}=1-x+\frac{x^2}2-\frac{x^3}6, \text{Arctg}x=x-\frac{x^3}3. Antes de dividir, verificá que todo lo de grado menor se anuló.

## Subtema: Elegir el orden de desarrollo
Fuente de la cátedra: Notas C1B 2026, Ejemplo 33 (pág. 62) y Observación 10 (pág. 59); clase virtual 9

Si un juez mide el salto en milímetros, vos también tenés que medir por lo menos en milímetros: si medís en metros, no vas a poder decir quién ganó. En un límite con  x^3  abajo, el "juez" mide hasta  x^3 . Si desarrollás el numerador solo hasta  x^2 , te falta precisión y no podés concluir. Desarrollar de más no hace daño: esos términos se van solos.

Para  \lim_{x\to0}\frac{N(x)}{x^k} : desarrollá cada función del numerador hasta orden  k . Todo lo que tirás es  R_k(x) , y  \frac{R_k(x)}{x^k}\to0 .

- Si una función aparece multiplicada por  x^m , le alcanza con orden  k-m : en  x\,\text{sen}\,x  con  x^4  abajo,  \text{sen}  hasta orden 3.

- Con sustitución  u=x^2 , cada orden en  u  vale doble en  x : para  L(1+x^2)  con  x^4  abajo, alcanza  L(1+u)=u-\frac{u^2}2 .

- Si desarrollás de menos, te queda un  R_j(x)  con  j\lt k  dividido  x^k : no se puede concluir. Hay que volver y agregar términos.

Después de sumar, mirá el primer término no nulo  c\,x^m :

Caso | Límite | 

 m=k  |  c  | 

 m\gt k  |  0  | 

 m\lt k  |  \pm\infty  o no existe (distinto a cada lado si  k-m  es impar) |

Ideas clave:
- Orden del desarrollo = exponente del denominador
- Factor  x^m  adelante: un orden  k-m  alcanza
- Desarrollar de menos no permite concluir
- Primer término no nulo  c\,x^m : compará  m  con  k

Ejemplo: \lim_{x\to0}\frac{x(e^x-1)-x^2}{x^3}
Resolución: e^x  hasta orden 2 alcanza (hay un  x  adelante):  x(x+\frac{x^2}2)-x^2=\frac{x^3}2 . Límite  \frac12 .

## Subtema: Cancelaciones y términos sueltos
Fuente de la cátedra: Notas C1B 2026, Ejemplo 33 (pág. 62) y Ejercicio 4.3 (pág. 66-67)

Imaginá una balanza con muchas pesas de distintos tamaños de cada lado. Las pesas grandes (las constantes y los  x ) se equilibran entre sí y desaparecen. Lo que decide hacia dónde se inclina la balanza es la primera pesa chica que queda sin pareja. En los límites pasa lo mismo: los términos grandes se cancelan a propósito, y el resultado sale del primer término que sobrevive.

Los numeradores del parcial están armados para que las constantes y (casi siempre) los  x  se cancelen. Los "términos sueltos" ( -1 ,  -2x ,  +x^2 ,  -\frac{x^2}2 ) están ahí justamente para eso.

- Escribí cada desarrollo en una columna: constantes,  x ,  x^2 ,  x^3 .

- Sumá columna por columna, sin olvidar los términos sueltos ni los signos de las restas ( -\cos x=-1+\frac{x^2}2 ).

- Control: antes de dividir, verificá que todo lo de grado menor que  k  dio 0. Si no, o hay un error de cuenta o el límite es infinito (en las revisiones nunca pasó).

Ejemplo:  \frac{\text{sen}(3x)-3x}{x^3} :  \text{sen}(3x)=3x-\frac{27x^3}6 , el  3x  se cancela y queda  -\frac92x^3 . Límite  -\frac92 .

Si el término que "debería" decidir también se cancela (como en  \frac{\cos x-1+\frac{x^2}2}{x^2} ), el primer no nulo es de grado mayor y el límite es 0.

Ideas clave:
- Tabla por potencias: constantes,  x ,  x^2 ,  x^3
- Los términos sueltos están para cancelar
- Restar un desarrollo cambia el signo de todos sus términos
- Todo lo de grado menor tiene que dar 0 antes de dividir

Ejemplo: \lim_{x\to0}\frac{e^{-x}+x-1}{x^2}
Resolución: (1-x+\frac{x^2}2)+x-1=\frac{x^2}2 . Límite  \frac12 .

## Subtema: Límites con x² abajo (molde P2)
Fuente de la cátedra: Notas C1B 2026, Ejercicio 4.3 (pág. 66-67); 1as revisiones 2023-2026, primer límite

Es el mismo juego de siempre, pero con la regla más corta: solo te importan las pesas hasta el tamaño  x^2 . Desarrollás cada función hasta  x^2 , sumás los coeficientes de  x^2  con su signo y ese número es la respuesta. El único peligro es equivocarte al elevar al cuadrado el número que acompaña a la  x . Con práctica, estos límites salen en tres o cuatro renglones.

Desarrollos hasta orden 2 que más aparecen:

Función | Orden 2 | 

 \text{sen}(2x) ,  \text{Arctg}(2x)  |  2x  (sin término  x^2 ) | 

 \cos x ,  \cos(2x)  |  1-\frac{x^2}2 ,  1-2x^2  | 

 e^{x} ,  e^{-x}  |  1\pm x+\frac{x^2}2  | 

 e^{2x} ,  e^{-2x}  |  1\pm2x+2x^2  | 

 L(1+2x) ,  L(1-2x)  |  \pm2x-2x^2  | 

 L(1-x)  |  -x-\frac{x^2}2  | 

 2x\,e^{x}  |  2x+2x^2  | 

Resultados reales:  0,\ -4,\ -\frac52,\ 2,\ -2 . Si tu resultado es un número "raro" como  \frac{17}{6} , probablemente arrastraste un término de orden 3 que no correspondía o te equivocaste en un cuadrado.

El seno y el Arctg no tienen término de grado 2: cuando aparecen en un límite con  x^2  abajo, solo aportan su parte lineal (que se cancela con otra).

Ideas clave:
- (2x)^2/2=2x^2 : en  e^{\pm2x}  y  L(1\pm2x)  el coeficiente es  \pm2
- \cos(2x)=1-2x^2
- \text{sen}  y  \text{Arctg}  no aportan  x^2
- Sumá solo la columna de  x^2  cuando lo demás se canceló

Ejemplo: \lim_{x\to0}\frac{\text{sen}(2x)-L(1+2x)}{x^2}
Resolución: 2x-(2x-2x^2)=2x^2 . Límite 2.

## Subtema: Límites con x³ abajo (molde P5)
Fuente de la cátedra: Notas C1B 2026, Ejercicios 4.3 d, 4.6 b y 4.9 (pág. 67-68); 1ª rev. mayo 2024, octubre 2024 y mayo 2026, segundo límite

Ahora el juez mide más fino: hasta  x^3 . Hay que llevar una columna más en la cuenta, y los números de esa columna son más traicioneros (factoriales, cubos). La buena noticia es que en estos ejercicios casi todo lo de grado 1 y 2 se cancela: si ves que no se cancela, es señal de un error antes de llegar al final.

Términos cúbicos que hay que tener a mano:

Función | Término en  x^3  | 

 \text{sen}\,x ,  \text{sen}(2x)  |  -\frac{x^3}6 ,  -\frac43x^3  | 

 \text{Arctg}\,x ,  \text{Arctg}(2x)  |  -\frac{x^3}3 ,  -\frac83x^3  | 

 e^{x} ,  e^{-x}  |  \pm\frac{x^3}6  | 

 L(1+x) ,  L(1+2x)  |  \frac{x^3}3 ,  \frac83x^3  | 

 \cos x  | 0 (solo pares) | 

 x\cos x ,  x\,e^{-x}  |  -\frac{x^3}2 ,  \frac{x^3}2  | 

Receta: armá la tabla con columnas  1,\ x,\ x^2,\ x^3 ; verificá que las tres primeras suman 0; el límite es la suma de la columna  x^3 .

Ejemplo:  \frac{x\cos x-\text{sen}\,x}{x^3} :  (x-\frac{x^3}2)-(x-\frac{x^3}6)=-\frac{x^3}3 . Límite  -\frac13 .

Antes de sumar, escribí cada desarrollo completo hasta  x^3 , incluso los términos que valen 0, para no perder el lugar. Controlá especialmente los signos de los cúbicos: en  e^{-x}  el cúbico es negativo, en  L(1+x)  positivo, en  \text{sen}  y  \text{Arctg}  negativo. Si el resultado sale entero cuando todos los coeficientes son fracciones con 6 o 3 abajo, desconfiá y revisá.

Ideas clave:
- Tabla con 4 columnas:  1,x,x^2,x^3
- \text{sen}(2x)  aporta  -\frac43x^3 ;  L(1+2x)  aporta  \frac83x^3
- \cos  no tiene cúbico
- Las columnas de grado menor tienen que anularse

Ejemplo: \lim_{x\to0}\frac{e^x-e^{-x}-2x}{x^3}
Resolución: e^x-e^{-x}=2x+\frac{x^3}3 . Menos  2x :  \frac{x^3}3 . Límite  \frac13 .

## Subtema: Casos x⁴ y denominadores que no son potencias
Fuente de la cátedra: Notas C1B 2026, Ejercicio 4.3 c (pág. 67, denominador x a la 4); 1ª rev. mayo 2023, ej. 1

A veces el juez mide todavía más fino ( x^4 ), o en vez de un reloj simple usa un reloj armado con piezas ( x\,\text{sen}\,x  en lugar de  x^2 ). En el primer caso agregás una columna más. En el segundo, desarrollás también el denominador y te quedás con su primer término:  x\,\text{sen}\,x  se porta como  x^2  cerca de 0.

Denominador  x^4  (salió en mayo 2023): hacen falta términos de grado 4.

-  \cos x=1-\frac{x^2}2+\frac{x^4}{24} ;  x\,\text{sen}\,x=x^2-\frac{x^4}6 ;  e^{x^2}=1+x^2+\frac{x^4}2 ;  \cos(x^2)=1-\frac{x^4}2 ;  x\,L(1+x)=x^2-\frac{x^3}2+\frac{x^4}3 .

Denominador que no es potencia ( x\,\text{sen}\,x ,  x^2\text{Arctg}\,x ,  1-\cos x ): desarrollalo y quedate con el primer término, que es de la forma  d\,x^k . Después el límite es  \frac{c}{d} , donde  c\,x^k  es el primer término del numerador.

-  x\,\text{sen}\,x=x^2+R_2(x)  y  x^2\,\text{Arctg}\,x=x^3+R_3(x) .

- Ejemplo:  \frac{1-\cos x}{x\,\text{sen}\,x}=\frac{\frac{x^2}2+R_2(x)}{x^2+R_2(x)}\to\frac12 .

Los candidatos para un límite "nuevo" son estos:  x^4  (como en mayo 2023 y en el Ejercicio 4.3 c de las Notas) o un denominador que haya que desarrollar.

Cuando el denominador es un producto ( x\,\text{sen}\,x ), no hace falta desarrollarlo de más: su primer término ya decide la potencia  k , y el numerador se desarrolla hasta ese mismo  k . Si el límite con  x^4  te da un número raro, revisá especialmente el  \frac{x^4}{24}  del coseno, que es el término que más se olvida.

Ideas clave:
- \cos x  hasta  x^4 :  +\frac{x^4}{24}
- x\,\text{sen}\,x=x^2-\frac{x^4}6+\dots
- Denominador no monomio: desarrollalo y usá su primer término
- \frac{c\,x^k+\dots}{d\,x^k+\dots}\to\frac cd

Ejemplo: \lim_{x\to0}\frac{x\,\text{sen}\,x-x^2}{x^4}
Resolución: x(x-\frac{x^3}6)-x^2=-\frac{x^4}6 . Límite  -\frac16 .
