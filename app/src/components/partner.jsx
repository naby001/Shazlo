import React, { useState } from "react";
import {
  ThemeProvider,
  createTheme,
  CssBaseline,
  Box,
  Grid,
  TextField,
  Button,
  Typography,
  Slider,
  MenuItem,
  Container,
  useMediaQuery,
  CircularProgress,
  InputLabel,
  FormControl,
  Select,
} from "@mui/material";
import fashionBg from "../assets/background.png";
import right from "../assets/background_waitlist_new.png";

/* ---------------- THEME ---------------- */
const theme = createTheme({
  palette: {
    primary: { main: "#FFD700" },
    secondary: { main: "#000000" },
    background: { default: "#000000" },
    text: {
      primary: "#FFFFFF",
      secondary: "#FFD700",
    },
  },
  typography: {
    fontFamily: "Inter, sans-serif",
    h3: { fontWeight: 700 },
    h4: { fontWeight: 700 },
  },
});

/* ---------------- COMPONENT ---------------- */
export default function RegisterBrand() {
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const [priceRange, setPriceRange] = useState([2500, 5000]);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    brandName: "",
    founder: "",
    website: "",
    productType: "clothing",
    phone: "",
    email: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePriceChange = (event, newValue) => {
    setPriceRange(newValue);
  };

  const formatCurrency = (value) => `₹${value.toLocaleString()}`;

  const handleSubmit = async () => {
    setLoading(true);

    const payload = {
      brand_name: formData.brandName,
      founder_contact: formData.founder,
      website_or_instagram: formData.website,
      product_type: formData.productType,
      phone: formData.phone,
      email: formData.email,
      price_range: {
        min: priceRange[0],
        max: priceRange[1],
      },
    };

    try {
      await fetch("https://shazlo-waitlist-gtge.onrender.com/api/register-brand", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      setSubmitted(true);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Box
        sx={{
          minHeight: "100vh",
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          "&::before": {
            content: '""',
            position: "absolute",
            inset: 0,
            backgroundImage: `url(${fashionBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "blur(8px)",
            zIndex: 0,
          },
          "&::after": {
            content: '""',
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            zIndex: 1,
          },
        }}
      >
        <Container
          maxWidth="lg"
          sx={{
            position: "relative",
            zIndex: 2,
            py: { xs: 4, md: 6 },
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              width: "100%",
              maxWidth: "1200px",
              backgroundColor: "rgba(0, 0, 0, 0.6)",
              backdropFilter: "blur(10px)",
              borderRadius: "24px",
              padding: { xs: 3, sm: 4, md: 5 },
              border: "1px solid rgba(255, 215, 0, 0.2)",
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              gap: { xs: 4, md: 6 },
              alignItems: "center",
            }}
          >
            {/* FORM SECTION */}
            <Box sx={{ flex: 1, width: "100%" }}>
              <Typography
                variant="h3"
                mb={1}
                color="#FFFFFF"
                sx={{ fontSize: { xs: "1.75rem", sm: "2.5rem", md: "3rem" } }}
              >
                Register your{" "}
                <Box component="span" color="#FFD700">
                  Brand
                </Box>
              </Typography>

              <Typography color="#FFD700" mb={4}>
                Be part of the next wave of fashion brands making an impact.
              </Typography>

              {submitted && (
                <Box
                  mb={3}
                  p={2}
                  borderRadius="12px"
                  sx={{
                    background: "rgba(255,215,0,0.1)",
                    border: "1px solid rgba(255,215,0,0.4)",
                  }}
                >
                  <Typography color="#FFD700" fontWeight={600}>
                    Your brand has been registered successfully.
                  </Typography>
                  <Typography color="#ccc" fontSize="0.9rem">
                    Our team will review it and get back to you shortly.
                  </Typography>
                </Box>
              )}

              <Box display="flex" flexDirection="column" gap={3}>
                <TextField name="brandName" value={formData.brandName} onChange={handleInputChange} label="Brand name" variant="standard" fullWidth />
                <TextField name="founder" value={formData.founder} onChange={handleInputChange} label="Founder's name or email ID" variant="standard" fullWidth />

                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField name="website" value={formData.website} onChange={handleInputChange} label="Website / Instagram link" variant="standard" fullWidth />
                  </Grid>
                 
                </Grid>

                <TextField name="phone" value={formData.phone} onChange={handleInputChange} label="Contact phone" variant="standard" fullWidth />
                <TextField name="email" value={formData.email} onChange={handleInputChange} label="Contact email" type="email" variant="standard" fullWidth />

                <Box>
                  <Typography fontWeight={600} mb={1} color="#FFD700">
                    Select price range: {formatCurrency(priceRange[0])} - {formatCurrency(priceRange[1])}
                  </Typography>
                  <Slider value={priceRange} onChange={handlePriceChange} min={1000} max={10000} step={500} />
                </Box>

                <Button
                  variant="contained"
                  size="large"
                  disabled={loading || submitted}
                  onClick={handleSubmit}
                  sx={{
                    bgcolor: "#FFD700",
                    color: "#000000",
                    borderRadius: "30px",
                    fontWeight: 700,
                    "&:hover": { bgcolor: "#FFC700" },
                  }}
                >
                  {loading ? <CircularProgress size={24} sx={{ color: "#000" }} /> : "Submit"}
                </Button>

                <Box textAlign="center" mt={2}>
                  <Typography 
                    variant="body2" 
                    color="#999999"
                    sx={{
                      fontSize: { xs: "0.75rem", sm: "0.875rem" }
                    }}
                  >
                    Need help?{" "}
                    <Box 
                      component="a" 
                      href="mailto:connect@shazlo.store"
                      sx={{
                        color: "#FFD700",
                        textDecoration: "none",
                        fontWeight: 600,
                        "&:hover": {
                          textDecoration: "underline",
                        },
                      }}
                    >
                      Contact us at connect@shazlo.store
                    </Box>
                  </Typography>
                </Box>
              </Box>
            </Box>

            {!isMobile && (
              <Box sx={{ flex: 1, maxWidth: "450px" }}>
                <Box
                  sx={{
                    backgroundColor: "#FFD700",
                    borderRadius: "16px",
                    padding: 2,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.5)",
                  }}
                >
                  <Box component="img" src={right} alt="Fashion Brand" sx={{ width: "100%", borderRadius: "12px" }} />
                </Box>
              </Box>
            )}
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
}
