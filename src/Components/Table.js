import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {Typography} from "@mui/material";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Avatar from "@mui/material/Avatar";
import Box from '@mui/material/Box';
import {Link, useParams} from "react-router-dom";
import {useState, useEffect} from "react"
import Layout from "../Components/Layout";

function OrgId(){
  const params = useParams();
  console.log(params);
}


const OrgTable = () => {
  const [orgData, setOrgData] = useState([]);

    useEffect(() => {
      fetch("http://m-subscribe-dev.eba-kpdc2e68.eu-central-1.elasticbeanstalk.com/organizations/organizations/")
        .then(response => {
          if(response.ok){
            console.log('hi')
            return response.json()
          }
          throw response
        })
        .then(data => {
          setOrgData(data)
          console.log(data)
        }) 

    }, [])
  
  return (
    <>
    <Box component="main" >

      <Box>
        <Typography
          align="left"
          sx={{marginTop: -"5px", padding: "10px", display: 'flex', justifyContent: 'space-between'}}
        >
          Organizations Available
          <Typography
            align="left"
            sx={{marginTop: "-10px", padding: "10px", display: 'flex', justifyContent: 'space-between'}}
          >
            <Link to='./organizations' style={{textDecoration: 'none'}}><VisibilityOffIcon sx={{color: 'blue',}}/>
              View all
            </Link>
            <Link to='./organizations/addorganization' style={{textDecoration: 'none'}}>
              <Typography

                align="left"
                sx={{marginTop: "-10px", padding: "10px", display: 'flex',}}
              >
                <AddCircleIcon sx={{color: 'blue'}}/>
                <Typography> Add Organization </Typography>
              </Typography>
            </Link>
          </Typography>

        </Typography>


      </Box>
      <TableContainer component={Paper} sx={{mt:'-10px'}}>
        <Table aria-label="simple table">
          <TableHead>

            <TableRow>
              <TableCell md={4} xs={4} sm={4}>Organization Name</TableCell>
              <TableCell md={4} xs={4} align="right">Organization Location</TableCell>
              <TableCell md={4} xs={4} align="right">Organization Phone Number</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orgData.map(orgData =>
              <TableRow
                key={orgData.id}

              >
                <Link to ={`/organizations/${orgData.id}/aboutpage`} style={{textDecoration:'none'}}>
                  <TableCell component="th" scope="row" sx={{display: "flex"}}>
                  <Avatar alt="Remy Sharp" src="profile.jpg" sx={{mr:'10px'}}/>
                  <Typography >
                    {orgData.name}
                    <Typography sx={{color: "#9F9595", fontSize: "10px", }}>
                      {orgData.email}
                    </Typography>
                  </Typography>
                </TableCell>
                </Link>
                
                <TableCell align="right">
                  {orgData.location}
                </TableCell>
                <TableCell align="right" sx={{textAlign:'right'}}>
                  {orgData.phone}
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
   </Box>
    </>
  );
}

export default OrgTable
