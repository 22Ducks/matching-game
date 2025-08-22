import styled from 'styled-components'

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
    `;

    const Card = styled.div `
    max-height: ${100/rows}%;
    max-width: ${100/cols}%
    `;

    const CardImage = styled.img `
    max-height: 100%;
    object-fit: contain;
    `;

    const cardArray: string[] = [];

    for (let i=0; i<numCards; i++) {
        cardArray.push("card" + i.toString());
    }

    return (
        <Board>
            {
                cardArray.map(() => 
                    <Card>
                        <CardImage src="/card back red.png"/>
                    </Card>
                )
            }
        </Board>
    );
}