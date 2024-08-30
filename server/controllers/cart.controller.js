const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
export const getCartProducts = (req, res) => {
  try {
    // const cartItems =
  } catch (e) {
    res.status(500).json({ success: false, message: e.message });
  }
};

export const addToCart = (req, res) => {
  res.status(200).send("Add item to cart");
};

export const updateCartItem = (req, res) => {
  res.status(200).send(`Update cart item ${req.params.id}`);
};

export const deleteCartItem = (req, res) => {
  res.status(200).send(`Delete cart item ${req.params.id}`);
};
