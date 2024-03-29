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

import { Route, Routes, useLocation } from "react-router-dom";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@emotion/react";
import AddUsers from './Containers/AddUsers';
import OrganizationUsers from './Containers/OrganizationUsers';
import Subscribed from './Containers/SubscribedServices';
import UpdateOrganization from './Containers/UpdateOrganization';
import ServiceList from './Containers/AddOrganizationServices';
import AddServices from './Containers/AddServices'
import AboutServicesDetails from './Containers/AboutServices'
import NotFound from './Components/Utilities/404.js'

import { store } from './store'
import { Provider } from 'react-redux'

const theme = createTheme({
  typography: {
    fontFamily: 'roboto',
    fontSize: 12
  },
  Link: {
    textDecoration: 'none'
  },
  div12: {
    marginTop: '20px'
  }
})


export default function App() {

  const token = localStorage.getItem('token');
  const location = useLocation();
  console.log(location.pathname);

  if (!token && location.pathname != '/forgotPassword') {
    return (
      <ThemeProvider theme={theme}>
        <Login />
      </ThemeProvider>
    )
  }


  const logout = () => {
    localStorage.removeItem('token');
    window.location.href = ("/login");

  }
  return (
    <>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/organizations" element={<Organisation />} />

            {/* Organization Pages */}
            <Route path="/organizations/addorganization" element={<AddOrganization />} />
            <Route path="/organizations/aboutpage" element={<AboutOrganization />} />
            <Route path="/organizations/:id/" element={<AboutOrganization />} />
            <Route path="/organizations/:id/aboutpage/updateform" element={<UpdateOrganization />} />
            <Route path="/organizations/:id/adduser" element={<AddUsers />} />
            <Route path="/organizations/:id/users" element={<OrganizationUsers />} />
            <Route path="/organizations/:id/services" element={<Subscribed />} />
            <Route path="/organizations/addservices" element={<ServiceList />} />


            {/* Authentication */}
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/updateProfile" element={<UpdateProfile />} />
            <Route path="/changePassword" element={<PasswordChange />} />

            {/* Services Pages */}
            <Route path="/services" element={<Services />} />
            <Route path="/services/addservices/" element={<AddServices />} />
            <Route path="/services/services/:id" element={<AboutServicesDetails />} />



            {/* Not found */}
            <Route path="*" element={<NotFound />} />
            <Route path="/forgotPassword" element={<ResetPassword />} />
          </Routes>
        </Provider>
      </ThemeProvider>
    </>
  );
}
