let arrJuegos = [
    {
        nombre: "The Witcher 3",
        precio: 60,
    },
    {
        nombre: "Doom",
        precio: 50,
    },
    {
        nombre: "Among Us",
        precio: 30,
    },
    {
        nombre: "Bloodborne",
        precio: 90,
    },
    {
        nombre: "God of War (2018)",
        precio: 120,
    },
    {
        nombre: "Civilization VI",
        precio: 45,
    },
];

/**
 * Preguntaremos al usuario cuál es su presupuesto, para ofrecerle videojuegos que esten a su alcance
 * Y después brindaremos un carrito de compras para que el usuario pueda comprar
 */

/**
 * 1. preguntar su presupuesto ✔
 * 2. comparar el presupuesto con los juegos que ofrecemos ✔
 * 3. segun la comparación tener una lista de juegos a ofrecer ✔
 * 4. agregar al carrito, seleccionar items
 * 5. cobrar, indicar el total
 */

let presupuesto = +prompt("Cuanto es su presupuesto?");

function revisarPresupuesto() {
    let juegosComprables = []; //una lista de los juegos que el usuario puede comprar
    for (let i = 0; i < arrJuegos.length; i++) {
        if (presupuesto >= arrJuegos[i].precio) {
            juegosComprables.push(arrJuegos[i]);
        }
    }
    return juegosComprables;
}
//agregarACarrito tiene que trabajar con la lista de los juegos que el usuario puede comprar
function agregarACarrito(listaJuegos) {
    for (let j = 0; j < listaJuegos.length; j++) {
        //confirm pregunta y obtiene un booleano
        let compra = confirm(`Deseas comprar? ${listaJuegos[j].nombre}`);
        console.log(compra);
    }
}

let listaComprables = revisarPresupuesto();
console.table(listaComprables);
//Despues de saber que juegos puede comprar el usuario
//le pregunto cual o cuales compra

agregarACarrito(listaComprables);
