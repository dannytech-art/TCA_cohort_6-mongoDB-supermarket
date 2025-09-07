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
exports.updateProduct = async (req,res) =>{
   try {
        const {id} = req.params
        const update = req.body
        const product = await productModel.findById(id)

        if (!product) {
            return res.status(404).json({
                message:` product not found `
            })
        }

        const updated = await productModel.findByIdAndUpdate( id, update, {new: true} )
        res.status(201).json({
            message: `successfuly updated`,
            data: updated
        })
   } catch (error) {
        res.status(500).json({
            message: `error fetching products`,
            error: error.message
        })
   }
}
exports.deleteProduct = async (req,res)=>{
         try {
            const {id} = req.params
            const product = await productModel.findById(id)

        if (!product) {
            return res.status(404).json({
                message:` product not found `
            })
        }
            const deleteProduct = await productModel.findByIdAndDelete(id)
            res.status(200).json({
                message:`deleted successfully`,
                data: deleteProduct
            })
         } catch (error) {
        res.status(500).json({
            message: `error fetching products`,
            error: error.message
        })
   }
}