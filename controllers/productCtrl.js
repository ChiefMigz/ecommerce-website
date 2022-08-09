const Product = require('../models/productModel')

// Product filter, sorting and paginating

class APIfeatures {
    constructor(query, queryString) {
        this.query = query; // Products to be show
        this.queryString = queryString // This is the filter for products received from request
    }
    filtering() {
        const queryObj = {...this.queryString} //queryString = req.query

        let queryStr = JSON.stringify(queryObj) // Convert JSON key filter to string
        
        queryStr = queryStr.replace(
            /\b(gte|gt|lt|lte|eq|regex)\b/g, 
             match => '$' + match) //append '$' to start of the filter i.e. (gte => $gte)
        this.query.find(JSON.parse(queryStr)) // Convert JSON string to an object, then apply filter to query
        return this;
    }
    sorting() {
        if (this.queryString.sort) {
            const sortBy = this.queryString.sort.split(' ').join(' ') // Defines how the products are going to be sorted
            this.query.sort(sortBy) // Apply sort to query
        }
        else 
            this.query.sort('-createdAt') // If the request does not require sorting, sort by the data created
        return this;
    }
    paginating() {
        const page = this.queryString.page * 1 || 1 // Current page
        // Limit to 9 products
        const limit = this.queryString.limit * 1 || 9 // Number of products (rows) to fetch

        // Using offset pagination
        const offset = (page - 1) * limit // Number of products (rows) to skip
        this.query = this.query.skip(offset).limit(limit) // Apply pagination to query

        return this;
    }

}

const productCtrl = {
    // Get all products in the MongoDB according to request
    getProducts: async(req, res) => {
        try {
            const features = new APIfeatures(Product.find(), req.query)
            .filtering().sorting().paginating() // Call class member functions
            const products = await features.query

            res.json({
                status: 'Success',
                results: products.length,
                products: products
            }) // Show products according to user query
        } catch (err) {
            return res.status(500).json(err.message)
        }
    },
    // Create a new product, then save to MongoDB
    createProduct: async(req, res) => {
        try {
            // If user category is 1, then user is admin
            // Only admin can create, edit and delete category
            const {product_id, name, price, description, content, category, images} = req.body;
            const product = await Product.findOne({product_id})
            if (!images) return res.status(500).json({msg: 'No image uploaded for product'}) // Check if the image is valid
            if (product) return res.status(500).json({msg: 'Product alreaady exists'}) // Check if the product exists in MongoDB

            // Create the new product
            const newProduct = new Product({
                product_id, name: name.toLowerCase(), price, description, content, category, images
            })

            await newProduct.save() // Save to MongoDB
            res.json({msg: 'Product created successfuly.'})
        } catch (err) {
            return res.status(500).json(err.message)
        }
    },
    // Delete the product via id
    deleteProduct: async(req, res) => {
        try {
            const exists = await Product.findByIdAndDelete(req.params.id) 
            if (!exists) return res.status(500).json({msg: 'Product does not exist'}) // Check if the product is in the MongoDB
            res.json({msg: 'Product deleted sucessfully!'})
        } catch (err) {
            return res.status(500).json(err.message)
        }
    },
    // Update the product via id
    updateProduct: async(req, res) => {
        try {
            const {name, price, description, content, category, images} = req.body;
           
            if (!images) return res.status(500).json({msg: 'No image uploaded for product'}) // Check if there are any images uploaded

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
