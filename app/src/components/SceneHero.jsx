import React from "react";
import { Box, Typography } from "@mui/material";
import { motion, useTransform, useScroll } from "framer-motion";

const SceneHero = ({ opacity }) => {
  const { scrollYProgress } = useScroll();

  // how far through the "hero disappear" phase we are
  const progress = useTransform(scrollYProgress, [0, 0.031, 0.06], [0, 0, 1]);

  // base sentence
  const text = "Want a shopping app which actually understands you and your style?";

  // split text into words instead of letters
  const words = text.split(" ");

  return (
    <motion.div
      style={{
        opacity:1,
        position: "absolute",
        width: "100%",
        height: "100%",
      }}
    >
      <Box
        sx={{
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          background: "#eeba2b",
          overflow: "hidden",
          zIndex:0
        }}
      >
        <Typography
        //   variant="h2"
          sx={{
            fontSize:'50px',
            color: "black",
            fontWeight: 200,
            letterSpacing: 1,
            textAlign: "center",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "0.6rem",
            lineHeight: 1.4,
            fontFamily:'Arapey'
          }}
        >
          {words.map((word, i) => {
            // alternate direction for each word (left/right)
            const dir = i % 2 === 0 ? -1 : 1;

            // transforms per word
            const x = useTransform(progress, [0, 1], ["0%", `${dir * 250}px`]);
            const y = useTransform(progress, [0, 1], ["0%", "-50px"]);
            const opacityWord = useTransform(progress, [0, 0.8, 1], [1, 0.7, 0]);

            return (
              <motion.span
                key={i}
                style={{
                  display: "inline-block",
                  x,
                  y,
                  opacity: opacityWord,
                }}
              >
                {word}
              </motion.span>
            );
          })}
        </Typography>
      </Box>
    </motion.div>
  );
};

export default SceneHero;
