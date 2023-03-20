import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { useState } from "react";
import Grid from "@mui/material/Grid";

export default function OrganizationForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [location, setLocation] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const [postal_address, setPostal_Address] = useState("");
  const [message, setMessage] = useState("");
  const [file, setFile] = useState();

  function handleChange(e){
    setFile(e.target.files[0])
  }

  const handleSubmit = (e) => {
    const token = localStorage.getItem("token");
    e.preventDefault();
    let res = fetch(
      "http://m-subscribe-dev.eba-kpdc2e68.eu-central-1.elasticbeanstalk.com/organizations/organizations/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Token ${token}`,
          // 'content-length': `${file.size}`
        },
        body: JSON.stringify({
          name: name,
          phone: phone,
          city: city,
          location: location,
          email: email,
          description: description,
          postal_address: postal_address,
          documents: []
        })
      }
    )
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.error(err));

    setName('');
    setPhone('');
    setPostal_Address('');
    setCity('');
    setDescription('');
    setEmail('');
    setMessage('');
    setLocation('');

    
  }; 

  return (
    <Box sx={{ mt: "-80px",  }}>
      <Grid container>
        <Grid item xs={6} sm={6}>
          <Box
            sx={{
              "& .MuiTextField-root": { m: 1 },
              
              marginTop: "100px"
            }}
          >
            <Typography sx={{ ml: "20px" }}>Add Organization Form</Typography>
            <form onSubmit={handleSubmit}>
              <Box>
                <div
                  style={{ justifyContent: "space-between", marginTop: "10px" }}
                >
                  <TextField
                    fullWidth
                    required
                    id="outlined-required"
                    label="Company Name"
                    type="text"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <TextField
                    required
                    fullWidth
                    id="outlined-required"
                    label="Phone Number"
                    type="text"
                    name="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
                <div style={{ marginTop: "10px" }}>
                  <TextField
                    fullWidth
                    required
                    id="outlined-required"
                    label="Country"
                    type="text"
                    name=" city"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                  />
                  <TextField
                    required
                    fullWidth
                    id="outlined-required"
                    label="Location"
                    name="location"
                    value={location}
                    type="text"
                    onChange={(e) => setLocation(e.target.value)}
                  />
                  <TextField
                    required
                    fullWidth
                    id="outlined-required"
                    label="Address"
                    type="text"
                    name="postal_address"
                    value={postal_address}
                    onChange={(e) => setPostal_Address(e.target.value)}
                  />
                </div>

                <div style={{ marginTop: "10px" }}>
                  <TextField
                    required
                    fullWidth
                    id="outlined-required"
                    label="Company Email Address"
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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
                <div className="message">
                  {message ? <p>{message}</p> : null}
                </div>
              </Box>
            </form>
          </Box>
        </Grid>
        <Grid
          item
          xs={6}
          sm={6}
          sx={{ padding: { md: "20px", sm: "10%" }, marginTop: { sm: "10%", md:'20%' }, }}
        >
          <Box component="div" id="details">
            <Typography sx={{ display: "flex" }}>
              Company Name:
              <Typography sx={{ color: "green", ml: "10px", fontSize: "15px" }}>
                {name}
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
                {city}
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
              Company Description:
              <Typography sx={{ color: "green", ml: "10px", fontSize: "15px" }}>
                {description}
              </Typography>
            </Typography>
            {/* <Typography sx={{ mt: "10px", display: "flex" }}>
              Douments:
              <Typography sx={{ color: "green", ml: "10px", fontSize: "15px" }}>
                {file.type}
              </Typography>
            </Typography> */}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
