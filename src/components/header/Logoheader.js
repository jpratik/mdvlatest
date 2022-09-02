import React from 'react';
import { createTheme,ThemeProvider  } from '@mui/material/styles';
import MDVLogo from '../../asset/MDVLogo.svg';
const theme = createTheme();
const Logo = () => {
    
    return (
        <ThemeProvider theme={theme}>
       <div style={{
            paddingTop: '12px',
        }}>
            <div
                style={{
                   
                    width: '255px',
                    height: '59px',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    backgroundImage: `url(${MDVLogo})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'contain',
                }}
            />
        </div>
        </ThemeProvider>
    );
};

export default  Logo;