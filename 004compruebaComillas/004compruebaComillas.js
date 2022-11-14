"use strict"

/*
004compruebaComillas.js/.html: ¿Cuál es la salida del script? Piénsalo y combruébalo.
let name = "Peter Parker";
alert( `Hola ${1}` ); // ?
alert( `Hola ${"name"}` ); // ?
alert( `Hola ${name}` ); // ?
*/

let name = "Peter Parker";
//alert( `Hola ${1}` ); // ?
//alert( `Hola ${"name"}` ); // ?
//alert( `Hola ${name}` ); // ?

/*
Primer caso: En este alert mostramos Hola 1. Hola porque esta escrito y con ${} mostramos el numero 1
Segundo caso: En este alert mostramos Hola name. Hola porque esta escrito y con ${} mostramos el name ya que al estar con las comillas es un string
Tercer caso: En este alert se mostrara hola Peter Parker. Hola porque esta escrito y con ${} mostramos la variable
*/