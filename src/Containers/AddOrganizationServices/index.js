import * as React from "react";
import Sidebar from '../../Components/Sidebar'
import ServiceLists from '../../Components/AboutOrganization/ServicesList.js'
import Layout from "../../Components/Layout";

import { createTheme, ThemeProvider } from '@mui/material/styles';


const theme = createTheme({
    typography: {
      fontFamily: 'inter',
      fontSize:'28px'
    },
  })

export default function ServiceList(){
    return(
        <>
        <Layout>
        <ThemeProvider theme={theme}>
        <ServiceLists/>
        </ThemeProvider>
        </Layout>
        </>
    )

}