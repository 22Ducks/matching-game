import { styled } from 'styled-components';
import './App.css'
import {Board} from './Board.tsx'
import { CalculateCols } from './CalculateCols.tsx';
import { useState, createContext, useContext, useEffect, type ChangeEvent } from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';

type TimeContextType = {
  timer: number;
  setTimerVal: (timer: number) => void;
  timerState: boolean;
  setTimerState: (timerState: boolean) => void;
}
const initialTimeContext: TimeContextType = {
  timer: 0,
  setTimerVal: () => {},
  timerState: true,
  setTimerState: () => {}
}

type HomeProps = {
    setTimerState: (timerState: boolean) => void;
    setTimerVal: (timer: number) => void;
    numCards: number;
    setNumCards: (numCards: number) => void;
};

type GameProps = {
    numCards: number;
    rows: number;
    cols: number;
    setTimerState: (timerState: boolean) => void;
};

export const TimeContext = createContext<TimeContextType>(initialTimeContext);

const Title = styled.h1 `
  margin-top: 0;
  margin-bottom: 0;
`;

const TimerStyle = styled.h4 `
  margin-top: 5px;
  margin-bottom: 5px;
`;

function Home({ setTimerState, setTimerVal, numCards, setNumCards }: HomeProps) {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate("/game");
  };

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setNumCards(Number(e.target.value));
  };

  setTimerState(false);
  setTimerVal(0);

  return (
    <>
      <div>
        <Title>Memory Match!</Title>
      </div>

      <div>
        <label htmlFor="my-dropdown">Choose an option:</label>
        <select id="my-dropdown" value={numCards} onChange={handleChange}>
          <option value="8">8</option>
          <option value="12">12</option>
          <option value="16">16</option>
        </select>
      </div>

      <Button onClick={handleRedirect}>Start Game</Button>
    </>
  );
}

function Game({ numCards, rows, cols}: GameProps) {
  const {timer} = useContext(TimeContext);

  return (
    <>
      <div>
        <Title>Memory Match!</Title>
      </div>

      <hr />
      <TimerStyle>{timer}</TimerStyle>
      <hr />

      <Board numCards={numCards} rows={rows} cols={cols}/>
    </>
  )
}

function App() {

  const [timer, setTimerVal] = useState(0);
  const [timerState, setTimerState] = useState(false);
  const [numCards, setNumCards] = useState(8); //make way to set later

  const timerValues = {
    timer,
    setTimerVal,
    timerState,
    setTimerState
  };

  const [cols, rows] = CalculateCols(numCards);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if(timerState){
        setTimerVal(prevTimer => prevTimer+1);
      }
      console.log(timer, timerState);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <BrowserRouter>
      <TimeContext.Provider value={timerValues}>
        <Routes>
          <Route path="/" element={<Home setTimerState={setTimerState} setTimerVal={setTimerVal} numCards={numCards} setNumCards={setNumCards}/>} />
          <Route path="/game" element={<Game numCards={numCards} rows={rows} cols={cols} setTimerState={setTimerState} />} />
        </Routes>
      </TimeContext.Provider>
    </BrowserRouter>
  )
}

export default App
