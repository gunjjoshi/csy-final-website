"use clienr"
import React from 'react'
import { useRouter } from 'next/router';
import Footer from '../app/components/footer';
import Navbar from '../app/components/navbar';
import StudentForm from '../app/components/register'
import { AuthContextProvider } from '../app/context/AuthContext';
import { useEffect } from 'react';


const signup = () => {
    const router = useRouter();
    useEffect(() => {
        // Check if the user arrived via the button click
        if ((typeof window !== 'undefined' && !router.query.fromButton)) {
            // Redirect to a different route, not '/signup'
            router.replace('/');
        }
    }, [router.query.fromButton]);
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
                <Footer />
            </div></AuthContextProvider>
    )
}

export default signup