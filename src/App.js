import React, {useState, useRef} from 'react';
import './App.css';
import { Palette, Board, Templates, Screenshot } from "./Components";

function App() {

  const cells = [];
  for(let i = 0; i < 100; i++){
    cells.push({ id: i, color:'#ffffff' })}
  
  const [cellsState, setCellsState] = useState(cells);

  const ss = useRef();
  const img = useRef();

  const [selectedColor, setSelectedColor] = useState("#ffffff");
  
  //Se aplica DDAU para no mostrar los componentes hasta que se carguen los datos de la API
  const [isReady, setIsReady] = useState("idle");
  
  return (
    <div className="App">
      {/* Componente para seleccionar un color de la paleta */}
      <Palette 
      selectedColor={selectedColor} 
      setSelectedColor={setSelectedColor} 
      cellsState={cellsState} 
      setCellsState={setCellsState} 
      img={img} 
      ss={ss}
      isReady={isReady}
      setIsReady={setIsReady}
      />
      {/* Componente del tablero para pintar */}
      <Board cellsState={cellsState} setCellsState={setCellsState} selectedColor={selectedColor} ss={ss} isReady={isReady}/>
      {/* Componente para la impresión*/}
      <Screenshot img={img} isReady={isReady}/>
      {/* Componente para las plantillas */}
      <Templates selectedColor={selectedColor} cellsState={cellsState} setCellsState={setCellsState} isReady={isReady}/>
    </div>
  );

}

export default App;
