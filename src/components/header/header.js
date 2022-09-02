import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import ArrowDownIcon from "@mui/icons-material/ArrowDropDown";
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import Logo from './Logoheader';
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import MDVLogo from '../../asset/MDVLogoSingle.svg';
import { MenuList } from "@mui/material";
import NestedMenuItem from "mui-nested-menu";
import { NestedDropdown } from "./NestedDropdown";
import { hasChildren } from "./utils";
import {ActivityData, LocationData, UserData, SetUpData,SideMenu} from "./header.data";
import { borderRadius } from "@mui/system";
import { ListItem,ListItemIcon,ListItemText,Collapse ,List } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { Link ,useNavigate} from "react-router-dom";
const pages = ["Home", "Activity", "Location", "User", "Set Up"];

const Activitypages = [
  "Entry Logs",
  "Call Logs",
  "LP Tag Logs",
  "Guest PIN Logs",
  "Guest Parking Logs"
];
const Locationpages = ["Add Location", "Manage Location"];
const Userpages = ["Add Users", "Manage Users", "Groups"];
const Grouppages = ["Calling Group", "Office Group"];
const SetupPage = ["API", "RFID Card Format", "Blacklist", "Account"];
const BlacklistPages = ["LP Blacklist", "PIN Blacklist"];
const AccountPages = ["Profile", "Property Contacts", "Password"];
const settings = ["Logout"];
const darkTheme = createTheme({
  palette: {
    primary: {
      main: "#1D2837"
    }
  },
  menu: {
    "& .MuiMenu-root": {
      backgroundColor: "#2F323A",fontFamily: "Lato"
    }
  }
});




