import { useContext } from "react";
import { CarritoContext } from "../context/carritoContext";

export default function CarritoView() {
    const { carrito } = useContext(CarritoContext);

    return (
        <div className="container">
            <div className="my-4 text-center">
                <h1 className="fw-bold">
                    <i className="fas fa-cart-plus me-2"></i>
                    Carrito de compras
                </h1>
            </div>

            <table className="table">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Precio</th>
                        <th>Cantidad</th>
                        <th>Precio Total</th>
                    </tr>
                </thead>
                <tbody>
                    {carrito.map((prod, i) => (
                        <tr key={i}>
                            <td>{prod.nombre}</td>
                            <td>{prod.precio}</td>
                            <td>{prod.cantidad}</td>
                            <td>{prod.precio * prod.cantidad}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className="d-flex justify-content-end">
                <button className="btn btn-dark btn-lg">Hacer Checkout</button>
            </div>
        </div>
    );
}
