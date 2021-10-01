let frutas = ["fresa", "mango", "piña", "lucuma"];

// for (let i = 0; i < frutas.length; i++) {
//     console.log(frutas[i]);
// }

//recuerden los arreglos tambien son objetos
//forEach(function(){})
frutas.forEach(function (fru) {
    console.log(fru);
});

//forEach por cada elemento que encuentre vas a ejecutar una función, y cada vez que se ejecute esa funcion vas a recibir c/item en orden y este item lo podemos utilizar dentro de la función

let energia = [89, 90, 86, 85, 100];

//energía se va a dividir en 2
//Como podría tener un nuevo arreglo con los valores que representen la mitad de la energía por cada item

// let energiaCima = [];
// for (let i = 0; i < energia.length; i++) {
//     energiaCima.push(energia[i] / 2);
// }
// console.log(energiaCima);

//crea un nuevo array pero con informacion transformada
let energiaCima = energia.map(function (energy) {
    // let energiaTransformada = energy / 2;
    // return energiaTransformada;
    return energy / 2;
});

console.log(energiaCima);
console.log(energia);
