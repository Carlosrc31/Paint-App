import React from "react";
import "./Error.css";

function Error(){
    return (
        <div className="error">
            <p className="error_text">Something was wrong...</p>
            <i className="fas fa-ghost"></i>
        </div>
    );
}

export default Error;