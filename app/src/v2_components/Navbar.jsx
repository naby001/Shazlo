import {
  AppBar,
  Toolbar,
  Box,
  Button,
  Typography,
  IconButton,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";

import { useState } from "react";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <AppBar
  position="sticky"
  elevation={0}
  sx={{
    bgcolor: "#fff",
    color: "#000",   // <-- add this
    borderBottom: "1px solid #e8e0d0",
  }}
>
      <Toolbar
        sx={{
          justifyContent: "space-between",
          px: { xs: 2, md: 7 },
        }}
      >
        <img
          src="/main-logo.png"
          alt="Shazlo"
          style={{ height: 32 }}
        />

        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            gap: 4,
            
          }}
        >
        <Button
  sx={{
    color: "#0a0a0a",
    textTransform: "uppercase",
    fontSize: "11px",
    letterSpacing: ".09em",
    "&:hover": {
      color: "#fab62a",
      backgroundColor: "transparent",
    },
  }}
>
  About
</Button>
       <Button
  sx={{
    color: "#0a0a0a",
    textTransform: "uppercase",
    fontSize: "11px",
    letterSpacing: ".09em",
    "&:hover": {
      color: "#fab62a",
      backgroundColor: "transparent",
    },
  }}
>
  How It Works
</Button>
<Button
  sx={{
    color: "#0a0a0a",
    textTransform: "uppercase",
    fontSize: "11px",
    letterSpacing: ".09em",
    "&:hover": {
      color: "#fab62a",
      backgroundColor: "transparent",
    },
  }}
>
  Features
</Button>
<Button
  sx={{
    color: "#0a0a0a",
    textTransform: "uppercase",
    fontSize: "11px",
    letterSpacing: ".09em",
    "&:hover": {
      color: "#fab62a",
      backgroundColor: "transparent",
    },
  }}
>
  Team
</Button>
        </Box>

        <Button
          variant="contained"
          sx={{
            display: { xs: "none", md: "block" },
            bgcolor: "#0a0a0a",
            color: "#fab62a",
            "&:hover": {
              bgcolor: "#fab62a",
              color: "#000",
            },
          }}
        >
          Partner With Us
        </Button>

        <IconButton
          sx={{ display: { xs: "flex", md: "none" } }}
          onClick={() => setOpen(!open)}
        >
          <MenuIcon />
          
        </IconButton>
      </Toolbar>
      <MobileMenu
    open={open}
    onClose={() => setOpen(false)}
/>
    </AppBar>
  );
}