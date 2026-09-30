// Ejercicio: u4e1_arrays
// Módulo: DWEC
// Autor: Andrés Serena Quintilla
// Fecha: 30/09/2026

// 1. Array global con los países
let paises = ["Japón", "España", "Brasil", "Noruega", "Canadá", "Italia"];

// 2. Función para pedir una opción entre un mínimo y un máximo, que vuelve a preguntar si no es válida
function pedirOpcion(mensaje, minimo, maximo) {
  let opcion;
  do {
    opcion = Number(prompt(mensaje));
    if (!Number.isInteger(opcion) || opcion < minimo || opcion > maximo) {
      alert(`Opción no válida, tienes que escribir un número del ${minimo} al ${maximo}.`);
    }
  } while (!Number.isInteger(opcion) || opcion < minimo || opcion > maximo);
  return opcion;
}

// 3. Menú que se repite hasta que el usuario elige 0 para salir
let opcion;
do {
  opcion = pedirOpcion(
    "Elige una opción:\n1. Mostrar número de países\n2. Mostrar listado de países\n3. Mostrar un intervalo de países\n4. Añadir un país\n5. Borrar un país\n6. Consultar un país\n0. Salir",
    0,
    6,
  );

  switch (opcion) {
    case 1: {
      document.write(`<h3>Número de países</h3><p>Hay ${numeroElementos(paises)} países.</p>`);
      break;
    }
    case 2: {
      let orden = pedirOpcion(
        "¿Cómo quieres verlos?\n1. En el orden del array\n2. Del revés\n3. Ordenados alfabéticamente",
        1,
        3,
      );
      if (orden === 1) {
        document.write(`<h3>Listado de países</h3><p>${mostrarElementos(paises)}</p>`);
      } else if (orden === 2) {
        document.write(`<h3>Listado de países del revés</h3><p>${mostrarInverso(paises)}</p>`);
      } else {
        document.write(`<h3>Listado de países ordenados</h3><p>${mostrarOrdenado(paises)}</p>`);
      }
      break;
    }
    case 3: {
      let intervalo = prompt("Escribe el intervalo en formato inicio-fin (las posiciones empiezan en 0), por ejemplo 1-3.") || "";
      let partes = intervalo.split("-");
      let inicio = Number(partes[0]);
      let fin = Number(partes[1]);
      // Comprobamos que sean dos números enteros, dentro del array y que el inicio no sea mayor que el fin
      if (partes.length !== 2 || !Number.isInteger(inicio) || !Number.isInteger(fin) || inicio < 0 || fin >= paises.length || inicio > fin) {
        document.write(`<h3>Intervalo de países</h3><p>El intervalo "${intervalo}" no es válido.</p>`);
      } else {
        document.write(`<h3>Intervalo de países (${inicio}-${fin})</h3><p>${mostrarIntervalo(paises, inicio, fin)}</p>`);
      }
      break;
    }
    case 4: {
      let pais = prompt("Escribe el país que quieres añadir.") || "";
      if (pais === "") {
        document.write(`<h3>Añadir país</h3><p>No has escrito ningún país.</p>`);
      } else {
        let donde = pedirOpcion("¿Dónde lo añado?\n1. Al principio\n2. Al final", 1, 2);
        if (donde === 1) {
          anadirPrincipio(paises, pais);
          document.write(`<h3>Añadir país al principio</h3><p>Se ha añadido ${pais}.</p>`);
        } else {
          anadirFinal(paises, pais);
          document.write(`<h3>Añadir país al final</h3><p>Se ha añadido ${pais}.</p>`);
        }
      }
      break;
    }
    case 5: {
      if (numeroElementos(paises) === 0) {
        document.write(`<h3>Borrar país</h3><p>No quedan países para borrar.</p>`);
      } else {
        let donde = pedirOpcion("¿Dónde lo borro?\n1. Al principio\n2. Al final", 1, 2);
        let borrado;
        if (donde === 1) {
          borrado = borrarPrincipio(paises);
        } else {
          borrado = borrarFinal(paises);
        }
        document.write(`<h3>Borrar país</h3><p>Se ha borrado ${borrado}.</p>`);
      }
      break;
    }
    case 6: {
      let tipo = pedirOpcion("¿Cómo quieres consultar?\n1. Por posición\n2. Por nombre", 1, 2);
      if (tipo === 1) {
        let posicion = Number(prompt(`Escribe una posición del 0 al ${paises.length - 1}.`));
        let pais = elementoEnPosicion(paises, posicion);
        // Si la posición no existe, el array devuelve undefined
        if (pais === undefined) {
          document.write(`<h3>Consultar por posición</h3><p>No hay ningún país en esa posición.</p>`);
        } else {
          document.write(`<h3>Consultar por posición</h3><p>En la posición ${posicion} está ${pais}.</p>`);
        }
      } else {
        let nombre = prompt("Escribe el nombre del país.") || "";
        let posicion = posicionDeElemento(paises, nombre);
        // indexOf devuelve -1 si no lo encuentra
        if (posicion === -1) {
          document.write(`<h3>Consultar por nombre</h3><p>${nombre} no está en la lista.</p>`);
        } else {
          document.write(`<h3>Consultar por nombre</h3><p>${nombre} está en la posición ${posicion}.</p>`);
        }
      }
      break;
    }
  }
} while (opcion !== 0);