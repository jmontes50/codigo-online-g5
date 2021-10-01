// window.console.log("Hola");

//Info del navegador
console.log(`Info Navegador: ${window.navigator.userAgent}`);

//Cúal es mi url
console.log(`URL: ${window.location}`);

navigator.geolocation.getCurrentPosition(function (ubicacion) {
    console.log(ubicacion);
});
//Javascript a traves del objeto window
//window = pestaña del navegador

console.log(window.document);

//estoy capturando un elemento
let miTitulo = document.querySelector("h1");

console.log(miTitulo);

//innerHTML, es el contenido HTML de un elemento
miTitulo.innerHTML = "Hola soy un nuevo Titulo";

//EL HTML DENTRO DE LA ETIQUETA
console.log(miTitulo.innerHTML);

//obtener un elemento, objeto element
let miCaja = document.getElementById("caja");

console.log(miCaja);

//innerHTML, representa el contenido HTML de un elemento
miCaja.innerHTML = "<h2>Titulo Caja</h2>";

//background-color = backgroundColor
miCaja.style.backgroundColor = "purple";
miCaja.style.color = "white";

let misItems = document.getElementsByClassName("lista_item");

console.log(misItems);

//Array.from(htmlCollection), crea un arreglo
let arregloItems = Array.from(misItems);

console.log(arregloItems);

//anotacion importante acerca de forEach, map, filter, find
//forEach(function(item, indice_item){})
arregloItems.forEach(function (item, indice, conjunto) {
    item.style.backgroundColor = "skyblue";
    item.innerHTML = `Patata ${indice}`;
    console.log("mostrando el arreglo", conjunto);
});

//obtener element de diferentes maneras
//Los querySelector y querySelectorAll funcionan de la misma manera que los selectores en css
let miTexto = document.querySelector("#texto");

console.log(miTexto);

//querySelectorAll me da un NodeList
//Este NodeList lo puedo tratar como un arreglo
let boxes = document.querySelectorAll(".box");

console.log(boxes);

boxes.forEach(function (bx) {
    bx.innerHTML = `<p>Soy un párrafo</p>`;
});

console.log(boxes[0].innerHTML);
