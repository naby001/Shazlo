import {
  Box,
  Typography,
  Tabs,
  Tab,
  TextField,
  MenuItem,
  Button,
  Slider,
  Stack,
} from "@mui/material";

import {
  StorefrontOutlined,
  PriceChangeOutlined,
  LinkOutlined,
  FavoriteBorderOutlined,
} from "@mui/icons-material";

import { useState } from "react";

import partnerImage from "../assets/v2_2.png";

export default function Partner() {
  const [tab, setTab] = useState(0);

  const [price, setPrice] = useState([500, 10000]);

  const categories = [
    "Women's fashion",
    "Men's fashion",
    "Unisex / Gender-neutral",
    "Kids fashion",
    "Accessories",
    "Footwear",
    "Sustainable fashion",
    "Other",
  ];

  const benefits = [
    {
      icon: StorefrontOutlined,
      text: "Showcase your brand to high-intent shoppers.",
    },
    {
      icon: PriceChangeOutlined,
      text: "Set your price range and target your audience.",
    },
    {
      icon: LinkOutlined,
      text: "Drive traffic directly to your website or store.",
    },
    {
      icon: FavoriteBorderOutlined,
      text: "Track engagement with Shazlo's dashboard.",
    },
  ];

  return (
    <Box
      id="partner"
      sx={{
        px: {
          xs: 2,
          md: 4,
        },

        py: {
          xs: 6,
          md: 8,
        },

        borderBottom: "1px solid #e8e0d0",

        bgcolor: "#fff",
      }}
    >
      {/* SECTION HEADER */}

      <Box
        sx={{
          maxWidth: 1350,
          mx: "auto",
          mb: 4,
        }}
      >
        {/* <Typography
          sx={{
            fontFamily: "Schoolbell",
            color: "#fab62a",
            fontSize: 14,
            mb: 1,
          }}
        >
          partner with us
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
          }}
        >
          Grow together with{" "}
          <Box
            component="span"
            sx={{
              color: "#fab62a",
              fontStyle: "italic",
            }}
          >
            Shazlo.
          </Box>
        </Typography> */}
      </Box>

      {/* MAIN PANEL */}

      <Box
        sx={{
          maxWidth: 1350,
          mx: "auto",

          border: "1px solid #dedede",
          borderRadius: "8px",

          overflow: "hidden",
        }}
      >
        {/* TABS */}

        <Tabs
          value={tab}
          onChange={(e, value) => setTab(value)}
          sx={{
            px: {
              xs: 2,
              md: 3,
            },

            borderBottom: "1px solid #e8e0d0",

            minHeight: 48,

            "& .MuiTabs-indicator": {
              backgroundColor: "#fab62a",
              height: 2,
            },

            "& .MuiTab-root": {
              minHeight: 48,

              textTransform: "uppercase",

              letterSpacing: ".08em",

              fontSize: {
                xs: 10,
                md: 11,
              },

              color: "#777",

              "&.Mui-selected": {
                color: "#111",
              },
            },
          }}
        >
          <Tab label="Register your Brand" />
          <Tab label="Partnership Types" />
        </Tabs>

        {/* REGISTER BRAND */}

        {tab === 0 && (
          <Box
            sx={{
              display: "grid",

              gridTemplateColumns: {
                xs: "1fr",
                lg: "42% 58%",
              },

              minHeight: {
                lg: 650,
              },
            }}
          >
           {/* IMAGE */}

<Box
  sx={{
    position: "relative",

    minHeight: {
      xs: 330,
      sm: 420,
      lg: 650,
    },

    overflow: "hidden",

    bgcolor: "#eee",
  }}
>
  <Box
    component="img"
    src={partnerImage}
    alt="Partner with Shazlo"
    sx={{
      width: "100%",
      height: "100%",

      objectFit: "cover",

      display: "block",

      transition:
        "transform .8s cubic-bezier(.22,1,.36,1)",

      "&:hover": {
        transform: "scale(1.025)",
      },
    }}
  />

  {/* Image overlay */}

  <Box
    sx={{
      position: "absolute",
      inset: 0,

      background:
        "linear-gradient(180deg, rgba(0,0,0,.08) 30%, rgba(0,0,0,.48) 100%)",

      pointerEvents: "none",
    }}
  />

  {/* CENTERED TEXT */}

  <Box
    sx={{
      position: "absolute",

      top: "50%",
      left: {
        xs: 20,
        md: 30,
      },

      transform: "translateY(-50%)",

      color: "#fff",
    }}
  >
    <Typography
      sx={{
        fontFamily: "Schoolbell",
        color: "#fab62a",
        fontSize: 18,
        mb: 1,
      }}
    >
      partner with us
    </Typography>

    <Typography
      sx={{
        fontFamily: "Bodoni Moda",

        fontWeight: 600,

        fontSize: {
          xs: "3rem",
          md: "5rem",
        },

        lineHeight: 1,
      }}
    >
      Grow together
      <br />
      with{" "}
      <Box
        component="span"
        sx={{
          color: "#fab62a",
          fontStyle: "italic",
        }}
      >
        Shazlo.
      </Box>
    </Typography>
  </Box>
</Box>

            {/* RIGHT CONTENT */}

            <Box
              sx={{
                p: {
                  xs: 3,
                  md: 4,
                  lg: 5,
                },

                display: "flex",

                flexDirection: "column",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Bodoni Moda",

                  fontWeight: 600,

                  fontSize: {
                    xs: "1.6rem",
                    md: "2rem",
                  },

                  mb: 1,
                }}
              >
                Register your{" "}
                <Box
                  component="span"
                  sx={{
                    color: "#fab62a",
                    fontStyle: "italic",
                  }}
                >
                  Brand
                </Box>
              </Typography>

              <Typography
                sx={{
                  color: "#666",

                  fontSize: 18,

                  lineHeight: 1.6,

                  fontWeight: 300,

                  maxWidth: 650,

                  mb: 3,
                }}
              >
                Put your catalogue in front of users who
                are actively looking for exactly what you
                make.
              </Typography>

              {/* BENEFITS */}

              <Box
                sx={{
                  display: "grid",

                  gridTemplateColumns: {
                    xs: "1fr",
                    sm: "repeat(2, 1fr)",
                  },

                  borderTop: "1px solid #e8e0d0",

                  borderLeft: "1px solid #e8e0d0",

                  mb: 3,
                }}
              >
                {benefits.map((benefit, index) => {
                  const Icon = benefit.icon;

                  return (
                    <Box
                      key={benefit.text}
                      sx={{
                        display: "flex",

                        alignItems: "flex-start",

                        gap: 1.5,

                        p: 2,

                        minHeight: 90,

                        borderRight:
                          "1px solid #e8e0d0",

                        borderBottom:
                          "1px solid #e8e0d0",
                      }}
                    >
                      <Icon
                        sx={{
                          color: "#fab62a",

                          fontSize: 26,

                          flexShrink: 0,

                          mt: 0.2,
                        }}
                      />

                      <Typography
                        sx={{
                          color: "#555",

                          fontSize: 18,

                          lineHeight: 1.45,

                          fontWeight: 300,
                        }}
                      >
                        {benefit.text}
                      </Typography>
                    </Box>
                  );
                })}
              </Box>

              {/* FORM */}

              <Box
                component="form"
                sx={{
                  display: "flex",

                  flexDirection: "column",

                  gap: 1.5,
                }}
              >
                <TextField
                  label="Brand Name"
                  fullWidth
                  size="small"
                />

                <TextField
                  label="Founder Name or Email ID"
                  fullWidth
                  size="small"
                />

                <TextField
                  label="Website or Instagram"
                  fullWidth
                  size="small"
                />

                <Box
                  sx={{
                    display: "grid",

                    gap: 1.5,

                    gridTemplateColumns: {
                      xs: "1fr",
                      sm: "1fr 1fr",
                    },
                  }}
                >
                  <TextField
                    label="Phone"
                    fullWidth
                    size="small"
                  />

                  <TextField
                    label="Email"
                    fullWidth
                    size="small"
                  />
                </Box>

                <TextField
                  select
                  label="Product Category"
                  fullWidth
                  size="small"
                >
                  {categories.map((cat) => (
                    <MenuItem
                      key={cat}
                      value={cat}
                    >
                      {cat}
                    </MenuItem>
                  ))}
                </TextField>

                {/* PRICE */}

                <Box sx={{ mt: 1 }}>
                  <Typography
                    sx={{
                      fontSize: 11,

                      letterSpacing: ".08em",

                      textTransform: "uppercase",

                      color: "#999",

                      mb: 0.5,
                    }}
                  >
                    Select Price Range
                  </Typography>

                  <Typography
                    sx={{
                      color: "#7a451e",

                      fontFamily: "Bodoni Moda",

                      fontWeight: 600,

                      fontSize: 14,

                      mb: 0.5,
                    }}
                  >
                    ₹{price[0].toLocaleString()} — ₹
                    {price[1].toLocaleString()}
                  </Typography>

                  <Slider
                    value={price}
                    onChange={(e, value) =>
                      setPrice(value)
                    }
                    min={0}
                    max={50000}
                    step={500}
                    valueLabelDisplay="auto"
                    sx={{
                      color: "#fab62a",

                      "& .MuiSlider-thumb": {
                        width: 14,
                        height: 14,
                      },
                    }}
                  />
                </Box>

                {/* BUTTONS */}

                <Stack
                  direction={{
                    xs: "column",
                    sm: "row",
                  }}
                  spacing={1.5}
                  sx={{
                    mt: 1,
                  }}
                >
                  <Button
                    type="submit"
                    variant="contained"
                    sx={{
                      bgcolor: "#0a0a0a",

                      color: "#fab62a",

                      px: 3,

                      py: 1.2,

                      borderRadius: "4px",

                      textTransform: "none",

                      fontSize: 13,

                      "&:hover": {
                        bgcolor: "#fab62a",
                        color: "#000",
                      },
                    }}
                  >
                    Register Your Brand
                  </Button>

                  <Button
                    type="button"
                    variant="outlined"
                    onClick={() => setTab(1)}
                    sx={{
                      borderColor: "#bbb",

                      color: "#333",

                      px: 3,

                      py: 1.2,

                      borderRadius: "4px",

                      textTransform: "none",

                      fontSize: 13,

                      "&:hover": {
                        borderColor: "#fab62a",
                        bgcolor: "#fffdf5",
                      },
                    }}
                  >
                    Partnership Types
                  </Button>
                </Stack>

                <Typography
                  sx={{
                    color: "#999",

                    fontSize: 11,

                    mt: 0.5,
                  }}
                >
                  Need help? Contact us at{" "}
                  <Box
                    component="a"
                    href="mailto:connect@shazlo.store"
                    sx={{
                      color: "#7a451e",

                      textDecoration: "none",

                      "&:hover": {
                        textDecoration: "underline",
                      },
                    }}
                  >
                    connect@shazlo.store
                  </Box>
                </Typography>
              </Box>
            </Box>
          </Box>
        )}

        {/* PARTNERSHIP TYPES */}

        {tab === 1 && (
          <Box
            sx={{
              display: "grid",

              gridTemplateColumns: {
                xs: "1fr",
                md: "repeat(2, 1fr)",
              },
            }}
          >
            {[
              {
                title: "Fashion brands and labels",
                tag: "Brand Listing",
                body:
                  "List your catalogue on Shazlo and let our style engine do the work. Your pieces reach users who are actively looking for exactly what you make, not passively scrolling past it.",
              },
              {
                title: "Retailers and boutiques",
                tag: "Retail Partnership",
                body:
                  "Whether you are a D2C label or a multi-brand store, Shazlo drives high-intent traffic. Users who swipe right are already sold on the aesthetic. They just need the link.",
              },
              {
                title: "Stylists and creators",
                tag: "Creator Programme",
                body:
                  "Curate closets inside Shazlo. Your editorial eye becomes a feed. Build a following of users who trust your taste, and earn on every outfit you put together.",
              },
              {
                title: "Campaigns and collaborations",
                tag: "Campaign Collab",
                body:
                  "Running a capsule drop, a seasonal push, or a co-branded moment? We build custom in-app experiences that put your launch at the centre of the Shazlo feed.",
              },
            ].map((item, index) => (
              <Box
                key={item.title}
                sx={{
                  p: {
                    xs: 3,
                    md: 4,
                  },

                  minHeight: 230,

                  borderRight: {
                    md:
                      index % 2 === 0
                        ? "1px solid #e8e0d0"
                        : "none",
                  },

                  borderBottom: {
                    xs:
                      index !== 3
                        ? "1px solid #e8e0d0"
                        : "none",

                    md:
                      index < 2
                        ? "1px solid #e8e0d0"
                        : "none",
                  },

                  position: "relative",

                  overflow: "hidden",

                  transition: ".3s",

                  "&:hover": {
                    bgcolor: "#fffdf7",
                  },
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Bodoni Moda",

                    fontSize: {
                      xs: "1.35rem",
                      md: "1.55rem",
                    },

                    fontWeight: 600,

                    mb: 1.5,
                  }}
                >
                  {item.title}
                </Typography>

                <Typography
                  sx={{
                    color: "#666",

                    fontSize: 18,

                    lineHeight: 1.6,

                    fontWeight: 300,

                    mb: 3,
                  }}
                >
                  {item.body}
                </Typography>

                <Box
                  sx={{
                    display: "inline-block",

                    px: 1.5,

                    py: 0.6,

                    border: "1px solid #fab62a",

                    bgcolor: "#fff8e6",

                    color: "#7a451e",

                    fontSize: 10,

                    textTransform: "uppercase",

                    letterSpacing: ".12em",

                    fontWeight: 600,
                  }}
                >
                  {item.tag}
                </Box>
              </Box>
            ))}
          </Box>
        )}
      </Box>
    </Box>
  );
}