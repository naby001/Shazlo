import express from "express";
import { registerBrand } from "../controllers/brand.js";
// import { registerBrand } from "../controllers/brandController.js";

const router = express.Router();

router.post("/register-brand", registerBrand);

export default router;
