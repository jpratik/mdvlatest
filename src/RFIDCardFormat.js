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


function RFIDCardFormat ( props){

  
  const groupAccessName =['Beta Tester','James Home','Everyone On The list'];

  const CardFormat = {
    id: "1",
    label: "Generic",
    items: [
      {
        label: "Generic",
        callback: () =>  {}
      },
      {
        label: "26 Bt Weiand",
        callback: () =>  {}
      },
    ]
  }
  const handleSaveCardFormat = () => {

  }
  return <> <Box sx={mainThemeStyle.boxTopHeader}>
  
</Box>
<Box sx={mainThemeStyle.boxHeaderBelow}>
<div  sx={{
       right: '54px' ,left: '54px',borderRadius:'0px'}}>
               <div style={{ display: 'flex' }}>
              
                   <Typography variant="h6" component="div" style={{  paddingLeft: '16px',paddingTop: '16px',flexGrow: 1,color:'#fff' }}>
                       Manage RFID Card Format
                   </Typography>
                   
               </div>
              
           </div>
           <Divider sx={{backgroundColor:'white'}} />
   
           <Grid container spacing={2} padding= '32px'> 
      <Grid item xs={2.5}>
        <Stack direction="column"  spacing={2}>
      <Typography sx={mainThemeStyle.popUpLable} height={40}> RFID Card Format </Typography>
      <Button sx={mainThemeStyle.normalButton} onClick={handleSaveCardFormat}>Save RFID Card Format</Button>
      </Stack>
      </Grid>
      
      <Grid item xs={2.5}>
      <Stack direction="column"  spacing={2}>
      <NestedButtonDropdown
            itemId={CardFormat.id} // NOTE: itemId is required for track items
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
            data={CardFormat}
          />
      </Stack>
    
      
      </Grid>
     
     
      
      </Grid>


</Box>

 </> 
          
          
          
          
          ;
};

export default RFIDCardFormat;