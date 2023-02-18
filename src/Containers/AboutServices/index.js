import * as React from "react";
import Sidebar from '../../Components/Sidebar'
import AboutServices from '../../Components/Services/AboutServices.js'
import Layout from "../../Components/Layout";

import { createTheme, ThemeProvider } from '@mui/material/styles';


const theme = createTheme({
    typography: {
      fontFamily: 'inter',
      fontSize:'38px'
    },
  })

export default function AboutServicesDetails(){
    return(
        <>
        <Layout>
        <ThemeProvider theme={theme}>
        <AboutServices/>
        </ThemeProvider>
        </Layout>
        </>
    )

}