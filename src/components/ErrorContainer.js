import React from 'react';
import { createTheme  } from '@mui/material';

const ErrorContainer = ({ children, theme }) => (
    <div
        style={{
            borderLeft: `1px solid ${theme.palette.errorBackgroundGradient.leftBorder}`,
            background: `linear-gradient(to right, ${theme.palette.errorBackgroundGradient.left}, ${theme.palette.errorBackgroundGradient.right})`,
            color: theme.palette.error.main,
            padding: '0px 16px 0px 16px',
        }}
    >
        {children}
    </div>
);

export default createTheme (ErrorContainer);
