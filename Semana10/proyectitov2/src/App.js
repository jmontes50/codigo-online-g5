//Uds pueden importar, imagenes, hojas de estilo, pero si no es JS necesito ponerle la .extension
//OJO: los estilos que yo importo no afectan solamente al componente en el que lo estoy importando
//afectan a toda la aplicacion
import "./css/estilos.css";

export default function App() {
    return (
        <div className="contenedor">
            <div className="aplicacion"></div>
            <div className="boleta"></div>
        </div>
    );
}
