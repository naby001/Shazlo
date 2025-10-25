import React from "react";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import founder1 from "../assets/pranavops.png";
import founder2 from "../assets/mauryatech.png";
import founder3 from "../assets/nabya.png";
import founder4 from "../assets/darsh.png";

const founders = [
  { img: founder1, label: "The Operations Guy", side: "left" },
  { img: founder2, label: "The Tech Guy", side: "right" },
  { img: founder3, label: "The Tech Guy", side: "left" },
  { img: founder4, label: "The Marketing Guy", side: "right" },
];

const SceneFounders = ({
  f1X,
  f2X,
  f3X,
  f4X,
  textOpacity,
}) => {
  const positions = [f1X, f2X, f3X, f4X];

  return (
    <Box
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 7,
        pointerEvents: "none",
      }}
    >
      {founders.map((f, i) => (
        <Box
          key={i}
          sx={{
            position: "absolute",
            top: `${0 + i * 20}%`, // stack vertically
            left: f.side === "left" ? "5%" : "auto",
            right: f.side === "right" ? "5%" : "auto",
            display: "flex",
            flexDirection: f.side === "left" ? "row" : "row-reverse",
            alignItems: "center",
            gap: "20px",
          }}
        >
          {/* Founder Image */}
          <motion.img
            src={f.img}
            alt={f.label}
            style={{
                width:
      i === 0
        ? "130px" // Founder 1 — smaller
        : i === 1
        ? "140px" // Founder 2 — bigger
        : i === 2
        ? "150px" // Founder 3 — medium
        : "260px", // Founder 4 — largest
              height: "auto",
            //   borderRadius: "12px",
              boxShadow: "6px 8px 15px rgba(0,0,0,0.35)",
              transform: f.side === "left" ? "rotate(-4deg)" : "rotate(4deg)",
              x: positions[i], // motion control from parent
            }}
            transition={{ type: "spring", stiffness: 45, damping: 15 }}
          />

          {/* Paper Cutout Label */}
          <motion.div
            style={{
              opacity: textOpacity,
              transform: `rotate(${f.side === "left" ? "-2" : "2"}deg)`,
              marginRight:i===3 && -100
            }}
          >
            <Box
              sx={{
                background: "linear-gradient(145deg, #f9f5ec 0%, #efe8d9 100%)",
                borderRadius: "10px",
                px: 3,
                py: 0,
                boxShadow:
                  "3px 3px 0px #00000040, 0 0 12px rgba(0,0,0,0.25)",
                position: "relative",
                overflow: "hidden",
                border: "1px solid rgba(0,0,0,0.1)",
                transform: `rotate(${f.side === "left" ? "-1" : "1"}deg)`,
              }}
            >
              {/* Subtle paper texture overlay */}
              <Box
                sx={{
                  position: "absolute",
                  inset: 0,
                  backgroundImage:
                    "url('https://www.transparenttextures.com/patterns/paper-fibers.png')",
                  opacity: 0.25,
                  mixBlendMode: "multiply",
                  pointerEvents: "none",
                }}
              />
             <Typography
  sx={{
    position: "relative",
    fontFamily: "Arapey",
    fontSize: "20px",
    fontWeight: 600,
    color: "#111",
    textShadow: "1px 1px 0 #fff, 2px 2px 8px rgba(0,0,0,0.15)",
    whiteSpace: "nowrap", // 👈 keeps all text in one line
    letterSpacing: "1px",  // 👈 optional — improves spacing
  }}
>
  {f.label}
</Typography>

            </Box>
          </motion.div>
        </Box>
      ))}
    </Box>
  );
};

export default SceneFounders;
