"use client"
import styles from '../page.module.css';
import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaDiscord } from 'react-icons/fa';

const Navbar = () => {
    return (
        <div>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" />
            <link href="https://fonts.cdnfonts.com/css/cascadia-code" rel="stylesheet" />

            <nav class="navbar navbar-expand-lg bg-body-tertiary fixed-top" style={{ fontFamily: 'Cascadia Code, monospace' }}>
                <div class="container">
                    <div className={styles.navLogo}>
                        <img
                            src="CSC_Logo_Dark_name (1).svg"
                            alt="Logo"
                            width="70"
                            height="70"
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
                        <button type="button" className={`btn btn-success ${styles.customButton}`}>
                            Sign In
                        </button>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;