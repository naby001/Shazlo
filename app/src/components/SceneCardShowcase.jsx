import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { motion, useAnimation } from "framer-motion";
import ProductCard from "./SceneCard";
import productsData from "./productsarray";

import likeIcon from "../assets/like.png";
import dislikeIcon from "../assets/dislike.png";
import saveIcon from "../assets/bookmark.png";
import cartIcon from "../assets/add-to-bag.png";
import shareIcon from "../assets/share.png";
import infoIcon from "../assets/info.png";

const sampleProducts = productsData;

const SceneCardShowcase = ({ whatsnewXLeft, imageTop, imageOp }) => {
  const [order, setOrder] = useState(sampleProducts.map((_, i) => i));
  const controls = sampleProducts.map(() => useAnimation());
  const [activeIcon, setActiveIcon] = useState(null); // 👈 null by default

  useEffect(() => {
    let isMounted = true;

    const directions = [
      { x: 500, y: 0, r: 10, icon: likeIcon }, // right → like
      { x: -500, y: 0, r: -10, icon: dislikeIcon }, // left → dislike
      { x: 0, y: -200, r: 0, icon: cartIcon }, // up → add to cart
      { x: 0, y: 200, r: 0, icon: saveIcon }, // down → save
    ];

    const animateCards = async () => {
      while (isMounted) {
        const topIndex = order[0];
        const nextIndex = order[1];
        const dir = directions[topIndex % 4]; // cycle through 4 directions

        // 🟡 show icon as swipe starts
        setActiveIcon(dir.icon);

        // Swipe top card — added opacity fade 👇
        await controls[topIndex].start({
          x: dir.x,
          y: dir.y,
          rotate: dir.r,
          opacity: 0, // 👈 fade out as it goes off screen
          transition: { duration: 0.8, ease: "easeInOut" },
        });

        // Drop next card into place
        await controls[nextIndex].start({
          y: [-30, 0],
          transition: { duration: 0.45, ease: "easeOut" },
        });

        // Reset swiped card under stack (restore opacity)
        await controls[topIndex].start({
          x: 0,
          y: 0,
          rotate: 0,
          opacity: 1, // 👈 reset opacity to visible
          transition: { duration: 0 },
        });

        // 🟢 hide icon right after swipe completes
        setActiveIcon(null);

        // Rotate queue
        setOrder((prev) => [...prev.slice(1), prev[0]]);

        // Small pause before next swipe
        await new Promise((res) => setTimeout(res, 300));
      }
    };

    animateCards();

    return () => {
      isMounted = false;
    };
  }, [controls, order]);

  return (
    <Box
      sx={{
        position: "absolute",
        top: "8%",
        left: "5%",
        zIndex: 5,
        pointerEvents: "none",
      }}
    >
      {/* --- Heading Text --- */}
      {/* --- Heading Text --- */}
<motion.div
  style={{ x: whatsnewXLeft }}
  transition={{ type: "spring", stiffness: 60, damping: 18 }}
>
  <Box sx={{ textAlign: "center" }}>
    <Typography
      sx={{
        fontFamily: "Arapey",
        fontSize: { xs: "1.8rem", md: "2.6rem" },
        color: "white",
        fontWeight: 600,
        // letterSpacing: "1px",
        textShadow: "0 4px 18px rgba(0,0,0,0.4)",
        whiteSpace: "nowrap",
      }}
    >
      As you swipe, the app learns,  

    </Typography>

    <Typography
      sx={{
        fontFamily: "Arapey",
        fontSize: { xs: "1.8rem", md: "3.8rem" },
        color: "white",
        fontWeight: 600,
        // sletterSpacing: "0.5px",
        // mt: 1, // slight spacing between lines
      }}
    >
    curating a feed just for you
    </Typography>
  </Box>
</motion.div>


      {/* --- Card Stack --- */}
      <motion.div
        style={{
          position: "absolute",
          top: imageTop,
          left: "50%",
          transform: "translateX(-50%)",
          width: "320px",
          height: "520px",
          perspective: "1200px",
          opacity:imageOp
        }}
      >
        {order.map((cardIndex, stackPosition) => {
          const product = sampleProducts[cardIndex];
          const control = controls[cardIndex];
          const isTop = stackPosition === 0;

          return (
            <motion.div
              key={cardIndex}
              animate={control}
              style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                borderRadius: "16px",
                overflow: "hidden",
                transformOrigin: "center",
                zIndex: sampleProducts.length - stackPosition,
                opacity: 1 - stackPosition * 0.05,
              }}
            >
              <ProductCard
                product={product}
                likeIcon={isTop && activeIcon ? activeIcon : null} // 👈 only top card + active swipe
                dislikeIcon={dislikeIcon}
                saveIcon={saveIcon}
                cartIcon={cartIcon}
                shareIcon={shareIcon}
                infoIcon={infoIcon}
              />
            </motion.div>
          );
        })}
      </motion.div>
    </Box>
  );
};

export default SceneCardShowcase;
