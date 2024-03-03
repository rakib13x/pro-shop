import express from "express";
const router = express.Router();
import {
  addOrderItems,
  getOrders,
  getMyOrders,
} from "../controllers/orderController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

router.route("/").post(protect, addOrderItems).get(protect, admin, getOrders);
router.route("/mine").get(protect, getMyOrders);

export default router;
