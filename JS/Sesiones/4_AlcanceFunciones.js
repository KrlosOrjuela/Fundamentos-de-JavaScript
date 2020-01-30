
/// El alcance de las funciones

/*
 * Si una variable no está definida dentro del cuerpo de una función hablamos de una variable global.
 * Por el contrario, una variable definida dentro de una función es una variable local.
*/

var nombre = 'Carlos'; // variable global
                      // En consola podemos acceder a esta variable local usuando: window.nombre

function  ImprimirNombreEnMayusculas(){
  nombre = nombre.toUpperCase(); // nombre = CARLOS
  console.log(nombre);
}

ImprimirNombreEnMayusculas();


/*
 * Para que la ejecución de una función no modifique una variable global
 * usamos parámetros en lugar de pasar directamente la variable
*/

function  ImprimirNombreEnMayusculas(nom){ // nom = variable local (No existe para la consola)
  nom = nombre.toUpperCase(); // nom = CARLOS & nombre = Carlos
  console.log(nom);
}

ImprimirNombreEnMayusculas(nombre);


/*
* Es posible utilizar el mismo nombre para una variable global y
* para el parámetro de una función con un alcance local. (No es recomendado, genera confusión)
*/

function  ImprimirNombreEnMayusculasAlterno(nombre){ // nombre = variable local (No existe para la consola)
 nombre = nombre.toUpperCase(); // nombre (local) = CARLOS & nombre (global) = Carlos
 console.log(nombre);
}

ImprimirNombreEnMayusculasAlterno(nombre);
