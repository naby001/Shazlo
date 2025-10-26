import React, { useEffect, useRef } from "react";
import { Box, Typography, IconButton } from "@mui/material";
import { motion, useMotionValueEvent } from "framer-motion";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import logo from "../assets/3a.png";
import ventureLogo from "../assets/venturestudio1.png";

const SceneBetaLaunch = ({ logoY, textOpacity }) => {
  const linkRef = useRef(null);

  // 👇 This tracks the actual motion value and toggles link interactivity
  useMotionValueEvent(textOpacity, "change", (latest) => {
    const linkEl = linkRef.current;
    if (!linkEl) return;

    if (latest === 1) {
      // activate link
      linkEl.setAttribute(
        "href",
        "https://ahduni.edu.in/academics/schools-centres/venturestudio/"
      );
      linkEl.setAttribute("target", "_blank");
      linkEl.setAttribute("rel", "noopener noreferrer");
      linkEl.style.pointerEvents = "auto";
      linkEl.style.cursor = "pointer";
    } else {
      // deactivate link
      linkEl.removeAttribute("href");
      linkEl.removeAttribute("target");
      linkEl.removeAttribute("rel");
      linkEl.style.pointerEvents = "none";
      linkEl.style.cursor = "default";
    }
  });

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
          y: logoY,
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

      {/* --- Venture Studio Link --- */}
      <motion.div
        style={{
          opacity: textOpacity,
          transform: "rotate(1deg)",
          marginTop: "12px",
        }}
      >
        <Box
          ref={linkRef}
          component="a"
          sx={{
            background: "linear-gradient(145deg, #f9f5ec 0%, #efe8d9 100%)",
            textDecoration: "none",
            borderRadius: "8px",
            px: 2.5,
            py: 0.2,
            boxShadow: "2px 2px 0px #00000040, 0 0 10px rgba(0,0,0,0.2)",
            border: "1px solid rgba(0,0,0,0.12)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 1,
            pointerEvents: "none", // start disabled
            backdropFilter: "blur(2px)",
            transition: "transform 0.2s ease",
            "&:hover": {
              transform: "scale(1.02)",
            },
          }}
        >
          <Typography
            sx={{
              fontFamily: "Arapey",
              fontSize: "1rem",
              fontWeight: 700,
              color: "#111",
              letterSpacing: "0.5px",
              textShadow: "1px 1px 0 #fff",
              display: "flex",
              alignItems: "center",
            }}
          >
            Backed by 
          </Typography>

          <Box
            component="img"
            src={ventureLogo}
            alt="Venture Studio Logo"
            sx={{
              width: "200px",
              height: "auto",
              opacity: 0.95,
              ml: 1,
              transform: "translateY(1px)",
              filter: "grayscale(25%) contrast(1.1)",
            }}
          />
        </Box>
      </motion.div>

      {/* --- Beta Launch Tagline --- */}
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
          <Typography
            sx={{
              position: "relative",
              fontFamily: "Arapey",
              fontSize: "25px",
              fontWeight: 700,
              color: "#111",
              textShadow: "2px 2px 0 #fff, 4px 4px 10px rgba(0,0,0,0.25)",
              textAlign: "center",
              whiteSpace: "nowrap",
            }}
          >
            We’re launching our <span style={{ color: "#ff4d7a" }}>BETA</span> soon!
          </Typography>
        </Box>
      </motion.div>

      {/* --- Social Icons --- */}
      <motion.div
        style={{
          opacity: textOpacity,
          transform: "rotate(1deg)",
          marginTop: "35px",
          display: "flex",
          gap: "25px",
          pointerEvents: "auto",
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
