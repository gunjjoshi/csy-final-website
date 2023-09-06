import firebase from 'firebase/app'; // Import the base Firebase module
import 'firebase/auth'; // Import the Firebase Auth module
import 'firebase/database'; // Import the Firebase Realtime Database module
import { initializeApp } from 'firebase/app';
import { getDatabase, ref } from 'firebase/database';
import { getAuth } from 'firebase/auth';

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


const firebaseApp = initializeApp(firebaseConfig);
const database = getDatabase(firebaseApp);
const usersRef = ref(database, 'userDataRecords');
const auth = getAuth(firebaseApp);

export { auth, usersRef, database };
