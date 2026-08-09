import {
  Box,
  Typography,
  Card,
  CardContent,
} from "@mui/material";

const teamMembers = [
  {
    initial: "P",
    bg: "#fab62a",
    color: "#0a0a0a",
    name: "Pranav Deora",
    role: "Founder & CEO",
    bio: "Leads product and engineering. Built Shazlo from the ground up, from the swipe engine to the brand architecture. Obsessed with making technology feel effortless.",
  },
  {
    initial: "D",
    bg: "#ffeda3",
    color: "#7a451e",
    name: "Darsh Modi",
    role: "Marketing Co-Founder",
    bio: "Shapes the Shazlo brand and drives growth. Background in marketing and consumer psychology. Always thinking about what makes people fall in love with a product.",
  },
  {
    initial: "N",
    bg: "#ffeda3",
    color: "#7a451e",
    name: "Nabyendu Das",
    role: "Tech Co-Founder",
    bio: "Makes everything tech.",
  },
  {
    initial: "+",
    bg: "#7a451e",
    color: "#ffeda3",
    name: "We are hiring",
    role: "Open positions",
    bio: "We are looking for people who care deeply about fashion, product, and craft. If that sounds like you, we would love to hear from you.",
  },
];

export default function Team() {
  return (
    <>
      {/* TEAM */}

      <Box
        id="team"
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
          the team
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
          Built by people who{" "}
          <Box
            component="span"
            sx={{
              color: "#fab62a",
              fontStyle: "italic",
            }}
          >
            love fashion.
          </Box>
        </Typography>

        <Typography
          sx={{
            color: "#666",
            lineHeight: 1.9,
            fontWeight: 300,
            maxWidth: 620,
            mb: 6,
          }}
        >
          A small, focused team of builders and creatives
          united by one belief: style discovery should
          feel as good as the clothes you end up wearing.
        </Typography>

        <Box
          sx={{
            display: "grid",
            gap: 3,
            gridTemplateColumns: {
              xs: "1fr",
              md: "repeat(3,1fr)",
            },
          }}
        >
          {teamMembers.map((member) => (
            <Card
              key={member.name}
              elevation={0}
              sx={{
                border: "1px solid #e8e0d0",
                borderRadius: 0,
                transition: ".3s",

                "&:hover": {
                  borderColor: "#fab62a",
                  transform: "translateY(-8px)",
                  boxShadow:
                    "0 18px 40px rgba(0,0,0,.08)",
                },
              }}
            >
              <CardContent sx={{ p: 4 }}>
                <Box
                  sx={{
                    width: 52,
                    height: 52,
                    borderRadius: "50%",
                    bgcolor: member.bg,
                    color: member.color,

                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",

                    fontFamily: "Bodoni Moda",
                    fontWeight: 700,
                    fontSize: "1.4rem",

                    mb: 3,
                  }}
                >
                  {member.initial}
                </Box>

                <Typography
                  sx={{
                    fontWeight: 600,
                    mb: 0.5,
                  }}
                >
                  {member.name}
                </Typography>

                <Typography
                  sx={{
                    color: "#999",
                    fontSize: 11,
                    textTransform: "uppercase",
                    letterSpacing: ".08em",
                    mb: 2,
                  }}
                >
                  {member.role}
                </Typography>

                <Typography
                  sx={{
                    color: "#666",
                    lineHeight: 1.8,
                    fontWeight: 300,
                  }}
                >
                  {member.bio}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Box>

      {/* QUOTE */}

      <Box
        sx={{
          py: { xs: 8, md: 10 },
          px: 3,

          bgcolor: "#0a0a0a",

          textAlign: "center",
        }}
      >
        <Typography
          sx={{
            fontFamily: "Bodoni Moda",
            fontStyle: "italic",
            color: "#ffeda3",

            fontSize: {
              xs: "1.8rem",
              md: "2.5rem",
            },

            lineHeight: 1.5,
          }}
        >
          "Style is a language.
          <br />
          We are building the dictionary."
        </Typography>

        <Typography
          sx={{
            mt: 4,
            color: "#666",
            letterSpacing: ".15em",
            textTransform: "uppercase",
            fontSize: 11,
          }}
        >
          Shazlo — Swipe to Style
        </Typography>
      </Box>
    </>
  );
}