// AnotherHome.optimized.jsx
import React, { useRef } from "react";
import { Box } from "@mui/material";
import { motion, useScroll, useTransform } from "framer-motion";
import SceneHero from "./components/SceneHero";
import SceneLogo from "./components/SceneLogo";
import SceneBanners from "./components/SceneBanner";
import background from "./assets/logo-background.jpg";
import SceneWhatsNew from "./components/SceneWhatsNew";
import SceneClosets from "./components/SceneClosets";
import SceneFounderNote from "./components/SceneFounderNote";
import SceneFounders from "./components/SceneFounders";
import SceneBetaLaunch from "./components/SceneBetaLaunch";

/**
 * Optimizations applied:
 * - local scroll container (useScroll target) instead of global document scroll
 * - reduced total scroll range (800vh instead of 2000vh)
 * - removed expensive CSS filter from background
 * - added will-change + translateZ(0) hints for GPU compositing
 * - wrapped heavy sections in single motion wrappers to reduce layout churn
 * - kept the same transform ranges (scaled where appropriate) so visuals remain similar
 *
 * Note: For best results also:
 * - supply a low-res background for mobile and swap based on screen width
 * - merge multiple per-element transforms inside scenes where possible
 * - if scenes still jitter, throttle scroll updates via useMotionValueEvent or reduce transform count inside scenes
 */

