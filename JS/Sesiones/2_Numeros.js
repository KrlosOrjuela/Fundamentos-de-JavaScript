
/// Clase_3: Numeros

/*
 * Operadores matemáticos:
  * suma ( + )
  * resta ( - )
  * multiplicación
  * división
 */

var edad = 28;

// Formas de incrementar un numero;
 edad = edad + 1; // = 29
 edad += 1; // = 30

 var peso = 75;
 peso = peso - 2; // = 73
 peso -= 2; // = 71

 var valorManzana = 800;
 var valorPera = 600;
 var valorNaranja = 700;

 var valorTotalFrutas = valorManzana + valorPera; // = 1400
 valorTotalFrutas -= valorNaranja; // = 700

 // Decimales

 var valorPorcionPatilla = 200.3;
 valorTotalFrutas = valorPorcionPatilla * 3; // = 600.9000000000001

 // Para obtener numeroS mas precisos con el mismo lenguaje

var valorTotalFrutasPresiso = valorPorcionPatilla * 100 * 3 / 100; // = 600.9

// tener encuenta un numero de Decimales toFixed(int numeroDecimalesNecesarios)

var valorTotalFrutasConDecimales = valorTotalFrutasPresiso.toFixed(2); // = 600.90

// Usando el modulo de matematicas de JS

var valorTotalFrutasMath =  Math.round(valorPorcionPatilla * 3); // = 601

// convertimos nuestro valor de string a Decimales

var valorTotal = parseFloat(valorTotalFrutasConDecimales);


// Division

var porcionesXPizza = 8;
var numeroPersonas = 2;
var cantidadPizzasPorPersona = porcionesXPizza / numeroPersonas; 
