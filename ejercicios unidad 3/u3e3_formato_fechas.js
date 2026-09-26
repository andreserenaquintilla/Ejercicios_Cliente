// Ejercicio: u3e2_domingos
// Autor: Andrés Serena Quintilla

// 1. Declaramos la variable del dia de hoy
const hoy = new Date();

let dia = hoy.getDate();
let mes = hoy.getMonth();
let año = hoy.getFullYear();
let diaSemana = hoy.getDay();

let formatoFecha;

do {
    formatoFecha = Number(prompt("Introduce 1 para ver la fecha así '25/09/2026', 2 para verlo así 'Viernes 25 de septiembre de 2026' o 3 para verlo al modo Americano 'Friday, September 25, 2026'."));

    if (formatoFecha !== 1 && formatoFecha !== 2 && formatoFecha !== 3) {
        alert("Opción no válida, tienes que escribir 1, 2 o 3");
    }
} while (formatoFecha !== 1 && formatoFecha !== 2 && formatoFecha !== 3);

switch (formatoFecha) {
    case 1:
        // formato dd/mm/aaaa, el mes empieza en 0 así que le sumo 1
        let mesActual = mes + 1;
        if (mesActual < 10) {
            mesActual = "0" + mesActual;
        }
        if (dia < 10) {
            dia = "0" + dia;
        }
        document.write(dia + "/" + mesActual + "/" + año);
        break;
    case 2:
        const diasDeLaSemana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
        const meses = ["enero", "febrero", "marzo","abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
        document.write(diasDeLaSemana[diaSemana] + ", " + dia + " de " + meses[mes] + " del " + año);
        // aquí irá el formato 2
        break;
    case 3:
        const daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        document.write(daysOfTheWeek[diaSemana] + ", " + months[mes] + " " + dia + ", " + año);
        break;
    default:
        document.write("Opción no válida, introduce 1, 2 o 3");// aquí, si escribe otra cosa
        
}