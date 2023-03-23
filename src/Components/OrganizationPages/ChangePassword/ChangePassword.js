import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import axiosInstance from "../../../axios";
import { setChangedPassword } from "../../../store/user/slice";
import { useDispatch } from "react-redux";

export default function ChangePassword() {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [old_password, setOldPassword] = useState("");
  const [password, setPassword] = useState("");
  const [password1, setPassword1] = useState("");
  const [message, setMessage] = useState("");
  const [details, setDetails] = useState(false);
  const [passwordDetails, setPasswordDetails] = useState("");
  const [user, setUser] = useState("");
  const token = localStorage.getItem("token");

  useEffect(() => {
    fetch(
      `http://m-subscribe-dev.eba-kpdc2e68.eu-central-1.elasticbeanstalk.com/accounts/users/authenticated-user/`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${token}`
        }
      }
    )
      .then(response => response.json())
      .then(data => setUser(data.data.email))
    console.log(user)
  }, []);

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(
      setChangedPassword()
    )
  }
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    // let res = fetch(
    //   "http://m-subscribe-dev.eba-kpdc2e68.eu-central-1.elasticbeanstalk.com/accounts/change-password",
    //   {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json"
    //     },
    //     body: JSON.stringify({
    //       email: user,
    //       old_password: old_password,
    //       password: password,
    //       password1: password1
    //     })
    //   }
    // )
    //   .then((response) => response.json())
    //   .then((data) => {
    //     setPasswordDetails(data.email);
    //     if (data.email) {
    //       window.alert("Password Changed Successfully");
    //       window.location.href = "/";
    //     } 
    //     // window.alert("Invalid Data");

    //   });
    // setEmail("");
    // setOtp("");
    // setOldPassword("");
    // setPassword("");
    // setPassword1("");
  };
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
              <Typography sx={{ ml: "20px" }}>Change Password Form</Typography>
              <form onSubmit={handleSubmit}>
                <Box>
                  <div
                    style={{
                      justifyContent: "space-between",
                      marginTop: "10px"
                    }}
                  >
                    <TextField
                      fullWidth
                      required
                      id="outlined-required"
                      label="Email Address"
                      type="email"
                      name="email"
                      value={user}
                    />
                  </div>
                  <div className="fields">
                    <TextField
                      required
                      fullWidth
                      id="outlined-required"
                      label="Old Password"
                      name="old_password "
                      value={old_password}
                      type="password"
                      onChange={(e) => setOldPassword(e.target.value)}
                    />
                    <TextField
                      required
                      fullWidth
                      id="outlined-required"
                      label="New Password"
                      type="password"
                      name="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <TextField
                      required
                      fullWidth
                      id="outlined-required"
                      label="Repeat Password"
                      type="password"
                      name="password1"
                      value={password1}
                      onChange={(e) => setPassword1(e.target.value)}
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
                      <Link to="/" style={{ textDecoration: "none" }}>
                        <Button
                          variant="contained"
                          sx={{ color: "black", backgroundColor: "#E8F0FD" }}
                        >
                          Cancel
                        </Button>
                      </Link>
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
                Email Address:
                <Typography
                  sx={{ color: "green", ml: "10px", fontSize: "15px" }}
                >
                  {email}
                </Typography>
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
