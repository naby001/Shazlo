import {
  Box,
  Typography,
  Card,
  CardContent,
} from "@mui/material";

const features = [
  {
    title: "Personalized feed",
    description:
      "Your feed evolves with every swipe. Within a handful of interactions, Shazlo already knows more about your taste than most shopping apps ever will.",
  },
  {
    title: "Closets",
    description:
      "Create themed closets: formal wear, vacation looks, everyday fits. Add saved pieces, mix and match, and send items straight to cart when ready.",
  },
  {
    title: "Explore brands",
    description:
      "Use search to browse specific brands and explore their full collections in one clean, uncluttered place. No tabs. No noise.",
  },
  {
    title: "Shazlo Coins",
    description:
      "Earn coins as you engage. Every swipe, every save, every interaction builds your Shazlo activity and rewards you for discovering more.",
  },
  {
    title: "Product details",
    description:
      "Tap the info icon on any card to see material details, care instructions, and return policy before you commit.",
  },
  {
    title: "Share with friends",
    description:
      "Found something great? Share any product directly from the card. Send looks to friends or ask for opinions.",
  },
];

export default function Features() {
  return (
    <Box
      id="features"
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
        what you get
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
          mb: 6,
        }}
      >
        Everything your wardrobe{" "}
        <Box
          component="span"
          sx={{
            fontStyle: "italic",
            color: "#fab62a",
          }}
        >
          has been missing.
        </Box>
      </Typography>

      <Box
        sx={{
          display: "grid",
          gap: 3,
          gridTemplateColumns: {
            xs: "1fr",
            md: "repeat(2,1fr)",
            lg: "repeat(3,1fr)",
          },
        }}
      >
        {features.map((feature) => (
          <Card
            key={feature.title}
            elevation={0}
            sx={{
              border: "1px solid #e8e0d0",
              borderRadius: 0,
              transition: "all .3s ease",
              cursor: "pointer",

              "&:hover": {
                borderColor: "#fab62a",
                transform: "translateY(-8px)",
                boxShadow: "0 18px 40px rgba(0,0,0,.08)",
              },
            }}
          >
            <CardContent sx={{ p: 4 }}>
              <Typography
                sx={{
                  color: "#fab62a",
                  fontSize: "1.6rem",
                  mb: 2,
                  fontFamily: "Bodoni Moda",
                  lineHeight: 1,
                }}
              >
                ✦
              </Typography>

              <Typography
                sx={{
                  fontSize: "1rem",
                  fontWeight: 500,
                  mb: 1.5,
                }}
              >
                {feature.title}
              </Typography>

              <Typography
                sx={{
                  color: "#666",
                  lineHeight: 1.85,
                  fontWeight: 300,
                }}
              >
                {feature.description}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
}