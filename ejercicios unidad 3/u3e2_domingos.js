// Ejercicio: u3e2_domingos
// Autor: Andrés Serena Quintilla

// 1. Declaramos la variable del dia de hoy
const hoy = new Date();

// 2. Con estos dos prompt, pedimos tanto el dia de tu cumpleaños como el mes
const dia = Number(prompt("Introduce el día de tu cumpleaños:"));
const mes = Number(prompt("Introduce el mes de tu cumpleaños siendo 1 enero y 12 diciembre):")) - 1; //Restamos 1 al mes porque JavaScript los cuenta de 0 (enero) a 11 (diciembre)

// 3. Montamos el for para que se repita hasta el año 2100
for (let año = hoy.getFullYear(); año <= 2100; año++) {
    const fechaCumple = new Date(año, mes, dia);
    // Si ese año el cumpleaños cae en domingo, lo mostramos
    if (fechaCumple.getDay() === 0) {
        document.write("En " + año + " tu cumpleaños cae en domingo<br>");
    }
}