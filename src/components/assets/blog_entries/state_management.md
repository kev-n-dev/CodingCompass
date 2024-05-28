
# Building a Tic-Tac-Toe Game with React: A Beginner's Guide to State Management

![npm create vite@latest](./blog_images/ttt/ttt.png)

Creating a Tic-Tac-Toe game in React is an excellent way to learn the basics of state management, event handling, and component-based architecture. In this tutorial, we'll walk through the process of building a Tic-Tac-Toe game from scratch and explain the key concepts of state management in React.

## Setting Up Your React App

First, let's set up a new React application using Create React App. Open your terminal and run the following commands:

```bash
npx create-react-app tic-tac-toe
cd tic-tac-toe
npm start
```

This will create a new React application and start the development server.

## Creating Components

We'll break down the Tic-Tac-Toe game into three main components:
1. `Square`: Represents a single square on the board.
2. `Board`: Manages the state of the squares and renders the grid.
3. `Game`: Handles the game logic and manages the state of the game.

### 1. Square Component

Create a `Square` component that represents each square in the Tic-Tac-Toe board.

```jsx
// src/components/Square.js
import React from 'react';

function Square({ value, onClick }) {
  return (
    <button className="square" onClick={onClick}>
      {value}
    </button>
  );
}

export default Square;
```

### 2. Board Component

Create a `Board` component that maintains the state of all squares and renders them.

```jsx
// src/components/Board.js
import React, { useState } from 'react';
import Square from './Square';

function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

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
    status = 'Winner: ' + winner;
  } else {
    status = 'Next player: ' + (xIsNext ? 'X' : 'O');
  }

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
```

### 3. Game Component

Create a `Game` component that will render the `Board` component and manage the game's state.

```jsx
// src/components/Game.js
import React from 'react';
import Board from './Board';

function Game() {
  return (
    <div className="game">
      <div className="game-board">
        <Board />
      </div>
      <div className="game-info">
        {/* Additional game info can be added here */}
      </div>
    </div>
  );
}

export default Game;
```

## Integrating and Styling Components

Now, integrate these components in your main `App` component and add some basic styling.

### App Component

```jsx
// src/App.js
import React from 'react';
import './App.css';
import Game from './components/Game';

function App() {
  return (
    <div className="App">
      <Game />
    </div>
  );
}

export default App;
```

### App CSS

Add some basic styles to make the game look good.

```css
/* src/App.css */
.App {
  text-align: center;
}

.game {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.board-row {
  display: flex;
}

.square {
  width: 60px;
  height: 60px;
  background: #fff;
  border: 1px solid #999;
  font-size: 24px;
  font-weight: bold;
  cursor: pointer;
  outline: none;
}

.square:focus {
  background: #ddd;
}

.status {
  margin-bottom: 10px;
  font-size: 20px;
}
```

## Running Your App

Run your application using `npm start` and you should see your Tic-Tac-Toe game in action!

## What This Teaches About State Management

Building this Tic-Tac-Toe game introduces several key concepts of state management in React:

1. **State Initialization**: Using the `useState` hook to initialize state for tracking the game's progress.
2. **State Updates**: Managing state updates to reflect player moves and switching turns.
3. **Conditional Rendering**: Using state to conditionally render UI elements, such as displaying the winner or the next player's turn.
4. **Component Interaction**: Passing state and event handlers down to child components (e.g., passing `onClick` handler to `Square`).

By working through this project, you gain a practical understanding of how to manage state in a React application and how to structure your components for clarity and maintainability.

Happy coding!

[Tic-Tac-Toe LiveDemo](./#/ttt)


