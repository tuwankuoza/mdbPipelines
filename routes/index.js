const router = require('express').Router()
const ProductController = require('../controllers/controller')

router.get('/', ProductController.listProduct)
router.get('/sort', ProductController.sortProduct)
router.get('/filter', ProductController.filterProduct)
router.get('/brands', ProductController.brandStats)



module.exports = router