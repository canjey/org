import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Avatar from "@mui/material/Avatar";
import SearchIcon from "@mui/icons-material/Search";
import {
  alpha,
  createTheme,
  styled,
  ThemeProvider
} from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import Box from "@mui/material/Box";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import DownloadIcon from "@mui/icons-material/Download";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { useState, useEffect } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import SystemUpdateIcon from "@mui/icons-material/SystemUpdate";
import { actions } from "../../store/organizations";
import { useSelector, useDispatch } from "react-redux";
import Modal from '@mui/material/Modal';
import OrganizationForm from '../AddOrganization/OrganizationForm'

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  borderStyle: "groove",
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25)
  },
  marginLeft: 0,
  marginTop: "10px",
  width: "100%",
  height: 50,
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1)
    // width: 'auto',
  }
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch"
      }
    }
  }
}));

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

export default function OrgTable() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const dispatch = useDispatch();
  const organizations = useSelector(
    (state) => state.organizations.organizations
  );
  useEffect(() => {
    dispatch(actions.fetchOrganizations());
  }, []);
  return (
    <>
      <Box>
        <Grid container columns={12} rowSpacing={2} columnSpacing={1}>
          <Grid item sm={8} md={10}>
            <Typography
              align="left"
              sx={{
                marginTop: "10px",
                padding: "10px",
                display: "flex",
                fontFamily: "inter"
              }}
            >
              All Organizations
            </Typography>
          </Grid>
          <Grid item sm={4} md={2} sx={{ marginTop: "20px" }}>
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
                <OrganizationForm/>
              </Box>
            </Modal>
          </Grid>
        </Grid>

        <Grid container justifyContent={"space-between"}>
          <Grid item xs={12} sm={11} md={6}>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
          </Grid>
          <Grid
            item
            xs={12}
            md={5}
            sx={{ marginTop: "20px", marginLeft: "10px" }}
          >
            <Button
              sx={{ marginX: "1rem" }}
              size={"medium"}
              variant={"outlined"}
              startIcon={<FilterAltIcon sx={{ width: "20px" }} />}
            >
              Filter
            </Button>
            <Button
              sx={{ marginX: "1rem" }}
              size={"medium"}
              variant={"outlined"}
              startIcon={<AttachFileIcon sx={{ width: "20px" }} />}
            >
              Attachment
            </Button>
            <Button
              sx={{ marginX: "1rem" }}
              size={"medium"}
              variant={"outlined"}
              startIcon={<FilterAltIcon sx={{ width: "20px" }} />}
            >
              Download
            </Button>
          </Grid>
        </Grid>

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
                  {organizations.map((row) => (
                    <TableRow key={row.id}>
                      <Link
                        to={`/organizations/${row.id}/`}
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
                          <Typography sx={{ padding: "2px" }}>
                            {row.name}
                            <Typography
                              sx={{
                                color: "#9F9595",
                                fontSize: "10px",
                                textAlign: "right"
                              }}
                            >
                              {row.email}
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
                          <Link>
                            <DeleteIcon />
                          </Link>
                          <SystemUpdateIcon />
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
