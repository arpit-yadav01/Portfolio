import dotenv from "dotenv";
dotenv.config(); // 👈 FORCE env to load here

import { v2 as cloudinary } from "cloudinary";

if (!process.env.CLOUDINARY_API_KEY) {
  throw new Error("Cloudinary API key is missing");
}

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export default cloudinary;
