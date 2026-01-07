const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

export const getCartProducts = async (req, res) => {
  try {
    const products = await prisma.product.findMany();
    res.status(200).json({ success: true, data : products });
  } catch (e) {
    res.status(500).json({ success: false, message: e.message });
  }
};

export const addToCart = async (req, res) => {
  try {
    const { productId, quantity } = req.body;

   
    if (!productId || !quantity || quantity <= 0) {
      return res.status(400).json({ success: false, message: "Invalid input data" });
    }

    
    const product = await prisma.product.findUnique({
      where: { id: productId },
    });

    if (!product) {
      return res.status(404).json({ success: false, message: "Product not found" });
    }

   
    const newCartItem = await prisma.cartItem.create({
      data: {
        productId: product.id,
        name: product.name,   
        price: product.price,
        images: product.images,
        quantity: quantity,
      },
    });

    res.status(200).json({ success: true, data: newCartItem });
  } catch (error) {
    console.error("Error adding to cart:", error);
    res.status(500).json({ success: false, message: "Error adding to cart", error: error.message });
  }
};

export const updateCartItem = async (req, res) => {
  try {
    const { id, quantity } = req.body;

    
    if (!id || !quantity || quantity <= 0) {
      return res.status(400).json({ success: false, message: "Invalid input data" });
    }

   
    const cartItem = await prisma.cartItem.findUnique({
      where: { id },
    });

    if (!cartItem) {
      return res.status(404).json({ success: false, message: "Cart item not found" });
    }

    const updatedCartItem = await prisma.cartItem.update({
      where: { id },
      data: { quantity },
    });

    res.status(200).json({ success: true, data: updatedCartItem });
  } catch (error) {
    console.error("Error updating cart item:", error);
    res.status(500).json({ success: false, message: "Error updating cart item", error: error.message });
  }
};
export const deleteCartItem = async (req, res) => {
  try {
    const { id } = req.params;

    
    if (!id) {
      return res.status(400).json({ success: false, message: "ID is required" });
    }

   
    const cartItem = await prisma.cartItem.findUnique({
      where: { id },
    });

    if (!cartItem) {
      return res.status(404).json({ success: false, message: "Cart item not found" });
    }

    
    const deletedCartItem = await prisma.cartItem.delete({
      where: { id },
    });

    res.status(200).json({ success: true, data: deletedCartItem });
  } catch (error) {
    console.error("Error deleting cart item:", error);
    res.status(500).json({ success: false, message: "Error deleting cart item", error: error.message });
  }
};
  
