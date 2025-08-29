// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBhba1pB3J6EB-nl8LigxrtcOIGDt7_j2U",
  authDomain: "web-carros-2025.firebaseapp.com",
  projectId: "web-carros-2025",
  storageBucket: "web-carros-2025.firebasestorage.app",
  messagingSenderId: "748451946672",
  appId: "1:748451946672:web:fffa882722ef280cb25b75",
  measurementId: "G-XSH3S99RFG",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
