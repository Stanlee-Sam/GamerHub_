import express from 'express';
import multer from 'multer';
import { uploadFilesAndCreateProduct } from '../controllers/upload.controller.js'; 

const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() });

router.post('/upload', upload.array('files', 4), uploadFilesAndCreateProduct);

export default router;
