// HomePage.js
// BlogsPage.js
import React from 'react';
import Blog from '../ui/blogs/Blog';

import getting_started_with_vite from '../assets/blog_entries/vite.md';
import post1Image from '../assets/images/blog_images/vite-bg.png';

import react2github from '../assets/blog_entries/github-pages-deploy.md';
import react2githubImg from '../assets/images/blog_images/reactDeploy.png';


import react_router from '../assets/blog_entries/routing.md';
import post3Image from '../assets/images/blog_images/router_path.png';
import ZoomOnScrollImage from '../ui/zoomScroll';
import compassPortalImage from '../assets/images/static/compass_portal.png';


import what_is_vue from '../assets/blog_entries/what_is_vue.md';
import vue_image from '../assets/images/blog_images/vue.jpg';

import vue_router from '../assets/blog_entries/vue_routing.md';

import state_management from  '../assets/blog_entries/state_management.md';
import ttt_image from '../assets/images/blog_images/ttt.png';


import react_blog from  '../assets/blog_entries/react.md';
import ttt_image from '../assets/images/blog_images/reactImg.jpeg';

const posts = [
  {
    file: state_management,
    title: "A Beginner's Guide to State Management",
    date: 'MAY 27',
    imageText: "state management",
    description: 'learn the basics of state management in go, by coding a simple game you can play with a friend',
    image: ttt_image,
    imageLabel: 'tic tac toe',
    linkText: 'Continue reading…',
    mainFeature: false,
    feature: true,
    tags: ['react', 'game', 'state management'],
  },
  {
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
    file: react2github,
    title: 'Free Hosting? Yes, Please!',
    date: 'Nov 11',
    imageText: "imageText",

    description:
      'Hosting fees got you down ? Deploy your Vite + React project to GitHub Pages effortlessly and FOR FREE with these steps. Get your project online for free and share it with the world!',
    image: react2githubImg,
    imageLabel: 'react deployed',
    linkText: 'Continue reading…',
    mainFeature: true,
    tags: ['react', 'github', 'vite', 'hosting'],

    feature: true,
  },
  {
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
const HomePage = () => {
  return (
    <>
      <ZoomOnScrollImage src={compassPortalImage} alt="learning portal" />

      <Blog
        posts={posts} />
    </>
  );
}

export default HomePage;