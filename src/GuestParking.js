import React from "react";
import { Box } from "@mui/system";
import { Button, Grid, InputLabel, List, Typography,ButtonGroup ,IconButton, Icon,FormControlLabel ,FormControl ,FormLabel ,Radio , RadioGroup , Checkbox  } from "@mui/material";
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
import { format, isThisSecond } from 'date-fns';
import { useState,useRef,useEffect } from "react";
import useTable from "./components/useTable";
import SvgIcon from "@mui/material/SvgIcon";
import NoImage from './asset/noimage.png';
import Popup from "./components/Popup";
import _ from "lodash";
import moment from 'moment';



const headCells = [
  { id: 'locationname', label: 'Location Name' },
  { id: 'residentname', label: 'Resident Name' },
  { id: 'usertype', label: 'User Type' },
  { id: 'guestname', label: 'Guest Name' },
  { id: 'licenseplate', label: 'License Plate' },
  { id: 'licensestate', label: 'License State' },
  { id: 'guestphone', label: 'Guest Phone#' },
  { id: 'pintype', label: 'Parking Type' },
  { id: 'pinusetime', label: 'Parking Use Time' },
  { id: 'dateexpiry', label: 'Parking Expiry Date' },
  { id: 'status', label: 'Status' },
  { id: 'action', label: 'Action', disableSorting: true },
]

