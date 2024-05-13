import * as React from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';
 
// Function to read a single markdown file
async function readMarkdownFile(file) {
  try {
    const response = await axios.get(file);
    return response.data;
  } catch (error) {
    console.error('Error reading markdown file:', error);
    throw error; // Rethrow the error to handle it outside this function
  }
}

function Main(props) {
  const { posts, title } = props;
  const [markdownContents, setMarkdownContents] = React.useState([]);

  React.useEffect(() => {
    const fetchMarkdownContents = async () => {
      try {
        const contents = await Promise.all(
          posts.map(async (post) => {
            try {
              const postContent = await readMarkdownFile(post.file);
              return postContent;
            } catch (error) {
              console.error(`Error fetching post from ${post.file}:`, error);
              return ''; // Return empty string if error occurs
            }
          })
        );
        setMarkdownContents(contents);
      } catch (error) {
        console.error('Error fetching markdown contents:', error);
        // Handle the error here or throw it to be handled outside this component
      }
    };

    fetchMarkdownContents();
  }, [posts]);

  return (
    <Grid
      item
      xs={12}
      md={8}
      sx={{
        '& .markdown': {
          py: 3,
        },
      }}
    >
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      <Divider />
      {markdownContents.map((content, index) => (
         <ReactMarkdown           
         children={content}
         key={index}>
         </ReactMarkdown>
       ))}
    </Grid>
  );
}

Main.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      file: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      imageLabel: PropTypes.string.isRequired,
      linkText: PropTypes.string.isRequired,
      mainFeature: PropTypes.bool.isRequired,
      feature: PropTypes.bool.isRequired,
    })
  ).isRequired,
  title: PropTypes.string.isRequired,
};

export default Main;
