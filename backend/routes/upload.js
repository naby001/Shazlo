import express from "express";
import multer from "multer";
import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";
import Product from "../models/Product.js";

dotenv.config();

const router = express.Router();

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Multer storage (in memory)
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Upload images to Cloudinary
router.post("/images", upload.array("images"), async (req, res) => {
  try {
    if (!req.files || req.files.length === 0) {
      return res.status(400).json({ message: "No images provided" });
    }

    const uploadPromises = req.files.map((file) => {
      return new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(
          { folder: "shazlo_catalog" },
          (error, result) => {
            if (error) reject(error);
            else resolve(result.secure_url);
          }
        );
        stream.end(file.buffer);
      });
    });

    const urls = await Promise.all(uploadPromises);

    res.status(200).json({ urls });
  } catch (error) {
    console.error("Upload error:", error);
    res.status(500).json({ message: "Upload failed", error: error.message });
  }
});

// Upload products (placeholder, can be expanded)
router.post("/products", express.json(), async (req, res) => {
  try {
    const { products, sellerId } = req.body;
    if (!products || !sellerId) {
      return res
        .status(400)
        .json({ message: "Products and sellerId required" });
    }

    const savedProducts = await Product.insertMany(
      products.map((p) => ({ ...p, sellerId }))
    );
    res
      .status(200)
      .json({
        message: "Products uploaded successfully",
        products: savedProducts,
      });
  } catch (error) {
    console.error("Save products error:", error);
    res
      .status(500)
      .json({ message: "Failed to save products", error: error.message });
  }
});

export default router;
