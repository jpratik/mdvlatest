import * as React from "react";
import { Box } from "@mui/system";
import { Button,Checkbox, Switch,Grid, InputLabel, List,Divider, FormControlLabel, Typography,ButtonGroup,Snackbar ,Alert ,IconButton, Icon,Dialog,DialogTitle,DialogContent,DialogActions,DialogContentText, cardMediaClasses } from "@mui/material";
import {mainThemeStyle} from './components/MainTheme';
import { NestedButtonDropdown } from "./components/header/NestedButtonDropdown";
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { faker } from '@faker-js/faker';
import { format } from 'date-fns';
import { useState,useRef,useEffect } from "react";
import useTable from "./components/useTable";
import SvgIcon from "@mui/material/SvgIcon";
import NoImage from './asset/noimage.png';
import Popup from "./components/Popup";
import _ from "lodash";
import moment from 'moment';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import { styled } from '@mui/material/styles';
import TimezoneSelect from 'react-timezone-select'
const IOSSwitch = styled((props) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  '& .MuiSwitch-switchBase': {
    padding: 0,
    margin: 2,
    transitionDuration: '300ms',
    '&.Mui-checked': {
      transform: 'translateX(16px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        backgroundColor: theme.palette.mode === 'dark' ? '#2ECA45' : '#65C466',
        opacity: 1,
        border: 0,
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: 0.5,
      },
    },
    '&.Mui-focusVisible .MuiSwitch-thumb': {
      color: '#33cf4d',
      border: '6px solid #fff',
    },
    '&.Mui-disabled .MuiSwitch-thumb': {
      color:
        theme.palette.mode === 'light'
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    '&.Mui-disabled + .MuiSwitch-track': {
      opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
    },
  },
  '& .MuiSwitch-thumb': {
    boxSizing: 'border-box',
    width: 22,
    height: 22,
  },
  '& .MuiSwitch-track': {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
    opacity: 1,
    transition: theme.transitions.create(['background-color'], {
      duration: 500,
    }),
  },
}));


