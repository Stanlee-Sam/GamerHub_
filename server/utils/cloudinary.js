import { v2 as cloudinary } from 'cloudinary';
import dotenv from "dotenv";

dotenv.config();

cloudinary.config({
  cloud_name: 'da2xrjdcf',
  api_key: '211835542729972',
  api_secret: 'xxxLBppaFSXsgwo8LDkBXr3SSO4'
});

export default cloudinary;
