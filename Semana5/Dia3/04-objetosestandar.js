let gato = {
    nombre: "Michi",
    raza: "Persa",
    edad: 3,
};

console.log(gato.nombre);
//esta es otra manera de acceder a una propiedad, dato adicional
console.log(gato["raza"]);

let bebidas = ["Agua", "Limonada", "Mojito", "Pisco Sour"];

console.log(bebidas.length);

bebidas.push("Inka Cola");

console.table(bebidas);

// let edad = 20
//new lo que hace es crear un nuevo Objeto
let edad = new Number("20");

console.log(typeof edad);

console.log(edad + 5);

console.log(typeof console);

console.log(console);
