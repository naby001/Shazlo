import React, { useState } from "react";
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
} from "@mui/material";
import { useSelector } from "react-redux";
import ProductForm from "./Add_Product_admin";

export default function Products() {
  const products = useSelector((state) => state.products);
  const [showAddForm, setShowAddForm] = useState(false);

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
          Products Management
        </Typography>
        <Button variant="contained" onClick={() => setShowAddForm(true)}>
          Add New Product
        </Button>
      </Box>

      <Card>
        <CardContent>
          <Typography fontWeight="bold" mb={2}>
            All Products ({products.length})
          </Typography>

          {products.length === 0 ? (
            <Typography color="textSecondary">
              No products uploaded yet. Use Catalog Upload or add manually.
            </Typography>
          ) : (
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Product ID</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Category</TableCell>
                    <TableCell>Brand</TableCell>
                    <TableCell>Price</TableCell>
                    <TableCell>Stock</TableCell>
                    <TableCell>Status</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {products.map((product, index) => (
                    <TableRow key={index}>
                      <TableCell>{product.productId}</TableCell>
                      <TableCell>{product.name}</TableCell>
                      <TableCell>{product.category}</TableCell>
                      <TableCell>{product.brand}</TableCell>
                      <TableCell>₹{product.price}</TableCell>
                      <TableCell>{product.stock}</TableCell>
                      <TableCell>
                        <Chip label="Active" color="success" size="small" />
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
