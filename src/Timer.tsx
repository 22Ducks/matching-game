import { useContext, useEffect } from "react";
import { TimeContext } from "./Game";
import { styled } from "styled-components";
import { formatTime } from "./formatTime";

const TimerStyle = styled.h4 `
  margin-top: 5px;
  margin-bottom: 5px;
`;

export const Timer = () => {
    const {timer, setTimerVal, timerState} = useContext(TimeContext);

    const [mins, secs] = formatTime(timer);
    const clock = String(mins) + ":" + String(secs).padStart(2, "0");

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
        <TimerStyle>{clock}</TimerStyle>
      );
}