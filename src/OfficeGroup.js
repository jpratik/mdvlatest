
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


function OfficeGroup ( props){

  const [openSnack, setOpenSnack] = React.useState(false);
  const groupAccessName =['Beta Tester','James Home','Everyone On The list'];
  const [iPhoneUser, setiPhoneUser] = useState('James Webb');
  const [androidUser, setAndroidUser] = useState('Derek Masa');
  const [showTable, setShowTable] = useState(0);
  const handleCloseSnack= (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSnack(false);
  };
  const handleAddMessage = () => {
    setOpenSnack(true);
   
  }
  let iPhoneUserData = [], androidUserData =[],residentUserData =[];
  for (let i =0; i < 5; i++){
    iPhoneUserData[i] = {
      id: i,
      username:faker.name.fullName(),
      email:faker.internet.email(),
      phone:faker.phone.number('(###) ###-####'),
    }
  }
  for (let i =0; i < 5; i++){
    androidUserData[i] = {
      id: i,
      username:faker.name.fullName(),
      email:faker.internet.email(),
      phone:faker.phone.number('(###) ###-####'),
    }
  }
  for (let i =0; i < 5; i++){
    residentUserData[i] = {
      id: i,
      username:faker.name.fullName(),
      email:faker.internet.email(),
      phone:faker.phone.number('(###) ###-####'),
    }
  }
  const showTableOfSelcted = {
    id: "1",
    label: "iPhone Office Group",
    items: [
      {
        label: "iPhone Office Group",
        callback: () =>  {
        setShowTable(0);
        },
      },
      {
        label: "Android Office Group",
        callback: () =>  {
        setShowTable(1);
        },
      },
      {
        label: "ResidentVue Office Group",
        callback: () =>  {
        setShowTable(2);
        },
      },
      
    ]
  };
  const iPhoneUserMenu = {
    id: "1",
    label: "James Webb",
    items: [
      {
        label: "James Webb",
        callback: () =>  {
        setiPhoneUser("James Webb");
        },
      },
      {
        label: "Carl Roxx",
        callback: () =>  {
          setiPhoneUser("Carl Roxx");
        }
      },
      {
        label: "Elon Musk",
        callback: () => {
          setiPhoneUser("Elon Musk");
        }
      },
      
    ]
  };
  const AndroidUserMenu = {
    id: "1",
    label: "Derek Masa",
    items: [
      {
        label: "Derek Masa",
        callback: () =>  {
          setAndroidUser("Derek Masa");
        },
      },
      {
        label: "Apple Fiona",
        callback: () =>  {
          setAndroidUser("Apple Fiona");
        }
      },
      {
        label: "Robert Junior",
        callback: () => {
          setAndroidUser("Robert Junior");
        }
      },
      
    ]
  };
  return <> <Box sx={mainThemeStyle.boxTopHeader}>
  
</Box>
<Box sx={mainThemeStyle.boxHeaderBelow}>
<div  sx={{
       right: '54px' ,left: '54px',borderRadius:'0px'}}>
               <div style={{ display: 'flex' }}>
                <Stack direction='row' spacing={2} padding={2}>

                <NestedButtonDropdown
            itemId={showTableOfSelcted.id} // NOTE: itemId is required for track items
            variant="contained"
            sx={mainThemeStyle.filterButtonCenter}
            data={showTableOfSelcted}
          />


               {(showTable == 0 && <Typography variant="h6" component="div" style={{  paddingLeft: '16px',paddingTop: '16px',flexGrow: 1,color:'#fff' }}>
                       Add Iphone User
                   </Typography>)}    
                   {(showTable == 0 &&  <NestedButtonDropdown
            itemId={iPhoneUserMenu.id} // NOTE: itemId is required for track items
            variant="contained"
            sx={mainThemeStyle.filterButtonCenter}
            data={iPhoneUserMenu}
          />)} 
     {(showTable == 0 && <Button sx={mainThemeStyle.normalButtonDown} onClick={handleAddMessage}> Add </Button>)}

     {(showTable == 1 && <Typography variant="h6" component="div" style={{  paddingLeft: '16px',paddingTop: '16px',flexGrow: 1,color:'#fff' }}>
                       Add Android User
                   </Typography>)}
                   {(showTable == 1 && <NestedButtonDropdown
            itemId={AndroidUserMenu.id} // NOTE: itemId is required for track items
            variant="contained"
            sx={mainThemeStyle.filterButtonCenter}
            data={AndroidUserMenu}
          />)}
                   {(showTable == 1 && <Button sx={mainThemeStyle.normalButtonDown} onClick={handleAddMessage}> Add </Button>)}
      </Stack>
               </div>
              
           </div>
           <Divider sx={{backgroundColor:'white'}} />
   
         
       
           {(showTable == 0 && 
        <TableContainer  component={Paper} sx={{
        width:'auto',
        height: 'auto',
        marginLeft: '38px',
        marginRight:'38px',
        marginBottom:'38px',
        marginTop:'32px',
        backgroundColor:'#171E29',
       
        }}>
      <Table >
        
       

      <TableHead sx={{ borderBottom: "1.2px solid black",
        }}>
          <TableRow>
            
            <TableCell align="center" sx={mainThemeStyle.popUpLable} colSpan={4}>Iphone User</TableCell>
            
          </TableRow>
         
        </TableHead>
        <TableHead sx={{ borderBottom: "1.2px solid black",
        }}>
          <TableRow>
          <TableCell align="left" sx={mainThemeStyle.cellHeader}> User Name</TableCell>
            <TableCell align="left" sx={mainThemeStyle.cellHeader}>Email</TableCell>
            <TableCell align="left" sx={mainThemeStyle.cellHeader}> Phone #</TableCell>
            <TableCell align="left" sx={mainThemeStyle.cellHeader}>Action</TableCell>
          </TableRow></TableHead>
        <TableBody>
         {iPhoneUserData.map((row) => (
            <TableRow sx={{ borderBottom: "1.2px solid black",
          }}>
              <TableCell align="left" sx={mainThemeStyle.cellRow}>
              {row.username}
              </TableCell>
              <TableCell  align="left" sx={mainThemeStyle.cellRow}> {row.email}</TableCell>
              <TableCell  align="left" sx={mainThemeStyle.cellRow}> {row.phone}</TableCell>
              <TableCell align="left"> <Button  sx={mainThemeStyle.viewLogButton} onClick={handleAddMessage}>Delete</Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>)}

    
    {(showTable == 1 && 
    <TableContainer  component={Paper} sx={{
        width:'auto',
        height: 'auto',
        marginLeft: '38px',
        marginRight:'38px',
        marginBottom:'38px',
        marginTop:'32px',
        backgroundColor:'#171E29',
       
        }}>
      <Table >
        
       

      <TableHead sx={{ borderBottom: "1.2px solid black",
        }}>
          <TableRow>
            
            <TableCell align="center" sx={mainThemeStyle.popUpLable} colSpan={4}>Android User</TableCell>
            
          </TableRow>
         
        </TableHead>
        <TableHead sx={{ borderBottom: "1.2px solid black",
        }}>
          <TableRow>
          <TableCell align="left" sx={mainThemeStyle.cellHeader}> User Name</TableCell>
            <TableCell align="left" sx={mainThemeStyle.cellHeader}>Email</TableCell>
            <TableCell align="left" sx={mainThemeStyle.cellHeader}> Phone #</TableCell>
            <TableCell align="left" sx={mainThemeStyle.cellHeader}>Action</TableCell>
          </TableRow></TableHead>
        <TableBody>
         {androidUserData.map((row) => (
            <TableRow sx={{ borderBottom: "1.2px solid black",
          }}>
              <TableCell align="left" sx={mainThemeStyle.cellRow}>
              {row.username}
              </TableCell>
              <TableCell  align="left" sx={mainThemeStyle.cellRow}> {row.email}</TableCell>
              <TableCell  align="left" sx={mainThemeStyle.cellRow}> {row.phone}</TableCell>
              <TableCell align="left"> <Button  sx={mainThemeStyle.viewLogButton} onClick={handleAddMessage}>Delete</Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>)}
    
    {(showTable == 2 && 
    <TableContainer  component={Paper} sx={{
        width:'auto',
        height: 'auto',
        marginLeft: '38px',
        marginRight:'38px',
        marginBottom:'38px',
        marginTop:'32px',
        backgroundColor:'#171E29',
       
        }}>
      <Table >
        
       

      <TableHead sx={{ borderBottom: "1.2px solid black",
        }}>
          <TableRow>
            
            <TableCell align="center" sx={mainThemeStyle.popUpLable} colSpan={4}>ResidentLink User</TableCell>
            
          </TableRow>
         
        </TableHead>
        <TableHead sx={{ borderBottom: "1.2px solid black",
        }}>
          <TableRow>
          <TableCell align="left" sx={mainThemeStyle.cellHeader}> User Name</TableCell>
            <TableCell align="left" sx={mainThemeStyle.cellHeader}>Email</TableCell>
            <TableCell align="left" sx={mainThemeStyle.cellHeader}> Phone #</TableCell>
            <TableCell align="left" sx={mainThemeStyle.cellHeader}>Action</TableCell>
          </TableRow></TableHead>
        <TableBody>
         {residentUserData.map((row) => (
            <TableRow sx={{ borderBottom: "1.2px solid black",
          }}>
              <TableCell align="left" sx={mainThemeStyle.cellRow}>
              {row.username}
              </TableCell>
              <TableCell  align="left" sx={mainThemeStyle.cellRow}> {row.email}</TableCell>
              <TableCell  align="left" sx={mainThemeStyle.cellRow}> {row.phone}</TableCell>
              <TableCell align="left"> <Stack direction="row" spacing={1} >
                <Typography></Typography>
                 <Button  sx={mainThemeStyle.viewLogButton} onClick={handleAddMessage}>Enable</Button>
                 <Button  sx={mainThemeStyle.viewLogButton} onClick={handleAddMessage}>Disable</Button></Stack></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>)}
   


</Box>
<Snackbar open={openSnack} autoHideDuration={6000} onClose={handleCloseSnack}>
        <Alert onClose={handleCloseSnack} severity="success" sx={{ width: '100%' }}>
          This is a success message!
        </Alert>
      </Snackbar>
 </> 
          
          
          
          
          ;
};

export default OfficeGroup;