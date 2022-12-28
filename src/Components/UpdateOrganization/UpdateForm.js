import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Grid from '@mui/material/Grid';
import {useParams} from "react-router-dom";
import {useState, useEffect} from "react"


export default function UpdateForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");
  const [location, setLocation] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const [address, setAddress] = useState("");
  const [message, setMessage] = useState("");
  const [updateData, setUpdateData] =useState("");
  const {id} = useParams();
  
    useEffect(() =>{
        fetch( `http://m-subscribe-dev.eba-kpdc2e68.eu-central-1.elasticbeanstalk.com/organizations/organizations/${id}`,)
        .then ( response =>{
            if(response.ok){
                return(response.json())
            }}
        )
        .then(data =>{
            setUpdateData(data);
        })
    })
  

  const handleSubmit =  e => {
    e.preventDefault();
    let res =  fetch(
      `http://m-subscribe-dev.eba-kpdc2e68.eu-central-1.elasticbeanstalk.com/organizations/organizations/${id}`,
      {
        method: "POST",
        body: JSON.stringify({
          name: name,
          phone: phone,
          country: country,
          location: location,
          email: email,
          description: description,
          address: address,
          documents:[]
        })
        
      }
    );
    
    setName('');
    setPhone('');
    setAddress('');
    setCountry('');
    setDescription('');
    setEmail('');
    setMessage('');
    setLocation('');

    let resJson =  res.json();
    if (res.status === 200) {
      console.log("Submitted");
      window.location.href = ("/organizations");
    }
    else 
    {
      setMessage("Some Error occured")
    }
  };

  return (
    <Box sx={{ mt: "-80px", ml: "100px",  }}>
      <Grid container>
        <Grid item xs={6}>
        <Box
        sx={{
          "& .MuiTextField-root": { m: 1 },
          marginLeft: "100px",
          marginTop: "100px"
        }}
      >
        
          <Typography sx={{ ml: "20px" }}>Add Organization Form</Typography>
          <form onSubmit={handleSubmit}>
          <Box>
            <div style={{ justifyContent: "space-between", marginTop: "10px" }}>
              <TextField
                fullWidth
                required
                id="outlined-required"
                type="text"
                name="name"
                value={updateData.name}
                onChange={(e) => setName(e.target.value)}
                
              />
              <TextField
                required
                fullWidth
                id="outlined-required"
                type="text"
                name="phone"
                value={updateData.phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div style={{ marginTop: "10px" }}>
              <TextField
                fullWidth
                required
                id="outlined-required"
                type="text"
                name="country"
                value={updateData.city}
                onChange={(e) => setCountry(e.target.value)}
              />
              <TextField
                required
                fullWidth
                id="outlined-required"
                name="location"
                value={updateData.location}
                type="text"
                onChange={(e) => setLocation(e.target.value)}
              />
              <TextField
                required
                fullWidth
                id="outlined-required"
                type="text"
                name="postal_address"
                value={updateData.postal_address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>

            <div style={{ marginTop: "10px" }}>
              <TextField
                required
                fullWidth
                id="outlined-required"
                type="email"
                name="email"
                value={updateData.email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div style={{ marginTop: "10px" }}>
              <TextField
                required
                fullWidth
                id="outlined-required"
                type="text"
                name="description"
                value={updateData.description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            {/* <div style={{marginTop:'10px'}}>
        <TextField
          required
          id="outlined-required"
          label="Document Name"
          
        />
        <TextField
          required
          id="outlined-required"
          label="Document Description"
          
        />
        <Button variant="contained" xs={12} sx={{color:'white', marginTop:'20px'}}>Upload</Button>
        

       
      </div>
      <div style={{marginTop:'10px'}}>
        <TextField
          required
          id="outlined-required"
          label="Company Name"
          
        />
        <TextField
          required
          id="outlined-required"
          label="Company Name"
          
        />
        <TextField
          required
          id="outlined-required"
          label="Company Name"
          
        />
      </div> */}
            <div
              style={{
                display: "flex",
                justifyContent:'space-between',
                marginTop: "30px"
              }}
            >
              <div>
                <Button
                  variant="contained"
                  sx={{ color: "black", backgroundColor: "#E8F0FD",  }}
                >
                  Cancel
                </Button>
              </div>
              <div sxtyle={{marginLeft:'20%'}} >
                <Button
                  type="submit"
                  variant="contained"
                  sx={{ color: "white",}}
                >
                  Save & Continue
                </Button>
              </div>
            </div>
            <div className="message">{message ? <p>{message}</p> : null}</div>
          </Box>
        </form>
      </Box>
          </Grid>
          <Grid item xs={6} sx={{padding:'150px'}}>
          <Box component="div" id="details">
            <Typography>
              Company Name: {name}
              </Typography>
              <Typography>
              Phone Number: {phone}
              </Typography> 
              <Typography>
              Country: {country}
              </Typography> 
              <Typography>
              Location:    {location}
              </Typography> 
              <Typography>
              Address:   {address}
              </Typography> 
              <Typography>
              Company Email: {email}
              </Typography> 
              <Typography>
              Company Description: {description}
              </Typography> 
              </Box>
            </Grid>
        </Grid>
      
    </Box>
  );
}
