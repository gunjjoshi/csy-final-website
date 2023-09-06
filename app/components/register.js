import { useState } from 'react';
import { UserAuth } from '../context/AuthContext';
import { AuthContextProvider } from '../context/AuthContext';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Popup from './Popup';
import { auth, usersRef, database } from '../firebase';
import { get, ref } from 'firebase/database';
import 'firebase/auth';
import 'firebase/database';

const StudentForm = () => {
    const router = useRouter();
    const { user, googleSignIn, logOut } = UserAuth();
    const [loading, setLoading] = useState(true);
    const [showPopup, setShowPopup] = useState(false);
    const [popupMessage, setPopupMessage] = useState('');
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [emailExists, setEmailExists] = useState(false);

    const handleShowPopup = (message) => {
        setPopupMessage(message);
        setShowPopup(true);
    };

    const handleClosePopup = () => {
        setShowPopup(false);

        // After closing the success popup, redirect the user to the homepage
        if (formSubmitted) {
            router.push('/');
        }
    };

    useEffect(() => {
        const checkAuthentication = async () => {
            await new Promise((resolve) => setTimeout(resolve, 50));
            setLoading(false);
        };
        checkAuthentication();
    }, [user]);

    const [userData, setUserData] = useState({
        fullName: "",
        roll: "",
        email: "",
        interests: ""
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { fullName, roll, interests } = userData;
        console.log('Submitted:', { fullName, roll, interests });

        if (fullName && roll && interests) {
            const usersRef = ref(database, 'userDataRecords');

            get(usersRef)
                .then((snapshot) => {
                    if (snapshot.exists()) {
                        let emailExists = false;
                        snapshot.forEach((childSnapshot) => {
                            const user = childSnapshot.val();
                            const userEmail = auth.currentUser.email;

                            if (user.email === userEmail) {
                                emailExists = true;
                                return; // Exit the loop when a match is found
                            }
                        });

                        if (emailExists) {
                            handleShowPopup('You have already registered.');
                            return; // Prevent form submission
                        } else {
                            // Continue with registration
                            if (user?.email?.endsWith('@iiitkottayam.ac.in')) {
                                fetch("https://csyclub-1e1af-default-rtdb.firebaseio.com/userDataRecords.json", {
                                    method: "POST",
                                    headers: {
                                        "Content-Type": "application/json",
                                    },
                                    body: JSON.stringify({
                                        fullName, roll, email: user.email, interests
                                    }),
                                })
                                    .then((res) => {
                                        if (res.ok) {
                                            setUserData({
                                                fullName: "",
                                                roll: "",
                                                email: "",
                                                interests: ""
                                            });
                                            // Display the success popup upon successful registration
                                            setFormSubmitted(true);
                                        } else {
                                            handleShowPopup('Registration failed.');
                                        }
                                    })
                                    .catch((error) => {
                                        console.error("Error during registration: " + error.message);
                                    });
                            } else {
                                handleShowPopup('Please use your college email.');
                            }
                        }
                    }
                })
                .catch((error) => {
                    console.error("Error reading data: " + error.message);
                });
        } else {
            handleShowPopup('Please fill all fields.');
        }
    };

    let name, value
    const postUserData = (event) => {
        name = event.target.name;
        value = event.target.value;
        setUserData({ ...userData, [name]: value })
    };

    return (
        <AuthContextProvider>
            <>
                <style
                    dangerouslySetInnerHTML={{
                        __html: `
                        body {
                            font-family: 'Cascadia Code', 'Courier New', 'monospace';
                            background-image: url("background.png");
                            background-size: cover;
                            background-repeat: no-repeat;
                        }
                    `,
                    }}
                />

                <style jsx>{`
                    @media (max-width: 767px) {
                        div {
                            margin-top: 0px;
                        }
                    }
                `}</style>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
                    <div style={{ width: '100%', maxWidth: '400px', padding: '20px', backgroundColor: 'rgba(255, 255, 255, 0.8)', borderRadius: '8px', boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)', marginTop: '150px', marginBottom: '50px' }}>
                        <h2 style={{ fontSize: '24px', fontWeight: '600', marginBottom: '20px', textAlign: 'center', color: 'black' }}>Student Registration Form</h2>
                        <form style={{ marginBottom: '20px' }}>
                            <div style={{ marginBottom: '20px' }}>
                                <label htmlFor="fullName">Full Name:</label>
                                <input
                                    type="text"
                                    name="fullName"
                                    value={userData.fullName}
                                    onChange={postUserData}
                                    style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc', backgroundColor: 'rgba(0, 0, 0, 0.4)', color: 'white' }}
                                />
                            </div>
                            <div style={{ marginBottom: '20px' }}>
                                <label htmlFor="roll">Roll Number:</label>
                                <input
                                    type="text"
                                    name="roll"
                                    value={userData.roll}
                                    onChange={postUserData}
                                    style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc', backgroundColor: 'rgba(0, 0, 0, 0.4)', color: 'white' }}
                                />
                            </div>
                            <div style={{ marginBottom: '20px' }}>
                                <label htmlFor="email" className="block mb-2">Email:</label><br />
                                <input
                                    type="email"
                                    name="email"
                                    value={user?.email || ''}
                                    readOnly
                                    disabled
                                    onChange={postUserData}
                                    style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc', backgroundColor: 'rgba(0, 0, 0, 0.4)', color: 'white' }}
                                />
                            </div>
                            <div style={{ marginBottom: '20px' }}>
                                <label htmlFor="interests" className="block mb-2">Interests:</label><br />
                                <textarea
                                    name="interests"
                                    value={userData.interests}
                                    onChange={postUserData}
                                    style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc', backgroundColor: 'rgba(0, 0, 0, 0.4)', color: 'white' }}
                                />
                            </div>

                            <button
                                type="submit"
                                onClick={handleSubmit}
                                style={{ backgroundColor: '#1dbf53', color: 'white', padding: '10px 20px', borderRadius: '4px', border: 'none', cursor: 'pointer' }}
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                    {showPopup && (
                        <Popup message={popupMessage} onClose={handleClosePopup} />
                    )}
                    {formSubmitted && (
                        <Popup message="Registration successful!" onClose={handleClosePopup} />
                    )}
                </div>
            </>
        </AuthContextProvider>
    );
}

export default StudentForm;
