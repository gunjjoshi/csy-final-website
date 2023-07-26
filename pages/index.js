// pages/Home_Page.js
// pages/index.js
import React from 'react';
import Navbar from '../app/components/navbar';
import CyberSecurityClub from '../app/components/homeContent';
import Footer from '../app/components/footer';

// Rest of your code remains unchanged

const Home_Page = () => {


    return (
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
            /* Add other global CSS styles here */
            .navbar {
              transition: transform 0.3s ease-in-out; /* Add transition property */
            }
            .show-navbar {
              transform: translateY(0); /* Move navbar to visible position */
            }
          `,
                }}
            />
            <div style={{ display: 'flex', height: '100vh' }}>
                {/* Logo Container */}
                <div style={{ width: '50vw', marginTop: '80px', display: 'flex', justifyContent: 'center', alignItems: 'center', marginLeft: '5vw' }}>
                    <img src="/CSC_Logo.png" alt="Logo" style={{ maxWidth: '100%', maxHeight: '100%' }} />
                </div>

                {/* Right Side Content */}
                <div style={{ width: '50vw', fontFamily: 'Cascadia Code, monospace', marginTop: '40px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', textAlign: 'center', color: 'white' }}>Cyber Security Club</h1>
                    <h2 style={{ fontSize: '1.2rem', textAlign: 'center', color: 'white' }}>Join the Cyber Security Club of IIIT Kottayam as we explore new cutting edge technology.</h2>
                    <div style={{ marginTop: '2rem' }}>
                        <button style={{ marginRight: '2rem', padding: '0.5rem 1.5rem', fontSize: '1.2rem', fontWeight: 'bold', color: 'black', borderRadius: '0.7rem', boxShadow: '5px 5px 0 rgba(0, 0, 0, 0.2)', background: 'white' }}>Sign Up</button>
                        <button style={{ padding: '0.5rem 1.5rem', fontSize: '1.2rem', fontWeight: 'bold', color: 'black', borderRadius: '0.7rem', boxShadow: '5px 5px 0 rgba(0, 0, 0, 0.2)', background: 'white' }}>Login</button>
                    </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)' }}>
                    <img src="/arrow.svg" alt="Arrow" style={{ width: '30px', height: '30px' }} />
                </div>
            </div>

            {/* Conditionally render the HomeNavbar based on the showNavbar state */}
            <Navbar />
            <CyberSecurityClub />
            <Footer />
        </>
    );
};

export default Home_Page;
