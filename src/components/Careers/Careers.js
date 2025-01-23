import React, { useState, useRef } from "react";
import "./Careers.css";
import emailjs from "@emailjs/browser";
import CareersCard from "../CareersCard/CareersCard";
import CareersModal from "../CareersModal/CareersModal";
import Loader from "../Loader/Loader";
import AlertModal from "../AlertModal/AlertModal";

const Careers = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [position, setPosition] = useState("");
    const [showAlertModal, setShowAlertModal] = useState(false);
    const [alertModalMessage, setAlertModalMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const form = useRef();

    const vacancies = [
        {
            position: "MERN Stack Developer",
            experience: "2+ years",
            location: "Vytilla, Kochi",
            type: "Onsite",
            icon: "fas fa-code",
        },
        {
            position: "UI/UX Developer",
            experience: "2+ years",
            location: "Vytilla, Kochi",
            type: "Onsite",
            icon: "fas fa-paint-brush",
        },
        {
            position: "Software Tester",
            experience: "2+ years",
            location: "Vytilla, Kochi",
            type: "Onsite",
            icon: "fas fa-laptop",
        },
    ];

    const sendEmail = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            await emailjs.sendForm(
                "service_menhft9",
                "template_5qk2nz6",
                form.current,
                "OJYb3dLrdEjTQ1kRt"
            );

            setIsModalOpen(false);
            setAlertModalMessage("Applied Successfully");
            setShowAlertModal(true);
        } catch (error) {
            console.error("Error:", error.text);
            setAlertModalMessage("Please try again");
            setShowAlertModal(true);
        } finally {
            setLoading(false);
        }
    };

    const handleApplyClick = (position) => {
        setIsModalOpen(true);
        setPosition(position);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const closeAlertModal = () => {
        setShowAlertModal(false);
    };

    return (
        <>
            {loading ? (
                <Loader />
            ) : (
                <section id="careers" className="career-section">
                    <h2 className="career-heading">Careers</h2>
                    <p className="career-tagline">
                        Join our team and help shape the future of technology.
                    </p>
                    <div className="career-cards-container">
                        {vacancies.map((item, index) => (
                            <CareersCard
                                key={index}
                                handleApplyClick={handleApplyClick}
                                position={item.position}
                                experience={item.experience}
                                location={item.location}
                                type={item.type}
                                icon={item.icon}
                            />
                        ))}
                    </div>

                    {isModalOpen && (
                        <CareersModal
                            handleCloseModal={handleCloseModal}
                            sendEmail={sendEmail}
                            form={form}
                            position={position}
                        />
                    )}
                    {showAlertModal && (
                        <AlertModal
                            message={alertModalMessage}
                            onClose={closeAlertModal}
                        />
                    )}
                </section>
            )}
        </>
    );
};

export default Careers;
