import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import NotificationsIcon from '@mui/icons-material/Notifications';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import OrgTable from './Table';
import {Link} from "react-router-dom";
import SettingsIcon from '@mui/icons-material/Settings';
import BarChartIcon from '@mui/icons-material/BarChart';
import ReceiptIcon from '@mui/icons-material/Receipt';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// import Stats from './Stats';

const drawerWidth = 240;

const theme = createTheme({
    typography: {
      fontFamily: 'inter',
      fontSize:'30px'
    },
  })

export default function Sidebar() {
    return (
        <>
        <ThemeProvider theme={theme}>
        

        <Box sx={{ display: 'flex' }}>

            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px`, backgroundColor: 'white', boxShadow: 'none', justifyContent: 'right' }}
            >
                <div sx={{ justifyContent: 'right' }}>
                    <Stack direction="row" spacing={0} sx={{
                        width: '120px', backgroundColor: '#E8F0FD', borderBottomLeftRadius: "0px", marginRight: '10px',
                        borderBottomRightRadius: "20px", borderTopLeftRadius: "20px", borderTopRightRadius: "0px", marginTop: '20px', padding: '10px', justifyContent: 'center', float: 'right'
                    }}>
                        <CalendarTodayIcon sx={{ width: '32px', color: 'black' }} />
                        <NotificationsIcon sx={{ width: '32px', color: 'black' }} />
                        <Avatar alt="profile" src="profile.jpg" sx={{ width: '32px', height: '32px' }} />

                    </Stack>
                </div>
            </AppBar>
            <Drawer
            PaperProps={{
                sx: {
                  backgroundColor: "#5495D0",
                  color: "white",
                }}}
                sx={{
                    backgroundColor:'#5495D0',
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
                <Toolbar />
                <Divider  sx={{marginTop:'10px'}} />

                <Grid sx={{marginTop:'30px', padding:'40px'}}>
                <Typography sx={{display:'flex'}}>
                    <BarChartIcon /> <Typography sx={{ marginLeft:'10px'}}><Link to ='/' style={{textDecoration:'none', color:'white'}}>Dashboard </Link>
                        </Typography>
                </Typography>
                <Typography  sx={{marginTop:'20px', display:'flex'}}>
                    <PermContactCalendarIcon />
                    <Typography sx={{ marginLeft:'10px'}}><Link to ='/organizations' style={{textDecoration:'none', color:'white'}}>Organisation </Link>
                    </Typography> 
                </Typography>
                <Typography  sx={{marginTop:'20px', display:'flex'}}>
                    <ReceiptIcon />
                    <Typography sx={{ marginLeft:'10px'}}><Link to ='/services' style={{textDecoration:'none', color:'white'}}>Services </Link>
                        </Typography>
                     
                </Typography>
                </Grid>
                <Divider />
                <Typography  sx={{marginTop:'300px', display:'flex',  padding:'40px',}}>
                    <SettingsIcon />
                    <Typography sx={{ marginLeft:'10px'}}><Link to ='/services' style={{textDecoration:'none', color:'white'}}>Settings </Link>
                        </Typography>
                     
                </Typography>
            </Drawer>
           

        </Box>
        </ThemeProvider>
        </>
    );
}
