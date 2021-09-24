let a = 1;

let b = "4"; //string

let c = a + b;

console.log(typeof c);

let nombre = "Jorge";

let apellido = "Montesinos";

let nombreCompleto = nombre + " " + apellido;

console.log(nombreCompleto);

//TEMPLATE STRING / TEMPLATE LITERAL
//Backticks ``
// ${acá adentro, podemos poner código de JS}

let edad = 31;

let texto = `Hola soy ${nombre} ${apellido} 
y soy de Aqp, tengo ${edad} años`;

console.log(texto);

//PROMPT, capturar datos, del usuario
let cantidadMascotas = prompt(`Hola ${nombre}, cuantas mascotas tienes?`);

console.log(`Mascotas : ${cantidadMascotas}`);

console.log(typeof cantidadMascotas); //todo lo ingresado en un prompt es string

let convertido = +cantidadMascotas;
//parseInt,parseFloat, parse = interpretar, convierte de texto a número
//int - solo enteros
//float - acepta decimales
// let convertido = parseInt(cantidadMascotas);
// let convertido = parseFloat(cantidadMascotas);

console.log(typeof convertido, convertido, "PATATA");
