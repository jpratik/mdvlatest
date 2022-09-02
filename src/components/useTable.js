import React, { useState } from 'react'
import { Table, TableHead, TableRow, TableCell, TableContainer, TablePagination, TableSortLabel,Paper, Grid } from '@mui/material'
import { mainThemeStyle } from './MainTheme'
import {  Typography,IconButton,Box,Stack,Button} from "@mui/material";
import SvgIcon from "@mui/material/SvgIcon";
import DownloadIcon from '@mui/icons-material/Download';
import { ExportToCsv } from 'export-to-csv';
import exportFromJSON from 'export-from-json'
export default function useTable(records, headCells,filterFn, downlodText) {

  
  

    const pages = [10]
    const [page, setPage] = useState(0)
    const [rowsPerPage, setRowsPerPage] = useState(pages[page])
    const [order, setOrder] = useState()
    const [orderBy, setOrderBy] = useState()
    function LeftArrowIcon(props){
        return(
          <SvgIcon {...props}>
          <path d="M3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12Z"  fill="#00000000" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M12 16L8 12" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M16 12H8" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M12 8L8 12" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </SvgIcon>)
      };

      function LeftArrowIconOff(props){
        return(
          <SvgIcon {...props}>
          <path d="M3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12Z"  fill="#00000000" stroke="#171E29" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M12 16L8 12" stroke="#171E29" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M16 12H8" stroke="#171E29" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M12 8L8 12" stroke="#171E29" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </SvgIcon>)
      };

      function RightArrowIcon(props){
        return(
        <SvgIcon {...props}>
        <path d="M21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12Z" fill="#00000000" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M12 16L16 12" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M8 12H16" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M12 8L16 12" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </SvgIcon>)
      };
      
      function RightArrowIconOff(props){
        return(
            <SvgIcon {...props}>
            <path d="M21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12Z"  fill="#00000000"  stroke="#171E29" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M12 16L16 12" stroke="#171E29" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M8 12H16" stroke="#171E29" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M12 8L16 12" stroke="#171E29" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </SvgIcon>)
      }
    const TblContainer = props => (
        <TableContainer component={Paper} sx={{
        width:'auto',
        height: 'auto',
        top:'320px',
        marginLeft: '38px',
        marginRight:'38px',
        backgroundColor:'#171E29',
       
        }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
            {props.children}
        </Table>
        </TableContainer>  
    )

    const TblHead = props => {

        const handleSortRequest = cellId => {
            const isAsc = orderBy === cellId && order === "asc";
            setOrder(isAsc ? 'desc' : 'asc');
            setOrderBy(cellId)
        }

        return (<TableHead>
            <TableRow sx={{ borderBottom: "1.2px solid black",
        }}>
                {
                    headCells.map(headCell => (
                        <TableCell sx={mainThemeStyle.cellHeader}  key={headCell.id}
                            sortDirection={orderBy === headCell.id ? order : false}>
                            {headCell.disableSorting ? headCell.label :
                                <TableSortLabel
                                sx={{'&.MuiTableSortLabel-root': {
                                    color: 'white',
                                },
                                '&.MuiTableSortLabel-root:hover': {
                                    color: 'rgba(36, 160, 237, 1)',
                                },
                                '&.Mui-active': {
                                    color: 'rgba(36, 160, 237, 1)',
                                },
                                '& .MuiTableSortLabel-icon': {
                                    color: 'rgba(36, 160, 237, 1) !important',
                                },}}
                                    active={orderBy === headCell.id}
                                    direction={orderBy === headCell.id ? order : 'asc'}
                                    onClick={() => { handleSortRequest(headCell.id) }}>
                                    {headCell.label}
                                </TableSortLabel>
                            }
                        </TableCell>))
                }
            </TableRow>
        </TableHead>)
    }

    const handleChangePage = (newPage) => {
        setPage(newPage);
    }

    const handleChangeRowsPerPage = event => {
        setRowsPerPage(parseInt(event.target.value, 10))
        setPage(0);
    }
    function stableSort(array, comparator) {
        const stabilizedThis = array.map((el, index) => [el, index]);
        stabilizedThis.sort((a, b) => {
            const order = comparator(a[0], b[0]);
            if (order !== 0) return order;
            return a[1] - b[1];
        });
        return stabilizedThis.map((el) => el[0]);
    }

    function getComparator(order, orderBy) {
        return order === 'desc'
            ? (a, b) => descendingComparator(a, b, orderBy)
            : (a, b) => -descendingComparator(a, b, orderBy);
    }

    function descendingComparator(a, b, orderBy) {
        if (b[orderBy] < a[orderBy]) {
            return -1;
        }
        if (b[orderBy] > a[orderBy]) {
            return 1;
        }
        return 0;
    }

    const recordsAfterPagingAndSorting = () => {
        return stableSort(filterFn.fn(records), getComparator(order, orderBy))
            .slice(page * rowsPerPage, (page + 1) * rowsPerPage)
    }

    const setPageToNewOne = () =>{
        setPage(0);
    }
    const options = { 
        fieldSeparator: ',',
        quoteStrings: '"',
        decimalSeparator: '.',
        showLabels: true, 
        showTitle: false,
        title: '',
        useTextFile: false,
        useBom: true,
        useKeysAsHeaders: true,
        // headers: ['Column 1', 'Column 2', etc...] <-- Won't work with useKeysAsHeaders present!
      };
      const data = [{ foo: 'foo'}, { bar: 'bar' }]
    const csvExporter = new ExportToCsv(options);
    const fileName = 'download'
    const exportType =  exportFromJSON.types.csv
    const handleDownlod =() =>{
        csvExporter.generateCsv(recordsAfterPagingAndSorting());
       // const myObjStr = JSON.stringify(records);
       // exportFromJSON({ myObjStr, fileName, exportType })
    }

    const TblPagination = () => (<TablePagination
        component="div"
        page={page}
        rowsPerPageOptions={pages}
        rowsPerPage={rowsPerPage}
        count={records.length}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
    />)

    const getPageRecord = () => {
        
            return stableSort(filterFn.fn(records), getComparator(order, orderBy));
                
    }
    const pagesCount = records ? Math.ceil(getPageRecord().length/pages) : 0;
    const BelowTblPagination = () => {
        return (
           
        <Box sx= {mainThemeStyle.boxDown}>
        <Box sx= {mainThemeStyle.boxDownInner}>
       
            <Stack  direction="row" spacing={2}>
                { (page > 0 ? <IconButton aria-label="add an alarm" onClick={()=>handleChangePage(page-1)}>

<LeftArrowIcon color="#2A2F3B"/>
</IconButton>:<IconButton aria-label="add an alarm" disabled>

<LeftArrowIconOff/>
</IconButton> )}
                
                <Typography sx={mainThemeStyle.roundLabel}>{page+1}</Typography>
                <Typography sx={mainThemeStyle.ofLable}>of</Typography>
                <Typography sx={mainThemeStyle.roundLabel}>{pagesCount}</Typography>
                { (page < pagesCount-1 ?  <IconButton aria-label="add an alarm" onClick={()=>handleChangePage(page+1)}>

<RightArrowIcon/>
</IconButton>: <IconButton aria-label="add an alarm" disabled>

<RightArrowIconOff />
</IconButton> )}

            </Stack>
            
        </Box>
        <Box sx={mainThemeStyle.boxDonwLeft}> 
        <Button
      variant="outlined"
       
        startIcon={<DownloadIcon />}
        sx={mainThemeStyle.downloadButton}
       onClick={handleDownlod}
      >
        {downlodText}
      </Button>
        </Box>
        </Box> )
    }
    
    return {
        TblContainer,
        TblHead,
        TblPagination,
        BelowTblPagination,
        recordsAfterPagingAndSorting,
        setPageToNewOne
    }
}