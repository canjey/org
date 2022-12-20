import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import NotificationsIcon from '@mui/icons-material/Notifications';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import Grid from '@mui/material/Grid';
import {Link} from "react-router-dom";
import SettingsIcon from '@mui/icons-material/Settings';
import BarChartIcon from '@mui/icons-material/BarChart';
import ReceiptIcon from '@mui/icons-material/Receipt';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';

// import Stats from './Stats';
export const drawerWidth = 240;


export default function Sidebar() {
  const logout = () =>
  {
    localStorage.removeItem('token');
    window.location.href = ("/login");

  }
  return (
    <>
      <Box sx={{display: 'flex'}}>
        <AppBar
          position="fixed"
          sx={{
            width: `calc(100% - ${drawerWidth}px)`,
            ml: `${drawerWidth}px`,
            backgroundColor: 'white',
            boxShadow: 'none',
            justifyContent: 'right'
          }}
        >
          <Box sx={{justifyContent: 'right'}}>
            <Stack direction="row" spacing={0} sx={{
              //width: '120px',
              backgroundColor: '#E8F0FD',
              borderBottomLeftRadius: "0px",
              marginRight: '10px',
              borderBottomRightRadius: "20px",
              borderTopLeftRadius: "20px",
              borderTopRightRadius: "0px",
              marginTop: '20px',
              padding: '10px',
              justifyContent: 'center',
              float: 'right'
            }}>
              <CalendarTodayIcon sx={{width: '32px', fontSize:'45px', color: 'black'}}/>
              <NotificationsIcon sx={{width: '32px', fontSize:'45px', color: 'black'}}/>
              <Avatar alt="profile" src="profile.jpg" sx={{width: '32px', marginTop:'8px', height: '32px'}}/>

            </Stack>
          </Box>
        </AppBar>
        <Drawer
          PaperProps={{
            sx: {
              backgroundColor: "#5495D0",
              color: "white",
            }
          }}
          sx={{
            backgroundColor: '#5495D0',
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              boxSizing: 'border-box',
            },
          }}
          variant="permanent"
          anchor="left"
        >
          <Toolbar/>
          <Divider sx={{marginTop: '10px'}}/>

          <Grid sx={{marginTop: '30px', padding: '40px'}}>
            <Typography sx={{display: 'flex'}}>
              <BarChartIcon/> <Typography sx={{marginLeft: '10px'}}><Link to='/' style={{
              textDecoration: 'none',
              color: 'white'
            }}>Dashboard </Link>
            </Typography>
            </Typography>
            <Typography sx={{marginTop: '20px', display: 'flex'}}>
              <PermContactCalendarIcon/>
              <Typography sx={{marginLeft: '10px'}}><Link to='/organizations' style={{
                textDecoration: 'none',
                color: 'white'
              }}>Organisation </Link>
              </Typography>
            </Typography>
            <Typography sx={{marginTop: '20px', display: 'flex'}}>
              <ReceiptIcon/>
              <Typography sx={{marginLeft: '10px'}}><Link to='/services' style={{
                textDecoration: 'none',
                color: 'white'
              }}>Services </Link>
              </Typography>

            </Typography>
          </Grid>
          <Divider/>
          <Typography sx={{marginTop: '300px', display: 'flex', padding: '40px',}}>
            <SettingsIcon/>
            <Typography sx={{marginLeft: '10px'}}><Link to='/services' style={{
              textDecoration: 'none',
              color: 'white'
            }}>Settings </Link>
            </Typography>

          </Typography>
          <Typography sx={{marginTop: '310px', display: 'flex', padding: '40px',}}>
           
          <button sx={{backgroundColor:'green'}}onClickCapture={logout}>logout user</button>

          </Typography>
        </Drawer>
      </Box>
    </>
  );
}
