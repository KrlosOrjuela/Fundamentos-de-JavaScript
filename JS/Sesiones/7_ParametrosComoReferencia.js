
/// Parámetros como Referencia
console.log(' ---- Parámetros como Referencia ----');

/*
 * Javascript se comporta de manera distinta cuando le pasamos un objeto como parámetro.
 * Cuando los objetos se pasan como una referencia, estos se modifican fuera de la función.
 * Para solucionar esto se puede crear un objeto diferente. Esto lo podemos hacer colocando
 * tres puntos antes del nombre. Ej …persona.
*/

// Objeto persona
var persona = {
  nombre:'Carlos Orjuela', // Atributo 1: key: value
  edad: 28, // Atributo 2: key: value
  peso: '75' // Atributo 3: key: value
};

function ParametrosComoReferencia_Cumpleanos(persona){
  // Se modifica el objeto persona, en su Atributo edad.
  persona.edad += 1;
}

function ParametrosComoReferencia_Cumpleanos_2(edad){
  // No se modifica el objeto persona.
  edad += 1;
}

function ParametrosComoReferencia_Cumpleanos_3(persona){
  // Se crea un segundo objeto y modificamos sus atributos apartir del primer objeto
  return{
    ...persona,
    edad: persona.edad + 1
  }
}
