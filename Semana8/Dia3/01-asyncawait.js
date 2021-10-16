//de Promesas a ASYNC
// const traerData = () => {
//     return new Promise((resolve, reject) => {
//         resolve("Data Obtenida!!!");
//         // reject("Error al obtener Data")
//     });
// };

//async, me devuelve una promesa en vez de retornarme el resultado directamente
const traerData = async () => {
    //acá adentro yo tenga más código, haga operaciones un if, etc
    //y cuando tenga exito return si fallo throw
    // return "Data Obtenida con async"; //return = resolve
    throw "Error al obtener data con async"; //throw = reject
};

// traerData()
//     .then((rpta) => console.log(rpta))
//     .catch((error) => console.log(error));

const usarData = async () => {
    //cuandoi utilicemos await, tiene que estar dentro de una función
    //y esa función tiene que tener async
    //trycatch no es solamente para async/await
    try {
        //intenta esto
        let rpta = await traerData(); //resolve
        console.log(rpta);
    } catch (error) {
        //y si no te funciona ejecuta esto y me dices que ha pasado
        //va a capturar el reject o throw de la función
        console.log(error);
    }
};
// usarData();

const traerUsuarios = async () => {
    try {
        let respuesta = await fetch("https://reqres.in/api/users?page=2");
        let datos = await respuesta.json();
        console.table(datos.data);
    } catch (error) {
        //reject/throw
        console.log(error);
    }
};
traerUsuarios();
