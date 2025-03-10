import Player from "./components/Player";
import GameBoard from "./components/GamBoard";
import { useState } from "react";

function App() {
  const [activePlayer, setActivePlayer] = useState("X");
  function handleSelectSquare()
  {
    setActivePlayer((currentplayer) => currentplayer === "X" ? "O" : "X");
  }
  return (
    <>
      <h1>React Tic-Tac-Toe</h1>
      <main>
        <div id="game-container">
          <ol id="players" className="highlight-player">
            <Player initialName="Player 1" symbol="X" isActive={activePlayer === "X"} />
            <Player initialName="Player 2" symbol="O" isActive={activePlayer === "O"} />
          </ol>
          <GameBoard squareSelected = {handleSelectSquare} activePlayerName={activePlayer} />
        </div>
      </main>
    </>
  )
}

export default App
