import { useState } from "react";
import Main from "./components/Main";

//App es el componente principal
function App() {
    // 1. un componente solamente debe retornar 01 elemento
    // 2. toda etiqueta debe estar cerrada
    // 3. si deseo agregar JS, en el JSX (HTML), hay que poner {}

    //const [estado, funcEstado] = useState(estado_inicial)
    const [contador, setContador] = useState(0);
    const [titulo, setTitulo] = useState("Mi Título");
    const [texto, setTexto] = useState("textito");

    //Levantamiento de estado - LiftingState

    // let titulo = "Titulo Codigo";

    // contador = 5;

    const actualizarContador = () => {
        setContador(contador + 1);
    };

    const actualizarTexto = (e) => {
        console.log(e);
        //actualizar el estado
        setTexto(e.target.value);
    };

    const productos = [
        {
            nombre: "Peluche",
            precio: 50,
        },
        {
            nombre: "Furro 3000",
            precio: 1,
        },
        {
            nombre: "Pingüino",
            precio: 100,
        },
        {
            nombre: "GPU RTX 3060",
            precio: 3000,
        },
    ];

    return (
        <>
            <header>
                <h1>{titulo}</h1>
                <p>{contador}</p>
                <img src="https://picsum.photos/200" alt="imagen" />
                <br />
                <button onClick={actualizarContador}>Aumentar</button>
                <button
                    onClick={() => {
                        setTitulo("Título con React");
                    }}
                >
                    Cambiar H1
                </button>
                <hr />
                {/* para llamar componentes que tengan JSX, los invoco como si fueran etiquetas de HTML con la misma sintaxis */}
            </header>
            {/* <Nombre_del_componente /> */}
            <Main
                subtitulo="Yo soy el subtitulo"
                mostrarInfo={true}
                numero={1}
                tituloPadre={titulo}
                actualizarTitulo={setTitulo}
            />

            <Main subtitulo="Segundo subtitulooooooo" mostrarInfo={false} numero={2} />

            {/* componentes controlados */}
            {/* todo input debe estar amarrado a un estado */}
            <div>
                <input
                    type="text"
                    placeholder="ingrese texto..."
                    value={texto}
                    // onChange={(e) => {
                    //     actualizarTexto(e);
                    // }}
                    onChange={(e) => {
                        setTexto(e.target.value);
                    }}
                />
            </div>

            {/* renderizar listas o arreglos */}
            {/* cuando renderizemos arreglos necesitamos un key x cada item y tiene que ser único el key */}
            <ul>
                {productos.map(({ nombre, precio }, i) => (
                    <li key={i}>{`${nombre} - ${precio}`}</li>
                ))}
            </ul>
        </>
    );
}

export default App;
