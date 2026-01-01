import React from "react";
import { Box, Typography, Button } from "@mui/material";

const HeroSection = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100%",
        backgroundImage: "url('/background.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: 2,
      }}
    >
      {/* Card */}
      <Box
        sx={{
          width: "100%",
          maxWidth: 420,
          backgroundColor: "#f4efe7",
          borderRadius: "28px",
          px: { xs: 1, sm: 2 },
          py: { xs: 4, sm: 5 },
          textAlign: "center",
          boxShadow: "0px 25px 50px rgba(0,0,0,0.18)",
        }}
      >
       <Box
  sx={{
    display: "flex",
    justifyContent: "center",
    // mb: 2,
  }}
>
  <Box
    component="img"
    src="/main-logo.png"   // your logo path
    alt="Wavelength"
    sx={{
      height: 100,            // adjust to match design
      width: "auto",
      objectFit: "contain",
    }}
  />
</Box>

        {/* Headline */}
        <Typography
          sx={{
            fontSize: 16,
            color: "#000",
            mb: 0.5,
          }}
        >
          The app that finds you
        </Typography>

        <Typography
          sx={{
            fontSize: { xs: 34, sm: 38 },
            fontWeight: 500,
            fontFamily: "serif",
            lineHeight: 1.1,
          }}
        >
          clothes from your <em>swipes</em>
        </Typography>

        <Typography
          sx={{
            fontSize: 16,
            mt: 0.5,
            mb: 2,
          }}
        >
          so you don’t get bored browsing large catalogues
        </Typography>

        {/* Subtext */}
        <Typography
          sx={{
            fontSize: 14,
            color: "#5f5a54",
            lineHeight: 1.6,
            mb: 4,
            paddingLeft:2,
            paddingRight:2
          }}
        >
          You swipe right and left on products and as you swipe the app learns your style
        </Typography>

       {/* CTA Buttons */}
<Box
  sx={{
    display: "flex",
    gap: 2,
    justifyContent: "center",
    flexWrap: "wrap", // stacks nicely on very small screens
  }}
>
  <Button
    variant="contained"
    sx={{
      backgroundColor: "#0f1712",
      color: "#eeba2b",
      borderRadius: "14px",
      px: 3.5,
      py: 1.6,
      fontSize: 15,
      textTransform: "none",
      "&:hover": {
        backgroundColor: "#0b120e",
      },
    }}
  >
    Join Waitlist
  </Button>

  <Button
    variant="outlined"
    sx={{
      borderColor: "#0f1712",
      color: "#0f1712",
      borderRadius: "14px",
      px: 3.5,
      py: 1.6,
      fontSize: 15,
      textTransform: "none",
      "&:hover": {
        borderColor: "#0b120e",
        backgroundColor: "rgba(0,0,0,0.03)",
      },
    }}
  >
    Partner with Us
  </Button>
</Box>

      </Box>
    </Box>
  );
};

export default HeroSection;
