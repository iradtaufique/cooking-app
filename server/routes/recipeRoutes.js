const express = require('express');
const router = express.Router()
const recipeController = require('../controllers/recipeControllers');


// Creating HomeGage router
router.get('/', recipeController.homepage);


module.exports = router