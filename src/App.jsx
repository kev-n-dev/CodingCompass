import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter
import './App.css';
import Navbar from './components/ui/navigation/TopNav';
import Blog from './components/ui/blogs/Blog';
import { Link, Routes, Route } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import BlogsPage from './components/pages/BlogsPage';
import AboutPage from './components/pages/AboutPage';
import post1 from './components/ui/blogs/blog-post.1.md';
import post2 from './components/ui/blogs/blog-post.2.md';
import post3 from './components/ui/blogs/blog-post.3.md';
function App() {
 
  
  
  const posts = [
    {
      file: './components/ui/blogs/blog-post.1.md',
      title: 'Featured post',
      date: 'Nov 12',
      description:
        'This is a wider card with supporting text below as a natural lead-in to additional content.',
      image: 'https://source.unsplash.com/random?wallpapers',
      imageText: "imageText",
      imageLabel: 'Image Text',
      linkText: 'Continue reading…',
      mainFeature: true,
      feature: false,
    }, {
      file: './components/ui/blogs/blog-post.2.md',
      title: 'Post title',
      date: 'Nov 11',
      imageText: "imageText",

      description:
        'This is a wider card with supporting text below as a natural lead-in to additional content.',
      image: 'https://source.unsplash.com/random?wallpapers',
      imageLabel: 'Image Text',
      linkText: 'Continue reading…',
      mainFeature: false,
      feature: true,
    },
    {
      file: './components/ui/blogs/blog-post.2.md',
      title: 'Post title',
      date: 'Nov 11',
      imageText: "imageText",

      description:
        'This is a wider card with supporting text below as a natural lead-in to additional content.',
      image: 'https://source.unsplash.com/random?wallpapers',
      imageLabel: 'Image Text',
      linkText: 'Continue reading…',
      mainFeature: false,
      feature: true,
    },
    {
      file: './components/ui/blogs/blog-post.3.md',
      title: 'Another post',
      date: 'Nov 10',
      imageText: "imageText",

      description:
        'This is a wider card with supporting text below as a natural lead-in to additional content.',
      image: 'https://source.unsplash.com/random?wallpapers',
      imageLabel: 'Image Text',
      linkText: 'Continue reading…',
      mainFeature: false,
      feature: false,
    },
   ];
  
   return (
    <>
      <Router>

        <Routes>
          <Route path="/CodingCompass" element={<HomePage />} />
          <Route path="/blogs" element={<BlogsPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>

      </Router>
      <Blog 
          posts={posts} />


    </>

  );
}

export default App;
