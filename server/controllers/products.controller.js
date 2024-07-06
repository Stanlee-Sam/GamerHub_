import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const getProducts = async (req, res) => {
  try {
    const products = await prisma.product.findMany();
    res.status(200).json({ success: true, data: products });
  } catch (e) {
    res.status(500).json({ success: false, message: e.message });
  }
};

export const getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await prisma.product.findUnique({
      where: { id },
    });
    if (!product) {
      return res.status(404).json({ success: false, message: "Product not found" });
    }
    return res.status(200).json({ success: true, data: product });
  } catch (e) {
    res.status(500).json({ success: false, message: e.message });
  }
};

export const getProductByCategory = async (req, res) => {
  const { category } = req.params;
  try {
    const products = await prisma.product.findMany({
      where: { category },
    });
    res.status(200).json({ success: true, data: products });
  } catch (e) {
    res.status(500).json({ success: false, message: e.message });
  }
};

export const getNewArrivals = async (req, res) => {
  try {
    const newArrivals = await prisma.product.findMany({
      where: { isNewArrival: true },
      orderBy: { createdAt: "desc" },
    });
    res.status(200).json({ success: true, data: newArrivals });
  } catch (e) {
    console.error("Error fetching new arrivals:", e);
    res.status(500).json({ success: false, message: e.message });
  }
};

export const createProduct = async (req, res) => {
  try {
    const { name, description, price, images, category, rating, isNewArrival } = req.body;
    const newProduct = await prisma.product.create({
      data: { name, description, price, images, category, rating, isNewArrival },
    });
    res.status(201).json({
      success: true,
      message: "New product created",
      data: newProduct,
    });
  } catch (e) {
    res.status(500).json({ success: false, message: e.message });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedProduct = await prisma.product.update({
      where: { id },
      data: req.body,
    });
    res.status(200).json({ success: true, message: "Product updated", data: updatedProduct });
  } catch (e) {
    res.status(500).json({ success: false, message: e.message });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const delProduct = await prisma.product.delete({
      where: { id },
    });
    res.status(200).json({ success: true, message: "Product deleted successfully" });
  } catch (e) {
    res.status(500).json({ success: false, message: e.message });
  }
};
