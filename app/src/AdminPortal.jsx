import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemText,
  Avatar,
  Button,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Collapse,
  IconButton,
  Chip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Snackbar,
  Alert,
  CircularProgress,
} from "@mui/material";
import {
  ExpandMore,
  ExpandLess,
  Dashboard,
  People,
  CheckCircle,
  Cancel,
  FilterList,
  Refresh,
  Visibility,
} from "@mui/icons-material";
import axios from "axios";

export default function AdminPortal() {
  const [sellers, setSellers] = useState([]);
  const [products, setProducts] = useState([]);
  const [expandedSeller, setExpandedSeller] = useState(null);
  const [filterStatus, setFilterStatus] = useState("all");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      await Promise.all([fetchSellers(), fetchProducts()]);
    } catch (error) {
      showSnackbar("Failed to load data", "error");
    } finally {
      setLoading(false);
    }
  };

  const fetchSellers = async () => {
    const response = await axios.get("http://localhost:5000/api/admin/sellers");
    setSellers(response.data.sellers);
  };

  const fetchProducts = async () => {
    const response = await axios.get(
      "http://localhost:5000/api/admin/products"
    );
    setProducts(response.data.products);
  };

  const handleApprove = async (productId) => {
    try {
      await axios.put(
        `http://localhost:5000/api/admin/products/${productId}/approve`,
        {
          adminId: "admin123",
        }
      );
      await fetchProducts();
      showSnackbar("Product approved successfully!", "success");
    } catch (error) {
      showSnackbar("Failed to approve product", "error");
    }
  };

  const handleReject = async (productId) => {
    try {
      await axios.put(
        `http://localhost:5000/api/admin/products/${productId}/reject`
      );
      await fetchProducts();
      showSnackbar("Product rejected", "warning");
    } catch (error) {
      showSnackbar("Failed to reject product", "error");
    }
  };

  const showSnackbar = (message, severity) => {
    setSnackbar({ open: true, message, severity });
  };

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "approved":
        return "success";
      case "rejected":
        return "error";
      default:
        return "warning";
    }
  };

  const filteredProducts = products.filter((product) => {
    if (filterStatus === "all") return true;
    return product.status === filterStatus;
  });

  const handleExpand = (sellerId) => {
    setExpandedSeller(expandedSeller === sellerId ? null : sellerId);
  };

  const getProductsBySeller = (sellerId) => {
    return filteredProducts.filter(
      (product) => product.sellerId._id === sellerId
    );
  };

  const handleViewProduct = (product) => {
    setSelectedProduct(product);
    setDialogOpen(true);
  };

  const pendingCount = products.filter((p) => p.status === "pending").length;
  const approvedCount = products.filter((p) => p.status === "approved").length;
  const rejectedCount = products.filter((p) => p.status === "rejected").length;

  return (
    <Box sx={{ p: 3, bgcolor: "#f8f9fa", minHeight: "100vh" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 3,
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: "bold" }}>
          Admin Portal
        </Typography>
        <Button
          variant="contained"
          startIcon={<Refresh />}
          onClick={fetchData}
          disabled={loading}
        >
          {loading ? <CircularProgress size={20} /> : "Refresh"}
        </Button>
      </Box>

      {/* Stats Cards */}
      <Grid container spacing={2} sx={{ mb: 3 }}>
        <Grid item xs={12} md={3}>
          <Card sx={{ bgcolor: "#fff3cd", border: "1px solid #ffeaa7" }}>
            <CardContent>
              <Typography variant="h6" color="warning.main">
                Pending Reviews
              </Typography>
              <Typography variant="h4" color="warning.dark">
                {pendingCount}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={3}>
          <Card sx={{ bgcolor: "#d1ecf1", border: "1px solid #bee5eb" }}>
            <CardContent>
              <Typography variant="h6" color="info.main">
                Approved
              </Typography>
              <Typography variant="h4" color="info.dark">
                {approvedCount}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={3}>
          <Card sx={{ bgcolor: "#f8d7da", border: "1px solid #f5c6cb" }}>
            <CardContent>
              <Typography variant="h6" color="error.main">
                Rejected
              </Typography>
              <Typography variant="h4" color="error.dark">
                {rejectedCount}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={3}>
          <Card sx={{ bgcolor: "#d4edda", border: "1px solid #c3e6cb" }}>
            <CardContent>
              <Typography variant="h6" color="success.main">
                Total Products
              </Typography>
              <Typography variant="h4" color="success.dark">
                {products.length}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        {/* Sellers Overview */}
        <Grid item xs={12} md={3}>
          <Card>
            <CardContent>
              <Typography variant="h6" sx={{ mb: 2 }}>
                <People sx={{ mr: 1 }} />
                Sellers ({sellers.length})
              </Typography>
              <List>
                {sellers.map((seller) => (
                  <ListItem key={seller._id} sx={{ px: 0 }}>
                    <Avatar sx={{ mr: 2 }}>
                      {seller.name?.[0]?.toUpperCase()}
                    </Avatar>
                    <ListItemText
                      primary={seller.name}
                      secondary={seller.email}
                    />
                    <IconButton onClick={() => handleExpand(seller._id)}>
                      {expandedSeller === seller._id ? (
                        <ExpandLess />
                      ) : (
                        <ExpandMore />
                      )}
                    </IconButton>
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>

        {/* Products Overview */}
        <Grid item xs={12} md={9}>
          <Card>
            <CardContent>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  mb: 2,
                }}
              >
                <Typography variant="h6">
                  <Dashboard sx={{ mr: 1 }} />
                  All Catalogs ({filteredProducts.length} products)
                </Typography>
                <FormControl size="small" sx={{ minWidth: 120 }}>
                  <InputLabel>Filter Status</InputLabel>
                  <Select
                    value={filterStatus}
                    label="Filter Status"
                    onChange={(e) => setFilterStatus(e.target.value)}
                  >
                    <MenuItem value="all">All</MenuItem>
                    <MenuItem value="pending">Pending</MenuItem>
                    <MenuItem value="approved">Approved</MenuItem>
                    <MenuItem value="rejected">Rejected</MenuItem>
                  </Select>
                </FormControl>
              </Box>

              {sellers.map((seller) => {
                const sellerProducts = getProductsBySeller(seller._id);
                if (sellerProducts.length === 0) return null;

                return (
                  <Box key={seller._id} sx={{ mb: 2 }}>
                    <Button
                      onClick={() => handleExpand(seller._id)}
                      sx={{
                        justifyContent: "flex-start",
                        width: "100%",
                        textAlign: "left",
                      }}
                    >
                      <Typography variant="h6">
                        {seller.name} ({sellerProducts.length} products)
                      </Typography>
                      {expandedSeller === seller._id ? (
                        <ExpandLess />
                      ) : (
                        <ExpandMore />
                      )}
                    </Button>

                    <Collapse in={expandedSeller === seller._id}>
                      <TableContainer component={Paper} sx={{ mt: 1 }}>
                        <Table size="small">
                          <TableHead>
                            <TableRow>
                              <TableCell>Product ID</TableCell>
                              <TableCell>Name</TableCell>
                              <TableCell>Category</TableCell>
                              <TableCell>Price</TableCell>
                              <TableCell>Stock</TableCell>
                              <TableCell>Status</TableCell>
                              <TableCell>Images</TableCell>
                              <TableCell>Actions</TableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            {sellerProducts.map((product) => (
                              <TableRow key={product._id}>
                                <TableCell>{product.productId}</TableCell>
                                <TableCell>{product.name}</TableCell>
                                <TableCell>{product.category}</TableCell>
                                <TableCell>₹{product.price}</TableCell>
                                <TableCell>{product.stock}</TableCell>
                                <TableCell>
                                  <Chip
                                    label={product.status}
                                    color={getStatusColor(product.status)}
                                    size="small"
                                  />
                                </TableCell>
                                <TableCell>
                                  {product.imageUrl1 && (
                                    <img
                                      src={product.imageUrl1}
                                      alt=""
                                      style={{
                                        width: 50,
                                        height: 50,
                                        marginRight: 5,
                                        cursor: "pointer",
                                      }}
                                      onClick={() => handleViewProduct(product)}
                                    />
                                  )}
                                  {product.imageUrl2 && (
                                    <img
                                      src={product.imageUrl2}
                                      alt=""
                                      style={{
                                        width: 50,
                                        height: 50,
                                        marginRight: 5,
                                        cursor: "pointer",
                                      }}
                                      onClick={() => handleViewProduct(product)}
                                    />
                                  )}
                                  {product.imageUrl3 && (
                                    <img
                                      src={product.imageUrl3}
                                      alt=""
                                      style={{
                                        width: 50,
                                        height: 50,
                                        cursor: "pointer",
                                      }}
                                      onClick={() => handleViewProduct(product)}
                                    />
                                  )}
                                </TableCell>
                                <TableCell>
                                  {product.status === "pending" && (
                                    <>
                                      <IconButton
                                        color="success"
                                        onClick={() =>
                                          handleApprove(product._id)
                                        }
                                        size="small"
                                        title="Approve"
                                      >
                                        <CheckCircle />
                                      </IconButton>
                                      <IconButton
                                        color="error"
                                        onClick={() =>
                                          handleReject(product._id)
                                        }
                                        size="small"
                                        title="Reject"
                                      >
                                        <Cancel />
                                      </IconButton>
                                    </>
                                  )}
                                </TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </TableContainer>
                    </Collapse>
                  </Box>
                );
              })}
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Product Detail Dialog */}
      <Dialog
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
        maxWidth="md"
        fullWidth
      >
        <DialogTitle>Product Details</DialogTitle>
        <DialogContent>
          {selectedProduct && (
            <Box>
              <Typography variant="h6">{selectedProduct.name}</Typography>
              <Typography>Product ID: {selectedProduct.productId}</Typography>
              <Typography>Category: {selectedProduct.category}</Typography>
              <Typography>Price: ₹{selectedProduct.price}</Typography>
              <Typography>Stock: {selectedProduct.stock}</Typography>
              <Typography>
                Description: {selectedProduct.description}
              </Typography>
              <Box sx={{ mt: 2 }}>
                {selectedProduct.imageUrl1 && (
                  <img
                    src={selectedProduct.imageUrl1}
                    alt=""
                    style={{ width: 200, height: 200, marginRight: 10 }}
                  />
                )}
                {selectedProduct.imageUrl2 && (
                  <img
                    src={selectedProduct.imageUrl2}
                    alt=""
                    style={{ width: 200, height: 200, marginRight: 10 }}
                  />
                )}
                {selectedProduct.imageUrl3 && (
                  <img
                    src={selectedProduct.imageUrl3}
                    alt=""
                    style={{ width: 200, height: 200 }}
                  />
                )}
              </Box>
            </Box>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDialogOpen(false)}>Close</Button>
        </DialogActions>
      </Dialog>

      {/* Snackbar for notifications */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={4000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbar.severity}
          sx={{ width: "100%" }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
}
