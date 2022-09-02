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
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from "react-router-dom";

const headCells = [
  { id: 'username', label: 'Name' },
  { id: 'devicetype', label: 'Device Type' },
  { id: 'contactphone', label: 'Contact Phone #' },
  { id: 'virtualphone', label: 'Virtual Phone #' },
  { id: 'unit', label: 'Unit' },
  { id: 'email', label: 'Email' },
  { id: 'dateadded', label: 'Date Added', disableSorting: true },
  { id: 'expdate', label: 'Exp. Date', disableSorting: true },
  { id: 'status', label: 'System Status', disableSorting: true },
  { id: 'action', label: 'Action', disableSorting: true },
]

let EnLog = [], TYPE = ['Android','iOS','Phone','Unkonwn'],STATUSTYPE = ['Active','Pending','Blocked'];
let Alphabet =['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
for (let i =0; i < 200; i++){
  EnLog[i] = {
    id: i,
    username:faker.name.fullName(),
    devicetype:TYPE[Math.floor(Math.random()*TYPE.length)],
    contactphone:faker.phone.number('(###) ###-####'),
    virtualphone:faker.phone.number('(###) ###-####'),
    unit:faker.random.numeric(3) ,
    email:faker.internet.email() ,
    dateadded:format(faker.date.recent(), 'dd/MM/yyyy'),
    expdate:format(faker.date.recent(), 'dd/MM/yyyy'),
    status:STATUSTYPE[Math.floor(Math.random()*STATUSTYPE.length)],
  }
}


function ManageUsers ( props){
  const navigate = useNavigate();
  const myContainer = useRef(null);
  const [shownameType, setShownameType] = useState(true);
  const [showUserName, setShowUserName] = useState(true);
  const [showDeviceType, setShowDeviceType] = useState(false);
  const [showContacPhoneType, setShowContacPhoneType] = useState(false);
  const [showVirtualPhoneType, setShowVirtualPhoneType] = useState(false);
  const [showUnitType, setShowUnitType] = useState(false);
  const [showEmail, setShowEmail] = useState(false);
  const [showDateType, setShowDateType] = useState(false);
  const [showExpDateType, setShowExpDateType] = useState(false);
  const [showStatsType, setShowStatsType] = useState(false);
  const [filterText, setfilterText] = useState('');
  const [resetClick, setResetClicked] = useState(false);
  const [currentId, setCurrentId] = useState(0);
  const [openPopup, setOpenPopup] = useState(false);
  const FilterMenu = {
    id: "1",
    label: "User Name",
    items: [
      {
        label: "User Name",
        callback: () =>  {
            setShownameType(true);
            setShowUserName(true);
            setShowDeviceType(false);
            setShowContacPhoneType(false);
            setShowVirtualPhoneType(false);
            setShowUnitType(false);
            setShowEmail(false);
            setShowDateType(false);
            setShowExpDateType(false);
            setShowStatsType(false);
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
        label: "Device Type",
        callback: () =>  {
            setShownameType(false);
            setShowUserName(false);
            setShowDeviceType(true);
            setShowContacPhoneType(false);
            setShowVirtualPhoneType(false);
            setShowUnitType(false);
            setShowEmail(false);
            setShowDateType(false);
            setShowExpDateType(false);
            setShowStatsType(false);
          if(document.getElementById('input-location') != null)
          document.getElementById('input-location').value ='';
          if(document.getElementById('date') != null)
                document.getElementById('date').value ='';
          setfilterText('');
        }
      },
      {
        label: "Contact Phone #",
        callback: () => {
            setShownameType(true);
            setShowUserName(false);
            setShowDeviceType(false);
            setShowContacPhoneType(true);
            setShowVirtualPhoneType(false);
            setShowUnitType(false);
            setShowEmail(false);
            setShowDateType(false);
            setShowExpDateType(false);
            setShowStatsType(false);
          if(document.getElementById('input-location') != null)
    document.getElementById('input-location').value ='';
    if(document.getElementById('date') != null)
          document.getElementById('date').value ='';
          setfilterText('');
        }
      },
      {
        label: "Virual Phone #",
        callback: () => {
            setShownameType(true);
            setShowUserName(false);
            setShowDeviceType(false);
            setShowContacPhoneType(false);
            setShowVirtualPhoneType(true);
            setShowUnitType(false);
            setShowEmail(false);
            setShowDateType(false);
            setShowExpDateType(false);
            setShowStatsType(false);
          if(document.getElementById('input-location') != null)
    document.getElementById('input-location').value ='';
    if(document.getElementById('date') != null)
          document.getElementById('date').value ='';
          setfilterText('');
        }
      },
      {
        label: "Unit",
        callback: () => {
            setShownameType(true);
            setShowUserName(false);
            setShowDeviceType(false);
            setShowContacPhoneType(false);
            setShowVirtualPhoneType(false);
            setShowUnitType(true);
            setShowEmail(false);
            setShowDateType(false);
            setShowExpDateType(false);
            setShowStatsType(false);
          if(document.getElementById('input-location') != null)
    document.getElementById('input-location').value ='';
    if(document.getElementById('date') != null)
          document.getElementById('date').value ='';
          setfilterText('');
        }
      },
      {
        label: "Email",
        callback: () => {
            setShownameType(true);
            setShowUserName(false);
            setShowDeviceType(false);
            setShowContacPhoneType(false);
            setShowVirtualPhoneType(false);
            setShowUnitType(false);
            setShowEmail(true);
            setShowDateType(false);
            setShowExpDateType(false);
            setShowStatsType(false);
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
            setShowUserName(false);
            setShowDeviceType(false);
            setShowContacPhoneType(false);
            setShowVirtualPhoneType(false);
            setShowUnitType(false);
            setShowEmail(false);
            setShowDateType(true);
            setShowExpDateType(false);
            setShowStatsType(false);
          if(document.getElementById('input-location') != null)
    document.getElementById('input-location').value ='';
    if(document.getElementById('date') != null)
          document.getElementById('date').value ='';
          setfilterText('');
        }
      },
      {
        label: "Expiry Date",
        callback: () => {
            setShownameType(false);
            setShowUserName(false);
            setShowDeviceType(false);
            setShowContacPhoneType(false);
            setShowVirtualPhoneType(false);
            setShowUnitType(false);
            setShowEmail(false);
            setShowDateType(false);
            setShowExpDateType(true);
            setShowStatsType(false);
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
            setShowUserName(false);
            setShowDeviceType(false);
            setShowContacPhoneType(false);
            setShowVirtualPhoneType(false);
            setShowUnitType(false);
            setShowEmail(false);
            setShowDateType(false);
            setShowExpDateType(false);
            setShowStatsType(true);
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
  const StatusTypeMenu = {
    id: "1",
    label: "Select Type",
    items: [
      {
        label: "Active",
        callback: () =>  {setfilterText("Active")}
       
      },
      {
        label: "Pending",
        callback: () =>  {setfilterText("Pending")}
      },
      {
        label: "Blocked",
        callback: () => {setfilterText("Blocked")}
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
  } = useTable(records, headCells, filterFn,"Download Users");
 
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
     let ad = records.filter(x => x.username.toLowerCase().startsWith(value.toLowerCase()));
     console.log(ad.length);
     return ad.length;
  }

  const jumpToAlphabet = (val) =>{
    console.log('value is '+val);
    setFilterFn({
      fn: items => {
        return items.filter(x => x.username.toLowerCase().startsWith(val.toLowerCase()))
              
      }
  })
  setPageToNewOne();
  }

  const ChangeId = (val,val2) =>{
    console.log(currentId);
    if(val2 == 0){
      navigate('../user/edituser', { replace: true });
    }else{
    setCurrentId(val);
    setOpenPopup(true);
  }
  }

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
                if(showUserName)
                return items.filter(x => x.username.toString().toLowerCase().includes(filterText.toLowerCase()))

                else if(showContacPhoneType)
                return items.filter(x => x.contactphone.toString().toLowerCase().includes(filterText.toLowerCase()))

                else if(showVirtualPhoneType)
                return items.filter(x => x.virtualphone.toString().toLowerCase().includes(filterText.toLowerCase()))
                
                else if(showUnitType)
                return items.filter(x => x.unit.toString().toLowerCase().includes(filterText.toLowerCase()))
                
                else if(showEmail)
                return items.filter(x => x.email.toString().toLowerCase().includes(filterText.toLowerCase()))
                
                else 
                return items;
                
              }
              else if(showDateType){
                var mystr = filterText;
                mystr = moment(mystr).format('DD/MM/YYYY');
                return items.filter(x => x.dateadded.toLowerCase().includes(mystr))
              }
              else if(showExpDateType){
                var mystr = filterText;
                mystr = moment(mystr).format('DD/MM/YYYY');
                return items.filter(x => x.expdate.toLowerCase().includes(mystr))
              }
              else if(showDeviceType){
                
                if(filterText === 'Android' || filterText === 'iOS' || filterText === 'Phone' || filterText === 'Unkonwn'){
                  return items.filter(x => x.devicetype.toLowerCase() === (filterText.toLowerCase()))
                }
                else{
                  return items;
                }
              }
              else if(showStatsType){
                if(filterText === 'Active' || filterText === 'Pending' || filterText === 'Blocked'){
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
                 {(showDeviceType || showStatsType )  && 
                   <Typography sx={mainThemeStyle.lableContains}>Equals</Typography>}
                   {showDeviceType  &&  
                   <NestedButtonDropdown
            itemId={TypeMenu.id} // NOTE: itemId is required for track items
            variant="contained"
            sx={mainThemeStyle.filterButton}
            data={TypeMenu}
          />
                  }

                   {showStatsType  &&  
                   <NestedButtonDropdown
            itemId={StatusTypeMenu.id} // NOTE: itemId is required for track items
            variant="contained"
            sx={mainThemeStyle.filterButton}
            data={StatusTypeMenu}
            
          />
                  }
                   {(showDateType || showExpDateType) && <TextField
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
                 {(showDeviceType || showStatsType )  && 
                   <Typography sx={mainThemeStyle.lableContains}>Equals</Typography>}
                   {showDeviceType  &&  
                   <NestedButtonDropdown
            itemId={TypeMenu.id} // NOTE: itemId is required for track items
            variant="contained"
            sx={mainThemeStyle.filterButton}
            data={TypeMenu}
          />
                  }

                   {showStatsType  &&  
                   <NestedButtonDropdown
            itemId={StatusTypeMenu.id} // NOTE: itemId is required for track items
            variant="contained"
            sx={mainThemeStyle.filterButton}
            data={StatusTypeMenu}
            
          />
                  }
                   {(showDateType || showExpDateType) && <TextField
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
                                  <TableCell align="left" sx={mainThemeStyle.cellRow}>{item.username}</TableCell>
                                  <TableCell align="left" sx={mainThemeStyle.cellRow}>{item.devicetype}</TableCell>
                                  <TableCell align="left" sx={mainThemeStyle.cellRow}>{item.contactphone}</TableCell>
                                  <TableCell align="left" sx={mainThemeStyle.cellRow}>{item.virtualphone}</TableCell>
                                  <TableCell align="left" sx={mainThemeStyle.cellRow}>{item.unit}</TableCell>
                                  <TableCell align="left" sx={mainThemeStyle.cellRow}>{item.email}</TableCell>
                                  <TableCell align="left" sx={mainThemeStyle.cellRow}>{item.dateadded}</TableCell>
                                  <TableCell align="left" sx={mainThemeStyle.cellRow}>{item.expdate}</TableCell>
                                  {item.status == "Active" && <TableCell align="left" sx={mainThemeStyle.cellGreen}
                                 >
                                    {item.status}</TableCell>}
                                    {item.status == "Blocked" && <TableCell align="left" sx={mainThemeStyle.cellRed}
                                 >
                                    {item.status}</TableCell>}
                                    {item.status == "Pending" && <TableCell align="left" sx={mainThemeStyle.cellYellow}
                                 >
                                    {item.status}</TableCell>}
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
          
          <Popup
                title="Entry Log"
                openPopup={openPopup}
                setOpenPopup={setOpenPopup}
            >
             
      <ShowLog/>
               
            </Popup></> 
          
          
          
          
          ;
};

export default ManageUsers;