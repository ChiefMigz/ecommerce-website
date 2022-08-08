const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    product_id: {
        type: String,
        unique: true,
        trim: true,
        required: true
    },
    name: {
        type: String,
        trim: true,
        required: true
    },
    description: {
        type: String,
        trim: true,
        required: true
    },
    category: {
        type: String,
        trim: true,
        required: true
    },
    checked: {
        type: Boolean,
        default: false
    },
    sold: {
        type: Number,
        default: 0
    },
    price: {
        type: Number,
        trim: true,
        required: true
    },
    images: {
        type: Object,
        required: true
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Products', productSchema)