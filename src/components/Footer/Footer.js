import React from "react";
import "./Footer.css";
import { FaWhatsapp } from 'react-icons/fa'; // Importing WhatsApp icon

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                {/* Hidden WhatsApp Icon on the left */}
                {/* <div className="footer-socials hidden-icon">
                    <a href="https://wa.me/7994396662" target="_blank" rel="noreferrer">
                        <FaWhatsapp size={48} className="big-whatsapp-icon" />
                    </a>
                </div> */}
                <div className="footer-logo">
                    <h3>KAPRA WEB AI MAKERS PVT LTD</h3>
                    <p className="subsidiary-text">Subsidiary of Kapra Highness Ventures Pvt Ltd</p>
                </div>
                {/* <div className="footer-socials hidden-icon">
                    <a href="https://wa.me/7994396662" target="_blank" rel="noreferrer">
                        <FaWhatsapp size={48} className="big-whatsapp-icon" />
                    </a>
                </div> */}
            </div>
            <p>© 2026 KAPRA WEB AI MAKERS PVT LTD. All rights reserved.</p>
        </footer>
    );
};

export default Footer;
