import express from "express";
import Brand from "../models/Brand.js";
import Product from "../models/Product.js";

const router = express.Router();

// Get all sellers
router.get("/sellers", async (req, res) => {
  try {
    const sellers = await Brand.find({});
    res.status(200).json({ sellers });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to fetch sellers", error: error.message });
  }
});

// Get all products with seller info
router.get("/products", async (req, res) => {
  try {
    const products = await Product.find({}).populate("sellerId", "name email");
    res.status(200).json({ products });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to fetch products", error: error.message });
  }
});

// Get products by seller
router.get("/products/:sellerId", async (req, res) => {
  try {
    const { sellerId } = req.params;
    const products = await Product.find({ sellerId }).populate(
      "sellerId",
      "name email"
    );
    res.status(200).json({ products });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to fetch products", error: error.message });
  }
});

// Approve product
router.put("/products/:productId/approve", async (req, res) => {
  try {
    const { productId } = req.params;
    const { adminId } = req.body;

    const product = await Product.findByIdAndUpdate(
      productId,
      {
        status: "approved",
        approvedAt: new Date(),
        approvedBy: adminId,
      },
      { new: true }
    ).populate("sellerId", "name email");

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json({ message: "Product approved", product });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to approve product", error: error.message });
  }
});

// Reject product
router.put("/products/:productId/reject", async (req, res) => {
  try {
    const { productId } = req.params;

    const product = await Product.findByIdAndUpdate(
      productId,
      { status: "rejected" },
      { new: true }
    ).populate("sellerId", "name email");

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json({ message: "Product rejected", product });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to reject product", error: error.message });
  }
});

export default router;
