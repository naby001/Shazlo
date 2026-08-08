import {
  Box,
  Typography,
  Button,
  Stack,
} from "@mui/material";

import AppleIcon from "@mui/icons-material/Apple";
import AndroidIcon from "@mui/icons-material/Android";

import heroImage from "../assets/v2_1.png";

export default function Hero() {
  return (
    <Box
      id="hero"
      sx={{
        display: "grid",
        gridTemplateColumns: {
          xs: "1fr",
          md: "1.1fr .9fr",
        },
        minHeight: {
          xs: "auto",
          md: "calc(100vh - 64px)",
        },
        borderBottom: "1px solid #e8e0d0",
      }}
    >
      {/* LEFT */}

      <Box
        sx={{
          px: { xs: 3, md: 8 },
          py: { xs: 6, md: 10 },

          display: "flex",
          flexDirection: "column",
          justifyContent: "center",

          borderRight: {
            xs: "none",
            md: "1px solid #e8e0d0",
          },

          borderBottom: {
            xs: "1px solid #e8e0d0",
            md: "none",
          },
        }}
      >
        <Typography
          sx={{
            fontFamily: "Bodoni Moda",
            fontWeight: 700,
            fontSize: {
              xs: "3rem",
              md: "5rem",
            },
            lineHeight: 1,
          }}
        >
          Fashion,
        </Typography>

        <Typography
          sx={{
            fontFamily: "Bodoni Moda",
            fontStyle: "italic",
            color: "#fab62a",
            fontWeight: 700,
            fontSize: {
              xs: "3rem",
              md: "5rem",
            },
            lineHeight: 1,
          }}
        >
          reimagined.
        </Typography>

        <Typography
          sx={{
            mt: 4,
            maxWidth: 420,
            color: "#666",
            lineHeight: 1.9,
            fontWeight: 300,
          }}
        >
          No more endless scrolling. No boring filters.
          Open Shazlo, swipe through looks you love,
          and let the app learn your taste one gesture
          at a time. Shopping, finally made fun.
        </Typography>

        <Stack
          direction="row"
          spacing={2}
          mt={5}
          flexWrap="wrap"
        >
          <Button
            variant="outlined"
            startIcon={<AppleIcon />}
            href="https://apps.apple.com/in/app/shazlo/id6756888889"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              borderColor: "#000",
              color: "#000",
              px: 3,
              py: 1.2,
              borderRadius: 0,
              textTransform: "uppercase",
              letterSpacing: ".08em",

              "&:hover": {
                bgcolor: "#000",
                color: "#fab62a",
                borderColor: "#000",
              },
            }}
          >
            App Store
          </Button>

          <Button
            variant="outlined"
            startIcon={<AndroidIcon />}
            href="https://play.google.com/store/apps/details?id=com.shazlo.mobile"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              borderColor: "#000",
              color: "#000",
              px: 3,
              py: 1.2,
              borderRadius: 0,
              textTransform: "uppercase",
              letterSpacing: ".08em",

              "&:hover": {
                bgcolor: "#000",
                color: "#fab62a",
                borderColor: "#000",
              },
            }}
          >
            Google Play
          </Button>
        </Stack>

        <Typography
          sx={{
            mt: 6,
            fontFamily: "Bodoni Moda",
            letterSpacing: ".3em",
            textTransform: "uppercase",
            color: "#bbb",
            fontSize: 12,
          }}
        >
          Shazlo · Swipe to Style
        </Typography>
      </Box>

     {/* RIGHT */}

<Box
  sx={{
    position: "relative",
    overflow: "hidden",

    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    minHeight: {
      xs: 400,
      md: "auto",
    },

    bgcolor: "#fafaf8",
  }}
>
  {/* Golden fire / paint glow */}

  <Box
    sx={{
      position: "absolute",

      width: {
        xs: "80%",
        md: "75%",
      },

      height: {
        xs: "55%",
        md: "65%",
      },

      top: "18%",
      left: "18%",

      background: `
        radial-gradient(
          ellipse at center,
          rgba(250,182,42,.48) 0%,
          rgba(250,182,42,.30) 30%,
          rgba(250,182,42,.14) 55%,
          rgba(250,182,42,0) 75%
        )
      `,

      filter: "blur(25px)",

      transform: "rotate(-12deg)",

      pointerEvents: "none",

      zIndex: 0,
    }}
  />

  {/* Secondary golden glow */}

  <Box
    sx={{
      position: "absolute",

      width: "45%",
      height: "45%",

      top: "35%",
      left: "5%",

      background:
        "radial-gradient(circle, rgba(255,211,92,.25) 0%, rgba(255,211,92,0) 70%)",

      filter: "blur(30px)",

      pointerEvents: "none",

      zIndex: 0,
    }}
  />

  {/* Giant S */}

  <Typography
    sx={{
      position: "absolute",

      fontFamily: "Bodoni Moda",
      fontWeight: 700,

      fontSize: {
        xs: "16rem",
        md: "28rem",
      },

      color: "#fab62a",

      /*
       * More visible than before.
       * The phone will cover the middle,
       * while the edges of the S remain visible.
       */
      opacity: 0.30,

      userSelect: "none",
      pointerEvents: "none",

      lineHeight: 1,

      /*
       * Push the S slightly left so it
       * peeks around the phone.
       */
      left: {
        xs: "35%",
        md: "20%",
      },

      top: "50%",

      transform: "translate(-50%, -50%)",

      zIndex: 1,
    }}
  >
    S
  </Typography>

  {/* Hero Image */}

  <Box
    component="img"
    src={heroImage}
    alt="Shazlo fashion"
    sx={{
      position: "relative",

      width: {
        xs: "85%",
        sm: "70%",
        md: "82%",
      },

      maxWidth: 600,

      height: {
        xs: 350,
        md: 600,
      },

      objectFit: "contain",

      zIndex: 2,

      display: "block",

      userSelect: "none",
    }}
  />

  {/* Swipe to Style */}

  <Typography
    sx={{
      position: "absolute",

      bottom: {
        xs: 25,
        md: 40,
      },

      right: {
        xs: 25,
        md: 40,
      },

      fontFamily: "Bodoni Moda",

      letterSpacing: ".3em",

      textTransform: "uppercase",

      color: "#fab62a",

      fontSize: 12,

      zIndex: 3,
    }}
  >
    Swipe to Style
  </Typography>
</Box>   </Box>
  );
}