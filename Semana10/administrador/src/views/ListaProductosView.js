import { useEffect } from "react";
import { obtenerProductos } from "../services/productosService";

export default function ListaProductosView() {
    const getProductos = async () => {
        try {
            const productosObtenidos = await obtenerProductos();
            console.table(productosObtenidos);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getProductos();
    }, []);

    return <div></div>;
}
