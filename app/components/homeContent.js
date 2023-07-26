import React from 'react';
import Footer from './footer';

const CyberSecurityClub = () => {
    return (
        <>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100vh',
                    textAlign: 'center',
                    fontFamily: 'Cascadia Code, monospace',
                    color: 'white',
                }}
            >
                <div style={{ marginBottom: '1rem', maxWidth: '800px' }}>
                    Join IIIT Kottayam's Cyber Security Club to explore cutting-edge technology and gain valuable cybersecurity knowledge and experience through training, workshops, and collaboration with fellow enthusiasts. All levels of expertise are welcome.
                </div>
                <button
                    style={{
                        backgroundColor: '#3ACD6B',
                        fontSize: 24,
                        marginTop: '50px',
                        marginBottom: '100px',
                        color: 'white',
                        padding: '1rem 2rem',
                        border: 'none',
                        borderRadius: '1rem',
                        boxShadow: '5px 5px 0 rgba(0, 0, 0, 0.2)',
                        cursor: 'pointer',
                        transition: 'transform 0.2s ease-in-out',
                    }}
                >
                    Join Now
                </button>
                <h1 style={{ fontSize: '2.5rem', marginTop: '2rem' }}>Who are we ?</h1>
                <p style={{ fontSize: '1.2rem', lineHeight: '1.5', maxWidth: '1100px', marginTop: '1rem' }}>
                    Cyber security is an ever evolving field that requires constant vigilance and education. The importance of having a cyber security club in education institutes cannot be overstated. It provides students with the opportunity to learn about the latest developments in cyber security, network with industry professionals, and participate in hands-on activities to gain real-world experience. Cyber security clubs also help build a sense of community among students, allowing them to collaborate on projects and share knowledge. By joining a cyber security club, students can become better prepared for their future careers in the field.
                </p>
            </div>

        </>
    );
};

export default CyberSecurityClub;
