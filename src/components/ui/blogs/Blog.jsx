import React from 'react';

const Blog = ({ title, author, content }) => {
  return (
    <div className="blog">
      <h2 className="blog-title">{title}</h2>
      <p className="blog-author">By {author}</p>
      <div className="blog-content">
        {content}
      </div>
    </div>
  );
}

export default Blog;