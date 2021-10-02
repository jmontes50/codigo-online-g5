let divContenido = document.getElementById("contenido");

let miBoton = document.createElement("button");

miBoton.innerText = "Clickeame!";

divContenido.appendChild(miBoton);

//elementoHTML,addEventListener("evento",function(){})
miBoton.addEventListener("click", function () {
    alert("Haz hecho click!");
});

let peliculas = [
    "Parasite",
    "Shang Chi",
    "Interstellar",
    "Matrix",
    "El bueno, el malo y el feo",
    "Geo tormenta",
    "Jhon Wick",
    "Constantine",
    "Godfather",
    "El Señor de los anillos",
];

peliculas.forEach(function (peli) {
    let nuevoParrafo = document.createElement("p");
    nuevoParrafo.innerHTML = peli;
    divContenido.appendChild(nuevoParrafo);

    nuevoParrafo.style.cursor = "pointer";

    nuevoParrafo.addEventListener("dblclick", function () {
        alert(`Hiciste click en ${peli}`);
        nuevoParrafo.style.backgroundColor = "steelblue";
    });
});
