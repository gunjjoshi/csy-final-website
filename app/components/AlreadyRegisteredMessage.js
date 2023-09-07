import React, { useState } from 'react';
import './Popup.css'

const AlreadyRegisteredMessage = ({ onClose }) => {
    const handleClose = () => {
        onClose();
    };

    return (
        <div className="glassmorphism-message">
            <h2>You Have Already Registered!</h2>
            <button className="close-button" onClick={handleClose}>Close</button>

        </div>
    );
};

export default AlreadyRegisteredMessage;
