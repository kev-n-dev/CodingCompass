import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkHtml from 'remark-html';

export default function MarkdownViewer({ filePath }) {
  const [markdownContent, setMarkdownContent] = useState('');

  useEffect(() => {
    const fetchMarkdown = async () => {
      try {
        const response = await fetch(filePath);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const text = await response.text();
        setMarkdownContent(text);
      } catch (error) {
        console.error('Error fetching markdown file:', error);
        setMarkdownContent('Failed to load content.');
      }
    };

    fetchMarkdown();
  }, [filePath]);

  return (
    <div>
      <ReactMarkdown className='blogContainer' remarkPlugins={[remarkGfm, remarkHtml]}>
        {markdownContent}
      </ReactMarkdown>
    </div>
  );
}
