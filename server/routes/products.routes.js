import { Router } from "express";
import {
  getProducts,
  getProductById,
  getProductByCategory,
  getNewArrivals,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/products.controller.js";

const router = Router();

router.get("/", getProducts);
router.get("/:id", getProductById);
router.get("/category/:category", getProductByCategory);
router.get("/new-arrivals", getNewArrivals);
router.post("/", createProduct);
router.patch("/:id", updateProduct);
router.delete("/:id", deleteProduct);

export default router;
