import axios from "axios"; //fetch pero mejor

//conjunto de funciones para hacer peticiones

const URL = "https://616b5ead16c3fa001717167c.mockapi.io/productos";

const obtenerProductos = async () => {
    try {
        const rpta = await axios.get(URL);
        console.log(rpta);
    } catch (error) {
        throw error;
    }
};

export { obtenerProductos };
