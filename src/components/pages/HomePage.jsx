// HomePage.js
// BlogsPage.js
import React from 'react';
import Blog from '../ui/blogs/Blog';


import ZoomOnScrollImage from '../ui/zoomScroll';
import compassPortalImage from '../assets/images/static/compass_portal.png';


const HomePage = ({ posts }) => {
  return (
    <>
      <ZoomOnScrollImage src={compassPortalImage} alt="learning portal" />

      <Blog
        posts={posts} />
    </>
  );
}

export default HomePage;