// Ejercicio: arrays (funciones)
// Módulo: DWEC
// Autor: Andrés Serena Quintilla
// Fecha: 30/09/2026

// Todas las funciones reciben el array por parámetro, así valen para cualquier array

function numeroElementos(array) {
  return array.length;
}

function mostrarElementos(array) {
  return array.join(", ");
}

// slice() sin nada hace una copia, así reverse y sort no cambian el array original
function mostrarInverso(array) {
  return array.slice().reverse().join(", ");
}

function mostrarOrdenado(array) {
  return array.slice().sort().join(", ");
}

function anadirPrincipio(array, elemento) {
  array.unshift(elemento);
}

function anadirFinal(array, elemento) {
  array.push(elemento);
}

// shift y pop devuelven el elemento que borran, así podemos decir cuál ha sido
function borrarPrincipio(array) {
  return array.shift();
}

function borrarFinal(array) {
  return array.pop();
}

function elementoEnPosicion(array, posicion) {
  return array[posicion];
}

function posicionDeElemento(array, elemento) {
  return array.indexOf(elemento);
}

// El +1 es porque slice no incluye la posición final
function mostrarIntervalo(array, inicio, fin) {
  return array.slice(inicio, fin + 1).join(", ");
}

// Busca un objeto por su nombre y devuelve su posición, o -1 si no lo encuentra
function posicionPorNombre(array, nombre) {
  for (let i = 0; i < array.length; i++) {
    if (array[i].nombre === nombre) {
      return i;
    }
  }
  return -1;
}