import styled from 'styled-components'
import { Card } from './Card';
import { generateCards } from './generateCards';
import { useContext, useEffect, useRef, useState } from 'react';
import { VictoryModal } from './VictoryModal';
import { TimeContext } from './Game';
import { useParams } from 'react-router-dom';


type Props = {
    numCards: number;
    rows: number;
    cols: number;
};

type BoardContainerProps = {
    cols: number;
};

const BoardContainer = styled.div<BoardContainerProps> `
    position: relative;
    margin: 0 auto;
    height: 50vh;
    width: ${({cols}) => 10*cols}vw;
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    justify-content: space-evenly;
    row-gap: 10px;
`;

export const Board = ({numCards, rows, cols}: Props) => {
    const { cardSet } = useParams();
    const usedCardSet = cardSet || "colorSet";
    const [flippedArray, setFlippedArray] = useState<boolean[]>(new Array(numCards).fill(false));
    const [cardArray, setCardArray] = useState<string[]>(generateCards(numCards/2, usedCardSet));

    const currentPair = useRef([-1, -1]);
    const timeoutId = useRef<number>(undefined);

    const {setTimerVal, setTimerState} = useContext(TimeContext);

    useEffect(() => {
        return () => {
            if(timeoutId.current !== undefined) {
                clearTimeout(timeoutId.current);
            }
        }
    }, []);

    useEffect(() => {
        if(flippedArray.every((value) => value)) {
            setTimerState(false);
        }
    }, [flippedArray])

    const reset = () => {
        setCardArray(generateCards(numCards/2, usedCardSet));
        setFlippedArray(new Array(numCards).fill(false));
        setTimerVal(0);
        setTimerState(true);
    }
    
    const flipHandler = (idx: number) => {
        if (currentPair.current[1] >=0 || flippedArray[idx] === true) {
            return;
        }
        const newArray = [...flippedArray];
        newArray.splice(idx, 1, true);
        setFlippedArray(newArray);
        if(currentPair.current[0] < 0) {
            currentPair.current[0] = idx;
            return;
        }
        currentPair.current[1] = idx;
        if(cardArray[currentPair.current[0]] === cardArray[currentPair.current[1]]) {
            currentPair.current = [-1, -1];
            return;
        }
        timeoutId.current = setTimeout(() => {
            const captureCurrent = currentPair.current;
            setFlippedArray(currArray => {
                const newArray = [...currArray];
                newArray[captureCurrent[0]] = false;
                newArray[captureCurrent[1]] = false;
                return newArray;
            });

            currentPair.current = [-1, -1];
        }, 1000);
    }

    return (
        <>
            <VictoryModal open={flippedArray.every((value) => value)} reset={reset}/>
            <BoardContainer cols={cols}>
                {
                    cardArray.map((card, index) => 
                        <Card key={index} rows={rows} cols={cols} flipped={flippedArray[index]} card={card} flipCard={() => flipHandler(index)}/>
                    )
                }
            </BoardContainer>
        </>
    );
}
