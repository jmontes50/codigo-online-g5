import "bootstrap/dist/css/bootstrap.min.css"; //node_modules
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ListaProductosView from "./views/ListaProductosView";
import CrearProductoView from "./views/CrearProductoView";
import EditarProductoView from "./views/EditarProductoView";

export default function App() {
    return (
        <div>
            <Router>
                <Routes>
                    {/* Route path="/url" element={<Componente />}*/}
                    <Route path="/" element={<ListaProductosView />} />
                    <Route path="/crearproducto" element={<CrearProductoView />} />
                    {/* cuando quiero indicar que voy a pasar un parámetro utilizo
						path="/url/:nombre_parametro"
					*/}
                    <Route path="/editarproducto/:id" element={<EditarProductoView />} />
                </Routes>
            </Router>
        </div>
    );
}
