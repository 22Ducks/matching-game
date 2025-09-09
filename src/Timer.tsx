import { useContext, useEffect } from "react";
import { TimeContext } from "./Game";
import { styled } from "styled-components";

const TimerStyle = styled.h4 `
  margin-top: 5px;
  margin-bottom: 5px;
`;

export const Timer = () => {
    const {timer, setTimerVal, timerState} = useContext(TimeContext);

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
        <TimerStyle>{timer}</TimerStyle>
      );
}