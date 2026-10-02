// Ejercicio: u2e7_while
// Nombre: Andrés Serena Quintilla

// 1. Voy a declarar la variable que voy a usar para el bucle while
let apellido = "Suárez";

// 2. Metemos un prompt para que el usuario intente introducir el apellido correcto
let respuesta = prompt("¿Cuál fue el apellido del primer presidente de España?");

// 3. Formalizamos el bucle while para que siga pidiendo la respuesta hasta que sea correcta 
while (respuesta !== apellido) {
    respuesta = prompt("Incorrecto. Inténtalo de nuevo. ¿Cuál fue el apellido del primer presidente de España?");
}

// 4. Si la respuesta es correcta, mostramos un alert con el mensaje correcto
alert("¡Correcto! El apellido del primer presidente de España fue " + apellido);