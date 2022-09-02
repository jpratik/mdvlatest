import React from 'react';
import Button from '@mui/material/Button';
import FormGroup from '@mui/material/FormGroup';
import TextField from '@mui/material/TextField';
import { createTheme  } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';
import ArrowBack from '@mui/icons-material/ArrowBack';
import IconButton from '@mui/material/IconButton';
import Theme from './components/PortalTheme'
import InputLabel from '@mui/material/InputLabel';
const PortalForgotPasswordForm = ({
    errorMessage,
    successMessage,
    email,
    onChangeEmail,
    onSubmit,
    disableForgotPasswordSubmit,
    onClickShowPrevious,
    
}) => { 
    const { t, i18n } = useTranslation();
    const theme = Theme;
    return(
    
    <form id="form" noValidate autoComplete="off" className="form">
        <FormGroup row style={{ justifyContent: 'center' }}>
            <p
                style={{
                    color: theme.palette.secondary.main,
                    textAlign: 'center',
                    opacity: '0.8',
                }}
            >
                {t('ForgotPasswordForm.Instructions')}
            </p>
        </FormGroup>
        <FormGroup>
        <InputLabel   style={{
                         shrink:true,
                         fontSize: '14px',
      position: 'unset !important',
      color: 'rgba(255, 255, 255, 1) !important',
      paddingLeft: '23px',
      marginBottom: '-6px',
   }
  }>{t('ForgotPasswordForm.Email.Label')}</InputLabel>
            <TextField
                id="input-email"
                type="text"
                name="email"
                
                placeholder="you@example.com"
                fullWidth
                margin="normal"
                InputLabelProps={{
                    shrink: true,
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
                    
                }}
                value={email}
                onChange={onChangeEmail}
            />
        </FormGroup>
        <FormGroup row style={{ justifyContent: 'center', minHeight: '1rem' }}>
            {errorMessage !== null && (
                <p
                    id="error-message"
                    style={{
                        width: '100%',
                        margin: '0',
                        color: theme.palette.error.main,
                        fontWeight: 'bold',
                        textAlign: 'center',
                        fontSize: '12px',
                    }}
                >
                    {errorMessage}
                </p>
            )}
            {successMessage !== null && (
                <p
                    style={{
                        width: '100%',
                        margin: '0',
                        color: theme.palette.success.main,
                        fontWeight: 'bold',
                        textAlign: 'center',
                        fontSize: '12px',
                    }}
                >
                    {successMessage}
                </p>
            )}
        </FormGroup>
        <FormGroup row style={{ justifyContent: 'center' }}>
            <Button
                id="button-submit"
                variant="contained"
                type="submit"
                color="primary"
                onClick={onSubmit}
                disabled={disableForgotPasswordSubmit}
                disableRipple
                disableFocusRipple
                disableTouchRipple
                style={{
                    marginTop: '.5rem',
                }}
            >
                {t('ForgotPasswordForm.Submit.Button')}
            </Button>
        </FormGroup>
        <FormGroup row style={{ justifyContent: 'center' }}>
            <IconButton
                id="button-back"
                aria-label={t('ForgotPasswordForm.Return.Button')}
                onClick={onClickShowPrevious}
                style={{
                    marginTop: '1rem',
                }}
            >
                <ArrowBack />
            </IconButton>
        </FormGroup>
    </form>
);
            };

export default PortalForgotPasswordForm;