import "bootstrap/dist/css/bootstrap.min.css"; //node_modules
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ListaProductosView from "./views/ListaProductosView";

export default function App() {
    return (
        <div>
            <Router>
                <Routes>
                    {/* Route path="/url" element={<Componente />}*/}
                    <Route path="/" element={<ListaProductosView />} />
                </Routes>
            </Router>
        </div>
    );
}
