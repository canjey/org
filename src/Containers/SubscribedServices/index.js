import * as React from "react";
import Sidebar from '../../Components/Sidebar'
import AboutPage from '../../Components/AboutOrganization/About.js';
import UserTable from '../../Components/AboutOrganization/Users.js'
import Layout from "../../Components/Layout";

import { createTheme, ThemeProvider } from '@mui/material/styles';


export default function Subscribed(){
    return(
        <>
        <Layout>
        <Sidebar/>
        <AboutPage/>
        <UserTable />        
        </Layout>
        </>
    )

}