// Ejercicio: u2e1_numeros
// Nombre: Andrés Serena Quintilla

// 1 - Declaración de variables numéricas
let entero = 1357;        // Número entero normal (sistema decimal)
let decimal = 1357;       // Mismo valor, sistema decimal (el enunciado lo pide así)
let cientifico = 135e7;   // Notación científica: 135 * 10^7
let octal = 0o1357;       // Notación octal (precedido de un 0o porque el vscode me ha dado error con el 0 solo)
let hexadecimal = 0x1357; // Notación hexadecimal (precedido de 0x)

// 2 - Mostrar cada valor con un alert
alert("Número entero " + entero);
alert("Número decimal " + decimal);
alert("Número científico " + cientifico);
alert("Número octal " + octal);
alert("Número hexadecimal " + hexadecimal);