const { param, body, validationResult } = require("express-validator");

exports.validateRestaurantId = [
  param("restaurantId")
    .trim()
    .matches(/^[a-f\d]{24}$/i)
    .withMessage("invalid restaurantId"),

  (req, res, next) => {
    let errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    next();
  },
];

exports.validateNewRestaurant = [
  // restaurant name must be a string
  body("name")
    .trim()
    .exists({ checkFalsy: true })
    .withMessage("restaurant cannot be empty")
    .isLength({ max: 50 })
    .withMessage("name cannot be over 50 characters"),
  // cuisine must be a string
  body("cuisine")
    .trim()
    .exists({ checkFalsy: true })
    .withMessage("cuisine cannot be empty")
    .isLength({ max: 20 })
    .withMessage("name cannot be over 20 characters"),
  // openTime must be a valid 24hr time hh:mm
  body("openTime")
    .trim()
    .exists({ checkFalsy: true })
    .withMessage("openTime cannot be empty")
    .matches(/^([01]?[0-9]|2[0-3]):[0-5][0-9]$/)
    .withMessage("openTime must be valid 24hr format"),
  // closeTime must be a valid 24hr time hh:mm
  body("closeTime")
    .trim()
    .exists({ checkFalsy: true })
    .withMessage("closeTime cannot be empty")
    .matches(/^([01]?[0-9]|2[0-3]):[0-5][0-9]$/)
    .withMessage("closeTime must be valid 24hr format"),
  // seatingInterval must be number 15, 30 or 60 (time in mins)
  body("seatingInterval")
    .trim()
    .exists({ checkFalsy: true })
    .withMessage("seatingInterval cannot be empty")
    .isNumeric()
    .withMessage("seatingInterval must be a numeric value")
    .isIn([15, 30, 60])
    .withMessage("seatingInterval must be 15, 30 or 60"),
  // tableCapacityPerInterval must be a valid int value
  body("tableCapacityPerInterval")
    .trim()
    .exists({ checkFalsy: true })
    .withMessage("tableCapacityPerInterval cannot be empty")
    .isNumeric()
    .withMessage("tableCapacityPerInterval must be a number"),
  // info must be a string
  body("info")
    .trim()
    .isLength({ max: 300 })
    .withMessage("info cannot be over 300 characters"),
  // image must be a valid string
  body("image")
    .trim()
    .exists({ checkFalsy: true })
    .withMessage("image cannot be empty"),

  (req, res, next) => {
    let errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    next();
  },
];
