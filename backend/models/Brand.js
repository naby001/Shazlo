import mongoose from "mongoose";

const brandSchema = new mongoose.Schema(
  {
    brand_name: {
      type: String,
      required: true,
      trim: true,
    },

    founder_contact: {
      type: String,
      required: true,
      trim: true,
    },

    website_or_instagram: {
      type: String,
      trim: true,
    },

    product_type: {
      type: String,
      required: true,
      trim: true,
    },

    phone: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },

    price_range: {
      min: { type: Number, required: true },
      max: { type: Number, required: true },
    },

    status: {
      type: String,
      default: "pending", // pending | approved | rejected
    },
  },
  { timestamps: true }
);

brandSchema.index({ email: 1 });

const Brand = mongoose.model("Brand", brandSchema);
export default Brand;
