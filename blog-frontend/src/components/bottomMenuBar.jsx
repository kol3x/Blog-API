import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Socials from "./socials";

export default function BottomMenuBar() {
  return (
    <Box sx={{ width: "100%", marginTop: "auto" }}>
      <AppBar
        sx={{ backgroundColor: "#00bf63", color: "black" }}
        position="static"
      >
        <Toolbar sx={{display: "grid", alignSelf:"center"}}>
          <Socials
            sx={{
              justifySelf: "end",
            }}
          />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
