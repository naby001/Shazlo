import { Typography } from "@mui/material";

// Gradient Text Component
export const GradientText = ({ children, className }) => (
  <Typography
    className={className}
    sx={{
      fontSize: { xs: "3rem", md: "6rem", lg: "8rem" },
      fontWeight: 800,
      background: "linear-gradient(135deg, #ffffff 0%, #888888 50%, #444444 100%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      backgroundClip: "text",
      textAlign: "center",
      lineHeight: 1.2,
      letterSpacing: "-0.02em",
      textTransform: "uppercase",
      // opacity: 0,
    }}
  >
    {children}
  </Typography>
);
