// Ejercicio: u4e2_discos
// Módulo: DWEC
// Autor: Andrés Serena Quintilla
// Fecha: 01/10/2026

// 1. Array global vacío para guardar los discos
let discos = [];

// 2. Función para pedir una opción entre un mínimo y un máximo, que vuelve a preguntar si no es válida
function pedirOpcion(mensaje, minimo, maximo) {
  let opcion;
  do {
    opcion = Number(prompt(mensaje));
    if (!Number.isInteger(opcion) || opcion < minimo || opcion > maximo) {
      alert(
        `Opción no válida, tienes que escribir un número del ${minimo} al ${maximo}.`,
      );
    }
  } while (!Number.isInteger(opcion) || opcion < minimo || opcion > maximo);
  return opcion;
}

// 3. Menú que se repite hasta que el usuario elige 0 para salir
let opcion;
do {
  opcion = pedirOpcion(
    "Elige una opción:\n1. Mostrar número de discos\n2. Mostrar listado de discos\n3. Mostrar un intervalo de discos\n4. Añadir un disco\n5. Borrar un disco\n6. Consultar un disco\n0. Salir",
    0,
    6,
  );

  switch (opcion) {
    case 1: {
      document.write(
        `<h3>Número de discos</h3><p>Hay ${numeroElementos(discos)} discos.</p>`,
      );
      break;
    }
    case 2: {
      let orden = pedirOpcion(
        "¿Cómo quieres verlos?\n1. En el orden del array\n2. Del revés\n3. Ordenados alfabéticamente",
        1,
        3,
      );
      // Gracias al toString del disco, se muestran y se ordenan por su nombre
      if (orden === 1) {
        document.write(
          `<h3>Listado de discos</h3><p>${mostrarElementos(discos)}</p>`,
        );
      } else if (orden === 2) {
        document.write(
          `<h3>Listado de discos del revés</h3><p>${mostrarInverso(discos)}</p>`,
        );
      } else {
        document.write(
          `<h3>Listado de discos ordenados</h3><p>${mostrarOrdenado(discos)}</p>`,
        );
      }
      break;
    }
    case 3: {
      let intervalo =
        prompt(
          "Escribe el intervalo en formato inicio-fin (las posiciones empiezan en 0), por ejemplo 1-3.",
        ) || "";
      let partes = intervalo.split("-");
      let inicio = Number(partes[0]);
      let fin = Number(partes[1]);

      // Separo las comprobaciones en variables para que el if se entienda mejor
      let sonEnteros = Number.isInteger(inicio) && Number.isInteger(fin);
      let dentroDelArray = inicio >= 0 && fin < discos.length;
      let ordenCorrecto = inicio <= fin;

      if (sonEnteros && dentroDelArray && ordenCorrecto) {
        document.write(
          `<h3>Intervalo de discos (${inicio}-${fin})</h3><p>${mostrarIntervalo(discos, inicio, fin)}</p>`,
        );
      } else {
        document.write(
          `<h3>Intervalo de discos</h3><p>El intervalo "${intervalo}" no es válido.</p>`,
        );
      }
      break;
    }
    case 4: {
      // Pedimos los datos del disco
      let nombre = prompt("Escribe el nombre del disco.") || "";
      let grupo = prompt("Escribe el grupo o cantante.") || "";
      let año = prompt("Escribe el año de publicación.") || "";

      // El estilo solo puede ser uno de estos cuatro
      let estilo;
      do {
        estilo = prompt("Escribe el estilo de música: rock, pop, punk o indie.");
        if (estilo !== "rock" && estilo !== "pop" && estilo !== "punk" && estilo !== "indie") {
          alert("Error, el estilo tiene que ser rock, pop, punk o indie.");
        }
      } while (estilo !== "rock" && estilo !== "pop" && estilo !== "punk" && estilo !== "indie");

      // La estantería tiene que ser un número entero y no negativo
      let localizacion;
      do {
        localizacion = Number(prompt("Escribe el número de estantería."));
        if (!Number.isInteger(localizacion) || localizacion < 0) {
          alert("Error, tienes que escribir un número de estantería válido.");
        }
      } while (!Number.isInteger(localizacion) || localizacion < 0);

      // Creamos el disco y lo rellenamos con los datos
      let nuevoDisco = new Disco();
      nuevoDisco.incluirDatos(nombre, grupo, año, estilo, localizacion);

      let donde = pedirOpcion(
        "¿Dónde lo añado?\n1. Al principio\n2. Al final",
        1,
        2,
      );
      if (donde === 1) {
        anadirPrincipio(discos, nuevoDisco);
        document.write(
          `<h3>Añadir disco al principio</h3><p>${nuevoDisco.mostrarInfo()}</p>`,
        );
      } else {
        anadirFinal(discos, nuevoDisco);
        document.write(
          `<h3>Añadir disco al final</h3><p>${nuevoDisco.mostrarInfo()}</p>`,
        );
      }
      break;
    }
    case 5: {
      if (numeroElementos(discos) === 0) {
        document.write(
          `<h3>Borrar disco</h3><p>No quedan discos para borrar.</p>`,
        );
      } else {
        let donde = pedirOpcion(
          "¿Dónde lo borro?\n1. Al principio\n2. Al final",
          1,
          2,
        );
        let borrado;
        if (donde === 1) {
          borrado = borrarPrincipio(discos);
        } else {
          borrado = borrarFinal(discos);
        }
        document.write(
          `<h3>Borrar disco</h3><p>Se ha borrado el disco ${borrado}.</p>`,
        );
      }
      break;
    }
    case 6: {
      let tipo = pedirOpcion(
        "¿Cómo quieres consultar?\n1. Por posición\n2. Por nombre",
        1,
        2,
      );
      if (tipo === 1) {
        let posicion = Number(prompt("Escribe la posición del disco."));
        let disco = elementoEnPosicion(discos, posicion);
        // Si la posición no existe, el array devuelve undefined
        if (disco === undefined) {
          document.write(
            `<h3>Consultar por posición</h3><p>No hay ningún disco en esa posición.</p>`,
          );
        } else {
          document.write(
            `<h3>Consultar por posición</h3><p>${disco.mostrarInfo()}</p>`,
          );
        }
      } else {
        let nombre = prompt("Escribe el nombre del disco.") || "";
        // Con discos no sirve indexOf, por eso uso la función nueva de arrays.js
        let posicion = posicionPorNombre(discos, nombre);
        if (posicion === -1) {
          document.write(
            `<h3>Consultar por nombre</h3><p>${nombre} no está en la lista.</p>`,
          );
        } else {
          document.write(
            `<h3>Consultar por nombre</h3><p>${discos[posicion].mostrarInfo()}</p>`,
          );
        }
      }
      break;
    }
  }
} while (opcion !== 0);