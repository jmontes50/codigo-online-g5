import { useContext } from "react";

import { AuthContext } from "../context/authContext";

export default function LoginView() {
    const valorContexto = useContext(AuthContext);
    console.log("valorContexto", valorContexto);

    return <button className="btn btn-danger btn-lg">Ingresa con Google</button>;
}
