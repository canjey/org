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
import axiosInstance from "../../axios.js";
import Modal from "@mui/material/Modal";
import { useSelector, useDispatch } from 'react-redux'
import {fetchService} from '../../store/services/slice.js'
import { postServices } from "../../store/services/slice.js";
import { Link, useParams } from "react-router-dom";


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
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const id = useParams();

  // Modal Code
 
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // Redux
  const dispatch = useDispatch();
  const user = useSelector(
    (state) => state.user.user
  );
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(
      postServices({name, description})

    )
  }
  const [serviceData, setServiceData] = useState([]);

  
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
          <Typography sx={{ ml: "20px" }}>Update Service Form</Typography>
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
                  value={name}
                  // onChange={(e) => setName(e.target.value)}
                />
                <TextField
                  fullWidth
                  required
                  id="outlined-required"
                  label="Service Description"
                  type="text"
                  name="description"
                  value={description}
                  // onChange={(e) => setDescription(e.target.value)}
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
     
    </Grid>
  </Box>
  );
}
