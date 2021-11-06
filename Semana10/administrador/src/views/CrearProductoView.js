import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { crearProducto } from "../services/productosService";
import FormProducto from "../components/FormProducto";
import Swal from "sweetalert2";

let imagen; //básicamente es una variable global que no esta definida

export default function CrearProductoView() {
    const [value, setValue] = useState({
        nombre: "",
        descripcion: "",
        precio: 0,
    });

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
            await crearProducto(value);
            //después de que haya terminado de crear el producto
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
        // console.log(e.target.files);
        imagen = e.target.files[0]; //como para utilizar
    };

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
