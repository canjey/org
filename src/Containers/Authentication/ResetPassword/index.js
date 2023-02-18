import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { useState, useEffect } from "react";



export default function ResetPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [details, setDetails] = useState();
  const [otp, setOtp] = useState("");
  const [password, setPassword] = useState("");
  const [password1, setPassword1] = useState("");
  const [email1, setEmail1] = useState("");
  const [otpdetails, setOtpDetails] = useState(false);
  const [error, setError] = useState(false);

  const handleOtp = (e) =>{
    let res = fetch(
      "http://m-subscribe-dev.eba-kpdc2e68.eu-central-1.elasticbeanstalk.com/accounts/reset-password",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email: email
        })        
      }
    )
    .then(response => response.json())
    .then((data) => {
        if(data.otp_code){
            setOtpDetails(true);
            setError(false)
        }
        setError(true)
   })

  }
  const handleSubmit = (e) => {
    e.preventDefault();
    let res = fetch(
      "http://m-subscribe-dev.eba-kpdc2e68.eu-central-1.elasticbeanstalk.com/accounts/change-password",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email: email,
          otp:otp,
          password:password,
          password1:password1
        })
        
      }
    )
    .then(response => response.json())
    .then(data =>{
        console.log(data);
        if(data.email){
            window.location.href='/login'
            alert("Password Changed Successfully")
        }
        
    })
    

  }
   

  return (
    <>
      <Box>
        <Box>
          <form onSubmit={handleSubmit}>
            <Grid container>
              <Grid item md={6} sx={{ padding: "5%" }}>              
                <Typography variant="h4">Forgot Password?</Typography>
                <Typography variant="h6" sx={{ marginTop: "10px" }}>
                  Enter your Email below to send OTP
                </Typography>
                <div className="error" style={{display: error ? 'block' : 'none' }}>
                    <Typography variant='h6' sx={{color:'red', fontSize:10}}> Email Address is Empty </Typography></div>
                <TextField
                  required
                  type="email"
                  name="email"
                  id="outlined-required"
                  label="Email Address"
                  onChange={(e) => {
                    setEmail(e.target.value)
                    setError(false)                
                }}
                  fullWidth
                  sx={{ marginTop: "30px" }}
                />

                <Button
                  onClick={handleOtp}
                  type="submit"
                  variant="contained"
                  fullWidth
                  sx={{ marginTop: "30px" }}
                >
                  send OTP
                </Button>
                <div className="ResetPassword" style={{display: otpdetails ? 'block' : 'none' }}>
                  <TextField
                    required
                    name='otp'
                    id="outlined-required"
                    type="text"
                    label="Enter OTP"
                    onChange={(e) => setOtp(e.target.value)}
                    fullWidth
                    sx={{ marginTop: "30px" }}
                  />
                  <TextField
                    required
                    name='password'
                    id="outlined-required"
                    type="password"
                    label="New Password"
                    fullWidth
                    onChange={(e) => setPassword(e.target.value)}
                    sx={{ marginTop: "30px" }}
                  />
                  <TextField
                    required
                    name='password1'
                    id="outlined-required"
                    type="password"
                    label="Repeat Password"
                    fullWidth
                    onChange={(e) => setPassword1(e.target.value)}
                    sx={{ marginTop: "30px" }}
                  />
                  <Button
                    type="submit"
                    variant="contained"
                    fullWidth
                    sx={{ marginTop: "30px" }}
                  >
                    change Password
                  </Button>
                </div>
              </Grid>

              <Grid item md={6}>
                <img src="Forgot password.svg" />
              </Grid>
            </Grid>
          </form>
        </Box>
      </Box>
    </>
  );
}
