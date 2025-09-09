import { useState, createContext } from "react";
import { useParams } from "react-router-dom";
import { Title } from "./App";
import { Board } from "./Board";
import { CalculateCols } from "./CalculateCols";
import { Timer } from "./Timer";

type TimeContextType = {
  timer: number;
  setTimerVal: React.Dispatch<React.SetStateAction<number>>
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

export function Game() {
  const [timer, setTimerVal] = useState(0);
  const [timerState, setTimerState] = useState(true);

  const { numCards } = useParams();
  const numOfCards = Number(numCards) || 8;
  
  const [cols, rows] = CalculateCols(numOfCards);

  const timerValues = {
    timer,
    setTimerVal,
    timerState,
    setTimerState
  };

  return (
    <TimeContext.Provider value={timerValues}>
      <Title>Memory Match!</Title>

      <hr />
        <Timer />
      <hr />

      <Board numCards={numOfCards} rows={rows} cols={cols}/>
    </TimeContext.Provider>
  )
}