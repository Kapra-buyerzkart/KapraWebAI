import React from "react";
import "./Loader.css";
import { ClipLoader } from "react-spinners";

const Loader = () => {

    return (
        <div className="loader-container">
            <ClipLoader color="#fb8500" size={50} />
        </div>)
}

export default Loader;