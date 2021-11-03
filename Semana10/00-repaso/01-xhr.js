let hacerPeticion = (tareaFinal) => {
    let asistente = new XMLHttpRequest();

    //solo estamos escuchando al evento, no estamos ejecutando nada
    //asistente instrucciones de lo que tiene que hacer
    asistente.addEventListener("readystatechange", () => {
        switch (asistente.readyState) {
            case 1:
                console.log("open", asistente.readyState); //pon el destinatario y dirección
                break;
            case 2:
                console.log("send", asistente.readyState); //envialo, por el buzón
                break;
            case 3:
                console.log("recepción", asistente.readyState); //avisas si llego al destinataro o a serpost
                break;
            case 4:
                console.log("respuesta del server", asistente.readyState); //me avisas cuando el dest. responda
                break;
            default:
                console.log("algo paso");
        }
    });

    //xomo si mandará una carta indico los datos y la envio
    asistente.open("GET", "https://swapi.dev/api/people/1"); //pon el dest. y la forma de envio
    asistente.send(); //envia la carta
};

hacerPeticion();
