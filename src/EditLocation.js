import * as React from "react";
import { Box } from "@mui/system";
import { Button,Checkbox, Switch,Grid, InputLabel, List,Divider, FormControlLabel, Typography,ButtonGroup,Snackbar ,Alert ,IconButton, Icon,Dialog,DialogTitle,DialogContent,DialogActions,DialogContentText } from "@mui/material";
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


function EditLocation ( props){

  const myContainer = useRef(null);
  const [selectedTimezone, setSelectedTimezone] =useState(
    Intl.DateTimeFormat().resolvedOptions().timeZone
  );

  const [enableHoldOpen, setEnableHoldOpen] =useState(0);
  const [holdOpenMode,setHoldOpenMode] = useState(0);

  const [enableElevatorControl, setEnableElevatorControl] =useState(0);
  const [currentTab, setCurrentTab] = useState(0);
  const rowsHoleOpen =['1','2','3','4','5','6','7'];
  const rowsElevatorControl =[1,2,3,4,5,6,7,8];
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

  const AppUserUnlockMode = {
    id: "1",
    label: "ResidentVue Push Notification",
    items: [
      {
        label: "ResidentVue Push Notification",
        callback: () =>  {}
      },
      {
        label: "UnAttended Unlock",
        callback: () =>  {}
      },
      {
        label: "Disable User Swipe Unlock",
        callback: () =>  {}
      }
    ]
  }

  const CameraBrand = {
    id: "1",
    label: "ResidentLink",
    items: [
      {
        label: "ResidentLink",
        callback: () =>  {}
      },
      {
        label: "Sunnel",
        callback: () =>  {}
      },
      {
        label: "AXIS",
        callback: () =>  {}
      },
      {
        label: "Nortek",
        callback: () =>  {}
      },
      {
        label: "HikVision",
        callback: () =>  {}
      }
    ]
  }
  const BootDay = {
    id: "1",
    label: "Monday",
    items: [
      {
        label: "Monday",
        callback: () =>  {}
      },
      {
        label: "Tuesday",
        callback: () =>  {}
      },
      {
        label: "Wednesday",
        callback: () =>  {}
      },
      {
        label: "Thursday",
        callback: () =>  {}
      },
      {
        label: "Friday",
        callback: () =>  {}
      },
      {
        label: "Saturday",
        callback: () =>  {}
      },
      {
        label: "Sunday",
        callback: () =>  {}
      }
    ]
  }
 
  const BootTime = {
    id: "1",
    label: "00:00",
    items: [
      {
        label: "None",
        callback: () =>  {}
      },
      {
        label: "12:00 AM",
        callback: () =>  {}
      },
      {
        label: "12:30 AM",
        callback: () =>  {}
      },
      {
        label:  "01:00 AM",
        callback: () =>  {}
      },
      {
        label:  "01:30 AM",
        callback: () =>  {}
      },
      {
        label: "02:00 AM",
        callback: () =>  {}
      },
      {
        label: "02:30 AM",
        callback: () =>  {}
      },
      {
        label: "03:00 AM",
        callback: () =>  {}
      },
      {
        label: "03:30 AM",
        callback: () =>  {}
      },
      {
        label: "04:00 AM",
        callback: () =>  {}
      },
      {
        label: "04:30 AM",
        callback: () =>  {}
      },
      {
        label: "05:00 AM",
        callback: () =>  {}
      },
      {
        label: "05:30 AM",
        callback: () =>  {}
      },
      {
        label:  "06:00 AM",
        callback: () =>  {}
      },
      {
        label: "06:30 AM",
        callback: () =>  {}
      },
      {
        label: "07:00 AM",
        callback: () =>  {}
      },
      {
        label: "07:30 AM",
        callback: () =>  {}
      },
      {
        label: "08:00 AM",
        callback: () =>  {}
      },
      {
        label: "08:30 AM",
        callback: () =>  {}
      },
      {
        label: "09:00 AM",
        callback: () =>  {}
      },
      {
        label: "09:30 AM",
        callback: () =>  {}
      },
      {
        label: "10:00 AM",
        callback: () =>  {}
      },
      {
        label: "10:30 AM",
        callback: () =>  {}
      },
      {
        label: "11:00 AM",
        callback: () =>  {}
      },
      {
        label: "11:30 AM",
        callback: () =>  {}
      },
      {
        label: "12:00 PM",
        callback: () =>  {}
      },
      {
        label: "12:30 PM",
        callback: () =>  {}
      },
      {
        label: "01:00 PM",
        callback: () =>  {}
      },
      {
        label: "01:30 PM",
        callback: () =>  {}
      },
      {
        label: "02:00 PM",
        callback: () =>  {}
      },
      {
        label: "02:30 PM",
        callback: () =>  {}
      },
      {
        label: "03:00 PM",
        callback: () =>  {}
      },
      {
        label: "03:30 PM",
        callback: () =>  {}
      },
      {
        label: "04:00 PM",
        callback: () =>  {}
      },
      {
        label: "04:30 PM",
        callback: () =>  {}
      },
      {
        label: "05:00 PM",
        callback: () =>  {}
      },
      {
        label: "05:30 PM",
        callback: () =>  {}
      },
      {
        label: "06:00 PM",
        callback: () =>  {}
      },
      {
        label: "06:30 PM",
        callback: () =>  {}
      },
      {
        label: "07:00 PM",
        callback: () =>  {}
      },
      {
        label: "07:30 PM",
        callback: () =>  {}
      },
      {
        label: "08:00 PM",
        callback: () =>  {}
      },
      {
        label: "08:30 PM",
        callback: () =>  {}
      },
      {
        label: "09:00 PM",
        callback: () =>  {}
      },
      {
        label: "09:30 PM",
        callback: () =>  {}
      },
      {
        label: "10:00 PM",
        callback: () =>  {}
      },
      {
        label: "10:30 PM",
        callback: () =>  {}
      },
      {
        label: "11:00 PM",
        callback: () =>  {}
      },
      {
        label: "11:30 PM",
        callback: () =>  {}
      },
      {
        label: "11:59 PM",
        callback: () =>  {}
      }
    ]
  }
  return <> <Box sx={mainThemeStyle.boxTopHeader}>
     {(currentTab == 0 && <Stack spacing={2} direction="row">
    <Typography></Typography>
    <Button sx={mainThemeStyle.buttonHeaderGroup} onClick={()=> {handleTabClick(0)}} active>General</Button>
    <Button sx={mainThemeStyle.buttonHeaderGroupInactive} onClick={()=> {handleTabClick(1)}}>Panel Settings</Button>
    <Button sx={mainThemeStyle.buttonHeaderGroupInactive} onClick={()=> {handleTabClick(2)}}>Relay Settings</Button>
    <Button sx={mainThemeStyle.buttonHeaderGroupInactive} onClick={()=> {handleTabClick(3)}}>LPR</Button>
    <Button sx={mainThemeStyle.buttonHeaderGroupInactive} onClick={()=> {handleTabClick(4)}}>Hold Open</Button>
    <Button sx={mainThemeStyle.buttonHeaderGroupInactive} onClick={()=> {handleTabClick(5)}}>Elevator Control</Button>
  </Stack>)}
  {(currentTab == 1 && <Stack spacing={2} direction="row">
    <Typography></Typography>
    <Button sx={mainThemeStyle.buttonHeaderGroupInactive} onClick={()=> {handleTabClick(0)}} active>General</Button>
    <Button sx={mainThemeStyle.buttonHeaderGroup} onClick={()=> {handleTabClick(1)}}>Panel Settings</Button>
    <Button sx={mainThemeStyle.buttonHeaderGroupInactive} onClick={()=> {handleTabClick(2)}}>Relay Settings</Button>
    <Button sx={mainThemeStyle.buttonHeaderGroupInactive} onClick={()=> {handleTabClick(3)}}>LPR</Button>
    <Button sx={mainThemeStyle.buttonHeaderGroupInactive} onClick={()=> {handleTabClick(4)}}>Hold Open</Button>
    <Button sx={mainThemeStyle.buttonHeaderGroupInactive} onClick={()=> {handleTabClick(5)}}>Elevator Control</Button>
  </Stack>)}
  {(currentTab == 2 && <Stack spacing={2} direction="row">
    <Typography></Typography>
    <Button sx={mainThemeStyle.buttonHeaderGroupInactive} onClick={()=> {handleTabClick(0)}} active>General</Button>
    <Button sx={mainThemeStyle.buttonHeaderGroupInactive} onClick={()=> {handleTabClick(1)}}>Panel Settings</Button>
    <Button sx={mainThemeStyle.buttonHeaderGroup} onClick={()=> {handleTabClick(2)}}>Relay Settings</Button>
    <Button sx={mainThemeStyle.buttonHeaderGroupInactive} onClick={()=> {handleTabClick(3)}}>LPR</Button>
    <Button sx={mainThemeStyle.buttonHeaderGroupInactive} onClick={()=> {handleTabClick(4)}}>Hold Open</Button>
    <Button sx={mainThemeStyle.buttonHeaderGroupInactive} onClick={()=> {handleTabClick(5)}}>Elevator Control</Button>
  </Stack>)}
  {(currentTab == 3 && <Stack spacing={2} direction="row">
    <Typography></Typography>
    <Button sx={mainThemeStyle.buttonHeaderGroupInactive} onClick={()=> {handleTabClick(0)}} active>General</Button>
    <Button sx={mainThemeStyle.buttonHeaderGroupInactive} onClick={()=> {handleTabClick(1)}}>Panel Settings</Button>
    <Button sx={mainThemeStyle.buttonHeaderGroupInactive} onClick={()=> {handleTabClick(2)}}>Relay Settings</Button>
    <Button sx={mainThemeStyle.buttonHeaderGroup} onClick={()=> {handleTabClick(3)}}>LPR</Button>
    <Button sx={mainThemeStyle.buttonHeaderGroupInactive} onClick={()=> {handleTabClick(4)}}>Hold Open</Button>
    <Button sx={mainThemeStyle.buttonHeaderGroupInactive} onClick={()=> {handleTabClick(5)}}>Elevator Control</Button>
  </Stack>)}
  {(currentTab == 4 && <Stack spacing={2} direction="row">
    <Typography></Typography>
    <Button sx={mainThemeStyle.buttonHeaderGroupInactive} onClick={()=> {handleTabClick(0)}} active>General</Button>
    <Button sx={mainThemeStyle.buttonHeaderGroupInactive} onClick={()=> {handleTabClick(1)}}>Panel Settings</Button>
    <Button sx={mainThemeStyle.buttonHeaderGroupInactive} onClick={()=> {handleTabClick(2)}}>Relay Settings</Button>
    <Button sx={mainThemeStyle.buttonHeaderGroupInactive} onClick={()=> {handleTabClick(3)}}>LPR</Button>
    <Button sx={mainThemeStyle.buttonHeaderGroup} onClick={()=> {handleTabClick(4)}}>Hold Open</Button>
    <Button sx={mainThemeStyle.buttonHeaderGroupInactive} onClick={()=> {handleTabClick(5)}}>Elevator Control</Button>
  </Stack>)}
  {(currentTab == 5 && <Stack spacing={2} direction="row">
    <Typography></Typography>
    <Button sx={mainThemeStyle.buttonHeaderGroupInactive} onClick={()=> {handleTabClick(0)}} active>General</Button>
    <Button sx={mainThemeStyle.buttonHeaderGroupInactive} onClick={()=> {handleTabClick(1)}}>Panel Settings</Button>
    <Button sx={mainThemeStyle.buttonHeaderGroupInactive} onClick={()=> {handleTabClick(2)}}>Relay Settings</Button>
    <Button sx={mainThemeStyle.buttonHeaderGroupInactive} onClick={()=> {handleTabClick(3)}}>LPR</Button>
    <Button sx={mainThemeStyle.buttonHeaderGroupInactive} onClick={()=> {handleTabClick(4)}}>Hold Open</Button>
    <Button sx={mainThemeStyle.buttonHeaderGroup} onClick={()=> {handleTabClick(5)}}>Elevator Control</Button>
  </Stack>)}
  
            
</Box>
{(currentTab == 0 && <Box sx={mainThemeStyle.boxHeaderBelow}>
<div  sx={{
       right: '54px' ,left: '54px',borderRadius:'0px'}}>
               <div style={{ display: 'flex' }}>
                   <Typography variant="h6" component="div" style={{  paddingLeft: '16px',paddingTop: '16px',flexGrow: 1,color:'#fff' }}>
                       Location Details
                   </Typography>
                   
               </div>
              
           </div>
           <Divider sx={{backgroundColor:'white'}} />
           <Grid container spacing={2} padding= '32px'> 
      <Grid item xs={2.5}>
        <Stack direction="column"  spacing={2}>
      <Typography sx={mainThemeStyle.popUpLable} height={40}> id </Typography>
      <Typography sx={mainThemeStyle.popUpLable} height={40}> User id </Typography>
      <Typography sx={mainThemeStyle.popUpLable} height={40}> Subscription Type </Typography>
      <Typography  sx={mainThemeStyle.popUpLable} height={40}>Location Name </Typography>
      <Typography  sx={mainThemeStyle.popUpLable} height={40}>SMS Alert Phone# </Typography>
      <Typography  sx={mainThemeStyle.popUpLable} height={40}>Camera Brand </Typography>
      <Typography  sx={mainThemeStyle.popUpLable} height={40}>Hexnode Device Id </Typography>
      <Typography  sx={mainThemeStyle.popUpLable} height={40}>Weekly Boot Day </Typography>
      <Typography  sx={mainThemeStyle.popUpLable} height={40}>Weekly Boot Time </Typography>
      </Stack>
      </Grid>
      
      <Grid item xs={2.5}>
      <Stack direction="column"  spacing={2}>
      <Typography sx={mainThemeStyle.popUpLableAnswer}height={40} > 12352</Typography>
      <Typography sx={mainThemeStyle.popUpLableAnswer}height={40}> 1236562 </Typography>
      <Typography sx={mainThemeStyle.popUpLableAnswer}height={40}>MyDoorView Annual - 151-200 unit property</Typography>
      <TextField
                        id="input-location"
                        height={40}
                        type= 'text'
                        name="text"
                        value="Cornerstone Security"
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
                        id="input-location"
                        height={40}
                        type= 'text'
                        name="text"
                        value="989752623"
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
      <NestedButtonDropdown
            itemId={CameraBrand.id} // NOTE: itemId is required for track items
            variant="contained"
            sx={{ color: 'rgba(135, 135, 135, 0.5)',
            height:'34px',
            borderRadius: '5px',
            marginTop:'3px',
            marginBottom:'3px',
            backgroundColor: '#121212',
            boxShadow: 'inset 0px 4px 4px rgba(0, 0, 0, 0.25)',
            padding: '5px 0 5px 0',
            textIndent: '15px !important',}}
            data={CameraBrand}
          />
      <TextField
        id="cambrand"
        type="text"
        value="52623"
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
      
      <NestedButtonDropdown
            itemId={BootDay.id} // NOTE: itemId is required for track items
            variant="contained"
            sx={{ color: 'rgba(135, 135, 135, 0.5)',
            height:'34px',
            borderRadius: '5px',
            marginTop:'3px',
            marginBottom:'3px',
            backgroundColor: '#121212',
            boxShadow: 'inset 0px 4px 4px rgba(0, 0, 0, 0.25)',
            padding: '5px 0 5px 0',
            textIndent: '15px !important',}}
            data={BootDay}
          />
          <NestedButtonDropdown
            itemId={BootTime.id} // NOTE: itemId is required for track items
            variant="contained"
            sx={{ color: 'rgba(135, 135, 135, 0.5)',
            height:'34px',
            borderRadius: '5px',
            marginTop:'3px',
            marginBottom:'3px',
            backgroundColor: '#121212',
            boxShadow: 'inset 0px 4px 4px rgba(0, 0, 0, 0.25)',
            padding: '5px 0 5px 0',
            textIndent: '15px !important',}}
            data={BootTime}
          />
      </Stack>
      </Grid>
      <Grid item xs={1}>
    
      </Grid>
      <Grid item xs={2.5}>
        <Stack direction="column"  spacing={2}>
      <Typography sx={mainThemeStyle.popUpLable} height={200}> Thumbnail Photo </Typography>
      <Typography sx={mainThemeStyle.popUpLable} height={40}> Pin Length </Typography>
      <Typography sx={mainThemeStyle.popUpLable} height={40}>Delivery PIN </Typography>
      <Typography  sx={mainThemeStyle.popUpLable} height={40}>Brivo Group Name </Typography>
      </Stack>
      </Grid>
      <Grid item xs={2.5}>
        <Stack direction="column"  spacing={2}>
          <Stack direction="row" spacing={2}>
        <img  src={NoImage} height={200} width={200}></img>
        <Button  sx={mainThemeStyle.normalButton} variant="contained" component="label">Upload <input hidden accept="image/*" multiple type="file" /></Button>
        </Stack>
      <Typography sx={mainThemeStyle.popUpLableAnswer} height={40}> 4</Typography>
      <TextField
                        id="input-location"
                        height={40}
                        type= 'text'
                        name="text"
                        value="4548"
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
                        id="input-location"
                        height={40}
                        type= 'text'
                        name="text"
                        value="BrivoSecurity"
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

</Box>)}

{(currentTab == 1 && <Box sx={mainThemeStyle.boxHeaderBelow}>
<div  sx={{
       right: '54px' ,left: '54px',borderRadius:'0px'}}>
               <div style={{ display: 'flex' }}>
                   <Typography variant="h6" component="div" style={{  paddingLeft: '16px',paddingTop: '16px',flexGrow: 1,color:'#fff' }}>
                       Panel Settings
                   </Typography>
                   
               </div>
              
           </div>
           <Divider sx={{backgroundColor:'white'}} />
           <Grid container spacing={2} padding= '32px'> 
      <Grid item xs={2.5}>
        <Stack direction="column"  spacing={2}>
      <Typography sx={mainThemeStyle.popUpLable} height={40}> Welcome Message </Typography>
      <Typography sx={mainThemeStyle.popUpLable} height={40}> License Key </Typography>
      <Typography sx={mainThemeStyle.popUpLable} height={40}> Serial Number </Typography>
      <Typography sx={mainThemeStyle.popUpLable} height={40}> Property Name </Typography>
      <Typography  sx={mainThemeStyle.popUpLable} height={40}>Office Name </Typography>
      <Typography  sx={mainThemeStyle.popUpLable} height={40}>Address Line 1 </Typography>
      <Typography  sx={mainThemeStyle.popUpLable} height={40}>Address Line 2 </Typography>
      <Typography  sx={mainThemeStyle.popUpLable} height={40}>Location Telephone </Typography>
      
      
      </Stack>
      </Grid>
      
      <Grid item xs={2.5}>
      <Stack direction="column"  spacing={2}>
      <TextField
                        id="input-location"
                        height={40}
                        type= 'text'
                        name="text"
                        value="Welcom To Global Security Exchange"
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
                    <Typography sx={mainThemeStyle.popUpLableAnswer}height={40}> 1236562 </Typography>
                    <TextField
                        id="input-location"
                        height={40}
                        type= 'text'
                        name="text"
                        value="BJ052352DEE"
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
                        id="input-location"
                        height={40}
                        type= 'text'
                        name="text"
                        value="Tade Show"
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
                        id="input-location"
                        height={40}
                        type= 'text'
                        name="text"
                        value="Leasing Office"
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
                        id="input-location"
                        height={40}
                        type= 'text'
                        name="text"
                        value="Geordia World Center"
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
                        id="input-location"
                        height={40}
                        type= 'text'
                        name="text"
                        value="Atlanta GE 2022"
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
                        id="input-location"
                        height={40}
                        type= 'text'
                        name="text"
                        value="85623623662"
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
      <Grid item xs={1}>
    
      </Grid>
      <Grid item xs={2.5}>
        <Stack direction="column"  spacing={2}>
        <Typography  sx={mainThemeStyle.popUpLable} height={40}>Location Code </Typography>
      <Typography  sx={mainThemeStyle.popUpLable} height={40}>Refresh Rate(In minutes) </Typography>
      <Typography  sx={mainThemeStyle.popUpLable} height={40}>Setting Refresh Rate(In minutes) </Typography>
      <Typography  sx={mainThemeStyle.popUpLable} height={40}>Screen Layout </Typography>
      <Typography sx={mainThemeStyle.popUpLable} height={40}>Disable Office Button</Typography>
      <Typography  sx={mainThemeStyle.popUpLable} height={40}>Disable Directory Button </Typography>
      <Typography  sx={mainThemeStyle.popUpLable} height={40}>Disable Dilevery PIN Button </Typography>
      
      
      </Stack>
      </Grid>
      <Grid item xs={2.5}>
        <Stack direction="column"  spacing={2}>
         
     
      <Typography sx={mainThemeStyle.popUpLableAnswer}height={40}> 123656285623 </Typography>
      <TextField
                        id="input-location"
                        height={40}
                        type= 'text'
                        name="text"
                        value="5"
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
                        id="input-location"
                        height={40}
                        type= 'text'
                        name="text"
                        value="5"
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
                     <NestedButtonDropdown
            itemId={ScreenLayout.id} // NOTE: itemId is required for track items
            variant="contained"
            sx={{ color: 'rgba(135, 135, 135, 0.5)',
            height:'34px',
            borderRadius: '5px',
            marginTop:'3px',
            marginBottom:'3px',
            backgroundColor: '#121212',
            boxShadow: 'inset 0px 4px 4px rgba(0, 0, 0, 0.25)',
            padding: '5px 0 5px 0',
            textIndent: '15px !important',}}
            data={ScreenLayout}
          />
                    <Checkbox  sx={mainThemeStyle.formCheckBox}/>
                    <Checkbox sx={mainThemeStyle.formCheckBox}/>
                    <Checkbox sx={mainThemeStyle.formCheckBox}/>
                   
      </Stack>
      </Grid>
     
      
      </Grid>

</Box>)}

{(currentTab == 2 && <Box sx={mainThemeStyle.boxHeaderBelow}>
<div  sx={{
       right: '54px' ,left: '54px',borderRadius:'0px'}}>
               <div style={{ display: 'flex' }}>
                   <Typography variant="h6" component="div" style={{  paddingLeft: '16px',paddingTop: '16px',flexGrow: 1,color:'#fff' }}>
                       Relay Settings
                   </Typography>
                   
               </div>
              
           </div>
           <Divider sx={{backgroundColor:'white'}} />
           <Grid container spacing={2} padding= '32px'> 
      <Grid item xs={2.5}>
        <Stack direction="column"  spacing={2}>
      
      <Typography  sx={mainThemeStyle.popUpLable} height={40}>Unlocking Mode </Typography>
      <Typography sx={mainThemeStyle.popUpLable} height={40}>Allow Resident PIN </Typography>
      <Typography sx={mainThemeStyle.popUpLable} height={40}>Allow Guest PIN </Typography>
      <Typography  sx={mainThemeStyle.popUpLable} height={40}>Default Front Door State</Typography>
      <Typography  sx={mainThemeStyle.popUpLable} height={40}>Default Back Door State</Typography>
      <Typography  sx={mainThemeStyle.popUpLable} height={40}>Enable External Wiegand Input</Typography>
      <Typography  sx={mainThemeStyle.popUpLable} height={40}>App User Unlock Mode</Typography>
      </Stack>
      </Grid>
      
      <Grid item xs={2.5}>
      <Stack direction="column"  spacing={2}>
      
      
      <NestedButtonDropdown
            itemId={UnlcokingMode.id} // NOTE: itemId is required for track items
            variant="contained"
            sx={{ color: 'rgba(135, 135, 135, 0.5)',
            height:'34px',
            borderRadius: '5px',
            marginTop:'3px',
            marginBottom:'3px',
            backgroundColor: '#121212',
            boxShadow: 'inset 0px 4px 4px rgba(0, 0, 0, 0.25)',
            padding: '5px 0 5px 0',
            textIndent: '15px !important',}}
            data={UnlcokingMode}
          />
            <Checkbox sx={mainThemeStyle.formCheckBox} />
                    <Checkbox sx={mainThemeStyle.formCheckBox} />
                    <FormControlLabel  sx={mainThemeStyle.popUpLable}
        control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
        label="Open"
      />
                    <FormControlLabel  sx={mainThemeStyle.popUpLable}
        control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
        label="Open"
      />
      <Checkbox sx={mainThemeStyle.formCheckBox}/>
      <NestedButtonDropdown
            itemId={AppUserUnlockMode.id} // NOTE: itemId is required for track items
            variant="contained"
            sx={{ color: 'rgba(135, 135, 135, 0.5)',
            height:'34px',
            borderRadius: '5px',
            marginTop:'3px',
            marginBottom:'3px',
            backgroundColor: '#121212',
            boxShadow: 'inset 0px 4px 4px rgba(0, 0, 0, 0.25)',
            padding: '5px 0 5px 0',
            textIndent: '15px !important',}}
            data={AppUserUnlockMode}
          />
          
      </Stack>
      </Grid>
      <Grid item xs={1}>
    
      </Grid>
      <Grid item xs={2.5}>
        <Stack direction="column"  spacing={2}>
      
    
      
      <Typography  sx={mainThemeStyle.popUpLable} height={40}>Select TIme Zone</Typography>
      <Typography  sx={mainThemeStyle.popUpLable} height={40}>PIN Schedule Time</Typography>
      <Typography  sx={mainThemeStyle.popUpLable} height={40}>Vegax Relay 1 Friendly Name</Typography>
      <Typography  sx={mainThemeStyle.popUpLable} height={40}>Vegax Relay 2 Friendly Name</Typography>
      <Typography  sx={mainThemeStyle.popUpLable} height={40}>Front Door Unlock Duration (Enter Between 0 to 99 Seconds)</Typography>
      <Typography  sx={mainThemeStyle.popUpLable} height={40}>Back Door Unlock Duration (Enter Between 0 to 99 Seconds)</Typography>
      </Stack>
      </Grid>
      <Grid item xs={2.5}>
        <Stack direction="column"  spacing={2}>
         
      
        <TimezoneSelect
          value={selectedTimezone}
          onChange={setSelectedTimezone}
          sx={{ color: 'rgba(135, 135, 135, 0.5)',
          height:'34px',
          borderRadius: '5px',
          marginTop:'3px',
          marginBottom:'3px',
          backgroundColor: '#121212',
          boxShadow: 'inset 0px 4px 4px rgba(0, 0, 0, 0.25)',
          padding: '5px 0 5px 0',
          textIndent: '15px !important',}}
        />    
                
       
<Stack direction="row" spacing={2}>
<NestedButtonDropdown
            itemId={BootDay.id} // NOTE: itemId is required for track items
            variant="contained"
            sx={{ color: 'rgba(135, 135, 135, 0.5)',
            height:'34px',
            borderRadius: '5px',
            marginTop:'3px',
            marginBottom:'3px',
            backgroundColor: '#121212',
            boxShadow: 'inset 0px 4px 4px rgba(0, 0, 0, 0.25)',
            padding: '5px 0 5px 0',
            textIndent: '15px !important',}}
            data={BootDay}
          />
           <Typography sx={mainThemeStyle.popUpLableAnswer}height={40}> To </Typography>
          <NestedButtonDropdown
            itemId={BootDay.id} // NOTE: itemId is required for track items
            variant="contained"
            sx={{ color: 'rgba(135, 135, 135, 0.5)',
            height:'34px',
            borderRadius: '5px',
            marginTop:'3px',
            marginBottom:'3px',
            backgroundColor: '#121212',
            boxShadow: 'inset 0px 4px 4px rgba(0, 0, 0, 0.25)',
            padding: '5px 0 5px 0',
            textIndent: '15px !important',}}
            data={BootDay}
          />
          </Stack>
          <TextField
                        id="input-location"
                        height={40}
                        type= 'text'
                        name="text"
                        value="Relay 1"
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
                        id="input-location"
                        height={40}
                        type= 'text'
                        name="text"
                        value="Relay 2"
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
                        id="input-location"
                        height={40}
                        type= 'text'
                        name="text"
                        value="5"
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
                        id="input-location"
                        height={40}
                        type= 'text'
                        name="text"
                        value="5"
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

</Box>)}
{(currentTab == 3 && <Box sx={mainThemeStyle.boxHeaderBelow}>
<div  sx={{
       right: '54px' ,left: '54px',borderRadius:'0px'}}>
               <div style={{ display: 'flex' }}>
                   <Typography variant="h6" component="div" style={{  paddingLeft: '16px',paddingTop: '16px',flexGrow: 1,color:'#fff' }}>
                       LPR Settings
                   </Typography>
                   
               </div>
              
           </div>
           <Divider sx={{backgroundColor:'white'}} />
           <Grid container spacing={2} padding= '32px'> 
      <Grid item xs={2.5}>
        <Stack direction="column"  spacing={2}>
      
      <Typography  sx={mainThemeStyle.popUpLable} height={40}>LPR Location </Typography>
      <Typography sx={mainThemeStyle.popUpLable} height={40}>LPR Camera 1 Name </Typography>
      <Typography sx={mainThemeStyle.popUpLable} height={40}>LPR Camera 2 Name </Typography>
      
      </Stack>
      </Grid>
      
      <Grid item xs={2.5}>
      <Stack direction="column"  spacing={2}>
      
      
    
            <Checkbox sx={mainThemeStyle.formCheckBox} />
            <TextField
                        id="input-location"
                        height={40}
                        type= 'text'
                        name="text"
                        value="LPR Camera 1"
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
                        id="input-location"
                        height={40}
                        type= 'text'
                        name="text"
                        value="LPR Camera 2"
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

</Box>)}
{(currentTab == 4 && <Box sx={mainThemeStyle.boxHeaderBelow}>
<div  sx={{
       right: '54px' ,left: '54px',borderRadius:'0px'}}>
               <div style={{ display: 'flex' }}>
                   <Typography variant="h6" component="div" style={{  paddingLeft: '16px',paddingTop: '16px',flexGrow: 1,color:'#fff' }}>
                       Hold Open Settings
                   </Typography>
                   
               </div>
              
           </div>
           <Divider sx={{backgroundColor:'white'}} />
      <Grid container spacing={2} padding= '32px'> 
      <Grid item xs={2.5}>
      <Stack direction="column"  spacing={1}>
      <Typography  variant="h6" component="div" style={{ flexGrow: 1,color:'#fff' }}>Enable Hold Open </Typography>
      </Stack>
      </Grid>
      <Grid item xs={2.5}>
      <Stack direction="column"  spacing={2}>
      <FormControlLabel  sx={mainThemeStyle.popUpLable}
        control={<IOSSwitch sx={{ m: 1 }}   onChange={handleChangeEventOfHoldOpen} />}
        
      />
      </Stack>
      </Grid>
      </Grid>
      {enableHoldOpen == 1 && <Grid container spacing={2} padding= '32px'> 
      <Grid item xs={10}>
      <Stack direction="row"  spacing={4}>
      <Typography  sx={mainThemeStyle.popUpLable} height={40}>Indefinite Mode </Typography>
      {holdOpenMode == 0 && 
      <Checkbox sx={mainThemeStyle.formCheckBoxLow}  onClick={()=>handleChangeValueOfHoldOpen(0)} checked={true}/>}
       {holdOpenMode != 0 && 
      <Checkbox sx={mainThemeStyle.formCheckBoxLow}  onClick={()=>handleChangeValueOfHoldOpen(0)} checked={false}/>}
      <Typography  sx={mainThemeStyle.popUpLable} height={40}>Recurring Schedule Mode </Typography>
      {holdOpenMode == 1 && 
      <Checkbox sx={mainThemeStyle.formCheckBoxLow} onClick={()=>handleChangeValueOfHoldOpen(1)} checked={true}/>}

      {holdOpenMode != 1 && 
      <Checkbox sx={mainThemeStyle.formCheckBoxLow} onClick={()=>handleChangeValueOfHoldOpen(1)} checked={false}/>}
      
      <Typography  sx={mainThemeStyle.popUpLable} height={40}>One-Time Schedule Mode </Typography>
      {holdOpenMode == 2 && 
      <Checkbox sx={mainThemeStyle.formCheckBoxLow} onClick={()=>handleChangeValueOfHoldOpen(2)} checked={true}/>}
      {holdOpenMode != 2 && 
      <Checkbox sx={mainThemeStyle.formCheckBoxLow} onClick={()=>handleChangeValueOfHoldOpen(2)} checked={false}/>}
      </Stack>
      </Grid>
      </Grid>}
      
      {enableHoldOpen == 1 && holdOpenMode == 0 &&
      <Grid container spacing={2} padding= '32px'> 
      <Grid item xs={1}>
      <Stack direction="column"  spacing={2}>
      <Typography  sx={mainThemeStyle.popUpLable} height={40}>Relay 1 </Typography>
      <Typography  sx={mainThemeStyle.popUpLable} height={40}>Relay 2 </Typography>
      </Stack>
      </Grid>
      <Grid item xs={1}>
      <Stack direction="column"  spacing={2}>
      <Checkbox sx={mainThemeStyle.formCheckBox} />
      <Checkbox sx={mainThemeStyle.formCheckBox} />
      </Stack>
      </Grid>
      </Grid>}
      
      {enableHoldOpen == 1 && holdOpenMode == 1 &&
      <TableContainer component={Paper} sx={{
        width:'auto',
        height: 'auto',
        marginLeft: '38px',
        marginRight:'38px',
        marginBottom:'38px',
        backgroundColor:'#171E29',
       
        }}>
      <Table sx={{ minWidth: 650 }} >
        
        <TableHead sx={{ borderBottom: "1.2px solid black",
        }}>
          <TableRow>
            
            <TableCell align="center" sx={mainThemeStyle.cellHeader} colSpan={10}>Relay Hold Open Times</TableCell>
            <TableCell align="center" sx={mainThemeStyle.cellHeader} colSpan={2}>Relay Number</TableCell>
          </TableRow>
         
        </TableHead>

        
        <TableHead sx={{ borderBottom: "1.2px solid black",
        }}>
          <TableRow>
          <TableCell align="right" sx={mainThemeStyle.cellHeader}></TableCell>
            <TableCell align="right" sx={mainThemeStyle.cellHeader}>Begin Time</TableCell>
            <TableCell align="right" sx={mainThemeStyle.cellHeader}>End Time</TableCell>
            <TableCell align="right" sx={mainThemeStyle.cellHeader}>S</TableCell>
            <TableCell align="right" sx={mainThemeStyle.cellHeader}>M</TableCell>
            <TableCell align="right" sx={mainThemeStyle.cellHeader}>T</TableCell>
            <TableCell align="right"sx={mainThemeStyle.cellHeader}>W</TableCell>
            <TableCell align="right" sx={mainThemeStyle.cellHeader}>T</TableCell>
            <TableCell align="right" sx={mainThemeStyle.cellHeader}>F</TableCell>
            <TableCell align="right"sx={mainThemeStyle.cellHeader}>S</TableCell>
            <TableCell align="right"sx={mainThemeStyle.cellHeader}>1</TableCell>
            <TableCell align="right"sx={mainThemeStyle.cellHeader}>2</TableCell>
          </TableRow></TableHead>
        <TableBody>
         {rowsHoleOpen.map((row) => (
            <TableRow sx={{ borderBottom: "1.2px solid black",
          }}>
              <TableCell sx={mainThemeStyle.cellRow}>
              {row}
              </TableCell>
              <TableCell align="right"><NestedButtonDropdown
            itemId={BootTime.id} // NOTE: itemId is required for track items
            variant="contained"
            sx={{ color: 'rgba(135, 135, 135, 0.5)',
            height:'34px',
            borderRadius: '5px',
            marginTop:'3px',
            marginBottom:'3px',
            backgroundColor: '#121212',
            boxShadow: 'inset 0px 4px 4px rgba(0, 0, 0, 0.25)',
            padding: '5px 0 5px 0',
            textIndent: '15px !important',}}
            data={BootTime}
          /> </TableCell>
           <TableCell align="right"> <NestedButtonDropdown
            itemId={BootTime.id} // NOTE: itemId is required for track items
            variant="contained"
            sx={{ color: 'rgba(135, 135, 135, 0.5)',
            height:'34px',
            borderRadius: '5px',
            marginTop:'3px',
            marginBottom:'3px',
            backgroundColor: '#121212',
            boxShadow: 'inset 0px 4px 4px rgba(0, 0, 0, 0.25)',
            padding: '5px 0 5px 0',
            textIndent: '15px !important',}}
            data={BootTime}
          /> </TableCell>
              <TableCell align="right"><Checkbox sx={mainThemeStyle.formCheckBox} /></TableCell>
              <TableCell align="right"><Checkbox sx={mainThemeStyle.formCheckBox} /></TableCell>
              <TableCell align="right"><Checkbox sx={mainThemeStyle.formCheckBox} /></TableCell>
              <TableCell align="right"><Checkbox sx={mainThemeStyle.formCheckBox} /></TableCell>
              <TableCell align="right"><Checkbox sx={mainThemeStyle.formCheckBox} /></TableCell>
              <TableCell align="right"><Checkbox sx={mainThemeStyle.formCheckBox} /></TableCell>
              <TableCell align="right"><Checkbox sx={mainThemeStyle.formCheckBox} /></TableCell>
              <TableCell align="right"><Checkbox sx={mainThemeStyle.formCheckBox} /></TableCell>
              <TableCell align="right"><Checkbox sx={mainThemeStyle.formCheckBox} /></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>}

    {enableHoldOpen == 1 && holdOpenMode == 2 &&
    <Grid container spacing={2} padding= '32px'> 
      <Grid item xs={2.5}>
      <Stack direction="column"  spacing={2}>
      <Typography  sx={mainThemeStyle.popUpLable} height={40}>Date</Typography>
      <Typography  sx={mainThemeStyle.popUpLable} height={40}>Start Time</Typography>
      <Typography  sx={mainThemeStyle.popUpLable} height={40}>End Time</Typography>
      <Typography  sx={mainThemeStyle.popUpLable} height={40}>Relay 1</Typography>
      <Typography  sx={mainThemeStyle.popUpLable} height={40}>Relay 2</Typography>
      </Stack>
      </Grid>
      <Grid item xs={2.5}>
      <Stack direction="column"  spacing={2}>
      <TextField
        id="date"
        type="date"
        defaultValue=""
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
      <NestedButtonDropdown
            itemId={BootTime.id} // NOTE: itemId is required for track items
            variant="contained"
            sx={{ color: 'rgba(135, 135, 135, 0.5)',
            height:'34px',
            borderRadius: '5px',
            marginTop:'3px',
            marginBottom:'3px',
            backgroundColor: '#121212',
            boxShadow: 'inset 0px 4px 4px rgba(0, 0, 0, 0.25)',
            padding: '5px 0 5px 0',
            textIndent: '15px !important',}}
            data={BootTime}
          />
          <NestedButtonDropdown
            itemId={BootTime.id} // NOTE: itemId is required for track items
            variant="contained"
            sx={{ color: 'rgba(135, 135, 135, 0.5)',
            height:'34px',
            borderRadius: '5px',
            marginTop:'3px',
            marginBottom:'3px',
            backgroundColor: '#121212',
            boxShadow: 'inset 0px 4px 4px rgba(0, 0, 0, 0.25)',
            padding: '5px 0 5px 0',
            textIndent: '15px !important',}}
            data={BootTime}
          />
      <Checkbox sx={mainThemeStyle.formCheckBox} />
      <Checkbox sx={mainThemeStyle.formCheckBox} />
      </Stack>
      </Grid>
      </Grid>}
</Box>)}

{(currentTab == 5 && <Box sx={mainThemeStyle.boxHeaderBelow}>
<div  sx={{
       right: '54px' ,left: '54px',borderRadius:'0px'}}>
               <div style={{ display: 'flex' }}>
                   <Typography variant="h6" component="div" style={{  paddingLeft: '16px',paddingTop: '16px',flexGrow: 1,color:'#fff' }}>
                       Elevator Control Settings
                   </Typography>
                   
               </div>
              
           </div>
           <Divider sx={{backgroundColor:'white'}} />
      <Grid container spacing={2} padding= '16px'> 
      <Grid item xs={3}>
      <Stack direction="column"  spacing={1}>
      <Typography  variant="h6" component="div" style={{ flexGrow: 1,color:'#fff' }}>Elevator Control Location </Typography>
      </Stack>
      </Grid>
      <Grid item xs={2}>
      <Stack direction="column"  spacing={2}>
      <FormControlLabel  sx={mainThemeStyle.popUpLable}
        control={<IOSSwitch sx={{ m: 1 }} onChange={handleChangeEventOfElevatorControl} />}
        
      />
      </Stack>
      </Grid>
      </Grid>
      
      {enableElevatorControl == 1 && 
      <Grid container spacing={2} padding= '16px'> 
      <Grid item xs={2.5}>
      <Stack direction="column"  spacing={2}>
      <Typography  sx={mainThemeStyle.popUpLable} height={40}>Elevator Controller IP Address</Typography>
      <Typography  sx={mainThemeStyle.popUpLable} height={40}># of System Relays</Typography>
      <Typography  sx={mainThemeStyle.popUpLable} height={40}>Call Elevator Realy Duration</Typography>
      <Typography  sx={mainThemeStyle.popUpLable} height={40}>Floor Release Realy Duration</Typography>
      </Stack>
      </Grid>
      <Grid item xs={2.5}>
      <Stack direction="column"  spacing={2}>
      <TextField
        id="text"
        type="text"
        value="192.168.1.2"
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
        id="text"
        type="test"
        value="9"
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
        id="text"
        type="text"
        value="20"
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
        id="text"
        type="text"
        value="10"
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
      <Grid item xs={2}></Grid>
      <Grid item xs={3}>
      <Stack direction="column"  spacing={2}>
      <Typography  sx={mainThemeStyle.popUpLable} height={40}>Disable Call Elevator</Typography>
      <Typography  sx={mainThemeStyle.popUpLable} height={40}>Disable Floor Release</Typography>
      <Typography  sx={mainThemeStyle.popUpLable} height={40}>Disable Elevator Control For App Unlock</Typography>
      </Stack>
      </Grid>
      <Grid item xs={2}>
      <Stack direction="column"  spacing={2}>
    
      <Checkbox  sx={mainThemeStyle.formCheckBox}/>
      <Checkbox  sx={mainThemeStyle.formCheckBox}/>
      <Checkbox  sx={mainThemeStyle.formCheckBox}/>
      
     
        
      </Stack>
      </Grid>
      </Grid>}
      {enableElevatorControl == 1 && 
      <TableContainer component={Paper} sx={{
        width:'auto',
        height: 'auto',
        marginLeft: '38px',
        marginRight:'38px',
        marginBottom:'38px',
        backgroundColor:'#171E29',
       
        }}>
      <Table sx={{ minWidth: 650 }} >
        
        <TableHead sx={{ borderBottom: "1.2px solid black",
        }}>
          <TableRow>
            
            <TableCell align="center" sx={mainThemeStyle.popUpLable} colSpan={16}>Relay Hold Open Times</TableCell>
            
          </TableRow>
         
        </TableHead>

        
        <TableHead sx={{ borderBottom: "1.2px solid black",
        }}>
          <TableRow>
          <TableCell align="right" sx={mainThemeStyle.cellHeader}> Relay</TableCell>
            <TableCell align="right" sx={mainThemeStyle.cellHeader}>Floor</TableCell>
            <TableCell align="right" sx={mainThemeStyle.cellHeader}> Relay</TableCell>
            <TableCell align="right" sx={mainThemeStyle.cellHeader}>Floor</TableCell>
            <TableCell align="right" sx={mainThemeStyle.cellHeader}> Relay</TableCell>
            <TableCell align="right" sx={mainThemeStyle.cellHeader}>Floor</TableCell>
            <TableCell align="right" sx={mainThemeStyle.cellHeader}> Relay</TableCell>
            <TableCell align="right" sx={mainThemeStyle.cellHeader}>Floor</TableCell>
            <TableCell align="right" sx={mainThemeStyle.cellHeader}> Relay</TableCell>
            <TableCell align="right" sx={mainThemeStyle.cellHeader}>Floor</TableCell>
            <TableCell align="right" sx={mainThemeStyle.cellHeader}> Relay</TableCell>
            <TableCell align="right" sx={mainThemeStyle.cellHeader}>Floor</TableCell>
            <TableCell align="right" sx={mainThemeStyle.cellHeader}> Relay</TableCell>
            <TableCell align="right" sx={mainThemeStyle.cellHeader}>Floor</TableCell>
            <TableCell align="right" sx={mainThemeStyle.cellHeader}> Relay</TableCell>
            <TableCell align="right" sx={mainThemeStyle.cellHeader}>Floor</TableCell>
          </TableRow></TableHead>
        <TableBody>
         {rowsElevatorControl.map((row) => (
            <TableRow sx={{ borderBottom: "1.2px solid black",
          }}>
              <TableCell sx={mainThemeStyle.cellRow}>
              {row*1}
              </TableCell>
              <TableCell align="right"> <TextField
        id="text"
        type="text"
       
       
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
                       
      /></TableCell>
              <TableCell sx={mainThemeStyle.cellRow}>
              {row*2}
              </TableCell>
              <TableCell align="right"> <TextField
        id="text"
        type="text"
       
     
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
                       
      /></TableCell>
      <TableCell sx={mainThemeStyle.cellRow}>
              {row*3}
              </TableCell>
              <TableCell align="right"> <TextField
        id="text"
        type="text"
       
       
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
                       
      /></TableCell>
      <TableCell sx={mainThemeStyle.cellRow}>
              {row*4}
              </TableCell>
              <TableCell align="right"> <TextField
        id="text"
        type="text"
       
       
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
                       
      /></TableCell>
      <TableCell sx={mainThemeStyle.cellRow}>
              {row*5}
              </TableCell>
              <TableCell align="right"> <TextField
        id="text"
        type="text"
       
       
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
                       
      /></TableCell>
      <TableCell sx={mainThemeStyle.cellRow}>
              {row*6}
              </TableCell>
              <TableCell align="right"> <TextField
        id="text"
        type="text"
       
       
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
                       
      /></TableCell>
      <TableCell sx={mainThemeStyle.cellRow}>
              {row*7}
              </TableCell>
              <TableCell align="right"> <TextField
        id="text"
        type="text"
       
      
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
                       
      /></TableCell>
      <TableCell sx={mainThemeStyle.cellRow}>
              {row*8}
              </TableCell>
              <TableCell align="right"> <TextField
        id="text"
        type="text"
       
      
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
                       
      /></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>}


    
</Box>)}
 </> 
          
          
          
          
          ;
};

export default EditLocation;