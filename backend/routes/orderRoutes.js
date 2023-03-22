import express from "express";
const router = express.Router();
import { addOrderItems } from "../controllers/orderController.js";
import { protect } from "../middleware/authMiddleware.js";

// @desct Fetch all products
// @route GET /api/products
// @access Pulic

router.route("/").post(protect, addOrderItems);

export default router;
