import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

const swipeCards = [
  {
    arrow: "→",
    direction: "Right",
    title: "Like it",
    description:
      "Swipe right on pieces you love. Saved to your Likes instantly, and your feed learns what draws you in.",
    animation: {
      x: [0, 7, 0],
    },
  },
  {
    arrow: "←",
    direction: "Left",
    title: "Skip it",
    description:
      "Not your style? Swipe left. Every skip is as useful as a like. It helps Shazlo zero in on what works for you.",
    animation: {
      x: [0, -7, 0],
    },
  },
  {
    arrow: "↑",
    direction: "Up",
    title: "Add to cart",
    description:
      "Found something you want? Swipe up to add it to cart. The brand website is one tap away.",
    animation: {
      y: [0, -7, 0],
    },
  },
  {
    arrow: "↓",
    direction: "Down",
    title: "Save to closet",
    description:
      "Swipe down to save a piece to your closet, your personal mood board for future outfits and inspiration.",
    animation: {
      y: [0, 7, 0],
    },
  },
];

export default function HowItWorks() {
  return (
    <Box
      id="how"
      sx={{
        px: { xs: 3, md: 7 },
        py: { xs: 6, md: 8 },

        borderBottom: "1px solid #e8e0d0",

        bgcolor: "#fff",
      }}
    >
      {/* HEADER */}

      <Box
        sx={{
          maxWidth: 850,
          mb: { xs: 5, md: 6 },
        }}
      >
        <Typography
          sx={{
            fontFamily: "Schoolbell",
            color: "#fab62a",
            fontSize: 14,
            mb: 1.5,
          }}
        >
          how it works
        </Typography>

        <Typography
          sx={{
            fontFamily: "Bodoni Moda",
            fontWeight: 700,

            fontSize: {
              xs: "2.2rem",
              md: "3.2rem",
            },

            lineHeight: 1.1,

            mb: 1.5,
          }}
        >
          Four swipes.{" "}
          <Box
            component="span"
            sx={{
              color: "#fab62a",
              fontStyle: "italic",
            }}
          >
            Your whole style.
          </Box>
        </Typography>

        <Typography
          sx={{
            color: "#777",
            maxWidth: 620,

            fontSize: {
              xs: 13,
              md: 14,
            },

            lineHeight: 1.7,

            fontWeight: 300,
          }}
        >
          Every interaction teaches Shazlo something about you.
          The more you swipe, the faster your feed becomes personal.
        </Typography>
      </Box>

      {/* SWIPE GRID */}

      <Box
        sx={{
          display: "grid",

          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(2, 1fr)",
            lg: "repeat(4, 1fr)",
          },

          border: "1px solid #e8e0d0",
        }}
      >
        {swipeCards.map((card, index) => (
          <Box
            key={card.direction}
            sx={{
              position: "relative",

              px: {
                xs: 3,
                md: 3.5,
              },

              py: {
                xs: 4,
                md: 4.5,
              },

              minHeight: {
                xs: "auto",
                lg: 245,
              },

              borderRight: {
                sm:
                  index % 2 === 0
                    ? "1px solid #e8e0d0"
                    : "none",

                lg:
                  index !== swipeCards.length - 1
                    ? "1px solid #e8e0d0"
                    : "none",
              },

              borderBottom: {
                xs:
                  index !== swipeCards.length - 1
                    ? "1px solid #e8e0d0"
                    : "none",

                sm:
                  index < 2
                    ? "1px solid #e8e0d0"
                    : "none",

                lg: "none",
              },

              transition: "background-color .3s ease",

              "&:hover": {
                bgcolor: "#fffdf7",
              },
            }}
          >
            {/* TOP ROW */}

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,

                mb: 2.5,
              }}
            >
              {/* Animated arrow */}

              <Box
                component={motion.div}
                animate={card.animation}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                sx={{
                  width: 38,
                  height: 38,

                  minWidth: 38,

                  borderRadius: "50%",

                  bgcolor: "#fab62a",

                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",

                  color: "#fff",

                  fontSize: 22,
                  fontWeight: 400,

                  lineHeight: 1,
                }}
              >
                {card.arrow}
              </Box>

              {/* Direction + title */}

              <Box>
                <Typography
                  sx={{
                    fontFamily: "Bodoni Moda",

                    fontWeight: 700,

                    fontSize: {
                      xs: "1.15rem",
                      md: "1.25rem",
                    },

                    lineHeight: 1,
                  }}
                >
                  {card.direction}
                </Typography>

                <Typography
                  sx={{
                    fontFamily: "Bodoni Moda",

                    fontStyle: "italic",

                    color: "#555",

                    fontSize: 13,

                    mt: 0.5,
                  }}
                >
                  {card.title}
                </Typography>
              </Box>
            </Box>

            {/* DESCRIPTION */}

            <Typography
              sx={{
                color: "#666",

                fontSize: {
                  xs: 12,
                  md: 12.5,
                },

                lineHeight: 1.65,

                fontWeight: 300,

                maxWidth: 240,
              }}
            >
              {card.description}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}