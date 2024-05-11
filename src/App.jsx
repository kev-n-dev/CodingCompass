import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter
import './App.css';
import Navbar from './components/ui/TopNav';

function App() {
  return (
    
    <Router>
              <Navbar />

      <div className="App">
        {/* Add other components or routes here */}
      </div>
    </Router>
  );
}

export default App;
