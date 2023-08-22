// Popup.js

import React from 'react';
import './Popup.css'; // Import your CSS file for styling

const Popup = ({ message, onClose }) => {
    return (
        <div className="popup-container" style={{ fontFamily: 'Cascadia Code, monospace' }}>
            <div className="popup">
                <p className="popup-message">{message}</p>
                <button className="popup-close-button" onClick={onClose}>
                    Close
                </button>
            </div>
        </div>
    );
};

export default Popup;
