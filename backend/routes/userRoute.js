import express from "express";
import { registerUser } from "../controllers/userController";
import { protect } from "../middleware/authMiddleware";

const router = express.Router();
router.route("/").post(registerUser).get(protect, getUsers);

export default router;
