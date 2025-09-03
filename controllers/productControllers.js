const productModel = require('../models/productModel')
exports.addProducts = async (req,res)=>{
    try {
    const { productName, price, quantity, description } = req.body
    const porductExist = await productModel.findOne({productName})
    if (porductExist) {
        return res.status(404).json({
            message: `${productName} already exists try updating rather`
        })
    }
    const products = await productModel.create({ productName, price, quantity, description })
    res.status(201).json({
        message: `successfully created a product`,
        data: products
    })
    } catch (error) {
        res.status(500).json({
            message: `error creating a product`,
            error: error.message
        })
    }
}
exports.getAllProducts = async (req,res)=>{
    try {
        const getAllProducts = await productModel.find()
        res.status(200).json({
            message: `kindly find below products`,
            data: getAllProducts
        })
    } catch (error) {
        res.status(500).json({
            message: `error fetching products`,
            error: error.message
        })
    }
}
exports.getOneProduct = async (req,res)=>{
    try {
        const {id} = req.params
        const getOneProduct = await productModel.findById(id)
        res.status(200).json({
            message: `kindly find below desired product`,
            data: getOneProduct
        })
    } catch (error) {
        res.status(500).json({
            message: `error fetching products`,
            error: error.message
        })
    }
}
