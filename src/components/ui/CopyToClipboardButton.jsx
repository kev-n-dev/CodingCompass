import React, { useState } from 'react';
import PropTypes from 'prop-types';
  import { IoShareSocialOutline } from "react-icons/io5";

const CopyToClipboardButton = ({ text }) => {
  const [isCopied, setIsCopied] = useState(false);
  const copyToClipboard = async (event) => {
    event.preventDefault(); // Prevent default action
    try {
      await navigator.clipboard.writeText(text);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000); // Reset the copied state after 2 seconds
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <div>
       <button onClick={copyToClipboard}  >
      <IoShareSocialOutline />
      </button>
      {isCopied && <span style={{ marginLeft: '0.5rem', color: 'green' }}>Copied!</span>}
    </div>
  );
};

CopyToClipboardButton.propTypes = {
  text: PropTypes.string.isRequired
};

export default CopyToClipboardButton;
