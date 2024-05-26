import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import '../src/components/assets/css/base.scss';
import HomePage from './components/pages/HomePage';
import AboutPage from './components/pages/AboutPage';
import Navigation from './components/Navigation';
import NotFoundPage from './components/pages/notFound';
import AnimatedBg from './components/ui/Particles';
import ZoomOnScrollImage from './components/ui/zoomScroll';

function App() {
  return (
    <>
          
           <AnimatedBg />

          <Router>
          <Navigation />

            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>

          </Router>
           
      </>
  );
}

export default App;
