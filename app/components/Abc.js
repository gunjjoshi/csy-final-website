import firebase from 'firebase/app'; // Import only the base Firebase module
import 'firebase/auth';
import 'firebase/firestore'; // Import Firestore module
import styles from '../page.module.css';
import React, { useState, useEffect } from 'react';
import { UserAuth } from "../context/AuthContext";
import { useRouter } from 'next/router';
import Popup from './Popup';
import { AuthContextProvider } from '../context/AuthContext';
import { auth } from '../firebase'; // Remove import for 'database' and 'usersRef'
import { checkUserExists } from '../firebase';

const Abc = () => {
    const router = useRouter();
    const { user: authUser, googleSignIn, logOut } = UserAuth();
    const [user, setUser] = useState(authUser);
    const [showPopup, setShowPopup] = useState(false);
    const [popupMessage, setPopupMessage] = useState('');
    const [emailExists, setEmailExists] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');
    const [formSubmitted, setFormSubmitted] = useState(false);

    const handleShowPopup = (message) => {
        setPopupMessage(message);
        setShowPopup(true);
    };

    const handleClosePopup = () => {
        setShowPopup(false);
    };

    const handleSignIn = async () => {
        try {
            await googleSignIn();
            const userEmail = auth.currentUser.email;
            const allowedDomain = '@iiitkottayam.ac.in';

            if (userEmail.endsWith(allowedDomain)) {
                // Check if the email exists in Firestore
                const firestore = firebase.firestore();
                const usersRef = firestore.collection('userDataRecords');

                usersRef.where('email', '==', userEmail).get()
                    .then((querySnapshot) => {
                        if (!querySnapshot.empty) {
                            setEmailExists(true);
                        } else {
                            setEmailExists(false);
                        }
                    })
                    .catch((error) => {
                        console.error("Error querying Firestore: " + error.message);
                    });
            }
        } catch (error) {
            console.log(error);
        }
    };

    const handleSignOut = async () => {
        try {
            await logOut();
            router.push('/');
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((currentUser) => {
            if (currentUser) {
                const userEmail = currentUser.email;
                const allowedDomain = '@iiitkottayam.ac.in';

                if (userEmail.endsWith(allowedDomain)) {
                    setUser(currentUser);
                    const url = new URL(window.location.href);
                    url.searchParams.set('userEmail', userEmail);
                    window.history.replaceState(null, '', url);
                } else {
                    console.log("Email domain does not match");
                    handleShowPopup('Please use your college email to Sign Up.')
                    auth.signOut();
                }
            } else {
                setUser(null);
            }
        });

        return () => unsubscribe();
    }, []);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const checkAuthentication = async () => {
            await new Promise((resolve) => setTimeout(resolve, 50));
            setLoading(false);
        };
        checkAuthentication();
    }, [user]);

    const handleButtonClick = async () => {
        if (!formSubmitted) {
            router.push('/signup?fromButton=true'); // Redirect the user to the signup page
        }
    };
    return (
        <>
            {!loading && (
                <div style={{ marginTop: '3rem' }} className="d-flex">
                    {user ? (
                        <div className="d-flex">
                            <p className="my-auto">{user.displayName} &nbsp;&nbsp;  </p>
                            <button onClick={handleSignOut} type="button" className={`btn btn-danger ${styles.customButton} mx-2`}>
                                Sign out
                            </button>
                            {!emailExists ? (
                                <button onClick={handleButtonClick} type="button" className={`btn btn-primary ${styles.customButton} mx-2`}>
                                    Join
                                </button>
                            ) : null}
                        </div>
                    ) : (
                        <button onClick={handleSignIn} type="button" className={`btn btn-success ${styles.customButton} mx-2`}>
                            Sign In
                        </button>
                    )}
                </div>
            )}
            {showPopup && (
                <Popup message={popupMessage} onClose={handleClosePopup} />
            )}
            {alertMessage && (
                <div className="alert alert-info">
                    {alertMessage}
                </div>
            )}
        </>
    )
}

export default Abc