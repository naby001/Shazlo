import {
  Box,
  Typography,
  Button,
} from "@mui/material";

export default function Investors() {
  return (
    <Box
      id="investors"
      sx={{
        py: { xs: 7, md: 10 },
        px: { xs: 3, md: 8 },
        bgcolor: "#f8f8f6",
        borderBottom: "1px solid #e8e0d0",
      }}
    >
      <Box
        sx={{
          maxWidth: "1200px",
          mx: "auto",

          display: "grid",
          gap: 8,

          gridTemplateColumns: {
            xs: "1fr",
            md: "1fr 1fr",
          },

          alignItems: "center",
        }}
      >
        {/* Left */}

        <Box>
          <Typography
            sx={{
              fontFamily: "Schoolbell",
              color: "#7a451e",
              mb: 2,
            }}
          >
            for investors
          </Typography>

          <Typography
            sx={{
              fontFamily: "Bodoni Moda",
              fontWeight: 700,
              fontSize: {
                xs: "2.3rem",
                md: "3.5rem",
              },
              lineHeight: 1.1,
              mb: 3,
            }}
          >
            Backing the future of{" "}
            <Box
              component="span"
              sx={{
                color: "#fab62a",
                fontStyle: "italic",
              }}
            >
              fashion discovery.
            </Box>
          </Typography>

          <Typography
            sx={{
              color: "#666",
              lineHeight: 1.9,
              maxWidth: 550,
              mb: 5,
            }}
          >
            Shazlo is building a new way for people to
            discover fashion through intelligent,
            swipe-based experiences. We're looking for
            investors who believe in the future of
            fashion, commerce, and consumer technology.
          </Typography>

          <Button
            href="mailto:connect@shazlo.store"
            variant="contained"
            sx={{
              bgcolor: "#111",
              color: "#fab62a",

              px: 5,
              py: 1.6,

              borderRadius: 0,

              textTransform: "uppercase",

              letterSpacing: ".12em",

              "&:hover": {
                bgcolor: "#fab62a",
                color: "#111",
              },
            }}
          >
            Request Deck
          </Button>
        </Box>

        {/* Right */}

        <Box
          sx={{
            border: "1px solid #e8e0d0",
            bgcolor: "#fff",
            p: { xs: 4, md: 6 },

            display: "flex",
            flexDirection: "column",
            gap: 3,
          }}
        >
          <Typography
            sx={{
              fontFamily: "Bodoni Moda",
              fontSize: "2rem",
              fontWeight: 600,
            }}
          >
            Let's Talk
          </Typography>

          <Typography
            sx={{
              color: "#666",
              lineHeight: 1.9,
            }}
          >
            Interested in learning more about our vision,
            product roadmap, or growth plans?
          </Typography>

          <Typography
            sx={{
              color: "#666",
              lineHeight: 1.9,
            }}
          >
            We'd be happy to share our investor deck,
            answer your questions, and discuss how you
            can be part of Shazlo's journey.
          </Typography>

          <Typography
            sx={{
              color: "#7a451e",
              fontWeight: 600,
              mt: 2,
            }}
          >
            connect@shazlo.store
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}