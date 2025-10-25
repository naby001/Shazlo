import React from "react";
import { Box } from "@mui/material";
import { motion, useScroll, useTransform } from "framer-motion";
import BannerText from "./BannerText";
import logo from "../assets/3.png"; // replace with your logo

const LogoSection = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0.15, 0.35], [0, 1]);
  const scale = useTransform(scrollYProgress, [0.15, 0.35], [0.8, 1]);
  const y = useTransform(scrollYProgress, [0.15, 0.35], [200, 0]);

  return (
    <Box
      sx={{
        height: "100vh",
        position: "relative",
        backgroundColor: "#000",
        overflow: "hidden",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      {/* Top Banner */}
      <Box sx={{ position: "absolute", top: 50, width: "100%" }}>
        <BannerText text="We present to you" direction="left" />
      </Box>

      {/* Center Logo */}
      <motion.img
        src={logo}
        alt="Logo"
        style={{
          width: "200px",
          opacity,
          scale,
          y,
          filter: "drop-shadow(0px 0px 15px rgba(255,255,255,0.3))",
        }}
      />

      {/* Bottom Banner */}
      <Box sx={{ position: "absolute", bottom: 50, width: "100%" }}>
        <BannerText text="Something Extraordinary" direction="right" />
      </Box>
    </Box>
  );
};

export default LogoSection;
