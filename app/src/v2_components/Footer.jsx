import {
  Box,
  Typography,
  IconButton,
  Stack,
} from "@mui/material";

import {
  Instagram,
  LinkedIn,
  X,
  Email,
} from "@mui/icons-material";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "#0a0a0a",
        color: "#fff",
        pt: 8,
        pb: 4,
        px: { xs: 3, md: 8 },
      }}
    >
      <Box
        sx={{
          maxWidth: "1250px",
          mx: "auto",

          display: "grid",
          gap: 6,

          gridTemplateColumns: {
            xs: "1fr",
            md: "1.6fr 1fr 1fr",
          },

          pb: 6,
          borderBottom: "1px solid rgba(255,255,255,.08)",
        }}
      >
        {/* Logo + Description */}

        <Box>
          <Box
            component="img"
            src="/main-logo.png"
            alt="Shazlo"
            sx={{
              height: 42,
              mb: 3,
            }}
          />

          <Typography
            sx={{
              color: "rgba(255,255,255,.65)",
              lineHeight: 1.9,
              maxWidth: 420,
              mb: 4,
            }}
          >
            Shazlo is reimagining fashion discovery with
            swipe-based shopping, intelligent
            recommendations, and a personalized style
            experience.
          </Typography>

          <Stack direction="row" spacing={1}>
  <IconButton
    component="a"
    href="https://www.instagram.com/shazlo.store/"
    target="_blank"
    rel="noopener noreferrer"
    sx={{
      color: "#fab62a",
      border: "1px solid rgba(250,182,42,.25)",
      "&:hover": {
        bgcolor: "#fab62a",
        color: "#000",
      },
    }}
  >
    <Instagram fontSize="small" />
  </IconButton>

  <IconButton
    component="a"
    href="https://www.linkedin.com/company/shazlo/?viewAsMember=true"
    target="_blank"
    rel="noopener noreferrer"
    sx={{
      color: "#fab62a",
      border: "1px solid rgba(250,182,42,.25)",
      "&:hover": {
        bgcolor: "#fab62a",
        color: "#000",
      },
    }}
  >
    <LinkedIn fontSize="small" />
  </IconButton>

  <IconButton
    component="a"
    href="mailto:connect@shazlo.store"
    sx={{
      color: "#fab62a",
      border: "1px solid rgba(250,182,42,.25)",
      "&:hover": {
        bgcolor: "#fab62a",
        color: "#000",
      },
    }}
  >
    <Email fontSize="small" />
  </IconButton>
</Stack>
        </Box>

        {/* Navigation */}

        <Box>
          <Typography
            sx={{
              fontFamily: "Bodoni Moda",
              fontSize: "1.3rem",
              mb: 3,
            }}
          >
            Navigation
          </Typography>

          <Stack spacing={1.5}>
            {[
              "About",
              "How It Works",
              "Features",
              "Team",
              "Partner",
              "Investors",
            ].map((item) => (
              <Typography
                key={item}
                component="a"
                href={`#${item
                  .toLowerCase()
                  .replace(/\s+/g, "")}`}
                sx={{
                  color: "rgba(255,255,255,.65)",
                  textDecoration: "none",
                  transition: ".25s",

                  "&:hover": {
                    color: "#fab62a",
                  },
                }}
              >
                {item}
              </Typography>
            ))}
          </Stack>
        </Box>

        {/* Contact */}

        <Box>
          <Typography
            sx={{
              fontFamily: "Bodoni Moda",
              fontSize: "1.3rem",
              mb: 3,
            }}
          >
            Contact
          </Typography>

          

          <Typography
            component="a"
            href="mailto:connect@shazlo.store"
            sx={{
              display: "block",
              mt: 1,
              color: "#fab62a",
              textDecoration: "none",

              "&:hover": {
                textDecoration: "underline",
              },
            }}
          >
            connect@shazlo.store
          </Typography>

          <Typography
            sx={{
              color: "rgba(255,255,255,.5)",
              mt: 4,
              lineHeight: 1.8,
            }}
          >
            Interested in partnering, investing, or
            joining our team? We'd love to hear from
            you.
          </Typography>
        </Box>
      </Box>

      {/* Bottom */}

      <Box
        sx={{
          mt: 4,

          display: "flex",
          flexDirection: {
            xs: "column",
            md: "row",
          },

          justifyContent: "space-between",
          alignItems: "center",

          gap: 2,
        }}
      >
        <Typography
          sx={{
            color: "rgba(255,255,255,.45)",
            fontSize: 14,
          }}
        >
          © {new Date().getFullYear()} Shazlo Private
          Limited. All rights reserved.
        </Typography>

        <Typography
          sx={{
            color: "#fab62a",
            letterSpacing: ".15em",
            textTransform: "uppercase",
            fontSize: 11,
          }}
        >
          Swipe to Style
        </Typography>
      </Box>
    </Box>
  );
}