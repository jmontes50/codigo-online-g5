import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import FormProducto from "../components/FormProducto";
import { obtenerProductoPorId, editarProductoPorId, subirImagen } from "../services/productosService";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";

let imagen; //undefined

export default function EditarProductoView() {
    const [value, setValue] = useState({
        nombre: "",
        descripcion: "",
        precio: 0,
    });

    const { id } = useParams(); //1. con esto tenemos el id de la URL
    const navigate = useNavigate();

    const getProducto = async () => {
        try {
            const prodObtenido = await obtenerProductoPorId(id); //2. obtenemos el producto por su ID
            setValue(prodObtenido); //2.1 la rpta de mockapi la pongo en el estado
        } catch (error) {
            console.log(error);
        }
    };
    const manejarSubmit = async (e) => {
        e.preventDefault();
        try {
            if (typeof imagen !== "undefined") {
                //si imagen es diferente de undefined
                //porque imagen no seria undefined
                const urlImagenSubida = await subirImagen(imagen); //subo la imagen
                await editarProductoPorId(id, { ...value, imagen: urlImagenSubida }); //actualizo el objeto value
            } else {
                //actualizo pero sin subir ninguna imagen
                await editarProductoPorId(id, value);
            }
            await Swal.fire({
                icon: "success",
                title: "Éxito",
                text: "Producto Editado Exitosamente",
            });
            navigate("/");
        } catch (error) {
            console.log(error);
        }
    };
    const actualizarInput = (e) => {
        console.log(e.target.name, e.target.value);
        setValue({
            ...value, //cogiendo el estado de value, spreadoperator
            [e.target.name]: e.target.value,
        });
    };

    const manejarImagen = (e) => {
        e.preventDefault();
        console.log(e.target.files);
        imagen = e.target.files[0]; //como para utilizar
    };

    useEffect(() => {
        getProducto(); //3. con un useEffect llamamos a la función que me trae 01 producto por su ID
    }, []);

    return (
        <div>
            <FormProducto
                value={value}
                actualizarInput={actualizarInput}
                manejarSubmit={manejarSubmit}
                manejarImagen={manejarImagen}
            />
        </div>
    );
}
