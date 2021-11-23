import { useContext } from "react";
import { CarritoContext } from "../context/carritoContext";
import { useForm } from "react-hook-form"; //useForm es un hook personalizado, para manejar formularios

export default function CheckOutView() {
    const { carrito } = useContext(CarritoContext);

    return (
        <div className="container mt-4">
            <h1>Checkout</h1>
            <div className="row my-2">
                <div className="col-12 col-md-6">
                    <h5>Verifique el carrito</h5>
                    <ul className="list-group">
                        {carrito.map((prod, i) => (
                            <li className="list-group-item d-flex justify-content-between" key={i}>
                                <div>
                                    <h6 className="fw-bold">{prod.nombre}</h6>
                                    <small>Cantidad: {prod.cantidad}</small>
                                </div>
                                <div className="badge bg-dark rounded-pill p-4">
                                    {/* toFixed(entero), me permite manejar decimales en un número */}
                                    S/ {(prod.cantidad * prod.precio).toFixed(2)}
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
