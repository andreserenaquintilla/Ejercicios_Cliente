// Ejercicio: u3e4 formato horas
// Autor: Andrés Serena Quintilla

// 1. Definimos las variables
const ahora = new Date();

let horas = ahora.getHours();
let minutos = ahora.getMinutes();
let segundos = ahora.getSeconds();

// 2. Montamos una función para no repetir el if del 0 en horas, minutos y segundos
function ponerCero(numero) {
  if (numero < 10) {
    return "0" + numero;
  }
  return numero;
}

// 3. Montamos el prompt para que, si dice algo que no sea las dos opciones que tengo, salga un mensaje de error y vuelva a salir el prompt
let formatoHora;

do {
  formatoHora = Number(
    prompt(
      "Introduce 1 para ver la hora en este formato '14:35:07' (Hora detallada con minutos y segundos) o 2 para ver la hora en este otro formato '02:35:07 AM' (hora con minutos y segundos y AM o PM según sea antes o después de medio día).",
    ),
  );

  if (formatoHora !== 1 && formatoHora !== 2) {
    alert("Opción no válida, tienes que escribir 1 o 2");
  }
} while (formatoHora !== 1 && formatoHora !== 2);

// 4. Montamos el switch
switch (formatoHora) {
  case 1: // Este da la hora en formato 24 horas
    document.write(
      ponerCero(horas) + ":" + ponerCero(minutos) + ":" + ponerCero(segundos),
    );
    break;
  case 2: // Este la da con el formato AM/PM
    let periodo; // Con este if diferenciamos si es AM o PM
    if (horas < 12) {
      periodo = "AM";
    } else {
      periodo = "PM";
    }

    let horas12 = horas; // Con este if conseguimos que nos dé la hora en formato 12 horas
    if (horas > 12) {
      horas12 = horas - 12;
    }
    if (horas === 0) {
      horas12 = 12;
    }
    document.write(
      ponerCero(horas12) +
        ":" +
        ponerCero(minutos) +
        ":" +
        ponerCero(segundos) +
        " " +
        periodo,
    );
    break;
}
