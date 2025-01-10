import React from "react";
import "./Services.css";

const Services = () => {
    return (
        <section id="services" className="services">
            <h2>Our Services</h2>
            <div className="service-cards">
                <div className="card">
                    <i className="fas fa-laptop-code"></i>
                    <h3>Web Development</h3>
                    <p>Creating modern, responsive, and scalable websites.</p>
                </div>
                <div className="card">
                    <i className="fas fa-mobile"></i>
                    <h3>Mobile App Development</h3>
                    <p>Seamless cloud integration for better performance.</p>
                </div>
                <div className="card">
                    <i className="fas fa-brain"></i>
                    <h3>AI Solutions</h3>
                    <p>Empowering your business with AI-driven tools.</p>
                </div>
            </div>
        </section>
    );
};

export default Services;
