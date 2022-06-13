import asyncHandler from 'express-async-handler';
import Product from '../models/ProductModel.js';

// @desc    Fetch all products
// @route   GET /api/products
// @access  Public
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find();
  console.log(products);
  if (products) {
    res.json(products);
  } else {
    res.status(404);
    throw new Error('No products found');
  }
});

// @desc    Fetch a single products
// @route   GET /api/products/:id
// @access  Public
const getProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    res.json(product);
  } else {
    res.status(404);
    throw new Error('Product not found');
  }
});

export { getProducts, getProduct };
