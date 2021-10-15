//1. Recuerden que a una variable se le puede asignar casi cualquier cosa incluyendo FUNCIONES

// console.log("1. Estamos jugando monopolio y nos dio hambre");

// setTimeout(function () {
//     console.log("2. Esperar al Rappi hasta que llegue");
//     comer();
// }, 2000);

// const comer = function () {
//     console.log("3. llega el Rappi y comemos");
// };

// console.log("3. llega el Rappi y comemos");

/**
 * tengo que buscar un registro de un alumno en un BD inmensa
 */

let alumnosDB = [
    "Cristopher",
    "Arturo",
    "Masami",
    "Juan",
    "Fred",
    "Nicolas",
    "Justin",
    "Ariana",
    "Glenda",
    "Graciela",
    "Melissa",
];

//fCallback va a ser la referencia de una función que vamos a pasar como parámetro
const buscarAlumno = function (nombre, fCallback) {
    //para simular que va a demorar voy a utilizar un setTimeout
    //y esta función retornará true o false para indicar si encuentra el alumno
    setTimeout(function () {
        for (let i = 0; i < alumnosDB.length; i++) {
            if (alumnosDB[i] == nombre) {
                //hemos encontrado el alumno
                fCallback(true);
                return; //cortar la ejecución de la función
            }
        }
        //si no lo encontramos
        fCallback(false);
    }, 4000);
};

buscarAlumno("Melissa", function (existe) {
    if (existe == true) {
        console.log("El alumno existe");
    } else {
        console.log("El alumno no existe ERROR");
    }
});
