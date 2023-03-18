import * as React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import DownloadIcon from "@mui/icons-material/Download";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import OrganizationUsers from "../../Containers/OrganizationUsers/index.js";
import ServiceTable from "./Services.js";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

function handleUsers() {
  return <OrganizationUsers />;
}

function handleServices() {
  return <ServiceTable />;
}

export default function Stats() {
  const [orgDetails, setOrgDetails] = useState([]);
  const { id } = useParams();
  const token = localStorage.getItem("token");
  const [value, setValue] = useState(0);
  const [table, setTable] = useState(true);
  const [tableData, setTableData] = useState("");

  const handleChange = (event, newValue) => {
    setValue(newValue);
    handleDisplay()    
  };

  const handleDisplay =(e)=>{
    e.preventDefault(false)
    if (value===0)
    {
      window.location.href=`/organizations/${id}/services`

    }
    else if(value==1)
    {
      window.location.href=`/organizations/${id}/users`
      setTable(false)
    }
    else if(value==2)
    {
      window.location.href=`/organizations/${id}/invoices`;
      setTable(false)

    }

  }
  console.log(table)
  console.log(value)

  const data = [
    { name: "Total Users", number: 30, percentile: "+1.2%", color: "#CAFFC9" },
    {
      name: "Total Services",
      number: 25,
      percentile: "-0.2%",
      color: "#FBC9FF"
    },
    {
      name: "Total Earnings",
      number: 10000,
      percentile: "+18.2%",
      color: "#CAFFC9"
    },
    {
      name: "Total Balance",
      number: 3000,
      percentile: "+10.2%",
      color: "#CAFFC9"
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
        <Typography variant="h4" sx={{ fontFamily: "inter", mt: "-80px" }}>
          {orgDetails.name} Account
        </Typography>
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
                      <Typography
                        sx={{
                          mb: 1.5,
                          width: "100px",
                          fontFamily: "inter",
                          backgroundColor: data.color,
                          textAlign: "center",
                          borderRadius: "10px",
                          marginLeft: "30px"
                        }}
                        color="text.secondary"
                      >
                        {data.percentile}
                      </Typography>
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
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs example"
      >
                <Tab value="services" label=" Subscribed Services" />
                <Tab label="Users" onClick={handleUsers()}/>
                <Tab label="Invoices" />
              </Tabs>
            </Grid>
          </Grid>
        </Box>

        <Box sx={{ marginTop: "20px" }} style={{display: table ? 'block' : 'none' }}>
          
          <ServiceTable />
        </Box>
      </Box>
      {/* <ServiceTable services={orgDetails.services} /> */}
    </>
  );
}
