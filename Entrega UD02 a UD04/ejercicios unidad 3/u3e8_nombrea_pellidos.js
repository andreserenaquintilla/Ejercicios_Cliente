// Ejercicio: u3e8_nombre_apellidos
// Módulo: DWEC
// Autor: Andrés Serena Quintilla
// Fecha: 29/09/2026

// 1. Declaramos la variable donde se guardará el nombre y los apellidos
let nombreApellidos;
do { // Aquí, decimos que si no introduce 3 palabras, ya que el split lo comprueba, dé error y vuelva a salir el prompt
  nombreApellidos = prompt("Introduce tu nombre y apellidos.") || ""; // Con las dos || y el "" buscamos que si no introduce nada, no dé error y salte al prompt otra vez
  if (nombreApellidos.split(" ").length !== 3) { // Aquí, si con el split no salen 3 palabras, da error, lo cual, si hay uno que tiene un nombre compuesto y lo escribe separado, da error, pero no sé como solucionar eso
    alert("Tienes que introducir tu nombre y tus dos apellidos.");
  } 
} while (nombreApellidos.split(" ").length !== 3);

// 2. Montamos lo que me pide el enunciado
let numeroCaracteres = nombreApellidos.replaceAll(" ", "").length;
let mayusculas = nombreApellidos.toUpperCase();
let minusculas = nombreApellidos.toLowerCase();
let nombreSeparado = nombreApellidos.split(" ");

// 3. Mostramos el resultado de las variables de arriba
document.write(
  `El nombre y apellidos que has introducido es ${nombreApellidos}.<br>Tiene ${numeroCaracteres} caracteres sin contar los espacios.<br>Todo en mayúsculas se ve así ${mayusculas}.<br>En minúsculas así ${minusculas}.<br>Y así se ve dividido en partes:<br>Nombre: ${nombreSeparado[0]}.<br>Apellido 1: ${nombreSeparado[1]}.<br>Apellido 2: ${nombreSeparado[2]}.`
);