let EnLog = [], TYPE = ['Android','iOS'], GuestPINTYPE = ['One-Time Guest','Limited Guest','Unlimited Guest'],StatusTYPE = ['Expired','Active'];
let Alphabet =['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
for (let i =0; i < 200; i++){
  EnLog[i] = {
    id: i,
    locationname:faker.company.name(),
    residentname:faker.name.fullName(),
    usertype:TYPE[Math.floor(Math.random()*TYPE.length)],
    guestname:faker.name.fullName(),
    licenseplate:faker.mersenne.rand(),
    licensestate:faker.address.stateAbbr(),
    guestphone:faker.phone.number('##########'),
    pintype:GuestPINTYPE[Math.floor(Math.random()*GuestPINTYPE.length)],
    pinusetime:faker.random.numeric(),
    dateexpiry:format(faker.date.future(), 'dd/MM/yyyy'),
    status:StatusTYPE[Math.floor(Math.random()*StatusTYPE.length)],
  }
}


function GuestParking ( props){

  
  const myContainer = useRef(null);
  const [shownameType, setShownameType] = useState(true);
  const [showLocationType, setShowLocationType] = useState(true);
  const [showResidentType, setShowResidentType] = useState(false);
  const [showUserType, setShowUserType] = useState(false);
  const [showGuestName, setShowGuestName] = useState(false);
  const [showGuestPhone, setShowGuestPhone] = useState(false);
  const [showGuestPIN, setShowGuestPIN] = useState(false);
  const [showGuestPINState, setShowGuestPINState] = useState(false);
  const [showPINTYpe, setShowPINTYpe] = useState(false);
  const [showPINUseTime, setShowPINUseTime] = useState(false);
  const [showDateExpiry, setShowDateExpiry] = useState(false);
  const [showStatus, setShowStatus] = useState(false);
  const [filterText, setfilterText] = useState('');
  const [resetClick, setResetClicked] = useState(false);
  const [currentId, setCurrentId] = useState(0);
  const [openPopup, setOpenPopup] = useState(false);

 
  const FilterMenu = {
    id: "1",
    label: "Location Name",
    items: [
      {
        label: "Location Name",
        callback: () =>  {
          setShownameType(true);
          setShowLocationType(true);
          setShowResidentType(false);
          setShowUserType(false);
          setShowGuestName(false);
          setShowGuestPIN(false);
          setShowGuestPINState(false);
          setShowGuestPhone(false);
          setShowPINTYpe(false);
          setShowPINUseTime(false);
          setShowDateExpiry(false);
          setShowStatus(false);
         // myContainer.this.setState({ //value:''});
         if(document.getElementById('input-location') != null)
    document.getElementById('input-location').value ='';
    if(document.getElementById('date') != null)
          document.getElementById('date').value ='';
          setfilterText('');
          //console.log(format(new Date(), 'dd/MM/yyyy'));
        }
         
      },
      {
        label: "Resident Name",
        callback: () =>  { 
            setShownameType(true);
            setShowLocationType(false);
            setShowResidentType(true);
            setShowUserType(false);
            setShowGuestName(false);
            setShowGuestPIN(false);
            setShowGuestPhone(false);
            setShowGuestPINState(false);
            setShowPINTYpe(false);
            setShowPINUseTime(false);
            setShowDateExpiry(false);
            setShowStatus(false);
          if(document.getElementById('input-location') != null)
          document.getElementById('input-location').value ='';
          if(document.getElementById('date') != null)
                document.getElementById('date').value ='';
          setfilterText('');
        }
      },
      {
        label: "User Type",
        callback: () => {
            setShownameType(false);
            setShowLocationType(false);
            setShowResidentType(false);
            setShowUserType(true);
            setShowGuestName(false);
            setShowGuestPIN(false);
            setShowGuestPINState(false);
            setShowGuestPhone(false);
            setShowPINTYpe(false);
            setShowPINUseTime(false);
            setShowDateExpiry(false);
            setShowStatus(false);
          if(document.getElementById('input-location') != null)
    document.getElementById('input-location').value ='';
    if(document.getElementById('date') != null)
          document.getElementById('date').value ='';
          setfilterText('');
        }
      },
      {
        label: "Guest Name",
        callback: () => {
            setShownameType(true);
            setShowLocationType(false);
            setShowResidentType(false);
            setShowUserType(false);
            setShowGuestName(true);
            setShowGuestPINState(false);
            setShowGuestPIN(false);
            setShowGuestPhone(false);
            setShowPINTYpe(false);
            setShowPINUseTime(false);
            setShowDateExpiry(false);
            setShowStatus(false);
          if(document.getElementById('input-location') != null)
    document.getElementById('input-location').value ='';
    if(document.getElementById('date') != null)
          document.getElementById('date').value ='';
          setfilterText('');
        }
      },
      {
        label: "Licesnse Plate",
        callback: () => {
            setShownameType(true);
            setShowLocationType(false);
            setShowResidentType(false);
            setShowUserType(false);
            setShowGuestName(false);
            setShowGuestPIN(true);
            setShowGuestPINState(false);
            setShowGuestPhone(false);
            setShowPINTYpe(false);
            setShowPINUseTime(false);
            setShowDateExpiry(false);
            setShowStatus(false);
          if(document.getElementById('input-location') != null)
    document.getElementById('input-location').value ='';
    if(document.getElementById('date') != null)
          document.getElementById('date').value ='';
          setfilterText('');
        }
      },
      {
        label: "Licesnse State",
        callback: () => {
            setShownameType(true);
            setShowLocationType(false);
            setShowResidentType(false);
            setShowUserType(false);
            setShowGuestName(false);
            setShowGuestPIN(false);
            setShowGuestPINState(true);
            setShowGuestPhone(false);
            setShowPINTYpe(false);
            setShowPINUseTime(false);
            setShowDateExpiry(false);
            setShowStatus(false);
          if(document.getElementById('input-location') != null)
    document.getElementById('input-location').value ='';
    if(document.getElementById('date') != null)
          document.getElementById('date').value ='';
          setfilterText('');
        }
      },
      {
        label: "Guest Phone",
        callback: () => {
            setShownameType(true);
            setShowLocationType(false);
            setShowResidentType(false);
            setShowUserType(false);
            setShowGuestName(false);
            setShowGuestPIN(false);
            setShowGuestPINState(false);
            setShowGuestPhone(true);
            setShowPINTYpe(false);
            setShowPINUseTime(false);
            setShowDateExpiry(false);
            setShowStatus(false);
          if(document.getElementById('input-location') != null)
    document.getElementById('input-location').value ='';
    if(document.getElementById('date') != null)
          document.getElementById('date').value ='';
          setfilterText('');
        }
      },
      {
        label: "Parking Type",
        callback: () => {
            setShownameType(false);
            setShowLocationType(false);
            setShowResidentType(false);
            setShowUserType(false);
            setShowGuestName(false);
            setShowGuestPIN(false);
            setShowGuestPINState(false);
            setShowGuestPhone(false);
            setShowPINTYpe(true);
            setShowPINUseTime(false);
            setShowDateExpiry(false);
            setShowStatus(false);
          if(document.getElementById('input-location') != null)
    document.getElementById('input-location').value ='';
    if(document.getElementById('date') != null)
          document.getElementById('date').value ='';
          setfilterText('');
        }
      },
      {
        label: "Parking Use Time",
        callback: () => {
            setShownameType(true);
            setShowLocationType(false);
            setShowResidentType(false);
            setShowUserType(false);
            setShowGuestPINState(false);
            setShowGuestName(false);
            setShowGuestPIN(false);
            setShowGuestPhone(false);
            setShowPINTYpe(false);
            setShowPINUseTime(true);
            setShowDateExpiry(false);
            setShowStatus(false);
          if(document.getElementById('input-location') != null)
    document.getElementById('input-location').value ='';
    if(document.getElementById('date') != null)
          document.getElementById('date').value ='';
          setfilterText('');
        }
      },
      {
        label: "Parking Expiry Date",
        callback: () => {
            setShownameType(false);
            setShowLocationType(false);
            setShowResidentType(false);
            setShowUserType(false);
            setShowGuestName(false);
            setShowGuestPIN(false);
            setShowGuestPINState(false);
            setShowGuestPhone(false);
            setShowPINTYpe(false);
            setShowPINUseTime(false);
            setShowDateExpiry(true);
            setShowStatus(false);
          if(document.getElementById('input-location') != null)
    document.getElementById('input-location').value ='';
    if(document.getElementById('date') != null)
          document.getElementById('date').value ='';
          setfilterText('');
        }
      },
      {
        label: "Status",
        callback: () => {
            setShownameType(false);
            setShowLocationType(false);
            setShowResidentType(false);
            setShowUserType(false);
            setShowGuestName(false);
            setShowGuestPIN(false);
            setShowGuestPhone(false);
            setShowGuestPINState(false);
            setShowPINTYpe(false);
            setShowPINUseTime(false);
            setShowDateExpiry(false);
            setShowStatus(true);
          if(document.getElementById('input-location') != null)
    document.getElementById('input-location').value ='';
    if(document.getElementById('date') != null)
          document.getElementById('date').value ='';
          setfilterText('');
        }
      },
    ]
  };
  const TypeMenu = {
    id: "1",
    label: "Select Type",
    items: [
      {
        label: "Android",
        callback: () =>  {setfilterText("Android")}
       
      },
      {
        label: "iOS",
        callback: () =>  {setfilterText("iOS")}
      },
    ]
  };
  const StatusTYPEMenu = {
    id: "1",
    label: "Select Type",
    items: [
      {
        label: "Expired",
        callback: () =>  {setfilterText("Expired")}
       
      },
      {
        label: "Active",
        callback: () =>  {setfilterText("Active")}
      },
    ]
  };
  const GuestPINTYPEMenu = {
    id: "1",
    label: "Select Type",
    items: [
      {
        label: "One-Time Guest",
        callback: () =>  {setfilterText("One-Time Guest")}
       
      },
      {
        label: "Limited Guest",
        callback: () =>  {setfilterText("Limited Guest")}
      },
      {
        label: "Unlimited Guest",
        callback: () => {setfilterText("Unlimited Guest")}
      }
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

const handleChangeEditText = e =>{
    console.log(e.target.value);
}
  const {
      TblContainer,
      TblHead,
      TblPagination,
      BelowTblPagination,
      recordsAfterPagingAndSorting,
      setPageToNewOne
  } = useTable(records, headCells, filterFn,"Download Logs");
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
    if(document.getElementById('date') != null)
          document.getElementById('date').value ='';
    
          setFilterFn({
            fn: items => {
              return items;
                    
            }
        })
        setPageToNewOne();
  }
  const checkAtOrNot = (value) =>{
     let ad = records.filter(x => x.locationname.toLowerCase().startsWith(value.toLowerCase()));
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
  const ChangeId = (val) =>{
    console.log(currentId);
    setCurrentId(val);
    setOpenPopup(true);
  }

  /*useEffect(()=>{
    setOpenPopup(true);
  },[currentId]);*/
  const UseTimeMenu = {
    id: "1",
    label: "Select Use Time",
    items: [
      {
        label: "1",
        callback: () =>  {}
       
      },
      {
        label: "2",
        callback: () =>  {}
       
      },
      {
        label: "3",
        callback: () =>  {}
       
      },
      {
        label: "4",
        callback: () =>  {}
       
      },
      {
        label: "5",
        callback: () =>  {}
       
      },
      {
        label: "6",
        callback: () =>  {}
       
      },
      {
        label: "7",
        callback: () =>  {}
       
      },
      {
        label: "8",
        callback: () =>  {}
       
      },
      {
        label: "9",
        callback: () =>  {}
       
      },
    ]
  };
  
  const ShowLog = () =>{
    return(<Grid container spacing={2}> 
      <Grid item >
        <Stack direction="column"  spacing={2}>
      <Typography sx={mainThemeStyle.popUpLableAnswer}> id </Typography>
      <Typography sx={mainThemeStyle.popUpLableAnswer} > Resident Location </Typography>
      <Typography sx={mainThemeStyle.popUpLableAnswer} > License Plate </Typography>
      <Typography sx={mainThemeStyle.popUpLableAnswer} > License State </Typography>
      <Typography  sx={mainThemeStyle.popUpLableAnswer} >Guest Name </Typography>
      <Typography  sx={mainThemeStyle.popUpLableAnswer} >Guest Phone Number </Typography>
      <Typography  sx={mainThemeStyle.popUpLableAnswer} height={150} >Type Of Parking </Typography>
      <Typography  sx={mainThemeStyle.popUpLableAnswer} >Parking Expiration Date </Typography>
      </Stack>
      </Grid>
      <Grid item >
      <Stack direction="column"  spacing={2}>
      <Typography sx={mainThemeStyle.popUpLable}>12352</Typography>
      <Typography sx={mainThemeStyle.popUpLable}> {EnLog[currentId].locationname} </Typography>
      <Typography sx={mainThemeStyle.popUpLable}> {EnLog[currentId].licenseplate} </Typography>
      <Typography sx={mainThemeStyle.popUpLable}> {EnLog[currentId].licensestate} </Typography>
      <Typography  sx={mainThemeStyle.popUpLable}>{ EnLog[currentId].guestname} </Typography>
      <Typography  sx={mainThemeStyle.popUpLable}> {EnLog[currentId].guestphone}</Typography>
      <Box  height={200}>
     
      <FormControl>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue={ EnLog[currentId].pintype}
        name="radio-buttons-group"
      >
      <FormControlLabel value="One-Time Guest" control={<Radio />} label="One-Time Guest" sx={mainThemeStyle.popUpLable} />
      <Stack direction="row"  spacing={2}> <FormControlLabel  value="Limited Guest" control={<Radio />} label="Limited Guest" sx={mainThemeStyle.popUpLable} />
      <NestedButtonDropdown
            itemId={UseTimeMenu.id} // NOTE: itemId is required for track items
            variant="contained"
            sx={mainThemeStyle.PinSelection}
            data={UseTimeMenu}
          /></Stack>
      <FormControlLabel  value="Unlimited Guest" control={<Radio />} label="Unlimited Guest" sx={mainThemeStyle.popUpLable} />
      </RadioGroup>
    </FormControl>
      
      </Box>
      <TextField
        id="date"
        type="date"
        defaultValue={moment(EnLog[currentId].dateexpiry).format('DD-MM-YYYY')}
        sx={mainThemeStyle.InputFilterPopup}
        onChange={handleChangeEditText}
        InputLabelProps={{
          shrink: true,
        }}
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
      />
      </Stack>
      </Grid>
      
      <Button sx={mainThemeStyle.saveButton} onClick={()=>{setOpenPopup(false);}}>Save</Button>
      
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
                if(showLocationType)
                return items.filter(x => x.locationname.toLowerCase().includes(filterText.toLowerCase()))

                else if(showResidentType)
                return items.filter(x => x.residentname.toLowerCase().includes(filterText.toLowerCase()))

                else if(showGuestName)
                return items.filter(x => x.guestname.toLowerCase().includes(filterText.toLowerCase()))
                
                else if(showGuestPIN)
                return items.filter(x => x.licenseplate.toString().toLowerCase().includes(filterText.toLowerCase()))
                
                else if(showGuestPINState)
                return items.filter(x => x.licensestate.toString().toLowerCase().includes(filterText.toLowerCase()))
                
                else if(showGuestPhone)
                return items.filter(x => x.guestphone.toString().toLowerCase().includes(filterText.toLowerCase()))
                
                else if(showPINUseTime)
                return items.filter(x => x.pinusetime.toString().toLowerCase().includes(filterText.toLowerCase()))
                
                else 
                return items;
                
              }
              else if(showDateExpiry){
                var mystr = filterText;
                mystr = moment(mystr).format('DD/MM/YYYY');
                return items.filter(x => x.dateexpiry.toLowerCase().includes(mystr))
              }
              else if(showUserType){
                
                if(filterText === 'Android' || filterText === 'iOS'){
                  return items.filter(x => x.usertype.toLowerCase() === (filterText.toLowerCase()))
                }
                else{
                  return items;
                }
              }
             
              else if(showPINTYpe){
                if(filterText === 'One-Time Guest' || filterText === 'Limited Guest' || filterText === 'Unlimited Guest' ){
                  return items.filter(x => x.pintype.toLowerCase() === (filterText.toLowerCase()))
                }
                else{
                  return items;
                }
              }

              else if(showStatus){
                
                if(filterText === 'Expired' || filterText === 'Active'){
                  return items.filter(x => x.status.toLowerCase() === (filterText.toLowerCase()))
                }
                else{
                  return items;
                }
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
                 {(showUserType || showPINTYpe  || showStatus)  && 
                   <Typography sx={mainThemeStyle.lableContains}>Equals</Typography>}
                   {showUserType  &&  
                   <NestedButtonDropdown
            itemId={TypeMenu.id} // NOTE: itemId is required for track items
            variant="contained"
            sx={mainThemeStyle.filterButton}
            data={TypeMenu}
          />
                  }

                   {showPINTYpe  &&  
                   <NestedButtonDropdown
            itemId={GuestPINTYPEMenu.id} // NOTE: itemId is required for track items
            variant="contained"
            sx={mainThemeStyle.filterButton}
            data={GuestPINTYPEMenu}
            
          />
                  }
                  {showStatus  &&  
                   <NestedButtonDropdown
            itemId={StatusTYPEMenu.id} // NOTE: itemId is required for track items
            variant="contained"
            sx={mainThemeStyle.filterButton}
            data={StatusTYPEMenu}
            
          />
                  }
                   {showDateExpiry && <TextField
        id="date"
        type="date"
        defaultValue=""
        sx={mainThemeStyle.InputFilter}
        onChange={handleChangeText}
        InputLabelProps={{
          shrink: true,
        }}
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
                 {(showUserType || showPINTYpe || showStatus)  && 
                   <Typography sx={mainThemeStyle.lableContains}>Equals</Typography>}
                   {showUserType  &&  
                   <NestedButtonDropdown
            itemId={TypeMenu.id} // NOTE: itemId is required for track items
            variant="contained"
            sx={mainThemeStyle.filterButton}
            data={TypeMenu}
          />
                  }

                   {showPINTYpe  &&  
                   <NestedButtonDropdown
            itemId={GuestPINTYPEMenu.id} // NOTE: itemId is required for track items
            variant="contained"
            sx={mainThemeStyle.filterButton}
            data={GuestPINTYPEMenu}
            
          />
                  }
                  {showStatus  &&  
                   <NestedButtonDropdown
            itemId={StatusTYPEMenu.id} // NOTE: itemId is required for track items
            variant="contained"
            sx={mainThemeStyle.filterButton}
            data={StatusTYPEMenu}
            
          />
                  }
                   {showDateExpiry && <TextField
        id="date"
        type="date"
        defaultValue=""
        sx={mainThemeStyle.InputFilter}
        onChange={handleChangeText}
        InputLabelProps={{
          shrink: true,
        }}
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

        {/* { checkAtOrNot('A') > 0 ?  <Button sx= {mainThemeStyle.ButtonJump}  >A</Button> :  <Button sx= {mainThemeStyle.ButtonJump} disabled>A</Button>}
        { checkAtOrNot('B') > 0 ?  <Button sx= {mainThemeStyle.ButtonJump}  >B</Button> :  <Button sx= {mainThemeStyle.ButtonJump} disabled>B</Button>}
        { checkAtOrNot('C') > 0 ?  <Button sx= {mainThemeStyle.ButtonJump}  >C</Button> :  <Button sx= {mainThemeStyle.ButtonJump} disabled>C</Button>}
        { checkAtOrNot('D') > 0 ?  <Button sx= {mainThemeStyle.ButtonJump}  >D</Button> :  <Button sx= {mainThemeStyle.ButtonJump} disabled>D</Button>}
        { checkAtOrNot('E') > 0 ?  <Button sx= {mainThemeStyle.ButtonJump}  >E</Button> :  <Button sx= {mainThemeStyle.ButtonJump} disabled>E</Button>}
        { checkAtOrNot('F') > 0 ?  <Button sx= {mainThemeStyle.ButtonJump}  >F</Button> :  <Button sx= {mainThemeStyle.ButtonJump} disabled>F</Button>}
        { checkAtOrNot('G') > 0 ?  <Button sx= {mainThemeStyle.ButtonJump}  >G</Button> :  <Button sx= {mainThemeStyle.ButtonJump} disabled>G</Button>}
        { checkAtOrNot('H') > 0 ?  <Button sx= {mainThemeStyle.ButtonJump}  >H</Button> :  <Button sx= {mainThemeStyle.ButtonJump} disabled>H</Button>}
        { checkAtOrNot('I') > 0 ?  <Button sx= {mainThemeStyle.ButtonJump}  >I</Button> :  <Button sx= {mainThemeStyle.ButtonJump} disabled>I</Button>}
        { checkAtOrNot('A') > 0 ?  <Button sx= {mainThemeStyle.ButtonJump}  >A</Button> :  <Button sx= {mainThemeStyle.ButtonJump} disabled>A</Button>}
        { checkAtOrNot('A') > 0 ?  <Button sx= {mainThemeStyle.ButtonJump}  >A</Button> :  <Button sx= {mainThemeStyle.ButtonJump} disabled>A</Button>}
        { checkAtOrNot('A') > 0 ?  <Button sx= {mainThemeStyle.ButtonJump}  >A</Button> :  <Button sx= {mainThemeStyle.ButtonJump} disabled>A</Button>}
        { checkAtOrNot('A') > 0 ?  <Button sx= {mainThemeStyle.ButtonJump}  >A</Button> :  <Button sx= {mainThemeStyle.ButtonJump} disabled>A</Button>}
        { checkAtOrNot('A') > 0 ?  <Button sx= {mainThemeStyle.ButtonJump}  >A</Button> :  <Button sx= {mainThemeStyle.ButtonJump} disabled>A</Button>}
        { checkAtOrNot('A') > 0 ?  <Button sx= {mainThemeStyle.ButtonJump}  >A</Button> :  <Button sx= {mainThemeStyle.ButtonJump} disabled>A</Button>}
        { checkAtOrNot('A') > 0 ?  <Button sx= {mainThemeStyle.ButtonJump}  >A</Button> :  <Button sx= {mainThemeStyle.ButtonJump} disabled>A</Button>}
        { checkAtOrNot('A') > 0 ?  <Button sx= {mainThemeStyle.ButtonJump}  >A</Button> :  <Button sx= {mainThemeStyle.ButtonJump} disabled>A</Button>}
        { checkAtOrNot('A') > 0 ?  <Button sx= {mainThemeStyle.ButtonJump}  >A</Button> :  <Button sx= {mainThemeStyle.ButtonJump} disabled>A</Button>}
        { checkAtOrNot('A') > 0 ?  <Button sx= {mainThemeStyle.ButtonJump}  >A</Button> :  <Button sx= {mainThemeStyle.ButtonJump} disabled>A</Button>}
        { checkAtOrNot('A') > 0 ?  <Button sx= {mainThemeStyle.ButtonJump}  >A</Button> :  <Button sx= {mainThemeStyle.ButtonJump} disabled>A</Button>}
        { checkAtOrNot('A') > 0 ?  <Button sx= {mainThemeStyle.ButtonJump}  >A</Button> :  <Button sx= {mainThemeStyle.ButtonJump} disabled>A</Button>}
        { checkAtOrNot('A') > 0 ?  <Button sx= {mainThemeStyle.ButtonJump}  >A</Button> :  <Button sx= {mainThemeStyle.ButtonJump} disabled>A</Button>}
        { checkAtOrNot('A') > 0 ?  <Button sx= {mainThemeStyle.ButtonJump}  >A</Button> :  <Button sx= {mainThemeStyle.ButtonJump} disabled>A</Button>}
        { checkAtOrNot('A') > 0 ?  <Button sx= {mainThemeStyle.ButtonJump}  >A</Button> :  <Button sx= {mainThemeStyle.ButtonJump} disabled>A</Button>}
        { checkAtOrNot('A') > 0 ?  <Button sx= {mainThemeStyle.ButtonJump}  >A</Button> :  <Button sx= {mainThemeStyle.ButtonJump} disabled>A</Button>}
        { checkAtOrNot('A') > 0 ?  <Button sx= {mainThemeStyle.ButtonJump}  >A</Button> :  <Button sx= {mainThemeStyle.ButtonJump} disabled>A</Button>} */}
     

    </ButtonGroup>
    {/* <TableContainer component={Paper} sx={{position: 'absolute',
           width:'auto',
           height: 'auto',
           top:'320px',
           left: '38px',
           right:'38px',
           backgroundColor:'#171E29',
          
           }}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow  sx={{ borderBottom: "1.2px solid black",
               }} >
            <TableCell sx={mainThemeStyle.cellHeader}>Location Name</TableCell>
            <TableCell sx={mainThemeStyle.cellHeader}>Resident Name</TableCell>
            <TableCell sx={mainThemeStyle.cellHeader}>Guest Name</TableCell>
            <TableCell sx={mainThemeStyle.cellHeader}>User Type</TableCell>
            <TableCell sx={mainThemeStyle.cellHeader}>Entry Type</TableCell>
            <TableCell sx={mainThemeStyle.cellHeader}>Date Added</TableCell>
            <TableCell sx={mainThemeStyle.cellHeader}>Time Stamp</TableCell>
            <TableCell sx={mainThemeStyle.cellHeader}>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {EnLog.map((row) => (
            <TableRow
              key={row.locationname}
              sx={{ borderBottom: "1.2px solid black",'&:last-child td, &:last-child th': { border: 0 },
               }}
            >
              <TableCell align="left" sx={mainThemeStyle.cellRow}>{row.locationname}</TableCell>
              <TableCell align="left" sx={mainThemeStyle.cellRow}>{row.residentname}</TableCell>
              <TableCell align="left" sx={mainThemeStyle.cellRow}>{row.guestname}</TableCell>
              <TableCell align="left" sx={mainThemeStyle.cellRow}>{row.usertype}</TableCell>
              <TableCell align="left" sx={mainThemeStyle.cellRow}>{row.entrytype}</TableCell>
              <TableCell align="left" sx={mainThemeStyle.cellDateTime}>{row.dateadded}</TableCell>
              <TableCell align="left" sx={mainThemeStyle.cellDateTime}>{row.timestamp}</TableCell>
              <TableCell ><Button  sx={mainThemeStyle.viewLogButton}>View Log</Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>     */}
   
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
                                  <TableCell align="left" sx={mainThemeStyle.cellRow}>{item.locationname}</TableCell>
                                  <TableCell align="left" sx={mainThemeStyle.cellRow}>{item.residentname}</TableCell>
                                  <TableCell align="left" sx={mainThemeStyle.cellRow}>{item.usertype}</TableCell>
                                  <TableCell align="left" sx={mainThemeStyle.cellRow}>{item.guestname}</TableCell>
                                  <TableCell align="left" sx={mainThemeStyle.cellRow}>{item.licenseplate}</TableCell>
                                  <TableCell align="left" sx={mainThemeStyle.cellRow}>{item.licensestate}</TableCell>
                                  <TableCell align="left" sx={mainThemeStyle.cellRow}>{item.guestphone}</TableCell>
                                  <TableCell align="left" sx={mainThemeStyle.cellRow}>{item.pintype}</TableCell>
                                  <TableCell align="left" sx={mainThemeStyle.cellRow}>{item.pinusetime}</TableCell>
                                  <TableCell align="left" sx={mainThemeStyle.cellGreen}>{item.dateexpiry}</TableCell>
                                  { item.status == "Expired"  && <TableCell align="left" sx={mainThemeStyle.cellRed}>{item.status}</TableCell>}
                                  { item.status == "Active"  && <TableCell align="left" sx={mainThemeStyle.cellGreen}>{item.status}</TableCell>}
                                  <TableCell >
                                  <Stack direction="row" spacing={2}>
                                    <Typography></Typography>
                                    <Button  sx={mainThemeStyle.viewLogButton} onClick={() => {ChangeId(item.id)}}>Edit</Button>
                                  <Button  sx={mainThemeStyle.viewLogButtonRed} onClick={() => {DeletId(item.id)}}>Delete</Button></Stack></TableCell>
                                </TableRow>)
                            )
                        }
                    </TableBody>
                   
                </TblContainer>
                <Box sx={{marginTop:'10px'}}>
<BelowTblPagination ></BelowTblPagination>


</Box></Box>
                 </Box>
          
          <Popup
                title="Edit Guest PIN"
                openPopup={openPopup}
                setOpenPopup={setOpenPopup}
            >
             
      <ShowLog/>
               
            </Popup></> 
          
          
          
          
          ;
};

export default GuestParking;