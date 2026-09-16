// Ejercicio: u2e8_while2
// Nombre: Andrés Serena Quintilla

// 1. Declaro las dos variables del ejercicio, nombre y apellido, porque se le conoce solo por su nombre y primer apellido.
let nombre = "Adolfo";
let apellido = "Suárez";

// 2. Metemos un prompt para que el usuario intente introducir el nombre y apellido correcto y necesito diferenciar nombre de apellido.
let respuesta = prompt ("¿Cuál fue el primer presidente de la democracia española?");
let partes = respuesta.split(" ");
let parteNombre = partes[0];
let parteApellido = partes[1];

//3. Creo tanto el bucle while inicial, como el bucle if para las diferentes respuestas.
while (parteNombre !== nombre || parteApellido !== apellido) {
    if (parteNombre === nombre) {
    respuesta = prompt ("Te falta el apellido. ¿Cuál fue el primer presidente de la democracia española?");
    } else if (parteNombre === apellido) {
        respuesta = prompt ("Te falta el nombre. ¿Cuál fue el primer presidente de la democracia española?");
    } else {
        respuesta = prompt ("ERROR. Inténtelo denuevo. ¿Cuál fue el primer presidente de la democracia española?");
    }
    partes = respuesta.split(" ");
    parteNombre = partes[0];
    parteApellido = partes[1];
}

//4. Muestro con un alert que ha escrito bien el nombre y primer apellido.
alert("¡Correcto! El primer presidente de España fue " + nombre + " " + apellido);