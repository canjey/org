import * as React from "react";
import Sidebar from '../../Components/Sidebar'
import UpdateForm from '../../Components/UpdateOrganization/UpdateForm.js'

import { createTheme, ThemeProvider } from '@mui/material/styles';


const theme = createTheme({
    typography: {
      fontFamily: 'inter',
      fontSize:'38px'
    },
  })

export default function UpdateOrganization(){
    return(
        <>
        <ThemeProvider theme={theme}>
        <Sidebar/>
        <UpdateForm/>
        </ThemeProvider>
        </>
    )

}