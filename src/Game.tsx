import { useState, useEffect, createContext } from "react";
import { useParams } from "react-router-dom";
import { Title } from "./App";
import { Board } from "./Board";
import { styled } from "styled-components";

type GameProps = {
    rows: number;
    cols: number;
};

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

export const TimeContext = createContext<TimeContextType>(initialTimeContext);

const TimerStyle = styled.h4 `
  margin-top: 5px;
  margin-bottom: 5px;
`;

export function Game({ rows, cols }: GameProps) {
  const [timer, setTimerVal] = useState(0);
  const [timerState, setTimerState] = useState(true);

  const { numCards } = useParams();
  const numOfCards = Number(numCards) || 8;

  const timerValues = {
    timer,
    setTimerVal,
    timerState,
    setTimerState
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      if(timerState){
        setTimerVal(prevTimer => prevTimer+1);
      }
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [timerState]);

  return (
    <TimeContext.Provider value={timerValues}>
      <div>
        <Title>Memory Match!</Title>
      </div>

      <hr />
      <TimerStyle>{timer}</TimerStyle>
      <hr />

      <Board numCards={numOfCards} rows={rows} cols={cols}/>
    </TimeContext.Provider>
  )
}