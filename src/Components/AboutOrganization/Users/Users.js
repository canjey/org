import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {Typography} from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Avatar from "@mui/material/Avatar";
import SearchIcon from "@mui/icons-material/Search";
import {alpha, createTheme, styled, ThemeProvider} from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import Box from "@mui/material/Box";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import DownloadIcon from "@mui/icons-material/Download";
import {Link} from "react-router-dom";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import DeleteIcon from '@mui/icons-material/Delete';
import SystemUpdateIcon from '@mui/icons-material/SystemUpdate';
import { useParams } from 'react-router-dom';
import {useState, useEffect} from "react"

function createData(name, calories, fat) {
  return {name, calories, fat};
}



const token = localStorage.getItem('token');

export default function UserTable() {
  const [users, setUserData] = useState([]);
  const token = localStorage.getItem('token');
  const {id} = useParams();
  const handleDelete =(userId)=>{
    fetch(`http://m-subscribe-dev.eba-kpdc2e68.eu-central-1.elasticbeanstalk.com/accounts/users/${userId}/`,{
      method:'DELETE',
      headers:{
        "Authorization": `Token ${token}`
      },
      
    })
    .then(res => res.json())
    .then (console.log("deleted"))
    .then(
      window.location.href = ("/organizations")
      )
  };

  useEffect(() =>{
    fetch(`http://m-subscribe-dev.eba-kpdc2e68.eu-central-1.elasticbeanstalk.com/organizations/organizations/${id}/users/`,{
       method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Token ${token}`
        },
    })
    .then(response => {
      if (response.ok){
        return response.json()
      }
      throw response;
    })
    .then (data => {
      setUserData(data)
    })
    

  }, [])

  console.log(users);
    return (
    <>

        <Box>
          <Grid container >
        
          </Grid>
          <Typography component="p" sx={{float:'right', mt:'-30px'}}>
          <Link
                to={`/organizations/${id}/adduser`}
                style={{ textDecoration: "none" }}
              >
                <Typography
                  align="left"
                  sx={{ marginTop: "-10px", padding: "10px", display: "flex" }}
                >
                  <AddCircleIcon sx={{ color: "blue" }} />
                  <Typography> Add User </Typography>
                </Typography>
              </Link>
              
            </Typography>

          <Grid container>
            <Grid item sm={12}>
              <TableContainer component={Paper} sx={{marginTop: '10px'}}>
                <Table
                  sx={{boxShadow: "1"}}
                  aria-label="simple table"
                >
                  <TableHead>
                    <TableRow>
                      <TableCell>Name</TableCell>
                      <TableCell align="right">Date</TableCell>
                      <TableCell align="right">Amount Due</TableCell>
                      <TableCell align="right">Service</TableCell>
                      <TableCell align="right">Status</TableCell>
                      <TableCell align="right">Role</TableCell>
                      <TableCell align="right">Action</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {users.map((row) => (
                      <TableRow key={row.id}>
                        <Link to="./aboutpage" style={{textDecoration: "none"}}>
                          <TableCell
                            component="th"
                            scope="row"
                            sx={{display: "flex"}}
                          >
                            <Avatar
                              alt="Remy Sharp"
                              src="/static/images/avatar/1.jpg"
                            />
                            <Typography sx={{padding: "2px"}}>
                              {row.first_name}
                              <Typography
                                sx={{color: "#9F9595", fontSize: "10px"}}
                              >
                                {row.email}
                              </Typography>
                            </Typography>
                          </TableCell>
                        </Link>
                        <TableCell align="right">{row.phone}</TableCell>
                        <TableCell align="right">{row.postal_address}</TableCell>
                        <TableCell align="right">{row.country}</TableCell>
                        <TableCell align="right">{row.location}</TableCell>
                        <TableCell align="right">{row.role}</TableCell>
                        <TableCell align="right">              
                        <Link  to ='./updateform'><SystemUpdateIcon /> </Link>
                        <Link onClick={()=>handleDelete(row.id)} ><DeleteIcon /></Link>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
          </Grid>
        </Box>

    </>
  );
}
