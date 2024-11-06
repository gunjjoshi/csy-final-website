import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Navbar from '../app/components/navbar';
import StudentForm from '../app/components/register';
import Popup from '../app/components/Popup'; 
import { auth, checkUserExists } from '../app/firebase';
import { AuthContextProvider } from '../app/context/AuthContext';
import Footer from '../app/components/footer';

const Signup = () => {
    const router = useRouter();

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
            background: rgb(0,0,0);
            background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 10%, rgba(0,0,0,1) 15%, rgba(0,0,0,1) 21%, rgba(0,0,0,1) 26%, rgba(5,17,9,1) 32%, rgba(8,28,14,1) 39%, rgba(10,36,18,1) 45%, rgba(14,49,25,1) 54%, rgba(16,58,30,1) 58%, rgba(19,69,35,1) 65%, rgba(23,82,42,1) 71%, rgba(29,102,53,1) 76%, rgba(32,115,60,1) 81%, rgba(36,128,67,1) 87%, rgba(39,137,72,1) 93%, rgba(39,137,72,1) 100%); 
             
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
