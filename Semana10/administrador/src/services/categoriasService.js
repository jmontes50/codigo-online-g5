import axios from "axios";

const URL = `${process.env.REACT_APP_API}categorias`;

const crearCategoria = async (nuevaCategoria) => {
    try {
        const headers = {
            "Content-Type": "application/json",
        };
        const { data } = await axios.post(URL, nuevaCategoria, { headers });
        return data;
    } catch (error) {
        throw error;
    }
};

const obtenerCategorias = async () => {
    try {
        const { data } = await axios.get(URL);
        return data;
    } catch (error) {
        throw error;
    }
};

export { crearCategoria, obtenerCategorias };
