"use strict"

/*
003constantes.js/.html: Examina el siguiente código:
const cumple = '18.04.1982';
const age = someCode(cumple);
Aquí tenemos una constante cumple para la fecha de cumpleaños, y la edad age, que 
también es constante.
age es calculada desde cumple con la ayuda de “cierto código” someCode(), que es una 
llamada a función que no hemos explicado aún (¡lo haremos pronto!); los detalles no 
importan aquí, el punto es que age se calcula de alguna forma basándose en cumple. 
¿Sería correcto usar mayúsculas en cumple? ¿Y en age? ¿O en ambos?
const CUMPLE = '18.04.1982'; // ¿cumple en mayúsculas?
const AGE = someCode(CUMPLE); // ¿age en mayúsculas?
*/
const CUMPLE = '18.04.1982'; // ¿cumple en mayúsculas?
const AGE = someCode(CUMPLE); // ¿age en mayúsculas?

/*
Las constante en mayusculas solo se usan cuando es al que no varia. La fecha de cumpleaños es un 
dato que no varia. Los colores el algo que no varia tampoco tiene el mismo numero.

La edad no se pondria en mayusculas ya que es un dato que puede cambiar en la persona.
*/