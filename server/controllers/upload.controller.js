import express from 'express';
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import multer from 'multer';
import { storage } from '../routes/firebaseConfig.js';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() });

export const uploadFilesAndCreateProduct = async (req, res) => {
  try {
    const files = req.files;
    if (!files || files.length === 0) {
      return res.status(400).json({ message: 'No files uploaded' });
    }

    const imageUrls = [];
    for (const file of files) {
      const storageRef = ref(storage, 'images/' + file.originalname);
      await uploadBytes(storageRef, file.buffer);
      const downloadURL = await getDownloadURL(storageRef);
      imageUrls.push(downloadURL);
    }

    const { name, description, price, category, rating, isNewArrival } = req.body;

    const newProduct = await prisma.product.create({
      data: {
        name,
        description,
        price: parseFloat(price),
        images: imageUrls,
        category,
        rating: parseFloat(rating),
        isNewArrival: isNewArrival === 'true'
      }
    });

    res.status(200).json({ message: 'Product uploaded successfully', product: newProduct });
  } catch (error) {
    console.error('Error uploading product:', error);
    res.status(500).json({ message: 'Error uploading product', error: error.message });
  }
};

export default router;