import { useState, useEffect } from "react";
import { obtenerCategorias } from "../services/categoriasService";
import Cargando from "../components/Cargando";

export default function ListaCategoriasView() {
    const [categorias, setCategorias] = useState([]);
    const [loading, setLoading] = useState(false);

    const getCategorias = async () => {
        try {
            setLoading(true);
            const categoriasObtenidas = await obtenerCategorias();
            setCategorias(categoriasObtenidas);
            setLoading(false);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getCategorias();
    }, []);

    return <div></div>;
}
