import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import axios from 'axios';

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

function MarkdownRenderer({ file }) {
  const [markdownContent, setMarkdownContent] = useState('');

  useEffect(() => {
    const fetchMarkdownContent = async () => {
      try {
        const content = await readMarkdownFile(file);
        setMarkdownContent(content);
      } catch (error) {
        console.error('Error fetching markdown content:', error);
        setMarkdownContent(''); // Set empty content if error occurs
      }
    };

    fetchMarkdownContent();
  }, [file]);

  return (
    <div>
      <ReactMarkdown>{markdownContent}</ReactMarkdown>
    </div>
  );
}

export default MarkdownRenderer;
