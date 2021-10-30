import { useState } from "react";

function App() {
    // 1. un componente solamente debe retornar 01
    // 2. toda etiqueta debe estar cerrada
    // 3. si deseo agregar JS, en el JSX (HTML), hay que poner {}

    //const [estado, funcEstado] = useState(estado_inicial)
    const [contador, setContador] = useState(0);

    let titulo = "Titulo Codigo";

    // contador = 5;

    const actualizarContador = () => {
        setContador(contador + 1);
    };

    return (
        <header>
            <h1>{titulo}</h1>
            <p>{contador}</p>
            <img src="https://picsum.photos/200" alt="imagen" />
            <br />
            <button onClick={actualizarContador}>Aumentar</button>
        </header>
    );
}

export default App;
