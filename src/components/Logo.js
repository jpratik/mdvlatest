import React from 'react';
import { createTheme,ThemeProvider  } from '@mui/material/styles';
import MDVLogo from '../asset/MDVLogo.svg';
const theme = createTheme();
const Logo = () => {
    
    return (
        <ThemeProvider theme={theme}>
        <div style={{
            paddingBottom: '54px',
        }}>
            <div
                style={{
                    width: '200px',
                    height: '49px',
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