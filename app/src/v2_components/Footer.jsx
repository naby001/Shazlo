import {
  Box,
  Typography,
  IconButton,
  Stack,
} from "@mui/material";

import {
  Instagram,
  LinkedIn,
  Email,
} from "@mui/icons-material";

export default function Footer() {
  const navItems = [
    { label: "About", id: "about" },
    { label: "How It Works", id: "how" },
    { label: "Features", id: "features" },
    { label: "Team", id: "team" },
    { label: "Partner", id: "partner" },
    { label: "Investors", id: "investors" },
  ];

  return (
    <Box
      component="footer"
      id="footer"
      sx={{
        bgcolor: "#fff",
        color: "#111",

        px: {
          xs: 2,
          md: 3,
        },

        pt: {
          xs: 4,
          md: 5,
        },

        pb: 2,
      }}
    >
      {/* MAIN FOOTER */}

      <Box
        sx={{
          maxWidth: 1400,
          mx: "auto",

          border: "1px solid #e0e0e0",
          borderRadius: "8px",

          px: {
            xs: 3,
            md: 5,
          },

          py: {
            xs: 4,
            md: 3.5,
          },

          display: "grid",

          gridTemplateColumns: {
            xs: "1fr",
            md: "1.5fr 1fr 1fr",
          },

          gap: {
            xs: 4,
            md: 6,
          },
        }}
      >
        {/* BRAND */}

        <Box>
          <Box
            component="img"
            src="/main-logo.png"
            alt="Shazlo"
            sx={{
              height: {
                xs: 34,
                md: 38,
              },

              width: "auto",

              display: "block",

              mb: 1.5,
            }}
          />

          <Typography
            sx={{
              color: "#666",

              fontSize: {
                xs: 15,
                md: 18,
              },

              lineHeight: 1.65,

              maxWidth: 290,
            }}
          >
            Shazlo is reimagining fashion discovery with
            intelligent swiping, personalization, and a
            passion for style.
          </Typography>

          {/* SOCIALS */}

          <Stack
            direction="row"
            spacing={1}
            sx={{
              mt: 2,
            }}
          >
            <IconButton
              component="a"
              href="https://www.instagram.com/shazlo.store/"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                width: 30,
                height: 30,

                border: "1px solid #d8d8d8",

                borderRadius: "6px",

                color: "#444",

                "&:hover": {
                  color: "#fab62a",
                  borderColor: "#fab62a",
                  bgcolor: "transparent",
                },
              }}
            >
              <Instagram sx={{ fontSize: 16 }} />
            </IconButton>

            <IconButton
              component="a"
              href="https://www.linkedin.com/company/shazlo/?viewAsMember=true"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                width: 30,
                height: 30,

                border: "1px solid #d8d8d8",

                borderRadius: "6px",

                color: "#444",

                "&:hover": {
                  color: "#fab62a",
                  borderColor: "#fab62a",
                  bgcolor: "transparent",
                },
              }}
            >
              <LinkedIn sx={{ fontSize: 16 }} />
            </IconButton>

            <IconButton
              component="a"
              href="mailto:connect@shazlo.store"
              sx={{
                width: 30,
                height: 30,

                border: "1px solid #d8d8d8",

                borderRadius: "6px",

                color: "#444",

                "&:hover": {
                  color: "#fab62a",
                  borderColor: "#fab62a",
                  bgcolor: "transparent",
                },
              }}
            >
              <Email sx={{ fontSize: 16 }} />
            </IconButton>
          </Stack>
        </Box>

        {/* NAVIGATION */}

        <Box>
          <Typography
            sx={{
              color: "#fab62a",

              fontFamily: "Bodoni Moda",

              fontWeight: 600,

              fontSize: 18,

              mb: 1.5,
            }}
          >
            Navigation
          </Typography>

          <Stack spacing={0.45}>
            {navItems.map((item) => (
              <Typography
                key={item.id}
                component="a"
                href={`#${item.id}`}
                sx={{
                  color: "#555",

                  textDecoration: "none",

                  fontSize: 13,

                  lineHeight: 1.4,

                  transition: ".2s",

                  "&:hover": {
                    color: "#fab62a",
                  },
                }}
              >
                {item.label}
              </Typography>
            ))}
          </Stack>
        </Box>

        {/* CONTACT */}

        <Box>
          <Typography
            sx={{
              color: "#fab62a",

              fontFamily: "Bodoni Moda",

              fontWeight: 600,

              fontSize: 18,

              mb: 1.5,
            }}
          >
            Contact
          </Typography>

          <Typography
            component="a"
            href="mailto:connect@shazlo.store"
            sx={{
              display: "block",

              color: "#222",

              fontSize: 15,

              fontWeight: 600,

              textDecoration: "none",

              mb: 1.5,

              "&:hover": {
                color: "#fab62a",
              },
            }}
          >
            connect@shazlo.store
          </Typography>

          <Typography
            sx={{
              color: "#777",

              fontSize: 15,

              lineHeight: 1.6,

              maxWidth: 180,
            }}
          >
            We would love to hear from you.
            <br />
            Let's build the future of fashion together.
          </Typography>
        </Box>
      </Box>

      {/* BOTTOM BAR */}

      <Box
        sx={{
          maxWidth: 1400,
          mx: "auto",

          display: "flex",

          flexDirection: {
            xs: "column",
            md: "row",
          },

          justifyContent: "space-between",

          alignItems: {
            xs: "flex-start",
            md: "center",
          },

          gap: 1,

          px: {
            xs: 1,
            md: 1.5,
          },

          pt: 1.2,
        }}
      >
        <Typography
          sx={{
            color: "#888",

            fontSize: 15,

            letterSpacing: ".02em",
          }}
        >
          © 2025 Shazlo Inc. All rights reserved.
        </Typography>

        <Typography
          sx={{
            color: "#888",

            fontSize: 15,

            display: "flex",

            alignItems: "center",

            gap: 0.5,
          }}
        >
          Made with
          <Box
            component="span"
            sx={{
              color: "#fab62a",
              fontSize: 13,
              lineHeight: 1,
            }}
          >
            ♥
          </Box>
          for style lovers.
        </Typography>
      </Box>
    </Box>
  );
}