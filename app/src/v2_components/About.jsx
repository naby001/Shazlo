import { Box, Typography } from "@mui/material";

export default function About() {
  return (
    <>
      {/* ABOUT */}

      <Box
        id="about"
        sx={{
          borderBottom: "1px solid #e8e0d0",
        }}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "1fr 1fr",
            },
          }}
        >
          {/* LEFT */}

          <Box
            sx={{
              px: { xs: 3, md: 8 },
              py: { xs: 5, md: 8 },

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
                fontFamily: "Schoolbell",
                color: "#7a451e",
                mb: 2,
                fontSize: 15,
              }}
            >
              the problem
            </Typography>

            <Typography
              sx={{
                fontFamily: "Bodoni Moda",
                fontStyle: "italic",
                fontSize: {
                  xs: "2rem",
                  md: "2.3rem",
                },
                mb: 2,
              }}
            >
              Fashion apps are overwhelming.
            </Typography>

            <Typography
              sx={{
                color: "#666",
                lineHeight: 1.9,
                fontWeight: 300,
              }}
            >
              Endless product grids, algorithmic noise,
              no personality. You spend 40 minutes
              scrolling and close the app with nothing
              you are excited about. Discovery became a
              chore, and that is something we refused
              to accept.
            </Typography>
          </Box>

          {/* RIGHT */}

          <Box
            sx={{
              px: { xs: 3, md: 8 },
              py: { xs: 5, md: 8 },
            }}
          >
            <Typography
              sx={{
                fontFamily: "Schoolbell",
                color: "#7a451e",
                mb: 2,
                fontSize: 15,
              }}
            >
              our answer
            </Typography>

            <Typography
              sx={{
                fontFamily: "Bodoni Moda",
                fontStyle: "italic",
                fontSize: {
                  xs: "2rem",
                  md: "2.3rem",
                },
                mb: 2,
              }}
            >
              Swipe. Learn. Style.
            </Typography>

            <Typography
              sx={{
                color: "#666",
                lineHeight: 1.9,
                fontWeight: 300,
              }}
            >
              Shazlo uses swipe-based discovery to
              understand your taste instinctively.
              You know in a second whether an outfit
              is you or not. Every swipe trains your
              personal style engine, so the more you
              use it, the smarter it gets. No grids.
              No noise. Just looks that feel like you.
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* STATS */}

      <Box
        sx={{
          display: "grid",

          gridTemplateColumns: {
            xs: "repeat(2,1fr)",
            md: "repeat(4,1fr)",
          },

          borderBottom: "1px solid #e8e0d0",
        }}
      >
        {[
          ["2025", "Founded"],
          ["All", "Genders welcome"],
          ["India", "Home market"],
          ["Free", "Always"],
        ].map(([value, label], index) => (
          <Box
            key={label}
            sx={{
              py: 6,

              textAlign: "center",

              borderRight: {
                md: index !== 3
                  ? "1px solid #e8e0d0"
                  : "none",
              },

              borderBottom: {
                xs: index < 2
                  ? "1px solid #e8e0d0"
                  : "none",

                md: "none",
              },
            }}
          >
            <Typography
              sx={{
                fontFamily: "Bodoni Moda",
                color: "#fab62a",
                fontWeight: 700,
                fontSize: {
                  xs: "2.2rem",
                  md: "2.8rem",
                },
                lineHeight: 1,
              }}
            >
              {value}
            </Typography>

            <Typography
              sx={{
                mt: 1,
                color: "#999",
                fontSize: 11,
                letterSpacing: ".12em",
                textTransform: "uppercase",
              }}
            >
              {label}
            </Typography>
          </Box>
        ))}
      </Box>
    </>
  );
}