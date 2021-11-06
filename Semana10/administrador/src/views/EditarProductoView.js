import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import FormProducto from "../components/FormProducto";
import { obtenerProductoPorId } from "../services/productosService";

export default function EditarProductoView() {
    const [value, setValue] = useState({
        nombre: "",
        descripcion: "",
        precio: 0,
    });

    const { id } = useParams(); //1. con esto tenemos el id de la URL
    console.log({ id });

    const getProducto = async () => {
        try {
            const prodObtenido = await obtenerProductoPorId(id); //2. obtenemos el producto por su ID
            console.log(prodObtenido);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getProducto(); //3. con un useEffect llamamos a la función que me trae 01 producto por su ID
    }, []);

    return <div></div>;
}
