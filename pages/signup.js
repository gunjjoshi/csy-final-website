import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Navbar from '../app/components/navbar';
import StudentForm from '../app/components/register';
import Popup from '../app/components/Popup'; // Import the Popup component
import { auth, checkUserExists } from '../app/firebase'; // Import the checkUserExists function
import { AuthContextProvider } from '../app/context/AuthContext';
import Footer from '../app/components/footer';

const Signup = () => {
    const router = useRouter();

    // Define the state variables for the popup
    const [showPopup, setShowPopup] = useState(false);
    const [popupMessage, setPopupMessage] = useState('');

    useEffect(() => {
        // Check if the user arrived via the button click
        if (typeof window !== 'undefined' && !router.query.fromButton) {
            // Redirect to a different route, not '/signup'
            router.replace('/');
        } else {
            // Check the existence of the user
            const userEmail = auth.currentUser?.email;
            checkUser(userEmail);
        }
    }, [router.query.fromButton]);

    const checkUser = async (userEmail) => {
        try {
            const emailExists = await checkUserExists(userEmail);

            if (emailExists) {
                // Show the popup with a message
                // You can customize the message as needed
                setPopupMessage('You have already registered.');
                setShowPopup(true);
            }
        } catch (error) {
            console.error('Error checking user existence:', error.message);
        }
    };

    // Define a function to close the popup
    const handleClosePopup = (formSubmitted) => {
        setShowPopup(false);

        // After closing the success popup, redirect the user to the homepage
        if (formSubmitted) {
            router.push('/');
        }
    };



    return (
        <AuthContextProvider>
            <div>
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
                <Navbar position="fixed" />
                <StudentForm />
                {showPopup && (
                    <Popup message={popupMessage} onClose={handleClosePopup} />

                )}
                <Footer />
            </div></AuthContextProvider>
    )
}

export default Signup