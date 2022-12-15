import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

export default function LoginPage() {
  return (
    <>
      <Box>
        <Grid container>
          <Grid item xs={6}>
            <Typography variant="h4">
              Welcome. Please Enter Your Details
            </Typography>

            <TextField
              required
              id="outlined-required"
              label="Required"
              defaultValue="Email Address"
            />
             <TextField
          id="filled-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="filled"
        />
          </Grid>
          <Grid item xs={6}></Grid>
        </Grid>
      </Box>
    </>
  );
}
