import firebase from 'firebase/app'; // Import only the base Firebase module
import 'firebase/auth';
import 'firebase/database';
import styles from '../page.module.css';
import React, { useState, useEffect } from 'react';
import { UserAuth } from "../context/AuthContext";
import { useRouter } from 'next/router';
import Popup from './Popup';
import { AuthContextProvider } from '../context/AuthContext';
import { auth, usersRef, database } from '../firebase';
import { get, ref } from 'firebase/database';

const Navbar = () => {
    const router = useRouter();
    const { user: authUser, googleSignIn, logOut } = UserAuth();
    const [user, setUser] = useState(authUser);
    const [showPopup, setShowPopup] = useState(false);
    const [popupMessage, setPopupMessage] = useState('');
    const [emailExists, setEmailExists] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');

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
                const usersRef = ref(database, 'userDataRecords');

                get(usersRef)
                    .then((snapshot) => {
                        if (snapshot.exists()) {
                            let emailExists = false;
                            snapshot.forEach((childSnapshot) => {
                                const user = childSnapshot.val();
                                if (user.email === userEmail) {
                                    emailExists = true;
                                    return; // Exit the loop when a match is found
                                }
                            });

                            if (emailExists) {
                                // Email exists in the database
                                // alert('Email exists in the database.');
                                setEmailExists(true);
                            } else {
                                // Email does not exist in the database
                                // alert('Email does not exist in the database.');
                                setEmailExists(false);
                            }
                        }
                    })
                    .catch((error) => {
                        console.error("Error reading data: " + error.message);
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
                    // Check if the email exists in the database
                    const usersRef = ref(database, 'users'); // Use the 'database' object

                    get(usersRef).then((snapshot) => {
                        if (snapshot.exists()) {
                            snapshot.forEach((childSnapshot) => {
                                const user = childSnapshot.val();
                                if (user.email === userEmail) {
                                    setEmailExists(true);
                                    return; // Exit the loop when a match is found
                                }
                            });
                        }
                    }).catch((error) => {
                        console.error("Error reading data: " + error.message);
                    });

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

    const handleButtonClick = () => {
        router.push('/signup?fromButton=true');
    };

    return (
        <AuthContextProvider>
            <div>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" />
                <link href="https://fonts.cdnfonts.com/css/cascadia-code" rel="stylesheet" />

                <nav class="navbar navbar-expand-lg bg-body-tertiary fixed-top" style={{ fontFamily: 'Cascadia Code, monospace' }}>
                    <div class="container">
                        <div className={styles.navLogo}>
                            <img
                                src="CSC_Logo_Light_name.svg"
                                alt="Logo"
                                width="100"
                                height="100"
                                className={`d-inline-block align-text-top ${styles.glogo}`}
                            />
                        </div>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className={`collapse navbar-collapse ${styles.navCollapse}`} id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active fs-4 mx-4" href="/" style={{ fontFamily: 'Cascadia Code, monospace' }}>
                                        Home
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active fs-4 mx-4" href="/people">
                                        People
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active fs-4 mx-4" href="/events">
                                        Events
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active fs-4 mx-4" href="/contact">
                                        Contact
                                    </a>
                                </li>
                            </ul>
                            {/* <button type="button" className={`btn btn-success ${styles.customButton}`}>
                            Sign In
                        </button> */}
                            {!loading && (
                                <div className="d-flex">
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
                        </div>
                    </div>
                </nav>
                {showPopup && (
                    <Popup message={popupMessage} onClose={handleClosePopup} />
                )}
                {alertMessage && (
                    <div className="alert alert-info">
                        {alertMessage}
                    </div>
                )}
            </div>
        </AuthContextProvider>
    );
};

export default Navbar;