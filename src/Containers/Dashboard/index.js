import * as React from 'react';
import Sidebar from '../../Components/Sidebar';
import Stats from '../../Components/Stats';
import Grid from '@mui/material/Grid';

export default function Dashboard(){
    return(
        <>
        <Grid>
        <Sidebar />
        <Stats />

        </Grid>
        
         </>

    )
   

}