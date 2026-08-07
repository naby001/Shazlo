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

import { useState } from "react";

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

  return (

    <Box
      id="partner"
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
          mb: 2,
        }}
      >
        partner with us
      </Typography>

      <Typography
        sx={{
          fontFamily: "Bodoni Moda",
          fontWeight: 700,
          fontSize: {
            xs: "2.3rem",
            md: "3.5rem",
          },
          mb: 5,
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
      </Typography>

      <Tabs
        value={tab}
        onChange={(e, value) => setTab(value)}
        sx={{
          mb: 6,

          "& .MuiTabs-indicator": {
            background: "#fab62a",
            height: 3,
          },

          "& .MuiTab-root": {
            textTransform: "uppercase",
            letterSpacing: ".08em",
            fontSize: 12,
          },
        }}
      >
        <Tab label="Register your Brand" />
        <Tab label="Partnership Types" />
      </Tabs>

      {tab === 0 && (

        <Box
          sx={{
            display: "grid",
            gap: 8,

            gridTemplateColumns: {
              xs: "1fr",
              md: "1fr 1fr",
            },
          }}
        >

          {/* LEFT */}

          <Box>

            <Typography
              sx={{
                fontFamily: "Bodoni Moda",
                fontSize: {
                  xs: "2rem",
                  md: "3rem",
                },
                mb: 2,
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
                lineHeight: 1.9,
                mb: 4,
              }}
            >
              Be part of the next wave of fashion
              brands making an impact. Join Shazlo
              and put your catalogue in front of
              users who are actively looking for
              exactly what you make.
            </Typography>

            <Stack spacing={2}>
              {[
                "Your products reach high-intent shoppers, not passive scrollers.",
                "Set your price range and target demographic from the start.",
                "Drive traffic directly to your website or store.",
                "Track engagement with Shazlo's brand dashboard (coming soon).",
              ].map((item) => (
                <Typography
                  key={item}
                  sx={{
                    color: "#666",
                    display: "flex",
                    gap: 1,
                  }}
                >
                  <Box
                    component="span"
                    sx={{
                      color: "#fab62a",
                    }}
                  >
                    ✦
                  </Box>

                  {item}
                </Typography>
              ))}
            </Stack>

          </Box>

          {/* RIGHT */}

          <Box
            component="form"
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >

            <TextField
              label="Brand Name"
              fullWidth
            />

            <TextField
              label="Founder Name or Email ID"
              fullWidth
            />

            <TextField
              label="Website or Instagram"
              fullWidth
            />

            <Box
              sx={{
                display: "grid",
                gap: 2,
                gridTemplateColumns: "1fr 1fr",
              }}
            >

              <TextField
                label="Phone"
                fullWidth
              />

              <TextField
                label="Email"
                fullWidth
              />

            </Box>

            <TextField
              select
              label="Product Category"
              fullWidth
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

            <Box mt={2}>

              <Typography
                sx={{
                  fontSize: 12,
                  letterSpacing: ".08em",
                  textTransform: "uppercase",
                  color: "#999",
                  mb: 1,
                }}
              >
                Select Price Range
              </Typography>

              <Typography
                sx={{
                  color: "#7a451e",
                  fontWeight: 600,
                  mb: 2,
                }}
              >
                ₹{price[0].toLocaleString()} — ₹{price[1].toLocaleString()}
              </Typography>

              <Slider
                value={price}
                onChange={(e, value) => setPrice(value)}
                min={0}
                max={50000}
                step={500}
                valueLabelDisplay="auto"
                sx={{
                  color: "#fab62a",
                }}
              />

            </Box>

            <Button
              variant="contained"
              sx={{
                mt: 2,
                alignSelf: "flex-start",

                bgcolor: "#fab62a",
                color: "#000",

                px: 5,
                py: 1.5,

                borderRadius: 0,

                "&:hover": {
                  bgcolor: "#000",
                  color: "#fab62a",
                },
              }}
            >
              Submit
            </Button>

            <Typography
              sx={{
                color: "#999",
                mt: 2,
              }}
            >
              Need help? Contact us at{" "}
              <Box
                component="a"
                href="mailto:connect@shazlo.store"
                sx={{
                  color: "#7a451e",
                }}
              >
                connect@shazlo.store
              </Box>
            </Typography>

          </Box>

        </Box>

      )}
            {tab === 1 && (

        <Box
          sx={{
            display: "grid",
            gap: 3,

            gridTemplateColumns: {
              xs: "1fr",
              md: "repeat(2,1fr)",
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
          ].map((item) => (

            <Box
              key={item.title}
              sx={{
                border: "1px solid #e8e0d0",
                p: 4,
                transition: ".3s",
                cursor: "pointer",
                position: "relative",
                overflow: "hidden",

                "&::before": {
                  content: '""',
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(135deg, rgba(250,182,42,.07), transparent 60%)",
                  opacity: 0,
                  transition: ".35s",
                },

                "&:hover": {
                  borderColor: "#fab62a",
                  transform: "translateY(-8px)",
                  boxShadow:
                    "0 20px 45px rgba(0,0,0,.08)",
                },

                "&:hover::before": {
                  opacity: 1,
                },
              }}
            >

              <Typography
                sx={{
                  fontFamily: "Bodoni Moda",
                  fontSize: "1.6rem",
                  fontWeight: 600,
                  mb: 2,
                }}
              >
                {item.title}
              </Typography>

              <Typography
                sx={{
                  color: "#666",
                  lineHeight: 1.9,
                  mb: 4,
                }}
              >
                {item.body}
              </Typography>

              <Box
                sx={{
                  display: "inline-block",
                  px: 2,
                  py: .8,

                  border: "1px solid #fab62a",

                  bgcolor: "#fff8e6",

                  color: "#7a451e",

                  fontSize: 11,

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

  );
}