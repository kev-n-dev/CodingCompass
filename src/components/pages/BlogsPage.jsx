// BlogsPage.js
import React from 'react';
import IconSideNav from '../ui/navigation/SideNavBar';
import Blog from '../ui/blogs/Blog';

const BlogsPage = () => {
    return (
        <div>
            <IconSideNav></IconSideNav>

            <Blog title={"test"} author={"kevin"} content={"loren epsum"}></Blog>
         </div>
    );
}

export default BlogsPage;