import { styled } from 'styled-components';
import './App.css'
import { useState } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
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
    <HashRouter>
      <Title>Memory Match!</Title>
      <Routes>
        <Route path="/" element={<Home numCards={numCards} setNumCards={setNumCards} cardSet={cardSet} setCardSet={setCardSet}/>} />
        <Route path="/game/:numCards/:cardSet" element={<Game/>} />
      </Routes>
    </HashRouter>
  )
}

export default App
