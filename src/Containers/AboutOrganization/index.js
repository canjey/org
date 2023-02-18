import * as React from "react";
import Sidebar from '../../Components/Sidebar'
import AboutPage from '../../Components/AboutOrganization/About.js';
import ServiceTable from '../../Components/AboutOrganization/Services.js'
import Layout from "../../Components/Layout";

import { createTheme, ThemeProvider } from '@mui/material/styles';


export default function AboutOrganization(){
    return(
        <>
        <Layout>
        <AboutPage/>       
        </Layout>
        </>
    )

}