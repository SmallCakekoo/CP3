// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCk7h5H_kiji3_ZLj1Ao32pqb_GOoDmjQw",
  authDomain: "cp3-dca.firebaseapp.com",
  projectId: "cp3-dca",
  storageBucket: "cp3-dca.firebasestorage.app",
  messagingSenderId: "440725169140",
  appId: "1:440725169140:web:a2c3c6475babe7cabe0fa1",
  measurementId: "G-C54VZE6TR7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
