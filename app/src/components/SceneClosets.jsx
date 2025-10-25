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
        top: "6%",
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
          top: "20%",
          left: "2%",
          width: "360px",
          height: "auto",
          borderRadius: "16px",
          zIndex: 2,
          x: imgTopX,
        }}
        rotate={-25}
      />

      {/* --- Bottom Image Sliding In (Right) --- */}
      <motion.img
        src={img2}
        style={{
          position: "absolute",
          bottom: "10%",
          right: "10%",
          width: "360px",
          height: "auto",
          borderRadius: "16px",
          transform: "rotate(5deg)",
          x: imgBottomX,
        }}
      />

      {/* --- Center Text --- */}
      <motion.div
        style={{
          opacity: textOpacity,
          y: textY,
          scale: 1,
          zIndex: 1,
        }}
        transition={{ type: "spring", stiffness: 60, damping: 18 }}
      >
        <Box
          sx={{
            px: { xs: 3, md: 6 },
            py: { xs: 1.5, md: 2 },
            maxWidth: { xs: "90%", md: "70%" }, // 👈 wider text area
            mx: "auto",
          }}
        >
          <Typography
            sx={{
              position: "relative",
              fontFamily: "Arapey",
              fontSize: { xs: "2.2rem", md: "3.2rem" },
              color: "white",
              fontWeight: 600,
              textAlign: "center",
              lineHeight: 1.25,
              transform: "rotate(-1deg)",
              letterSpacing: "1px",
              wordBreak: "keep-all",
            }}
          >
            Make Closets — Share and Collab with others
          </Typography>
        </Box>
      </motion.div>
    </Box>
  );
};

export default SceneClosets;
