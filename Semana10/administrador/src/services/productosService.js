import axios from "axios"; //fetch pero mejor
import { storage } from "../config/Firebase";
//conjunto de funciones para hacer peticiones

//https://616b5ead16c3fa001717167c.mockapi.io/productos
const URL = `${process.env.REACT_APP_API}productos`;

const obtenerProductos = async () => {
    try {
        const { data } = await axios.get(URL);
        // console.log(rpta);
        return data; //resolve
    } catch (error) {
        throw error; //reject
    }
};

const crearProducto = async (nuevoProducto) => {
    try {
        const headers = {
            "Content-Type": "application/json",
        };
        //axios siempre me va devolver la propiedad data, donde esta la rpta del servidor
        //axios cuando hace POST, PUT necesita no solo la URL
        //axios.post(URL, objACrear, {headers})
        const { data } = await axios.post(URL, nuevoProducto, { headers });
        return data;
    } catch (error) {
        throw error;
    }
};

const obtenerProductoPorId = async (id) => {
    try {
        const { data } = await axios.get(`${URL}/${id}`);
        return data;
    } catch (error) {
        throw error;
    }
};

const editarProductoPorId = async (id, objProducto) => {
    try {
        const headers = {
            "Content-Type": "application/json",
        };
        await axios.put(`${URL}/${id}`, objProducto, { headers });
        return; //resolve
    } catch (error) {
        throw error;
    }
};

const eliminarProducto = async (id) => {
    try {
        await axios.delete(`${URL}/${id}`);
        return "producto eliminado";
    } catch (error) {
        throw error;
    }
};

const subirImagen = (imagen) => {
    console.log(imagen);
    return new Promise((resolve, reject) => {
        //1, necesita la referencia para indicar donde vamos a guardar el archivo
        let refStorage = storage.ref(`fotos/${imagen.name}`);
        let tareaSubir = refStorage.put(imagen);

        tareaSubir.on(
            "state_changed",
            () => {}, //ver el progreso
            (error) => {
                reject(error);
            }, //ver si hay error
            () => {
                //tareaSubir finalizada
                tareaSubir.snapshot.ref.getDownloadURL().then((urlImagen) => {
                    resolve(urlImagen);
                });
            }
        );
    });
};

export { obtenerProductos, crearProducto, obtenerProductoPorId, editarProductoPorId, eliminarProducto, subirImagen };
