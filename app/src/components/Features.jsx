import React from "react";
import { Box, Typography, Container } from "@mui/material";

const features = [
  {
    title: "Swipe on products",
    description:
      "To get an ultra-curated feed",
    image: "/alternate-img1.jpeg",
  },
  {
    title: "Create closets",
    description:
      "create, share and collab on closets",
      image: "/alternate_img2.png",
  },
  {
    title: "",
    description:
      "We connect you directly with trusted fashion brands—no fakes, no noise.",
     image: "/alternate-img1.jpeg",
  },
];

const FeaturesSection = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#eeba2b",
        py: { xs: 8, md: 12 },
      }}
    >
      <Container maxWidth="lg">
        {/* Section Heading */}
        <Typography
          sx={{
            fontSize: { xs: 50, md: 50 },
            fontWeight: 600,
            fontFamily: "Arapey",
            textAlign: "center",
            mb: { xs: 6, md: 10 },
            color: "#121212",
          }}
        >
          How <em>Shazlo</em> just <em>hits</em> different
        </Typography>

        {/* Features */}
       {features.map((feature, index) => (
  <Box
    key={index}
    sx={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      mb: { xs: 10, md: 14 },
      px:2
    }}
  >
    {/* TEXT (LEFT SHIFTED) */}
    <Box
  sx={{
    width: "100%",
    maxWidth: 600,
    alignSelf: "flex-start",
    transform: {
      xs: "translateX(-8px)",
      md: "translateX(-60px)",
    },
    mb: 4,
  }}
>
  {/* FEATURE NUMBER */}
  <Typography
    sx={{
      fontSize: { xs: 64, md: 80 },
      fontFamily: "Arapey",
      fontWeight: 500,
      lineHeight: 1,
      color: "rgba(0,0,0,0.25)",
      mb: 1,
    }}
  >
    {String(index + 1).padStart(2, "0")}
  </Typography>

  <Typography
    sx={{
      fontSize: { xs: 28, md: 80 },
      fontWeight: 600,
      fontFamily: "Arapey",
      color: "#12121242",
    }}
  >
    {feature.title}
  </Typography>
  <Typography
    sx={{
      fontSize: { xs: 30, md: 80 },
      fontWeight: 600,
      fontFamily: "Arapey",
      color: "#121212",
    }}
  >
    {feature.description}
  </Typography>
</Box>

    {/* IMAGE (RIGHT SHIFTED) */}
    <Box
      component="img"
      src={feature.image}
      alt={feature.title}
      sx={{
        width: { xs: index!==1?"65%":"80%", md: "60%" },
        maxWidth: 460,
        borderRadius: "10px",
        objectFit: "cover",
        alignSelf: "flex-end",
        transform: {
          xs: "translateX(8px)",
          md: "translateX(60px)",
        },
        // boxShadow: "0px 20px 40px rgba(0,0,0,0.25)",
      }}
    />
  </Box>
))}


      </Container>
    </Box>
  );
};

export default FeaturesSection;
