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
import axiosInstance from "../../../axios.js";
import Modal from "@mui/material/Modal";
import UpdateProfilePage from "./UpdateProfilePage.js";
import { useSelector, useDispatch } from 'react-redux'
import {fetchUser} from '../../../store/user/slice.js'


const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4
};

export default function ProfilePage() {
  const [profileData, setProfileData] = useState([]);
  const [organization, setOrganization] = useState([]);
  const [message, setMessage] = useState("");
  const token = localStorage.getItem("token");

  // Modal Code
 
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // Redux
  const dispatch = useDispatch();
  const user = useSelector(
    (state) => state.user.user
  )
  const [serviceData, setServiceData] = useState([]);

  useEffect(() => {
    dispatch(
      fetchUser()
    )
  }, []);
 
  useEffect(() => {
    fetch(
      "http://m-subscribe-dev.eba-kpdc2e68.eu-central-1.elasticbeanstalk.com/accounts/users/organization",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${token}`
        }
      }
    )
      .then((response) => response.json())
      .then((data) => {
        setOrganization(data.data);
      });
  }, []);
  if (!user){
    return null
  }
  console.log(user.first_name);
  console.log(organization);
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
                      id="standard-disabled"
                      value={user.first_name}
                    />
                    <TextField
                      fullWidth
                      disabled
                      id="outlined-required"
                      type="text"
                      name="last_name"
                      value={user.last_name}
                    />
                    <TextField
                      disabled
                      fullWidth
                      id="outlined-required"
                      type="text"
                      name="phone"
                      value={user.phone}
                    />
                  </div>
                  <div style={{ marginTop: "10px" }}>
                    <TextField
                      fullWidth
                      disabled
                      id="outlined-required"
                      type="text"
                      name=" country"
                      value={user.country}
                    />
                    <TextField
                      disabled
                      fullWidth
                      id="outlined-required"
                      name="location"
                      value={user.location}
                      type="text"
                    />
                    <TextField
                      disabled
                      fullWidth
                      id="outlined-required"
                      type="text"
                      name="postal_address"
                      value={user.postal_address}
                    />
                  </div>

                  <div style={{ marginTop: "10px" }}>
                    <TextField
                      disabled
                      fullWidth
                      id="outlined-required"
                      type="email"
                      name="email"
                      value={user.email}
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
                      <Button onClick={handleOpen}>Click to Update</Button>
                      <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                      >
                        <Box sx={style}>
                          <UpdateProfilePage />
                        </Box>
                      </Modal>
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
