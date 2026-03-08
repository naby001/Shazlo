import React, { useState } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  TextField,
  Button,
  Grid,
  Switch,
  FormControlLabel,
} from "@mui/material";

export default function StoreSetting() {
  const [settings, setSettings] = useState({
    storeName: "My Store",
    email: "store@example.com",
    phone: "+91 9876543210",
    address: "123 Main St, City",
    notifications: true,
    autoOrder: false,
  });

  const handleChange = (field) => (event) => {
    setSettings({
      ...settings,
      [field]:
        event.target.type === "checkbox"
          ? event.target.checked
          : event.target.value,
    });
  };

  const handleSave = () => {
    alert("Settings saved successfully!");
  };

  return (
    <Box>
      <Typography variant="h5" fontWeight="bold" mb={3}>
        Store Settings
      </Typography>

      <Card>
        <CardContent>
          <Typography fontWeight="bold" mb={2}>
            General Settings
          </Typography>

          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Store Name"
                value={settings.storeName}
                onChange={handleChange("storeName")}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Email"
                type="email"
                value={settings.email}
                onChange={handleChange("email")}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Phone"
                value={settings.phone}
                onChange={handleChange("phone")}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Address"
                value={settings.address}
                onChange={handleChange("address")}
              />
            </Grid>
          </Grid>

          <Box mt={3}>
            <Typography fontWeight="bold" mb={2}>
              Preferences
            </Typography>
            <FormControlLabel
              control={
                <Switch
                  checked={settings.notifications}
                  onChange={handleChange("notifications")}
                />
              }
              label="Enable Email Notifications"
            />
            <br />
            <FormControlLabel
              control={
                <Switch
                  checked={settings.autoOrder}
                  onChange={handleChange("autoOrder")}
                />
              }
              label="Auto-confirm Orders"
            />
          </Box>

          <Button sx={{ mt: 3 }} variant="contained" onClick={handleSave}>
            Save Settings
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
}
