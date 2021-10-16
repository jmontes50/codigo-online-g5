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

//comencemos por la primera tarea a ejecutar
hornearTorta()
    .then((tortaHorneada) => {
        //good, exito, resolve
        console.log(tortaHorneada);
        //tuvimos exito con la torta, entonces vamos por la sgte.
        //retornar otra promesa
        return prepararGlaseado();
    })
    .then((glaseadoListo) => {
        //este then es de prepararGlaseado
        console.log(glaseadoListo);
        return cubrirTorta();
    })
    .then((tortaDecorada) => {
        // este then es de cubrirTorta
        console.log(tortaDecorada);
    });
