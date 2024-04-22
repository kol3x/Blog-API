import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Socials from "./socials";

export default function MenuBar() {
  return (
    <Box className="menuBar">
      <AppBar
        sx={{ backgroundColor: "black", borderBottom: "1px solid #00bf63" }}
        position="static"
      >
        <Toolbar sx={{display: "grid", gridTemplateColumns: "1fr 1fr 1fr"}}>
          <Box sx={{ display: "flex", flexWrap: "wrap" }}>
            <Link to={`/`}>
              <Button className="menuBtn" color="inherit" href="/">
                Home
              </Button>
            </Link>

            <Button
              className="menuBtn"
              color="inherit"
              href="https://zingy-griffin-616d20.netlify.app/"
            >
              Portfolio
            </Button>
          </Box>
          <Button className="barSpacer" disabled sx={{ flexGrow: 1 }}></Button>
          <Socials />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
