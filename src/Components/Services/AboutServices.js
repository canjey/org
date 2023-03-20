import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { useSelector, useDispatch } from 'react-redux'
import {fetchService} from '../../store/services/slice.js'


export default function AboutServices() {
  // const [service, setService] = useState([]);
  const token = localStorage.getItem("token");
  const {id} = useParams();
  const dispatch = useDispatch();
  const service = useSelector(
    (state) => state.services.service
  )
  const [serviceData, setServiceData] = useState([]);
  useEffect(() => {
    dispatch(
      fetchService(id)
    )
  }, []);

  const handleDelete =(serviceId)=>{
    fetch( `http://m-subscribe-dev.eba-kpdc2e68.eu-central-1.elasticbeanstalk.com/services/services/${id}/`,
    {
        method:"DELETE",
        headers:{
            "Content-Type":"application/json",
            "Authorization":`Token ${token}`
        }
    })
    .then (res => res.json())
    .then ( window.location.href='/services')
  }
  // useEffect(() => {
  //   fetch(
  //     `http://m-subscribe-dev.eba-kpdc2e68.eu-central-1.elasticbeanstalk.com/services/services/${id}/`,
  //     {
  //       method: "GET",
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization: `Token ${token}`
  //       }
  //     }
  //   )
  //   .then(response => {
  //       if (response.ok)
  //       {
  //         return (response.json())
  //       }
  //       throw response;
  //     })
  //   .then((data) => {
  //     setService(data);
  //   });
  // }, []);
  console.log(service);


  return (
    <>
    {/* <Typography sx={{display:'flex'}}>
      <Link to="addservices" style={{ textDecoration: "none" }}>
        <Typography sx={{ textAlign: "right", mt: "20px", mr: "15%" }}>
          <AddCircleIcon />
          Delete Services
        </Typography>
      </Link>
      <Link to="addservices" style={{ textDecoration: "none" }}>
        <Typography sx={{ textAlign: "right", mt: "20px", mr: "15%" }}>
          <AddCircleIcon />
          Update Services
        </Typography>
      </Link>
      </Typography> */}
      <Box sx={{ ml: "5%", mt: "5%", display: "flex", flexWrap: "wrap" }}>
        <Link style={{ textDecoration: "none" }}>
          <Card sx={{ width: 800, mt: "10px", ml: "10px" }}>
            <CardMedia
              sx={{ height: 140 }}
              image="bot.png"
              title="green iguana"
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h4"
                component="div"
              >{service.name}</Typography>
               <Typography variant="h6"> Description: {service.description}</Typography>
               <Typography variant="h6"> Price: {service.description}</Typography>
               <Typography variant="h6"> Warranty: {service.description}</Typography>
               <Typography variant="h6"> Supported No of Users:  {service.description}</Typography>
              <Typography variant="body2" color="text.secondary"></Typography>
            </CardContent>
            <CardActions>
              <Button onClick={()=>handleDelete(service.id)}>Delete Service</Button>
              <Button size="small">Update Service</Button>
            </CardActions>
          </Card>
        </Link>
      </Box>
    </>
  );
}
