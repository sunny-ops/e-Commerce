import express from "express";
const router = express.Router();
import {
  getProductById,
  getProducts,
} from "../controllers/productController.js";

// @desct Fetch all products
// @route GET /api/products
// @access Pulic

router.route("/").get(getProducts);

// @desct Fetch sigle product
// @route GET /api/products/:id
// @access Pulic
router.route("/:id").get(getProductById);

export default router;
