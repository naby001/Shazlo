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
} from "@mui/material";
import fashionBg from '../assets/background.png';
import right from '../assets/background_waitlist_new.png';

/* ---------------- THEME ---------------- */
const theme = createTheme({
  palette: {
    primary: { main: "#FFD700" }, // Gold/Yellow
    secondary: { main: "#000000" }, // Black
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
  const [priceRange, setPriceRange] = useState([2500, 5000]);
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handlePriceChange = (event, newValue) => {
    setPriceRange(newValue);
  };

  const formatCurrency = (value) => {
    return `₹${value.toLocaleString()}`;
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
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `url(${fashionBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "blur(8px)",
            zIndex: 0,
          },
          "&::after": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
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
            {/* FORM SECTION - Always takes space */}
            <Box
              sx={{
                flex: 1,
                width: "100%",
              }}
            >
              <Typography 
                variant="h3" 
                mb={1} 
                color="#FFFFFF"
                sx={{
                  fontSize: { xs: "1.75rem", sm: "2.5rem", md: "3rem" }
                }}
              >
                Register your{" "}
                <Box component="span" color="#FFD700">
                  Brand
                </Box>
              </Typography>

              <Typography 
                color="#FFD700" 
                mb={4}
                sx={{
                  fontSize: { xs: "0.875rem", sm: "1rem" }
                }}
              >
                Be part of the next wave of fashion brands making an impact.
              </Typography>

              <Box display="flex" flexDirection="column" gap={3}>
                <TextField 
                  label="Brand name" 
                  variant="standard" 
                  fullWidth 
                  sx={{
                    '& .MuiInputLabel-root': { color: '#FFD700' },
                    '& .MuiInput-root': { color: '#FFFFFF' },
                    '& .MuiInput-root:before': { borderBottomColor: '#FFD700' },
                    '& .MuiInput-root:hover:not(.Mui-disabled):before': { borderBottomColor: '#FFD700' },
                    '& .MuiInputLabel-root.Mui-focused': { color: '#FFD700' },
                    '& .MuiInput-root:after': { borderBottomColor: '#FFD700' },
                  }}
                />
                <TextField
                  label="Founder's name or email ID"
                  variant="standard"
                  fullWidth
                  sx={{
                    '& .MuiInputLabel-root': { color: '#FFD700' },
                    '& .MuiInput-root': { color: '#FFFFFF' },
                    '& .MuiInput-root:before': { borderBottomColor: '#FFD700' },
                    '& .MuiInput-root:hover:not(.Mui-disabled):before': { borderBottomColor: '#FFD700' },
                    '& .MuiInputLabel-root.Mui-focused': { color: '#FFD700' },
                    '& .MuiInput-root:after': { borderBottomColor: '#FFD700' },
                  }}
                />

                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Website / Instagram link"
                      variant="standard"
                      fullWidth
                      sx={{
                        '& .MuiInputLabel-root': { color: '#FFD700' },
                        '& .MuiInput-root': { color: '#FFFFFF' },
                        '& .MuiInput-root:before': { borderBottomColor: '#FFD700' },
                        '& .MuiInput-root:hover:not(.Mui-disabled):before': { borderBottomColor: '#FFD700' },
                        '& .MuiInputLabel-root.Mui-focused': { color: '#FFD700' },
                        '& .MuiInput-root:after': { borderBottomColor: '#FFD700' },
                      }}
                    />
                  </Grid>
                  <Grid item xs={1} sm={6}>
                    <TextField
                      select
                      label="Product type"
                      variant="standard"
                      fullWidth
                      defaultValue=""
                      sx={{
                        '& .MuiInputLabel-root': { color: '#FFD700' },
                        '& .MuiInput-root': { color: '#FFFFFF' },
                        '& .MuiInput-root:before': { borderBottomColor: '#FFD700' },
                        '& .MuiInput-root:hover:not(.Mui-disabled):before': { borderBottomColor: '#FFD700' },
                        '& .MuiInputLabel-root.Mui-focused': { color: '#FFD700' },
                        '& .MuiInput-root:after': { borderBottomColor: '#FFD700' },
                        '& .MuiSvgIcon-root': { color: '#FFD700' },
                      }}
                      SelectProps={{
                        MenuProps: {
                          PaperProps: {
                            sx: {
                              bgcolor: '#1a1a1a',
                              '& .MuiMenuItem-root': {
                                color: '#FFFFFF',
                                '&:hover': {
                                  bgcolor: '#333333',
                                },
                                '&.Mui-selected': {
                                  bgcolor: '#FFD700',
                                  color: '#000000',
                                  '&:hover': {
                                    bgcolor: '#FFC700',
                                  },
                                },
                              },
                            },
                          },
                        },
                      }}
                    >
                      {["Dresses", "Tops", "Bags", "Shoes", "Accessories"].map(
                        (item) => (
                          <MenuItem key={item} value={item}>
                            {item}
                          </MenuItem>
                        )
                      )}
                    </TextField>
                  </Grid>
                </Grid>

                <TextField 
                  label="Contact phone" 
                  variant="standard" 
                  fullWidth 
                  sx={{
                    '& .MuiInputLabel-root': { color: '#FFD700' },
                    '& .MuiInput-root': { color: '#FFFFFF' },
                    '& .MuiInput-root:before': { borderBottomColor: '#FFD700' },
                    '& .MuiInput-root:hover:not(.Mui-disabled):before': { borderBottomColor: '#FFD700' },
                    '& .MuiInputLabel-root.Mui-focused': { color: '#FFD700' },
                    '& .MuiInput-root:after': { borderBottomColor: '#FFD700' },
                  }}
                />
                <TextField 
                  label="Contact email" 
                  variant="standard" 
                  fullWidth 
                  type="email"
                  sx={{
                    '& .MuiInputLabel-root': { color: '#FFD700' },
                    '& .MuiInput-root': { color: '#FFFFFF' },
                    '& .MuiInput-root:before': { borderBottomColor: '#FFD700' },
                    '& .MuiInput-root:hover:not(.Mui-disabled):before': { borderBottomColor: '#FFD700' },
                    '& .MuiInputLabel-root.Mui-focused': { color: '#FFD700' },
                    '& .MuiInput-root:after': { borderBottomColor: '#FFD700' },
                  }}
                />

                <Box>
                  <Typography 
                    fontWeight={600} 
                    mb={1} 
                    color="#FFD700"
                    sx={{
                      fontSize: { xs: "0.875rem", sm: "1rem" }
                    }}
                  >
                    Select price range: {formatCurrency(priceRange[0])} - {formatCurrency(priceRange[1])}
                  </Typography>
                  <Slider
                    value={priceRange}
                    onChange={handlePriceChange}
                    min={1000}
                    max={10000}
                    step={500}
                    valueLabelDisplay="auto"
                    valueLabelFormat={formatCurrency}
                    sx={{
                      color: '#FFD700',
                      '& .MuiSlider-thumb': {
                        backgroundColor: '#FFD700',
                        '&:hover, &.Mui-focusVisible': {
                          boxShadow: '0 0 0 8px rgba(255, 215, 0, 0.16)',
                        },
                      },
                      '& .MuiSlider-track': {
                        backgroundColor: '#FFD700',
                        border: 'none',
                      },
                      '& .MuiSlider-rail': {
                        backgroundColor: '#555555',
                        opacity: 1,
                      },
                      '& .MuiSlider-valueLabel': {
                        backgroundColor: '#FFD700',
                        color: '#000000',
                        fontWeight: 600,
                      },
                    }}
                  />
                </Box>

                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    bgcolor: "#FFD700",
                    color: "#000000",
                    borderRadius: "30px",
                    py: { xs: 1.2, sm: 1.4 },
                    fontWeight: 700,
                    fontSize: { xs: "0.875rem", sm: "1rem" },
                    "&:hover": { bgcolor: "#FFC700" },
                  }}
                >
                  Submit
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

            {/* IMAGE SECTION - Hidden on mobile, fixed size on desktop */}
            {!isMobile && (
              <Box
                sx={{
                  flex: 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  maxWidth: { md: "400px", lg: "450px" },
                  width: "100%",
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    height: "auto",
                    backgroundColor: "#FFD700",
                    borderRadius: "16px",
                    padding: 2,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.5)",
                  }}
                >
                  <Box
                    component="img"
                    src={right}
                    alt="Fashion Brand"
                    sx={{
                      width: "100%",
                      height: "auto",
                      borderRadius: "12px",
                      display: "block",
                      objectFit: "cover",
                    }}
                  />
                </Box>
              </Box>
            )}
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
}