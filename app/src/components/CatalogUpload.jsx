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
import { useDispatch } from "react-redux";
import { addProducts } from "../state";
import axios from "axios";

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

const getHeaders = (category) => {
  const baseHeaders = [
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
    "Material",
    "Gender",
    "Image URL 1",
    "Image URL 2",
    "Image URL 3",
    "Weight (g)",
    "Returnable (Yes/No)",
  ];

  // Exclude "Size" for categories like Dresses
  if (category && (category.includes("Dress") || category.includes("Kurtis"))) {
    return baseHeaders;
  } else {
    return [
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
  }
};

export default function CatalogUpload() {
  const [gender, setGender] = useState("");
  const [category, setCategory] = useState("");

  const [loadingTemplate, setLoadingTemplate] = useState(false);
  const [uploading, setUploading] = useState(false);

  const [excelFile, setExcelFile] = useState(null);
  const [imageFiles, setImageFiles] = useState([]);

  const [jobId, setJobId] = useState(null);

  const dispatch = useDispatch();

  // ----------------------------
  // Dummy API Calls
  // ----------------------------

  const fetchTemplate = async () => {
    setLoadingTemplate(true);

    const headers = getHeaders(category);

    // Generate sample data based on selected gender and category
    let sampleData = [];

    if (gender && category) {
      // Create sample product based on category
      const sampleProduct = [
        "SHZ001",
        `Sample ${category}`,
        category,
        `${category} Subcategory`,
        "Sample Brand",
        `Description for ${category}`,
        1299,
        10,
        25,
        "Red",
      ];

      // Add Size if not excluded
      if (headers.includes("Size")) {
        sampleProduct.push("M");
      }

      sampleProduct.push("Cotton", gender, "link", "link", "link", 350, "Yes");

      sampleData = [sampleProduct];
    } else {
      // Default sample if no selection
      sampleData = [
        [
          "SHZ001",
          "Sample Product",
          "Category",
          "Subcategory",
          "Brand",
          "Description",
          1299,
          10,
          25,
          "Red",
          ...(headers.includes("Size") ? ["M"] : []),
          "Cotton",
          "Gender",
          "link",
          "link",
          "link",
          350,
          "Yes",
        ],
      ];
    }

    // Create worksheet
    const ws = XLSX.utils.aoa_to_sheet([headers, ...sampleData]);

    // Create workbook
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Template");

    // Download
    XLSX.writeFile(
      wb,
      `Catalog_Template_${gender || "General"}_${category || "General"}.xlsx`
    );

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

      // Expected headers based on selected category
      const expectedHeaders = getHeaders(category);

      // Check headers
      const fileHeaders = jsonData[0];
      if (!expectedHeaders.every((h, i) => h === fileHeaders[i])) {
        alert(
          "Invalid file format. Headers do not match the expected template."
        );
        setUploading(false);
        return;
      }

      // Process data, skip header
      let products = jsonData.slice(1).map((row) => {
        const product = {};
        expectedHeaders.forEach((header, index) => {
          const value = row[index];
          switch (header) {
            case "Product ID":
              product.productId = value;
              break;
            case "Product Name":
              product.name = value;
              break;
            case "Category":
              product.category = value;
              break;
            case "Subcategory":
              product.subcategory = value;
              break;
            case "Brand":
              product.brand = value;
              break;
            case "Description":
              product.description = value;
              break;
            case "Price (₹)":
              product.price = value;
              break;
            case "Discount (%)":
              product.discount = value;
              break;
            case "Stock Qty":
              product.stock = value;
              break;
            case "Color":
              product.color = value;
              break;
            case "Size":
              product.size = value;
              break;
            case "Material":
              product.material = value;
              break;
            case "Gender":
              product.gender = value;
              break;
            case "Image URL 1":
              product.imageUrl1 = value;
              break;
            case "Image URL 2":
              product.imageUrl2 = value;
              break;
            case "Image URL 3":
              product.imageUrl3 = value;
              break;
            case "Weight (g)":
              product.weight = value;
              break;
            case "Returnable (Yes/No)":
              product.returnable = value;
              break;
          }
        });
        return product;
      });

      console.log("Parsed products:", products);

      // Upload images to Cloudinary if any
      let imageUrls = [];
      if (imageFiles.length > 0) {
        const formData = new FormData();
        imageFiles.forEach((img) => {
          formData.append("images", img);
        });

        const uploadResponse = await axios.post(
          "http://localhost:5000/api/upload/images",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        imageUrls = uploadResponse.data.urls;
        console.log("Uploaded image URLs:", imageUrls);
      }

      // Assign uploaded URLs to products (simple assignment: first 3 to first product, etc.)
      let urlIndex = 0;
      products = products.map((product) => {
        const updatedProduct = { ...product };
        if (urlIndex < imageUrls.length) {
          updatedProduct.imageUrl1 = imageUrls[urlIndex++] || product.imageUrl1;
        }
        if (urlIndex < imageUrls.length) {
          updatedProduct.imageUrl2 = imageUrls[urlIndex++] || product.imageUrl2;
        }
        if (urlIndex < imageUrls.length) {
          updatedProduct.imageUrl3 = imageUrls[urlIndex++] || product.imageUrl3;
        }
        return updatedProduct;
      });

      // Send products to backend
      await axios.post("http://localhost:5000/api/upload/products", {
        products,
      });

      const fakeJobId = "JOB-" + Math.floor(Math.random() * 100000);
      setJobId(fakeJobId);
      alert(
        `Uploaded ${products.length} products successfully. Job ID: ${fakeJobId}`
      );
    } catch (error) {
      alert("Error uploading: " + error.message);
    } finally {
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
