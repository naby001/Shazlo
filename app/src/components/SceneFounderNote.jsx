import React from "react";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import logo from "../assets/3a.png"; // 👈 your brand logo here

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
      <motion.div
        style={{
          y: noteY,
          opacity: noteOpacity,
          rotate: -2,
          transformOrigin: "center",
          transition: {
            type: "spring",
            stiffness: 50,
            damping: 18,
          },
        }}
      >
        <Box
          sx={{
            width: { xs: "320px", md: "380px" },
            minHeight: "480px",
            background: "#fdfcf7",
            borderRadius: "4px",
            border: "1px solid rgba(0,0,0,0.1)",
            boxShadow: "0 25px 60px rgba(0,0,0,0.4)",
            p: { xs: 2.5, md: 3 },
            color: "#1a1a1a",
            fontFamily: "'Courier New', monospace",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* slight fade at bottom */}
          <Box
            sx={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: "40px",
              background:
                "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.05) 100%)",
              maskImage:
                "radial-gradient(circle at center, black 40%, transparent 90%)",
            }}
          />

          {/* --- Header: Logo + Line --- */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              mb: 2,
            }}
          >
            <img
              src={logo}
              alt="Shazlo Logo"
              style={{
                width: "200px",
                marginBottom: "8px",
                opacity: 1,
              }}
            />
            <Box
              sx={{
                width: "80%",
                height: "1px",
                backgroundColor: "#222",
                opacity: 1,
              }}
            />
          </Box>

          {/* --- Founder’s Note --- */}
          <Typography
            sx={{
              fontSize: "0.85rem",
              lineHeight: 1.7,
              letterSpacing: "0.3px",
              whiteSpace: "pre-line",
              color: "black",
              mb: 2,
              textAlign: "left",
              fontFamily: "Doto",
              fontWeight: 800,
            }}
          >
            {`Shazlo is a dream born in the rooms of four undergraduate students from Ahmedabad and Kolkata who had a core mission — revolutionising how India shops.

Shazlo serves as a gamified fashion discovery platform, where you swipe to style, share and shine. Moving beyond traditional e-commerce, Shazlo aims to create shared experiences and add an element of joy while buying your favourite piece of clothing.

From local artisans to modern designers, Shazlo brings it all to a single platform, highlighting the beauty of Made in India!`}
          </Typography>

          {/* --- Divider Line --- */}
          <Box
            sx={{
              width: "100%",
              height: "1px",
              backgroundColor: "#333",
              opacity: 0.4,
              mb: 1.5,
            }}
          />

          {/* --- Grand Total --- */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 1.5,
            }}
          >
            <Typography
              sx={{
                fontSize: "0.9rem",
                fontWeight: 700,
                color: "#000",
                fontFamily: "Doto",
              }}
            >
              GRAND TOTAL
            </Typography>
            <Typography
              sx={{
                fontSize: "0.9rem",
                fontWeight: 900,
                color: "#ff4d7a",
                fontFamily: "Doto",
              }}
            >
              Love you like that 
            </Typography>
          </Box>

          {/* --- Footer --- */}
          <Typography
            sx={{
              fontSize: "0.8rem",
              textAlign: "center",
              mt: 2,
              fontWeight: 1000,
              color: "#444",
              fontFamily: "Doto",
            }}
          >
            THANK YOU FOR SHOPPING WITH US
          </Typography>
        </Box>
      </motion.div>
    </Box>
  );
};

export default SceneFounderNote;
