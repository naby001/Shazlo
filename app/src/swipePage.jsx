import { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useRef } from "react";

import SwipeCard from "./components/SwipeCard";
import { getRecommendations } from "./api/recommendations";
import FeedQueue from "./FeedQueue";

const MotionBox = motion(Box);
const VISIBLE_CARDS = 5;
export default function SwipePage() {
  const [cards, setCards] = useState([]);
  const [batchVersion, setBatchVersion] =
    useState(0);
  console.log(batchVersion)
  const feedRef = useRef(
    new FeedQueue(5)
  );
  const [loading, setLoading] = useState(true);
  const animatedIdsRef = useRef(new Set());
  const swipeCountRef = useRef(0);
  const servedIdsRef = useRef(new Set());
 const initializedRef = useRef(false);
 useEffect(() => {
  if (initializedRef.current) return;

  initializedRef.current = true;

  loadInitialCards();
}, []);

  const loadInitialCards = async () => {
    console.log("loadInitialCards called");
    try {
      setLoading(true);

      const items = await getRecommendations();

      items.forEach((item) =>
        servedIdsRef.current.add(item.item_id)
      );

      feedRef.current.addBatch(items);

setCards(
  feedRef.current.getVisible()
);
// console.log("Visible card=", cards.length)

setBatchVersion(v => v + 1);

      items.forEach(item => {
        animatedIdsRef.current.add(item.item_id);
      });
      console.log(items);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const fetchMoreCards = async () => {
    try {
      const excludeIds = Array.from(
        servedIdsRef.current
      );

      const newCards =
        await getRecommendations({
          excludeIds,
        });
        console.log(newCards)
      newCards.forEach((item) => {
        servedIdsRef.current.add(
          item.item_id
        );
      });

      feedRef.current.addBatch(
  newCards
);
      // mark only NEW batch as animatable

      newCards.forEach(item => {
        animatedIdsRef.current.delete(
          item.item_id
        );
      });

    } catch (err) {
      console.error(err);
    }
  };
 const removeCard = (id) => {
  feedRef.current.swipe(id);

  setCards(
    feedRef.current.getVisible()
  );

 
};
  const handleLike = async (item) => {
    console.log("liked", item.item_id);

    removeCard(item.item_id);

    swipeCountRef.current += 1;

    if (swipeCountRef.current % 6 === 0) {
      fetchMoreCards();
    }

    /*
    later:

    await sendSwipe({
      item_id:item.item_id,
      like_status:true
    })
    */
  };

  const handleDislike = async (item) => {
    console.log("disliked", item.item_id);

    removeCard(item.item_id);

    swipeCountRef.current += 1;

    if (swipeCountRef.current % 6 === 0) {
      fetchMoreCards();
    }

    /*
    later:

    await sendSwipe({
      item_id:item.item_id,
      like_status:false
    })
    */
  };

  // if (loading) {
  //   return (
  //     <Box
  //       sx={{
  //         minHeight: "100vh",
  //         background:
  //           "linear-gradient(180deg,#122a41 0%,#264b72 35%,#ffffff 100%)",

  //         display: "flex",
  //         justifyContent: "center",
  //         alignItems: "center",
  //       }}
  //     >
  //       <Typography
  //         sx={{
  //           color: "white",
  //           fontSize: 24,
  //           fontWeight: 700,
  //         }}
  //       >
  //         Loading Feed...
  //       </Typography>
  //     </Box>
  //   );
  // }

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background:
          "linear-gradient(180deg,#122a41 0%,#264b72 35%,#ffffff 100%)",
        display: "flex",
        flexDirection: "column",
        p: "2%",
      }}
    >
      {/* HEADER */}

      <Box
        sx={{
          p: 2,
          display: "flex",
        }}
      >
        <Box
          component="img"
          src="/main-logo.png"
          alt="Logo"
          sx={{
            height: 50,
            width: "auto",
            objectFit: "contain",
          }}
        />
      </Box>

      {/* CARD STACK */}

      <Box
        sx={{
          width: "100%",
          maxWidth: 430,
          height: "88vh",
          position: "relative",
        }}
      >
        {cards.length === 0 ? (
  <Box
    sx={{
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      gap: 3,
    }}
  >
    <MotionBox
      animate={{
        y: [0, -18, 0],
        rotate: [-5, 5, -5],
      }}
      transition={{
        duration: 1.6,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
     <Box
  component="img"
  src="/hanger.png"
  alt="Loading"
  sx={{
    width: 100,
    height: "auto",

    filter: `
      brightness(0)
      invert(1)
      drop-shadow(0 12px 25px rgba(255,255,255,0.15))
    `,
  }}
/>
    </MotionBox>

    <Typography
      sx={{
        color: "white",
        fontSize: "1.2rem",
        fontWeight: 700,
        letterSpacing: "0.5px",
        textAlign: "center",
      }}
    >
      Curating your next favourite styles...
    </Typography>

  </Box>
) : (
          cards
            // .slice(0, VISIBLE_CARDS)
            .map((card, index) => (
              <MotionBox
                key={card.item_id}
              initial={
  feedRef.current.animateCurrentWindow 
    ? {
        y: -1200,
        scale: 0.5,
        opacity: 0,
      }
    : false
}
                onAnimationComplete={() => {
                  animatedIdsRef.current.add(
                    card.item_id
                  );
                }}
                animate={{
                  x: 0,
                  y: index * 12,
                  rotate: index * 4,
                  scale: 1 - index * 0.04,
                  opacity: 1,
                }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
                sx={{
                  position: "absolute",
                  inset: 0,
                  zIndex:
                    cards.length - index,
                }}
              >
                <SwipeCard
                  item={card}
                  draggable={index === 0}
                  onSwipeLeft={handleDislike}
                  onSwipeRight={handleLike}
                />
              </MotionBox>
            ))
        )}
      </Box>
    </Box>
  );
}