import { useState, createContext } from "react";
import { useParams } from "react-router-dom";
import { Board } from "./Board";
import { calculateCols } from "./calculateCols";
import { Timer } from "./Timer";
import { validateNumCards } from "./validateNumCards";

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
  const numOfCards = validateNumCards(numCards);
  
  const [cols, rows] = calculateCols(numOfCards);

  const timerValues = {
    timer,
    setTimerVal,
    timerState,
    setTimerState
  };

  return (
    <TimeContext.Provider value={timerValues}>
      
      <hr />
      <Timer />
      <hr />

      <Board numCards={numOfCards} rows={rows} cols={cols}/>
    </TimeContext.Provider>
  )
}