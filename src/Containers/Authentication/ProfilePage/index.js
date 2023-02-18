import * as React from "react";
import Sidebar from '../../../Components/Sidebar'
import ProfilePage from '../../../Components/OrganizationPages/Profile/ProfilePage.js';
import Layout from "../../../Components/Layout";
import { createTheme, ThemeProvider } from '@mui/material/styles';


export default function Profile(){
    return(
        <>
     <Layout>  
        <ProfilePage/>
     </Layout>
        </>
    )

}