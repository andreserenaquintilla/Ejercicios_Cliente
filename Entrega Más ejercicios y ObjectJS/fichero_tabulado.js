// Ejercicio: Fichero Tabulado
// Módulo: DWEC
// Autor: Andrés Serena Quintilla
// Fecha: 02/10/2026

const clientes = [
    { cliente: "Laura", localidad: "Santander", cuota: 50 },
    { cliente: "Álvaro", localidad: "Castro", cuota: 50 },
    { cliente: "Igor", localidad: "Castro", cuota: 60 },
    { cliente: "Ivan", localidad: "Santander", cuota: 40 },
    { cliente: "Mónica", localidad: "Zamora", cuota: 30 },
    { cliente: "Javi", localidad: "Bilbao", cuota: 30 },
    { cliente: "David", localidad: "Bilbao", cuota: 50 },
    { cliente: "José Luis", localidad: "Bilbao", cuota: 60 }
];

// pinta una tabla con los clientes que le pases
// columnas es un array con las propiedades que quiero enseñar
function mostrarTabla(lista, columnas) {
    document.write("<table border='1'>");

    // fila de cabecera
    document.write("<tr>");
    for (const col of columnas) {
        document.write(`<th>${col}</th>`);
    }
    document.write("</tr>");

    // una fila por cada cliente
    for (const c of lista) {
        document.write("<tr>");
        for (const col of columnas) {
            document.write(`<td>${c[col]}</td>`);
        }
        document.write("</tr>");
    }

    document.write("</table>");
}

function porProvincia() {
    let provincia = prompt("¿De qué provincia?");

    // si le da a cancelar prompt devuelve null
    if (provincia === null) {
        return;
    }

    provincia = provincia.trim().toLowerCase();

    const filtrados = clientes.filter(c => c.localidad.toLowerCase() === provincia);

    if (filtrados.length === 0) {
        document.write("No hay clientes en esa provincia");
    } else {
        mostrarTabla(filtrados, ["cliente", "cuota"]);
    }
}

function porCuota() {
    const texto = prompt("Introduce una cuota:");

    // si cancela o lo deja vacío no sigo
    if (texto === null || texto.trim() === "") {
        document.write("No has introducido ninguna cuota");
        return;
    }

    const valor = Number(texto);

    if (isNaN(valor)) {
        document.write("Eso no es un número");
        return;
    }

    const tipo = prompt("1. Cuota mayor que " + valor + "\n2. Cuota menor que " + valor);

    let filtrados;
    if (tipo === "1") {
        filtrados = clientes.filter(c => c.cuota > valor);
    } else if (tipo === "2") {
        filtrados = clientes.filter(c => c.cuota < valor);
    } else {
        document.write("Opción no válida");
        return;
    }

    if (filtrados.length === 0) {
        document.write("No hay clientes con esa condición");
    } else {
        mostrarTabla(filtrados, ["cliente", "localidad", "cuota"]);
    }
}

// menú principal
let opcion = prompt("Elige una opción:\n1. Todos los usuarios\n2. Usuarios de una provincia\n3. Usuarios por cuota");

switch (opcion) {
    case "1":
        mostrarTabla(clientes, ["cliente", "localidad", "cuota"]);
        break;
    case "2":
        porProvincia();
        break;
    case "3":
        porCuota();
        break;
    default:
        document.write("Opción no válida");
}