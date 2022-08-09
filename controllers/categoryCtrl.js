const Category = require('../models/categoryModel')

const categoryCtrl = {
    // Get all catergories in MongoDB
    getCategories: async (req, res) => {
        try {
            const categories = await Category.find()
            res.json(categories)
        } catch(err) {
            res.status(500).json({msg: err.message});
        }
    },
    // Create a new category, then add to MongoDB
    createCategory: async (req, res) => {
        try {
            // If user category is 1, then user is admin
            // Only admin can create, edit and delete category
            const {name} = req.body;
            const category = await Category.findOne({name})
            if (category) return res.status(500).json({msg: 'This category already exists.'})

            const newCategory = new Category({name})

            await newCategory.save() // Save to MongoDB
            res.json({msg: 'Category created successfuly.'})
        } catch (err) {
            return err.status(500).json({msg: err.message})
        }
    },
    // Delete a catergory via req id
    deleteCategory: async (req, res) => {
        try {
            const result = await Category.findByIdAndDelete(req.params.id)
            if (!result) return res.status(500).json({msg: 'Category does not exist!'})
            res.json({msg: 'Category deleted sucessfully!'})
        } catch (err) {
            return err.status(500).json({msg: err.message})
        }
    },
    // Update category via req id
    updateCategory: async (req, res) => {
        try {
            const {name} = req.body;
            await Category.findOneAndUpdate({_id: req.params.id}, {name})
            res.json({msg: 'Updated a category.'})
        } catch (err) {
            res.status(500).json({msg: err.message})
        }
    }
}

module.exports = categoryCtrl