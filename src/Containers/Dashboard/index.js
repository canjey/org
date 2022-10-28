import * as React from 'react';
import Sidebar, {drawerWidth} from '../../Components/Sidebar';
import Stats from '../../Components/Stats';
import Box from "@mui/material/Box";

export default function Dashboard() {
  return (
    <>
      <Sidebar/>
      <Box sx={{
        marginLeft: drawerWidth + 'px',
        marginRight:0
      }}>
        <Stats/>
      </Box>
    </>
  )

}
