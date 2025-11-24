import React from "react";
import { Box, Typography } from "@mui/material";

const Terms = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100%",
        background: "linear-gradient(135deg, #fcfcfc, #f1f1f1)",
        display: "flex",
        justifyContent: "center",
        py: 6,
        px: 2,
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: "850px",
          background: "#fff",
          borderRadius: "20px",
          p: { xs: 3, md: 5 },
          boxShadow: "0 20px 60px rgba(0,0,0,0.1)",
          border: "1px solid #e8e8e8",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontWeight: 800,
            background: "linear-gradient(90deg, #111, #777)",
            WebkitBackgroundClip: "text",
            color: "transparent",
            mb: 2,
          }}
        >
          Terms of Service
        </Typography>

        <Typography sx={{ fontStyle: "italic", mb: 4 }}>
          Last updated: {new Date().toLocaleDateString()}
        </Typography>

        <Section title="1. Acceptance of Terms">
          By using Shazlo, you agree to these Terms. If you do not agree, please
          stop using the app immediately.
        </Section>

        <Section title="2. Service Description">
          Shazlo provides AI-powered fashion discovery, style personalization,
          closets, and cart features.
        </Section>

        <Section title="3. User Responsibilities">
          You agree not to manipulate the recommendation system, reverse
          engineer the app, or create fake accounts.
        </Section>

        <Section title="4. Recommendations Disclaimer">
          Recommendations are automatically generated and may be imperfect.
        </Section>

        <Section title="5. Termination">
          We may suspend or remove accounts violating our policies.
        </Section>

        <Section title="6. Liability">
          Shazlo is not responsible for data loss, inaccurate suggestions, or
          issues with external stores.
        </Section>

        <Section title="7. Contact">
          Email us at:
          <br />
          <a href="mailto:legal@shazapp.com">legal@shazlo.store</a>
        </Section>
      </Box>
    </Box>
  );
};

const Section = ({ title, children }) => (
  <Box sx={{ mb: 4 }}>
    <Typography
      variant="h5"
      sx={{
        fontWeight: 700,
        mb: 1,
        mt: 3,
        color: "#222",
      }}
    >
      {title}
    </Typography>
    <Typography sx={{ fontSize: "1rem", color: "#555" }}>{children}</Typography>
  </Box>
);

export default Terms;
