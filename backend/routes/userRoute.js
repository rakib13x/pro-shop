import express from "express";
import { registerUser, authUser } from "../controllers/userController";
import { protect, admin } from "../middleware/authMiddleware";

const router = express.Router();
router.route("/").post(registerUser).get(protect, admin, getUsers);
router.post("/auth", authUser);
export default router;
