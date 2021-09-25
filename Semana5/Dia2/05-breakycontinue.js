let alumnos = ["Leonardo", "Arturo", "Gustavo", "Ariana", "Alan", "Masami"];

//algortimo para que el usuario ingrese un nombre y busque si existe el alumno y me muestre la posicion de ese alumno

let eleccion = prompt("ingrese el nombre del alumnito");

//for e if
for (let i = 0; i < alumnos.length; i++) {
    if (eleccion == alumnos[i]) {
        console.log(`${eleccion} se encuentra en ${i}`);
        //corta la ejecución
        break;
    }
    console.log(`Buscando... en ${i}`);
}
