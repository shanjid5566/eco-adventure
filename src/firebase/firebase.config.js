// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_O3BAJ8wV2O8U9qf3DqXgO_JWY_b1Wik",
  authDomain: "eco-adventure-4f09e.firebaseapp.com",
  projectId: "eco-adventure-4f09e",
  storageBucket: "eco-adventure-4f09e.firebasestorage.app",
  messagingSenderId: "435649550339",
  appId: "1:435649550339:web:c49e8ae020f037c9455636"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);