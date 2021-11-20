import { useState, useEffect } from "react";
import Slider from "@mui/material/Slider";
import { obtenerProductosPorPagina } from "../services/productoService";
import { obtenerCategorias } from "../services/categoriaService";
import ProductoCard from "../components/ProductoCard";

export default function ProductoConFiltrosView() {
    const [productosOriginal, setProductosOriginal] = useState([]); //nunca lo modifico
    const [productos, setProductos] = useState([]);
    const [categorias, setCategorias] = useState([]);
    const [pagina, setPagina] = useState(1);
    const [limite, setLimite] = useState(20);
    const [precio, setPrecio] = useState([0, 500]);

    const getData = async () => {
        try {
            const prodObtenidos = await obtenerProductosPorPagina(pagina, limite);
            const catObtenidas = await obtenerCategorias();
            setProductos(prodObtenidos);
            setProductosOriginal(prodObtenidos);
            setCategorias(catObtenidas);
        } catch (error) {
            console.log(error); //Swal icon:"error"
        }
    };

    const filtrarPorCategoria = (idCategoria) => {
        console.log({ idCategoria });
        const productosFiltrados = productosOriginal.filter((prod) => prod.categoria_id === idCategoria);
        setProductos(productosFiltrados);
    };

    const manejarFiltroPrecio = (evento, nuevoRango) => {
        setPrecio(nuevoRango);
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <>
            <div className="container">
                <div className="d-flex justify-content-around my-3 px-5">
                    <button
                        className="btn btn-outline-dark btn-sm"
                        onClick={() => {
                            setProductos(productosOriginal);
                        }}
                    >
                        Todas las categorías
                    </button>
                    {categorias.map((cat, i) => (
                        <button
                            className="btn btn-outline-dark btn-sm"
                            key={i}
                            onClick={() => {
                                filtrarPorCategoria(cat.id);
                            }}
                        >
                            {cat.nombre}
                        </button>
                    ))}
                </div>
                <div>
                    <small>Filtro por precio:</small>
                    <Slider value={precio} onChange={manejarFiltroPrecio} valueLabelDisplay="auto" min={1} max={500} />
                </div>
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
