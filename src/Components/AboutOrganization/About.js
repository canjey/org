import * as React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ServiceTable from "./Services.js";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { useDispatch } from "react-redux";
import { deleteOrganizations } from "../../store/organizations/actions.js";
import UserTable from "./Users/Users.js";


export default function Stats() {
  const [orgDetails, setOrgDetails] = useState({});
  const { id } = useParams();
  const token = localStorage.getItem("token");
  const [value, setValue] = useState(0);
  const [table, setTable] = useState(true);
   const [activeTab, setActiveTab] = useState("services");

  const dispatch = useDispatch();

  const handleChange = (event, newValue) => {
    setActiveTab(newValue);
  };
  const handleDelete = () => {
    dispatch(
      deleteOrganizations(id)

    )
  }



  const data = [
    { name: "Total Users", number: orgDetails.total_users, percentile: "+1.2%",},
    {
      name: "Total Services",
      number: orgDetails.total_services,

    },
    {
      name: "Total Earnings",
      number: orgDetails.total_earnings,

    },
    {
      name: "Amount Due",
      number: orgDetails.amount_due,

    }
  ];

  useEffect(() => {
    fetch(
      `http://m-subscribe-dev.eba-kpdc2e68.eu-central-1.elasticbeanstalk.com/organizations/organizations/${id}/`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${token}`
        }
      }
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then((data) => {
        setOrgDetails(data);
      });
  }, []);
  console.log(orgDetails.services);
  return (
    <>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 3, ml: "-20px" }}
      >
        <Toolbar />
        <Grid container sx={{ fontFamily: "inter", mt: "-80px" }}>
          <Grid item xs={10}>
            <Typography variant="h4" >
              {orgDetails.name} Account
            </Typography>
          </Grid>
          <Grid item xs={2}><Typography>
            <Button onClick={() => handleDelete(id)}>
              <DeleteOutlineOutlinedIcon fontSize="medium" /> Delete Organization</Button></Typography></Grid>

        </Grid>

        <Box sx={{ marginTop: "30px" }}>
          <Grid container rowSpacing={2} columns={16} columnSpacing={4}>
            {data.map((data) => (
              <Grid item xs={16} md={4} sm={8}>
                <Card
                  sx={{
                    maxWidth: 275,
                    height: 120,
                    width: "100%",
                    borderRadius: 5
                  }}
                >
                  <CardContent sx={{ padding: "10px" }}>
                    <Typography
                      sx={{ fontSize: 14 }}
                      color="text.secondary"
                      gutterBottom
                    >
                      {data.name}
                    </Typography>
                    <Typography
                      variant="h5"
                      component="div"
                      sx={{ display: "flex" }}
                    >
                      {data.number}
                      
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
          <Typography component="p" sx={{ marginTop: "40px" }}>
            {orgDetails.description}
          </Typography>
          <Grid container sx={{ marginTop: "20px" }}>
            <Grid
              item
              xs={12}
              md={10}
              sx={{ display: "flex", justifyContent: "space-evenly" }}
            >
              <Tabs
                value={activeTab}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons="auto"
                aria-label="scrollable auto tabs example"
              >
                <Tab value="services" label=" Subscribed Services" />
                <Tab value="users" label="Users" />
                <Tab value="invoices" label="Invoices" />
              </Tabs>
            </Grid>
          </Grid>
        </Box>

        <Box sx={{ marginTop: "20px" }} style={{ display: activeTab == "services" ? 'block' : 'none' }}>

          <ServiceTable services={orgDetails.services} />

        </Box>
        <Box sx={{ marginTop: "20px" }} style={{ display: activeTab == "users" ? 'block' : 'none' }}>
          <UserTable />
        </Box>
        <Box sx={{ marginTop: "20px" }} style={{ display: activeTab == "invoices" ? 'block' : 'none' }}>


          <h1>Invoice</h1>

        </Box>
      </Box>
    </>
  );
}
