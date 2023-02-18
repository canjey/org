import * as React from "react";
import Sidebar from '../../Components/Sidebar'
import AddServicesForm from '../../Components/Services/AddServices.js'
import Layout from "../../Components/Layout";

import { createTheme, ThemeProvider } from '@mui/material/styles';


const theme = createTheme({
    typography: {
      fontFamily: 'inter',
      fontSize:'38px'
    },
  })

export default function AddServices(){
    return(
        <>
        <Layout>
        <ThemeProvider theme={theme}>
        <AddServicesForm/>
        </ThemeProvider>
        </Layout>
        </>
    )

}