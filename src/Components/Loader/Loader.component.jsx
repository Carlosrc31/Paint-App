import React from "react";
import "./Loader.css"

function Loader(){
    return (
        <div className="loader">
            {/* <p className="loader_text">Loading Features...</p>
            <div className="cssload-container">
                <div className="loading6"></div>
            </div> */}
            <p className="loader_text">Loading Features...</p>
            <div className="lds-ring">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
}

export default Loader;