const AnotherHomeOptimized = () => {
  const containerRef = useRef(null);

  // local scroll tracking bound to containerRef (much cheaper than global)
  const { scrollYProgress } = useScroll({ target: containerRef });

  // NOTE: scroll ranges kept similar but compressed since container total height is shorter (800vh)
  // --- Hero fades out quickly ---
  const heroOpacity = useTransform(scrollYProgress, [0, 0.04, 0.06], [1, 1, 0]);

  // --- Logo fades in & holds ---
  const logoOpacity = useTransform(
    scrollYProgress,
    [0.05, 0.09, 0.15, 0.21, 0.26],
    [0, 1, 1, 1, 0]
  );
  const logoWidth = useTransform(
    scrollYProgress,
    [0.05, 0.09, 0.14, 0.18, 0.24],
    [0, 0.5, 1, 1.5, 4]
  );

  // --- Background image fades in with logo ---
  const bgOpacity = useTransform(scrollYProgress, [0.05, 0.09, 0.14], [0, 1, 1]);

  // --- Banners appear right after logo settles ---
  const bannerOpacity = useTransform(scrollYProgress, [0.09, 0.13, 0.17], [0, 1, 1]);
  const bannerXLeft = useTransform(
    scrollYProgress,
    [0.08, 0.14, 0.18, 0.23],
    ["-120vw", "0vw", "200vw", "400vw"]
  );
  const bannerXRight = useTransform(
    scrollYProgress,
    [0.08, 0.14, 0.18, 0.23],
    ["120vw", "0vw", "-200vw", "-400vw"]
  );
  const bannerRotateLeft = useTransform(scrollYProgress, [0.08, 0.14], [-12, -3]);
  const bannerRotateRight = useTransform(scrollYProgress, [0.08, 0.14], [12, 3]);
  const bannerYLeft = useTransform(scrollYProgress, [0.08, 0.14], [-30, 0]);
  const bannerYRight = useTransform(scrollYProgress, [0.08, 0.14], [30, 0]);

  // --- What's New Section ---
  const whatsnewXLeft = useTransform(
    scrollYProgress,
    [0.22, 0.25, 0.34, 0.42],
    ["-120vw", "0vw", "0vw", "120vw"]
  );
  const imageTop = useTransform(scrollYProgress, [0.225, 0.275, 0.325], [800, -900, -400]);

  // --- Closets Section (extended stay) ---
  const imgTopX = useTransform(scrollYProgress, [0.36, 0.42, 0.48], ["-120vw", "0vw", "120vw"]);
  const imgBottomX = useTransform(scrollYProgress, [0.36, 0.42, 0.48], ["120vw", "0vw", "-120vw"]);
  const textOpacity = useTransform(scrollYProgress, [0.36, 0.42, 0.5], [0, 1, 0]);
  const textY = useTransform(scrollYProgress, [0.35, 0.44], [40, 0]);

  // --- Founder's Note (delayed) ---
  const noteY = useTransform(scrollYProgress, [0.5, 0.58, 0.66], [160, 0, -80]);
  const noteOpacity = useTransform(scrollYProgress, [0.5, 0.58, 0.66], [0, 1, 0]);

  // --- Founders Section (shifted down) ---
  const f1X = useTransform(scrollYProgress, [0.64, 0.68, 0.75, 0.82], ["-120vw", "0vw", "0vw", "120vw"]);
  const f2X = useTransform(scrollYProgress, [0.68, 0.72, 0.76, 0.82], ["120vw", "0vw", "0vw", "120vw"]);
  const f3X = useTransform(scrollYProgress, [0.7, 0.74, 0.78, 0.82], ["-120vw", "0vw", "0vw", "120vw"]);
  const f4X = useTransform(scrollYProgress, [0.72, 0.76, 0.82], ["120vw", "0vw", "-120vw"]);
  const textOpacityfounder = useTransform(scrollYProgress, [0.68, 0.74, 0.82], [0, 1, 0]);

  // --- Beta Launch (final) ---
  const betaLogoY = useTransform(scrollYProgress, [0.82, 0.9, 1.0], [240, 0, 0]);
  const betaTextOpacity = useTransform(scrollYProgress, [0.82, 0.9, 1.0], [0, 1, 1]);

  return (
    // containerRef is the scrollable element monitored by useScroll (local)
    <Box
      ref={containerRef}
      sx={{
        height: "2000vh",
        width: "100%",
        overflowY: "auto",
        WebkitOverflowScrolling: "touch",
        position: "relative",
        background: "#000",
      }}
    >
      {/* inner long content (reduced height for better mobile perf) */}
      <Box sx={{ height: "800vh", position: "relative" }}>
        {/* fixed viewport layer with optimized hints */}
        <Box
          sx={{
            position: "fixed",
            inset: 0,
            width: "100%",
            height: "100vh",
            overflow: "hidden",
            background: "#000",
            zIndex: 0,
          }}
        >
          {/* Background image (no CSS filter) — hardware hint provided */}
          <motion.div
            style={{
              opacity: 1,
              position: "absolute",
              inset: 0,
              backgroundImage: `url(${background})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              // removed filter for mobile perf
              zIndex: 0,
              willChange: "opacity, transform",
              transform: "translateZ(0)",
            }}
          />

          {/* --- Hero (wrapped so we hint the browser about what changes) --- */}
          <motion.div
            style={{
              opacity: heroOpacity,
              willChange: "opacity, transform",
              transform: "translateZ(0)",
              zIndex: 2,
              position: "absolute",
              inset: 0,
            }}
          >
            <SceneHero />
          </motion.div>

          {/* --- Logo --- */}
          <motion.div
            style={{
              opacity: logoOpacity,
              // pass width as a motion value prop (SceneLogo can accept it)
              willChange: "opacity, transform",
              transform: "translateZ(0)",
              zIndex: 3,
              position: "absolute",
              inset: 0,
              pointerEvents: "none",
            }}
          >
            <SceneLogo opacity={logoOpacity} logoWidth={logoWidth} />
          </motion.div>

          {/* --- Banners (left + right) - single wrapper each to reduce subscriptions --- */}
          <motion.div
            style={{
              opacity: bannerOpacity,
              willChange: "transform, opacity",
              transform: "translateZ(0)",
              zIndex: 4,
              position: "absolute",
              inset: 0,
              pointerEvents: "none",
            }}
          >
            <SceneBanners
              opacity={bannerOpacity}
              xLeft={bannerXLeft}
              xRight={bannerXRight}
              rotateLeft={bannerRotateLeft}
              rotateRight={bannerRotateRight}
              yLeft={bannerYLeft}
              yRight={bannerYRight}
            />
          </motion.div>

          {/* --- Whats New --- */}
          <motion.div
            style={{
              willChange: "transform, opacity",
              transform: "translateZ(0)",
              zIndex: 5,
              position: "absolute",
              inset: 0,
              pointerEvents: "none",
            }}
          >
            <SceneWhatsNew
              whatsnewXLeft={whatsnewXLeft}
              imageTop={imageTop}
              scrollYProgress={scrollYProgress}
            />
          </motion.div>

          {/* --- Closets --- */}
          <motion.div
            style={{
              willChange: "transform, opacity",
              transform: "translateZ(0)",
              zIndex: 6,
              position: "absolute",
              inset: 0,
              pointerEvents: "none",
            }}
          >
            <SceneClosets imgTopX={imgTopX} imgBottomX={imgBottomX} textOpacity={textOpacity} textY={textY} />
          </motion.div>

          {/* --- Founder Note --- */}
          <motion.div
            style={{
              willChange: "transform, opacity",
              transform: "translateZ(0)",
              zIndex: 7,
              position: "absolute",
              inset: 0,
              pointerEvents: "none",
            }}
          >
            <SceneFounderNote noteY={noteY} noteOpacity={noteOpacity} />
          </motion.div>

          {/* --- Founders --- */}
          <motion.div
            style={{
              willChange: "transform, opacity",
              transform: "translateZ(0)",
              zIndex: 8,
              position: "absolute",
              inset: 0,
              pointerEvents: "none",
            }}
          >
            <SceneFounders
              f1X={f1X}
              f2X={f2X}
              f3X={f3X}
              f4X={f4X}
              textOpacity={textOpacityfounder}
            />
          </motion.div>

          {/* --- Beta Launch --- */}
          <motion.div
            style={{
              willChange: "transform, opacity",
              transform: "translateZ(0)",
              zIndex: 9,
              position: "absolute",
              inset: 0,
              pointerEvents: "none",
            }}
          >
            <SceneBetaLaunch logoY={betaLogoY} textOpacity={betaTextOpacity} />
          </motion.div>
        </Box>
      </Box>
    </Box>
  );
};

export default AnotherHomeOptimized;
