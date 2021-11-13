import { useState, useRef } from "react";
import { subirImagen } from "../services/productosService";
import { crearCategoria } from "../services/categoriasService";

let imagen;

export default function CrearCategoriaView() {
    //estas referencias van a funcionar como ID`s
    const refNombre = useRef();
    const refDescripcion = useRef();

    const manejarSubmit = async (e) => {
        e.preventDefault();
        let nuevaCategoria = {
            //el objeto que necesito mandar a mockapi tiene que tener estas propiedades
            //mediante esas referencias yo pueda obtener el valor actual
            nombre: refNombre.current.value,
            descripcion: refDescripcion.current.value,
        };
        try {
            const urlImagenSubida = await subirImagen(imagen);
            const categoriaCreada = await crearCategoria({ ...nuevaCategoria, imagen: urlImagenSubida });
            console.log(categoriaCreada);
        } catch (error) {
            console.log(error);
        }
    };

    const manejarImagen = (e) => {
        e.preventDefault();
        console.log(e.target.files); //un FileList, es un arreglo de archivos
        imagen = e.target.files[0]; //listo para utilizar
    };

    return (
        <div>
            <h1 className="mb-3">Crear nueva categoría</h1>
            <form
                onSubmit={(e) => {
                    manejarSubmit(e);
                }}
            >
                <div className="mb-3">
                    <label className="form-label">Nombre categoría</label>
                    <input type="text" className="form-control" ref={refNombre} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Descripción categoría</label>
                    <input type="text" className="form-control" ref={refDescripcion} />
                </div>

                <div className="mb-3">
                    <label className="form-label">Imagen categoría</label>
                    <input
                        type="file"
                        className="form-control"
                        onChange={(e) => {
                            manejarImagen(e);
                        }}
                    />
                </div>

                <button className="btn btn-primary" type="submit">
                    Guardar
                </button>
            </form>
        </div>
    );
}
