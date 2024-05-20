import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from './FeaturedPost';
import Footer from '../Footer';
 import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
 import Typography from '@mui/material/Typography';
 
 import Menu from '@mui/material/Menu';

const sections = [
  { title: 'React', tag: 'react' },
  { title: 'GoLang', tag: 'go' },
  { title: 'Vue', tag: 'vue' },
  { title: 'Python', tag: 'python' },
  { title: 'Terraform', tag: 'terraform' },
];

const sidebar = {
  title: 'About',
  description:
    'Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.',
  archives: [
    { title: 'March 2020', url: '#' },
    { title: 'February 2020', url: '#' },
    { title: 'January 2020', url: '#' },
    { title: 'November 1999', url: '#' },
    { title: 'October 1999', url: '#' },
    { title: 'September 1999', url: '#' },
    { title: 'August 1999', url: '#' },
    { title: 'July 1999', url: '#' },
    { title: 'June 1999', url: '#' },
    { title: 'May 1999', url: '#' },
    { title: 'April 1999', url: '#' },
  ],
  social: [
    { name: 'GitHub', icon: GitHubIcon },
    { name: 'X', icon: XIcon },
    { name: 'Facebook', icon: FacebookIcon },
  ],
};

// Create a theme for the blog
const theme = createTheme();

export default function Blog({ posts }) {
  const [selectedTag, setSelectedTag] = React.useState(null);

  // Function to filter posts based on the selected tag
  const filterPostsByTag = (tag) => {
    setSelectedTag((prevTag) => (prevTag === tag ? null : tag));
  };

  // Filter posts based on the selected tag
  const filteredPosts = selectedTag
    ? posts.filter((post) => post.tags.includes(selectedTag))
    : posts;

  console.log(filteredPosts)

  // Scroll to the filtered posts section
  React.useEffect(() => {
    const filteredPostsSection = document.getElementById('filteredPosts');
    if (filteredPostsSection) {
      window.scrollTo({
        top: filteredPostsSection.offsetTop,
        behavior: 'smooth',
      });
    }
  }, [selectedTag]);

  return (
        <Container className='blogspage' maxWidth="lg">
        <AppBar className="filterbar" position="sticky" >
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="/CodingCompass/"
                sx={{
                  mr: 2,
                  display: { xs: 'none', md: 'flex' },
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: 'inherit',
                  textDecoration: 'none',
                }}
              >
                filters
              </Typography>


              <Typography
                variant="h5"
                noWrap
                component="a"
                href="#app-bar-with-responsive-menu"
                sx={{
                  mr: 2,
                  display: { xs: 'flex', md: 'none' },
                  flexGrow: 1,
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: 'inherit',
                  textDecoration: 'none',
                }}
              >              </Typography>
         
              <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                {sections.map((section, index) => (
                  <button
                    key={index}
                    onClick={() => filterPostsByTag(section.tag)}
                  >
                    {section.title}
                  </button>

                ))}
              </Box>


            </Toolbar>
          </Container>
        </AppBar>





        {/* Main Featured Post */}
        <MainFeaturedPost post={posts.find((post) => post.mainFeature)} />
 

        {/* Filtered Posts */}
        <hr />
        <div id="filteredPosts">
          <Grid container spacing={4}>
            {filteredPosts.map((post, index) => (
              <FeaturedPost key={index} post={post} />
            ))}
          </Grid>
        </div>

        {/* Footer */}
        <Footer
          title=""
          description=""
        />
      </Container>
   );
}
