import { styled } from "styled-components";

type Props = {
    rows: number;
    cols: number;
    flipped: boolean;
    card: string;
    flipCard: () => void;
};

type CardDivProps = {
    rows: number;
    cols: number;
}

const CardDiv = styled.div<CardDivProps>`
    max-height: ${({rows}) => 100/rows}%;
    max-width: ${({cols}) => 100/cols}%
`;

const CardImage = styled.img `
    max-height: 100%;
    object-fit: contain;
`;

export const Card = ({rows, cols, flipped, card, flipCard}: Props) => {
    const back = "/card back red.png";
    return (
        <CardDiv data-testid="card" rows={rows} cols={cols} onClick={flipCard}>
            <CardImage data-testid="cardImage" src={flipped ? card : back}/>
        </CardDiv>
    );
}