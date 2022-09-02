import React from "react";
import {  ThemeProvider } from '@mui/material/styles';
import Theme from './components/ItemTheme'
import { Box } from "@mui/system";
import { Button, Grid, List, Typography } from "@mui/material";
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import MapsHomeWorkOutlinedIcon from '@mui/icons-material/MapsHomeWorkOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import { ReactComponent as LogoManageDis } from './asset/MDsvg.svg';
import { ReactComponent as LogoManageDealer } from './asset/ManageDealer.svg';
import { ReactComponent as LogoManageUser } from './asset/ManageUser.svg';
import { ReactComponent as LogoSystemLog } from './asset/SystemLog.svg';
import SvgIcon from "@mui/material/SvgIcon";
import {mainThemeStyle} from './components/MainTheme';
import { useParams,useNavigate  } from "react-router-dom";
const ManageIcon=()=>(
  <SvgIcon>
    <LogoManageDis/>
  </SvgIcon>
);

const ManageDealerIcon=()=>(
  <SvgIcon>
    <LogoManageDealer/>
  </SvgIcon>
);

const ManageUserIcon=()=>(
  <SvgIcon>
    <LogoManageUser/>
  </SvgIcon>
);


const SystemLogIcon=()=>(
  <SvgIcon>
    <LogoSystemLog/>
  </SvgIcon>
);


const Home = props => {
  const theme = Theme;
  console.log("IN home Page");
  const navigate = useNavigate();
  const handleManageProperty = () =>{
    navigate('../property/manageproeprty', { replace: true });
  }

  const handleAddProperty = () => {
    navigate('../property/addproeprty', { replace: true });
  }

  const handleManageDistributor = () =>{
    navigate('../distributor/managedistributor', { replace: true });
  }

  const handleAddDistributor = () => {
    navigate('../distributor/adddistributor', { replace: true });
  }

  const handleManageDealer = () =>{
    navigate('../dealer/managedealer', { replace: true });
  }

  const handleAddDealer = () => {
    navigate('../dealer/adddealer', { replace: true });
  }

  const handleManageUser = () => {
    navigate('../user/manageuser', { replace: true });
  }

  const handleSystemLog = () => {
    navigate('../systemlog', { replace: true });
  }
  return <ThemeProvider theme={theme}>
    <Box sx={mainThemeStyle.mainbox} backgroundColor="menubarprimary.main">
    <Box sx={mainThemeStyle.box}>
    <Typography sx={mainThemeStyle.lable}>Home</Typography>
    </Box>
    
    <Typography sx={mainThemeStyle.lableshortcut}>Shortcuts</Typography>
  <Box sx={{position: 'absolute',
width:'auto',
height: '280px',
top:'220px',
left: '38px',
display: 'flex',
right: '38px',
flexGrow: 1
}}>
  
<Grid container rowSpacing={0} columnSpacing={{ xs: 2, sm: 3, md: 4 }} sx={{ flexGrow: 1, display: { xs: "none", md: "flex"}  }}>
        <Grid item xs={3}>
          <Button fullWidth={true} size="large" startIcon={<MapsHomeWorkOutlinedIcon />} sx={mainThemeStyle.boxHome} onClick={handleManageProperty}>
          Manage Property</Button>
        </Grid>
        <Grid item xs={3}>
        <Button fullWidth={true} size="large" startIcon={<AddOutlinedIcon />} sx={mainThemeStyle.boxHome} onClick={handleAddProperty}>Add Property</Button>
        </Grid>
        <Grid item xs={3}>
        <Button fullWidth={true} size="large" startIcon={<ManageIcon />} sx={mainThemeStyle.boxHome} onClick={handleManageDistributor}>Manage Distributor</Button>
        </Grid>
        <Grid item xs={3}>
        <Button fullWidth={true} size="large" startIcon={<AddOutlinedIcon />} sx={mainThemeStyle.boxHome} onClick={handleAddDistributor}>Add Distributor</Button>
        </Grid>
        <Grid item xs={3}>
        <Button fullWidth={true} size="large" startIcon={<ManageDealerIcon />} sx={mainThemeStyle.boxHome} onClick={handleManageDealer}> Manage Dealer</Button>
        </Grid>
        <Grid item xs={3}>
        <Button fullWidth={true} size="large" startIcon={<AddOutlinedIcon />} sx={mainThemeStyle.boxHome} onClick={handleAddDealer}>Add Dealer</Button>
        </Grid>
        <Grid item xs={3}>
        <Button fullWidth={true} size="large" startIcon={<SystemLogIcon />} sx={mainThemeStyle.boxHome} onClick={handleSystemLog}>System Logs</Button>
        </Grid>
        <Grid item xs={3}>
        <Button  item xs={3} fullWidth={true} size="large" startIcon={<ManageUserIcon />} sx={mainThemeStyle.boxHome} onClick={handleManageUser}>Manage User</Button>
        </Grid>
      </Grid>

      <Grid container rowSpacing={0} columnSpacing={{ xs: 4, sm: 5, md: 6 }} sx={{ flexGrow: 1, display: { xs: "flex", md: "none"}  }}>
        <Grid item xs={6}>
          <Button fullWidth={true} size="large" startIcon={<MapsHomeWorkOutlinedIcon />} sx={mainThemeStyle.boxHomeMobile}>
          Manage Property</Button>
        </Grid>
        <Grid item xs={6}>
        <Button fullWidth={true} size="large" startIcon={<AddOutlinedIcon />} sx={mainThemeStyle.boxHomeMobile}>Add Property</Button>
        </Grid>
        <Grid item xs={6}>
        <Button fullWidth={true} size="large" startIcon={<ManageIcon />} sx={mainThemeStyle.boxHomeMobile}>Manage Distributor</Button>
        </Grid>
        <Grid item xs={6}>
        <Button fullWidth={true} size="large" startIcon={<AddOutlinedIcon />} sx={mainThemeStyle.boxHomeMobile}>Add Distributor</Button>
        </Grid>
        <Grid item xs={6}>
        <Button fullWidth={true} size="large" startIcon={<ManageDealerIcon />} sx={mainThemeStyle.boxHomeMobile}>Manage Dealer</Button>
        </Grid>
        <Grid item xs={6}>
        <Button fullWidth={true} size="large" startIcon={<AddOutlinedIcon />} sx={mainThemeStyle.boxHomeMobile}>Add Dealer</Button>
        </Grid>
        <Grid item xs={6}>
        <Button fullWidth={true} size="large" startIcon={<SystemLogIcon />} sx={mainThemeStyle.boxHomeMobile}>System Logs</Button>
        </Grid>
        <Grid item xs={6}>
        <Button   fullWidth={true} size="large" startIcon={<ManageUserIcon />} sx={mainThemeStyle.boxHomeMobile}>Manage User</Button>
        </Grid>
      </Grid>
</Box>
    </Box></ThemeProvider>;
};

export default Home;