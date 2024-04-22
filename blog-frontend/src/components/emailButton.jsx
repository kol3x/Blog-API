import React, { useState } from 'react';
import { IconButton, Tooltip } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';

const EmailIconButton = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("kolaegipet@gmail.com").then(() => {
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 1500);
    });
  };

  return (
    <Tooltip title={copied ? 'Copied!' : 'Click to copy my email address'} arrow>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label={`Email me at ${"kolaegipet@gmail.com"}, click to copy`}
        sx={{ mr: 2 }}
        onClick={handleCopyEmail}
      >
        <EmailIcon />
      </IconButton>
    </Tooltip>
  );
};

export default EmailIconButton;
