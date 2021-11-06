import { useState, useEffect } from "react";
import { Link } from "react-router-dom"; //<a>
import { obtenerProductos } from "../services/productosService";

export default function ListaProductosView() {
    const [productos, setProductos] = useState([]);

    const getProductos = async () => {
        try {
            const productosObtenidos = await obtenerProductos();
            // console.table(productosObtenidos);
            setProductos(productosObtenidos); //después que obtenemos los datos, actualizamos el estado
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getProductos();
    }, []);

    return (
        <div>
            <h1>Productos registrados</h1>
            <Link to="/crearproducto" className="btn btn-primary my-2">
                Crear Producto
            </Link>
            <table className="table">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Descripción</th>
                        <th>Precio</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {productos.map(({ nombre, descripcion, precio }, i) => (
                        <tr key={i}>
                            {/* RECUERDEN: el key es para ident. elementos. generados de un arreglo */}
                            <td>{nombre}</td>
                            <td>{descripcion}</td>
                            <td>{precio}</td>
                            <td></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
