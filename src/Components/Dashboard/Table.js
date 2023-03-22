import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Modal from '@mui/material/Modal';
import OrganizationForm from '../AddOrganization/OrganizationForm'
import Button from "@mui/material/Button";
import { actions } from "../../store/organizations";
import { useSelector, useDispatch } from "react-redux";



// Modal Styling

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

const OrgTable = () => {
  const organization = useSelector((state) => state);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const dispatch = useDispatch();

  const organizations = useSelector(
    (state) => state.organizations.organizations
  );
 console.log(organizations);
  useEffect(() => {
    dispatch(actions.fetchOrganizations());
  }, []);

  return (
    <>  
      <Box component="main" sx={{ mt: "-10px" }}>
        <Box>
          <Typography
            align="left"
            variant="h5"
            sx={{
              marginTop: "5px",
              padding: "10px",
              display: "flex",
              justifyContent: "space-between"
            }}
          >
            Organization Available
            <Typography
              align="left"
              sx={{
                marginTop: "-10px",
                padding: "10px",
                display: "flex",
                justifyContent: "space-between"
              }}
            >
              <Link to="./organizations" style={{ textDecoration: "none" }}>

                <Button>
                  <VisibilityOffIcon sx={{ color: "blue" }} />
                  <Typography> View All </Typography>
                </Button>
              </Link>

              <Button onClick={handleOpen}>
                <AddCircleIcon sx={{ color: "blue" }} />
                <Typography> Add Organization </Typography>
              </Button>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <OrganizationForm />
                </Box>
              </Modal>
            </Typography>
          </Typography>
        </Box>
        <TableContainer component={Paper} sx={{ mt: "-10px" }}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell md={4} xs={4} sm={4}>
                  Organization Name
                </TableCell>
                <TableCell md={4} xs={4} align="right">
                  Organization Location
                </TableCell>
                <TableCell md={4} xs={4} align="right">
                  Organization Phone Number
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {organizations.map((organizations) => (
                <TableRow key={organizations.id}>
                  <Link
                    to={`/organizations/${organizations.id}/`}
                    style={{ textDecoration: "none" }}
                  >
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
                      <Typography>
                        {organizations.name}
                        <Typography sx={{ color: "#9F9595", fontSize: "10px" }}>
                          {organizations.email}
                        </Typography>
                      </Typography>
                    </TableCell>
                  </Link>

                  <TableCell align="right">{organizations.location}</TableCell>
                  <TableCell align="right" sx={{ textAlign: "right" }}>
                    {organizations.phone}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
};

export default OrgTable;
