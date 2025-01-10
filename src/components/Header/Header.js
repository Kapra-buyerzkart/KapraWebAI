import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../../assets/images/logo_new.png";

const Header = () => {
    return (
        <header className="header">
            <div className="header-container">
                <div className="logo-container">
                    <img src={logo} alt="Company Logo" className="logo" />
                    <span className="company-name">KAPRA WEB AI MAKERS</span>
                </div>
                <nav className="nav-links">
                    <a href="#home">Home</a>
                    <a href="#services">Services</a>
                    <a href="#about">About</a>
                    <a href="#careers">Careers</a>
                    <a href="#contact">Contact</a>
                </nav>
            </div>
        </header>
    );
};

export default Header;
