//de Promesas a ASYNC
const traerData = () => {
    return new Promise((resolve, reject) => {
        resolve("Data Obtenida!!!");
        // reject("Error al obtener Data")
    });
};

traerData()
    .then((rpta) => console.log(rpta))
    .catch((error) => console.log(error));
