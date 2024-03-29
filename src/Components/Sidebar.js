import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Avatar from '@mui/material/Avatar';
import SettingsIcon from '@mui/icons-material/Settings';
import Settings from '@mui/icons-material/Settings';
import BarChartIcon from '@mui/icons-material/BarChart';
import ReceiptIcon from '@mui/icons-material/Receipt';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import IconButton from '@mui/material/IconButton';
import Logout from '@mui/icons-material/Logout';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import {List, ListItemButton, ListItemText} from "@mui/material";
import Grid from "@mui/material/Grid";
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'  
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import ChangePassword from './OrganizationPages/ChangePassword/ChangePassword';

// import Stats from './Stats';
export const drawerWidth = 240;
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4
};

export default function Sidebar() {
  const logout = () => {
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

    // Modal Code
 
    const [open1, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose1 = () => setOpen(false);
  
  return (
    <>
      <Box sx={{display: 'flex'}}>
        <Box sx={{
          marginLeft: {md: '77%', sm: '40%'},
          display: 'flex',
          alignItems: 'right',
          textAlign: 'center',
          mt: '20px'
        }}>
          <Typography sx={{mt: '5%', minWidth: 100}}>About Us</Typography>
          <Typography sx={{mt: '5%', minWidth: 100}}>Contact Us</Typography>
          <Tooltip title="Account settings">
            <IconButton
              onClick={handleClick}
              size="small"
              sx={{ml: 2}}
              aria-controls={open ? 'account-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
            >
              <Avatar sx={{width: 32, height: 32}}>M</Avatar>
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
          transformOrigin={{horizontal: 'right', vertical: 'top'}}
          anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
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

        {/* <Button onClick={handleOpen}><Avatar />Change Password</Button>
                      <Modal
                        open={open1}
                        onClose={handleClose1}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                      >
                        <Box sx={style}>
                          <ChangePassword />
                        </Box>
                      </Modal> */}
        
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
              backgroundColor: "#5495D0", color: "white",
            }
          }}
          variant="permanent"
          anchor="left"
        >
          <List
            sx={{marginX: '0.5rem'}}
            component="nav"
            aria-labelledby="back"
          >
            <ListItemButton sx={{borderRadius: "0.5rem", marginBottom: '0.5rem'}}>
              <ListItemIcon sx={{color: "#fefefe"}}>
                <ArrowBackIosIcon/>
              </ListItemIcon>
            </ListItemButton>
          </List>
          <Grid container justifyContent={'center'}>
            <Grid item>
              <Avatar alt="Remy Sharp" src="/logo.png" sx={{width: '7rem', height: '7rem', borderRadius: '100%'}}/>
            </Grid>
          </Grid>

          <Divider sx={{marginTop: '100px',}}/>
          <List
            sx={{marginX: '0.5rem'}}
            component="nav"
            aria-labelledby="site-menu"
          >
            <Link to='/' style={{textDecoration:'none', color:'white'}}>
            <ListItemButton sx={{borderRadius: "0.5rem", marginBottom: '0.5rem'}}>
              <ListItemIcon sx={{color: "#fefefe"}}>
                <BarChartIcon/>
              </ListItemIcon>
              <ListItemText primary="Dashboard"/>
            </ListItemButton>
            </Link>
            <Link to='/organizations/' style={{textDecoration:'none', color:'white'}}>
            <ListItemButton sx={{borderRadius: "0.5rem", marginBottom: '0.5rem'}}>
              <ListItemIcon sx={{color: "#fefefe"}}>
                <PermContactCalendarIcon/>
              </ListItemIcon>
              <ListItemText primary="Organization"/>
            </ListItemButton>
            </Link>
            <Link to='/services' style={{textDecoration:'none', color:'white'}}>
            <ListItemButton sx={{borderRadius: "0.5rem", marginBottom: '0.5rem'}}>
              <ListItemIcon sx={{color: "#fefefe"}}>
                <ReceiptIcon/>
              </ListItemIcon>
              <ListItemText primary="Services"/>
              
            </ListItemButton>
            </Link>
          </List>
          <Divider/>
          <List
            sx={{marginX: '0.5rem', marginTop: '100px'}}
            component="nav"
          >
            <ListItemButton sx={{borderRadius: "0.5rem", marginBottom: '0.5rem'}}>
              <ListItemIcon sx={{color: "#fefefe"}}>
                <SettingsIcon/>
              </ListItemIcon>
              <ListItemText primary="Settings"/>
            </ListItemButton>
          </List>
        </Drawer>
      </Box>
    </>
  );
}
