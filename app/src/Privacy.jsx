import React from "react";
import { Box, Typography } from "@mui/material";

const Privacy = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100%",
        background: "linear-gradient(135deg, #fafafa, #f1f1f1)",
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
          background: "#ffffff",
          borderRadius: "20px",
          p: { xs: 3, md: 5 },
          boxShadow: "0 20px 60px rgba(0,0,0,0.08)",
          border: "1px solid #eaeaea",
          transition: "transform 0.3s",
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
          Privacy Policy
        </Typography>

        <Typography sx={{ fontStyle: "italic", mb: 4 }}>
          Last updated: {new Date().toLocaleDateString()}
        </Typography>

        {/* --- CONTENT --- */}
        <Typography sx={{ mb: 2, fontSize: "1.1rem", color: "#444" }}>
          Welcome to <b>Shazlo</b>. This Privacy Policy explains how we collect,
          use, store, and protect your information.
        </Typography>

        <Section title="1. Information We Collect">
          We collect:
          <ul>
            <li>Account information (name, email, phone, gender)</li>
            <li>User behaviour (swipes, likes, dislikes, closets, cart)</li>
             <li>Residential Address for delivery of products</li>
            <li>Preference vectors & ML data</li>
            <li>Device information</li>
            <li>Cart & purchase interactions</li>
          </ul>
        </Section>

        <Section title="2. How We Use Your Data">
          <ul>
            <li>Personalize your fashion recommendations</li>
            <li>Improve model accuracy</li>
            <li>Track engagement to optimize user experience</li>
            <li>Maintain account and security</li>
          </ul>
        </Section>

        <Section title="3. Data Protection">
          All sensitive data is encrypted or hashed. ML models only use
          anonymized vectors.
        </Section>

        <Section title="4. Your Rights">
          You may request:
          <ul>
            {/* <li>Data access</li> */}
            <li>Correction</li>
            <li>Deletion</li>
            {/* <li>Consent withdrawal</li> */}
          </ul>
        </Section>

        <Section title="5. Contact">
          Email us at:
          <br />
          <a href="mailto:support@shazapp.com">support@shazlo.store</a>
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

export default Privacy;
