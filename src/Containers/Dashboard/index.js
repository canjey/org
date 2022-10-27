import * as React from 'react';
import Sidebar from '../../Components/Sidebar';
import Stats from '../../Components/Stats';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';


const theme = createTheme({
    typography: {
      fontFamily: 'inter',
      fontSize:'38px'
    },
  })

export default function Dashboard(){
    return(
        <>
        <ThemeProvider theme={theme}>
        <Grid>
        <Sidebar />
        <Stats />

        </Grid>
        </ThemeProvider>
         </>

    )
   

}