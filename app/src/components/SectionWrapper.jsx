import React from "react";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

const SectionWrapper = ({ title, text }) => {
  const variants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: "easeOut" } },
  };

  return (
    <Box
      sx={{
        height: "100vh",
        background: "#111",
        color: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        textAlign: "center",
        px: 3,
      }}
    >
      <motion.div initial="hidden" whileInView="visible" variants={variants}>
        <Typography variant="h3" sx={{ mb: 2, fontWeight: 600 }}>
          {title}
        </Typography>
        <Typography variant="h6" sx={{ maxWidth: "600px", opacity: 0.8 }}>
          {text}
        </Typography>
      </motion.div>
    </Box>
  );
};

export default SectionWrapper;
