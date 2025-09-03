const router = require('express').Router()

const { addProducts, getAllProducts, getOneProduct } = require('../controllers/productControllers')

router.post('/product', addProducts)
router.get('/products', getAllProducts)
router.get('/product/:id', getOneProduct)

module.exports = router
