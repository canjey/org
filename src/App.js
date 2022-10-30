import * as React from 'react';
import Dashboard from './Containers/Dashboard';
import Organisation from './Containers/Organisation';
import Services from './Containers/Services';
import AddOrganization from './Containers/AddOrganization';
import {Route, Routes} from "react-router-dom";
import {createTheme} from "@mui/material/styles";
import {ThemeProvider} from "@emotion/react";

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
        </Routes>
      </ThemeProvider>
    </>
  );
}
