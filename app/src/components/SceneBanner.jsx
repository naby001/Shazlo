import React from "react";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

const SceneBanners = ({
  opacity,
  xLeft,
  xRight,
  rotateLeft,
  rotateRight,
  yLeft,
  yRight,
}) => {
  return (
    <motion.div
      style={{
        opacity,
        position: "absolute",
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex:2
      }}
    >
      {/* --- Top / Left Banner --- */}
      <Box
        sx={{
          position: "absolute",
          top: "16%",
          left: 0,
          right: 0,
          display: "flex",
          justifyContent: "center",
          pointerEvents: "none",
        }}
      >
        <motion.div
          style={{ x: xLeft, rotate: rotateLeft, y: yLeft }}
          transition={{ type: "spring", stiffness: 40, damping: 10 }}
        >
          <Box
            sx={{
              display: "inline-block",
              px: 6,
              py: 1.2,
              background:
                "linear-gradient(145deg, #fefdf9 0%, #f4efea 100%)",
              borderRadius: "40px",
              position: "relative",
              overflow: "hidden",
              border: "1px solid rgba(0,0,0,0.15)",
              boxShadow:
                "2px 3px 0px rgba(0,0,0,0.25), 0 0 25px rgba(255,255,255,0.2)",
              transform: "rotate(-1deg)",
              // ✨ Torn paper mask illusion
              WebkitMaskImage:
                "radial-gradient(circle at 5% 20%, rgba(0,0,0,1) 95%, rgba(0,0,0,0) 100%), radial-gradient(circle at 95% 80%, rgba(0,0,0,1) 95%, rgba(0,0,0,0) 100%)",
              WebkitMaskComposite: "destination-in",
            }}
          >
            {/* Paper fiber texture */}
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
                fontSize: { xs: "1rem", md: "1.6rem" },
                fontWeight: 800,
                color: "#000",
                letterSpacing: 3,
                textTransform: "uppercase",
                whiteSpace: "nowrap",
                fontFamily: "'Poppins', sans-serif",
                position: "relative",
                zIndex: 2,
                background:
                  "linear-gradient(90deg, #5BE7C4, #6A5ACD, #F7A8B8, #FFC877, #5BE7C4)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {"✦ We Present To You ✦ ".repeat(6)}
            </Typography>
          </Box>
        </motion.div>
      </Box>

      {/* --- Bottom / Right Banner --- */}
      <Box
        sx={{
          position: "absolute",
          bottom: "16%",
          left: 0,
          right: 0,
          display: "flex",
          justifyContent: "center",
          pointerEvents: "none",
        }}
      >
        <motion.div
          style={{ x: xRight, rotate: rotateRight, y: yRight }}
          transition={{ type: "spring", stiffness: 40, damping: 10 }}
        >
          <Box
            sx={{
              display: "inline-block",
              px: 6,
              py: 1.2,
              background:
                "linear-gradient(145deg, #fff7f0 0%, #f3e4cc 100%)",
              borderRadius: "40px",
              position: "relative",
              overflow: "hidden",
              border: "1px solid rgba(0,0,0,0.15)",
              boxShadow:
                "2px 3px 0px rgba(0,0,0,0.25), 0 0 25px rgba(255,255,255,0.2)",
              transform: "rotate(1deg)",
              // ✨ Torn paper mask illusion
              WebkitMaskImage:
                "radial-gradient(circle at 15% 30%, rgba(0,0,0,1) 95%, rgba(0,0,0,0) 100%), radial-gradient(circle at 85% 70%, rgba(0,0,0,1) 95%, rgba(0,0,0,0) 100%)",
              WebkitMaskComposite: "destination-in",
            }}
          >
            {/* Paper fiber texture */}
            <Box
              sx={{
                position: "absolute",
                inset: 0,
                backgroundImage:
                  "url('https://www.transparenttextures.com/patterns/white-paper.png')",
                opacity: 0.35,
                mixBlendMode: "multiply",
                pointerEvents: "none",
              }}
            />

            <Typography
              sx={{
                fontSize: { xs: "1rem", md: "1.6rem" },
                fontWeight: 800,
                color: "#111",
                letterSpacing: 3,
                textTransform: "uppercase",
                whiteSpace: "nowrap",
                fontFamily: "'Poppins', sans-serif",
                position: "relative",
                zIndex: 2,
                background:
                "linear-gradient(90deg, #ff7a00, #ff3b3b, #ff0099, #ff7a00)",

                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {"✦ Something New ✦ ".repeat(6)}
            </Typography>
          </Box>
        </motion.div>
      </Box>
    </motion.div>
  );
};

export default SceneBanners;
