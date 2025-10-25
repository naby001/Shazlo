// pages/LandingPage.jsx
import React from "react";
import { HeroSection } from "./components/ParHero";
import { LogoSection } from "./components/ParLogoSection";
import { SectionWrapper } from "./components/SectionWrapper";


const LandingPage = () => {
  return (
    <>
      <HeroSection />
      <LogoSection />
      {/* Add new sections below */}
      <SectionWrapper title="Our Vision" bgColor="#141414">
        <p style={{ maxWidth: 600, margin: "0 auto" }}>
          We blend design, motion, and purpose to craft experiences that stay.
        </p>
      </SectionWrapper>
      <SectionWrapper title="Join the Movement" bgColor="#000000">
        <p style={{ maxWidth: 600, margin: "0 auto" }}>
          Become a part of something bigger — innovation that speaks visually.
        </p>
      </SectionWrapper>
    </>
  );
};

export default LandingPage;
