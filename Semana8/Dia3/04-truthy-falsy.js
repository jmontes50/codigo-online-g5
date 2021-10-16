//comparaciones con JS
// ==  vs  ===
// == solamente el valor
// === compara el valor y el tipo de dato
if (1 === "1") {
    console.log("son iguales");
} else {
    console.log("no son iguales");
}

//---------------------------------
//truthy - falsy
//falsy
// let meQuiere = undefined;
// let meQuiere = 0;
// let meQuiere = "";
// let meQuiere = null;

//truthy - texto, numero, objeto, valor, son verdaderos
// let meQuiere = "regalo";
// let meQuiere = 980980989;
let meQuiere = {
    tipo: "regalo",
    categoria: "peluche",
};

if (meQuiere) {
    console.log("claaaaro");
} else {
    console.log(" T_T ");
}
