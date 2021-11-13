import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { crearProducto, subirImagen } from "../services/productosService";
import { obtenerCategorias } from "../services/categoriasService";
import FormProducto from "../components/FormProducto";
import Cargando from "../components/Cargando";
import Swal from "sweetalert2";

let imagen; //básicamente es una variable global que no esta definida

export default function CrearProductoView() {
    const [value, setValue] = useState({
        nombre: "",
        descripcion: "",
        precio: 0,
        categoria_id: "1",
    });
    const [categorias, setCategorias] = useState([]);
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const actualizarInput = (e) => {
        console.log(e.target.name, e.target.value);
        setValue({
            ...value, //cogiendo el estado de value, spreadoperator
            [e.target.name]: e.target.value,
        });
    };

    const manejarSubmit = async (e) => {
        e.preventDefault();
        //Siempre intenten indicar al usuario que esta pasando o que a ocurrido
        try {
            //cuando comience el proceso de crear el producto
            setLoading(true);
            //subimos la primera imagen primero, obtengo la url de la imagen
            const urlImagenSubida = await subirImagen(imagen);
            //y se la agrego como una propiedad adicional de value
            await crearProducto({ ...value, imagen: urlImagenSubida });
            //después de que haya terminado de crear el producto
            setLoading(false);
            await Swal.fire({
                icon: "success",
                title: "Éxito",
                text: "Producto Creado!",
                // showConfirmButton: false, //es para que no me muestre un boton de cierre
                // timer: 2000, //ms
            });
            //antes de dirigime a navigate
            navigate("/");
        } catch (error) {
            console.log(error);
        }
    };

    const manejarImagen = (e) => {
        e.preventDefault();
        console.log(e.target.files);
        imagen = e.target.files[0]; //como para utilizar
    };

    useEffect(() => {
        const getCategorias = async () => {
            try {
                const catObtenidas = await obtenerCategorias();
                setCategorias(catObtenidas);
            } catch (error) {
                console.error(error);
            }
        };
        getCategorias();
    }, []);

    return (
        <>
            {loading === true ? (
                <Cargando />
            ) : (
                <FormProducto
                    value={value}
                    actualizarInput={actualizarInput}
                    manejarSubmit={manejarSubmit}
                    manejarImagen={manejarImagen}
                    categorias={categorias}
                />
            )}
        </>
    );
}
