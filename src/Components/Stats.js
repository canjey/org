import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import OrgTable from './Table';

export default function Stats() {
  return (
    <>
      <Box
        component="main"
        sx={{paddingLeft: "2rem"}}
      >
        <Toolbar/>
        <Typography component='h4' sx={{fontFamily: 'Montaga', fontSize: '30px'}}>
          Welcome Carol
        </Typography>
        <Typography component='p' sx={{fontFamily: 'inter', fontSize: '20px', color: 'green'}}>
          Here is what is happening in your account
        </Typography>

        <Box sx={{marginTop: '30px'}}>
          <Grid container spacing={1}>
            <Grid item xs={3}>
              <Card sx={{maxWidth: 275, height: 120, width: 271, borderRadius: 5}}>
                <CardContent>
                  <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
                    Subscribed Services
                  </Typography>
                  <Typography variant="h5" component="div" sx={{display: 'flex',}}>
                    32
                    <Typography sx={{
                      mb: 1.5,
                      width: '100px',
                      fontFamily: 'inter',
                      backgroundColor: '#CAFFC9',
                      textAlign: 'center',
                      borderRadius: '10px',
                      marginLeft: '30px'
                    }} color="text.secondary">
                      +2.6%
                    </Typography>
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card sx={{maxWidth: 275, height: 120, width: 271, borderRadius: 5}}>
                <CardContent>
                  <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
                    Subscribed Services
                  </Typography>
                  <Typography variant="h5" component="div" sx={{display: 'flex',}}>
                    32
                    <Typography sx={{
                      mb: 1.5,
                      width: '100px',
                      fontFamily: 'inter',
                      backgroundColor: '#FBC9FF',
                      textAlign: 'center',
                      borderRadius: '10px',
                      marginLeft: '30px'
                    }} color="text.secondary">
                      +2.6%
                    </Typography>
                  </Typography>


                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card sx={{maxWidth: 275, height: 120, width: 271, borderRadius: 5}}>
                <CardContent>
                  <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
                    Subscribed Services
                  </Typography>
                  <Typography variant="h5" component="div" sx={{display: 'flex',}}>
                    32
                    <Typography sx={{
                      mb: 1.5,
                      width: '100px',
                      fontFamily: 'inter',
                      backgroundColor: '#CAFFC9',
                      textAlign: 'center',
                      borderRadius: '10px',
                      marginLeft: '30px'
                    }} color="text.secondary">
                      +2.6%
                    </Typography>
                  </Typography>


                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card sx={{maxWidth: 275, height: 120, width: 271, borderRadius: 5}}>
                <CardContent>
                  <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
                    Subscribed Services
                  </Typography>
                  <Typography variant="h5" component="div" sx={{display: 'flex',}}>
                    32
                    <Typography sx={{
                      mb: 1.5,
                      width: '100px',
                      fontFamily: 'inter',
                      backgroundColor: '#59CDC6',
                      textAlign: 'center',
                      borderRadius: '10px',
                      marginLeft: '30px'
                    }} color="text.secondary">
                      +2.6%
                    </Typography>
                  </Typography>


                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
        <Box sx={{marginTop: '50px'}}>
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <Card sx={{minWidth: 275, width: 790, height: 300}}>
                <CardContent>
                  <img src='Temp.png'/>
                </CardContent>
                <CardActions>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card sx={{minWidth: 275, width: 300, height: 300}}>
                <CardContent>
                  <img src='Temp1.png'/>
                </CardContent>
                <CardActions>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
          <Box sx={{marginTop: '20px'}}>
            <OrgTable/>
          </Box>
        </Box>
      </Box>
    </>
  )

}
