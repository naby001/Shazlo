import React, { useEffect, useRef, useState } from "react";
import { Box, Typography } from "@mui/material";
import { motion, useAnimation, useScroll } from "framer-motion";
import ss1 from "../assets/ss1a.png";

const SceneWhatsNew = ({ whatsnewXLeft, imageTop }) => {
  const controls = useAnimation();
  const { scrollYProgress } = useScroll();
  const hasPlayed = useRef(false);
// console.log(scrollYProgress)
  // Trigger animation once after scroll passes 1.1
  // useEffect(() => {
  //   const unsubscribe = scrollYProgress.on("change", async (latest) => {
 
  //     if (latest >= 0.23 && !hasPlayed.current) {
  //       hasPlayed.current = true;

  //       // Sequential timed animation
  //       await controls.start({
  //         rotate: 10,
  //         borderColor: "#00ff88",
  //         transition: { duration: 1 },
  //       });
  //       await controls.start({
  //         rotate: -10,
  //         borderColor: "#ff4d4d",
  //         transition: { duration: 1 },
  //       });
  //       await controls.start({
  //         rotate: 0,
  //         borderColor: "#00b7ff",
  //         boxShadow: "0 0 25px rgba(0,255,255,0.6)",
  //         transition: { duration: 1 },
  //       });
  //       await controls.start({
  //         y: -40,
  //         borderColor: "#ffdd00",
  //         boxShadow: "0 0 30px rgba(255,221,0,0.6)",
  //         transition: { duration: 1 },
  //       });
  //       await controls.start({
  //         y: 0,
  //         borderColor: "#fff",
  //         boxShadow: "0 0 0px rgba(255,255,255,0)",
  //         transition: { duration: 1 },
  //       });
  //     }
  //   });
  //   return () => unsubscribe();
  // }, [scrollYProgress, controls]);

  // Text element animation
  const textControls = useAnimation();
 const [instruction, setInstruction] = useState("");

  // Trigger main phone motion sequence
  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", async (latest) => {
      if (latest >= 0.23 && !hasPlayed.current) {
        hasPlayed.current = true;
        //  document.body.style.overflow = "hidden";
        // 1️⃣ Swipe right — like
        setInstruction("Swipe right if you like");
        await controls.start({
          rotate: 10,
          x: 60,
          y: 0,
          borderColor: "#00ff88",
          boxShadow: "0 0 30px rgba(0,255,136,0.5)",
          transition: { duration: 1 },
        });
        await new Promise((res) => setTimeout(res, 1000));

        // 2️⃣ Swipe left — don’t like
        setInstruction("Swipe left if you don’t");
        await controls.start({
          rotate: -10,
          x: -60,
          y: 0,
          borderColor: "#ff4d4d",
          boxShadow: "0 0 30px rgba(255,77,77,0.5)",
          transition: { duration: 1 },
        });
        await new Promise((res) => setTimeout(res, 1000));

        // 3️⃣ Swipe up — add to cart
        setInstruction("Swipe up to add to cart");
        await controls.start({
          rotate: 0,
          x: 0,
          y: -80,
          borderColor: "#00b7ff",
          boxShadow: "0 0 30px rgba(0,183,255,0.6)",
          transition: { duration: 1 },
        });
        await new Promise((res) => setTimeout(res, 1000));

        // 4️⃣ Swipe down — save to closet
        setInstruction("Swipe down to save");
        await controls.start({
          rotate: 0,
          x: 0,
          y: 80,
          borderColor: "#ffdd00",
          boxShadow: "0 0 30px rgba(255,221,0,0.6)",
          transition: { duration: 1 },
        });
        await new Promise((res) => setTimeout(res, 1000));

        // ✅ Reset
        setInstruction(""); // remove swipe text
await new Promise((res) => setTimeout(res, 800)); // slight pause

// Flip the phone to reveal the back
await controls.start({
  rotateY: 180,
   rotate: 0,
  x: 0,
  y: 0,
  borderColor: "#fff",
  boxShadow: "none",
  transition: { duration: 2, ease: "easeInOut" },
});
//  hasPlayed.current = false;
  // document.body.style.overflow = "auto";
      }
    });
    return () => unsubscribe();
  }, [scrollYProgress, controls]);

  // Instruction text fade-in/out animation
  useEffect(() => {
    (async () => {
      if (!instruction) {
        await textControls.start({ opacity: 0, transition: { duration: 1 } });
      } else {
        await textControls.start({ opacity: 1, transition: { duration: 0.5 } });
      }
    })();
  }, [instruction, textControls]);


  return (
    <Box
      sx={{
        position: "absolute",
        top: "6%",
        left: "5%",
        zIndex: 5,
        pointerEvents: "none",
      }}
    >
      <motion.div
        style={{
          x: whatsnewXLeft,
          rotate: -2, // a bit off-axis for realism
        }}
        transition={{ type: "spring", stiffness: 50, damping: 15 }}
      >
        {/* Paper cutout background */}
        <Box
          sx={{
            display: "inline-block",
            px: { xs: 2.5, md: 4 },
            py: { xs: 1, md: 1.5 },
            background:
              "linear-gradient(145deg, #f9f5ec 0%, #efe8d9 100%)", // paper tone
            borderRadius: "8px",
            position: "relative",
            boxShadow:
              "3px 3px 0px #00000040, 0 0 12px rgba(0,0,0,0.35)", // rough drop shadow
            transform: "rotate(-1.5deg)",
            WebkitMaskImage:
              "radial-gradient(circle at 10% 10%, rgba(0,0,0,1) 95%, rgba(0,0,0,0) 100%), radial-gradient(circle at 90% 90%, rgba(0,0,0,1) 95%, rgba(0,0,0,0) 100%)",
            WebkitMaskComposite: "destination-in",
            overflow: "hidden",
            border: "1px solid rgba(0,0,0,0.1)",
          }}
        >
          {/* Rough texture overlay */}
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              backgroundImage:
                "url('https://www.transparenttextures.com/patterns/paper-fibers.png')",
              opacity: 0.3,
              mixBlendMode: "multiply",
              pointerEvents: "none",
            }}
          />

          <Typography
            sx={{
              position: "relative",
              fontFamily: "Aloja",
              fontSize: { xs: "2.4rem", md: "3.4rem" },
              color: "black",
              letterSpacing: "1px",
              fontWeight: 600,
              textShadow:
                "2px 3px 0 #fff, 4px 5px 12px rgba(0,0,0,0.25)",
              userSelect: "none",
              textAlign: "center",
              lineHeight: 1.1,
              transform: "rotate(-1deg)",
            }}
          >
            What’s new in this app?
          </Typography>
        </Box>
      </motion.div>

      {/* Animated phone demo */}
    <motion.div
  style={{
    position: "absolute",
    top: imageTop, // 👈 motion value
    left: "20%",
    width: "250px",
    height: "400px",
    perspective: "1200px", // gives real 3D depth
  }}
