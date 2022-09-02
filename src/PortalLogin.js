import React from 'react';
import { createTheme  } from '@mui/material/styles';
import BrivoLogo from './components/Logo';
import Grid from '@mui/material/Grid';
import LoginForm from './components/LoginForm.js';
import ForgotPasswordForm from './PortalForgotPasswordForm';

const PortalLogin = ({
    showForgotPasswordForm,
    errorMessage,
    successMessage,
    email,
    disableForgotPasswordSubmit,
    username,
    password,
    showPassword,
    disableSubmit,
    onChangeEmail,
    onForgotPasswordSubmit,
    onClickTogglePassword,
    onChangeUsername,
    onBlurEmail,
    onChangePassword,
    onLoginSubmit,
    onClickForgotPassword,
    
}) => {

    return (
        <div>
            <Grid
                container
                spacing={2}
            alignContent="center"
            alignItems="center"
            justify="center"
            >
                <Grid
                    item
                    xs={12}
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                    }}
                >
                   
                   {showForgotPasswordForm ? (
                    <ForgotPasswordForm
                        errorMessage={errorMessage}
                        successMessage={successMessage}
                        email={email}
                        disableForgotPasswordSubmit={disableForgotPasswordSubmit}
                        onChangeEmail={onChangeEmail}
                        onSubmit={onForgotPasswordSubmit}
                        onClickShowPrevious={onClickForgotPassword}
                       
                    />
                ) : (
                        <LoginForm
                             errorMessage={errorMessage}
                             username={username}
                             password={password}
                             isVisible={showPassword}
                             disableSubmit={disableSubmit}
                             onClickTogglePassword={onClickTogglePassword}
                             onChangeUsername={onChangeUsername}
                             onBlurEmail={onBlurEmail}
                             onChangePassword={onChangePassword}
                             onSubmit={onLoginSubmit}
                             onClickForgotPassword={onClickForgotPassword}
                        />
                        )}
                </Grid>
             </Grid>
        </div>
    );
};

export default PortalLogin;
