import * as React from "react";
import Sidebar from '../../../Components/Sidebar'
import UpdateProfilePage from '../../../Components/OrganizationPages/Profile/UpdateProfilePage.js';
import Layout from "../../../Components/Layout";
import { createTheme, ThemeProvider } from '@mui/material/styles';


export default function Profile(){
    return(
        <>
     <Layout>  
        <UpdateProfilePage/>
     </Layout>
        </>
    )

}