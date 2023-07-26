import React from 'react';
import { FaPhone, FaEnvelope, FaTwitter, FaInstagram, FaLinkedin, FaDiscord } from 'react-icons/fa';

const Footer = () => {
    const footerStyle = {
        fontFamily: 'Cascadia Code, monospace',
        display: 'flex',
        justifyContent: 'space-between', // Align sections to left and right
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        color: 'white',
        padding: '20px',
        minHeight: '210px',
        position: 'relative',
        flexDirection: 'row', // Set flexDirection to row for large screens
        gap: '10px', // Add gap to separate sections
        flexWrap: 'wrap' // Allow flex items to wrap to the next line if needed
    };

    const contactStyle = {
        textAlign: 'center',
        flexGrow: '1' // Allow contact section to grow and take available space
    };

    const socialStyle = {
        textAlign: 'center',
        flexGrow: '1' // Allow social media section to grow and take available space
    };

    const madeWithLoveStyle = {
        fontFamily: 'Cascadia Code, monospace',
        color: 'white',
        textAlign: 'center',
        marginTop: '20px',
        fontSize: '14px',
        position: 'absolute', // Position the "Made with Love" part absolutely
        bottom: '10px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '100%' // Set width to 100% to center the content
    };

    return (
        <footer style={footerStyle}>
            <div style={contactStyle}>
                <h3 style={{ color: 'white', fontSize: '25px', marginBottom: '10px' }}>Contact Us</h3>
                <div>
                    <p><FaPhone style={{ marginRight: '5px', fontSize: '24px', color: 'white' }} /> +91-0482-2202189</p>
                    <p><FaEnvelope style={{ marginRight: '5px', fontSize: '24px', color: 'white' }} /> csyclub@iiitkottayam.ac.in</p>
                </div>
            </div>
            <div style={socialStyle}>
                <h3 style={{ color: 'white', fontSize: '25px', marginBottom: '10px' }}>Social Media</h3>
                <div style={{ marginBottom: '30px' }}>
                    <a href="#"><FaTwitter style={{ marginRight: '5px', fontSize: '24px', color: 'white' }} /></a>
                    <a href="#"><FaInstagram style={{ marginRight: '5px', fontSize: '24px', color: 'white' }} /></a>
                    <a href="#"><FaLinkedin style={{ marginRight: '5px', fontSize: '24px', color: 'white' }} /></a>
                    <a href="#"><FaDiscord style={{ marginRight: '5px', fontSize: '24px', color: 'white' }} /></a>
                </div>
            </div>
            <div style={madeWithLoveStyle}>
                Made with <span style={{ color: 'red', fontSize: '27px', width: '20px' }}>&hearts;</span> by CyberSecurity Club
            </div>
        </footer>
    );
};

export default Footer;