>
  {/* --- ROTATING INNER WRAPPER --- */}
  <motion.div
    animate={controls}
    style={{
      width: "100%",
      height: "100%",
      position: "relative",
      transformStyle: "preserve-3d", // 👈 keeps both faces visible in 3D
      borderRadius: "14px",
    }}
  >
    {/* --- FRONT SIDE --- */}
    <motion.img
      src={ss1}
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "white",
        borderRadius: "14px",
        // border: "6px solid #fff",
        boxShadow: "0 15px 50px rgba(0,0,0,0.5)",
        backfaceVisibility: "hidden",
        position: "absolute",
        inset: 0,
      }}
    />

    {/* --- BACK SIDE --- */}
    <Box
      sx={{
        width: "100%",
        height: "100%",
        borderRadius: "14px",
        background: "linear-gradient(180deg, #111, #1a1a1a, #111)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        inset: 0,
        backfaceVisibility: "hidden",
        transform: "rotateY(180deg)", // 👈 face backwards initially
      }}
    >
     <Typography
  sx={{
    color: "#fff",
    fontFamily: "Arapey",
    fontWeight: 600,
    textAlign: "center",
    px: 2,
    fontSize: "26px",
    lineHeight: 1.5,
    opacity: 0.95,
    transform: "rotate(-8deg)", // 👈 clean diagonal tilt in 2D
    transformOrigin: "center",
    textShadow: "0 3px 10px rgba(0,0,0,0.5)",
    letterSpacing: "0.5px",
  }}
>
  As you swipe, the app learns your style<br />
  and curates your feed<br/>{" "}
  <span style={{ color: "#ff4d7a" }}>for you</span>
</Typography>

    </Box>
  </motion.div>
</motion.div>



   {/* Instruction text */}
<motion.div
  animate={textControls}
  initial={{ opacity: 0 }}
  style={{
    position: "absolute",
    bottom: -400,
    right: 0,
    transform: "translateY(20px)",
    fontSize: "1.3rem",
    fontFamily: "Poppins, sans-serif",
    fontWeight: 600,
    // textShadow: "0 0 10px rgba(255,255,255,0.5)",
    color: "black",
    textAlign: "center",
    zIndex: 100,
  }}
>
  <Box
    sx={{
      display: "inline-block",
      px: { xs: 3, md: 4.5 },
      py: { xs: 1.2, md: 1.8 },
      background: "linear-gradient(145deg, #ffb8a5 0%, #ff7f70 40%, #ff4b5a 100%)",
      borderRadius: "10px",
      position: "relative",
      boxShadow: "4px 4px 0px #3b1a1a80, 0 0 18px rgba(255,100,100,0.4)",
      transform: "rotate(-1.5deg)",
      overflow: "hidden",
      border: "1.5px solid rgba(60,20,20,0.2)",

      // 🧵 Fabric-style overlay texture (fine linen feel)
      backgroundImage: `
        linear-gradient(145deg, rgba(255, 180, 150, 0.4), rgba(255, 80, 80, 0.3)),
        url('https://www.transparenttextures.com/patterns/fabric-of-squares.png')
      `,
      backgroundBlendMode: "overlay",
      backgroundSize: "auto",
    }}
  >
    {/* Light subtle noise overlay */}
    <Box
      sx={{
        position: "absolute",
        inset: 0,
        backgroundImage:
          "url('https://www.transparenttextures.com/patterns/fabric-plaid.png')",
        opacity: 0.25,
        mixBlendMode: "multiply",
        pointerEvents: "none",
      }}
    />

    <Typography
      sx={{
        position: "relative",
        fontFamily: "Aloja",
        fontSize: "20px",
        color: "black",
        letterSpacing: "1px",
        fontWeight: 700,
        // textShadow:
        //   "2px 2px 0 #ffebe6, 0 0 10px rgba(255,200,200,0.5)",
        userSelect: "none",
        textAlign: "center",
        lineHeight: 1.1,
        transform: "rotate(-1deg)",
      }}
    >
      {instruction}
    </Typography>
  </Box>
</motion.div>


    </Box>
  );
};

export default SceneWhatsNew;
