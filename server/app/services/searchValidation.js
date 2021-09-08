const { param, validationResult } = require("express-validator");

exports.validateSearch = [
  // search keyword must be a string of max 50 chars
  param("keyword")
    .trim()
    .isLength({ max: 50 })
    .withMessage("request cannot be over 50 characters"),
  // date should be a valid date yyyy-mm-dd between now and 1 week in future
  param("date")
    .trim()
    .isDate()
    .withMessage("date must be a valid date")
    .exists({ checkFalsy: true })
    .withMessage("date cannot be empty")
    .isAfter(new Date(new Date().setDate(new Date().getDate() - 1)).toUTCString())
    .withMessage("date cannot be in the past")
    .isBefore(new Date(new Date().setDate(new Date().getDate() + 7)).toUTCString())
    .withMessage("date cannot be more then 1 week in the future"),
  // time must be a valid 24hr time hh:mm
  param("time")
    .trim()
    .exists({ checkFalsy: true })
    .withMessage("time cannot be empty")
    .matches(/^([01]?[0-9]|2[0-3]):[0-5][0-9]$/)
    .withMessage("time must be valid 24hr format"),
  // guests must be number 1 - 6
  param("guests")
    .trim()
    .exists({ checkFalsy: true })
    .withMessage("guests cannot be empty")
    .isNumeric()
    .withMessage("guests must be a numeric value")
    .isIn([1, 2, 3, 4, 5, 6])
    .withMessage("guests must be between 1 to 6 people"),

    (req, res, next) => {
      let errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
      }
      next();
    },
];

exports.validateKeywordSearch = [
  // search keyword must be a string of max 200 chars
  param("keyword")
    .trim()
    .isLength({ max: 50 })
    .withMessage("request cannot be over 50 characters"),

    (req, res, next) => {
      let errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
      }
      next();
    },
];
