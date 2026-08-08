import { Box, Typography } from "@mui/material";

import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import CardGiftcardOutlinedIcon from "@mui/icons-material/CardGiftcardOutlined";

const stats = [
  {
    value: "2025",
    label: "Founded",
    icon: CalendarMonthOutlinedIcon,
  },
  {
    value: "All",
    label: "Genders welcome",
    icon: PeopleOutlineIcon,
  },
  {
    value: "India",
    label: "Home market",
    icon: LocationOnOutlinedIcon,
  },
  {
    value: "Free",
    label: "Always",
    icon: CardGiftcardOutlinedIcon,
  },
];

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
            xs: "repeat(2, 1fr)",
            md: "repeat(4, 1fr)",
          },

          borderBottom: "1px solid #e8e0d0",

          bgcolor: "#fff",
        }}
      >
        {stats.map((stat, index) => {
          const Icon = stat.icon;

          return (
            <Box
              key={stat.label}
              sx={{
                py: { xs: 4, md: 5 },

                textAlign: "center",

                borderRight: {
                  xs: index % 2 === 0
                    ? "1px solid #e8e0d0"
                    : "none",

                  md:
                    index !== 3
                      ? "1px solid #e8e0d0"
                      : "none",
                },

                borderBottom: {
                  xs:
                    index < 2
                      ? "1px solid #e8e0d0"
                      : "none",

                  md: "none",
                },

                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              {/* ICON */}

              <Icon
                sx={{
                  color: "#fab62a",

                  fontSize: {
                    xs: 32,
                    md: 38,
                  },

                  mb: 1.5,

                  strokeWidth: 1,

                  // keeps the icon visually light
                  fontWeight: 300,
                }}
              />

              {/* VALUE */}

              <Typography
                sx={{
                  fontFamily: "Bodoni Moda",
                  color: "#111",
                  fontWeight: 700,

                  fontSize: {
                    xs: "2rem",
                    md: "2.5rem",
                  },

                  lineHeight: 1,

                  mb: 1,
                }}
              >
                {stat.value}
              </Typography>

              {/* LABEL */}

              <Typography
                sx={{
                  color: "#999",

                  fontSize: {
                    xs: 9,
                    md: 10,
                  },

                  letterSpacing: ".14em",

                  textTransform: "uppercase",
                }}
              >
                {stat.label}
              </Typography>
            </Box>
          );
        })}
      </Box>
    </>
  );
}