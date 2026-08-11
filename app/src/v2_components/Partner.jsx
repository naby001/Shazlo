import {
  Box,
  Typography,
  Tabs,
  Tab,
  Button,
  Stack,
  Collapse,
} from "@mui/material";

import {
  StorefrontOutlined,
  PriceChangeOutlined,
  LinkOutlined,
  FavoriteBorderOutlined,
} from "@mui/icons-material";

import { useState } from "react";
import partnerImage from "../assets/v2_2.png";

const GOOGLE_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSfu8mfU4KNDAp9WTHMSsgW98EGs8FUF9ZORsToTEbJwSz44Mw/viewform?embedded=true";

export default function Partner() {
  const [tab, setTab] = useState(0);
  const [showForm, setShowForm] = useState(false);

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

  const partnershipTypes = [
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
          onChange={(e, value) => {
            setTab(value);
            setShowForm(false);
          }}
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

              {/* IMAGE OVERLAY */}

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
                {benefits.map((benefit) => {
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

                        borderRight: "1px solid #e8e0d0",
                        borderBottom: "1px solid #e8e0d0",
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

              {/* REGISTER BUTTON */}

              <Button
                type="button"
                variant="contained"
                onClick={() => setShowForm((prev) => !prev)}
                sx={{
                  alignSelf: "flex-start",

                  bgcolor: "#0a0a0a",

                  color: "#fab62a",

                  px: 3,

                  py: 1.3,

                  borderRadius: "4px",

                  textTransform: "none",

                  fontSize: 13,

                  transition:
                    "all .35s cubic-bezier(.22,1,.36,1)",

                  "&:hover": {
                    bgcolor: "#fab62a",
                    color: "#000",
                  },
                }}
              >
                {showForm
                  ? "Close Registration"
                  : "Register Your Brand"}
              </Button>

              {/* GOOGLE FORM */}

              <Collapse
                in={showForm}
                timeout={{
                  enter: 900,
                  exit: 500,
                }}
                unmountOnExit
              >
                <Box
                  sx={{
                    mt: 4,

                    pt: 3,

                    borderTop:
                      "1px solid #e8e0d0",

                    animation:
                      "formReveal .8s cubic-bezier(.22,1,.36,1)",

                    "@keyframes formReveal": {
                      from: {
                        opacity: 0,
                        transform: "translateY(-15px)",
                      },

                      to: {
                        opacity: 1,
                        transform: "translateY(0)",
                      },
                    },
                  }}
                >
                  {/* FORM HEADER */}

                  <Box
                    sx={{
                      mb: 2.5,
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: "Bodoni Moda",

                        fontSize: {
                          xs: "1.4rem",
                          md: "1.7rem",
                        },

                        fontWeight: 600,

                        lineHeight: 1.2,
                      }}
                    >
                      Tell us about your{" "}
                      <Box
                        component="span"
                        sx={{
                          color: "#fab62a",
                          fontStyle: "italic",
                        }}
                      >
                        brand.
                      </Box>
                    </Typography>

                    <Typography
                      sx={{
                        mt: 0.8,

                        color: "#888",

                        fontSize: 13,

                        lineHeight: 1.6,
                      }}
                    >
                      Fill out the form below and our team
                      will get back to you.
                    </Typography>
                  </Box>

                  {/* FORM FRAME */}

                  <Box
                    sx={{
                      position: "relative",

                      width: "100%",

                      overflow: "hidden",

                      border:
                        "1px solid #e8e0d0",

                      borderRadius: "8px",

                      bgcolor: "#fff",

                      boxShadow:
                        "0 18px 45px rgba(0,0,0,.07)",

                      "&::before": {
                        content: '""',

                        position: "absolute",

                        top: 0,
                        left: 0,
                        right: 0,

                        height: 3,

                        background:
                          "linear-gradient(90deg,#fab62a,#f9df8f,transparent)",

                        zIndex: 2,
                      },
                    }}
                  >
                    <Box
                      component="iframe"
                      src={GOOGLE_FORM_URL}
                      title="Shazlo Brand Registration Form"
                      sx={{
                        display: "block",

                        width: "100%",

                        height: {
                          xs: 950,
                          sm: 1000,
                          md: 1089,
                        },

                        border: 0,

                        bgcolor: "#fff",
                      }}
                    />
                  </Box>

                  {/* HELP */}

                  <Typography
                    sx={{
                      color: "#999",

                      fontSize: 11,

                      mt: 1.5,

                      textAlign: "center",
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
              </Collapse>

              {/* PARTNERSHIP BUTTON */}

              {!showForm && (
                <Button
                  type="button"
                  variant="outlined"
                  onClick={() => setTab(1)}
                  sx={{
                    alignSelf: "flex-start",

                    mt: 1.5,

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
              )}
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
            {partnershipTypes.map((item, index) => (
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