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
import OfficeGroup from "./OfficeGroup";
import ManageProperty from "./ManageProperty";
import AddNewProperty from "./AddNewProperty";
import EditProperty from "./EditProperty";
const Property = props => {
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
  navigate('../property/addproeprty', { replace: true });
 }
 const handleEdit = () =>{
  navigate('../property/manageproeprty', { replace: true });
}
const handleCallingGroup = ()=>{
  navigate('../user/groups/officegroup', { replace: true });
}

const handleOfficeGroup = ()=>{
  navigate('../user/groups/callinggroup', { replace: true });
}

  return (
<ThemeProvider theme={theme}>

    <Box sx={mainThemeStyle.mainbox} backgroundColor="menubarprimary.main">
    <Box sx={mainThemeStyle.box}>
    {(id === 'manageproeprty' &&  <Typography sx={mainThemeStyle.lable}>Property</Typography>)}
    {(id === 'addproeprty' &&  <Typography sx={mainThemeStyle.lable}>Add Property</Typography>)}
    {(id === 'editproeprty' &&  <Typography sx={mainThemeStyle.lable}> Property : Market Place</Typography>)}
    </Box>
    
    {(id === 'manageproeprty' &&
    <Button startIcon={<AddIcon />} sx={mainThemeStyle.activityButton} onClick={handleAdd} >Add Property</Button>)}
   {(id === 'addproeprty' && <Button sx={mainThemeStyle.activityButton} onClick={handleEdit} >View Property</Button>)}
   {(id === 'editproeprty' &&  <Button sx={mainThemeStyle.activityButton} onClick={handleEdit} >View Property</Button>)}
    {(id === 'manageproeprty' && <ManageProperty/>)}
    {(id === 'addproeprty' && <AddNewProperty/>)}
    {(id === 'editproeprty' && <EditProperty/>)}
    </Box>
   


   
  
</ThemeProvider>);
};

export default Property;