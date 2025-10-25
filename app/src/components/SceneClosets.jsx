import React from "react";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import img1 from "../assets/closet1.png";
import img2 from "../assets/closet2.png";

const SceneClosets = ({ imgTopX, imgBottomX, textOpacity, textY }) => {
  return (
    <Box
      sx={{
        position: "absolute",
        top:"6%",
        inset: 0,
        zIndex: 5,
        pointerEvents: "none",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* --- Top Image Sliding In (Left) --- */}
      <motion.img
        src={img1}
        style={{
          position: "absolute",
          top: "5%",
          left: "2%",
          width: "360px",
          height: "auto",
          borderRadius: "16px",
          boxShadow: "0 15px 50px rgba(0,0,0,0.4)",
        //   transform: "rotate(-25deg)",
          x: imgTopX, // 👈 controlled from parent
        }}
          rotate={-25}
      />

      {/* --- Bottom Image Sliding In (Right) --- */}
      <motion.img
        src={img2}
        style={{
          position: "absolute",
          bottom: "2%",
          right: "10%",
          width: "360px",
          height: "auto",
          borderRadius: "16px",
          boxShadow: "0 15px 50px rgba(0,0,0,0.4)",
          transform: "rotate(5deg)",
          x: imgBottomX, // 👈 controlled from parent
        }}
      />

      {/* --- Center Text --- */}
      <motion.div
        style={{
          opacity: textOpacity,
          y: textY,
          scale: 1,
        }}
        transition={{ type: "spring", stiffness: 60, damping: 18 }}
      >
        <Box
          sx={{
            px: { xs: 3, md: 5 },
            py: { xs: 1.5, md: 2 },
            background:
              "linear-gradient(145deg, #f9f5ec 0%, #f2e6d0 100%)",
            borderRadius: "12px",
            position: "relative",
            transform: "rotate(-2deg)",
            boxShadow:
              "3px 3px 0px #00000040, 0 0 12px rgba(0,0,0,0.35)",
            WebkitMaskImage:
              "radial-gradient(circle at 10% 10%, rgba(0,0,0,1) 95%, rgba(0,0,0,0) 100%), radial-gradient(circle at 90% 90%, rgba(0,0,0,1) 95%, rgba(0,0,0,0) 100%)",
            overflow: "hidden",
          }}
        >
          {/* Paper Texture Overlay */}
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              backgroundImage:
                "url('https://www.transparenttextures.com/patterns/paper-fibers.png')",
              opacity: 0.4,
              mixBlendMode: "multiply",
              pointerEvents: "none",
            }}
          />

          <Typography
            sx={{
              position: "relative",
              fontFamily: "Arapey",
              fontSize: { xs: "2rem", md: "3rem" },
              color: "black",
              fontWeight: 600,
              textAlign: "center",
              lineHeight: 1.2,
              transform: "rotate(-1deg)",
              textShadow:
                "1px 2px 0 #fff, 3px 4px 10px rgba(0,0,0,0.25)",
              letterSpacing: "1px",
            }}
          >
            Make <span style={{ color: "#ff4d7a" }}>Closets</span> —<br />
            Share and Collab <br />
            <span style={{ color: "#ff4d7a" }}>with others</span>
          </Typography>
        </Box>
      </motion.div>
    </Box>
  );
};

export default SceneClosets;
