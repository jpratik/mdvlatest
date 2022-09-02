import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import StickyNote2OutlinedIcon from '@mui/icons-material/StickyNote2Outlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';

  

export const ActivityData = {
  id: "1",
  title: "Activity",
  label: "Activity",
  items: [
    {
      label: "Entry Logs",
      
      callback: (navigate) =>  navigate('/activity/entrylogs')
    },
    {
      label: "Call Logs",
      
      callback: (navigate) => navigate('/activity/calllogs')
    },
    {
      label: "LP Tag Logs",
      
      callback: (navigate) => navigate('/activity/lptaglogs')
    },
    {
      label: "Guest PIN",
      
      callback: (navigate) => navigate('/activity/guestpin')
    },
    {
      label: "Guest Parking",
      
      callback: (navigate) => navigate('/activity/guestparking')
    },
  ]
};

export const LocationData ={
  id: "1",
  title: "Location",
  label: "Location",
  items: [

    {
      label: "Add Location",
      
      callback: (navigate) => navigate('/location/addlocation')
    },
    {
      label: "Manage Location",
      
      callback: (navigate) => navigate('/location/managelocation')
    },
 
 ]
};
export const UserData ={
  id: "1",
  title: "User",
  label: "User",
  items: [

    {
      label: "Add Users",
      
      callback: (navigate) => navigate('/user/adduser')
    },
    {
      label: "Manage Users",
      
      callback: (navigate) => navigate('/user/manageuser')
    },
  {
    label: "Groups",
    
    items: [
      {
        label: "Calling Group",
        
        callback: (navigate) => navigate('/user/groups/callinggroup')
      },
      {
        label: "Office Group",
        
        callback: (navigate) => navigate('/user/groups/officegroup')
      }
    ]
  },
 ]
};
export const SetUpData ={
  id: "1",
  title: "Set Up",
  label: "Set Up",
  items: [

    {
      label: "API",
      
      callback: (navigate) => navigate('/setup/API')
    },
    {
      label: "RFID Card Format",
      
      callback: (navigate) => navigate('/setup/rfidcardformat')
    },
  {
    label: "Blacklist",
    
    items: [
      {
        label: "LP Blacklist",
        
        callback:  (navigate) =>navigate('/setup/blacklist/lpblacklist')
      },
      {
        label: "PIN Blacklist",
        
        callback: (navigate) =>navigate('/setup/blacklist/pinblacklist')
      }
    ]
  },
  {
    label: "Account",
    
    items: [
      {
        label: "Profile",
        
        callback: (navigate) =>navigate('/setup/account/profile')
      },
      {
        label: "Property Contacts",
        
        callback: (navigate) =>navigate('/setup/account/property')
      },
      {
        label: "Passwords",
        
        callback: (navigate) =>navigate('/setup/account/password')
      }
    ]
  },
 ]
};

export const SideMenu = [{
  title: "Home",
  label: "Home",
  icon: <HomeOutlinedIcon />,
  items: [],
  callback: (navigate) =>  navigate('/')
},
{
  title: "Activity",
  label: "Activity",
  icon: <StickyNote2OutlinedIcon />,
  items: [
    {
      label: "Entry Logs",
      
      callback: (navigate) =>  navigate('/activity/entrylogs')
    },
    {
      label: "Call Logs",
      
      callback: (navigate) => navigate('/activity/calllogs')
    },
    {
      label: "LP Tag Logs",
      
      callback: (navigate) => navigate('/activity/lptaglogs')
    },
    {
      label: "Guest PIN",
      
      callback: (navigate) => navigate('/activity/guestpin')
    },
    {
      label: "Guest Parking",
      
      callback: (navigate) => navigate('/activity/guestparking')
    },
  ]
},
{
  title: "Location",
  label: "Location",
  icon: <LocationOnOutlinedIcon/>,
  items: [

    {
      label: "Add Location",
      
      callback: (navigate) => navigate('/location/addlocation')
    },
    {
      label: "Manage Location",
      
      callback: (navigate) => navigate('/location/managelocation')
    },
 
 ]
},

{
  title: "User",
  label: "User",
  icon: <PersonOutlinedIcon />,
  items: [

    {
      label: "Add Users",
      
      callback: (navigate) => navigate('/user/adduser')
    },
    {
      label: "Manage Users",
      
      callback: (navigate) => navigate('/user/manageuser')
    },
  {
    label: "Groups",
    
    items: [
      {
        label: "Calling Group",
        
        callback: (navigate) =>navigate('/user/groups/callinggroup')
      },
      {
        label: "Office Group",
        
        callback: (navigate) =>navigate('/user/groups/officegroup')
      }
    ]
  },
 ]
},
{
  title: "Set Up",
  label: "Set Up",
  icon: <AdminPanelSettingsOutlinedIcon />,
  items: [

    {
      label: "API",
      
      callback: (navigate) => navigate('/setup/API')
    },
    {
      label: "RFID Card Format",
      
      callback:  (navigate) => navigate('/setup/rfidcardformat')
    },
  {
    label: "Blacklist",
    
    items: [
      {
        label: "LP Blacklist",
        
        callback: (navigate) =>navigate('/setup/blacklist/lpblacklist')
      },
      {
        label: "PIN Blacklist",
        
        callback: (navigate) =>navigate('/setup/blacklist/pinblacklist')
      }
    ]
  },
  {
    label: "Account",
    
    items: [
      {
        label: "Profile",
        
        callback: (navigate) =>navigate('/setup/account/profile')
      },
      {
        label: "Property Contacts",
        
        callback: (navigate) =>navigate('/setup/account/property')
      },
      {
        label: "Passwords",
        
        callback: (navigate) =>navigate('/setup/account/password')
      }
    ]
  },
 ]
}
];
export default [
    {
      path: 'home',
      label: 'HOME',
    },
    {
      path: 'activity',
      label: 'Activity',
    },
    {
      path: 'location',
      label: 'Location',
    },
    {
      path: 'user',
      label: 'User',
    },
    {
      path: 'setup',
      label: 'SetUp',
    },
  ];