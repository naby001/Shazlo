import React, { useState, useEffect, useCallback } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Button,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Chip,
  Dialog,
  DialogTitle,
  DialogContent,
  CircularProgress,
  Alert,
  IconButton,
  Tooltip,
} from "@mui/material";
import { Refresh } from "@mui/icons-material";
import { useSelector } from "react-redux";
import ProductForm from "./Add_Product_admin";
import axios from "axios";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [showAddForm, setShowAddForm] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [refreshing, setRefreshing] = useState(false);
  const sellerId = useSelector((state) => state.user?._id);

  useEffect(() => {
    if (sellerId) {
      fetchProducts();
      // Set up polling every 30 seconds for real-time updates
      const interval = setInterval(fetchProducts, 30000);
      return () => clearInterval(interval);
    }
  }, [sellerId]); // Removed fetchProducts from dependencies to prevent infinite re-renders

  const handleRefresh = () => {
    fetchProducts();
  };

  const fetchProducts = useCallback(async () => {
    if (!sellerId) {
      console.log("fetchProducts called but sellerId is null");
      return;
    }

    try {
      setRefreshing(true);
      setError(null);
      const response = await axios.get(
        `http://localhost:5000/api/admin/products/${sellerId}`
      );
      // Filter only approved products
      const approvedProducts = response.data.products.filter(
        (p) => p.status === "approved"
      );
      setProducts(approvedProducts);
    } catch (error) {
      console.error("Failed to fetch products:", error);
      setError("Failed to load products. Please try again.");
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }, [sellerId]);

  if (!sellerId) {
    // Temporary test data for debugging
    const testProducts = [
      {
        _id: "1",
        productId: "TEST001",
        name: "Test Product 1",
        category: "Test Category",
        price: 100,
        stock: 50,
        status: "approved",
        imageUrl1: "https://via.placeholder.com/100",
      },
      {
        _id: "2",
        productId: "TEST002",
        name: "Test Product 2",
        category: "Test Category",
        price: 200,
        stock: 30,
        status: "approved",
        imageUrl1: "https://via.placeholder.com/100",
      },
    ];

    return (
      <Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 3,
          }}
        >
          <Typography variant="h5" fontWeight="bold">
            Products Management (Test Mode - {testProducts.length} products)
          </Typography>
          <Box sx={{ display: "flex", gap: 1 }}>
            <Tooltip title="Refresh products">
              <IconButton onClick={() => console.log("Refresh clicked")}>
                <Refresh />
              </IconButton>
            </Tooltip>
            <Button variant="contained" onClick={() => setShowAddForm(true)}>
              Add New Product
            </Button>
          </Box>
        </Box>

        <Card>
          <CardContent>
            <Typography fontWeight="bold" mb={2}>
              Your Approved Products (Test Data)
            </Typography>

            <Alert severity="warning" sx={{ mb: 2 }}>
              ⚠️ You are not logged in. This is test data. Please complete brand
              onboarding to see your actual products.
            </Alert>

            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Product ID</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Category</TableCell>
                    <TableCell>Price</TableCell>
                    <TableCell>Stock</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell>Images</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {testProducts.map((product) => (
                    <TableRow key={product._id}>
                      <TableCell>{product.productId}</TableCell>
                      <TableCell>{product.name}</TableCell>
                      <TableCell>{product.category}</TableCell>
                      <TableCell>₹{product.price}</TableCell>
                      <TableCell>{product.stock}</TableCell>
                      <TableCell>
                        <Chip label="Approved" color="success" size="small" />
                      </TableCell>
                      <TableCell>
                        {product.imageUrl1 && (
                          <img
                            src={product.imageUrl1}
                            alt=""
                            style={{ width: 50, height: 50, marginRight: 5 }}
                          />
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </CardContent>
        </Card>

        <Dialog
          open={showAddForm}
          onClose={() => setShowAddForm(false)}
          maxWidth="md"
          fullWidth
        >
          <DialogTitle>Add New Product</DialogTitle>
          <DialogContent>
            <ProductForm onClose={() => setShowAddForm(false)} />
          </DialogContent>
        </Dialog>
      </Box>
    );
  }

  if (loading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: 400,
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box sx={{ p: 3 }}>
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
        <Button variant="contained" onClick={fetchProducts}>
          Retry
        </Button>
      </Box>
    );
  }

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 3,
        }}
      >
        <Typography variant="h5" fontWeight="bold">
          Products Management ({products.length} approved products)
        </Typography>
        <Box sx={{ display: "flex", gap: 1 }}>
          <Tooltip title="Refresh products">
            <IconButton onClick={handleRefresh} disabled={refreshing}>
              {refreshing ? <CircularProgress size={24} /> : <Refresh />}
            </IconButton>
          </Tooltip>
          <Button variant="contained" onClick={() => setShowAddForm(true)}>
            Add New Product
          </Button>
        </Box>
      </Box>

      <Card>
        <CardContent>
          <Typography fontWeight="bold" mb={2}>
            Your Approved Products
          </Typography>

          {products.length === 0 ? (
            <Alert severity="info">
              No approved products yet. Upload products through the Catalog
              Upload section and wait for admin approval.
              <br />
              <strong>Note:</strong> Products are automatically refreshed every
              30 seconds. Use the refresh button to check immediately.
            </Alert>
          ) : (
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Product ID</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Category</TableCell>
                    <TableCell>Price</TableCell>
                    <TableCell>Stock</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell>Images</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {products.map((product) => (
                    <TableRow key={product._id}>
                      <TableCell>{product.productId}</TableCell>
                      <TableCell>{product.name}</TableCell>
                      <TableCell>{product.category}</TableCell>
                      <TableCell>₹{product.price}</TableCell>
                      <TableCell>{product.stock}</TableCell>
                      <TableCell>
                        <Chip label="Approved" color="success" size="small" />
                      </TableCell>
                      <TableCell>
                        {product.imageUrl1 && (
                          <img
                            src={product.imageUrl1}
                            alt=""
                            style={{ width: 50, height: 50, marginRight: 5 }}
                          />
                        )}
                        {product.imageUrl2 && (
                          <img
                            src={product.imageUrl2}
                            alt=""
                            style={{ width: 50, height: 50, marginRight: 5 }}
                          />
                        )}
                        {product.imageUrl3 && (
                          <img
                            src={product.imageUrl3}
                            alt=""
                            style={{ width: 50, height: 50 }}
                          />
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          )}
        </CardContent>
      </Card>

      <Dialog
        open={showAddForm}
        onClose={() => setShowAddForm(false)}
        maxWidth="md"
        fullWidth
      >
        <DialogTitle>Add New Product</DialogTitle>
        <DialogContent>
          <ProductForm onClose={() => setShowAddForm(false)} />
        </DialogContent>
      </Dialog>
    </Box>
  );
}
