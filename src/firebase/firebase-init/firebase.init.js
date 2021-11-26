import { initializeApp } from "firebase/app";
import firebaseConfig from "../firebase-config/firebase.config";

const firebaseAuthInit = () => {
    initializeApp(firebaseConfig);
}

export default firebaseAuthInit;