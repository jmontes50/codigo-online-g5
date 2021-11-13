import "bootstrap/dist/css/bootstrap.min.css";
import { AuthContextProvider } from "./context/authContext";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeView from "./views/HomeView";
import LoginView from "./views/LoginView";
import CheckOutView from "./views/CheckOutView";

export default function App() {
    return (
        <AuthContextProvider>
            {/* aquí dentro del provider puedo poner tanto componentes como rutas */}
            <Router>
                <Routes>
                    <Route path="/" element={<HomeView />} />
                    <Route path="/login" element={<LoginView />} />
                    <Route path="/checkout" element={<CheckOutView />} />
                </Routes>
            </Router>
        </AuthContextProvider>
    );
}
