//spread - esparcir
//arreglos
let frutas = ["Kiwi", "Sandía", "Fresa", "Chirimoya"];

//un nuevo arreglo pero con el contenido de otro ...arreglo
let frutasTmp = [...frutas, "Mango", "Uvas"];

// console.log(frutasTmp);

let verduras = ["Lechuga", "Col China", "Zanahoria"];

let comida = [...frutas, ...verduras];

// console.log("comida", comida);

//spread operator en objetos

let Pikachu = {
    tipo: "Eléctrico",
    ataque: 40,
    vida: 55,
    ataque: "Cabezaso",
};
//no hagan esto
// let PikachuRojo = Pikachu;

//PikachuRojo se peleó
// PikachuRojo.vida = 23;
// console.table(PikachuRojo);
// console.log("///Pikachu Original///");
// console.table(Pikachu);

let PikachuVerde = { ...Pikachu, ataque: "Conversar", come: "Lechuga" };
PikachuVerde.vida = 40;

console.log("///Pikachu Original///");
console.table(Pikachu);
console.log("///Pikachu Verde///");
console.table(PikachuVerde);
