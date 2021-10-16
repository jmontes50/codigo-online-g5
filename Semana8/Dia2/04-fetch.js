fetch("https://reqres.in/api/users?page=2")
    .then((respuesta) => {
        console.log(respuesta);
        return respuesta.json(); //parsea de texto a JS
    })
    .then((gatos) => {
        console.log(gatos);
    });
