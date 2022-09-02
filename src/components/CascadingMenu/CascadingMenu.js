import React from "react";
import PropTypes from "prop-types";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import Paper from "@mui/material/Paper";
import ArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

import Theme from "./CascadingMenu.styles";
const styles ={rootMenu: {
    overflow: "visible"
  },
  menuItem: {
    cursor: "pointer",
    display: "flex",
    justifyContent: "space-between",
    overflow: "visible",
    position: "relative",
    "& a": {
      color: "black",
    }
  },
  caption: {
    alignItems: "center",
    display: "flex"
  },
  arrowIcon: {
    paddingLeft: 24
  },
  subMenu: {
    opacity: "0",
    position: "absolute",
    right: "100%",
    transform: "scale(0.75, 0.5625)",
    transformOrigin: "top right",
    transition: `opacity 100ms ease-in-out 0ms, transform 100ms ease-in-out 0ms`, // match Menu transition
    top: "-8px",
    visibility: "hidden"
  },
  subMenuOpen: {
    transform: "scale(1, 1) translateZ(0px)",
    visibility: "visible",
    opacity: "1"
  }};
class CascadingMenu extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      subMenuStates: []
    };
  }
   
  handleItemClick = (event, menuItem) => {
    const hasSubMenu = !!(
      menuItem.subMenuItems && menuItem.subMenuItems.length
    );

    if (hasSubMenu) {
      // hide already open sub menus and open the requested sub menu
      const subMenuStates = [...this.state.subMenuStates];
      console.log("It has submenu");
      for (const subMenuState of subMenuStates) {
        if (subMenuState.key === menuItem.key) {
          subMenuState.anchorElement = event.target;
          subMenuState.open = !subMenuState.open;
        } else {
          subMenuState.open = false;
        }
      }
      console.log("It has submenu"+subMenuStates);
      this.setState({ subMenuStates });
    } else {
      this.closeAllMenus();
    }

    menuItem.onClick();
  };

  closeAllMenus() {
    this.setState({ subMenuStates: [] });
    this.props.onClose();
  }

  renderMenuItem = menuItem => {
   
    const { classes } = this.props;
    const { subMenuStates } = this.state;
    const hasSubMenu = !!(
      menuItem.subMenuItems && menuItem.subMenuItems.length
    );
    let subMenuState = subMenuStates.find(
      menuState => menuState.key === menuItem.key
    );

    // initialize state for sub menu
    if (hasSubMenu && !subMenuState) {
      subMenuState = {
        key: menuItem.key,
        anchorElement: null,
        open: false
      };

      subMenuStates.push(subMenuState);
    }

    return (
        
       <MenuItem
        onClick={e => this.handleItemClick(e, menuItem)}
        sx={{
          cursor: "pointer",
          display: "flex",
          justifyContent: "space-between",
          overflow: "visible",
          position: "relative",
          color:"#fff",
                          backgroundColor: "#2F323A",
                          border: '.5px solid grey'
        }}
        key={menuItem.key}
      >
        <div sx={{
    alignItems: "center",
    display: "flex"
  }}>{menuItem.caption}</div>
        {hasSubMenu && (
          <React.Fragment>
            <ArrowRightIcon  sx={{paddingLeft: 1}}/>
            <Paper
              sx={{opacity: "0",
              position: "absolute",
              transform: "scale(0.75, 0.5625)",
              transformOrigin: "top right",
              transition: `opacity 500ms ease-in-out 0ms, transform 500ms ease-in-out 0ms`, // match Menu transition
              top: "0px",
              right:"100%",
              visibility: "hidden",
              ...(subMenuState.open?{
                transform: "scale(1, 1) translateZ(0px)",
                visibility: "visible",
                opacity: "1"
              }:""),

            }}
            
            >
              <MenuList>
                {menuItem.subMenuItems.map(subMenuItem =>
                  this.renderMenuItem(subMenuItem)
                )}
              </MenuList>
            </Paper>
          </React.Fragment>
        )}
      </MenuItem>
     
    );
  };

  render() {
    // no-unused-vars is disabled so that menuItems isn't passed to Menu
    // eslint-disable-next-line no-unused-vars
   
    const {
        anchorElement,
        open,
        onClose,
        menuItems,
        classes,
        ...others
      } = this.props;
    
    return (
       
      <Menu
        {...others}
        anchorEl={anchorElement}
        elevation={2}
       sx={{overflow: "visible", mt: "45px" ,"& .MuiList-root":{
        padding:0
      },"& .MuiPaper-root": {
        backgroundColor: "#1E1E1E",
       
      }}}
        open={open}
        onClose={() => this.closeAllMenus()}
      >
        {menuItems.map(menuItem => this.renderMenuItem(menuItem))}
      </Menu>
      
    );
  }
}

CascadingMenu.propTypes = {
    anchorElement: PropTypes.any,
    classes: PropTypes.any,
    menuItems: PropTypes.array.isRequired,
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired
  };

export default CascadingMenu;