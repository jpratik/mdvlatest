import { createTheme } from '@mui/material/styles';

const Theme = createTheme({
    palette: {
        type: 'dark',
        primary: {
            main: 'rgba(115, 157, 211, 1)',
        },
        secondary: {
            main: 'rgba(255, 255, 255, 1)',
        },
        redwarning: {
            main: '#f44336',
        },
        menubarprimary:{
            main: 'rgba(42, 47, 59, 1)',
        },
        error: {
            main: 'rgba(199, 0, 57, 1)',
        },
        success: {
            main: 'rgba(122, 193, 66, 1)',
        },
        tooltipInvalidColor: {
            main: 'rgba(244, 67, 54, 1)',
        },
        inputFieldColor: {
            main: 'rgba(98, 115, 137, 1)',
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
        mainLogoIconColor: {
            main: 'rgba(63, 133, 209, 1)',
        },
        mainLogoTextColor: {
            main: 'rgba(255, 255, 255, 1)',
        },
        contrastThreshold: 3,
        tonalOffset: 0.2,
    },
    components: {
        MuiTableSortLabel: {
            'styleOverrides':{
            root: {
              // This is the actual style override you need.
              // This is for a single control you show in the header,
              // repeat for any other controls in the header, and hope
              // you don't also display them in the body.
              // Good luck finding this without looking at the source code
              // and yay to fragile code that could break on the next update.
              color: "white",
              "&:focus": {
                color: "white"
              },
              "&:hover": {
                color: "white"
              },
              "&$active": {
                color: "white",
                "&& $icon": {
                  color: "white"
                }
              }
            }
        }
          },
        MuiTooltip: {
            'styleOverrides':{
            tooltip: {
                backgroundColor: 'rgba(31, 39, 55, 1)',
            },
            tooltipPlacementRight: {
                marginLeft: '30px !important',
            },
            popper: {
                opacity: 1,
            },
        }
        },
        MuiInputBase: {
            'styleOverrides':{
            input: {
                '&:-webkit-autofill': {
                    WebkitBoxShadow: '0 0 0 1000px rgba(31, 40, 54, 1) inset',
                    WebkitTextFillColor: 'rgba(98, 115, 137, 1)',
                    width: '90%',
                },
            },
            }
        },
        MuiButton: {
            'styleOverrides':{
            root: {
                textTransform: 'none',
                marginTop: '2rem',
                borderRadius: '19px',
                backgroundColor: 'rgba(36, 160, 237, 1)',
                width: '100%',
                fontSize: '14px',
            },
            raisedPrimary: {
                color: 'rgba(27, 109, 164, 1)',
            }
        }
        },
       
        MuiInput: {
            'styleOverrides':{
            root: {
                color: 'rgba(255, 255, 255, 1)',
                borderRadius: '19px',
                backgroundColor: 'rgba(31, 40, 54, 1)',
                padding: '5px 0 5px 0',
            },

            input: {
                textIndent: '15px !important',
                marginLeft: '5px',
            },
        }
        },
        MuiInputLabel: {
            'styleOverrides':{
            root: {
                position: 'unset !important',
                color: 'rgba(255, 255, 255, 1) !important',
                paddingLeft: '23px',
                marginBottom: '-6px',
            },
        }
        },
       
        MuiLink: {
            'styleOverrides':{
            root: {
                color: 'rgba(115, 157, 211, 1)',
                fontSize: '12px',
                cursor: 'pointer !important',
            },
        }
        },
    },
    typography: {
        useNextVariants: true,
        // Use the system font instead of the default Roboto font.
        fontFamily: [
            'Open Sans',
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Lato',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',

        ].join(','),
    },
});

export default Theme;