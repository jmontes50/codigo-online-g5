let hornearTorta = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (true) {
                resolve("torta ready!");
            } else {
                reject("se quemo");
            }
        }, 5000);
    });
};

let prepararGlaseado = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Glaseado Listo!"); //va a ser exitoso
            // reject("se quemo el microondas")
        }, 3000);
    });
};

let cubrirTorta = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Torta Decorada");
            // reject("Pide rappi noma")
        }, 4000);
    });
};
