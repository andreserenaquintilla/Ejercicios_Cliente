// Ejercicio: u2e4_ifelse
// Nombre: Andrés Serena Quintilla

// 1 - Declaramos la variable que saldrá al escribir la edad
let edad_usuario = parseInt(prompt("Introduce tu edad"));

// 2 - Estructura If Else
if (edad_usuario < 0) {
    alert("No se puede introducir una edad negativa");
}
else if (edad_usuario >= 0 && edad_usuario <= 12) {
    alert("Eres un niño");
}
else if (edad_usuario >= 13 && edad_usuario <= 26) {
    alert("Eres un Joven");
}
else if (edad_usuario >= 27 && edad_usuario <= 59) {
    alert("Eres un Adulto");
}
else if (edad_usuario >= 60) {
    alert("Eres un Jubilado");
}