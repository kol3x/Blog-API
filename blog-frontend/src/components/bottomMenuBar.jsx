import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { Tooltip } from "@mui/material";
import GithubIcon from "@mui/icons-material/GitHub";
import LinkedinIcon from "@mui/icons-material/LinkedIn";
import CVIcon from "@mui/icons-material/Description";
import EmailIconButton from "./emailButton";
import LeetcodeIcon from "@mui/icons-material/Code";

export default function BottomMenuBar() {
  return (
    <Box sx={{ width: "100%", marginTop: "auto" }}>
      <AppBar
        sx={{ backgroundColor: "#00bf63", color: "black" }}
        position="static"
      >
        <Toolbar>
          <Button disabled sx={{ flexGrow: 1 }}></Button>
          <Tooltip title="My GitHub profile">
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="My GitHub profile"
              sx={{ mr: 2 }}
            >
              <GithubIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="My LinkedIn profile">
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="My LinkedIn profile"
              sx={{ mr: 2 }}
            >
              <LinkedinIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="My CV">
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="My CV"
              sx={{ mr: 2 }}
            >
              <CVIcon />
            </IconButton>
          </Tooltip>
          <EmailIconButton></EmailIconButton>
          <Tooltip title="LeetCode profile">
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="LeetCode profile"
              sx={{ mr: 2 }}
            >
              <LeetcodeIcon />
            </IconButton>
          </Tooltip>
          <Button disabled sx={{ flexGrow: 1 }}></Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
