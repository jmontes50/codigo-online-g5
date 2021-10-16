//spread - esparcir
//arreglos
let frutas = ["Kiwi", "Sandía", "Fresa", "Chirimoya"];

//un nuevo arreglo pero con el contenido de otro ...arreglo
let frutasTmp = [...frutas, "Mango", "Uvas"];

// console.log(frutasTmp);

let verduras = ["Lechuga", "Col China", "Zanahoria"];

let comida = [...frutas, ...verduras];

// console.log("comida", comida);
