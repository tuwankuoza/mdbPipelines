const router = require('express').Router()
const ProductController = require('../controllers/productController')
const CartController = require('../controllers/cartController')


router.get('/', ProductController.listProduct)
router.get('/sort', ProductController.sortProduct)
router.get('/filter', ProductController.filterProduct)
router.get('/brands', ProductController.brandStats)

router.get('/cart', CartController.checkout)
router.get('/purchased', CartController.purchaseData)

module.exports = router