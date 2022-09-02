import React from "react";
import { Box } from "@mui/system";
import { Button, Grid, InputLabel, List, Typography,ButtonGroup ,IconButton, Icon } from "@mui/material";
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



const headCells = [
  { id: 'locationname', label: 'Location Name' },
  { id: 'licenseplate', label: 'License Plate' },
  { id: 'licensestate', label: 'License State' },
  { id: 'residentname', label: 'Resident Name' },
  { id: 'guestname', label: 'Guest Name' },
  { id: 'vehicletype', label: 'Vehicle Type' },
  { id: 'dateadded', label: 'Date Added' },
  { id: 'timestamp', label: 'Time Stamp', disableSorting: true },
  { id: 'status', label: 'Status' },
  { id: 'action', label: 'Action', disableSorting: true },
]

let EnLog = [], TYPE = ['One-Time Guest','Unregistered','Limited Guest','Unlimited Guest'],ENTRYTYPE = ['Authorized','UnAuthorized'];
let Alphabet =['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
for (let i =0; i < 200; i++){
  EnLog[i] = {
    id: i,
    locationname:faker.company.name(),
    licenseplate:faker.mersenne.rand(),
    licensestate:faker.address.stateAbbr(),
    residentname:faker.name.fullName(),
    guestname:faker.name.fullName(),
    vehicletype:TYPE[Math.floor(Math.random()*TYPE.length)],
    dateadded:format(faker.date.recent(), 'dd/MM/yyyy'),
    timestamp:format(faker.date.recent(), 'HH:mm'),
    status:ENTRYTYPE[Math.floor(Math.random()*ENTRYTYPE.length)],
  }
}


function LpTags ( props){

  const myContainer = useRef(null);
  const [shownameType, setShownameType] = useState(true);
  const [showLocationType, setShowLocationType] = useState(true);
  const [showLicenseState, setShowLicenseState] = useState(false);
  const [showLicensePlate, setShowLicensePlate] = useState(false);
  const [showResidentName, setShowResidentName] = useState(false);
  const [showGuestName, setShowGuestName] = useState(false);
  const [showVehicleType, setShowVehicleType] = useState(false);
  const [showStatus, setShowStatus] = useState(false);
  const [showDateType, setShowDateType] = useState(false);
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
          setShowLicenseState(false);
          setShowLicensePlate(false);
          setShowResidentName(false);
          setShowDateType(false);
          setShowGuestName(false);
          setShowVehicleType(false);
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
        label: "License Plate",
        callback: () =>  {
          setShownameType(true);
          setShowLocationType(false);
          setShowLicenseState(false);
          setShowLicensePlate(true);
          setShowResidentName(false);
          setShowDateType(false);
          setShowGuestName(false);
          setShowVehicleType(false);
          setShowStatus(false);
          if(document.getElementById('input-location') != null)
          document.getElementById('input-location').value ='';
          if(document.getElementById('date') != null)
                document.getElementById('date').value ='';
          setfilterText('');
        }
      },
      {
        label: "License State",
        callback: () => {
          setShownameType(true);
          setShowLocationType(false);
          setShowLicenseState(true);
          setShowLicensePlate(false);
          setShowResidentName(false);
          setShowDateType(false);
          setShowGuestName(false);
          setShowVehicleType(false);
          setShowStatus(false);
          if(document.getElementById('input-location') != null)
    document.getElementById('input-location').value ='';
    if(document.getElementById('date') != null)
          document.getElementById('date').value ='';
          setfilterText('');
        }
      },
      {
        label: "Resident Name",
        callback: () => {
          setShownameType(true);
          setShowLocationType(false);
          setShowLicenseState(false);
          setShowLicensePlate(false);
          setShowResidentName(true);
          setShowDateType(false);
          setShowGuestName(false);
          setShowVehicleType(false);
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
          setShowLicenseState(false);
          setShowLicensePlate(false);
          setShowResidentName(false);
          setShowDateType(false);
          setShowGuestName(true);
          setShowVehicleType(false);
          setShowStatus(false);
          if(document.getElementById('input-location') != null)
    document.getElementById('input-location').value ='';
    if(document.getElementById('date') != null)
          document.getElementById('date').value ='';
          setfilterText('');
        }
      },
      {
        label: "Vehicle Type",
        callback: () => {
          setShownameType(false);
          setShowLocationType(false);
          setShowLicenseState(false);
          setShowLicensePlate(false);
          setShowResidentName(false);
          setShowDateType(false);
          setShowGuestName(false);
          setShowVehicleType(true);
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
          setShowLicenseState(false);
          setShowLicensePlate(false);
          setShowResidentName(false);
          setShowDateType(false);
          setShowGuestName(false);
          setShowVehicleType(false);
          setShowStatus(true);
          if(document.getElementById('input-location') != null)
    document.getElementById('input-location').value ='';
    if(document.getElementById('date') != null)
          document.getElementById('date').value ='';
          setfilterText('');
        }
      },
      {
        label: "Date Added",
        callback: () => {
          setShownameType(false);
          setShowLocationType(false);
          setShowLicenseState(false);
          setShowLicensePlate(false);
          setShowResidentName(false);
          setShowDateType(true);
          setShowGuestName(false);
          setShowVehicleType(false);
          setShowStatus(false);
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
      },
      {
        label: "Unregistered",
        callback: () => {setfilterText("Unregistered")}
      },
    ]
  };

  const EntryTypeMenu = {
    id: "1",
    label: "Select Status",
    items: [
      {
        label: "Authorized",
        callback: () =>  {setfilterText("Authorized")}
       
      },
      {
        label: "UnAuthorized",
        callback: () =>  {setfilterText("UnAuthorized")}
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
  const {
      TblContainer,
      TblHead,
      TblPagination,
      BelowTblPagination,
      recordsAfterPagingAndSorting,
      setPageToNewOne
  } = useTable(records, headCells, filterFn,"Download Logs");
 
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

  const ChangeId = (val) =>{
    console.log(currentId);
    setCurrentId(val);
    setOpenPopup(true);
  }

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
      <Typography  sx={mainThemeStyle.popUpLableAnswer} height={200}> Parking Entry Captured Photo </Typography>
      <Typography  sx={mainThemeStyle.popUpLableAnswer} height={200}> Parking Entry OCR Captured Photo </Typography>
      <Typography  sx={mainThemeStyle.popUpLableAnswer} >User Name </Typography>
      <Typography  sx={mainThemeStyle.popUpLableAnswer}  >Guest Name </Typography>
      <Typography  sx={mainThemeStyle.popUpLableAnswer} >Parking Type </Typography>
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
      <img  src={NoImage} height={200} width={200}></img>
      <Typography  sx={mainThemeStyle.popUpLable}>{ EnLog[currentId].residentname} </Typography>
      <Typography  sx={mainThemeStyle.popUpLable}> {EnLog[currentId].guestname}</Typography>
      <Typography sx={mainThemeStyle.popUpLable}>{ EnLog[currentId].vehicletype}</Typography>
      <Typography  sx={mainThemeStyle.popUpLable}> {EnLog[currentId].dateadded}  {EnLog[currentId].timestamp}</Typography>
      <Typography  sx={mainThemeStyle.popUpLable}>{ EnLog[currentId].status}</Typography>
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
                if(showLocationType)
                return items.filter(x => x.locationname.toLowerCase().includes(filterText.toLowerCase()))

                else if(showLicensePlate)
                return items.filter(x => x.licenseplate.toString().toLowerCase().includes(filterText.toLowerCase()))

                else if(showLicenseState)
                return items.filter(x => x.licensestate.toLowerCase().includes(filterText.toLowerCase()))
                
                else if(showResidentName)
                return items.filter(x => x.residentname.toLowerCase().includes(filterText.toLowerCase()))
                
                else if(showGuestName)
                return items.filter(x => x.guestname.toLowerCase().includes(filterText.toLowerCase()))
                
                else 
                return items;
                
              }
              else if(showDateType){
                var mystr = filterText;
                mystr = moment(mystr).format('DD/MM/YYYY');
                return items.filter(x => x.dateadded.toLowerCase().includes(mystr))
              }
             
              else if(showVehicleType){
                
                if(filterText === 'One-Time Guest' || filterText === 'Unregistered' || filterText === 'Limited Guest' || filterText === 'Unlimited Guest'){
                  return items.filter(x => x.vehicletype.toLowerCase() === (filterText.toLowerCase()))
                }
                else{
                  return items;
                }
              }
              else if(showStatus){
                if(filterText === 'Authorized' || filterText === 'UnAuthorized' ){
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
                 {(showVehicleType || showStatus )  && 
                   <Typography sx={mainThemeStyle.lableContains}>Equals</Typography>}
                   {showVehicleType  &&  
                   <NestedButtonDropdown
            itemId={TypeMenu.id} // NOTE: itemId is required for track items
            variant="contained"
            sx={mainThemeStyle.filterButton}
            data={TypeMenu}
          />
                  }

                   {showStatus  &&  
                   <NestedButtonDropdown
            itemId={EntryTypeMenu.id} // NOTE: itemId is required for track items
            variant="contained"
            sx={mainThemeStyle.filterButton}
            data={EntryTypeMenu}
            
          />
                  }
                   {showDateType && <TextField
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
                 {(showVehicleType || showStatus )  && 
                   <Typography sx={mainThemeStyle.lableContains}>Equals</Typography>}
                   {showVehicleType  &&  
                   <NestedButtonDropdown
            itemId={TypeMenu.id} // NOTE: itemId is required for track items
            variant="contained"
            sx={mainThemeStyle.filterButton}
            data={TypeMenu}
          />
                  }

                   {showStatus  &&  
                   <NestedButtonDropdown
            itemId={EntryTypeMenu.id} // NOTE: itemId is required for track items
            variant="contained"
            sx={mainThemeStyle.filterButton}
            data={EntryTypeMenu}
            
          />
                  }
                   {showDateType && <TextField
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
                                  <TableCell align="left" sx={mainThemeStyle.cellRow}>{item.locationname}</TableCell>
                                  <TableCell align="left" sx={mainThemeStyle.cellRow}>{item.licenseplate}</TableCell>
                                  <TableCell align="left" sx={mainThemeStyle.cellRow}>{item.licensestate}</TableCell>
                                  <TableCell align="left" sx={mainThemeStyle.cellRow}>{item.residentname}</TableCell>
                                  <TableCell align="left" sx={mainThemeStyle.cellRow}>{item.guestname}</TableCell>
                                  <TableCell align="left" sx={mainThemeStyle.cellRow}>{item.vehicletype}</TableCell>
                                  <TableCell align="left" sx={mainThemeStyle.cellGreen}>{item.dateadded}</TableCell>
                                  <TableCell align="left" sx={mainThemeStyle.cellGreen}>{item.timestamp}</TableCell>
                                  {item.status == "Authorized" &&  <TableCell align="left" sx={mainThemeStyle.cellGreen}>{item.status}</TableCell>}
                                  {item.status == "UnAuthorized" &&  <TableCell align="left" sx={mainThemeStyle.cellRed}>{item.status}</TableCell>}
                                  <TableCell ><Button  sx={mainThemeStyle.viewLogButton} onClick={() => {ChangeId(item.id)}}>View Log</Button></TableCell>
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
                title="Lp Tag Log"
                openPopup={openPopup}
                setOpenPopup={setOpenPopup}
            >
             
      <ShowLog/>
               
            </Popup></> 
          
          
          
          
          ;
};

export default LpTags;