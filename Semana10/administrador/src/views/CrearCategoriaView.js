import { useState, useRef } from "react";
let imagen;

export default function CrearCategoriaView() {
    //estas referencias van a funcionar como ID`s
    const refNombre = useRef();
    const refDescripcion = useRef();

    return (
        <div>
            <h1 className="mb-3">Crear nueva categoría</h1>
            <form>
                <div className="mb-3">
                    <label className="form-label">Nombre categoria</label>
                    <input type="text" className="form-control" ref={refNombre} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Descripción categoria</label>
                    <input type="text" className="form-control" ref={refDescripcion} />
                </div>
                <button className="btn btn-primary" type="submit">
                    Guardar
                </button>
            </form>
        </div>
    );
}
