import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { Box, Typography, Button, TextField } from "@mui/material";
import logo from "./assets/3.png";
export default function HomeAlt() {
  const containerRef = useRef(null);
  const tl = useRef();

  useEffect(() => {
    // Build GSAP timeline
    tl.current = gsap.timeline({ paused: true });

    // Step 1: Logo fades away
    tl.current.to("#logo", { opacity: 0, scale: 0.5, duration: 1 });

    // Step 2: Screenshots appear
    tl.current.fromTo(
      ".screenshot",
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, stagger: 0.3, duration: 1 },
      "+=0.2"
    );

    // Step 3: Morph to video
    tl.current.to(".screenshot", { opacity: 0, duration: 0.5 });
    tl.current.from("#video", { opacity: 0, scale: 0.8, duration: 1 });

    // Step 4: Waitlist appears
    tl.current.from("#waitlist", { opacity: 0, y: 100, duration: 1 });
  }, []);

  useEffect(() => {
    let progress = 0;

    const handleWheel = (e) => {
      progress += e.deltaY * 0.001; // sensitivity
      progress = Math.min(Math.max(progress, 0), 1); // clamp 0–1
      tl.current.progress(progress);
    };

    window.addEventListener("wheel", handleWheel);
    return () => window.removeEventListener("wheel", handleWheel);
  }, []);

  return (
    <Box
      ref={containerRef}
      sx={{
        height: "100vh",
        width: "100vw",
        bgcolor: "#0d0d0d",
        color: "white",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Logo */}
      <Box
        id="logo"
        component="img"
        src={logo}
        alt="Logo"
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
        }}
      />

      {/* Screenshots */}
      <Box
        id="screenshots"
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          display: "flex",
          gap: "1rem",
        }}
      >
        <Box component="img" src="/screens/1.png" className="screenshot" sx={{ width: 200 }} />
        <Box component="img" src="/screens/2.png" className="screenshot" sx={{ width: 200 }} />
        <Box component="img" src="/screens/3.png" className="screenshot" sx={{ width: 200 }} />
      </Box>

      {/* Video */}
      <Box
        id="video"
        component="video"
        src="/founders.mp4"
        muted
        loop
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "70%",
          borderRadius: "12px",
        }}
      />

      {/* Waitlist */}
      <Box
        id="waitlist"
        sx={{
          position: "absolute",
          bottom: "20%",
          left: "50%",
          transform: "translateX(-50%)",
          textAlign: "center",
        }}
      >
        <Typography variant="h4" gutterBottom>
          Join the Waitlist
        </Typography>
        <TextField
          type="email"
          placeholder="Enter your email"
          variant="outlined"
          size="small"
          sx={{
            input: { color: "white" },
            bgcolor: "rgba(255,255,255,0.1)",
            mr: 2,
          }}
        />
        <Button
          variant="contained"
          sx={{
            bgcolor: "white",
            color: "black",
            "&:hover": { bgcolor: "grey.300" },
          }}
        >
          Join
        </Button>
      </Box>
    </Box>
  );
}
