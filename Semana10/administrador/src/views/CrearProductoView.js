import { useState } from "react";
import FormProducto from "../components/FormProducto";

export default function CrearProductoView() {
    const [value, setValue] = useState({
        nombre: "",
        descripcion: "",
        precio: 0,
    });

    return (
        <div>
            <FormProducto value={value} />
        </div>
    );
}
