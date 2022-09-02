import React , { useState }from 'react';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import FormGroup from '@mui/material/FormGroup';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import { createTheme,ThemeProvider  } from '@mui/material/styles';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Visibility from '@mui/icons-material/Visibility';
import ErrorContainer from './ErrorContainer';
import Logo from './Logo';
import Theme from './PortalTheme'
import { Box } from '@mui/system';

const LoginForm = ({
    errorMessage,
    username,
    password,
    isVisible,
    disableSubmit,
    onClickTogglePassword,
    onChangeUsername,
    onBlurEmail,
    onChangePassword,
    onSubmit,
    onClickForgotPassword,
    t
}) => {
    const theme = Theme;
    const [isUsernameSelected, selectUsernameField] = useState(false);
    const [isPasswordSelected, selectPasswordField] = useState(false);
    return (
        <ThemeProvider theme={theme}>
            <form
                id="form"
                noValidate
                autoComplete="off"
                className="form"
            >
                <FormGroup > 
                   
                     <Logo  width={170} height={65} />
                     <InputLabel   style={{
                         shrink:true,
                         fontSize: '14px',
      position: 'unset !important',
      color: 'rgba(255, 255, 255, 1) !important',
      paddingLeft: '23px',
      marginBottom: '-6px',
   }
  }>Email</InputLabel>
                    <TextField
                        id="input-username"
                        type="text"
                        name="username"
                        placeholder="you@example.com"
                        fullWidth
                        margin="normal"
                        
                        InputLabelProps={{ shrink: true }
                    }
                        InputProps={{
                           
                            style: {
                               
                                color: 'rgba(255, 255, 255, 1)',
                                height:'40px',
                                borderRadius: '19px',
                                backgroundColor: '#121212',
                                padding: '5px 0 5px 0',
                                textIndent: '15px !important',
                                marginLeft: '5px',
                                border: `1px solid ${theme.palette.inputBackgroundColor.main}`,
                                
                            },
                            
                        }}
                        value={username}
                        onChange={onChangeUsername}
                    />
                </FormGroup>
                <FormGroup>
                <InputLabel style={{
    shrink:true,
    fontSize: '14px',
    position: 'unset !important',
    color: 'rgba(255, 255, 255, 1) !important',
    paddingLeft: '23px',
    marginBottom: '-6px',
   }}>Password</InputLabel>
                    <TextField
                        id="input-password"
                        type= 'password'
                        name="password"
                        placeholder={'Your password'}
                        fullWidth
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                            style: {
                            '&::placeholder': {
                                textOverflow: 'ellipsis !important',
                                color: 'blue'
                              },
                            }
                        }}
                        
                        InputProps={{
                           
                            style: {
                                
                                color: 'rgba(255, 255, 255, 1)',
                                height:'40px',
                                borderRadius: '19px',
                                backgroundColor: '#121212',
                                padding: '5px 0 5px 0',
                                textIndent: '15px !important',
                                marginLeft: '5px',
                                border: `1px solid ${theme.palette.inputBackgroundColor.main}`,
                                
                            },
                            
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                        style={{
                                            color:
                                                theme.palette.inputFieldColor.main,
                                        }}
                                        aria-label={
                                            'visibility token'
                                        }
                                        onClick={onClickTogglePassword}
                                    >
                                       
                                       {isVisible ? (
                                        <VisibilityOff />
                                    ) : (
                                        <Visibility />
                                    )}
                                        
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                        value={password}
                        onChange={onChangePassword}
                    />
                </FormGroup>
                <FormGroup row style={{ justifyContent: 'flex-end' }}>
                    <Link
                        id="button-forgot-password"
                        className="dark-on-hover"
                        onClick={onClickForgotPassword}
                        
                    >
                        {'Forgot Password?'}
                    </Link>
                </FormGroup>
                <FormGroup row style={{ justifyContent: 'center' }}>
                <p
                    id="error-message"
                    style={{
                        width: '100%',
                        minHeight: '2rem',
                        marginBottom: '0',
                        color: theme.palette.error.main,
                        fontWeight: 'bold',
                        fontSize: '12px',
                        textAlign: 'center',
                    }}
                >
                     {errorMessage}
                </p>
            </FormGroup>
                <FormGroup row style={{ justifyContent: 'center' }}>
                    <Button
                        id="button-submit"
                        type="submit"
                        variant="contained"
                        color="primary"
                        onClick={onSubmit}
                        disabled={disableSubmit}
                    >
                         {'Log In'}
                    </Button>
                </FormGroup>
            </form>
       
        </ThemeProvider>
    );
};
export default LoginForm;
