import { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useRef } from "react";

import SwipeCard from "./components/SwipeCard";
import { getRecommendations } from "./api/recommendations";
import FeedQueue from "./FeedQueue";
import FilterBar from "./components/FilterBar";
import { sendSwipe } from "./api/swipes";
import { recalculatePreferenceVector } from "./api/user_vector";

const MotionBox = motion(Box);
const VISIBLE_CARDS = 5;
export default function SwipePage() {
  const firstLoad = useRef(true);
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
 const [brands,setBrands]=useState([])
 const [filters, setFilters] = useState({
  brands: [],
  products: [],
  gender: "women",
  minPrice: null,
  maxPrice: null,
});

const loadInitialCards = async (
    currentFilters = filters
) => {
    try {
        setLoading(true);

        // Reset everything
        servedIdsRef.current.clear();
        swipeCountRef.current = 0;
        
        feedRef.current = new FeedQueue(5);

        const items =
            await getRecommendations({
                ...currentFilters,
            });

        items.forEach(item =>
            servedIdsRef.current.add(item.item_id)
        );

        feedRef.current.addBatch(items);

        setCards(
            feedRef.current.getVisible()
        );

        setBatchVersion(v => v + 1);

    } finally {
        setLoading(false);
    }
};
const fetchMoreCards = async () => {
  try {
    const newCards = await getRecommendations({
      excludeIds: Array.from(
        servedIdsRef.current
      ),

      gender: filters.gender,
      brands: filters.brands,
      products: filters.products,
      minPrice: filters.minPrice,
      maxPrice: filters.maxPrice,
    });

    newCards.forEach(item => {
      servedIdsRef.current.add(item.item_id);
    });

    feedRef.current.addBatch(newCards);
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
  removeCard(item.item_id);

  swipeCountRef.current++;

  if (swipeCountRef.current % 6 === 0) {
    fetchMoreCards();
  }

  try {
    await sendSwipe({
      item,
      likeStatus: true,
    });

    if (swipeCountRef.current % 8 === 0) {
      await recalculatePreferenceVector();
    }
  } catch (err) {
    console.error(err);
  }
};
const handleDislike = async (item) => {
  removeCard(item.item_id);

  swipeCountRef.current++;

  if (swipeCountRef.current % 6 === 0) {
    fetchMoreCards();
  }

  try {
    await sendSwipe({
      item,
      likeStatus: false,
    });

    if (swipeCountRef.current % 8 === 0) {
      await recalculatePreferenceVector();
    }
  } catch (err) {
    console.error(err);
  }
};
useEffect(() => {
    // Remove cards from UI immediately
    setCards([]);

    // Clear queue completely
    feedRef.current = new FeedQueue();

    // Clear served ids
    servedIdsRef.current.clear();

    // Reset swipe count
    swipeCountRef.current = 0;

    loadInitialCards(filters);

}, [filters]);
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
          flexDirection:'column'
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
            alignSelf:'flex-start'
          }}
        />
        <FilterBar filters={filters}
    setFilters={setFilters}/>
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