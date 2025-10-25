import React, { useEffect, useState } from "react";
import { Box, Typography, Button, TextField } from "@mui/material";
import { motion, useMotionValue, useTransform } from "framer-motion";
import logo from "./assets/3.png";
import { TextHeroSection } from "./components/Home_alt_TextHero";
import { LogoSection } from "./components/HomeAlt_Logo";
import { GradientText } from "./components/Home_Alt_gradientText";

const VideoSection = ({ src, style }) => (
  <motion.video
    src={src}
    autoPlay
    muted
    loop
    playsInline
    style={{
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: "70%",
      maxWidth: "900px",
      borderRadius: "12px",
      boxShadow: "0 20px 60px rgba(255,255,255,0.1)",
      ...style,
    }}
  />
);

const WaitlistSection = ({ style }) => (
  <motion.div
    style={{
      position: "absolute",
      bottom: "15%",
      left: "50%",
      transform: "translateX(-50%)",
      textAlign: "center",
      width: "90%",
      maxWidth: "600px",
      ...style,
    }}
  >
    <Typography
      variant="h3"
      gutterBottom
      sx={{
        fontWeight: 700,
        mb: 3,
        background: "linear-gradient(135deg, #ffffff 0%, #aaaaaa 100%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      }}
    >
      Join the Waitlist
    </Typography>

    <Box sx={{ display: "flex", justifyContent: "center", gap: 2, flexWrap: "wrap" }}>
      <TextField
        type="email"
        placeholder="Enter your email"
        variant="outlined"
        size="medium"
        sx={{
          minWidth: "300px",
          "& .MuiOutlinedInput-root": {
            color: "white",
            bgcolor: "rgba(255,255,255,0.1)",
            borderRadius: "8px",
            "& fieldset": { borderColor: "rgba(255,255,255,0.2)" },
            "&:hover fieldset": { borderColor: "rgba(255,255,255,0.4)" },
            "&.Mui-focused fieldset": { borderColor: "white" },
          },
        }}
      />
      <Button
        variant="contained"
        size="large"
        sx={{
          bgcolor: "white",
          color: "black",
          fontWeight: 700,
          px: 4,
          borderRadius: "8px",
          "&:hover": {
            bgcolor: "grey.200",
            transform: "scale(1.05)",
            transition: "all 0.2s",
          },
        }}
      >
        Join Now
      </Button>
    </Box>
  </motion.div>
);

export default function HomeAlt() {
  const progress = useMotionValue(0);

  // Scroll → progress mapping
  useEffect(() => {
    let value = 0;
    const handleWheel = (e) => {
      value += e.deltaY * 0.0008;
      value = Math.min(Math.max(value, 0), 1);
      progress.set(value);
    };
    window.addEventListener("wheel", handleWheel);
    return () => window.removeEventListener("wheel", handleWheel);
  }, [progress]);

  // Derived transforms for each stage
  const textOpacity = useTransform(progress, [0, 0.2], [1, 0]);


  const logoOpacity = useTransform(progress, [0.2, 0.4, 0.6], [0, 1, 0]);
  const logoScale = useTransform(progress, [0.2, 0.3, 0.6], [0.5, 1, 0.5]);
  const videoOpacity = useTransform(progress, [0.5, 0.7], [0, 1]);
  const waitlistOpacity = useTransform(progress, [0.7, 0.9, 1], [0, 1, 1]);
  const waitlistY = useTransform(progress, [0.7, 1], [100, 0]);

  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
        bgcolor: "#0d0d0d",
        color: "white",
        overflow: "hidden",
        position: "relative",
      }}
    >
  
     {/* Text Hero */}
<motion.div
  style={{
    opacity: textOpacity,
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: 5, // keep it above everything initially
  }}
>
<TextHeroSection/>
</motion.div>


      {/* Logo */}
      <motion.div
        style={{
          opacity: logoOpacity,
          scale: logoScale,
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <LogoSection src={logo} />
      </motion.div>

      {/* Video */}
      <VideoSection
        src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
        style={{ opacity: videoOpacity }}
      />

      {/* Waitlist */}
      <WaitlistSection style={{ opacity: waitlistOpacity, y: waitlistY }} />
    </Box>
  );
}
