import { useState, useEffect } from "react";
import { obtenerProductosPorPagina } from "../services/productoService";
import ProductoCard from "../components/ProductoCard";

export default function ProductoConFiltrosView() {
    const [productos, setProductos] = useState([]);
    const [pagina, setPagina] = useState(1);
    const [limite, setLimite] = useState(9);

    const getData = async () => {
        try {
            const prodObtenidos = await obtenerProductosPorPagina(pagina, limite);
            setProductos(prodObtenidos);
        } catch (error) {
            console.log(error); //Swal icon:"error"
        }
    };

    useEffect(() => {
        getData();
    }, []);
    return (
        <>
            <div className="container">
                <div className="row my-3">
                    {productos.map((prod, i) => (
                        <div className="col-12 col-md-6 col-lg-4" key={i}>
                            <ProductoCard producto={prod} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
