import { Router } from "express";

import {
  getCartProducts,
  addToCart,
  updateCartItem,
  deleteCartItem,
} from "../controllers/cart.controller.js";

const router = Router();

router.get("/", getCartProducts);

router.post("/", addToCart);

router.put("/:id", updateCartItem);

router.delete("/:id", deleteCartItem);

export default router;
