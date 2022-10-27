import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Typography } from "@mui/material";
import Button from '@mui/material/Button';




export default function OrganizationForm() {
  return (
    <Box sx={{width:'1200px'}}>
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1 },
        marginLeft:'250px', marginTop:'100px'
      }}
      noValidate
      autoComplete="off"
    >
        <Typography>
            Add Organization Form
        </Typography>
        <Box>
      <div style={{justifyContent:'space-between'}}>
        <TextField
          required
          id="outlined-required"
          label="Company Name"
          defaultValue="Hello World"
          sx={{width:500}}
        />
        <TextField
          required
          id="outlined-required"
          label="No of Users"
          defaultValue="Hello World"
        />
       
      </div>
      <div style={{marginTop:'10px'}}>
        <TextField
          required
          id="outlined-required"
          label="Country"
          defaultValue="Kenya"
        />
        <TextField
          required
          id="outlined-required"
          label="Location"
          defaultValue="Nairobi.."
        />
        <TextField
          required
          id="outlined-required"
          label="Address"
          defaultValue="Hello World"
        />
      </div>

      <div style={{marginTop:'10px'}}>
        <TextField
          required fullWidth
          id="outlined-required"
          label="Company Email Address"
          defaultValue="Hello World"
        />
     </div>
     <div style={{marginTop:'10px'}}>
        <TextField fullWidth
          required
          id="outlined-required"
          label="Company Name"
          defaultValue="Hello World"
        />
     </div>
     <div style={{marginTop:'10px'}}>
        <TextField
          required
          id="outlined-required"
          label="Document Name"
          defaultValue="Hello World"
        />
        <TextField
          required
          id="outlined-required"
          label="Document Description"
          defaultValue="Hello World"
        />
        <Button variant="contained" sx={{color:'black', marginTop:'20px'}}>Upload</Button>
        

       
      </div>
      <div style={{marginTop:'10px'}}>
        <TextField
          required
          id="outlined-required"
          label="Company Name"
          defaultValue="Hello World"
        />
        <TextField
          required
          id="outlined-required"
          label="Company Name"
          defaultValue="Hello World"
        />
        <TextField
          required
          id="outlined-required"
          label="Company Name"
          defaultValue="Hello World"
        />
      </div>
      <div sx={{display:'flex', justifyContent:'space-between'}}>
        <div>
      <Button variant="contained" sx={{color:'black'}}>Cancel</Button>
      </div>
      <div>
      <Button variant="contained" sx={{color:'black', marginTop:'20px'}}>Save & Continue</Button>
      </div>
      </div>
    </Box>
    </Box>
    </Box>
  );
}
