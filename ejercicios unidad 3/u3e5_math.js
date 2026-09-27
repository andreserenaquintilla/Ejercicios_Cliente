// Ejercicio: u3e5 Math
// Autor: Andrés Serena Quintilla

let opcionEjercicios;

do {
  opcionEjercicios = Number(
    prompt(
      "Elige una de estas 4 opciones: 1 para Potencia, 2 para Raíz, 3 para Redondeo y 4 para Trigonometría.",
    ),
  );

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

switch (opcionEjercicios) {
  case 1:
    let base = Number(prompt("Escribe el número que será la base."));
    let exponente = Number(prompt("Escribe el número que será el exponente."));
    let resultado1 = Math.pow(base, exponente);
    document.write(
      `La potencia de ${base} elevado a ${exponente} es: ${resultado1}`,
    );
    break;
  case 2:
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
  case 3:
    break;
  case 4:
    break;
}
