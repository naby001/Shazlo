import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline, GlobalStyles, useMediaQuery } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import theme from "./theme";

import ContactPage from "./Contact";
import Landing from "./Landing";
import Home from "./Home";
import NovanestDashboard from "./Seller";
import BrandOnboarding from "./BrandOnboarding";
import { Provider, useDispatch, useSelector } from "react-redux";
import { setLogout } from "./state";
import LandingDesk from "./HomeDesktop";
import HomeAlt from "./Home_alt";

function App() {
  const subdomain = window.location.hostname.split(".")[0];
  const dispatch=useDispatch();
  const brand=useSelector((state)=>state.user);
  console.log(brand)
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  
const globalStyles = (
  <GlobalStyles
    styles={`
      @font-face {
        font-family: 'Gerbata';
        src: url('/src/assets/fonts/GarbataTrial-Bold.ttf') format('truetype');
        font-weight: normal;
        font-style: normal;
      }
    `}
  />
);
  // dispatch(setLogout())
  return (

    <ThemeProvider theme={theme}>
      <CssBaseline />
      {globalStyles}
      <Router>
        <Routes>
          {subdomain !== "seller" ? (
            <>
              <Route path="/" element={<Landing/>} />
              <Route path="/contact" element={<ContactPage />} />
              {/* No access to seller-specific pages here */}
            </>
          ) : (
            <>
              <Route path="/" element={!brand?<BrandOnboarding />:<NovanestDashboard/>} />
              <Route path="/seller" element={<NovanestDashboard />} />
            </>
          )}
        </Routes>
      </Router>
    </ThemeProvider>

  );
}

export default App;
