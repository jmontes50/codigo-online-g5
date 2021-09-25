let restaurante = {
    nombre: "La Nueva Palomino",
    platillos: [
        {
            id: 1,
            nombrePlatillo: "Sencca",
            precio: 30,
        },
        {
            id: 2,
            nombrePlatillo: "Pepian de Cuy",
            precio: 36,
        },
        {
            id: 3,
            nombrePlatillo: "Americano",
            precio: 40,
        },
    ],
    mostrarPlatillos: function () {
        console.log(restaurante.platillos);
    },
};

// console.log(restaurante.platillos);

// restaurante.mostrarPlatillos();

let jugador = {
    nombre: "Dybala",
    nacionalidad: "Argentino",
    posicion: "volante, delantero",
    estatura: 1.85,
    correr: function () {
        //método
        console.log("corre corre correeeee");
    },
    cabecear: function () {
        //método
        console.log("salta y cabecea la pelota");
    },
    patear: function () {
        //método
        console.log("pateaaaaaaaa");
    },
};

jugador.correr();
