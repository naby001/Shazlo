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
import RegisterBrand from "./components/partner";
import AnotherHome from "./AnotherHome";
import AnotherHomeOptimized from "./AnotherHomeOptimized";
import afterAlpha_Home from "./Home_afteralphalaunch";
import { Analytics } from "@vercel/analytics/react";
import CRMPanel from "./CRMPanel";
import Waitlist from "./Waitlist";
import Privacy from "./Privacy";
import Terms from "./Terms";
import DeleteAccountFAQ from "./FAQ";
import Alpha_Home from "./Home_afteralphalaunch";
import AdminPortal from "./AdminPortal";
import SwipePage from "./swipePage";
import ShadowUserLoader from "./ShadowUserLoader";
import Home_V2 from "./Home_v2";

function App() {
  const subdomain = window.location.hostname.split(".")[0];
  const dispatch = useDispatch();
  const brand = useSelector((state) => state.user);
  console.log(brand);
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const globalStyles = (
    <GlobalStyles
      styles={`
      @font-face {
        font-family: 'Voyage';
        src: url('/voyage-regular.otf') format('opentype');
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
          {subdomain === "seller" ? (
            <>
              <Route
                path="/"
                element={!brand ? <BrandOnboarding /> : <NovanestDashboard />}
              />
              <Route path="/seller" element={<NovanestDashboard />} />
            </>
          ) : subdomain === "crm" ? (
            <>
              {/* ✅ CRM subdomain routes */}
              <Route path="/" element={<CRMPanel />} />
              <Route path="/dashboard" element={<CRMPanel />} />
              <Route path="/admin" element={<AdminPortal />} />
              {/* You can add CRM-specific pages here later */}
            </>
          ) : (
            <>
              {/* Default public routes */}
              <Route path="/" element={<Alpha_Home />} />
              <Route
  path="/swipe"
  element={<ShadowUserLoader />}
/>  
              <Route path="/home_v2" element={< Home_V2 />} />
              <Route path="/alternate_home" element={< AnotherHomeOptimized />} />
              <Route path="/waitlist" element={<Waitlist />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms-of-service" element={<Terms />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/faq" element={<DeleteAccountFAQ />} />
              <Route path="/partner" element={<RegisterBrand />}></Route>
            </>
          )}
        </Routes>
      </Router>
      <Analytics />
    </ThemeProvider>
  );
}

export default App;
