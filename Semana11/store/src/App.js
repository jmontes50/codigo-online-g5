import "bootstrap/dist/css/bootstrap.min.css";

import { AuthContextProvider } from "./context/authContext";
import LoginView from "./views/LoginView";

export default function App() {
    return (
        <AuthContextProvider>
            {/* aquí dentro del provider puedo poner tanto componentes como rutas */}
            <LoginView />
        </AuthContextProvider>
    );
}
