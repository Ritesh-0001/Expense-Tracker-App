// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, setDoc  } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDr1Xm-ozfIx4I5AibpPHgPoBehV1xmOEc",
  authDomain: "expense-tracker-app-37a0a.firebaseapp.com",
  projectId: "expense-tracker-app-37a0a",
  storageBucket: "expense-tracker-app-37a0a.appspot.com",
  messagingSenderId: "145683587121",
  appId: "1:145683587121:web:66f036d8142088ff8bb510",
  measurementId: "G-N3FRSLKZ20"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export{db, auth, provider, doc, setDoc };