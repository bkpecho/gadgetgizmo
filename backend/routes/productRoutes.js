import express from 'express';
const router = express.Router();

import {
  createProduct,
  getProductById,
  getProducts
} from '../controllers/productController.js';
import { admin, protect } from '../middleware/authMiddleware.js';

router.route('/').get(getProducts).post(protect, admin, createProduct);
router.route('/:id').get(getProductById);

export default router;
