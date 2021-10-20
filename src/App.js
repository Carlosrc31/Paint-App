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
  
  return (
    <div className="App">
      {/* Componente para seleccionar un color de la paleta */}
      <Palette selectedColor={selectedColor} setSelectedColor={setSelectedColor} cellsState={cellsState} setCellsState={setCellsState} img={img} ss={ss}/>
      {/* Componente del tablero para pintar */}
      <Board cellsState={cellsState} setCellsState={setCellsState} selectedColor={selectedColor} ss={ss} />
      {/* Componente para la impresión*/}
      <Screenshot img={img}/>
      {/* Componente para las plantillas */}
      <Templates selectedColor={selectedColor} cellsState={cellsState} setCellsState={setCellsState}/>
    </div>
  );
}

export default App;
