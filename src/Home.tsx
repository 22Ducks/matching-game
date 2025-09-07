import { Button } from "@mui/material";
import type { ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import { Title } from "./App";

type HomeProps = {
    numCards: number;
    setNumCards: (numCards: number) => void;
    cardSet: string;
    setCardSet: (cardSet: string) => void;
};

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

  const setList = {
    "Color Set": "colorSet",
    "Deltarune Set": "deltaSet"
  };

  return (
    <>
      <div>
        <Title>Memory Match!</Title>
      </div>

      <div>
        <label htmlFor="num-cards">Select number of cards:</label>
        <select id="num-cards" value={numCards} onChange={handleChange}>
          <option value="8">8</option>
          <option value="12">12</option>
          <option value="16">16</option>
        </select>
      </div>

      <div>
        <label htmlFor="set-cards">Select card set:</label>
        <select id="set-cards" value={cardSet} onChange={handleSetChange}>
        {Object.entries(setList).map(([setName, setValue]) =>
          <option value={setValue}>{setName}</option>  
        )}
        </select>
      </div>

      <Button onClick={handleRedirect}>Start Game</Button>
    </>
  );
}