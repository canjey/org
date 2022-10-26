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


// import Stats from './Stats';

const drawerWidth = 240;

export default function Sidebar() {
    return (

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
                <Divider  sx={{marginTop:'60px'}} />
                {/* <List sx={{marginTop:'100px'}}>
                    {['Dashboard', 'Organisation', 'Services'].map((text, index) => (
                        <ListItem key={text} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List> */}
                <Grid sx={{marginTop:'30px', padding:'40px'}}>
                <Typography sx={{display:'flex'}}>
                    <InboxIcon /> <Typography sx={{ marginLeft:'10px'}}><Link to ='/'>Dashboard </Link>
                        </Typography>
                </Typography>
                <Typography  sx={{marginTop:'20px', display:'flex'}}>
                    <MailIcon />
                    <Typography sx={{ marginLeft:'10px'}}><Link to ='/organisations'>Organisation </Link>
                    </Typography> 
                </Typography>
                <Typography  sx={{marginTop:'20px', display:'flex'}}>
                    <InboxIcon />
                    <Typography sx={{ marginLeft:'10px'}}><Link to ='/services'>Services </Link>
                        </Typography>
                     
                </Typography>
                </Grid>
                <Divider />
                <List sx={{marginTop:'300px'}}>
                    {['Settings'].map((text, index) => (
                        <ListItem key={text} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
           

        </Box>
    );
}
