import * as React from 'react';
import Dashboard from './Containers/Dashboard';
import Organisation from './Containers/Organisation';
import Services from './Containers/Services';
import AddOrganization from './Containers/AddOrganization';
import AboutOrganization from './Containers/AboutOrganization'
import {Route, Routes} from "react-router-dom";
import {createTheme} from "@mui/material/styles";
import {ThemeProvider} from "@emotion/react";
import AddUsers from './Containers/AddUsers';

const theme = createTheme({
  typography: {
    fontFamily: 'inter',
    fontSize: '38px'
  },
})

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<Dashboard/>}/>
          <Route path="/organizations" element={<Organisation/>}/>
          <Route path="/services" element={<Services/>}/>
          <Route path="/organizations/addorganization" element={<AddOrganization/>}/>
          <Route path="/organizations/aboutpage" element={<AboutOrganization/>}/>
          <Route path="/organizations/aboutpage/adduser" element={<AddUsers/>}/>
        </Routes>
      </ThemeProvider>
    </>
  );
}
