let edad = +prompt("Cuál es tu edad?");

// // if(condicion)
// //condicionales trabajan con booleanos, true y false
// if (edad >= 18) {
//     console.log("Si accedes a la 1ra dosis");
// } else if (edad >= 0) {
//     console.log("Noup, tienes que esperar");
// } else {
//     console.log("Error al ingresar datos");
// }

if (edad >= 60) {
    console.log("Te toca Pfizer y te toca yaaaaa");
    // Y = && ambos tiene que ser verdura
} else if (edad <= 55 && edad >= 45) {
    console.log("Te toca Pfizer y te toca el finde");
    // O = || uno tiene que ser verdura
} else if (edad == 18 || edad == 21) {
    console.log("Te toca sinopharm mañana");
} else {
    console.log("Anda a yopongoelhombro.com");
}
