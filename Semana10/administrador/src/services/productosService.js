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

export { obtenerProductos };
