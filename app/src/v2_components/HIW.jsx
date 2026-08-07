import {
  Box,
  Typography,
  Card,
  CardContent,
} from "@mui/material";

const swipeCards = [
  {
    arrow: "→",
    direction: "Right",
    title: "Like it",
    description:
      "Swipe right on pieces you love. Saved to your Likes instantly, and your feed learns what draws you in.",
  },
  {
    arrow: "←",
    direction: "Left",
    title: "Skip it",
    description:
      "Not your style? Swipe left. Every skip is as useful as a like. It helps Shazlo zero in on what works for you.",
  },
  {
    arrow: "↑",
    direction: "Up",
    title: "Add to cart",
    description:
      "Found something you want? Swipe up to add it to cart. The brand website is one tap away.",
  },
  {
    arrow: "↓",
    direction: "Down",
    title: "Save to closet",
    description:
      "Swipe down to save a piece to your closet, your personal mood board for future outfits and inspiration.",
  },
];

export default function HowItWorks() {
  return (
    <Box
      id="how"
      sx={{
        py: { xs: 6, md: 9 },
        px: { xs: 3, md: 8 },
        borderBottom: "1px solid #e8e0d0",
      }}
    >
      <Typography
        sx={{
          fontFamily: "Schoolbell",
          color: "#7a451e",
          fontSize: 15,
          mb: 2,
        }}
      >
        how it works
      </Typography>

      <Typography
        sx={{
          fontFamily: "Bodoni Moda",
          fontWeight: 700,
          fontSize: {
            xs: "2.3rem",
            md: "3.4rem",
          },
          lineHeight: 1.1,
          mb: 2,
        }}
      >
        Four swipes.{" "}
        <Box
          component="span"
          sx={{
            fontStyle: "italic",
            color: "#fab62a",
          }}
        >
          Your whole style.
        </Box>
      </Typography>

      <Typography
        sx={{
          color: "#666",
          maxWidth: 600,
          lineHeight: 1.9,
          fontWeight: 300,
          mb: 6,
        }}
      >
        Every interaction teaches Shazlo something about you.
        The more you swipe, the faster your feed becomes
        personal.
      </Typography>

      <Box
        sx={{
          display: "grid",
          gap: 3,

          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(2,1fr)",
            lg: "repeat(4,1fr)",
          },
        }}
      >
        {swipeCards.map((card) => (
          <Card
            key={card.direction}
            elevation={0}
            sx={{
              border: "1px solid #e8e0d0",
              borderRadius: 0,
              transition: ".25s",

              "&:hover": {
                borderColor: "#fab62a",
                transform: "translateY(-6px)",
                boxShadow:
                  "0 15px 35px rgba(0,0,0,.08)",
              },
            }}
          >
            <CardContent sx={{ p: 4 }}>
              <Typography
                sx={{
                  color: "#fab62a",
                  fontSize: "2rem",
                  lineHeight: 1,
                  mb: 2,
                }}
              >
                {card.arrow}
              </Typography>

              <Typography
                sx={{
                  fontFamily: "Bodoni Moda",
                  fontWeight: 700,
                  color: "#fab62a",
                  fontSize: "2.5rem",
                  lineHeight: 1,
                  mb: 2,
                }}
              >
                {card.direction}
              </Typography>

              <Typography
                sx={{
                  fontFamily: "Bodoni Moda",
                  fontStyle: "italic",
                  fontSize: "1.25rem",
                  mb: 1.5,
                }}
              >
                {card.title}
              </Typography>

              <Typography
                sx={{
                  color: "#666",
                  lineHeight: 1.8,
                  fontWeight: 300,
                }}
              >
                {card.description}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
}