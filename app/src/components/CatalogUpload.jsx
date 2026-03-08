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
  LinearProgress,
} from "@mui/material";
import * as XLSX from "xlsx";

// ---- CATEGORY TREE (frontend only) ----

const CATEGORY_TREE = {
  Men: [
    "T-Shirts",
    "Shirts",
    "Trousers / Jeans",
    "Jackets / Hoodies",
    "Ethnic Wear",
  ],
  Women: [
    "Tops / T-Shirts",
    "Dresses",
    "Kurtis / Ethnic",
    "Jeans / Pants",
    "Outerwear",
  ],
};

const HEADERS = [
  "Product ID",
  "Product Name",
  "Category",
  "Subcategory",
  "Brand",
  "Description",
  "Price (₹)",
  "Discount (%)",
  "Stock Qty",
  "Color",
  "Size",
  "Material",
  "Gender",
  "Image URL 1",
  "Image URL 2",
  "Image URL 3",
  "Weight (g)",
  "Returnable (Yes/No)",
];

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

    // Sample data
    const sampleData = [
      [
        "SHZ001",
        "Floral Summer Dress",
        "Dress",
        "Casual Dress",
        "Zara",
        "Light summer floral dress",
        1299,
        10,
        25,
        "Red",
        "M",
        "Cotton",
        "Women",
        "link",
        "link",
        "link",
        350,
        "Yes",
      ],
      [
        "SHZ002",
        "Leather Handbag",
        "Bags",
        "Tote Bag",
        "H&M",
        "Stylish brown leather tote",
        1999,
        5,
        15,
        "Brown",
        "Free Size",
        "Leather",
        "Women",
        "link",
        "link",
        "link",
        600,
        "Yes",
      ],
    ];

    // Create worksheet
    const ws = XLSX.utils.aoa_to_sheet([HEADERS, ...sampleData]);

    // Create workbook
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Template");

    // Download
    XLSX.writeFile(wb, `Catalog_Template_${gender}_${category}.xlsx`);

    setLoadingTemplate(false);
  };

  const submitBulkUpload = async () => {
    if (!excelFile) {
      alert("Upload Excel first");
      return;
    }

    setUploading(true);

    try {
      const data = await excelFile.arrayBuffer();
      const workbook = XLSX.read(data, { type: "array" });
      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];
      const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

      // Check headers
      const fileHeaders = jsonData[0];
      if (!HEADERS.every((h, i) => h === fileHeaders[i])) {
        alert(
          "Invalid file format. Headers do not match the expected template."
        );
        setUploading(false);
        return;
      }

      // Process data, skip header
      const products = jsonData.slice(1).map((row) => ({
        productId: row[0],
        name: row[1],
        category: row[2],
        subcategory: row[3],
        brand: row[4],
        description: row[5],
        price: row[6],
        discount: row[7],
        stock: row[8],
        color: row[9],
        size: row[10],
        material: row[11],
        gender: row[12],
        imageUrl1: row[13],
        imageUrl2: row[14],
        imageUrl3: row[15],
        weight: row[16],
        returnable: row[17],
      }));

      console.log("Parsed products:", products);

      // Simulate upload with images
      const formData = new FormData();
      formData.append("products", JSON.stringify(products));
      imageFiles.forEach((img) => {
        formData.append("images", img);
      });

      // simulate backend
      setTimeout(() => {
        const fakeJobId = "JOB-" + Math.floor(Math.random() * 100000);
        setJobId(fakeJobId);
        setUploading(false);
        alert(
          `Uploaded ${products.length} products successfully. Job ID: ${fakeJobId}`
        );
      }, 2000);
    } catch (error) {
      alert("Error parsing file: " + error.message);
      setUploading(false);
    }
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
