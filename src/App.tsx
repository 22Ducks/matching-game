import './App.css'
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

export default App
