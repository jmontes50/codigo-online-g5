import { useState } from "react";

export default function AnadirTarea({ setTareas, tareas }) {
    const [texto, setTexto] = useState("");

    const agregarNuevaTarea = () => {
        setTareas([...tareas, texto]);
        setTexto("");
    };

    return (
        <div className="form-group">
            <input
                type="text"
                className="form-control"
                value={texto}
                onChange={(e) => {
                    setTexto(e.target.value);
                }}
            />
            <button className="btn btn-primary" onClick={agregarNuevaTarea}>
                Agregar Tarea
            </button>
        </div>
    );
}