function AddDistributor ( props){

  const myContainer = useRef(null);
  const [selectedTimezone, setSelectedTimezone] =useState(
    Intl.DateTimeFormat().resolvedOptions().timeZone
  );

  const [enableHoldOpen, setEnableHoldOpen] =useState(0);
  const [holdOpenMode,setHoldOpenMode] = useState(0);
  const [locationTextEntered,setlocationTextEntered] = useState('');
  const [smsAlertTextEntered,setsmsAlertTextEntered] = useState('');
  const [cameraBrandTextEntered,setcameraBrandTextEntered] = useState('');

  const [tabletNameTextEntered,settabletNameTextEntered] = useState('');
  const [propertyNameTextEntered,setpropertyNameTextEntered] = useState('');
  const [officeNameTextEntered,setofficeNameTextEntered] = useState('');
  const [addressLineOneTextEntered,setaddressLineOneTextEntered] = useState('');
  const [addressLineTwoTextEntered,setaddressLineTwoTextEntered] = useState('');
  const [deliveryPINTextEntered,setdeliveryPINTextEntered] = useState('');

  const [locationPhoneDialTextEntered,setlocationPhoneDialTextEntered] = useState('');
  const [urlForWateMarkTextEntered,seturlForWateMarkTextEntered] = useState('');
  const [refreshRateTextEntered,setrefreshRateTextEntered] = useState('');
  const [settingRefreshRateTextEntered,setsettingRefreshRateTextEntered] = useState('');




  const [enableElevatorControl, setEnableElevatorControl] =useState(0);
  const [currentTab, setCurrentTab] = useState(0);
  const rowsHoleOpen =['1','2','3','4','5','6','7'];
  const rowsElevatorControl =[1,2,3,4,5,6,7,8];


  const hanldeLocationChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setlocationTextEntered(event.target.value);
  };

  const hanldeSMSAlertChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
    setsmsAlertTextEntered(event.target.value);
  };

  const hanldeCameraBrandChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
    setcameraBrandTextEntered(event.target.value);
  };

  const hanldeTabletNameChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
    settabletNameTextEntered(event.target.value);
  };

  const hanldePropertyNameChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
    setpropertyNameTextEntered(event.target.value);
  };

  const hanldeOfficeNameChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
    setofficeNameTextEntered(event.target.value);
  };

  const hanldeAddressLineOneChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
    setaddressLineOneTextEntered(event.target.value);
  };

  const hanldeAddressLineTwoChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
    setaddressLineTwoTextEntered(event.target.value);
  };

  const hanldeDeliveryPINChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
    setdeliveryPINTextEntered(event.target.value);
  };

  const hanldeLocationTelephoneDialChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
    setlocationPhoneDialTextEntered(event.target.value);
  };

  const hanldeURLForWaterMarkChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
    seturlForWateMarkTextEntered(event.target.value);
  };

  const hanldeRefreshRateChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
    setrefreshRateTextEntered(event.target.value);
  };

  const hanldeSettingRefreshRateChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
    setsettingRefreshRateTextEntered(event.target.value);
  };

  const handleTabClick =(val) =>{
    setCurrentTab(val);
  }

  const handleChangeEventOfHoldOpen = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEnableHoldOpen(event.target.checked);
  };

  const handleChangeValueOfHoldOpen = (val) => {
    setHoldOpenMode(val);
  };

  const handleChangeEventOfElevatorControl = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEnableElevatorControl(event.target.checked);
  };
  const handleCancel = () =>{
    setlocationTextEntered('');
    setsmsAlertTextEntered('');
    setcameraBrandTextEntered('');
    settabletNameTextEntered('');
    setpropertyNameTextEntered('');
    setofficeNameTextEntered('');
    setaddressLineOneTextEntered('');
    setaddressLineTwoTextEntered('');
    setdeliveryPINTextEntered('');
    setlocationPhoneDialTextEntered('');
    seturlForWateMarkTextEntered('');
    setrefreshRateTextEntered('');
    setsettingRefreshRateTextEntered('');
  };
  const handleCloseSnack= (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSnack(false);
  };
  const [openSnack, setOpenSnack] = React.useState(false);
  const handleCreateLocation = () =>{
    setlocationTextEntered('');
    setsmsAlertTextEntered('');
    setcameraBrandTextEntered('');
    settabletNameTextEntered('');
    setpropertyNameTextEntered('');
    setofficeNameTextEntered('');
    setaddressLineOneTextEntered('');
    setaddressLineTwoTextEntered('');
    setdeliveryPINTextEntered('');
    setlocationPhoneDialTextEntered('');
    seturlForWateMarkTextEntered('');
    setrefreshRateTextEntered('');
    setsettingRefreshRateTextEntered('');
    setOpenSnack(true);
  };
  const PINLength = {
    id: "1",
    label: "4",
    items: [
      {
        label: "4",
        callback: () =>  {}
      },
      {
        label: "6",
        callback: () =>  {}
      },
    ]
  }
  const ScreenLayout = {
    id: "1",
    label: "Portrait",
    items: [
      {
        label: "Portrait",
        callback: () =>  {}
      },
      {
        label: "Landscape",
        callback: () =>  {}
      },
    ]
  }
  const UnlcokingMode = {
    id: "1",
    label: "BRIVO",
    items: [
      {
        label: "BRIVO",
        callback: () =>  {}
      },
      {
        label: "USB",
        callback: () =>  {}
      },
      {
        label: "GPIO",
        callback: () =>  {}
      },
      {
        label: "VEGA",
        callback: () =>  {}
      },
    ]
  }

  const SubscriptionType = {
    id: "1",
    label: "1$ Plan",
    items: [
      {
        label: "1$ Plan",
        callback: () =>  {}
      },
      {
        label: "Plan A",
        callback: () =>  {}
      },
      {
        label: "Plan B",
        callback: () =>  {}
      }
      ,
      {
        label: "Plan C",
        callback: () =>  {}
      }
    ]
  }
  const DealerType = {
    id: "1",
    label: "Dealer A",
    items: [
      {
        label: "Dealer A",
        callback: () =>  {}
      },
      {
        label: "Dealer B",
        callback: () =>  {}
      },
      {
        label: "Dealer C",
        callback: () =>  {}
      }
      ,
      {
        label: "Dealer D",
        callback: () =>  {}
      }
    ]
  }
  return <> <Box sx={mainThemeStyle.boxTopHeader}>
  
