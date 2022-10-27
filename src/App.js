import * as React from 'react';
import Dashboard from './Containers/Dashboard';
import Organisation from './Containers/Organisation';
import Services from './Containers/Services';
import AddOrganization from './Containers/AddOrganization';
import { Routes, Route, Link } from "react-router-dom";
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
