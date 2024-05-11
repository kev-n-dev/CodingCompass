// Navbar.js
import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import BlogsPage from '../pages/BlogsPage';
import AboutPage from '../pages/AboutPage';
import './TopNav.css'; // Import CSS file for styling
const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/CodingCompass" className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                    <Link to="/blogs" className="nav-link">Blogs</Link>
                </li>
                <li className="nav-item">
                    <Link to="/about" className="nav-link">About</Link>
                </li>
            </ul>
            <Routes>
                <Route path="/CodingCompass" element={<HomePage />} />
                <Route path="/blogs" element={<BlogsPage />} />
                <Route path="/about" element={<AboutPage />} />
            </Routes>
        </nav>
    );
}

export default Navbar;