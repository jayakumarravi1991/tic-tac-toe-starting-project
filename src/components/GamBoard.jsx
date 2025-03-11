export default function GameBoard({squareSelected, board})
{
/*     const [gameBoard, setGameBoard] = useState(initialGameBoard);
    function handleSelectSquare(rowIndex, colIndex)
    {
        setGameBoard((previousGameBoard) => 
        {
            const updatedGameBoard = [...previousGameBoard.map((innerArray) => [...innerArray])];
            updatedGameBoard[rowIndex][colIndex] = activePlayerName;
            return updatedGameBoard;
        });
        squareSelected();
    } */

    return (
        <ol id="game-board">
        {board.map((row, rowIndex) => <li key={rowIndex}>
                <ol>
                    {row.map((playerSymbol, colIndex) => <li key={colIndex}><button onClick={() => squareSelected(rowIndex, colIndex)} disabled={playerSymbol !==null }>{playerSymbol}</button></li>)}
                </ol>
            </li>)}
        </ol>
    );
}