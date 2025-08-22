import { useState } from 'react'
import './App.css'
import styled from 'styled-components'
import {Board} from './Board.tsx'

function App() {

  const numCards = 24; //make way to set later

  const [cols, rows] = calculateCols(numCards);

  return (
    <>
      <div>
        <h1>Memory Match!</h1>
      </div>

      <Board numCards={numCards} rows={rows} cols={cols}/>
    </>
  )
}

function calculateCols(num: number) {
  let c=Math.ceil(Math.sqrt(num));
  while(num%c !== 0) {
    c--;
  }
  return  Math.max(c, num/c) === c ? [c, num/c] : [num/c, c];
}

export default App
