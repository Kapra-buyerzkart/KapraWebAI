import React from "react";
import "./Home.css";
import Hero from "../../components/Hero/Hero";
import About from "../../components/About/About";
import Contact from "../../components/Contact/Contact";
import Services from "../../components/Services/Services";
import Careers from "../../components/Careers/Careers";

const Home = () => {
    return (
        <div className="home">
            <Hero />
            <Services />
            <About />
            <Careers />
            <Contact />
            
            {/* WhatsApp Icon */}
            <a
                href="https://wa.me/7994396662" // Replace with your WhatsApp number
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-icon"
            >
                <i className="fab fa-whatsapp"></i>
            </a>
        </div>
    );
};

export default Home;
