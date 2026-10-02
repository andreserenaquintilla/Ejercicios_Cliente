// Ejercicio: u3e10_window
// Módulo: DWEC
// Autor: Andrés Serena Quintilla
// Fecha: 29/09/2026

// 1. Variable donde guardamos la ventana nueva, fuera de las funciones para que la puedan usar todos los botones
let nuevaVentana;

// 2. Función para abrir la ventana, solo si el usuario acepta en el confirm
function abrirVentana() {
  if (confirm("¿Quieres abrir una ventana nueva?")) {
    // El primer valor es la url, vacía porque el contenido lo escribimos nosotros, el segundo el nombre y el tercero las características
    nuevaVentana = open(
      "",
      "ventanaNueva",
      "toolbar=no,location=no,menubar=no,resizable=no,width=200,height=80,top=500,left=500"
    );
    // Escribimos el texto y el botón dentro de la ventana nueva. En el onclick hace falta window, porque si no, coge el close() del document y no cierra la ventana
    nuevaVentana.document.write(
      "<p>Soy la ventana nueva</p><button onclick='window.close()'>Cerrar</button>"
    );
  }
}

// 3. Función para cerrar la ventana, que da error si nunca se ha abierto o si ya está cerrada
function cerrarVentana() {
  if (!nuevaVentana || nuevaVentana.closed) {
    alert("Error, la ventana no está abierta.");
  } else {
    nuevaVentana.close();
  }
}