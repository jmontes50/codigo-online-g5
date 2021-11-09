//Uds pueden importar, imagenes, hojas de estilo, pero si no es JS necesito ponerle la .extension
//OJO: los estilos que yo importo no afectan solamente al componente en el que lo estoy importando
//afectan a toda la aplicacion
import "./css/estilos.css";

//import NombreFunción from "ruta/Nombre_Archivo"
import Header from "./components/Header";
import NavSide from "./components/NavSide";
import Main from "./components/Main";

import { listaPlatillos } from "./utils/data";

export default function App() {
    return (
        <div className="contenedor">
            <div className="aplicacion">
                <Header />
                <div className="principal">
                    <NavSide />
                    {/* <Componente nombre_props={valor_props} */}
                    <Main lista={listaPlatillos} />
                </div>
            </div>
            <div className="boleta"></div>
        </div>
    );
}
