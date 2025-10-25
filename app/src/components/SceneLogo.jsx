import React from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import { Box } from "@mui/material";
import logo from "../assets/3a.png";

const SceneLogo = ({ opacity, logoWidth }) => {
  return (
    <motion.div
      style={{
        opacity,
        position: "absolute",
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex:2
      }}
    >
      <motion.img
        src={logo}
        alt="Logo"
        
        transition={{ duration: 1.2, ease: "easeOut" }}
        style={{
          width: 320,
          scale:logoWidth,
          filter: "drop-shadow(0 0 20px rgba(255,255,255,0.4))",
        }}
      />
    </motion.div>
  );
};

export default SceneLogo;
