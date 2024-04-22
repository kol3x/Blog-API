import IconButton from "@mui/material/IconButton";
import { Tooltip, Box } from "@mui/material";
import GithubIcon from "@mui/icons-material/GitHub";
import LinkedinIcon from "@mui/icons-material/LinkedIn";
import CVIcon from "@mui/icons-material/Description";
import EmailIconButton from "./emailButton";
import LeetcodeIcon from "@mui/icons-material/Code";

export default function Socials() {
  return (
    <Box
      sx={{
        justifySelf: "end",
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
        gridColumn: 3,
        gap: 2,
      }}
    >
      <Tooltip title="My GitHub profile">
        <IconButton
          href="https://github.com/kol3x"
          target="_blank"
          size="medium"
          edge="start"
          color="inherit"
          aria-label="My GitHub profile"
        >
          <GithubIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title="My LinkedIn profile">
        <IconButton
          href="https://www.linkedin.com/in/nikolai-shcherbinin/"
          target="_blank"
          size="large"
          edge="start"
          color="inherit"
          aria-label="My LinkedIn profile"
        >
          <LinkedinIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title="My CV">
        <IconButton
          href="https://drive.google.com/file/d/1gaqd7i2KO8-nE08UuTJ8ZU_mSQZEC39E/"
          target="_blank"
          size="large"
          edge="start"
          color="inherit"
          aria-label="My CV"
        >
          <CVIcon />
        </IconButton>
      </Tooltip>
      <EmailIconButton />
      <Tooltip title="LeetCode profile">
        <IconButton
          href="https://leetcode.com/kol3x/"
          target="_blank"
          size="large"
          edge="start"
          color="inherit"
          aria-label="LeetCode profile"
        >
          <LeetcodeIcon />
        </IconButton>
      </Tooltip>
    </Box>
  );
}
