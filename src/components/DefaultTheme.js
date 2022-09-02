import { createTheme } from '@mui/material/styles';

const Palette = {
    primary: {
        main: 'rgba(115, 157, 211, 1)',
    },
    secondary: {
        main: 'rgba(255, 255, 255, 1)',
    },
    redwarning: {
        main: 'rgba(255, 0, 0, 1)',
    },
    error: {
        main: '#B7242A',
    },
    errorBackgroundGradient: {
        left: 'rgba(183, 36, 42, 0.1)',
        right: 'rgba(183, 36, 42, 0.02)',
        leftBorder: 'rgba(183, 36, 42, 0.4)'
    },
    success: {
        main: 'rgba(122, 193, 66, 1)',
    },
    tooltipInvalidColor: {
        main: 'rgba(244, 67, 54, 1)',
    },
    inputFieldColor: {
        main: '#202D3B',
    },
    inputFieldPlaceholderColor: {
        main: '#A5B4C4',
    },
    tooltipBackgroundColor: {
        main: 'rgba(31, 39, 55, 1)',
    },
    inputSelectedColor: {
        main: 'rgba(104, 168, 254, 1)',
    },
    inputBackgroundColor: {
        main: 'rgba(31, 39, 54, 1)',
    },
    appTitlePrimaryTextColor: {
        main: '#A6CDFF',
    },
    appTitleSecondaryTextColor: {
        main: '#EFF3F8',
    },
    inputBorderColor: {
        main: '#E3E9F0',
        hover: '#CED7E2',
        focus: '#7DA6DB'
    },
    primaryButtonTextColor: {
        main: 'rgba(255, 255, 255, 1)',
        disabled: 'rgba(255, 255, 255, 1)'
    },
    primaryButtonBackgroundColor: {
        main: 'rgba(255, 255, 255, 1)',
        hover: '#3F85D1',
        disabled: 'rgba(115, 157, 211, 1)'
    },
    secondaryTextButtonColor: {
        main: '#5585C3',
    },
    secondaryTextButtonBackgroundColor: {
        hover: 'rgba(63, 133, 209, 0.1)'
    },
    formLabelColor: {
        main: '#7D8FA3',
        focus: '#7D8FA3'
    },
    contrastThreshold: 3,
    tonalOffset: 0.2
}

const MuiListItemHoverStyles = {
    zIndex: '5',
    borderColor: '#8DBFFF',
    color: '#6396D9',
    backgroundColor: '#EBF4FF',
    boxShadow: '0px 0px 25px rgba(99, 150, 217, 0.15)'
}

