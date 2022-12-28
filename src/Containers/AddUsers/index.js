import * as React from "react";
import Sidebar from '../../Components/Sidebar'
import UserForm from '../../Components/AddUsers/UserForm';
import Layout from "../../Components/Layout";
import { createTheme, ThemeProvider } from '@mui/material/styles';


export default function AddUsers(){
    return(
        <>
     <Layout>  
        <UserForm/>
     </Layout>
        </>
    )

}