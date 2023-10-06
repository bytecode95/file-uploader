const express = require('express');
const router = express.Router();

const {upload} = require('../middlware/multer');
const {addProduct} = require('../controllers/ProductController')

router.post('/addproduct', upload, addProduct)


module.exports = router;