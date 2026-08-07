import {
  Box,
  Typography,
  Button,
  Stack,
} from "@mui/material";

import AppleIcon from "@mui/icons-material/Apple";
import AndroidIcon from "@mui/icons-material/Android";

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
        {/* <Typography
          sx={{
            fontFamily: "Schoolbell",
            color: "#7a451e",
            mb: 2,
            fontSize: 15,
          }}
        >
          Shazlo Private Limited
        </Typography> */}

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
            xs: 260,
            md: "auto",
          },

          bgcolor: "#fafaf8",
        }}
      >
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
            opacity: 0.05,

            userSelect: "none",

            lineHeight: 1,
          }}
        >
          S
        </Typography>

        <Typography
          sx={{
            position: "relative",

            fontFamily: "Bodoni Moda",

            letterSpacing: ".3em",

            textTransform: "uppercase",

            color: "#fab62a",

            fontSize: 12,
          }}
        >
          Swipe to Style
        </Typography>
      </Box>
    </Box>
  );
}