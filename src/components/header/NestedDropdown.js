import React from "react";

// CUSTOM COMPONENTS
import { nestedMenuItemsFromObject } from "./nestedMenuItemsFromObject";

// MUI
import { Button, Menu } from "@mui/material";

// MUI ICONS
import ArrowDownIcon from "@mui/icons-material/ArrowDropDown";

export const NestedDropdown = React.forwardRef(function NestedDropdown(
  props,
  ref
) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const { itemId, data,navigate, onClick, ...ButtonProps } = props;

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);

    if (onClick) {
      onClick();
    }
  };
  const handleClose = () => setAnchorEl(null);

  const menuItems = nestedMenuItemsFromObject({
    items: data.items,
    navigte:navigate,
    isOpen: open,
    handleClose
  });

  return (
    <div>
      <Button
      variant="outlined"
        onClick={handleClick}
        endIcon={<ArrowDownIcon />}
        sx={{ mt: '-5px', color: "white", height: "60px",'&:hover': {
          backgroundColor: '#3C3C3C',borderRadius: 0,
          color: '#fff',borderRight: '1px solid black' ,borderLeft: '1px solid black'
      },borderRight: '1px solid black' ,borderLeft: '1px solid black',fontFamily: "Lato",fontSize:'12px'}}
       
      >
        {data.label}
      </Button>
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose} sx={{ mt: "44px" ,borderRadius: 0,"& .MuiList-root":{
                      padding:0
                    },"& .MuiPaper-root": {
                      backgroundColor: "#1E1E1E",
                      borderRadius: 0
                    }}} anchorOrigin={{
                        vertical: "top",
                        horizontal: "left"
                      }}
                      keepMounted
                      transformOrigin={{
                        vertical: "top",
                        horizontal: "left"
                      }}>
        {menuItems}
      </Menu>
    </div>
  );
});
