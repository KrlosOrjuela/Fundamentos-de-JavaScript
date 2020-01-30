
/// Funciones
//  JavaScript es un lenguaje interpretado, esto quiere decir que intentará ejecutar el código
//  sin importar si los parámetros que le pasemos a la función estén invertidos o incluso incompletos.

/*
 * Las funciones son fracciones de código reutilizable.
 * Para definir una función utilizaremos la palabra reservada “function”
 * Delimitamos el cuerpo de la función usando llaves { }
 * Los parámetros de la función son variables que se pasan a la función escribíendolos entre paréntesis ()
 */

 var nombre = 'Carlos';
 var edad = 28;

// Para definir una función utilizaremos
// - la palabra reservada “function”
// - seguido del nombre de la función

function ImprimirMiEdad(){
  // cuerpo de la función
  console.log(`${nombre} tiene ${edad} años`);
}

// Llamamos la función
ImprimirMiEdad();

/// Función con parametros
// Los parámetros de la función son variables que se pasan a la función escribíendolos entre paréntesis ()

function ImprimirEdadPersona(nom, ed){
  // cuerpo de la función
  console.log(`${nom} tiene ${ed} años`);
}

ImprimirMiEdad(nombre, edad); /// Esta tambien puede ser llamada desde la consola usando parametros diferentes

ImprimirEdadPersona('Miguel', 24);
ImprimirEdadPersona('Daniel', 18);
ImprimirEdadPersona('Maribel', 20);

// Datos invertidos
ImprimirEdadPersona(20, 'Maribel'); // 20 tiene Maribel años,
                                    // JavaScript es un lenguaje interpretado, esto quiere decir que intentará ejecutar el código
                                    // sin importar si los parámetros que le pasemos
