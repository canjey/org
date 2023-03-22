import Box from "@mui/material/Box";
import Sidebar from "./Sidebar";

export const Layout = ({children}) => {
  
  return (
    <Box sx={{paddingX: "1rem", paddingLeft: "200px",}}>
      <Sidebar/>
      {children}
    </Box>
  )
}

export default Layout;
 