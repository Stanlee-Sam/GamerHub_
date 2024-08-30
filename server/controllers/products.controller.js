import { PrismaClient } from "@prisma/client";
import cloudinary from '../utils/cloudinary.js'
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
// export const addProduct = async (req,res) => {
//   const { name, description, price, images, category, rating, isNewArrival } = req.body;
//   try{
//     if(images){
//       const uploadRes = await cloudinary.uploader.upload(images, {
//         upload_preset : "onlineShop",
//         timeout: 120000,
//       })
//       if(uploadRes){
//         const product = new Product({
//           name, description, price, images : uploadRes.secure_url, category, rating, isNewArrival
//         })
//         const savedProduct =  await product.save();

//         res.status(200).json({success : true, message : "Product added",savedProduct })
//       }

//     }

//   }catch(e){
//     console.error(e)
//     res.status(500).json({success : false, message : "Error adding product"})

//   }
// }

export const addProduct = async (req, res) => {
  const { name, description, price, images, category, rating, isNewArrival } = req.body;
  try {
    if (images && images.length > 0) {
      const uploadPromises = images.map(image =>
        cloudinary.uploader.upload(image, {
          upload_preset: "onlineShop",
          timeout: 120000,
        })
      );
      const uploadResults = await Promise.all(uploadPromises);
      const imageUrls = uploadResults.map(result => result.secure_url);

      const product = await prisma.product.create({
        data: {
          name,
          description,
          price: parseFloat(price),
          images: imageUrls,
          category,
          rating: parseFloat(rating) || 0,
          isNewArrival: isNewArrival === 'true', 
          updatedAt: new Date(), 
        },
      });

      res.status(200).json({ success: true, message: "Product added", product });
    } else {
      res.status(400).json({ success: false, message: "No images provided" });
    }
  } catch (e) {
    console.error(e);
    res.status(500).json({ success: false, message: "Error adding product" });
  }
};

export const getAddedProduct = async (req, res) => {
  try{
    const products = await product.findMany()
  res.status(200).send(products)

  }catch(e){
    console.error(e)
    res.status(500).json({success : false, message : "Error fetching products"})  

  }

}

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
