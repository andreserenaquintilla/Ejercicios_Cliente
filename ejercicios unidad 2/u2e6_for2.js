// Ejercicio: u2e6_for2
// Nombre: Andrés Serena Quintilla

// 1. Primer for para mostrar las horas de 9 a 21
for (let hora = 9; hora <= 21; hora++) {
    // 2. Segundo for para mostrar los minutos de 0 a 55 en intervalos de 5
    for (let i = 0; i <= 55; i += 5) {
        // 3. Condición para mostrar los minutos que tengan un solo digito como 0 y 5 con dos dígitos, añadiendo un 0
        if (i < 10) {
        document.write("Son las " + hora + ":0" + i + "<br>");
        } else {
        document.write("Son las " + hora + ":" + i + "<br>");
        }
    }
}