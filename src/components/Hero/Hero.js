import React from "react";
import "./Hero.css";
import heroImage from "../../assets/images/banner.png"; // Import your hero image

const Hero = () => {
    return (
        <section id="home" className="hero" style={{ backgroundImage: `url(${heroImage})` }}>
            <div className="hero-content">
                <h1>Welcome to KAPRA WEB AI MAKERS</h1>
                <p>Innovative IT solutions tailored for your business needs.</p>
                {/* <a href="/contact" className="btn">Get Started</a> */}
            </div>
        </section>
    );
};

export default Hero;
