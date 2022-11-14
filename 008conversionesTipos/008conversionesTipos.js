"use strict"

/*
008conversionesTipos.js/.html: ¿Cuáles son los resultados de estas expresiones?
"" + 1 + 0 en este caso da 10 ya que al empezar por un string lo concatena con el simbolo +
"" - 1 + 0 en este caso es -1 empieza por un string como el anterior pero no tiene el simbolo +.
true + false en este caso es true
6 / "3" en este caso se realiza la division no tiene el + que es lo que nos puede cambiar el resultado
"2" * "3" en este caso se realiza la multiplicacion no tiene el + que es lo que nos puede cambiar el resultado
4 + 5 + "px" en este caso tiene el simbolo + pero al empezar con un numero y no un string aparece 9px
"$" + 4 + 5 en este caso aparece $45 ya que al empzar con un string y el simbolo + esta concatenando todo
"4" - 2 en este caso se realiza la resta y aparece el numero 2
"4px" - 2 en este caso aparece NaN ya que al esta intentando hacer la resta y no puede motivo que nos aparece el string no solo con numero sino con el px
"  -9  " + 5 en este caso aparece -95 concatena el string conn el numero
"  -9  " - 5 Lo suma lo esta reconociendo como un numero negativo
null + 1 en este caso aparece 1 ya que esta realizando la suma de null + 1 en el caso que null es 0
undefined + 1 en este caso aparece NaN ya que undefined es NaN y no lo puede sumar.
" \t \n" - 2 en este caso aparece -2 ya que \n es un salto de linea y no lo esta reconociendo ni como string ni numero.
*/




