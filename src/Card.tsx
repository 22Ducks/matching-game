import { styled } from "styled-components";

type Props = {
    rows: number;
    cols: number;
    flipped: boolean;
    card: string;
    key: number;
};

export const Card = ({rows, cols, flipped, card, key}: Props) => {
    const back = "/card back red.png";
    
    const Card = styled.div `
    max-height: ${100/rows}%;
    max-width: ${100/cols}%
    `;

    const CardImage = styled.img `
    max-height: 100%;
    object-fit: contain;
    `;

    return (
        <Card key={key}>
            <CardImage src={flipped ? card : back}/>
        </Card>
    );
}