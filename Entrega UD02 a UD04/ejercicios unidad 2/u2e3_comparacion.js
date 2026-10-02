// Ejercicio: u2e3_comparacion
// Nombre: Andrés Serena Quintilla

// 1 - Declaración de variables
let operacion1 = 10 == 10;                  
let operacion2 = 10 === 10;                 
let operacion3 = 10 === 10.0;               
let operacion4 = "Laura" == "laura";        
let operacion5 = "Laura" > "laura";         
let operacion6 = "Laura" < "laura";         
let operacion7 = "123" == 123;              
let operacion8 = "123" === 123;             
let operacion9 = parseInt("123") === 123;   

// 2 - Mostrar el resultado de la comparación con un alert
alert("La operación 10==10 es " + operacion1);                  // Este alert muestra el resultado de la operación 10==10, que es true
alert("La operación 10===10 es " + operacion2);                 // Este alert muestra el resultado de la operación 10===10, que es true
alert("La operación 10===10.0 es " + operacion3);               // Este alert muestra el resultado de la operación 10===10.0, que es true
alert("La operación 'Laura'=='laura' es " + operacion4);        // Este alert muestra el resultado de la operación 'Laura'=='laura', que es false
alert("La operación 'Laura'>'laura' es " + operacion5);         // Este alert muestra el resultado de la operación 'Laura'>'laura', que da false porque JS compara por código de carácter, y la L mayúscula vale menos que la l minúscula.
alert("La operación 'Laura'<'laura' es " + operacion6);         // Este alert muestra el resultado de la operación 'Laura'<'laura', que es true
alert("La operación '123'==123 es " + operacion7);              // Este alert muestra el resultado de la operación '123'==123, que es true
alert("La operación '123'===123 es " + operacion8);             // Este alert muestra el resultado de la operación '123'===123, que es false
alert("La operación parseInt('123')===123 es " + operacion9);   // Este alert muestra el resultado de la operación parseInt('123')===123, que es true