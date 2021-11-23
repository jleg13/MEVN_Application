'use strict';

var utils = require('../utils/writer.js');
var Apiuser = require('../service/ApiuserService');

module.exports.guest_reservationPOST = function guest_reservationPOST (req, res, next, body) {
  Apiuser.guest_reservationPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.loginGuestPOST = function loginGuestPOST (req, res, next, body) {
  Apiuser.loginGuestPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.loginPOST = function loginPOST (req, res, next, body) {
  Apiuser.loginPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.signupPOST = function signupPOST (req, res, next, body) {
  Apiuser.signupPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.userIdNotificationGET = function userIdNotificationGET (req, res, next, userId) {
  Apiuser.userIdNotificationGET(userId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.userIdReservationsGET = function userIdReservationsGET (req, res, next, userId) {
  Apiuser.userIdReservationsGET(userId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.userIdReservationsPOST = function userIdReservationsPOST (req, res, next, body, userId) {
  Apiuser.userIdReservationsPOST(body, userId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.userIdReservationsReservationIdDELETE = function userIdReservationsReservationIdDELETE (req, res, next, userId, reservationId) {
  Apiuser.userIdReservationsReservationIdDELETE(userId, reservationId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.userIdReservationsReservationIdPUT = function userIdReservationsReservationIdPUT (req, res, next, body, userId, reservationId) {
  Apiuser.userIdReservationsReservationIdPUT(body, userId, reservationId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
