import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useState, useEffect } from "react";
import {Link, useParams} from "react-router-dom";
import AddCircleIcon from "@mui/icons-material/AddCircle";

function AboutService(){
  const [service, setService] = useState([]);
  const token = localStorage.getItem('token');
  const {id} = useParams;
  useEffect(() =>{
    fetch(`http://m-subscribe-dev.eba-kpdc2e68.eu-central-1.elasticbeanstalk.com/services/services/${id}`,{
      method:'GET',
      headers:{
        "Content-Type":"application/json",
        "Authorization":`Token ${token}`
      }
    })
    .then((data) =>{
      setService(data);
    })
  }, [])
  console.log(service);
  return(
    <>
    hi
    </>
  )
}


export default function Service() {
  const [serviceData, setServiceData] = useState([]);
  const token = localStorage.getItem("token");
  useEffect(() => {
    fetch(
      "http://m-subscribe-dev.eba-kpdc2e68.eu-central-1.elasticbeanstalk.com/services/services",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${token}`
        }
      }
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw response;
        }
      })
      .then((data) => {
        setServiceData(data);
      });
  }, []);
  console.log(serviceData);
  return (
    <>
    <Link to='./addservices' style={{textDecoration:'none'}}>
      <Typography sx={{textAlign:'right', mt:'20px', mr:'15%'}}><AddCircleIcon />
      Add Services</Typography></Link>
    <Box sx={{ ml: "5%", mt: "5px", display:'flex', flexWrap:'wrap' }}>
      {serviceData.map((services) => (
        <Link to={`aboutservices/${services.id}`} onClick={AboutService} style={{textDecoration:'none'}}>
        <Card sx={{ width: 345, mt:'10px', ml:'10px' }}>
          <CardMedia
            sx={{ height: 140 }}
            image="profile.jpg"
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {services.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {services.description}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
        </Link>
      ))}
    </Box>
    </>
  );
}
