let hacerPeticion = (tareaFinal) => {
    let asistente = new XMLHttpRequest();

    asistente.addEventListener("readystatechange", () => {
        switch (asistente.readyState) {
            case 1:
                console.log("open", asistente.readyState);
                break;
            case 2:
                console.log("send", asistente.readyState);
                break;
            case 3:
                console.log("recepción", asistente.readyState);
                break;
            case 4:
                console.log("respuesta del server", asistente.readyState);
                break;
            default:
                console.log("algo paso");
        }
    });
};
