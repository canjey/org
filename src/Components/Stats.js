import * as React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Paper from "@material-ui/core/Paper";
import {
  LineChart,
  BarChart,
  Line,
  Bar,
  Tooltip,
  Legend,
  CartesianGrid,
  XAxis,
  YAxis
} from "recharts";

import {
  ArgumentAxis,
  ValueAxis,
  Chart,
  BarSeries,
  PieSeries,
  Title
} from "@devexpress/dx-react-chart-material-ui";

export default function Stats() {
  const data1 = [
    { argument: "Monday", value: 30 },
    { argument: "Tuesday", value: 20 },
    { argument: "Wednesday", value: 10 },
    { argument: "Thursday", value: 50 },
    { argument: "Friday", value: 60 }
  ];
  const data = [{ name: "A", uv: 400, pv: 2400, amt: 2400 }, { name: "B", uv: 200, pv: 1200, amt: 2400 },
  { name: "C", uv: 600, pv: 2400, amt: 240 },  { name: "D", uv: 100, pv: 200, amt: 200 }];

  return (
    <>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 3, ml: "-20px" }}
      >
        <Toolbar />
        <Typography variant="h5" sx={{ fontFamily: "inter", mt: "-80px" }}>
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
                    Active Services
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
            <Grid item xs={16} md={6} sm={12}>
              <LineChart
                width={600}
                height={300}
                data={data}
                margin={{ top: 5, right: 20, bottom: 5, left: 0, fontFamily:'inter', fontSize:10 }}
              >
                <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                <Line type="monotone" dataKey="pv" stroke="#FF84d8" />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <XAxis dataKey="name" />
                <YAxis />
              </LineChart>
            </Grid>
            <Grid item xs={16} md={4} sm={12}>
              <BarChart width={600} height={350} data={data}>
                <XAxis dataKey="name" stroke="#8884d8" />
                <YAxis />
                <Tooltip
                  wrapperStyle={{ width: 100, backgroundColor: "#ccc" }}
                />
                <Legend
                  width={100}
                  wrapperStyle={{
                    top: 40,
                    right: 20,
                    backgroundColor: "#f5f5f5",
                    border: "1px solid #d5d5d5",
                    borderRadius: 3,
                    lineHeight: "40px"
                  }}
                />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <Bar dataKey="uv" fill="#8884d8" barSize={30} />
                <Bar dataKey="pv" fill="#FF84d8" barSize={30} />

              </BarChart>
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ marginTop: "2px" }}></Box>
      </Box>
    </>
  );
}
