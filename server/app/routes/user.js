const router = require('express').Router();
const userController = require("../controllers/userController");
const userValidator = require('../services/userValidation');

// EventSource activate notification
router.get('/:userId/notification', userValidator.validateUserId, userController.reservationNotification)

// Collect data for D3 Graph
router.get('/reservations', userController.getReservationData)

// new user signup
router.post('/signup', userValidator.validateUser, userController.createUser);

// existing user login
router.post('/login', userValidator.validateUser, userController.readUser);

// Get all existing reservations
router.get('/:userId/reservations', userValidator.validateUserId, userController.getUserReservations);

// Save new reservation
router.post('/:userId/reservations', userValidator.validateUserId, userValidator.validateReservation, userController.createUserReservation);

// Get one existing reservations
router.get('/:userId/reservations/:reservationId', userValidator.validateUserId, userValidator.validateReservationId, userController.getUserReservation);

// Update an existing reservation
router.put('/:userId/reservations/:reservationId', userValidator.validateUserId, userValidator.validateReservationId, userValidator.validateReservationUpdate, userController.updateUserReservation);

// Delete an existing reservation
router.delete('/:userId/reservations/:reservationId', userValidator.validateUserId, userValidator.validateReservationId, userController.deleteUserReservation);

// new guest reservation
router.post('/guest-reservation', userValidator.validateReservation, userController.createNewGuestReservation);

// existing guest login
router.post('/login/guest', userValidator.validateGuest, userController.readUser);

module.exports = router;