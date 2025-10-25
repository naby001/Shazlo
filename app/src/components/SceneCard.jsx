import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import { motion } from "framer-motion";

const ProductCard = ({
  product = {
    image: "",
    title: "Basic Cotton T-Shirt",
    price: "₹799",
    sizes: ["S", "M", "L", "XL"],
  },
  gradientColors = ["rgba(0,0,0,1.0)", "rgba(0,0,0,0.6)", "transparent"],
  textColor = "white",
  iconColor = "black",
  likeIcon,
  dislikeIcon,
  saveIcon,
  cartIcon,
  infoIcon,
  shareIcon,
}) => {
  return (
    <Box
      sx={{
        position: "relative",
        width: 320,
        height: 520,
        borderRadius: 6,
        overflow: "hidden",
        backgroundColor: "#000",
        boxShadow: "0 10px 40px rgba(0,0,0,0.5)",
      }}
    >
      {/* --- PRODUCT IMAGE --- */}
      <motion.img
        src={product.image}
        alt={product.title}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          userSelect: "none",
          pointerEvents: "none",
        }}
      />

      {/* --- DARK OVERLAY --- */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to top, rgba(0,0,0,0.9) 10%, rgba(0,0,0,0.5) 50%, transparent 90%)",
          zIndex: 1,
        }}
      />

      {/* --- TOP ICONS (Share + Info) --- */}
      <Box
        sx={{
          position: "absolute",
          top: 16,
          left: 16,
          right: 16,
          zIndex: 3,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <IconButton size="small">
          <img src={shareIcon} width={28} height={28} alt="share" style={{ filter: `invert(${iconColor === 'white' ? 1 : 0})` }} />
        </IconButton>

        <IconButton size="small">
          <img src={infoIcon} width={30} height={30} alt="info" style={{ filter: `invert(${iconColor === 'white' ? 1 : 0})` }} />
        </IconButton>
      </Box>

      {/* --- CENTER ICON PLACEHOLDER --- */}
      {/* --- CENTER ICON PLACEHOLDER --- */}
{likeIcon && (
  <Box
    sx={{
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      zIndex: 4,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
   <img
  src={likeIcon}
  alt="icon"
  width={200}
  height={200}
  style={{
    opacity: 1,
    objectFit: "contain",
    // 👇 Force invert for black bookmark (save icon)
    filter:
      likeIcon && likeIcon.includes("add-to-bag")
        ? "invert(1)"
        : `invert(${iconColor === "white" ? 1 : 0})`,
  }}
/>
  </Box>
)}


      {/* --- BOTTOM GRADIENT SECTION --- */}
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          p: 2,
          zIndex: 5,
          background: `linear-gradient(to top, ${gradientColors.join(",")})`,
        }}
      >
        {/* --- SIZES ROW --- */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            mb: 1.5,
          }}
        >
          <Box sx={{ display: "flex", gap: 1 }}>
            {product.sizes.map((size, idx) => (
              <Box
                key={idx}
                sx={{
                  fontSize: 16,
                  color: textColor,
                  border: `1.5px solid ${textColor}`,
                  borderRadius: "5px",
                  px: 1.5,
                  py: 0.2,
                  cursor: "pointer",
                  fontFamily:'Manrope'
                }}
              >
                {size}
              </Box>
            ))}
          </Box>

          <Typography
            sx={{
              fontSize: 14,
              color: textColor,
              textDecoration: "underline",
              cursor: "pointer",
              opacity: 0.9,
              fontFamily:'Manrope'
            }}
          >
            Size Chart
          </Typography>
        </Box>

        {/* --- TITLE + PRICE --- */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 2,
          }}
        >
          <Typography
            sx={{
              fontSize: 16,
              color: textColor,
              flex: 1,
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              fontFamily:'Manrope'
            }}
          >
            {product.title}
          </Typography>
          <Typography
            sx={{
              fontSize: 28,
              color: textColor,
              fontWeight: 600,
              fontFamily:'Manrope'
            }}
          >
            {product.price}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default ProductCard;
