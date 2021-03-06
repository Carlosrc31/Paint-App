import React, {useState} from "react";
import "./Board.css";

function Board(props){
    
    const [mouseDown, setMouseDown] = useState(false);

    //Llenar determinado cuadro con el color seleccionado
    function handleDiv(event){
        props.setCellsState(
            props.cellsState.map(element => {
              if(element.id === Number(event.target.id)) 
                 element.color = props.selectedColor
              return element
            })
        )    
    }

    //Funciones para poder colorear arrrastrando el mouse
    function handleOver(event){
       if (mouseDown) 
       return handleDiv(event); 
    }

    function handleDown(event){
        setMouseDown(true)
       handleDiv(event);
    }

    function handleUp(){
        setMouseDown(false)
    }
    if(props.isReady === "loading" || props.isReady === "idle"){
        return null
    }
    else if (props.isReady === "failed"){
        return null
    }
    else{  
        return (
            <React.Fragment>
                <div className="square" ref={props.ss} >
                    {props.cellsState.map((ele) => 
                    {
                        return (
                            <div
                            className="square_item"
                            id = {ele.id}
                            key = {ele.id}
                            onClick={handleDiv}
                            onMouseOver = {handleOver}
                            onMouseDown = {handleDown}
                            onMouseUp = {handleUp}
                            style={{
                                backgroundColor: ele.color,
                                }}
                            >
                            </div>
                        )}
                    )}

                </div>
            </React.Fragment>
        );
    }
}

export default Board;