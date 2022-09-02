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

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}
function randomDate(start, end) {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}



function setataForReact(){

}
const headCells = [
  { id: 'locationname', label: 'Location Name' },
  { id: 'residentname', label: 'Resident Name' },
  { id: 'guestname', label: 'Guest Name' },
  { id: 'usertype', label: 'User Type' },
  { id: 'entrytype', label: 'Entry Type' },
  { id: 'dateadded', label: 'Date Added' },
  { id: 'timestamp', label: 'Time Stamp', disableSorting: true },
  { id: 'action', label: 'Action', disableSorting: true },
]

let EnLog = [], TYPE = ['Android','iOS','Phone','Unkonwn'],ENTRYTYPE = ['RFID Card','Door PIN','Delivery PIN','Guest PIN'];
let Alphabet =['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
for (let i =0; i < 200; i++){
  EnLog[i] = {
    id: i,
    locationname:faker.company.name(),
    residentname:faker.name.fullName(),
    guestname:faker.name.fullName(),
    usertype:TYPE[Math.floor(Math.random()*TYPE.length)],
    entrytype:ENTRYTYPE[Math.floor(Math.random()*ENTRYTYPE.length)],
    dateadded:format(faker.date.recent(), 'dd/MM/yyyy'),
    timestamp:format(faker.date.recent(), 'HH:mm'),
  }
}


function EntryLog ( props){

  const myContainer = useRef(null);
  const [shownameType, setShownameType] = useState(true);
  const [showLocationType, setShowLocationType] = useState(true);
  const [showResidentType, setShowResidentType] = useState(false);
  const [showGuestType, setShowGuestType] = useState(false);
  const [showuserType, setShowuserType] = useState(false);
  const [showentryType, setShowentryType] = useState(false);
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
          setShowuserType(false);
          setShowentryType(false);
          setShowDateType(false);
          setShownameType(true);
          setShowLocationType(true);
          setShowResidentType(false);
          setShowGuestType(false);
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
        callback: () =>  {setShowuserType(false);
          setShowentryType(false);
          setShowDateType(false);
          setShownameType(true);
          setShowLocationType(false);
          setShowResidentType(true);
          setShowGuestType(false);
          if(document.getElementById('input-location') != null)
          document.getElementById('input-location').value ='';
          if(document.getElementById('date') != null)
                document.getElementById('date').value ='';
          setfilterText('');
        }
      },
      {
        label: "Guest Name",
        callback: () => {setShowuserType(false);
          setShowentryType(false);
          setShowDateType(false);
          setShownameType(true);
          setShowLocationType(false);
          setShowResidentType(false);
          setShowGuestType(true);
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
          setShowentryType(false);
          setShowDateType(false);
          setShownameType(false);
          setShowuserType(true);
          if(document.getElementById('input-location') != null)
    document.getElementById('input-location').value ='';
    if(document.getElementById('date') != null)
          document.getElementById('date').value ='';
          setfilterText('');
        }
      },
      {
        label: "Entry Type",
        callback: () => {
          setShowDateType(false);
          setShownameType(false);
          setShowuserType(false);
          setShowentryType(true);
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
          setShowuserType(false);
          setShowentryType(false);
          setShowDateType(true);
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
      {
        label: "Phone",
        callback: () => {setfilterText("Phone")}
      },
      {
        label: "Unkonwn",
        callback: () => {setfilterText("Unkonwn")}
      },
    ]
  };
 
  const EntryTypeMenu = {
    id: "1",
    label: "Select Type",
    items: [
      {
        label: "RFID Card",
        callback: () =>  {setfilterText("RFID Card")}
       
      },
      {
        label: "Door PIN",
        callback: () =>  {setfilterText("Door PIN")}
      },
      {
        label: "Delivery PIN",
        callback: () => {setfilterText("Delivery PIN")}
      },
      {
        label: "Guest PIN",
        callback: () => {setfilterText("Guest PIN")}
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
      {/* 
      <Grid item xs={6}>
      <Typography>Guest Name :</Typography>
      <Typography> {EnLog[currentId].guestname}</Typography>
      </Grid>
      <Grid item xs={6}>
      <Typography>User Type :</Typography>
      <Typography>{ EnLog[currentId].usertype}</Typography>
      </Grid>
      <Grid item xs={6}>
      <Typography>PIN Type :</Typography>
      <Typography>{ EnLog[currentId].entrytype}</Typography>
      </Grid>
      <Grid item xs={6}>
      <Typography>Date Added :</Typography>
      <Typography> {EnLog[currentId].dateadded}</Typography>
      </Grid>
      <Grid item xs={6}>
      <Typography>Status :</Typography>
      <Typography> Value</Typography>
      </Grid> */}
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

                else if(showGuestType)
                return items.filter(x => x.guestname.toLowerCase().includes(filterText.toLowerCase()))
                
                else 
                return items;
                
              }
              else if(showDateType){
                var mystr = filterText;
                mystr = moment(mystr).format('DD/MM/YYYY');
                return items.filter(x => x.dateadded.toLowerCase().includes(mystr))
              }
              else if(showuserType){
                
                if(filterText === 'Android' || filterText === 'iOS' || filterText === 'Phone' || filterText === 'Unkonwn'){
                  return items.filter(x => x.usertype.toLowerCase() === (filterText.toLowerCase()))
                }
                else{
                  return items;
                }
              }
              else if(showentryType){
                if(filterText === 'RFID Card' || filterText === 'Door PIN' || filterText === 'Delivery PIN' || filterText === 'Guest PIN'){
                  return items.filter(x => x.entrytype.toLowerCase() === (filterText.toLowerCase()))
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
                 {(showuserType || showentryType )  && 
                   <Typography sx={mainThemeStyle.lableContains}>Equals</Typography>}
                   {showuserType  &&  
                   <NestedButtonDropdown
            itemId={TypeMenu.id} // NOTE: itemId is required for track items
            variant="contained"
            sx={mainThemeStyle.filterButton}
            data={TypeMenu}
          />
                  }

                   {showentryType  &&  
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
                 {(showuserType || showentryType )  && 
                   <Typography sx={mainThemeStyle.lableContains}>Equals</Typography>}
                   {showuserType  &&  
                   <NestedButtonDropdown
            itemId={TypeMenu.id} // NOTE: itemId is required for track items
            variant="contained"
            sx={mainThemeStyle.filterButton}
            data={TypeMenu}
          />
                  }

                   {showentryType  &&  
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
                                  <TableCell align="left" sx={mainThemeStyle.cellRow}>{item.guestname}</TableCell>
                                  <TableCell align="left" sx={mainThemeStyle.cellRow}>{item.usertype}</TableCell>
                                  <TableCell align="left" sx={mainThemeStyle.cellRow}>{item.entrytype}</TableCell>
                                  <TableCell align="left" sx={mainThemeStyle.cellGreen}>{item.dateadded}</TableCell>
                                  <TableCell align="left" sx={mainThemeStyle.cellGreen}>{item.timestamp}</TableCell>
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
                title="Entry Log"
                openPopup={openPopup}
                setOpenPopup={setOpenPopup}
            >
             
      <ShowLog/>
               
            </Popup></> 
          
          
          
          
          ;
};

export default EntryLog;