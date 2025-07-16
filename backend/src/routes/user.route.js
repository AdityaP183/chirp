import express from "express";
import {
	followUser,
	getCurrentUser,
	getUserProfile,
	syncUser,
	updateProfile,
} from "../controllers/user.controller.js";
import { protectedRoute } from "../middleware/auth.middleware.js";

const router = express.Router();

// public route
router.get("/profile/:username", getUserProfile);

// protected routes
router.put("/profile", protectedRoute, updateProfile);
router.get("/me", protectedRoute, getCurrentUser);
router.post("/sync", protectedRoute, syncUser);
router.post("/follow/:targetUserId", protectedRoute, followUser);

export default router;
