import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Login from './Login';
import i18n from './i18n';
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";

import CssBaseline from "@mui/material/CssBaseline";
const rootElement = document.getElementById("root");
const config = window.__PRELOADED__CONFIG__ || '';
const root = ReactDOM.createRoot(document.getElementById('root'));

window.i18n = i18n;

// root.render(
//   <React.StrictMode>
//     {/* <Login  config={config}/> */}
//     <Router>
//       <CssBaseline />
//       <App />
//     </Router>
//   </React.StrictMode>
//   rootElement
// );
root.render(
  <React.StrictMode>
    <Router>
      <CssBaseline />
      <App />
    </Router>
  </React.StrictMode>,
  rootElement
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

