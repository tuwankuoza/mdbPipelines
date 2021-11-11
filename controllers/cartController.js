const Cart = require('../models/cart')

class CartController {
  // show purchase data from all customer
  static async purchaseData(req, res, next) {
    try {
      const purchaseData = await Cart.purchaseData()
      res.status(200).json(purchaseData)
    } catch (error) {
      res.status(500).json({message: 'internal server error'})
    }
  }
  // show purchase data from single customer
  static async checkout (req, res, next) {
    const { name } = req.body
    try {
      const checkout  = await Cart.singlePurchase(name)
      if(checkout.length === 0) {
        res.status(404).json({message: 'Purchase data not found'})
      } else {
        res.status(200).json(checkout)
      }
    } catch (error) {
      res.status(500).json({message: 'internal server error'})
    }
  }
}

module.exports = CartController