import { Router } from "express";
import {
  getProducts,
  getProductById,
  getProductByCategory,
  getNewArrivals,
  createProduct,
  updateProduct,
  deleteProduct,
  addProduct,
  getAddedProduct
} from "../controllers/products.controller.js";
// import cloudinary from "../utils/cloudinary.js";

const router = Router();

// Define routes
router.get("/", getProducts);
router.get("/:id", getProductById);
router.get("/category/:category", getProductByCategory);
router.get("/new-arrivals", getNewArrivals);
router.post("/", createProduct);
router.patch("/:id", updateProduct);
router.delete("/:id", deleteProduct);
// New routes
router.post("/add", addProduct); 
router.get("/added/:id", getAddedProduct);


export default router;
