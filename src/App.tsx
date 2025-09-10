import { styled } from 'styled-components';
import './App.css'
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Game } from './Game.tsx';
import { Home } from './Home.tsx';

const Title = styled.h1 `
  margin-top: 0;
  margin-bottom: 0;
`;

function App() {
  const [numCards, setNumCards] = useState(8);
  const [cardSet, setCardSet] = useState("colorSet");

  return (
    <BrowserRouter>
      <Title>Memory Match!</Title>
      <Routes>
        <Route path="/" element={<Home numCards={numCards} setNumCards={setNumCards} cardSet={cardSet} setCardSet={setCardSet}/>} />
        <Route path="/game/:numCards/:cardSet" element={<Game/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
