import React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Chip,
} from "@mui/material";

const sampleOrders = [
  {
    id: "ORD001",
    customer: "John Doe",
    product: "Floral Dress",
    status: "Shipped",
    amount: "₹1,299",
  },
  {
    id: "ORD002",
    customer: "Jane Smith",
    product: "Leather Handbag",
    status: "Processing",
    amount: "₹1,999",
  },
  {
    id: "ORD003",
    customer: "Bob Johnson",
    product: "T-Shirt",
    status: "Delivered",
    amount: "₹799",
  },
];

export default function Orders() {
  return (
    <Box>
      <Typography variant="h5" fontWeight="bold" mb={3}>
        Orders Management
      </Typography>

      <Card>
        <CardContent>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Order ID</TableCell>
                  <TableCell>Customer</TableCell>
                  <TableCell>Product</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Amount</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {sampleOrders.map((order) => (
                  <TableRow key={order.id}>
                    <TableCell>{order.id}</TableCell>
                    <TableCell>{order.customer}</TableCell>
                    <TableCell>{order.product}</TableCell>
                    <TableCell>
                      <Chip
                        label={order.status}
                        color={
                          order.status === "Delivered"
                            ? "success"
                            : order.status === "Shipped"
                            ? "primary"
                            : "warning"
                        }
                        size="small"
                      />
                    </TableCell>
                    <TableCell>{order.amount}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Card>
    </Box>
  );
}
