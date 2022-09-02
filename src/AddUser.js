import * as React from "react";
import { Box } from "@mui/system";
import { Button,Checkbox, Switch,Grid, InputLabel, List,Divider, FormControlLabel, Typography,ButtonGroup,Snackbar ,Alert ,IconButton, Icon,Dialog,DialogTitle,DialogContent,DialogActions,DialogContentText, cardMediaClasses, Input } from "@mui/material";
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
import { styled } from '@mui/material/styles';
import TimezoneSelect from 'react-timezone-select'
import Papa from "papaparse";
import { useParams,useNavigate  } from "react-router-dom";
import { ro } from "date-fns/locale";
const IOSSwitch = styled((props) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  '& .MuiSwitch-switchBase': {
    padding: 0,
    margin: 2,
    transitionDuration: '300ms',
    '&.Mui-checked': {
      transform: 'translateX(16px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        backgroundColor: theme.palette.mode === 'dark' ? '#2ECA45' : '#65C466',
        opacity: 1,
        border: 0,
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: 0.5,
      },
    },
    '&.Mui-focusVisible .MuiSwitch-thumb': {
      color: '#33cf4d',
      border: '6px solid #fff',
    },
    '&.Mui-disabled .MuiSwitch-thumb': {
      color:
        theme.palette.mode === 'light'
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    '&.Mui-disabled + .MuiSwitch-track': {
      opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
    },
  },
  '& .MuiSwitch-thumb': {
    boxSizing: 'border-box',
    width: 22,
    height: 22,
  },
  '& .MuiSwitch-track': {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
    opacity: 1,
    transition: theme.transitions.create(['background-color'], {
      duration: 500,
    }),
  },
}));


