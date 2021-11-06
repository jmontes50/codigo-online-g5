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

    //si quisiera hacerlo en la misma vista crear y ver productos
    /**const manejarSubmit = async () => {
		hago la chamba de crear el producto, espero con una await
		y cuando termine
		getProductos()
	}*/

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
                    {productos.map(({ nombre, descripcion, precio, id }, i) => (
                        <tr key={i}>
                            {/* RECUERDEN: el key es para ident. elementos. generados de un arreglo */}
                            <td>{nombre}</td>
                            <td>{descripcion}</td>
                            <td>{precio}</td>
                            <td>
                                <Link className="btn btn-info" to={`/editarproducto/${id}`}>
                                    Editar
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
