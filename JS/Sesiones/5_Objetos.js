
/// Objetos
console.log(' ---- Objetos ----');

/*
 * Vamos a empezar a trabajar con objetos, veremos cómo declararlos, cuáles son sus ventajas,
 * cómo asignarles atributos y cómo trabajar con ellos dentro de las funciones.
*/

/*
 * Los objetos se definen delimitados mediante llaves { (atributos) }
 * Un atributo se compone de una clave (key) y un valor (value), que se separan entre sí por dos puntos ":"
 * Los valores pueden ser de tipo string, número, booleano, etc.
 * Cada atributo está separado del siguiente por una coma.
 * Un objeto puede tener todos los atributos que sean necesarios.
*/

// Objeto persona
var persona = {
  nombre:'Carlos Orjuela', // Atributo 1: key: value
  edad: 28, // Atributo 2: key: value
  peso: '75 km' // Atributo 3: key: value
};

// Un objeto también se puede pasar como atributo en una función.

function  Objeto_ImprimirNombreEnMayusculas(persona){
  var nombrePersona = persona.nombre.toUpperCase();
  console.log(nombrePersona);
}

Objeto_ImprimirNombreEnMayusculas(persona);

/*
 * Las últimas versiones de JavaScript nos permiten desglosar el objeto para acceder únicamente al atributo que nos interesa.
 * Esto se consigue encerrando el nombre del atributo entre llaves { }.
*/

function  Objeto_ImprimirNombreEnMayusculasAlterno({nombre}){
  var nombrePersona = nombre.toUpperCase();
  console.log(`Alterno ${nombrePersona}`);
}

Objeto_ImprimirNombreEnMayusculasAlterno(persona);

// Podemos crear un nuevo objeto llamando la función
Objeto_ImprimirNombreEnMayusculasAlterno({nombre:'Nuevo Objeto'}); // la función no puede ir sin parametros, son obligatorios