function AddUser ( props){
  const [parsedData, setParsedData] = useState([]);
  const [tableRows, setTableRows] = useState([]);

  const navigate = useNavigate();
  //State to store the values
  const [values, setValues] = useState([]);
  const [valuesSimple, setValuesSimple] = useState([]);
  const myContainer = useRef(null);
  const [showCSVUpload, setShowCSVUpload] = useState(true);
  const [showCSVData, setShowCSVData] = useState(false);
  const tableLengthAccess =['0','1','2','3','4','5','6','7','8','9'];
  
  const changeHandler = (event) => {
    Papa.parse(event.target.files[0], {
      header: true,
      skipEmptyLines: true,
      complete: function (results) {
        const rowsArray = [];
        const valuesArray = [];

        // Iterating data to get column name and their values
        results.data.map((d) => {
          rowsArray.push(Object.keys(d));
          valuesArray.push(Object.values(d));
        });
 

        // Parsed Data Response in array format
        setParsedData(results.data);

        // Filtered Column Names
        setTableRows(rowsArray[0]);

        // Filtered Values
        setValues(valuesArray.slice(0,10));
      },
    });
    setShowCSVUpload(false);
    setShowCSVData(true);
  }
  
  const handleClearData = () => {
    setShowCSVUpload(true);
    setShowCSVData(false);
    setParsedData([]);

        // Filtered Column Names
        setTableRows([]);

        // Filtered Values
        setValues([]);

       
  }

  const handleSaveData = () => {
    
  }

  const dataEntered = () =>{
    setShowCSVUpload(false);
  }
  return  <><Box><Typography sx={mainThemeStyle.lablefilter}>Add Users</Typography>
  
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
<Typography></Typography>
           {(showCSVUpload == true && <Button  sx={mainThemeStyle.filterResetButton} variant="contained" component="label">Upload CSV File<input hidden accept=".csv"
        onChange={changeHandler} type="file" /></Button>)}     
           {(showCSVUpload == false &&  <Button sx={mainThemeStyle.filterResetButton} onClick={handleClearData}>Clear Data</Button>)}        
           {(showCSVUpload == false &&  <Button sx={mainThemeStyle.filterResetButton} onClick={handleSaveData}>Submit Data</Button>)}   
                  
                  
                 </Stack>
         
                  </Box>
          
                  <TableContainer component={Paper} sx={{
        width:'auto',
        height: 'auto',
        marginLeft: '38px',
        marginRight:'38px',
        marginBottom:'38px',
        marginTop:'240px',
        backgroundColor:'#171E29',
       
        }}>
      <Table sx={{ minWidth: 650 }} >
        
        <TableHead sx={{ borderBottom: "1.2px solid black",
        }}>
          <TableRow>
            
            <TableCell align="left" sx={mainThemeStyle.cellHeader} >First Name</TableCell>
            <TableCell align="left" sx={mainThemeStyle.cellHeader} >Last Name</TableCell>
            <TableCell align="left" sx={mainThemeStyle.cellHeader} >Unit No.</TableCell>
            <TableCell align="left" sx={mainThemeStyle.cellHeader} >Phone Number</TableCell>
            <TableCell align="left" sx={mainThemeStyle.cellHeader} >Email Address</TableCell>
            <TableCell align="left" sx={mainThemeStyle.cellHeader} >Expiry Date</TableCell>
            <TableCell align="left" sx={mainThemeStyle.cellHeader} >Location 1</TableCell>
            <TableCell align="left" sx={mainThemeStyle.cellHeader} >Location 2</TableCell>
            <TableCell align="left" sx={mainThemeStyle.cellHeader} >Location 3</TableCell>
            <TableCell align="left" sx={mainThemeStyle.cellHeader} >Location 4</TableCell>
          </TableRow>
         
        </TableHead>
        {(showCSVData == false &&
        <TableBody>
           
         {tableLengthAccess.map((row) => (
            <TableRow sx={{ borderBottom: "1.2px solid black",
          }}>
                <TableCell align="right"> <TextField
        id="text"
        type="text"
       onChange={dataEntered}
       
                        InputLabelProps={{ shrink: true }
                      }
                          
                        InputProps={{
                           
                            sx: {
                                
                                color:'rgba(135, 135, 135, 0.5)',
                                height:'33px',
                                borderRadius: '5px',
                                backgroundColor: '#121212',
                                boxShadow: 'inset 0px 4px 4px rgba(0, 0, 0, 0.25)',
                                padding: '5px 0 5px 0',
                                textIndent: '15px !important',
                              
                               
                                
                            },
                        }}
                       
      /></TableCell>
        <TableCell align="right"> <TextField
        id="text"
        type="text"
        onChange={dataEntered}
       
                        InputLabelProps={{ shrink: true }
                      }
                          
                        InputProps={{
                           
                            sx: {
                                
                                color:'rgba(135, 135, 135, 0.5)',
                                height:'33px',
                                borderRadius: '5px',
                                backgroundColor: '#121212',
                                boxShadow: 'inset 0px 4px 4px rgba(0, 0, 0, 0.25)',
                                padding: '5px 0 5px 0',
                                textIndent: '15px !important',
                              
                               
                                
                            },
                        }}
                       
      /></TableCell>
        <TableCell align="right"> <TextField
        id="text"
        type="text"
        onChange={dataEntered}
       
                        InputLabelProps={{ shrink: true }
                      }
                          
                        InputProps={{
                           
                            sx: {
                                
                                color:'rgba(135, 135, 135, 0.5)',
                                height:'33px',
                                borderRadius: '5px',
                                backgroundColor: '#121212',
                                boxShadow: 'inset 0px 4px 4px rgba(0, 0, 0, 0.25)',
                                padding: '5px 0 5px 0',
                                textIndent: '15px !important',
                              
                               
                                
                            },
                        }}
                       
      /></TableCell>
        <TableCell align="right"> <TextField
        id="text"
        type="text"
        onChange={dataEntered}
       
                        InputLabelProps={{ shrink: true }
                      }
                          
                        InputProps={{
                           
                            sx: {
                                
                                color:'rgba(135, 135, 135, 0.5)',
                                height:'33px',
                                borderRadius: '5px',
                                backgroundColor: '#121212',
                                boxShadow: 'inset 0px 4px 4px rgba(0, 0, 0, 0.25)',
                                padding: '5px 0 5px 0',
                                textIndent: '15px !important',
                              
                               
                                
                            },
                        }}
                       
      /></TableCell>
        <TableCell align="right"> <TextField
        id="text"
        type="text"
        onChange={dataEntered}
       
                        InputLabelProps={{ shrink: true }
                      }
                          
                        InputProps={{
                           
                            sx: {
                                
                                color:'rgba(135, 135, 135, 0.5)',
                                height:'33px',
                                borderRadius: '5px',
                                backgroundColor: '#121212',
                                boxShadow: 'inset 0px 4px 4px rgba(0, 0, 0, 0.25)',
                                padding: '5px 0 5px 0',
                                textIndent: '15px !important',
                              
                               
                                
                            },
                        }}
                       
      /></TableCell>
        <TableCell align="right"> <TextField
        id="text"
        type="text"
        onChange={dataEntered}
       
                        InputLabelProps={{ shrink: true }
                      }
                          
                        InputProps={{
                           
                            sx: {
                                
                                color:'rgba(135, 135, 135, 0.5)',
                                height:'33px',
                                borderRadius: '5px',
                                backgroundColor: '#121212',
                                boxShadow: 'inset 0px 4px 4px rgba(0, 0, 0, 0.25)',
                                padding: '5px 0 5px 0',
                                textIndent: '15px !important',
                              
                               
                                
                            },
                        }}
                       
      /></TableCell>
              <TableCell align="right"><Checkbox sx={mainThemeStyle.formCheckBox} onChange={dataEntered}/></TableCell>
              <TableCell align="right"><Checkbox sx={mainThemeStyle.formCheckBox} onChange={dataEntered} /></TableCell>
              <TableCell align="right"><Checkbox sx={mainThemeStyle.formCheckBox} onChange={dataEntered}/></TableCell>
              <TableCell align="right"><Checkbox sx={mainThemeStyle.formCheckBox} onChange={dataEntered}/></TableCell>
            </TableRow>
          ))}
        </TableBody> )}

        {(showCSVData == true &&
        <TableBody>
           
         {values.map((value, index) => (
            <TableRow sx={{ borderBottom: "1.2px solid black",
          }}>
                <TableCell align="right"> <TextField
        id="text"
        type="text"
       onChange={dataEntered}
       defaultValue={value[0]}
                        InputLabelProps={{ shrink: true }
                      }
                          
                        InputProps={{
                           
                            sx: {
                                
                                color:'rgba(135, 135, 135, 0.5)',
                                height:'33px',
                                borderRadius: '5px',
                                backgroundColor: '#121212',
                                boxShadow: 'inset 0px 4px 4px rgba(0, 0, 0, 0.25)',
                                padding: '5px 0 5px 0',
                                textIndent: '15px !important',
                              
                               
                                
                            },
                        }}
                       
      /></TableCell>
        <TableCell align="right"> <TextField
        id="text"
        type="text"
        onChange={dataEntered}
        defaultValue={value[1]}
                        InputLabelProps={{ shrink: true }
                      }
                          
                        InputProps={{
                           
                            sx: {
                                
                                color:'rgba(135, 135, 135, 0.5)',
                                height:'33px',
                                borderRadius: '5px',
                                backgroundColor: '#121212',
                                boxShadow: 'inset 0px 4px 4px rgba(0, 0, 0, 0.25)',
                                padding: '5px 0 5px 0',
                                textIndent: '15px !important',
                              
                               
                                
                            },
                        }}
                       
      /></TableCell>
        <TableCell align="right"> <TextField
        id="text"
        type="text"
        onChange={dataEntered}
        defaultValue={value[2]}
                        InputLabelProps={{ shrink: true }
                      }
                          
                        InputProps={{
                           
                            sx: {
                                
                                color:'rgba(135, 135, 135, 0.5)',
                                height:'33px',
                                borderRadius: '5px',
                                backgroundColor: '#121212',
                                boxShadow: 'inset 0px 4px 4px rgba(0, 0, 0, 0.25)',
                                padding: '5px 0 5px 0',
                                textIndent: '15px !important',
                              
                               
                                
                            },
                        }}
                       
      /></TableCell>
        <TableCell align="right"> <TextField
        id="text"
        type="text"
        onChange={dataEntered}
        defaultValue={value[3]}
                        InputLabelProps={{ shrink: true }
                      }
                          
                        InputProps={{
                           
                            sx: {
                                
                                color:'rgba(135, 135, 135, 0.5)',
                                height:'33px',
                                borderRadius: '5px',
                                backgroundColor: '#121212',
                                boxShadow: 'inset 0px 4px 4px rgba(0, 0, 0, 0.25)',
                                padding: '5px 0 5px 0',
                                textIndent: '15px !important',
                              
                               
                                
                            },
                        }}
                       
      /></TableCell>
        <TableCell align="right"> <TextField
        id="text"
        type="text"
        onChange={dataEntered}
        defaultValue={value[4]}
                        InputLabelProps={{ shrink: true }
                      }
                          
                        InputProps={{
                           
                            sx: {
                                
                                color:'rgba(135, 135, 135, 0.5)',
                                height:'33px',
                                borderRadius: '5px',
                                backgroundColor: '#121212',
                                boxShadow: 'inset 0px 4px 4px rgba(0, 0, 0, 0.25)',
                                padding: '5px 0 5px 0',
                                textIndent: '15px !important',
                              
                               
                                
                            },
                        }}
                       
      /></TableCell>
        <TableCell align="right"> <TextField
        id="text"
        type="text"
        onChange={dataEntered}
        defaultValue={value[5]}
                        InputLabelProps={{ shrink: true }
                      }
                          
                        InputProps={{
                           
                            sx: {
                                
                                color:'rgba(135, 135, 135, 0.5)',
                                height:'33px',
                                borderRadius: '5px',
                                backgroundColor: '#121212',
                                boxShadow: 'inset 0px 4px 4px rgba(0, 0, 0, 0.25)',
                                padding: '5px 0 5px 0',
                                textIndent: '15px !important',
                              
                               
                                
                            },
                        }}
                       
      /></TableCell>
              <TableCell align="right"><Checkbox sx={mainThemeStyle.formCheckBox} onChange={dataEntered}/></TableCell>
              <TableCell align="right"><Checkbox sx={mainThemeStyle.formCheckBox} onChange={dataEntered} /></TableCell>
              <TableCell align="right"><Checkbox sx={mainThemeStyle.formCheckBox} onChange={dataEntered}/></TableCell>
              <TableCell align="right"><Checkbox sx={mainThemeStyle.formCheckBox} onChange={dataEntered}/></TableCell>
            </TableRow>
          ))}
        </TableBody> )}
      </Table>
    </TableContainer>
                  </Box>
          </> 
          
          
          
          
          
          
          ;
};

export default AddUser;