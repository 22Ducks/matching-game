import { useState } from 'react'
import './App.css'
import styled from 'styled-components'
import {Board} from './Board.tsx'
import { CalculateCols } from './CalculateCols.tsx';

function App() {

  const numCards = 16; //make way to set later

  const [cols, rows] = CalculateCols(numCards);

  return (
    <>
      <div>
        <h1>Memory Match!</h1>
      </div>

      <Board numCards={numCards} rows={rows} cols={cols}/>
    </>
  )
}

// TODO: extract to its own file

export default App
