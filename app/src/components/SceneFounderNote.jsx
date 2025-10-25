import React from "react";
import { Box } from "@mui/material";
import { motion } from "framer-motion";
import foundernote from "../assets/foundernote.png"; // your image

const SceneFounderNote = ({ noteY, noteOpacity }) => {
  return (
    <Box
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 6,
        pointerEvents: "none",
      }}
    >
      <motion.img
        src={foundernote}
        alt="Founder's Note"
        style={{
          width: "350px",
          height: "auto",
        //   borderRadius: "16px",
          boxShadow: "0 25px 60px rgba(0,0,0,0.5)",
          y: noteY, // 👈 motion variable controls slide-in
          opacity: noteOpacity, // 👈 fade controlled by parent
          transformOrigin: "center",
            
        }}
         rotate={-10}
        transition={{
          type: "spring",
          stiffness: 50,
          damping: 18,
        }}
      />
    </Box>
  );
};

export default SceneFounderNote;
