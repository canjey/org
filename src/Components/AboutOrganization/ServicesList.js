import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { actions } from "../../store/organizations";
import { useSelector, useDispatch } from "react-redux";
import { fetchServices } from "../../store/services/slice.js";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import DeleteIcon from "@mui/icons-material/Delete";
import SystemUpdateIcon from "@mui/icons-material/SystemUpdate";
import Avatar from "@mui/material/Avatar";
import Modal from "@mui/material/Modal";
import AddServicesForm from "../Services/AddServices.js";
import AboutServices from "../Services/AboutServices.js";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";

// Modal Style

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4
};

function AboutService() {
  const [service, setService] = useState([]);
  const token = localStorage.getItem("token");
  const { id } = useParams;
  useEffect(() => {
    fetch(
      `http://m-subscribe-dev.eba-kpdc2e68.eu-central-1.elasticbeanstalk.com/services/services/${id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${token}`
        }
      }
    ).then((data) => {
      setService(data);
    });
  }, []);
  console.log(service);
  return <>hi</>;
}

export default function ServiceLists() {
  // Modal
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // Redux
  const dispatch = useDispatch();
  const services = useSelector((state) => state.services.services);
  const [serviceData, setServiceData] = useState([]);
  const token = localStorage.getItem("token");
  useEffect(() => {
    dispatch(fetchServices());
  }, []);
  console.log(serviceData);
  return (
    <>
      <Box sx={{ mt: "5px", display: "flex", flexWrap: "wrap" }}>
        <Grid container>
          <Grid item sm={12}>
            <TableContainer component={Paper} sx={{ marginTop: "10px" }}>
              <Table sx={{ boxShadow: "1" }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell align="right">Date</TableCell>
                    <TableCell align="right">Amount Due</TableCell>
                    <TableCell align="right">Service</TableCell>
                    <TableCell align="right">Status</TableCell>
                    <TableCell align="right">Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {/* <Button onClick={handleOpen}>
                    <AddCircleIcon sx={{ color: "blue" }} />
                    <Typography> Add services </Typography>
                  </Button> */}
                  <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                  >
                    <Box sx={style}>
                      <AddServicesForm />
                    </Box>
                  </Modal>
                  {services.map((services) => (
                    <TableRow key={services.id}>
                      <Link
                        // onClick={handleOpen}
                        to={`/services/services/${services.id}/`}
                        style={{ textDecoration: "none" }}
                      >
                        <Modal
                          open={open}
                          onClose={handleClose}
                          aria-labelledby="modal-modal-title"
                          aria-describedby="modal-modal-description"
                        >
                          <Box sx={style}>
                            <AboutServices />
                          </Box>
                        </Modal>
                        <TableCell
                          component="th"
                          scope="row"
                          sx={{ display: "flex" }}
                        >
                          <Avatar
                            alt="Remy Sharp"
                            src="profile.jpg"
                            sx={{ mr: "10px" }}
                          />
                          <Typography sx={{ padding: "2px" }}>
                            {services.name}
                            <Typography
                              sx={{
                                color: "#9F9595",
                                fontSize: "10px",
                                textAlign: "right"
                              }}
                            >
                              {services.description}
                            </Typography>
                          </Typography>
                        </TableCell>
                      </Link>
                      <TableCell align="right">12/12/2022</TableCell>
                      <TableCell align="right">1100 /=</TableCell>
                      <TableCell align="right">4</TableCell>
                      <TableCell align="right">Active</TableCell>
                      <TableCell align="right">
                        {" "}
                        <Typography
                          component="p"
                          sx={{ float: "right", mt: "10px" }}
                        >
                          <Button>
                            <ShoppingCartOutlinedIcon />
                          </Button>
                          <Button size="medium">
                            <VisibilityOutlinedIcon fontSize="large" />
                            <Modal
                              open={open}
                              onClose={handleClose}
                              aria-labelledby="modal-modal-title"
                              aria-describedby="modal-modal-description"
                            >
                              <Box sx={style}>
                                <AboutServices />
                              </Box>
                            </Modal>
                          </Button>
                        </Typography>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
