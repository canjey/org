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
      <div style={{justifyContent:'space-between', marginTop:'10px'}}>
        <TextField
          required
          id="outlined-required"
          label="Company Name"
          sx={{width:500}}
        />
        <TextField
          required
          id="outlined-required"
          label="No of Users"
          
        />
       
      </div>
      <div style={{marginTop:'10px'}}>
        <TextField
          required
          id="outlined-required"
          label="Country"
          
        />
        <TextField
          required
          id="outlined-required"
          label="Location"
          
        />
        <TextField
          required
          id="outlined-required"
          label="Address"
          
        />
      </div>

      <div style={{marginTop:'10px'}}>
        <TextField
          required fullWidth
          id="outlined-required"
          label="Company Email Address"
          
        />
     </div>
     <div style={{marginTop:'10px'}}>
        <TextField fullWidth
          required
          id="outlined-required"
          label="Company Description"
          
        />
     </div>
     <div style={{marginTop:'10px'}}>
        <TextField
          required
          id="outlined-required"
          label="Document Name"
          
        />
        <TextField
          required
          id="outlined-required"
          label="Document Description"
          
        />
        <Button variant="contained" sx={{color:'white', marginTop:'20px'}}>Upload</Button>
        

       
      </div>
      <div style={{marginTop:'10px'}}>
        <TextField
          required
          id="outlined-required"
          label="Company Name"
          
        />
        <TextField
          required
          id="outlined-required"
          label="Company Name"
          
        />
        <TextField
          required
          id="outlined-required"
          label="Company Name"
          
        />
      </div>
      <div style={{display:'flex', justifyContent:'space-between'}}>
        <div>
      <Button variant="contained" sx={{color:'black', backgroundColor:'#E8F0FD'}}>Cancel</Button>
      </div>
      <div>
      <Button variant="contained" sx={{color:'white'}}>Save & Continue</Button>
      </div>
      </div>
    </Box>
    </Box>
    </Box>
  );
}