export const createStyleOverrides = (palette) => ({
    MuiCssBaseline: {
        'styleOverrides': {
            body: {
                height: '100vh',
                padding: '54px',
                lineHeight: '1.2',
                color: palette.primary.main,
                 //backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover'
            },
        },
    },
    MuiTooltip: {
        'styleOverrides':{
        tooltip: {
            backgroundColor: palette.tooltipBackgroundColor.main,
            boxShadow: '0 8px 16px rgba(0, 0, 0, 0.05)',
            border: '1px solid transparent',
            color: '#344559',
            borderRadius: '0'
        },
        tooltipPlacementRight: {
            marginLeft: '20px !important',
            marginTop: '-50% !important'
        },
        popper: {
            opacity: 1,
        },
    }
    },
    MuiInputBase: {
        'styleOverrides':{
        root: {
            background: palette.inputBackgroundColor.main,
            borderRadius: '4px',
            border: `1px solid ${palette.inputBorderColor.main}`,
            outline: '0',
            "&.Mui-error": {
                borderColor: `${palette.error.main} !important`
            },
            "&:hover": {
                borderColor: palette.inputBorderColor.hover,
            },
            "&.Mui-focused": {
                borderColor: palette.inputBorderColor.focus,
                boxShadow: '0 0 0 2px rgba(141, 191, 255, 0.3)'
            }
        
        },
        input: {
            font: {
                fontSize: '1 rem',
            },
            backgroundColor: palette.inputBackgroundColor.main,
            boxSizing: 'inherit'
        },
    }
    },
    MuiButton: {
        'styleOverrides':{
        root: {
            cursor: 'pointer',
            userSelect: 'none',
            boxSizing: 'border-box',
            outline: 'none',
            whiteSpace: 'nowrap',
            fontFamily: `"IBM Plex Sans", sans-serif`,
            textRendering: 'optimizeLegibility',
            textTransform: '',
            position: 'relative',
            display: 'inline-flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '0 12px',
        },
        containedPrimary: {
            color: palette.primaryButtonTextColor.main,
            border: '1px solid transparent',
            borderRadius: '4px',
            background: palette.primaryButtonBackgroundColor.main,
            fontSize: '14px',
            fontWeight: '600',
            lineHeight: '1',
            textDecoration: 'none',
            height: '40px',
            transition: 'background-color 0.2s ease-in-out, border-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out, color 0.2s ease-in-out, width 0.3s ease-in-out',
            "&:hover": {
                backgroundColor: palette.primaryButtonBackgroundColor.hover
            },
            "&:disabled": {
                color: palette.primaryButtonTextColor.disabled,
                backgroundColor: palette.primaryButtonBackgroundColor.disabled,
                opacity: 0.4
            }
        },
        textSecondary: {
            color: palette.secondaryTextButtonColor.main,
            transition: 'background-color 0.2s ease-in-out, border-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out, color 0.2s ease-in-out, width 0.3s ease-in-out',
            fontSize: '12px',
            fontWeight: 'bold',
            padding: '0 8px',
            height: '30px',
            "&:hover": {
                backgroundColor: palette.secondaryTextButtonBackgroundColor.hover
            }
        }
    }
    },
    MuiInput: {
        'styleOverrides':{
        input: {
            color: palette.inputFieldColor.main,
            backgroundColor: palette.inputBackgroundColor.main,
            borderRadius: '4px',
            zIndex: '1',
            padding: '14px',
            height: '40px',
            fontWeight: '600',
            transition: 'all 0.2s cubic-bezier(0.445, 0.05, 0.55, 0.95)',
            "&::placeholder": {
                color: palette.inputFieldPlaceholderColor.main
            }
        }
    }
    },
    MuiInputLabel: {
        'styleOverrides':{
        root: {
            transition: 'color 0.2s cubic-bezier(0.445, 0.05, 0.55, 0.95)',
            cursor: 'text',
            display: 'block',
            "&.Mui-error": {
                color: palette.error.main
            }
        },
    }
    },
    MuiLink: {
        'styleOverrides':{
        root: {
            color: palette.secondaryTextButtonColor.main,
            fontSize: '12px',
            cursor: 'pointer !important',
        },
    }
    },
    MuiFormGroup: {
        'styleOverrides':{
        root: {
            display: 'flex',
            flex: '0 0 auto',
            flexDirection: 'column'
        }
    }
    },
    MuiFormLabel: {
        'styleOverrides':{
        root: {
            color: palette.formLabelColor.main,
            fontSize: '18px',
            lineHeight: '0.5',
            paddingBottom: '6px',
            "&.Mui-focused": {
                color: palette.formLabelColor.focus
            }
        }
    }
    },
    MuiFormHelperText: {
        'styleOverrides':{
        root: {
            color: 'black',
            fontWeight: 'bold',
            background: `linear-gradient(to right, ${palette.errorBackgroundGradient.left}, ${palette.errorBackgroundGradient.right})`,
            padding: '16px 12px',
            borderRadius: '4px',
            "&.Mui-error": {
                color: 'black'
            }
        }
    }
    },
    MuiListItem: {
        'styleOverrides':{
        root: {
            "&.Mui-selected" : {
                ...MuiListItemHoverStyles,
                '&:hover': MuiListItemHoverStyles
            }
        },
        button: {
            color: '#71A4E6',
            backgroundColor: '#fff',
            cursor: 'pointer',
            position: 'relative',
            height: '60px',
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            padding: '0 12px',
            marginBottom: '-1px',
            fontWeight: '600',
            border: `1px solid ${palette.inputBorderColor.hover}`,
            transition: 'background 0.2s cubic-bezier(0.445, 0.05, 0.55, 0.95), color 0.2s cubic-bezier(0.445, 0.05, 0.55, 0.95), border-color 0.3s cubic-bezier(0.445, 0.05, 0.55, 0.95), box-shadow 0.3s cubic-bezier(0.445, 0.05, 0.55, 0.95)',
            "&:hover": MuiListItemHoverStyles,
            "&:first-child": {
                borderTopLeftRadius: '4px',
                borderTopRightRadius: '4px'
            },
            "&:last-child": {
                borderBottomLeftRadius: '4px',
                borderBottomRightRadius: '4px',
                borderBottomWidth: '1px'
            }
        }
    }
    },
    MuiListItemText: {
        'styleOverrides':{
        primary: {
            fontWeight: '600'
        }
    }
    }
});

export const DefaultTheme = createTheme({
    palette: Palette,
    custom : {
        appTitle : 'Brivo',
        logo: 'light'
    },
    overrides : createStyleOverrides(Palette),
    typography: {
        fontFamily: [
            "IBM Plex Sans",
            'sans-serif'
        ].join(','),
    },
    widgetStyles : {
        root: {
            position: 'relative',
            flexDirection: 'column',
            flexShrink: 0,
            width: '460px',
            background: 'rgba(239, 243, 248, 0.9)',
            border: `1px solid ${Palette.appTitleSecondaryTextColor}`,
            padding: '54px',
            margin: '7% auto auto',
            minHeight: '470px',
            transition: 'all 0.2s cubic-bezier(0.445, 0.05, 0.55, 0.95)'
        },
        background : {
            display: 'none',
            position: 'absolute',
            overflow: 'hidden',
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            pointerEvents: 'none',
            zIndex: 0
        },
        backgroundSpotLight : {
            position: 'absolute',
            display: 'block',
            borderRadius: '50%',
        }
    }
});
