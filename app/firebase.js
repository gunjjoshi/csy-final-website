import firebase from 'firebase/app';
import 'firebase/auth'; // Import the Firebase Auth module
import 'firebase/firestore'; // Import the Firestore module
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore, collection, getDoc } from 'firebase/firestore';
import { doc, setDoc } from 'firebase/firestore';


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
const auth = getAuth(firebaseApp);
const firestore = getFirestore(firebaseApp);
const userDataCollection = collection(firestore, 'userDataRecords'); // Create the collection reference

const addUserRecord = async (userData) => {
    const userRef = doc(firestore, 'userDataRecords', userData.email);

    try {
        await setDoc(userRef, userData);
        console.log('User data added to Firestore:', userData);
    } catch (error) {
        console.error('Error adding user data to Firestore:', error);
        throw error;
    }
};

const checkUserExists = async (email) => {
    const userRef = doc(firestore, 'userDataRecords', email);

    try {
        const docSnapshot = await getDoc(userRef);
        return docSnapshot.exists();
    } catch (error) {
        console.error('Error checking if user exists:', error);
        throw error;
    }
};

export { auth, firestore, checkUserExists, addUserRecord };
