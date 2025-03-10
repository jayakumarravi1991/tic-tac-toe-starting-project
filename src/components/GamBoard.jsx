import { useState } from "react";

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
]

export default function GameBoard({squareSelected, activePlayerName})
{
    const [gameBoard, setGameBoard] = useState(initialGameBoard);
    function handleSelectSquare(rowIndex, colIndex)
    {
        setGameBoard((previousGameBoard) => 
        {
            const updatedGameBoard = [...previousGameBoard.map((innerArray) => [...innerArray])];
            updatedGameBoard[rowIndex][colIndex] = activePlayerName;
            return updatedGameBoard;
        });
        squareSelected();
    }
    return (
        <ol id="game-board">
        {gameBoard.map((row, rowIndex) => <li key={rowIndex}>
                <ol>
                    {row.map((playerSymbol, colIndex) => <li key={colIndex}><button onClick={() => handleSelectSquare(rowIndex, colIndex)}>{playerSymbol}</button></li>)}
                </ol>
            </li>)}
        </ol>
    );
}