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
const User = props => {
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
  navigate('../user/adduser', { replace: true });
 }
 const handleEdit = () =>{
  navigate('../user/manageuser', { replace: true });
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
    {(id === 'adduser' &&  <Typography sx={mainThemeStyle.lable}>User</Typography>)}
    {(id === 'manageuser' &&  <Typography sx={mainThemeStyle.lable}>User</Typography>)}
    {(id === 'edituser' &&  <Typography sx={mainThemeStyle.lable}>User : James Coxx</Typography>)}
    {(id === 'callinggroup' &&  <Typography sx={mainThemeStyle.lable}>Calling Groups</Typography>)}
    {(id === 'officegroup' &&  <Typography sx={mainThemeStyle.lable}>Office Groups</Typography>)}
    </Box>
    
    {(id === 'manageuser' &&
    <Button startIcon={<AddIcon />} sx={mainThemeStyle.activityButton} onClick={handleAdd} >Add User</Button>)}
   {(id === 'adduser' && <Button sx={mainThemeStyle.activityButton} onClick={handleEdit} >View Users</Button>)}
   {(id === 'edituser' && <Button sx={mainThemeStyle.activityButton} onClick={handleEdit} >View Users</Button>)}
   {(id === 'callinggroup' && <Button sx={mainThemeStyle.activityButton} onClick={handleCallingGroup} >Ofiice Group</Button>)}
   {(id === 'officegroup' && <Button sx={mainThemeStyle.activityButton} onClick={handleOfficeGroup} >Calling Group</Button>)}
    {(id === 'manageuser' && <ManageUsers/>)}
   {(id === 'adduser' && <AddUser/>)}
   {(id === 'edituser' && <EditUser/>)}
    {(id === 'callinggroup' && <CallingGroup/>)}
    {(id === 'officegroup' && <OfficeGroup/>)}
    </Box>
   


   
  
</ThemeProvider>);
};

export default User;