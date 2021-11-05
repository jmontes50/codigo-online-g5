import axios from "axios"; //fetch pero mejor

//conjunto de funciones para hacer peticiones

const URL = "https://616b5ead16c3fa001717167c.mockapi.io/productos";

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

export { obtenerProductos, crearProducto };
