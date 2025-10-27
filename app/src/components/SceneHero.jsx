import React from "react";
import { Box, Typography } from "@mui/material";
import { motion, useTransform, useScroll } from "framer-motion";
import background from "../assets/background12.jpg";
import down from "../assets/down.png"; // 👈 your scroll indicator image

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
        opacity: 1,
        position: "absolute",
        width: "100%",
        height: "100%",
      }}
    >
      <motion.div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          opacity: useTransform(progress, [0, 1], [1, 0]), // fade out with scroll
          zIndex: -1,
        }}
      />
      <Box
        sx={{
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          background: "#eeba2ba7",
          overflow: "hidden",
          zIndex: 0,
          position: "relative",
        }}
      >
        <Typography
          sx={{
            fontSize: "60px",
            color: "black",
            fontWeight: 200,
            letterSpacing: 1,
            textAlign: "center",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "0.6rem",
            lineHeight: 1.4,
            fontFamily: "Voyage",
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

        {/* 👇 Scroll to reveal indicator (added only this part) */}
        <motion.div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            // marginTop: "60px",
            opacity: useTransform(progress, [0, 0.4], [1, 0]),
            animation: "floatDown 2s ease-in-out infinite",
          }}
        >
          <motion.img
            src={down}
            alt="Scroll to reveal"
            style={{
              width: "34px",
              height: "34px",
              filter: "drop-shadow(0 2px 6px rgba(0,0,0,0.3))",
            }}
          />
          <Typography
            sx={{
              fontFamily: "Arapey",
              fontSize: "1.1rem",
              color: "black",
              fontWeight: 400,
              letterSpacing: "0.5px",
              opacity: 1,
            }}
          >
            scroll to reveal
          </Typography>
        </motion.div>

        <style>
          {`
            @keyframes floatDown {
              0%, 100% {
                transform: translateY(0);
              }
              50% {
                transform: translateY(12px);
              }
            }
          `}
        </style>
      </Box>
    </motion.div>
  );
};

export default SceneHero;
