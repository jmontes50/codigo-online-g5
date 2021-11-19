import { useState, useEffect } from "react";
import { obtenerProductosPorPagina } from "../services/productoService";
import ProductoCard from "./ProductoCard";

//productos va a ser un arreglo
const GrupoProdHome = () => {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        const getProductos = async () => {
            try {
                const prodObtenidos = await obtenerProductosPorPagina();
                setProductos(prodObtenidos);
            } catch (error) {
                console.log(error);
            }
        };
        getProductos();
    }, []);

    return (
        <div className="container">
            <div className="row my-3">
                {productos.map((prod, i) => (
                    <div className="col-12 col-md-6 col-lg-4">
                        <ProductoCard key={i} producto={prod} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GrupoProdHome;
