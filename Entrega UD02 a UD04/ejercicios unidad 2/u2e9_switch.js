// Ejercicio: u2e9_switch
// Nombre: Andrés Serena Quintilla

// 1 - Aparece una ventana para introducir la edad
let edad_usuario = parseInt(prompt("Introduce tu edad"));

// 2 - Aqui va toda la estructura del switch
switch (true)  {
    case (edad_usuario < 0):
        alert("No se puede introducir una edad negativa");
        break;
    case (edad_usuario >= 0 && edad_usuario <= 12):
        alert("Eres un niño");
        break;
    case (edad_usuario >= 13 && edad_usuario <= 26):
        alert("Eres un Joven");
        break;
    case (edad_usuario >= 27 && edad_usuario <= 59):
        alert("Eres un Adulto");
        break;
    case (edad_usuario >= 60):
        alert("Eres un Jubilado");
        break;
}