import * as React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Paper from "@material-ui/core/Paper";
import {
  ArgumentAxis,
  ValueAxis,
  Chart,
  BarSeries,
  PieSeries,
  Title
} from "@devexpress/dx-react-chart-material-ui";

export default function Stats() {
  const data = [
    { argument: "Monday", value: 30 },
    { argument: "Tuesday", value: 20 },
    { argument: "Wednesday", value: 10 },
    { argument: "Thursday", value: 50 },
    { argument: "Friday", value: 60 }
  ];

  return (
    <>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 3, ml: "-20px" }}
      >
        <Toolbar />
        <Typography component="h4" sx={{ fontFamily: "inter", mt: "-80px" }}>
          Organization Manager
        </Typography>
        <Box sx={{ marginTop: "20px" }}>
          <Grid
            container
            rowSpacing={2}
            columns={16}
            sx={{ paddingLeft: "10px" }}
          >
            <Grid item xs={16} md={3} sm={8}>
              <Card
                sx={{
                  maxWidth: 220,
                  height: 100,
                  width: "100%",
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
                  <Typography sx={{ display: "flex", textAlign: "center" }}>
                    <Typography
                      variant="h5"
                      component="div"
                      sx={{ textAlign: "center", ml: "10%" }}
                    >
                      32
                    </Typography>
                    <Typography
                      sx={{
                        mb: 1.5,
                        width: "100px",
                        fontFamily: "inter",
                        backgroundColor: "#CAFFC9",
                        textAlign: "center",
                        borderRadius: "10px",
                        marginLeft: "20px"
                      }}
                      color="text.secondary"
                    >
                      +2.6%
                    </Typography>
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={16} md={3} sm={8}>
              <Card
                sx={{
                  maxWidth: 220,
                  height: 100,
                  width: "100%",
                  borderRadius: 5
                }}
              >
                <CardContent>
                  <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    Total Organisations
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
                        backgroundColor: "#FBC9FF",
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
            <Grid item xs={16} md={3} sm={8}>
              <Card
                sx={{
                  maxWidth: 220,
                  height: 100,
                  width: "100%",
                  borderRadius: 5
                }}
              >
                <CardContent>
                  <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    Total Earnings
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
            <Grid item xs={16} md={3} sm={8}>
              <Card
                sx={{
                  maxWidth: 220,
                  height: 100,
                  width: "100%",
                  borderRadius: 5
                }}
              >
                <CardContent>
                  <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    New Organisations
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
                        backgroundColor: "#59CDC6",
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
            <Grid item xs={16} md={4} sm={8}>
              <Card
                sx={{
                  maxWidth: 250,
                  height: 100,
                  width: "100%",
                  borderRadius: 5
                }}
              >
                <CardContent>
                  <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    New Organisations
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
                        backgroundColor: "#59CDC6",
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

        <Box sx={{ marginTop: "50px" }}>
          <Grid container spacing={2}>
            <Grid item xs={16} md={8} sm={12}>
              <Paper sx={{ height: "60px" }}>
                <Chart data={data}>
                  <ArgumentAxis sx={{width:'20px'}} />
                  <ValueAxis />

                  <BarSeries valueField="value" argumentField="argument"  sx={{width:'20px'}}/>
                </Chart>
              </Paper>
            </Grid>
            <Grid item xs={16} md={4} sm={12}>
              <Paper>
                <Chart data={data}>
                  <PieSeries valueField="value" argumentField="argument" />
                  <Title text="Studies per week" />
                </Chart>
              </Paper>
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ marginTop: "20px" }}></Box>
      </Box>
    </>
  );
}
