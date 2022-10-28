import * as React from 'react';
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";



export default function AboutPage(){
    return(
        <>
        <Box>
        <Typography>
            Wakini & Sons
        </Typography>
        <Box sx={{ marginTop: "30px" }}>
            <Grid container rowSpacing={1} spacing={{ xs: 1, sm: 3, md: 1 }}>
              <Grid item xs={6} sm={6} md={3}>
                <Card
                  sx={{
                    maxWidth: 275,
                    height: 120,
                    width: 271,
                    borderRadius: 5
                  }}
                >
                  <CardContent>
                    <Typography
                      sx={{ fontSize: 14 }}
                      color="text.secondary"
                      gutterBottom
                    >
                      Total Services
                    </Typography>
                    <Typography
                      variant="h5"
                      component="div"
                      sx={{ display: "flex" }}
                    >
                      32
                      <Typography
                        sx={{
                          mb: 1.5,
                          width: "100px",
                          fontFamily: "inter",
                          backgroundColor: "#CAFFC9",
                          textAlign: "center",
                          borderRadius: "10px",
                          marginLeft: "30px"
                        }}
                        color="text.secondary"
                      >
                        +2.6%
                      </Typography>
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              </Grid>
              </Box>
              </Box>
        </>
    )
}