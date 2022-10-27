import * as React from "react";
import Sidebar from '../../Components/Sidebar'
import OrganizationForm from '../../Components/AddOrganization/OrganizationForm'

import { createTheme, ThemeProvider } from '@mui/material/styles';


const theme = createTheme({
    typography: {
      fontFamily: 'inter',
      fontSize:'38px'
    },
  })

export default function AddOrganization(){
    return(
        <>
        <ThemeProvider theme={theme}>
        <Sidebar/>
        <OrganizationForm/>
        </ThemeProvider>
        </>
    )

}