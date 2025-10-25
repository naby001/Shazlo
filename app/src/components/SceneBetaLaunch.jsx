import React from "react";
import { Box, Typography, Button, IconButton } from "@mui/material";
import { motion } from "framer-motion";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import logo from "../assets/3a.png";

const SceneBetaLaunch = ({ logoY, textOpacity }) => {
  return (
    <Box
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 10,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        pointerEvents: "none",
      }}
    >
      {/* --- Logo --- */}
      <motion.img
        src={logo}
        alt="App Logo"
        style={{
          width: "280px",
          height: "auto",
          y: logoY, // 👈 animated motion value
          opacity: textOpacity,
          transform: "rotate(-3deg)",
          filter: "drop-shadow(6px 6px 15px rgba(0,0,0,0.4))",
        }}
        transition={{
          type: "spring",
          stiffness: 45,
          damping: 18,
        }}
      />

      {/* --- Paper Cutout Text Box --- */}
      <motion.div
        style={{
          opacity: textOpacity,
          transform: "rotate(2deg)",
          marginTop: "25px",
        }}
      >
        <Box
          sx={{
            background: "linear-gradient(145deg, #f9f5ec 0%, #efe8d9 100%)",
            borderRadius: "12px",
            px: 4,
            py: 2,
            boxShadow: "3px 3px 0px #00000040, 0 0 15px rgba(0,0,0,0.25)",
            position: "relative",
            border: "1px solid rgba(0,0,0,0.15)",
            overflow: "hidden",
          }}
        >
          {/* paper texture overlay */}
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              backgroundImage:
                "url('https://www.transparenttextures.com/patterns/paper-fibers.png')",
              opacity: 0.3,
              mixBlendMode: "multiply",
              pointerEvents: "none",
            }}
          />
          <Typography
            sx={{
              position: "relative",
              fontFamily: "Arapey",
              fontSize: "25px",
              fontWeight: 700,
              color: "#111",
              textShadow:
                "2px 2px 0 #fff, 4px 4px 10px rgba(0,0,0,0.25)",
              textAlign: "center",
              whiteSpace: "nowrap",
            }}
          >
            We’re launching our <span style={{ color: "#ff4d7a" }}>BETA</span> soon!
          </Typography>
        </Box>
      </motion.div>

      {/* --- Download Button --- */}
      {/* <motion.div
        style={{
          opacity: textOpacity,
          transform: "rotate(-2deg)",
          marginTop: "40px",
        }}
      >
        <Button
          variant="contained"
          sx={{
            background: "linear-gradient(145deg, #ffb8a5 0%, #ff7f70 40%, #ff4b5a 100%)",
            borderRadius: "10px",
            px: 4,
            py: 1.5,
            fontFamily: "Poppins, sans-serif",
            fontWeight: 600,
            fontSize: "1rem",
            textTransform: "none",
            boxShadow: "4px 4px 0px #3b1a1a80, 0 0 18px rgba(255,100,100,0.4)",
            pointerEvents: "auto", // ✅ clickable
            "&:hover": {
              background: "linear-gradient(145deg, #ff9780 0%, #ff6f60 40%, #ff3445 100%)",
            },
          }}
        >
          Get Notified 
        </Button>
      </motion.div> */}

      {/* --- Social Icons --- */}
     {/* --- Social Icons --- */}
<motion.div
  style={{
    opacity: textOpacity,
    transform: "rotate(1deg)",
    marginTop: "35px",
    display: "flex",
    gap: "25px",
    pointerEvents: "auto", // ✅ clickable
  }}
>
  {[
    {
      Icon: InstagramIcon,
      url: "https://www.instagram.com/shazlo.store?igsh=bTZ0bXM3NTdjOTN6",
    },
    {
      Icon: LinkedInIcon,
      url: "https://linkedin.com/company/shazlo",
    },
    {
      Icon: FacebookIcon,
      url: "https://www.facebook.com/shazlo.store",
    },
  ].map(({ Icon, url }, i) => (
    <Box
      key={i}
      sx={{
        background: "linear-gradient(145deg, #f9f5ec 0%, #efe8d9 100%)",
        borderRadius: "50%",
        boxShadow: "2px 2px 0px #00000040, 0 0 8px rgba(0,0,0,0.25)",
        p: 1,
        transform: `rotate(${i % 2 === 0 ? "-3deg" : "3deg"})`,
      }}
    >
      <IconButton
        component="a"
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          color: "#111",
          "&:hover": { color: "#ff4d7a" },
        }}
      >
        <Icon />
      </IconButton>
    </Box>
  ))}
</motion.div>

    </Box>
  );
};

export default SceneBetaLaunch;
