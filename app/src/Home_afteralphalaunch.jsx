import React from "react";
// import HeroSection from "../components/HeroSection";
import { Box, Typography } from "@mui/material";
import HeroSection from "./components/afterAlpha_hero";
import FeaturesSection from "./components/Features";
import FoundersSection from "./components/FoundersNoteSection";
import FAQWithFooter from "./components/FAQFooter";

const Alpha_Home = () => {
  return (
    <>
      {/* HERO */}
      <HeroSection />

      {/* NEXT SECTION (placeholder) */}
      <FeaturesSection />
       <FoundersSection />
       <FAQWithFooter/>
    </>
  );
};

export default Alpha_Home;
