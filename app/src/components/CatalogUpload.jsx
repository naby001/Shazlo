import React, { useState } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Button,
  Grid,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  LinearProgress
} from "@mui/material";

// ---- CATEGORY TREE (frontend only) ----

const CATEGORY_TREE = {
  Men: [
    "T-Shirts",
    "Shirts",
    "Trousers / Jeans",
    "Jackets / Hoodies",
    "Ethnic Wear"
  ],
  Women: [
    "Tops / T-Shirts",
    "Dresses",
    "Kurtis / Ethnic",
    "Jeans / Pants",
    "Outerwear"
  ]
};

export default function CatalogUpload() {
  const [gender, setGender] = useState("");
  const [category, setCategory] = useState("");

  const [loadingTemplate, setLoadingTemplate] = useState(false);
  const [uploading, setUploading] = useState(false);

  const [excelFile, setExcelFile] = useState(null);
  const [imageFiles, setImageFiles] = useState([]);

  const [jobId, setJobId] = useState(null);

  // ----------------------------
  // Dummy API Calls
  // ----------------------------

  const fetchTemplate = async () => {
    setLoadingTemplate(true);

    // simulate backend delay
    setTimeout(() => {
      console.log("Fetching template for:", gender, category);

      alert(`Dummy: Downloading template for ${gender} > ${category}`);

      setLoadingTemplate(false);
    }, 1200);
  };

  const submitBulkUpload = async () => {
    if (!excelFile) {
      alert("Upload Excel first");
      return;
    }

    setUploading(true);

    const formData = new FormData();
    formData.append("template_file", excelFile);

    imageFiles.forEach((img) => {
      formData.append("images", img);
    });

    console.log("Submitting bulk upload:", {
      gender,
      category,
      excelFile,
      imageFiles
    });

    // simulate backend
    setTimeout(() => {
      const fakeJobId = "JOB-" + Math.floor(Math.random() * 100000);

      setJobId(fakeJobId);
      setUploading(false);
    }, 2000);
  };

  // ----------------------------

  return (
    <Box>
      <Typography variant="h5" fontWeight="bold" mb={3}>
        Catalog Bulk Upload
      </Typography>

      {/* STEP 1: CATEGORY PICKER */}

      <Card sx={{ mb: 3 }}>
        <CardContent>
          <Typography fontWeight="bold" mb={2}>
            Step 1: Select Category
          </Typography>

          <Grid container spacing={2}>
           <Grid item width={150}>
  <FormControl fullWidth variant="outlined">
    <InputLabel id="gender-label">Men / Women</InputLabel>

    <Select
      labelId="gender-label"
      id="gender-select"
      value={gender}
      label="Men / Women"
      onChange={(e) => {
        setGender(e.target.value);
        setCategory("");
      }}
    >
      <MenuItem value="Men">Men</MenuItem>
      <MenuItem value="Women">Women</MenuItem>
    </Select>
  </FormControl>
</Grid>

            <Grid item width={150}>
              <FormControl fullWidth disabled={!gender}>
                <InputLabel>Category</InputLabel>
                <Select
                  value={category}
                  label="Category"
                  onChange={(e) => setCategory(e.target.value)}
                >
                  {gender &&
                    CATEGORY_TREE[gender].map((cat) => (
                      <MenuItem key={cat} value={cat}>
                        {cat}
                      </MenuItem>
                    ))}
                </Select>
              </FormControl>
            </Grid>
          </Grid>

          <Button
            sx={{ mt: 2 }}
            variant="contained"
            disabled={!category || loadingTemplate}
            onClick={fetchTemplate}
          >
            {loadingTemplate ? "Preparing Template..." : "Download Template"}
          </Button>
        </CardContent>
      </Card>

      {/* STEP 2: UPLOAD FILES */}

      <Card sx={{ mb: 3 }}>
        <CardContent>
          <Typography fontWeight="bold" mb={2}>
            Step 2: Upload Filled Template & Images
          </Typography>

          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Button component="label" variant="outlined" fullWidth>
                Upload Excel
                <input
                  type="file"
                  hidden
                  accept=".xlsx,.csv"
                  onChange={(e) => setExcelFile(e.target.files[0])}
                />
              </Button>

              {excelFile && (
                <Typography fontSize={13} mt={1}>
                  {excelFile.name}
                </Typography>
              )}
            </Grid>

            <Grid item xs={6}>
              <Button component="label" variant="outlined" fullWidth>
                Upload Images (Multiple)
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
            onClick={submitBulkUpload}
            disabled={uploading}
          >
            {uploading ? "Submitting..." : "Submit for Review"}
          </Button>

          {uploading && <LinearProgress sx={{ mt: 2 }} />}
        </CardContent>
      </Card>

      {/* STEP 3: JOB STATUS */}

      {jobId && (
        <Card>
          <CardContent>
            <Typography fontWeight="bold">
              ✅ Upload Submitted Successfully
            </Typography>

            <Typography fontSize={14} mt={1}>
              Job ID: <strong>{jobId}</strong>
            </Typography>

            <Typography fontSize={14}>
              Status: SUBMITTED (Awaiting Review)
            </Typography>
          </CardContent>
        </Card>
      )}
    </Box>
  );
}
