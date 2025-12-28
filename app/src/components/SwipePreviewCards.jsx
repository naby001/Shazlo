import React from "react";
import { Box } from "@mui/material";
import ProductCard from "./ProductCard";

const SwipePreviewCards = ({
  likeIcon,
  dislikeIcon,
  leftProduct,
  rightProduct,
}) => {
  return (
    <Box
      sx={{
        position: "relative",
        width: 360,
        height: 560,
        mx: "auto",
      }}
    >
      {/* DISLIKE CARD (LEFT) */}
      <Box
        sx={{
          position: "absolute",
          top: 40,
          left: 0,
          transform: "rotate(-8deg)",
          transformOrigin: "center",
          zIndex: 1,
        }}
      >
        <ProductCard
          product={leftProduct}
          likeIcon={dislikeIcon}
          iconColor="white"
        />
      </Box>

      {/* LIKE CARD (RIGHT / TOP) */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          right: 0,
          transform: "rotate(6deg)",
          transformOrigin: "center",
          zIndex: 2,
        }}
      >
        <ProductCard
          product={rightProduct}
          likeIcon={likeIcon}
          iconColor="white"
        />
      </Box>
    </Box>
  );
};

export default SwipePreviewCards;
