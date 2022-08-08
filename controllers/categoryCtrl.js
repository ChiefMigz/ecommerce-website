const Category = require('../models/categoryModel')

const categoryCtrl = {
    getCategories: async (req, res) => {
        try {
            const categories = await Category.find()
            res.json(categories)
        } catch(err) {
            res.status(500).json({msg: err.message});
        }
    },
    createCategory: async (req, res) => {
        try {
            // If user category is 1, then user is admin
            // Only admin can create, edit and delete category
            const {name} = req.body;
            const category = await Category.findOne({name})
            if (category) return res.status(500).json({msg: 'This category already exists.'})

            const newCategory = new Category({name})

            await newCategory.save()
            res.json({msg: 'Category created successfuly.'})
        } catch (err) {
            return err.status(500).json({msg: err.message})
        }
    },
    deleteCategory: async (req, res) => {
        try {
            const result = await Category.findByIdAndDelete(req.params.id)
            if (!result) return res.status(500).json({msg: 'Category does not exist!'})
            res.json({msg: 'Category deleted sucessfully!'})
        } catch (err) {
            return err.status(500).json({msg: err.message})
        }
    },
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