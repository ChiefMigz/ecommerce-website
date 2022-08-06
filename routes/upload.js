const router = require('express').Router()
const cloudinary = require('cloudinary')
const auth = require('../middleware/auth')
const authAdmin = require('../middleware/authAdmin')
const fs = require('fs')


// Set up cloudinary config
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET
})
// Upload image to cloudinary given user role is 1
router.post('/upload', auth, authAdmin, (req, res) => {
    try {
        if (!req.files || Object.keys(req.files).length === 0)
            return res.status(400).json({msg: 'No files were uploaded.'})
        
        // Check for file size
        const file = req.files.file;
        if (file.size > 1024 * 1024) {
            removeTmp(file.tempFilePath)
            return res.status(400).json({msg: 'File too large!'})
        }
            

        // Check for image type
        if (file.mimetype != 'image/jpeg' && file.mimetype != 'image/png') 
            return res.status(400).json({msg: 'File format is incorrect!'})
        
        // Upload image
        cloudinary.v2.uploader.upload(file.tempFilePath, {folder: 'test'}, async(err, result) => {
            if (err) throw err;

            removeTmp(file.tempFilePath)

            res.json({public_id: result.public_id, url: result.secure_url})
        })

    } catch (err) {
        res.status(500).json({msg: err.message})
    }
})

// Delete image from cloudinary
router.post('/destroy', (req, res) => {
    try {
        const {public_id} = req.body;
        if (!public_id) res.status(400).json({msg: 'No image is selected!'})

        // Delete the image
        cloudinary.v2.uploader.destroy(public_id, async(err, result) => {
            if (err) throw err;

            res.json({msg: 'Deleted an image'})
        })
    } catch (err) {
        return res.status(500).json({msg: err.message})
    }
})

const removeTmp = (path) => {
    fs.unlink(path, err => {
        if (err) throw err;
    })
}

module.exports = router