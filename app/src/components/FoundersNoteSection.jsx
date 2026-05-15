import React, { useEffect, useRef, useState } from "react";
import { Box, Typography, Container } from "@mui/material";

const FoundersSection = () => {
  const sectionRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // progress from 0 → 1
      const progress = Math.min(
        Math.max((windowHeight - rect.top) / windowHeight, 0),
        1
      );

      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // left/right movement
  const moveDistance = 220 * (1 - scrollProgress);

  return (
    <Box
      ref={sectionRef}
      sx={{
        position: "relative",
        py: { xs: 10, md: 16 },
        overflow: "hidden",
        backgroundColor: "#000",
      }}
    >
     {/* LEFT HALF */}
<Box
  sx={{
    position: "absolute",
    top: 0,
    left: 0,
    width: "50%",
    height: "100%",
    overflow: "hidden",
    transform: `translateX(-${moveDistance}px)`,
    transition: "transform 0.08s linear",
  }}
>
  <Box
    sx={{
      width: "200%",
      height: "100%",
      backgroundImage: "url('/background12.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }}
  />
</Box>

{/* RIGHT HALF */}
<Box
  sx={{
    position: "absolute",
    top: 0,
    right: 0,
    width: "50%",
    height: "100%",
    overflow: "hidden",
    transform: `translateX(${moveDistance}px)`,
    transition: "transform 0.08s linear",
  }}
>
  <Box
    sx={{
      width: "200%",
      height: "100%",
      marginLeft: "-100%",
      backgroundImage: "url('/background12.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }}
  />
</Box>

      {/* DARK OVERLAY */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background: `
            linear-gradient(
              to bottom,
              rgba(0,0,0,0.75) 0%,
              rgba(0,0,0,0.55) 35%,
              rgba(0,0,0,0.35) 65%,
              rgba(0,0,0,0.15) 100%
            )
          `,
          zIndex: 1,
        }}
      />

      {/* CONTENT */}
      <Container
        maxWidth="lg"
        sx={{
          position: "relative",
          zIndex: 2,
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: 38, md: 50 },
            fontWeight: 600,
            fontFamily: "Arapey",
            textAlign: "center",
            color: "#FFFFFF",
            mb: 2,
            textShadow: "0 2px 10px rgba(0,0,0,0.35)",
          }}
        >
          What are we building?
        </Typography>

        <Box
          sx={{
            height: 1,
            width: "80%",
            mx: "auto",
            backgroundColor: "rgba(255,255,255,0.6)",
            mb: 4,
          }}
        />

        <Typography
          sx={{
            fontSize: { xs: 22, md: 22 },
            lineHeight: 1.9,
            mb: 3,
            color: "#F5F3EF",
            fontWeight: 500,
            textShadow: "0 2px 8px rgba(0,0,0,0.35)",
          }}
        >
          Shazlo is a dream born in the rooms of four undergraduate students
          from Ahmedabad and Kolkata who had a core mission – revolutionising
          how India shops.
        </Typography>

        <Typography
          sx={{
            fontSize: { xs: 22, md: 22 },
            lineHeight: 1.9,
            mb: 3,
            color: "#F5F3EF",
            fontWeight: 500,
            textShadow: "0 2px 8px rgba(0,0,0,0.35)",
          }}
        >
          Shazlo serves as a gamified fashion discovery platform, where you
          swipe to style, share and shine.
        </Typography>

        <Typography
          sx={{
            fontSize: { xs: 22, md: 22 },
            lineHeight: 1.9,
            mb: 4,
            color: "#F5F3EF",
            fontWeight: 500,
            textShadow: "0 2px 8px rgba(0,0,0,0.35)",
          }}
        >
          From local artisans to modern designers, Shazlo brings it all to a
          single platform, highlighting the beauty of Made in India!
        </Typography>
      </Container>
    </Box>
  );
};

export default FoundersSection;