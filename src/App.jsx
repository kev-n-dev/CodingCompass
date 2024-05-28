import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import '../src/components/assets/css/base.scss';
import HomePage from './components/pages/HomePage';
import AboutPage from './components/pages/AboutPage';
import Navigation from './components/Navigation';
import NotFoundPage from './components/pages/notFound';
import AnimatedBg from './components/ui/Particles';
import Container from '@mui/material/Container';
import { Padding } from '@mui/icons-material';
import TTT from './components/subProjects/tic-tac-toe/ttt';

function App() {
  return (
    <>

      <AnimatedBg />

      <Router>
        <Container maxWidth="lg">

          <Navigation />

        </Container>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/ttt" element={<TTT />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>

      </Router>

    </>
  );
}

export default App;
