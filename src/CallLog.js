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
import moment from 'moment';
import NoImage from './asset/noimage.png';
import Popup from "./components/Popup";
import ReactPlayer from "react-player";

import _ from "lodash";
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
  { id: 'contactphone', label: 'Contact Phone' },
  { id: 'appstuatus', label: 'App Status' },
  { id: 'timestamp', label: 'Time Stamp' },
  { id: 'callstatus', label: 'Call Status' },
  { id: 'groupcall', label: 'Group Call'},
  { id: 'action', label: 'Action', disableSorting: true },
]

let EnLog = [], 
TYPE = ['Android','iOS','Phone'],
CALLTYPE = ['Answered Call','Rejected Call','Missed Call'],
GroupTYPE = ['Yes','No'];

let Alphabet =['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
for (let i =0; i < 20; i++){
  EnLog[i] = {
    locationname:faker.company.name(),
    residentname:faker.name.fullName(),
    contactphone:faker.phone.number('+1##########'),
    appstuatus:TYPE[Math.floor(Math.random()*TYPE.length)],
    timestamp:format(faker.date.recent(), 'dd/MM/yyyy'),
    callstatus:CALLTYPE[Math.floor(Math.random()*CALLTYPE.length)],
    groupcall:GroupTYPE[Math.floor(Math.random()*GroupTYPE.length)],
  }
}


function CallLog ( props){

  const myContainer = useRef(null);
  const [shownameType, setShownameType] = useState(true);
  const [showLocationType, setShowLocationType] = useState(true);
  const [showResidentType, setShowResidentType] = useState(false);
  const [showPhoneType, setShowPhoneType] = useState(false);
  const [showAppType, setShowAppType] = useState(false);
  const [showCallType, setShowCallType] = useState(false);
  const [showDateType, setShowDateType] = useState(false);
  const [showGroupCall, setShowGroupCall] = useState(false);
  const [filterText, setfilterText] = useState('');
  const [resetClick, setResetClicked] = useState(false);
  const [currentId, setCurrentId] = useState(0);
  const [openPopup, setOpenPopup] = useState(false);
  const [currentPopId, setCurrentPopId] = useState(0);
  const FilterMenu = {
    id: "1",
    label: "Location Name",
    items: [
      {
        label: "Location Name",
        callback: () =>  {
          setShowPhoneType(false);
          setShowAppType(false);
          setShowDateType(false);
          setShownameType(true);
          setShowLocationType(true);
          setShowResidentType(false);
          setShowCallType(false);
          setShowGroupCall(false);
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
        callback: () =>  {  setShowPhoneType(false);
          setShowAppType(false);
          setShowDateType(false);
          setShownameType(true);
          setShowLocationType(false);
          setShowResidentType(true);
          setShowCallType(false);
          setShowGroupCall(false);
          if(document.getElementById('input-location') != null)
          document.getElementById('input-location').value ='';
          if(document.getElementById('date') != null)
                document.getElementById('date').value ='';
          setfilterText('');
        }
      },
      {
        label: "Contact Phone",
        callback: () => {  setShowPhoneType(true);
          setShowAppType(false);
          setShowDateType(false);
          setShownameType(true);
          setShowLocationType(false);
          setShowResidentType(false);
          setShowCallType(false);
          setShowGroupCall(false);
          if(document.getElementById('input-location') != null)
    document.getElementById('input-location').value ='';
    if(document.getElementById('date') != null)
          document.getElementById('date').value ='';
          setfilterText('');
        }
      },
      {
        label: "App Status",
        callback: () => {
          setShowPhoneType(false);
          setShowAppType(true);
          setShowDateType(false);
          setShownameType(false);
          setShowLocationType(false);
          setShowResidentType(false);
          setShowCallType(false);
          setShowGroupCall(false);
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
          setShowPhoneType(false);
          setShowAppType(false);
          setShowDateType(true);
          setShownameType(false);
          setShowLocationType(false);
          setShowResidentType(false);
          setShowCallType(false);
          setShowGroupCall(false);
          if(document.getElementById('input-location') != null)
    document.getElementById('input-location').value ='';
    if(document.getElementById('date') != null)
          document.getElementById('date').value ='';
          setfilterText('');
        }
      },
      {
        label: "Call Status",
        callback: () => {
          setShowPhoneType(false);
          setShowAppType(false);
          setShowDateType(false);
          setShownameType(false);
          setShowLocationType(false);
          setShowResidentType(false);
          setShowCallType(true);
          setShowGroupCall(false);
          if(document.getElementById('input-location') != null)
          document.getElementById('input-location').value ='';
          if(document.getElementById('date') != null)
                document.getElementById('date').value ='';
          setfilterText('');
        }
      },
      {
        label: "Group Call",
        callback: () => {
          setShowPhoneType(false);
          setShowAppType(false);
          setShowDateType(false);
          setShownameType(false);
          setShowLocationType(false);
          setShowResidentType(false);
          setShowCallType(false);
          setShowGroupCall(true);
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
    ]
  };
 
  const CALLTYPEMenu = {
    id: "1",
    label: "Select Type",
    items: [
      {
        label: "Answered Call",
        callback: () =>  {setfilterText("Answered Call")}
       
      },
      {
        label: "Rejected Call",
        callback: () =>  {setfilterText("Rejected Call")}
      },
      {
        label: "Missed Call",
        callback: () => {setfilterText("Missed Call")}
      }
      
    ]
  };

  const GroupTypeMenu= {
    id: "1",
    label: "Select Type",
    items: [
      {
        label: "Yes",
        callback: () =>  {setfilterText("Yes")}
       
      },
      {
        label: "No",
        callback: () =>  {setfilterText("No")}
      }
      
    ]
  }
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
  const ChangeId = (val,isVideo) =>{
    console.log(currentId);
    setCurrentId(val);
    setCurrentPopId(isVideo);
    setOpenPopup(true);
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
  const ShowLog = () =>{
    if(currentPopId == 0){
    return(<Grid container spacing={2}> 
      <Grid item >
       
      <img  src={NoImage} height={500} width={500}></img>
     
      </Grid>
      
      </Grid>)
      }
      else if(currentPopId == 1){
        return(<Grid container spacing={2}> 
          <Grid item >
           
          <ReactPlayer  controls url='https://www.youtube.com/watch?v=A-sysM6o7Cg'
          />
          
         
         
          </Grid>
          
          </Grid>)
      }
      else if(currentPopId == 2){
        return(<Grid container spacing={2}> 
          <Grid item >
           
          <ReactPlayer controls url='https://www.youtube.com/watch?v=A-sysM6o7Cg'
          />
          
         
         
          </Grid>
          
          </Grid>)
      }
  }
  const ShowVideoLog = () =>{
    return(<Grid container spacing={2}> 
      <Grid item >
       
      <ReactPlayer width="480" height="240" controls url='https://www.youtube.com/watch?v=A-sysM6o7Cg'
      />
      
     
     
      </Grid>
      
      </Grid>)
  }
  const ShowDoorVideoLog = () =>{
    return(<Grid container spacing={2}> 
      <Grid item >
       
      <ReactPlayer width="480" height="240" controls url='https://www.youtube.com/watch?v=A-sysM6o7Cg'
      />
     
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

                else if(showResidentType)
                return items.filter(x => x.residentname.toLowerCase().includes(filterText.toLowerCase()))

                else if(showPhoneType)
                return items.filter(x => x.contactphone.toLowerCase().includes(filterText.toLowerCase()))

                else
                return items;
              }
              else if(showDateType){
                var mystr = filterText;
                mystr = moment(mystr).format('DD/MM/YYYY');
                return items.filter(x => x.timestamp.toLowerCase().includes(mystr))
              }
              else if(showAppType){
                
                if(filterText === 'Android' || filterText === 'iOS' || filterText === 'Phone'){
                  return items.filter(x => x.appstuatus.toLowerCase() === (filterText.toLowerCase()))
                }
                else{
                  return items;
                }
              }
              else if(showCallType){
                if(filterText === 'Answered Call' || filterText === 'Rejected Call' || filterText === 'Missed Call' ){
                  return items.filter(x => x.callstatus.toLowerCase() === (filterText.toLowerCase()))
                }
                else{
                  return items;
                }
              }
              else if(showGroupCall){
                if(filterText === 'Yes' || filterText === 'No' ){
                  return items.filter(x => x.groupcall.toLowerCase() === (filterText.toLowerCase()))
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
  return <> <Box>
    
    
    <Typography sx={mainThemeStyle.lablefilter}>Filter</Typography>
  
    
          
           <Box sx={{position: 'absolute',
           width:'680px',
           height: '280px',
           top:'160px',
           left: '38px',
           display: { xs: "none", md: "flex" },
           right: '38px',
           flexGrow: 1
           }}>
             
           <Stack direction="row" spacing={2} >
                  
                   <NestedButtonDropdown
            itemId={FilterMenu.id} // NOTE: itemId is required for track items
            variant="contained"
            sx={mainThemeStyle.filterButton}
            data={FilterMenu}
          /> {shownameType  &&
           
          <Typography sx={mainThemeStyle.lableContains}>Contains</Typography>}
                 {(showAppType || showCallType || showGroupCall )  && 
                   <Typography sx={mainThemeStyle.lableContains}>Equals</Typography>}
                   {showAppType  &&  
                   <NestedButtonDropdown
            itemId={TypeMenu.id} // NOTE: itemId is required for track items
            variant="contained"
            sx={mainThemeStyle.filterButton}
            data={TypeMenu}
          />
                  }

                   {showGroupCall  &&  
                   <NestedButtonDropdown
            itemId={GroupTypeMenu.id} // NOTE: itemId is required for track items
            variant="contained"
            sx={mainThemeStyle.filterButton}
            data={GroupTypeMenu}
            
          />
                  }
                   {showCallType  &&  
                   <NestedButtonDropdown
            itemId={CALLTYPEMenu.id} // NOTE: itemId is required for track items
            variant="contained"
            sx={mainThemeStyle.filterButton}
            data={CALLTYPEMenu}
            
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
                 
                 </Stack></Box>
                 

                 <Box sx={{position: 'absolute',
           width:'auto',
           height: '280px',
           top:'160px',
           left: '38px',
           display: { xs: "flex", md: "none" },
           right: '38px',
           flexGrow: 1
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
                 {(showAppType || showCallType || showGroupCall )  && 
                   <Typography sx={mainThemeStyle.lableContains}>Equals</Typography>}
                   {showAppType  &&  
                   <NestedButtonDropdown
            itemId={TypeMenu.id} // NOTE: itemId is required for track items
            variant="contained"
            sx={mainThemeStyle.filterButton}
            data={TypeMenu}
          />
                  }

                   {showGroupCall  &&  
                   <NestedButtonDropdown
            itemId={GroupTypeMenu.id} // NOTE: itemId is required for track items
            variant="contained"
            sx={mainThemeStyle.filterButton}
            data={GroupTypeMenu}
            
          />
                  }
                   {showCallType  &&  
                   <NestedButtonDropdown
            itemId={CALLTYPEMenu.id} // NOTE: itemId is required for track items
            variant="contained"
            sx={mainThemeStyle.filterButton}
            data={CALLTYPEMenu}
            
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
                       
                    />}
                   </Stack></Grid>
                   <Grid >
                   <Stack direction="row" justifyContent="right"
  alignItems="right">
                   <Button sx={mainThemeStyle.filterResetButtonSmall} onClick={handleSearch}>Go</Button>
                   
                   <Button sx={mainThemeStyle.filterResetButtonSmall} onClick={handleReset}>Reset Filters</Button>
                 
                   </Stack>
                 </Grid></Grid></Box>
                 <Typography sx={mainThemeStyle.lableJump}>Jump</Typography>
                 
                 <ButtonGroup variant="text"  sx={{position: 'absolute',
           width:'auto',
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
    <Box sx={mainThemeStyle.mainTablebox}>
        
    
               
             

              
                <TblContainer>
                    <TblHead />
                    <TableBody sx={{ backgroundColor:'#171E29'}}>
                        {
                            recordsAfterPagingAndSorting().map(item =>
                                ( <TableRow
                                  key={item.id}
                                  sx={{ borderBottom: "1.2px solid black",'&:last-child td, &:last-child th': { border: 0 },
                                   }}
                                >
                                 
                                  <TableCell align="left" sx={mainThemeStyle.cellRow}>{item.locationname}</TableCell>
                                  <TableCell align="left" sx={mainThemeStyle.cellRow}>{item.residentname}</TableCell>
                                  <TableCell align="left" sx={mainThemeStyle.cellRow}>{item.contactphone}</TableCell>
                                  <TableCell align="left" sx={mainThemeStyle.cellRow}>{item.appstuatus}</TableCell>
                                  <TableCell align="left" sx={mainThemeStyle.cellRow}>{item.timestamp}</TableCell>
                                 
                                  {item.callstatus == "Answered Call" && <TableCell align="left" sx={mainThemeStyle.cellGreen}
                                 >
                                    {item.callstatus}</TableCell>}
                                    {item.callstatus == "Rejected Call" && <TableCell align="left" sx={mainThemeStyle.cellRed}
                                 >
                                    {item.callstatus}</TableCell>}
                                    {item.callstatus == "Missed Call" && <TableCell align="left" sx={mainThemeStyle.cellYellow}
                                 >
                                    {item.callstatus}</TableCell>}
                                  <TableCell align="left" sx={mainThemeStyle.cellRow}>{item.groupcall}</TableCell>
                                  <TableCell >
                                   <Stack direction="row" spacing={2}>
                                    <Typography></Typography>
                                    <Button  sx={mainThemeStyle.viewLogButton} onClick={() => {ChangeId(item.id, 0)}}>View Image</Button>
                                    <Button  sx={mainThemeStyle.viewLogButton} onClick={() => {ChangeId(item.id,1)}}>View Call Video</Button>
                                    <Button  sx={mainThemeStyle.viewLogButton} onClick={() => {ChangeId(item.id,2)}}>View Door Unlock Video</Button>
                                    </Stack>
                                   </TableCell>

                                 
                                </TableRow>)
                            )
                        }
                    </TableBody>
                    
                </TblContainer> 
                
                <Box sx={{marginTop:'10px'}}>
<BelowTblPagination ></BelowTblPagination>


</Box>
               
               
                </Box>
                 </Box>
          
          <Popup
                title="Call Log"
                openPopup={openPopup}
                setOpenPopup={setOpenPopup}
            >
             
      <ShowLog/>
               
            </Popup>
          
         
             
      </> 
          ;
};

export default CallLog;