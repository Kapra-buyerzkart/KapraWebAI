import React from "react";
import "./CareersModal.css";

const CareersModal = (props) => {
    return (
        <div className="modal-overlay">
            <div className="modal">
                <button className="modal-close" onClick={props.handleCloseModal}>
                    &times;
                </button>
                <h3>Apply for MERN Stack Developer</h3>
                <form ref={props.form} onSubmit={props.sendEmail} className="application-form">
                    <label>
                        Name:
                        <input type="text" name="from_name" required />
                    </label>
                    <label>
                        Phone Number:
                        <input type="tel" name="from_phone" required />
                    </label>
                    <label>
                        Email:
                        <input type="email" name="from_email" required />
                    </label>
                    <label>
                        Applied Position:
                        <input type="text" name="from_job" value={props.position} readOnly />
                    </label>
                    {/* <label>
                    Upload Resume:
                    <input type="file" name="resume" accept=".pdf,.doc,.docx" required />
                </label> */}
                    <label>
                        Link to Resume:
                        <input type="text" name="from_resume" required />
                    </label>
                    <button type="submit" className="submit-button">
                        Submit
                    </button>
                </form>
            </div>
        </div>

    )
}

export default CareersModal;