import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import '../src/components/assets/css/base.scss';
import HomePage from './components/pages/HomePage';
import AboutPage from './components/pages/AboutPage';
import NotFoundPage from './components/pages/NotFoundPage';
import Navigation from './components/Navigation';
import AnimatedBg from './components/ui/Particles';
import Container from '@mui/material/Container';
 import TTT from './components/subProjects/tic-tac-toe/ttt';
import LinkedBlog from './components/ui/blogs/LinkedBlog';
 
import getting_started_with_vite from './components/assets/blog_entries/vite.md';
import post1Image from './components/assets/images/blog_images/vite-bg.png';

import react2github from './components/assets/blog_entries/github-pages-deploy.md';
import react2githubImg from './components/assets/images/blog_images/reactDeploy.png';


import react_router from './components/assets/blog_entries/routing.md';
import post3Image from './components/assets/images/blog_images/router_path.png';
import what_is_vue from './components/assets/blog_entries/what_is_vue.md';
import vue_image from './components/assets/images/blog_images/vue.jpg';

import vue_router from './components/assets/blog_entries/vue_routing.md';

import state_management from  './components/assets/blog_entries/state_management.md';
import ttt_image from './components/assets/images/blog_images/ttt.png';


import react_blog from  './components/assets/blog_entries/react.md';
import reactImg from './components/assets/images/blog_images/reactImg.jpeg';
function App() {



  const posts = [
    {
      id: 'b40a32f8-0164-4fc6-bb22-6c7a9c1eb7c1',
      file: state_management,
      title: "A Beginner's Guide to State Management",
      date: 'MAY 27',
      imageText: "state management",
      description: 'Learn the basics of state management in Go, by coding a simple game you can play with a friend.',
      image: ttt_image,
      imageLabel: 'tic tac toe',
      linkText: 'Continue reading…',
      mainFeature: false,
      feature: true,
      tags: ['react', 'game', 'state management'],
    },
    {
      id: '0f1f3d78-5eb3-4a78-90f3-9f7202f2e7c9',
      file: getting_started_with_vite,
      title: 'What is Vite?',
      date: 'MAY 19',
      description:
        'Unlock the full potential of your web development workflow by diving into Vite today. Begin your journey with a fast, efficient setup for React projects and experience the future of modern web development!',
      image: post1Image,
      imageText: "vite",
      imageLabel: 'vite logo',
      linkText: 'Continue reading…',
      mainFeature: false,
      tags: ['vite', 'react', 'vue'],
      feature: false,
    },
    {
      id: 'c8e2b8cd-4b97-4cc3-910d-98f265edf0ec',
      file: react2github,
      title: 'Free Hosting? Yes, Please!',
      date: 'Nov 11',
      imageText: "imageText",
      description:
        'Hosting fees got you down? Deploy your Vite + React project to GitHub Pages effortlessly and FOR FREE with these steps. Get your project online for free and share it with the world!',
      image: react2githubImg,
      imageLabel: 'react deployed',
      linkText: 'Continue reading…',
      mainFeature: true,
      tags: ['react', 'github', 'vite', 'hosting'],
      feature: true,
    },
    {
      id: 'e23d8f77-7b58-4e1c-a3a4-2ee0d65e7eab',
      file: react_router,
      title: 'React Hash Routing vs. Browser Routing',
      date: 'MAY 19',
      imageText: "react router",
      description:
        'Discover the nuances between Hash Routing and Browser Routing in React Router, uncovering their benefits and limitations, and understand why GitHub Pages favors Hash Routing. Make informed decisions about routing in your React applications for optimal performance and compatibility.',
      image: post3Image,
      imageLabel: 'react router',
      linkText: 'Continue reading…',
      mainFeature: false,
      feature: true,
      tags: ['deploy', 'github', 'react'],
    },
    {
      id: '7b1dbf2b-914d-4e9c-a4a6-769a6c0b932c',
      file: react_blog,
      title: 'Should You Learn and Choose React for Your Developer Career?',
      date: 'MAY 17',
      imageText: "react.js",
      description:
        'Discover why React.js stands out as a top choice for aspiring developers, exploring its benefits, alternatives, and career opportunities in the dynamic world of web development.',
      image: reactImg,
      imageLabel: 'react.js',
      linkText: 'Continue reading…',
      mainFeature: false,
      feature: true,
      tags: ['react'],
    },
    {
      id: 'b310cf52-4b9c-4bf2-b50b-9a5e0fa4f45c',
      file: vue_router,
      title: 'What is Vue Routing?',
      date: 'MAY 27',
      imageText: "vue routing",
      description: 'Enhance your Vue.js application with smooth, dynamic client-side navigation by installing Vue Router today!',
      image: vue_image,
      imageLabel: 'vue routing',
      linkText: 'Continue reading…',
      mainFeature: false,
      feature: true,
      tags: ['vue'],
    },
    {
      id: 'a12ff419-31d7-44e8-a9e7-3724b31b2e38',
      file: what_is_vue,
      title: 'What is Vue.js?',
      date: 'MAY 27',
      imageText: "vue.js",
      description: 'Learn how to quickly build dynamic user interfaces with Vue.js, a beginner-friendly JavaScript framework that combines the best of React and Angular, and follow our step-by-step guide to create your first Vue application today.',
      image: vue_image,
      imageLabel: 'vue.js',
      linkText: 'Continue reading…',
      mainFeature: false,
      feature: true,
      tags: ['vue'],
    },
  ];
  
   

  return (
    <>

      <AnimatedBg />

      <Router basename="/">
        <Container maxWidth="lg">

          <Navigation />

        </Container>
        <Routes>
          <Route path="/" element={<HomePage posts={posts}/>} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/ttt" element={<TTT />} />
          <Route path="/blog/:id" element={<LinkedBlog posts={posts} />} />
          <Route path="*" element={<NotFoundPage />} />

        </Routes>

      </Router>

    </>
  );
}

export default App;
