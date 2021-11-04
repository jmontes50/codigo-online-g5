//en este caso no va a recibir ningun parámetro
let hacerPeticion = () => {
    return new Promise((resolve, reject) => {
        let asistente = new XMLHttpRequest();
        asistente.addEventListener("readystatechange", () => {
            if (asistente.readyState === 4) {
                //ya tengo la rpta
                resolve(asistente.responseText);
            }
        });
        asistente.open("GET", "https://swapi.dev/api/people/1"); //pon el dest. y la forma de envio
        asistente.send(); //envia la carta
    });
};

hacerPeticion().then((rptaTexto) => {
    console.log("rptaTexto", rptaTexto);
    console.log("Convertido", JSON.parse(rptaTexto));
});
