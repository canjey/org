import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import NotificationsIcon from "@mui/icons-material/Notifications";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import OrgTable from "./Table";
import { Link } from "react-router-dom";

export default function Stats() {
  return (
    <>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          bgcolor: "background.default",
          p: 3,
          marginLeft: "250px"
        }}
      >
        <Toolbar />
        <Typography
          component="h4"
          sx={{ fontFamily: "Montaga", fontSize: "30px" }}
        >
          Welcome Carol
        </Typography>
        <Typography
          component="p"
          sx={{ fontFamily: "inter", fontSize: "16px", color: "green" }}
        >
          Here is what is happening in your account
        </Typography>

        <Box sx={{ marginTop: "30px" }}>
          <Grid container  rowSpacing={1} spacing={{xs:1, sm:3, md:1}}>
          <Grid item xs={6} sm={6} md={3}>
              <Card
                sx={{ maxWidth: 275, height: 120, width: 240, borderRadius: 5 }}
              >
                <CardContent>
                  <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    Subscribed Services
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
            <Grid item xs={6} sm={6} md={3}>
              <Card
                sx={{ maxWidth: 275, height: 120, width: 240, borderRadius: 5 }}
              >
                <CardContent>
                  <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    Subscribed Services
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
            <Grid item xs={6} sm={6} md={3}>
              <Card
                sx={{ maxWidth: 275, height: 120, width: 240, borderRadius: 5 }}
              >
                <CardContent>
                  <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    Subscribed Services
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
            <Grid item xs={6} sm={6} md={3}>
              <Card
                sx={{ maxWidth: 275, height: 120, width: 240, borderRadius: 5 }}
              >
                <CardContent>
                  <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    Subscribed Services
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
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={8} md={8} sm={12}>
              <Card sx={{ minWidth: 275, width: '100%', height: 300 }}>
                <CardContent>
                  <img src="Temp.png" />
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={2} md={2} sm={12}>
              <Card sx={{ minWidth: 275, width: '100%', height: 300 }}>
                <CardContent>
                  <img src="Temp1.png" style={{width:'100%'}} />
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ marginTop: "20px" }}>
          <OrgTable />
        </Box>
      </Box>
    </>
  );
}
