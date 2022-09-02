import React from "react";

// CUSTOM COMPONENTS
import { nestedMenuItemsFromObject } from "./nestedMenuItemsFromObject";
 import {mainThemeStyle} from '../MainTheme';
// MUI
import { Button, Menu,MenuItem, Stack } from "@mui/material";

// MUI ICONS
import ArrowDownIcon from "@mui/icons-material/ArrowDropDown";

export default function NestedButtonDropDownHeader(
    props,
    ref
) {
    
  const [anchorEl, setAnchorEl] = React.useState(null);
 
  const open = Boolean(anchorEl);

  const { itemId, data,sx, onClick,setValue, ...ButtonProps } = props;

  const [buttenText, setButtonText] = React.useState(setValue != null ? setValue : data.label);
  
  const handleClose = () => setAnchorEl(null);
  
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    
    if (onClick) {
      onClick();
    }
  };

  const setButtonTextFn =(value) =>{
    //console.log("item value"+data.items[value].label);
    //setButtonText(data.items[value].label);
    setButtonText(value);
  }
  const DropDown =() =>{ return(<><div>
  <Button
  variant="outlined"
    onClick={handleClick}
    endIcon={<ArrowDownIcon />}
    sx={sx}
   
  >
    { buttenText}
  </Button>
  <Menu anchorEl={anchorEl} open={open} onClose={handleClose} sx={{ mt: "33px" ,borderRadius: 0,"& .MuiList-root":{
                  padding:0
                },"& .MuiPaper-root": {
                  backgroundColor: "#1E1E1E",
                  borderRadius: 0
                }}} anchorOrigin={{
                    vertical: "top",
                    horizontal: "center"
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "center"
                  }}>
   {data.items.map(menuItem => {
              const {  label, callback } = menuItem;
              return (
                <MenuItem onClick={() => {
                  setAnchorEl(null);
                  setButtonText(label);
                  callback();
                }}  sx={
                  {
                  
                  color:"#fff",
                  backgroundColor: "#2F323A",
                  borderBottom: '.5px solid grey',
                  fontFamily: "Lato",fontSize:'12px',
              }}>
                  {label}
                </MenuItem>
              );
            })}
  </Menu>
</div></>) }
  return {
    DropDown,
    setButtonTextFn
}
  };
