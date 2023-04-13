import express from "express";
const router = express.Router();
import {
  getProductById,
  getProducts,
  deleteProduct,
  createProduct,
  updateProduct,
} from "../controllers/productController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

// @desct Fetch all products
// @route GET /api/products
// @access Pulic

router.route("/").get(getProducts).post(protect, admin, createProduct);

// @desct Fetch sigle product
// @route GET /api/products/:id
// @access Pulic
router
  .route("/:id")
  .get(getProductById)
  .delete(protect, admin, deleteProduct)
  .put(protect, admin, updateProduct);

export default router;
