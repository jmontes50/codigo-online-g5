let nombre = prompt("Ingresa tu nombre");

//.setItem("nombre de lo que guardo","valor de lo guardado")
localStorage.setItem("nombreUsuario", nombre);

setTimeout(function () {
    //leer contenido del localStorage
    //.getItem("nombre_algo_guardado_en_el_LS")
    let obtenido = localStorage.getItem("nombreUsuario");
    alert(obtenido);
}, 4000);

setTimeout(function () {
    //eliminar Algo
    //removeItem("nombre_de_algo_guardado_en_el_LS")
    localStorage.removeItem("nombreUsuario");
}, 12000);

//ejecuta algo en un intervalo, de forma periódica
setInterval(function () {
    console.log("Holaaaaa");
}, 1000);
