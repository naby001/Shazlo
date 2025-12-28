import React from "react";
// import HeroSection from "../components/HeroSection";
import { Box, Typography } from "@mui/material";
import HeroSection from "./components/afterAlpha_hero";
import FeaturesSection from "./components/Features";
import FoundersSection from "./components/FoundersNoteSection";

const Alpha_Home = () => {
  return (
    <>
      {/* HERO */}
      <HeroSection />

      {/* NEXT SECTION (placeholder) */}
      <FeaturesSection />
       <FoundersSection />
    </>
  );
};

export default Alpha_Home;
