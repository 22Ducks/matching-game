import { Button } from "@mui/material";
import type { ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

type HomeProps = {
  numCards: number;
  setNumCards: (numCards: number) => void;
  cardSet: string;
  setCardSet: (cardSet: string) => void;
};

const setList = {
  "Color Set": "colorSet",
  "Deltarune Set": "deltaSet"
};

const OptionSelect = styled.div `
  margin-top: 5px;
  margin-bottom: 5px;
`;

const PreviewDiv = styled.div `
  height: 25vh;
`;

const PreviewImage = styled.img `
  max-width: 12.5%;
  max-height: 100%;
  margin: 2px;
`;

export function Home({ numCards, setNumCards, cardSet, setCardSet }: HomeProps) {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate(`/game/${numCards}/${cardSet}`);
  };

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setNumCards(Number(e.target.value));
  };

  const handleSetChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setCardSet(e.target.value);
  }

  const previewCards: string[] = [];

  for(let i=1; i<=8; i++) {
    previewCards.push("/" + cardSet + "/card" + i.toString() + ".png");
  }

  return (
    <>
      <hr />
      <OptionSelect>
        <label htmlFor="num-cards">Select number of cards: </label>
        <select id="num-cards" value={numCards} onChange={handleChange}>
          <option value="8">8</option>
          <option value="12">12</option>
          <option value="16">16</option>
        </select>
      </OptionSelect>

      <OptionSelect>
        <label htmlFor="set-cards">Select card set: </label>
        <select id="set-cards" value={cardSet} onChange={handleSetChange}>
        {Object.entries(setList).map(([cardSetName, cardSetValue]) =>
          <option value={cardSetValue} key={cardSetValue}>{cardSetName}</option>  
        )}
        </select>
      </OptionSelect>

      <p>-- Card Preview --</p>
      <PreviewDiv>
        {
          previewCards.map( (card, index) => 
            <PreviewImage key={index} src={card} />
          )
        }
      </PreviewDiv>

      <hr />

      <Button onClick={handleRedirect}>Start Game</Button>
    </>
  );
}