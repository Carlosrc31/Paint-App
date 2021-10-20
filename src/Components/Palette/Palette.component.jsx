import React from "react";
import "./Palette.css";
import html2canvas from "html2canvas";



const colors = ['#000000', '#ffffff', '#ff7125', '#fffb1f', '#0084e9', '#153294', '#a2ebad', '#ffee97', '#9babfb', '#c50824' ];

function Palette(props){


    function handleClick(event){
        props.setSelectedColor(event.target.id);
    }

    function handleNewGame(){
        props.setCellsState(
            props.cellsState.map(element => {
               element.color = "#ffffff" 
              return element 
            })
          )  
    }

    function handlePaintAll(){
        props.setCellsState(
            props.cellsState.map(element => {
               element.color = props.selectedColor 
              return element 
            })
          )  
    }

    function handlePrint(){
        //Nos permite sacar la captura de pantalla y sobreescribir en el mismo lugar
        html2canvas(props.ss.current).then( canvas => {
            props.img.current.innerHTML = ""
            props.img.current.appendChild(canvas)})
    }


    return(
        <React.Fragment>
            <header className="header">
                <button type="button" onClick={handleNewGame} className="header_button newgame">New Game</button>
                <button type="button" onClick={handlePrint} className="header_button print">Print</button>
                <button type="button" onClick={handlePaintAll} className="header_button paintall">Paint All</button> 
                <p className="header_p">Choose a color to paint: </p>
                <ul className="header list">
                    {colors.map((color) => 
                    //estilo en linea para poder pintar el li con el mismo color y facilitar la lógica
                    <li 
                    className="list_item" 
                    key={color} 
                    onClick={handleClick}
                    id={color}
                    style={{
                        border: color === props.selectedColor ? `2px solid white` : "",
                        background: color,
                        boxShadow: color === props.selectedColor ? "3px 2px 10px black":""
                    }}
                    >
                    </li>
                    )}
                </ul>
            </header>
        </React.Fragment>
   );
}

export default Palette;