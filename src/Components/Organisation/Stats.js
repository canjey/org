import * as React from 'react';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';


const theme = createTheme({
  typography: {
    fontFamily: 'inter',
    fontSize: '30px'
  },
})

export default function Stats() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Box
          component="main"
          sx={{flexGrow: 1, bgcolor: 'background.default', p: 3, marginLeft: '250px'}}
        >
          <Toolbar/>
          <Typography component='h4' sx={{fontFamily: 'inter', fontSize: '25px'}}>
            Organization Manager
          </Typography>

          <Box sx={{marginTop: '30px'}}>
            <Grid container spacing={36}>
              <Grid item xs={2}>
                <Card sx={{maxWidth: 275, height: 120, width: 271, borderRadius: 5}}>
                  <CardContent>
                    <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
                      Total Services
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
              <Grid item xs={2}>
                <Card sx={{maxWidth: 275, height: 120, width: 271, borderRadius: 5}}>
                  <CardContent>
                    <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
                      Total Organisations
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
              <Grid item xs={2}>
                <Card sx={{maxWidth: 275, height: 120, width: 271, borderRadius: 5}}>
                  <CardContent>
                    <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
                      Total Earnings
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
              <Grid item xs={2}>
                <Card sx={{maxWidth: 275, height: 120, width: 271, borderRadius: 5}}>
                  <CardContent>
                    <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
                      New Organisations
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
                    <img src='Temp2.png'/>
                  </CardContent>

                </Card>
              </Grid>
              <Grid item xs={2}>
                <Card sx={{minWidth: 275, width: 300, height: 300}}>
                  <CardContent>
                    <img src='Temp3.png'/>
                  </CardContent>

                </Card>
              </Grid>
            </Grid>
          </Box>
          <Box sx={{marginTop: '20px'}}>

          </Box>

        </Box>
      </ThemeProvider>
    </>
  )

}