const ResponsiveAppBar = () => {
  const [anchorElement, setanchorElement] = React.useState(null);
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [anchorElActUser, setAnchorElActUser] = React.useState(null);
  const [anchorElLocUser, setAnchorElLocUser] = React.useState(null);
  const [anchorElUsrUser, setAnchorElUsrUser] = React.useState(null);
  const [anchorElSetUser, setAnchorElSetUser] = React.useState(null);
  
  const MenuItemInner = ({ item }) => {
    const Component = hasChildren(item) ? MultiLevel : SingleLevel;
    return <Component item={item} sx={{fontSize: '15px',fontFamily: "Lato"}}/>;
  };

  const SingleLevel = ({ item }) => {
    const {  callback} = item;
    return (
      <ListItem button sx={{ my: 0, color: "white", height: "60px",'&:hover': {
        backgroundColor: '#3C3C3C',borderRadius: 0,
        color: '#fff',borderRight: '1px solid black' ,borderLeft: '1px solid black'
    }, fontFamily: "Lato",fontSize:'18px',borderRight: '1px solid black' ,borderLeft: '1px solid black'}} onClick={() => {
      callback(navigate);
    }}>
        <ListItemIcon sx={{color: "white"}}>{item.icon}</ListItemIcon>
        <ListItemText  primary={<Typography  style={{ color:"white",fontFamily: "Lato",fontSize:'14px' }}>{item.label}</Typography>} />
        
      </ListItem>
    );
  };

  const MultiLevel = ({ item }) => {
    const { items: children } = item;
    
    const [open, setOpen] = React.useState(false);
  
    const handleClick = () => {
      setOpen((prev) => !prev);
    };
  
    return (
      <React.Fragment>
        <ListItem button onClick={handleClick} sx={{ my: 0, color: "white", height: "60px",'&:hover': {
          backgroundColor: '#3C3C3C',borderRadius: 0, fontFamily: "Lato",fontSize:'12px',
          color: '#fff',borderRight: '1px solid black' ,borderLeft: '1px solid black'
      }, fontFamily: "Lato",fontSize:'12px',borderRight: '1px solid black' ,borderLeft: '1px solid black'}}>
        <ListItemIcon sx={{color: "white", fontFamily: "Lato",fontSize:'12px'}}>{item.icon}</ListItemIcon>
          <ListItemText primary={<Typography  style={{ color:"white",fontFamily: "Lato",fontSize:'14px' }}>{item.label}</Typography>} />
          {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {children.map((child, key) => (
              <MenuItemInner key={key} item={child} />
            ))}
          </List>
        </Collapse>
      </React.Fragment>
    );
  };
  const openMenu = event => {
    setanchorElement(event.currentTarget);
  };
  
  const closeMenu = () => {
    setanchorElement(null);
  };
  
  const handleMenuItemClick = (data) => () => {
    closeMenu();
  };
  const handleClick = event => {
    setanchorElement(event.currentTarget);
  };
  
  const handleClose = () => {
    setanchorElement(null);
  };
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleOpenActivityMenu = (event) => {
    setAnchorElActUser(event.currentTarget);
  };
  const handleOpenLocationMenu = (event) => {
    setAnchorElLocUser(event.currentTarget);
  };
  const handleOpenUserUserMenu = (event) => {
    setAnchorElUsrUser(event.currentTarget);
  };
  const handleOpenSetUpMenu = (event) => {
    setAnchorElSetUser(event.currentTarget);
  };
  const handleCloseActivityMenu = (event) => {
    setAnchorElActUser(null);
  };
  const handleCloseLocationMenu = (event) => {
    setAnchorElLocUser(null);
  };
  const handleCloseUserUserMenu = (event) => {
    setAnchorElUsrUser(null);
  };
  const handleCloseSetUpMenu = (event) => {
    setAnchorElSetUser(null);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
    navigate('/');
  };
  let navigate = useNavigate();
  const handleCloseUserMenu = () => {
    console.log("Print one");
    setAnchorElUser(null);
    //navigate('/location');
      };

  
const MyMap = new Map();
MyMap.set("Activity",Activitypages);
MyMap.set("Location",Locationpages);
MyMap.set("User",Userpages);
MyMap.set("Set Up",SetupPage);



const MenuMap = new Map();
MenuMap.set("Activity",anchorElActUser);
MenuMap.set("Location",anchorElLocUser);
MenuMap.set("User",anchorElUsrUser);
MenuMap.set("Set Up",anchorElSetUser);

const MenuOpenMap = new Map();
MenuOpenMap.set("Activity",handleOpenActivityMenu);
MenuOpenMap.set("Location",handleOpenLocationMenu);
MenuOpenMap.set("User",handleOpenUserUserMenu);
MenuOpenMap.set("Set Up",handleOpenSetUpMenu);


const MenuCloseMap = new Map();
MenuCloseMap.set("Activity",handleCloseActivityMenu);
MenuCloseMap.set("Location",handleCloseLocationMenu);
MenuCloseMap.set("User",handleCloseUserUserMenu);
MenuCloseMap.set("Set Up",handleCloseSetUpMenu);

const menuItemsActivity = [
  Object.assign({}, ActivityData),
  
];
const [itemsActivity] = React.useState(menuItemsActivity);
menuItemsActivity.forEach((m, index) => {
  m.id = index.toString();
});

const menuLocationActivity = [
  Object.assign({}, LocationData),
  
];
const [itemsLocation] = React.useState(menuLocationActivity);
menuLocationActivity.forEach((m, index) => {
  m.id = index.toString();
});

const menuUserActivity = [
  Object.assign({}, UserData),
  
];
const [itemsUser] = React.useState(menuUserActivity);
menuUserActivity.forEach((m, index) => {
  m.id = index.toString();
});

const menuSetupActivity = [
  Object.assign({}, SetUpData),
  
];
const [itemsSetup] = React.useState(menuSetupActivity);
menuSetupActivity.forEach((m, index) => {
  m.id = index.toString();
});


const MyMapInsiderHelp = new Map();
MyMapInsiderHelp.set("Activity",itemsActivity);
MyMapInsiderHelp.set("Location",itemsLocation);
MyMapInsiderHelp.set("User",itemsUser);
MyMapInsiderHelp.set("Set Up",itemsSetup);
  return (
    
    <ThemeProvider theme={darkTheme}>
      <AppBar position="static" sx={{height:"60px"}}>
        <Toolbar disableGutters>
          <Box sx={{ display: { xs: "none", md: "flex" }, ml: "10px" }}>
          <div
                style={{
                   
                    width: '57px',
                    height: '38px',
                    marginTop:'7px',
                    backgroundImage: `url(${MDVLogo})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'contain',
                }}
            />
         <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              ml: 1,
              marginTop:'7px',
              flexGrow: 1,
              fontFamily: "Lato",
              fontWeight: "700",
              fontSize:'25px',
              color: "inherit",
              textDecoration: "none"
            }}
          >
            MyDoorView
          </Typography>
          <Box sx={{display: { xs: "none", md: "flex" }, width: '1px',
      backgroundColor: 'black', 
      height: '60px', 
      mt:'-5px',
      boxShadow: '2px 0px 2px #000'
      }} ></Box>
      </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left"
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left"
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ mt: "2px" ,borderRadius: 0,"& .MuiList-root":{
                padding:0, fontFamily: "Lato",fontSize:'12px', backgroundColor: "#1E1E1E",
              },"& .MuiPaper-root": {
                backgroundColor: "#1E1E1E",
                borderRadius: 0, fontFamily: "Lato",fontSize:'12px'
              }}}
            >
              {SideMenu.map((item, key) => <MenuItemInner key={key} item={item} />)}
            </Menu>
          </Box>
          <Box
                sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
            >
          <div
                style={{
                   
                    width: '50px',
                    height: '50px',
                    marginTop:'15px',
                    backgroundImage: `url(${MDVLogo})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'contain',
                }}
            />
            </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "Lato",
              fontWeight: "700",
              color: "inherit",
              textDecoration: "none"
            }}
          >
            MyDoorView
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex"}  }}>
            
            {pages.map((page) =>
              page === "Home" ? (
                
                <Button
                  variant="outlined"
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ mt: '-5px', color: "white",borderRadius: 0, height: "60px",'&:hover': {
                    backgroundColor: '#3C3C3C',
                    color: '#fff',
                    
                    borderRight: '1px solid black' ,borderLeft: '1px solid black'
                },fontFamily: "Lato",fontSize:'12px',
                borderRight: '1px solid black' ,borderLeft: '1px solid black' }}
                >
                  {page}
                  
                </Button>
                
              ) : (
                <Box sx={{ flexGrow: 0, display: { xs: "none", md: "flex"}  }}>
{

 MyMapInsiderHelp.get(page).map((m) => (
          <NestedDropdown
            itemId={m.id} // NOTE: itemId is required for track items
            variant="contained"
            sx={{ borderRadius: "50px", fontFamily: "Lato",
            fontWeight: 700, }}
            data={m}
            navigate={navigate}
          />
        ))
}
                  
                </Box>
                
              )
            )}
           
          
          </Box>
         
          <Box sx={{ flexGrow: 0 }}>
            
           
               
              
              <Button
                  variant="outlined"
                  key="user"
                  onClick={handleOpenUserMenu}
                  startIcon={<PersonOutlineOutlinedIcon/>}
                  endIcon={<ArrowDownIcon/>}
                  sx={{ mt: "-5px", color: "white", height: "60px",borderRadius: 0,'&:hover': {
                    backgroundColor: '#3C3C3C',
                    color: '#fff',
                    borderLeft: '1px solid black'
                },fontFamily: "Lato",
               borderLeft: '1px solid black' }}
                >
                     Robhite
                  
                </Button>
               
            <Menu
              sx={{ mt: "44px"  ,borderRadius: 0,"& .MuiList-root":{
                padding:0,
                width: '250px'
              },"& .MuiPaper-root": {
                backgroundColor: "#1E1E1E",
                borderRadius: 0,
                
              }}}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right"
              }}
              
              transformOrigin={{
                vertical: "top",
                horizontal: "right"
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu} sx={
                  {
                  
                  color:"#fff",
                  backgroundColor: "#2F323A",
                  border: '.5px solid grey',
                  borderRadius:0
                  ,fontFamily: "Lato"
              }}>
                  {setting}
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};
export default ResponsiveAppBar;
