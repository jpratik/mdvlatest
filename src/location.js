import React from "react";
import {  ThemeProvider } from '@mui/material/styles';
import Theme from './components/ItemTheme'
import { Box } from "@mui/system";
import { Button, Grid, List, Typography } from "@mui/material";
import {mainThemeStyle} from './components/MainTheme';
import { NestedButtonDropdown } from "./components/header/NestedButtonDropdown";
import  NestedButtonDropDownHeader  from "./components/header/NestedButtonDropDownHeader";
import ManageLocation from "./ManageLocation";
import EditLocation from "./EditLocation";
import AddLocation from "./AddLocation";
import CallLog from "./CallLog";
import AddIcon from '@mui/icons-material/Add';
import LpTags from "./LpTags";
import { useState } from "react";
import GuestPIN from "./GuestPIN";
import GuestParking from "./GuestParking";
import { useParams,useNavigate  } from "react-router-dom";
import { useEffect } from "react";

const Location = props => {
  console.log("IN location Page");
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
  const params = 'guestlog';
  useEffect(()=>{
   
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
  
 const handleAdd = () =>{
  navigate('../location/addlocation', { replace: true });
 }
  
 const handleEdit = () =>{
  navigate('../location/managelocation', { replace: true });
 }

  return (
<ThemeProvider theme={theme}>

    <Box sx={mainThemeStyle.mainbox} backgroundColor="menubarprimary.main">
    <Box sx={mainThemeStyle.box}>
    {(id === 'managelocation' &&  <Typography sx={mainThemeStyle.lable}>Location</Typography>)}
    {(id === 'addlocation' &&  <Typography sx={mainThemeStyle.lable}>Location</Typography>)}
    {(id === 'editlocation' &&  <Typography sx={mainThemeStyle.lable}>Location : Cornerstone Security</Typography>)}
    </Box>
    {(id === 'managelocation' &&
    <Button startIcon={<AddIcon />} sx={mainThemeStyle.activityButton} onClick={handleAdd} >Add Location</Button>)}
   {(id === 'addlocation' && <Button sx={mainThemeStyle.activityButton} onClick={handleEdit} >View Locations</Button>)}
   {(id === 'editlocation' && <Button sx={mainThemeStyle.activityButton} onClick={handleEdit} >View Locations</Button>)}
   {(id === 'managelocation' && <ManageLocation/>)}
   {(id === 'addlocation' && <AddLocation/>)}
   {(id === 'editlocation' && <EditLocation/>)}
    
    </Box>
   
</ThemeProvider>);
};

export default Location;