// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDDFslCQqrxzEYvPUujQwVfcR9UMHr1qjM",
  authDomain: "react-auth-53b4e.firebaseapp.com",
  projectId: "react-auth-53b4e",
  storageBucket: "react-auth-53b4e.appspot.com",
  messagingSenderId: "309878216916",
  appId: "1:309878216916:web:27d26d3c5094be44a90341"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)