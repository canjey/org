import * as React from 'react';
import Dashboard from './Containers/Dashboard';
import Organisation from './Containers/Organisation';
import Services from './Containers/Services';
import AddOrganization from './Containers/AddOrganization';
import { Routes, Route, Link } from "react-router-dom";
import AboutOrganization from './Containers/AboutOrganization'



export default function App() {
  return (
    <>
    <Routes>
    <Route path="/" element={<Dashboard />} />
    <Route path="/organizations" element={<Organisation/>} />
    <Route path="/services" element={<Services/>} />
    <Route path="/organizations/addorganization" element={<AddOrganization/>} />
    <Route path="/organizations/aboutpage" element={<AboutOrganization/>} />

    </Routes>    
    
    </>
  );
}
