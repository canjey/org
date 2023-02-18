import * as React from 'react';
import Dashboard from './Containers/Dashboard';
import Organisation from './Containers/Organisation';
import Services from './Containers/Services';
import AddOrganization from './Containers/AddOrganization';
import AboutOrganization from './Containers/AboutOrganization'
import Login from './Containers/Login'
import PasswordChange from './Containers/Authentication/PasswordChange'
import ResetPassword from './Containers/Authentication/ResetPassword'
import Profile from './Containers/Authentication/ProfilePage'
import UpdateProfile from './Containers/Authentication/UpdateProfilePage'

import {Route, Routes, useLocation} from "react-router-dom";
import {createTheme} from "@mui/material/styles";
import {ThemeProvider} from "@emotion/react";
import AddUsers from './Containers/AddUsers';
import OrganizationUsers from './Containers/OrganizationUsers';
import Subscribed from './Containers/SubscribedServices';
import { useState } from 'react';
import UpdateOrganization from './Containers/UpdateOrganization';

import AddServices from './Containers/AddServices'
import AboutServicesDetails from './Containers/AboutServices'
import NotFound from './Components/Utilities/404.js'

const theme = createTheme({
  typography: {
    fontFamily: 'roboto',
    fontSize: 12
  },
  Link:{
    textDecoration:'none'
  },
  div12:{
    marginTop:'20px'
  }
})


export default function App() {

  const token = localStorage.getItem('token');
  const location = useLocation();
  console.log(location.pathname);

  if(!token && location.pathname != '/forgotPassword') {
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

          {/* Organization Pages */}
          <Route path="/organizations/addorganization" element={<AddOrganization/>}/>
          <Route path="/organizations/aboutpage" element={<AboutOrganization/>}/>
          <Route path="/organizations/:id/" element={<AboutOrganization/>}/>
          <Route path="/organizations/:id/aboutpage/updateform" element={<UpdateOrganization/>}/>
          <Route path="/organizations/:id/adduser" element={<AddUsers/>}/>
          <Route path="/organizations/:id/users" element={<OrganizationUsers/>}/>
          <Route path="/organizations/:id/services" element={<Subscribed/>}/>

          <Route path="/services/addservices/" element={<AddServices/>}/>
          <Route path="/services/aboutservices/:id" element={<AboutServicesDetails/>}/>

          {/* Authentication */}
          <Route path="/login" element={<Login/>} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/updateProfile" element={<UpdateProfile/>} />
          <Route path="/changePassword" element={<PasswordChange/>} />
          
          {/* Not found */}
          <Route path="*" element={<NotFound/>} />
          <Route path="/forgotPassword" element={<ResetPassword/>} />
        </Routes>
      </ThemeProvider>
    </>
  );
}
