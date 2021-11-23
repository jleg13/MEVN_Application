'use strict';


/**
 * Save reservation as a guest user
 *
 * body Guestreservation_body Reservation object that needs to be saved to database
 * returns inline_response_201_2
 **/
exports.guest_reservationPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "msg" : "New reservation successfully stored",
  "data" : [ {
    "name" : "Bella Bella",
    "_id" : "1234"
  }, {
    "name" : "Bella Bella",
    "_id" : "1234"
  } ],
  "confirmation" : "success"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Login in as a guest user
 *
 * body Login_guest_body User object to login in
 * returns inline_response_200_3
 **/
exports.loginGuestPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "msg" : "successfully loged in user",
  "confirmation" : "success",
  "userId" : "user1234",
  "email" : "user@example.com"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Login in as a registered user
 *
 * body Login_body User object to login in
 * returns inline_response_200_3
 **/
exports.loginPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "msg" : "successfully loged in user",
  "confirmation" : "success",
  "userId" : "user1234",
  "email" : "user@example.com"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Add a new user
 *
 * body Signup_body User object to save to database
 * returns inline_response_201_1
 **/
exports.signupPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "msg" : "successfully created new user",
  "confirmation" : "success",
  "userId" : "user1234",
  "email" : "user@example.com"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 *
 * userId String userId to send notification
 * no response value expected for this operation
 **/
exports.userIdNotificationGET = function(userId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get all reservation of a user
 *
 * userId String userId to find reservations
 * returns inline_response_201
 **/
exports.userIdReservationsGET = function(userId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "msg" : "successfully created restaurant",
  "data" : [ {
    "name" : "Bella Bella",
    "_id" : "1234"
  }, {
    "name" : "Bella Bella",
    "_id" : "1234"
  } ],
  "confirmation" : "success"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Post a new reservation for a user
 *
 * body UserId_reservations_body Reservation object that needs to be saved to database
 * userId String userId to find reservations
 * returns inline_response_201_2
 **/
exports.userIdReservationsPOST = function(body,userId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "msg" : "New reservation successfully stored",
  "data" : [ {
    "name" : "Bella Bella",
    "_id" : "1234"
  }, {
    "name" : "Bella Bella",
    "_id" : "1234"
  } ],
  "confirmation" : "success"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Delete a reservation of a user
 *
 * userId String userId to find reservation
 * reservationId String reservationId to delete
 * returns inline_response_200_4
 **/
exports.userIdReservationsReservationIdDELETE = function(userId,reservationId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "msg" : "reservation successfully",
  "confirmation" : "success"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update a reservation of a user
 *
 * body Reservations_reservationId_body Reservation object that needs to be saved to database
 * userId String userId to find reservation
 * reservationId String reservationId to update
 * returns inline_response_201_2
 **/
exports.userIdReservationsReservationIdPUT = function(body,userId,reservationId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "msg" : "New reservation successfully stored",
  "data" : [ {
    "name" : "Bella Bella",
    "_id" : "1234"
  }, {
    "name" : "Bella Bella",
    "_id" : "1234"
  } ],
  "confirmation" : "success"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

