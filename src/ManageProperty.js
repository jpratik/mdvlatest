import React from "react";
import { Box } from "@mui/system";
import { Button, Grid, InputLabel, List, Typography,ButtonGroup,Snackbar ,Alert ,IconButton, Icon,Dialog,DialogTitle,DialogContent,DialogActions,DialogContentText } from "@mui/material";
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
import { useParams,useNavigate  } from "react-router-dom";
const headCells = [
  { id: 'preopertyname', label: 'Property Name' },
  { id: 'comapnyname', label: 'Company'},
  { id: 'dealercompany', label: 'Dealer Company' },
  { id: 'totalunit', label: 'Total Unit' },
  { id: 'monthlycost', label: 'Monthly Cost' },
  { id: 'annualcost', label: 'Annual Cost' },
  { id: 'officenumber', label: 'Office No' },
  { id: 'email', label: 'Email' },
  { id: 'password', label: 'Password' },
  { id: 'address', label: 'Address' },
  { id: 'city', label: 'City' },
  { id: 'state', label: 'State' },
  { id: 'zipcode', label: 'ZipCode' },
  { id: 'locationcount', label: 'No. Of Locations' },
  { id: 'action', label: 'Action', disableSorting: true  },
]

let EnLog = [], TYPE = ['Sunnel','AXIS','Nortek','HikVision','ResidentLink'];
let Alphabet =['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
for (let i =0; i < 200; i++){
  EnLog[i] = {
    id: i,
    preopertyname:faker.company.name(),
    comapnyname:faker.company.name(),
    dealercompany:faker.company.name(),
    totalunit:faker.random.numeric(3),
    monthlycost:faker.random.numeric(3),
    annualcost:faker.random.numeric(4),
    officenumber:faker.phone.number('(###) ###-####'),
    email:faker.internet.email() ,
    password:faker.random.alphaNumeric(8) ,
    address:faker.address.streetAddress(),
    city:faker.address.cityName(),
    state:faker.address.state(),
    zipcode:faker.address.zipCode(),
    locationcount:faker.random.numeric(2),
  }
}


function ManageProperty ( props){
  const navigate = useNavigate();
  const myContainer = useRef(null);
  const [shownameType, setShownameType] = useState(true);
 
  const [showPropertyNameType, setShowPropertyNameType] = useState(true);
  const [showCompanyName, setShowCompanyName] = useState(false);
  const [showDealerCompany, setShowDealerCompany] = useState(false);
  const [showTotalUnit, setShowTotalUnit] = useState(false);
  const [showMonthlyCost, setShowMonthlyCost] = useState(false);
  const [showAnnualCost, setShowAnnualCost] = useState(false);
  const [showOfficeNumber, setShowOfficeNumber] = useState(false);
  const [showEmail, setShowEmail] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showAddress, setShowAddress] = useState(false);
  const [showCity, setShowCity] = useState(false);
  const [showState, setShowState] = useState(false);
  const [showZipCode, setShowZipCode] = useState(false);
  const [showLocationCount, setShowLocationCount] = useState(false);

  const [filterText, setfilterText] = useState('');
  const [resetClick, setResetClicked] = useState(false);
  const [currentId, setCurrentId] = useState(0);
  const [openPopup, setOpenPopup] = useState(false);
  const FilterMenu = {
    id: "1",
    label: "Property Name",
    items: [
      {
        label: "Property Name",
        callback: () =>  {
            setShownameType(true);
            setShowPropertyNameType(true);
            setShowCompanyName(false);
            setShowDealerCompany(false);
            setShowTotalUnit(false);
            setShowMonthlyCost(false);
            setShowAnnualCost(false);
            setShowOfficeNumber(false);
            setShowEmail(false);
            setShowPassword(false);
            setShowAddress(false);
            setShowCity(false);
            setShowState(false);
            setShowZipCode(false);
            setShowLocationCount(false);
         if(document.getElementById('input-location') != null)
            document.getElementById('input-location').value ='';
        }
         
      },
      {
        label: "Company Name",
        callback: () =>  {
            setShownameType(true);
            setShowPropertyNameType(false);
            setShowCompanyName(true);
            setShowDealerCompany(false);
            setShowTotalUnit(false);
            setShowMonthlyCost(false);
            setShowAnnualCost(false);
            setShowOfficeNumber(false);
            setShowEmail(false);
            setShowPassword(false);
            setShowAddress(false);
            setShowCity(false);
            setShowState(false);
            setShowZipCode(false);
            setShowLocationCount(false);
         if(document.getElementById('input-location') != null)
            document.getElementById('input-location').value ='';
        }
         
      },
      {
        label: "Dealer Company",
        callback: () =>  {
            setShownameType(true);
            setShowPropertyNameType(false);
            setShowCompanyName(false);
            setShowDealerCompany(true);
            setShowTotalUnit(false);
            setShowMonthlyCost(false);
            setShowAnnualCost(false);
            setShowOfficeNumber(false);
            setShowEmail(false);
            setShowPassword(false);
            setShowAddress(false);
            setShowCity(false);
            setShowState(false);
            setShowZipCode(false);
            setShowLocationCount(false);
         if(document.getElementById('input-location') != null)
            document.getElementById('input-location').value ='';
        }
         
      },
      {
        label: "Total Unit",
        callback: () =>  {
            setShownameType(true);
            setShowPropertyNameType(false);
            setShowCompanyName(false);
            setShowDealerCompany(false);
            setShowTotalUnit(true);
            setShowMonthlyCost(false);
            setShowAnnualCost(false);
            setShowOfficeNumber(false);
            setShowEmail(false);
            setShowPassword(false);
            setShowAddress(false);
            setShowCity(false);
            setShowState(false);
            setShowZipCode(false);
            setShowLocationCount(false);
         if(document.getElementById('input-location') != null)
            document.getElementById('input-location').value ='';
        }
         
      },
      {
        label: "Monthly Cost",
        callback: () =>  {
            setShownameType(true);
            setShowPropertyNameType(false);
            setShowCompanyName(false);
            setShowDealerCompany(false);
            setShowTotalUnit(false);
            setShowMonthlyCost(true);
            setShowAnnualCost(false);
            setShowOfficeNumber(false);
            setShowEmail(false);
            setShowPassword(false);
            setShowAddress(false);
            setShowCity(false);
            setShowState(false);
            setShowZipCode(false);
            setShowLocationCount(false);
         if(document.getElementById('input-location') != null)
            document.getElementById('input-location').value ='';
        }
         
      },
      {
        label: "Annual Cost",
        callback: () =>  {
            setShownameType(true);
            setShowPropertyNameType(false);
            setShowCompanyName(false);
            setShowDealerCompany(false);
            setShowTotalUnit(false);
            setShowMonthlyCost(false);
            setShowAnnualCost(true);
            setShowOfficeNumber(false);
            setShowEmail(false);
            setShowPassword(false);
            setShowAddress(false);
            setShowCity(false);
            setShowState(false);
            setShowZipCode(false);
            setShowLocationCount(false);
         if(document.getElementById('input-location') != null)
            document.getElementById('input-location').value ='';
        }
         
      },
      {
        label: "Office Number",
        callback: () =>  {
            setShownameType(true);
            setShowPropertyNameType(false);
            setShowCompanyName(false);
            setShowDealerCompany(false);
            setShowTotalUnit(false);
            setShowMonthlyCost(false);
            setShowAnnualCost(false);
            setShowOfficeNumber(true);
            setShowEmail(false);
            setShowPassword(false);
            setShowAddress(false);
            setShowCity(false);
            setShowState(false);
            setShowZipCode(false);
            setShowLocationCount(false);
         if(document.getElementById('input-location') != null)
            document.getElementById('input-location').value ='';
        }
         
      },
      {
        label: "Email",
        callback: () =>  {
            setShownameType(true);
            setShowPropertyNameType(false);
            setShowCompanyName(false);
            setShowDealerCompany(false);
            setShowTotalUnit(false);
            setShowMonthlyCost(false);
            setShowAnnualCost(false);
            setShowOfficeNumber(false);
            setShowEmail(true);
            setShowPassword(false);
            setShowAddress(false);
            setShowCity(false);
            setShowState(false);
            setShowZipCode(false);
            setShowLocationCount(false);
         if(document.getElementById('input-location') != null)
            document.getElementById('input-location').value ='';
        }
         
      },
      {
        label: "Password",
        callback: () =>  {
            setShownameType(true);
            setShowPropertyNameType(false);
            setShowCompanyName(false);
            setShowDealerCompany(false);
            setShowTotalUnit(false);
            setShowMonthlyCost(false);
            setShowAnnualCost(false);
            setShowOfficeNumber(false);
            setShowEmail(false);
            setShowPassword(true);
            setShowAddress(false);
            setShowCity(false);
            setShowState(false);
            setShowZipCode(false);
            setShowLocationCount(false);
         if(document.getElementById('input-location') != null)
            document.getElementById('input-location').value ='';
        }
         
      },
      {
        label: "Address",
        callback: () =>  {
            setShownameType(true);
            setShowPropertyNameType(false);
            setShowCompanyName(false);
            setShowDealerCompany(false);
            setShowTotalUnit(false);
            setShowMonthlyCost(false);
            setShowAnnualCost(false);
            setShowOfficeNumber(false);
            setShowEmail(false);
            setShowPassword(false);
            setShowAddress(true);
            setShowCity(false);
            setShowState(false);
            setShowZipCode(false);
            setShowLocationCount(false);
         if(document.getElementById('input-location') != null)
            document.getElementById('input-location').value ='';
        }
         
      },
      {
        label: "City",
        callback: () =>  {
            setShownameType(true);
            setShowPropertyNameType(false);
            setShowCompanyName(false);
            setShowDealerCompany(false);
            setShowTotalUnit(false);
            setShowMonthlyCost(false);
            setShowAnnualCost(false);
            setShowOfficeNumber(false);
            setShowEmail(false);
            setShowPassword(false);
            setShowAddress(false);
            setShowCity(true);
            setShowState(false);
            setShowZipCode(false);
            setShowLocationCount(false);
         if(document.getElementById('input-location') != null)
            document.getElementById('input-location').value ='';
        }
         
      },
      {
        label: "State",
        callback: () =>  {
            setShownameType(true);
            setShowPropertyNameType(false);
            setShowCompanyName(false);
            setShowDealerCompany(false);
            setShowTotalUnit(false);
            setShowMonthlyCost(false);
            setShowAnnualCost(false);
            setShowOfficeNumber(false);
            setShowEmail(false);
            setShowPassword(false);
            setShowAddress(false);
            setShowCity(false);
            setShowState(true);
            setShowZipCode(false);
            setShowLocationCount(false);
         if(document.getElementById('input-location') != null)
            document.getElementById('input-location').value ='';
        }
         
      },
      {
        label: "ZipCode",
        callback: () =>  {
            setShownameType(true);
            setShowPropertyNameType(false);
            setShowCompanyName(false);
            setShowDealerCompany(false);
            setShowTotalUnit(false);
            setShowMonthlyCost(false);
            setShowAnnualCost(false);
            setShowOfficeNumber(false);
            setShowEmail(false);
            setShowPassword(false);
            setShowAddress(false);
            setShowCity(false);
            setShowState(false);
            setShowZipCode(true);
            setShowLocationCount(false);
         if(document.getElementById('input-location') != null)
            document.getElementById('input-location').value ='';
        }
         
      },
      {
        label: "Location Count",
        callback: () =>  {
            setShownameType(true);
            setShowPropertyNameType(false);
            setShowCompanyName(false);
            setShowDealerCompany(false);
            setShowTotalUnit(false);
            setShowMonthlyCost(false);
            setShowAnnualCost(false);
            setShowOfficeNumber(false);
            setShowEmail(false);
            setShowPassword(false);
            setShowAddress(false);
            setShowCity(false);
            setShowState(false);
            setShowZipCode(false);
            setShowLocationCount(true);
         if(document.getElementById('input-location') != null)
            document.getElementById('input-location').value ='';
        }
         
      },
    ]
  };
  
  const TypeMenu = {
    id: "1",
    label: "Select Type",
    items: [
      {
        label: "Sunnel",
        callback: () =>  {setfilterText("Sunnel")}
       
      },
      {
        label: "AXIS",
        callback: () =>  {setfilterText("AXIS")}
      },
      {
        label: "Nortek",
        callback: () => {setfilterText("Nortek")}
      },
      {
        label: "HikVision",
        callback: () => {setfilterText("HikVision")}
      },
      {
        label: "ResidentLink",
        callback: () => {setfilterText("ResidentLink")}
      },
    ]
  };
 
  
  const [records, setRecords] = useState(EnLog)
  const [filterFn, setFilterFn] = useState({ fn: items => { return items; } })
  const handleChangeText = e => {
    console.log(e.target.value);
    let value = e.target.value;
    setfilterText(value);
    console.log(filterText);
}
  const {
      TblContainer,
      TblHead,
      TblPagination,
      BelowTblPagination,
      recordsAfterPagingAndSorting,
      setPageToNewOne
  } = useTable(records, headCells, filterFn,"Download Porperty");
 /*function setDtaForReact(){
 
}*/
/*useEffect(() => {  console.log('use effect clicked'); if(resetClick){
  console.log('reset clicked');
  setResetClicked(false);
  setfilterText('');
  if(document.getElementById('input-location') != null)
  document.getElementById('input-location').value ='';
  if(document.getElementById('date') != null)
        document.getElementById('date').value ='';
       
  handleSearch();
}}, []);*/
  const handleReset =() =>{
    setfilterText('');
    if(document.getElementById('input-location') != null)
    document.getElementById('input-location').value ='';
    
          setFilterFn({
            fn: items => {
              return items;
                    
            }
        })
        setPageToNewOne();
  }
  const checkAtOrNot = (value) =>{
     let ad = records.filter(x => x.preopertyname.toLowerCase().startsWith(value.toLowerCase()));
     console.log(ad.length);
     return ad.length;
  }

  const jumpToAlphabet = (val) =>{
    console.log('value is '+val);
    setFilterFn({
      fn: items => {
        return items.filter(x => x.locationname.toLowerCase().startsWith(val.toLowerCase()))
              
      }
  })
  setPageToNewOne();
  }

  const ChangeId = (val,val2) =>{
    console.log(currentId);
    if(val2 == 0){
      navigate('../property/editproeprty', { replace: true })
    }else if(val2 == 2){
      setCurrentId(val);
      let deletid;
      for(let i = 0; i < EnLog.length ; i++){
          if(EnLog[i].id == val ){
              deletid = i;
              break;
          }
      }
      EnLog.splice(deletid,1);
      setFilterFn({
          fn: items => {
            return items;
                  
          }
      })
    }
    else if(val2 == 1){
      setOpenSnack(true);
    }
  }
  const DeletId = (val) =>{
    setCurrentId(val);
    let deletid;
    for(let i = 0; i < EnLog.length ; i++){
        if(EnLog[i].id == val ){
            deletid = i;
            break;
        }
    }
    EnLog.splice(deletid,1);
    setFilterFn({
        fn: items => {
          return items;
                
        }
    })
  }
  const [open, setOpen] = React.useState(false);
  const [openSnack, setOpenSnack] = React.useState(false);
  const [titleforalert, setTitleforalert] = React.useState("");
  const handleClickOpen = (val) => {
    if(val == 0)
    setTitleforalert("Are you sure you want to enable Relay 1?");
    if(val == 1)
    setTitleforalert("Are you sure you want to enable Relay 2?");
    if(val == 2)
    setTitleforalert("Are you sure you want to enable Dual Relays?");
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCloseActive =() =>{
    setOpen(false);
    setOpenSnack(true);
  }
  const handleCloseSnack= (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSnack(false);
  };
  /*useEffect(()=>{
    setOpenPopup(true);
  },[currentId]);*/
  const ShowLog = () =>{
    return(<Grid container spacing={2}> 
      <Grid item >
        <Stack direction="column"  spacing={2}>
      <Typography sx={mainThemeStyle.popUpLableAnswer}> id </Typography>
      <Typography sx={mainThemeStyle.popUpLableAnswer} > Location Code </Typography>
      <Typography sx={mainThemeStyle.popUpLableAnswer} > Location Name </Typography>
      <Typography  sx={mainThemeStyle.popUpLableAnswer} height={200}> Entry Captured Photo </Typography>
      <Typography  sx={mainThemeStyle.popUpLableAnswer} >User Name </Typography>
      <Typography  sx={mainThemeStyle.popUpLableAnswer}  >Guest Name </Typography>
      <Typography  sx={mainThemeStyle.popUpLableAnswer} >User Type </Typography>
      <Typography  sx={mainThemeStyle.popUpLableAnswer} >PIN Type </Typography>
      <Typography  sx={mainThemeStyle.popUpLableAnswer} >Date Added </Typography>
      <Typography  sx={mainThemeStyle.popUpLableAnswer} >Status </Typography>
      </Stack>
      </Grid>
      <Grid item >
      <Stack direction="column"  spacing={2}>
      <Typography sx={mainThemeStyle.popUpLable}>12352</Typography>
      <Typography sx={mainThemeStyle.popUpLable}> 85622300230 </Typography>
      <Typography sx={mainThemeStyle.popUpLable}> {EnLog[currentId].locationname} </Typography>
      <img  src={NoImage} height={200} width={200}></img>
      <Typography  sx={mainThemeStyle.popUpLable}>{ EnLog[currentId].residentname} </Typography>
      <Typography  sx={mainThemeStyle.popUpLable}> {EnLog[currentId].guestname}</Typography>
      <Typography sx={mainThemeStyle.popUpLable}>{ EnLog[currentId].usertype}</Typography>
      <Typography  sx={mainThemeStyle.popUpLable}>{ EnLog[currentId].entrytype}</Typography>
      <Typography  sx={mainThemeStyle.popUpLable}> {EnLog[currentId].dateadded}  {EnLog[currentId].timestamp}</Typography>
      <Typography  sx={mainThemeStyle.popUpLable}> Success</Typography>
      </Stack>
      </Grid>
      </Grid>)
  }
  const handleSearch = () => {
    //let target = e.target;
    setFilterFn({
        fn: items => {
            if (filterText == "")
                return items;
            else{
              if(shownameType){
               
                
                console.log(shownameType);
                if(showPropertyNameType)
                return items.filter(x => x.preopertyname.toString().toLowerCase().includes(filterText.toLowerCase()))

                else if(showCompanyName)
                return items.filter(x => x.comapnyname.toString().toLowerCase().includes(filterText.toLowerCase()))

                else if(showDealerCompany)
                return items.filter(x => x.dealercompany.toString().toLowerCase().includes(filterText.toLowerCase()))

                else if(showTotalUnit)
                return items.filter(x => x.totalunit.toString().toLowerCase().includes(filterText.toLowerCase()))

                else if(showMonthlyCost)
                return items.filter(x => x.monthlycost.toString().toLowerCase().includes(filterText.toLowerCase()))

                else if(showAnnualCost)
                return items.filter(x => x.annualcost.toString().toLowerCase().includes(filterText.toLowerCase()))

                else if(showOfficeNumber)
                return items.filter(x => x.officenumber.toString().toLowerCase().includes(filterText.toLowerCase()))

                else if(showEmail)
                return items.filter(x => x.email.toString().toLowerCase().includes(filterText.toLowerCase()))

                else if(showPassword)
                return items.filter(x => x.password.toString().toLowerCase().includes(filterText.toLowerCase()))

                else if(showAddress)
                return items.filter(x => x.address.toString().toLowerCase().includes(filterText.toLowerCase()))

                else if(showCity)
                return items.filter(x => x.city.toString().toLowerCase().includes(filterText.toLowerCase()))

                else if(showState)
                return items.filter(x => x.state.toString().toLowerCase().includes(filterText.toLowerCase()))

                else if(showZipCode)
                return items.filter(x => x.zipCode.toString().toLowerCase().includes(filterText.toLowerCase()))
                
                else if(showLocationCount)
                return items.filter(x => x.locationcount.toString().toLowerCase().includes(filterText.toLowerCase()))
                
                else 
                return items;
                
              }
              
              else{
                return items;
              }
            }
                
        }
    })
    setPageToNewOne();
}
  return <><Box><Typography sx={mainThemeStyle.lablefilter}>Filter</Typography>
  
  <Box sx={{position: 'absolute',
           width:'680px',
           height: '280px',
           top:'160px',
           left: '38px',
           display: { xs: "none", md: "flex" },
           right: '38px',
           flexGrow: 1,
          
           }}>
             
           <Stack direction="row" spacing={2} >
                  
                   <NestedButtonDropdown
            itemId={FilterMenu.id} // NOTE: itemId is required for track items
            variant="contained"
            sx={mainThemeStyle.filterButton}
            data={FilterMenu}
          /> {shownameType  &&
           
          <Typography sx={mainThemeStyle.lableContains}>Contains</Typography>}
              
                   
{shownameType &&
                   
                   <TextField
                        id="input-location"
                        ref={myContainer}
                        type= 'text'
                        name="text"
                        onChange={handleChangeText}
                        sx={mainThemeStyle.InputFilter}
                        InputLabelProps={{ shrink: true }
                      }
                          
                        InputProps={{
                           
                            sx: {
                                
                                color: 'rgba(255, 255, 255, 1)',
                                height:'33px',
                                borderRadius: '5px',
                                backgroundColor: '#171E29',
                                boxShadow: 'inset 0px 4px 4px rgba(0, 0, 0, 0.25)',
                                padding: '5px 0 5px 0',
                                textIndent: '15px !important',
                                border: `1px solid rgba(31, 39, 54, 1)`,
                               
                                
                            },
                        }}
                       
                    />}
                   
                   <Button sx={mainThemeStyle.filterResetButton} onClick={handleSearch}>Go</Button>
                   
                   <Button sx={mainThemeStyle.filterResetButton} onClick={handleReset}>Reset Filters</Button>
                  </Stack>
                  </Box>
          
  <Box sx={{position: 'absolute',
           width:'auto',
           height: '280px',
           top:'160px',
           left: '38px',
           display: { xs: "flex", md: "none" },
           right: '38px',
           flexGrow: 1,
          
           }}>
             <Grid container>
             <Grid item >
           <Stack direction="row" spacing={2} >
                  
                   <NestedButtonDropdown
            itemId={FilterMenu.id} // NOTE: itemId is required for track items
            variant="contained"
            sx={mainThemeStyle.filterButton}
            data={FilterMenu}
          /> {shownameType  &&
           
          <Typography sx={mainThemeStyle.lableContains}>Contains</Typography>}
                
                  

{shownameType &&
                   
                   <TextField
                        id="input-location"
                        ref={myContainer}
                        type= 'text'
                        name="text"
                        onChange={handleChangeText}
                        sx={mainThemeStyle.InputFilterSmall}
                        InputLabelProps={{ shrink: true }
                      }
                          
                        InputProps={{
                           
                            sx: {
                                
                                color: 'rgba(255, 255, 255, 1)',
                                height:'33px',
                                borderRadius: '5px',
                                backgroundColor: '#171E29',
                                boxShadow: 'inset 0px 4px 4px rgba(0, 0, 0, 0.25)',
                                padding: '5px 0 5px 0',
                                textIndent: '15px !important',
                                border: `1px solid rgba(31, 39, 54, 1)`,
                               
                                
                            },
                        }}
                       
                    />}</Stack></Grid>
                   <Grid >
                   <Stack direction="row" justifyContent="right"
  alignItems="right">
                   <Button sx={mainThemeStyle.filterResetButtonSmall} onClick={handleSearch}>Go</Button>
                   
                   <Button sx={mainThemeStyle.filterResetButtonSmall} onClick={handleReset}>Reset Filters</Button>
                   </Stack>
                 </Grid></Grid></Box>
  
  
                 <Typography sx={mainThemeStyle.lableJump}>Jump</Typography>
                 
                 <ButtonGroup variant="text"  sx={{position: 'absolute',
           maxWidth:'250px',
           height: 'auto',
           top:'250px',
           left: '38px',
           display: { xs: "none", md: "flex" }
           }}>

          

          {
            Alphabet.map(item => (
              checkAtOrNot(item) > 0 ?  <Button sx= {mainThemeStyle.ButtonJump}  onClick={() => {jumpToAlphabet(item)}}>{item}</Button> :  <Button sx= {mainThemeStyle.ButtonJump} disabled>{item}</Button>
            ))
          }

    </ButtonGroup>
    
   
   <Box sx={mainThemeStyle.mainTablebox}>
    
    <TblContainer>
                    <TblHead />
                    <TableBody>
                        {
                            recordsAfterPagingAndSorting().map(item =>
                                ( <TableRow
                                  key={item.id}
                                  sx={{ borderBottom: "1.2px solid black",'&:last-child td, &:last-child th': { border: 0 },
                                   }}
                                >
                                  
                                  
                                  <TableCell align="left" sx={mainThemeStyle.cellGreen}>{item.preopertyname}</TableCell>
                                  <TableCell align="left" sx={mainThemeStyle.cellRow}>{item.comapnyname}</TableCell>
                                  <TableCell align="left" sx={mainThemeStyle.cellRow}>{item.dealercompany}</TableCell>
                                  <TableCell align="left" sx={mainThemeStyle.cellRow}>{item.totalunit}</TableCell>
                                  <TableCell align="left" sx={mainThemeStyle.cellRow}>{item.monthlycost}</TableCell>
                                  <TableCell align="left" sx={mainThemeStyle.cellRow}>{item.annualcost}</TableCell>
                                  <TableCell align="left" sx={mainThemeStyle.cellRow}>{item.officenumber}</TableCell>
                                  <TableCell align="left" sx={mainThemeStyle.cellRow}>{item.email}</TableCell>
                                  <TableCell align="left" sx={mainThemeStyle.cellRow}>{item.password}</TableCell>
                                  <TableCell align="left" sx={mainThemeStyle.cellRow}>{item.address}</TableCell>
                                  <TableCell align="left" sx={mainThemeStyle.cellRow}>{item.city}</TableCell>
                                  <TableCell align="left" sx={mainThemeStyle.cellRow}>{item.state}</TableCell>
                                  <TableCell align="left" sx={mainThemeStyle.cellRow}>{item.zipcode}</TableCell>
                                  <TableCell align="left" sx={mainThemeStyle.cellRow}>{item.locationcount}</TableCell>
                                  <TableCell>
                                  <Stack direction="row" spacing={2}>
                                     
                                    <IconButton sx={{ backgroundColor: '#2A2F3B'}}  size="small" color="primary"  onClick={() => {ChangeId(item.id,0)}}><EditIcon /></IconButton>
                                    <IconButton sx={{ backgroundColor: '#2A2F3B'}}  size="small" color="redwarning"  onClick={() => {ChangeId(item.id,2)}}><DeleteIcon /></IconButton>
                                    </Stack> 
                                  </TableCell>
                                </TableRow>)
                            )
                        }
                    </TableBody>
                   
                </TblContainer>
                <Box sx={{marginTop:'10px'}}>
<BelowTblPagination ></BelowTblPagination>


</Box></Box>
                 </Box>
                 <Snackbar open={openSnack} autoHideDuration={6000} onClose={handleCloseSnack}>
        <Alert onClose={handleCloseSnack} severity="success" sx={{ width: '100%' }}>
          This is a success message!
        </Alert>
      </Snackbar>
                 <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        sx={{
          padding: '16px',
      
         backgroundColor:'#00000000',
         
      }}
      >
        <DialogTitle id="alert-dialog-title" sx={{
        
      
         backgroundColor:'#2A2F3B',
         color:'white'
         
      }}>
          {titleforalert}
        </DialogTitle>
        <DialogContent sx={{
        
      
        backgroundColor:'#2A2F3B',
        color:'white'
        
     }}>
          
        </DialogContent>
        <DialogActions sx={{
        
      
        backgroundColor:'#2A2F3B',
        color:'white'
        
     }}>
          <Button onClick={handleClose} sx={mainThemeStyle.normalBigButton}>Cancel</Button>
          <Button onClick={handleCloseActive} autoFocus sx={mainThemeStyle.normalBigButton}>
            Ok
          </Button>
        </DialogActions>
      </Dialog>
          <Popup
                title="Entry Log"
                openPopup={openPopup}
                setOpenPopup={setOpenPopup}
            >
             
      <ShowLog/>
               
          
            </Popup></> 
          
          
          
          
          ;
};

export default ManageProperty;