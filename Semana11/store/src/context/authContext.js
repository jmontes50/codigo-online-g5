import { useState, useEffect, createContext } from "react";

import { auth, firebase } from "../config/Firebase";

//para poder ejecutar las funciones de ingresar, salir y ver el estado del login
export const AuthContext = createContext();

const proveedorGoogle = new firebase.auth.GoogleAuthProvider();

export const AuthContextProvider = (props) => {
    const [user, setUser] = useState(null);

    const signIn = async () => {
        //para loguearte abre una ventanita. signInWithPopup(proveedor)
        const rptaGoogle = await auth.signInWithPopup(proveedorGoogle);
    };
};
