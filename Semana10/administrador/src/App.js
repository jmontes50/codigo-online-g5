import "bootstrap/dist/css/bootstrap.min.css"; //node_modules
import ListaProductosView from "./views/ListaProductosView";
import CrearProductoView from "./views/CrearProductoView";

export default function App() {
    return (
        <div>
            <ListaProductosView />
            <CrearProductoView />
        </div>
    );
}
