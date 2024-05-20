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

export default function ResponsiveDialog(props) {
  const { post } = props;

  const [open, setOpen] = React.useState(false);
  const [markdownContent, setMarkdownContent] = React.useState('');
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleClickOpen = async () => {
    try {
      const response = await fetch('/markdown/sample.md'); // Ensure the path is correct based on your project structure
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const text = await response.text();
      setMarkdownContent(text);
      setOpen(true);
    } catch (error) {
      console.error('Error fetching markdown file:', error);
      // Handle error (e.g., display a notification or a placeholder text)
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
        Continue reading?
      </Button>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {"Markdown Content"}
        </DialogTitle>
        <DialogContent>
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {post}
          </ReactMarkdown>
        </DialogContent>
        <DialogActions>
          <Button variant='text' autoFocus onClick={handleClose}>
            Disagree
          </Button>
          <Button onClick={handleClose} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
