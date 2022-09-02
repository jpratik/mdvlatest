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
  { id: 'locationname', label: 'Location Name' },
  { id: 'unlock', label: 'Unlock', disableSorting: true},
  { id: 'locationtype', label: 'Location Type' },
  { id: 'locationcode', label: 'Location Code' },
  { id: 'licensekey', label: 'License Key' },
  { id: 'operation', label: 'Operation', disableSorting: true },
]

let EnLog = [], TYPE = ['Sunnel','AXIS','Nortek','HikVision','ResidentLink'];
let Alphabet =['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
for (let i =0; i < 200; i++){
  EnLog[i] = {
    id: i,
    locationname:faker.company.name(),
    locationtype:TYPE[Math.floor(Math.random()*TYPE.length)],
    locationcode:faker.random.numeric(12),
    licensekey:faker.random.alphaNumeric(8),
  }
}


function ManageLocation ( props){
  const navigate = useNavigate();
  const myContainer = useRef(null);
  const [shownameType, setShownameType] = useState(true);
  const [showLocationNameType, setShowLocationNameType] = useState(true);
  const [showLocationType, setShowLocationType] = useState(false);
  const [showLocationCodeType, setShowLocationCodeType] = useState(false);
  const [showLocationKeyType, setShowLocationKeyType] = useState(false);
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
            setShowLocationNameType(true);
            setShowLocationType(false);
            setShowLocationCodeType(false);
            setShowLocationKeyType(false);
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
        label: "Location Type",
        callback: () =>  {
            setShownameType(false);
            setShowLocationNameType(false);
            setShowLocationType(true);
            setShowLocationCodeType(false);
            setShowLocationKeyType(false);
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
        label: "Location Code",
        callback: () =>  {
            setShownameType(true);
            setShowLocationNameType(false);
            setShowLocationType(false);
            setShowLocationCodeType(true);
            setShowLocationKeyType(false);
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
        label: "License Key",
        callback: () =>  {
            setShownameType(true);
            setShowLocationNameType(false);
            setShowLocationType(false);
            setShowLocationCodeType(false);
            setShowLocationKeyType(true);
         // myContainer.this.setState({ //value:''});
         if(document.getElementById('input-location') != null)
    document.getElementById('input-location').value ='';
    if(document.getElementById('date') != null)
          document.getElementById('date').value ='';
          setfilterText('');
          //console.log(format(new Date(), 'dd/MM/yyyy'));
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
  } = useTable(records, headCells, filterFn,"Download Location");
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

  const ChangeId = (val,val2) =>{
    console.log(currentId);
    if(val2 == 0){
      navigate('../location/editlocation', { replace: true });
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
                if(showLocationNameType)
                return items.filter(x => x.locationname.toString().toLowerCase().includes(filterText.toLowerCase()))

                else if(showLocationCodeType)
                return items.filter(x => x.locationcode.toString().toLowerCase().includes(filterText.toLowerCase()))

                else if(showLocationKeyType)
                return items.filter(x => x.licensekey.toString().toLowerCase().includes(filterText.toLowerCase()))
                
                else 
                return items;
                
              }
              
              else if(showLocationType){
                if(filterText === 'Sunnel' || filterText === 'AXIS' || filterText === 'Nortek' || filterText === 'HikVision'|| filterText === 'ResidentLink'){
                  return items.filter(x => x.locationtype.toString().toLowerCase() === (filterText.toLowerCase()))
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
                 {showLocationType  && 
                   <Typography sx={mainThemeStyle.lableContains}>Equals</Typography>}
                   {showLocationType  &&  
                   <NestedButtonDropdown
            itemId={TypeMenu.id} // NOTE: itemId is required for track items
            variant="contained"
            sx={mainThemeStyle.filterButton}
            data={TypeMenu}
          />
                  }

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
                 {showLocationType  && 
                   <Typography sx={mainThemeStyle.lableContains}>Equals</Typography>}
                   {showLocationType  &&  
                   <NestedButtonDropdown
            itemId={TypeMenu.id} // NOTE: itemId is required for track items
            variant="contained"
            sx={mainThemeStyle.filterButton}
            data={TypeMenu}
          />
                  }

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
                                  <TableCell>
                                  <Stack direction="row" spacing={2}>
                                    <Typography></Typography>
                                    <Button  sx={mainThemeStyle.viewLogButton} onClick={() => {handleClickOpen(0)}}>Relay 1</Button>
                                    <Button  sx={mainThemeStyle.viewLogButton} onClick={() => {handleClickOpen(1)}}>Relay 2</Button>
                                    <Button  sx={mainThemeStyle.viewLogButton} onClick={() => {handleClickOpen(2)}}>Dual Realys</Button>
                                    </Stack>
                                  </TableCell>
                                  <TableCell align="left" sx={mainThemeStyle.cellGreen}>{item.locationtype}</TableCell>
                                  <TableCell align="left" sx={mainThemeStyle.cellRow}>{item.locationcode}</TableCell>
                                  <TableCell align="left" sx={mainThemeStyle.cellRow}>{item.licensekey}</TableCell>
                                  <TableCell>
                                  <Stack direction="row" spacing={2}>
                                    
                                    <IconButton sx={{ backgroundColor: '#2A2F3B'}}  size="small" color="primary"  onClick={() => {ChangeId(item.id,0)}}><EditIcon /></IconButton>
                                    
                                    { item.locationtype == "ResidentLink"  && 
                                    
                                    <IconButton sx={{ backgroundColor: '#2A2F3B'}} size="small" color="success"  onClick={() => {ChangeId(item.id,1)}}><RestartAltIcon /></IconButton>}
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

export default ManageLocation;