import {
  motion,
  useMotionValue,
  useTransform,
} from "framer-motion";
import {
  Box,
  Typography,
  Chip,
  Stack,
  IconButton,
} from "@mui/material";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

const MotionBox = motion(Box);

export default function SwipeCard({
  item,
  onSwipeLeft,
  onSwipeRight,
  draggable
}) {
  const x = useMotionValue(0);

  const likeOpacity = useTransform(
    x,
    [0, 50],
    [0, 1]
  );

  const dislikeOpacity = useTransform(
    x,
    [-150, -50, 0],
    [1, 0.5, 0]
  );

  const likeScale = useTransform(
    x,
    [0, 150],
    [0.5, 1.3]
  );

  const dislikeScale = useTransform(
    x,
    [-150, 0],
    [1.3, 0.5]
  );

  const rotate = useTransform(
    x,
    [-250, 0, 250],
    [-12, 0, 12]
  );
  return (
    <MotionBox
    drag={draggable ? "x" : false}
      style={{
        x,
        rotate,
      }}
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={0.15}
      whileTap={{ scale: 0.98 }}
      onDragEnd={(e, info) => {
        if (info.offset.x > 120) {
          onSwipeRight(item);
        }

        if (info.offset.x < -120) {
          onSwipeLeft(item);
        }
      }}
      sx={{
        width: "100%",
        height: "95%",
        position: "absolute",
        borderRadius: "38px",
        overflow: "hidden",

        backgroundColor: "#fff",

        border: "4px solid white",



        touchAction: "none",
        cursor: "grab",
        willChange: "transform",
        transform: "translateZ(0)",
        backfaceVisibility: "hidden",
      }}
    >
      {/* IMAGE */}

      <Box
        component="img"
        src={item.image_url}
        alt={item.title}
        sx={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
      <motion.div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          translateX: "-50%",
          translateY: "-50%",
          opacity: likeOpacity,
          scale: likeScale,
          pointerEvents: "none",
          zIndex: 20,
        }}
      >
        <Box
          sx={{
            width: 120,
            height: 120,
            borderRadius: "50%",
            backgroundColor: "rgba(255,255,255,0.95)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            boxShadow:
              "0 20px 50px rgba(0,0,0,0.25)",
            fontSize: 60,
          }}
        >
          ❤️
        </Box>
      </motion.div>

      <motion.div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          translateX: "-50%",
          translateY: "-50%",
          opacity: dislikeOpacity,
          scale: dislikeScale,
          pointerEvents: "none",
          zIndex: 20,
        }}
      >
        <Box
          sx={{
            width: 120,
            height: 120,
            borderRadius: "50%",
            backgroundColor: "rgba(255,255,255,0.95)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            boxShadow:
              "0 20px 50px rgba(0,0,0,0.25)",
            fontSize: 60,
            fontWeight: 800,
            color: "#e53935",
          }}
        >
          ✕
        </Box>
      </motion.div>

      {/* NEW IN BADGE */}

      <Chip
        label="NEW IN"
        sx={{
          position: "absolute",
          top: 18,
          left: 18,

          bgcolor: "white",

          fontWeight: 800,

          fontSize: "0.8rem",

          borderRadius: "20px",

          px: 1.2,

          boxShadow:
            "0 8px 24px rgba(0,0,0,0.08)",
        }}
      />

      {/* MENU */}

      <IconButton
        sx={{
          position: "absolute",
          top: 14,
          right: 14,

          //   bgcolor: "rgba(255,255,255,0.95)",

          width: 42,
          height: 42,

          //   "&:hover": {
          //     bgcolor: "white",
          //   },

          //   boxShadow:
          //     "0 8px 24px rgba(0,0,0,0.08)",
        }}
      >
        <MoreHorizIcon />
      </IconButton>

      {/* FLOATING INFO PANEL */}

      <Box
        sx={{
          position: "absolute",

          width: '100%',
          bottom: 0,

          background: "white",

          borderRadius: "12px",

          p: 2.5,

          boxShadow:
            "0 20px 50px rgba(0,0,0,0.12)",
        }}
      >
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Box flex={1}>
           <Typography
  sx={{
    fontWeight: 800,
    fontSize: "1.5rem",
    lineHeight: 1.1,
    color: "#111",
  }}
>
  {item.title
    ?.split(" ")
    .slice(0, 3)
    .join(" ") +
    (item.title?.split(" ").length > 3
      ? "..."
      : "")}
</Typography>

            <Typography
              sx={{
                color: "#666",
                mt: 0.5,
                fontSize: "0.95rem",
              }}
            >
              {item.subtitle}
            </Typography>
          </Box>

          <IconButton
            sx={{
              width: 54,
              height: 54,

              border:
                "2px solid rgba(0,0,0,0.08)",

              bgcolor: "white",

              ml: 2,

              "&:hover": {
                bgcolor: "#fafafa",
              },
            }}
          >
            <FavoriteBorderIcon />
          </IconButton>
        </Box>

        <Stack
          direction="row"
          spacing={1}
          mt={2}
          flexWrap="wrap"
          useFlexGap
        >
          {item.tags?.map((tag) => (
            <Chip
              key={tag}
              label={tag}
              sx={{
                bgcolor: "#F8EDC9",

                color: "#53483A",

                borderRadius: "16px",

                fontWeight: 600,

                fontSize: "0.8rem",

                "& .MuiChip-label": {
                  px: 1.2,
                },
              }}
            />
          ))}
        </Stack>
      </Box>
    </MotionBox>
  );
}