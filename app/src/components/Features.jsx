import React, { useEffect, useRef, useState } from "react";
import { Box, Typography, Container } from "@mui/material";

const features = [
  {
    title: "Swipe on products",
    description: "To get an ultra-curated feed",
    image: "/alternate-img1.jpg",
    rotate: -14,
    x: "12%",
    y: "30%",
  },
  {
    title: "Create closets",
    description: "create, share and collab on closets",
    image: "/alternate_img2.png",
    rotate: 8,
    x: "45%",
    y: "52%",
  },
  {
    title: "Partnered with Real Brands",
    description:
      "We connect you directly with trusted fashion brands—no fakes, no noise.",
    image: "/alternate-img1.jpg",
    rotate: -10,
    x: "76%",
    y: "72%",
  },
];

const FeaturesSection = () => {
  const sectionRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const total = rect.height - window.innerHeight;

      const current = Math.min(
        Math.max(-rect.top / total, 0),
        1
      );

      setProgress(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // divide scroll into 4 stages
  const stage = progress * 4;

  return (
    <Box
      ref={sectionRef}
      sx={{
        background: "#eeba2b",
        position: "relative",
        height: "400vh", // huge scroll area
      }}
    >
      {/* STICKY VIEWPORT */}
      <Box
        sx={{
          position: "sticky",
          top: 0,
          height: "100vh",
          overflow: "hidden",
        }}
      >
        <Container
          maxWidth="xl"
          sx={{
            height: "100%",
            position: "relative",
          }}
        >
          {/* HEADING */}
          <Box
            sx={{
              position: "absolute",
              top: { xs: 40, md: 60 },
              left: "50%",
              transform: "translateX(-50%)",
              textAlign: "center",
              zIndex: 20,
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: 36, md: 68 },
                fontFamily: "Arapey",
                fontWeight: 600,
                color: "#111",
              }}
            >
              Shazlo hits different
            </Typography>

            {/* <Typography
              sx={{
                mt: 2,
                fontSize: { xs: 16, md: 22 },
                color: "#222",
                maxWidth: 700,
              }}
            >
              A fashion experience designed like memories in a photo album.
            </Typography> */}
          </Box>

          {/* SCRAMBLED PHOTOS */}
          {features.map((feature, index) => {
            // first scroll section = only collage
const activationPoint = index + 1;

const isActive =
  stage >= activationPoint &&
  stage < activationPoint + 1;

const localProgress = Math.min(
  Math.max(stage - activationPoint, 0),
  1
);

            // smooth cinematic interpolation
            const scale =
              0.72 + Math.sin(localProgress * Math.PI) * 0.7;

            const opacity =
              0.4 + Math.sin(localProgress * Math.PI) * 0.6;

            const x = isActive
              ? `calc(50% - ${
                  window.innerWidth < 900 ? "130px" : "240px"
                })`
              : feature.x;

            const y = isActive
              ? "50%"
              : feature.y;

            const rotation = isActive
              ? 0
              : feature.rotate;

            return (
              <React.Fragment key={index}>
                {/* IMAGE */}
                <Box
                  component="img"
                  src={feature.image}
                  alt={feature.title}
                  sx={{
                    position: "absolute",

                    left: x,
                    top: y,

                    width: {
                      xs: isActive ? 260 : 120,
                      md: isActive ? 420 : 180,
                    },

                    borderRadius: "18px",

                    transform: `
                      translate(-50%, -50%)
                      rotate(${rotation}deg)
                      scale(${scale})
                    `,

                    transition:
                      "all 0.8s cubic-bezier(0.22, 1, 0.36, 1)",

                    zIndex: isActive ? 30 : 5,

                    // boxShadow: isActive
                    //   ? "0px 45px 100px rgba(0,0,0,0.28)"
                    //   : "0px 10px 30px rgba(0,0,0,0.14)",

                    opacity,
                  }}
                />

                {/* TEXT */}
                <Box
                  sx={{
                    position: "absolute",

                    right: {
                      xs: "50%",
                      md: "10%",
                    },

                    top: "50%",

                    width: {
                      xs: "82%",
                      md: "34%",
                    },

                    transform: {
                      xs: `translate(50%, -50%)`,
                      md: `translateY(-50%)`,
                    },

                    opacity: isActive ? 1 : 0,

                    transition:
                      "all 0.7s cubic-bezier(0.22, 1, 0.36, 1)",

                    zIndex: 40,

                    pointerEvents: "none",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: { xs: 80, md: 130 },
                      fontFamily: "Arapey",
                      lineHeight: 1,
                      color: "rgba(0,0,0,0.12)",
                    }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: { xs: 34, md: 64 },
                      fontFamily: "Arapey",
                      fontWeight: 600,
                      lineHeight: 1.1,
                      color: "#111",
                      mb: 3,
                    }}
                  >
                    {feature.title}
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: { xs: 18, md: 24 },
                      lineHeight: 1.8,
                      color: "#222",
                    }}
                  >
                    {feature.description}
                  </Typography>
                </Box>
              </React.Fragment>
            );
          })}
        </Container>
      </Box>
    </Box>
  );
};

export default FeaturesSection;