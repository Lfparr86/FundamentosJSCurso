"use strict"
/*
009corregirAdicion.js/.html: Aquí hay un código que le pide al usuario dos números y 
muestra su suma. Funciona incorrectamente. El resultado en el ejemplo a continuación 
es 12 (para valores de captura predeterminados). ¿Por qué? Arréglalo. El resultado 
debería ser 3.
let a = prompt("¿Primer número?", 1);
let b = prompt("¿Segundo número?", 2);
alert(a + b); // 12
*/

let a =+ prompt("¿Primer número?", 1);
let b =+ prompt("¿Segundo número?", 2);
alert(a + b);
/*
Ahora da 3 ya que al poner el simbolo + delante de cualquier variable string se convierte en un entero.
*/
