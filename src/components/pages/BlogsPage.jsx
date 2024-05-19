// BlogsPage.js
import React from 'react';
import Blog from '../ui/blogs/Blog';

import post1 from '../assets/logs/vite.md';
import post2 from '../ui/blogs/blog-post.2.md';
import post3 from '../ui/blogs/blog-post.3.md';


const posts = [
    {
      file: post1,
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
      file: post2,
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
      file: post3,
      title: 'Post title2',
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


const BlogsPage = () => {
    return (
        <>
      <Blog
      posts={posts} />
      </>
     );
}

export default BlogsPage;