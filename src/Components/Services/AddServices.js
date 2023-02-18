import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { useState } from "react";
import Grid from "@mui/material/Grid";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

export default function AddServicesForm() {
  const [serviceName, setServiceName] = useState("");
  const [serviceDescription, setServiceDescription] = useState("");
 

  const handleSubmit = (e) => {
    const token = localStorage.getItem('token');
    e.preventDefault();
    let res = fetch("http://m-subscribe-dev.eba-kpdc2e68.eu-central-1.elasticbeanstalk.com/services/services/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Token ${token}`
      },
      body: JSON.stringify({
        name: serviceName,
        description: serviceDescription,

        
      })
    });
    serviceName("");
    serviceDescription("");
   
    let resJson = res.json();
    if (res.status === 201) {
      console.log("Submitted");
      window.location.href = "/organizations";
    } 
  };

  return (
    <Box sx={{ mt: "-80px" }}>
      <Grid container>
        <Grid item xs={6} sm={6}>
          <Box
            sx={{
              "& .MuiTextField-root": { m: 1 },
              marginTop: "60px"
            }}
          >
            <Typography sx={{ ml: "20px" }}>Add User Form</Typography>
            <form onSubmit={handleSubmit}>
              <Box>
                <div
                  style={{ justifyContent: "space-between", marginTop: "10px" }}
                >
             
                  <TextField
                    fullWidth
                    required
                    id="outlined-required"
                    label="Service Name"
                    type="text"
                    name="name"
                    value={serviceName}
                    onChange={(e) => setServiceName(e.target.value)}
                  />
                  <TextField
                    fullWidth
                    required
                    id="outlined-required"
                    label="Service Description"
                    type="text"
                    name="description"
                    value={serviceDescription}
                    onChange={(e) => setServiceDescription(e.target.value)}
                  />
                </div>
                

                
                
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: "30px"
                  }}
                >
                  <div>
                    <Button
                      variant="contained"
                      sx={{ color: "black", backgroundColor: "#E8F0FD" }}
                    >
                      Cancel
                    </Button>
                  </div>
                  <div sxtyle={{ marginLeft: "20%" }}>
                    <Button
                      type="submit"
                      variant="contained"
                      sx={{ color: "white" }}
                    >
                      Save & Continue
                    </Button>
                  </div>
                </div>
                
              </Box>
            </form>
          </Box>
        </Grid>
        {/* <Grid
          item
          xs={6}
          sm={6}
          sx={{
            padding: { md: "60px", sm: "50px" },
            marginTop: { sm: "80px", md: "40px", lg: "40px" }
          }}
        >
          <Box component="div1" id="details">
            <Typography sx={{ display: "flex" }}>
              First Name:
              <Typography sx={{ color: "green", ml: "10px", fontSize: "15px" }}>
                {first_name}
              </Typography>
            </Typography>
            <Typography sx={{ mt: "10px", display: "flex" }}>
              Last Name:
              <Typography sx={{ color: "green", ml: "10px", fontSize: "15px" }}>
                {last_name}
              </Typography>
            </Typography>
            <Typography sx={{ mt: "10px", display: "flex" }}>
              Phone Number:
              <Typography sx={{ color: "green", ml: "10px", fontSize: "15px" }}>
                {phone}
              </Typography>
            </Typography>
            <Typography sx={{ mt: "10px", display: "flex" }}>
              Country:
              <Typography sx={{ color: "green", ml: "10px", fontSize: "15px" }}>
                {country}
              </Typography>
            </Typography>
            <Typography sx={{ mt: "10px", display: "flex" }}>
              Location:
              <Typography sx={{ color: "green", ml: "10px", fontSize: "15px" }}>
                {location}
              </Typography>
            </Typography>
            <Typography sx={{ mt: "10px", display: "flex" }}>
              Address:
              <Typography sx={{ color: "green", ml: "10px", fontSize: "15px" }}>
                {postal_address}
              </Typography>
            </Typography>
            <Typography sx={{ mt: "10px", display: "flex" }}>
              Company Email:
              <Typography sx={{ color: "green", ml: "10px", fontSize: "15px" }}>
                {email}
              </Typography>
            </Typography>
            <Typography sx={{ mt: "10px", display: "flex" }}>
              Job Role:
              <Typography sx={{ color: "green", ml: "10px", fontSize: "15px" }}>
                {role}
              </Typography>
            </Typography>
          </Box>
        </Grid> */}
      </Grid>
    </Box>
  );
}
