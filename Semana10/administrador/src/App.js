import "bootstrap/dist/css/bootstrap.min.css"; //node_modules
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ListaProductosView from "./views/ListaProductosView";
import CrearProductoView from "./views/CrearProductoView";

export default function App() {
    return (
        <div>
            <Router>
                <Routes>
                    {/* Route path="/url" element={<Componente />}*/}
                    <Route path="/" element={<ListaProductosView />} />
                    <Route path="/crearproducto" element={<CrearProductoView />} />
                </Routes>
            </Router>
        </div>
    );
}
