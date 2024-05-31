# Level Up Your React Skills: State Management with Tic-Tac-Toe

Understanding state management in React is essential for creating dynamic and interactive web applications. In this guide, we'll delve into various state management techniques by building a classic Tic-Tac-Toe game.


## What is state?

![whiteboard](./blog_images/ttt/tttboard.png)

Imagine your application as a whiteboard. The state is like the notes, drawings, and marks on that whiteboard. For instance, think of a game of tic-tac-toe drawn on the whiteboard. When you make a move and update the X's and O's, the appearance of the whiteboard changes. Similarly, when the state of a component changes, React updates the UI to reflect those changes.

## What is State Management?
State management is about controlling the data in an application and making sure it updates correctly on the screen. In React, you can manage state within individual components or across the whole app. This ensures that when the data changes, the user interface updates automatically to reflect those changes.

In React, there are several ways to manage state. These can be categorized into `local state management` and `global state management`.  

### Local State Management
Local state is confined to a single component. It's useful for managing data that doesn't need to be shared with other components.

#### Example: Using the `useState` Hook
```jsx
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default Counter;
```
In this example, `count` is a piece of local state managed by the `Counter` component using the `useState` hook. The `setCount` function updates the state, and React re-renders the component to reflect the new count.

### Global State Management
Global state is shared across multiple components. It's useful for data that needs to be accessed and updated by different parts of the application.

#### Example: Using react's Context API
```jsx
import React, { createContext, useContext, useState } from 'react';

// Create a Context for the global state
const GlobalStateContext = createContext();

function App() {
  const [user, setUser] = useState({ name: 'John Doe' });

  return (
    <GlobalStateContext.Provider value={{ user, setUser }}>
      <UserProfile />
      <UpdateUser />
    </GlobalStateContext.Provider>
  );
}

function UserProfile() {
  const { user } = useContext(GlobalStateContext);
  return <p>User: {user.name}</p>;
}

function UpdateUser() {
  const { setUser } = useContext(GlobalStateContext);
  return (
    <button onClick={() => setUser({ name: 'Jane Smith' })}>
      Update User
    </button>
  );
}

export default App;
```
In this example, the `GlobalStateContext` is used to share the `user` state and `setUser` function across the `UserProfile` and `UpdateUser` components. This allows both components to access and update the same piece of state.

### Third-Party State Management Libraries
For more complex state management needs, you can use third-party libraries like Redux or Zustand.

#### Example: Using Redux
```jsx
import React from 'react';
import { createStore } from 'redux';
import { Provider, useSelector, useDispatch } from 'react-redux';

// Define initial state and reducer
const initialState = { count: 0 };

function counterReducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    default:
      return state;
  }
}

// Create Redux store
const store = createStore(counterReducer);

function Counter() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
    </div>
  );
}

function App() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}

export default App;
```
In this Redux example, a global state is managed using a Redux store. The `Counter` component uses `useSelector` to access the state and `useDispatch` to dispatch actions to update the state.

Each of these methods serves different purposes and can be chosen based on the complexity and needs of your application.

## Building the Tic-Tac-Toe Game
Creating a Tic-Tac-Toe game in React is an excellent way to grasp state management basics, event handling, and component-based architecture


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


1. **State Initialization**: Using the `useState` hook to initialize state for tracking the game's progress.

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

### 1. State Initialization

State initialization is done using the `useState` hook, which is essential for tracking the game's progress.

```jsx
import React, { useState } from 'react';

function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
}
```

- `const [squares, setSquares] = useState(Array(9).fill(null));`
  - Initializes a state variable `squares` to keep track of the board's state, with an array of 9 elements, all set to `null` initially.
- `const [xIsNext, setXIsNext] = useState(true);`
  - Initializes a state variable `xIsNext` to keep track of whose turn it is, starting with `true` to indicate 'X' goes first.

### 2. State Updates

State updates occur within the `handleClick` function to reflect player moves and switch turns.

```javascript
const handleClick = (i) => {
  const newSquares = squares.slice();
  if (calculateWinner(newSquares) || newSquares[i]) {
    return;
  }
  newSquares[i] = xIsNext ? 'X' : 'O';
  setSquares(newSquares);
  setXIsNext(!xIsNext);
};
```

- `const newSquares = squares.slice();`
  - Creates a copy of the current `squares` array.
- `if (calculateWinner(newSquares) || newSquares[i]) { return; }`
  - Prevents further moves if there is already a winner or the square is already filled.
- `newSquares[i] = xIsNext ? 'X' : 'O';`
  - Updates the copied array with the current player's move.
- `setSquares(newSquares);`
  - Updates the state with the new board configuration.
- `setXIsNext(!xIsNext);`
  - Switches the turn to the other player.

### 3. Conditional Rendering

Conditional rendering is used to display different UI elements based on the game state, such as the winner or the next player's turn.

```javascript
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
```

- `const winner = calculateWinner(squares);`
  - Determines if there is a winner.
- `if (winner) { status = 'Winner: ' + winner; } else { status = 'Next player: ' + (xIsNext ? 'X' : 'O'); }`
  - Sets the status message based on whether there is a winner or not.
- `<div className="status">{status}</div>`
  - Conditionally renders the status message in the UI.

### 4. Component Interaction

Passing state and event handlers down to child components, such as the `Square` component.

```javascript
const renderSquare = (i) => {
  return <Square value={squares[i]} onClick={() => handleClick(i)} />;
};

return (
  <div>
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
```

- `const renderSquare = (i) => { return <Square value={squares[i]} onClick={() => handleClick(i)} />; }`
  - Defines a function to render each `Square` component, passing down the `value` from the `squares` state and the `onClick` handler.
- `onClick={() => handleClick(i)}`
  - Passes a function that calls `handleClick` with the index `i` to the `Square` component.

- `Square` component receives `value` and `onClick` as props and renders a button.
- The button's `onClick` event is set to the `onClick` handler passed down from the `Board`.

## Learning Through Building
This project introduces key state management concepts in React, such as state initialization, updates, conditional rendering, and component interaction. By working through it, you'll gain practical experience in managing state effectively and structuring components for clarity and maintainability.

Happy coding! [Check out the live demo of Tic-Tac-Toe here](./#/ttt)


