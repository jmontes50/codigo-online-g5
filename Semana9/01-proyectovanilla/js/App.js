/**
 * App.js mi JS principal
 * 1. Tener MockAPI listo ✔
 * 2. Obtener los datos (GET) fetch
 * 3. Convertir esos datos a HTML entendible por el navegador
 * ...
 */

//importar
import { obtenerProductos } from "./Comunicacion.js"; //importamos la función obtenerProductos
import { imprimirProductos } from "./Interfaz.js";

//variables globales - los elementos del DOM

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
