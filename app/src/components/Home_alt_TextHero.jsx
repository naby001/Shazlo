import { Box } from "@mui/material";
import { GradientText } from "./Home_Alt_gradientText";

// Text Hero Section Component
export const TextHeroSection = () => (
  <Box
    id="text-hero"
    sx={{
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: "90%",
      maxWidth: "1200px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "1rem",
    }}
  >
    <GradientText className="text-line">
      Want a shopping app which actually understands you and your style?
    </GradientText>
  </Box>
);
