import firebase from "firebase/app";
import "firebase/storage";

const config = {
    apiKey: "AIzaSyB5CdVHhtl3eFCmvJRMDxmhGaIE1FgL4xo",
    authDomain: "proyg5-vvv.firebaseapp.com",
    projectId: "proyg5-vvv",
    storageBucket: "proyg5-vvv.appspot.com",
    messagingSenderId: "961310140015",
    appId: "1:961310140015:web:7762ad43386685096f4f9a",
};

const fire = firebase.initializeApp(config);
const storage = firebase.storage();

export { fire, firebase, storage };
