const router = require('express').Router();
const searchController = require("../controllers/searchController");
const searchValidator = require('../services/searchValidation');

// Search restaurants by keyword
router.get('/:keyword', searchValidator.validateKeywordSearch, searchController.readRestaurantsByKeyword);

// Search restaurants by keyword, Date, Time, Guests Number
router.get('/:date/:time/:guests', searchValidator.validateSearch, searchController.readRestaurantsBySearch);

module.exports = router;
