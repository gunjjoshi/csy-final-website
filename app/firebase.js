// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD7t2qU2EfuIihZqflWqdz2wteUAitYda8",
    authDomain: "csyclub-1e1af.firebaseapp.com",
    databaseURL: "https://csyclub-1e1af-default-rtdb.firebaseio.com",
    projectId: "csyclub-1e1af",
    storageBucket: "csyclub-1e1af.appspot.com",
    messagingSenderId: "310772231026",
    appId: "1:310772231026:web:93964a0338e64a4dd88beb",
    measurementId: "G-M0SG58E4TG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
