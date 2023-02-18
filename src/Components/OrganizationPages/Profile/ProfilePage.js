import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

export default function ProfilePage() {
  const [profileData, setProfileData] = useState([]);
  const [organization, setOrganization] = useState([]);
  const [message, setMessage] = useState("");
  const token = localStorage.getItem("token");
  useEffect(() => {
    fetch(
      "http://m-subscribe-dev.eba-kpdc2e68.eu-central-1.elasticbeanstalk.com/accounts/users/authenticated-user/",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Token ${token}`
        }
      }
    )
    .then(response => {
      if (response.ok){
        return response.json()
      }
      throw response;
    })
      .then((data) => {
        setProfileData(data.data);
      });
  }, []);

  useEffect(() =>{
    fetch("http://m-subscribe-dev.eba-kpdc2e68.eu-central-1.elasticbeanstalk.com/accounts/users/organization",{
      method:"GET",
      headers:{
        "Content-Type":'application/json',
        "Authorization":`Token ${token}`
      }
    })
    .then(response => response.json())
    .then((data) =>{
      setOrganization(data.data)
    })
  }, [])
  console.log(profileData)
  console.log(organization)
  return (
    <>
      <Box sx={{ mt: "-80px" }}>
        <Grid container>
          <Grid item xs={6} sm={6}>
            <Box
              sx={{
                "& .MuiTextField-root": { m: 1 },
                marginTop: "60px"
              }}
            >
              <Typography sx={{ ml: "20px" }}>Profile Information</Typography>
              <form>
                <Box>
                  <div
                    style={{
                      justifyContent: "space-between",
                      marginTop: "10px"
                    }}
                  >
                    <TextField
                      fullWidth
                      disabled
                      id="outlined-required"
                      type="text"
                      name="first_name"
                      value={profileData.first_name}
                    />
                    <TextField
                      fullWidth
                      disabled
                      id="outlined-required"
                      type="text"
                      name="last_name"
                      value={profileData.last_name}
                    />
                    <TextField
                      disabled
                      fullWidth
                      id="outlined-required"
                      type="text"
                      name="phone"
                      value={profileData.phone}
                      />
                  </div>
                  <div style={{ marginTop: "10px" }}>
                    <TextField
                      fullWidth
                      disabled
                      id="outlined-required"
                      type="text"
                      name=" country"
                      value={profileData.country}
                      />
                    <TextField
                      disabled
                      fullWidth
                      id="outlined-required"
                      name="location"
                      value={profileData.location}
                      type="text"
                      />
                    <TextField
                      disabled
                      fullWidth
                      id="outlined-required"
                      type="text"
                      name="postal_address"
                      value={profileData.postal_address}
                     />
                  </div>

                  <div style={{ marginTop: "10px" }}>
                    <TextField
                      disabled
                      fullWidth
                      id="outlined-required"
                      type="email"
                      name="email"
                      value={profileData.email}
                      />
                  </div>
                  <div style={{ marginTop: "10px", display: "flex" }}>
                  <TextField
                      disabled
                      fullWidth
                      id="outlined-required"
                      type="email"
                      name="email"
                      value={organization.name}
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
                        variant="contained"
                        sx={{ color: "white" }}
                        href="./updateProfile"
                      >
                        Click to Update
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
                <Typography
                  sx={{ color: "green", ml: "10px", fontSize: "15px" }}
                >
                  {profileData.first_name}
                </Typography>
              </Typography>
              <Typography sx={{ mt: "10px", display: "flex" }}>
                Last Name:
                <Typography
                  sx={{ color: "green", ml: "10px", fontSize: "15px" }}
                >
                  {profileData.last_name}
                </Typography>
              </Typography>
              <Typography sx={{ mt: "10px", display: "flex" }}>
                Phone Number:
                <Typography
                  sx={{ color: "green", ml: "10px", fontSize: "15px" }}
                >
                  {profileData.phone}
                </Typography>
              </Typography>
              <Typography sx={{ mt: "10px", display: "flex" }}>
                Country:
                <Typography
                  sx={{ color: "green", ml: "10px", fontSize: "15px" }}
                >
                  {profileData.country}
                </Typography>
              </Typography>
              <Typography sx={{ mt: "10px", display: "flex" }}>
                Location:
                <Typography
                  sx={{ color: "green", ml: "10px", fontSize: "15px" }}
                >
                  {profileData.location}
                </Typography>
              </Typography>
              <Typography sx={{ mt: "10px", display: "flex" }}>
                Address:
                <Typography
                  sx={{ color: "green", ml: "10px", fontSize: "15px" }}
                >
                  {profileData.postal_address}
                </Typography>
              </Typography>
              <Typography sx={{ mt: "10px", display: "flex" }}>
                Company Email:
                <Typography
                  sx={{ color: "green", ml: "10px", fontSize: "15px" }}
                >
                  {profileData.email}
                </Typography>
              </Typography>
              <Typography sx={{ mt: "10px", display: "flex" }}>
                Job Role:
                <Typography
                  sx={{ color: "green", ml: "10px", fontSize: "15px" }}
                >
                  {profileData.role}
                </Typography>
              </Typography>
              <Typography sx={{ mt: "10px", display: "flex" }}>
                Organization:
                <Typography
                  sx={{ color: "green", ml: "10px", fontSize: "15px" }}
                >
                  {organization.name} Company
                </Typography>
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
