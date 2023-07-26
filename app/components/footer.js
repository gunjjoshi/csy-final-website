// components/footer.js
import React from 'react';
import styles from '../page.module.css';
import { FaPhone, FaEnvelope, FaTwitter, FaInstagram, FaLinkedin, FaDiscord } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.contact}>
                <h3 className={styles.title}>Contact Us</h3>
                <div className={styles.contactInfo}>
                    <p><FaPhone className={styles.icon} /> +1 123 456 789</p>
                    <p><FaEnvelope className={styles.icon} /> info@example.com</p>
                </div>
            </div>
            <div className={styles.social}>
                <h3 className={styles.title}>Social Media</h3>
                <div className={styles.socialIcons}>
                    <a href="#"><FaTwitter className={styles.icon} /></a>
                    <a href="#"><FaInstagram className={styles.icon} /></a>
                    <a href="#"><FaLinkedin className={styles.icon} /></a>
                    <a href="#"><FaDiscord className={styles.icon} /></a>
                </div>
            </div>
            <div className={styles.madeWithLove}>
                Made with <span className={styles.heart}>&hearts;</span> by CyberSecurity Club
            </div>
        </footer>
    );
};

export default Footer;
