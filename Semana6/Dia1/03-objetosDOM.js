// window.console.log("Hola");

//Info del navegador
console.log(`Info Navegador: ${window.navigator.userAgent}`);

//Cúal es mi url
console.log(`URL: ${window.location}`);

navigator.geolocation.getCurrentPosition(function (ubicacion) {
    console.log(ubicacion);
});
//Javascript a travez del objeto window
//window = pestaña del navegador

console.log(window.document);

let miTitulo = document.querySelector("h1");

console.log(miTitulo);
