// Ejercicio: disco
// Módulo: DWEC
// Autor: Andrés Serena Quintilla
// Fecha: 01/10/2026

function Disco() {
  this.nombre = "";
  this.grupo = "";
  this.año = "";
  this.estilo = "";
  this.localizacion = 0;
  this.prestado = false;

  this.incluirDatos = function (nombre, grupo, año, estilo, localizacion) {
    this.nombre = nombre;
    this.grupo = grupo;
    this.año = año;
    this.estilo = estilo;
    this.localizacion = localizacion;
  };

  this.cambiarLocalizacion = function (localizacion) {
    this.localizacion = localizacion;
  };
  this.cambiarPrestado = function (prestado) {
    this.prestado = prestado;
  };
  this.mostrarInfo = function () {
    let textoPrestado = "No";
    if (this.prestado) {
      textoPrestado = "Sí";
    }
    return `Nombre: ${this.nombre}<br>Grupo: ${this.grupo}<br>Año: ${this.año}<br>Estilo: ${this.estilo}<br>Prestado: ${textoPrestado}<br>Localización: ${this.localizacion}`;
  };
  this.toString = function () {
    return this.nombre;
  };
}