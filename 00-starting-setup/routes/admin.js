const path = require('path');

const express = require('express');

const adminController = require('../controllers/admin');

const router = express.Router();

// /admin/add-product => GET
router.get('/add-product', adminController.getAddProduct);

// /admin/products => GET
router.get('/products', adminController.getProducts);

// /admin/add-product => POST
//this posts the data entered into the add-product form and calls the postAddProduct function in the controller.
router.post('/add-product', adminController.postAddProduct);

module.exports = router;

