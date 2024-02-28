import express from "express";
import {
  registerUser,
  authUser,
  getUserProfile,
  getUsers,
} from "../controllers/userController";
import { protect, admin } from "../middleware/authMiddleware";

const router = express.Router();
router.route("/").post(registerUser).get(protect, admin, getUsers);
router.post("/auth", authUser);
router.post("/logout", logoutUser);
router.route("/profile").get(protect, getUserProfile);

export default router;
