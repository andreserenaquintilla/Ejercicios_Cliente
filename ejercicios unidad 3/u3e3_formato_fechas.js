// Ejercicio: u3e2_domingos
// Autor: Andrés Serena Quintilla

// 1. Declaramos la variable del dia de hoy
const hoy = new Date();

let dia = hoy.getDate();
let mes = hoy.getMonth();
let año = hoy.getFullYear();

let formatoFecha = Number(prompt("Introduce 1 para ver la fecha así '25/09/2026', 2 para verlo así 'Viernes 25 de septiembre de 2026' o 3 para verlo al modo Americano 'Friday, September 25, 2026'."));

switch (formatoFecha) {
    case 1:
        // aquí irá el formato 1
        document.write(dia + "/" + (mes + 1) + "/" + año);
        break;
    case 2:
        // aquí irá el formato 2
        break;
    case 3:
        // aquí irá el formato 3
        break;
    default:
        // aquí, si escribe otra cosa
}