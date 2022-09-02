import React from "react";
import {  ThemeProvider } from '@mui/material/styles';
import Theme from './components/ItemTheme'
import { Box } from "@mui/system";
import { Button, Grid, List, Typography, Menu,MenuItem } from "@mui/material";
import {mainThemeStyle} from './components/MainTheme';
import { NestedButtonDropdown } from "./components/header/NestedButtonDropdown";
import  NestedButtonDropDownHeader  from "./components/header/NestedButtonDropDownHeader";
import EntryLog from "./EntryLog";
import CallLog from "./CallLog";
import LpTags from "./LpTags";
import { useState } from "react";
import GuestPIN from "./GuestPIN";
import GuestParking from "./GuestParking";
import { useParams,useNavigate  } from "react-router-dom";
import ArrowDownIcon from "@mui/icons-material/ArrowDropDown";
import { useEffect } from "react";
const Activity = props => {
  const navigate = useNavigate();
  const {id} = useParams();
  console.log('id is '+id);
  const theme = Theme;
  const [showLog, setShowLog] = useState(id);
  const headName = [
    { id: 'entrylogs', label: 'Entry Logs' },
    { id: 'calllogs', label: 'Call Logs' },
    { id: 'lptaglogs', label: 'LP Tag Logs' },
    { id: 'guestpin', label: 'Guest PIN' },
    { id: 'guestparking', label: 'Guest Parking' },
  ]
 /* const setParmasShowLog = () =>{
    if(id == 'calllogs'){
      setShowLog(1);
    }
    else if(id == 'lptaglogs'){
      setShowLog(2);
    }
    else if(id == 'guestpin'){
      setShowLog(3);
    }
    else if(id == 'guestparking'){
      setShowLog(4);
    }
    else{
      setShowLog(0);
    }
  }*/
  const params = 'guestlog';
  useEffect(()=>{
    setButtonTextFn(GetHeadName(id));
  },[id]);
  const GetHeadName = () =>{
    console.log('curren name is '+id);
    for(let i = 0; i < headName.length; i++){
      if (headName[i].id == id){
        return headName[i].label;
      }
    }
    return 'Entry Logs' ;
  }
  
  const ActivityMenu = {
    id: "1",
    label: "Entry Logs",
    items: [
      {
        label: "Entry Logs",
        callback: () =>  {navigate('../activity/entrylogs', { replace: true });
       }
       
      },
      {
        label: "Call Logs",
        callback: () =>  {navigate('../activity/calllogs', { replace: true });
        }
      },
      {
        label: "LP Tag Logs",
        callback: () => {navigate('../activity/lptaglogs', { replace: true });
        }
      },
      {
        label: "Guest PIN",
        callback: () => {navigate('../activity/guestpin', { replace: true });
        }
      },
      {
        label: "Guest Parking",
        callback: () => {navigate('../activity/guestparking', { replace: true });
        }
      },
    ]
  };


const [anchorEl, setAnchorEl] = React.useState(null);
 
  const open = Boolean(anchorEl);

  const [buttenText, setButtonText] = React.useState(GetHeadName());
  
  const handleClose = () => setAnchorEl(null);
  
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    
    
  };

  const setButtonTextFn =(value) =>{
    //console.log("item value"+data.items[value].label);
    //setButtonText(data.items[value].label);
    setButtonText(value);
  }


  return (
<ThemeProvider theme={theme}>

    <Box sx={mainThemeStyle.mainbox} backgroundColor="menubarprimary.main">
    <Box sx={mainThemeStyle.box}>
      <Typography sx={mainThemeStyle.lable}>Activity</Typography>
    </Box>
    
          <Button
  variant="outlined"
    onClick={handleClick}
    endIcon={<ArrowDownIcon />}
    sx={mainThemeStyle.activityButton}
   
  >
    { buttenText}
  </Button>
  <Menu anchorEl={anchorEl} open={open} onClose={handleClose} sx={{ mt: "33px" ,borderRadius: 0,"& .MuiList-root":{
                  padding:0
                },"& .MuiPaper-root": {
                  backgroundColor: "#1E1E1E",
                  borderRadius: 0
                }}} anchorOrigin={{
                    vertical: "top",
                    horizontal: "center"
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "center"
                  }}>
   {ActivityMenu.items.map(menuItem => {
              const {  label, callback } = menuItem;
              return (
                <MenuItem onClick={() => {
                  setAnchorEl(null);
                  setButtonText(label);
                  callback();
                }}  sx={
                  {
                  
                  color:"#fff",
                  backgroundColor: "#2F323A",
                  borderBottom: '.5px solid grey',
                  fontFamily: "Lato",fontSize:'12px',
              }}>
                  {label}
                </MenuItem>
              );
            })}
  </Menu>
{(id === 'entrylogs' &&
    <EntryLog/>)
|| (id === 'calllogs' &&
    <CallLog />)
|| (id === 'lptaglogs' &&
    <LpTags />)
|| (id === 'guestpin' &&
    <GuestPIN />)
|| (id === 'guestparking' &&
  <GuestParking />)
||
    <EntryLog />
}
    
    
    </Box>
   
</ThemeProvider>);
};

export default Activity;