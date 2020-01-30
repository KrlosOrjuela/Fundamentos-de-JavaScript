
/// Clase_1: Variables

/*
 * console.log =>
 * Forma de interactuar con el usuario, imprimiendo datos en la consola del navegador (F12)
 */
console.log('¡Hola mundo from JS!');

/*
 * Declaración variables
 * var nombreVariable
 * En la consola, escribimos el nombre de la variable, y nos retorna el valor asignado
 */
var nombre;
nombre = 'Carlos';
var nombre2 = 'Augusto';
var apellido = 'Orjuela', apellido2 = 'Bohorquez';

/*
 * Combinamos: console.log - variables
 * Para concatenar dos strings se utiliza el símbolo (+)
 */
 console.log('Hola ' + nombre + ' ' + nombre2+ ' ' + apellido + ' ' + apellido2);

 /*
  * No existe tipado de datos
  * no se diferencia entre int o string
  */
  var edad = 28;
  console.log('Hola, mi nombre es ' + nombre +  'y tengo ' + edad + ' años');
  edad = '28 años';
  console.log('Hola, mi nombre es ' + nombre +  'y tengo ' + edad);


/// Clase_2: String

/*
 * toUpperCase (transformar un String a mayúsculas)
 * toLowerCase (transformar el string a minúsculas)
 */

 var nombreEnMatusculas = nombre.toUpperCase();
 var apellidosEnMinusculas = apellido.toLowerCase();


 /*
  * Manipular caracteres de un string
  * charAt(int posicion) obtener caracter de la posición establecida
  * length, que nos indica la cantidad de caractéres que tiene un string.
  */

  var primeraLetraNombre = nombre.charAt(0);
  var cantidadLetrasNombre = nombre.length;

  /*
   * Concatenar de forma: interpolación de texto (comilla inverditas: ``)
   */

   var nombreCompleto = `${nombre} ${apellido.toUpperCase()}`;

   /*
    * Obtener caracteres de una cadena substr(int caracterInicio,int numeroCarcateresAObtener)
    */

    var caracteresDelNombre = nombre.substr(1,2);

    /*
     * Ejercicio: Cual es la ultima letra del nombre escrito
    */

    var tuNombre = 'Christofer';
    var longitudTuNombre = tuNombre.length;
    var ultimaLetraTuNombre = tuNombre.charAt(longitudTuNombre - 1);
