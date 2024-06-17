import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import MarkdownViewer from './makrdownViewer';
 
import { useNavigate } from 'react-router-dom';
import CopyToClipboardButton from '../CopyToClipboardButton';



const ResponsiveDialog = ({ post, is_link }) => {

const id = post.id
 

const buildLink = (id) => {
  let base = `${window.location.origin}${window.location.pathname}`;
  if (!base.endsWith('/')) {
    base += '/';
  }
  if (!base.endsWith('#/')) {
    base += '#/';
  }
  return `${base}blog/${id}`;
};

  const [open, setOpen] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const [textToCopy, setTextToCopy] = useState(buildLink(id));
 
   
  const [markdownContent, setMarkdownContent] = useState('');
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
   

  const navi = useNavigate()
  const handleClose = () => {
    setOpen(false);
  };

  const handleCloseAndRedirect = () => {
    handleClose(); // Close the dialog or perform any other close-related actions
    if (is_link) {
         navi('/'); // This will navigate to the root URL of your application
    }
    // Redirect to home page
  };
 

  useEffect(() => {
    if (is_link) {
      setOpen(true); // Open the dialog automatically if is_link is true
    }
  }, [is_link]);

  const handleClickOpen = async () => {
    try {
      const response = await fetch(post.file);
      const contentType = response.headers.get("content-type");
      
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      if (!contentType || !contentType.includes("text/markdown")) {
        throw new Error('Fetched file is not a markdown file');
      }

      const text = await response.text();
      setMarkdownContent(text);
      setOpen(true);
    } catch (error) {
      console.error('Error fetching markdown file:', error);
      setMarkdownContent('Failed to load content.');
      setOpen(true);
    }
  };

  

  return (
    <React.Fragment>

      {!is_link && (
        <Button variant="text" onClick={handleClickOpen}>
          {post.linkText}
        </Button>
      )}

<CopyToClipboardButton text={textToCopy} />



             
      <Dialog 
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        maxWidth="md"
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {post.title} 
           
            <Button className="closeBtn" onClick={handleCloseAndRedirect} autoFocus>
              Close
            </Button>
          
        </DialogTitle>
        <DialogContent>
          <MarkdownViewer filePath={post.file} />
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
};

export default ResponsiveDialog;
