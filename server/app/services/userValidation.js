const { body, param, validationResult } = require("express-validator");

exports.validateUser = [
  // user must provide a valid email
  body("email")
    .trim()
    .exists({ checkFalsy: true })
    .withMessage("email cannot be empty")
    .isEmail()
    .withMessage("must be a valid email"),
  // password must be at least 8 chars long
  body("password")
    .trim()
    .exists({ checkFalsy: true })
    .withMessage("password cannot be empty")
    .isLength({ min: 8 })
    .withMessage("password must be at least 8 charaters")
    .matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)
    .withMessage("password must contain at least 1 letter and 1 number"),

  (req, res, next) => {
    let errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    next();
  },
];

exports.validateUserId = [
  param("userId")
    .trim()
    .matches(/^[a-f\d]{24}$/i)
    .withMessage("invalid reservationId"),

  (req, res, next) => {
    let errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    next();
  },
];

exports.validateReservation = [
  // restaurant must be a objectId
  body("restaurant")
    .trim()
    .matches(/^[a-f\d]{24}$/i)
    .withMessage("invalid restaurant"),
  // date must be a valid date yyyy-mm-dd between now and 1 week in future
  body("date")
    .trim()
    .exists({ checkFalsy: true })
    .withMessage("date cannot be empty")
    .isDate()
    .withMessage("date must be a valid date")
    .isAfter(
      new Date(new Date().setDate(new Date().getDate() - 1)).toUTCString()
    )
    .withMessage("date cannot be in the past")
    .isBefore(
      new Date(new Date().setDate(new Date().getDate() + 7)).toUTCString()
    )
    .withMessage("date cannot be more then 1 week in the future"),
  // time must be a valid 24hr time hh:mm
  body("time")
    .trim()
    .exists({ checkFalsy: true })
    .withMessage("time cannot be empty")
    .matches(/^([01]?[0-9]|2[0-3]):[0-5][0-9]$/)
    .withMessage("time must be valid 24hr format"),
  // guests must be number 1 - 6
  body("guests")
    .trim()
    .exists({ checkFalsy: true })
    .withMessage("guests cannot be empty")
    .isNumeric()
    .withMessage("guests must be a numeric value")
    .isIn([1, 2, 3, 4, 5, 6])
    .withMessage("guests must be between 1 to 6 people"),
  // mobile must be a valid mobile
  body("mobile")
    .trim()
    .exists({ checkFalsy: true })
    .withMessage("mobile cannot be empty")
    .isMobilePhone()
    .withMessage("must be a valid mobile number"),
  // requests must be a string
  body("requests")
    .trim()
    .isLength({ max: 200 })
    .withMessage("request cannot be over 200 characters"),
  // status must be a valid string
  body("status")
    .trim()
    .exists({ checkFalsy: true })
    .withMessage("status cannot be empty")
    .contains("Processing")
    .withMessage("reservations must be processed"),

  (req, res, next) => {
    let errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    next();
  },
];

exports.validateReservationId = [
  param("reservationId")
    .trim()
    .matches(/^[a-f\d]{24}$/i)
    .withMessage("invalid reservationId"),

  (req, res, next) => {
    let errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    next();
  },
];

exports.validateReservationUpdate = [
  // All fields have .optional() method except status
  // date should be a valid date yyyy-mm-dd between now and 1 week in future
  body("date")
    .optional()
    .trim()
    .isDate()
    .withMessage("date must be a valid date")
    .isAfter(
      new Date(new Date().setDate(new Date().getDate() - 1)).toUTCString()
    )
    .withMessage("date cannot be in the past")
    .isBefore(
      new Date(new Date().setDate(new Date().getDate() + 7)).toUTCString()
    )
    .withMessage("date cannot be more then 1 week in the future"),
  // time must be a valid 24hr time hh:mm
  body("time")
    .optional()
    .trim()
    .matches(/^([01]?[0-9]|2[0-3]):[0-5][0-9]$/)
    .withMessage("time must be valid 24hr format"),
  // guests must be number 1 - 6
  body("guests")
    .optional()
    .trim()
    .isNumeric()
    .withMessage("guests must be a numeric value")
    .isIn([1, 2, 3, 4, 5, 6])
    .withMessage("guests must be between 1 to 6 people"),
  // mobile must be a valid mobile
  body("mobile")
    .optional()
    .trim()
    .isMobilePhone()
    .withMessage("must be a valid mobile number"),
  // requests must be a string
  body("requests")
    .optional()
    .trim()
    .isLength({ max: 200 })
    .withMessage("request cannot be over 200 characters"),
  // status must be a valid string
  body("status")
    .trim()
    .exists({ checkFalsy: true })
    .withMessage("status cannot be empty")
    .contains("Processing")
    .withMessage("reservations must be processed"),

  (req, res, next) => {
    let errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    next();
  },
];

exports.validateGuest = [
  // user must provide a valid guestId
  body("email")
    .trim()
    .exists({ checkFalsy: true })
    .withMessage("the email guestId cannot be empty")
    .matches(/^[^\s]{5}[0-9]{4}$/)
    .withMessage(
      "the email guestId must be the string 'guest' followed by a 4 digit number"
    ),
  // password must be at least 8 chars long
  body("password")
    .trim()
    .exists({ checkFalsy: true })
    .withMessage("password cannot be empty")
    .matches(/^[a-f\d]{12}$/i)
    .withMessage("password must a valid 12 digit hexidecimal one-off passcode"),

  (req, res, next) => {
    let errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    next();
  },
];
