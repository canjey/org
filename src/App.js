import * as React from 'react';
import Dashboard from './Containers/Dashboard';
import Organisation from './Containers/Organisation';
import Services from './Containers/Services';
import AddOrganization from './Containers/AddOrganization';
import AboutOrganization from './Containers/AboutOrganization'
import Login from './Containers/Login'
import {Route, Routes} from "react-router-dom";
import {createTheme} from "@mui/material/styles";
import {ThemeProvider} from "@emotion/react";
import AddUsers from './Containers/AddUsers';
import OrganizationUsers from './Containers/OrganizationUsers';
import Subscribed from './Containers/SubscribedServices';
import { useState } from 'react';
import UpdateOrganization from './Containers/UpdateOrganization';



const theme = createTheme({
  typography: {
    fontFamily: 'roboto',
    fontSize: 12
  },
  Link:{
    textDecoration:'none'
  }
})



export default function App() {

  const token = localStorage.getItem('token');

  if(!token) {
    return (
    <ThemeProvider theme={theme}>
     <Login />
    </ThemeProvider>
    )
  }


  const logout = () =>
  {
    localStorage.removeItem('token');
    window.location.href = ("/login");

  }
  return (
    <>
    
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<Dashboard/>}/>
          <Route path="/organizations" element={<Organisation/>}/>
          <Route path="/services" element={<Services/>}/>
          <Route path="/organizations/addorganization" element={<AddOrganization/>}/>
          <Route path="/organizations/aboutpage" element={<AboutOrganization/>}/>
          <Route path="/organizations/:id/aboutpage" element={<AboutOrganization/>}/>
          <Route path="/organizations/:id/aboutpage/updateform" element={<UpdateOrganization/>}/>
          <Route path="/organizations/:id/aboutpage/adduser" element={<AddUsers/>}/>
          <Route path="/organizations/:id/aboutpage/users" element={<OrganizationUsers/>}/>
          <Route path="/organizations/aboutpage/subscribed" element={<Subscribed/>}/>
          <Route path="/login" element={<Login/>} />
        </Routes>
      </ThemeProvider>
    </>
  );
}
