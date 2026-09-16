// Ejercicio: u2e5_for
// Nombre: Andrés Serena Quintilla

// 1 - Variable booleana que indica si toca mostrar la hora en punto o la media hora
let esHoraEnPunto = true;

// 2 - Bucle exterior: recorre las horas de 9 a 21
for (let hora = 9; hora <= 21; hora++) {
    // Bucle interior: se repite 2 veces por cada hora (una para :00 y otra para :30)
    for (let vuelta = 0; vuelta < 2; vuelta++){
        if (esHoraEnPunto) {
            document.write("Son las " + hora + ":00<br>");
            esHoraEnPunto = false; // La próxima vez tocará la media hora
        } else {
            document.write("Son las " + hora + ":30<br>");
            esHoraEnPunto = true; // La próxima vez tocará la hora en punto
        }
    
    }
}