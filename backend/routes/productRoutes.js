import express from "express";
const router = express.Router();
import {} from "../controllers/productController.js";
import { protect, admin } from "../middleware/authMiddleware.js";
