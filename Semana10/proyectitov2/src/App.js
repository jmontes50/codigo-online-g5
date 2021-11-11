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
        //primero preguntamos si ya existe
        //findIndex() -1 no existe , 0 a + Si existe
        const existe = carrito.findIndex((plato) => plato.id === objPlatillo.id);
        if (existe === -1) {
            //no existe, lo añado con la cantidad base de 1
            setCarrito([...carrito, { ...objPlatillo, cantidad: 1 }]);
        } else {
            //si existe, hay que modificar el carrito
            let carritoTmp = [...carrito]; //copia de carrito
            carritoTmp[existe].cantidad += 1; //ya estoy aumentando su cantidad
            setCarrito(carritoTmp);
        }
        // setCarrito([...carrito, objPlatillo]);
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
            <div className="boleta">
                <table>
                    <thead>
                        <tr>
                            <th>Plato</th>
                            <th>P.Unit.</th>
                            <th>Cant.</th>
                            <th>Subtotal</th>
                        </tr>
                    </thead>
                    <tbody>
                        {carrito.map((plato, i) => (
                            <tr key={i}>
                                <td>{plato.nombre}</td>
                                <td>S/ {plato.precio}</td>
                                <td>{plato.cantidad}</td>
                                <td>S/ {plato.cantidad * plato.precio}</td>
                            </tr>
                        ))}
                        <tr>
                            <td colSpan="3">TOTAL</td>
                            <td>
                                {carrito.reduce((total, plato) => {
                                    return total + plato.precio * plato.cantidad;
                                }, 0)}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
