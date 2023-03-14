import express from "express";
const router = express.Router();
import { authUser } from "../controllers/userController.js";

// @desct Fetch all products
// @route GET /api/products
// @access Pulic

router.post("/login", authUser);

export default router;
