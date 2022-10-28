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
import Box from '@mui/material/Box';
import {Link} from "react-router-dom";



function createData(name, calories, fat) {
  return { name, calories, fat };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9)
];

export default function OrgTable() {
  return (
    <>
     <Box sx={{marginLeft:'250px'}} >
    <Typography
              align="left"
              sx={{ marginTop: "10px", padding: "10px", display:'flex', justifyContent:'space-between' }}
            >
              Organizations Available
              <Typography
              align="left"
              sx={{ marginTop: "-10px", padding: "10px", display:'flex', justifyContent:'space-between'  }}
            >
              <Link to ='./organizations' style={{textDecoration:'none'}}><VisibilityOffIcon sx={{color:'blue'}}/>
               View all
               </Link>
               <Link to='./organizations/addorganization' style={{textDecoration:'none'}}>
               <Typography
               
              align="left"
              sx={{ marginTop: "-10px", padding: "10px",  display:'flex', }}
            >
              <AddCircleIcon sx={{color:'blue'}} />
              <Typography> Add Organization </Typography> 
            </Typography>
            </Link>
            </Typography>
           
            </Typography>
            
            

    </Box>
    <TableContainer component={Paper}>
      <Table sx={{marginLeft:'250px', minWidth: 250, width: 1200 }} aria-label="simple table">
        <TableHead>
      
          <TableRow>
            <TableCell xs={4}sm={4}>Name</TableCell>
            <TableCell xs={4} align="right">Account Status</TableCell>
            <TableCell xs={4} align="right">Subscribed Services</TableCell>
          </TableRow>
        </TableHead>
        <TableBody >
          {rows.map(row =>
            <TableRow
              key={row.name}
              
            >
              <TableCell component="th" scope="row" sx={{ display: "flex" }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                <Typography sx={{ padding: "2px" }}>
                  {row.name}
                  <Typography sx={{ color: "#9F9595", fontSize: "10px" }}>
                    {row.name}
                  </Typography>
                </Typography>
              </TableCell>
              <TableCell align="right">
                {row.calories}
              </TableCell>
              <TableCell align="right">
                {row.fat}
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}
