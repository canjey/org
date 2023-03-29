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
import { useSelector, useDispatch } from "react-redux";
import { fetchService, deleteServices } from "../../store/services/slice.js";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import Modal from "@mui/material/Modal";
import UpdateServiceForm from "./UpdateServices.js";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
// Modal Style

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4
};

export default function AboutService() {
  const [open, setOpen] = React.useState(false);
  const [formOpen, setFormOpen] = React.useState(false);
  const token = localStorage.getItem("token");
  const { id } = useParams();
  const dispatch = useDispatch();
  const handleFormOpen = () => setFormOpen(true);
  const handleFormClose = () => setFormOpen(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  const service = useSelector((state) => state.services.service);
  const [serviceData, setServiceData] = useState([]);
  useEffect(() => {
    dispatch(fetchService(id));
  }, []);

  const handleDelete = (id) => {
    setOpen(true);
    dispatch(deleteServices(id));
  };

  console.log(service.id);

  return (
    <>
      <Box sx={{ ml: "5%", mt: "5%", display: "flex", flexWrap: "wrap" }}>
        <Link style={{ textDecoration: "none" }}>
          <Card sx={{ width: 600, mt: "10px", ml: "10px" }}>
            <CardMedia
              sx={{ height: 140 }}
              image="bot.png"
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h4" component="div">
                {service.name}
              </Typography>
              <Typography variant="h6">
                {" "}
                Description: {service.description}
              </Typography>
              <Typography variant="h6">
                {" "}
                Price: {service.description}
              </Typography>
              <Typography variant="h6">
                {" "}
                Warranty: {service.description}
              </Typography>
              <Typography variant="h6">
                {" "}
                Supported No of Users: {service.description}
              </Typography>
              <Typography variant="body2" color="text.secondary"></Typography>
            </CardContent>
            <CardActions>
              <Button onClick={() => handleDelete(service.id)}>
                Delete Service
              </Button>
              <Snackbar
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
              >
                <Alert
                  onClose={handleClose}
                  severity="success"
                  sx={{ width: "100%" }}
                >
                  Service Deleted Successfully
                </Alert>
              </Snackbar>
              <Button onClick={handleFormOpen}>
                <AddCircleIcon sx={{ color: "blue" }} />
                <Typography> Update Service </Typography>
              </Button>
              <Modal
                open={formOpen}
                onClose={handleFormClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <UpdateServiceForm />
                </Box>
              </Modal>
            </CardActions>
          </Card>
        </Link>
      </Box>
    </>
  );
}
