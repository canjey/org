import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import {Link} from "react-router-dom";
import Button from "@mui/material/Button";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import DownloadIcon from "@mui/icons-material/Download";
import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import OrganizationUsers from '../../Containers/OrganizationUsers/index.js';
import ServiceTable from './Services.js'


function handleUsers() {
  return(
    <OrganizationUsers />
  )
}

function handleServices() {
  return(
    <ServiceTable />

  )
}


export default function Stats() {

  const [orgDetails, setOrgDetails] = useState({id: {} });
  const {id} = useParams();

    useEffect(() => {
    fetch(`http://m-subscribe-dev.eba-kpdc2e68.eu-central-1.elasticbeanstalk.com/organizations/organizations/${id}/`)
    .then(response => {
      if (response.ok)
      {
        return (response.json())
      }
      throw response;
    })
    .then(data =>{
      setOrgDetails(data);
      
    })
  })
  console.log(orgDetails)
  return (
    <>
      <Box
        component="main"
        sx={{flexGrow: 1, bgcolor: 'background.default', p: 3,  ml:'-20px'}}
      >
        <Toolbar/>
        <Typography component='h4' sx={{fontFamily: 'inter',mt:'-80px'}}>
          {orgDetails.name}
        </Typography>
        <Box sx={{marginTop: '30px'}}>
          <Grid container rowSpacing={2} columns={16} columnSpacing={4}>
            <Grid item xs={16} md={4} sm={8}>
              <Card sx={{maxWidth: 275, height: 120, width: "100%", borderRadius: 5}}>
                <CardContent>
                  <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
                    Total Services
                  </Typography>
                  <Typography variant="h5" component="div" sx={{display: 'flex',}}>
                    32
                    <Typography sx={{
                      mb: 1.5,
                      width: '100px',
                      fontFamily: 'inter',
                      backgroundColor: '#CAFFC9',
                      textAlign: 'center',
                      borderRadius: '10px',
                      marginLeft: '30px'
                    }} color="text.secondary">
                      +2.6%
                    </Typography>
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={16} md={4} sm={8}>
              <Card sx={{maxWidth: 275, height: 120, width: "100%", borderRadius: 5}}>
                <CardContent>
                  <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
                    Total Users
                  </Typography>
                  <Typography variant="h5" component="div" sx={{display: 'flex',}}>
                    32
                    <Typography sx={{
                      mb: 1.5,
                      width: '100px',
                      fontFamily: 'inter',
                      backgroundColor: '#FBC9FF',
                      textAlign: 'center',
                      borderRadius: '10px',
                      marginLeft: '30px'
                    }} color="text.secondary">
                      +2.6%
                    </Typography>
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={16} md={4} sm={8}>
              <Card sx={{maxWidth: 275, height: 120, width: "100%", borderRadius: 5}}>
                <CardContent>
                  <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
                    Total Earnings
                  </Typography>
                  <Typography variant="h5" component="div" sx={{display: 'flex',}}>
                    32
                    <Typography sx={{
                      mb: 1.5,
                      width: '100px',
                      fontFamily: 'inter',
                      backgroundColor: '#CAFFC9',
                      textAlign: 'center',
                      borderRadius: '10px',
                      marginLeft: '30px'
                    }} color="text.secondary">
                      +2.6%
                    </Typography>
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={16} md={4} sm={8}>
              <Card sx={{maxWidth: 275, height: 120, width: "100%", borderRadius: 5}}>
                <CardContent>
                  <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
                    New Users
                  </Typography>
                  <Typography variant="h5" component="div" sx={{display: 'flex',}}>
                    32
                    <Typography sx={{
                      mb: 1.5,
                      width: '100px',
                      fontFamily: 'inter',
                      backgroundColor: '#59CDC6',
                      textAlign: 'center',
                      borderRadius: '10px',
                      marginLeft: '30px'
                    }} color="text.secondary">
                      +2.6%
                    </Typography>
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
          <Typography component="p"sx={{marginTop:'40px'}}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
          when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
          It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
          It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
          and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
          </Typography>
          <Grid container sx={{marginTop:'20px'}}>
          <Grid item xs={12} md={10} sx={{display:'flex', justifyContent:'space-evenly' }}>
              <Link to={'./aboutpage'} style={{textDecoration:'none'}}><Button  size={"medium"} variant={"outlined"} startIcon={<FilterAltIcon sx={{width: "20px"}}/>}>
                Subscribed Services
              </Button>
              </Link>
              <Link to={handleUsers} activeClassName="active" style={{textDecoration:'none'}}><Button  size={"medium"} variant={"outlined"} startIcon={<AttachFileIcon sx={{width: "20px"}}/>}>
                Users
              </Button></Link>
              <Link to='' style={{textDecoration:'none'}}><Button  size={"medium"} variant={"outlined"} startIcon={<FilterAltIcon sx={{width: "20px"}}/>}>
                Invoices
              </Button></Link>
            </Grid>
          </Grid>
        </Box>
        
        <Box sx={{marginTop: '20px'}}>

        </Box>

      </Box>
    </>
  )

}
