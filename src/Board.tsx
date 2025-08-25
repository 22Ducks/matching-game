import styled from 'styled-components'
import { Card } from './Card';
import { GenerateCards } from './GenerateCards';

type Props = {
    numCards: number;
    rows: number;
    cols: number;
};

export const Board = ({numCards, rows, cols}: Props) => {
    const Board = styled.div `
    position: relative;
    margin: 0 auto;
    height: 50vh;
    width: ${10*cols}vw;
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    justify-content: space-evenly;
    row-gap: 10px;
    `;

    const cardImages = GenerateCards(numCards/2);

    const flippedArray: boolean[] = [];
    const cardArray: string[] = [];

    for (let i=0; i<numCards; i++) {
        flippedArray.push(true);
        cardArray.push(cardImages[i]);
    }

    return (
        <Board>
            {
                cardArray.map((card, index) => 
                    <Card rows={rows} cols={cols} flipped={flippedArray[index]} card={card} key={index}/>
                )
            }
        </Board>
    );
}