import React from "react";
import "./CareersCard.css";

const CareersCard = (props) => {

    return (
        <div className="career-card">
            <i className={props.icon}></i>
            <h3 className="career-title">{props.position}</h3>
            <p className="career-detail">Experience: {props.experience}</p>
            <p className="career-detail">Location: {props.location}</p>
            <p className="career-detail">Type: {props.type}</p>
            <button className="career-apply-button" onClick={() => {
                props.handleApplyClick(props.position)
            }}>
                Apply Now
            </button>
        </div>
    )
}

export default CareersCard;