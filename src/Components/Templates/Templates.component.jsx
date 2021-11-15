import React, {Fragment} from "react";
import "./Templates.css"

function Templates(props){

    //Variable para cambiar el color de la cara en caso de que se seleccione el blanco
    const changeColor = props.selectedColor === "#ffffff" ? "#000": "#fff";

    let arrayHappy = [22,23,26,27,32,33,36,37,51,58,61,62,67,68,72,73,74,75,76,77];
    function handleHappy(){
        props.setCellsState(
            props.cellsState.map(ele => {
                if (arrayHappy.includes(ele.id)) 
                    ele.color = changeColor;
                return ele;
            })
          )  
    }

    let arraySad = [22, 23, 26, 27, 32, 33, 36, 37, 62, 63, 64, 65, 66, 67, 71, 72, 77, 78, 81, 88]
    function handleSad(){
        const tearDropColor = "lightblue";

        props.setCellsState(props.cellsState.map(ele => {
            if (arraySad.includes(ele.id) )
                ele.color = changeColor 
            else if (ele.id === 42) 
                ele.color = tearDropColor;
            return ele;
            })
        )  
     
    }

    const arraySerious = [22, 23, 26, 27, 32, 33, 36, 37, 72, 73, 74, 75, 76, 77];
    function handleSerious(){
        props.setCellsState(
            props.cellsState.map(ele =>{
               if (arraySerious.includes(ele.id)) 
                    ele.color = changeColor;
                return ele;
            })
        )
    }

    if(props.isReady === "loading" || props.isReady === "idle"){
        return null
    }
    else if (props.isReady === "failed"){
        return null
    }
    else{  
        return (
            <Fragment>
                <div className="Container_buttons">
                    <button className="button Happy" onClick={handleHappy} > <i className="fas fa-smile"></i> </button>
                    <button className="button Sad" onClick={handleSad} > <i className="fas fa-sad-tear"> </i></button>
                    <button className="button Serious" onClick={handleSerious} > <i className="fas fa-meh"></i> </button>
                </div>
            </Fragment>
        )
    }
}

export default Templates;