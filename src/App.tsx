import { styled } from 'styled-components';
import './App.css'
import { CalculateCols } from './CalculateCols.tsx';
import { useState, type ChangeEvent } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import { Game } from './Game.tsx';
import { Home } from './Home.tsx';

export const Title = styled.h1 `
  margin-top: 0;
  margin-bottom: 0;
`;

function App() {
  const [numCards, setNumCards] = useState(8); //make way to set later

  const [cols, rows] = CalculateCols(numCards);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home numCards={numCards} setNumCards={setNumCards}/>} />
        <Route path="/game/:numCards" element={<Game numCards={numCards} rows={rows} cols={cols}/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
