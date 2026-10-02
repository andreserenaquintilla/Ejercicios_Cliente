// Ejercicio: u3e7_number
// Módulo: DWEC
// Autor: Andrés Serena Quintilla
// Fecha: 29/09/2026

let numero;
do { // Aquí, queremos que si no nos escribe un número, dé error y vuelva a salir el prompt
  numero = Number(prompt("Introduce un número entero."));
  if (!Number.isInteger(numero)) {
    alert("Error, tienes que introducir un número que sea entero.");
  } 
} while (!Number.isInteger(numero));

let exponencial = numero.toExponential();
let decimal = numero.toFixed(4);
let binario = numero.toString(2).padStart(8, "0");
let octal = numero.toString(8);
let hexadecimal = numero.toString(16);

document.write(
  `El valor exponencial del número que has elegido es ${exponencial}, ese mismo número, con cuatro decimales es ${decimal}, en binario es ${binario}, en octal es ${octal} y en hexadecimal es 0x${hexadecimal}. `
)