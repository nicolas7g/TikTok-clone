import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
//import {getAuth, GoogleAuthProvider, signInWithPopup} from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCLWtVkMFUhIrcFvAuhFwWBqIyg9YOACJU",
  authDomain: "tiktok-92cea.firebaseapp.com",
  projectId: "tiktok-92cea",
  storageBucket: "tiktok-92cea.appspot.com",
  messagingSenderId: "302758843795",
  appId: "1:302758843795:web:6d2db26bdf83cc2a4a4466"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
//const auth = getAuth(firebaseApp);
//const provider = new GoogleAuthProvider();
//const signInWithGoogle = signInWithPopup;//signInWithGoogle se transforma en una funcion

//export {auth, provider, signInWithGoogle};
export default db; // entre el "export default" y el "export" varia la forma en la que se van a importar esas variables