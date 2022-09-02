import './App.css';
import "./index.css";
import Home from "./home";
import Location from "./location";
import User from "./user";
import Activity from "./Activity";
import SetUp from "./setup";
import Navigation from './components/Navigation';
import Header from "./components/header/header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Property from './property';
import Dealer from './dealer';
import Distributor from './distributor';
import SystemLog from './SystemLog';
import Login from './Login';
import { useState } from 'react';
import { Details } from '@mui/icons-material';
//import { makeStyles } from "@mui/material/styles";

//const useStyles = makeStyles({});

function App() {
 // const classes = useStyles();
  const [userDetails,setUserDtails] = useState({email:"",password:""});
  return (
   
    (userDetails.email == "" ) ?(
    <div >
    <Header />
      <Routes>
        <Route exact path ="/" element={<Home />} />
        <Route exact path="/location" element={<Location />} />
        <Route exact path="/location/:id" element={<Location />} />
        <Route exact path="/user" element={ <User />} />
        <Route exact path="/user/:id" element={ <User />} />
        <Route exact path="/user/:id/:id" element={ <User />} />
        <Route exact path="/activity" element={ <Activity />} />
        <Route exact path="/activity/:id" element={ <Activity />} />
        <Route exact path="/setup" element={ <SetUp  />} />
        <Route exact path="/setup/:id" element={ <SetUp  />} />
        <Route exact path="/setup/:id/:id" element={ <SetUp  />} />
        <Route exact path="/property" element={<Property />} />
        <Route exact path="/property/:id" element={<Property />} />
        <Route exact path="/dealer" element={<Dealer />} />
        <Route exact path="/dealer/:id" element={<Dealer />} />
        <Route exact path="/distributor" element={<Distributor />} />
        <Route exact path="/distributor/:id" element={<Distributor />} />
        <Route exact path="/systemlog" element={<SystemLog />} />
      </Routes>
      
    </div>) :(<Login  />)
  );
}

export default App;
