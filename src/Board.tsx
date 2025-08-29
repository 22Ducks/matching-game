import styled from 'styled-components'
import { Card } from './Card';
import { GenerateCards } from './GenerateCards';
import { useEffect, useRef, useState } from 'react';
import { VictoryModal } from './VictoryModal';

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
    const [flippedArray, setFlippedArray] = useState<boolean[]>(new Array(numCards).fill(false));
    const [cardArray, setCardArray] = useState<string[]>(GenerateCards(numCards/2));

    const currentPair = useRef([-1, -1]);
    const timeoutId = useRef<number>(undefined);

    useEffect(() => {
        return () => {
            if(timeoutId.current !== undefined) {
                clearTimeout(timeoutId.current);
            }
        }
    }, []);

    const reset = () => {
        setCardArray(GenerateCards(numCards/2));
        setFlippedArray(new Array(numCards).fill(false));
    }
    
    const flipHandler = (idx: number) => {
        if((currentPair.current[1] < 0) && flippedArray[idx] === false) {
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
                const newArray = [...flippedArray];
                newArray[currentPair.current[0]] = false;
                newArray[currentPair.current[1]] = false;
                setFlippedArray(newArray);

                currentPair.current = [-1, -1];
            }, 1000);
        }
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
