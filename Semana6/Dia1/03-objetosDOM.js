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
arregloItems.forEach(function (item, indice) {
    item.style.backgroundColor = "skyblue";
    item.innerHTML = `Patata ${indice}`;
});
