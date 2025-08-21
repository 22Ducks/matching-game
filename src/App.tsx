import { useState } from 'react'
import './App.css'
import styled from 'styled-components'

function App() {

  const numCards = 6; //make way to set later

  const [cols, rows] = calculateCols(numCards);

  const Board = styled.div `
  position: relative;
  margin: 0 auto;
  height: 50vh;
  width: 50vh;
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

  return (
    <>
      <div>
        <h1>Memory Match!</h1>
      </div>

      <Board>
        <Card>
          <CardImage src="/card back red.png"/>
        </Card>
        <Card>
          <CardImage src="/card back red.png"/>
        </Card>
        <Card>
          <CardImage src="/card back red.png"/>
        </Card>
        <Card>
          <CardImage src="/card back red.png"/>
        </Card>
        <Card>
          <CardImage src="/card back red.png"/>
        </Card>
        <Card>
          <CardImage src="/card back red.png"/>
        </Card>
      </Board>
    </>
  )
}

function calculateCols(num: number) {
  let c=Math.ceil(Math.sqrt(num));
  while(num%c !== 0) {
    c--;
  }
  return  [c, num/c];
}

export default App
