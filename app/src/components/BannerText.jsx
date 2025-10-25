import React from "react";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

const BannerText = ({ text, direction }) => {
  const variants = {
    hidden: { x: direction === "left" ? "-100vw" : "100vw" },
    visible: { x: 0, transition: { duration: 1.2, ease: "easeOut" } },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={variants}
      style={{ width: "100%" }}
    >
      <Box
        sx={{
          width: "100%",
          backgroundColor: "#fff",
          color: "#000",
          py: 1,
          textAlign: "center",
          fontWeight: "bold",
          fontSize: "1.2rem",
          letterSpacing: 1,
        }}
      >
        {text}
      </Box>
    </motion.div>
  );
};

export default BannerText;
