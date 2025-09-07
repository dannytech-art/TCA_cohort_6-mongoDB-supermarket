const router = require('express').Router()

const { addProducts, getAllProducts, getOneProduct, updateProduct, deleteProduct } = require('../controllers/productControllers')

router.post('/product', addProducts)
router.get('/products', getAllProducts)
router.get('/product/:id', getOneProduct)
router.patch('/product/:id', updateProduct)
router.delete('/product/:id', deleteProduct)

module.exports = router
