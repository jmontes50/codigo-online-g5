let nombre = prompt("Ingresa tu nombre");

//.setItem("nombre de lo que guardo","valor de lo guardado")
localStorage.setItem("nombreUsuario", nombre);

// setTimeout(function () {
//     //leer contenido del localStorage
//     //.getItem("nombre_algo_guardado_en_el_LS")
//     let obtenido = localStorage.getItem("nombreUsuario");
//     alert(obtenido);
// }, 4000);

// setTimeout(function () {
//     //eliminar Algo
//     //removeItem("nombre_de_algo_guardado_en_el_LS")
//     localStorage.removeItem("nombreUsuario");
// }, 12000);

//ejecuta algo en un intervalo, de forma periódica
// setInterval(function () {
//     console.log("Holaaaaa");
// }, 1000);

let numero = 9;
localStorage.setItem("num", numero);
let numRecuperado = localStorage.getItem("num");
console.log(typeof numRecuperado, numRecuperado);

let objeto = {
    modelo: "Iphone",
    pantalla: 6.5,
    colores: ["blanco", "dorado", "negro"],
    anio: 2021,
};

//JSON.stringify(), convierte JS a string
let objAJSON = JSON.stringify(objeto);

console.log(objAJSON);

console.log(typeof objAJSON);

localStorage.setItem("objeto", objAJSON);

setTimeout(function () {
    let jsonObtenido = localStorage.getItem("objeto");
    //convertirlo de nuevo a un objeto de JS
    //.parse() recibe Texto y lo va a transformar en JS
    let jsonRecuperado = JSON.parse(jsonObtenido);
    console.log(jsonRecuperado.modelo);
}, 4000);
