import { useState, useEffect } from "react";
import { obtenerCategorias } from "../services/categoriasService";
import Cargando from "../components/Cargando";
import { Link } from "react-router-dom";

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

    return (
        <>
            {loading ? (
                <Cargando />
            ) : (
                <>
                    <h1 className="mb-3">Lista Categorias</h1>
                    <Link to="/crearcategoria" className="btn btn-primary mb-2">
                        Crear Categoría
                    </Link>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Nombre Categoria</th>
                                <th>Descripción</th>
                            </tr>
                        </thead>
                        <tbody>
                            {categorias.map((cat, i) => (
                                <tr key={i}>
                                    <td>{cat.nombre}</td>
                                    <td>{cat.descripcion}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </>
            )}
        </>
    );
}
