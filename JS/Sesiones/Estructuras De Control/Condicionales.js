
// Condicionales
console.log(' ---- Condicionales ----');

/*
 * Los condicionales nos permiten decidir si un código se ejecuta o no.
*/

// Objeto persona
var persona = {
  nombre: 'Carlos Orjuela',
  edad: 28,
  peso: '75',
  ingeniero: true,
  cocinero: true,
  cantante: false,
  boxeador: false
};

function Condicionales_ImprimirProfeciones(persona){
  console.log(`${persona.nombre}`);

  // Mediante un condicional (if) decidiremos si se ejecuta una parte de nuestro código
  // cuando se cumpla o no cierta condición.

  if(persona.edad >= 18){
    console.log('Es mayor de edad');
  }
  else {
    console.log('Es menor de edad');
  }

  console.log('Profesiones: ');

  if(persona.ingeniero === true){
    console.log('Ingeniero');
  }
  else{
    console.log('No es Ingeniero');
  }

  if(persona.cocinero === true){
    console.log('Cocinero');
  }
  else {
    console.log('No es Cocinero');
  }

  if(persona.cantante === true){
    console.log('Cantante');
  }
  else {
    console.log('No es Cantante');
  }

  if(persona.boxeador === true){
    console.log('Boxeador');
  }
  else {
    console.log('No es Boxeador');
  }
}

Condicionales_ImprimirProfeciones(persona);
