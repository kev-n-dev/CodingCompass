import React from 'react';
import { useParams } from 'react-router-dom';
import ResponsiveDialog from './BlogDialog';


 
const LinkedBlog = ({ posts }) => {
 
  const { id } = useParams(); // Extracts the 'id' parameter from the URL
  const post = posts.find(post => post.id === id);
  if (!post) {
    return <div>Post not found!</div>;
  }
  const isLink = true

  return       <ResponsiveDialog  post={post} is_link={isLink} />;

};

export default LinkedBlog;
