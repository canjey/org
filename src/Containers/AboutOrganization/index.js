import * as React from "react";
import Sidebar from '../../Components/Sidebar'
import AboutPage from '../../Components/AboutOrganization/About.js'

import { createTheme, ThemeProvider } from '@mui/material/styles';


const theme = createTheme({
    typography: {
      fontFamily: 'inter',
      fontSize:'38px'
    },
  })

export default function AboutOrganization(){
    return(
        <>
        <ThemeProvider theme={theme}>
        {/* <Sidebar/> */}
        <AboutPage/>
        
        </ThemeProvider>
        </>
    )

}