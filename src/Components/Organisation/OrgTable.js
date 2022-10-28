import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Avatar from "@mui/material/Avatar";
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import DownloadIcon from '@mui/icons-material/Download';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {Link} from "react-router-dom";




function createData(name, calories, fat) {
  return { name, calories, fat };
}

const theme = createTheme({
  typography: {
    fontFamily: 'inter',
    fontSize:'30px'
  },
})
const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9)
];

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  borderStyle:'groove',
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
    
  },
  marginLeft: 0,
  width: 565,
  height:50,
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    // width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function OrgTable() {
  return (
    <>
    <ThemeProvider theme={theme}>
    <Box sx={{ minWidth: 250, width: 1200, marginLeft:'250px' }}>
    <Typography
              align="left"
              sx={{ marginTop: "10px", padding: "10px", display:'flex', justifyContent:'space-between', fontFamily:'inter'}}
            >
              All Organisations
              <Link to ='./addorganization' style={{textDecoration:'none'}}>
              <Typography
              align="left"
              sx={{ marginTop: "-10px", padding: "10px", display:'flex' }}
            >
              
                <AddCircleIcon sx={{color:'blue'}} />
              <Typography >
              Add Organisation
              </Typography>
              
               
            </Typography>
            </Link>
            </Typography>
            

    </Box>
    {/* <Divider /> */}
    <Box sx={{ minWidth: 250, width: 1200, marginLeft:'250px' }}>
      
    <TableRow>
            <TableCell><Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search></TableCell>
            <TableCell align="right"><Box sx={{width:130,textAlign:'center', padding:'10px',height:50, borderRadius: `10px 0 10px 0`, boxShadow:'2'}}>
            <Typography  sx={{display:'flex', marginLeft:'30px'}}>
              Filter
              <Typography>
              <FilterAltIcon sx={{color:'blue', width:'20px'}} />
              </Typography>
            </Typography>

          </Box></TableCell>
            <TableCell align="right"><Box sx={{width:180, height:50,textAlign:'center',  padding:'10px', borderRadius: `10px 0 10px 0`, boxShadow:'2'}}>
            <Typography  sx={{display:'flex', marginLeft:'30px'}}>
              Attachment
              <Typography>
              <AttachFileIcon sx={{color:'blue', width:'20px'}} />
              </Typography>
            </Typography>
          </Box></TableCell>
            <TableCell align="right"><Box sx={{width:180,textAlign:'center', height:50,  padding:'10px', borderRadius: `10px 0 10px 0`, boxShadow:'2'}}>
            <Typography  sx={{display:'flex', marginLeft:'30px'}}>
              Download
              <Typography>
              <DownloadIcon sx={{color:'blue', width:'20px'}} />
              </Typography>
            </Typography>
          </Box></TableCell>
            
          </TableRow>
          

    </Box>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 250, width: 1200, marginLeft:'250px', boxShadow:'1' }} aria-label="simple table">
        <TableHead>
                
          
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Date</TableCell>
            <TableCell align="right">Amount Due</TableCell>
            <TableCell align="right">Service</TableCell>
            <TableCell align="right">Status</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody >
          {rows.map(row =>
            <TableRow
              key={row.name}
             
            >
              <Link to='./aboutpage' style={{textDecoration:'none'}}>
                <TableCell component="th" scope="row" sx={{ display: "flex" }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                <Typography sx={{ padding: "2px" }}>
                  {row.name}
                  <Typography sx={{ color: "#9F9595", fontSize: "10px" }}>
                    {row.name}
                  </Typography>
                </Typography>
              </TableCell>
              </Link>
              <TableCell align="right">
                {row.calories}
              </TableCell>
              <TableCell align="right">
                {row.fat}
              </TableCell>
              <TableCell align="right">
                {row.fat}
              </TableCell>
              <TableCell align="right">
                {row.fat}
              </TableCell>
              <TableCell align="right">
                {row.fat}
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
    </ThemeProvider>
    </>
  );
}
