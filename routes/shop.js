//this file determines what is sent to the app.js to be pushed to localhost.
//all the functions rendered on the webpage are referenced here.

const path = require('path');

const express = require('express');

//This links the controller file to this js routes file.
const shopController = require('../controllers/shop');

//this creates a new router object to handle requests. It's just something you need to get/use/post data.
const router = express.Router();

//These reference the get and post functions found in the controllers/shop.js file.
//The app.js file uses a require() function to pull this data to run it on the server.
router.get('/', shopController.getIndex);

router.get('/products', shopController.getProducts);

router.get('/products/:productId', shopController.getProduct);

router.get('/cart', shopController.getCart);

router.post('/cart', shopController.postCart);

router.post('/cart-delete-item', shopController.postCartDeleteProduct);

router.get('/orders', shopController.getOrders);

router.get('/checkout', shopController.getCheckout);

module.exports = router;
