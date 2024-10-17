import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore, collection, getDoc } from 'firebase/firestore';
import { doc, setDoc } from 'firebase/firestore';


const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
    measurementId: ""
};


const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const firestore = getFirestore(firebaseApp);
const userDataCollection = collection(firestore, 'userDataRecords');

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
