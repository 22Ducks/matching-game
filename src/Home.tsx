import { Button } from "@mui/material";
import type { ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import { Title } from "./App";

type HomeProps = {
    numCards: number;
    setNumCards: (numCards: number) => void;
};

export function Home({ numCards, setNumCards }: HomeProps) {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate(`/game/${numCards}`);
  };

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setNumCards(Number(e.target.value));
  };

  return (
    <>
      <div>
        <Title>Memory Match!</Title>
      </div>

      <div>
        <label htmlFor="my-dropdown">Choose an option:</label>
        <select id="my-dropdown" value={numCards} onChange={handleChange}>
          <option value="8">8</option>
          <option value="12">12</option>
          <option value="16">16</option>
        </select>
      </div>

      <Button onClick={handleRedirect}>Start Game</Button>
    </>
  );
}