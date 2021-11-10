//Uds pueden importar, imagenes, hojas de estilo, pero si no es JS necesito ponerle la .extension
//OJO: los estilos que yo importo no afectan solamente al componente en el que lo estoy importando
//afectan a toda la aplicacion
import "./css/estilos.css";

import { useState } from "react";

//import NombreFunción from "ruta/Nombre_Archivo"
import Header from "./components/Header";
import NavSide from "./components/NavSide";
import Main from "./components/Main";

import { listaPlatillos } from "./utils/data";

export default function App() {
    //cuando utilizemos hooks tienen que estar dentro del componente
    const [carrito, setCarrito] = useState([]);

    const anadirACarrito = (objPlatillo) => {
        setCarrito([...carrito, objPlatillo]);
    };

    return (
        <div className="contenedor">
            <div className="aplicacion">
                <Header />
                <div className="principal">
                    <NavSide />
                    {/* <Componente nombre_props={valor_props} */}
                    <Main lista={listaPlatillos} anadirACarrito={anadirACarrito} />
                </div>
            </div>
            <div className="boleta"></div>
        </div>
    );
}
