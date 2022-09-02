import React from "react";
import {  ThemeProvider } from '@mui/material/styles';
import Theme from './components/ItemTheme'
import { Box } from "@mui/system";
import { Button, Grid, List, Typography } from "@mui/material";
import {mainThemeStyle} from './components/MainTheme';
import { NestedButtonDropdown } from "./components/header/NestedButtonDropdown";
import  NestedButtonDropDownHeader  from "./components/header/NestedButtonDropDownHeader";
import ManageLocation from "./ManageLocation";
import CallLog from "./CallLog";
import AddIcon from '@mui/icons-material/Add';
import LpTags from "./LpTags";
import { useState } from "react";
import ManageUsers from "./ManageUsers";
import { useParams,useNavigate  } from "react-router-dom";
import { useEffect } from "react";
import EditUser from "./EditUser";
import AddUser from "./AddUser";
import CallingGroup from "./CallingGroup";
import API from "./API";
import LPBlackList from "./LPBlacklist";
import PINBlackList from "./PINBlacklist";
import RFIDCardFormat from "./RFIDCardFormat";
import PropertyContact from "./PropertyContact";
import Passwords from "./Passwords";
import Profile from "./Profile";
import OfficeGroup from "./OfficeGroup";
const SetUp = props => {
  console.log("IN location Page");
  const navigate = useNavigate();
  const {id} = useParams();
  console.log('id is '+id);
  const theme = Theme;
  const [showLog, setShowLog] = useState(id);
 
  useEffect(()=>{
   
  },[id]);

  
  
 const handleRFID = () =>{
  navigate('../setup/rfidcardformat', { replace: true });
 }
 const handleAPI = () =>{
  navigate('../setup/API', { replace: true });
}
const handlePINBlacklist = ()=>{
  navigate('../setup/blacklist/pinblacklist', { replace: true });
}

const handleLPBlacklist = ()=>{
  navigate('../setup/blacklist/lpblacklist', { replace: true });
}

const handleProfile = ()=>{
  navigate('../setup/account/profile', { replace: true });
}
const handleProperty = ()=>{
  navigate('../setup/account/property', { replace: true });
}

  return (
<ThemeProvider theme={theme}>

    <Box sx={mainThemeStyle.mainbox} backgroundColor="menubarprimary.main">
    <Box sx={mainThemeStyle.box}>
    {(id === 'API' &&  <Typography sx={mainThemeStyle.lable}>Set Up API</Typography>)}
    {(id === 'rfidcardformat' &&  <Typography sx={mainThemeStyle.lable}>Set Up RFID Card Format</Typography>)}
    {(id === 'lpblacklist' &&  <Typography sx={mainThemeStyle.lable}>Set Up LP Blacklist</Typography>)}
    {(id === 'pinblacklist' &&  <Typography sx={mainThemeStyle.lable}>Set Up PIN Blacklist</Typography>)}
    {(id === 'property' &&  <Typography sx={mainThemeStyle.lable}>Property</Typography>)}
    {(id === 'password' &&  <Typography sx={mainThemeStyle.lable}>Password</Typography>)}
    {(id === 'profile' &&  <Typography sx={mainThemeStyle.lable}>Profile</Typography>)}
    
    
    </Box>
    {(id === 'API' && <Button sx={mainThemeStyle.activityButton} onClick={handleRFID} >RFID Card Format</Button>)}
    {(id === 'rfidcardformat' && <Button sx={mainThemeStyle.activityButton} onClick={handleAPI} >API</Button>)}
    {(id === 'lpblacklist' &&  <Button sx={mainThemeStyle.activityButton} onClick={handlePINBlacklist} >PIN Blacklist</Button>)}
    {(id === 'pinblacklist' &&  <Button sx={mainThemeStyle.activityButton} onClick={handleLPBlacklist} >LP Blacklist</Button>)}
    {(id === 'property' && <Button sx={mainThemeStyle.activityButton} onClick={handleProfile} >Profile</Button>)}
    {(id === 'password' && <Button sx={mainThemeStyle.activityButton} onClick={handleProfile} >Profile</Button>)}
    {(id === 'profile' &&  <Button sx={mainThemeStyle.activityButton} onClick={handleProperty} >Property</Button>)}
    {(id === 'API' && <API/>)}
    {(id === 'rfidcardformat' && <RFIDCardFormat/>)}
    {(id === 'lpblacklist' && <LPBlackList/>)}
    {(id === 'pinblacklist' && <PINBlackList/>)}
    {(id === 'property' && <PropertyContact/>)}
    {(id === 'password' && <Passwords/>)}
    {(id === 'profile' && <Profile/>)}
    </Box>
   


   
  
</ThemeProvider>);
};

export default SetUp;