</Box>
<Box sx={mainThemeStyle.boxHeaderBelow}>
<div  sx={{
       right: '54px' ,left: '54px',borderRadius:'0px'}}>
               <div style={{ display: 'flex' }}>
                   <Typography variant="h6" component="div" style={{  paddingLeft: '16px',paddingTop: '16px',flexGrow: 1,color:'#fff' }}>
                       Add Distributor
                   </Typography>
                   
               </div>
              
           </div>
           <Divider sx={{backgroundColor:'white'}} />
           <Grid container spacing={2} padding= '32px'> 
      <Grid item xs={2.5}>
        <Stack direction="column"  spacing={2}>
      <Typography  sx={mainThemeStyle.popUpLable} height={40}>Name</Typography>
      <Typography  sx={mainThemeStyle.popUpLable} height={40}>Company Name </Typography>
      <Typography  sx={mainThemeStyle.popUpLable} height={40}>Email </Typography>
      <Typography  sx={mainThemeStyle.popUpLable} height={40}>Password </Typography>
      <Typography  sx={mainThemeStyle.popUpLable} height={40}>Address </Typography>
      
      <Stack direction="row" spacing={2}>
      <Button sx={mainThemeStyle.normalButton} onClick={handleCancel}>Cancel</Button>
      <Button sx={mainThemeStyle.normalButton} onClick={handleCreateLocation}>Add Distributor</Button>
      </Stack>
      </Stack>
      </Grid>
      
      <Grid item xs={2.5}>
      <Stack direction="column"  spacing={2}>
     
   
      <TextField
                        id="input-location"
                        onChange={hanldeLocationChange}
                        value={locationTextEntered}
                        height={40}
                        type= 'text'
                        name="text"
                        
                        sx={mainThemeStyle.InputMenuItem}
                        InputLabelProps={{ shrink: true }
                      }
                          
                        InputProps={{
                           
                            sx: {
                                
                                color:'rgba(135, 135, 135, 0.5)',
                                height:'33px',
                                borderRadius: '5px',
                                backgroundColor: '#121212',
                                boxShadow: 'inset 0px 4px 4px rgba(0, 0, 0, 0.25)',
                                padding: '5px 0 5px 0',
                                textIndent: '15px !important',
                              
                               
                                
                            },
                        }}
                       
                    />
      <TextField
                        id="input-smsalert"
                        height={40}
                        type= 'text'
                        name="text"
                        onChange={hanldeSMSAlertChanged}
                        value={smsAlertTextEntered}
                        sx={mainThemeStyle.InputMenuItem}
                        InputLabelProps={{ shrink: true }
                      }
                          
                        InputProps={{
                           
                            sx: {
                                
                                color:'rgba(135, 135, 135, 0.5)',
                                height:'33px',
                                borderRadius: '5px',
                                backgroundColor: '#121212',
                                boxShadow: 'inset 0px 4px 4px rgba(0, 0, 0, 0.25)',
                                padding: '5px 0 5px 0',
                                textIndent: '15px !important',
                              
                               
                                
                            },
                        }}
                       
                    />
     
      <TextField
        
        type="text"
        onChange={hanldeTabletNameChanged}
        value={tabletNameTextEntered}
        height={40}
        sx={mainThemeStyle.InputMenuItem}
        InputLabelProps={{
          shrink: true,
        }}
        
        InputProps={{
                           
          sx: {
              
              color: 'rgba(135, 135, 135, 0.5)',
              height:'33px',
              borderRadius: '5px',
              backgroundColor: '#121212',
              boxShadow: 'inset 0px 4px 4px rgba(0, 0, 0, 0.25)',
              padding: '5px 0 5px 0',
              textIndent: '15px !important',
          
             
              
          },
      }}
      />
      
      <TextField
       
        type="text"
        onChange={hanldePropertyNameChanged}
        value={propertyNameTextEntered}
        height={40}
        sx={mainThemeStyle.InputMenuItem}
        InputLabelProps={{
          shrink: true,
        }}
        
        InputProps={{
                           
          sx: {
              
              color: 'rgba(135, 135, 135, 0.5)',
              height:'33px',
              borderRadius: '5px',
              backgroundColor: '#121212',
              boxShadow: 'inset 0px 4px 4px rgba(0, 0, 0, 0.25)',
              padding: '5px 0 5px 0',
              textIndent: '15px !important',
          
             
              
          },
      }}
      />
      <TextField
       
       type="text"
       onChange={hanldeOfficeNameChanged}
        value={officeNameTextEntered}
       height={40}
       sx={mainThemeStyle.InputMenuItem}
       InputLabelProps={{
         shrink: true,
       }}
       
       InputProps={{
                          
         sx: {
             
             color: 'rgba(135, 135, 135, 0.5)',
             height:'33px',
             borderRadius: '5px',
             backgroundColor: '#121212',
             boxShadow: 'inset 0px 4px 4px rgba(0, 0, 0, 0.25)',
             padding: '5px 0 5px 0',
             textIndent: '15px !important',
         
            
             
         },
     }}
     />
     
    
    
          
          
      </Stack>
      </Grid>
      <Grid item xs={1}>
    
      </Grid>
      <Grid item xs={2.5}>
        <Stack direction="column"  spacing={2}>
      <Typography sx={mainThemeStyle.popUpLable} height={40}> City </Typography>
      <Typography sx={mainThemeStyle.popUpLable} height={40}> State </Typography>
      <Typography sx={mainThemeStyle.popUpLable} height={40}>ZipCode</Typography>
      <Typography  sx={mainThemeStyle.popUpLable} height={40}>Office Phone Number</Typography>
      
      </Stack>
      </Grid>
      <Grid item xs={2.5}>
        <Stack direction="column"  spacing={2}>
        <TextField
       
       type="text"
       onChange={hanldeDeliveryPINChanged}
        value={deliveryPINTextEntered}
       height={40}
       sx={mainThemeStyle.InputMenuItem}
       InputLabelProps={{
         shrink: true,
       }}
       
       InputProps={{
                          
         sx: {
             
             color: 'rgba(135, 135, 135, 0.5)',
             height:'33px',
             borderRadius: '5px',
             backgroundColor: '#121212',
             boxShadow: 'inset 0px 4px 4px rgba(0, 0, 0, 0.25)',
             padding: '5px 0 5px 0',
             textIndent: '15px !important',
         
            
             
         },
     }}
     />
      <TextField
                        id="input-location-phone-dial"
                        height={40}
                        type= 'text'
                        name="text"
                        onChange={hanldeLocationTelephoneDialChanged}
                        value={locationPhoneDialTextEntered}
                        sx={mainThemeStyle.InputMenuItem}
                        InputLabelProps={{ shrink: true }
                      }
                          
                        InputProps={{
                           
                            sx: {
                                
                                color:'rgba(135, 135, 135, 0.5)',
                                height:'33px',
                                borderRadius: '5px',
                                backgroundColor: '#121212',
                                boxShadow: 'inset 0px 4px 4px rgba(0, 0, 0, 0.25)',
                                padding: '5px 0 5px 0',
                                textIndent: '15px !important',
                              
                               
                                
                            },
                        }}
                       
                    />
                     <TextField
                        height={40}
                        type= 'text'
                        name="text"
                        onChange={hanldeURLForWaterMarkChanged}
                        value={urlForWateMarkTextEntered}
                        sx={mainThemeStyle.InputMenuItem}
                        InputLabelProps={{ shrink: true }
                      }
                          
                        InputProps={{
                           
                            sx: {
                                
                                color:'rgba(135, 135, 135, 0.5)',
                                height:'33px',
                                borderRadius: '5px',
                                backgroundColor: '#121212',
                                boxShadow: 'inset 0px 4px 4px rgba(0, 0, 0, 0.25)',
                                padding: '5px 0 5px 0',
                                textIndent: '15px !important',
                              
                               
                                
                            },
                        }}
                       
                    />
                      <TextField
                        height={40}
                        type= 'text'
                        name="text"
                        onChange={hanldeRefreshRateChanged}
                        value={refreshRateTextEntered}
                        sx={mainThemeStyle.InputMenuItem}
                        InputLabelProps={{ shrink: true }
                      }
                          
                        InputProps={{
                           
                            sx: {
                                
                                color:'rgba(135, 135, 135, 0.5)',
                                height:'33px',
                                borderRadius: '5px',
                                backgroundColor: '#121212',
                                boxShadow: 'inset 0px 4px 4px rgba(0, 0, 0, 0.25)',
                                padding: '5px 0 5px 0',
                                textIndent: '15px !important',
                              
                               
                                
                            },
                        }}
                       
                    />
                    
                    
      </Stack>
      </Grid>
     
     
      </Grid>

</Box>

<Snackbar open={openSnack} autoHideDuration={6000} onClose={handleCloseSnack}>
        <Alert onClose={handleCloseSnack} severity="success" sx={{ width: '100%' }}>
          This is a success message!
        </Alert>
      </Snackbar>
 </> 
          
          
          
          
          ;
};

export default AddDistributor;