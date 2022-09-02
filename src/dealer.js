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
import AddDealer from "./AddDealer";
import ManageDealer from "./ManageDealer";
import EditDealer from "./EditDealer";
import EditDistributor from "./EditDistributor";
import { useParams,useNavigate  } from "react-router-dom";
import { useEffect } from "react";


const Dealer = props => {
  console.log("IN location Page");
  const navigate = useNavigate();
  const {id} = useParams();
  console.log('id is '+id);
  const theme = Theme;
  
  useEffect(()=>{
   
  },[id]);
  
  
 const handleAdd = () =>{
  navigate('../dealer/adddealer', { replace: true });
 }
 const handleEdit = () =>{
  navigate('../dealer/managedealer', { replace: true });
}


  return (
<ThemeProvider theme={theme}>

    <Box sx={mainThemeStyle.mainbox} backgroundColor="menubarprimary.main">
    <Box sx={mainThemeStyle.box}>
    {(id === 'managedealer' &&  <Typography sx={mainThemeStyle.lable}>Dealer</Typography>)}
    {(id === 'adddealer' &&  <Typography sx={mainThemeStyle.lable}>Add Dealer</Typography>)}
    {(id === 'editdealer' &&  <Typography sx={mainThemeStyle.lable}> Dealer : XYZ</Typography>)}
    </Box>
    
    {(id === 'managedealer' &&
    <Button startIcon={<AddIcon />} sx={mainThemeStyle.activityButton} onClick={handleAdd} >Add Dealer</Button>)}
   {(id === 'adddealer' && <Button sx={mainThemeStyle.activityButton} onClick={handleEdit} >View Dealer</Button>)}
   {(id === 'editdealer' &&  <Button sx={mainThemeStyle.activityButton} onClick={handleEdit} >View Dealer</Button>)}
    {(id === 'managedealer' && <ManageDealer/>)}
    {(id === 'adddealer' && <AddDealer/>)}
    {(id === 'editdealer' && <EditDealer/>)}
    </Box>
   


   
  
</ThemeProvider>);
};

export default Dealer;