import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import '../src/components/assets/css/base.scss'
import HomePage from './components/pages/HomePage';
import BlogsPage from './components/pages/BlogsPage';
import AboutPage from './components/pages/AboutPage';
import Navigation from './components/Navigation';
import NotFoundPage from './components/pages/notFound';

function App() {
  return (


    <Router>
      <Navigation />
      <Routes>
        <Route path="/CodingCompass/" element={ <HomePage />}/>
        <Route path="/CodingCompass/#blogs" element={<BlogsPage />}/>
        <Route path="/CodingCompass/#about"element={<AboutPage />}/>
        <Route path="*" element={<NotFoundPage />} /> 
      </Routes>
    </Router>
  );
}

export default App;
