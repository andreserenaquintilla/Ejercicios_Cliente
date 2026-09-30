// Ejercicio: u3e9_contrasena
// Módulo: DWEC
// Autor: Andrés Serena Quintilla
// Fecha: 29/09/2026

let contrasena = prompt("Introduce una contraseña que sea entre 8 y 16 caracteres, debe contener al menos una letra minúscula, una mayúscula, un número y, por lo menos, uno de estos caracteres: - , _ , @ , # , $, % , &.") || "";

let longitudCorrecta = contrasena.length >= 8 && contrasena.length <= 16;
let tieneMayuscula = false;
let tieneMinuscula = false;
let tieneNumero = false;
let tieneSimbolo = false;

for (let i = 0; i < contrasena.length; i++) {
  let caracter = contrasena[i];

  if ("0123456789".includes(caracter)) {
    tieneNumero = true;
  } else if ("-_@#$%&".includes(caracter)) {
    tieneSimbolo = true;
  } else if (caracter === caracter.toUpperCase() && caracter !== caracter.toLowerCase()) {
    tieneMayuscula = true;
  } else if (caracter === caracter.toLowerCase() && caracter !== caracter.toUpperCase()) {
    tieneMinuscula = true;
  }
}

if (longitudCorrecta && tieneMayuscula && tieneMinuscula && tieneNumero && tieneSimbolo) {
  document.write("Contraseña segura.");
} else {
  document.write("Contraseña no segura.");
}