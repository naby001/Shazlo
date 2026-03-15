import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  productId: { type: String, required: true },
  name: { type: String, required: true },
  category: { type: String, required: true },
  subcategory: { type: String },
  brand: { type: String },
  description: { type: String },
  price: { type: Number, required: true },
  discount: { type: Number, default: 0 },
  stock: { type: Number, required: true },
  color: { type: String },
  size: { type: String },
  material: { type: String },
  gender: { type: String },
  imageUrl1: { type: String },
  imageUrl2: { type: String },
  imageUrl3: { type: String },
  weight: { type: Number },
  returnable: { type: String },
  sellerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Brand",
    required: true,
  },
  uploadedAt: { type: Date, default: Date.now },
  status: {
    type: String,
    enum: ["pending", "approved", "rejected"],
    default: "pending",
  },
  approvedAt: { type: Date },
  approvedBy: { type: mongoose.Schema.Types.ObjectId, ref: "Brand" },
});

export default mongoose.model("Product", productSchema);
