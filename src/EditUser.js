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


function EditUser ( props){

  

  const [currentTab, setCurrentTab] = useState(0);
  const locationAccessName =['Resident Vue Security','Cornerstone Security','One Time Pizza','Open Square','NewYork Gate','Heavy Security','MyDoor View Head office'];
  const groupAccessName =['Beta Tester','James Home','Everyone On The list'];
 
  const handleTabClick =(val) =>{
    setCurrentTab(val);
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
     {(currentTab == 0 && <Stack spacing={2} direction="row">
    <Typography></Typography>
    <Button sx={mainThemeStyle.buttonHeaderGroup} onClick={()=> {handleTabClick(0)}} active>Identity</Button>
    <Button sx={mainThemeStyle.buttonHeaderGroupInactive} onClick={()=> {handleTabClick(1)}}>Manage User Access</Button>
    <Button sx={mainThemeStyle.buttonHeaderGroupInactive} onClick={()=> {handleTabClick(2)}}>Directory</Button>
    <Button sx={mainThemeStyle.buttonHeaderGroupInactive} onClick={()=> {handleTabClick(3)}}>Groups</Button>
    <Button sx={mainThemeStyle.buttonHeaderGroupInactive} onClick={()=> {handleTabClick(4)}}>Credentials</Button>
    <Button sx={mainThemeStyle.buttonHeaderGroupInactive} onClick={()=> {handleTabClick(5)}}>Call Logs</Button>
  </Stack>)}
  {(currentTab == 1 && <Stack spacing={2} direction="row">
    <Typography></Typography>
    <Button sx={mainThemeStyle.buttonHeaderGroupInactive} onClick={()=> {handleTabClick(0)}} active>Identity</Button>
    <Button sx={mainThemeStyle.buttonHeaderGroup} onClick={()=> {handleTabClick(1)}}>Manage User Access</Button>
    <Button sx={mainThemeStyle.buttonHeaderGroupInactive} onClick={()=> {handleTabClick(2)}}>Directory</Button>
    <Button sx={mainThemeStyle.buttonHeaderGroupInactive} onClick={()=> {handleTabClick(3)}}>Groups</Button>
    <Button sx={mainThemeStyle.buttonHeaderGroupInactive} onClick={()=> {handleTabClick(4)}}>Credentials</Button>
    <Button sx={mainThemeStyle.buttonHeaderGroupInactive} onClick={()=> {handleTabClick(5)}}>Call Logs</Button>
  </Stack>)}
  {(currentTab == 2 && <Stack spacing={2} direction="row">
    <Typography></Typography>
    <Button sx={mainThemeStyle.buttonHeaderGroupInactive} onClick={()=> {handleTabClick(0)}} active>Identity</Button>
    <Button sx={mainThemeStyle.buttonHeaderGroupInactive} onClick={()=> {handleTabClick(1)}}>Manage User Access</Button>
    <Button sx={mainThemeStyle.buttonHeaderGroup} onClick={()=> {handleTabClick(2)}}>Directory</Button>
    <Button sx={mainThemeStyle.buttonHeaderGroupInactive} onClick={()=> {handleTabClick(3)}}>Groups</Button>
    <Button sx={mainThemeStyle.buttonHeaderGroupInactive} onClick={()=> {handleTabClick(4)}}>Credentials</Button>
    <Button sx={mainThemeStyle.buttonHeaderGroupInactive} onClick={()=> {handleTabClick(5)}}>Call Logs</Button>
  </Stack>)}
  {(currentTab == 3 && <Stack spacing={2} direction="row">
    <Typography></Typography>
    <Button sx={mainThemeStyle.buttonHeaderGroupInactive} onClick={()=> {handleTabClick(0)}} active>Identity</Button>
    <Button sx={mainThemeStyle.buttonHeaderGroupInactive} onClick={()=> {handleTabClick(1)}}>Manage User Access</Button>
    <Button sx={mainThemeStyle.buttonHeaderGroupInactive} onClick={()=> {handleTabClick(2)}}>Directory</Button>
    <Button sx={mainThemeStyle.buttonHeaderGroup} onClick={()=> {handleTabClick(3)}}>Groups</Button>
    <Button sx={mainThemeStyle.buttonHeaderGroupInactive} onClick={()=> {handleTabClick(4)}}>Credentials</Button>
    <Button sx={mainThemeStyle.buttonHeaderGroupInactive} onClick={()=> {handleTabClick(5)}}>Call Logs</Button>
  </Stack>)}
  {(currentTab == 4 && <Stack spacing={2} direction="row">
    <Typography></Typography>
    <Button sx={mainThemeStyle.buttonHeaderGroupInactive} onClick={()=> {handleTabClick(0)}} active>Identity</Button>
    <Button sx={mainThemeStyle.buttonHeaderGroupInactive} onClick={()=> {handleTabClick(1)}}>Manage User Access</Button>
    <Button sx={mainThemeStyle.buttonHeaderGroupInactive} onClick={()=> {handleTabClick(2)}}>Directory</Button>
    <Button sx={mainThemeStyle.buttonHeaderGroupInactive} onClick={()=> {handleTabClick(3)}}>Groups</Button>
    <Button sx={mainThemeStyle.buttonHeaderGroup} onClick={()=> {handleTabClick(4)}}>Credentials</Button>
    <Button sx={mainThemeStyle.buttonHeaderGroupInactive} onClick={()=> {handleTabClick(5)}}>Call Logs</Button>
  </Stack>)}
  {(currentTab == 5 && <Stack spacing={2} direction="row">
    <Typography></Typography>
    <Button sx={mainThemeStyle.buttonHeaderGroupInactive} onClick={()=> {handleTabClick(0)}} active>Identity</Button>
    <Button sx={mainThemeStyle.buttonHeaderGroupInactive} onClick={()=> {handleTabClick(1)}}>Manage User Access</Button>
    <Button sx={mainThemeStyle.buttonHeaderGroupInactive} onClick={()=> {handleTabClick(2)}}>Directory</Button>
    <Button sx={mainThemeStyle.buttonHeaderGroupInactive} onClick={()=> {handleTabClick(3)}}>Groups</Button>
    <Button sx={mainThemeStyle.buttonHeaderGroupInactive} onClick={()=> {handleTabClick(4)}}>Credentials</Button>
    <Button sx={mainThemeStyle.buttonHeaderGroup} onClick={()=> {handleTabClick(5)}}>Call Logs</Button>
  </Stack>)}
  
            
</Box>
{(currentTab == 0 && <Box sx={mainThemeStyle.boxHeaderBelow}>
<div  sx={{
       right: '54px' ,left: '54px',borderRadius:'0px'}}>
               <div style={{ display: 'flex' }}>
                   <Typography variant="h6" component="div" style={{  paddingLeft: '16px',paddingTop: '16px',flexGrow: 1,color:'#fff' }}>
                       User Identity
                   </Typography>
                   
               </div>
              
           </div>
           <Divider sx={{backgroundColor:'white'}} />
           <Grid container spacing={2} padding= '32px'> 
      <Grid item xs={2.5}>
        <Stack direction="column"  spacing={2}>
      <Typography sx={mainThemeStyle.popUpLable} height={40}> First Name </Typography>
      <Typography sx={mainThemeStyle.popUpLable} height={40}> Last Name </Typography>
      <Typography sx={mainThemeStyle.popUpLable} height={40}> Unit Number </Typography>
      <Typography  sx={mainThemeStyle.popUpLable} height={40}>User Floor</Typography>
      <Typography  sx={mainThemeStyle.popUpLable} height={40}>Expiry Date </Typography>
      </Stack>
      </Grid>
      
      <Grid item xs={2.5}>
      <Stack direction="column"  spacing={2}>
      <TextField
                       
                        height={40}
                        type= 'text'
                        name="text"
                        value="Robert"
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
                        value="Fox"
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
      <TextField
        type="text"
        value="3"
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
        id="date"
        type="date"
        defaultValue="10/15/2025"
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
      <Typography sx={mainThemeStyle.popUpLable} height={200}> User Image </Typography>
      <Typography sx={mainThemeStyle.popUpLable} height={40}> Email </Typography>
      <Typography sx={mainThemeStyle.popUpLable} height={40}>Phone </Typography>
      </Stack>
      </Grid>
      <Grid item xs={2.5}>
        <Stack direction="column"  spacing={2}>
          <Stack direction="row" spacing={2}>
        <img  src={NoImage} height={200} width={200}></img>
        <Button  sx={mainThemeStyle.normalButton} variant="contained" component="label">Upload <input hidden accept="image/*" multiple type="file" /></Button>
        </Stack>
      
      <TextField
                       
                        height={40}
                        type= 'text'
                        name="text"
                        value="robert@xyz.com"
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
                        value="7874235230"
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
                       User Details
                   </Typography>
                   
               </div>
               </div>
               <Divider sx={{backgroundColor:'white'}} />
               <Grid container spacing={2} padding= '32px'> 
               <Grid item xs={2}>
               <Stack direction="column"  spacing={2}>
                <Typography sx={mainThemeStyle.popUpLable} height={40}> User Status </Typography>
                <Typography sx={mainThemeStyle.popUpLable} height={40}> Created </Typography>
                <Typography sx={mainThemeStyle.popUpLable} height={40}> Updated </Typography>
                </Stack>
               </Grid>
               <Grid item xs={2}>
               <Stack direction="column"  spacing={2}>
                <Typography sx={mainThemeStyle.popUpLableAnswerGreen} height={40}> ACTIVE </Typography>
                <Typography sx={mainThemeStyle.popUpLableAnswer} height={40}> 10/15/2019 </Typography>
                <Typography sx={mainThemeStyle.popUpLableAnswer} height={40}> 1015/2022 </Typography>
                </Stack>
               </Grid>
               </Grid>
</Box>)}

{(currentTab == 1 && <Box sx={mainThemeStyle.boxHeaderBelow}>
<div  sx={{
       right: '54px' ,left: '54px',borderRadius:'0px'}}>
               <div style={{ display: 'flex' }}>
                   <Typography variant="h6" component="div" style={{  paddingLeft: '16px',paddingTop: '16px',flexGrow: 1,color:'#fff' }}>
                       Manage User Access
                   </Typography>
                   
               </div>
              
           </div>
           <Divider sx={{backgroundColor:'white'}} />
           <TableContainer component={Paper} sx={{
        width:'auto',
        height: 'auto',
        marginLeft: '38px',
        marginRight:'38px',
        marginBottom:'38px',
        marginTop:'32px',
        backgroundColor:'#171E29',
       
        }}>
      <Table sx={{ minWidth: 650 }} >
        
        <TableHead sx={{ borderBottom: "1.2px solid black",
        }}>
          <TableRow>
            
            <TableCell align="left" sx={mainThemeStyle.cellHeader} >Location Name</TableCell>
            <TableCell align="right" sx={mainThemeStyle.cellHeader} >Access</TableCell>
          </TableRow>
         
        </TableHead>

        <TableBody>
         {locationAccessName.map((row) => (
            <TableRow sx={{ borderBottom: "1.2px solid black",
          }}>
              <TableCell sx={mainThemeStyle.cellRow}>
              {row}
              </TableCell>
              <TableCell align="right"><Checkbox sx={mainThemeStyle.formCheckBox} /></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

</Box>)}

{(currentTab == 2 && <Box sx={mainThemeStyle.boxHeaderBelow}>
<div  sx={{
       right: '54px' ,left: '54px',borderRadius:'0px'}}>
               <div style={{ display: 'flex' }}>
                   <Typography variant="h6" component="div" style={{  paddingLeft: '16px',paddingTop: '16px',flexGrow: 1,color:'#fff' }}>
                       Directory
                   </Typography>
                   
               </div>
              
           </div>
           <Divider sx={{backgroundColor:'white'}} />
           <TableContainer component={Paper} sx={{
        width:'auto',
        height: 'auto',
        marginLeft: '38px',
        marginRight:'38px',
        marginBottom:'38px',
        marginTop:'32px',
        backgroundColor:'#171E29',
       
        }}>
      <Table sx={{ minWidth: 650 }} >
        
        <TableHead sx={{ borderBottom: "1.2px solid black",
        }}>
          <TableRow>
            
            <TableCell align="left" sx={mainThemeStyle.cellHeader}>Location Name</TableCell>
            <TableCell align="left" sx={mainThemeStyle.cellHeader} >Door PIN</TableCell>
            <TableCell align="left" sx={mainThemeStyle.cellHeader}>Dial Code</TableCell>
            <TableCell align="left" sx={mainThemeStyle.cellHeader} >Hide From Directory</TableCell>
          </TableRow>
         
        </TableHead>

        <TableBody>
         {locationAccessName.map((row) => (
            <TableRow sx={{ borderBottom: "1.2px solid black",
          }}>
              <TableCell align="left" sx={mainThemeStyle.cellRow}>
              {row}
              </TableCell>
              <TableCell align="left"> <TextField
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
      <TableCell align="left"> <TextField
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
              <TableCell align="left"><Checkbox sx={mainThemeStyle.formCheckBox} /></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>


</Box>)}
{(currentTab == 3 && <Box sx={mainThemeStyle.boxHeaderBelow}>
<div  sx={{
       right: '54px' ,left: '54px',borderRadius:'0px'}}>
               <div style={{ display: 'flex' }}>
                   <Typography variant="h6" component="div" style={{  paddingLeft: '16px',paddingTop: '16px',flexGrow: 1,color:'#fff' }}>
                       Groups
                   </Typography>
                   
               </div>
              
           </div>
           <Divider sx={{backgroundColor:'white'}} />
           <TableContainer component={Paper} sx={{
        width:'auto',
        height: 'auto',
        marginLeft: '38px',
        marginRight:'38px',
        marginBottom:'38px',
        marginTop:'32px',
        backgroundColor:'#171E29',
       
        }}>
      <Table sx={{ minWidth: 650 }} >
        
        <TableHead sx={{ borderBottom: "1.2px solid black",
        }}>
          <TableRow>
            
            <TableCell align="left" sx={mainThemeStyle.cellHeader} >Group Name</TableCell>
            <TableCell align="left" sx={mainThemeStyle.cellHeader}>Action</TableCell>
           
          </TableRow>
         
        </TableHead>

        <TableBody>
         {groupAccessName.map((row) => (
            <TableRow sx={{ borderBottom: "1.2px solid black",
          }}>
              <TableCell align="left" sx={mainThemeStyle.cellRow}>
              <TextField
        id="text"
        type="text"
       value={row}
       
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
              </TableCell>
              <TableCell align="left"> <Button  sx={mainThemeStyle.viewLogButton}>Delete</Button></TableCell>
   
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
</Box>)}
{(currentTab == 4 && <Box sx={mainThemeStyle.boxHeaderBelow}>
<div  sx={{
       right: '54px' ,left: '54px',borderRadius:'0px'}}>
               <div style={{ display: 'flex' }}>
                   <Typography variant="h6" component="div" style={{  paddingLeft: '16px',paddingTop: '16px',flexGrow: 1,color:'#fff' }}>
                       Credentials
                   </Typography>
                   
               </div>
              
           </div>
           <Divider sx={{backgroundColor:'white'}} />
           <Grid container spacing={2} padding= '32px'  height={60}> 
      <Grid item xs={2}>
        <Stack direction="column"  spacing={2} >
      <Typography sx={mainThemeStyle.popUpLable} height={40}> Add RFID Card Number </Typography>
      
      </Stack>
      </Grid>
      
      <Grid item xs={3}>
      <Stack direction="row"  spacing={2}>
      <TextField
                       
                        height={40}
                        type= 'text'
                        name="text"
                        value="Robert"
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
      <Button sx={mainThemeStyle.normalButton} >Add</Button>
          
      </Stack>
      </Grid>
      <Grid item xs={1}>
    
      </Grid>
      <Grid item xs={1.5}>
        <Stack direction="column"  spacing={2}>
      <Typography sx={mainThemeStyle.popUpLable} height={200}> Add License </Typography>
      </Stack>
      </Grid>
      <Grid item xs={3.5}>
        <Stack direction="column"  spacing={2}>
          <Stack direction="row" spacing={2}>
          <TextField
                       
                       height={40}
                       type= 'text'
                       name="text"
                       placeholder="License State"
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
                      
                   /><TextField
                       
                   height={40}
                   type= 'text'
                   name="text"
                   placeholder="License Plate"
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
        <Button  sx={mainThemeStyle.normalButton} >Add </Button>
        </Stack>
      </Stack>
      </Grid>
      
      </Grid>
      <Typography sx={mainThemeStyle.popUpLableRedSmall} height={40} padding= '32px'> Entering format: Generic (10 digit format,e.g. 0003849138) </Typography>
      <Grid container  padding= '32px'>
       
      <Grid item xs={5}>
        <TableContainer  component={Paper} sx={{
        width:'auto',
        height: 'auto',
       
        backgroundColor:'#171E29',
       
        }}>
      <Table >
        
       

        
        <TableHead sx={{ borderBottom: "1.2px solid black",
        }}>
          <TableRow>
          <TableCell align="left" sx={mainThemeStyle.cellHeader}> Sr. No.</TableCell>
            <TableCell align="left" sx={mainThemeStyle.cellHeader}>Generic Card #</TableCell>
            <TableCell align="left" sx={mainThemeStyle.cellHeader}> 26 bit Weigand #</TableCell>
            <TableCell align="left" sx={mainThemeStyle.cellHeader}>Action</TableCell>
          </TableRow></TableHead>
        <TableBody>
         {RFIDCardData.map((row) => (
            <TableRow sx={{ borderBottom: "1.2px solid black",
          }}>
              <TableCell align="left" sx={mainThemeStyle.cellRow}>
              {row.id}
              </TableCell>
              <TableCell  align="left" sx={mainThemeStyle.cellRow}> {row.generic}</TableCell>
              <TableCell  align="left" sx={mainThemeStyle.cellRow}> {row.weigand}</TableCell>
              <TableCell align="left"> <Button  sx={mainThemeStyle.viewLogButton}>Delete</Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Grid>
    <Grid item xs={2}>
    
    </Grid>
    <Grid item xs={5}>
        <TableContainer component={Paper} sx={{
        width:'auto',
        height: 'auto',
      
        backgroundColor:'#171E29',
       
        }}>
      <Table >
        
       

        
        <TableHead sx={{ borderBottom: "1.2px solid black",
        }}>
          <TableRow>
          <TableCell align="left" sx={mainThemeStyle.cellHeader}> Sr. No.</TableCell>
            <TableCell align="left" sx={mainThemeStyle.cellHeader}>License State</TableCell>
            <TableCell align="left" sx={mainThemeStyle.cellHeader}> License Number</TableCell>
            <TableCell align="left" sx={mainThemeStyle.cellHeader}>Action</TableCell>
          </TableRow></TableHead>
        <TableBody>
         {licenseData.map((row) => (
            <TableRow sx={{ borderBottom: "1.2px solid black",
          }}>
              <TableCell align="left" sx={mainThemeStyle.cellRow}>
              {row.id}
              </TableCell>
              <TableCell  align="left" sx={mainThemeStyle.cellRow}> {row.licenseState}</TableCell>
              <TableCell   align="left" sx={mainThemeStyle.cellRow}> {row.licensePlate}</TableCell>
              <TableCell align="left"> <Button  sx={mainThemeStyle.viewLogButton}>Delete</Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Grid>
      </Grid>
      
</Box>)}

{(currentTab == 5 && <Box sx={mainThemeStyle.boxHeaderBelow}>
<div  sx={{
       right: '54px' ,left: '54px',borderRadius:'0px'}}>
               <div style={{ display: 'flex' }}>
                   <Typography variant="h6" component="div" style={{  paddingLeft: '16px',paddingTop: '16px',flexGrow: 1,color:'#fff' }}>
                       User Call Log
                   </Typography>
                   
               </div>
              
           </div>
           <Divider sx={{backgroundColor:'white'}} />
     

           <TableContainer component={Paper} sx={{
        width:'auto',
        height: 'auto',
        marginLeft: '38px',
        marginRight:'38px',
        marginBottom:'38px',
        marginTop:'32px',
        backgroundColor:'#171E29',
       
        }}>
      <Table sx={{ minWidth: 250 }} >
        
       

        
        <TableHead sx={{ borderBottom: "1.2px solid black",
        }}>
          <TableRow>
          <TableCell align="left" sx={mainThemeStyle.cellHeader}> Sr. No.</TableCell>
            <TableCell align="left" sx={mainThemeStyle.cellHeader}>Location Name</TableCell>
            <TableCell align="left" sx={mainThemeStyle.cellHeader}> Timestamp</TableCell>
            <TableCell align="left" sx={mainThemeStyle.cellHeader}>Group Call</TableCell>
          </TableRow></TableHead>
        <TableBody>
         {userCallLogData.map((row) => (
            <TableRow sx={{ borderBottom: "1.2px solid black",
          }}>
              <TableCell sx={mainThemeStyle.cellRow} align="left">
              {row.id}
              </TableCell>
              <TableCell  align="left" sx={mainThemeStyle.cellRow}> {row.locationname}</TableCell>
              <TableCell align="left"  sx={mainThemeStyle.cellRow}> {row.timestamp}</TableCell>
              <TableCell  align="left" sx={mainThemeStyle.cellRow}> {row.groupcall}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    
</Box>)}
 </> 
          
          
          
          
          ;
};

export default EditUser;