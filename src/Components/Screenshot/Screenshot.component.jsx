import React from "react";
import "./Screenshot.css";

function Screenshot(props){
   
    if(props.isReady === "loading" || props.isReady === "idle"){
        return null
    }
    else if (props.isReady === "failed"){
        return null
    }
    else{  
        return(
            //Pinta la empty state que aparece en la primera vez
            <div className="printArea">
                <i className="fa fa-hourglass-half"></i>
                <p className="printArea_text">There isn't any picture, you need to draw and give click on the print button</p>
                <div className="printArea_img" ref={props.img}> </div>
            </div>
        );
    }
}

export default Screenshot;