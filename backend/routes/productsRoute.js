import express from 'express'
import AsyncHandler from 'express-async-handler'
const router = express.Router()
import Product from '../models/productModel.js'

//@desc Fetch all the products
//@route GET /api/products
//@access public
router.get(
  '/',
  AsyncHandler(async (req, res) => {
    const products = await Product.find({})
    res.json(products)
  })
)
//@desc Fetch single the products
//@route GET /api/products/:id
//@access public
router.get(
  '/:id',
  AsyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id)
    if (product) {
      res.json(product)
    } else {
      throw new Error('Product not Found')
    }
  })
)

export default router
