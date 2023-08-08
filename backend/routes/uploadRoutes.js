import { v2 as cloudinary } from 'cloudinary';
import dotenv from 'dotenv';
import express from 'express';
import multer from 'multer';

dotenv.config();

const router = express.Router();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

const storage = multer.memoryStorage(); // Store the uploaded file in memory

const upload = multer({
  storage,
  fileFilter: (req, file, cb) => {
    const allowedTypes = ['image/jpeg', 'image/png'];
    if (!allowedTypes.includes(file.mimetype)) {
      cb('File type is not supported', false);
    } else {
      cb(null, true);
    }
  }
});

router.post('/', upload.single('image'), async (req, res) => {
  try {
    // Read the uploaded image data as a base64 string
    const base64Image = req.file.buffer.toString('base64');

    // Upload the base64 image to Cloudinary
    const result = await cloudinary.uploader.upload(
      `data:${req.file.mimetype};base64,${base64Image}`,
      {
        folder: 'gadgetgizmo-images' // Optional folder in Cloudinary
      }
    );

    res.send({
      message: 'Image Uploaded',
      image: result.secure_url
    });
  } catch (error) {
    res.status(500).send({
      message: 'Image upload failed',
      error: error.message
    });
  }
});

export default router;
