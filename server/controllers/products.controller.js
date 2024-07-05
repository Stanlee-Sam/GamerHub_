import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const getProducts = (req, res) => {
    res.send("Get all products");
  }

export const getProductById = (req, res) => {
    res.send(`Get product with id: ${req.params.id}`);
  }

export const createProduct = (req, res) => {
  res.send("Create new product");
}

export const updateProduct = (req, res) => {
    res.send(`Update product with id: ${req.params.id}`);
  }

export const deleteProduct = (req, res) => {
    res.send(`Delete product with id: ${req.params.id}`);
  }