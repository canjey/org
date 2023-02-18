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
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import IconButton from '@mui/material/IconButton';
import Logout from '@mui/icons-material/Logout';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';

// import Stats from './Stats';
export const drawerWidth = 240;


export default function Sidebar() {
  const logout = () =>
  {
    localStorage.removeItem('token');
    window.location.href = ("/login");

  }
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <Box sx={{display: 'flex'}}>
      <Box sx={{ marginLeft: {md: '77%', sm:'40%'}, display: 'flex', alignItems: 'right', textAlign: 'center',mt:'20px' }}>
        <Typography sx={{ mt:'5%', minWidth: 100 }}>About Us</Typography>
        <Typography sx={{ mt:'5%', minWidth: 100 }}>Contact Us</Typography>
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <Link to={'/profile'} style={{textDecoration:'none', color:'black'}}>
          <MenuItem>
          <Avatar /> Profile
        </MenuItem>
        </Link>
        <Link to={'/changePassword'} style={{textDecoration:'none',  color:'black'}}><MenuItem>
          <Avatar /> Change Password
        </MenuItem>
        </Link>
        <Divider />
        <MenuItem>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Add another account
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem>
          <ListItemIcon onClick={logout}>
            <Logout onClick={logout} fontSize="small" />
          </ListItemIcon>
          <Typography onClick={logout}>Logout </Typography>
        </MenuItem>
      </Menu>
        <Drawer
          PaperProps={{
            sx: {
              backgroundColor: "#5495D0",
              color: "white",
            }
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
              }}>Organization </Link>
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
        </Drawer>
      </Box>
    </>
  );
}
