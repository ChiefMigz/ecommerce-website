const Product = require('../models/productModel')

const productCtrl = {
    getProducts: async(req, res) => {
        try {
            const products = await Product.find()
            res.json(products)
        } catch (err) {
            return res.status(500).json(err.message)
        }
    },
    createProduct: async(req, res) => {
        try {
            // If user category is 1, then user is admin
            // Only admin can create, edit and delete category
            const {product_id, name, price, description, content, category, images} = req.body;
            const product = await Product.findOne({product_id})
            if (!images) return res.status(500).json({msg: 'No image uploaded for product'})
            if (product) return res.status(500).json({msg: 'Product alreaady exists'})

            const newProduct = new Product({
                product_id, name: name.toLowerCase(), price, description, content, category, images
            })

            await newProduct.save()
            res.json({msg: 'Product created successfuly.'})
        } catch (err) {
            return res.status(500).json(err.message)
        }
    },
    deleteProduct: async(req, res) => {
        try {
            const valid = await Product.findByIdAndDelete(req.params.id)
            if (!valid) return res.status(500).json({msg: 'Product does not exist'})
            res.json({msg: 'Product deleted sucessfully!'})
        } catch (err) {
            return res.status(500).json(err.message)
        }
    },
    updateProduct: async(req, res) => {
        try {
            const {name, price, description, content, category, images} = req.body;
           
            if (!images) return res.status(500).json({msg: 'No image uploaded for product'})

            await Product.findOneAndUpdate({_id: req.params.id}, {
                name: name.toLowerCase(), price, description, content, category, images
            })

            res.json({msg: 'Product updated successfuly.'})
        } catch (err) {
            return res.status(500).json(err.message)
        }
    }
}

module.exports = productCtrl
