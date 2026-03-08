import React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Grid,
  LinearProgress,
} from "@mui/material";

export default function Analytics() {
  return (
    <Box>
      <Typography variant="h5" fontWeight="bold" mb={3}>
        Analytics Dashboard
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} md={3}>
          <Card>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Total Sales
              </Typography>
              <Typography variant="h5" component="div">
                ₹1,25,000
              </Typography>
              <Typography color="textSecondary">
                +20.1% from last month
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={3}>
          <Card>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Orders
              </Typography>
              <Typography variant="h5" component="div">
                1,234
              </Typography>
              <Typography color="textSecondary">
                +15.3% from last month
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={3}>
          <Card>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Customers
              </Typography>
              <Typography variant="h5" component="div">
                567
              </Typography>
              <Typography color="textSecondary">
                +7.8% from last month
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={3}>
          <Card>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Conversion Rate
              </Typography>
              <Typography variant="h5" component="div">
                3.2%
              </Typography>
              <Typography color="textSecondary">
                +0.5% from last month
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Box mt={4}>
        <Typography variant="h6" mb={2}>
          Sales Trend
        </Typography>
        <Card>
          <CardContent>
            <Typography variant="body2" color="textSecondary">
              Placeholder for sales chart
            </Typography>
            <LinearProgress variant="determinate" value={75} sx={{ mt: 2 }} />
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
}
