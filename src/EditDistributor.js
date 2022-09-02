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


function EditDistributor ( props){

  

  const [currentTab, setCurrentTab] = useState(0);
  const locationAccessName =['Resident Vue Security','Cornerstone Security','One Time Pizza','Open Square','NewYork Gate','Heavy Security','MyDoor View Head office'];
  const groupAccessName =['Beta Tester','James Home','Everyone On The list'];
 
  const handleTabClick =(val) =>{
    setCurrentTab(val);
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

  
  let RFIDCardData = [], licenseData =[],userCallLogData =[],GroupTYPE = ['Yes','No'];
  for (let i =0; i < 5; i++){
    RFIDCardData[i] = {
      id: i,
      generic:faker.random.numeric(8),
      weigand:faker.name.fullName(8),
    }
  }
  for (let i =0; i < 5; i++){
    licenseData[i] = {
      id: i,
      licenseState:faker.random.alpha(2),
      licensePlate:faker.random.alphaNumeric(7),
    }
  }
  for (let i =0; i < 5; i++){
    userCallLogData[i] = {
      id: i,
    locationname:faker.company.name(),
    timestamp:format(faker.date.recent(), 'dd/MM/yyyy'),
    groupcall:GroupTYPE[Math.floor(Math.random()*GroupTYPE.length)],
    }
  }
 
  return <> <Box sx={mainThemeStyle.boxTopHeader}>
     
            
</Box>
<Box sx={mainThemeStyle.boxHeaderBelow}>
<div  sx={{
       right: '54px' ,left: '54px',borderRadius:'0px'}}>
               <div style={{ display: 'flex' }}>
                   <Typography variant="h6" component="div" style={{  paddingLeft: '16px',paddingTop: '16px',flexGrow: 1,color:'#fff' }}>
                       Distributor
                   </Typography>
                   
               </div>
              
           </div>
           <Divider sx={{backgroundColor:'white'}} />
           <Grid container spacing={2} padding= '32px'> 
      <Grid item xs={2.5}>
        <Stack direction="column"  spacing={2}>
      <Typography sx={mainThemeStyle.popUpLable} height={40}> Id </Typography>
      <Typography  sx={mainThemeStyle.popUpLable} height={40}>Name </Typography>
      <Typography  sx={mainThemeStyle.popUpLable} height={40}>Email </Typography>
      <Typography  sx={mainThemeStyle.popUpLable} height={40}>Address </Typography>
      <Typography  sx={mainThemeStyle.popUpLable} height={40}>City </Typography>
      </Stack>
      </Grid>
      
      <Grid item xs={2.5}>
      <Stack direction="column"  spacing={2}>
      <TextField
                       
                        height={40}
                        type= 'text'
                        name="text"
                        value="14"
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
        defaultValue="Jef Angelo"
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
        defaultValue="abc@xyz.com"
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
        defaultValue="Street 1 Avenue"
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
        defaultValue="New York"
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
      <Typography sx={mainThemeStyle.popUpLable} height={40}> State </Typography>
      <Typography sx={mainThemeStyle.popUpLable} height={40}> ZipCode </Typography>
      <Typography sx={mainThemeStyle.popUpLable} height={40}>Company Name </Typography>
      <Typography sx={mainThemeStyle.popUpLable} height={40}>Office Phone #</Typography>
     
      </Stack>
      </Grid>
      <Grid item xs={2.5}>
        <Stack direction="column"  spacing={2}>
        
      
      <TextField
                       
                        height={40}
                        type= 'text'
                        name="text"
                        defaultValue="MD"
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
                        defaultValue="21323"
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
                        defaultValue="Market Place Floyer"
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
                        defaultValue="2132323232"
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

      <div  sx={{
       right: '54px' ,left: '54px',borderRadius:'0px'}}>
               <div style={{ display: 'flex' }}>
                   <Typography variant="h6" component="div" style={{  paddingLeft: '16px',paddingTop: '16px',flexGrow: 1,color:'#fff' }}>
                       Change Distributor Password
                   </Typography>
                   
               </div>
               </div>
               <Divider sx={{backgroundColor:'white'}} />
               <Grid container spacing={2} padding= '32px'> 
               <Grid item xs={2}>
               <Stack direction="column"  spacing={2}>
                <Typography sx={mainThemeStyle.popUpLable} height={40}> New Password </Typography>
                <Typography sx={mainThemeStyle.popUpLable} height={40}> Re-Enter Password </Typography>
                </Stack>
               </Grid>
               <Grid item xs={2}>
               <Stack direction="column"  spacing={2}>
               <TextField
                        
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
                </Stack>
               </Grid>
               </Grid>
</Box>


 </> 
          
          
          
          
          ;
};

export default EditDistributor;