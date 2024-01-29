// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBvO7q-w07J1VpqP6r_o9M-V_gfKVicQhY",
  authDomain: "expense-teacker-app.firebaseapp.com",
  projectId: "expense-teacker-app",
  storageBucket: "expense-teacker-app.appspot.com",
  messagingSenderId: "813504259144",
  appId: "1:813504259144:web:9cc6b7879bc8723c01647d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
