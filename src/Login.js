import React , { Component } from 'react'
import Link from '@mui/material/Link';
import './form.css';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme  , ThemeProvider } from '@mui/material/styles';
import {  Widget } from './components/Widget';
import PortalLogin from "./PortalLogin"
import Page from './components/Page';
import Overlay from './components/Overlay';
import Theme from './components/PortalTheme'
import './widget.css';
import './form.css';
import { withTranslation } from 'react-i18next';
import { t } from 'i18next';
import useToken from './useToken';

const widgetRef = React.createRef();
function emailIsValid(email) {
    
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

//const theme = createTheme();
class Login extends Component {
    state = {
        username: '',
        password: '',
        email: '',
        showLoadingError: false,
        showPassword: false,
        error: null,
        success: null,
        showForgotPasswordForm: false,
        disableSubmit: false,
        disableForgotPasswordSubmit: false,
        emailValidation: '',
        passwordValidation: '',
    };
    componentDidMount() {
        let config;
        const { t } = this.props;
       
           

    }
    
    componentWillUnmount() {
        window.removeEventListener('keydown', this.validateKeyDown);
    }

    handleChangeUsername = e => this.setState({username: e.target.value, emailValidation: '' });


    errorMsgWithLink = () => {
        const {t} = this.props;
        const incorrectEmailPart1 = t('Error.IncorrectEmailProvided.part1');
        const incorrectEmailPart2 = t('Error.IncorrectEmailProvided.part2');
        const onairClassicLoginUrl = ``;
        return (
            <span>
                {incorrectEmailPart1}
                <Link
                    id="button-incorrect-email"
                    href={onairClassicLoginUrl}
                >
                    
                </Link>
                {incorrectEmailPart2}
            </span>
        )
    }

    handleBlurEmail = e => {
        const {showLoadingError} = this.state;
        if (showLoadingError) {
            this.setState({showLoadingError: false});
            return;
        }
        const email = e.target.value.trim();
        if (!email) {
            return;
        }
        if (emailIsValid(email)) {
            this.setState({
                disableSubmit: false,
                error: null
            });
        } else {
            this.setState({
                disableSubmit: true,
                error: this.errorMsgWithLink()
            });
        }
    }

    handleChangePassword = e => this.setState({ password: e.target.value, passwordValidation: '' });

    handleChangeEmail = e => this.setState({ email: e.target.value });

    toggleShowPassword = () =>
        this.setState(state => ({ showPassword: !state.showPassword }));

    handleShowForgotPassword = () => {
        const { error, success } = this.state;
        if (error != null) {
            // reset error message
            this.setState({ error: null });
        }
        if (success != null) {
            // reset success message
            this.setState({ success: null });
        }
        // show/hide form
        this.setState(state => ({
            showForgotPasswordForm: !state.showForgotPasswordForm,
        }));
    };

    validateUsernameAndPassword = evt => {
        evt.preventDefault();
        const { username, password } = this.state;
        const { t } = this.props;
        let usernameIsValid = username !== '';
        let passwordIsValid = password !== '';

       
        if (usernameIsValid && passwordIsValid) {
            this.login();
        } else {
            this.setState({ error: t('Error.MissingUsernamePassword') });
        }
        
    };

    validateEmail = evt => {
        evt.preventDefault();
        const { email } = this.state;
        const { t } = this.props;
        const isNotEmpty = email !== '';

        if (isNotEmpty) {
            const isValid = emailIsValid(email);
            if (isValid) {
                this.reset();
            } else {
                this.setState({
                    success: null,
                    error: t('Error.InvalideEmailAddress'),
                });
            }
        } else {
            this.setState({
                success: null,
                error: t('Error.EmailAdressIsEmpty'),
            });
        }
    };
    
    
  
      
    
   
    login() {
        //this.setState({ disableSubmit: true });
        const { username, password } = this.state;
        const { t } = this.props;
       
        if(username == 'admin@gmail.com' && password == 'admin'){
           
        }else{
            this.setState({ error: t('invalid_user_password') });
        }
        
    }
    reset() {
        this.setState({ disableForgotPasswordSubmit: true });
        const { email } = this.state;
        const { t } = this.props;

        const requestBody = {
            'email' : email,
            'clientId' : this.config.clientID
        };

        const requestOptions = {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestBody)
        };

        
        this.setState({ disableForgotPasswordSubmit: false });
       

    }
    render() {
const theme = Theme;

const {
    username,
    password,
    email,
    showPassword,
    error,
    success,
    showForgotPasswordForm,
    disableSubmit,
    disableForgotPasswordSubmit,
    emailValidation,
    passwordValidation,
    
} = this.state;
    return (
        <ThemeProvider theme={theme}>
        <CssBaseline>
        <Page>
                        <Overlay>
                    {
                       
                                <>
                              
                                    <Widget id={"widget"} ref={widgetRef} theme={theme}>
                                        <PortalLogin
                                            showForgotPasswordForm={showForgotPasswordForm}
                                            errorMessage={error}
                                            successMessage={success}
                                            email={email}
                                            disableForgotPasswordSubmit={disableForgotPasswordSubmit}
                                            username={username}
                                            password={password}
                                            showPassword={showPassword}
                                            disableSubmit={disableSubmit}
                                            emailValidation={emailValidation}
                                            passwordValidation={passwordValidation}
                                            onChangeEmail={this.handleChangeEmail}
                                            onForgotPasswordSubmit={this.validateEmail}
                                            onClickTogglePassword={this.toggleShowPassword}
                                            onChangeUsername={this.handleChangeUsername}
                                            onBlurEmail={this.handleBlurEmail}
                                            onChangePassword={this.handleChangePassword}
                                            onLoginSubmit={this.validateUsernameAndPassword}
                                            onClickForgotPassword={this.handleShowForgotPassword}
                                         
                                        />
                                   </Widget>
                                </>
                            
                    }
                    </Overlay>
                  </Page>
        </CssBaseline>
    </ThemeProvider>
    )
                }
  }
export default withTranslation()(Login)
