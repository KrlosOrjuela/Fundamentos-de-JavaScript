
// 8 Comparaciones
console.log(' ---- Comparaciones ----');

/*
 * Existen varias maneras de comparar variables u objetos dentro de javascript.
*/

/*
 * En el primer ejemplo le asignamos a X un valor numérico y a Y un string.
 * Para poder compararlos debemos agregar dos signos de igual (==).
 * Esto los convierte al mismo tipo de valor y permite que se puedan comparar.
*/

var x = 4, y = '4';
 // x==y => true // Esto los convierte al mismo tipo de valor y permite que se puedan comparar.
// x===y => false // Esta comparación incluye el tipo de dato

/// Te recomendamos que uses el triple igual siempre que estés comparando variables.

/*
 * Existen cinco tipos de datos que son primitivos:
   * Boolean
   * Null
   * Undefined
   * Number
   * String
*/

var persona1 = {
  nombre:'Carlos'
}

var persona2 = {
  nombre:'Carlos'
}

// perosa1 == perosa2 => false // No son objetos por referencia. Son objetos diferentes

var persona3 = persona1;

// persona3 == persona1 => true // Son objetos por referencia.

var persona4 = {
  ...persona1
}

// persona1 == persona4 => false // No son objetos por referencia. Son lugares en memoria diferentes
// Que paso si modifico persona 1, cambia perosona 4 ?... Si porque son dos objetos diferentes que apuntan a un mismo lugar de memoria
