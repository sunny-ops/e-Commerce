import express from "express";
import asyncHandler from "express-async-handler";
const router = express.Router();
import Product from "../models/productModel.js";

// @desct Fetch all products
// @route GET /api/products
// @access Pulic

router.get(
  "/",
  asyncHandler(async (req, res) => {
    const products = await Product.find({});
    // throw new Error("Some error");
    res.json(products);
  })
);

// @desct Fetch sigle product
// @route GET /api/products/:id
// @access Pulic

router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (product) {
      res.json(product);
    } else {
      res.status(404);
      throw new Error("Product not found");
    }
  })
);

export default router;
