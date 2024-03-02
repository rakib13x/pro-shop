import express from "express";
const router = express.Router();
import {
  getProducts,
  createProduct,
  getProductById,
  updateProduct,
} from "../controllers/productController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

router.route("/").get(getProducts).post(protect, admin, createProduct);

router
  .route("/:id")
  .get(checkObjectId, getProductById)
  .put(protect, admin, checkObjectId, updateProduct);
