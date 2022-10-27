import * as React from 'react';
import Sidebar from '../../Components/Sidebar'
import Stats from '../../Components/Organisation/Stats.js'
import OrgTable from '../../Components/Organisation/OrgTable.js'
import { createTheme, ThemeProvider } from '@mui/material/styles';


const theme = createTheme({
    typography: {
      fontFamily: 'inter',
      fontSize:'38px'
    },
  })
export default function Organisation() {
    return(
        <>
        <ThemeProvider theme={theme}>
        <Sidebar />
        <Stats />
        <OrgTable />
        </ThemeProvider>
        </>

    )
}


