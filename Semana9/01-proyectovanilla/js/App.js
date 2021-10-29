/**
 * App.js mi JS principal
 * 1. Tener MockAPI listo ✔
 * 2. Obtener los datos (GET) fetch ✔
 * 3. Convertir esos datos a HTML entendible por el navegador ✔
 * ...
 * 4. Crear un Producto desde el navegador
 * 4.1 Detectar el evento click de un botón
 * 4.2 Vamos a abrir un modal de Bootstrap
 * 4.3 Obtener los datos del formulario que estará dentro del modal
 * 4.4 Con esa info convertirla a un JSON y enviarla a mockapi con un POST
 *
 */

//importar
import { obtenerProductos } from "./Comunicacion.js"; //importamos la función obtenerProductos
import { imprimirProductos } from "./Interfaz.js";

//variables globales - los elementos del DOM
let btnCrear = document.getElementById("btnCrear");
// let modalCrear = document.getElementById("modalCrear");
let modalCrear = new bootstrap.Modal(document.getElementById("modalCrear")); //convertirlo en un obj de Bootstrap

const getProductos = async () => {
    //por eso el async
    try {
        let productosObtenidos = await obtenerProductos(); //devuelve promesa, por el await
        console.log(productosObtenidos);
        imprimirProductos(productosObtenidos);
    } catch (error) {
        console.log(error);
    }
};

getProductos();

//llamar al evento click de btnCrear
btnCrear.addEventListener("click", () => {
    modalCrear.show();
});
