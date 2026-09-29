// Ejercicio: u3e5 Math
// Autor: Andrés Serena Quintilla

// 1. Función para pedir un número y que vuelva a preguntar si no se escribe un número
function pedirNumero(mensaje) {
  let numero;
  do {
    numero = Number(prompt(mensaje));
    if (isNaN(numero)) {
      alert("Error, tienes que escribir un número.");
    }
  } while (isNaN(numero));
  return numero;
}

// 2. Variable que guardará la opción que elija el usuario
let opcionEjercicios;

// 3. Montamos el do para las 4 opciones del ejercicio
do {
  opcionEjercicios = Number(
    prompt(
      "Elige una de estas 4 opciones: 1 para Potencia, 2 para Raíz, 3 para Redondeo y 4 para Trigonometría.",
    ),
  );

  // If para que si eliges algo que no sea una de las 4 opciones dé error y salga otra vez el prompt
  if (
    opcionEjercicios !== 1 &&
    opcionEjercicios !== 2 &&
    opcionEjercicios !== 3 &&
    opcionEjercicios !== 4
  ) {
    alert("Opción no válida, tienes que escribir 1, 2, 3 o 4");
  }
} while (
  opcionEjercicios !== 1 &&
  opcionEjercicios !== 2 &&
  opcionEjercicios !== 3 &&
  opcionEjercicios !== 4
);

// 4. Montamos el switch para los 4 casos diferentes
switch (opcionEjercicios) {
  case 1: // Este pide dos números para hacer la potencia
    let base = pedirNumero("Escribe el número que será la base.");
    let exponente = pedirNumero("Escribe el número que será el exponente.");
    let resultado1 = Math.pow(base, exponente);
    document.write(
      `La potencia de ${base} elevado a ${exponente} es: ${resultado1}`,
    );
    break;
  case 2: // Este pide un número para calcular su raíz, no puede ser negativo
    let numeroRaiz;
    do {
      numeroRaiz = Number(
        prompt(
          "Escribe el número positivo que se usará para calcular su raíz.",
        ),
      );
      if (numeroRaiz < 0) {
        alert("Error, estás introduciendo un número negativo.");
      }
    } while (numeroRaiz < 0);
    let resultadoRaiz = Math.sqrt(numeroRaiz);
    document.write(`La raíz de ${numeroRaiz} es: ${resultadoRaiz}`);
    break;
  case 3: // Este pide un decimal y lo redondea al más próximo, a la alta y a la baja
    let numeroDecimal;
    do {
      numeroDecimal = Number(
        prompt("Escribe un número decimal (ejemplo 3.14)."),
      );
      if (Number.isInteger(numeroDecimal) || isNaN(numeroDecimal)) {
        alert("Error, tienes que escribir un número decimal");
      }
    } while (Number.isInteger(numeroDecimal) || isNaN(numeroDecimal));
    let numeroEnteroProximo = Math.round(numeroDecimal);
    let numeroAlta = Math.ceil(numeroDecimal);
    let numeroBaja = Math.floor(numeroDecimal);
    document.write(
      `El número que has elegido es ${numeroDecimal}, su número entero más próximo es ${numeroEnteroProximo}, a la alta es ${numeroAlta} y a la baja es ${numeroBaja}.`,
    );
    break;
  case 4: // Este pide un ángulo y saca el seno, coseno y tangente
    let angulo;
    do {
      angulo = Number(prompt("Escribe un ángulo en grados, entre 0 y 360."));
      if (angulo < 0 || angulo > 360 || isNaN(angulo)) {
        alert("Error, no estás introduciendo un número válido.");
      }
    } while (angulo < 0 || angulo > 360 || isNaN(angulo));
    // Paso los grados a radianes porque las funciones de Math trabajan en radianes
    let radianes = (angulo * Math.PI) / 180;
    let sin = Math.sin(radianes);
    let cos = Math.cos(radianes);
    let tan = Math.tan(radianes);
    // Con toFixed(4) dejo solo 4 decimales para que no salgan números raros
    document.write(
      `El ángulo que has elegido es ${angulo}, su seno es ${sin.toFixed(4)}, su coseno es ${cos.toFixed(4)} y su tangente es ${tan.toFixed(4)}.`,
    );
    break;
}