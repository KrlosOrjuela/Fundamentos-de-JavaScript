
/// Desestructurar Objetos
console.log(' ---- Desestructurar Objetos ----');

/*
 * En esta clase aprenderemos otra forma de acceder a los atributos de los objetos que es la desestructurización de los mismos.
*/

// Objeto persona
var persona = {
  nombre:'Carlos Orjuela', // Atributo 1: key: value
  edad: 28, // Atributo 2: key: value
  peso: '75' // Atributo 3: key: value
};

function  DesestructurarObjetos_ImprimirNombreEnMayusculas(persona){
  // Para no duplicar las variables introducir el nombre de la variable como parámetro de la segunda variable. Ej:
  var {nombre} = persona;  // = var nombre = persona.nombre;
  console.log(nombre.toUpperCase());
}

DesestructurarObjetos_ImprimirNombreEnMayusculas(persona);

function DesestructurarObjetos_ImprimirNombreYEdad(persona){
  console.log(`Hola me llamo ${persona.nombre}, tengo ${persona.edad} años y mido ${persona.peso} km`);
}

DesestructurarObjetos_ImprimirNombreYEdad(persona);
