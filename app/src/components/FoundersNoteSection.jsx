import React from "react";
import { Box, Typography, Container } from "@mui/material";

const features = [
  {
    title: "Swipe on products",
    description:
      "To get an ultra-curated feed",
    image: "/product1.jpg",
  },
  {
    title: "Swipe, Don’t Search",
    description:
      "Effortlessly explore outfits by swiping. The more you swipe, the better it gets.",
    image: "/assets/feature-2.jpg",
  },
  {
    title: "Partnered with Real Brands",
    description:
      "We connect you directly with trusted fashion brands—no fakes, no noise.",
    image: "/assets/feature-3.jpg",
  },
];

const FoundersSection = () => {
  return (
    <Box
  sx={{
    position: "relative",
    py: { xs: 8, md: 12 },
    backgroundImage: "url('/background12.jpg')", // <-- your background image
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
>
  {/* WHITE OVERLAY */}
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
    zIndex: 0,
  }}
/>


  {/* CONTENT */}
  <Container
    maxWidth="lg"
    sx={{
      position: "relative",
      zIndex: 1,
    }}
  >
    
      {/* <Container maxWidth="lg"> */}
        {/* Section Heading */}
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
  Shazlo is a dream born in the rooms of four undergraduate students from
  Ahmedabad and Kolkata who had a core mission – revolutionising how India
  shops.
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
  Shazlo serves as a gamified fashion discovery platform, where you swipe to
  style, share and shine. Moving beyond traditional e-commerce, Shazlo aims to
  create shared experiences and add an element of joy while buying your
  favourite piece of clothing.
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
  From local artisans to modern designers, Shazlo brings it all to a single
  platform, highlighting the beauty of Made in India!
</Typography>

<Box sx={{ height: 1, backgroundColor: "#999", mb: 2 }} />


      </Container>
    </Box>
  );
};

export default FoundersSection;
