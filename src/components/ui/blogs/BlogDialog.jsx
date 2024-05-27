import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import MarkdownViewer from './makrdownViewer';

export default function ResponsiveDialog(props) {
  const [open, setOpen] = React.useState(false);
  const [markdownContent, setMarkdownContent] = React.useState('');
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleClickOpen = async () => {
    try {
      const response = await fetch(props.props.file);
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

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button variant="text" onClick={handleClickOpen}>
      {props.props.linkText}      </Button>
      <Dialog 
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        maxWidth="md"
              aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {props.props.title}
        </DialogTitle>
        <DialogContent>
        <MarkdownViewer   filePath={props.props.file}/>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
