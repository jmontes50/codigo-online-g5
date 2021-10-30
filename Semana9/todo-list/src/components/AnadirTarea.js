import { useState } from "react";

export default function AnadirTarea({ setTareas, tareas }) {
    const [texto, setTexto] = useState("");
    return (
        <div class="form-group">
            <input
                type="text"
                class="form-control"
                value={texto}
                onChange={(e) => {
                    setTexto(e.target.value);
                }}
            />
            <button class="btn btn-primary">Agregar Tarea</button>
        </div>
    );
}
