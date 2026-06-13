import { useEffect, useState } from "react";
import {
  Box,
  Typography,
} from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";

import SwipePage from "./swipePage";

const SHADOW_USER_KEY = "shadow_user";

const MotionBox = motion(Box);

export default function ShadowUserLoader() {
  const [loading, setLoading] = useState(true);
  const [showWelcome, setShowWelcome] =
    useState(true);
const [showSwipePage, setShowSwipePage] =
  useState(false);
  const [logoFly, setLogoFly] =
  useState(false);
  useEffect(() => {
    initializeShadowUser();
  }, []);

  const initializeShadowUser = async () => {
    try {
      const existingUser =
        localStorage.getItem(
          SHADOW_USER_KEY
        );

      if (!existingUser) {
        const response = await fetch(
          "https://api.shazlo.store/v1/auth/shadow",
          {
            method: "POST",
            headers: {
              "Content-Type":
                "application/json",
            },
          }
        );

        const data =
          await response.json();

        localStorage.setItem(
          SHADOW_USER_KEY,
          JSON.stringify(data.user)
        );
      }

      await new Promise((r) =>
        setTimeout(r, 4500)
      );
      setTimeout(() => {
  setLogoFly(true);
}, 3800);
setTimeout(() => {
  setShowSwipePage(true);
}, 4500);
setTimeout(() => {
        setLoading(false);
      }, 5600);
console.log(logoFly)
    } catch (err) {
      console.error(err);
    } finally {
      setShowWelcome(false);
      

      
    }
  };

  // if (!loading) {
  //   return <SwipePage />;
  // }

  return (
    <>
    {showSwipePage && <SwipePage />}
    {loading &&(<Box
      sx={{
        height: "100vh",
        width: "100vw",
        overflow: "hidden",
        position: "relative",
       background:
          "linear-gradient(180deg,#122a41 0%,#264b72 35%,#ffffff 100%)",
      }}
    >
      {/* PARTICLES */}

      

      {/* CAMERA ZOOM */}

      <MotionBox
        initial={{
          scale: 0.8,
        }}
        animate={{
          scale: 1.25,
        }}
        transition={{
          duration: 5,
          ease: "easeInOut",
        }}
        sx={{
          width: "100%",
          height: "100%",
          position: "absolute",
          inset: 0,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* SHOP FRAME */}

        <Box
          sx={{
            width: 340,
            height: 650,
            position: "relative",
          }}
        >
          {/* GLOW */}

          <MotionBox
            animate={{
              opacity: [0.4, 1, 0.4],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
            sx={{
              position: "absolute",
              inset: 0,
              // borderRadius: "40px",
              // background:
              //   "rgba(255,255,255,0.06)",
              // backdropFilter:
              //   "blur(20px)",
              border:
                "1px solid rgba(255,255,255,0.15)",
            }}
          />
        
          {/* HANGERS */}

          {/* <Box
            sx={{
              position: "absolute",
              top: 90,
              left: 60,
              color: "white",
              fontSize: 40,
            }}
          >
            👗
          </Box>

          <Box
            sx={{
              position: "absolute",
              top: 130,
              right: 70,
              color: "white",
              fontSize: 38,
            }}
          >
            👚
          </Box> */}

          {/* LOGO */}

          {/* STORE LOGO */}

<MotionBox
  animate={
    logoFly
      ? {
          top: 75,
          left: 2,
          scale: 0.50,
        }
      : {}
  }
  transition={{
    duration: 1.4,
    ease: [0.22, 1, 0.36, 1],
  }}
  sx={{
    position: "fixed",
    top: "50%",
    left: "50%",
    transform:
      "translate(-50%, -50%)",
    zIndex: 1,
  }}
>
  <Box
    component="img"
    src="/main-logo.png"
    sx={{
      height: 85,
      width: "auto",
      filter:
        "drop-shadow(0 10px 25px rgba(255,255,255,0.25))",
    }}
  />
</MotionBox>

          {/* GLASS DOORS */}
<MotionBox
  initial={{
  rotateY: 0,
}}
animate={{
  rotateY: 85,
}}
  transition={{
    delay: 2.5,
    duration: 1.4,
  }}
  style={{
  transformOrigin: "left center",
  transformPerspective: 1500,
}}
  sx={{
    zIndex: 20,
    position: "absolute",
    left: 0,
    top: 0,
    width: "50%",
    height: "100%",

    backdropFilter: "blur(18px)",

    background:
      "linear-gradient(135deg, rgba(255,255,255,0.18), rgba(255,255,255,0.05))",

    borderRight:
      "1px solid rgba(0, 0, 0, 0.86)",

    borderTop:
      "4px solid rgba(0, 0, 0, 0.86)",

    borderLeft:
      "4px solid rgba(0, 0, 0, 0.86)",

    borderBottom:
      "10px solid rgba(0, 0, 0, 0.86)",

    boxShadow: `
      inset 0 0 20px rgba(255,255,255,0.08),
      0 0 30px rgba(0,0,0,0.25)
    `,
  }}

>
    <Box
  sx={{
    position: "absolute",
    right: 18,
    top: "50%",
    transform: "translateY(-50%)",

    width: 8,
    height: 200,

    borderRadius: "20px",

    background:
      "linear-gradient(180deg, #181818 0%, #2b2b2b 50%, #2d2d2d 100%)",

    boxShadow: `
      0 0 12px rgba(255,255,255,0.3),
      inset 0 0 4px rgba(0,0,0,0.15)
    `,
  }}
/>
</MotionBox>
<MotionBox
  initial={{
  rotateY: 0,
}}
animate={{
  rotateY: -85,
}}
style={{
  transformOrigin: "right center",
  transformPerspective: 1500,
}}
  transition={{
    delay: 2.5,
    duration: 1.4,
  }}
  sx={{
    zIndex: 20,
    position: "absolute",
    right: 0,
    top: 0,
    width: "50%",
    height: "100%",

    backdropFilter: "blur(18px)",

    background:
      "linear-gradient(225deg, rgba(255,255,255,0.18), rgba(255,255,255,0.05))",

    borderLeft:
      "1px solid rgba(0, 0, 0, 0.86)",

    borderTop:
      "4px solid rgba(0, 0, 0, 0.86)",

    borderRight:
      "4px solid rgba(0, 0, 0, 0.86)",

    borderBottom:
      "10px solid rgba(0, 0, 0, 0.86)",

    boxShadow: `
      inset 0 0 20px rgba(255,255,255,0.08),
      0 0 30px rgba(0,0,0,0.25)
    `,
  }}
>
<Box
  sx={{
    position: "absolute",
    left: 18,
    top: "50%",
    transform: "translateY(-50%)",

    width: 8,
    height: 200,

    borderRadius: "20px",

     background:
      "linear-gradient(180deg, #181818 0%, #2b2b2b 50%, #2d2d2d 100%)",

    boxShadow: `
      0 0 12px rgba(255,255,255,0.3),
      inset 0 0 4px rgba(0,0,0,0.15)
    `,
  }}
/>
</MotionBox>

          {/* TEXT */}

          <MotionBox
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
            }}
            sx={{
              position: "absolute",
              bottom: 70,
              width: "100%",
              textAlign: "center",
            }}
          >
            <Typography
              sx={{
                color: "white",
                fontWeight: 800,
                fontSize: 30,
                mb: 1,
              }}
            >
              Welcome to Shazlo
            </Typography>

            <Typography
              sx={{
                color:
                  "rgba(255,255,255,0.75)",
                fontSize: 15,
              }}
            >
              Entering your personal
              fashion store
            </Typography>
          </MotionBox>
        </Box>
      </MotionBox>
    </Box>
 )}   </>
  );
}