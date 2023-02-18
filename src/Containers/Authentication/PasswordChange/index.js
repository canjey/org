import * as React from "react";
import Sidebar from '../../../Components/Sidebar'
import ChangePassword from '../../../Components/OrganizationPages/ChangePassword/ChangePassword.js';
import Layout from "../../../Components/Layout";
import { createTheme, ThemeProvider } from '@mui/material/styles';


export default function PasswordChange(){
    return(
        <>
     <Layout>  
        <ChangePassword/>
     </Layout>
        </>
    )

}