'use strict';

var utils = require('../utils/writer.js');
var Apirestaurant = require('../service/ApirestaurantService');

module.exports.restaurantIdGET = function restaurantIdGET (req, res, next, restaurantId) {
  Apirestaurant.restaurantIdGET(restaurantId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.restaurantIdScheduleGET = function restaurantIdScheduleGET (req, res, next, restaurantId) {
  Apirestaurant.restaurantIdScheduleGET(restaurantId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.rootGET = function rootGET (req, res, next) {
  Apirestaurant.rootGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.rootPOST = function rootPOST (req, res, next, body) {
  Apirestaurant.rootPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
