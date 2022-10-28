import * as React from 'react';
import Dashboard from './Containers/Dashboard';
import Organisation from './Containers/Organisation';
import Services from './Containers/Services';
import AddOrganization from './Containers/AddOrganization';
import {Route, Routes} from "react-router-dom";
import {CssBaseline} from "@mui/material";

export default function App() {
  return (
    <>
    <Routes>
    <Route path="/" element={<Dashboard />} />
    <Route path="/organizations" element={<Organisation/>} />
    <Route path="/services" element={<Services/>} />
    <Route path="/organizations/addorganization" element={<AddOrganization/>} />

    </Routes>    
    
    </>
  );
}
