import Brand from "../models/Brand.js";

export const registerBrand = async (req, res) => {
  try {
    const {
      brand_name,
      founder_contact,
      website_or_instagram,
      product_type,
      phone,
      email,
      price_range,
    } = req.body;

    if (
      !brand_name ||
      !founder_contact ||
      !product_type ||
      !phone ||
      !email ||
      !price_range?.min ||
      !price_range?.max
    ) {
      return res.status(400).json({
        message: "Missing required fields",
      });
    }

    const brand = await Brand.create({
      brand_name,
      founder_contact,
      website_or_instagram,
      product_type,
      phone,
      email,
      price_range,
    });

    return res.status(201).json({
      message: "Brand registered successfully",
      brand,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Failed to register brand",
    });
  }
};
