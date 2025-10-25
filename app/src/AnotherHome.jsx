// AnotherHome.jsx
import React, { useRef } from "react";
import { Box } from "@mui/material";
import { motion, useScroll, useTransform } from "framer-motion";
import SceneHero from "./components/SceneHero";
import SceneLogo from "./components/SceneLogo";
import SceneBanners from "./components/SceneBanner";
import background from "./assets/logo-background.jpg"
import SceneWhatsNew from "./components/SceneWhatsNew";
import SceneClosets from "./components/SceneClosets";
import SceneFounderNote from "./components/SceneFounderNote";
import SceneFounders from "./components/SceneFounders";
import SceneBetaLaunch from "./components/SceneBetaLaunch";

const AnotherHome = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll(); // ✅ use global scroll

  // --- Hero fades out quickly ---
  // --- Hero fades out quickly ---
const heroOpacity = useTransform(scrollYProgress, [0, 0.0425, 0.05], [1, 1, 0]);

// --- Logo fades in & holds ---
const logoOpacity = useTransform(scrollYProgress, [0.045, 0.075, 0.1125, 0.1625, 0.20], [0, 1, 1, 1, 0]);
const logoWidth = useTransform(scrollYProgress, [0.045, 0.075, 0.1375, 0.1625, 0.2125], [0, 0.5, 1, 1.5, 4]);

// --- Background image fades in with logo ---
const bgOpacity = useTransform(scrollYProgress, [0.045, 0.075, 0.1125, 0.1375], [0, 1, 1, 1]);

// --- Banners appear right after logo settles ---
const bannerOpacity = useTransform(scrollYProgress, [0.07, 0.1, 0.125], [0, 1, 1]);
const bannerXLeft = useTransform(scrollYProgress, [0.05, 0.1125, 0.1625, 0.2125], ["-120vw", "0vw", "300vw", "500vw"]);
const bannerXRight = useTransform(scrollYProgress, [0.05, 0.1125, 0.1625, 0.2125], ["120vw", "0vw", "-300vw", "-500vw"]);
const bannerRotateLeft = useTransform(scrollYProgress, [0.05, 0.1125], [-15, -3]);
const bannerRotateRight = useTransform(scrollYProgress, [0.05, 0.1125], [15, 3]);
const bannerYLeft = useTransform(scrollYProgress, [0.05, 0.1125], [-40, 0]);
const bannerYRight = useTransform(scrollYProgress, [0.05, 0.1125], [40, 0]);

// --- What's New Section ---
const whatsnewXLeft = useTransform(scrollYProgress, [0.2125, 0.2375, 0.3, 0.425], ["-120vw", "0vw", "0vw", "120vw"]);
const imageTop = useTransform(scrollYProgress, [0.225, 0.275, 0.325], [1000, -1700, -700]);

// --- Closets Section (extended stay) ---
const imgTopX = useTransform(scrollYProgress, [0.4, 0.46, 0.52], ["-120vw", "0vw", "120vw"]);
const imgBottomX = useTransform(scrollYProgress, [0.4, 0.46, 0.52], ["120vw", "0vw", "-120vw"]);
const textOpacity = useTransform(scrollYProgress, [0.39, 0.42, 0.52], [0, 1, 0]);
const textY = useTransform(scrollYProgress, [0.38, 0.44], [50, 0]);

// --- Founder's Note (delayed) ---
const noteY = useTransform(scrollYProgress, [0.52, 0.6, 0.68], [200, 0, -100]);
const noteOpacity = useTransform(scrollYProgress, [0.52, 0.6, 0.68], [0, 1, 0]);

// --- Founders Section (shifted down) ---
const f1X = useTransform(scrollYProgress, [0.68, 0.72, 0.8, 0.86], ["-120vw", "0vw", "0vw", "120vw"]);
const f2X = useTransform(scrollYProgress, [0.72, 0.76, 0.8, 0.86], ["120vw", "0vw", "0vw", "120vw"]);
const f3X = useTransform(scrollYProgress, [0.74, 0.78, 0.8, 0.86], ["-120vw", "0vw", "0vw", "120vw"]);
const f4X = useTransform(scrollYProgress, [0.76, 0.8, 0.86], ["120vw", "0vw", "-120vw"]);
const textOpacityfounder = useTransform(scrollYProgress, [0.7, 0.78, 0.86], [0, 1, 0]);

// --- Beta Launch (final) ---
const betaLogoY = useTransform(scrollYProgress, [0.86, 0.95, 1.0], [300, 0, 0]);
const betaTextOpacity = useTransform(scrollYProgress, [0.86, 0.95, 1.0], [0, 1, 1]);


  
  return (
    <Box sx={{ height: "2000vh", position: "relative" }} ref={ref}>
      {/* Fixed viewport layer */}
      <Box
        sx={{
          position: "fixed",
          inset: 0,
          width: "100%",
          height: "100vh",
          overflow: "hidden",
          background: "#000",
        }}
      >
        {/* --- Background image that fades with logo --- */}
        <motion.div
          style={{
            opacity: bgOpacity,
            position: "absolute",
            inset: 0,
            backgroundImage: `url(${background})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            filter: "brightness(0.9) contrast(1.1)",
            zIndex: 1,
          }}
        />

        {/* --- Hero, Logo, Banners --- */}
        <SceneHero opacity={heroOpacity} />
        <SceneLogo opacity={logoOpacity} logoWidth={logoWidth}/>
        <SceneBanners
          opacity={bannerOpacity}
          xLeft={bannerXLeft}
          xRight={bannerXRight}
          rotateLeft={bannerRotateLeft}
          rotateRight={bannerRotateRight}
          yLeft={bannerYLeft}
          yRight={bannerYRight}
        />
        <SceneWhatsNew 
         whatsnewXLeft={whatsnewXLeft}
         imageTop={imageTop}
         scrollYProgress={scrollYProgress}
        />
        <SceneClosets
  imgTopX={imgTopX}
  imgBottomX={imgBottomX}
  textOpacity={textOpacity}
  textY={textY}
/>
<SceneFounderNote noteY={noteY} noteOpacity={noteOpacity} />
<SceneFounders
  f1X={f1X}
  f2X={f2X}
  f3X={f3X}
  f4X={f4X}
  textOpacity={textOpacityfounder}
/>
<SceneBetaLaunch logoY={betaLogoY} textOpacity={betaTextOpacity} />
      </Box>
    </Box>
  );
};

export default AnotherHome;
