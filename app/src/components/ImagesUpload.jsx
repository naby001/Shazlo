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
import { useDispatch } from "react-redux";
import { addProducts } from "../state";
export default function ImagesUpload() {
  const [uploading, setUploading] = useState(false);
  const [imageFiles, setImageFiles] = useState([]);

  const dispatch = useDispatch();

  const handleUpload = () => {
    if (imageFiles.length === 0) {
      alert("Please select images to upload");
      return;
    }
    setUploading(true);

    // Create product entries for uploaded images
    const products = imageFiles.map((file, index) => ({
      productId: `IMG${Date.now()}-${index}`,
      name: file.name.replace(/\.[^/.]+$/, ""), // Remove extension
      category: "Images",
      subcategory: "",
      brand: "",
      description: "Uploaded image",
      price: 0,
      discount: 0,
      stock: 1,
      color: "",
      size: "",
      material: "",
      gender: "",
      imageUrl1: URL.createObjectURL(file), // Temporary URL
      imageUrl2: "",
      imageUrl3: "",
      weight: "",
      returnable: "",
    }));

    dispatch(addProducts({ products }));

    // Simulate upload
    setTimeout(() => {
      setUploading(false);
      alert(
        `Uploaded ${imageFiles.length} images and created ${products.length} products successfully`
      );
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
