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

export default function OrganizationForm() {
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");
  const [location, setLocation] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [postal_address, setPostal_Address] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let res = fetch("https://eb25-196-216-93-135.in.ngrok.io/accounts/users/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        first_name: first_name,
        last_name: last_name,
        phone: phone,
        country: country,
        location: location,
        email: email,
        role: role,
        postal_address: postal_address
      })
    });
    setFirstName("");
    setLastName("");
    setPhone("");
    setPostal_Address("");
    setCountry("");
    setRole("");
    setEmail("");
    setMessage("");
    setLocation("");

    let resJson = res.json();
    if (res.status === 200) {
      console.log("Submitted");
      window.location.href = "/organizations";
    } else {
      setMessage("Some Error occured");
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
                    label="First Name"
                    type="text"
                    name="first_name"
                    value={first_name}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                  <TextField
                    fullWidth
                    required
                    id="outlined-required"
                    label="Last Name"
                    type="text"
                    name="last_name"
                    value={last_name}
                    onChange={(e) => setLastName(e.target.value)}
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
                    name=" country"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
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
                <div style={{ marginTop: "10px", display:'flex'}}>
                  <FormLabel id="demo-radio-buttons-group-label">
                    Job Role
                  </FormLabel>
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    // defaultValue="STAFF"
                    name="role"
                    onChange={(e) => setRole(e.target.value)}
                    sx={{ml:'20px', mt:'-5px'}}
                  >
                    <FormControlLabel
                      value="ADMIN"
                      control={<Radio />}
                      label="ADMIN"
                    />
                    <FormControlLabel
                      value="STAFF"
                      control={<Radio />}
                      label="STAFF"
                    />
                  </RadioGroup>
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
        </Grid>
      </Grid>
    </Box>
  );
}
