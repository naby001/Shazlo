import React, { useState } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Button,
  Grid,
  LinearProgress,
} from "@mui/material";

export default function ImagesUpload() {
  const [uploading, setUploading] = useState(false);
  const [imageFiles, setImageFiles] = useState([]);

  const handleUpload = () => {
    if (imageFiles.length === 0) {
      alert("Please select images to upload");
      return;
    }
    setUploading(true);
    // Simulate upload
    setTimeout(() => {
      setUploading(false);
      alert(`Uploaded ${imageFiles.length} images successfully`);
      setImageFiles([]);
    }, 2000);
  };

  return (
    <Box>
      <Typography variant="h5" fontWeight="bold" mb={3}>
        Images Upload
      </Typography>

      <Card>
        <CardContent>
          <Typography fontWeight="bold" mb={2}>
            Upload Product Images
          </Typography>

          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Button component="label" variant="outlined" fullWidth>
                Select Images (Multiple)
                <input
                  type="file"
                  hidden
                  multiple
                  accept="image/*"
                  onChange={(e) => setImageFiles([...e.target.files])}
                />
              </Button>

              {imageFiles.length > 0 && (
                <Typography fontSize={13} mt={1}>
                  {imageFiles.length} images selected
                </Typography>
              )}
            </Grid>
          </Grid>

          <Button
            sx={{ mt: 3 }}
            variant="contained"
            onClick={handleUpload}
            disabled={uploading}
          >
            {uploading ? "Uploading..." : "Upload Images"}
          </Button>

          {uploading && <LinearProgress sx={{ mt: 2 }} />}
        </CardContent>
      </Card>
    </Box>
  );
}
