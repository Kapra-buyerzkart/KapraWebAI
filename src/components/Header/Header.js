import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../../assets/images/logo_new.png";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="header">
            <div className="header-container">
                <div className="logo-container">
                    <img src={logo} alt="Company Logo" className="logo" />
                    <span className="company-name">KAPRA WEB AI MAKERS</span>
                </div>
                <button className="menu-toggle" onClick={toggleMenu}>
                    ☰
                </button>
                <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
                    {/* <a href="#home" onClick={() => setMenuOpen(false)}>Home</a> */}
                    <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
                    <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
                    <a href="#careers" onClick={() => setMenuOpen(false)}>Careers</a>
                    <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
                </nav>
            </div>
        </header>
    );
};

export default Header;
