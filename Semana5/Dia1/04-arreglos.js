//para declarar arreglos, necesitamos ponerlos entre []
//desde el primer elemento se cuenta desde 0, 1 ,2 ...
//ese número se conoce como posición, índice o index
let nombres = ["Masami", "Oscar", "Mauro", "Melissa", "Frank", "Julio"];

//si deseo referenciar un elemento necesito su posicion
//nombre_arreglo[#]
console.log(nombres[4]);

console.log(`Los nombres de mis alumn@s son ${nombres[0]}, ${nombres[1]}, ${nombres[2]}`);

console.log(nombres);

//longitud es la cantidad de elementos
console.log(nombres.length); //number

let cofre = ["gato", 100, true];

console.log(cofre);

//agregar items, al final de un arreglo
cofre.push("perrete", "pinguino", "jirafa");

console.log("cofre actualizado", cofre);
