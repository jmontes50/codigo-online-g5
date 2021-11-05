import { useState } from "react";
import FormProducto from "../components/FormProducto";

export default function CrearProductoView() {
    const [value, setValue] = useState({
        nombre: "",
        descripcion: "",
        precio: 0,
    });

    const actualizarInput = (e) => {
        console.log(e.target.name, e.target.value);
        setValue({
            ...value, //cogiendo el estado de value, spreadoperator
            [e.target.name]: e.target.value,
        });
    };

    return (
        <div>
            <FormProducto value={value} actualizarInput={actualizarInput} />
        </div>
    );
}
