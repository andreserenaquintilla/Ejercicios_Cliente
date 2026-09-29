// Ejercicio: u3e6_Circulo
// Módulo: DWEC
// Autor: Andrés Serena Quintilla
// Fecha: 29/09/2026

// 1. Declaramos la variable que vamos a pedirle al usuario
let radio;
do { // Aquí, queremos que si no nos escribe un número, dé error y vuelva a salir el prompt
  radio = Number(prompt("Introduce el valor del radio de un círculo."));
  if (isNaN(radio) || radio <= 0) {
    alert("Error, tienes que introducir un número mayor que 0.");
  } 
} while (isNaN(radio) || radio <= 0);

// 2. Declaramos, con el número que le hemos pedido al usuario, las diferentes operaciones para sacar lo que queremos 
let diametro = 2 * radio;
let perimetro = 2 * Math.PI * radio;
let areaCirculo = Math.PI * Math.pow(radio, 2);
let areaEsfera = 4 * Math.PI * Math.pow(radio, 2);
let volumenEsfera = (4/3) * Math.PI * Math.pow(radio, 3);

// 3. Por último, mostramos todos los valores con un document.write
document.write(
  `El valor del radio que has elegido es ${radio} cm, del diámetro es ${diametro} cm, del perímetro es ${perimetro.toFixed(2)} cm, del área del círculo es ${areaCirculo.toFixed(2)} cm², del área de la esfera es ${areaEsfera.toFixed(2)} cm² y por último, el valor del volumen de la esfera es ${volumenEsfera.toFixed(2)} cm³.`
);