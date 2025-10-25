import React from "react";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import logo from "../assets/3.png";

const marqueeVariants = {
  animate: {
    x: ["0%", "-50%"],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 60,
        ease: "linear",
      },
    },
  },
};

export const LogoSection = () => {
  return (
    <Box
      id="logo"
      sx={{
      
        transform: "translate(-50%, -50%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent:'center',
        gap: "1.5rem",
        zIndex: 5,
        height:'100vh'
      }}
    >
      {/* 🔹 Top Scrolling Banner (enters from LEFT) */}
      <motion.div
        initial={{ opacity: 0, x: "-100vw" }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        style={{
          width: "100vw",
          overflow: "hidden",
          whiteSpace: "nowrap",
          borderTop: "1px solid rgba(255,255,255,0.1)",
          borderBottom: "1px solid rgba(255,255,255,0.1)",
          padding: "0.4rem 0",
          position: "relative",
          zIndex: 6,
        }}
      >
        <motion.div
          variants={marqueeVariants}
          animate="animate"
          style={{
            position:'absolute',
            
            display: "inline-block",
            whiteSpace: "nowrap",
            fontSize: "1.2rem",
            background: "linear-gradient(90deg, #f8f8f8, #ffd700, #f8f8f8)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            fontWeight: 500,
          }}
        >
          {" • We present to you • We present to you • We present to you ".repeat(12)}
        </motion.div>
      </motion.div>

     

      {/* 🔹 Central Logo */}
      <motion.img
        src={logo}
        alt="Logo"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.4 }}
        style={{
          width: 400,
          maxWidth: "90vw",
          zIndex: 5,
        }}
      />

      {/* 🔹 Bottom Scrolling Banner (enters from RIGHT) */}
      <motion.div
        initial={{ opacity: 0, x: "100vw" }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
        style={{
          width: "100vw",
          overflow: "hidden",
          whiteSpace: "nowrap",
          borderTop: "1px solid rgba(255,255,255,0.1)",
          borderBottom: "1px solid rgba(255,255,255,0.1)",
          padding: "0.4rem 0",
          position: "relative",
          zIndex: 6,
        }}
      >
        <motion.div
          variants={marqueeVariants}
          animate="animate"
          style={{
            display: "inline-block",
            whiteSpace: "nowrap",
            fontSize: "1.2rem",
            background: "linear-gradient(90deg, #f8f8f8, #ffd700, #f8f8f8)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            fontWeight: 500,
          }}
        >
          {" • We present to you • We present to you • We present to you ".repeat(12)}
        </motion.div>
      </motion.div>
    </Box>
  );
};
