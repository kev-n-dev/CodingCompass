// HomePage.js
// BlogsPage.js
import React from 'react';
import Blog from '../ui/blogs/Blog';

import getting_started_with_vite from '../assets/blog_entries/vite.md';
import post1Image  from  '../assets/images/vite/vite-bg.png';

import react2github from '../assets/blog_entries/github-pages-deploy.md';
import react2githubImg  from  '../assets/images/blog_images/reactDeploy.png';


import react_router from '../assets/blog_entries/routing.md';
import post3Image  from  '../assets/images/blog_images/router_path.png';

 
const posts = [
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
      tags: ['vite','react','vue'],
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
      tags: ['react','github','vite','hosting'],

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
      tags: ['deploy','github','react'],

    },
     
   ];
const HomePage = () => {
    return (
        <>
      <Blog
      posts={posts} />
      </>
    );
}

export default HomePage;