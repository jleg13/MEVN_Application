const router = require("express").Router();
const restaurantController = require("../controllers/restaurantController");
const restaurantValidator = require("../services/restaurantValidation");

// Details of all restaurants
router.get("/", restaurantController.readRestaurants);

// Create new restaurant
router.post("/", restaurantValidator.validateNewRestaurant,
  restaurantController.createRestaurant
);

// Details of a restaurant by ID
router.get(
  "/:restaurantId",
  restaurantValidator.validateRestaurantId,
  restaurantController.readRestaurantById
);

// Schedule of a restaurant by restaurant ID
router.get(
  "/:restaurantId/schedule",
  restaurantValidator.validateRestaurantId,
  restaurantController.readRestaurantSchedule
);

module.exports = router;

