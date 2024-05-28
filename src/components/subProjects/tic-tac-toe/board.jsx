// src/components/Board.js
import React, { useState, useEffect } from 'react';
import Square from './square';

function Board({ onReset, onXWin, onOWin }) {
    const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [gameOver, setGameOver] = useState(false);



  useEffect(() => {
    const winner = calculateWinner(squares);
    if (winner) {
      if (!gameOver) {
        if (winner === 'X') {
          onXWin();
        } else if (winner === 'O') {
          onOWin();
        }
        setGameOver(true); // Set gameOver to true when there's a winner
      }
    }
  }, [squares, onXWin, onOWin, gameOver]);



  const handleClick = (i) => {
    const newSquares = squares.slice();
    if (calculateWinner(newSquares) || newSquares[i]) {
      return;
    }
    newSquares[i] = xIsNext ? 'X' : 'O';
    setSquares(newSquares);
    setXIsNext(!xIsNext);
  };

  const renderSquare = (i) => {
    return <Square value={squares[i]} onClick={() => handleClick(i)} />;
  };




  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    if (winner == "x") {
        setXwins()
    }
    status =  winner+ ' Wins!';
  } else {
    status = 'Your move ' + (xIsNext ? 'X' : 'O');
  }


  const handleReset = () => {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
    setGameOver(false);
    onReset(); // Ensure the reset callback is called to reset the game key
  };


  return (
    <div>
      <div className="status">{status}</div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
      <button className="reset-button" onClick={handleReset}>StartOver</button>
    </div>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default Board;
