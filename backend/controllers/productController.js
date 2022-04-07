import asyncHandler from 'express-async-handler'
import Product from '../models/productModel.js'

//@desc Fetch all the products
//@route GET /api/products
//@access public
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({})
  res.json(products)
})

//@desc Fetch single the products
//@route GET /api/products/:id
//@access public
const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id)
  if (product) {
    res.json(product)
  } else {
    throw new Error('Product not Found')
  }
})

//@desc Delete a product
//@route DELETE /api/products/:id
//@access Private/ Admin
const deleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id)
  if (product) {
    await product.remove()
    res.send({ message: 'Product removed' })
  } else {
    throw new Error('Product not Found')
  }
})

export { getProducts, getProductById, deleteProduct }
