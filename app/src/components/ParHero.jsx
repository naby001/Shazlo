import React from "react";
import { Box, Typography } from "@mui/material";
import { motion, useScroll, useTransform } from "framer-motion";

const HeroSection = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2], [0, -200]);

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(180deg, #000, #111)",
      }}
    >
      <motion.div style={{ opacity, y }}>
        <Typography
          variant="h2"
          sx={{
            color: "#fff",
            fontWeight: 600,
            textAlign: "center",
            letterSpacing: 2,
          }}
        >
          Welcome to the Future of Experiences
        </Typography>
      </motion.div>
    </Box>
  );
};

export default HeroSection;
