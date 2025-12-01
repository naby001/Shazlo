import React, { useState } from "react";
import { Box, Typography, TextField, Button, MenuItem } from "@mui/material";
import { motion } from "framer-motion";
import logo from "../assets/3a.png";

const SceneWaitlistForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setsubmitted] = useState(false);

  const handleJoin = async () => {
    if (!name || !email || !gender || !city) return;

    setLoading(true);

    await fetch("https://shazlo-waitlist.onrender.com/api/waitlist/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, gender, city }),
    });

    setTimeout(() => {
      setLoading(false);
      setsubmitted(true);
    }, 1500);
  };

  return (
    <Box
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 999,
        pointerEvents: "auto",
        background: "rgba(0,0,0,0.4)",
      }}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 60, damping: 15 }}
        style={{
          rotate: -2,
          transformOrigin: "center",
        }}
      >
        <Box
          sx={{
            width: { xs: "320px", md: "380px" },
            minHeight: "420px",
            background: "#fdfcf7",
            borderRadius: "0px",
            border: "1px solid rgba(0,0,0,0.1)",
            boxShadow: "0 25px 60px rgba(0,0,0,0.4)",
            p: { xs: 2.5, md: 3 },
            color: "#1a1a1a",
            fontFamily: "'Courier New', monospace",
            position: "relative",
            overflow: "hidden",
            clipPath: `polygon(
              0 10px, 8px 0, 16px 10px, 24px 0, 32px 10px, 40px 0, 48px 10px,
              56px 0, 64px 10px, 72px 0, 80px 10px, 88px 0, 96px 10px,
              104px 0, 112px 10px, 120px 0, 128px 10px, 136px 0, 144px 10px,
              152px 0, 160px 10px, 168px 0, 176px 10px, 184px 0, 192px 10px,
              200px 0, 208px 10px, 216px 0, 224px 10px, 232px 0, 240px 10px,
              248px 0, 256px 10px, 264px 0, 272px 10px, 280px 0, 288px 10px,
              296px 0, 304px 10px, 312px 0, 320px 10px, 328px 0, 336px 10px,
              344px 0, 352px 10px, 360px 0, 368px 10px, 376px 0, 380px 10px,
              380px calc(100% - 10px), 372px 100%, 364px calc(100% - 10px),
              356px 100%, 348px calc(100% - 10px), 340px 100%, 332px calc(100% - 10px),
              324px 100%, 316px calc(100% - 10px), 308px 100%, 300px calc(100% - 10px),
              292px 100%, 284px calc(100% - 10px), 276px 100%, 268px calc(100% - 10px),
              260px 100%, 252px calc(100% - 10px), 244px 100%, 236px calc(100% - 10px),
              228px 100%, 220px calc(100% - 10px), 212px 100%, 204px calc(100% - 10px),
              196px 100%, 188px calc(100% - 10px), 180px 100%, 172px calc(100% - 10px),
              164px 100%, 156px calc(100% - 10px), 148px 100%, 140px calc(100% - 10px),
              132px 100%, 124px calc(100% - 10px), 116px 100%, 108px calc(100% - 10px),
              100px 100%, 92px calc(100% - 10px), 84px 100%, 76px calc(100% - 10px),
              68px 100%, 60px calc(100% - 10px), 52px 100%, 44px calc(100% - 10px),
              36px 100%, 28px calc(100% - 10px), 20px 100%, 12px calc(100% - 10px),
              4px 100%, 0 calc(100% - 10px)
            )`,
          }}
        >
          {/* header */}
          <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", mb: 2 }}>
            <img src={logo} style={{ width: "200px", marginBottom: "-15px", opacity: 1 }} />
            <Box sx={{ width: "80%", height: "1px", backgroundColor: "#22222265" }} />
          </Box>

          {/* name */}
          <TextField
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="your name"
            variant="standard"
            fullWidth
            InputProps={{
              disableUnderline: true,
              sx: {
                px: 1, py: 1.2,
                border: "1px solid #00000040",
                fontFamily: "Doto",
                fontWeight: 700,
                borderRadius: "6px",
                background: "#fff",
                "& input::placeholder": { color: "#222", opacity: 1, fontSize: 15 },
              },
            }}
            sx={{ mb: 3 }}
          />

          {/* email */}
          <TextField
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your email"
            variant="standard"
            fullWidth
            InputProps={{
              disableUnderline: true,
              sx: {
                px: 1, py: 1.2,
                border: "1px solid #00000040",
                fontFamily: "Doto",
                fontWeight: 700,
                borderRadius: "6px",
                background: "#fff",
                "& input::placeholder": { color: "#222", opacity: 1, fontSize: 15 },
              },
            }}
            sx={{ mb: 3 }}
          />

          {/* gender dropdown */}
         <TextField
  select
  value={gender}
  onChange={(e) => setGender(e.target.value)}
  variant="standard"
  fullWidth
  SelectProps={{
    displayEmpty: true,
    renderValue: (selected) => {
      if (selected === "") {
        return (
          <span
            style={{
              color: "#222",
              opacity: 0.6,
              fontFamily: "Doto",
              fontWeight: 700,
              fontSize: "15px",
            }}
          >
            gender
          </span>
        );
      }
      return selected;
    },
  }}
  InputProps={{
    disableUnderline: true,
    sx: {
      px: 1,
      py: 1.2,
      border: "1px solid #00000040",
      fontFamily: "Doto",
      fontWeight: 700,
      borderRadius: "6px",
      background: "#fff",
    },
  }}
  sx={{ mb: 3 }}
>
  <MenuItem value="Male" sx={{ fontFamily: "Doto", fontWeight: 700 }}>
    Male
  </MenuItem>

  <MenuItem value="Female" sx={{ fontFamily: "Doto", fontWeight: 700 }}>
    Female
  </MenuItem>

  <MenuItem
    value="Prefer not to say"
    sx={{ fontFamily: "Doto", fontWeight: 700 }}
  >
    Prefer not to say
  </MenuItem>
</TextField>

          {/* city */}
          <TextField
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="your city"
            variant="standard"
            fullWidth
            InputProps={{
              disableUnderline: true,
              sx: {
                px: 1, py: 1.2,
                border: "1px solid #00000040",
                fontFamily: "Doto",
                fontWeight: 700,
                borderRadius: "6px",
                background: "#fff",
                "& input::placeholder": { color: "#222", opacity: 1, fontSize: 15 },
              },
            }}
            sx={{ mb: 3 }}
          />

          {/* join button */}
          <Button
            onClick={!submitted && handleJoin}
            disabled={loading || submitted}
            fullWidth
            sx={{
              background: "#ff4d7a",
              color: "white !important",
              fontWeight: 900,
              fontFamily: "Doto",
              py: 1.4,
              borderRadius: "6px",
              "&:hover": { background: "#ff3a69" },
            }}
          >
            {submitted ? "Welcome" : loading ? "Joining..." : "Join Waitlist"}
          </Button>

          <Typography sx={{ fontSize: "0.8rem", textAlign: "center", mt: 3, fontWeight: 900, color: "#444", fontFamily: "Doto" }}>
            Be the first to access Shazlo
          </Typography>
        </Box>
      </motion.div>
      
    </Box>
  );
};

export default SceneWaitlistForm;
