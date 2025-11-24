// src/CRMPanel.jsx
import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  CircularProgress,
  Snackbar,
  Alert,
  TextField,
  Typography,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

const CRMPanel = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [image, setImage] = useState("");
  const [tokens, setTokens] = useState("");
  const [loading, setLoading] = useState(false);
  const [snackbar, setSnackbar] = useState({ open: false, message: "", severity: "success" });

  const handleCloseSnackbar = () => setSnackbar({ ...snackbar, open: false });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("http://192.168.31.12:8000/v1/notifications/send/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title,
          body,
          data: image ? { image } : {},
          tokens: tokens ? tokens.split(",").map((t) => t.trim()) : [],
        }),
      });

      const data = await res.json();
      if (res.ok) {
        setSnackbar({ open: true, message: "✅ Notification sent successfully!", severity: "success" });
        setTitle("");
        setBody("");
        setImage("");
        setTokens("");
      } else {
        throw new Error(data.error || "Failed to send notification");
      }
    } catch (err) {
      console.error(err);
      setSnackbar({ open: true, message: "❌ " + err.message, severity: "error" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        height: "100vh",
        bgcolor: "#f4f4f4",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 2,
      }}
    >
      <Card sx={{ width: 500, borderRadius: 3, boxShadow: 4 }}>
        <CardContent>
          <Typography variant="h5" fontWeight="bold" gutterBottom textAlign="center">
            🚀 Send Push Notification
          </Typography>

          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
            <TextField
              fullWidth
              label="Notification Title"
              variant="outlined"
              margin="normal"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />

            <TextField
              fullWidth
              label="Notification Body"
              variant="outlined"
              margin="normal"
              multiline
              rows={3}
              value={body}
              onChange={(e) => setBody(e.target.value)}
              required
            />

            <TextField
              fullWidth
              label="Optional Image URL"
              variant="outlined"
              margin="normal"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />

            <TextField
              fullWidth
              label="FCM Tokens (comma separated)"
              variant="outlined"
              margin="normal"
              value={tokens}
              onChange={(e) => setTokens(e.target.value)}
              helperText="Leave empty to broadcast to all users"
            />

            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              endIcon={<SendIcon />}
              disabled={loading}
              sx={{ mt: 3, py: 1.5, fontWeight: 600 }}
            >
              {loading ? <CircularProgress size={24} sx={{ color: "white" }} /> : "Send Notification"}
            </Button>
          </Box>
        </CardContent>
      </Card>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={4000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbar.severity}
          variant="filled"
          sx={{ width: "100%" }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default CRMPanel;
