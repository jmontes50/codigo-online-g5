/**
 * App.js mi JS principal
 * 1. Tener MockAPI listo ✔
 * 2. Obtener los datos (GET) fetch
 * 3. Convertir esos datos a HTML entendible por el navegador
 * ...
 */

//importar
import { obtenerProductos } from "./Comunicacion";

//variables globales - los elementos del DOM

const getProductos = async () => {
    try {
        let productosObtenidos = await obtenerProductos();
        console.table(productosObtenidos);
    } catch (error) {
        console.log(error);
    }
};

getProductos();
