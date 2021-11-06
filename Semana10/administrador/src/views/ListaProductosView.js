import { useState, useEffect } from "react";
import { Link } from "react-router-dom"; //<a>
import { obtenerProductos, eliminarProducto } from "../services/productosService";
import Swal from "sweetalert2";

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

    const verificarEliminar = async (id) => {
        const respuesta = await Swal.fire({
            icon: "warning",
            title: "Desea eliminar el producto?",
            text: "Esta acción es irreversible",
            showConfirmButton: true,
            showDenyButton: true,
            confirmButtonText: "Sí, Eliminar",
            denyButtonText: "No, Cancelar",
        });
        if (respuesta.isConfirmed) {
            //si es que el usuario ha confirmado
            try {
                await eliminarProducto(id);
                await Swal.fire({
                    icon: "success",
                    title: "Producto eliminado!",
                });
                getProductos();
            } catch (error) {
                console.log(error);
            }
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
                                <Link className="btn btn-info me-2" to={`/editarproducto/${id}`}>
                                    Editar
                                </Link>
                                <button
                                    className="btn btn-danger"
                                    onClick={() => {
                                        verificarEliminar(id);
                                    }}
                                >
                                    Eliminar
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
