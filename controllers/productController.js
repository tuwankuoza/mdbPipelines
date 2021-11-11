const Product = require('../models/product')

class ProductController {
  // show all of the product with status (available or not)
  static async listProduct(req, res, next) {
    try {
      const availableProduct = await Product.findaAvailable()
      const emptyProduct = await Product.findEmpty()
      res.status(200).json({
        available: availableProduct,
        empty: emptyProduct
      })
    } catch (error) {
      res.status(500).json({message: 'internal server error'})
    }
  }
  // sort based on price, quantity, or sold, and ascending or descending
  static async sortProduct(req, res, next) {
    let { type, field } = req.body
    
    if(!type) type = 'asc'
    if(!field) field = 'price'

    try {
      const productList = await Product.sort(type, field)
      res.status(200).json(productList)
    } catch (error) {
      res.status(500).json({message: 'internal server error'})
    }
  }
  // filter specifically by name, brand, price, and quantity
  static async filterProduct(req, res, next) {
    const { name, brand, price, quantity } = req.body
    try {
      const productList = await Product.filter(name, brand, Number(price), Number(quantity))
      if(productList.length === 0) {
        res.status(404).json({message: 'product not found'})
      } else {
        res.status(200).json(productList)
      }
    } catch (error) {
      res.status(500).json({message: 'internal server error'})
    }
  }
  // show sold stats by brand
  static async brandStats(req, res, next) {
    try {
      const brandStatistic = await Product.totalSold()
      res.status(200).json(brandStatistic)
    } catch (error) {
      res.status(500).json({message: 'internal server error'})
    }
  }
}

module.exports = ProductController