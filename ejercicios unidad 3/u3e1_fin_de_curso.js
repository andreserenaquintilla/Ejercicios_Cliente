// Ejercicio: u3e1_fin_de_curso
// Autor: Andrés Serena Quintilla

// 1. Toca declarar los objetos y darles la fecha a los Date
let fechaDeHoy = new Date();
let fechaPrácticas = new Date(2027, 2, 1);
let fechaFinDeCurso = new Date(2027, 5, 24);

// 2. Ya que js calcula todo en milisegundos, tenemos que pasarlo a días.
let milisegundosPorDía = 1000 * 60 * 60 * 24;

// 3. Montamos el código para que, con un alert, nos muestre lo que queremos. 
let cálculoPrácticas = fechaPrácticas.getTime() - fechaDeHoy.getTime();
let díasRestantesPrácticas = cálculoPrácticas / milisegundosPorDía;
let díasRestantesPrácticasEntero = Math.floor(díasRestantesPrácticas);

alert("Solo faltan " + díasRestantesPrácticasEntero + " para empezar las prácticas.");

let cálculoFinDeCurso = fechaFinDeCurso.getTime() - fechaDeHoy.getTime();
let díasRestantesFinDeCurso = cálculoFinDeCurso / milisegundosPorDía;
let díasRestantesFinDeCursoEntero = Math.floor(díasRestantesFinDeCurso);

alert("¡Ánimo chavales, que solo quedan " + díasRestantesFinDeCursoEntero + " para terminar el curso!");