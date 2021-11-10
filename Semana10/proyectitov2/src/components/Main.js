import Producto from "./Producto";

//<Main lista={listaPlatillos} />
//llamo a la f Main
//Main({lista})
export default function Main({ lista, anadirACarrito }) {
    return (
        <main>
            {/* item es c/platillo que esta
			dentro de lista */}
            {lista.map((item, i) => (
                <Producto key={i} item={item} anadirACarrito={anadirACarrito} />
            ))}
        </main>
    );
}
