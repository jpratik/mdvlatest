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
import AddDistributor from "./AddDistributor";
import ManageDistributor from "./ManageDistributor";
import EditDistributor from "./EditDistributor";
import { useParams,useNavigate  } from "react-router-dom";
import { useEffect } from "react";


const Distributor = props => {
  console.log("IN location Page");
  const navigate = useNavigate();
  const {id} = useParams();
  console.log('id is '+id);
  const theme = Theme;
  
  useEffect(()=>{
   
  },[id]);
 
  
 const handleAdd = () =>{
  navigate('../distributor/adddistributor', { replace: true });
 }
 const handleEdit = () =>{
  navigate('../distributor/managedistributor', { replace: true });
}


  return (
<ThemeProvider theme={theme}>

    <Box sx={mainThemeStyle.mainbox} backgroundColor="menubarprimary.main">
    <Box sx={mainThemeStyle.box}>
    {(id === 'managedistributor' &&  <Typography sx={mainThemeStyle.lable}>Distributor</Typography>)}
    {(id === 'adddistributor' &&  <Typography sx={mainThemeStyle.lable}>Add Distributor</Typography>)}
    {(id === 'editdistributor' &&  <Typography sx={mainThemeStyle.lable}> Distributor : XYZ</Typography>)}
    </Box>
    
    {(id === 'managedistributor' &&
    <Button startIcon={<AddIcon />} sx={mainThemeStyle.activityButton} onClick={handleAdd} >Add Distributor</Button>)}
   {(id === 'adddistributor' && <Button sx={mainThemeStyle.activityButton} onClick={handleEdit} >View Distributor</Button>)}
   {(id === 'editdistributor' &&  <Button sx={mainThemeStyle.activityButton} onClick={handleEdit} >View Distributor</Button>)}
    {(id === 'managedistributor' && <ManageDistributor/>)}
    {(id === 'adddistributor' && <AddDistributor/>)}
    {(id === 'editdistributor' && <EditDistributor/>)}
    </Box>
   


   
  
</ThemeProvider>);
};

export default Distributor;