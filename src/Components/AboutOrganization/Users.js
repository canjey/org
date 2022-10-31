import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {Typography} from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Avatar from "@mui/material/Avatar";
import SearchIcon from "@mui/icons-material/Search";
import {alpha, createTheme, styled, ThemeProvider} from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import Box from "@mui/material/Box";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import DownloadIcon from "@mui/icons-material/Download";
import {Link} from "react-router-dom";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import FilterAltIcon from "@mui/icons-material/FilterAlt";

function createData(name, calories, fat) {
  return {name, calories, fat};
}

const theme = createTheme({
  typography: {
    fontFamily: "inter",
    fontSize: "30px"
  },
  overflow: 'hidden'
});
const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9)
];

const Search = styled("div")(({theme}) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  borderStyle: "groove",
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25)
  },
  marginLeft: 0,
  marginTop: '10px',
  width: '100%',
  height: 50,
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1)
    // width: 'auto',
  }
}));

const SearchIconWrapper = styled("div")(({theme}) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
}));

const StyledInputBase = styled(InputBase)(({theme}) => ({
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

export default function UserTable() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Box>
          <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }} justifyContent={'space-between'}>
            
            <Grid item xs={12} md={10}>
              <Button sx={{marginX:"1rem"}} size={"medium"} variant={"outlined"} startIcon={<FilterAltIcon sx={{width: "20px"}}/>}>
                Subscribed Services
              </Button>
              <Button sx={{marginX:"1rem"}} size={"medium"} variant={"outlined"} startIcon={<AttachFileIcon sx={{width: "20px"}}/>}>
                Users
              </Button>
              <Button sx={{marginX:"1rem"}} size={"medium"} variant={"outlined"} startIcon={<FilterAltIcon sx={{width: "20px"}}/>}>
                Invoices
              </Button>
            </Grid>
          </Grid>
          <Grid item sm={4} md={12}>
              <Link to="./adduser" style={{textDecoration: "none"}}>
                <AddCircleIcon />
                  Add User
                
              </Link>
            </Grid>

          <Grid container>
            <Grid item sm={12}>
              <TableContainer component={Paper} sx={{marginTop: '10px'}}>
                <Table
                  sx={{boxShadow: "1"}}
                  aria-label="simple table"
                >
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
                    {rows.map((row) => (
                      <TableRow key={row.name}>
                        <Link to="./aboutpage" style={{textDecoration: "none"}}>
                          <TableCell
                            component="th"
                            scope="row"
                            sx={{display: "flex"}}
                          >
                            <Avatar
                              alt="Remy Sharp"
                              src="/static/images/avatar/1.jpg"
                            />
                            <Typography sx={{padding: "2px"}}>
                              {row.name}
                              <Typography
                                sx={{color: "#9F9595", fontSize: "10px"}}
                              >
                                {row.name}
                              </Typography>
                            </Typography>
                          </TableCell>
                        </Link>
                        <TableCell align="right">{row.calories}</TableCell>
                        <TableCell align="right">{row.fat}</TableCell>
                        <TableCell align="right">{row.fat}</TableCell>
                        <TableCell align="right">{row.fat}</TableCell>
                        <TableCell align="right">{row.fat}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
          </Grid>
        </Box>
      </ThemeProvider>
    </>
  );
}
