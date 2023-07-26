// pages/Home_Page.js
import React, { useState, useEffect } from 'react';
import Navbar from '../app/components/navbar';
import CyberSecurityClub from '../app/components/homeContent';
import Footer from '../app/components/footer';

const Home_Page = () => {
    const [windowWidth, setWindowWidth] = useState(0);

    useEffect(() => {
        setWindowWidth(window.innerWidth);
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const logoStyles = {
        marginBottom: '1rem',
        width: '300px',
        maxWidth: '100%',
        marginTop: windowWidth <= 768 ? '20rem' : '1rem',
    };
    useEffect(() => {
        // Initialize Bootstrap JavaScript when the component is mounted
        const bootstrapScript = document.createElement('script');
        bootstrapScript.src =
            'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js';
        bootstrapScript.integrity =
            'sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz';
        bootstrapScript.crossOrigin = 'anonymous';
        document.body.appendChild(bootstrapScript);

        return () => {
            // Cleanup: remove the script when the component is unmounted
            document.body.removeChild(bootstrapScript);
        };
    }, []);
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
            {/* Conditionally render the HomeNavbar based on the showNavbar state */}
            <Navbar />
            {windowWidth > 768 ? ( // Large screens layout
                <div style={{ display: 'flex', fontFamily: 'Cascadia Code, monospace', color: 'white', textAlign: 'center', background: 'url("background.png")', backgroundSize: 'cover', height: '100vh' }}>
                    {/* Left Half - Logo */}
                    <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                        <div style={logoStyles}>
                            <img src="/CSC_Logo.png" alt="Logo" style={{ width: '120%', height: '120%', objectFit: 'contain' }} />
                        </div>
                    </div>

                    {/* Right Half - Headings and Buttons */}
                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        <div style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>Cyber Security Club</div>
                        <div style={{ fontSize: '1.2rem', lineHeight: '1.5', maxWidth: '800px', marginBottom: '2rem', marginRight: '2rem' }}>
                            Join the Cyber Security Club of IIIT Kottayam as we explore new cutting edge technology.
                        </div>
                        <div >
                            <button style={{ marginBottom: '1rem', padding: '0.5rem 1.5rem', fontSize: '1.2rem', fontWeight: 'bold', color: 'black', borderRadius: '0.7rem', boxShadow: '5px 5px 0 rgba(0, 0, 0, 0.2)', background: 'white', marginRight: '3.2rem' }}>Sign Up</button>
                            <button style={{ padding: '0.5rem 1.5rem', fontSize: '1.2rem', fontWeight: 'bold', color: 'black', borderRadius: '0.7rem', boxShadow: '5px 5px 0 rgba(0, 0, 0, 0.2)', background: 'white' }}>Login</button>
                        </div>
                    </div>
                </div>
            ) : ( // Small screens layout (same as before)
                <div style={{ marginTop: '7.5rem' }}>
                    <div style={{ fontFamily: 'Cascadia Code, monospace', color: 'white', textAlign: 'center', background: 'url("background.png")', backgroundSize: 'cover', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        {/* Logo Container */}
                        <div style={logoStyles}>
                            <img src="/CSC_Logo.png" alt="Logo" style={{ width: '100%', height: '100%', objectFit: 'contain', marginTop: '10rem', marginBottom: '10rem' }} />
                        </div>

                        {/* Heading */}
                        <div style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>Cyber Security Club</div>

                        {/* Description */}
                        <div style={{ fontSize: '1.2rem', lineHeight: '1.5', maxWidth: '800px', marginBottom: '2rem' }}>
                            Join the Cyber Security Club of IIIT Kottayam as we explore new cutting edge technology.
                        </div>

                        {/* Buttons */}
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '10rem' }}>
                            <button style={{ marginBottom: '1rem', padding: '0.5rem 1.5rem', fontSize: '1.2rem', fontWeight: 'bold', color: 'black', borderRadius: '0.7rem', boxShadow: '5px 5px 0 rgba(0, 0, 0, 0.2)', background: 'white' }}>Sign Up</button>
                            <button style={{ padding: '0.5rem 1.5rem', fontSize: '1.2rem', fontWeight: 'bold', color: 'black', borderRadius: '0.7rem', boxShadow: '5px 5px 0 rgba(0, 0, 0, 0.2)', background: 'white', marginBottom: '30rem' }}>Login</button>
                        </div>

                        {/* Arrow */}
                        {/* <div style={{ marginTop: '2rem', marginBottom: '10rem' }}>
                        <img src="/arrow.svg" alt="Arrow" style={{ width: '30px', marginBottom: '10rem', height: '30px' }} />
                    </div> */}
                    </div>
                </div>
            )}
            <CyberSecurityClub />
            <Footer />
        </>
    );
};

export default Home_Page;
