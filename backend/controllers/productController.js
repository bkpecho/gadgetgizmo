import { v2 as cloudinary } from 'cloudinary';
import asyncHandler from '../middleware/asyncHandler.js';
import Product from '../models/productModel.js';

// @desc Fetch all products
// @route GET /api/products
// @access Public
const getProducts = asyncHandler(async (req, res) => {
  const pageSize = process.env.PAGINATION_LIMIT;
  const page = Number(req.query.pageNumber) || 1;

  const keyword = req.query.keyword
    ? { name: { $regex: req.query.keyword, $options: 'i' } }
    : {};

  const count = await Product.countDocuments({ ...keyword });

  const products = await Product.find({ ...keyword })
    .limit(pageSize)
    .skip(pageSize * (page - 1));
  res.json({ products, page, pages: Math.ceil(count / pageSize) });
});

// @desc Fetch a product
// @route GET /api/products/:id
// @access Public
const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    return res.json(product);
  } else {
    res.status(404);
    throw new Error('Resource not found');
  }
});

// @desc Create a product
// @route POST /api/products
// @access Private / Admin
const createProduct = asyncHandler(async (req, res) => {
  const product = new Product({
    name: 'Sample Name',
    price: 0,
    user: req.user._id,
    image: '/images/sample.jpg',
    brand: 'Sample brand',
    category: 'Sample category',
    countInStock: 0,
    numReviews: 0,
    description: 'Sample Description'
  });

  const createdProduct = await product.save();
  res.status(201).json(createdProduct);
});

// @desc Update a product
// @route PUT /api/products/:id
// @access Private / Admin
const updateProduct = asyncHandler(async (req, res) => {
  const { name, price, description, image, brand, category, countInStock } =
    req.body;

  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      res.status(404);
      throw new Error('Resource not found');
    }

    const isStaticImage = product.image === '/images/sample.jpg';

    product.name = name;
    product.price = price;
    product.description = description;
    product.brand = brand;
    product.category = category;
    product.countInStock = countInStock;

    if (!isStaticImage) {
      const publicId = product.image.split('/').pop().split('.')[0];
      await cloudinary.uploader.destroy(`gadgetgizmo-images/${publicId}`);
    }

    product.image = image;

    const updatedProduct = await product.save();
    res.json(updatedProduct);
  } catch (error) {
    res.status(500).json({ error: 'Product update failed' });
  }
});

// @desc Delete a product
// @route DELETE /api/products/:id
// @access Private / Admin
const deleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  console.log(product.image);
  if (product) {
    // Delete the image from Cloudinary
    if (product.image) {
      const publicId = product.image.split('/').pop().split('.')[0];
      await cloudinary.uploader.destroy(`gadgetgizmo-images/${publicId}`);
    }

    // Delete the product from the database
    await Product.deleteOne({
      _id: product._id
    });

    res.status(200).json({ message: 'Product deleted' });
  } else {
    res.status(404);
    throw new Error('Product not found');
  }
});

// @desc Create a new review
// @route POST /api/products/:id/reviews
// @access Private
const createProductReview = asyncHandler(async (req, res) => {
  const { rating, comment } = req.body;
  const product = await Product.findById(req.params.id);

  if (product) {
    const alreadyReviewed = product.reviews.find(
      (review) => review.user.toString() === req.user._id.toString()
    );

    if (alreadyReviewed) {
      res.status(400);
      throw new Error('Product already reviewed');
    }

    const review = {
      name: req.user.name,
      rating: Number(rating),
      comment,
      user: req.user._id
    };

    product.reviews.push(review);

    product.numReviews = product.reviews.length;

    product.rating =
      product.reviews.reduce((acc, review) => acc + review.rating, 0) /
      product.reviews.length;

    await product.save();
    res.status(201).json({ message: 'Review added' });
  } else {
    res.status(404);
    throw new Error('Resource not found');
  }
});

// @desc Get top rated products
// @route GET /api/products/top
// @access Public
const getTopProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({}).sort({ rating: -1 }).limit(3);

  res.status(200).json(products);
});

export {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
  createProductReview,
  getTopProducts
};
