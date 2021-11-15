import React, { useEffect, useState } from "react";
import "./Palette.css";
import html2canvas from "html2canvas";
import axios from "axios";
import { Loader, Error } from "..";

function Palette(props){

    //Para guardar los colores
    const [colors, setColors] = useState([]);
    
    
    //Llamar a la API y guardarlo en el arreglo colors, sólo la primera vez; cuando se montan los componentes
    const paletaColores = async () =>{
        try {
            props.setIsReady("loading");
            //Llamar a la API
            const response = await axios.get('https://www.colr.org/json/colors/random/10');
            //Guardar en una los valores en una variable auxiliar
            const aux = response.data.matching_colors;
            //Hacer otro arreglo con los mismo valores pero agregando el carácter # para hacerlo color
            const aux2 = aux.map((value)=>{
                return "#"+value; 
            })
            //Función depuradora: la API en algunas veces contiene índices sin un color, así que esta función los elimina del arreglo
            const aux3 = aux2.filter(element => {
                return element !== "#";
            });   
            //Asignar el arreglo colors a la variable auxiliar
            setColors(aux3);
            props.setIsReady("ready");

        } catch (error) {
            console.log(error);
           props.setIsReady("failed")
        }
    };


    useEffect(() => {
        paletaColores();
        //eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

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

    //Si está cargando la API debe mostrar un componente de carga
    if(props.isReady === "loading" || props.isReady === "idle"){
        return <Loader/>;
    }
    //Carga un componete de error en caso de que algo falle
    else if (props.isReady === "failed"){
        return <Error/>;
    }
    //Si no hay problemas se cargan los componentes
    else{        
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
                             outline: "0.02px solid black",
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
}

export default Palette;