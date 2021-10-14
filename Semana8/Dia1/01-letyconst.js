for (var i = 0; i < 5; i++) {
    console.log(i);
}
console.log(`iterador ${i}`);

for (let j = 0; j < 5; j++) {
    console.log(j);
}
// console.log(`iterador J ${j}`); //esto da error

//RESUMEN NO USEN VAR, AL MENOS UN LET

//cuando son const que tienen valores, se tiene la convención de poner el nombre en MAYÚSCULAS
const PI = 3.1415;

// PI = 40; //no podemos cambiar un variable creada con const

console.log("Mostrando Pi", PI);

//Una variable puede referenciar casi cualquier cosa
//number, string, booleans, arrays, objetos y funciones

let saludar = function () {
    console.log("Hola!");
};

saludar();

const despedirme = function () {
    console.log("Chau!");
};

despedirme();

//Si una variable que almacene lo que sea NO VA A CAMBIAR
//UTILICEN CONST
