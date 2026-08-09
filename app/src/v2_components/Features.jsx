import {
  Box,
  Typography,
} from "@mui/material";

import StarOutlineIcon from "@mui/icons-material/StarOutline";
import CheckroomOutlinedIcon from "@mui/icons-material/CheckroomOutlined";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import PaidOutlinedIcon from "@mui/icons-material/PaidOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import featureFeed from "../assets/v2_3.jpeg"
import featureCloset from "../assets/v2_4.jpeg";
import featureCloset2 from "../assets/v2_5.jpeg";
import featureCloset3 from "../assets/v2_6.jpg";
const features = [
  {
    title: "Personalized feed",
    description:
      "Your feed evolves with every swipe. Within a handful of interactions, Shazlo already knows more about your taste than most shopping apps ever will.",
    icon: StarOutlineIcon,
    image: featureFeed,
  },
  {
    title: "Closets",
    description:
      "Create themed closets: formal wear, vacation looks, everyday fits. Add saved pieces, mix and match, and send items straight to cart when ready.",
    icon: CheckroomOutlinedIcon,
    image: featureCloset2,
  },
  {
    title: "Explore brands",
    description:
      "Use search to browse specific brands and explore their full collections in one clean, uncluttered place. No tabs. No noise.",
    icon: StorefrontOutlinedIcon,
    image: featureCloset,
  },
  {
    title: "Shazlo Coins",
    description:
      "Earn coins as you engage. Every swipe, every save, every interaction builds your Shazlo activity and rewards you for discovering more.",
    icon: PaidOutlinedIcon,
    image: "/feature-coins.jpg",
  },
  // {
  //   title: "Product details",
  //   description:
  //     "Tap the info icon on any card to see material details, care instructions, and return policy before you commit.",
  //   icon: InfoOutlinedIcon,
  //   image: "/feature-details.jpg",
  // },
  {
    title: "Share with friends",
    description:
      "Found something great? Share any product directly from the card. Send looks to friends or ask for opinions.",
    icon: ShareOutlinedIcon,
    image: featureCloset3,
  },
];

export default function Features() {
  return (
    <Box
      id="features"
      sx={{
        px: {
          xs: 2,
          md: 6,
        },

        py: {
          xs: 6,
          md: 9,
        },

        borderBottom: "1px solid #e8e0d0",

        bgcolor: "#fff",
      }}
    >
      {/* HEADER */}

      <Box
        sx={{
          mb: {
            xs: 5,
            md: 6,
          },
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
          what you get
        </Typography>

        <Typography
          sx={{
            fontFamily: "Bodoni Moda",
            fontWeight: 700,

            fontSize: {
              xs: "2.2rem",
              md: "3.3rem",
            },

            lineHeight: 1.1,
          }}
        >
          Everything your wardrobe{" "}
          <Box
            component="span"
            sx={{
              color: "#fab62a",
              fontStyle: "italic",
            }}
          >
            has been missing.
          </Box>
        </Typography>
      </Box>

      {/* FEATURE GRID */}

      <Box
        sx={{
          display: "grid",

          gridTemplateColumns: {
            xs: "1fr",
            md: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
          },

          border: "1px solid #e8e0d0",
        }}
      >
        {features.map((feature, index) => {
          const Icon = feature.icon;

          return (
            <Box
              key={feature.title}
              sx={{
                position: "relative",

                minHeight: {
                  xs: 220,
                  md: 230,
                },

                display: "flex",

                overflow: "hidden",

                borderRight: {
                  md:
                    index % 2 === 0
                      ? "1px solid #e8e0d0"
                      : "none",

                  lg:
                    index % 3 !== 2
                      ? "1px solid #e8e0d0"
                      : "none",
                },

                borderBottom: {
                  xs:
                    index !== features.length - 1
                      ? "1px solid #e8e0d0"
                      : "none",

                  md:
                    index < 4
                      ? "1px solid #e8e0d0"
                      : "none",

                  lg:
                    index < 3
                      ? "1px solid #e8e0d0"
                      : "none",
                },

                transition: "background-color .35s ease",

                "&:hover": {
                  bgcolor: "#fffdf7",
                },

                "&:hover .feature-image": {
                  transform: "scale(1.06)",
                },

                "&:hover .feature-icon": {
                  transform: "rotate(-8deg) scale(1.08)",
                },
              }}
            >
              {/* TEXT */}

              <Box
                sx={{
                  position: "relative",

                  zIndex: 2,

                  width: {
                    xs: "62%",
                    md: "60%",
                  },

                  p: {
                    xs: 2.5,
                    md: 3,
                  },
                }}
              >
                {/* ICON */}

                <Icon
                  className="feature-icon"
                  sx={{
                    color: "#fab62a",

                    fontSize: {
                      xs: 25,
                      md: 28,
                    },

                    mb: 1.5,

                    transition:
                      "transform .35s ease",
                  }}
                />

                {/* TITLE */}

                <Typography
                  sx={{
                    fontFamily: "Bodoni Moda",

                    fontWeight: 600,

                    fontSize: {
                      xs: 13,
                      md: 14,
                    },

                    lineHeight: 1.2,

                    mb: 1,
                  }}
                >
                  {feature.title}
                </Typography>

                {/* DESCRIPTION */}

                <Typography
                  sx={{
                    color: "#777",

                    fontSize: {
                      xs: 10.5,
                      md: 11,
                    },

                    lineHeight: 1.65,

                    fontWeight: 300,
                  }}
                >
                  {feature.description}
                </Typography>
              </Box>

            {/* IMAGE */}

<Box
  sx={{
    position: "absolute",

    right: 0,
    top: 0,
    bottom: 0,

    width: {
      xs: "40%",
      md: "42%",
    },

    display: "flex",
    alignItems: "flex-end",
    justifyContent: "center",

    overflow: "hidden",

    background:
      "linear-gradient(135deg, #fffdf5 0%, #f8f5ec 100%)",
  }}
>
  <Box
    component="img"
    className="feature-image"
    src={feature.image}
    alt={feature.title}
    sx={{
      width: {
        xs: "92%",
        md: "90%",
      },

      height: "auto",

      maxHeight: "115%",

      objectFit: "contain",

      display: "block",

      transform:
        "translateY(50%)",

      transformOrigin: "bottom center",

      transition:
        "transform .55s cubic-bezier(.22,1,.36,1)",

      filter:
        "drop-shadow(0 14px 22px rgba(0,0,0,.12))",
    }}
  />
</Box>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}