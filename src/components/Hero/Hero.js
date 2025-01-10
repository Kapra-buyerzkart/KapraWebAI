import React from "react";
import "./Hero.css";
import heroImage from "../../assets/images/banner.png"; // Import your hero image

const Hero = () => {
    return (
        <section id="home" className="hero" style={{ backgroundImage: `url(${heroImage})` }}>
            <div className="hero-content">
                <h1>
                    <span>Innovate</span>
                    <span>Accelerate</span>
                    <span>Dominate</span>
                </h1>
            </div>
        </section>
    );
};

export default Hero;
