// src/components/Game.js
import React, { useState } from 'react';
import Board from './board';

function Game() {
    const [key, setKey] = useState(0);
    const [xWins, setXWins] = useState(0);
    const [oWins, setOWins] = useState(0);
  const handleReset = () => {
    setKey(prevKey => prevKey + 1);
  };

  const handleXWin = () => {
    setXWins(prevXWins => prevXWins + 1);
  };

  const handleOWin = () => {
    setOWins(prevOWins => prevOWins + 1);
  };
  return (
    <div className="game">
        <div className="xScore" >X Wins:< br/> {xWins}</div>

      <div className="game-board">
        <Board key={key} onReset={handleReset} onXWin={handleXWin} onOWin={handleOWin} />
      </div>
       <div className="oScore" >O Wins: < br/> {oWins}</div>
     </div>
  );
}

export default Game;
